#define GL_GLEXT_PROTOTYPES

#include <cstdio>
#include <cassert>
#include <GL/glut.h>
#include <vector>
#include <iostream>

using namespace std;

struct Context
{
  int width, height;
  GLuint vert_id, frag_id;
  GLuint prog_id, geom_id;
  GLint u_time_loc;
  float ca;
  float cb;
  float zoom;
  GLint u_ca;
  GLint u_cb;
  GLint u_zoom;


  enum { Position_loc, Color_loc };

  Context():
    width(640), height(480),
    vert_id(0), frag_id(0),
    prog_id(0), geom_id(0),
    u_time_loc(-1), ca(0.0f), cb(0.0f),
    zoom(1.0f),
    u_ca(-1), u_cb(-1),
    u_zoom(-1)
  {}

} g_context;

void init()
{
  printf("init()\n");

  glClearColor(.3f, .3f, .3f, 1.f);

  auto load_shader = [](GLenum type, const char *src) -> GLuint
  {
    const GLuint id = glCreateShader(type);
    assert(id);
    glShaderSource(id, 1, &src, nullptr);
    glCompileShader(id);
    GLint compiled = 0;
    glGetShaderiv(id, GL_COMPILE_STATUS, &compiled);
    if (!compiled) {
        GLint maxLength = 0;
      	glGetProgramiv(g_context.prog_id, GL_INFO_LOG_LENGTH, &maxLength);

      	//The maxLength includes the NULL character
      	std::vector<GLchar> infoLog(maxLength);
      	glGetShaderInfoLog(id, maxLength, &maxLength, &infoLog[0]);

        std::cout << "load_shader error: ";
        for (auto i = infoLog.begin(); i != infoLog.end(); ++i) {
          std::cout << (char)*i;
        }
        std::cout << std::endl;
    }
    assert(compiled);
    return id;
  };

  g_context.vert_id = load_shader(
    GL_VERTEX_SHADER,
    "attribute vec4 a_position;              \n"
    "attribute vec4 a_color;                 \n"
    "varying vec4 v_color;                   \n"
    "void main()                             \n"
    "{                                       \n"
    "    gl_Position = a_position;           \n"
    "    v_color = a_color;                  \n"
    "}                                       \n"
  );
  printf("- vertex shader loaded\n");

  g_context.frag_id = load_shader(
    GL_FRAGMENT_SHADER,
    "precision mediump float;                \n"
    "varying vec4 v_color;                   \n"
    "uniform float u_ca;\n"
    "uniform float u_cb;\n"
    "uniform float u_zoom;\n"
    "                                        \n"
    "vec3 mandelbrot(float ca, float cb) {   \n"
    "  float za = 0.0;\n"
    "  float zb = 0.0;\n"
    "  float zm = 0.0;\n"
    "  int k2 = 0;\n"
    "  for (int k = 0; k < 500; ++k) {        \n"
    "    float za2 = za * za - zb * zb + ca; \n"
    "    float zb2 = 2.0 * za * zb + cb;       \n"
    "    float zm2 = za2 * za2 + zb2 * zb2;  \n"
    "    if (zm2 > 4.0) { k2 = k; break; }\n"
    "    za = za2; zb = zb2; zm = zm2;\n"
    "  }                                     \n"
    "  float n = float(k2) + 1.0 - log(log(zm)/log(2.0));\n"
    "  return vec3(\n"
    "    (-cos(0.025*n)+1.0)/2.0,\n"
    "    (-cos(0.08*n)+1.0)/2.0,\n"
    "    (-cos(0.12*n)+1.0)/2.0\n"
    "  );\n"
    "}                                       \n"
    "                                        \n"
    "void main()                             \n"
    "{                                       \n"
    "  float ca = -2.0 / u_zoom + gl_FragCoord.x * 4.0 / 640.0 / u_zoom + u_ca;\n"
    "  float cb = -2.0 / u_zoom * 480.0 / 640.0 + gl_FragCoord.y * 4.0 / 640.0 / u_zoom + u_cb;\n"
    "  gl_FragColor = vec4(mandelbrot(ca,cb),1.0);             \n"
    "}                                       \n"
  );
  printf("- fragment shader loaded\n");

  g_context.prog_id = glCreateProgram();
  assert(g_context.prog_id);
  glAttachShader(g_context.prog_id, g_context.vert_id);
  glAttachShader(g_context.prog_id, g_context.frag_id);
  glBindAttribLocation(g_context.prog_id, Context::Position_loc, "a_position");
  glBindAttribLocation(g_context.prog_id, Context::Color_loc, "a_color");
  glLinkProgram(g_context.prog_id);
  GLint linked = 0;
  glGetProgramiv(g_context.prog_id, GL_LINK_STATUS, &linked);
  assert(linked);
  glUseProgram(g_context.prog_id);
  printf("- shader program linked & bound\n");

  g_context.u_ca = glGetUniformLocation(g_context.prog_id, "u_ca");
  g_context.u_cb = glGetUniformLocation(g_context.prog_id, "u_cb");
  g_context.u_zoom = glGetUniformLocation(g_context.prog_id, "u_zoom");

  struct Vertex { float x, y, z; unsigned char r, g, b, a; };
  const Vertex vtcs[] {
    {  1.0f,  1.0f, 0.0f,   255, 0, 0, 255 },
    { -1.0f, -1.0f, 0.0f,   0, 255, 0, 255 },
    {  1.0f, -1.0f, 0.0f,   0, 0, 255, 255 },
    {  1.0f,  1.0f, 0.0f,  0, 0, 0, 255 },
    { -1.0f,  1.0f, 0.0f,  0, 0, 0, 255 },
    { -1.0f, -1.0f, 0.0f,  0, 0, 0, 255 }
  };
  glGenBuffers(1, &g_context.geom_id);
  assert(g_context.geom_id);
  glBindBuffer(GL_ARRAY_BUFFER, g_context.geom_id);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vtcs), vtcs, GL_STATIC_DRAW);
  auto offset = [](size_t value) -> const GLvoid * { return reinterpret_cast<const GLvoid *>(value); };
  glVertexAttribPointer(Context::Position_loc, 3, GL_FLOAT, GL_FALSE, sizeof(Vertex), offset(0));
  glEnableVertexAttribArray(Context::Position_loc);
  glVertexAttribPointer(Context::Color_loc, 4, GL_UNSIGNED_BYTE, GL_TRUE, sizeof(Vertex), offset(3 * sizeof(float)));
  glEnableVertexAttribArray(Context::Color_loc);
  printf("- geometry created & bound\n");
}

void resize(int width, int height)
{
  printf("resize(%d, %d)\n", width, height);

  g_context.width = width;
  g_context.height = height;
}

void draw()
{
  glUniform1f(g_context.u_ca, g_context.ca);
  glUniform1f(g_context.u_cb, g_context.cb);
  glUniform1f(g_context.u_zoom, g_context.zoom);

  glViewport(0, 0, g_context.width, g_context.height);
  glClear(GL_COLOR_BUFFER_BIT);

  glDrawArrays(GL_TRIANGLES, 0, 6);

  glutSwapBuffers();
}

void update()
{
  glutPostRedisplay();
}

void processSpecialKeys(int key, int x, int y) {
  bool redraw = false;
  switch (key) {
    case GLUT_KEY_UP:
      g_context.cb += 0.1f / g_context.zoom;
      redraw = true;
      break;
    case GLUT_KEY_DOWN:
      g_context.cb -= 0.1f / g_context.zoom;
      redraw = true;
      break;
    case GLUT_KEY_LEFT:
      g_context.ca -= 0.1f / g_context.zoom;
      redraw = true;
      break;
    case GLUT_KEY_RIGHT:
      g_context.ca += 0.1f / g_context.zoom;
      redraw = true;
      break;
    case GLUT_KEY_F1:
      g_context.zoom *= 1.1f;
      redraw = true;
      break;
    case GLUT_KEY_F2:
      g_context.zoom /= 1.1f;
      redraw = true;
      break;
    default:
      break;
  }
  if (redraw) {
    draw();
  }
}

int main(int argc, char *argv[])
{
  printf("main()\n");

  glutInit(&argc, argv);
  glutInitWindowSize(g_context.width, g_context.height);
  glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);

  glutCreateWindow("Hello Triangle! | 4FipS.com");

  glutReshapeFunc(resize);
  glutDisplayFunc(draw);
  glutIdleFunc(update);
  glutSpecialFunc(processSpecialKeys);


  init();

  glutMainLoop();

  return 0;
}
