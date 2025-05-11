import{l as k,onCleanup as I,createSignal as R,onMount as q,u as B,t as H,createComputed as f,mapArray as K,on as b,untrack as z,createMemo as _,n as G}from"./lib-BARcblKG.js";function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Y(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function X(e,t){if(e==null)return{};var n=Y(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Z(e,t){return ee(e)||te(e,t)||ne(e,t)||re()}function ee(e){if(Array.isArray(e))return e}function te(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),s;!(r=(s=i.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(c){o=!0,a=c}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}}function ne(e,t){if(e){if(typeof e=="string")return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,a){return a(o)},r)}}function v(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return t.apply(n,[].concat(o,s))}}}function C(e){return{}.toString.call(e).includes("Object")}function ie(e){return!Object.keys(e).length}function A(e){return typeof e=="function"}function ce(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function se(e,t){return C(t)||l("changeType"),Object.keys(t).some(function(n){return!ce(e,n)})&&l("changeField"),t}function pe(e){A(e)||l("selectorType")}function le(e){A(e)||C(e)||l("handlerType"),C(e)&&Object.values(e).some(function(t){return!A(t)})&&l("handlersType")}function ue(e){e||l("initialIsRequired"),C(e)||l("initialType"),ie(e)&&l("initialContent")}function me(e,t){throw new Error(e[t]||e.default)}var fe={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},l=v(me)(fe),E={changes:se,selector:pe,handler:le,initial:ue};function de(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};E.initial(e),E.handler(t);var n={current:e},r=v(he)(n,t),o=v(ge)(n),a=v(E.changes)(e),i=v(ye)(n);function s(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return E.selector(p),p(n.current)}function c(p){ae(r,o,a,i)(p)}return[s,c]}function ye(e,t){return A(t)?t(e.current):t}function ge(e,t){return e.current=V(V({},e.current),t),t}function he(e,t,n){return A(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var ve={create:de},Se={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function be(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return t.apply(n,[].concat(o,s))}}}function Ae(e){return{}.toString.call(e).includes("Object")}function Te(e){return e||W("configIsRequired"),Ae(e)||W("configType"),e.urls?(Ee(),{paths:{vs:e.urls.monacoBase}}):e}function Ee(){console.warn($.deprecation)}function je(e,t){throw new Error(e[t]||e.default)}var $={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},W=be(je)($),Ce={config:Te},we=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(a,i){return i(a)},o)}};function N(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],N(e[n],t[n]))}),F(F({},e),t)}var xe={type:"cancelation",msg:"operation is manually canceled"};function x(e){var t=!1,n=new Promise(function(r,o){e.then(function(a){return t?o(xe):r(a)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var Oe=ve.create({config:Se,isInitialized:!1,resolve:null,reject:null,monaco:null}),L=Z(Oe,2),T=L[0],w=L[1];function Ie(e){var t=Ce.config(e),n=t.monaco,r=X(t,["monaco"]);w(function(o){return{config:N(o.config,r),monaco:n}})}function Re(){var e=T(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(w({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),x(O);if(window.monaco&&window.monaco.editor)return J(window.monaco),e.resolve(window.monaco),x(O);we(Pe,De)(Me)}return x(O)}function Pe(e){return document.body.appendChild(e)}function Fe(e){var t=document.createElement("script");return e&&(t.src=e),t}function De(e){var t=T(function(r){var o=r.config,a=r.reject;return{config:o,reject:a}}),n=Fe("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Me(){var e=T(function(n){var r=n.config,o=n.resolve,a=n.reject;return{config:r,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){J(n),e.resolve(n)},function(n){e.reject(n)})}function J(e){T().monaco||w({monaco:e})}function Ve(){return T(function(e){var t=e.monaco;return t})}var O=new Promise(function(e,t){return w({resolve:e,reject:t})}),We={config:Ie,init:Re,__getMonacoInstance:Ve};const $e=`import { SetStoreFunction, Store } from 'solid-js/store';
import { Result } from '../kitty-demo/Result';
import { TypeSchema } from '../TypeSchema';
import { Accessor } from 'solid-js';
export interface IsEcsComponentType {
    readonly typeName: string;
}
export interface IsEcsComponent {
    readonly type: IsEcsComponentType;
}
export declare class EcsComponentType<S extends object> implements IsEcsComponentType {
    readonly typeName: string;
    readonly typeSchema: TypeSchema<S>;
    constructor(params: {
        typeName: string;
        typeSchema: TypeSchema<S>;
    });
    create(s: S): EcsComponent<S>;
    createJsonProjectionV2(json: any, changeJson: (callback: (json: any) => void) => void): Result<EcsComponent<S>>;
    createJsonProjection(json: Accessor<any>, setJson: (x: any) => void): Accessor<Result<EcsComponent<S>>>;
}
export declare class EcsComponent<S extends object> implements IsEcsComponent {
    readonly type: EcsComponentType<S>;
    state: Store<S>;
    setState: SetStoreFunction<S>;
    constructor(params: {
        type: EcsComponentType<S>;
        state: Store<S>;
        setState: SetStoreFunction<S>;
    });
}
`,Ne=`import { IsEcsComponentType } from './EcsComponent';
export declare class EcsRegistry {
    componentTypes: IsEcsComponentType[];
    componentTypeMap: Map<string, IsEcsComponentType>;
    constructor(componentTypes: IsEcsComponentType[]);
}
`,Le=`import { EcsComponent, EcsComponentType, IsEcsComponent, IsEcsComponentType } from './EcsComponent';
import { Result } from '../kitty-demo/Result';
import { EcsRegistry } from './EcsRegistry';
import { IEcsWorld } from './IEcsWorld';
export declare class EcsWorld implements IEcsWorld {
    private entityMap;
    private componentTypeEntitiesMap;
    private componentTypeEntitiesMap_;
    constructor();
    entities(): string[];
    entitiesWithComponentType(componentType: IsEcsComponentType): string[];
    createEntityWithId(entityId: string, components: IsEcsComponent[]): void;
    createEntity(components: IsEcsComponent[]): string;
    destroyEntity(entityId: string): void;
    getComponent<A extends object>(entityId: string, componentType: EcsComponentType<A>): EcsComponent<A> | undefined;
    getComponents(entityId: string): IsEcsComponent[];
    setComponent(entityId: string, component: IsEcsComponent): void;
    setComponents(entityId: string, components: IsEcsComponent[]): void;
    unsetComponent(entityId: string, componentType: IsEcsComponentType): void;
    unsetComponents(entityId: string, componentTypes: IsEcsComponentType[]): void;
    toJson(): any;
    static fromJson(registry: EcsRegistry, x: any): Result<EcsWorld>;
}
`,Je=`import { Accessor } from 'solid-js';
import { EcsWorld } from './lib';
import { AutomergeVfsFolder, AutomergeVirtualFileSystem } from 'solid-fs-automerge';
import { AsyncResult } from 'control-flow-as-value';
import { TextureAtlasState } from './level-builder/components/TextureAtlasComponent';
import { FrameState } from './level-builder/components/FrameComponent';
export * from './ecs/EcsComponent';
export * from './ecs/EcsRegistry';
export * from './ecs/EcsWorld';
export * from './TypeSchema';
export { PixiRenderSystem, } from './systems/PixiRenderSystem';
export * from 'solid-js';
export declare const REQUIRED_FOR_KEEPING_MANUAL_CHUNKS: () => undefined;
export declare function launch(): void;
export declare const createAutomergeVfs: () => Accessor<{
    type: "Pending";
} | {
    type: "Failed";
    message: string;
} | {
    type: "Success";
    value: AutomergeVirtualFileSystem;
}>;
export declare const libUrl: string;
export declare const world: EcsWorld;
export { type AnimatedState, animatedComponentType } from './components/AnimatedComponent';
export { type LevelRefState, levelRefComponentType } from './components/LevelRefComponent';
export { type SpriteState, spriteComponentType } from './components/SpriteComponent';
export { type Transform2DState, transform2DComponentType } from './components/Transform2DComponent';
export { registry } from './components/registry';
export { Complex } from './math/Complex';
export { Transform2D } from './math/Transform2D';
export { Vec2 } from './math/Vec2';
export declare function fixRelativeUrl(relativeUrl: string): string;
export declare const createGetRootFolder: () => Accessor<AsyncResult<AutomergeVfsFolder>>;
export declare const createGetLevelsFolder: () => Accessor<AsyncResult<AutomergeVfsFolder>>;
export declare const createTextureAtlasWithImageAndFramesList: () => Accessor<AsyncResult<{
    textureAtlasFilename: Accessor<string>;
    textureAtlas: TextureAtlasState;
    image: HTMLImageElement;
    frames: {
        frameId: string;
        frame: FrameState;
    }[];
}[]>>;
`,Ue=`import { Result } from './kitty-demo/Result';
import { Vec2 } from './math/Vec2';
export type TypeSchema<A> = undefined extends A ? {
    type: "MaybeUndefined";
    element: TypeSchema<NonNullable<A>>;
} : null extends A ? {
    type: "MaybeNull";
    element: TypeSchema<NonNullable<A>>;
} : A extends boolean ? "Boolean" : A extends number ? "Number" : A extends string ? "String" : A extends unknown[] ? {
    type: "Array";
    element: TypeSchema<A[0]>;
} : A extends {
    type: string;
    value: unknown;
} ? {
    type: "Union";
    parts: {
        [K in A["type"]]: TypeSchema<Extract<A, {
            type: K;
        }>["value"]>;
    };
} : A extends object ? {
    type: "Object";
    properties: {
        [K in keyof A]: TypeSchema<A[K]>;
    };
} : {
    type: "Recursive";
    typeSchema: () => TypeSchema<A>;
} | {
    type: "Invariant";
    fn1: (a: unknown) => A;
    fn2: (a: A) => unknown;
    typeSchema: TypeSchema<unknown>;
} | {
    type: "WithDefault";
    default_: A;
    typeSchema: TypeSchema<A>;
};
export declare function makeInvariantTypeSchema<A, B>(fn1: (a: B) => A, fn2: (a: A) => B, typeSchema: TypeSchema<B>): TypeSchema<A>;
export declare function makeWithDefaultTypeSchema<A>(default_: A, typeSchema: TypeSchema<A>): TypeSchema<A>;
export declare const vec2TypeSchema: TypeSchema<Vec2>;
export declare function loadFromJsonViaTypeSchema<A>(typeSchema: TypeSchema<A>, x: any): Result<A>;
export declare function makeDefaultViaTypeSchema<A>(typeSchema: TypeSchema<A>): A;
export declare function saveToJsonViaTypeSchema<A>(typeSchema: TypeSchema<A>, x: A): any;
export declare function equalsViaTypeSchema<A>(typeSchema: TypeSchema<A>, a: A, b: A): boolean;
export declare function createJsonProjectionViaTypeSchemaV2<A>(typeSchema: TypeSchema<A>, json: any, changeJson: (callback: (json: any) => void) => void): Result<A>;
export declare function createJsonProjectionViaTypeSchema<A>(typeSchema: TypeSchema<A>, json: any, changeJson: (callback: (json: any) => void) => void): Result<A>;
`;var ke=H("<div>");const qe={"prelude/ecs/EcsComponent.d.ts":$e,"prelude/ecs/EcsRegistry.d.ts":Ne,"prelude/ecs/EcsWorld.d.ts":Le,"prelude/lib.d.ts":Je,"prelude/TypeSchema.d.ts":Ue};let S=await We.init();const y=navigator&&/android/i.test(navigator.userAgent);let j=new k;function He(e){for(let[n,r]of Object.entries(qe)){let o=S.languages.typescript.typescriptDefaults.addExtraLib(r,n);I(()=>o.dispose())}S.languages.typescript.typescriptDefaults.setCompilerOptions({paths:{prelude:["./prelude/lib.js"]}});let t=(n,r,o)=>{f(K(()=>o.contents,a=>f(()=>{switch(a.type){case"File":{let i=a.id,s=n+a.name,c=r+a.name,p=o.openFileById(i);f(b(p,u=>{if(u.type!="Success")return;let m=u.value,g=S.editor.createModel(z(()=>m.doc.source),"typescript",S.Uri.parse(c));f(b(()=>m.doc.source,d=>{g.setValue(d)},{defer:!0}));let h={model:g,file:m};j.set(s,h),I(()=>{g.dispose(),j.get(s)===h&&j.delete(s)})}));break}case"Folder":{let i=a.id,s=o.openFolderById(i);f(b(s,c=>{if(c.type!="Success")return;let p=c.value;t(n+a.name+"/",r+a.name+"/",p)}));break}}})))};t("","file:///",e)}const Ke=e=>{let[t,n]=R(),[r,o]=R();return q(()=>{let a=t();if(a==null)return;let i=S.editor.create(a,{language:"typescript",quickSuggestions:{other:!y,comments:!y,strings:!y},automaticLayout:!0,acceptSuggestionOnCommitCharacter:!y,acceptSuggestionOnEnter:y?"off":"on",accessibilitySupport:y?"off":"on",theme:"vs-dark"});o(i);let s=_(()=>{if(e.path!=null)return j.get(e.path)});f(b(s,c=>{if(c==null)return;let p=c.model,u=c.file;i.setModel(p);let m=!1,g=()=>{if(m)return;let d=r()?.getModel()?.getValue();d!=null&&u.docHandle.change(U=>{G(U,["source"],d)})},h=p?.onDidChangeContent(g);I(()=>{h?.dispose()}),f(b(()=>u.doc.source,d=>{m=!0;try{p.setValue(d)}finally{m=!1}}))}))}),(()=>{var a=ke(),i=n;return typeof i=="function"?B(i,a):n=a,a.style.setProperty("width","100%"),a.style.setProperty("height","100%"),a.style.setProperty("overflow","hidden"),a})()};export{Ke as default,He as mountAutomergeFolderToMonacoVfsWhileMounted};
