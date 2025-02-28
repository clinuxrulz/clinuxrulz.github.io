#include <SDL/SDL.h>
#include <SDL/SDL_surface.h>

#include <iostream>
#include <memory>
#include <stdlib.h>
#include <emscripten.h>

using namespace std;

struct DoNotDelete {
  void operator()(void *ptr) {}
};

struct Void {};

typedef unique_ptr<Void,DoNotDelete> RealWorld;

template <typename SetPixel, typename S>
S mandelbrot(S state0, SetPixel setPixel, float x1, float y1, float stepX, float stepY, int resX, int resY) {
  S state = move(state0);
  float y = y1;
  for (int i = 0; i < resY; ++i, y += stepY) {
    float x = x1;
    for (int j = 0; j < resX; ++j, x += stepX) {
      float za = 0;
      float zb = 0;
      float zm = 0;
      float ca = x;
      float cb = y;
      int k = 0;
      while (zm < 4.0f) {
        float za2 = za * za - zb * zb + ca;
        float zb2 = 2 * za * zb + cb;
        float zm2 = za2 * za2 + zb2 * zb2;
        ++k;
        if (k > 255) {
          k = 0;
          break;
        }
        za = za2;
        zb = zb2;
        zm = zm2;
      }
      state = move(setPixel(move(state), j, i, k));
    }
  }
  return state;
}

template <typename SetPixel>
RealWorld interpreter(RealWorld realWorld, SetPixel setPixel) {
  return move(mandelbrot(
    move(realWorld),
    setPixel,
    -2.0f,
    -2.0f * 480.0 / 640.0,
    4.0f / 640.0,
    4.0f / 640.0,
    640,
    480
  ));
}

void mainLoop(void* unused) {
  SDL_Event event;
  if (SDL_PollEvent(&event) && event.type == SDL_QUIT)
    SDL_Quit();
}

int main(int argc, char** argv) {
  if (SDL_Init(SDL_INIT_VIDEO) != 0) {
    cout << "Unable to initialize SDL " << SDL_GetError() << endl;
    return 1;
  }
  atexit(SDL_Quit);

  SDL_Window* window = SDL_CreateWindow(
    "Mandelbrot",
    SDL_WINDOWPOS_UNDEFINED,
    SDL_WINDOWPOS_UNDEFINED,
    640,
    480,
    SDL_WINDOW_OPENGL
  );
  if (window == nullptr) {
    cout << "SDL_CreateWindow Error: " << SDL_GetError() << endl;
    SDL_Quit();
    return 1;
  }

  SDL_Renderer *renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);
  if (renderer == nullptr){
  	SDL_DestroyWindow(window);
  	std::cout << "SDL_CreateRenderer Error: " << SDL_GetError() << std::endl;
  	SDL_Quit();
  	return 1;
  }

  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 0);
  SDL_RenderClear(renderer);
  SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);
  SDL_RenderDrawPoint(renderer, 50, 50);

  Void realWorldState;
  RealWorld realWorld = unique_ptr<Void,DoNotDelete>(&realWorldState);

  RealWorld realWorld2 = interpreter(
    move(realWorld),
    [renderer](RealWorld realWorld, int x, int y, int c) {
      SDL_SetRenderDrawColor(renderer, (c*5) & 0xFF, 0, 0, 255);
      SDL_RenderDrawPoint(renderer, x, y);
      return realWorld;
    }
  );

  emscripten_set_main_loop_arg(mainLoop, nullptr, 60, 1);

  //SDL_DestroyRenderer(renderer);
  //SDL_DestroyWindow(window);
  //SDL_Quit();
  return 0;
}
