(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
             ############                  #
            ############                  ###
                  #####                  #####
                #####      ####################
              #####       ######################
            #####                     ###########
          #####         ######################
        #####          ####################
      #####                        #####
     ############                 ###
    ############                 */

//. # sanctuary-type-classes
//.
//. The [Fantasy Land Specification][FL] "specifies interoperability of common
//. algebraic structures" by defining a number of type classes. For each type
//. class, it states laws which every member of a type must obey in order for
//. the type to be a member of the type class. In order for the Maybe type to
//. be considered a [Functor][], for example, every `Maybe a` value must have
//. a `fantasy-land/map` method which obeys the identity and composition laws.
//.
//. This project provides:
//.
//.   - [`TypeClass`](#TypeClass), a function for defining type classes;
//.   - one `TypeClass` value for each Fantasy Land type class;
//.   - lawful Fantasy Land methods for JavaScript's built-in types;
//.   - one function for each Fantasy Land method; and
//.   - several functions derived from these functions.
//.
//. ## Type-class hierarchy
//.
/* eslint-disable max-len */
//. <pre>
//.  Setoid   Semigroupoid  Semigroup   Foldable        Functor      Contravariant  Filterable
//. (equals)    (compose)    (concat)   (reduce)         (map)        (contramap)    (filter)
//.     |           |           |           \         / | | | | \
//.     |           |           |            \       /  | | | |  \
//.     |           |           |             \     /   | | | |   \
//.     |           |           |              \   /    | | | |    \
//.     |           |           |               \ /     | | | |     \
//.    Ord      Category     Monoid         Traversable | | | |      \
//.   (lte)       (id)       (empty)        (traverse)  / | | \       \
//.                             |                      /  | |  \       \
//.                             |                     /   / \   \       \
//.                             |             Profunctor /   \ Bifunctor \
//.                             |              (promap) /     \ (bimap)   \
//.                             |                      /       \           \
//.                           Group                   /         \           \
//.                          (invert)               Alt        Apply      Extend
//.                                                (alt)        (ap)     (extend)
//.                                                 /           / \           \
//.                                                /           /   \           \
//.                                               /           /     \           \
//.                                              /           /       \           \
//.                                             /           /         \           \
//.                                           Plus    Applicative    Chain      Comonad
//.                                          (zero)       (of)      (chain)    (extract)
//.                                             \         / \         / \
//.                                              \       /   \       /   \
//.                                               \     /     \     /     \
//.                                                \   /       \   /       \
//.                                                 \ /         \ /         \
//.                                             Alternative    Monad     ChainRec
//.                                                                     (chainRec)
//. </pre>
/* eslint-enable max-len */
//.
//. ## API

(function(f) {

  'use strict';

  /* istanbul ignore else */
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = f(require('sanctuary-type-identifiers'));
  } else if (typeof define === 'function' && define.amd != null) {
    define(['sanctuary-type-identifiers'], f);
  } else {
    self.sanctuaryTypeClasses = f(self.sanctuaryTypeIdentifiers);
  }

}(function(type) {

  'use strict';

  /* istanbul ignore if */
  if (typeof __doctest !== 'undefined') {
    /* global __doctest:false */
    /* eslint-disable no-unused-vars */
    var Identity = __doctest.require('./test/Identity');
    var List = __doctest.require('./test/List');
    var Maybe = __doctest.require('./test/Maybe');
    var Sum = __doctest.require('./test/Sum');
    var Tuple = __doctest.require('./test/Tuple');

    var Nil = List.Nil, Cons = List.Cons;
    var Nothing = Maybe.Nothing, Just = Maybe.Just;
    /* eslint-enable no-unused-vars */
  }

  //  concat_ :: Array a -> Array a -> Array a
  function concat_(xs) {
    return function(ys) {
      return xs.concat(ys);
    };
  }

  //  constant :: a -> b -> a
  function constant(x) {
    return function(y) {
      return x;
    };
  }

  //  forEachKey :: (StrMap a, StrMap a ~> String -> Undefined) -> Undefined
  function forEachKey(strMap, f) {
    Object.keys(strMap).forEach(f, strMap);
  }

  //  has :: (String, Object) -> Boolean
  function has(k, o) {
    return Object.prototype.hasOwnProperty.call(o, k);
  }

  //  identity :: a -> a
  function identity(x) { return x; }

  //  pair :: a -> b -> Array2 a b
  function pair(x) {
    return function(y) {
      return [x, y];
    };
  }

  //  sameType :: (a, b) -> Boolean
  function sameType(x, y) {
    return typeof x === typeof y && type(x) === type(y);
  }

  //  thrush :: a -> (a -> b) -> b
  function thrush(x) {
    return function(f) {
      return f(x);
    };
  }

  //  type Iteration a = { value :: a, done :: Boolean }

  //  iterationNext :: a -> Iteration a
  function iterationNext(x) { return {value: x, done: false}; }

  //  iterationDone :: a -> Iteration a
  function iterationDone(x) { return {value: x, done: true}; }

  //# TypeClass :: (String, String, Array TypeClass, a -> Boolean) -> TypeClass
  //.
  //. The arguments are:
  //.
  //.   - the name of the type class, prefixed by its npm package name;
  //.   - the documentation URL of the type class;
  //.   - an array of dependencies; and
  //.   - a predicate which accepts any JavaScript value and returns `true`
  //.     if the value satisfies the requirements of the type class; `false`
  //.     otherwise.
  //.
  //. Example:
  //.
  //. ```javascript
  //. //    hasMethod :: String -> a -> Boolean
  //. const hasMethod = name => x => x != null && typeof x[name] == 'function';
  //.
  //. //    Foo :: TypeClass
  //. const Foo = Z.TypeClass(
  //.   'my-package/Foo',
  //.   'http://example.com/my-package#Foo',
  //.   [],
  //.   hasMethod('foo')
  //. );
  //.
  //. //    Bar :: TypeClass
  //. const Bar = Z.TypeClass(
  //.   'my-package/Bar',
  //.   'http://example.com/my-package#Bar',
  //.   [Foo],
  //.   hasMethod('bar')
  //. );
  //. ```
  //.
  //. Types whose values have a `foo` method are members of the Foo type class.
  //. Members of the Foo type class whose values have a `bar` method are also
  //. members of the Bar type class.
  //.
  //. Each `TypeClass` value has a `test` field: a function which accepts
  //. any JavaScript value and returns `true` if the value satisfies the
  //. type class's predicate and the predicates of all the type class's
  //. dependencies; `false` otherwise.
  //.
  //. `TypeClass` values may be used with [sanctuary-def][type-classes]
  //. to define parametrically polymorphic functions which verify their
  //. type-class constraints at run time.
  function TypeClass(name, url, dependencies, test) {
    if (!(this instanceof TypeClass)) {
      return new TypeClass(name, url, dependencies, test);
    }
    this.name = name;
    this.url = url;
    this.test = function(x) {
      return dependencies.every(function(d) { return d.test(x); }) && test(x);
    };
  }

  TypeClass['@@type'] = 'sanctuary-type-classes/TypeClass';

  //  data Location = Constructor | Value

  //  Constructor :: Location
  var Constructor = 'Constructor';

  //  Value :: Location
  var Value = 'Value';

  //  _funcPath :: (Boolean, Array String, a) -> Nullable Function
  function _funcPath(allowInheritedProps, path, _x) {
    var x = _x;
    for (var idx = 0; idx < path.length; idx += 1) {
      var k = path[idx];
      if (x == null || !(allowInheritedProps || has(k, x))) return null;
      x = x[k];
    }
    return typeof x === 'function' ? x : null;
  }

  //  funcPath :: (Array String, a) -> Nullable Function
  function funcPath(path, x) {
    return _funcPath(true, path, x);
  }

  //  implPath :: Array String -> Nullable Function
  function implPath(path) {
    return _funcPath(false, path, implementations);
  }

  //  functionName :: Function -> String
  var functionName = has('name', function f() {}) ?
    function functionName(f) { return f.name; } :
    /* istanbul ignore next */
    function functionName(f) {
      var match = /function (\w*)/.exec(f);
      return match == null ? '' : match[1];
    };

  //  $ :: (String, Array TypeClass, StrMap (Array Location)) -> TypeClass
  function $(_name, dependencies, requirements) {
    function getBoundMethod(_name) {
      var name = 'fantasy-land/' + _name;
      return requirements[_name] === Constructor ?
        function(typeRep) {
          var f = funcPath([name], typeRep);
          return f == null && typeof typeRep === 'function' ?
            implPath([functionName(typeRep), name]) :
            f;
        } :
        function(x) {
          var isPrototype = x != null &&
                            x.constructor != null &&
                            x.constructor.prototype === x;
          var m = null;
          if (!isPrototype) m = funcPath([name], x);
          if (m == null)    m = implPath([type(x), 'prototype', name]);
          return m && m.bind(x);
        };
    }

    var version = '9.0.0';  // updated programmatically
    var keys = Object.keys(requirements);

    var typeClass = TypeClass(
      'sanctuary-type-classes/' + _name,
      'https://github.com/sanctuary-js/sanctuary-type-classes/tree/v' + version
        + '#' + _name,
      dependencies,
      function(x) {
        return keys.every(function(_name) {
          var arg = requirements[_name] === Constructor ? x.constructor : x;
          return getBoundMethod(_name)(arg) != null;
        });
      }
    );

    typeClass.methods = keys.reduce(function(methods, _name) {
      methods[_name] = getBoundMethod(_name);
      return methods;
    }, {});

    return typeClass;
  }

  //# Setoid :: TypeClass
  //.
  //. `TypeClass` value for [Setoid][].
  //.
  //. ```javascript
  //. > Setoid.test(null)
  //. true
  //. ```
  var Setoid = $('Setoid', [], {equals: Value});

  //# Ord :: TypeClass
  //.
  //. `TypeClass` value for [Ord][].
  //.
  //. ```javascript
  //. > Ord.test(0)
  //. true
  //.
  //. > Ord.test(Math.sqrt)
  //. false
  //. ```
  var Ord = $('Ord', [Setoid], {lte: Value});

  //# Semigroupoid :: TypeClass
  //.
  //. `TypeClass` value for [Semigroupoid][].
  //.
  //. ```javascript
  //. > Semigroupoid.test(Math.sqrt)
  //. true
  //.
  //. > Semigroupoid.test(0)
  //. false
  //. ```
  var Semigroupoid = $('Semigroupoid', [], {compose: Value});

  //# Category :: TypeClass
  //.
  //. `TypeClass` value for [Category][].
  //.
  //. ```javascript
  //. > Category.test(Math.sqrt)
  //. true
  //.
  //. > Category.test(0)
  //. false
  //. ```
  var Category = $('Category', [Semigroupoid], {id: Constructor});

  //# Semigroup :: TypeClass
  //.
  //. `TypeClass` value for [Semigroup][].
  //.
  //. ```javascript
  //. > Semigroup.test('')
  //. true
  //.
  //. > Semigroup.test(0)
  //. false
  //. ```
  var Semigroup = $('Semigroup', [], {concat: Value});

  //# Monoid :: TypeClass
  //.
  //. `TypeClass` value for [Monoid][].
  //.
  //. ```javascript
  //. > Monoid.test('')
  //. true
  //.
  //. > Monoid.test(0)
  //. false
  //. ```
  var Monoid = $('Monoid', [Semigroup], {empty: Constructor});

  //# Group :: TypeClass
  //.
  //. `TypeClass` value for [Group][].
  //.
  //. ```javascript
  //. > Group.test(Sum(0))
  //. true
  //.
  //. > Group.test('')
  //. false
  //. ```
  var Group = $('Group', [Monoid], {invert: Value});

  //# Filterable :: TypeClass
  //.
  //. `TypeClass` value for [Filterable][].
  //.
  //. ```javascript
  //. > Filterable.test({})
  //. true
  //.
  //. > Filterable.test('')
  //. false
  //. ```
  var Filterable = $('Filterable', [], {filter: Value});

  //# Functor :: TypeClass
  //.
  //. `TypeClass` value for [Functor][].
  //.
  //. ```javascript
  //. > Functor.test([])
  //. true
  //.
  //. > Functor.test('')
  //. false
  //. ```
  var Functor = $('Functor', [], {map: Value});

  //# Bifunctor :: TypeClass
  //.
  //. `TypeClass` value for [Bifunctor][].
  //.
  //. ```javascript
  //. > Bifunctor.test(Tuple('foo', 64))
  //. true
  //.
  //. > Bifunctor.test([])
  //. false
  //. ```
  var Bifunctor = $('Bifunctor', [Functor], {bimap: Value});

  //# Profunctor :: TypeClass
  //.
  //. `TypeClass` value for [Profunctor][].
  //.
  //. ```javascript
  //. > Profunctor.test(Math.sqrt)
  //. true
  //.
  //. > Profunctor.test([])
  //. false
  //. ```
  var Profunctor = $('Profunctor', [Functor], {promap: Value});

  //# Apply :: TypeClass
  //.
  //. `TypeClass` value for [Apply][].
  //.
  //. ```javascript
  //. > Apply.test([])
  //. true
  //.
  //. > Apply.test('')
  //. false
  //. ```
  var Apply = $('Apply', [Functor], {ap: Value});

  //# Applicative :: TypeClass
  //.
  //. `TypeClass` value for [Applicative][].
  //.
  //. ```javascript
  //. > Applicative.test([])
  //. true
  //.
  //. > Applicative.test({})
  //. false
  //. ```
  var Applicative = $('Applicative', [Apply], {of: Constructor});

  //# Chain :: TypeClass
  //.
  //. `TypeClass` value for [Chain][].
  //.
  //. ```javascript
  //. > Chain.test([])
  //. true
  //.
  //. > Chain.test({})
  //. false
  //. ```
  var Chain = $('Chain', [Apply], {chain: Value});

  //# ChainRec :: TypeClass
  //.
  //. `TypeClass` value for [ChainRec][].
  //.
  //. ```javascript
  //. > ChainRec.test([])
  //. true
  //.
  //. > ChainRec.test({})
  //. false
  //. ```
  var ChainRec = $('ChainRec', [Chain], {chainRec: Constructor});

  //# Monad :: TypeClass
  //.
  //. `TypeClass` value for [Monad][].
  //.
  //. ```javascript
  //. > Monad.test([])
  //. true
  //.
  //. > Monad.test({})
  //. false
  //. ```
  var Monad = $('Monad', [Applicative, Chain], {});

  //# Alt :: TypeClass
  //.
  //. `TypeClass` value for [Alt][].
  //.
  //. ```javascript
  //. > Alt.test({})
  //. true
  //.
  //. > Alt.test('')
  //. false
  //. ```
  var Alt = $('Alt', [Functor], {alt: Value});

  //# Plus :: TypeClass
  //.
  //. `TypeClass` value for [Plus][].
  //.
  //. ```javascript
  //. > Plus.test({})
  //. true
  //.
  //. > Plus.test('')
  //. false
  //. ```
  var Plus = $('Plus', [Alt], {zero: Constructor});

  //# Alternative :: TypeClass
  //.
  //. `TypeClass` value for [Alternative][].
  //.
  //. ```javascript
  //. > Alternative.test([])
  //. true
  //.
  //. > Alternative.test({})
  //. false
  //. ```
  var Alternative = $('Alternative', [Applicative, Plus], {});

  //# Foldable :: TypeClass
  //.
  //. `TypeClass` value for [Foldable][].
  //.
  //. ```javascript
  //. > Foldable.test({})
  //. true
  //.
  //. > Foldable.test('')
  //. false
  //. ```
  var Foldable = $('Foldable', [], {reduce: Value});

  //# Traversable :: TypeClass
  //.
  //. `TypeClass` value for [Traversable][].
  //.
  //. ```javascript
  //. > Traversable.test([])
  //. true
  //.
  //. > Traversable.test('')
  //. false
  //. ```
  var Traversable = $('Traversable', [Functor, Foldable], {traverse: Value});

  //# Extend :: TypeClass
  //.
  //. `TypeClass` value for [Extend][].
  //.
  //. ```javascript
  //. > Extend.test([])
  //. true
  //.
  //. > Extend.test({})
  //. false
  //. ```
  var Extend = $('Extend', [Functor], {extend: Value});

  //# Comonad :: TypeClass
  //.
  //. `TypeClass` value for [Comonad][].
  //.
  //. ```javascript
  //. > Comonad.test(Identity(0))
  //. true
  //.
  //. > Comonad.test([])
  //. false
  //. ```
  var Comonad = $('Comonad', [Extend], {extract: Value});

  //# Contravariant :: TypeClass
  //.
  //. `TypeClass` value for [Contravariant][].
  //.
  //. ```javascript
  //. > Contravariant.test(Math.sqrt)
  //. true
  //.
  //. > Contravariant.test([])
  //. false
  //. ```
  var Contravariant = $('Contravariant', [], {contramap: Value});

  //  Null$prototype$equals :: Null ~> Null -> Boolean
  function Null$prototype$equals(other) {
    return true;
  }

  //  Null$prototype$lte :: Null ~> Null -> Boolean
  function Null$prototype$lte(other) {
    return true;
  }

  //  Undefined$prototype$equals :: Undefined ~> Undefined -> Boolean
  function Undefined$prototype$equals(other) {
    return true;
  }

  //  Undefined$prototype$lte :: Undefined ~> Undefined -> Boolean
  function Undefined$prototype$lte(other) {
    return true;
  }

  //  Boolean$prototype$equals :: Boolean ~> Boolean -> Boolean
  function Boolean$prototype$equals(other) {
    return typeof this === 'object' ?
      equals(this.valueOf(), other.valueOf()) :
      this === other;
  }

  //  Boolean$prototype$lte :: Boolean ~> Boolean -> Boolean
  function Boolean$prototype$lte(other) {
    return typeof this === 'object' ?
      lte(this.valueOf(), other.valueOf()) :
      this === false || other === true;
  }

  //  Number$prototype$equals :: Number ~> Number -> Boolean
  function Number$prototype$equals(other) {
    return typeof this === 'object' ?
      equals(this.valueOf(), other.valueOf()) :
      isNaN(this) && isNaN(other) || this === other;
  }

  //  Number$prototype$lte :: Number ~> Number -> Boolean
  function Number$prototype$lte(other) {
    return typeof this === 'object' ?
      lte(this.valueOf(), other.valueOf()) :
      isNaN(this) || this <= other;
  }

  //  Date$prototype$equals :: Date ~> Date -> Boolean
  function Date$prototype$equals(other) {
    return equals(this.valueOf(), other.valueOf());
  }

  //  Date$prototype$lte :: Date ~> Date -> Boolean
  function Date$prototype$lte(other) {
    return lte(this.valueOf(), other.valueOf());
  }

  //  RegExp$prototype$equals :: RegExp ~> RegExp -> Boolean
  function RegExp$prototype$equals(other) {
    return other.source === this.source &&
           other.global === this.global &&
           other.ignoreCase === this.ignoreCase &&
           other.multiline === this.multiline &&
           other.sticky === this.sticky &&
           other.unicode === this.unicode;
  }

  //  String$empty :: () -> String
  function String$empty() {
    return '';
  }

  //  String$prototype$equals :: String ~> String -> Boolean
  function String$prototype$equals(other) {
    return typeof this === 'object' ?
      equals(this.valueOf(), other.valueOf()) :
      this === other;
  }

  //  String$prototype$lte :: String ~> String -> Boolean
  function String$prototype$lte(other) {
    return typeof this === 'object' ?
      lte(this.valueOf(), other.valueOf()) :
      this <= other;
  }

  //  String$prototype$concat :: String ~> String -> String
  function String$prototype$concat(other) {
    return this + other;
  }

  //  Array$empty :: () -> Array a
  function Array$empty() {
    return [];
  }

  //  Array$of :: a -> Array a
  function Array$of(x) {
    return [x];
  }

  //  Array$chainRec :: ((a -> c, b -> c, a) -> Array c, a) -> Array b
  function Array$chainRec(f, x) {
    var result = [];
    var nil = {};
    var todo = {head: x, tail: nil};
    while (todo !== nil) {
      var more = nil;
      var steps = f(iterationNext, iterationDone, todo.head);
      for (var idx = 0; idx < steps.length; idx += 1) {
        var step = steps[idx];
        if (step.done) {
          result.push(step.value);
        } else {
          more = {head: step.value, tail: more};
        }
      }
      todo = todo.tail;
      while (more !== nil) {
        todo = {head: more.head, tail: todo};
        more = more.tail;
      }
    }
    return result;
  }

  //  Array$zero :: () -> Array a
  function Array$zero() {
    return [];
  }

  //  Array$prototype$equals :: Array a ~> Array a -> Boolean
  function Array$prototype$equals(other) {
    if (other.length !== this.length) return false;
    for (var idx = 0; idx < this.length; idx += 1) {
      if (!equals(this[idx], other[idx])) return false;
    }
    return true;
  }

  //  Array$prototype$lte :: Array a ~> Array a -> Boolean
  function Array$prototype$lte(other) {
    for (var idx = 0; true; idx += 1) {
      if (idx === this.length) return true;
      if (idx === other.length) return false;
      if (!equals(this[idx], other[idx])) return lte(this[idx], other[idx]);
    }
  }

  //  Array$prototype$concat :: Array a ~> Array a -> Array a
  function Array$prototype$concat(other) {
    return this.concat(other);
  }

  //  Array$prototype$filter :: Array a ~> (a -> Boolean) -> Array a
  function Array$prototype$filter(pred) {
    return this.filter(function(x) { return pred(x); });
  }

  //  Array$prototype$map :: Array a ~> (a -> b) -> Array b
  function Array$prototype$map(f) {
    return this.map(function(x) { return f(x); });
  }

  //  Array$prototype$ap :: Array a ~> Array (a -> b) -> Array b
  function Array$prototype$ap(fs) {
    var result = [];
    for (var idx = 0; idx < fs.length; idx += 1) {
      for (var idx2 = 0; idx2 < this.length; idx2 += 1) {
        result.push(fs[idx](this[idx2]));
      }
    }
    return result;
  }

  //  Array$prototype$chain :: Array a ~> (a -> Array b) -> Array b
  function Array$prototype$chain(f) {
    var result = [];
    for (var idx = 0; idx < this.length; idx += 1) {
      for (var idx2 = 0, xs = f(this[idx]); idx2 < xs.length; idx2 += 1) {
        result.push(xs[idx2]);
      }
    }
    return result;
  }

  //  Array$prototype$alt :: Array a ~> Array a -> Array a
  var Array$prototype$alt = Array$prototype$concat;

  //  Array$prototype$reduce :: Array a ~> ((b, a) -> b, b) -> b
  function Array$prototype$reduce(f, initial) {
    var acc = initial;
    for (var idx = 0; idx < this.length; idx += 1) acc = f(acc, this[idx]);
    return acc;
  }

  //  Array$prototype$traverse :: Applicative f => Array a ~> (TypeRep f, a -> f b) -> f (Array b)
  function Array$prototype$traverse(typeRep, f) {
    var xs = this;
    function go(idx, n) {
      switch (n) {
        case 0: return of(typeRep, []);
        case 2: return lift2(pair, f(xs[idx]), f(xs[idx + 1]));
        default:
          var m = Math.floor(n / 4) * 2;
          return lift2(concat_, go(idx, m), go(idx + m, n - m));
      }
    }
    return this.length % 2 === 1 ?
      lift2(concat_, map(Array$of, f(this[0])), go(1, this.length - 1)) :
      go(0, this.length);
  }

  //  Array$prototype$extend :: Array a ~> (Array a -> b) -> Array b
  function Array$prototype$extend(f) {
    return this.map(function(_, idx, xs) { return f(xs.slice(idx)); });
  }

  //  Arguments$prototype$equals :: Arguments ~> Arguments -> Boolean
  function Arguments$prototype$equals(other) {
    return Array$prototype$equals.call(this, other);
  }

  //  Arguments$prototype$lte :: Arguments ~> Arguments -> Boolean
  function Arguments$prototype$lte(other) {
    return Array$prototype$lte.call(this, other);
  }

  //  Error$prototype$equals :: Error ~> Error -> Boolean
  function Error$prototype$equals(other) {
    return equals(this.name, other.name) &&
           equals(this.message, other.message);
  }

  //  Object$empty :: () -> StrMap a
  function Object$empty() {
    return {};
  }

  //  Object$zero :: () -> StrMap a
  function Object$zero() {
    return {};
  }

  //  Object$prototype$equals :: StrMap a ~> StrMap a -> Boolean
  function Object$prototype$equals(other) {
    var self = this;
    var keys = Object.keys(this).sort();
    return equals(keys, Object.keys(other).sort()) &&
           keys.every(function(k) { return equals(self[k], other[k]); });
  }

  //  Object$prototype$lte :: StrMap a ~> StrMap a -> Boolean
  function Object$prototype$lte(other) {
    var theseKeys = Object.keys(this).sort();
    var otherKeys = Object.keys(other).sort();
    while (true) {
      if (theseKeys.length === 0) return true;
      if (otherKeys.length === 0) return false;
      var k = theseKeys.shift();
      var z = otherKeys.shift();
      if (k < z) return true;
      if (k > z) return false;
      if (!equals(this[k], other[k])) return lte(this[k], other[k]);
    }
  }

  //  Object$prototype$concat :: StrMap a ~> StrMap a -> StrMap a
  function Object$prototype$concat(other) {
    var result = {};
    function assign(k) { result[k] = this[k]; }
    forEachKey(this, assign);
    forEachKey(other, assign);
    return result;
  }

  //  Object$prototype$filter :: StrMap a ~> (a -> Boolean) -> StrMap a
  function Object$prototype$filter(pred) {
    var result = {};
    forEachKey(this, function(k) { if (pred(this[k])) result[k] = this[k]; });
    return result;
  }

  //  Object$prototype$map :: StrMap a ~> (a -> b) -> StrMap b
  function Object$prototype$map(f) {
    var result = {};
    forEachKey(this, function(k) { result[k] = f(this[k]); });
    return result;
  }

  //  Object$prototype$ap :: StrMap a ~> StrMap (a -> b) -> StrMap b
  function Object$prototype$ap(other) {
    var result = {};
    forEachKey(this, function(k) {
      if (has(k, other)) result[k] = other[k](this[k]);
    });
    return result;
  }

  //  Object$prototype$alt :: StrMap a ~> StrMap a -> StrMap a
  var Object$prototype$alt = Object$prototype$concat;

  //  Object$prototype$reduce :: StrMap a ~> ((b, a) -> b, b) -> b
  function Object$prototype$reduce(f, initial) {
    var self = this;
    function reducer(acc, k) { return f(acc, self[k]); }
    return Object.keys(this).sort().reduce(reducer, initial);
  }

  //  Object$prototype$traverse :: Applicative f => StrMap a ~> (TypeRep f, a -> f b) -> f (StrMap b)
  function Object$prototype$traverse(typeRep, f) {
    var self = this;
    return Object.keys(this).reduce(function(applicative, k) {
      function set(o) {
        return function(v) {
          var singleton = {}; singleton[k] = v;
          return Object$prototype$concat.call(o, singleton);
        };
      }
      return lift2(set, applicative, f(self[k]));
    }, of(typeRep, {}));
  }

  //  Function$id :: () -> a -> a
  function Function$id() {
    return identity;
  }

  //  Function$of :: b -> (a -> b)
  function Function$of(x) {
    return function(_) { return x; };
  }

  //  Function$chainRec :: ((a -> c, b -> c, a) -> (z -> c), a) -> (z -> b)
  function Function$chainRec(f, x) {
    return function(a) {
      var step = iterationNext(x);
      while (!step.done) {
        step = f(iterationNext, iterationDone, step.value)(a);
      }
      return step.value;
    };
  }

  //  Function$prototype$equals :: Function ~> Function -> Boolean
  function Function$prototype$equals(other) {
    return other === this;
  }

  //  Function$prototype$compose :: (a -> b) ~> (b -> c) -> (a -> c)
  function Function$prototype$compose(other) {
    var semigroupoid = this;
    return function(x) { return other(semigroupoid(x)); };
  }

  //  Function$prototype$map :: (a -> b) ~> (b -> c) -> (a -> c)
  function Function$prototype$map(f) {
    var functor = this;
    return function(x) { return f(functor(x)); };
  }

  //  Function$prototype$promap :: (b -> c) ~> (a -> b, c -> d) -> (a -> d)
  function Function$prototype$promap(f, g) {
    var profunctor = this;
    return function(x) { return g(profunctor(f(x))); };
  }

  //  Function$prototype$ap :: (a -> b) ~> (a -> b -> c) -> (a -> c)
  function Function$prototype$ap(f) {
    var apply = this;
    return function(x) { return f(x)(apply(x)); };
  }

  //  Function$prototype$chain :: (a -> b) ~> (b -> a -> c) -> (a -> c)
  function Function$prototype$chain(f) {
    var chain = this;
    return function(x) { return f(chain(x))(x); };
  }

  //  Function$prototype$extend :: Semigroup a => (a -> b) ~> ((a -> b) -> c) -> (a -> c)
  function Function$prototype$extend(f) {
    var extend = this;
    return function(x) {
      return f(function(y) { return extend(concat(x, y)); });
    };
  }

  //  Function$prototype$contramap :: (b -> c) ~> (a -> b) -> (a -> c)
  function Function$prototype$contramap(f) {
    var contravariant = this;
    return function(x) { return contravariant(f(x)); };
  }

  /* eslint-disable key-spacing */
  var implementations = {
    Null: {
      'prototype': {
        'fantasy-land/equals':      Null$prototype$equals,
        'fantasy-land/lte':         Null$prototype$lte
      }
    },
    Undefined: {
      'prototype': {
        'fantasy-land/equals':      Undefined$prototype$equals,
        'fantasy-land/lte':         Undefined$prototype$lte
      }
    },
    Boolean: {
      'prototype': {
        'fantasy-land/equals':      Boolean$prototype$equals,
        'fantasy-land/lte':         Boolean$prototype$lte
      }
    },
    Number: {
      'prototype': {
        'fantasy-land/equals':      Number$prototype$equals,
        'fantasy-land/lte':         Number$prototype$lte
      }
    },
    Date: {
      'prototype': {
        'fantasy-land/equals':      Date$prototype$equals,
        'fantasy-land/lte':         Date$prototype$lte
      }
    },
    RegExp: {
      'prototype': {
        'fantasy-land/equals':      RegExp$prototype$equals
      }
    },
    String: {
      'fantasy-land/empty':         String$empty,
      'prototype': {
        'fantasy-land/equals':      String$prototype$equals,
        'fantasy-land/lte':         String$prototype$lte,
        'fantasy-land/concat':      String$prototype$concat
      }
    },
    Array: {
      'fantasy-land/empty':         Array$empty,
      'fantasy-land/of':            Array$of,
      'fantasy-land/chainRec':      Array$chainRec,
      'fantasy-land/zero':          Array$zero,
      'prototype': {
        'fantasy-land/equals':      Array$prototype$equals,
        'fantasy-land/lte':         Array$prototype$lte,
        'fantasy-land/concat':      Array$prototype$concat,
        'fantasy-land/filter':      Array$prototype$filter,
        'fantasy-land/map':         Array$prototype$map,
        'fantasy-land/ap':          Array$prototype$ap,
        'fantasy-land/chain':       Array$prototype$chain,
        'fantasy-land/alt':         Array$prototype$alt,
        'fantasy-land/reduce':      Array$prototype$reduce,
        'fantasy-land/traverse':    Array$prototype$traverse,
        'fantasy-land/extend':      Array$prototype$extend
      }
    },
    Arguments: {
      'prototype': {
        'fantasy-land/equals':      Arguments$prototype$equals,
        'fantasy-land/lte':         Arguments$prototype$lte
      }
    },
    Error: {
      'prototype': {
        'fantasy-land/equals':      Error$prototype$equals
      }
    },
    Object: {
      'fantasy-land/empty':         Object$empty,
      'fantasy-land/zero':          Object$zero,
      'prototype': {
        'fantasy-land/equals':      Object$prototype$equals,
        'fantasy-land/lte':         Object$prototype$lte,
        'fantasy-land/concat':      Object$prototype$concat,
        'fantasy-land/filter':      Object$prototype$filter,
        'fantasy-land/map':         Object$prototype$map,
        'fantasy-land/ap':          Object$prototype$ap,
        'fantasy-land/alt':         Object$prototype$alt,
        'fantasy-land/reduce':      Object$prototype$reduce,
        'fantasy-land/traverse':    Object$prototype$traverse
      }
    },
    Function: {
      'fantasy-land/id':            Function$id,
      'fantasy-land/of':            Function$of,
      'fantasy-land/chainRec':      Function$chainRec,
      'prototype': {
        'fantasy-land/equals':      Function$prototype$equals,
        'fantasy-land/compose':     Function$prototype$compose,
        'fantasy-land/map':         Function$prototype$map,
        'fantasy-land/promap':      Function$prototype$promap,
        'fantasy-land/ap':          Function$prototype$ap,
        'fantasy-land/chain':       Function$prototype$chain,
        'fantasy-land/extend':      Function$prototype$extend,
        'fantasy-land/contramap':   Function$prototype$contramap
      }
    }
  };
  /* eslint-enable key-spacing */

  //# equals :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and equal according
  //. to the type's [`fantasy-land/equals`][] method; `false` otherwise.
  //.
  //. `fantasy-land/equals` implementations are provided for the following
  //. built-in types: Null, Undefined, Boolean, Number, Date, RegExp, String,
  //. Array, Arguments, Error, Object, and Function.
  //.
  //. The algorithm supports circular data structures. Two arrays are equal
  //. if they have the same index paths and for each path have equal values.
  //. Two arrays which represent `[1, [1, [1, [1, [1, ...]]]]]`, for example,
  //. are equal even if their internal structures differ. Two objects are equal
  //. if they have the same property paths and for each path have equal values.
  //.
  //. ```javascript
  //. > equals(0, -0)
  //. true
  //.
  //. > equals(NaN, NaN)
  //. true
  //.
  //. > equals(Cons('foo', Cons('bar', Nil)), Cons('foo', Cons('bar', Nil)))
  //. true
  //.
  //. > equals(Cons('foo', Cons('bar', Nil)), Cons('bar', Cons('foo', Nil)))
  //. false
  //. ```
  var equals = (function() {
    //  $pairs :: Array (Array2 Any Any)
    var $pairs = [];

    return function equals(x, y) {
      if (!sameType(x, y)) return false;

      //  This algorithm for comparing circular data structures was
      //  suggested in <http://stackoverflow.com/a/40622794/312785>.
      if ($pairs.some(function(p) { return p[0] === x && p[1] === y; })) {
        return true;
      }

      $pairs.push([x, y]);
      try {
        return Setoid.test(x) && Setoid.test(y) && Setoid.methods.equals(x)(y);
      } finally {
        $pairs.pop();
      }
    };
  }());

  //# lt :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first is
  //. less than the second according to the type's [`fantasy-land/lte`][]
  //. method; `false` otherwise.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`gt`](#gt) and [`gte`](#gte).
  //.
  //. ```javascript
  //. > lt(0, 0)
  //. false
  //.
  //. > lt(0, 1)
  //. true
  //.
  //. > lt(1, 0)
  //. false
  //. ```
  function lt(x, y) {
    return sameType(x, y) && !lte(y, x);
  }

  //# lte :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first
  //. is less than or equal to the second according to the type's
  //. [`fantasy-land/lte`][] method; `false` otherwise.
  //.
  //. `fantasy-land/lte` implementations are provided for the following
  //. built-in types: Null, Undefined, Boolean, Number, Date, String, Array,
  //. Arguments, and Object.
  //.
  //. The algorithm supports circular data structures in the same manner as
  //. [`equals`](#equals).
  //.
  //. See also [`lt`](#lt), [`gt`](#gt), and [`gte`](#gte).
  //.
  //. ```javascript
  //. > lte(0, 0)
  //. true
  //.
  //. > lte(0, 1)
  //. true
  //.
  //. > lte(1, 0)
  //. false
  //. ```
  var lte = (function() {
    //  $pairs :: Array (Array2 Any Any)
    var $pairs = [];

    return function lte(x, y) {
      if (!sameType(x, y)) return false;

      //  This algorithm for comparing circular data structures was
      //  suggested in <http://stackoverflow.com/a/40622794/312785>.
      if ($pairs.some(function(p) { return p[0] === x && p[1] === y; })) {
        return equals(x, y);
      }

      $pairs.push([x, y]);
      try {
        return Ord.test(x) && Ord.test(y) && Ord.methods.lte(x)(y);
      } finally {
        $pairs.pop();
      }
    };
  }());

  //# gt :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first is
  //. greater than the second according to the type's [`fantasy-land/lte`][]
  //. method; `false` otherwise.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`lt`](#lt) and [`gte`](#gte).
  //.
  //. ```javascript
  //. > gt(0, 0)
  //. false
  //.
  //. > gt(0, 1)
  //. false
  //.
  //. > gt(1, 0)
  //. true
  //. ```
  function gt(x, y) {
    return lt(y, x);
  }

  //# gte :: (a, b) -> Boolean
  //.
  //. Returns `true` if its arguments are of the same type and the first
  //. is greater than or equal to the second according to the type's
  //. [`fantasy-land/lte`][] method; `false` otherwise.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`lt`](#lt) and [`gt`](#gt).
  //.
  //. ```javascript
  //. > gte(0, 0)
  //. true
  //.
  //. > gte(0, 1)
  //. false
  //.
  //. > gte(1, 0)
  //. true
  //. ```
  function gte(x, y) {
    return lte(y, x);
  }

  //# min :: Ord a => (a, a) -> a
  //.
  //. Returns the smaller of its two arguments.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`max`](#max).
  //.
  //. ```javascript
  //. > min(10, 2)
  //. 2
  //.
  //. > min(new Date('1999-12-31'), new Date('2000-01-01'))
  //. new Date('1999-12-31')
  //.
  //. > min('10', '2')
  //. '10'
  //. ```
  function min(x, y) {
    return lte(x, y) ? x : y;
  }

  //# max :: Ord a => (a, a) -> a
  //.
  //. Returns the larger of its two arguments.
  //.
  //. This function is derived from [`lte`](#lte).
  //.
  //. See also [`min`](#min).
  //.
  //. ```javascript
  //. > max(10, 2)
  //. 10
  //.
  //. > max(new Date('1999-12-31'), new Date('2000-01-01'))
  //. new Date('2000-01-01')
  //.
  //. > max('10', '2')
  //. '2'
  //. ```
  function max(x, y) {
    return lte(x, y) ? y : x;
  }

  //# compose :: Semigroupoid c => (c j k, c i j) -> c i k
  //.
  //. Function wrapper for [`fantasy-land/compose`][].
  //.
  //. `fantasy-land/compose` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > compose(Math.sqrt, x => x + 1)(99)
  //. 10
  //. ```
  function compose(x, y) {
    return Semigroupoid.methods.compose(y)(x);
  }

  //# id :: Category c => TypeRep c -> c
  //.
  //. Function wrapper for [`fantasy-land/id`][].
  //.
  //. `fantasy-land/id` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > id(Function)('foo')
  //. 'foo'
  //. ```
  function id(typeRep) {
    return Category.methods.id(typeRep)();
  }

  //# concat :: Semigroup a => (a, a) -> a
  //.
  //. Function wrapper for [`fantasy-land/concat`][].
  //.
  //. `fantasy-land/concat` implementations are provided for the following
  //. built-in types: String, Array, and Object.
  //.
  //. ```javascript
  //. > concat('abc', 'def')
  //. 'abcdef'
  //.
  //. > concat([1, 2, 3], [4, 5, 6])
  //. [1, 2, 3, 4, 5, 6]
  //.
  //. > concat({x: 1, y: 2}, {y: 3, z: 4})
  //. {x: 1, y: 3, z: 4}
  //.
  //. > concat(Cons('foo', Cons('bar', Cons('baz', Nil))), Cons('quux', Nil))
  //. Cons('foo', Cons('bar', Cons('baz', Cons('quux', Nil))))
  //. ```
  function concat(x, y) {
    return Semigroup.methods.concat(x)(y);
  }

  //# empty :: Monoid m => TypeRep m -> m
  //.
  //. Function wrapper for [`fantasy-land/empty`][].
  //.
  //. `fantasy-land/empty` implementations are provided for the following
  //. built-in types: String, Array, and Object.
  //.
  //. ```javascript
  //. > empty(String)
  //. ''
  //.
  //. > empty(Array)
  //. []
  //.
  //. > empty(Object)
  //. {}
  //.
  //. > empty(List)
  //. Nil
  //. ```
  function empty(typeRep) {
    return Monoid.methods.empty(typeRep)();
  }

  //# invert :: Group g => g -> g
  //.
  //. Function wrapper for [`fantasy-land/invert`][].
  //.
  //. ```javascript
  //. > invert(Sum(5))
  //. Sum(-5)
  //. ```
  function invert(group) {
    return Group.methods.invert(group)();
  }

  //# filter :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Function wrapper for [`fantasy-land/filter`][]. Discards every element
  //. which does not satisfy the predicate.
  //.
  //. `fantasy-land/filter` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. See also [`reject`](#reject).
  //.
  //. ```javascript
  //. > filter(x => x % 2 == 1, [1, 2, 3])
  //. [1, 3]
  //.
  //. > filter(x => x % 2 == 1, {x: 1, y: 2, z: 3})
  //. {x: 1, z: 3}
  //.
  //. > filter(x => x % 2 == 1, Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(1, Cons(3, Nil))
  //.
  //. > filter(x => x % 2 == 1, Nothing)
  //. Nothing
  //.
  //. > filter(x => x % 2 == 1, Just(0))
  //. Nothing
  //.
  //. > filter(x => x % 2 == 1, Just(1))
  //. Just(1)
  //. ```
  function filter(pred, filterable) {
    return Filterable.methods.filter(filterable)(pred);
  }

  //# reject :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Discards every element which satisfies the predicate.
  //.
  //. This function is derived from [`filter`](#filter).
  //.
  //. ```javascript
  //. > reject(x => x % 2 == 1, [1, 2, 3])
  //. [2]
  //.
  //. > reject(x => x % 2 == 1, {x: 1, y: 2, z: 3})
  //. {y: 2}
  //.
  //. > reject(x => x % 2 == 1, Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(2, Nil)
  //.
  //. > reject(x => x % 2 == 1, Nothing)
  //. Nothing
  //.
  //. > reject(x => x % 2 == 1, Just(0))
  //. Just(0)
  //.
  //. > reject(x => x % 2 == 1, Just(1))
  //. Nothing
  //. ```
  function reject(pred, filterable) {
    return filter(function(x) { return !pred(x); }, filterable);
  }

  //# takeWhile :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Discards the first element which does not satisfy the predicate, and all
  //. subsequent elements.
  //.
  //. This function is derived from [`filter`](#filter).
  //.
  //. See also [`dropWhile`](#dropWhile).
  //.
  //. ```javascript
  //. > takeWhile(s => /x/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xy', 'xz', 'yx']
  //.
  //. > takeWhile(s => /y/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xy']
  //.
  //. > takeWhile(s => /z/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. []
  //. ```
  function takeWhile(pred, filterable) {
    var take = true;
    return filter(function(x) { return take = take && pred(x); }, filterable);
  }

  //# dropWhile :: Filterable f => (a -> Boolean, f a) -> f a
  //.
  //. Retains the first element which does not satisfy the predicate, and all
  //. subsequent elements.
  //.
  //. This function is derived from [`filter`](#filter).
  //.
  //. See also [`takeWhile`](#takeWhile).
  //.
  //. ```javascript
  //. > dropWhile(s => /x/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['yz', 'zx', 'zy']
  //.
  //. > dropWhile(s => /y/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xz', 'yx', 'yz', 'zx', 'zy']
  //.
  //. > dropWhile(s => /z/.test(s), ['xy', 'xz', 'yx', 'yz', 'zx', 'zy'])
  //. ['xy', 'xz', 'yx', 'yz', 'zx', 'zy']
  //. ```
  function dropWhile(pred, filterable) {
    var take = false;
    return filter(function(x) { return take = take || !pred(x); }, filterable);
  }

  //# map :: Functor f => (a -> b, f a) -> f b
  //.
  //. Function wrapper for [`fantasy-land/map`][].
  //.
  //. `fantasy-land/map` implementations are provided for the following
  //. built-in types: Array, Object, and Function.
  //.
  //. ```javascript
  //. > map(Math.sqrt, [1, 4, 9])
  //. [1, 2, 3]
  //.
  //. > map(Math.sqrt, {x: 1, y: 4, z: 9})
  //. {x: 1, y: 2, z: 3}
  //.
  //. > map(Math.sqrt, s => s.length)('Sanctuary')
  //. 3
  //.
  //. > map(Math.sqrt, Tuple('foo', 64))
  //. Tuple('foo', 8)
  //.
  //. > map(Math.sqrt, Nil)
  //. Nil
  //.
  //. > map(Math.sqrt, Cons(1, Cons(4, Cons(9, Nil))))
  //. Cons(1, Cons(2, Cons(3, Nil)))
  //. ```
  function map(f, functor) {
    return Functor.methods.map(functor)(f);
  }

  //# flip :: Functor f => (f (a -> b), a) -> f b
  //.
  //. Maps over the given functions, applying each to the given value.
  //.
  //. This function is derived from [`map`](#map).
  //.
  //. ```javascript
  //. > flip(x => y => x + y, '!')('foo')
  //. 'foo!'
  //.
  //. > flip([Math.floor, Math.ceil], 1.5)
  //. [1, 2]
  //.
  //. > flip({floor: Math.floor, ceil: Math.ceil}, 1.5)
  //. {floor: 1, ceil: 2}
  //.
  //. > flip(Cons(Math.floor, Cons(Math.ceil, Nil)), 1.5)
  //. Cons(1, Cons(2, Nil))
  //. ```
  function flip(functor, x) {
    return Functor.methods.map(functor)(thrush(x));
  }

  //# bimap :: Bifunctor f => (a -> b, c -> d, f a c) -> f b d
  //.
  //. Function wrapper for [`fantasy-land/bimap`][].
  //.
  //. ```javascript
  //. > bimap(s => s.toUpperCase(), Math.sqrt, Tuple('foo', 64))
  //. Tuple('FOO', 8)
  //. ```
  function bimap(f, g, bifunctor) {
    return Bifunctor.methods.bimap(bifunctor)(f, g);
  }

  //# mapLeft :: Bifunctor f => (a -> b, f a c) -> f b c
  //.
  //. Maps the given function over the left side of a Bifunctor.
  //.
  //. ```javascript
  //. > mapLeft(Math.sqrt, Tuple(64, 9))
  //. Tuple(8, 9)
  //. ```
  function mapLeft(f, bifunctor) {
    return bimap(f, identity, bifunctor);
  }

  //# promap :: Profunctor p => (a -> b, c -> d, p b c) -> p a d
  //.
  //. Function wrapper for [`fantasy-land/promap`][].
  //.
  //. `fantasy-land/promap` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > promap(Math.abs, x => x + 1, Math.sqrt)(-100)
  //. 11
  //. ```
  function promap(f, g, profunctor) {
    return Profunctor.methods.promap(profunctor)(f, g);
  }

  //# ap :: Apply f => (f (a -> b), f a) -> f b
  //.
  //. Function wrapper for [`fantasy-land/ap`][].
  //.
  //. `fantasy-land/ap` implementations are provided for the following
  //. built-in types: Array, Object, and Function.
  //.
  //. ```javascript
  //. > ap([Math.sqrt, x => x * x], [1, 4, 9, 16, 25])
  //. [1, 2, 3, 4, 5, 1, 16, 81, 256, 625]
  //.
  //. > ap({a: Math.sqrt, b: x => x * x}, {a: 16, b: 10, c: 1})
  //. {a: 4, b: 100}
  //.
  //. > ap(s => n => s.slice(0, n), s => Math.ceil(s.length / 2))('Haskell')
  //. 'Hask'
  //.
  //. > ap(Identity(Math.sqrt), Identity(64))
  //. Identity(8)
  //.
  //. > ap(Cons(Math.sqrt, Cons(x => x * x, Nil)), Cons(16, Cons(100, Nil)))
  //. Cons(4, Cons(10, Cons(256, Cons(10000, Nil))))
  //. ```
  function ap(applyF, applyX) {
    return Apply.methods.ap(applyX)(applyF);
  }

  //# lift2 :: Apply f => (a -> b -> c, f a, f b) -> f c
  //.
  //. Lifts `a -> b -> c` to `Apply f => f a -> f b -> f c` and returns the
  //. result of applying this to the given arguments.
  //.
  //. This function is derived from [`map`](#map) and [`ap`](#ap).
  //.
  //. See also [`lift3`](#lift3).
  //.
  //. ```javascript
  //. > lift2(x => y => Math.pow(x, y), [10], [1, 2, 3])
  //. [10, 100, 1000]
  //.
  //. > lift2(x => y => Math.pow(x, y), Identity(10), Identity(3))
  //. Identity(1000)
  //. ```
  function lift2(f, x, y) {
    return ap(map(f, x), y);
  }

  //# lift3 :: Apply f => (a -> b -> c -> d, f a, f b, f c) -> f d
  //.
  //. Lifts `a -> b -> c -> d` to `Apply f => f a -> f b -> f c -> f d` and
  //. returns the result of applying this to the given arguments.
  //.
  //. This function is derived from [`map`](#map) and [`ap`](#ap).
  //.
  //. See also [`lift2`](#lift2).
  //.
  //. ```javascript
  //. > lift3(x => y => z => x + z + y, ['<'], ['>'], ['foo', 'bar', 'baz'])
  //. ['<foo>', '<bar>', '<baz>']
  //.
  //. > lift3(x => y => z => x + z + y, Identity('<'), Identity('>'), Identity('baz'))
  //. Identity('<baz>')
  //. ```
  function lift3(f, x, y, z) {
    return ap(ap(map(f, x), y), z);
  }

  //# apFirst :: Apply f => (f a, f b) -> f a
  //.
  //. Combines two effectful actions, keeping only the result of the first.
  //. Equivalent to Haskell's `(<*)` function.
  //.
  //. This function is derived from [`lift2`](#lift2).
  //.
  //. See also [`apSecond`](#apSecond).
  //.
  //. ```javascript
  //. > apFirst([1, 2], [3, 4])
  //. [1, 1, 2, 2]
  //.
  //. > apFirst(Identity(1), Identity(2))
  //. Identity(1)
  //. ```
  function apFirst(x, y) {
    return lift2(constant, x, y);
  }

  //# apSecond :: Apply f => (f a, f b) -> f b
  //.
  //. Combines two effectful actions, keeping only the result of the second.
  //. Equivalent to Haskell's `(*>)` function.
  //.
  //. This function is derived from [`lift2`](#lift2).
  //.
  //. See also [`apFirst`](#apFirst).
  //.
  //. ```javascript
  //. > apSecond([1, 2], [3, 4])
  //. [3, 4, 3, 4]
  //.
  //. > apSecond(Identity(1), Identity(2))
  //. Identity(2)
  //. ```
  function apSecond(x, y) {
    return lift2(constant(identity), x, y);
  }

  //# of :: Applicative f => (TypeRep f, a) -> f a
  //.
  //. Function wrapper for [`fantasy-land/of`][].
  //.
  //. `fantasy-land/of` implementations are provided for the following
  //. built-in types: Array and Function.
  //.
  //. ```javascript
  //. > of(Array, 42)
  //. [42]
  //.
  //. > of(Function, 42)(null)
  //. 42
  //.
  //. > of(List, 42)
  //. Cons(42, Nil)
  //. ```
  function of(typeRep, x) {
    return Applicative.methods.of(typeRep)(x);
  }

  //# append :: (Applicative f, Semigroup (f a)) => (a, f a) -> f a
  //.
  //. Returns the result of appending the first argument to the second.
  //.
  //. This function is derived from [`concat`](#concat) and [`of`](#of).
  //.
  //. See also [`prepend`](#prepend).
  //.
  //. ```javascript
  //. > append(3, [1, 2])
  //. [1, 2, 3]
  //.
  //. > append(3, Cons(1, Cons(2, Nil)))
  //. Cons(1, Cons(2, Cons(3, Nil)))
  //. ```
  function append(x, xs) {
    return concat(xs, of(xs.constructor, x));
  }

  //# prepend :: (Applicative f, Semigroup (f a)) => (a, f a) -> f a
  //.
  //. Returns the result of prepending the first argument to the second.
  //.
  //. This function is derived from [`concat`](#concat) and [`of`](#of).
  //.
  //. See also [`append`](#append).
  //.
  //. ```javascript
  //. > prepend(1, [2, 3])
  //. [1, 2, 3]
  //.
  //. > prepend(1, Cons(2, Cons(3, Nil)))
  //. Cons(1, Cons(2, Cons(3, Nil)))
  //. ```
  function prepend(x, xs) {
    return concat(of(xs.constructor, x), xs);
  }

  //# chain :: Chain m => (a -> m b, m a) -> m b
  //.
  //. Function wrapper for [`fantasy-land/chain`][].
  //.
  //. `fantasy-land/chain` implementations are provided for the following
  //. built-in types: Array and Function.
  //.
  //. ```javascript
  //. > chain(x => [x, x], [1, 2, 3])
  //. [1, 1, 2, 2, 3, 3]
  //.
  //. > chain(x => x % 2 == 1 ? of(List, x) : Nil, Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(1, Cons(3, Nil))
  //.
  //. > chain(n => s => s.slice(0, n), s => Math.ceil(s.length / 2))('Haskell')
  //. 'Hask'
  //. ```
  function chain(f, chain_) {
    return Chain.methods.chain(chain_)(f);
  }

  //# join :: Chain m => m (m a) -> m a
  //.
  //. Removes one level of nesting from a nested monadic structure.
  //.
  //. This function is derived from [`chain`](#chain).
  //.
  //. ```javascript
  //. > join([[1], [2], [3]])
  //. [1, 2, 3]
  //.
  //. > join([[[1, 2, 3]]])
  //. [[1, 2, 3]]
  //.
  //. > join(Identity(Identity(1)))
  //. Identity(1)
  //. ```
  function join(chain_) {
    return chain(identity, chain_);
  }

  //# chainRec :: ChainRec m => (TypeRep m, (a -> c, b -> c, a) -> m c, a) -> m b
  //.
  //. Function wrapper for [`fantasy-land/chainRec`][].
  //.
  //. `fantasy-land/chainRec` implementations are provided for the following
  //. built-in types: Array.
  //.
  //. ```javascript
  //. > chainRec(
  //. .   Array,
  //. .   (next, done, s) => s.length == 2 ? [s + '!', s + '?'].map(done)
  //. .                                    : [s + 'o', s + 'n'].map(next),
  //. .   ''
  //. . )
  //. ['oo!', 'oo?', 'on!', 'on?', 'no!', 'no?', 'nn!', 'nn?']
  //. ```
  function chainRec(typeRep, f, x) {
    return ChainRec.methods.chainRec(typeRep)(f, x);
  }

  //# alt :: Alt f => (f a, f a) -> f a
  //.
  //. Function wrapper for [`fantasy-land/alt`][].
  //.
  //. `fantasy-land/alt` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. ```javascript
  //. > alt([1, 2, 3], [4, 5, 6])
  //. [1, 2, 3, 4, 5, 6]
  //.
  //. > alt(Nothing, Nothing)
  //. Nothing
  //.
  //. > alt(Nothing, Just(1))
  //. Just(1)
  //.
  //. > alt(Just(2), Just(3))
  //. Just(2)
  //. ```
  function alt(x, y) {
    return Alt.methods.alt(x)(y);
  }

  //# zero :: Plus f => TypeRep f -> f a
  //.
  //. Function wrapper for [`fantasy-land/zero`][].
  //.
  //. `fantasy-land/zero` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. ```javascript
  //. > zero(Array)
  //. []
  //.
  //. > zero(Object)
  //. {}
  //.
  //. > zero(Maybe)
  //. Nothing
  //. ```
  function zero(typeRep) {
    return Plus.methods.zero(typeRep)();
  }

  //# reduce :: Foldable f => ((b, a) -> b, b, f a) -> b
  //.
  //. Function wrapper for [`fantasy-land/reduce`][].
  //.
  //. `fantasy-land/reduce` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. ```javascript
  //. > reduce((xs, x) => [x].concat(xs), [], [1, 2, 3])
  //. [3, 2, 1]
  //.
  //. > reduce(concat, '', Cons('foo', Cons('bar', Cons('baz', Nil))))
  //. 'foobarbaz'
  //. ```
  function reduce(f, x, foldable) {
    return Foldable.methods.reduce(foldable)(f, x);
  }

  //# size :: Foldable f => f a -> Integer
  //.
  //. Returns the number of elements of the given structure.
  //.
  //. This function is derived from [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > size([])
  //. 0
  //.
  //. > size(['foo', 'bar', 'baz'])
  //. 3
  //.
  //. > size(Nil)
  //. 0
  //.
  //. > size(Cons('foo', Cons('bar', Cons('baz', Nil))))
  //. 3
  //. ```
  function size(foldable) {
    //  Fast path for arrays.
    if (Array.isArray(foldable)) return foldable.length;
    return reduce(function(n, _) { return n + 1; }, 0, foldable);
  }

  //# elem :: (Setoid a, Foldable f) => (a, f a) -> Boolean
  //.
  //. Takes a value and a structure and returns `true` if the
  //. value is an element of the structure; `false` otherwise.
  //.
  //. This function is derived from [`equals`](#equals) and
  //. [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > elem('c', ['a', 'b', 'c'])
  //. true
  //.
  //. > elem('x', ['a', 'b', 'c'])
  //. false
  //.
  //. > elem(3, {x: 1, y: 2, z: 3})
  //. true
  //.
  //. > elem(8, {x: 1, y: 2, z: 3})
  //. false
  //.
  //. > elem(0, Just(0))
  //. true
  //.
  //. > elem(0, Just(1))
  //. false
  //.
  //. > elem(0, Nothing)
  //. false
  //. ```
  function elem(x, foldable) {
    return reduce(function(b, y) { return b || equals(x, y); },
                  false,
                  foldable);
  }

  //# foldMap :: (Monoid m, Foldable f) => (TypeRep m, a -> m, f a) -> m
  //.
  //. Deconstructs a foldable by mapping every element to a monoid and
  //. concatenating the results.
  //.
  //. This function is derived from [`concat`](#concat), [`empty`](#empty),
  //. and [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > foldMap(String, f => f.name, [Math.sin, Math.cos, Math.tan])
  //. 'sincostan'
  //. ```
  function foldMap(typeRep, f, foldable) {
    return reduce(function(monoid, x) { return concat(monoid, f(x)); },
                  empty(typeRep),
                  foldable);
  }

  //# reverse :: (Applicative f, Foldable f, Monoid (f a)) => f a -> f a
  //.
  //. Reverses the elements of the given structure.
  //.
  //. This function is derived from [`concat`](#concat), [`empty`](#empty),
  //. [`of`](#of), and [`reduce`](#reduce).
  //.
  //. ```javascript
  //. > reverse([1, 2, 3])
  //. [3, 2, 1]
  //.
  //. > reverse(Cons(1, Cons(2, Cons(3, Nil))))
  //. Cons(3, Cons(2, Cons(1, Nil)))
  //. ```
  function reverse(foldable) {
    //  Fast path for arrays.
    if (Array.isArray(foldable)) return foldable.slice().reverse();
    var F = foldable.constructor;
    return reduce(function(xs, x) { return concat(of(F, x), xs); },
                  empty(F),
                  foldable);
  }

  //# sort :: (Ord a, Applicative f, Foldable f, Monoid (f a)) => f a -> f a
  //.
  //. Performs a [stable sort][] of the elements of the given structure,
  //. using [`lte`](#lte) for comparisons.
  //.
  //. This function is derived from [`lte`](#lte), [`concat`](#concat),
  //. [`empty`](#empty), [`of`](#of), and [`reduce`](#reduce).
  //.
  //. See also [`sortBy`](#sortBy).
  //.
  //. ```javascript
  //. > sort(['foo', 'bar', 'baz'])
  //. ['bar', 'baz', 'foo']
  //.
  //. > sort([Just(2), Nothing, Just(1)])
  //. [Nothing, Just(1), Just(2)]
  //.
  //. > sort(Cons('foo', Cons('bar', Cons('baz', Nil))))
  //. Cons('bar', Cons('baz', Cons('foo', Nil)))
  //. ```
  function sort(foldable) {
    return sortBy(identity, foldable);
  }

  //# sortBy :: (Ord b, Applicative f, Foldable f, Monoid (f a)) => (a -> b, f a) -> f a
  //.
  //. Performs a [stable sort][] of the elements of the given structure,
  //. using [`lte`](#lte) to compare the values produced by applying the
  //. given function to each element of the structure.
  //.
  //. This function is derived from [`lte`](#lte), [`concat`](#concat),
  //. [`empty`](#empty), [`of`](#of), and [`reduce`](#reduce).
  //.
  //. See also [`sort`](#sort).
  //.
  //. ```javascript
  //. > sortBy(s => s.length, ['red', 'green', 'blue'])
  //. ['red', 'blue', 'green']
  //.
  //. > sortBy(s => s.length, ['black', 'white'])
  //. ['black', 'white']
  //.
  //. > sortBy(s => s.length, ['white', 'black'])
  //. ['white', 'black']
  //.
  //. > sortBy(s => s.length, Cons('red', Cons('green', Cons('blue', Nil))))
  //. Cons('red', Cons('blue', Cons('green', Nil)))
  //. ```
  function sortBy(f, foldable) {
    var rs = reduce(function(rs, x) {
      rs.push({idx: rs.length, x: x, fx: f(x)});
      return rs;
    }, [], foldable);

    var lte_ = (function(r) {
      switch (typeof (r && r.fx)) {
        case 'number':  return function(x, y) { return x <= y || x !== x; };
        case 'string':  return function(x, y) { return x <= y; };
        default:        return lte;
      }
    }(rs[0]));

    rs.sort(function(a, b) {
      return lte_(a.fx, b.fx) ? lte_(b.fx, a.fx) ? a.idx - b.idx : -1 : 1;
    });

    if (Array.isArray(foldable)) {
      for (var idx = 0; idx < rs.length; idx += 1) rs[idx] = rs[idx].x;
      return rs;
    }

    var F = foldable.constructor;
    var result = empty(F);
    for (idx = 0; idx < rs.length; idx += 1) {
      result = concat(result, of(F, rs[idx].x));
    }
    return result;
  }

  //# traverse :: (Applicative f, Traversable t) => (TypeRep f, a -> f b, t a) -> f (t b)
  //.
  //. Function wrapper for [`fantasy-land/traverse`][].
  //.
  //. `fantasy-land/traverse` implementations are provided for the following
  //. built-in types: Array and Object.
  //.
  //. See also [`sequence`](#sequence).
  //.
  //. ```javascript
  //. > traverse(Array, x => x, [[1, 2, 3], [4, 5]])
  //. [[1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]]
  //.
  //. > traverse(Identity, x => Identity(x + 1), [1, 2, 3])
  //. Identity([2, 3, 4])
  //. ```
  function traverse(typeRep, f, traversable) {
    return Traversable.methods.traverse(traversable)(typeRep, f);
  }

  //# sequence :: (Applicative f, Traversable t) => (TypeRep f, t (f a)) -> f (t a)
  //.
  //. Inverts the given `t (f a)` to produce an `f (t a)`.
  //.
  //. This function is derived from [`traverse`](#traverse).
  //.
  //. ```javascript
  //. > sequence(Array, Identity([1, 2, 3]))
  //. [Identity(1), Identity(2), Identity(3)]
  //.
  //. > sequence(Identity, [Identity(1), Identity(2), Identity(3)])
  //. Identity([1, 2, 3])
  //. ```
  function sequence(typeRep, traversable) {
    return traverse(typeRep, identity, traversable);
  }

  //# extend :: Extend w => (w a -> b, w a) -> w b
  //.
  //. Function wrapper for [`fantasy-land/extend`][].
  //.
  //. `fantasy-land/extend` implementations are provided for the following
  //. built-in types: Array and Function.
  //.
  //. ```javascript
  //. > extend(ss => ss.join(''), ['x', 'y', 'z'])
  //. ['xyz', 'yz', 'z']
  //.
  //. > extend(f => f([3, 4]), reverse)([1, 2])
  //. [4, 3, 2, 1]
  //. ```
  function extend(f, extend_) {
    return Extend.methods.extend(extend_)(f);
  }

  //# duplicate :: Extend w => w a -> w (w a)
  //.
  //. Adds one level of nesting to a comonadic structure.
  //.
  //. This function is derived from [`extend`](#extend).
  //.
  //. ```javascript
  //. > duplicate(Identity(1))
  //. Identity(Identity(1))
  //.
  //. > duplicate([1])
  //. [[1]]
  //.
  //. > duplicate([1, 2, 3])
  //. [[1, 2, 3], [2, 3], [3]]
  //.
  //. > duplicate(reverse)([1, 2])([3, 4])
  //. [4, 3, 2, 1]
  //. ```
  function duplicate(extend_) {
    return extend(identity, extend_);
  }

  //# extract :: Comonad w => w a -> a
  //.
  //. Function wrapper for [`fantasy-land/extract`][].
  //.
  //. ```javascript
  //. > extract(Identity(42))
  //. 42
  //. ```
  function extract(comonad) {
    return Comonad.methods.extract(comonad)();
  }

  //# contramap :: Contravariant f => (b -> a, f a) -> f b
  //.
  //. Function wrapper for [`fantasy-land/contramap`][].
  //.
  //. `fantasy-land/contramap` implementations are provided for the following
  //. built-in types: Function.
  //.
  //. ```javascript
  //. > contramap(s => s.length, Math.sqrt)('Sanctuary')
  //. 3
  //. ```
  function contramap(f, contravariant) {
    return Contravariant.methods.contramap(contravariant)(f);
  }

  return {
    TypeClass: TypeClass,
    Setoid: Setoid,
    Ord: Ord,
    Semigroupoid: Semigroupoid,
    Category: Category,
    Semigroup: Semigroup,
    Monoid: Monoid,
    Group: Group,
    Filterable: Filterable,
    Functor: Functor,
    Bifunctor: Bifunctor,
    Profunctor: Profunctor,
    Apply: Apply,
    Applicative: Applicative,
    Chain: Chain,
    ChainRec: ChainRec,
    Monad: Monad,
    Alt: Alt,
    Plus: Plus,
    Alternative: Alternative,
    Foldable: Foldable,
    Traversable: Traversable,
    Extend: Extend,
    Comonad: Comonad,
    Contravariant: Contravariant,
    equals: equals,
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    min: min,
    max: max,
    compose: compose,
    id: id,
    concat: concat,
    empty: empty,
    invert: invert,
    filter: filter,
    reject: reject,
    map: map,
    flip: flip,
    bimap: bimap,
    mapLeft: mapLeft,
    promap: promap,
    ap: ap,
    lift2: lift2,
    lift3: lift3,
    apFirst: apFirst,
    apSecond: apSecond,
    of: of,
    append: append,
    prepend: prepend,
    chain: chain,
    join: join,
    chainRec: chainRec,
    alt: alt,
    zero: zero,
    reduce: reduce,
    size: size,
    elem: elem,
    foldMap: foldMap,
    reverse: reverse,
    sort: sort,
    sortBy: sortBy,
    takeWhile: takeWhile,
    dropWhile: dropWhile,
    traverse: traverse,
    sequence: sequence,
    extend: extend,
    duplicate: duplicate,
    extract: extract,
    contramap: contramap
  };

}));

//. [Alt]:                      v:fantasyland/fantasy-land#alt
//. [Alternative]:              v:fantasyland/fantasy-land#alternative
//. [Applicative]:              v:fantasyland/fantasy-land#applicative
//. [Apply]:                    v:fantasyland/fantasy-land#apply
//. [Bifunctor]:                v:fantasyland/fantasy-land#bifunctor
//. [Category]:                 v:fantasyland/fantasy-land#category
//. [Chain]:                    v:fantasyland/fantasy-land#chain
//. [ChainRec]:                 v:fantasyland/fantasy-land#chainrec
//. [Comonad]:                  v:fantasyland/fantasy-land#comonad
//. [Contravariant]:            v:fantasyland/fantasy-land#contravariant
//. [Extend]:                   v:fantasyland/fantasy-land#extend
//. [FL]:                       v:fantasyland/fantasy-land
//. [Filterable]:               v:fantasyland/fantasy-land#filterable
//. [Foldable]:                 v:fantasyland/fantasy-land#foldable
//. [Functor]:                  v:fantasyland/fantasy-land#functor
//. [Group]:                    v:fantasyland/fantasy-land#group
//. [Monad]:                    v:fantasyland/fantasy-land#monad
//. [Monoid]:                   v:fantasyland/fantasy-land#monoid
//. [Ord]:                      v:fantasyland/fantasy-land#ord
//. [Plus]:                     v:fantasyland/fantasy-land#plus
//. [Profunctor]:               v:fantasyland/fantasy-land#profunctor
//. [Semigroup]:                v:fantasyland/fantasy-land#semigroup
//. [Semigroupoid]:             v:fantasyland/fantasy-land#semigroupoid
//. [Setoid]:                   v:fantasyland/fantasy-land#setoid
//. [Traversable]:              v:fantasyland/fantasy-land#traversable
//. [`fantasy-land/alt`]:       v:fantasyland/fantasy-land#alt-method
//. [`fantasy-land/ap`]:        v:fantasyland/fantasy-land#ap-method
//. [`fantasy-land/bimap`]:     v:fantasyland/fantasy-land#bimap-method
//. [`fantasy-land/chain`]:     v:fantasyland/fantasy-land#chain-method
//. [`fantasy-land/chainRec`]:  v:fantasyland/fantasy-land#chainrec-method
//. [`fantasy-land/compose`]:   v:fantasyland/fantasy-land#compose-method
//. [`fantasy-land/concat`]:    v:fantasyland/fantasy-land#concat-method
//. [`fantasy-land/contramap`]: v:fantasyland/fantasy-land#contramap-method
//. [`fantasy-land/empty`]:     v:fantasyland/fantasy-land#empty-method
//. [`fantasy-land/equals`]:    v:fantasyland/fantasy-land#equals-method
//. [`fantasy-land/extend`]:    v:fantasyland/fantasy-land#extend-method
//. [`fantasy-land/extract`]:   v:fantasyland/fantasy-land#extract-method
//. [`fantasy-land/filter`]:    v:fantasyland/fantasy-land#filter-method
//. [`fantasy-land/id`]:        v:fantasyland/fantasy-land#id-method
//. [`fantasy-land/invert`]:    v:fantasyland/fantasy-land#invert-method
//. [`fantasy-land/lte`]:       v:fantasyland/fantasy-land#lte-method
//. [`fantasy-land/map`]:       v:fantasyland/fantasy-land#map-method
//. [`fantasy-land/of`]:        v:fantasyland/fantasy-land#of-method
//. [`fantasy-land/promap`]:    v:fantasyland/fantasy-land#promap-method
//. [`fantasy-land/reduce`]:    v:fantasyland/fantasy-land#reduce-method
//. [`fantasy-land/traverse`]:  v:fantasyland/fantasy-land#traverse-method
//. [`fantasy-land/zero`]:      v:fantasyland/fantasy-land#zero-method
//. [stable sort]:              https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
//. [type-classes]:             https://github.com/sanctuary-js/sanctuary-def#type-classes

},{"sanctuary-type-identifiers":2}],2:[function(require,module,exports){
/*
        @@@@@@@            @@@@@@@         @@
      @@       @@        @@       @@      @@@
    @@   @@@ @@  @@    @@   @@@ @@  @@   @@@@@@ @@   @@@  @@ @@@      @@@@
   @@  @@   @@@   @@  @@  @@   @@@   @@   @@@   @@   @@@  @@@   @@  @@@   @@
   @@  @@   @@@   @@  @@  @@   @@@   @@   @@@   @@   @@@  @@@   @@  @@@@@@@@
   @@  @@   @@@  @@   @@  @@   @@@  @@    @@@   @@   @@@  @@@   @@  @@@
    @@   @@@ @@@@@     @@   @@@ @@@@@      @@@    @@@ @@  @@@@@@      @@@@@
      @@                 @@                           @@  @@
        @@@@@@@            @@@@@@@               @@@@@    @@
                                                          */
//. # sanctuary-type-identifiers
//.
//. A type is a set of values. Boolean, for example, is the type comprising
//. `true` and `false`. A value may be a member of multiple types (`42` is a
//. member of Number, PositiveNumber, Integer, and many other types).
//.
//. In certain situations it is useful to divide JavaScript values into
//. non-overlapping types. The language provides two constructs for this
//. purpose: the [`typeof`][1] operator and [`Object.prototype.toString`][2].
//. Each has pros and cons, but neither supports user-defined types.
//.
//. This package specifies an [algorithm][3] for deriving a _type identifier_
//. from any JavaScript value, and exports an implementation of the algorithm.
//. Authors of algebraic data types may follow this specification in order to
//. make their data types compatible with the algorithm.
//.
//. ### Algorithm
//.
//. 1.  Take any JavaScript value `x`.
//.
//. 2.  If `x` is `null` or `undefined`, go to step 6.
//.
//. 3.  If `x.constructor` evaluates to `null` or `undefined`, go to step 6.
//.
//. 4.  If `x.constructor.prototype === x`, go to step 6. This check prevents a
//.     prototype object from being considered a member of its associated type.
//.
//. 5.  If `typeof x.constructor['@@type']` evaluates to `'string'`, return
//.     the value of `x.constructor['@@type']`.
//.
//. 6.  Return the [`Object.prototype.toString`][2] representation of `x`
//.     without the leading `'[object '` and trailing `']'`.
//.
//. ### Compatibility
//.
//. For an algebraic data type to be compatible with the [algorithm][3]:
//.
//.   - every member of the type must have a `constructor` property pointing
//.     to an object known as the _type representative_;
//.
//.   - the type representative must have a `@@type` property; and
//.
//.   - the type representative's `@@type` property (the _type identifier_)
//.     must be a string primitive, ideally `'<npm-package-name>/<type-name>'`.
//.
//. For example:
//.
//. ```javascript
//. //  Identity :: a -> Identity a
//. function Identity(x) {
//.   if (!(this instanceof Identity)) return new Identity(x);
//.   this.value = x;
//. }
//.
//. Identity['@@type'] = 'my-package/Identity';
//. ```
//.
//. Note that by using a constructor function the `constructor` property is set
//. implicitly for each value created. Constructor functions are convenient for
//. this reason, but are not required. This definition is also valid:
//.
//. ```javascript
//. //  IdentityTypeRep :: TypeRep Identity
//. var IdentityTypeRep = {
//.   '@@type': 'my-package/Identity'
//. };
//.
//. //  Identity :: a -> Identity a
//. function Identity(x) {
//.   return {constructor: IdentityTypeRep, value: x};
//. }
//. ```
//.
//. ### Usage
//.
//. ```javascript
//. var Identity = require('my-package').Identity;
//. var type = require('sanctuary-type-identifiers');
//.
//. type(null);         // => 'Null'
//. type(true);         // => 'Boolean'
//. type([1, 2, 3]);    // => 'Array'
//. type(Identity);     // => 'Function'
//. type(Identity(0));  // => 'my-package/Identity'
//. ```
//.
//.
//. [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
//. [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//. [3]: #algorithm

(function(f) {

  'use strict';

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = f();
  } else if (typeof define === 'function' && define.amd != null) {
    define([], f);
  } else {
    self.sanctuaryTypeIdentifiers = f();
  }

}(function() {

  'use strict';

  //  $$type :: String
  var $$type = '@@type';

  //  type :: Any -> String
  function type(x) {
    return x != null &&
           x.constructor != null &&
           x.constructor.prototype !== x &&
           typeof x.constructor[$$type] === 'string' ?
      x.constructor[$$type] :
      Object.prototype.toString.call(x).slice('[object '.length, -']'.length);
  }

  return type;

}));

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Collections = require('typescript-collections');
var Z = require('sanctuary-type-classes');

var Entry = /** @class */ (function () {
    function Entry(rank, action) {
        this.rank = rank;
        this.action = action;
        this.seq = Entry.nextSeq++;
    }
    Entry.prototype.toString = function () {
        return this.seq.toString();
    };
    Entry.nextSeq = 0;
    return Entry;
}());
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.inCallback = 0;
        this.toRegen = false;
        this.prioritizedQ = new Collections.PriorityQueue(function (a, b) {
            // Note: Low priority numbers are treated as "greater" according to this
            // comparison, so that the lowest numbers are highest priority and go first.
            if (a.rank.rank < b.rank.rank)
                return 1;
            if (a.rank.rank > b.rank.rank)
                return -1;
            if (a.seq < b.seq)
                return 1;
            if (a.seq > b.seq)
                return -1;
            return 0;
        });
        this.entries = new Collections.Set(function (a) { return a.toString(); });
        this.sampleQ = [];
        this.lastQ = [];
        this.postQ = null;
    }
    Transaction.prototype.requestRegen = function () {
        this.toRegen = true;
    };
    Transaction.prototype.prioritized = function (target, action) {
        var e = new Entry(target, action);
        this.prioritizedQ.enqueue(e);
        this.entries.add(e);
    };
    Transaction.prototype.sample = function (h) {
        this.sampleQ.push(h);
    };
    Transaction.prototype.last = function (h) {
        this.lastQ.push(h);
    };
    Transaction._collectCyclesAtEnd = function () {
        Transaction.run(function () { return Transaction.collectCyclesAtEnd = true; });
    };
    /**
     * Add an action to run after all last() actions.
     */
    Transaction.prototype.post = function (childIx, action) {
        if (this.postQ == null)
            this.postQ = [];
        // If an entry exists already, combine the old one with the new one.
        while (this.postQ.length <= childIx)
            this.postQ.push(null);
        var existing = this.postQ[childIx], neu = existing === null ? action
            : function () {
                existing();
                action();
            };
        this.postQ[childIx] = neu;
    };
    // If the priority queue has entries in it when we modify any of the nodes'
    // ranks, then we need to re-generate it to make sure it's up-to-date.
    Transaction.prototype.checkRegen = function () {
        if (this.toRegen) {
            this.toRegen = false;
            this.prioritizedQ.clear();
            var es = this.entries.toArray();
            for (var i = 0; i < es.length; i++)
                this.prioritizedQ.enqueue(es[i]);
        }
    };
    Transaction.prototype.isActive = function () {
        return Transaction.currentTransaction ? true : false;
    };
    Transaction.prototype.close = function () {
        while (true) {
            while (true) {
                this.checkRegen();
                if (this.prioritizedQ.isEmpty())
                    break;
                var e = this.prioritizedQ.dequeue();
                this.entries.remove(e);
                e.action();
            }
            var sq = this.sampleQ;
            this.sampleQ = [];
            for (var i = 0; i < sq.length; i++)
                sq[i]();
            if (this.prioritizedQ.isEmpty() && this.sampleQ.length < 1)
                break;
        }
        for (var i = 0; i < this.lastQ.length; i++)
            this.lastQ[i]();
        this.lastQ = [];
        if (this.postQ != null) {
            for (var i = 0; i < this.postQ.length; i++) {
                if (this.postQ[i] != null) {
                    var parent_1 = Transaction.currentTransaction;
                    try {
                        if (i > 0) {
                            Transaction.currentTransaction = new Transaction();
                            try {
                                this.postQ[i]();
                                Transaction.currentTransaction.close();
                            }
                            catch (err) {
                                Transaction.currentTransaction.close();
                                throw err;
                            }
                        }
                        else {
                            Transaction.currentTransaction = null;
                            this.postQ[i]();
                        }
                        Transaction.currentTransaction = parent_1;
                    }
                    catch (err) {
                        Transaction.currentTransaction = parent_1;
                        throw err;
                    }
                }
            }
            this.postQ = null;
        }
    };
    /**
     * Add a runnable that will be executed whenever a transaction is started.
     * That runnable may start transactions itself, which will not cause the
     * hooks to be run recursively.
     *
     * The main use case of this is the implementation of a time/alarm system.
     */
    Transaction.onStart = function (r) {
        Transaction.onStartHooks.push(r);
    };
    Transaction.run = function (f) {
        var transWas = Transaction.currentTransaction;
        if (transWas === null) {
            if (!Transaction.runningOnStartHooks) {
                Transaction.runningOnStartHooks = true;
                try {
                    for (var i = 0; i < Transaction.onStartHooks.length; i++)
                        Transaction.onStartHooks[i]();
                }
                finally {
                    Transaction.runningOnStartHooks = false;
                }
            }
            Transaction.currentTransaction = new Transaction();
        }
        try {
            var a = f();
            if (transWas === null) {
                Transaction.currentTransaction.close();
                Transaction.currentTransaction = null;
                if (Transaction.collectCyclesAtEnd) {
                    Vertex.collectCycles();
                    Transaction.collectCyclesAtEnd = false;
                }
            }
            return a;
        }
        catch (err) {
            if (transWas === null) {
                Transaction.currentTransaction.close();
                Transaction.currentTransaction = null;
            }
            throw err;
        }
    };
    Transaction.currentTransaction = null;
    Transaction.onStartHooks = [];
    Transaction.runningOnStartHooks = false;
    Transaction.collectCyclesAtEnd = false;
    return Transaction;
}());

var totalRegistrations = 0;
function getTotalRegistrations() {
    return totalRegistrations;
}
var Source = /** @class */ (function () {
    // Note:
    // When register_ == null, a rank-independent source is constructed (a vertex which is just kept alive for the
    // lifetime of vertex that contains this source).
    // When register_ != null it is likely to be a rank-dependent source, but this will depend on the code inside register_.
    //
    // rank-independent souces DO NOT bump up the rank of the vertex containing those sources.
    // rank-depdendent sources DO bump up the rank of the vertex containing thoses sources when required.
    function Source(origin, register_) {
        this.registered = false;
        this.deregister_ = null;
        if (origin === null)
            throw new Error("null origin!");
        this.origin = origin;
        this.register_ = register_;
    }
    Source.prototype.register = function (target) {
        var _this = this;
        if (!this.registered) {
            this.registered = true;
            if (this.register_ !== null)
                this.deregister_ = this.register_();
            else {
                // Note: The use of Vertex.NULL here instead of "target" is not a bug, this is done to create a
                // rank-independent source. (see note at constructor for more details.). The origin vertex still gets
                // added target vertex's children for the memory management algorithm.
                this.origin.increment(Vertex.NULL);
                target.childrn.push(this.origin);
                this.deregister_ = function () {
                    _this.origin.decrement(Vertex.NULL);
                    for (var i = target.childrn.length - 1; i >= 0; --i) {
                        if (target.childrn[i] === _this.origin) {
                            target.childrn.splice(i, 1);
                            break;
                        }
                    }
                };
            }
        }
    };
    Source.prototype.deregister = function (target) {
        if (this.registered) {
            this.registered = false;
            if (this.deregister_ !== null)
                this.deregister_();
        }
    };
    return Source;
}());
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["gray"] = 1] = "gray";
    Color[Color["white"] = 2] = "white";
    Color[Color["purple"] = 3] = "purple";
})(Color || (Color = {}));
var roots = [];
var nextID = 0;
var verbose = false;
var Vertex = /** @class */ (function () {
    function Vertex(name, rank, sources) {
        this.targets = [];
        this.childrn = [];
        this.visited = false;
        // --------------------------------------------------------
        // Synchronous Cycle Collection algorithm presented in "Concurrent
        // Cycle Collection in Reference Counted Systems" by David F. Bacon
        // and V.T. Rajan.
        this.color = Color.black;
        this.buffered = false;
        this.refCountAdj = 0;
        this.name = name;
        this.rank = rank;
        this.sources = sources;
        this.id = nextID++;
    }
    Vertex.prototype.refCount = function () { return this.targets.length; };
    Vertex.prototype.register = function (target) {
        return this.increment(target);
    };
    Vertex.prototype.deregister = function (target) {
        if (verbose)
            console.log("deregister " + this.descr() + " => " + target.descr());
        this.decrement(target);
        Transaction._collectCyclesAtEnd();
    };
    Vertex.prototype.incRefCount = function (target) {
        var anyChanged = false;
        if (this.refCount() == 0) {
            for (var i = 0; i < this.sources.length; i++)
                this.sources[i].register(this);
        }
        this.targets.push(target);
        target.childrn.push(this);
        if (target.ensureBiggerThan(this.rank))
            anyChanged = true;
        totalRegistrations++;
        return anyChanged;
    };
    Vertex.prototype.decRefCount = function (target) {
        if (verbose)
            console.log("DEC " + this.descr());
        var matched = false;
        for (var i = target.childrn.length - 1; i >= 0; i--)
            if (target.childrn[i] === this) {
                target.childrn.splice(i, 1);
                break;
            }
        for (var i = 0; i < this.targets.length; i++)
            if (this.targets[i] === target) {
                this.targets.splice(i, 1);
                matched = true;
                break;
            }
        if (matched) {
            if (this.refCount() == 0) {
                for (var i = 0; i < this.sources.length; i++)
                    this.sources[i].deregister(this);
            }
            totalRegistrations--;
        }
    };
    Vertex.prototype.addSource = function (src) {
        this.sources.push(src);
        if (this.refCount() > 0)
            src.register(this);
    };
    Vertex.prototype.ensureBiggerThan = function (limit) {
        if (this.visited) {
            // Undoing cycle detection for now until TimerSystem.ts ranks are checked.
            //throw new Error("Vertex cycle detected.");
            return false;
        }
        if (this.rank > limit)
            return false;
        this.visited = true;
        this.rank = limit + 1;
        for (var i = 0; i < this.targets.length; i++)
            this.targets[i].ensureBiggerThan(this.rank);
        this.visited = false;
        return true;
    };
    Vertex.prototype.descr = function () {
        var colStr = null;
        switch (this.color) {
            case Color.black:
                colStr = "black";
                break;
            case Color.gray:
                colStr = "gray";
                break;
            case Color.white:
                colStr = "white";
                break;
            case Color.purple:
                colStr = "purple";
                break;
        }
        var str = this.id + " " + this.name + " [" + this.refCount() + "/" + this.refCountAdj + "] " + colStr + " ->";
        var chs = this.children();
        for (var i = 0; i < chs.length; i++) {
            str = str + " " + chs[i].id;
        }
        return str;
    };
    Vertex.prototype.children = function () { return this.childrn; };
    Vertex.prototype.increment = function (referrer) {
        return this.incRefCount(referrer);
    };
    Vertex.prototype.decrement = function (referrer) {
        this.decRefCount(referrer);
        if (this.refCount() == 0)
            this.release();
        else
            this.possibleRoots();
    };
    Vertex.prototype.release = function () {
        this.color = Color.black;
        if (!this.buffered)
            this.free();
    };
    Vertex.prototype.free = function () {
        while (this.targets.length > 0)
            this.decRefCount(this.targets[0]);
    };
    Vertex.prototype.possibleRoots = function () {
        if (this.color != Color.purple) {
            this.color = Color.purple;
            if (!this.buffered) {
                this.buffered = true;
                roots.push(this);
            }
        }
    };
    Vertex.collectCycles = function () {
        if (Vertex.collectingCycles) {
            return;
        }
        try {
            Vertex.collectingCycles = true;
            Vertex.markRoots();
            Vertex.scanRoots();
            Vertex.collectRoots();
            for (var i = Vertex.toBeFreedList.length - 1; i >= 0; --i) {
                var vertex = Vertex.toBeFreedList.splice(i, 1)[0];
                vertex.free();
            }
        }
        finally {
            Vertex.collectingCycles = false;
        }
    };
    Vertex.markRoots = function () {
        var newRoots = [];
        // check refCountAdj was restored to zero before mark roots
        if (verbose) {
            var stack = roots.slice(0);
            var visited = new Collections.Set();
            while (stack.length != 0) {
                var vertex = stack.pop();
                if (visited.contains(vertex.id)) {
                    continue;
                }
                visited.add(vertex.id);
                if (vertex.refCountAdj != 0) {
                    console.log("markRoots(): reachable refCountAdj was not reset to zero: " + vertex.descr());
                }
                for (var i = 0; i < vertex.childrn.length; ++i) {
                    var child = vertex.childrn[i];
                    stack.push(child);
                }
            }
        }
        //
        for (var i = 0; i < roots.length; i++) {
            if (verbose)
                console.log("markRoots " + roots[i].descr()); // ###
            if (roots[i].color == Color.purple) {
                roots[i].markGray();
                newRoots.push(roots[i]);
            }
            else {
                roots[i].buffered = false;
                if (roots[i].color == Color.black && roots[i].refCount() == 0)
                    Vertex.toBeFreedList.push(roots[i]);
            }
        }
        roots = newRoots;
    };
    Vertex.scanRoots = function () {
        for (var i = 0; i < roots.length; i++)
            roots[i].scan();
    };
    Vertex.collectRoots = function () {
        for (var i = 0; i < roots.length; i++) {
            roots[i].buffered = false;
            roots[i].collectWhite();
        }
        if (verbose) { // double check adjRefCount is zero for all vertices reachable by roots
            var stack = roots.slice(0);
            var visited = new Collections.Set();
            while (stack.length != 0) {
                var vertex = stack.pop();
                if (visited.contains(vertex.id)) {
                    continue;
                }
                visited.add(vertex.id);
                if (vertex.refCountAdj != 0) {
                    console.log("collectRoots(): reachable refCountAdj was not reset to zero: " + vertex.descr());
                }
                for (var i = 0; i < vertex.childrn.length; ++i) {
                    var child = vertex.childrn[i];
                    stack.push(child);
                }
            }
        }
        roots = [];
    };
    Vertex.prototype.markGray = function () {
        if (this.color != Color.gray) {
            this.color = Color.gray;
            var chs = this.children();
            for (var i = 0; i < chs.length; i++) {
                chs[i].refCountAdj--;
                if (verbose)
                    console.log("markGray " + this.descr());
                chs[i].markGray();
            }
        }
    };
    Vertex.prototype.scan = function () {
        if (verbose)
            console.log("scan " + this.descr());
        if (this.color == Color.gray) {
            if (this.refCount() + this.refCountAdj > 0)
                this.scanBlack();
            else {
                this.color = Color.white;
                if (verbose)
                    console.log("scan WHITE " + this.descr());
                var chs = this.children();
                for (var i = 0; i < chs.length; i++)
                    chs[i].scan();
            }
        }
    };
    Vertex.prototype.scanBlack = function () {
        this.refCountAdj = 0;
        this.color = Color.black;
        var chs = this.children();
        for (var i = 0; i < chs.length; i++) {
            if (verbose)
                console.log("scanBlack " + this.descr());
            if (chs[i].color != Color.black)
                chs[i].scanBlack();
        }
    };
    Vertex.prototype.collectWhite = function () {
        if (this.color == Color.white && !this.buffered) {
            if (verbose)
                console.log("collectWhite " + this.descr());
            this.color = Color.black;
            this.refCountAdj = 0;
            var chs = this.children();
            for (var i = 0; i < chs.length; i++)
                chs[i].collectWhite();
            Vertex.toBeFreedList.push(this);
        }
    };
    Vertex.NULL = new Vertex("user", 1e12, []);
    Vertex.collectingCycles = false;
    Vertex.toBeFreedList = [];
    return Vertex;
}());

var Lambda1 = /** @class */ (function () {
    function Lambda1(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda1;
}());
function lambda1(f, deps) {
    return new Lambda1(f, deps);
}
function Lambda1_deps(f) {
    if (f instanceof Lambda1)
        return f.deps;
    else
        return [];
}
function Lambda1_toFunction(f) {
    if (f instanceof Lambda1)
        return f.f;
    else
        return f;
}
var Lambda2 = /** @class */ (function () {
    function Lambda2(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda2;
}());
function lambda2(f, deps) {
    return new Lambda2(f, deps);
}
function Lambda2_deps(f) {
    if (f instanceof Lambda2)
        return f.deps;
    else
        return [];
}
function Lambda2_toFunction(f) {
    if (f instanceof Lambda2)
        return f.f;
    else
        return f;
}
var Lambda3 = /** @class */ (function () {
    function Lambda3(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda3;
}());
function lambda3(f, deps) {
    return new Lambda3(f, deps);
}
function Lambda3_deps(f) {
    if (f instanceof Lambda3)
        return f.deps;
    else
        return [];
}
function Lambda3_toFunction(f) {
    if (f instanceof Lambda3)
        return f.f;
    else
        return f;
}
var Lambda4 = /** @class */ (function () {
    function Lambda4(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda4;
}());
function lambda4(f, deps) {
    return new Lambda4(f, deps);
}
function Lambda4_deps(f) {
    if (f instanceof Lambda4)
        return f.deps;
    else
        return [];
}
function Lambda4_toFunction(f) {
    if (f instanceof Lambda4)
        return f.f;
    else
        return f;
}
var Lambda5 = /** @class */ (function () {
    function Lambda5(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda5;
}());
function lambda5(f, deps) {
    return new Lambda5(f, deps);
}
function Lambda5_deps(f) {
    if (f instanceof Lambda5)
        return f.deps;
    else
        return [];
}
function Lambda5_toFunction(f) {
    if (f instanceof Lambda5)
        return f.f;
    else
        return f;
}
var Lambda6 = /** @class */ (function () {
    function Lambda6(f, deps) {
        this.f = f;
        this.deps = deps;
    }
    return Lambda6;
}());
function lambda6(f, deps) {
    return new Lambda6(f, deps);
}
function Lambda6_deps(f) {
    if (f instanceof Lambda6)
        return f.deps;
    else
        return [];
}
function Lambda6_toFunction(f) {
    if (f instanceof Lambda6)
        return f.f;
    else
        return f;
}
function toSources(deps) {
    var ss = [];
    for (var i = 0; i < deps.length; i++) {
        var dep = deps[i];
        ss.push(new Source(dep.getVertex__(), null));
    }
    return ss;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * A representation for a value that may not be available until the current
 * transaction is closed.
 */
var Lazy = /** @class */ (function () {
    function Lazy(f) {
        this.f = f;
    }
    /**
     * Get the value if available, throwing an exception if not.
     * In the general case this should only be used in subsequent transactions to
     * when the Lazy was obtained.
     */
    Lazy.prototype.get = function () {
        return this.f();
    };
    /**
     * Map the lazy value according to the specified function, so the returned Lazy reflects
     * the value of the function applied to the input Lazy's value.
     * @param f Function to apply to the contained value. It must be <em>referentially transparent</em>.
     */
    Lazy.prototype.map = function (f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f()); });
    };
    /**
     * Lift a binary function into lazy values, so the returned Lazy reflects
     * the value of the function applied to the input Lazys' values.
     */
    Lazy.prototype.lift = function (b, f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f(), b.f()); });
    };
    /**
     * Lift a ternary function into lazy values, so the returned Lazy reflects
     * the value of the function applied to the input Lazys' values.
     */
    Lazy.prototype.lift3 = function (b, c, f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f(), b.f(), c.f()); });
    };
    /**
     * Lift a quaternary function into lazy values, so the returned Lazy reflects
     * the value of the function applied to the input Lazys' values.
     */
    Lazy.prototype.lift4 = function (b, c, d, f) {
        var _this = this;
        return new Lazy(function () { return f(_this.f(), b.f(), c.f(), d.f()); });
    };
    return Lazy;
}());

var Unit = /** @class */ (function () {
    function Unit() {
    }
    Unit.UNIT = new Unit();
    return Unit;
}());

var Operational = /** @class */ (function () {
    function Operational() {
    }
    /**
     * A stream that gives the updates/steps for a {@link Cell}.
     * <P>
     * This is an OPERATIONAL primitive, which is not part of the main Sodium
     * API. It breaks the property of non-detectability of cell steps/updates.
     * The rule with this primitive is that you should only use it in functions
     * that do not allow the caller to detect the cell updates.
     */
    Operational.updates = function (c) {
        /*  Don't think this is needed
        const out = new StreamWithSend<A>(null);
        out.setVertex__(new Vertex("updates", 0, [
                new Source(
                    c.getStream__().getVertex__(),
                    () => {
                        return c.getStream__().listen_(out.getVertex__(), (a : A) => {
                            out.send_(a);
                        }, false);
                    }
                ),
                new Source(
                    c.getVertex__(),
                    () => {
                        return () => { };
                    }
                )
            ]
        ));
        return out;
        */
        return c.getStream__();
    };
    /**
     * A stream that is guaranteed to fire once in the transaction where value() is invoked, giving
     * the current value of the cell, and thereafter behaves like {@link updates(Cell)},
     * firing for each update/step of the cell's value.
     * <P>
     * This is an OPERATIONAL primitive, which is not part of the main Sodium
     * API. It breaks the property of non-detectability of cell steps/updates.
     * The rule with this primitive is that you should only use it in functions
     * that do not allow the caller to detect the cell updates.
     */
    Operational.value = function (c) {
        return Transaction.run(function () {
            var sSpark = new StreamWithSend();
            Transaction.currentTransaction.prioritized(sSpark.getVertex__(), function () {
                sSpark.send_(Unit.UNIT);
            });
            var sInitial = sSpark.snapshot1(c);
            return Operational.updates(c).orElse(sInitial);
        });
    };
    /**
     * Push each event onto a new transaction guaranteed to come before the next externally
     * initiated transaction. Same as {@link split(Stream)} but it works on a single value.
     */
    Operational.defer = function (s) {
        return Operational.split(s.map(function (a) {
            return [a];
        }));
    };
    /**
     * Push each event in the list onto a newly created transaction guaranteed
     * to come before the next externally initiated transaction. Note that the semantics
     * are such that two different invocations of split() can put events into the same
     * new transaction, so the resulting stream's events could be simultaneous with
     * events output by split() or {@link defer(Stream)} invoked elsewhere in the code.
     */
    Operational.split = function (s) {
        var out = new StreamWithSend(null);
        out.setVertex__(new Vertex("split", 0, [
            new Source(s.getVertex__(), function () {
                out.getVertex__().childrn.push(s.getVertex__());
                var cleanups = [];
                cleanups.push(s.listen_(Vertex.NULL, function (as) {
                    var _loop_1 = function (i) {
                        Transaction.currentTransaction.post(i, function () {
                            Transaction.run(function () {
                                out.send_(as[i]);
                            });
                        });
                    };
                    for (var i = 0; i < as.length; i++) {
                        _loop_1(i);
                    }
                }, false));
                cleanups.push(function () {
                    var chs = out.getVertex__().childrn;
                    for (var i = chs.length - 1; i >= 0; --i) {
                        if (chs[i] == s.getVertex__()) {
                            chs.splice(i, 1);
                            break;
                        }
                    }
                });
                return function () {
                    cleanups.forEach(function (cleanup) { return cleanup(); });
                    cleanups.splice(0, cleanups.length);
                };
            })
        ]));
        return out;
    };
    return Operational;
}());

var Tuple2 = /** @class */ (function () {
    function Tuple2(a, b) {
        this.a = a;
        this.b = b;
    }
    return Tuple2;
}());

var LazySample = /** @class */ (function () {
    function LazySample(cell) {
        this.hasValue = false;
        this.value = null;
        this.cell = cell;
    }
    return LazySample;
}());
var ApplyState = /** @class */ (function () {
    function ApplyState() {
        this.f = null;
        this.f_present = false;
        this.a = null;
        this.a_present = false;
    }
    return ApplyState;
}());
var Cell = /** @class */ (function () {
    function Cell(initValue, str) {
        var _this = this;
        this.value = initValue;
        if (!str) {
            this.str = new Stream();
            this.vertex = new Vertex("ConstCell", 0, []);
        }
        else
            Transaction.run(function () { return _this.setStream(str); });
    }
    Cell.prototype.setStream = function (str) {
        var _this = this;
        this.str = str;
        var me = this, src = new Source(str.getVertex__(), function () {
            return str.listen_(me.vertex, function (a) {
                if (me.valueUpdate == null) {
                    Transaction.currentTransaction.last(function () {
                        me.value = me.valueUpdate;
                        me.lazyInitValue = null;
                        me.valueUpdate = null;
                    });
                }
                me.valueUpdate = a;
            }, false);
        });
        this.vertex = new Vertex("Cell", 0, [src]);
        // We do a trick here of registering the source for the duration of the current
        // transaction so that we are guaranteed to catch any stream events that
        // occur in the same transaction.
        //
        // A new temporary vertex null is constructed here as a performance work-around to avoid
        // having too many children in Vertex.NULL as a deregister operation is O(n^2) where
        // n is the number of children in the vertex.
        var tmpVertexNULL = new Vertex("Cell::setStream", 1e12, []);
        this.vertex.register(tmpVertexNULL);
        Transaction.currentTransaction.last(function () {
            _this.vertex.deregister(tmpVertexNULL);
        });
    };
    Cell.prototype.getVertex__ = function () {
        return this.vertex;
    };
    Cell.prototype.getStream__ = function () {
        return this.str;
    };
    /**
     * Sample the cell's current value.
     * <p>
     * It should generally be avoided in favour of {@link listen(Handler)} so you don't
     * miss any updates, but in many circumstances it makes sense.
     * <p>
     * NOTE: In the Java and other versions of Sodium, using sample() inside map(), filter() and
     * merge() is encouraged. In the Javascript/Typescript version, not so much, for the
     * following reason: The memory management is different in the Javascript version, and this
     * requires us to track all dependencies. In order for the use of sample() inside
     * a closure to be correct, the cell that was sample()d inside the closure would have to be
     * declared explicitly using the helpers lambda1(), lambda2(), etc. Because this is
     * something that can be got wrong, we don't encourage this kind of use of sample() in
     * Javascript. Better and simpler to use snapshot().
     * <p>
     * NOTE: If you need to sample() a cell, you have to make sure it's "alive" in terms of
     * memory management or it will ignore updates. To make a cell work correctly
     * with sample(), you have to ensure that it's being used. One way to guarantee this is
     * to register a dummy listener on the cell. It will also work to have it referenced
     * by something that is ultimately being listened to.
     */
    Cell.prototype.sample = function () {
        var _this = this;
        return Transaction.run(function () { return _this.sampleNoTrans__(); });
    };
    Cell.prototype.sampleNoTrans__ = function () {
        return this.value;
    };
    /**
     * A variant of {@link sample()} that works with {@link CellLoop}s when they haven't been looped yet.
     * It should be used in any code that's general enough that it could be passed a {@link CellLoop}.
     * @see Stream#holdLazy(Lazy) Stream.holdLazy()
     */
    Cell.prototype.sampleLazy = function () {
        var me = this;
        return Transaction.run(function () { return me.sampleLazyNoTrans__(); });
    };
    Cell.prototype.sampleLazyNoTrans__ = function () {
        var me = this, s = new LazySample(me);
        Transaction.currentTransaction.sample(function () {
            s.value = me.valueUpdate != null ? me.valueUpdate : me.sampleNoTrans__();
            s.hasValue = true;
            s.cell = null;
        });
        return new Lazy(function () {
            if (s.hasValue)
                return s.value;
            else
                return s.cell.sample();
        });
    };
    /**
     * Transform the cell's value according to the supplied function, so the returned Cell
     * always reflects the value of the function applied to the input Cell's value.
     * @param f Function to apply to convert the values. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.map = function (f) {
        var c = this;
        return Transaction.run(function () {
            return Operational.updates(c).map(f).holdLazy(c.sampleLazy().map(Lambda1_toFunction(f)));
        });
    };
    /**
     * Lift a binary function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift = function (b, fn0) {
        var fn = Lambda2_toFunction(fn0), cf = this.map(function (aa) { return function (bb) { return fn(aa, bb); }; });
        return Cell.apply(cf, b, toSources(Lambda2_deps(fn0)));
    };
    /**
     * Lift a ternary function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift3 = function (b, c, fn0) {
        var fn = Lambda3_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return fn(aa, bb, cc); }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(cf, b), c, toSources(Lambda3_deps(fn0)));
    };
    /**
     * Lift a quaternary function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift4 = function (b, c, d, fn0) {
        var fn = Lambda4_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return function (dd) { return fn(aa, bb, cc, dd); }; }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(Cell.apply(cf, b), c), d, toSources(Lambda4_deps(fn0)));
    };
    /**
     * Lift a 5-argument function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift5 = function (b, c, d, e, fn0) {
        var fn = Lambda5_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return function (dd) { return function (ee) { return fn(aa, bb, cc, dd, ee); }; }; }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(Cell.apply(Cell.apply(cf, b), c), d), e, toSources(Lambda5_deps(fn0)));
    };
    /**
     * Lift a 6-argument function into cells, so the returned Cell always reflects the specified
     * function applied to the input cells' values.
     * @param fn Function to apply. It must be <em>referentially transparent</em>.
     */
    Cell.prototype.lift6 = function (b, c, d, e, f, fn0) {
        var fn = Lambda6_toFunction(fn0), mf = function (aa) { return function (bb) { return function (cc) { return function (dd) { return function (ee) { return function (ff) { return fn(aa, bb, cc, dd, ee, ff); }; }; }; }; }; }, cf = this.map(mf);
        return Cell.apply(Cell.apply(Cell.apply(Cell.apply(Cell.apply(cf, b), c), d), e), f, toSources(Lambda6_deps(fn0)));
    };
    /**
     * High order depenency traking. If any newly created sodium objects within a value of a cell of a sodium object
     * happen to accumulate state, this method will keep the accumulation of state up to date.
     */
    Cell.prototype.tracking = function (extractor) {
        var _this = this;
        var out = new StreamWithSend(null);
        var vertex = new Vertex("tracking", 0, [
            new Source(this.vertex, function () {
                var cleanup2 = function () { };
                var updateDeps = function (a) {
                    var lastCleanups2 = cleanup2;
                    var deps = extractor(a).map(function (dep) { return dep.getVertex__(); });
                    for (var i = 0; i < deps.length; ++i) {
                        var dep = deps[i];
                        vertex.childrn.push(dep);
                        dep.increment(Vertex.NULL);
                    }
                    cleanup2 = function () {
                        for (var i = 0; i < deps.length; ++i) {
                            var dep = deps[i];
                            for (var j = 0; j < vertex.childrn.length; ++j) {
                                if (vertex.childrn[j] === dep) {
                                    vertex.childrn.splice(j, 1);
                                    break;
                                }
                            }
                            dep.decrement(Vertex.NULL);
                        }
                    };
                    lastCleanups2();
                };
                updateDeps(_this.sample());
                var cleanup1 = Operational.updates(_this).listen_(vertex, function (a) {
                    updateDeps(a);
                    out.send_(a);
                }, false);
                return function () {
                    cleanup1();
                    cleanup2();
                };
            })
        ]);
        out.setVertex__(vertex);
        return out.holdLazy(this.sampleLazy());
    };
    /**
     * Lift an array of cells into a cell of an array.
     */
    Cell.liftArray = function (ca) {
        return Cell._liftArray(ca, 0, ca.length);
    };
    Cell._liftArray = function (ca, fromInc, toExc) {
        if (toExc - fromInc == 0) {
            return new Cell([]);
        }
        else if (toExc - fromInc == 1) {
            return ca[fromInc].map(function (a) { return [a]; });
        }
        else {
            var pivot = Math.floor((fromInc + toExc) / 2);
            // the thunk boxing/unboxing here is a performance hack for lift when there are simutaneous changing cells.
            return Cell._liftArray(ca, fromInc, pivot).lift(Cell._liftArray(ca, pivot, toExc), function (array1, array2) { return function () { return array1.concat(array2); }; })
                .map(function (x) { return x(); });
        }
    };
    /**
     * Apply a value inside a cell to a function inside a cell. This is the
     * primitive for all function lifting.
     */
    Cell.apply = function (cf, ca, sources) {
        return Transaction.run(function () {
            var pumping = false;
            var state = new ApplyState(), out = new StreamWithSend(), cf_updates = Operational.updates(cf), ca_updates = Operational.updates(ca), pump = function () {
                if (pumping) {
                    return;
                }
                pumping = true;
                Transaction.currentTransaction.prioritized(out.getVertex__(), function () {
                    var f = state.f_present ? state.f : cf.sampleNoTrans__();
                    var a = state.a_present ? state.a : ca.sampleNoTrans__();
                    out.send_(f(a));
                    pumping = false;
                });
            }, src1 = new Source(cf_updates.getVertex__(), function () {
                return cf_updates.listen_(out.getVertex__(), function (f) {
                    state.f = f;
                    state.f_present = true;
                    pump();
                }, false);
            }), src2 = new Source(ca_updates.getVertex__(), function () {
                return ca_updates.listen_(out.getVertex__(), function (a) {
                    state.a = a;
                    state.a_present = true;
                    pump();
                }, false);
            });
            out.setVertex__(new Vertex("apply", 0, [src1, src2].concat(sources ? sources : [])));
            return out.holdLazy(new Lazy(function () {
                return cf.sampleNoTrans__()(ca.sampleNoTrans__());
            }));
        });
    };
    /**
     * Unwrap a cell inside another cell to give a time-varying cell implementation.
     */
    Cell.switchC = function (cca) {
        return Transaction.run(function () {
            var za = cca.sampleLazy().map(function (ba) { return ba.sample(); }), out = new StreamWithSend();
            var outValue = null;
            var pumping = false;
            var pump = function () {
                if (pumping) {
                    return;
                }
                pumping = true;
                Transaction.currentTransaction.prioritized(out.getVertex__(), function () {
                    out.send_(outValue);
                    outValue = null;
                    pumping = false;
                });
            };
            var last_ca = null;
            var cca_value = Operational.value(cca), src = new Source(cca_value.getVertex__(), function () {
                var kill2 = last_ca === null ? null :
                    Operational.value(last_ca).listen_(out.getVertex__(), function (a) { outValue = a; pump(); }, false);
                var kill1 = cca_value.listen_(out.getVertex__(), function (ca) {
                    last_ca = ca;
                    // Connect before disconnect to avoid memory bounce, when switching to same cell twice.
                    var nextKill2 = Operational.value(ca).listen_(out.getVertex__(), function (a) {
                        outValue = a;
                        pump();
                    }, false);
                    if (kill2 !== null)
                        kill2();
                    kill2 = nextKill2;
                }, false);
                return function () { kill1(); kill2(); };
            });
            out.setVertex__(new Vertex("switchC", 0, [src]));
            return out.holdLazy(za);
        });
    };
    /**
     * Unwrap a stream inside a cell to give a time-varying stream implementation.
     */
    Cell.switchS = function (csa) {
        return Transaction.run(function () {
            var out = new StreamWithSend(), h2 = function (a) {
                out.send_(a);
            }, src = new Source(csa.getVertex__(), function () {
                var kill2 = csa.sampleNoTrans__().listen_(out.getVertex__(), h2, false);
                var kill1 = csa.getStream__().listen_(out.getVertex__(), function (sa) {
                    // Connect before disconnect to avoid memory bounce, when switching to same stream twice.
                    var nextKill2 = sa.listen_(out.getVertex__(), h2, true);
                    kill2();
                    kill2 = nextKill2;
                }, false);
                return function () { kill1(); kill2(); };
            });
            out.setVertex__(new Vertex("switchS", 0, [src]));
            return out;
        });
    };
    /**
     * When transforming a value from a larger type to a smaller type, it is likely for duplicate changes to become
     * propergated. This function insures only distinct changes get propergated.
     */
    Cell.prototype.calm = function (eq) {
        return Operational
            .updates(this)
            .collectLazy(this.sampleLazy(), function (newValue, oldValue) {
            var result;
            if (eq(newValue, oldValue)) {
                result = null;
            }
            else {
                result = newValue;
            }
            return new Tuple2(result, newValue);
        })
            .filterNotNull()
            .holdLazy(this.sampleLazy());
    };
    /**
     * This function is the same as calm, except you do not need to pass an eq function. This function will use (===)
     * as its eq function. I.E. calling calmRefEq() is the same as calm((a,b) => a === b).
     */
    Cell.prototype.calmRefEq = function () {
        return this.calm(function (a, b) { return a === b; });
    };
    /**
     * Listen for updates to the value of this cell. This is the observer pattern. The
     * returned {@link Listener} has a {@link Listener#unlisten()} method to cause the
     * listener to be removed. This is an OPERATIONAL mechanism is for interfacing between
     * the world of I/O and for FRP.
     * @param h The handler to execute when there's a new value.
     *   You should make no assumptions about what thread you are called on, and the
     *   handler should not block. You are not allowed to use {@link CellSink#send(Object)}
     *   or {@link StreamSink#send(Object)} in the handler.
     *   An exception will be thrown, because you are not meant to use this to create
     *   your own primitives.
     */
    Cell.prototype.listen = function (h) {
        var _this = this;
        return Transaction.run(function () {
            return Operational.value(_this).listen(h);
        });
    };
    /**
     * Fantasy-land Algebraic Data Type Compatability.
     * Cell satisfies the Functor, Apply, Applicative categories
     * @see {@link https://github.com/fantasyland/fantasy-land} for more info
     */
    //of :: Applicative f => a -> f a
    Cell['fantasy-land/of'] = function (a) {
        return new Cell(a);
    };
    //map :: Functor f => f a ~> (a -> b) -> f b
    Cell.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    //ap :: Apply f => f a ~> f (a -> b) -> f b
    Cell.prototype['fantasy-land/ap'] = function (cf) {
        return Cell.apply(cf, this);
    };
    return Cell;
}());

var Listener = /** @class */ (function () {
    function Listener(h, target) {
        this.h = h;
        this.target = target;
    }
    return Listener;
}());

var LazyCell = /** @class */ (function (_super) {
    __extends(LazyCell, _super);
    function LazyCell(lazyInitValue, str) {
        var _this = _super.call(this, null, null) || this;
        Transaction.run(function () {
            if (str)
                _this.setStream(str);
            _this.lazyInitValue = lazyInitValue;
        });
        return _this;
    }
    LazyCell.prototype.sampleNoTrans__ = function () {
        if (this.value == null && this.lazyInitValue != null) {
            this.value = this.lazyInitValue.get();
            this.lazyInitValue = null;
        }
        return this.value;
    };
    return LazyCell;
}(Cell));

var MergeState = /** @class */ (function () {
    function MergeState() {
        this.left = null;
        this.left_present = false;
        this.right = null;
        this.right_present = false;
    }
    return MergeState;
}());
var Stream = /** @class */ (function () {
    function Stream(vertex) {
        this.listeners = [];
        this.firings = [];
        this.vertex = vertex ? vertex : new Vertex("Stream", 0, []);
    }
    Stream.prototype.getVertex__ = function () {
        return this.vertex;
    };
    /**
     * Transform the stream's event values according to the supplied function, so the returned
     * Stream's event values reflect the value of the function applied to the input
     * Stream's event values.
     * @param f Function to apply to convert the values. It may construct FRP logic or use
     *    {@link Cell#sample()} in which case it is equivalent to {@link Stream#snapshot(Cell)}ing the
     *    cell. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.map = function (f) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda1_toFunction(f);
        out.vertex = new Vertex("map", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a));
                }, false);
            })
        ].concat(toSources(Lambda1_deps(f))));
        return out;
    };
    /**
     * Transform the stream's event values into the specified constant value.
     * @param b Constant value.
     */
    Stream.prototype.mapTo = function (b) {
        var _this = this;
        var out = new StreamWithSend(null);
        out.vertex = new Vertex("mapTo", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(b);
                }, false);
            })
        ]);
        return out;
    };
    /**
     * Variant of {@link Stream#merge(Stream, Lambda2)} that merges two streams and will drop an event
     * in the simultaneous case.
     * <p>
     * In the case where two events are simultaneous (i.e. both
     * within the same transaction), the event from <em>this</em> will take precedence, and
     * the event from <em>s</em> will be dropped.
     * If you want to specify your own combining function, use {@link Stream#merge(Stream, Lambda2)}.
     * s1.orElse(s2) is equivalent to s1.merge(s2, (l, r) -&gt; l).
     * <p>
     * The name orElse() is used instead of merge() to make it really clear that care should
     * be taken, because events can be dropped.
     */
    Stream.prototype.orElse = function (s) {
        return this.merge(s, function (left, right) {
            return left;
        });
    };
    /**
     * Merge two streams of the same type into one, so that events on either input appear
     * on the returned stream.
     * <p>
     * If the events are simultaneous (that is, one event from this and one from <em>s</em>
     * occurring in the same transaction), combine them into one using the specified combining function
     * so that the returned stream is guaranteed only ever to have one event per transaction.
     * The event from <em>this</em> will appear at the left input of the combining function, and
     * the event from <em>s</em> will appear at the right.
     * @param f Function to combine the values. It may construct FRP logic or use
     *    {@link Cell#sample()}. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.merge = function (s, f) {
        var _this = this;
        var ff = Lambda2_toFunction(f);
        var mergeState = new MergeState();
        var pumping = false;
        var out = new StreamWithSend(null);
        var pump = function () {
            if (pumping) {
                return;
            }
            pumping = true;
            Transaction.currentTransaction.prioritized(out.getVertex__(), function () {
                if (mergeState.left_present && mergeState.right_present) {
                    out.send_(ff(mergeState.left, mergeState.right));
                }
                else if (mergeState.left_present) {
                    out.send_(mergeState.left);
                }
                else if (mergeState.right_present) {
                    out.send_(mergeState.right);
                }
                mergeState.left = null;
                mergeState.left_present = false;
                mergeState.right = null;
                mergeState.right_present = false;
                pumping = false;
            });
        };
        var vertex = new Vertex("merge", 0, [
            new Source(this.vertex, function () { return _this.listen_(out.vertex, function (a) {
                mergeState.left = a;
                mergeState.left_present = true;
                pump();
            }, false); }),
            new Source(s.vertex, function () { return s.listen_(out.vertex, function (a) {
                mergeState.right = a;
                mergeState.right_present = true;
                pump();
            }, false); })
        ].concat(toSources(Lambda2_deps(f))));
        out.vertex = vertex;
        return out;
    };
    /**
     * Return a stream that only outputs events for which the predicate returns true.
     */
    Stream.prototype.filter = function (f) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda1_toFunction(f);
        out.vertex = new Vertex("filter", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    if (ff(a))
                        out.send_(a);
                }, false);
            })
        ].concat(toSources(Lambda1_deps(f))));
        return out;
    };
    /**
     * Return a stream that only outputs events that have present
     * values, discarding null values.
     */
    Stream.prototype.filterNotNull = function () {
        var _this = this;
        var out = new StreamWithSend(null);
        out.vertex = new Vertex("filterNotNull", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    if (a !== null)
                        out.send_(a);
                }, false);
            })
        ]);
        return out;
    };
    /**
     * Return a stream that only outputs events from the input stream
     * when the specified cell's value is true.
     */
    Stream.prototype.gate = function (c) {
        return this.snapshot(c, function (a, pred) {
            return pred ? a : null;
        }).filterNotNull();
    };
    /**
     * Variant of {@link snapshot(Cell, Lambda2)} that captures the cell's value
     * at the time of the event firing, ignoring the stream's value.
     */
    Stream.prototype.snapshot1 = function (c) {
        var _this = this;
        var out = new StreamWithSend(null);
        out.vertex = new Vertex("snapshot1", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(c.sampleNoTrans__());
                }, false);
            }),
            new Source(c.getVertex__(), null)
        ]);
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cell at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, {@link Stream#snapshot(Cell, Lambda2)}
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot = function (b, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda2_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null)
        ].concat(toSources(Lambda2_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot3 = function (b, c, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda3_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null)
        ].concat(toSources(Lambda3_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot4 = function (b, c, d, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda4_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__(), d.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null),
            new Source(d.getVertex__(), null)
        ].concat(toSources(Lambda4_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot5 = function (b, c, d, e, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda5_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__(), d.sampleNoTrans__(), e.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null),
            new Source(d.getVertex__(), null),
            new Source(e.getVertex__(), null)
        ].concat(toSources(Lambda5_deps(f_))));
        return out;
    };
    /**
     * Return a stream whose events are the result of the combination using the specified
     * function of the input stream's event value and the value of the cells at that time.
     * <P>
     * There is an implicit delay: State updates caused by event firings being held with
     * {@link Stream#hold(Object)} don't become visible as the cell's current value until
     * the following transaction. To put this another way, snapshot()
     * always sees the value of a cell as it was before any state changes from the current
     * transaction.
     */
    Stream.prototype.snapshot6 = function (b, c, d, e, f, f_) {
        var _this = this;
        var out = new StreamWithSend(null);
        var ff = Lambda6_toFunction(f_);
        out.vertex = new Vertex("snapshot", 0, [
            new Source(this.vertex, function () {
                return _this.listen_(out.vertex, function (a) {
                    out.send_(ff(a, b.sampleNoTrans__(), c.sampleNoTrans__(), d.sampleNoTrans__(), e.sampleNoTrans__(), f.sampleNoTrans__()));
                }, false);
            }),
            new Source(b.getVertex__(), null),
            new Source(c.getVertex__(), null),
            new Source(d.getVertex__(), null),
            new Source(e.getVertex__(), null),
            new Source(f.getVertex__(), null)
        ].concat(toSources(Lambda6_deps(f_))));
        return out;
    };
    /**
     * Create a {@link Cell} with the specified initial value, that is updated
     * by this stream's event values.
     * <p>
     * There is an implicit delay: State updates caused by event firings don't become
     * visible as the cell's current value as viewed by {@link Stream#snapshot(Cell, Lambda2)}
     * until the following transaction. To put this another way,
     * {@link Stream#snapshot(Cell, Lambda2)} always sees the value of a cell as it was before
     * any state changes from the current transaction.
     */
    Stream.prototype.hold = function (initValue) {
        return new Cell(initValue, this);
    };
    /**
     * A variant of {@link hold(Object)} with an initial value captured by {@link Cell#sampleLazy()}.
     */
    Stream.prototype.holdLazy = function (initValue) {
        return new LazyCell(initValue, this);
    };
    /**
     * Transform an event with a generalized state loop (a Mealy machine). The function
     * is passed the input and the old state and returns the new state and output value.
     * @param f Function to apply to update the state. It may construct FRP logic or use
     *    {@link Cell#sample()} in which case it is equivalent to {@link Stream#snapshot(Cell)}ing the
     *    cell. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.collect = function (initState, f) {
        return this.collectLazy(new Lazy(function () { return initState; }), f);
    };
    /**
     * A variant of {@link collect(Object, Lambda2)} that takes an initial state returned by
     * {@link Cell#sampleLazy()}.
     */
    Stream.prototype.collectLazy = function (initState, f) {
        var ea = this;
        return Transaction.run(function () {
            var es = new StreamLoop(), s = es.holdLazy(initState), ebs = ea.snapshot(s, f), eb = ebs.map(function (bs) { return bs.a; }), es_out = ebs.map(function (bs) { return bs.b; });
            es.loop(es_out);
            return eb;
        });
    };
    /**
     * Accumulate on input event, outputting the new state each time.
     * @param f Function to apply to update the state. It may construct FRP logic or use
     *    {@link Cell#sample()} in which case it is equivalent to {@link Stream#snapshot(Cell)}ing the
     *    cell. Apart from this the function must be <em>referentially transparent</em>.
     */
    Stream.prototype.accum = function (initState, f) {
        return this.accumLazy(new Lazy(function () { return initState; }), f);
    };
    /**
     * A variant of {@link accum(Object, Lambda2)} that takes an initial state returned by
     * {@link Cell#sampleLazy()}.
     */
    Stream.prototype.accumLazy = function (initState, f) {
        var ea = this;
        return Transaction.run(function () {
            var es = new StreamLoop(), s = es.holdLazy(initState), es_out = ea.snapshot(s, f);
            es.loop(es_out);
            return es_out.holdLazy(initState);
        });
    };
    /**
     * Return a stream that outputs only one value: the next event of the
     * input stream, starting from the transaction in which once() was invoked.
     */
    Stream.prototype.once = function () {
        /*
            return Transaction.run(() => {
                const ev = this,
                    out = new StreamWithSend<A>();
                let la : () => void = null;
                la = ev.listen_(out.vertex, (a : A) => {
                    if (la !== null) {
                        out.send_(a);
                        la();
                        la = null;
                    }
                }, false);
                return out;
            });
            */
        // We can't use the implementation above, beacuse deregistering
        // listeners triggers the exception
        // "send() was invoked before listeners were registered"
        // We can revisit this another time. For now we will use the less
        // efficient implementation below.
        var me = this;
        return Transaction.run(function () { return me.gate(me.mapTo(false).hold(true)); });
    };
    Stream.prototype.listen = function (h) {
        var _this = this;
        return Transaction.run(function () {
            return _this.listen_(Vertex.NULL, h, false);
        });
    };
    Stream.prototype.listen_ = function (target, h, suppressEarlierFirings) {
        var _this = this;
        if (this.vertex.register(target))
            Transaction.currentTransaction.requestRegen();
        var listener = new Listener(h, target);
        this.listeners.push(listener);
        if (!suppressEarlierFirings && this.firings.length != 0) {
            var firings_1 = this.firings.slice();
            Transaction.currentTransaction.prioritized(target, function () {
                // Anything sent already in this transaction must be sent now so that
                // there's no order dependency between send and listen.
                for (var i = 0; i < firings_1.length; i++)
                    h(firings_1[i]);
            });
        }
        return function () {
            var removed = false;
            for (var i = 0; i < _this.listeners.length; i++) {
                if (_this.listeners[i] == listener) {
                    _this.listeners.splice(i, 1);
                    removed = true;
                    break;
                }
            }
            if (removed)
                _this.vertex.deregister(target);
        };
    };
    /**
     * Fantasy-land Algebraic Data Type Compatability.
     * Stream satisfies the Functor and Monoid Categories (and hence Semigroup)
     * @see {@link https://github.com/fantasyland/fantasy-land} for more info
     */
    //map :: Functor f => f a ~> (a -> b) -> f b
    Stream.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    //concat :: Semigroup a => a ~> a -> a
    Stream.prototype['fantasy-land/concat'] = function (a) {
        return this.merge(a, function (left, right) {
            return (Z.Semigroup.test(left)) ? Z.concat(left, right) : left;
        });
    };
    //empty :: Monoid m => () -> m
    Stream.prototype['fantasy-land/empty'] = function () {
        return new Stream();
    };
    return Stream;
}());
var StreamWithSend = /** @class */ (function (_super) {
    __extends(StreamWithSend, _super);
    function StreamWithSend(vertex) {
        return _super.call(this, vertex) || this;
    }
    StreamWithSend.prototype.setVertex__ = function (vertex) {
        this.vertex = vertex;
    };
    StreamWithSend.prototype.send_ = function (a) {
        var _this = this;
        if (this.firings.length == 0)
            Transaction.currentTransaction.last(function () {
                _this.firings = [];
            });
        this.firings.push(a);
        var listeners = this.listeners.slice();
        var _loop_1 = function (i) {
            var h = listeners[i].h;
            Transaction.currentTransaction.prioritized(listeners[i].target, function () {
                Transaction.currentTransaction.inCallback++;
                try {
                    h(a);
                    Transaction.currentTransaction.inCallback--;
                }
                catch (err) {
                    Transaction.currentTransaction.inCallback--;
                    throw err;
                }
            });
        };
        for (var i = 0; i < listeners.length; i++) {
            _loop_1(i);
        }
    };
    return StreamWithSend;
}(Stream));
/**
 * A forward reference for a {@link Stream} equivalent to the Stream that is referenced.
 */
var StreamLoop = /** @class */ (function (_super) {
    __extends(StreamLoop, _super);
    function StreamLoop() {
        var _this = _super.call(this) || this;
        _this.assigned__ = false; // to do: Figure out how to hide this
        _this.vertex.name = "StreamLoop";
        if (Transaction.currentTransaction === null)
            throw new Error("StreamLoop/CellLoop must be used within an explicit transaction");
        return _this;
    }
    /**
     * Resolve the loop to specify what the StreamLoop was a forward reference to. It
     * must be invoked inside the same transaction as the place where the StreamLoop is used.
     * This requires you to create an explicit transaction with {@link Transaction#run(Lambda0)}
     * or {@link Transaction#runVoid(Runnable)}.
     */
    StreamLoop.prototype.loop = function (sa_out) {
        var _this = this;
        if (this.assigned__)
            throw new Error("StreamLoop looped more than once");
        this.assigned__ = true;
        this.vertex.addSource(new Source(sa_out.getVertex__(), function () {
            return sa_out.listen_(_this.vertex, function (a) {
                _this.send_(a);
            }, false);
        }));
    };
    return StreamLoop;
}(StreamWithSend));

var CoalesceHandler = /** @class */ (function () {
    function CoalesceHandler(f, out) {
        this.f = Lambda2_toFunction(f);
        this.out = out;
        this.out.getVertex__().sources = this.out.getVertex__().sources.concat(toSources(Lambda2_deps(f)));
        this.accumValid = false;
    }
    CoalesceHandler.prototype.send_ = function (a) {
        var _this = this;
        if (this.accumValid)
            this.accum = this.f(this.accum, a);
        else {
            Transaction.currentTransaction.prioritized(this.out.getVertex__(), function () {
                _this.out.send_(_this.accum);
                _this.accumValid = false;
                _this.accum = null;
            });
            this.accum = a;
            this.accumValid = true;
        }
    };
    return CoalesceHandler;
}());

/**
 * A stream that allows values to be pushed into it, acting as an interface between the
 * world of I/O and the world of FRP. Code that exports StreamSinks for read-only use
 * should downcast to {@link Stream}.
 */
var StreamSink = /** @class */ (function (_super) {
    __extends(StreamSink, _super);
    function StreamSink(f) {
        var _this = _super.call(this) || this;
        _this.disableListenCheck = false;
        if (!f)
            f = (function (l, r) {
                throw new Error("send() called more than once per transaction, which isn't allowed. Did you want to combine the events? Then pass a combining function to your StreamSink constructor.");
            });
        _this.coalescer = new CoalesceHandler(f, _this);
        return _this;
    }
    StreamSink.prototype.send = function (a) {
        var _this = this;
        Transaction.run(function () {
            // We throw this error if we send into FRP logic that has been constructed
            // but nothing is listening to it yet. We need to do it this way because
            // it's the only way to manage memory in a language with no finalizers.
            if (!_this.disableListenCheck) {
                if (_this.vertex.refCount() == 0) {
                    throw new Error("send() was invoked before listeners were registered");
                }
            }
            //
            if (Transaction.currentTransaction.inCallback > 0)
                throw new Error("You are not allowed to use send() inside a Sodium callback");
            _this.coalescer.send_(a);
        });
    };
    StreamSink.prototype.listen_ = function (target, h, suppressEarlierFirings) {
        var result = _super.prototype.listen_.call(this, target, h, suppressEarlierFirings);
        this.disableListenCheck = true;
        return result;
    };
    return StreamSink;
}(StreamWithSend));

/**
 * A forward reference for a {@link Cell} equivalent to the Cell that is referenced.
 */
var CellLoop = /** @class */ (function (_super) {
    __extends(CellLoop, _super);
    function CellLoop() {
        return _super.call(this, null, new StreamLoop()) || this;
    }
    /**
     * Resolve the loop to specify what the CellLoop was a forward reference to. It
     * must be invoked inside the same transaction as the place where the CellLoop is used.
     * This requires you to create an explicit transaction with {@link Transaction#run(Lambda0)}
     * or {@link Transaction#runVoid(Runnable)}.
     */
    CellLoop.prototype.loop = function (a_out) {
        var me = this;
        Transaction.run(function () {
            me.getStream__().loop(a_out.getStream__());
            me.lazyInitValue = a_out.sampleLazy();
        });
    };
    CellLoop.prototype.sampleNoTrans__ = function () {
        if (!this.getStream__().assigned__)
            throw new Error("CellLoop sampled before it was looped");
        return _super.prototype.sampleNoTrans__.call(this);
    };
    return CellLoop;
}(LazyCell));

/**
 * A cell that allows values to be pushed into it, acting as an interface between the
 * world of I/O and the world of FRP. Code that exports CellSinks for read-only use
 * should downcast to {@link Cell}.
 */
var CellSink = /** @class */ (function (_super) {
    __extends(CellSink, _super);
    /**
     * Construct a writable cell with the specified initial value. If multiple values are
     * sent in the same transaction, the specified function is used to combine them.
     *
     * If the function is not supplied, then an exception will be thrown in this case.
     */
    function CellSink(initValue, f) {
        return _super.call(this, initValue, new StreamSink(f)) || this;
    }
    /**
     * Send a value, modifying the value of the cell. send(A) may not be used inside
     * handlers registered with {@link Stream#listen(Handler)} or {@link Cell#listen(Handler)}.
     * An exception will be thrown, because CellSink is for interfacing I/O to FRP only.
     * You are not meant to use this to define your own primitives.
     * @param a Value to push into the cell.
     */
    CellSink.prototype.send = function (a) {
        this.getStream__().send(a);
    };
    return CellSink;
}(Cell));

var Router = /** @class */ (function () {
    function Router(inStream, selector, keyToStr) {
        var _this = this;
        this._inStream = inStream;
        this._table = new Collections.Dictionary(keyToStr);
        this._vertex =
            new Vertex("Router", this._inStream.getVertex__().rank + 1, // <-- estimated rank only, may be adjusted by ensureBiggerThan
            []);
        this._vertex.addSource(new Source(this._inStream.getVertex__(), function () {
            return _this._inStream.listen_(_this._vertex, function (a) {
                var ks = selector(a);
                var visited = new Collections.Set(keyToStr);
                var outs = [];
                for (var i = 0; i < ks.length; ++i) {
                    var k = ks[i];
                    if (visited.contains(k)) {
                        continue;
                    }
                    visited.add(k);
                    var outs2 = _this._table.getValue(k);
                    if (outs2 != undefined) {
                        for (var j = 0; j < outs2.length; ++j) {
                            outs.push(outs2[j]);
                        }
                    }
                }
                for (var i = 0; i < outs.length; ++i) {
                    outs[i].send_(a);
                }
            }, true);
        }));
    }
    Router.prototype.filterMatches = function (k) {
        var _this = this;
        var out = new StreamWithSend();
        var vertex = new Vertex("Router::filterMatches", this._vertex.rank + 1, // <-- estimated rank only, may be adjusted by ensureBiggerThan
        [
            new Source(this._vertex, function () {
                _this._vertex.increment(out.getVertex__());
                var outs = _this._table.getValue(k);
                if (outs == undefined) {
                    outs = [];
                    _this._table.setValue(k, outs);
                }
                outs.push(out);
                return function () {
                    _this._vertex.decrement(out.getVertex__());
                    var outs2 = _this._table.getValue(k);
                    for (var i = outs2.length - 1; i >= 0; --i) {
                        if (outs2[i] == out) {
                            outs2.splice(i, 1);
                            break;
                        }
                    }
                    if (outs2.length == 0) {
                        _this._table.remove(k);
                    }
                };
            })
        ]);
        out.setVertex__(vertex);
        return out;
    };
    return Router;
}());

/**
 * An interface for implementations of FRP timer systems.
 */
var TimerSystemImpl = /** @class */ (function () {
    function TimerSystemImpl() {
    }
    return TimerSystemImpl;
}());
var nextSeq = 0;
var Event = /** @class */ (function () {
    function Event(t, sAlarm) {
        this.t = t;
        this.sAlarm = sAlarm;
        this.seq = ++nextSeq;
    }
    return Event;
}());
var TimerSystem = /** @class */ (function () {
    function TimerSystem(impl) {
        var _this = this;
        this.eventQueue = new Collections.BSTree(function (a, b) {
            if (a.t < b.t)
                return -1;
            if (a.t > b.t)
                return 1;
            if (a.seq < b.seq)
                return -1;
            if (a.seq > b.seq)
                return 1;
            return 0;
        });
        Transaction.run(function () {
            _this.impl = impl;
            _this.tMinimum = 0;
            var timeSnk = new CellSink(impl.now());
            _this.time = timeSnk;
            // A dummy listener to time to keep it alive even when there are no other listeners.
            _this.time.listen(function (t) { });
            Transaction.onStart(function () {
                // Ensure the time is always increasing from the FRP's point of view.
                var t = _this.tMinimum = Math.max(_this.tMinimum, impl.now());
                var _loop_1 = function () {
                    var ev = null;
                    if (!_this.eventQueue.isEmpty()) {
                        var mev = _this.eventQueue.minimum();
                        if (mev.t <= t) {
                            ev = mev;
                            // TO DO: Detect infinite loops!
                        }
                    }
                    if (ev != null) {
                        timeSnk.send(ev.t);
                        Transaction.run(function () { return ev.sAlarm.send_(ev.t); });
                    }
                    else
                        return "break";
                };
                // Pop and execute all events earlier than or equal to t (the current time).
                while (true) {
                    var state_1 = _loop_1();
                    if (state_1 === "break")
                        break;
                }
                timeSnk.send(t);
            });
        });
    }
    /**
     * A timer that fires at the specified time, which can be null, meaning
     * that the alarm is not set.
     */
    TimerSystem.prototype.at = function (tAlarm) {
        var _this = this;
        var current = null, cancelCurrent = null, active = false, tAl = null, sampled = false;
        var sAlarm = new StreamWithSend(null), updateTimer = function () {
            if (cancelCurrent !== null) {
                cancelCurrent();
                _this.eventQueue.remove(current);
            }
            cancelCurrent = null;
            current = null;
            if (active) {
                if (!sampled) {
                    sampled = true;
                    tAl = tAlarm.sampleNoTrans__();
                }
                if (tAl !== null) {
                    current = new Event(tAl, sAlarm);
                    _this.eventQueue.add(current);
                    cancelCurrent = _this.impl.setTimer(tAl, function () {
                        // Correction to ensure the clock time appears to be >= the
                        // alarm time. It can be a few milliseconds early, and
                        // this breaks things otherwise, because it doesn't think
                        // it's time to fire the alarm yet.
                        _this.tMinimum = Math.max(_this.tMinimum, tAl);
                        // Open and close a transaction to trigger queued
                        // events to run.
                        Transaction.run(function () { });
                    });
                }
            }
        };
        sAlarm.setVertex__(new Vertex("at", 0, [
            new Source(tAlarm.getVertex__(), function () {
                active = true;
                sampled = false;
                Transaction.currentTransaction.prioritized(sAlarm.getVertex__(), updateTimer);
                var kill = tAlarm.getStream__().listen_(sAlarm.getVertex__(), function (oAlarm) {
                    tAl = oAlarm;
                    sampled = true;
                    updateTimer();
                }, false);
                return function () {
                    active = false;
                    updateTimer();
                    kill();
                };
            })
        ]));
        return sAlarm;
    };
    return TimerSystem;
}());

/**
 * A timer system implementation using seconds as the time unit.
 */
var SecondsTimerSystem = /** @class */ (function (_super) {
    __extends(SecondsTimerSystem, _super);
    function SecondsTimerSystem() {
        return _super.call(this, new SecondsTimerSystemImpl()) || this;
    }
    return SecondsTimerSystem;
}(TimerSystem));
var SecondsTimerSystemImpl = /** @class */ (function (_super) {
    __extends(SecondsTimerSystemImpl, _super);
    function SecondsTimerSystemImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set a timer that will execute the specified callback at the specified time.
     * @return A function that can be used to cancel the timer.
     */
    SecondsTimerSystemImpl.prototype.setTimer = function (t, callback) {
        var timeout = setTimeout(callback, Math.max((t - this.now()) * 1000, 0));
        return function () { clearTimeout(timeout); };
    };
    /**
     * Return the current clock time.
     */
    SecondsTimerSystemImpl.prototype.now = function () {
        return Date.now() * 0.001;
    };
    return SecondsTimerSystemImpl;
}(TimerSystemImpl));

/**
 * A timer system implementation using milliseconds as the time unit.
 */
var MillisecondsTimerSystem = /** @class */ (function (_super) {
    __extends(MillisecondsTimerSystem, _super);
    function MillisecondsTimerSystem() {
        return _super.call(this, new MillisecondsTimerSystemImpl()) || this;
    }
    return MillisecondsTimerSystem;
}(TimerSystem));
var MillisecondsTimerSystemImpl = /** @class */ (function (_super) {
    __extends(MillisecondsTimerSystemImpl, _super);
    function MillisecondsTimerSystemImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set a timer that will execute the specified callback at the specified time.
     * @return A function that can be used to cancel the timer.
     */
    MillisecondsTimerSystemImpl.prototype.setTimer = function (t, callback) {
        var timeout = setTimeout(callback, Math.max(t - this.now(), 0));
        return function () { clearTimeout(timeout); };
    };
    /**
     * Return the current clock time.
     */
    MillisecondsTimerSystemImpl.prototype.now = function () {
        return Date.now();
    };
    return MillisecondsTimerSystemImpl;
}(TimerSystemImpl));

var IOAction = /** @class */ (function () {
    function IOAction() {
    }
    /*!
     * Convert a function that performs asynchronous I/O taking input A
     * and returning a value of type B into an I/O action of type
     * (sa : Stream<A>) => Stream<B>
     */
    IOAction.fromAsync = function (performIO) {
        return function (sa) {
            var out = new StreamWithSend(null);
            out.setVertex__(new Vertex("map", 0, [
                new Source(sa.getVertex__(), function () {
                    return sa.listen_(out.getVertex__(), function (a) {
                        performIO(a, function (b) {
                            Transaction.run(function () {
                                out.send_(b);
                            });
                        });
                    }, false);
                })
            ]));
            return out;
        };
    };
    return IOAction;
}());

exports.lambda1 = lambda1;
exports.lambda2 = lambda2;
exports.lambda3 = lambda3;
exports.lambda4 = lambda4;
exports.lambda5 = lambda5;
exports.lambda6 = lambda6;
exports.Stream = Stream;
exports.StreamLoop = StreamLoop;
exports.StreamSink = StreamSink;
exports.Cell = Cell;
exports.CellLoop = CellLoop;
exports.CellSink = CellSink;
exports.Router = Router;
exports.Transaction = Transaction;
exports.Tuple2 = Tuple2;
exports.Unit = Unit;
exports.Operational = Operational;
exports.getTotalRegistrations = getTotalRegistrations;
exports.Vertex = Vertex;
exports.TimerSystemImpl = TimerSystemImpl;
exports.TimerSystem = TimerSystem;
exports.SecondsTimerSystem = SecondsTimerSystem;
exports.MillisecondsTimerSystem = MillisecondsTimerSystem;
exports.IOAction = IOAction;


},{"sanctuary-type-classes":1,"typescript-collections":19}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BSTreeKV_1 = require("./BSTreeKV");
/**
 * Special-case of the binary search tree in which the search key is equal to the element type.
 * This definition is suitable when the element type can not be split between what defines its order
 * and what does not (eg. primitive types as opposed to indexed records).
 *
 * The table below shows some use-case examples for both interfaces:
 *
 *           element type              |  most suitable interface
 * ------------------------------------|----------------------------
 *    number                           |  BSTree<number>
 *    string                           |  BSTree<string>
 * { order: number, data: string }     |  BSTreeKV<{order: number}, {order: number, data: string}>
 *
 * @see BSTreeKV
 */
var BSTree = /** @class */ (function (_super) {
    __extends(BSTree, _super);
    function BSTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BSTree;
}(BSTreeKV_1.default));
exports.default = BSTree;

},{"./BSTreeKV":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Queue_1 = require("./Queue");
/**
 * General binary search tree implementation.
 *
 * This interface allows one to search elements using a subset of their attributes (thus the
 * tree can be used as an index for complex objects).
 * The attributes required to define an ordering in the tree must be defined in the type K.
 * Any additional attribute must be defined in the type V.
 *
 * @see BSTree
 */
var BSTreeKV = /** @class */ (function () {
    /**
     * Creates an empty binary search tree.
     * @class <p>A binary search tree is a binary tree in which each
     * internal node stores an element such that the elements stored in the
     * left subtree are less than it and the elements
     * stored in the right subtree are greater.</p>
     * <p>Formally, a binary search tree is a node-based binary tree data structure which
     * has the following properties:</p>
     * <ul>
     * <li>The left subtree of a node contains only nodes with elements less
     * than the node's element</li>
     * <li>The right subtree of a node contains only nodes with elements greater
     * than the node's element</li>
     * <li>Both the left and right subtrees must also be binary search trees.</li>
     * </ul>
     * <p>If the inserted elements are custom objects a compare function must
     * be provided at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function BSTreeKV(compareFunction) {
        this.root = null;
        this.compare = compareFunction || util.defaultCompare;
        this.nElements = 0;
    }
    /**
     * Adds the specified element to this tree if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this tree did not already contain the specified element.
     */
    BSTreeKV.prototype.add = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        if (this.insertNode(this.createNode(element)) !== null) {
            this.nElements++;
            return true;
        }
        return false;
    };
    /**
     * Removes all of the elements from this tree.
     */
    BSTreeKV.prototype.clear = function () {
        this.root = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this tree contains no elements.
     * @return {boolean} true if this tree contains no elements.
     */
    BSTreeKV.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Returns the number of elements in this tree.
     * @return {number} the number of elements in this tree.
     */
    BSTreeKV.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this tree contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this tree contains the specified element,
     * false otherwise.
     */
    BSTreeKV.prototype.contains = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        return this.searchNode(this.root, element) !== null;
    };
    /**
     * Looks for the value with the provided search key.
     * @param {Object} element The key to look for
     * @return {Object} The value found or undefined if it was not found.
     */
    BSTreeKV.prototype.search = function (element) {
        var ret = this.searchNode(this.root, element);
        if (ret === null) {
            return undefined;
        }
        return ret.element;
    };
    /**
     * Removes the specified element from this tree if it is present.
     * @return {boolean} true if this tree contained the specified element.
     */
    BSTreeKV.prototype.remove = function (element) {
        var node = this.searchNode(this.root, element);
        if (node === null) {
            return false;
        }
        this.removeNode(node);
        this.nElements--;
        return true;
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * in-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.inorderTraversal = function (callback) {
        this.inorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in pre-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.preorderTraversal = function (callback) {
        this.preorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in post-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.postorderTraversal = function (callback) {
        this.postorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * level-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.levelTraversal = function (callback) {
        this.levelTraversalAux(this.root, callback);
    };
    /**
     * Returns the minimum element of this tree.
     * @return {*} the minimum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTreeKV.prototype.minimum = function () {
        if (this.isEmpty() || this.root === null) {
            return undefined;
        }
        return this.minimumAux(this.root).element;
    };
    /**
     * Returns the maximum element of this tree.
     * @return {*} the maximum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTreeKV.prototype.maximum = function () {
        if (this.isEmpty() || this.root === null) {
            return undefined;
        }
        return this.maximumAux(this.root).element;
    };
    /**
     * Executes the provided function once for each element present in this tree in inorder.
     * Equivalent to inorderTraversal.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    BSTreeKV.prototype.forEach = function (callback) {
        this.inorderTraversal(callback);
    };
    /**
     * Returns an array containing all of the elements in this tree in in-order.
     * @return {Array} an array containing all of the elements in this tree in in-order.
     */
    BSTreeKV.prototype.toArray = function () {
        var array = [];
        this.inorderTraversal(function (element) {
            array.push(element);
            return true;
        });
        return array;
    };
    /**
     * Returns the height of this tree.
     * @return {number} the height of this tree or -1 if is empty.
     */
    BSTreeKV.prototype.height = function () {
        return this.heightAux(this.root);
    };
    /**
     * @private
     */
    BSTreeKV.prototype.searchNode = function (node, element) {
        var cmp = 1;
        while (node !== null && cmp !== 0) {
            cmp = this.compare(element, node.element);
            if (cmp < 0) {
                node = node.leftCh;
            }
            else if (cmp > 0) {
                node = node.rightCh;
            }
        }
        return node;
    };
    /**
     * @private
     */
    BSTreeKV.prototype.transplant = function (n1, n2) {
        if (n1.parent === null) {
            this.root = n2;
        }
        else if (n1 === n1.parent.leftCh) {
            n1.parent.leftCh = n2;
        }
        else {
            n1.parent.rightCh = n2;
        }
        if (n2 !== null) {
            n2.parent = n1.parent;
        }
    };
    /**
     * @private
     */
    BSTreeKV.prototype.removeNode = function (node) {
        if (node.leftCh === null) {
            this.transplant(node, node.rightCh);
        }
        else if (node.rightCh === null) {
            this.transplant(node, node.leftCh);
        }
        else {
            var y = this.minimumAux(node.rightCh);
            if (y.parent !== node) {
                this.transplant(y, y.rightCh);
                y.rightCh = node.rightCh;
                y.rightCh.parent = y;
            }
            this.transplant(node, y);
            y.leftCh = node.leftCh;
            y.leftCh.parent = y;
        }
    };
    /**
     * @private
     */
    BSTreeKV.prototype.inorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
     * @private
     */
    BSTreeKV.prototype.levelTraversalAux = function (node, callback) {
        var queue = new Queue_1.default();
        if (node !== null) {
            queue.enqueue(node);
        }
        node = queue.dequeue() || null;
        while (node != null) {
            if (callback(node.element) === false) {
                return;
            }
            if (node.leftCh !== null) {
                queue.enqueue(node.leftCh);
            }
            if (node.rightCh !== null) {
                queue.enqueue(node.rightCh);
            }
            node = queue.dequeue() || null;
        }
    };
    /**
     * @private
     */
    BSTreeKV.prototype.preorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
     * @private
     */
    BSTreeKV.prototype.postorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.rightCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
    };
    BSTreeKV.prototype.minimumAux = function (node) {
        while (node != null && node.leftCh !== null) {
            node = node.leftCh;
        }
        return node;
    };
    BSTreeKV.prototype.maximumAux = function (node) {
        while (node != null && node.rightCh !== null) {
            node = node.rightCh;
        }
        return node;
    };
    /**
     * @private
     */
    BSTreeKV.prototype.heightAux = function (node) {
        if (node === null) {
            return -1;
        }
        return Math.max(this.heightAux(node.leftCh), this.heightAux(node.rightCh)) + 1;
    };
    /*
    * @private
    */
    BSTreeKV.prototype.insertNode = function (node) {
        var parent = null;
        var position = this.root;
        while (position !== null) {
            var cmp = this.compare(node.element, position.element);
            if (cmp === 0) {
                return null;
            }
            else if (cmp < 0) {
                parent = position;
                position = position.leftCh;
            }
            else {
                parent = position;
                position = position.rightCh;
            }
        }
        node.parent = parent;
        if (parent === null) {
            // tree is empty
            this.root = node;
        }
        else if (this.compare(node.element, parent.element) < 0) {
            parent.leftCh = node;
        }
        else {
            parent.rightCh = node;
        }
        return node;
    };
    /**
     * @private
     */
    BSTreeKV.prototype.createNode = function (element) {
        return {
            element: element,
            leftCh: null,
            rightCh: null,
            parent: null
        };
    };
    return BSTreeKV;
}());
exports.default = BSTreeKV;

},{"./Queue":15,"./util":20}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var Set_1 = require("./Set");
var Bag = /** @class */ (function () {
    /**
     * Creates an empty bag.
     * @class <p>A bag is a special kind of set in which members are
     * allowed to appear more than once.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to unique strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    function Bag(toStrFunction) {
        this.toStrF = toStrFunction || util.defaultToString;
        this.dictionary = new Dictionary_1.default(this.toStrF);
        this.nElements = 0;
    }
    /**
     * Adds nCopies of the specified object to this bag.
     * @param {Object} element element to add.
     * @param {number=} nCopies the number of copies to add, if this argument is
     * undefined 1 copy is added.
     * @return {boolean} true unless element is undefined.
     */
    Bag.prototype.add = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            var node = {
                value: element,
                copies: nCopies
            };
            this.dictionary.setValue(element, node);
        }
        else {
            this.dictionary.getValue(element).copies += nCopies;
        }
        this.nElements += nCopies;
        return true;
    };
    /**
     * Counts the number of copies of the specified object in this bag.
     * @param {Object} element the object to search for..
     * @return {number} the number of copies of the object, 0 if not found
     */
    Bag.prototype.count = function (element) {
        if (!this.contains(element)) {
            return 0;
        }
        else {
            return this.dictionary.getValue(element).copies;
        }
    };
    /**
     * Returns true if this bag contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this bag contains the specified element,
     * false otherwise.
     */
    Bag.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
     * Removes nCopies of the specified object to this bag.
     * If the number of copies to remove is greater than the actual number
     * of copies in the Bag, all copies are removed.
     * @param {Object} element element to remove.
     * @param {number=} nCopies the number of copies to remove, if this argument is
     * undefined 1 copy is removed.
     * @return {boolean} true if at least 1 element was removed.
     */
    Bag.prototype.remove = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            return false;
        }
        else {
            var node = this.dictionary.getValue(element);
            if (nCopies > node.copies) {
                this.nElements -= node.copies;
            }
            else {
                this.nElements -= nCopies;
            }
            node.copies -= nCopies;
            if (node.copies <= 0) {
                this.dictionary.remove(element);
            }
            return true;
        }
    };
    /**
     * Returns an array containing all of the elements in this big in arbitrary order,
     * including multiple copies.
     * @return {Array} an array containing all of the elements in this bag.
     */
    Bag.prototype.toArray = function () {
        var a = [];
        var values = this.dictionary.values();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var node = values_1[_i];
            var element = node.value;
            var copies = node.copies;
            for (var j = 0; j < copies; j++) {
                a.push(element);
            }
        }
        return a;
    };
    /**
     * Returns a set of unique elements in this bag.
     * @return {collections.Set<T>} a set of unique elements in this bag.
     */
    Bag.prototype.toSet = function () {
        var toret = new Set_1.default(this.toStrF);
        var elements = this.dictionary.values();
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var ele = elements_1[_i];
            var value = ele.value;
            toret.add(value);
        }
        return toret;
    };
    /**
     * Executes the provided function once for each element
     * present in this bag, including multiple copies.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element. To break the iteration you can
     * optionally return false.
     */
    Bag.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            var value = v.value;
            var copies = v.copies;
            for (var i = 0; i < copies; i++) {
                if (callback(value) === false) {
                    return false;
                }
            }
            return true;
        });
    };
    /**
     * Returns the number of elements in this bag.
     * @return {number} the number of elements in this bag.
     */
    Bag.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this bag contains no elements.
     * @return {boolean} true if this bag contains no elements.
     */
    Bag.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Removes all of the elements from this bag.
     */
    Bag.prototype.clear = function () {
        this.nElements = 0;
        this.dictionary.clear();
    };
    return Bag;
}()); // End of bag
exports.default = Bag;

},{"./Dictionary":7,"./Set":16,"./util":20}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary = /** @class */ (function () {
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function Dictionary(toStrFunction) {
        this.table = {};
        this.nElements = 0;
        this.toStr = toStrFunction || util.defaultToString;
    }
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    Dictionary.prototype.getValue = function (key) {
        var pair = this.table['$' + this.toStr(key)];
        if (util.isUndefined(pair)) {
            return undefined;
        }
        return pair.value;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    Dictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var ret;
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (util.isUndefined(previousElement)) {
            this.nElements++;
            ret = undefined;
        }
        else {
            ret = previousElement.value;
        }
        this.table[k] = {
            key: key,
            value: value
        };
        return ret;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    Dictionary.prototype.remove = function (key) {
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (!util.isUndefined(previousElement)) {
            delete this.table[k];
            this.nElements--;
            return previousElement.value;
        }
        return undefined;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    Dictionary.prototype.keys = function () {
        var array = [];
        for (var name_1 in this.table) {
            if (util.has(this.table, name_1)) {
                var pair = this.table[name_1];
                array.push(pair.key);
            }
        }
        return array;
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    Dictionary.prototype.values = function () {
        var array = [];
        for (var name_2 in this.table) {
            if (util.has(this.table, name_2)) {
                var pair = this.table[name_2];
                array.push(pair.value);
            }
        }
        return array;
    };
    /**
     * Executes the provided function once for each key-value pair
     * present in this dictionary.
     * @param {function(Object,Object):*} callback function to execute, it is
     * invoked with two arguments: key and value. To break the iteration you can
     * optionally return false.
     */
    Dictionary.prototype.forEach = function (callback) {
        for (var name_3 in this.table) {
            if (util.has(this.table, name_3)) {
                var pair = this.table[name_3];
                var ret = callback(pair.key, pair.value);
                if (ret === false) {
                    return;
                }
            }
        }
    };
    /**
     * Returns true if this dictionary contains a mapping for the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary contains a mapping for the
     * specified key.
     */
    Dictionary.prototype.containsKey = function (key) {
        return !util.isUndefined(this.getValue(key));
    };
    /**
     * Removes all mappings from this dictionary.
     * @this {collections.Dictionary}
     */
    Dictionary.prototype.clear = function () {
        this.table = {};
        this.nElements = 0;
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    Dictionary.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    Dictionary.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    Dictionary.prototype.toString = function () {
        var toret = '{';
        this.forEach(function (k, v) {
            toret += "\n\t" + k + " : " + v;
        });
        return toret + '\n}';
    };
    return Dictionary;
}()); // End of dictionary
exports.default = Dictionary;

},{"./util":20}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
var FactoryDictionary = /** @class */ (function (_super) {
    __extends(FactoryDictionary, _super);
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>The default factory function should return a new object of the provided
     * type. Example:</p>
     * <pre>
     * function petFactory() {
     *  return new Pet();
     * }
     * </pre>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function():V=} defaultFactoryFunction function used to create a
     * default object.
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function FactoryDictionary(defaultFactoryFunction, toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.defaultFactoryFunction = defaultFactoryFunction;
        return _this;
    }
    /**
     * Associates the specified default value with the specified key in this dictionary,
     * if it didn't contain the key yet. If the key existed, the existing value will be used.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} defaultValue default value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or the default value,
     * if the key didn't exist yet.
     */
    FactoryDictionary.prototype.setDefault = function (key, defaultValue) {
        var currentValue = _super.prototype.getValue.call(this, key);
        if (util.isUndefined(currentValue)) {
            this.setValue(key, defaultValue);
            return defaultValue;
        }
        return currentValue;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns a default value created by the factory passed in the constructor,
     * if this dictionary contains no mapping for this key. The missing key will
     * automatically be added to the dictionary.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * a default value if the map contains no mapping for this key.
     */
    FactoryDictionary.prototype.getValue = function (key) {
        return this.setDefault(key, this.defaultFactoryFunction());
    };
    return FactoryDictionary;
}(Dictionary_1.default));
exports.default = FactoryDictionary;

},{"./Dictionary":7,"./util":20}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collections = require("./util");
var arrays = require("./arrays");
var Heap = /** @class */ (function () {
    /**
     * Creates an empty Heap.
     * @class
     * <p>A heap is a binary tree, where the nodes maintain the heap property:
     * each node is smaller than each of its children and therefore a MinHeap
     * This implementation uses an array to store elements.</p>
     * <p>If the inserted elements are custom objects a compare function must be provided,
     *  at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     *
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * <p>If a Max-Heap is wanted (greater elements on top) you can a provide a
     * reverse compare function to accomplish that behavior. Example:</p>
     *
     * <pre>
     * function reverseCompare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return 1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return -1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function Heap(compareFunction) {
        /**
         * Array used to store the elements of the heap.
         * @type {Array.<Object>}
         * @private
         */
        this.data = [];
        this.compare = compareFunction || collections.defaultCompare;
    }
    /**
     * Returns the index of the left child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the left child
     * for.
     * @return {number} The index of the left child.
     * @private
     */
    Heap.prototype.leftChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 1;
    };
    /**
     * Returns the index of the right child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the right child
     * for.
     * @return {number} The index of the right child.
     * @private
     */
    Heap.prototype.rightChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 2;
    };
    /**
     * Returns the index of the parent of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    Heap.prototype.parentIndex = function (nodeIndex) {
        return Math.floor((nodeIndex - 1) / 2);
    };
    /**
     * Returns the index of the smaller child node (if it exists).
     * @param {number} leftChild left child index.
     * @param {number} rightChild right child index.
     * @return {number} the index with the minimum value or -1 if it doesn't
     * exists.
     * @private
     */
    Heap.prototype.minIndex = function (leftChild, rightChild) {
        if (rightChild >= this.data.length) {
            if (leftChild >= this.data.length) {
                return -1;
            }
            else {
                return leftChild;
            }
        }
        else {
            if (this.compare(this.data[leftChild], this.data[rightChild]) <= 0) {
                return leftChild;
            }
            else {
                return rightChild;
            }
        }
    };
    /**
     * Moves the node at the given index up to its proper place in the heap.
     * @param {number} index The index of the node to move up.
     * @private
     */
    Heap.prototype.siftUp = function (index) {
        var parent = this.parentIndex(index);
        while (index > 0 && this.compare(this.data[parent], this.data[index]) > 0) {
            arrays.swap(this.data, parent, index);
            index = parent;
            parent = this.parentIndex(index);
        }
    };
    /**
     * Moves the node at the given index down to its proper place in the heap.
     * @param {number} nodeIndex The index of the node to move down.
     * @private
     */
    Heap.prototype.siftDown = function (nodeIndex) {
        //smaller child index
        var min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        while (min >= 0 && this.compare(this.data[nodeIndex], this.data[min]) > 0) {
            arrays.swap(this.data, min, nodeIndex);
            nodeIndex = min;
            min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        }
    };
    /**
     * Retrieves but does not remove the root element of this heap.
     * @return {*} The value at the root of the heap. Returns undefined if the
     * heap is empty.
     */
    Heap.prototype.peek = function () {
        if (this.data.length > 0) {
            return this.data[0];
        }
        else {
            return undefined;
        }
    };
    /**
     * Adds the given element into the heap.
     * @param {*} element the element.
     * @return true if the element was added or fals if it is undefined.
     */
    Heap.prototype.add = function (element) {
        if (collections.isUndefined(element)) {
            return false;
        }
        this.data.push(element);
        this.siftUp(this.data.length - 1);
        return true;
    };
    /**
     * Retrieves and removes the root element of this heap.
     * @return {*} The value removed from the root of the heap. Returns
     * undefined if the heap is empty.
     */
    Heap.prototype.removeRoot = function () {
        if (this.data.length > 0) {
            var obj = this.data[0];
            this.data[0] = this.data[this.data.length - 1];
            this.data.splice(this.data.length - 1, 1);
            if (this.data.length > 0) {
                this.siftDown(0);
            }
            return obj;
        }
        return undefined;
    };
    /**
     * Returns true if this heap contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this Heap contains the specified element, false
     * otherwise.
     */
    Heap.prototype.contains = function (element) {
        var equF = collections.compareToEquals(this.compare);
        return arrays.contains(this.data, element, equF);
    };
    /**
     * Returns the number of elements in this heap.
     * @return {number} the number of elements in this heap.
     */
    Heap.prototype.size = function () {
        return this.data.length;
    };
    /**
     * Checks if this heap is empty.
     * @return {boolean} true if and only if this heap contains no items; false
     * otherwise.
     */
    Heap.prototype.isEmpty = function () {
        return this.data.length <= 0;
    };
    /**
     * Removes all of the elements from this heap.
     */
    Heap.prototype.clear = function () {
        this.data.length = 0;
    };
    /**
     * Executes the provided function once for each element present in this heap in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Heap.prototype.forEach = function (callback) {
        arrays.forEach(this.data, callback);
    };
    return Heap;
}());
exports.default = Heap;

},{"./arrays":18,"./util":20}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
/**
 * This class is used by the LinkedDictionary Internally
 * Has to be a class, not an interface, because it needs to have
 * the 'unlink' function defined.
 */
var LinkedDictionaryPair = /** @class */ (function () {
    function LinkedDictionaryPair(key, value) {
        this.key = key;
        this.value = value;
    }
    LinkedDictionaryPair.prototype.unlink = function () {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    };
    return LinkedDictionaryPair;
}());
/**
 * The head and tail elements of the list have null key and value properties but they
 * usually link to normal nodes.
 */
var HeadOrTailLinkedDictionaryPair = /** @class */ (function () {
    function HeadOrTailLinkedDictionaryPair() {
        this.key = null;
        this.value = null;
    }
    HeadOrTailLinkedDictionaryPair.prototype.unlink = function () {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    };
    return HeadOrTailLinkedDictionaryPair;
}());
function isHeadOrTailLinkedDictionaryPair(p) {
    return !p.next;
}
var LinkedDictionary = /** @class */ (function (_super) {
    __extends(LinkedDictionary, _super);
    function LinkedDictionary(toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.head = new HeadOrTailLinkedDictionaryPair();
        _this.tail = new HeadOrTailLinkedDictionaryPair();
        _this.head.next = _this.tail;
        _this.tail.prev = _this.head;
        return _this;
    }
    /**
     * Inserts the new node to the 'tail' of the list, updating the
     * neighbors, and moving 'this.tail' (the End of List indicator) that
     * to the end.
     */
    LinkedDictionary.prototype.appendToTail = function (entry) {
        var lastNode = this.tail.prev;
        lastNode.next = entry;
        entry.prev = lastNode;
        entry.next = this.tail;
        this.tail.prev = entry;
    };
    /**
     * Retrieves a linked dictionary from the table internally
     */
    LinkedDictionary.prototype.getLinkedDictionaryPair = function (key) {
        if (util.isUndefined(key)) {
            return undefined;
        }
        var k = '$' + this.toStr(key);
        var pair = (this.table[k]);
        return pair;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    LinkedDictionary.prototype.getValue = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            return pair.value;
        }
        return undefined;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * Also, if a value is present for this key, the entry is removed from the
     * insertion ordering.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    LinkedDictionary.prototype.remove = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            _super.prototype.remove.call(this, key); // This will remove it from the table
            pair.unlink(); // This will unlink it from the chain
            return pair.value;
        }
        return undefined;
    };
    /**
     * Removes all mappings from this LinkedDictionary.
     * @this {collections.LinkedDictionary}
     */
    LinkedDictionary.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    };
    /**
     * Internal function used when updating an existing KeyValue pair.
     * It places the new value indexed by key into the table, but maintains
     * its place in the linked ordering.
     */
    LinkedDictionary.prototype.replace = function (oldPair, newPair) {
        var k = '$' + this.toStr(newPair.key);
        // set the new Pair's links to existingPair's links
        newPair.next = oldPair.next;
        newPair.prev = oldPair.prev;
        // Delete Existing Pair from the table, unlink it from chain.
        // As a result, the nElements gets decremented by this operation
        this.remove(oldPair.key);
        // Link new Pair in place of where oldPair was,
        // by pointing the old pair's neighbors to it.
        newPair.prev.next = newPair;
        newPair.next.prev = newPair;
        this.table[k] = newPair;
        // To make up for the fact that the number of elements was decremented,
        // We need to increase it by one.
        ++this.nElements;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * Updating of a key that already exists maintains its place in the
     * insertion order into the map.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    LinkedDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var existingPair = this.getLinkedDictionaryPair(key);
        var newPair = new LinkedDictionaryPair(key, value);
        var k = '$' + this.toStr(key);
        // If there is already an element for that key, we
        // keep it's place in the LinkedList
        if (!util.isUndefined(existingPair)) {
            this.replace(existingPair, newPair);
            return existingPair.value;
        }
        else {
            this.appendToTail(newPair);
            this.table[k] = newPair;
            ++this.nElements;
            return undefined;
        }
    };
    /**
     * Returns an array containing all of the keys in this LinkedDictionary, ordered
     * by insertion order.
     * @return {Array} an array containing all of the keys in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.keys = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(key);
        });
        return array;
    };
    /**
     * Returns an array containing all of the values in this LinkedDictionary, ordered by
     * insertion order.
     * @return {Array} an array containing all of the values in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.values = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(value);
        });
        return array;
    };
    /**
     * Executes the provided function once for each key-value pair
     * present in this LinkedDictionary. It is done in the order of insertion
     * into the LinkedDictionary
     * @param {function(Object,Object):*} callback function to execute, it is
     * invoked with two arguments: key and value. To break the iteration you can
     * optionally return false.
     */
    LinkedDictionary.prototype.forEach = function (callback) {
        var crawlNode = this.head.next;
        while (!isHeadOrTailLinkedDictionaryPair(crawlNode)) {
            var ret = callback(crawlNode.key, crawlNode.value);
            if (ret === false) {
                return;
            }
            crawlNode = crawlNode.next;
        }
    };
    return LinkedDictionary;
}(Dictionary_1.default)); // End of LinkedDictionary
exports.default = LinkedDictionary;
// /**
//  * Returns true if this dictionary is equal to the given dictionary.
//  * Two dictionaries are equal if they contain the same mappings.
//  * @param {collections.Dictionary} other the other dictionary.
//  * @param {function(Object,Object):boolean=} valuesEqualFunction optional
//  * function used to check if two values are equal.
//  * @return {boolean} true if this dictionary is equal to the given dictionary.
//  */
// collections.Dictionary.prototype.equals = function(other,valuesEqualFunction) {
// 	const eqF = valuesEqualFunction || collections.defaultEquals;
// 	if(!(other instanceof collections.Dictionary)){
// 		return false;
// 	}
// 	if(this.size() !== other.size()){
// 		return false;
// 	}
// 	return this.equalsAux(this.firstNode,other.firstNode,eqF);
// }

},{"./Dictionary":7,"./util":20}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var LinkedList = /** @class */ (function () {
    /**
     * Creates an empty Linked List.
     * @class A linked list is a data structure consisting of a group of nodes
     * which together represent a sequence.
     * @constructor
     */
    function LinkedList() {
        /**
         * First node in the list
         * @type {Object}
         * @private
         */
        this.firstNode = null;
        /**
         * Last node in the list
         * @type {Object}
         * @private
         */
        this.lastNode = null;
        /**
         * Number of elements in the list
         * @type {number}
         * @private
         */
        this.nElements = 0;
    }
    /**
     * Adds an element to this list.
     * @param {Object} item element to be added.
     * @param {number=} index optional index to add the element. If no index is specified
     * the element is added to the end of this list.
     * @return {boolean} true if the element was added or false if the index is invalid
     * or if the element is undefined.
     */
    LinkedList.prototype.add = function (item, index) {
        if (util.isUndefined(index)) {
            index = this.nElements;
        }
        if (index < 0 || index > this.nElements || util.isUndefined(item)) {
            return false;
        }
        var newNode = this.createNode(item);
        if (this.nElements === 0 || this.lastNode === null) {
            // First node in the list.
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else if (index === this.nElements) {
            // Insert at the end.
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        else if (index === 0) {
            // Change first node.
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            if (prev === null) {
                return false;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.nElements++;
        return true;
    };
    /**
     * Returns the first element in this list.
     * @return {*} the first element of the list or undefined if the list is
     * empty.
     */
    LinkedList.prototype.first = function () {
        if (this.firstNode !== null) {
            return this.firstNode.element;
        }
        return undefined;
    };
    /**
     * Returns the last element in this list.
     * @return {*} the last element in the list or undefined if the list is
     * empty.
     */
    LinkedList.prototype.last = function () {
        if (this.lastNode !== null) {
            return this.lastNode.element;
        }
        return undefined;
    };
    /**
     * Returns the element at the specified position in this list.
     * @param {number} index desired index.
     * @return {*} the element at the given index or undefined if the index is
     * out of bounds.
     */
    LinkedList.prototype.elementAtIndex = function (index) {
        var node = this.nodeAtIndex(index);
        if (node === null) {
            return undefined;
        }
        return node.element;
    };
    /**
     * Returns the index in this list of the first occurrence of the
     * specified element, or -1 if the List does not contain this element.
     * <p>If the elements inside this list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction Optional
     * function used to check if two elements are equal.
     * @return {number} the index in this list of the first occurrence
     * of the specified element, or -1 if this list does not contain the
     * element.
     */
    LinkedList.prototype.indexOf = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (util.isUndefined(item)) {
            return -1;
        }
        var currentNode = this.firstNode;
        var index = 0;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    };
    /**
     * Returns true if this list contains the specified element.
     * <p>If the elements inside the list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction Optional
     * function used to check if two elements are equal.
     * @return {boolean} true if this list contains the specified element, false
     * otherwise.
     */
    LinkedList.prototype.contains = function (item, equalsFunction) {
        return (this.indexOf(item, equalsFunction) >= 0);
    };
    /**
     * Removes the first occurrence of the specified element in this list.
     * <p>If the elements inside the list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to be removed from this list, if present.
     * @return {boolean} true if the list contained the specified element.
     */
    LinkedList.prototype.remove = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (this.nElements < 1 || util.isUndefined(item)) {
            return false;
        }
        var previous = null;
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                if (previous === null) {
                    this.firstNode = currentNode.next;
                    if (currentNode === this.lastNode) {
                        this.lastNode = null;
                    }
                }
                else if (currentNode === this.lastNode) {
                    this.lastNode = previous;
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                else {
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                this.nElements--;
                return true;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    };
    /**
     * Removes all of the elements from this list.
     */
    LinkedList.prototype.clear = function () {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this list is equal to the given list.
     * Two lists are equal if they have the same elements in the same order.
     * @param {LinkedList} other the other list.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function used to check if two elements are equal. If the elements in the lists
     * are custom objects you should provide a function, otherwise
     * the === operator is used to check equality between elements.
     * @return {boolean} true if this list is equal to the given list.
     */
    LinkedList.prototype.equals = function (other, equalsFunction) {
        var eqF = equalsFunction || util.defaultEquals;
        if (!(other instanceof LinkedList)) {
            return false;
        }
        if (this.size() !== other.size()) {
            return false;
        }
        return this.equalsAux(this.firstNode, other.firstNode, eqF);
    };
    /**
     * @private
     */
    LinkedList.prototype.equalsAux = function (n1, n2, eqF) {
        while (n1 !== null && n2 !== null) {
            if (!eqF(n1.element, n2.element)) {
                return false;
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        return true;
    };
    /**
     * Removes the element at the specified position in this list.
     * @param {number} index given index.
     * @return {*} removed element or undefined if the index is out of bounds.
     */
    LinkedList.prototype.removeElementAtIndex = function (index) {
        if (index < 0 || index >= this.nElements || this.firstNode === null || this.lastNode === null) {
            return undefined;
        }
        var element;
        if (this.nElements === 1) {
            //First node in the list.
            element = this.firstNode.element;
            this.firstNode = null;
            this.lastNode = null;
        }
        else {
            var previous = this.nodeAtIndex(index - 1);
            if (previous === null) {
                element = this.firstNode.element;
                this.firstNode = this.firstNode.next;
            }
            else if (previous.next === this.lastNode) {
                element = this.lastNode.element;
                this.lastNode = previous;
            }
            if (previous !== null && previous.next !== null) {
                element = previous.next.element;
                previous.next = previous.next.next;
            }
        }
        this.nElements--;
        return element;
    };
    /**
     * Executes the provided function once for each element present in this list in order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    LinkedList.prototype.forEach = function (callback) {
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (callback(currentNode.element) === false) {
                break;
            }
            currentNode = currentNode.next;
        }
    };
    /**
     * Reverses the order of the elements in this linked list (makes the last
     * element first, and the first element last).
     */
    LinkedList.prototype.reverse = function () {
        var previous = null;
        var current = this.firstNode;
        var temp = null;
        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        temp = this.firstNode;
        this.firstNode = this.lastNode;
        this.lastNode = temp;
    };
    /**
     * Returns an array containing all of the elements in this list in proper
     * sequence.
     * @return {Array.<*>} an array containing all of the elements in this list,
     * in proper sequence.
     */
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return array;
    };
    /**
     * Returns the number of elements in this list.
     * @return {number} the number of elements in this list.
     */
    LinkedList.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this list contains no elements.
     * @return {boolean} true if this list contains no elements.
     */
    LinkedList.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    LinkedList.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    /**
     * @private
     */
    LinkedList.prototype.nodeAtIndex = function (index) {
        if (index < 0 || index >= this.nElements) {
            return null;
        }
        if (index === (this.nElements - 1)) {
            return this.lastNode;
        }
        var node = this.firstNode;
        for (var i = 0; i < index && node !== null; i++) {
            node = node.next;
        }
        return node;
    };
    /**
     * @private
     */
    LinkedList.prototype.createNode = function (item) {
        return {
            element: item,
            next: null
        };
    };
    return LinkedList;
}()); // End of linked list
exports.default = LinkedList;

},{"./arrays":18,"./util":20}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var arrays = require("./arrays");
var MultiDictionary = /** @class */ (function () {
    /**
     * Creates an empty multi dictionary.
     * @class <p>A multi dictionary is a special kind of dictionary that holds
     * multiple values against each key. Setting a value into the dictionary will
     * add the value to an array at that key. Getting a key will return an array,
     * holding all the values set to that key.
     * You can configure to allow duplicates in the values.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to strings must be
     * provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *     return pet.name;
     * }
     * </pre>
     * <p>If the values are custom objects a function to check equality between values
     * must be provided. Example:</p>
     *
     * <pre>
     * function petsAreEqualByAge(pet1,pet2) {
     *     return pet1.age === pet2.age;
     * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     * @param {function(Object,Object):boolean=} valuesEqualsFunction optional
     * function to check if two values are equal.
     *
     * @param allowDuplicateValues
     */
    function MultiDictionary(toStrFunction, valuesEqualsFunction, allowDuplicateValues) {
        if (allowDuplicateValues === void 0) { allowDuplicateValues = false; }
        this.dict = new Dictionary_1.default(toStrFunction);
        this.equalsF = valuesEqualsFunction || util.defaultEquals;
        this.allowDuplicate = allowDuplicateValues;
    }
    /**
     * Returns an array holding the values to which this dictionary maps
     * the specified key.
     * Returns an empty array if this dictionary contains no mappings for this key.
     * @param {Object} key key whose associated values are to be returned.
     * @return {Array} an array holding the values to which this dictionary maps
     * the specified key.
     */
    MultiDictionary.prototype.getValue = function (key) {
        var values = this.dict.getValue(key);
        if (util.isUndefined(values)) {
            return [];
        }
        return arrays.copy(values);
    };
    /**
     * Adds the value to the array associated with the specified key, if
     * it is not already present.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value the value to add to the array at the key
     * @return {boolean} true if the value was not already associated with that key.
     */
    MultiDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return false;
        }
        var array = this.dict.getValue(key);
        if (util.isUndefined(array)) {
            this.dict.setValue(key, [value]);
            return true;
        }
        if (!this.allowDuplicate) {
            if (arrays.contains(array, value, this.equalsF)) {
                return false;
            }
        }
        array.push(value);
        return true;
    };
    /**
     * Removes the specified values from the array of values associated with the
     * specified key. If a value isn't given, all values associated with the specified
     * key are removed.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @param {Object=} value optional argument to specify the value to remove
     * from the array associated with the specified key.
     * @return {*} true if the dictionary changed, false if the key doesn't exist or
     * if the specified value isn't associated with the specified key.
     */
    MultiDictionary.prototype.remove = function (key, value) {
        if (util.isUndefined(value)) {
            var v = this.dict.remove(key);
            return !util.isUndefined(v);
        }
        var array = this.dict.getValue(key);
        if (!util.isUndefined(array) && arrays.remove(array, value, this.equalsF)) {
            if (array.length === 0) {
                this.dict.remove(key);
            }
            return true;
        }
        return false;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    MultiDictionary.prototype.keys = function () {
        return this.dict.keys();
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    MultiDictionary.prototype.values = function () {
        var values = this.dict.values();
        var array = [];
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            for (var _a = 0, v_1 = v; _a < v_1.length; _a++) {
                var w = v_1[_a];
                array.push(w);
            }
        }
        return array;
    };
    /**
     * Returns true if this dictionary at least one value associatted the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary at least one value associatted
     * the specified key.
     */
    MultiDictionary.prototype.containsKey = function (key) {
        return this.dict.containsKey(key);
    };
    /**
     * Removes all mappings from this dictionary.
     */
    MultiDictionary.prototype.clear = function () {
        this.dict.clear();
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    MultiDictionary.prototype.size = function () {
        return this.dict.size();
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    MultiDictionary.prototype.isEmpty = function () {
        return this.dict.isEmpty();
    };
    return MultiDictionary;
}()); // end of multi dictionary
exports.default = MultiDictionary;

},{"./Dictionary":7,"./arrays":18,"./util":20}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["BEFORE"] = 0] = "BEFORE";
    Direction[Direction["AFTER"] = 1] = "AFTER";
    Direction[Direction["INSIDE_AT_END"] = 2] = "INSIDE_AT_END";
    Direction[Direction["INSIDE_AT_START"] = 3] = "INSIDE_AT_START";
})(Direction || (Direction = {}));
var MultiRootTree = /** @class */ (function () {
    function MultiRootTree(rootIds, nodes) {
        if (rootIds === void 0) { rootIds = []; }
        if (nodes === void 0) { nodes = {}; }
        this.rootIds = rootIds;
        this.nodes = nodes;
        this.initRootIds();
        this.initNodes();
    }
    MultiRootTree.prototype.initRootIds = function () {
        for (var _i = 0, _a = this.rootIds; _i < _a.length; _i++) {
            var rootId = _a[_i];
            this.createEmptyNodeIfNotExist(rootId);
        }
    };
    MultiRootTree.prototype.initNodes = function () {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var _i = 0, _a = this.nodes[nodeKey]; _i < _a.length; _i++) {
                    var nodeListItem = _a[_i];
                    this.createEmptyNodeIfNotExist(nodeListItem);
                }
            }
        }
    };
    MultiRootTree.prototype.createEmptyNodeIfNotExist = function (nodeKey) {
        if (!this.nodes[nodeKey]) {
            this.nodes[nodeKey] = [];
        }
    };
    MultiRootTree.prototype.getRootIds = function () {
        var clone = this.rootIds.slice();
        return clone;
    };
    MultiRootTree.prototype.getNodes = function () {
        var clone = {};
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                clone[nodeKey] = this.nodes[nodeKey].slice();
            }
        }
        return clone;
    };
    MultiRootTree.prototype.getObject = function () {
        return {
            rootIds: this.getRootIds(),
            nodes: this.getNodes(),
        };
    };
    MultiRootTree.prototype.toObject = function () {
        return this.getObject();
    };
    MultiRootTree.prototype.flatten = function () {
        var _this = this;
        var extraPropsObject = [];
        for (var i = 0; i < this.rootIds.length; i++) {
            var rootId = this.rootIds[i];
            extraPropsObject.push({
                id: rootId,
                level: 0,
                hasParent: false,
                childrenCount: 0,
            });
            traverse(rootId, this.nodes, extraPropsObject, 0);
        }
        for (var _i = 0, extraPropsObject_1 = extraPropsObject; _i < extraPropsObject_1.length; _i++) {
            var o = extraPropsObject_1[_i];
            o.childrenCount = countChildren(o.id);
        }
        return extraPropsObject;
        function countChildren(id) {
            if (!_this.nodes[id]) {
                return 0;
            }
            else {
                var childrenCount = _this.nodes[id].length;
                return childrenCount;
            }
        }
        function traverse(startId, nodes, returnArray, level) {
            if (level === void 0) { level = 0; }
            if (!startId || !nodes || !returnArray || !nodes[startId]) {
                return;
            }
            level++;
            var idsList = nodes[startId];
            for (var i = 0; i < idsList.length; i++) {
                var id = idsList[i];
                returnArray.push({ id: id, level: level, hasParent: true });
                traverse(id, nodes, returnArray, level);
            }
            level--;
        }
    };
    MultiRootTree.prototype.moveIdBeforeId = function (moveId, beforeId) {
        return this.moveId(moveId, beforeId, Direction.BEFORE);
    };
    MultiRootTree.prototype.moveIdAfterId = function (moveId, afterId) {
        return this.moveId(moveId, afterId, Direction.AFTER);
    };
    MultiRootTree.prototype.moveIdIntoId = function (moveId, insideId, atStart) {
        if (atStart === void 0) { atStart = true; }
        if (atStart) {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_START);
        }
        else {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_END);
        }
    };
    MultiRootTree.prototype.swapRootIdWithRootId = function (rootId, withRootId) {
        var leftIndex = this.findRootId(rootId);
        var rightIndex = this.findRootId(withRootId);
        this.swapRootPositionWithRootPosition(leftIndex, rightIndex);
    };
    MultiRootTree.prototype.swapRootPositionWithRootPosition = function (swapRootPosition, withRootPosition) {
        var temp = this.rootIds[withRootPosition];
        this.rootIds[withRootPosition] = this.rootIds[swapRootPosition];
        this.rootIds[swapRootPosition] = temp;
    };
    MultiRootTree.prototype.deleteId = function (id) {
        this.rootDeleteId(id);
        this.nodeAndSubNodesDelete(id);
        this.nodeRefrencesDelete(id);
    };
    MultiRootTree.prototype.insertIdBeforeId = function (beforeId, insertId) {
        var foundRootIdIndex = this.findRootId(beforeId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdAfterId = function (belowId, insertId) {
        var foundRootIdIndex = this.findRootId(belowId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex + 1);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, belowId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex + 1);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdIntoId = function (insideId, insertId) {
        this.nodeInsertAtEnd(insideId, insertId);
        this.nodes[insertId] = [];
    };
    MultiRootTree.prototype.insertIdIntoRoot = function (id, position) {
        if (position === undefined) {
            this.rootInsertAtEnd(id);
        }
        else {
            if (position < 0) {
                var length_1 = this.rootIds.length;
                this.rootIds.splice((position + length_1 + 1), 0, id);
            }
            else {
                this.rootIds.splice(position, 0, id);
            }
        }
        this.nodes[id] = this.nodes[id] || [];
    };
    MultiRootTree.prototype.insertIdIntoNode = function (nodeKey, id, position) {
        this.nodes[nodeKey] = this.nodes[nodeKey] || [];
        this.nodes[id] = this.nodes[id] || [];
        if (position === undefined) {
            this.nodeInsertAtEnd(nodeKey, id);
        }
        else {
            if (position < 0) {
                var length_2 = this.nodes[nodeKey].length;
                this.nodes[nodeKey].splice((position + length_2 + 1), 0, id);
            }
            else {
                this.nodes[nodeKey].splice(position, 0, id);
            }
        }
    };
    MultiRootTree.prototype.moveId = function (moveId, beforeId, direction) {
        var sourceId = moveId;
        var sourceRootIndex = this.findRootId(sourceId);
        var sourceNodeKey;
        var sourceNodeIdIndex;
        if (this.nodes[beforeId]) {
            sourceNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                sourceNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        var targetId = beforeId;
        var targetRootIndex = this.findRootId(targetId);
        var targetNodeKey;
        var targetNodeIdIndex;
        if (this.nodes[beforeId]) {
            targetNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                targetNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        if (sourceRootIndex > -1) {
            if (targetRootIndex > -1) {
                // moving root to root
                // console.log(`Moving ROOT to ROOT`);
                // console.log(`RootIds:`);
                // console.log(this.rootIds);
                // console.log(`TargetIndex=${targetRootIndex}, SourceIndex=${sourceRootIndex}`);
                // console.log(`TargetId=${targetId}, SourceId=${sourceId}`);
                this.rootDelete(sourceRootIndex); // indexes change now
                if (targetRootIndex > sourceRootIndex) {
                    targetRootIndex--;
                }
                else {
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving root (source) ABOVE node (target)
                // will remove one entry from roots
                this.rootDelete(sourceRootIndex);
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
        else {
            if (targetRootIndex > -1) {
                // moving node (source) ABOVE root (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            // this.nodeInsertId(nodeKey, sourceId, index);
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving node (source) ABOVE node (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.swapArrayElements = function (arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    };
    MultiRootTree.prototype.rootDeleteId = function (id) {
        var index = this.findRootId(id);
        if (index > -1) {
            this.rootDelete(index);
        }
    };
    MultiRootTree.prototype.nodeAndSubNodesDelete = function (nodeKey) {
        var toDeleteLater = [];
        for (var i = 0; i < this.nodes[nodeKey].length; i++) {
            var id = this.nodes[nodeKey][i];
            this.nodeAndSubNodesDelete(id);
            toDeleteLater.push(nodeKey);
        }
        this.nodeDelete(nodeKey);
        for (var i = 0; i < toDeleteLater.length; i++) {
            this.nodeDelete(toDeleteLater[i]);
        }
    };
    MultiRootTree.prototype.nodeRefrencesDelete = function (id) {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var i = 0; i < this.nodes[nodeKey].length; i++) {
                    var targetId = this.nodes[nodeKey][i];
                    if (targetId === id) {
                        this.nodeDeleteAtIndex(nodeKey, i);
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.nodeDelete = function (nodeKey) {
        delete this.nodes[nodeKey];
    };
    MultiRootTree.prototype.findRootId = function (id) {
        return this.rootIds.indexOf(id);
    };
    MultiRootTree.prototype.findNodeId = function (nodeKey, id) {
        return this.nodes[nodeKey].indexOf(id);
    };
    MultiRootTree.prototype.findNode = function (nodeKey) {
        return this.nodes[nodeKey];
    };
    MultiRootTree.prototype.nodeInsertAtStart = function (nodeKey, id) {
        this.nodes[nodeKey].unshift(id);
    };
    MultiRootTree.prototype.nodeInsertAtEnd = function (nodeKey, id) {
        this.nodes[nodeKey].push(id);
    };
    MultiRootTree.prototype.rootDelete = function (index) {
        this.rootIds.splice(index, 1);
    };
    MultiRootTree.prototype.nodeDeleteAtIndex = function (nodeKey, index) {
        this.nodes[nodeKey].splice(index, 1);
    };
    MultiRootTree.prototype.rootInsertAtStart = function (id) {
        this.rootIds.unshift(id);
    };
    MultiRootTree.prototype.rootInsertAtEnd = function (id) {
        this.rootIds.push(id);
    };
    return MultiRootTree;
}());
exports.default = MultiRootTree;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Heap_1 = require("./Heap");
var PriorityQueue = /** @class */ (function () {
    /**
     * Creates an empty priority queue.
     * @class <p>In a priority queue each element is associated with a "priority",
     * elements are dequeued in highest-priority-first order (the elements with the
     * highest priority are dequeued first). Priority Queues are implemented as heaps.
     * If the inserted elements are custom objects a compare function must be provided,
     * otherwise the <=, === and >= operators are used to compare object priority.</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two element priorities. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function PriorityQueue(compareFunction) {
        this.heap = new Heap_1.default(util.reverseCompareFunction(compareFunction));
    }
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.enqueue = function (element) {
        return this.heap.add(element);
    };
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.add = function (element) {
        return this.heap.add(element);
    };
    /**
     * Retrieves and removes the highest priority element of this queue.
     * @return {*} the the highest priority element of this queue,
     *  or undefined if this queue is empty.
     */
    PriorityQueue.prototype.dequeue = function () {
        if (this.heap.size() !== 0) {
            var el = this.heap.peek();
            this.heap.removeRoot();
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the highest priority element of this queue.
     * @return {*} the highest priority element of this queue, or undefined if this queue is empty.
     */
    PriorityQueue.prototype.peek = function () {
        return this.heap.peek();
    };
    /**
     * Returns true if this priority queue contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this priority queue contains the specified element,
     * false otherwise.
     */
    PriorityQueue.prototype.contains = function (element) {
        return this.heap.contains(element);
    };
    /**
     * Checks if this priority queue is empty.
     * @return {boolean} true if and only if this priority queue contains no items; false
     * otherwise.
     */
    PriorityQueue.prototype.isEmpty = function () {
        return this.heap.isEmpty();
    };
    /**
     * Returns the number of elements in this priority queue.
     * @return {number} the number of elements in this priority queue.
     */
    PriorityQueue.prototype.size = function () {
        return this.heap.size();
    };
    /**
     * Removes all of the elements from this priority queue.
     */
    PriorityQueue.prototype.clear = function () {
        this.heap.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    PriorityQueue.prototype.forEach = function (callback) {
        this.heap.forEach(callback);
    };
    return PriorityQueue;
}()); // end of priority queue
exports.default = PriorityQueue;

},{"./Heap":9,"./util":20}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    /**
     * Creates an empty queue.
     * @class A queue is a First-In-First-Out (FIFO) data structure, the first
     * element added to the queue will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Queue() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.enqueue = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.add = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Retrieves and removes the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.dequeue = function () {
        if (this.list.size() !== 0) {
            var el = this.list.first();
            this.list.removeElementAtIndex(0);
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.peek = function () {
        if (this.list.size() !== 0) {
            return this.list.first();
        }
        return undefined;
    };
    /**
     * Returns the number of elements in this queue.
     * @return {number} the number of elements in this queue.
     */
    Queue.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this queue contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this queue contains the specified element,
     * false otherwise.
     */
    Queue.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this queue is empty.
     * @return {boolean} true if and only if this queue contains no items; false
     * otherwise.
     */
    Queue.prototype.isEmpty = function () {
        return this.list.size() <= 0;
    };
    /**
     * Removes all of the elements from this queue.
     */
    Queue.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * FIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Queue.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Queue;
}()); // End of queue
exports.default = Queue;

},{"./LinkedList":11}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var Dictionary_1 = require("./Dictionary");
var Set = /** @class */ (function () {
    /**
     * Creates an empty set.
     * @class <p>A set is a data structure that contains no duplicate items.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStringFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    function Set(toStringFunction) {
        this.dictionary = new Dictionary_1.default(toStringFunction);
    }
    /**
     * Returns true if this set contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this set contains the specified element,
     * false otherwise.
     */
    Set.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
     * Adds the specified element to this set if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this set did not already contain the specified element.
     */
    Set.prototype.add = function (element) {
        if (this.contains(element) || util.isUndefined(element)) {
            return false;
        }
        else {
            this.dictionary.setValue(element, element);
            return true;
        }
    };
    /**
     * Performs an intersection between this and another set.
     * Removes all values that are not present this set and the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.intersection = function (otherSet) {
        var set = this;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                set.remove(element);
            }
            return true;
        });
    };
    /**
     * Performs a union between this and another set.
     * Adds all values from the given set to this set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.union = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.add(element);
            return true;
        });
    };
    /**
     * Performs a difference between this and another set.
     * Removes from this set all the values that are present in the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.difference = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.remove(element);
            return true;
        });
    };
    /**
     * Checks whether the given set contains all the elements in this set.
     * @param {collections.Set} otherSet other set.
     * @return {boolean} true if this set is a subset of the given set.
     */
    Set.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        var isSub = true;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                isSub = false;
                return false;
            }
            return true;
        });
        return isSub;
    };
    /**
     * Removes the specified element from this set if it is present.
     * @return {boolean} true if this set contained the specified element.
     */
    Set.prototype.remove = function (element) {
        if (!this.contains(element)) {
            return false;
        }
        else {
            this.dictionary.remove(element);
            return true;
        }
    };
    /**
     * Executes the provided function once for each element
     * present in this set.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one arguments: the element. To break the iteration you can
     * optionally return false.
     */
    Set.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            return callback(v);
        });
    };
    /**
     * Returns an array containing all of the elements in this set in arbitrary order.
     * @return {Array} an array containing all of the elements in this set.
     */
    Set.prototype.toArray = function () {
        return this.dictionary.values();
    };
    /**
     * Returns true if this set contains no elements.
     * @return {boolean} true if this set contains no elements.
     */
    Set.prototype.isEmpty = function () {
        return this.dictionary.isEmpty();
    };
    /**
     * Returns the number of elements in this set.
     * @return {number} the number of elements in this set.
     */
    Set.prototype.size = function () {
        return this.dictionary.size();
    };
    /**
     * Removes all of the elements from this set.
     */
    Set.prototype.clear = function () {
        this.dictionary.clear();
    };
    /*
    * Provides a string representation for display
    */
    Set.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    return Set;
}()); // end of Set
exports.default = Set;

},{"./Dictionary":7,"./arrays":18,"./util":20}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    /**
     * Creates an empty Stack.
     * @class A Stack is a Last-In-First-Out (LIFO) data structure, the last
     * element added to the stack will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Stack() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.push = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.add = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Removes the object at the top of this stack and returns that object.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.pop = function () {
        return this.list.removeElementAtIndex(0);
    };
    /**
     * Looks at the object at the top of this stack without removing it from the
     * stack.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.peek = function () {
        return this.list.first();
    };
    /**
     * Returns the number of elements in this stack.
     * @return {number} the number of elements in this stack.
     */
    Stack.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this stack contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this stack contains the specified element,
     * false otherwise.
     */
    Stack.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this stack is empty.
     * @return {boolean} true if and only if this stack contains no items; false
     * otherwise.
     */
    Stack.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    /**
     * Removes all of the elements from this stack.
     */
    Stack.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this stack in
     * LIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Stack.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Stack;
}()); // End of stack
exports.default = Stack;

},{"./LinkedList":11}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
/**
 * Returns the position of the first occurrence of the specified item
 * within the specified array.4
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the first occurrence of the specified element
 * within the specified array, or -1 if not found.
 */
function indexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.indexOf = indexOf;
/**
 * Returns the position of the last occurrence of the specified element
 * within the specified array.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the last occurrence of the specified element
 * within the specified array or -1 if not found.
 */
function lastIndexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
/**
 * Returns true if the specified array contains the specified element.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the specified array contains the specified element.
 */
function contains(array, item, equalsFunction) {
    return indexOf(array, item, equalsFunction) >= 0;
}
exports.contains = contains;
/**
 * Removes the first ocurrence of the specified element from the specified array.
 * @param {*} array the array in which to search element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the array changed after this call.
 */
function remove(array, item, equalsFunction) {
    var index = indexOf(array, item, equalsFunction);
    if (index < 0) {
        return false;
    }
    array.splice(index, 1);
    return true;
}
exports.remove = remove;
/**
 * Returns the number of elements in the specified array equal
 * to the specified object.
 * @param {Array} array the array in which to determine the frequency of the element.
 * @param {Object} item the element whose frequency is to be determined.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the number of elements in the specified array
 * equal to the specified object.
 */
function frequency(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    var freq = 0;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            freq++;
        }
    }
    return freq;
}
exports.frequency = frequency;
/**
 * Returns true if the two specified arrays are equal to one another.
 * Two arrays are considered equal if both arrays contain the same number
 * of elements, and all corresponding pairs of elements in the two
 * arrays are equal and are in the same order.
 * @param {Array} array1 one array to be tested for equality.
 * @param {Array} array2 the other array to be tested for equality.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between elemements in the arrays.
 * @return {boolean} true if the two arrays are equal
 */
function equals(array1, array2, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    if (array1.length !== array2.length) {
        return false;
    }
    var length = array1.length;
    for (var i = 0; i < length; i++) {
        if (!equals(array1[i], array2[i])) {
            return false;
        }
    }
    return true;
}
exports.equals = equals;
/**
 * Returns shallow a copy of the specified array.
 * @param {*} array the array to copy.
 * @return {Array} a copy of the specified array
 */
function copy(array) {
    return array.concat();
}
exports.copy = copy;
/**
 * Swaps the elements at the specified positions in the specified array.
 * @param {Array} array The array in which to swap elements.
 * @param {number} i the index of one element to be swapped.
 * @param {number} j the index of the other element to be swapped.
 * @return {boolean} true if the array is defined and the indexes are valid.
 */
function swap(array, i, j) {
    if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
        return false;
    }
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return true;
}
exports.swap = swap;
function toString(array) {
    return '[' + array.toString() + ']';
}
exports.toString = toString;
/**
 * Executes the provided function once for each element present in this array
 * starting from index 0 to length - 1.
 * @param {Array} array The array in which to iterate.
 * @param {function(Object):*} callback function to execute, it is
 * invoked with one argument: the element value, to break the iteration you can
 * optionally return false.
 */
function forEach(array, callback) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var ele = array_1[_i];
        if (callback(ele) === false) {
            return;
        }
    }
}
exports.forEach = forEach;

},{"./util":20}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2013 Basarat Ali Syed. All Rights Reserved.
//
// Licensed under MIT open source license http://opensource.org/licenses/MIT
//
// Orginal javascript code was by Mauricio Santos
//
var _arrays = require("./arrays");
exports.arrays = _arrays;
var Bag_1 = require("./Bag");
exports.Bag = Bag_1.default;
var BSTree_1 = require("./BSTree");
exports.BSTree = BSTree_1.default;
var BSTreeKV_1 = require("./BSTreeKV");
exports.BSTreeKV = BSTreeKV_1.default;
var Dictionary_1 = require("./Dictionary");
exports.Dictionary = Dictionary_1.default;
var Heap_1 = require("./Heap");
exports.Heap = Heap_1.default;
var LinkedDictionary_1 = require("./LinkedDictionary");
exports.LinkedDictionary = LinkedDictionary_1.default;
var LinkedList_1 = require("./LinkedList");
exports.LinkedList = LinkedList_1.default;
var MultiDictionary_1 = require("./MultiDictionary");
exports.MultiDictionary = MultiDictionary_1.default;
var FactoryDictionary_1 = require("./FactoryDictionary");
exports.FactoryDictionary = FactoryDictionary_1.default;
var FactoryDictionary_2 = require("./FactoryDictionary");
exports.DefaultDictionary = FactoryDictionary_2.default;
var Queue_1 = require("./Queue");
exports.Queue = Queue_1.default;
var PriorityQueue_1 = require("./PriorityQueue");
exports.PriorityQueue = PriorityQueue_1.default;
var Set_1 = require("./Set");
exports.Set = Set_1.default;
var Stack_1 = require("./Stack");
exports.Stack = Stack_1.default;
var MultiRootTree_1 = require("./MultiRootTree");
exports.MultiRootTree = MultiRootTree_1.default;
var _util = require("./util");
exports.util = _util;

},{"./BSTree":4,"./BSTreeKV":5,"./Bag":6,"./Dictionary":7,"./FactoryDictionary":8,"./Heap":9,"./LinkedDictionary":10,"./LinkedList":11,"./MultiDictionary":12,"./MultiRootTree":13,"./PriorityQueue":14,"./Queue":15,"./Set":16,"./Stack":17,"./arrays":18,"./util":20}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _hasOwnProperty = Object.prototype.hasOwnProperty;
exports.has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
/**
 * Default function to compare element order.
 * @function
 */
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
exports.defaultCompare = defaultCompare;
/**
 * Default function to test equality.
 * @function
 */
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
/**
 * Default function to convert an object to a string.
 * @function
 */
function defaultToString(item) {
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return '$s' + item;
    }
    else {
        return '$o' + item.toString();
    }
}
exports.defaultToString = defaultToString;
/**
 * Joins all the properies of the object using the provided join string
 */
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (exports.has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + prop + ':' + item[prop];
            }
        }
        return toret + '}';
    }
}
exports.makeString = makeString;
/**
 * Checks if the given argument is a function.
 * @function
 */
function isFunction(func) {
    return (typeof func) === 'function';
}
exports.isFunction = isFunction;
/**
 * Checks if the given argument is undefined.
 * @function
 */
function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * Checks if the given argument is a string.
 * @function
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
exports.isString = isString;
/**
 * Reverses a compare function.
 * @function
 */
function reverseCompareFunction(compareFunction) {
    if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a === b) {
                return 0;
            }
            else {
                return -1;
            }
        };
    }
    else {
        return function (d, v) {
            return compareFunction(d, v) * -1;
        };
    }
}
exports.reverseCompareFunction = reverseCompareFunction;
/**
 * Returns an equal function given a compare function.
 * @function
 */
function compareToEquals(compareFunction) {
    return function (a, b) {
        return compareFunction(a, b) === 0;
    };
}
exports.compareToEquals = compareToEquals;

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_ctx_1 = require("./dom_ctx");
var sodium = require("sodiumjs");
var Model = /** @class */ (function () {
    function Model(sMsg) {
        var slEntries = new sodium.StreamLoop();
        this.cEntries = slEntries.hold([]).tracking(function (entries) {
            var result = [];
            entries.forEach(function (entry) { return result.push(entry.cDescription, entry.cCompleted, entry.cEditing); });
            return result;
        });
        this.cField =
            sMsg
                .map(function (msg) {
                if (msg instanceof MsgUpdateField) {
                    return msg;
                }
                else {
                    return null;
                }
            })
                .filterNotNull()
                .map(function (msg) { return msg.value; })
                .orElse(sMsg
                .filter(function (msg) { return msg instanceof MsgAdd; })
                .mapTo(""))
                .hold("");
        var slUID = new sodium.StreamLoop();
        this.cUID = slUID.hold(0);
        this.cVisibility =
            sMsg
                .map(function (msg) {
                if (msg instanceof MsgChangeVisibility) {
                    return msg;
                }
                else {
                    return null;
                }
            })
                .filterNotNull()
                .map(function (msg) { return msg.value; })
                .hold("All");
        slEntries.loop(sMsg
            .filter(function (msg) { return msg instanceof MsgAdd; })
            .snapshot1(this.cEntries)
            .snapshot3(this.cUID, this.cField, function (entries, uid, field) {
            if (field.length == 0) {
                return entries;
            }
            else {
                var entries2 = entries.slice(0);
                entries2.push(new Entry(uid, field, sMsg));
                return entries2;
            }
        })
            .orElse(sMsg
            .map(function (msg) {
            if (msg instanceof MsgDelete) {
                return msg;
            }
            else {
                return null;
            }
        })
            .filterNotNull()
            .map(function (msg) { return msg.id; })
            .snapshot(this.cEntries, function (id, entries) {
            return entries.filter(function (entry) { return entry.id != id; });
        }))
            .orElse(sMsg
            .map(function (msg) {
            if (msg instanceof MsgDeleteComplete) {
                return msg;
            }
            else {
                return null;
            }
        })
            .filterNotNull()
            .snapshot1(this.cEntries)
            .map(function (entries) { return entries.filter(function (entry) { return !entry.cCompleted.sample(); }); })));
        slUID.loop(sMsg
            .filter(function (msg) { return msg instanceof MsgAdd; })
            .snapshot1(this.cUID)
            .map(function (x) { return x + 1; }));
    }
    return Model;
}());
var Entry = /** @class */ (function () {
    function Entry(id, initDescription, sMsg) {
        var _this = this;
        this.id = id;
        this.cDescription =
            sMsg
                .map(function (msg) {
                if (msg instanceof MsgUpdateEntry && msg.id == _this.id) {
                    return msg;
                }
                else {
                    return null;
                }
            })
                .filterNotNull()
                .map(function (msg) { return msg.value; })
                .hold(initDescription);
        this.cCompleted =
            sMsg
                .map(function (msg) {
                if (msg instanceof MsgCheck && msg.id == _this.id) {
                    return msg;
                }
                else {
                    return null;
                }
            })
                .filterNotNull()
                .map(function (msg) { return msg.value; })
                .orElse(sMsg
                .map(function (msg) {
                if (msg instanceof MsgCheckAll) {
                    return msg;
                }
                else {
                    return null;
                }
            })
                .filterNotNull()
                .map(function (msg) { return msg.value; }))
                .hold(false);
        this.cEditing =
            sMsg
                .map(function (msg) {
                if (msg instanceof MsgEditingEntry && msg.id == _this.id) {
                    return msg;
                }
                else {
                    return null;
                }
            })
                .filterNotNull()
                .map(function (msg) { return msg.value; })
                .hold(false);
    }
    return Entry;
}());
var MsgNoOp = /** @class */ (function () {
    function MsgNoOp() {
    }
    return MsgNoOp;
}());
var MsgUpdateField = /** @class */ (function () {
    function MsgUpdateField(value) {
        this.value = value;
    }
    return MsgUpdateField;
}());
var MsgAdd = /** @class */ (function () {
    function MsgAdd() {
    }
    return MsgAdd;
}());
var MsgCheckAll = /** @class */ (function () {
    function MsgCheckAll(value) {
        this.value = value;
    }
    return MsgCheckAll;
}());
var MsgCheck = /** @class */ (function () {
    function MsgCheck(id, value) {
        this.id = id;
        this.value = value;
    }
    return MsgCheck;
}());
var MsgEditingEntry = /** @class */ (function () {
    function MsgEditingEntry(id, value) {
        this.id = id;
        this.value = value;
    }
    return MsgEditingEntry;
}());
var MsgDelete = /** @class */ (function () {
    function MsgDelete(id) {
        this.id = id;
    }
    return MsgDelete;
}());
var MsgDeleteComplete = /** @class */ (function () {
    function MsgDeleteComplete() {
    }
    return MsgDeleteComplete;
}());
var MsgUpdateEntry = /** @class */ (function () {
    function MsgUpdateEntry(id, value) {
        this.id = id;
        this.value = value;
    }
    return MsgUpdateEntry;
}());
var MsgChangeVisibility = /** @class */ (function () {
    function MsgChangeVisibility(value) {
        this.value = value;
    }
    return MsgChangeVisibility;
}());
// VIEW
function view(model, dc) {
    dc.beginElement("div");
    dc.attr("class", new sodium.Cell("todomvc-wrapper"));
    dc.attr("style", new sodium.Cell("visibility:hidden;"));
    dc.beginElement("section");
    dc.attr("class", new sodium.Cell("todoapp"));
    viewInput(model.cField, dc);
    viewEntries(model.cVisibility, model.cEntries, dc);
    viewControls(model.cVisibility, model.cEntries, dc);
    dc.endElement();
    infoFooter(dc);
    dc.endElement();
}
function viewInput(cTask, dc) {
    dc.beginElement("header");
    dc.attr("class", new sodium.Cell("header"));
    dc.beginElement("h1");
    dc.beginElement("text");
    dc.text(new sodium.Cell("todos"));
    dc.endElement();
    dc.endElement();
    dc.beginElement("input");
    dc.attr("class", new sodium.Cell("new-todo"));
    dc.attr("placeholder", new sodium.Cell("What needs to be done?"));
    dc.attr("autofocus", new sodium.Cell("true"));
    dc.attr("value", cTask);
    dc.attr("name", new sodium.Cell("newTodo"));
    dc.on("input", new sodium.Cell(function (e) { return new MsgUpdateField(e.srcElement.value); }));
    dc.on("keydown", new sodium.Cell(function (e) {
        var e2 = e;
        if (e2.keyCode == 13) {
            return new MsgAdd();
        }
        return new MsgNoOp();
    }));
    dc.endElement();
    dc.endElement();
}
function viewEntries(cVisibility, cEntries, dc) {
    var cIsVisible = function (todo) {
        return cVisibility.lift(todo.cCompleted, function (visibility, completed) {
            switch (visibility) {
                case "Completed":
                    return completed;
                case "Active":
                    return !completed;
                default:
                    return true;
            }
        });
    };
    var cAllComplete = sodium.Cell.switchC(cEntries
        .map(function (entries) {
        return sodium.Cell
            .liftArray(entries
            .map(function (entry) { return entry.cCompleted; }))
            .map(function (completes) {
            for (var i = 0; i < completes.length; ++i) {
                if (!completes[i]) {
                    return false;
                }
            }
            return true;
        });
    }));
    var cCssVisibility = cEntries.map(function (entries) { return entries.length == 0 ? "hidden" : "visible"; });
    var cVisibleEntries = sodium.Cell.switchC(cEntries.map(function (entries) {
        return sodium.Cell
            .liftArray(entries.map(function (entry) { return cIsVisible(entry).map(function (visible) { return visible ? [entry] : []; }); }))
            .map(function (x) {
            var result = [];
            x.forEach(function (x2) { return x2.forEach(function (x3) { return result.push(x3); }); });
            return result;
        });
    }));
    dc.beginElement("section");
    dc.attr("class", new sodium.Cell("main"));
    dc.attr("style", cCssVisibility.map(function (cssVisibility) { return "visible:" + cssVisibility + ";"; }));
    dc.beginElement("input");
    dc.attr("class", new sodium.Cell("toggle-all"));
    dc.attr("type", new sodium.Cell("checkbox"));
    dc.attr("name", new sodium.Cell("toggle"));
    dc.checked(cAllComplete);
    dc.on("click", cAllComplete.map(function (allComplete) { return function (e) { return new MsgCheckAll(!allComplete); }; }));
    dc.endElement();
    dc.beginElement("label");
    dc.attr("for", new sodium.Cell("toggle-all"));
    dc.text(new sodium.Cell("Mark all as complete"));
    dc.endElement();
    dc.beginElement("ul");
    dc.attr("class", new sodium.Cell("todo-list"));
    dc.forEach(cVisibleEntries, function (entry) { return "" + entry.id; }, function (entry) { return viewEntry(entry, dc); });
    dc.endElement();
    dc.endElement();
}
function viewEntry(todo, dc) {
    var cClass = todo.cCompleted.lift(todo.cEditing, function (completed, editing) {
        if (completed) {
            if (editing) {
                return "completed,editing";
            }
            else {
                return "completed";
            }
        }
        else {
            if (editing) {
                return "editing";
            }
            else {
                return "";
            }
        }
    });
    dc.beginElement("li");
    dc.attr("class", cClass);
    dc.beginElement("div");
    dc.attr("class", new sodium.Cell("view"));
    dc.beginElement("input");
    dc.attr("class", new sodium.Cell("toggle"));
    dc.attr("type", new sodium.Cell("checkbox"));
    dc.checked(todo.cCompleted);
    dc.on("click", todo.cCompleted.map(function (completed) { return function (e) { return new MsgCheck(todo.id, !completed); }; }));
    dc.endElement();
    dc.beginElement("label");
    dc.on("dblclick", new sodium.Cell(function (e) { return new MsgEditingEntry(todo.id, true); }));
    dc.text(todo.cDescription);
    dc.endElement();
    dc.beginElement("button");
    dc.attr("class", new sodium.Cell("destroy"));
    dc.on("click", new sodium.Cell(function (e) { return new MsgDelete(todo.id); }));
    dc.endElement();
    dc.endElement();
    dc.beginElement("input");
    dc.attr("class", new sodium.Cell("edit"));
    dc.attr("value", todo.cDescription);
    dc.attr("name", new sodium.Cell("title"));
    dc.attr("id", new sodium.Cell("todo-" + todo.id));
    dc.on("input", new sodium.Cell(function (e) { return new MsgUpdateEntry(todo.id, e.srcElement.value); }));
    dc.on("blur", new sodium.Cell(function (e) { return new MsgEditingEntry(todo.id, false); }));
    dc.on("keydown", new sodium.Cell(function (e) {
        var e2 = e;
        if (e2.keyCode == 13) {
            return new MsgEditingEntry(todo.id, false);
        }
        return new MsgNoOp();
    }));
    dc.endElement();
    dc.endElement();
}
function viewControls(cVisibility, cEntries, dc) {
    var cEntriesComplete = sodium.Cell
        .switchC(cEntries.map(function (entries) {
        return sodium.Cell
            .liftArray(entries.map(function (entry) { return entry.cCompleted.map(function (completed) { return completed ? [entry] : []; }); }))
            .map(function (x) {
            var result = [];
            x.forEach(function (x2) { return x2.forEach(function (x3) { return result.push(x3); }); });
            return result;
        });
    }))
        .map(function (x) { return x.length; });
    var cEntriesLeft = cEntries.lift(cEntriesComplete, function (entries, entriesComplete) { return entries.length - entriesComplete; });
    dc.beginElement("footer");
    dc.attr("class", new sodium.Cell("footer"));
    dc.attr("style", cEntries.map(function (entries) { return entries.length == 0 ? "display:none;" : "display:block;"; }));
    viewControlsCount(cEntriesLeft, dc);
    viewControlsFilters(cVisibility, dc);
    viewControlsClear(cEntriesComplete, dc);
    dc.endElement();
}
function viewControlsCount(cEntriesLeft, dc) {
    var cItem_ = cEntriesLeft.map(function (entriesLeft) { return entriesLeft == 1 ? " item" : " items"; });
    dc.beginElement("span");
    dc.attr("class", new sodium.Cell("todo-count"));
    dc.beginElement("strong");
    dc.text(cEntriesLeft.map(function (entriesLeft) { return "" + entriesLeft; }));
    dc.endElement();
    dc.text(cItem_.map(function (item_) { return item_ + " left"; }));
    dc.endElement();
}
function viewControlsFilters(cVisibility, dc) {
    dc.beginElement("ul");
    dc.attr("class", new sodium.Cell("filters"));
    visibilitySwap("#/", "All", cVisibility, dc);
    dc.text(new sodium.Cell(" "));
    visibilitySwap("#/active", "Active", cVisibility, dc);
    dc.text(new sodium.Cell(" "));
    visibilitySwap("#/completed", "Completed", cVisibility, dc);
    dc.endElement();
}
function visibilitySwap(uri, visibility, cActualVisibility, dc) {
    dc.beginElement("li");
    dc.on("click", new sodium.Cell(function (e) { return new MsgChangeVisibility(visibility); }));
    dc.beginElement("a");
    dc.attr("href", new sodium.Cell(uri));
    dc.attr("class", cActualVisibility.map(function (actualVisibility) { return visibility == actualVisibility ? "selected" : ""; }));
    dc.text(new sodium.Cell(visibility));
    dc.endElement();
    dc.endElement();
}
function viewControlsClear(cEntriesCompleted, dc) {
    dc.beginElement("button");
    dc.attr("class", new sodium.Cell("clear-completed"));
    dc.attr("style", cEntriesCompleted.map(function (entriesCompleted) { return entriesCompleted == 0 ? "visibility:none;" : ""; }));
    dc.on("click", new sodium.Cell(function (e) { return new MsgDeleteComplete(); }));
    dc.text(cEntriesCompleted.map(function (entriesCompleted) { return "Clear completed (" + entriesCompleted + ")"; }));
    dc.endElement();
}
function infoFooter(dc) {
    dc.beginElement("footer");
    dc.attr("class", new sodium.Cell("info"));
    dc.beginElement("p");
    dc.text(new sodium.Cell("Double-click to edit a todo"));
    dc.endElement();
    dc.beginElement("p");
    dc.text(new sodium.Cell("Hand Transpiled By "));
    dc.beginElement("a");
    dc.attr("href", new sodium.Cell("http://github.com/clinuxrulz/idom-sodium-todo-mvc"));
    dc.text(new sodium.Cell("Clinton Selke"));
    dc.endElement();
    dc.text(new sodium.Cell(", From TodoMVC written by "));
    dc.beginElement("a");
    dc.attr("href", new sodium.Cell("https://github.com/evancz/elm-todomvc"));
    dc.text(new sodium.Cell("Evan Czaplicki"));
    dc.endElement();
    dc.endElement();
    dc.endElement();
}
function main() {
    sodium.Transaction.run(function () {
        var domCtx = new dom_ctx_1.DomCtxImpl();
        var slMsg = new sodium.StreamLoop();
        var model = new Model(slMsg);
        view(model, domCtx);
        var rootElement = domCtx.state.rootElement;
        var disconnect = rootElement.init();
        document.body.appendChild(rootElement.element);
        slMsg.loop(domCtx.sMsg);
    });
}
main();
},{"./dom_ctx":22,"sodiumjs":3}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sodium = require("sodiumjs");
var typescript_collections_1 = require("typescript-collections");
// Reactive DOM Implementation
var ElementWrapper = /** @class */ (function () {
    function ElementWrapper(element) {
        this.element = element;
        this.children = [];
        this.inits = [];
    }
    ElementWrapper.prototype.init = function () {
        var cleanups = [];
        this.inits.forEach(function (init) { return cleanups.push(init()); });
        this.children.forEach(function (child) { return cleanups.push(child.init()); });
        return function () { return cleanups.forEach(function (cleanup) { return cleanup(); }); };
    };
    return ElementWrapper;
}());
exports.ElementWrapper = ElementWrapper;
var DomCtxImplState = /** @class */ (function () {
    function DomCtxImplState() {
        this.rootElement = null;
        this.parentElement = null;
        this.currentElement = null;
        this.elementStack = new typescript_collections_1.Stack();
    }
    return DomCtxImplState;
}());
exports.DomCtxImplState = DomCtxImplState;
var DomCtxImpl = /** @class */ (function () {
    function DomCtxImpl() {
        this.state = new DomCtxImplState();
        this.stateStack = new typescript_collections_1.Stack();
        this._sMsg = new sodium.StreamSink();
    }
    Object.defineProperty(DomCtxImpl.prototype, "sMsg", {
        get: function () {
            return this._sMsg;
        },
        enumerable: true,
        configurable: true
    });
    DomCtxImpl.prototype.enterSubState = function () {
        this.stateStack.push(this.state);
        this.state = new DomCtxImplState();
    };
    DomCtxImpl.prototype.leaveSubState = function () {
        var r = this.state;
        this.state = this.stateStack.pop();
        return r;
    };
    DomCtxImpl.prototype.beginElement = function (tagName) {
        this.state.parentElement = this.state.currentElement;
        if (this.state.currentElement != null) {
            this.state.elementStack.push(this.state.currentElement);
        }
        this.state.currentElement = new ElementWrapper(document.createElement(tagName));
        if (this.state.parentElement != null) {
            this.state.parentElement.children.push(this.state.currentElement);
            this.state.parentElement.element.appendChild(this.state.currentElement.element);
        }
    };
    DomCtxImpl.prototype.endElement = function () {
        if (this.state.elementStack.isEmpty()) {
            this.state.rootElement = this.state.currentElement;
            this.state.currentElement = null;
        }
        else {
            this.state.currentElement = this.state.elementStack.pop();
        }
        this.state.parentElement = this.state.currentElement;
    };
    DomCtxImpl.prototype.attr = function (name, value) {
        var e = this.state.currentElement;
        e.inits.push(function () {
            var listener = value.listen(function (x) {
                e.element.setAttribute(name, x);
                e.element[name] = x;
            });
            return listener;
        });
    };
    DomCtxImpl.prototype.checked = function (value) {
        var e = this.state.currentElement;
        e.inits.push(function () {
            var listener = value.listen(function (x) {
                if (e.element["checked"] == x) {
                    return;
                }
                e.element["checked"] = x;
                if (x) {
                    e.element.setAttribute("checked", "");
                }
                else {
                    e.element.removeAttribute("checked");
                }
            });
            return listener;
        });
    };
    DomCtxImpl.prototype.text = function (value) {
        var t = document.createTextNode("");
        var e = this.state.currentElement;
        this.state.currentElement.element.appendChild(t);
        e.inits.push(function () {
            var listener = value.listen(function (x) {
                t.data = x;
            });
            return listener;
        });
    };
    DomCtxImpl.prototype.on = function (eventName, handler) {
        var _this = this;
        var e = this.state.currentElement;
        e.inits.push(function () {
            var innerHandler = null;
            var listener = handler.listen(function (x) {
                if (innerHandler != null) {
                    e.element.removeEventListener(eventName, innerHandler);
                }
                innerHandler = function (e) {
                    _this._sMsg.send(x(e));
                };
                e.element.addEventListener(eventName, innerHandler);
            });
            return function () {
                listener();
                if (innerHandler != null) {
                    e.element.removeEventListener(eventName, innerHandler);
                }
            };
        });
    };
    DomCtxImpl.prototype.forEach = function (elements, keyExtractor, view) {
        var _this = this;
        this.beginElement("div");
        var d = this.state.currentElement.element;
        this.state.currentElement.inits.push(function () {
            var lastChildren = {};
            var listener = elements.listen(function (elements2) {
                {
                    var childrenRemoved = {};
                    for (var key in lastChildren) {
                        if (!lastChildren.hasOwnProperty(key)) {
                            continue;
                        }
                        childrenRemoved[key] = lastChildren[key];
                    }
                    for (var i = 0; i < elements2.length; ++i) {
                        var element = elements2[i];
                        var key = keyExtractor(element);
                        delete childrenRemoved[key];
                    }
                    for (var key in childrenRemoved) {
                        if (!childrenRemoved.hasOwnProperty(key)) {
                            continue;
                        }
                        var x = childrenRemoved[key];
                        (x.cleanup)();
                    }
                }
                while (d.lastChild != undefined) {
                    d.removeChild(d.lastChild);
                }
                var nextChildren = {};
                for (var i = 0; i < elements2.length; ++i) {
                    var element = elements2[i];
                    var key = keyExtractor(element);
                    var e2 = lastChildren[key];
                    if (e2 != undefined) {
                        d.appendChild(e2.element.element);
                        nextChildren[key] = e2;
                    }
                    else {
                        _this.enterSubState();
                        view(element);
                        var subState = _this.leaveSubState();
                        d.appendChild(subState.rootElement.element);
                        nextChildren[key] = { element: subState.rootElement, cleanup: (subState.rootElement.init)() };
                    }
                }
                lastChildren = nextChildren;
            });
            return function () {
                listener();
                for (var key in lastChildren) {
                    if (!lastChildren.hasOwnProperty(key)) {
                        continue;
                    }
                    (lastChildren[key].cleanup)();
                }
            };
        });
        this.endElement();
    };
    return DomCtxImpl;
}());
exports.DomCtxImpl = DomCtxImpl;
},{"sodiumjs":3,"typescript-collections":19}]},{},[21])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy9zYW5jdHVhcnktdHlwZS1jbGFzc2VzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NhbmN0dWFyeS10eXBlLWlkZW50aWZpZXJzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NvZGl1bWpzL2Rpc3Qvc29kaXVtLmNqcy5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL0JTVHJlZS5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL0JTVHJlZUtWLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvQmFnLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvRGljdGlvbmFyeS5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL0ZhY3RvcnlEaWN0aW9uYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvSGVhcC5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL0xpbmtlZERpY3Rpb25hcnkuanMiLCJub2RlX21vZHVsZXMvdHlwZXNjcmlwdC1jb2xsZWN0aW9ucy9kaXN0L2xpYi9MaW5rZWRMaXN0LmpzIiwibm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvTXVsdGlEaWN0aW9uYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvTXVsdGlSb290VHJlZS5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL1ByaW9yaXR5UXVldWUuanMiLCJub2RlX21vZHVsZXMvdHlwZXNjcmlwdC1jb2xsZWN0aW9ucy9kaXN0L2xpYi9RdWV1ZS5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL1NldC5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL1N0YWNrLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvYXJyYXlzLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdHlwZXNjcmlwdC1jb2xsZWN0aW9ucy9kaXN0L2xpYi91dGlsLmpzIiwic3JjL2FwcC50cyIsInNyYy9kb21fY3R4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3d0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2phQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUlBLHFDQUErQztBQUMvQyxpQ0FBbUM7QUFFbkM7SUFNSSxlQUFtQixJQUF3QjtRQUN2QyxJQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQVcsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUMvQyxJQUFJLE1BQU0sR0FBNEMsRUFBRSxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQWpFLENBQWlFLENBQUMsQ0FBQztZQUM1RixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNO1lBQ1AsSUFBSTtpQkFDQyxHQUFHLENBQUMsVUFBQSxHQUFHO2dCQUNKLElBQUksR0FBRyxZQUFZLGNBQWMsRUFBRTtvQkFDL0IsT0FBTyxHQUFHLENBQUM7aUJBQ2Q7cUJBQU07b0JBQ0gsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLENBQUM7aUJBQ0QsYUFBYSxFQUFFO2lCQUNmLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxLQUFLLEVBQVQsQ0FBUyxDQUFDO2lCQUNyQixNQUFNLENBQ0gsSUFBSTtpQkFDQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLFlBQVksTUFBTSxFQUFyQixDQUFxQixDQUFDO2lCQUNwQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ2pCO2lCQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQVUsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVc7WUFDWixJQUFJO2lCQUNDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQ0osSUFBSSxHQUFHLFlBQVksbUJBQW1CLEVBQUU7b0JBQ3BDLE9BQU8sR0FBRyxDQUFDO2lCQUNkO3FCQUFNO29CQUNILE9BQU8sSUFBSSxDQUFDO2lCQUNmO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELGFBQWEsRUFBRTtpQkFDZixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsS0FBSyxFQUFULENBQVMsQ0FBQztpQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQ1YsSUFBSTthQUNDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsWUFBWSxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEIsU0FBUyxDQUNOLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLE1BQU0sRUFDWCxVQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSztZQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNuQixPQUFPLE9BQU8sQ0FBQzthQUNsQjtpQkFBTTtnQkFDSCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxRQUFRLENBQUM7YUFDbkI7UUFDTCxDQUFDLENBQ0o7YUFDQSxNQUFNLENBQ0gsSUFBSTthQUNDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDSixJQUFJLEdBQUcsWUFBWSxTQUFTLEVBQUU7Z0JBQzFCLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsQ0FBQzthQUNELGFBQWEsRUFBRTthQUNmLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxFQUFFLEVBQU4sQ0FBTSxDQUFDO2FBQ2xCLFFBQVEsQ0FDTCxJQUFJLENBQUMsUUFBUSxFQUNiLFVBQUMsRUFBRSxFQUFFLE9BQU87WUFDUixPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBZCxDQUFjLENBQUM7UUFBdkMsQ0FBdUMsQ0FDOUMsQ0FDUjthQUNBLE1BQU0sQ0FDSCxJQUFJO2FBQ0MsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNKLElBQUksR0FBRyxZQUFZLGlCQUFpQixFQUFFO2dCQUNsQyxPQUFPLEdBQUcsQ0FBQzthQUNkO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUM7YUFDRCxhQUFhLEVBQUU7YUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUExQixDQUEwQixDQUFDLEVBQW5ELENBQW1ELENBQUMsQ0FDM0UsQ0FDUixDQUFDO1FBQ0YsS0FBSyxDQUFDLElBQUksQ0FDTixJQUFJO2FBQ0MsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxZQUFZLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNwQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUN2QixDQUFDO0lBQ04sQ0FBQztJQUNMLFlBQUM7QUFBRCxDQW5HQSxBQW1HQyxJQUFBO0FBRUQ7SUFNSSxlQUFtQixFQUFVLEVBQUUsZUFBdUIsRUFBRSxJQUF3QjtRQUFoRixpQkFrREM7UUFqREcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWTtZQUNiLElBQUk7aUJBQ0MsR0FBRyxDQUFDLFVBQUEsR0FBRztnQkFDSixJQUFJLEdBQUcsWUFBWSxjQUFjLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxLQUFJLENBQUMsRUFBRSxFQUFFO29CQUNwRCxPQUFPLEdBQUcsQ0FBQztpQkFDZDtxQkFBTTtvQkFDSCxPQUFPLElBQUksQ0FBQztpQkFDZjtZQUNMLENBQUMsQ0FBQztpQkFDRCxhQUFhLEVBQUU7aUJBQ2YsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEtBQUssRUFBVCxDQUFTLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVTtZQUNYLElBQUk7aUJBQ0MsR0FBRyxDQUFDLFVBQUEsR0FBRztnQkFDSixJQUFJLEdBQUcsWUFBWSxRQUFRLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxLQUFJLENBQUMsRUFBRSxFQUFFO29CQUM5QyxPQUFPLEdBQUcsQ0FBQztpQkFDZDtxQkFBTTtvQkFDSCxPQUFPLElBQUksQ0FBQztpQkFDZjtZQUNMLENBQUMsQ0FBQztpQkFDRCxhQUFhLEVBQUU7aUJBQ2YsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEtBQUssRUFBVCxDQUFTLENBQUM7aUJBQ3JCLE1BQU0sQ0FDSCxJQUFJO2lCQUNDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQ0osSUFBSSxHQUFHLFlBQVksV0FBVyxFQUFFO29CQUM1QixPQUFPLEdBQUcsQ0FBQztpQkFDZDtxQkFBTTtvQkFDSCxPQUFPLElBQUksQ0FBQztpQkFDZjtZQUNMLENBQUMsQ0FBQztpQkFDRCxhQUFhLEVBQUU7aUJBQ2YsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEtBQUssRUFBVCxDQUFTLENBQUMsQ0FDN0I7aUJBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRO1lBQ1QsSUFBSTtpQkFDQyxHQUFHLENBQUMsVUFBQSxHQUFHO2dCQUNKLElBQUksR0FBRyxZQUFZLGVBQWUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEtBQUksQ0FBQyxFQUFFLEVBQUU7b0JBQ3JELE9BQU8sR0FBRyxDQUFDO2lCQUNkO3FCQUFNO29CQUNILE9BQU8sSUFBSSxDQUFDO2lCQUNmO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELGFBQWEsRUFBRTtpQkFDZixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsS0FBSyxFQUFULENBQVMsQ0FBQztpQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0F6REEsQUF5REMsSUFBQTtBQUtEO0lBQUE7SUFBOEIsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBRS9CO0lBRUksd0JBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFFRDtJQUFBO0lBQ0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQUVEO0lBRUkscUJBQW1CLEtBQWM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFFRDtJQUdJLGtCQUFtQixFQUFVLEVBQUUsS0FBYztRQUN6QyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFFRDtJQUdJLHlCQUFtQixFQUFVLEVBQUUsS0FBYztRQUN6QyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxzQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBRUQ7SUFFSSxtQkFBbUIsRUFBVTtRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUVEO0lBQUE7SUFDQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQUVEO0lBR0ksd0JBQW1CLEVBQVUsRUFBRSxLQUFhO1FBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFFRDtJQUVJLDZCQUFtQixLQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCwwQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBRUQsT0FBTztBQUVQLFNBQVMsSUFBSSxDQUFDLEtBQVksRUFBRSxFQUFlO0lBQ3ZDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNyRCxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3hELEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQixVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUEwQixFQUFFLEVBQWU7SUFDMUQsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU1QyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0QyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRWhCLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNsRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1QyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFRLElBQUssT0FBQSxJQUFJLGNBQWMsQ0FBRSxDQUFDLENBQUMsVUFBK0IsQ0FBQyxLQUFLLENBQUMsRUFBNUQsQ0FBNEQsQ0FBQyxDQUFDLENBQUM7SUFDNUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUTtRQUN0QyxJQUFJLEVBQUUsR0FBRyxDQUFrQixDQUFDO1FBQzVCLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDbEIsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFcEIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxXQUFnQyxFQUFFLFFBQThCLEVBQUUsRUFBZTtJQUNsRyxJQUFJLFVBQVUsR0FDVixVQUFDLElBQVc7UUFDUixPQUFBLFdBQVcsQ0FBQyxJQUFJLENBQ1osSUFBSSxDQUFDLFVBQVUsRUFDZixVQUFDLFVBQWtCLEVBQUUsU0FBa0I7WUFDbkMsUUFBUSxVQUFVLEVBQUU7Z0JBQ2hCLEtBQUssV0FBVztvQkFDWixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxRQUFRO29CQUNULE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCO29CQUNJLE9BQU8sSUFBSSxDQUFDO2FBQ25CO1FBQ0wsQ0FBQyxDQUNKO0lBWkQsQ0FZQyxDQUFDO0lBQ1YsSUFBSSxZQUFZLEdBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ2YsUUFBUTtTQUNILEdBQUcsQ0FDQSxVQUFBLE9BQU87UUFDSCxPQUFBLE1BQU0sQ0FBQyxJQUFJO2FBQ04sU0FBUyxDQUNOLE9BQU87YUFDRixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFoQixDQUFnQixDQUFDLENBQ3RDO2FBQ0EsR0FBRyxDQUFDLFVBQUEsU0FBUztZQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNmLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO0lBWk4sQ0FZTSxDQUNiLENBQ1IsQ0FBQztJQUNOLElBQUksY0FBYyxHQUNkLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQTFDLENBQTBDLENBQUMsQ0FBQztJQUV4RSxJQUFJLGVBQWUsR0FDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDZixRQUFRLENBQUMsR0FBRyxDQUNSLFVBQUEsT0FBTztRQUNILE9BQUEsTUFBTSxDQUFDLElBQUk7YUFDTixTQUFTLENBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxFQUF4RCxDQUF3RCxDQUFDLENBQ2pGO2FBQ0EsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNGLElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztZQUNuRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUM7SUFSTixDQVFNLENBQ2IsQ0FDSixDQUFDO0lBRU4sRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsVUFBVSxHQUFHLGFBQWEsR0FBRyxHQUFHLEVBQWhDLENBQWdDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDaEQsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QixFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsVUFBQyxDQUFRLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUE3QixDQUE2QixFQUEzQyxDQUEyQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDckQsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBYixDQUFhLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDdkYsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBVyxFQUFFLEVBQWU7SUFDM0MsSUFBSSxNQUFNLEdBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQ2IsVUFBQyxTQUFTLEVBQUUsT0FBTztRQUNmLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsT0FBTyxtQkFBbUIsQ0FBQzthQUM5QjtpQkFBTTtnQkFDSCxPQUFPLFdBQVcsQ0FBQzthQUN0QjtTQUNKO2FBQU07WUFDSCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLFNBQVMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQzthQUNiO1NBQ0o7SUFDTCxDQUFDLENBQ0osQ0FBQztJQUNOLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsVUFBQyxDQUFRLElBQUssT0FBQSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQWpDLENBQWlDLEVBQS9DLENBQStDLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVEsSUFBSyxPQUFBLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQixFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVEsSUFBSyxPQUFBLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7SUFDMUUsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVEsSUFBSyxPQUFBLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUcsQ0FBQyxDQUFDLFVBQStCLENBQUMsS0FBSyxDQUFDLEVBQXJFLENBQXFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JILEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVEsSUFBSyxPQUFBLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVE7UUFDdEMsSUFBSSxFQUFFLEdBQUcsQ0FBa0IsQ0FBQztRQUM1QixJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsV0FBZ0MsRUFBRSxRQUE4QixFQUFFLEVBQWU7SUFDbkcsSUFBSSxnQkFBZ0IsR0FDaEIsTUFBTSxDQUFDLElBQUk7U0FDTixPQUFPLENBQ0osUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87UUFDaEIsT0FBQSxNQUFNLENBQUMsSUFBSTthQUNOLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxFQUEzRCxDQUEyRCxDQUFDLENBQUM7YUFDNUYsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNGLElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztZQUNuRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUM7SUFOTixDQU1NLENBQ1QsQ0FDSjtTQUNBLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDLENBQUM7SUFDNUIsSUFBSSxZQUFZLEdBQ1osUUFBUSxDQUFDLElBQUksQ0FDVCxnQkFBZ0IsRUFDaEIsVUFBQyxPQUFPLEVBQUUsZUFBZSxJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFlLEVBQWhDLENBQWdDLENBQ2pFLENBQUM7SUFFTixFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBeEQsQ0FBd0QsQ0FBQyxDQUFDLENBQUM7SUFDcEcsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsWUFBaUMsRUFBRSxFQUFlO0lBQ3pFLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0lBRXBGLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDaEQsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxFQUFFLEdBQUcsV0FBVyxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztJQUMvRCxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxHQUFHLE9BQU8sRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2xELEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxXQUFnQyxFQUFFLEVBQWU7SUFDMUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3QyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QixjQUFjLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QixjQUFjLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEUsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFXLEVBQUUsVUFBa0IsRUFBRSxpQkFBc0MsRUFBRSxFQUFlO0lBQzVHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUSxJQUFLLE9BQUEsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBQSxnQkFBZ0IsSUFBSSxPQUFBLFVBQVUsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQWhELENBQWdELENBQUMsQ0FBQyxDQUFDO0lBQzlHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDekMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxpQkFBc0MsRUFBRSxFQUFlO0lBQzlFLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNyRCxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBQSxnQkFBZ0IsSUFBSSxPQUFBLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDLENBQUM7SUFDN0csRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUSxJQUFLLE9BQUEsSUFBSSxpQkFBaUIsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUMsQ0FBQztJQUN2RSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFBLGdCQUFnQixJQUFJLE9BQUEsbUJBQW1CLEdBQUcsZ0JBQWdCLEdBQUcsR0FBRyxFQUE1QyxDQUE0QyxDQUFDLENBQUMsQ0FBQztJQUNyRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLEVBQWU7SUFDL0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUM1RCxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDaEQsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQyxDQUFDO0lBQ3RGLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUN2RCxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQzlDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxTQUFTLElBQUk7SUFDVCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLG9CQUFVLEVBQU8sQ0FBQztRQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQU8sQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUM7Ozs7QUNsZ0JQLGlDQUFtQztBQUNuQyxpRUFBK0M7QUFtQi9DLDhCQUE4QjtBQUU5QjtJQUlJLHdCQUFtQixPQUFvQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sNkJBQUksR0FBWDtRQUNJLElBQUksUUFBUSxHQUFpQixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUM1RCxPQUFPLGNBQU0sT0FBQSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxDQUFDLEVBQXRDLENBQXNDLENBQUM7SUFDeEQsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSx3Q0FBYztBQWtCM0I7SUFBQTtRQUNJLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQyxrQkFBYSxHQUFtQixJQUFJLENBQUM7UUFDckMsbUJBQWMsR0FBbUIsSUFBSSxDQUFDO1FBQ3RDLGlCQUFZLEdBQTBCLElBQUksOEJBQUssRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFBRCxzQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksMENBQWU7QUFPNUI7SUFBQTtRQUNJLFVBQUssR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUMvQyxlQUFVLEdBQTJCLElBQUksOEJBQUssRUFBRSxDQUFDO1FBQ2pELFVBQUssR0FBMkIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFrSzVELENBQUM7SUFoS0csc0JBQVcsNEJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVPLGtDQUFhLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsT0FBZTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuRjtJQUNMLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDekQsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFZLEVBQUUsS0FBMEI7UUFDekMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDVCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUMsT0FBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxLQUEyQjtRQUMvQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNULElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUN6QixJQUFLLENBQUMsQ0FBQyxPQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNwQyxPQUFPO2lCQUNWO2dCQUNBLENBQUMsQ0FBQyxPQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsRUFBRTtvQkFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3pDO3FCQUFNO29CQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN4QztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUJBQUksR0FBSixVQUFLLEtBQTBCO1FBQzNCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNULElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUN6QixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUJBQUUsR0FBRixVQUFHLFNBQWlCLEVBQUUsT0FBdUM7UUFBN0QsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ1QsSUFBSSxZQUFZLEdBQXlCLElBQUksQ0FBQztZQUM5QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztnQkFDM0IsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO29CQUN0QixDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsWUFBWSxHQUFHLFVBQUMsQ0FBUTtvQkFDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQztnQkFDRixDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU87Z0JBQ0gsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO29CQUN0QixDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztpQkFDMUQ7WUFDTCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVcsUUFBMEIsRUFBRSxZQUE4QixFQUFFLElBQW9CO1FBQTNGLGlCQTJEQztRQTFERyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksWUFBWSxHQUFvRSxFQUFFLENBQUM7WUFDdkYsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFNBQVM7Z0JBQ3BDO29CQUNJLElBQUksZUFBZSxHQUFvRSxFQUFFLENBQUM7b0JBQzFGLEtBQUssSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFO3dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDbkMsU0FBUzt5QkFDWjt3QkFDRCxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM1QztvQkFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDdkMsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMvQjtvQkFDRCxLQUFLLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRTt3QkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ3RDLFNBQVM7eUJBQ1o7d0JBQ0QsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3FCQUNqQjtpQkFDSjtnQkFDRCxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFFO29CQUM3QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDOUI7Z0JBQ0QsSUFBSSxZQUFZLEdBQW9FLEVBQUUsQ0FBQztnQkFDdkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7b0JBQ3ZDLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLElBQUksRUFBRSxJQUFJLFNBQVMsRUFBRTt3QkFDakIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNsQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUMxQjt5QkFBTTt3QkFDSCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDZCxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ3BDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ2hHO2lCQUNKO2dCQUNELFlBQVksR0FBRyxZQUFZLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO2dCQUNILFFBQVEsRUFBRSxDQUFDO2dCQUNYLEtBQUssSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFO29CQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDbkMsU0FBUztxQkFDWjtvQkFDRCxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2lCQUNqQztZQUNMLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxpQkFBQztBQUFELENBcktBLEFBcUtDLElBQUE7QUFyS1ksZ0NBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuICAgICAgICAgICAgICMjIyMjIyMjIyMjIyAgICAgICAgICAgICAgICAgICNcbiAgICAgICAgICAgICMjIyMjIyMjIyMjIyAgICAgICAgICAgICAgICAgICMjI1xuICAgICAgICAgICAgICAgICAgIyMjIyMgICAgICAgICAgICAgICAgICAjIyMjI1xuICAgICAgICAgICAgICAgICMjIyMjICAgICAgIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICAgICAgICAgICAgIyMjIyMgICAgICAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgICAgICAgICAgIyMjIyMgICAgICAgICAgICAgICAgICAgICAjIyMjIyMjIyMjI1xuICAgICAgICAgICMjIyMjICAgICAgICAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgICAgICAjIyMjIyAgICAgICAgICAjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgICAgIyMjIyMgICAgICAgICAgICAgICAgICAgICAgICAjIyMjI1xuICAgICAjIyMjIyMjIyMjIyMgICAgICAgICAgICAgICAgICMjI1xuICAgICMjIyMjIyMjIyMjIyAgICAgICAgICAgICAgICAgKi9cblxuLy8uICMgc2FuY3R1YXJ5LXR5cGUtY2xhc3Nlc1xuLy8uXG4vLy4gVGhlIFtGYW50YXN5IExhbmQgU3BlY2lmaWNhdGlvbl1bRkxdIFwic3BlY2lmaWVzIGludGVyb3BlcmFiaWxpdHkgb2YgY29tbW9uXG4vLy4gYWxnZWJyYWljIHN0cnVjdHVyZXNcIiBieSBkZWZpbmluZyBhIG51bWJlciBvZiB0eXBlIGNsYXNzZXMuIEZvciBlYWNoIHR5cGVcbi8vLiBjbGFzcywgaXQgc3RhdGVzIGxhd3Mgd2hpY2ggZXZlcnkgbWVtYmVyIG9mIGEgdHlwZSBtdXN0IG9iZXkgaW4gb3JkZXIgZm9yXG4vLy4gdGhlIHR5cGUgdG8gYmUgYSBtZW1iZXIgb2YgdGhlIHR5cGUgY2xhc3MuIEluIG9yZGVyIGZvciB0aGUgTWF5YmUgdHlwZSB0b1xuLy8uIGJlIGNvbnNpZGVyZWQgYSBbRnVuY3Rvcl1bXSwgZm9yIGV4YW1wbGUsIGV2ZXJ5IGBNYXliZSBhYCB2YWx1ZSBtdXN0IGhhdmVcbi8vLiBhIGBmYW50YXN5LWxhbmQvbWFwYCBtZXRob2Qgd2hpY2ggb2JleXMgdGhlIGlkZW50aXR5IGFuZCBjb21wb3NpdGlvbiBsYXdzLlxuLy8uXG4vLy4gVGhpcyBwcm9qZWN0IHByb3ZpZGVzOlxuLy8uXG4vLy4gICAtIFtgVHlwZUNsYXNzYF0oI1R5cGVDbGFzcyksIGEgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHR5cGUgY2xhc3Nlcztcbi8vLiAgIC0gb25lIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBlYWNoIEZhbnRhc3kgTGFuZCB0eXBlIGNsYXNzO1xuLy8uICAgLSBsYXdmdWwgRmFudGFzeSBMYW5kIG1ldGhvZHMgZm9yIEphdmFTY3JpcHQncyBidWlsdC1pbiB0eXBlcztcbi8vLiAgIC0gb25lIGZ1bmN0aW9uIGZvciBlYWNoIEZhbnRhc3kgTGFuZCBtZXRob2Q7IGFuZFxuLy8uICAgLSBzZXZlcmFsIGZ1bmN0aW9ucyBkZXJpdmVkIGZyb20gdGhlc2UgZnVuY3Rpb25zLlxuLy8uXG4vLy4gIyMgVHlwZS1jbGFzcyBoaWVyYXJjaHlcbi8vLlxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLy8uIDxwcmU+XG4vLy4gIFNldG9pZCAgIFNlbWlncm91cG9pZCAgU2VtaWdyb3VwICAgRm9sZGFibGUgICAgICAgIEZ1bmN0b3IgICAgICBDb250cmF2YXJpYW50ICBGaWx0ZXJhYmxlXG4vLy4gKGVxdWFscykgICAgKGNvbXBvc2UpICAgIChjb25jYXQpICAgKHJlZHVjZSkgICAgICAgICAobWFwKSAgICAgICAgKGNvbnRyYW1hcCkgICAgKGZpbHRlcilcbi8vLiAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgXFwgICAgICAgICAvIHwgfCB8IHwgXFxcbi8vLiAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgIFxcICAgICAgIC8gIHwgfCB8IHwgIFxcXG4vLy4gICAgIHwgICAgICAgICAgIHwgICAgICAgICAgIHwgICAgICAgICAgICAgXFwgICAgIC8gICB8IHwgfCB8ICAgXFxcbi8vLiAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgICAgXFwgICAvICAgIHwgfCB8IHwgICAgXFxcbi8vLiAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgfCAgICAgICAgICAgICAgIFxcIC8gICAgIHwgfCB8IHwgICAgIFxcXG4vLy4gICAgT3JkICAgICAgQ2F0ZWdvcnkgICAgIE1vbm9pZCAgICAgICAgIFRyYXZlcnNhYmxlIHwgfCB8IHwgICAgICBcXFxuLy8uICAgKGx0ZSkgICAgICAgKGlkKSAgICAgICAoZW1wdHkpICAgICAgICAodHJhdmVyc2UpICAvIHwgfCBcXCAgICAgICBcXFxuLy8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgIC8gIHwgfCAgXFwgICAgICAgXFxcbi8vLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgIC8gICAvIFxcICAgXFwgICAgICAgXFxcbi8vLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICBQcm9mdW5jdG9yIC8gICBcXCBCaWZ1bmN0b3IgXFxcbi8vLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgKHByb21hcCkgLyAgICAgXFwgKGJpbWFwKSAgIFxcXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgLyAgICAgICBcXCAgICAgICAgICAgXFxcbi8vLiAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyb3VwICAgICAgICAgICAgICAgICAgIC8gICAgICAgICBcXCAgICAgICAgICAgXFxcbi8vLiAgICAgICAgICAgICAgICAgICAgICAgICAgKGludmVydCkgICAgICAgICAgICAgICBBbHQgICAgICAgIEFwcGx5ICAgICAgRXh0ZW5kXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWx0KSAgICAgICAgKGFwKSAgICAgKGV4dGVuZClcbi8vLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvICAgICAgICAgICAvIFxcICAgICAgICAgICBcXFxuLy8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyAgICAgICAgICAgLyAgIFxcICAgICAgICAgICBcXFxuLy8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvICAgICAgICAgICAvICAgICBcXCAgICAgICAgICAgXFxcbi8vLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvICAgICAgICAgICAvICAgICAgIFxcICAgICAgICAgICBcXFxuLy8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyAgICAgICAgICAgLyAgICAgICAgIFxcICAgICAgICAgICBcXFxuLy8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsdXMgICAgQXBwbGljYXRpdmUgICAgQ2hhaW4gICAgICBDb21vbmFkXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoemVybykgICAgICAgKG9mKSAgICAgIChjaGFpbikgICAgKGV4dHJhY3QpXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXCAgICAgICAgIC8gXFwgICAgICAgICAvIFxcXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFwgICAgICAgLyAgIFxcICAgICAgIC8gICBcXFxuLy8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXCAgICAgLyAgICAgXFwgICAgIC8gICAgIFxcXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXCAgIC8gICAgICAgXFwgICAvICAgICAgIFxcXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFwgLyAgICAgICAgIFxcIC8gICAgICAgICBcXFxuLy8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWx0ZXJuYXRpdmUgICAgTW9uYWQgICAgIENoYWluUmVjXG4vLy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhaW5SZWMpXG4vLy4gPC9wcmU+XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbi8vLlxuLy8uICMjIEFQSVxuXG4oZnVuY3Rpb24oZikge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZihyZXF1aXJlKCdzYW5jdHVhcnktdHlwZS1pZGVudGlmaWVycycpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgIT0gbnVsbCkge1xuICAgIGRlZmluZShbJ3NhbmN0dWFyeS10eXBlLWlkZW50aWZpZXJzJ10sIGYpO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuc2FuY3R1YXJ5VHlwZUNsYXNzZXMgPSBmKHNlbGYuc2FuY3R1YXJ5VHlwZUlkZW50aWZpZXJzKTtcbiAgfVxuXG59KGZ1bmN0aW9uKHR5cGUpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgX19kb2N0ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qIGdsb2JhbCBfX2RvY3Rlc3Q6ZmFsc2UgKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIHZhciBJZGVudGl0eSA9IF9fZG9jdGVzdC5yZXF1aXJlKCcuL3Rlc3QvSWRlbnRpdHknKTtcbiAgICB2YXIgTGlzdCA9IF9fZG9jdGVzdC5yZXF1aXJlKCcuL3Rlc3QvTGlzdCcpO1xuICAgIHZhciBNYXliZSA9IF9fZG9jdGVzdC5yZXF1aXJlKCcuL3Rlc3QvTWF5YmUnKTtcbiAgICB2YXIgU3VtID0gX19kb2N0ZXN0LnJlcXVpcmUoJy4vdGVzdC9TdW0nKTtcbiAgICB2YXIgVHVwbGUgPSBfX2RvY3Rlc3QucmVxdWlyZSgnLi90ZXN0L1R1cGxlJyk7XG5cbiAgICB2YXIgTmlsID0gTGlzdC5OaWwsIENvbnMgPSBMaXN0LkNvbnM7XG4gICAgdmFyIE5vdGhpbmcgPSBNYXliZS5Ob3RoaW5nLCBKdXN0ID0gTWF5YmUuSnVzdDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIH1cblxuICAvLyAgY29uY2F0XyA6OiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuICBmdW5jdGlvbiBjb25jYXRfKHhzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHlzKSB7XG4gICAgICByZXR1cm4geHMuY29uY2F0KHlzKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gIGNvbnN0YW50IDo6IGEgLT4gYiAtPiBhXG4gIGZ1bmN0aW9uIGNvbnN0YW50KHgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oeSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfVxuXG4gIC8vICBmb3JFYWNoS2V5IDo6IChTdHJNYXAgYSwgU3RyTWFwIGEgfj4gU3RyaW5nIC0+IFVuZGVmaW5lZCkgLT4gVW5kZWZpbmVkXG4gIGZ1bmN0aW9uIGZvckVhY2hLZXkoc3RyTWFwLCBmKSB7XG4gICAgT2JqZWN0LmtleXMoc3RyTWFwKS5mb3JFYWNoKGYsIHN0ck1hcCk7XG4gIH1cblxuICAvLyAgaGFzIDo6IChTdHJpbmcsIE9iamVjdCkgLT4gQm9vbGVhblxuICBmdW5jdGlvbiBoYXMoaywgbykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgayk7XG4gIH1cblxuICAvLyAgaWRlbnRpdHkgOjogYSAtPiBhXG4gIGZ1bmN0aW9uIGlkZW50aXR5KHgpIHsgcmV0dXJuIHg7IH1cblxuICAvLyAgcGFpciA6OiBhIC0+IGIgLT4gQXJyYXkyIGEgYlxuICBmdW5jdGlvbiBwYWlyKHgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oeSkge1xuICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9O1xuICB9XG5cbiAgLy8gIHNhbWVUeXBlIDo6IChhLCBiKSAtPiBCb29sZWFuXG4gIGZ1bmN0aW9uIHNhbWVUeXBlKHgsIHkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IHR5cGVvZiB5ICYmIHR5cGUoeCkgPT09IHR5cGUoeSk7XG4gIH1cblxuICAvLyAgdGhydXNoIDo6IGEgLT4gKGEgLT4gYikgLT4gYlxuICBmdW5jdGlvbiB0aHJ1c2goeCkge1xuICAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gZih4KTtcbiAgICB9O1xuICB9XG5cbiAgLy8gIHR5cGUgSXRlcmF0aW9uIGEgPSB7IHZhbHVlIDo6IGEsIGRvbmUgOjogQm9vbGVhbiB9XG5cbiAgLy8gIGl0ZXJhdGlvbk5leHQgOjogYSAtPiBJdGVyYXRpb24gYVxuICBmdW5jdGlvbiBpdGVyYXRpb25OZXh0KHgpIHsgcmV0dXJuIHt2YWx1ZTogeCwgZG9uZTogZmFsc2V9OyB9XG5cbiAgLy8gIGl0ZXJhdGlvbkRvbmUgOjogYSAtPiBJdGVyYXRpb24gYVxuICBmdW5jdGlvbiBpdGVyYXRpb25Eb25lKHgpIHsgcmV0dXJuIHt2YWx1ZTogeCwgZG9uZTogdHJ1ZX07IH1cblxuICAvLyMgVHlwZUNsYXNzIDo6IChTdHJpbmcsIFN0cmluZywgQXJyYXkgVHlwZUNsYXNzLCBhIC0+IEJvb2xlYW4pIC0+IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIFRoZSBhcmd1bWVudHMgYXJlOlxuICAvLy5cbiAgLy8uICAgLSB0aGUgbmFtZSBvZiB0aGUgdHlwZSBjbGFzcywgcHJlZml4ZWQgYnkgaXRzIG5wbSBwYWNrYWdlIG5hbWU7XG4gIC8vLiAgIC0gdGhlIGRvY3VtZW50YXRpb24gVVJMIG9mIHRoZSB0eXBlIGNsYXNzO1xuICAvLy4gICAtIGFuIGFycmF5IG9mIGRlcGVuZGVuY2llczsgYW5kXG4gIC8vLiAgIC0gYSBwcmVkaWNhdGUgd2hpY2ggYWNjZXB0cyBhbnkgSmF2YVNjcmlwdCB2YWx1ZSBhbmQgcmV0dXJucyBgdHJ1ZWBcbiAgLy8uICAgICBpZiB0aGUgdmFsdWUgc2F0aXNmaWVzIHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHR5cGUgY2xhc3M7IGBmYWxzZWBcbiAgLy8uICAgICBvdGhlcndpc2UuXG4gIC8vLlxuICAvLy4gRXhhbXBsZTpcbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiAvLyAgICBoYXNNZXRob2QgOjogU3RyaW5nIC0+IGEgLT4gQm9vbGVhblxuICAvLy4gY29uc3QgaGFzTWV0aG9kID0gbmFtZSA9PiB4ID0+IHggIT0gbnVsbCAmJiB0eXBlb2YgeFtuYW1lXSA9PSAnZnVuY3Rpb24nO1xuICAvLy5cbiAgLy8uIC8vICAgIEZvbyA6OiBUeXBlQ2xhc3NcbiAgLy8uIGNvbnN0IEZvbyA9IFouVHlwZUNsYXNzKFxuICAvLy4gICAnbXktcGFja2FnZS9Gb28nLFxuICAvLy4gICAnaHR0cDovL2V4YW1wbGUuY29tL215LXBhY2thZ2UjRm9vJyxcbiAgLy8uICAgW10sXG4gIC8vLiAgIGhhc01ldGhvZCgnZm9vJylcbiAgLy8uICk7XG4gIC8vLlxuICAvLy4gLy8gICAgQmFyIDo6IFR5cGVDbGFzc1xuICAvLy4gY29uc3QgQmFyID0gWi5UeXBlQ2xhc3MoXG4gIC8vLiAgICdteS1wYWNrYWdlL0JhcicsXG4gIC8vLiAgICdodHRwOi8vZXhhbXBsZS5jb20vbXktcGFja2FnZSNCYXInLFxuICAvLy4gICBbRm9vXSxcbiAgLy8uICAgaGFzTWV0aG9kKCdiYXInKVxuICAvLy4gKTtcbiAgLy8uIGBgYFxuICAvLy5cbiAgLy8uIFR5cGVzIHdob3NlIHZhbHVlcyBoYXZlIGEgYGZvb2AgbWV0aG9kIGFyZSBtZW1iZXJzIG9mIHRoZSBGb28gdHlwZSBjbGFzcy5cbiAgLy8uIE1lbWJlcnMgb2YgdGhlIEZvbyB0eXBlIGNsYXNzIHdob3NlIHZhbHVlcyBoYXZlIGEgYGJhcmAgbWV0aG9kIGFyZSBhbHNvXG4gIC8vLiBtZW1iZXJzIG9mIHRoZSBCYXIgdHlwZSBjbGFzcy5cbiAgLy8uXG4gIC8vLiBFYWNoIGBUeXBlQ2xhc3NgIHZhbHVlIGhhcyBhIGB0ZXN0YCBmaWVsZDogYSBmdW5jdGlvbiB3aGljaCBhY2NlcHRzXG4gIC8vLiBhbnkgSmF2YVNjcmlwdCB2YWx1ZSBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIHNhdGlzZmllcyB0aGVcbiAgLy8uIHR5cGUgY2xhc3MncyBwcmVkaWNhdGUgYW5kIHRoZSBwcmVkaWNhdGVzIG9mIGFsbCB0aGUgdHlwZSBjbGFzcydzXG4gIC8vLiBkZXBlbmRlbmNpZXM7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlcyBtYXkgYmUgdXNlZCB3aXRoIFtzYW5jdHVhcnktZGVmXVt0eXBlLWNsYXNzZXNdXG4gIC8vLiB0byBkZWZpbmUgcGFyYW1ldHJpY2FsbHkgcG9seW1vcnBoaWMgZnVuY3Rpb25zIHdoaWNoIHZlcmlmeSB0aGVpclxuICAvLy4gdHlwZS1jbGFzcyBjb25zdHJhaW50cyBhdCBydW4gdGltZS5cbiAgZnVuY3Rpb24gVHlwZUNsYXNzKG5hbWUsIHVybCwgZGVwZW5kZW5jaWVzLCB0ZXN0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFR5cGVDbGFzcykpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUNsYXNzKG5hbWUsIHVybCwgZGVwZW5kZW5jaWVzLCB0ZXN0KTtcbiAgICB9XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnRlc3QgPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGVzdCh4KTsgfSkgJiYgdGVzdCh4KTtcbiAgICB9O1xuICB9XG5cbiAgVHlwZUNsYXNzWydAQHR5cGUnXSA9ICdzYW5jdHVhcnktdHlwZS1jbGFzc2VzL1R5cGVDbGFzcyc7XG5cbiAgLy8gIGRhdGEgTG9jYXRpb24gPSBDb25zdHJ1Y3RvciB8IFZhbHVlXG5cbiAgLy8gIENvbnN0cnVjdG9yIDo6IExvY2F0aW9uXG4gIHZhciBDb25zdHJ1Y3RvciA9ICdDb25zdHJ1Y3Rvcic7XG5cbiAgLy8gIFZhbHVlIDo6IExvY2F0aW9uXG4gIHZhciBWYWx1ZSA9ICdWYWx1ZSc7XG5cbiAgLy8gIF9mdW5jUGF0aCA6OiAoQm9vbGVhbiwgQXJyYXkgU3RyaW5nLCBhKSAtPiBOdWxsYWJsZSBGdW5jdGlvblxuICBmdW5jdGlvbiBfZnVuY1BhdGgoYWxsb3dJbmhlcml0ZWRQcm9wcywgcGF0aCwgX3gpIHtcbiAgICB2YXIgeCA9IF94O1xuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHBhdGgubGVuZ3RoOyBpZHggKz0gMSkge1xuICAgICAgdmFyIGsgPSBwYXRoW2lkeF07XG4gICAgICBpZiAoeCA9PSBudWxsIHx8ICEoYWxsb3dJbmhlcml0ZWRQcm9wcyB8fCBoYXMoaywgeCkpKSByZXR1cm4gbnVsbDtcbiAgICAgIHggPSB4W2tdO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgPyB4IDogbnVsbDtcbiAgfVxuXG4gIC8vICBmdW5jUGF0aCA6OiAoQXJyYXkgU3RyaW5nLCBhKSAtPiBOdWxsYWJsZSBGdW5jdGlvblxuICBmdW5jdGlvbiBmdW5jUGF0aChwYXRoLCB4KSB7XG4gICAgcmV0dXJuIF9mdW5jUGF0aCh0cnVlLCBwYXRoLCB4KTtcbiAgfVxuXG4gIC8vICBpbXBsUGF0aCA6OiBBcnJheSBTdHJpbmcgLT4gTnVsbGFibGUgRnVuY3Rpb25cbiAgZnVuY3Rpb24gaW1wbFBhdGgocGF0aCkge1xuICAgIHJldHVybiBfZnVuY1BhdGgoZmFsc2UsIHBhdGgsIGltcGxlbWVudGF0aW9ucyk7XG4gIH1cblxuICAvLyAgZnVuY3Rpb25OYW1lIDo6IEZ1bmN0aW9uIC0+IFN0cmluZ1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaGFzKCduYW1lJywgZnVuY3Rpb24gZigpIHt9KSA/XG4gICAgZnVuY3Rpb24gZnVuY3Rpb25OYW1lKGYpIHsgcmV0dXJuIGYubmFtZTsgfSA6XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBmdW5jdGlvbiBmdW5jdGlvbk5hbWUoZikge1xuICAgICAgdmFyIG1hdGNoID0gL2Z1bmN0aW9uIChcXHcqKS8uZXhlYyhmKTtcbiAgICAgIHJldHVybiBtYXRjaCA9PSBudWxsID8gJycgOiBtYXRjaFsxXTtcbiAgICB9O1xuXG4gIC8vICAkIDo6IChTdHJpbmcsIEFycmF5IFR5cGVDbGFzcywgU3RyTWFwIChBcnJheSBMb2NhdGlvbikpIC0+IFR5cGVDbGFzc1xuICBmdW5jdGlvbiAkKF9uYW1lLCBkZXBlbmRlbmNpZXMsIHJlcXVpcmVtZW50cykge1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kTWV0aG9kKF9uYW1lKSB7XG4gICAgICB2YXIgbmFtZSA9ICdmYW50YXN5LWxhbmQvJyArIF9uYW1lO1xuICAgICAgcmV0dXJuIHJlcXVpcmVtZW50c1tfbmFtZV0gPT09IENvbnN0cnVjdG9yID9cbiAgICAgICAgZnVuY3Rpb24odHlwZVJlcCkge1xuICAgICAgICAgIHZhciBmID0gZnVuY1BhdGgoW25hbWVdLCB0eXBlUmVwKTtcbiAgICAgICAgICByZXR1cm4gZiA9PSBudWxsICYmIHR5cGVvZiB0eXBlUmVwID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIGltcGxQYXRoKFtmdW5jdGlvbk5hbWUodHlwZVJlcCksIG5hbWVdKSA6XG4gICAgICAgICAgICBmO1xuICAgICAgICB9IDpcbiAgICAgICAgZnVuY3Rpb24oeCkge1xuICAgICAgICAgIHZhciBpc1Byb3RvdHlwZSA9IHggIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY29uc3RydWN0b3IucHJvdG90eXBlID09PSB4O1xuICAgICAgICAgIHZhciBtID0gbnVsbDtcbiAgICAgICAgICBpZiAoIWlzUHJvdG90eXBlKSBtID0gZnVuY1BhdGgoW25hbWVdLCB4KTtcbiAgICAgICAgICBpZiAobSA9PSBudWxsKSAgICBtID0gaW1wbFBhdGgoW3R5cGUoeCksICdwcm90b3R5cGUnLCBuYW1lXSk7XG4gICAgICAgICAgcmV0dXJuIG0gJiYgbS5iaW5kKHgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciB2ZXJzaW9uID0gJzkuMC4wJzsgIC8vIHVwZGF0ZWQgcHJvZ3JhbW1hdGljYWxseVxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmVxdWlyZW1lbnRzKTtcblxuICAgIHZhciB0eXBlQ2xhc3MgPSBUeXBlQ2xhc3MoXG4gICAgICAnc2FuY3R1YXJ5LXR5cGUtY2xhc3Nlcy8nICsgX25hbWUsXG4gICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3NhbmN0dWFyeS1qcy9zYW5jdHVhcnktdHlwZS1jbGFzc2VzL3RyZWUvdicgKyB2ZXJzaW9uXG4gICAgICAgICsgJyMnICsgX25hbWUsXG4gICAgICBkZXBlbmRlbmNpZXMsXG4gICAgICBmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBrZXlzLmV2ZXJ5KGZ1bmN0aW9uKF9uYW1lKSB7XG4gICAgICAgICAgdmFyIGFyZyA9IHJlcXVpcmVtZW50c1tfbmFtZV0gPT09IENvbnN0cnVjdG9yID8geC5jb25zdHJ1Y3RvciA6IHg7XG4gICAgICAgICAgcmV0dXJuIGdldEJvdW5kTWV0aG9kKF9uYW1lKShhcmcpICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0eXBlQ2xhc3MubWV0aG9kcyA9IGtleXMucmVkdWNlKGZ1bmN0aW9uKG1ldGhvZHMsIF9uYW1lKSB7XG4gICAgICBtZXRob2RzW19uYW1lXSA9IGdldEJvdW5kTWV0aG9kKF9uYW1lKTtcbiAgICAgIHJldHVybiBtZXRob2RzO1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB0eXBlQ2xhc3M7XG4gIH1cblxuICAvLyMgU2V0b2lkIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbU2V0b2lkXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gU2V0b2lkLnRlc3QobnVsbClcbiAgLy8uIHRydWVcbiAgLy8uIGBgYFxuICB2YXIgU2V0b2lkID0gJCgnU2V0b2lkJywgW10sIHtlcXVhbHM6IFZhbHVlfSk7XG5cbiAgLy8jIE9yZCA6OiBUeXBlQ2xhc3NcbiAgLy8uXG4gIC8vLiBgVHlwZUNsYXNzYCB2YWx1ZSBmb3IgW09yZF1bXS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IE9yZC50ZXN0KDApXG4gIC8vLiB0cnVlXG4gIC8vLlxuICAvLy4gPiBPcmQudGVzdChNYXRoLnNxcnQpXG4gIC8vLiBmYWxzZVxuICAvLy4gYGBgXG4gIHZhciBPcmQgPSAkKCdPcmQnLCBbU2V0b2lkXSwge2x0ZTogVmFsdWV9KTtcblxuICAvLyMgU2VtaWdyb3Vwb2lkIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbU2VtaWdyb3Vwb2lkXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gU2VtaWdyb3Vwb2lkLnRlc3QoTWF0aC5zcXJ0KVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gU2VtaWdyb3Vwb2lkLnRlc3QoMClcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIFNlbWlncm91cG9pZCA9ICQoJ1NlbWlncm91cG9pZCcsIFtdLCB7Y29tcG9zZTogVmFsdWV9KTtcblxuICAvLyMgQ2F0ZWdvcnkgOjogVHlwZUNsYXNzXG4gIC8vLlxuICAvLy4gYFR5cGVDbGFzc2AgdmFsdWUgZm9yIFtDYXRlZ29yeV1bXS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IENhdGVnb3J5LnRlc3QoTWF0aC5zcXJ0KVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gQ2F0ZWdvcnkudGVzdCgwKVxuICAvLy4gZmFsc2VcbiAgLy8uIGBgYFxuICB2YXIgQ2F0ZWdvcnkgPSAkKCdDYXRlZ29yeScsIFtTZW1pZ3JvdXBvaWRdLCB7aWQ6IENvbnN0cnVjdG9yfSk7XG5cbiAgLy8jIFNlbWlncm91cCA6OiBUeXBlQ2xhc3NcbiAgLy8uXG4gIC8vLiBgVHlwZUNsYXNzYCB2YWx1ZSBmb3IgW1NlbWlncm91cF1bXS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IFNlbWlncm91cC50ZXN0KCcnKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gU2VtaWdyb3VwLnRlc3QoMClcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIFNlbWlncm91cCA9ICQoJ1NlbWlncm91cCcsIFtdLCB7Y29uY2F0OiBWYWx1ZX0pO1xuXG4gIC8vIyBNb25vaWQgOjogVHlwZUNsYXNzXG4gIC8vLlxuICAvLy4gYFR5cGVDbGFzc2AgdmFsdWUgZm9yIFtNb25vaWRdW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBNb25vaWQudGVzdCgnJylcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IE1vbm9pZC50ZXN0KDApXG4gIC8vLiBmYWxzZVxuICAvLy4gYGBgXG4gIHZhciBNb25vaWQgPSAkKCdNb25vaWQnLCBbU2VtaWdyb3VwXSwge2VtcHR5OiBDb25zdHJ1Y3Rvcn0pO1xuXG4gIC8vIyBHcm91cCA6OiBUeXBlQ2xhc3NcbiAgLy8uXG4gIC8vLiBgVHlwZUNsYXNzYCB2YWx1ZSBmb3IgW0dyb3VwXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gR3JvdXAudGVzdChTdW0oMCkpXG4gIC8vLiB0cnVlXG4gIC8vLlxuICAvLy4gPiBHcm91cC50ZXN0KCcnKVxuICAvLy4gZmFsc2VcbiAgLy8uIGBgYFxuICB2YXIgR3JvdXAgPSAkKCdHcm91cCcsIFtNb25vaWRdLCB7aW52ZXJ0OiBWYWx1ZX0pO1xuXG4gIC8vIyBGaWx0ZXJhYmxlIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbRmlsdGVyYWJsZV1bXS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IEZpbHRlcmFibGUudGVzdCh7fSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IEZpbHRlcmFibGUudGVzdCgnJylcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIEZpbHRlcmFibGUgPSAkKCdGaWx0ZXJhYmxlJywgW10sIHtmaWx0ZXI6IFZhbHVlfSk7XG5cbiAgLy8jIEZ1bmN0b3IgOjogVHlwZUNsYXNzXG4gIC8vLlxuICAvLy4gYFR5cGVDbGFzc2AgdmFsdWUgZm9yIFtGdW5jdG9yXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gRnVuY3Rvci50ZXN0KFtdKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gRnVuY3Rvci50ZXN0KCcnKVxuICAvLy4gZmFsc2VcbiAgLy8uIGBgYFxuICB2YXIgRnVuY3RvciA9ICQoJ0Z1bmN0b3InLCBbXSwge21hcDogVmFsdWV9KTtcblxuICAvLyMgQmlmdW5jdG9yIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbQmlmdW5jdG9yXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gQmlmdW5jdG9yLnRlc3QoVHVwbGUoJ2ZvbycsIDY0KSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IEJpZnVuY3Rvci50ZXN0KFtdKVxuICAvLy4gZmFsc2VcbiAgLy8uIGBgYFxuICB2YXIgQmlmdW5jdG9yID0gJCgnQmlmdW5jdG9yJywgW0Z1bmN0b3JdLCB7YmltYXA6IFZhbHVlfSk7XG5cbiAgLy8jIFByb2Z1bmN0b3IgOjogVHlwZUNsYXNzXG4gIC8vLlxuICAvLy4gYFR5cGVDbGFzc2AgdmFsdWUgZm9yIFtQcm9mdW5jdG9yXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gUHJvZnVuY3Rvci50ZXN0KE1hdGguc3FydClcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IFByb2Z1bmN0b3IudGVzdChbXSlcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIFByb2Z1bmN0b3IgPSAkKCdQcm9mdW5jdG9yJywgW0Z1bmN0b3JdLCB7cHJvbWFwOiBWYWx1ZX0pO1xuXG4gIC8vIyBBcHBseSA6OiBUeXBlQ2xhc3NcbiAgLy8uXG4gIC8vLiBgVHlwZUNsYXNzYCB2YWx1ZSBmb3IgW0FwcGx5XVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gQXBwbHkudGVzdChbXSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IEFwcGx5LnRlc3QoJycpXG4gIC8vLiBmYWxzZVxuICAvLy4gYGBgXG4gIHZhciBBcHBseSA9ICQoJ0FwcGx5JywgW0Z1bmN0b3JdLCB7YXA6IFZhbHVlfSk7XG5cbiAgLy8jIEFwcGxpY2F0aXZlIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbQXBwbGljYXRpdmVdW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBBcHBsaWNhdGl2ZS50ZXN0KFtdKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gQXBwbGljYXRpdmUudGVzdCh7fSlcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIEFwcGxpY2F0aXZlID0gJCgnQXBwbGljYXRpdmUnLCBbQXBwbHldLCB7b2Y6IENvbnN0cnVjdG9yfSk7XG5cbiAgLy8jIENoYWluIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbQ2hhaW5dW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBDaGFpbi50ZXN0KFtdKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gQ2hhaW4udGVzdCh7fSlcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIENoYWluID0gJCgnQ2hhaW4nLCBbQXBwbHldLCB7Y2hhaW46IFZhbHVlfSk7XG5cbiAgLy8jIENoYWluUmVjIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbQ2hhaW5SZWNdW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBDaGFpblJlYy50ZXN0KFtdKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gQ2hhaW5SZWMudGVzdCh7fSlcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIENoYWluUmVjID0gJCgnQ2hhaW5SZWMnLCBbQ2hhaW5dLCB7Y2hhaW5SZWM6IENvbnN0cnVjdG9yfSk7XG5cbiAgLy8jIE1vbmFkIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbTW9uYWRdW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBNb25hZC50ZXN0KFtdKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gTW9uYWQudGVzdCh7fSlcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIE1vbmFkID0gJCgnTW9uYWQnLCBbQXBwbGljYXRpdmUsIENoYWluXSwge30pO1xuXG4gIC8vIyBBbHQgOjogVHlwZUNsYXNzXG4gIC8vLlxuICAvLy4gYFR5cGVDbGFzc2AgdmFsdWUgZm9yIFtBbHRdW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBBbHQudGVzdCh7fSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IEFsdC50ZXN0KCcnKVxuICAvLy4gZmFsc2VcbiAgLy8uIGBgYFxuICB2YXIgQWx0ID0gJCgnQWx0JywgW0Z1bmN0b3JdLCB7YWx0OiBWYWx1ZX0pO1xuXG4gIC8vIyBQbHVzIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbUGx1c11bXS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IFBsdXMudGVzdCh7fSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IFBsdXMudGVzdCgnJylcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIFBsdXMgPSAkKCdQbHVzJywgW0FsdF0sIHt6ZXJvOiBDb25zdHJ1Y3Rvcn0pO1xuXG4gIC8vIyBBbHRlcm5hdGl2ZSA6OiBUeXBlQ2xhc3NcbiAgLy8uXG4gIC8vLiBgVHlwZUNsYXNzYCB2YWx1ZSBmb3IgW0FsdGVybmF0aXZlXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gQWx0ZXJuYXRpdmUudGVzdChbXSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IEFsdGVybmF0aXZlLnRlc3Qoe30pXG4gIC8vLiBmYWxzZVxuICAvLy4gYGBgXG4gIHZhciBBbHRlcm5hdGl2ZSA9ICQoJ0FsdGVybmF0aXZlJywgW0FwcGxpY2F0aXZlLCBQbHVzXSwge30pO1xuXG4gIC8vIyBGb2xkYWJsZSA6OiBUeXBlQ2xhc3NcbiAgLy8uXG4gIC8vLiBgVHlwZUNsYXNzYCB2YWx1ZSBmb3IgW0ZvbGRhYmxlXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gRm9sZGFibGUudGVzdCh7fSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IEZvbGRhYmxlLnRlc3QoJycpXG4gIC8vLiBmYWxzZVxuICAvLy4gYGBgXG4gIHZhciBGb2xkYWJsZSA9ICQoJ0ZvbGRhYmxlJywgW10sIHtyZWR1Y2U6IFZhbHVlfSk7XG5cbiAgLy8jIFRyYXZlcnNhYmxlIDo6IFR5cGVDbGFzc1xuICAvLy5cbiAgLy8uIGBUeXBlQ2xhc3NgIHZhbHVlIGZvciBbVHJhdmVyc2FibGVdW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBUcmF2ZXJzYWJsZS50ZXN0KFtdKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gVHJhdmVyc2FibGUudGVzdCgnJylcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIFRyYXZlcnNhYmxlID0gJCgnVHJhdmVyc2FibGUnLCBbRnVuY3RvciwgRm9sZGFibGVdLCB7dHJhdmVyc2U6IFZhbHVlfSk7XG5cbiAgLy8jIEV4dGVuZCA6OiBUeXBlQ2xhc3NcbiAgLy8uXG4gIC8vLiBgVHlwZUNsYXNzYCB2YWx1ZSBmb3IgW0V4dGVuZF1bXS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IEV4dGVuZC50ZXN0KFtdKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gRXh0ZW5kLnRlc3Qoe30pXG4gIC8vLiBmYWxzZVxuICAvLy4gYGBgXG4gIHZhciBFeHRlbmQgPSAkKCdFeHRlbmQnLCBbRnVuY3Rvcl0sIHtleHRlbmQ6IFZhbHVlfSk7XG5cbiAgLy8jIENvbW9uYWQgOjogVHlwZUNsYXNzXG4gIC8vLlxuICAvLy4gYFR5cGVDbGFzc2AgdmFsdWUgZm9yIFtDb21vbmFkXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gQ29tb25hZC50ZXN0KElkZW50aXR5KDApKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gQ29tb25hZC50ZXN0KFtdKVxuICAvLy4gZmFsc2VcbiAgLy8uIGBgYFxuICB2YXIgQ29tb25hZCA9ICQoJ0NvbW9uYWQnLCBbRXh0ZW5kXSwge2V4dHJhY3Q6IFZhbHVlfSk7XG5cbiAgLy8jIENvbnRyYXZhcmlhbnQgOjogVHlwZUNsYXNzXG4gIC8vLlxuICAvLy4gYFR5cGVDbGFzc2AgdmFsdWUgZm9yIFtDb250cmF2YXJpYW50XVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gQ29udHJhdmFyaWFudC50ZXN0KE1hdGguc3FydClcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IENvbnRyYXZhcmlhbnQudGVzdChbXSlcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIENvbnRyYXZhcmlhbnQgPSAkKCdDb250cmF2YXJpYW50JywgW10sIHtjb250cmFtYXA6IFZhbHVlfSk7XG5cbiAgLy8gIE51bGwkcHJvdG90eXBlJGVxdWFscyA6OiBOdWxsIH4+IE51bGwgLT4gQm9vbGVhblxuICBmdW5jdGlvbiBOdWxsJHByb3RvdHlwZSRlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vICBOdWxsJHByb3RvdHlwZSRsdGUgOjogTnVsbCB+PiBOdWxsIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gTnVsbCRwcm90b3R5cGUkbHRlKG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyAgVW5kZWZpbmVkJHByb3RvdHlwZSRlcXVhbHMgOjogVW5kZWZpbmVkIH4+IFVuZGVmaW5lZCAtPiBCb29sZWFuXG4gIGZ1bmN0aW9uIFVuZGVmaW5lZCRwcm90b3R5cGUkZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyAgVW5kZWZpbmVkJHByb3RvdHlwZSRsdGUgOjogVW5kZWZpbmVkIH4+IFVuZGVmaW5lZCAtPiBCb29sZWFuXG4gIGZ1bmN0aW9uIFVuZGVmaW5lZCRwcm90b3R5cGUkbHRlKG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyAgQm9vbGVhbiRwcm90b3R5cGUkZXF1YWxzIDo6IEJvb2xlYW4gfj4gQm9vbGVhbiAtPiBCb29sZWFuXG4gIGZ1bmN0aW9uIEJvb2xlYW4kcHJvdG90eXBlJGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcyA9PT0gJ29iamVjdCcgP1xuICAgICAgZXF1YWxzKHRoaXMudmFsdWVPZigpLCBvdGhlci52YWx1ZU9mKCkpIDpcbiAgICAgIHRoaXMgPT09IG90aGVyO1xuICB9XG5cbiAgLy8gIEJvb2xlYW4kcHJvdG90eXBlJGx0ZSA6OiBCb29sZWFuIH4+IEJvb2xlYW4gLT4gQm9vbGVhblxuICBmdW5jdGlvbiBCb29sZWFuJHByb3RvdHlwZSRsdGUob3RoZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT09ICdvYmplY3QnID9cbiAgICAgIGx0ZSh0aGlzLnZhbHVlT2YoKSwgb3RoZXIudmFsdWVPZigpKSA6XG4gICAgICB0aGlzID09PSBmYWxzZSB8fCBvdGhlciA9PT0gdHJ1ZTtcbiAgfVxuXG4gIC8vICBOdW1iZXIkcHJvdG90eXBlJGVxdWFscyA6OiBOdW1iZXIgfj4gTnVtYmVyIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gTnVtYmVyJHByb3RvdHlwZSRlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT09ICdvYmplY3QnID9cbiAgICAgIGVxdWFscyh0aGlzLnZhbHVlT2YoKSwgb3RoZXIudmFsdWVPZigpKSA6XG4gICAgICBpc05hTih0aGlzKSAmJiBpc05hTihvdGhlcikgfHwgdGhpcyA9PT0gb3RoZXI7XG4gIH1cblxuICAvLyAgTnVtYmVyJHByb3RvdHlwZSRsdGUgOjogTnVtYmVyIH4+IE51bWJlciAtPiBCb29sZWFuXG4gIGZ1bmN0aW9uIE51bWJlciRwcm90b3R5cGUkbHRlKG90aGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzID09PSAnb2JqZWN0JyA/XG4gICAgICBsdGUodGhpcy52YWx1ZU9mKCksIG90aGVyLnZhbHVlT2YoKSkgOlxuICAgICAgaXNOYU4odGhpcykgfHwgdGhpcyA8PSBvdGhlcjtcbiAgfVxuXG4gIC8vICBEYXRlJHByb3RvdHlwZSRlcXVhbHMgOjogRGF0ZSB+PiBEYXRlIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gRGF0ZSRwcm90b3R5cGUkZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIGVxdWFscyh0aGlzLnZhbHVlT2YoKSwgb3RoZXIudmFsdWVPZigpKTtcbiAgfVxuXG4gIC8vICBEYXRlJHByb3RvdHlwZSRsdGUgOjogRGF0ZSB+PiBEYXRlIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gRGF0ZSRwcm90b3R5cGUkbHRlKG90aGVyKSB7XG4gICAgcmV0dXJuIGx0ZSh0aGlzLnZhbHVlT2YoKSwgb3RoZXIudmFsdWVPZigpKTtcbiAgfVxuXG4gIC8vICBSZWdFeHAkcHJvdG90eXBlJGVxdWFscyA6OiBSZWdFeHAgfj4gUmVnRXhwIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gUmVnRXhwJHByb3RvdHlwZSRlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXIuc291cmNlID09PSB0aGlzLnNvdXJjZSAmJlxuICAgICAgICAgICBvdGhlci5nbG9iYWwgPT09IHRoaXMuZ2xvYmFsICYmXG4gICAgICAgICAgIG90aGVyLmlnbm9yZUNhc2UgPT09IHRoaXMuaWdub3JlQ2FzZSAmJlxuICAgICAgICAgICBvdGhlci5tdWx0aWxpbmUgPT09IHRoaXMubXVsdGlsaW5lICYmXG4gICAgICAgICAgIG90aGVyLnN0aWNreSA9PT0gdGhpcy5zdGlja3kgJiZcbiAgICAgICAgICAgb3RoZXIudW5pY29kZSA9PT0gdGhpcy51bmljb2RlO1xuICB9XG5cbiAgLy8gIFN0cmluZyRlbXB0eSA6OiAoKSAtPiBTdHJpbmdcbiAgZnVuY3Rpb24gU3RyaW5nJGVtcHR5KCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vICBTdHJpbmckcHJvdG90eXBlJGVxdWFscyA6OiBTdHJpbmcgfj4gU3RyaW5nIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gU3RyaW5nJHByb3RvdHlwZSRlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT09ICdvYmplY3QnID9cbiAgICAgIGVxdWFscyh0aGlzLnZhbHVlT2YoKSwgb3RoZXIudmFsdWVPZigpKSA6XG4gICAgICB0aGlzID09PSBvdGhlcjtcbiAgfVxuXG4gIC8vICBTdHJpbmckcHJvdG90eXBlJGx0ZSA6OiBTdHJpbmcgfj4gU3RyaW5nIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gU3RyaW5nJHByb3RvdHlwZSRsdGUob3RoZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT09ICdvYmplY3QnID9cbiAgICAgIGx0ZSh0aGlzLnZhbHVlT2YoKSwgb3RoZXIudmFsdWVPZigpKSA6XG4gICAgICB0aGlzIDw9IG90aGVyO1xuICB9XG5cbiAgLy8gIFN0cmluZyRwcm90b3R5cGUkY29uY2F0IDo6IFN0cmluZyB+PiBTdHJpbmcgLT4gU3RyaW5nXG4gIGZ1bmN0aW9uIFN0cmluZyRwcm90b3R5cGUkY29uY2F0KG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMgKyBvdGhlcjtcbiAgfVxuXG4gIC8vICBBcnJheSRlbXB0eSA6OiAoKSAtPiBBcnJheSBhXG4gIGZ1bmN0aW9uIEFycmF5JGVtcHR5KCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vICBBcnJheSRvZiA6OiBhIC0+IEFycmF5IGFcbiAgZnVuY3Rpb24gQXJyYXkkb2YoeCkge1xuICAgIHJldHVybiBbeF07XG4gIH1cblxuICAvLyAgQXJyYXkkY2hhaW5SZWMgOjogKChhIC0+IGMsIGIgLT4gYywgYSkgLT4gQXJyYXkgYywgYSkgLT4gQXJyYXkgYlxuICBmdW5jdGlvbiBBcnJheSRjaGFpblJlYyhmLCB4KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBuaWwgPSB7fTtcbiAgICB2YXIgdG9kbyA9IHtoZWFkOiB4LCB0YWlsOiBuaWx9O1xuICAgIHdoaWxlICh0b2RvICE9PSBuaWwpIHtcbiAgICAgIHZhciBtb3JlID0gbmlsO1xuICAgICAgdmFyIHN0ZXBzID0gZihpdGVyYXRpb25OZXh0LCBpdGVyYXRpb25Eb25lLCB0b2RvLmhlYWQpO1xuICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgc3RlcHMubGVuZ3RoOyBpZHggKz0gMSkge1xuICAgICAgICB2YXIgc3RlcCA9IHN0ZXBzW2lkeF07XG4gICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChzdGVwLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3JlID0ge2hlYWQ6IHN0ZXAudmFsdWUsIHRhaWw6IG1vcmV9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0b2RvID0gdG9kby50YWlsO1xuICAgICAgd2hpbGUgKG1vcmUgIT09IG5pbCkge1xuICAgICAgICB0b2RvID0ge2hlYWQ6IG1vcmUuaGVhZCwgdGFpbDogdG9kb307XG4gICAgICAgIG1vcmUgPSBtb3JlLnRhaWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyAgQXJyYXkkemVybyA6OiAoKSAtPiBBcnJheSBhXG4gIGZ1bmN0aW9uIEFycmF5JHplcm8oKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gIEFycmF5JHByb3RvdHlwZSRlcXVhbHMgOjogQXJyYXkgYSB+PiBBcnJheSBhIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gQXJyYXkkcHJvdG90eXBlJGVxdWFscyhvdGhlcikge1xuICAgIGlmIChvdGhlci5sZW5ndGggIT09IHRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdGhpcy5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgICBpZiAoIWVxdWFscyh0aGlzW2lkeF0sIG90aGVyW2lkeF0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gIEFycmF5JHByb3RvdHlwZSRsdGUgOjogQXJyYXkgYSB+PiBBcnJheSBhIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gQXJyYXkkcHJvdG90eXBlJGx0ZShvdGhlcikge1xuICAgIGZvciAodmFyIGlkeCA9IDA7IHRydWU7IGlkeCArPSAxKSB7XG4gICAgICBpZiAoaWR4ID09PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoaWR4ID09PSBvdGhlci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghZXF1YWxzKHRoaXNbaWR4XSwgb3RoZXJbaWR4XSkpIHJldHVybiBsdGUodGhpc1tpZHhdLCBvdGhlcltpZHhdKTtcbiAgICB9XG4gIH1cblxuICAvLyAgQXJyYXkkcHJvdG90eXBlJGNvbmNhdCA6OiBBcnJheSBhIH4+IEFycmF5IGEgLT4gQXJyYXkgYVxuICBmdW5jdGlvbiBBcnJheSRwcm90b3R5cGUkY29uY2F0KG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2F0KG90aGVyKTtcbiAgfVxuXG4gIC8vICBBcnJheSRwcm90b3R5cGUkZmlsdGVyIDo6IEFycmF5IGEgfj4gKGEgLT4gQm9vbGVhbikgLT4gQXJyYXkgYVxuICBmdW5jdGlvbiBBcnJheSRwcm90b3R5cGUkZmlsdGVyKHByZWQpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oeCkgeyByZXR1cm4gcHJlZCh4KTsgfSk7XG4gIH1cblxuICAvLyAgQXJyYXkkcHJvdG90eXBlJG1hcCA6OiBBcnJheSBhIH4+IChhIC0+IGIpIC0+IEFycmF5IGJcbiAgZnVuY3Rpb24gQXJyYXkkcHJvdG90eXBlJG1hcChmKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIGYoeCk7IH0pO1xuICB9XG5cbiAgLy8gIEFycmF5JHByb3RvdHlwZSRhcCA6OiBBcnJheSBhIH4+IEFycmF5IChhIC0+IGIpIC0+IEFycmF5IGJcbiAgZnVuY3Rpb24gQXJyYXkkcHJvdG90eXBlJGFwKGZzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGZzLmxlbmd0aDsgaWR4ICs9IDEpIHtcbiAgICAgIGZvciAodmFyIGlkeDIgPSAwOyBpZHgyIDwgdGhpcy5sZW5ndGg7IGlkeDIgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaChmc1tpZHhdKHRoaXNbaWR4Ml0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vICBBcnJheSRwcm90b3R5cGUkY2hhaW4gOjogQXJyYXkgYSB+PiAoYSAtPiBBcnJheSBiKSAtPiBBcnJheSBiXG4gIGZ1bmN0aW9uIEFycmF5JHByb3RvdHlwZSRjaGFpbihmKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHRoaXMubGVuZ3RoOyBpZHggKz0gMSkge1xuICAgICAgZm9yICh2YXIgaWR4MiA9IDAsIHhzID0gZih0aGlzW2lkeF0pOyBpZHgyIDwgeHMubGVuZ3RoOyBpZHgyICs9IDEpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goeHNbaWR4Ml0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gIEFycmF5JHByb3RvdHlwZSRhbHQgOjogQXJyYXkgYSB+PiBBcnJheSBhIC0+IEFycmF5IGFcbiAgdmFyIEFycmF5JHByb3RvdHlwZSRhbHQgPSBBcnJheSRwcm90b3R5cGUkY29uY2F0O1xuXG4gIC8vICBBcnJheSRwcm90b3R5cGUkcmVkdWNlIDo6IEFycmF5IGEgfj4gKChiLCBhKSAtPiBiLCBiKSAtPiBiXG4gIGZ1bmN0aW9uIEFycmF5JHByb3RvdHlwZSRyZWR1Y2UoZiwgaW5pdGlhbCkge1xuICAgIHZhciBhY2MgPSBpbml0aWFsO1xuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHRoaXMubGVuZ3RoOyBpZHggKz0gMSkgYWNjID0gZihhY2MsIHRoaXNbaWR4XSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfVxuXG4gIC8vICBBcnJheSRwcm90b3R5cGUkdHJhdmVyc2UgOjogQXBwbGljYXRpdmUgZiA9PiBBcnJheSBhIH4+IChUeXBlUmVwIGYsIGEgLT4gZiBiKSAtPiBmIChBcnJheSBiKVxuICBmdW5jdGlvbiBBcnJheSRwcm90b3R5cGUkdHJhdmVyc2UodHlwZVJlcCwgZikge1xuICAgIHZhciB4cyA9IHRoaXM7XG4gICAgZnVuY3Rpb24gZ28oaWR4LCBuKSB7XG4gICAgICBzd2l0Y2ggKG4pIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gb2YodHlwZVJlcCwgW10pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBsaWZ0MihwYWlyLCBmKHhzW2lkeF0pLCBmKHhzW2lkeCArIDFdKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKG4gLyA0KSAqIDI7XG4gICAgICAgICAgcmV0dXJuIGxpZnQyKGNvbmNhdF8sIGdvKGlkeCwgbSksIGdvKGlkeCArIG0sIG4gLSBtKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxlbmd0aCAlIDIgPT09IDEgP1xuICAgICAgbGlmdDIoY29uY2F0XywgbWFwKEFycmF5JG9mLCBmKHRoaXNbMF0pKSwgZ28oMSwgdGhpcy5sZW5ndGggLSAxKSkgOlxuICAgICAgZ28oMCwgdGhpcy5sZW5ndGgpO1xuICB9XG5cbiAgLy8gIEFycmF5JHByb3RvdHlwZSRleHRlbmQgOjogQXJyYXkgYSB+PiAoQXJyYXkgYSAtPiBiKSAtPiBBcnJheSBiXG4gIGZ1bmN0aW9uIEFycmF5JHByb3RvdHlwZSRleHRlbmQoZikge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbihfLCBpZHgsIHhzKSB7IHJldHVybiBmKHhzLnNsaWNlKGlkeCkpOyB9KTtcbiAgfVxuXG4gIC8vICBBcmd1bWVudHMkcHJvdG90eXBlJGVxdWFscyA6OiBBcmd1bWVudHMgfj4gQXJndW1lbnRzIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gQXJndW1lbnRzJHByb3RvdHlwZSRlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gQXJyYXkkcHJvdG90eXBlJGVxdWFscy5jYWxsKHRoaXMsIG90aGVyKTtcbiAgfVxuXG4gIC8vICBBcmd1bWVudHMkcHJvdG90eXBlJGx0ZSA6OiBBcmd1bWVudHMgfj4gQXJndW1lbnRzIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gQXJndW1lbnRzJHByb3RvdHlwZSRsdGUob3RoZXIpIHtcbiAgICByZXR1cm4gQXJyYXkkcHJvdG90eXBlJGx0ZS5jYWxsKHRoaXMsIG90aGVyKTtcbiAgfVxuXG4gIC8vICBFcnJvciRwcm90b3R5cGUkZXF1YWxzIDo6IEVycm9yIH4+IEVycm9yIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gRXJyb3IkcHJvdG90eXBlJGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiBlcXVhbHModGhpcy5uYW1lLCBvdGhlci5uYW1lKSAmJlxuICAgICAgICAgICBlcXVhbHModGhpcy5tZXNzYWdlLCBvdGhlci5tZXNzYWdlKTtcbiAgfVxuXG4gIC8vICBPYmplY3QkZW1wdHkgOjogKCkgLT4gU3RyTWFwIGFcbiAgZnVuY3Rpb24gT2JqZWN0JGVtcHR5KCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8vICBPYmplY3QkemVybyA6OiAoKSAtPiBTdHJNYXAgYVxuICBmdW5jdGlvbiBPYmplY3QkemVybygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvLyAgT2JqZWN0JHByb3RvdHlwZSRlcXVhbHMgOjogU3RyTWFwIGEgfj4gU3RyTWFwIGEgLT4gQm9vbGVhblxuICBmdW5jdGlvbiBPYmplY3QkcHJvdG90eXBlJGVxdWFscyhvdGhlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpLnNvcnQoKTtcbiAgICByZXR1cm4gZXF1YWxzKGtleXMsIE9iamVjdC5rZXlzKG90aGVyKS5zb3J0KCkpICYmXG4gICAgICAgICAgIGtleXMuZXZlcnkoZnVuY3Rpb24oaykgeyByZXR1cm4gZXF1YWxzKHNlbGZba10sIG90aGVyW2tdKTsgfSk7XG4gIH1cblxuICAvLyAgT2JqZWN0JHByb3RvdHlwZSRsdGUgOjogU3RyTWFwIGEgfj4gU3RyTWFwIGEgLT4gQm9vbGVhblxuICBmdW5jdGlvbiBPYmplY3QkcHJvdG90eXBlJGx0ZShvdGhlcikge1xuICAgIHZhciB0aGVzZUtleXMgPSBPYmplY3Qua2V5cyh0aGlzKS5zb3J0KCk7XG4gICAgdmFyIG90aGVyS2V5cyA9IE9iamVjdC5rZXlzKG90aGVyKS5zb3J0KCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGVzZUtleXMubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChvdGhlcktleXMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgayA9IHRoZXNlS2V5cy5zaGlmdCgpO1xuICAgICAgdmFyIHogPSBvdGhlcktleXMuc2hpZnQoKTtcbiAgICAgIGlmIChrIDwgeikgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoayA+IHopIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghZXF1YWxzKHRoaXNba10sIG90aGVyW2tdKSkgcmV0dXJuIGx0ZSh0aGlzW2tdLCBvdGhlcltrXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gIE9iamVjdCRwcm90b3R5cGUkY29uY2F0IDo6IFN0ck1hcCBhIH4+IFN0ck1hcCBhIC0+IFN0ck1hcCBhXG4gIGZ1bmN0aW9uIE9iamVjdCRwcm90b3R5cGUkY29uY2F0KG90aGVyKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZ1bmN0aW9uIGFzc2lnbihrKSB7IHJlc3VsdFtrXSA9IHRoaXNba107IH1cbiAgICBmb3JFYWNoS2V5KHRoaXMsIGFzc2lnbik7XG4gICAgZm9yRWFjaEtleShvdGhlciwgYXNzaWduKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gIE9iamVjdCRwcm90b3R5cGUkZmlsdGVyIDo6IFN0ck1hcCBhIH4+IChhIC0+IEJvb2xlYW4pIC0+IFN0ck1hcCBhXG4gIGZ1bmN0aW9uIE9iamVjdCRwcm90b3R5cGUkZmlsdGVyKHByZWQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yRWFjaEtleSh0aGlzLCBmdW5jdGlvbihrKSB7IGlmIChwcmVkKHRoaXNba10pKSByZXN1bHRba10gPSB0aGlzW2tdOyB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gIE9iamVjdCRwcm90b3R5cGUkbWFwIDo6IFN0ck1hcCBhIH4+IChhIC0+IGIpIC0+IFN0ck1hcCBiXG4gIGZ1bmN0aW9uIE9iamVjdCRwcm90b3R5cGUkbWFwKGYpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yRWFjaEtleSh0aGlzLCBmdW5jdGlvbihrKSB7IHJlc3VsdFtrXSA9IGYodGhpc1trXSk7IH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyAgT2JqZWN0JHByb3RvdHlwZSRhcCA6OiBTdHJNYXAgYSB+PiBTdHJNYXAgKGEgLT4gYikgLT4gU3RyTWFwIGJcbiAgZnVuY3Rpb24gT2JqZWN0JHByb3RvdHlwZSRhcChvdGhlcikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3JFYWNoS2V5KHRoaXMsIGZ1bmN0aW9uKGspIHtcbiAgICAgIGlmIChoYXMoaywgb3RoZXIpKSByZXN1bHRba10gPSBvdGhlcltrXSh0aGlzW2tdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gIE9iamVjdCRwcm90b3R5cGUkYWx0IDo6IFN0ck1hcCBhIH4+IFN0ck1hcCBhIC0+IFN0ck1hcCBhXG4gIHZhciBPYmplY3QkcHJvdG90eXBlJGFsdCA9IE9iamVjdCRwcm90b3R5cGUkY29uY2F0O1xuXG4gIC8vICBPYmplY3QkcHJvdG90eXBlJHJlZHVjZSA6OiBTdHJNYXAgYSB+PiAoKGIsIGEpIC0+IGIsIGIpIC0+IGJcbiAgZnVuY3Rpb24gT2JqZWN0JHByb3RvdHlwZSRyZWR1Y2UoZiwgaW5pdGlhbCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiByZWR1Y2VyKGFjYywgaykgeyByZXR1cm4gZihhY2MsIHNlbGZba10pOyB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLnNvcnQoKS5yZWR1Y2UocmVkdWNlciwgaW5pdGlhbCk7XG4gIH1cblxuICAvLyAgT2JqZWN0JHByb3RvdHlwZSR0cmF2ZXJzZSA6OiBBcHBsaWNhdGl2ZSBmID0+IFN0ck1hcCBhIH4+IChUeXBlUmVwIGYsIGEgLT4gZiBiKSAtPiBmIChTdHJNYXAgYilcbiAgZnVuY3Rpb24gT2JqZWN0JHByb3RvdHlwZSR0cmF2ZXJzZSh0eXBlUmVwLCBmKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzKS5yZWR1Y2UoZnVuY3Rpb24oYXBwbGljYXRpdmUsIGspIHtcbiAgICAgIGZ1bmN0aW9uIHNldChvKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgdmFyIHNpbmdsZXRvbiA9IHt9OyBzaW5nbGV0b25ba10gPSB2O1xuICAgICAgICAgIHJldHVybiBPYmplY3QkcHJvdG90eXBlJGNvbmNhdC5jYWxsKG8sIHNpbmdsZXRvbik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlmdDIoc2V0LCBhcHBsaWNhdGl2ZSwgZihzZWxmW2tdKSk7XG4gICAgfSwgb2YodHlwZVJlcCwge30pKTtcbiAgfVxuXG4gIC8vICBGdW5jdGlvbiRpZCA6OiAoKSAtPiBhIC0+IGFcbiAgZnVuY3Rpb24gRnVuY3Rpb24kaWQoKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG5cbiAgLy8gIEZ1bmN0aW9uJG9mIDo6IGIgLT4gKGEgLT4gYilcbiAgZnVuY3Rpb24gRnVuY3Rpb24kb2YoeCkge1xuICAgIHJldHVybiBmdW5jdGlvbihfKSB7IHJldHVybiB4OyB9O1xuICB9XG5cbiAgLy8gIEZ1bmN0aW9uJGNoYWluUmVjIDo6ICgoYSAtPiBjLCBiIC0+IGMsIGEpIC0+ICh6IC0+IGMpLCBhKSAtPiAoeiAtPiBiKVxuICBmdW5jdGlvbiBGdW5jdGlvbiRjaGFpblJlYyhmLCB4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGEpIHtcbiAgICAgIHZhciBzdGVwID0gaXRlcmF0aW9uTmV4dCh4KTtcbiAgICAgIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgICAgIHN0ZXAgPSBmKGl0ZXJhdGlvbk5leHQsIGl0ZXJhdGlvbkRvbmUsIHN0ZXAudmFsdWUpKGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0ZXAudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIC8vICBGdW5jdGlvbiRwcm90b3R5cGUkZXF1YWxzIDo6IEZ1bmN0aW9uIH4+IEZ1bmN0aW9uIC0+IEJvb2xlYW5cbiAgZnVuY3Rpb24gRnVuY3Rpb24kcHJvdG90eXBlJGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiBvdGhlciA9PT0gdGhpcztcbiAgfVxuXG4gIC8vICBGdW5jdGlvbiRwcm90b3R5cGUkY29tcG9zZSA6OiAoYSAtPiBiKSB+PiAoYiAtPiBjKSAtPiAoYSAtPiBjKVxuICBmdW5jdGlvbiBGdW5jdGlvbiRwcm90b3R5cGUkY29tcG9zZShvdGhlcikge1xuICAgIHZhciBzZW1pZ3JvdXBvaWQgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7IHJldHVybiBvdGhlcihzZW1pZ3JvdXBvaWQoeCkpOyB9O1xuICB9XG5cbiAgLy8gIEZ1bmN0aW9uJHByb3RvdHlwZSRtYXAgOjogKGEgLT4gYikgfj4gKGIgLT4gYykgLT4gKGEgLT4gYylcbiAgZnVuY3Rpb24gRnVuY3Rpb24kcHJvdG90eXBlJG1hcChmKSB7XG4gICAgdmFyIGZ1bmN0b3IgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7IHJldHVybiBmKGZ1bmN0b3IoeCkpOyB9O1xuICB9XG5cbiAgLy8gIEZ1bmN0aW9uJHByb3RvdHlwZSRwcm9tYXAgOjogKGIgLT4gYykgfj4gKGEgLT4gYiwgYyAtPiBkKSAtPiAoYSAtPiBkKVxuICBmdW5jdGlvbiBGdW5jdGlvbiRwcm90b3R5cGUkcHJvbWFwKGYsIGcpIHtcbiAgICB2YXIgcHJvZnVuY3RvciA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIGcocHJvZnVuY3RvcihmKHgpKSk7IH07XG4gIH1cblxuICAvLyAgRnVuY3Rpb24kcHJvdG90eXBlJGFwIDo6IChhIC0+IGIpIH4+IChhIC0+IGIgLT4gYykgLT4gKGEgLT4gYylcbiAgZnVuY3Rpb24gRnVuY3Rpb24kcHJvdG90eXBlJGFwKGYpIHtcbiAgICB2YXIgYXBwbHkgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7IHJldHVybiBmKHgpKGFwcGx5KHgpKTsgfTtcbiAgfVxuXG4gIC8vICBGdW5jdGlvbiRwcm90b3R5cGUkY2hhaW4gOjogKGEgLT4gYikgfj4gKGIgLT4gYSAtPiBjKSAtPiAoYSAtPiBjKVxuICBmdW5jdGlvbiBGdW5jdGlvbiRwcm90b3R5cGUkY2hhaW4oZikge1xuICAgIHZhciBjaGFpbiA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIGYoY2hhaW4oeCkpKHgpOyB9O1xuICB9XG5cbiAgLy8gIEZ1bmN0aW9uJHByb3RvdHlwZSRleHRlbmQgOjogU2VtaWdyb3VwIGEgPT4gKGEgLT4gYikgfj4gKChhIC0+IGIpIC0+IGMpIC0+IChhIC0+IGMpXG4gIGZ1bmN0aW9uIEZ1bmN0aW9uJHByb3RvdHlwZSRleHRlbmQoZikge1xuICAgIHZhciBleHRlbmQgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gZihmdW5jdGlvbih5KSB7IHJldHVybiBleHRlbmQoY29uY2F0KHgsIHkpKTsgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vICBGdW5jdGlvbiRwcm90b3R5cGUkY29udHJhbWFwIDo6IChiIC0+IGMpIH4+IChhIC0+IGIpIC0+IChhIC0+IGMpXG4gIGZ1bmN0aW9uIEZ1bmN0aW9uJHByb3RvdHlwZSRjb250cmFtYXAoZikge1xuICAgIHZhciBjb250cmF2YXJpYW50ID0gdGhpcztcbiAgICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gY29udHJhdmFyaWFudChmKHgpKTsgfTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGtleS1zcGFjaW5nICovXG4gIHZhciBpbXBsZW1lbnRhdGlvbnMgPSB7XG4gICAgTnVsbDoge1xuICAgICAgJ3Byb3RvdHlwZSc6IHtcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnOiAgICAgIE51bGwkcHJvdG90eXBlJGVxdWFscyxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9sdGUnOiAgICAgICAgIE51bGwkcHJvdG90eXBlJGx0ZVxuICAgICAgfVxuICAgIH0sXG4gICAgVW5kZWZpbmVkOiB7XG4gICAgICAncHJvdG90eXBlJzoge1xuICAgICAgICAnZmFudGFzeS1sYW5kL2VxdWFscyc6ICAgICAgVW5kZWZpbmVkJHByb3RvdHlwZSRlcXVhbHMsXG4gICAgICAgICdmYW50YXN5LWxhbmQvbHRlJzogICAgICAgICBVbmRlZmluZWQkcHJvdG90eXBlJGx0ZVxuICAgICAgfVxuICAgIH0sXG4gICAgQm9vbGVhbjoge1xuICAgICAgJ3Byb3RvdHlwZSc6IHtcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnOiAgICAgIEJvb2xlYW4kcHJvdG90eXBlJGVxdWFscyxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9sdGUnOiAgICAgICAgIEJvb2xlYW4kcHJvdG90eXBlJGx0ZVxuICAgICAgfVxuICAgIH0sXG4gICAgTnVtYmVyOiB7XG4gICAgICAncHJvdG90eXBlJzoge1xuICAgICAgICAnZmFudGFzeS1sYW5kL2VxdWFscyc6ICAgICAgTnVtYmVyJHByb3RvdHlwZSRlcXVhbHMsXG4gICAgICAgICdmYW50YXN5LWxhbmQvbHRlJzogICAgICAgICBOdW1iZXIkcHJvdG90eXBlJGx0ZVxuICAgICAgfVxuICAgIH0sXG4gICAgRGF0ZToge1xuICAgICAgJ3Byb3RvdHlwZSc6IHtcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnOiAgICAgIERhdGUkcHJvdG90eXBlJGVxdWFscyxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9sdGUnOiAgICAgICAgIERhdGUkcHJvdG90eXBlJGx0ZVxuICAgICAgfVxuICAgIH0sXG4gICAgUmVnRXhwOiB7XG4gICAgICAncHJvdG90eXBlJzoge1xuICAgICAgICAnZmFudGFzeS1sYW5kL2VxdWFscyc6ICAgICAgUmVnRXhwJHByb3RvdHlwZSRlcXVhbHNcbiAgICAgIH1cbiAgICB9LFxuICAgIFN0cmluZzoge1xuICAgICAgJ2ZhbnRhc3ktbGFuZC9lbXB0eSc6ICAgICAgICAgU3RyaW5nJGVtcHR5LFxuICAgICAgJ3Byb3RvdHlwZSc6IHtcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnOiAgICAgIFN0cmluZyRwcm90b3R5cGUkZXF1YWxzLFxuICAgICAgICAnZmFudGFzeS1sYW5kL2x0ZSc6ICAgICAgICAgU3RyaW5nJHByb3RvdHlwZSRsdGUsXG4gICAgICAgICdmYW50YXN5LWxhbmQvY29uY2F0JzogICAgICBTdHJpbmckcHJvdG90eXBlJGNvbmNhdFxuICAgICAgfVxuICAgIH0sXG4gICAgQXJyYXk6IHtcbiAgICAgICdmYW50YXN5LWxhbmQvZW1wdHknOiAgICAgICAgIEFycmF5JGVtcHR5LFxuICAgICAgJ2ZhbnRhc3ktbGFuZC9vZic6ICAgICAgICAgICAgQXJyYXkkb2YsXG4gICAgICAnZmFudGFzeS1sYW5kL2NoYWluUmVjJzogICAgICBBcnJheSRjaGFpblJlYyxcbiAgICAgICdmYW50YXN5LWxhbmQvemVybyc6ICAgICAgICAgIEFycmF5JHplcm8sXG4gICAgICAncHJvdG90eXBlJzoge1xuICAgICAgICAnZmFudGFzeS1sYW5kL2VxdWFscyc6ICAgICAgQXJyYXkkcHJvdG90eXBlJGVxdWFscyxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9sdGUnOiAgICAgICAgIEFycmF5JHByb3RvdHlwZSRsdGUsXG4gICAgICAgICdmYW50YXN5LWxhbmQvY29uY2F0JzogICAgICBBcnJheSRwcm90b3R5cGUkY29uY2F0LFxuICAgICAgICAnZmFudGFzeS1sYW5kL2ZpbHRlcic6ICAgICAgQXJyYXkkcHJvdG90eXBlJGZpbHRlcixcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9tYXAnOiAgICAgICAgIEFycmF5JHByb3RvdHlwZSRtYXAsXG4gICAgICAgICdmYW50YXN5LWxhbmQvYXAnOiAgICAgICAgICBBcnJheSRwcm90b3R5cGUkYXAsXG4gICAgICAgICdmYW50YXN5LWxhbmQvY2hhaW4nOiAgICAgICBBcnJheSRwcm90b3R5cGUkY2hhaW4sXG4gICAgICAgICdmYW50YXN5LWxhbmQvYWx0JzogICAgICAgICBBcnJheSRwcm90b3R5cGUkYWx0LFxuICAgICAgICAnZmFudGFzeS1sYW5kL3JlZHVjZSc6ICAgICAgQXJyYXkkcHJvdG90eXBlJHJlZHVjZSxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC90cmF2ZXJzZSc6ICAgIEFycmF5JHByb3RvdHlwZSR0cmF2ZXJzZSxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9leHRlbmQnOiAgICAgIEFycmF5JHByb3RvdHlwZSRleHRlbmRcbiAgICAgIH1cbiAgICB9LFxuICAgIEFyZ3VtZW50czoge1xuICAgICAgJ3Byb3RvdHlwZSc6IHtcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnOiAgICAgIEFyZ3VtZW50cyRwcm90b3R5cGUkZXF1YWxzLFxuICAgICAgICAnZmFudGFzeS1sYW5kL2x0ZSc6ICAgICAgICAgQXJndW1lbnRzJHByb3RvdHlwZSRsdGVcbiAgICAgIH1cbiAgICB9LFxuICAgIEVycm9yOiB7XG4gICAgICAncHJvdG90eXBlJzoge1xuICAgICAgICAnZmFudGFzeS1sYW5kL2VxdWFscyc6ICAgICAgRXJyb3IkcHJvdG90eXBlJGVxdWFsc1xuICAgICAgfVxuICAgIH0sXG4gICAgT2JqZWN0OiB7XG4gICAgICAnZmFudGFzeS1sYW5kL2VtcHR5JzogICAgICAgICBPYmplY3QkZW1wdHksXG4gICAgICAnZmFudGFzeS1sYW5kL3plcm8nOiAgICAgICAgICBPYmplY3QkemVybyxcbiAgICAgICdwcm90b3R5cGUnOiB7XG4gICAgICAgICdmYW50YXN5LWxhbmQvZXF1YWxzJzogICAgICBPYmplY3QkcHJvdG90eXBlJGVxdWFscyxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9sdGUnOiAgICAgICAgIE9iamVjdCRwcm90b3R5cGUkbHRlLFxuICAgICAgICAnZmFudGFzeS1sYW5kL2NvbmNhdCc6ICAgICAgT2JqZWN0JHByb3RvdHlwZSRjb25jYXQsXG4gICAgICAgICdmYW50YXN5LWxhbmQvZmlsdGVyJzogICAgICBPYmplY3QkcHJvdG90eXBlJGZpbHRlcixcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9tYXAnOiAgICAgICAgIE9iamVjdCRwcm90b3R5cGUkbWFwLFxuICAgICAgICAnZmFudGFzeS1sYW5kL2FwJzogICAgICAgICAgT2JqZWN0JHByb3RvdHlwZSRhcCxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9hbHQnOiAgICAgICAgIE9iamVjdCRwcm90b3R5cGUkYWx0LFxuICAgICAgICAnZmFudGFzeS1sYW5kL3JlZHVjZSc6ICAgICAgT2JqZWN0JHByb3RvdHlwZSRyZWR1Y2UsXG4gICAgICAgICdmYW50YXN5LWxhbmQvdHJhdmVyc2UnOiAgICBPYmplY3QkcHJvdG90eXBlJHRyYXZlcnNlXG4gICAgICB9XG4gICAgfSxcbiAgICBGdW5jdGlvbjoge1xuICAgICAgJ2ZhbnRhc3ktbGFuZC9pZCc6ICAgICAgICAgICAgRnVuY3Rpb24kaWQsXG4gICAgICAnZmFudGFzeS1sYW5kL29mJzogICAgICAgICAgICBGdW5jdGlvbiRvZixcbiAgICAgICdmYW50YXN5LWxhbmQvY2hhaW5SZWMnOiAgICAgIEZ1bmN0aW9uJGNoYWluUmVjLFxuICAgICAgJ3Byb3RvdHlwZSc6IHtcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnOiAgICAgIEZ1bmN0aW9uJHByb3RvdHlwZSRlcXVhbHMsXG4gICAgICAgICdmYW50YXN5LWxhbmQvY29tcG9zZSc6ICAgICBGdW5jdGlvbiRwcm90b3R5cGUkY29tcG9zZSxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9tYXAnOiAgICAgICAgIEZ1bmN0aW9uJHByb3RvdHlwZSRtYXAsXG4gICAgICAgICdmYW50YXN5LWxhbmQvcHJvbWFwJzogICAgICBGdW5jdGlvbiRwcm90b3R5cGUkcHJvbWFwLFxuICAgICAgICAnZmFudGFzeS1sYW5kL2FwJzogICAgICAgICAgRnVuY3Rpb24kcHJvdG90eXBlJGFwLFxuICAgICAgICAnZmFudGFzeS1sYW5kL2NoYWluJzogICAgICAgRnVuY3Rpb24kcHJvdG90eXBlJGNoYWluLFxuICAgICAgICAnZmFudGFzeS1sYW5kL2V4dGVuZCc6ICAgICAgRnVuY3Rpb24kcHJvdG90eXBlJGV4dGVuZCxcbiAgICAgICAgJ2ZhbnRhc3ktbGFuZC9jb250cmFtYXAnOiAgIEZ1bmN0aW9uJHByb3RvdHlwZSRjb250cmFtYXBcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qIGVzbGludC1lbmFibGUga2V5LXNwYWNpbmcgKi9cblxuICAvLyMgZXF1YWxzIDo6IChhLCBiKSAtPiBCb29sZWFuXG4gIC8vLlxuICAvLy4gUmV0dXJucyBgdHJ1ZWAgaWYgaXRzIGFyZ3VtZW50cyBhcmUgb2YgdGhlIHNhbWUgdHlwZSBhbmQgZXF1YWwgYWNjb3JkaW5nXG4gIC8vLiB0byB0aGUgdHlwZSdzIFtgZmFudGFzeS1sYW5kL2VxdWFsc2BdW10gbWV0aG9kOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAgLy8uXG4gIC8vLiBgZmFudGFzeS1sYW5kL2VxdWFsc2AgaW1wbGVtZW50YXRpb25zIGFyZSBwcm92aWRlZCBmb3IgdGhlIGZvbGxvd2luZ1xuICAvLy4gYnVpbHQtaW4gdHlwZXM6IE51bGwsIFVuZGVmaW5lZCwgQm9vbGVhbiwgTnVtYmVyLCBEYXRlLCBSZWdFeHAsIFN0cmluZyxcbiAgLy8uIEFycmF5LCBBcmd1bWVudHMsIEVycm9yLCBPYmplY3QsIGFuZCBGdW5jdGlvbi5cbiAgLy8uXG4gIC8vLiBUaGUgYWxnb3JpdGhtIHN1cHBvcnRzIGNpcmN1bGFyIGRhdGEgc3RydWN0dXJlcy4gVHdvIGFycmF5cyBhcmUgZXF1YWxcbiAgLy8uIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBpbmRleCBwYXRocyBhbmQgZm9yIGVhY2ggcGF0aCBoYXZlIGVxdWFsIHZhbHVlcy5cbiAgLy8uIFR3byBhcnJheXMgd2hpY2ggcmVwcmVzZW50IGBbMSwgWzEsIFsxLCBbMSwgWzEsIC4uLl1dXV1dYCwgZm9yIGV4YW1wbGUsXG4gIC8vLiBhcmUgZXF1YWwgZXZlbiBpZiB0aGVpciBpbnRlcm5hbCBzdHJ1Y3R1cmVzIGRpZmZlci4gVHdvIG9iamVjdHMgYXJlIGVxdWFsXG4gIC8vLiBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgcHJvcGVydHkgcGF0aHMgYW5kIGZvciBlYWNoIHBhdGggaGF2ZSBlcXVhbCB2YWx1ZXMuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBlcXVhbHMoMCwgLTApXG4gIC8vLiB0cnVlXG4gIC8vLlxuICAvLy4gPiBlcXVhbHMoTmFOLCBOYU4pXG4gIC8vLiB0cnVlXG4gIC8vLlxuICAvLy4gPiBlcXVhbHMoQ29ucygnZm9vJywgQ29ucygnYmFyJywgTmlsKSksIENvbnMoJ2ZvbycsIENvbnMoJ2JhcicsIE5pbCkpKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gZXF1YWxzKENvbnMoJ2ZvbycsIENvbnMoJ2JhcicsIE5pbCkpLCBDb25zKCdiYXInLCBDb25zKCdmb28nLCBOaWwpKSlcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgdmFyIGVxdWFscyA9IChmdW5jdGlvbigpIHtcbiAgICAvLyAgJHBhaXJzIDo6IEFycmF5IChBcnJheTIgQW55IEFueSlcbiAgICB2YXIgJHBhaXJzID0gW107XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gZXF1YWxzKHgsIHkpIHtcbiAgICAgIGlmICghc2FtZVR5cGUoeCwgeSkpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gIFRoaXMgYWxnb3JpdGhtIGZvciBjb21wYXJpbmcgY2lyY3VsYXIgZGF0YSBzdHJ1Y3R1cmVzIHdhc1xuICAgICAgLy8gIHN1Z2dlc3RlZCBpbiA8aHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDA2MjI3OTQvMzEyNzg1Pi5cbiAgICAgIGlmICgkcGFpcnMuc29tZShmdW5jdGlvbihwKSB7IHJldHVybiBwWzBdID09PSB4ICYmIHBbMV0gPT09IHk7IH0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAkcGFpcnMucHVzaChbeCwgeV0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIFNldG9pZC50ZXN0KHgpICYmIFNldG9pZC50ZXN0KHkpICYmIFNldG9pZC5tZXRob2RzLmVxdWFscyh4KSh5KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICRwYWlycy5wb3AoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KCkpO1xuXG4gIC8vIyBsdCA6OiAoYSwgYikgLT4gQm9vbGVhblxuICAvLy5cbiAgLy8uIFJldHVybnMgYHRydWVgIGlmIGl0cyBhcmd1bWVudHMgYXJlIG9mIHRoZSBzYW1lIHR5cGUgYW5kIHRoZSBmaXJzdCBpc1xuICAvLy4gbGVzcyB0aGFuIHRoZSBzZWNvbmQgYWNjb3JkaW5nIHRvIHRoZSB0eXBlJ3MgW2BmYW50YXN5LWxhbmQvbHRlYF1bXVxuICAvLy4gbWV0aG9kOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYGx0ZWBdKCNsdGUpLlxuICAvLy5cbiAgLy8uIFNlZSBhbHNvIFtgZ3RgXSgjZ3QpIGFuZCBbYGd0ZWBdKCNndGUpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gbHQoMCwgMClcbiAgLy8uIGZhbHNlXG4gIC8vLlxuICAvLy4gPiBsdCgwLCAxKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gbHQoMSwgMClcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gbHQoeCwgeSkge1xuICAgIHJldHVybiBzYW1lVHlwZSh4LCB5KSAmJiAhbHRlKHksIHgpO1xuICB9XG5cbiAgLy8jIGx0ZSA6OiAoYSwgYikgLT4gQm9vbGVhblxuICAvLy5cbiAgLy8uIFJldHVybnMgYHRydWVgIGlmIGl0cyBhcmd1bWVudHMgYXJlIG9mIHRoZSBzYW1lIHR5cGUgYW5kIHRoZSBmaXJzdFxuICAvLy4gaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBzZWNvbmQgYWNjb3JkaW5nIHRvIHRoZSB0eXBlJ3NcbiAgLy8uIFtgZmFudGFzeS1sYW5kL2x0ZWBdW10gbWV0aG9kOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAgLy8uXG4gIC8vLiBgZmFudGFzeS1sYW5kL2x0ZWAgaW1wbGVtZW50YXRpb25zIGFyZSBwcm92aWRlZCBmb3IgdGhlIGZvbGxvd2luZ1xuICAvLy4gYnVpbHQtaW4gdHlwZXM6IE51bGwsIFVuZGVmaW5lZCwgQm9vbGVhbiwgTnVtYmVyLCBEYXRlLCBTdHJpbmcsIEFycmF5LFxuICAvLy4gQXJndW1lbnRzLCBhbmQgT2JqZWN0LlxuICAvLy5cbiAgLy8uIFRoZSBhbGdvcml0aG0gc3VwcG9ydHMgY2lyY3VsYXIgZGF0YSBzdHJ1Y3R1cmVzIGluIHRoZSBzYW1lIG1hbm5lciBhc1xuICAvLy4gW2BlcXVhbHNgXSgjZXF1YWxzKS5cbiAgLy8uXG4gIC8vLiBTZWUgYWxzbyBbYGx0YF0oI2x0KSwgW2BndGBdKCNndCksIGFuZCBbYGd0ZWBdKCNndGUpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gbHRlKDAsIDApXG4gIC8vLiB0cnVlXG4gIC8vLlxuICAvLy4gPiBsdGUoMCwgMSlcbiAgLy8uIHRydWVcbiAgLy8uXG4gIC8vLiA+IGx0ZSgxLCAwKVxuICAvLy4gZmFsc2VcbiAgLy8uIGBgYFxuICB2YXIgbHRlID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vICAkcGFpcnMgOjogQXJyYXkgKEFycmF5MiBBbnkgQW55KVxuICAgIHZhciAkcGFpcnMgPSBbXTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBsdGUoeCwgeSkge1xuICAgICAgaWYgKCFzYW1lVHlwZSh4LCB5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyAgVGhpcyBhbGdvcml0aG0gZm9yIGNvbXBhcmluZyBjaXJjdWxhciBkYXRhIHN0cnVjdHVyZXMgd2FzXG4gICAgICAvLyAgc3VnZ2VzdGVkIGluIDxodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDYyMjc5NC8zMTI3ODU+LlxuICAgICAgaWYgKCRwYWlycy5zb21lKGZ1bmN0aW9uKHApIHsgcmV0dXJuIHBbMF0gPT09IHggJiYgcFsxXSA9PT0geTsgfSkpIHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyh4LCB5KTtcbiAgICAgIH1cblxuICAgICAgJHBhaXJzLnB1c2goW3gsIHldKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBPcmQudGVzdCh4KSAmJiBPcmQudGVzdCh5KSAmJiBPcmQubWV0aG9kcy5sdGUoeCkoeSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICAkcGFpcnMucG9wKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSgpKTtcblxuICAvLyMgZ3QgOjogKGEsIGIpIC0+IEJvb2xlYW5cbiAgLy8uXG4gIC8vLiBSZXR1cm5zIGB0cnVlYCBpZiBpdHMgYXJndW1lbnRzIGFyZSBvZiB0aGUgc2FtZSB0eXBlIGFuZCB0aGUgZmlyc3QgaXNcbiAgLy8uIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kIGFjY29yZGluZyB0byB0aGUgdHlwZSdzIFtgZmFudGFzeS1sYW5kL2x0ZWBdW11cbiAgLy8uIG1ldGhvZDsgYGZhbHNlYCBvdGhlcndpc2UuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2BsdGVgXSgjbHRlKS5cbiAgLy8uXG4gIC8vLiBTZWUgYWxzbyBbYGx0YF0oI2x0KSBhbmQgW2BndGVgXSgjZ3RlKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGd0KDAsIDApXG4gIC8vLiBmYWxzZVxuICAvLy5cbiAgLy8uID4gZ3QoMCwgMSlcbiAgLy8uIGZhbHNlXG4gIC8vLlxuICAvLy4gPiBndCgxLCAwKVxuICAvLy4gdHJ1ZVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGd0KHgsIHkpIHtcbiAgICByZXR1cm4gbHQoeSwgeCk7XG4gIH1cblxuICAvLyMgZ3RlIDo6IChhLCBiKSAtPiBCb29sZWFuXG4gIC8vLlxuICAvLy4gUmV0dXJucyBgdHJ1ZWAgaWYgaXRzIGFyZ3VtZW50cyBhcmUgb2YgdGhlIHNhbWUgdHlwZSBhbmQgdGhlIGZpcnN0XG4gIC8vLiBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHNlY29uZCBhY2NvcmRpbmcgdG8gdGhlIHR5cGUnc1xuICAvLy4gW2BmYW50YXN5LWxhbmQvbHRlYF1bXSBtZXRob2Q7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAvLy5cbiAgLy8uIFRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIFtgbHRlYF0oI2x0ZSkuXG4gIC8vLlxuICAvLy4gU2VlIGFsc28gW2BsdGBdKCNsdCkgYW5kIFtgZ3RgXSgjZ3QpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gZ3RlKDAsIDApXG4gIC8vLiB0cnVlXG4gIC8vLlxuICAvLy4gPiBndGUoMCwgMSlcbiAgLy8uIGZhbHNlXG4gIC8vLlxuICAvLy4gPiBndGUoMSwgMClcbiAgLy8uIHRydWVcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBndGUoeCwgeSkge1xuICAgIHJldHVybiBsdGUoeSwgeCk7XG4gIH1cblxuICAvLyMgbWluIDo6IE9yZCBhID0+IChhLCBhKSAtPiBhXG4gIC8vLlxuICAvLy4gUmV0dXJucyB0aGUgc21hbGxlciBvZiBpdHMgdHdvIGFyZ3VtZW50cy5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYGx0ZWBdKCNsdGUpLlxuICAvLy5cbiAgLy8uIFNlZSBhbHNvIFtgbWF4YF0oI21heCkuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBtaW4oMTAsIDIpXG4gIC8vLiAyXG4gIC8vLlxuICAvLy4gPiBtaW4obmV3IERhdGUoJzE5OTktMTItMzEnKSwgbmV3IERhdGUoJzIwMDAtMDEtMDEnKSlcbiAgLy8uIG5ldyBEYXRlKCcxOTk5LTEyLTMxJylcbiAgLy8uXG4gIC8vLiA+IG1pbignMTAnLCAnMicpXG4gIC8vLiAnMTAnXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gbWluKHgsIHkpIHtcbiAgICByZXR1cm4gbHRlKHgsIHkpID8geCA6IHk7XG4gIH1cblxuICAvLyMgbWF4IDo6IE9yZCBhID0+IChhLCBhKSAtPiBhXG4gIC8vLlxuICAvLy4gUmV0dXJucyB0aGUgbGFyZ2VyIG9mIGl0cyB0d28gYXJndW1lbnRzLlxuICAvLy5cbiAgLy8uIFRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIFtgbHRlYF0oI2x0ZSkuXG4gIC8vLlxuICAvLy4gU2VlIGFsc28gW2BtaW5gXSgjbWluKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IG1heCgxMCwgMilcbiAgLy8uIDEwXG4gIC8vLlxuICAvLy4gPiBtYXgobmV3IERhdGUoJzE5OTktMTItMzEnKSwgbmV3IERhdGUoJzIwMDAtMDEtMDEnKSlcbiAgLy8uIG5ldyBEYXRlKCcyMDAwLTAxLTAxJylcbiAgLy8uXG4gIC8vLiA+IG1heCgnMTAnLCAnMicpXG4gIC8vLiAnMidcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBtYXgoeCwgeSkge1xuICAgIHJldHVybiBsdGUoeCwgeSkgPyB5IDogeDtcbiAgfVxuXG4gIC8vIyBjb21wb3NlIDo6IFNlbWlncm91cG9pZCBjID0+IChjIGogaywgYyBpIGopIC0+IGMgaSBrXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvY29tcG9zZWBdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9jb21wb3NlYCBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGZvciB0aGUgZm9sbG93aW5nXG4gIC8vLiBidWlsdC1pbiB0eXBlczogRnVuY3Rpb24uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBjb21wb3NlKE1hdGguc3FydCwgeCA9PiB4ICsgMSkoOTkpXG4gIC8vLiAxMFxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGNvbXBvc2UoeCwgeSkge1xuICAgIHJldHVybiBTZW1pZ3JvdXBvaWQubWV0aG9kcy5jb21wb3NlKHkpKHgpO1xuICB9XG5cbiAgLy8jIGlkIDo6IENhdGVnb3J5IGMgPT4gVHlwZVJlcCBjIC0+IGNcbiAgLy8uXG4gIC8vLiBGdW5jdGlvbiB3cmFwcGVyIGZvciBbYGZhbnRhc3ktbGFuZC9pZGBdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9pZGAgaW1wbGVtZW50YXRpb25zIGFyZSBwcm92aWRlZCBmb3IgdGhlIGZvbGxvd2luZ1xuICAvLy4gYnVpbHQtaW4gdHlwZXM6IEZ1bmN0aW9uLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gaWQoRnVuY3Rpb24pKCdmb28nKVxuICAvLy4gJ2ZvbydcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBpZCh0eXBlUmVwKSB7XG4gICAgcmV0dXJuIENhdGVnb3J5Lm1ldGhvZHMuaWQodHlwZVJlcCkoKTtcbiAgfVxuXG4gIC8vIyBjb25jYXQgOjogU2VtaWdyb3VwIGEgPT4gKGEsIGEpIC0+IGFcbiAgLy8uXG4gIC8vLiBGdW5jdGlvbiB3cmFwcGVyIGZvciBbYGZhbnRhc3ktbGFuZC9jb25jYXRgXVtdLlxuICAvLy5cbiAgLy8uIGBmYW50YXN5LWxhbmQvY29uY2F0YCBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGZvciB0aGUgZm9sbG93aW5nXG4gIC8vLiBidWlsdC1pbiB0eXBlczogU3RyaW5nLCBBcnJheSwgYW5kIE9iamVjdC5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGNvbmNhdCgnYWJjJywgJ2RlZicpXG4gIC8vLiAnYWJjZGVmJ1xuICAvLy5cbiAgLy8uID4gY29uY2F0KFsxLCAyLCAzXSwgWzQsIDUsIDZdKVxuICAvLy4gWzEsIDIsIDMsIDQsIDUsIDZdXG4gIC8vLlxuICAvLy4gPiBjb25jYXQoe3g6IDEsIHk6IDJ9LCB7eTogMywgejogNH0pXG4gIC8vLiB7eDogMSwgeTogMywgejogNH1cbiAgLy8uXG4gIC8vLiA+IGNvbmNhdChDb25zKCdmb28nLCBDb25zKCdiYXInLCBDb25zKCdiYXonLCBOaWwpKSksIENvbnMoJ3F1dXgnLCBOaWwpKVxuICAvLy4gQ29ucygnZm9vJywgQ29ucygnYmFyJywgQ29ucygnYmF6JywgQ29ucygncXV1eCcsIE5pbCkpKSlcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBjb25jYXQoeCwgeSkge1xuICAgIHJldHVybiBTZW1pZ3JvdXAubWV0aG9kcy5jb25jYXQoeCkoeSk7XG4gIH1cblxuICAvLyMgZW1wdHkgOjogTW9ub2lkIG0gPT4gVHlwZVJlcCBtIC0+IG1cbiAgLy8uXG4gIC8vLiBGdW5jdGlvbiB3cmFwcGVyIGZvciBbYGZhbnRhc3ktbGFuZC9lbXB0eWBdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9lbXB0eWAgaW1wbGVtZW50YXRpb25zIGFyZSBwcm92aWRlZCBmb3IgdGhlIGZvbGxvd2luZ1xuICAvLy4gYnVpbHQtaW4gdHlwZXM6IFN0cmluZywgQXJyYXksIGFuZCBPYmplY3QuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBlbXB0eShTdHJpbmcpXG4gIC8vLiAnJ1xuICAvLy5cbiAgLy8uID4gZW1wdHkoQXJyYXkpXG4gIC8vLiBbXVxuICAvLy5cbiAgLy8uID4gZW1wdHkoT2JqZWN0KVxuICAvLy4ge31cbiAgLy8uXG4gIC8vLiA+IGVtcHR5KExpc3QpXG4gIC8vLiBOaWxcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBlbXB0eSh0eXBlUmVwKSB7XG4gICAgcmV0dXJuIE1vbm9pZC5tZXRob2RzLmVtcHR5KHR5cGVSZXApKCk7XG4gIH1cblxuICAvLyMgaW52ZXJ0IDo6IEdyb3VwIGcgPT4gZyAtPiBnXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvaW52ZXJ0YF1bXS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGludmVydChTdW0oNSkpXG4gIC8vLiBTdW0oLTUpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gaW52ZXJ0KGdyb3VwKSB7XG4gICAgcmV0dXJuIEdyb3VwLm1ldGhvZHMuaW52ZXJ0KGdyb3VwKSgpO1xuICB9XG5cbiAgLy8jIGZpbHRlciA6OiBGaWx0ZXJhYmxlIGYgPT4gKGEgLT4gQm9vbGVhbiwgZiBhKSAtPiBmIGFcbiAgLy8uXG4gIC8vLiBGdW5jdGlvbiB3cmFwcGVyIGZvciBbYGZhbnRhc3ktbGFuZC9maWx0ZXJgXVtdLiBEaXNjYXJkcyBldmVyeSBlbGVtZW50XG4gIC8vLiB3aGljaCBkb2VzIG5vdCBzYXRpc2Z5IHRoZSBwcmVkaWNhdGUuXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9maWx0ZXJgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBBcnJheSBhbmQgT2JqZWN0LlxuICAvLy5cbiAgLy8uIFNlZSBhbHNvIFtgcmVqZWN0YF0oI3JlamVjdCkuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBmaWx0ZXIoeCA9PiB4ICUgMiA9PSAxLCBbMSwgMiwgM10pXG4gIC8vLiBbMSwgM11cbiAgLy8uXG4gIC8vLiA+IGZpbHRlcih4ID0+IHggJSAyID09IDEsIHt4OiAxLCB5OiAyLCB6OiAzfSlcbiAgLy8uIHt4OiAxLCB6OiAzfVxuICAvLy5cbiAgLy8uID4gZmlsdGVyKHggPT4geCAlIDIgPT0gMSwgQ29ucygxLCBDb25zKDIsIENvbnMoMywgTmlsKSkpKVxuICAvLy4gQ29ucygxLCBDb25zKDMsIE5pbCkpXG4gIC8vLlxuICAvLy4gPiBmaWx0ZXIoeCA9PiB4ICUgMiA9PSAxLCBOb3RoaW5nKVxuICAvLy4gTm90aGluZ1xuICAvLy5cbiAgLy8uID4gZmlsdGVyKHggPT4geCAlIDIgPT0gMSwgSnVzdCgwKSlcbiAgLy8uIE5vdGhpbmdcbiAgLy8uXG4gIC8vLiA+IGZpbHRlcih4ID0+IHggJSAyID09IDEsIEp1c3QoMSkpXG4gIC8vLiBKdXN0KDEpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gZmlsdGVyKHByZWQsIGZpbHRlcmFibGUpIHtcbiAgICByZXR1cm4gRmlsdGVyYWJsZS5tZXRob2RzLmZpbHRlcihmaWx0ZXJhYmxlKShwcmVkKTtcbiAgfVxuXG4gIC8vIyByZWplY3QgOjogRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4sIGYgYSkgLT4gZiBhXG4gIC8vLlxuICAvLy4gRGlzY2FyZHMgZXZlcnkgZWxlbWVudCB3aGljaCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZS5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYGZpbHRlcmBdKCNmaWx0ZXIpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gcmVqZWN0KHggPT4geCAlIDIgPT0gMSwgWzEsIDIsIDNdKVxuICAvLy4gWzJdXG4gIC8vLlxuICAvLy4gPiByZWplY3QoeCA9PiB4ICUgMiA9PSAxLCB7eDogMSwgeTogMiwgejogM30pXG4gIC8vLiB7eTogMn1cbiAgLy8uXG4gIC8vLiA+IHJlamVjdCh4ID0+IHggJSAyID09IDEsIENvbnMoMSwgQ29ucygyLCBDb25zKDMsIE5pbCkpKSlcbiAgLy8uIENvbnMoMiwgTmlsKVxuICAvLy5cbiAgLy8uID4gcmVqZWN0KHggPT4geCAlIDIgPT0gMSwgTm90aGluZylcbiAgLy8uIE5vdGhpbmdcbiAgLy8uXG4gIC8vLiA+IHJlamVjdCh4ID0+IHggJSAyID09IDEsIEp1c3QoMCkpXG4gIC8vLiBKdXN0KDApXG4gIC8vLlxuICAvLy4gPiByZWplY3QoeCA9PiB4ICUgMiA9PSAxLCBKdXN0KDEpKVxuICAvLy4gTm90aGluZ1xuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIHJlamVjdChwcmVkLCBmaWx0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIGZpbHRlcihmdW5jdGlvbih4KSB7IHJldHVybiAhcHJlZCh4KTsgfSwgZmlsdGVyYWJsZSk7XG4gIH1cblxuICAvLyMgdGFrZVdoaWxlIDo6IEZpbHRlcmFibGUgZiA9PiAoYSAtPiBCb29sZWFuLCBmIGEpIC0+IGYgYVxuICAvLy5cbiAgLy8uIERpc2NhcmRzIHRoZSBmaXJzdCBlbGVtZW50IHdoaWNoIGRvZXMgbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZSwgYW5kIGFsbFxuICAvLy4gc3Vic2VxdWVudCBlbGVtZW50cy5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYGZpbHRlcmBdKCNmaWx0ZXIpLlxuICAvLy5cbiAgLy8uIFNlZSBhbHNvIFtgZHJvcFdoaWxlYF0oI2Ryb3BXaGlsZSkuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiB0YWtlV2hpbGUocyA9PiAveC8udGVzdChzKSwgWyd4eScsICd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddKVxuICAvLy4gWyd4eScsICd4eicsICd5eCddXG4gIC8vLlxuICAvLy4gPiB0YWtlV2hpbGUocyA9PiAveS8udGVzdChzKSwgWyd4eScsICd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddKVxuICAvLy4gWyd4eSddXG4gIC8vLlxuICAvLy4gPiB0YWtlV2hpbGUocyA9PiAvei8udGVzdChzKSwgWyd4eScsICd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddKVxuICAvLy4gW11cbiAgLy8uIGBgYFxuICBmdW5jdGlvbiB0YWtlV2hpbGUocHJlZCwgZmlsdGVyYWJsZSkge1xuICAgIHZhciB0YWtlID0gdHJ1ZTtcbiAgICByZXR1cm4gZmlsdGVyKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHRha2UgPSB0YWtlICYmIHByZWQoeCk7IH0sIGZpbHRlcmFibGUpO1xuICB9XG5cbiAgLy8jIGRyb3BXaGlsZSA6OiBGaWx0ZXJhYmxlIGYgPT4gKGEgLT4gQm9vbGVhbiwgZiBhKSAtPiBmIGFcbiAgLy8uXG4gIC8vLiBSZXRhaW5zIHRoZSBmaXJzdCBlbGVtZW50IHdoaWNoIGRvZXMgbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZSwgYW5kIGFsbFxuICAvLy4gc3Vic2VxdWVudCBlbGVtZW50cy5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYGZpbHRlcmBdKCNmaWx0ZXIpLlxuICAvLy5cbiAgLy8uIFNlZSBhbHNvIFtgdGFrZVdoaWxlYF0oI3Rha2VXaGlsZSkuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBkcm9wV2hpbGUocyA9PiAveC8udGVzdChzKSwgWyd4eScsICd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddKVxuICAvLy4gWyd5eicsICd6eCcsICd6eSddXG4gIC8vLlxuICAvLy4gPiBkcm9wV2hpbGUocyA9PiAveS8udGVzdChzKSwgWyd4eScsICd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddKVxuICAvLy4gWyd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddXG4gIC8vLlxuICAvLy4gPiBkcm9wV2hpbGUocyA9PiAvei8udGVzdChzKSwgWyd4eScsICd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddKVxuICAvLy4gWyd4eScsICd4eicsICd5eCcsICd5eicsICd6eCcsICd6eSddXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gZHJvcFdoaWxlKHByZWQsIGZpbHRlcmFibGUpIHtcbiAgICB2YXIgdGFrZSA9IGZhbHNlO1xuICAgIHJldHVybiBmaWx0ZXIoZnVuY3Rpb24oeCkgeyByZXR1cm4gdGFrZSA9IHRha2UgfHwgIXByZWQoeCk7IH0sIGZpbHRlcmFibGUpO1xuICB9XG5cbiAgLy8jIG1hcCA6OiBGdW5jdG9yIGYgPT4gKGEgLT4gYiwgZiBhKSAtPiBmIGJcbiAgLy8uXG4gIC8vLiBGdW5jdGlvbiB3cmFwcGVyIGZvciBbYGZhbnRhc3ktbGFuZC9tYXBgXVtdLlxuICAvLy5cbiAgLy8uIGBmYW50YXN5LWxhbmQvbWFwYCBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGZvciB0aGUgZm9sbG93aW5nXG4gIC8vLiBidWlsdC1pbiB0eXBlczogQXJyYXksIE9iamVjdCwgYW5kIEZ1bmN0aW9uLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gbWFwKE1hdGguc3FydCwgWzEsIDQsIDldKVxuICAvLy4gWzEsIDIsIDNdXG4gIC8vLlxuICAvLy4gPiBtYXAoTWF0aC5zcXJ0LCB7eDogMSwgeTogNCwgejogOX0pXG4gIC8vLiB7eDogMSwgeTogMiwgejogM31cbiAgLy8uXG4gIC8vLiA+IG1hcChNYXRoLnNxcnQsIHMgPT4gcy5sZW5ndGgpKCdTYW5jdHVhcnknKVxuICAvLy4gM1xuICAvLy5cbiAgLy8uID4gbWFwKE1hdGguc3FydCwgVHVwbGUoJ2ZvbycsIDY0KSlcbiAgLy8uIFR1cGxlKCdmb28nLCA4KVxuICAvLy5cbiAgLy8uID4gbWFwKE1hdGguc3FydCwgTmlsKVxuICAvLy4gTmlsXG4gIC8vLlxuICAvLy4gPiBtYXAoTWF0aC5zcXJ0LCBDb25zKDEsIENvbnMoNCwgQ29ucyg5LCBOaWwpKSkpXG4gIC8vLiBDb25zKDEsIENvbnMoMiwgQ29ucygzLCBOaWwpKSlcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBtYXAoZiwgZnVuY3Rvcikge1xuICAgIHJldHVybiBGdW5jdG9yLm1ldGhvZHMubWFwKGZ1bmN0b3IpKGYpO1xuICB9XG5cbiAgLy8jIGZsaXAgOjogRnVuY3RvciBmID0+IChmIChhIC0+IGIpLCBhKSAtPiBmIGJcbiAgLy8uXG4gIC8vLiBNYXBzIG92ZXIgdGhlIGdpdmVuIGZ1bmN0aW9ucywgYXBwbHlpbmcgZWFjaCB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2BtYXBgXSgjbWFwKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGZsaXAoeCA9PiB5ID0+IHggKyB5LCAnIScpKCdmb28nKVxuICAvLy4gJ2ZvbyEnXG4gIC8vLlxuICAvLy4gPiBmbGlwKFtNYXRoLmZsb29yLCBNYXRoLmNlaWxdLCAxLjUpXG4gIC8vLiBbMSwgMl1cbiAgLy8uXG4gIC8vLiA+IGZsaXAoe2Zsb29yOiBNYXRoLmZsb29yLCBjZWlsOiBNYXRoLmNlaWx9LCAxLjUpXG4gIC8vLiB7Zmxvb3I6IDEsIGNlaWw6IDJ9XG4gIC8vLlxuICAvLy4gPiBmbGlwKENvbnMoTWF0aC5mbG9vciwgQ29ucyhNYXRoLmNlaWwsIE5pbCkpLCAxLjUpXG4gIC8vLiBDb25zKDEsIENvbnMoMiwgTmlsKSlcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBmbGlwKGZ1bmN0b3IsIHgpIHtcbiAgICByZXR1cm4gRnVuY3Rvci5tZXRob2RzLm1hcChmdW5jdG9yKSh0aHJ1c2goeCkpO1xuICB9XG5cbiAgLy8jIGJpbWFwIDo6IEJpZnVuY3RvciBmID0+IChhIC0+IGIsIGMgLT4gZCwgZiBhIGMpIC0+IGYgYiBkXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvYmltYXBgXVtdLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gYmltYXAocyA9PiBzLnRvVXBwZXJDYXNlKCksIE1hdGguc3FydCwgVHVwbGUoJ2ZvbycsIDY0KSlcbiAgLy8uIFR1cGxlKCdGT08nLCA4KVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGJpbWFwKGYsIGcsIGJpZnVuY3Rvcikge1xuICAgIHJldHVybiBCaWZ1bmN0b3IubWV0aG9kcy5iaW1hcChiaWZ1bmN0b3IpKGYsIGcpO1xuICB9XG5cbiAgLy8jIG1hcExlZnQgOjogQmlmdW5jdG9yIGYgPT4gKGEgLT4gYiwgZiBhIGMpIC0+IGYgYiBjXG4gIC8vLlxuICAvLy4gTWFwcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gb3ZlciB0aGUgbGVmdCBzaWRlIG9mIGEgQmlmdW5jdG9yLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gbWFwTGVmdChNYXRoLnNxcnQsIFR1cGxlKDY0LCA5KSlcbiAgLy8uIFR1cGxlKDgsIDkpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gbWFwTGVmdChmLCBiaWZ1bmN0b3IpIHtcbiAgICByZXR1cm4gYmltYXAoZiwgaWRlbnRpdHksIGJpZnVuY3Rvcik7XG4gIH1cblxuICAvLyMgcHJvbWFwIDo6IFByb2Z1bmN0b3IgcCA9PiAoYSAtPiBiLCBjIC0+IGQsIHAgYiBjKSAtPiBwIGEgZFxuICAvLy5cbiAgLy8uIEZ1bmN0aW9uIHdyYXBwZXIgZm9yIFtgZmFudGFzeS1sYW5kL3Byb21hcGBdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9wcm9tYXBgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBGdW5jdGlvbi5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IHByb21hcChNYXRoLmFicywgeCA9PiB4ICsgMSwgTWF0aC5zcXJ0KSgtMTAwKVxuICAvLy4gMTFcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBwcm9tYXAoZiwgZywgcHJvZnVuY3Rvcikge1xuICAgIHJldHVybiBQcm9mdW5jdG9yLm1ldGhvZHMucHJvbWFwKHByb2Z1bmN0b3IpKGYsIGcpO1xuICB9XG5cbiAgLy8jIGFwIDo6IEFwcGx5IGYgPT4gKGYgKGEgLT4gYiksIGYgYSkgLT4gZiBiXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvYXBgXVtdLlxuICAvLy5cbiAgLy8uIGBmYW50YXN5LWxhbmQvYXBgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBBcnJheSwgT2JqZWN0LCBhbmQgRnVuY3Rpb24uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBhcChbTWF0aC5zcXJ0LCB4ID0+IHggKiB4XSwgWzEsIDQsIDksIDE2LCAyNV0pXG4gIC8vLiBbMSwgMiwgMywgNCwgNSwgMSwgMTYsIDgxLCAyNTYsIDYyNV1cbiAgLy8uXG4gIC8vLiA+IGFwKHthOiBNYXRoLnNxcnQsIGI6IHggPT4geCAqIHh9LCB7YTogMTYsIGI6IDEwLCBjOiAxfSlcbiAgLy8uIHthOiA0LCBiOiAxMDB9XG4gIC8vLlxuICAvLy4gPiBhcChzID0+IG4gPT4gcy5zbGljZSgwLCBuKSwgcyA9PiBNYXRoLmNlaWwocy5sZW5ndGggLyAyKSkoJ0hhc2tlbGwnKVxuICAvLy4gJ0hhc2snXG4gIC8vLlxuICAvLy4gPiBhcChJZGVudGl0eShNYXRoLnNxcnQpLCBJZGVudGl0eSg2NCkpXG4gIC8vLiBJZGVudGl0eSg4KVxuICAvLy5cbiAgLy8uID4gYXAoQ29ucyhNYXRoLnNxcnQsIENvbnMoeCA9PiB4ICogeCwgTmlsKSksIENvbnMoMTYsIENvbnMoMTAwLCBOaWwpKSlcbiAgLy8uIENvbnMoNCwgQ29ucygxMCwgQ29ucygyNTYsIENvbnMoMTAwMDAsIE5pbCkpKSlcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBhcChhcHBseUYsIGFwcGx5WCkge1xuICAgIHJldHVybiBBcHBseS5tZXRob2RzLmFwKGFwcGx5WCkoYXBwbHlGKTtcbiAgfVxuXG4gIC8vIyBsaWZ0MiA6OiBBcHBseSBmID0+IChhIC0+IGIgLT4gYywgZiBhLCBmIGIpIC0+IGYgY1xuICAvLy5cbiAgLy8uIExpZnRzIGBhIC0+IGIgLT4gY2AgdG8gYEFwcGx5IGYgPT4gZiBhIC0+IGYgYiAtPiBmIGNgIGFuZCByZXR1cm5zIHRoZVxuICAvLy4gcmVzdWx0IG9mIGFwcGx5aW5nIHRoaXMgdG8gdGhlIGdpdmVuIGFyZ3VtZW50cy5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYG1hcGBdKCNtYXApIGFuZCBbYGFwYF0oI2FwKS5cbiAgLy8uXG4gIC8vLiBTZWUgYWxzbyBbYGxpZnQzYF0oI2xpZnQzKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGxpZnQyKHggPT4geSA9PiBNYXRoLnBvdyh4LCB5KSwgWzEwXSwgWzEsIDIsIDNdKVxuICAvLy4gWzEwLCAxMDAsIDEwMDBdXG4gIC8vLlxuICAvLy4gPiBsaWZ0Mih4ID0+IHkgPT4gTWF0aC5wb3coeCwgeSksIElkZW50aXR5KDEwKSwgSWRlbnRpdHkoMykpXG4gIC8vLiBJZGVudGl0eSgxMDAwKVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGxpZnQyKGYsIHgsIHkpIHtcbiAgICByZXR1cm4gYXAobWFwKGYsIHgpLCB5KTtcbiAgfVxuXG4gIC8vIyBsaWZ0MyA6OiBBcHBseSBmID0+IChhIC0+IGIgLT4gYyAtPiBkLCBmIGEsIGYgYiwgZiBjKSAtPiBmIGRcbiAgLy8uXG4gIC8vLiBMaWZ0cyBgYSAtPiBiIC0+IGMgLT4gZGAgdG8gYEFwcGx5IGYgPT4gZiBhIC0+IGYgYiAtPiBmIGMgLT4gZiBkYCBhbmRcbiAgLy8uIHJldHVybnMgdGhlIHJlc3VsdCBvZiBhcHBseWluZyB0aGlzIHRvIHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2BtYXBgXSgjbWFwKSBhbmQgW2BhcGBdKCNhcCkuXG4gIC8vLlxuICAvLy4gU2VlIGFsc28gW2BsaWZ0MmBdKCNsaWZ0MikuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBsaWZ0Myh4ID0+IHkgPT4geiA9PiB4ICsgeiArIHksIFsnPCddLCBbJz4nXSwgWydmb28nLCAnYmFyJywgJ2JheiddKVxuICAvLy4gWyc8Zm9vPicsICc8YmFyPicsICc8YmF6PiddXG4gIC8vLlxuICAvLy4gPiBsaWZ0Myh4ID0+IHkgPT4geiA9PiB4ICsgeiArIHksIElkZW50aXR5KCc8JyksIElkZW50aXR5KCc+JyksIElkZW50aXR5KCdiYXonKSlcbiAgLy8uIElkZW50aXR5KCc8YmF6PicpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gbGlmdDMoZiwgeCwgeSwgeikge1xuICAgIHJldHVybiBhcChhcChtYXAoZiwgeCksIHkpLCB6KTtcbiAgfVxuXG4gIC8vIyBhcEZpcnN0IDo6IEFwcGx5IGYgPT4gKGYgYSwgZiBiKSAtPiBmIGFcbiAgLy8uXG4gIC8vLiBDb21iaW5lcyB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAgLy8uIEVxdWl2YWxlbnQgdG8gSGFza2VsbCdzIGAoPCopYCBmdW5jdGlvbi5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYGxpZnQyYF0oI2xpZnQyKS5cbiAgLy8uXG4gIC8vLiBTZWUgYWxzbyBbYGFwU2Vjb25kYF0oI2FwU2Vjb25kKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGFwRmlyc3QoWzEsIDJdLCBbMywgNF0pXG4gIC8vLiBbMSwgMSwgMiwgMl1cbiAgLy8uXG4gIC8vLiA+IGFwRmlyc3QoSWRlbnRpdHkoMSksIElkZW50aXR5KDIpKVxuICAvLy4gSWRlbnRpdHkoMSlcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBhcEZpcnN0KHgsIHkpIHtcbiAgICByZXR1cm4gbGlmdDIoY29uc3RhbnQsIHgsIHkpO1xuICB9XG5cbiAgLy8jIGFwU2Vjb25kIDo6IEFwcGx5IGYgPT4gKGYgYSwgZiBiKSAtPiBmIGJcbiAgLy8uXG4gIC8vLiBDb21iaW5lcyB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gIC8vLiBFcXVpdmFsZW50IHRvIEhhc2tlbGwncyBgKCo+KWAgZnVuY3Rpb24uXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2BsaWZ0MmBdKCNsaWZ0MikuXG4gIC8vLlxuICAvLy4gU2VlIGFsc28gW2BhcEZpcnN0YF0oI2FwRmlyc3QpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gYXBTZWNvbmQoWzEsIDJdLCBbMywgNF0pXG4gIC8vLiBbMywgNCwgMywgNF1cbiAgLy8uXG4gIC8vLiA+IGFwU2Vjb25kKElkZW50aXR5KDEpLCBJZGVudGl0eSgyKSlcbiAgLy8uIElkZW50aXR5KDIpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gYXBTZWNvbmQoeCwgeSkge1xuICAgIHJldHVybiBsaWZ0Mihjb25zdGFudChpZGVudGl0eSksIHgsIHkpO1xuICB9XG5cbiAgLy8jIG9mIDo6IEFwcGxpY2F0aXZlIGYgPT4gKFR5cGVSZXAgZiwgYSkgLT4gZiBhXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvb2ZgXVtdLlxuICAvLy5cbiAgLy8uIGBmYW50YXN5LWxhbmQvb2ZgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBBcnJheSBhbmQgRnVuY3Rpb24uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBvZihBcnJheSwgNDIpXG4gIC8vLiBbNDJdXG4gIC8vLlxuICAvLy4gPiBvZihGdW5jdGlvbiwgNDIpKG51bGwpXG4gIC8vLiA0MlxuICAvLy5cbiAgLy8uID4gb2YoTGlzdCwgNDIpXG4gIC8vLiBDb25zKDQyLCBOaWwpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gb2YodHlwZVJlcCwgeCkge1xuICAgIHJldHVybiBBcHBsaWNhdGl2ZS5tZXRob2RzLm9mKHR5cGVSZXApKHgpO1xuICB9XG5cbiAgLy8jIGFwcGVuZCA6OiAoQXBwbGljYXRpdmUgZiwgU2VtaWdyb3VwIChmIGEpKSA9PiAoYSwgZiBhKSAtPiBmIGFcbiAgLy8uXG4gIC8vLiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYXBwZW5kaW5nIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgc2Vjb25kLlxuICAvLy5cbiAgLy8uIFRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIFtgY29uY2F0YF0oI2NvbmNhdCkgYW5kIFtgb2ZgXSgjb2YpLlxuICAvLy5cbiAgLy8uIFNlZSBhbHNvIFtgcHJlcGVuZGBdKCNwcmVwZW5kKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGFwcGVuZCgzLCBbMSwgMl0pXG4gIC8vLiBbMSwgMiwgM11cbiAgLy8uXG4gIC8vLiA+IGFwcGVuZCgzLCBDb25zKDEsIENvbnMoMiwgTmlsKSkpXG4gIC8vLiBDb25zKDEsIENvbnMoMiwgQ29ucygzLCBOaWwpKSlcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBhcHBlbmQoeCwgeHMpIHtcbiAgICByZXR1cm4gY29uY2F0KHhzLCBvZih4cy5jb25zdHJ1Y3RvciwgeCkpO1xuICB9XG5cbiAgLy8jIHByZXBlbmQgOjogKEFwcGxpY2F0aXZlIGYsIFNlbWlncm91cCAoZiBhKSkgPT4gKGEsIGYgYSkgLT4gZiBhXG4gIC8vLlxuICAvLy4gUmV0dXJucyB0aGUgcmVzdWx0IG9mIHByZXBlbmRpbmcgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2Bjb25jYXRgXSgjY29uY2F0KSBhbmQgW2BvZmBdKCNvZikuXG4gIC8vLlxuICAvLy4gU2VlIGFsc28gW2BhcHBlbmRgXSgjYXBwZW5kKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IHByZXBlbmQoMSwgWzIsIDNdKVxuICAvLy4gWzEsIDIsIDNdXG4gIC8vLlxuICAvLy4gPiBwcmVwZW5kKDEsIENvbnMoMiwgQ29ucygzLCBOaWwpKSlcbiAgLy8uIENvbnMoMSwgQ29ucygyLCBDb25zKDMsIE5pbCkpKVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIHByZXBlbmQoeCwgeHMpIHtcbiAgICByZXR1cm4gY29uY2F0KG9mKHhzLmNvbnN0cnVjdG9yLCB4KSwgeHMpO1xuICB9XG5cbiAgLy8jIGNoYWluIDo6IENoYWluIG0gPT4gKGEgLT4gbSBiLCBtIGEpIC0+IG0gYlxuICAvLy5cbiAgLy8uIEZ1bmN0aW9uIHdyYXBwZXIgZm9yIFtgZmFudGFzeS1sYW5kL2NoYWluYF1bXS5cbiAgLy8uXG4gIC8vLiBgZmFudGFzeS1sYW5kL2NoYWluYCBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGZvciB0aGUgZm9sbG93aW5nXG4gIC8vLiBidWlsdC1pbiB0eXBlczogQXJyYXkgYW5kIEZ1bmN0aW9uLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gY2hhaW4oeCA9PiBbeCwgeF0sIFsxLCAyLCAzXSlcbiAgLy8uIFsxLCAxLCAyLCAyLCAzLCAzXVxuICAvLy5cbiAgLy8uID4gY2hhaW4oeCA9PiB4ICUgMiA9PSAxID8gb2YoTGlzdCwgeCkgOiBOaWwsIENvbnMoMSwgQ29ucygyLCBDb25zKDMsIE5pbCkpKSlcbiAgLy8uIENvbnMoMSwgQ29ucygzLCBOaWwpKVxuICAvLy5cbiAgLy8uID4gY2hhaW4obiA9PiBzID0+IHMuc2xpY2UoMCwgbiksIHMgPT4gTWF0aC5jZWlsKHMubGVuZ3RoIC8gMikpKCdIYXNrZWxsJylcbiAgLy8uICdIYXNrJ1xuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGNoYWluKGYsIGNoYWluXykge1xuICAgIHJldHVybiBDaGFpbi5tZXRob2RzLmNoYWluKGNoYWluXykoZik7XG4gIH1cblxuICAvLyMgam9pbiA6OiBDaGFpbiBtID0+IG0gKG0gYSkgLT4gbSBhXG4gIC8vLlxuICAvLy4gUmVtb3ZlcyBvbmUgbGV2ZWwgb2YgbmVzdGluZyBmcm9tIGEgbmVzdGVkIG1vbmFkaWMgc3RydWN0dXJlLlxuICAvLy5cbiAgLy8uIFRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIFtgY2hhaW5gXSgjY2hhaW4pLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gam9pbihbWzFdLCBbMl0sIFszXV0pXG4gIC8vLiBbMSwgMiwgM11cbiAgLy8uXG4gIC8vLiA+IGpvaW4oW1tbMSwgMiwgM11dXSlcbiAgLy8uIFtbMSwgMiwgM11dXG4gIC8vLlxuICAvLy4gPiBqb2luKElkZW50aXR5KElkZW50aXR5KDEpKSlcbiAgLy8uIElkZW50aXR5KDEpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gam9pbihjaGFpbl8pIHtcbiAgICByZXR1cm4gY2hhaW4oaWRlbnRpdHksIGNoYWluXyk7XG4gIH1cblxuICAvLyMgY2hhaW5SZWMgOjogQ2hhaW5SZWMgbSA9PiAoVHlwZVJlcCBtLCAoYSAtPiBjLCBiIC0+IGMsIGEpIC0+IG0gYywgYSkgLT4gbSBiXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvY2hhaW5SZWNgXVtdLlxuICAvLy5cbiAgLy8uIGBmYW50YXN5LWxhbmQvY2hhaW5SZWNgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBBcnJheS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGNoYWluUmVjKFxuICAvLy4gLiAgIEFycmF5LFxuICAvLy4gLiAgIChuZXh0LCBkb25lLCBzKSA9PiBzLmxlbmd0aCA9PSAyID8gW3MgKyAnIScsIHMgKyAnPyddLm1hcChkb25lKVxuICAvLy4gLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW3MgKyAnbycsIHMgKyAnbiddLm1hcChuZXh0KSxcbiAgLy8uIC4gICAnJ1xuICAvLy4gLiApXG4gIC8vLiBbJ29vIScsICdvbz8nLCAnb24hJywgJ29uPycsICdubyEnLCAnbm8/JywgJ25uIScsICdubj8nXVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGNoYWluUmVjKHR5cGVSZXAsIGYsIHgpIHtcbiAgICByZXR1cm4gQ2hhaW5SZWMubWV0aG9kcy5jaGFpblJlYyh0eXBlUmVwKShmLCB4KTtcbiAgfVxuXG4gIC8vIyBhbHQgOjogQWx0IGYgPT4gKGYgYSwgZiBhKSAtPiBmIGFcbiAgLy8uXG4gIC8vLiBGdW5jdGlvbiB3cmFwcGVyIGZvciBbYGZhbnRhc3ktbGFuZC9hbHRgXVtdLlxuICAvLy5cbiAgLy8uIGBmYW50YXN5LWxhbmQvYWx0YCBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGZvciB0aGUgZm9sbG93aW5nXG4gIC8vLiBidWlsdC1pbiB0eXBlczogQXJyYXkgYW5kIE9iamVjdC5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGFsdChbMSwgMiwgM10sIFs0LCA1LCA2XSlcbiAgLy8uIFsxLCAyLCAzLCA0LCA1LCA2XVxuICAvLy5cbiAgLy8uID4gYWx0KE5vdGhpbmcsIE5vdGhpbmcpXG4gIC8vLiBOb3RoaW5nXG4gIC8vLlxuICAvLy4gPiBhbHQoTm90aGluZywgSnVzdCgxKSlcbiAgLy8uIEp1c3QoMSlcbiAgLy8uXG4gIC8vLiA+IGFsdChKdXN0KDIpLCBKdXN0KDMpKVxuICAvLy4gSnVzdCgyKVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGFsdCh4LCB5KSB7XG4gICAgcmV0dXJuIEFsdC5tZXRob2RzLmFsdCh4KSh5KTtcbiAgfVxuXG4gIC8vIyB6ZXJvIDo6IFBsdXMgZiA9PiBUeXBlUmVwIGYgLT4gZiBhXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvemVyb2BdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC96ZXJvYCBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGZvciB0aGUgZm9sbG93aW5nXG4gIC8vLiBidWlsdC1pbiB0eXBlczogQXJyYXkgYW5kIE9iamVjdC5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IHplcm8oQXJyYXkpXG4gIC8vLiBbXVxuICAvLy5cbiAgLy8uID4gemVybyhPYmplY3QpXG4gIC8vLiB7fVxuICAvLy5cbiAgLy8uID4gemVybyhNYXliZSlcbiAgLy8uIE5vdGhpbmdcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiB6ZXJvKHR5cGVSZXApIHtcbiAgICByZXR1cm4gUGx1cy5tZXRob2RzLnplcm8odHlwZVJlcCkoKTtcbiAgfVxuXG4gIC8vIyByZWR1Y2UgOjogRm9sZGFibGUgZiA9PiAoKGIsIGEpIC0+IGIsIGIsIGYgYSkgLT4gYlxuICAvLy5cbiAgLy8uIEZ1bmN0aW9uIHdyYXBwZXIgZm9yIFtgZmFudGFzeS1sYW5kL3JlZHVjZWBdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9yZWR1Y2VgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBBcnJheSBhbmQgT2JqZWN0LlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gcmVkdWNlKCh4cywgeCkgPT4gW3hdLmNvbmNhdCh4cyksIFtdLCBbMSwgMiwgM10pXG4gIC8vLiBbMywgMiwgMV1cbiAgLy8uXG4gIC8vLiA+IHJlZHVjZShjb25jYXQsICcnLCBDb25zKCdmb28nLCBDb25zKCdiYXInLCBDb25zKCdiYXonLCBOaWwpKSkpXG4gIC8vLiAnZm9vYmFyYmF6J1xuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIHJlZHVjZShmLCB4LCBmb2xkYWJsZSkge1xuICAgIHJldHVybiBGb2xkYWJsZS5tZXRob2RzLnJlZHVjZShmb2xkYWJsZSkoZiwgeCk7XG4gIH1cblxuICAvLyMgc2l6ZSA6OiBGb2xkYWJsZSBmID0+IGYgYSAtPiBJbnRlZ2VyXG4gIC8vLlxuICAvLy4gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBzdHJ1Y3R1cmUuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2ByZWR1Y2VgXSgjcmVkdWNlKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IHNpemUoW10pXG4gIC8vLiAwXG4gIC8vLlxuICAvLy4gPiBzaXplKFsnZm9vJywgJ2JhcicsICdiYXonXSlcbiAgLy8uIDNcbiAgLy8uXG4gIC8vLiA+IHNpemUoTmlsKVxuICAvLy4gMFxuICAvLy5cbiAgLy8uID4gc2l6ZShDb25zKCdmb28nLCBDb25zKCdiYXInLCBDb25zKCdiYXonLCBOaWwpKSkpXG4gIC8vLiAzXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gc2l6ZShmb2xkYWJsZSkge1xuICAgIC8vICBGYXN0IHBhdGggZm9yIGFycmF5cy5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb2xkYWJsZSkpIHJldHVybiBmb2xkYWJsZS5sZW5ndGg7XG4gICAgcmV0dXJuIHJlZHVjZShmdW5jdGlvbihuLCBfKSB7IHJldHVybiBuICsgMTsgfSwgMCwgZm9sZGFibGUpO1xuICB9XG5cbiAgLy8jIGVsZW0gOjogKFNldG9pZCBhLCBGb2xkYWJsZSBmKSA9PiAoYSwgZiBhKSAtPiBCb29sZWFuXG4gIC8vLlxuICAvLy4gVGFrZXMgYSB2YWx1ZSBhbmQgYSBzdHJ1Y3R1cmUgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZVxuICAvLy4gdmFsdWUgaXMgYW4gZWxlbWVudCBvZiB0aGUgc3RydWN0dXJlOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAgLy8uXG4gIC8vLiBUaGlzIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBbYGVxdWFsc2BdKCNlcXVhbHMpIGFuZFxuICAvLy4gW2ByZWR1Y2VgXSgjcmVkdWNlKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGVsZW0oJ2MnLCBbJ2EnLCAnYicsICdjJ10pXG4gIC8vLiB0cnVlXG4gIC8vLlxuICAvLy4gPiBlbGVtKCd4JywgWydhJywgJ2InLCAnYyddKVxuICAvLy4gZmFsc2VcbiAgLy8uXG4gIC8vLiA+IGVsZW0oMywge3g6IDEsIHk6IDIsIHo6IDN9KVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gZWxlbSg4LCB7eDogMSwgeTogMiwgejogM30pXG4gIC8vLiBmYWxzZVxuICAvLy5cbiAgLy8uID4gZWxlbSgwLCBKdXN0KDApKVxuICAvLy4gdHJ1ZVxuICAvLy5cbiAgLy8uID4gZWxlbSgwLCBKdXN0KDEpKVxuICAvLy4gZmFsc2VcbiAgLy8uXG4gIC8vLiA+IGVsZW0oMCwgTm90aGluZylcbiAgLy8uIGZhbHNlXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gZWxlbSh4LCBmb2xkYWJsZSkge1xuICAgIHJldHVybiByZWR1Y2UoZnVuY3Rpb24oYiwgeSkgeyByZXR1cm4gYiB8fCBlcXVhbHMoeCwgeSk7IH0sXG4gICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGZvbGRhYmxlKTtcbiAgfVxuXG4gIC8vIyBmb2xkTWFwIDo6IChNb25vaWQgbSwgRm9sZGFibGUgZikgPT4gKFR5cGVSZXAgbSwgYSAtPiBtLCBmIGEpIC0+IG1cbiAgLy8uXG4gIC8vLiBEZWNvbnN0cnVjdHMgYSBmb2xkYWJsZSBieSBtYXBwaW5nIGV2ZXJ5IGVsZW1lbnQgdG8gYSBtb25vaWQgYW5kXG4gIC8vLiBjb25jYXRlbmF0aW5nIHRoZSByZXN1bHRzLlxuICAvLy5cbiAgLy8uIFRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIFtgY29uY2F0YF0oI2NvbmNhdCksIFtgZW1wdHlgXSgjZW1wdHkpLFxuICAvLy4gYW5kIFtgcmVkdWNlYF0oI3JlZHVjZSkuXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBmb2xkTWFwKFN0cmluZywgZiA9PiBmLm5hbWUsIFtNYXRoLnNpbiwgTWF0aC5jb3MsIE1hdGgudGFuXSlcbiAgLy8uICdzaW5jb3N0YW4nXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gZm9sZE1hcCh0eXBlUmVwLCBmLCBmb2xkYWJsZSkge1xuICAgIHJldHVybiByZWR1Y2UoZnVuY3Rpb24obW9ub2lkLCB4KSB7IHJldHVybiBjb25jYXQobW9ub2lkLCBmKHgpKTsgfSxcbiAgICAgICAgICAgICAgICAgIGVtcHR5KHR5cGVSZXApLFxuICAgICAgICAgICAgICAgICAgZm9sZGFibGUpO1xuICB9XG5cbiAgLy8jIHJldmVyc2UgOjogKEFwcGxpY2F0aXZlIGYsIEZvbGRhYmxlIGYsIE1vbm9pZCAoZiBhKSkgPT4gZiBhIC0+IGYgYVxuICAvLy5cbiAgLy8uIFJldmVyc2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gc3RydWN0dXJlLlxuICAvLy5cbiAgLy8uIFRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIFtgY29uY2F0YF0oI2NvbmNhdCksIFtgZW1wdHlgXSgjZW1wdHkpLFxuICAvLy4gW2BvZmBdKCNvZiksIGFuZCBbYHJlZHVjZWBdKCNyZWR1Y2UpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gcmV2ZXJzZShbMSwgMiwgM10pXG4gIC8vLiBbMywgMiwgMV1cbiAgLy8uXG4gIC8vLiA+IHJldmVyc2UoQ29ucygxLCBDb25zKDIsIENvbnMoMywgTmlsKSkpKVxuICAvLy4gQ29ucygzLCBDb25zKDIsIENvbnMoMSwgTmlsKSkpXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gcmV2ZXJzZShmb2xkYWJsZSkge1xuICAgIC8vICBGYXN0IHBhdGggZm9yIGFycmF5cy5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb2xkYWJsZSkpIHJldHVybiBmb2xkYWJsZS5zbGljZSgpLnJldmVyc2UoKTtcbiAgICB2YXIgRiA9IGZvbGRhYmxlLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiByZWR1Y2UoZnVuY3Rpb24oeHMsIHgpIHsgcmV0dXJuIGNvbmNhdChvZihGLCB4KSwgeHMpOyB9LFxuICAgICAgICAgICAgICAgICAgZW1wdHkoRiksXG4gICAgICAgICAgICAgICAgICBmb2xkYWJsZSk7XG4gIH1cblxuICAvLyMgc29ydCA6OiAoT3JkIGEsIEFwcGxpY2F0aXZlIGYsIEZvbGRhYmxlIGYsIE1vbm9pZCAoZiBhKSkgPT4gZiBhIC0+IGYgYVxuICAvLy5cbiAgLy8uIFBlcmZvcm1zIGEgW3N0YWJsZSBzb3J0XVtdIG9mIHRoZSBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gc3RydWN0dXJlLFxuICAvLy4gdXNpbmcgW2BsdGVgXSgjbHRlKSBmb3IgY29tcGFyaXNvbnMuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2BsdGVgXSgjbHRlKSwgW2Bjb25jYXRgXSgjY29uY2F0KSxcbiAgLy8uIFtgZW1wdHlgXSgjZW1wdHkpLCBbYG9mYF0oI29mKSwgYW5kIFtgcmVkdWNlYF0oI3JlZHVjZSkuXG4gIC8vLlxuICAvLy4gU2VlIGFsc28gW2Bzb3J0QnlgXSgjc29ydEJ5KS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IHNvcnQoWydmb28nLCAnYmFyJywgJ2JheiddKVxuICAvLy4gWydiYXInLCAnYmF6JywgJ2ZvbyddXG4gIC8vLlxuICAvLy4gPiBzb3J0KFtKdXN0KDIpLCBOb3RoaW5nLCBKdXN0KDEpXSlcbiAgLy8uIFtOb3RoaW5nLCBKdXN0KDEpLCBKdXN0KDIpXVxuICAvLy5cbiAgLy8uID4gc29ydChDb25zKCdmb28nLCBDb25zKCdiYXInLCBDb25zKCdiYXonLCBOaWwpKSkpXG4gIC8vLiBDb25zKCdiYXInLCBDb25zKCdiYXonLCBDb25zKCdmb28nLCBOaWwpKSlcbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBzb3J0KGZvbGRhYmxlKSB7XG4gICAgcmV0dXJuIHNvcnRCeShpZGVudGl0eSwgZm9sZGFibGUpO1xuICB9XG5cbiAgLy8jIHNvcnRCeSA6OiAoT3JkIGIsIEFwcGxpY2F0aXZlIGYsIEZvbGRhYmxlIGYsIE1vbm9pZCAoZiBhKSkgPT4gKGEgLT4gYiwgZiBhKSAtPiBmIGFcbiAgLy8uXG4gIC8vLiBQZXJmb3JtcyBhIFtzdGFibGUgc29ydF1bXSBvZiB0aGUgZWxlbWVudHMgb2YgdGhlIGdpdmVuIHN0cnVjdHVyZSxcbiAgLy8uIHVzaW5nIFtgbHRlYF0oI2x0ZSkgdG8gY29tcGFyZSB0aGUgdmFsdWVzIHByb2R1Y2VkIGJ5IGFwcGx5aW5nIHRoZVxuICAvLy4gZ2l2ZW4gZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBzdHJ1Y3R1cmUuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2BsdGVgXSgjbHRlKSwgW2Bjb25jYXRgXSgjY29uY2F0KSxcbiAgLy8uIFtgZW1wdHlgXSgjZW1wdHkpLCBbYG9mYF0oI29mKSwgYW5kIFtgcmVkdWNlYF0oI3JlZHVjZSkuXG4gIC8vLlxuICAvLy4gU2VlIGFsc28gW2Bzb3J0YF0oI3NvcnQpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gc29ydEJ5KHMgPT4gcy5sZW5ndGgsIFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSlcbiAgLy8uIFsncmVkJywgJ2JsdWUnLCAnZ3JlZW4nXVxuICAvLy5cbiAgLy8uID4gc29ydEJ5KHMgPT4gcy5sZW5ndGgsIFsnYmxhY2snLCAnd2hpdGUnXSlcbiAgLy8uIFsnYmxhY2snLCAnd2hpdGUnXVxuICAvLy5cbiAgLy8uID4gc29ydEJ5KHMgPT4gcy5sZW5ndGgsIFsnd2hpdGUnLCAnYmxhY2snXSlcbiAgLy8uIFsnd2hpdGUnLCAnYmxhY2snXVxuICAvLy5cbiAgLy8uID4gc29ydEJ5KHMgPT4gcy5sZW5ndGgsIENvbnMoJ3JlZCcsIENvbnMoJ2dyZWVuJywgQ29ucygnYmx1ZScsIE5pbCkpKSlcbiAgLy8uIENvbnMoJ3JlZCcsIENvbnMoJ2JsdWUnLCBDb25zKCdncmVlbicsIE5pbCkpKVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIHNvcnRCeShmLCBmb2xkYWJsZSkge1xuICAgIHZhciBycyA9IHJlZHVjZShmdW5jdGlvbihycywgeCkge1xuICAgICAgcnMucHVzaCh7aWR4OiBycy5sZW5ndGgsIHg6IHgsIGZ4OiBmKHgpfSk7XG4gICAgICByZXR1cm4gcnM7XG4gICAgfSwgW10sIGZvbGRhYmxlKTtcblxuICAgIHZhciBsdGVfID0gKGZ1bmN0aW9uKHIpIHtcbiAgICAgIHN3aXRjaCAodHlwZW9mIChyICYmIHIuZngpKSB7XG4gICAgICAgIGNhc2UgJ251bWJlcic6ICByZXR1cm4gZnVuY3Rpb24oeCwgeSkgeyByZXR1cm4geCA8PSB5IHx8IHggIT09IHg7IH07XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6ICByZXR1cm4gZnVuY3Rpb24oeCwgeSkgeyByZXR1cm4geCA8PSB5OyB9O1xuICAgICAgICBkZWZhdWx0OiAgICAgICAgcmV0dXJuIGx0ZTtcbiAgICAgIH1cbiAgICB9KHJzWzBdKSk7XG5cbiAgICBycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBsdGVfKGEuZngsIGIuZngpID8gbHRlXyhiLmZ4LCBhLmZ4KSA/IGEuaWR4IC0gYi5pZHggOiAtMSA6IDE7XG4gICAgfSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb2xkYWJsZSkpIHtcbiAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHJzLmxlbmd0aDsgaWR4ICs9IDEpIHJzW2lkeF0gPSByc1tpZHhdLng7XG4gICAgICByZXR1cm4gcnM7XG4gICAgfVxuXG4gICAgdmFyIEYgPSBmb2xkYWJsZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgcmVzdWx0ID0gZW1wdHkoRik7XG4gICAgZm9yIChpZHggPSAwOyBpZHggPCBycy5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgICByZXN1bHQgPSBjb25jYXQocmVzdWx0LCBvZihGLCByc1tpZHhdLngpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIyB0cmF2ZXJzZSA6OiAoQXBwbGljYXRpdmUgZiwgVHJhdmVyc2FibGUgdCkgPT4gKFR5cGVSZXAgZiwgYSAtPiBmIGIsIHQgYSkgLT4gZiAodCBiKVxuICAvLy5cbiAgLy8uIEZ1bmN0aW9uIHdyYXBwZXIgZm9yIFtgZmFudGFzeS1sYW5kL3RyYXZlcnNlYF1bXS5cbiAgLy8uXG4gIC8vLiBgZmFudGFzeS1sYW5kL3RyYXZlcnNlYCBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGZvciB0aGUgZm9sbG93aW5nXG4gIC8vLiBidWlsdC1pbiB0eXBlczogQXJyYXkgYW5kIE9iamVjdC5cbiAgLy8uXG4gIC8vLiBTZWUgYWxzbyBbYHNlcXVlbmNlYF0oI3NlcXVlbmNlKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IHRyYXZlcnNlKEFycmF5LCB4ID0+IHgsIFtbMSwgMiwgM10sIFs0LCA1XV0pXG4gIC8vLiBbWzEsIDRdLCBbMSwgNV0sIFsyLCA0XSwgWzIsIDVdLCBbMywgNF0sIFszLCA1XV1cbiAgLy8uXG4gIC8vLiA+IHRyYXZlcnNlKElkZW50aXR5LCB4ID0+IElkZW50aXR5KHggKyAxKSwgWzEsIDIsIDNdKVxuICAvLy4gSWRlbnRpdHkoWzIsIDMsIDRdKVxuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIHRyYXZlcnNlKHR5cGVSZXAsIGYsIHRyYXZlcnNhYmxlKSB7XG4gICAgcmV0dXJuIFRyYXZlcnNhYmxlLm1ldGhvZHMudHJhdmVyc2UodHJhdmVyc2FibGUpKHR5cGVSZXAsIGYpO1xuICB9XG5cbiAgLy8jIHNlcXVlbmNlIDo6IChBcHBsaWNhdGl2ZSBmLCBUcmF2ZXJzYWJsZSB0KSA9PiAoVHlwZVJlcCBmLCB0IChmIGEpKSAtPiBmICh0IGEpXG4gIC8vLlxuICAvLy4gSW52ZXJ0cyB0aGUgZ2l2ZW4gYHQgKGYgYSlgIHRvIHByb2R1Y2UgYW4gYGYgKHQgYSlgLlxuICAvLy5cbiAgLy8uIFRoaXMgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIFtgdHJhdmVyc2VgXSgjdHJhdmVyc2UpLlxuICAvLy5cbiAgLy8uIGBgYGphdmFzY3JpcHRcbiAgLy8uID4gc2VxdWVuY2UoQXJyYXksIElkZW50aXR5KFsxLCAyLCAzXSkpXG4gIC8vLiBbSWRlbnRpdHkoMSksIElkZW50aXR5KDIpLCBJZGVudGl0eSgzKV1cbiAgLy8uXG4gIC8vLiA+IHNlcXVlbmNlKElkZW50aXR5LCBbSWRlbnRpdHkoMSksIElkZW50aXR5KDIpLCBJZGVudGl0eSgzKV0pXG4gIC8vLiBJZGVudGl0eShbMSwgMiwgM10pXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gc2VxdWVuY2UodHlwZVJlcCwgdHJhdmVyc2FibGUpIHtcbiAgICByZXR1cm4gdHJhdmVyc2UodHlwZVJlcCwgaWRlbnRpdHksIHRyYXZlcnNhYmxlKTtcbiAgfVxuXG4gIC8vIyBleHRlbmQgOjogRXh0ZW5kIHcgPT4gKHcgYSAtPiBiLCB3IGEpIC0+IHcgYlxuICAvLy5cbiAgLy8uIEZ1bmN0aW9uIHdyYXBwZXIgZm9yIFtgZmFudGFzeS1sYW5kL2V4dGVuZGBdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9leHRlbmRgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBBcnJheSBhbmQgRnVuY3Rpb24uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBleHRlbmQoc3MgPT4gc3Muam9pbignJyksIFsneCcsICd5JywgJ3onXSlcbiAgLy8uIFsneHl6JywgJ3l6JywgJ3onXVxuICAvLy5cbiAgLy8uID4gZXh0ZW5kKGYgPT4gZihbMywgNF0pLCByZXZlcnNlKShbMSwgMl0pXG4gIC8vLiBbNCwgMywgMiwgMV1cbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBleHRlbmQoZiwgZXh0ZW5kXykge1xuICAgIHJldHVybiBFeHRlbmQubWV0aG9kcy5leHRlbmQoZXh0ZW5kXykoZik7XG4gIH1cblxuICAvLyMgZHVwbGljYXRlIDo6IEV4dGVuZCB3ID0+IHcgYSAtPiB3ICh3IGEpXG4gIC8vLlxuICAvLy4gQWRkcyBvbmUgbGV2ZWwgb2YgbmVzdGluZyB0byBhIGNvbW9uYWRpYyBzdHJ1Y3R1cmUuXG4gIC8vLlxuICAvLy4gVGhpcyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gW2BleHRlbmRgXSgjZXh0ZW5kKS5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGR1cGxpY2F0ZShJZGVudGl0eSgxKSlcbiAgLy8uIElkZW50aXR5KElkZW50aXR5KDEpKVxuICAvLy5cbiAgLy8uID4gZHVwbGljYXRlKFsxXSlcbiAgLy8uIFtbMV1dXG4gIC8vLlxuICAvLy4gPiBkdXBsaWNhdGUoWzEsIDIsIDNdKVxuICAvLy4gW1sxLCAyLCAzXSwgWzIsIDNdLCBbM11dXG4gIC8vLlxuICAvLy4gPiBkdXBsaWNhdGUocmV2ZXJzZSkoWzEsIDJdKShbMywgNF0pXG4gIC8vLiBbNCwgMywgMiwgMV1cbiAgLy8uIGBgYFxuICBmdW5jdGlvbiBkdXBsaWNhdGUoZXh0ZW5kXykge1xuICAgIHJldHVybiBleHRlbmQoaWRlbnRpdHksIGV4dGVuZF8pO1xuICB9XG5cbiAgLy8jIGV4dHJhY3QgOjogQ29tb25hZCB3ID0+IHcgYSAtPiBhXG4gIC8vLlxuICAvLy4gRnVuY3Rpb24gd3JhcHBlciBmb3IgW2BmYW50YXN5LWxhbmQvZXh0cmFjdGBdW10uXG4gIC8vLlxuICAvLy4gYGBgamF2YXNjcmlwdFxuICAvLy4gPiBleHRyYWN0KElkZW50aXR5KDQyKSlcbiAgLy8uIDQyXG4gIC8vLiBgYGBcbiAgZnVuY3Rpb24gZXh0cmFjdChjb21vbmFkKSB7XG4gICAgcmV0dXJuIENvbW9uYWQubWV0aG9kcy5leHRyYWN0KGNvbW9uYWQpKCk7XG4gIH1cblxuICAvLyMgY29udHJhbWFwIDo6IENvbnRyYXZhcmlhbnQgZiA9PiAoYiAtPiBhLCBmIGEpIC0+IGYgYlxuICAvLy5cbiAgLy8uIEZ1bmN0aW9uIHdyYXBwZXIgZm9yIFtgZmFudGFzeS1sYW5kL2NvbnRyYW1hcGBdW10uXG4gIC8vLlxuICAvLy4gYGZhbnRhc3ktbGFuZC9jb250cmFtYXBgIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBmb2xsb3dpbmdcbiAgLy8uIGJ1aWx0LWluIHR5cGVzOiBGdW5jdGlvbi5cbiAgLy8uXG4gIC8vLiBgYGBqYXZhc2NyaXB0XG4gIC8vLiA+IGNvbnRyYW1hcChzID0+IHMubGVuZ3RoLCBNYXRoLnNxcnQpKCdTYW5jdHVhcnknKVxuICAvLy4gM1xuICAvLy4gYGBgXG4gIGZ1bmN0aW9uIGNvbnRyYW1hcChmLCBjb250cmF2YXJpYW50KSB7XG4gICAgcmV0dXJuIENvbnRyYXZhcmlhbnQubWV0aG9kcy5jb250cmFtYXAoY29udHJhdmFyaWFudCkoZik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFR5cGVDbGFzczogVHlwZUNsYXNzLFxuICAgIFNldG9pZDogU2V0b2lkLFxuICAgIE9yZDogT3JkLFxuICAgIFNlbWlncm91cG9pZDogU2VtaWdyb3Vwb2lkLFxuICAgIENhdGVnb3J5OiBDYXRlZ29yeSxcbiAgICBTZW1pZ3JvdXA6IFNlbWlncm91cCxcbiAgICBNb25vaWQ6IE1vbm9pZCxcbiAgICBHcm91cDogR3JvdXAsXG4gICAgRmlsdGVyYWJsZTogRmlsdGVyYWJsZSxcbiAgICBGdW5jdG9yOiBGdW5jdG9yLFxuICAgIEJpZnVuY3RvcjogQmlmdW5jdG9yLFxuICAgIFByb2Z1bmN0b3I6IFByb2Z1bmN0b3IsXG4gICAgQXBwbHk6IEFwcGx5LFxuICAgIEFwcGxpY2F0aXZlOiBBcHBsaWNhdGl2ZSxcbiAgICBDaGFpbjogQ2hhaW4sXG4gICAgQ2hhaW5SZWM6IENoYWluUmVjLFxuICAgIE1vbmFkOiBNb25hZCxcbiAgICBBbHQ6IEFsdCxcbiAgICBQbHVzOiBQbHVzLFxuICAgIEFsdGVybmF0aXZlOiBBbHRlcm5hdGl2ZSxcbiAgICBGb2xkYWJsZTogRm9sZGFibGUsXG4gICAgVHJhdmVyc2FibGU6IFRyYXZlcnNhYmxlLFxuICAgIEV4dGVuZDogRXh0ZW5kLFxuICAgIENvbW9uYWQ6IENvbW9uYWQsXG4gICAgQ29udHJhdmFyaWFudDogQ29udHJhdmFyaWFudCxcbiAgICBlcXVhbHM6IGVxdWFscyxcbiAgICBsdDogbHQsXG4gICAgbHRlOiBsdGUsXG4gICAgZ3Q6IGd0LFxuICAgIGd0ZTogZ3RlLFxuICAgIG1pbjogbWluLFxuICAgIG1heDogbWF4LFxuICAgIGNvbXBvc2U6IGNvbXBvc2UsXG4gICAgaWQ6IGlkLFxuICAgIGNvbmNhdDogY29uY2F0LFxuICAgIGVtcHR5OiBlbXB0eSxcbiAgICBpbnZlcnQ6IGludmVydCxcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICByZWplY3Q6IHJlamVjdCxcbiAgICBtYXA6IG1hcCxcbiAgICBmbGlwOiBmbGlwLFxuICAgIGJpbWFwOiBiaW1hcCxcbiAgICBtYXBMZWZ0OiBtYXBMZWZ0LFxuICAgIHByb21hcDogcHJvbWFwLFxuICAgIGFwOiBhcCxcbiAgICBsaWZ0MjogbGlmdDIsXG4gICAgbGlmdDM6IGxpZnQzLFxuICAgIGFwRmlyc3Q6IGFwRmlyc3QsXG4gICAgYXBTZWNvbmQ6IGFwU2Vjb25kLFxuICAgIG9mOiBvZixcbiAgICBhcHBlbmQ6IGFwcGVuZCxcbiAgICBwcmVwZW5kOiBwcmVwZW5kLFxuICAgIGNoYWluOiBjaGFpbixcbiAgICBqb2luOiBqb2luLFxuICAgIGNoYWluUmVjOiBjaGFpblJlYyxcbiAgICBhbHQ6IGFsdCxcbiAgICB6ZXJvOiB6ZXJvLFxuICAgIHJlZHVjZTogcmVkdWNlLFxuICAgIHNpemU6IHNpemUsXG4gICAgZWxlbTogZWxlbSxcbiAgICBmb2xkTWFwOiBmb2xkTWFwLFxuICAgIHJldmVyc2U6IHJldmVyc2UsXG4gICAgc29ydDogc29ydCxcbiAgICBzb3J0Qnk6IHNvcnRCeSxcbiAgICB0YWtlV2hpbGU6IHRha2VXaGlsZSxcbiAgICBkcm9wV2hpbGU6IGRyb3BXaGlsZSxcbiAgICB0cmF2ZXJzZTogdHJhdmVyc2UsXG4gICAgc2VxdWVuY2U6IHNlcXVlbmNlLFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIGR1cGxpY2F0ZTogZHVwbGljYXRlLFxuICAgIGV4dHJhY3Q6IGV4dHJhY3QsXG4gICAgY29udHJhbWFwOiBjb250cmFtYXBcbiAgfTtcblxufSkpO1xuXG4vLy4gW0FsdF06ICAgICAgICAgICAgICAgICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2FsdFxuLy8uIFtBbHRlcm5hdGl2ZV06ICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhbHRlcm5hdGl2ZVxuLy8uIFtBcHBsaWNhdGl2ZV06ICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcHBsaWNhdGl2ZVxuLy8uIFtBcHBseV06ICAgICAgICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcHBseVxuLy8uIFtCaWZ1bmN0b3JdOiAgICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNiaWZ1bmN0b3Jcbi8vLiBbQ2F0ZWdvcnldOiAgICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY2F0ZWdvcnlcbi8vLiBbQ2hhaW5dOiAgICAgICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY2hhaW5cbi8vLiBbQ2hhaW5SZWNdOiAgICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY2hhaW5yZWNcbi8vLiBbQ29tb25hZF06ICAgICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY29tb25hZFxuLy8uIFtDb250cmF2YXJpYW50XTogICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNjb250cmF2YXJpYW50XG4vLy4gW0V4dGVuZF06ICAgICAgICAgICAgICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2V4dGVuZFxuLy8uIFtGTF06ICAgICAgICAgICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZFxuLy8uIFtGaWx0ZXJhYmxlXTogICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNmaWx0ZXJhYmxlXG4vLy4gW0ZvbGRhYmxlXTogICAgICAgICAgICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2ZvbGRhYmxlXG4vLy4gW0Z1bmN0b3JdOiAgICAgICAgICAgICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2Z1bmN0b3Jcbi8vLiBbR3JvdXBdOiAgICAgICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjZ3JvdXBcbi8vLiBbTW9uYWRdOiAgICAgICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjbW9uYWRcbi8vLiBbTW9ub2lkXTogICAgICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjbW9ub2lkXG4vLy4gW09yZF06ICAgICAgICAgICAgICAgICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI29yZFxuLy8uIFtQbHVzXTogICAgICAgICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNwbHVzXG4vLy4gW1Byb2Z1bmN0b3JdOiAgICAgICAgICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI3Byb2Z1bmN0b3Jcbi8vLiBbU2VtaWdyb3VwXTogICAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjc2VtaWdyb3VwXG4vLy4gW1NlbWlncm91cG9pZF06ICAgICAgICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI3NlbWlncm91cG9pZFxuLy8uIFtTZXRvaWRdOiAgICAgICAgICAgICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNzZXRvaWRcbi8vLiBbVHJhdmVyc2FibGVdOiAgICAgICAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjdHJhdmVyc2FibGVcbi8vLiBbYGZhbnRhc3ktbGFuZC9hbHRgXTogICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjYWx0LW1ldGhvZFxuLy8uIFtgZmFudGFzeS1sYW5kL2FwYF06ICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcC1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9iaW1hcGBdOiAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjYmltYXAtbWV0aG9kXG4vLy4gW2BmYW50YXN5LWxhbmQvY2hhaW5gXTogICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2NoYWluLW1ldGhvZFxuLy8uIFtgZmFudGFzeS1sYW5kL2NoYWluUmVjYF06ICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNjaGFpbnJlYy1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9jb21wb3NlYF06ICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY29tcG9zZS1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9jb25jYXRgXTogICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY29uY2F0LW1ldGhvZFxuLy8uIFtgZmFudGFzeS1sYW5kL2NvbnRyYW1hcGBdOiB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNjb250cmFtYXAtbWV0aG9kXG4vLy4gW2BmYW50YXN5LWxhbmQvZW1wdHlgXTogICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2VtcHR5LW1ldGhvZFxuLy8uIFtgZmFudGFzeS1sYW5kL2VxdWFsc2BdOiAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNlcXVhbHMtbWV0aG9kXG4vLy4gW2BmYW50YXN5LWxhbmQvZXh0ZW5kYF06ICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2V4dGVuZC1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9leHRyYWN0YF06ICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjZXh0cmFjdC1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9maWx0ZXJgXTogICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjZmlsdGVyLW1ldGhvZFxuLy8uIFtgZmFudGFzeS1sYW5kL2lkYF06ICAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNpZC1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9pbnZlcnRgXTogICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjaW52ZXJ0LW1ldGhvZFxuLy8uIFtgZmFudGFzeS1sYW5kL2x0ZWBdOiAgICAgICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNsdGUtbWV0aG9kXG4vLy4gW2BmYW50YXN5LWxhbmQvbWFwYF06ICAgICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI21hcC1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9vZmBdOiAgICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjb2YtbWV0aG9kXG4vLy4gW2BmYW50YXN5LWxhbmQvcHJvbWFwYF06ICAgIHY6ZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI3Byb21hcC1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC9yZWR1Y2VgXTogICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjcmVkdWNlLW1ldGhvZFxuLy8uIFtgZmFudGFzeS1sYW5kL3RyYXZlcnNlYF06ICB2OmZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCN0cmF2ZXJzZS1tZXRob2Rcbi8vLiBbYGZhbnRhc3ktbGFuZC96ZXJvYF06ICAgICAgdjpmYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjemVyby1tZXRob2Rcbi8vLiBbc3RhYmxlIHNvcnRdOiAgICAgICAgICAgICAgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU29ydGluZ19hbGdvcml0aG0jU3RhYmlsaXR5XG4vLy4gW3R5cGUtY2xhc3Nlc106ICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW5jdHVhcnktanMvc2FuY3R1YXJ5LWRlZiN0eXBlLWNsYXNzZXNcbiIsIi8qXG4gICAgICAgIEBAQEBAQEAgICAgICAgICAgICBAQEBAQEBAICAgICAgICAgQEBcbiAgICAgIEBAICAgICAgIEBAICAgICAgICBAQCAgICAgICBAQCAgICAgIEBAQFxuICAgIEBAICAgQEBAIEBAICBAQCAgICBAQCAgIEBAQCBAQCAgQEAgICBAQEBAQEAgQEAgICBAQEAgIEBAIEBAQCAgICAgIEBAQEBcbiAgIEBAICBAQCAgIEBAQCAgIEBAICBAQCAgQEAgICBAQEAgICBAQCAgIEBAQCAgIEBAICAgQEBAICBAQEAgICBAQCAgQEBAICAgQEBcbiAgIEBAICBAQCAgIEBAQCAgIEBAICBAQCAgQEAgICBAQEAgICBAQCAgIEBAQCAgIEBAICAgQEBAICBAQEAgICBAQCAgQEBAQEBAQEBcbiAgIEBAICBAQCAgIEBAQCAgQEAgICBAQCAgQEAgICBAQEAgIEBAICAgIEBAQCAgIEBAICAgQEBAICBAQEAgICBAQCAgQEBAXG4gICAgQEAgICBAQEAgQEBAQEAgICAgIEBAICAgQEBAIEBAQEBAICAgICAgQEBAICAgIEBAQCBAQCAgQEBAQEBAICAgICAgQEBAQEBcbiAgICAgIEBAICAgICAgICAgICAgICAgICBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAICBAQFxuICAgICAgICBAQEBAQEBAICAgICAgICAgICAgQEBAQEBAQCAgICAgICAgICAgICAgIEBAQEBAICAgIEBAXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8vLiAjIHNhbmN0dWFyeS10eXBlLWlkZW50aWZpZXJzXG4vLy5cbi8vLiBBIHR5cGUgaXMgYSBzZXQgb2YgdmFsdWVzLiBCb29sZWFuLCBmb3IgZXhhbXBsZSwgaXMgdGhlIHR5cGUgY29tcHJpc2luZ1xuLy8uIGB0cnVlYCBhbmQgYGZhbHNlYC4gQSB2YWx1ZSBtYXkgYmUgYSBtZW1iZXIgb2YgbXVsdGlwbGUgdHlwZXMgKGA0MmAgaXMgYVxuLy8uIG1lbWJlciBvZiBOdW1iZXIsIFBvc2l0aXZlTnVtYmVyLCBJbnRlZ2VyLCBhbmQgbWFueSBvdGhlciB0eXBlcykuXG4vLy5cbi8vLiBJbiBjZXJ0YWluIHNpdHVhdGlvbnMgaXQgaXMgdXNlZnVsIHRvIGRpdmlkZSBKYXZhU2NyaXB0IHZhbHVlcyBpbnRvXG4vLy4gbm9uLW92ZXJsYXBwaW5nIHR5cGVzLiBUaGUgbGFuZ3VhZ2UgcHJvdmlkZXMgdHdvIGNvbnN0cnVjdHMgZm9yIHRoaXNcbi8vLiBwdXJwb3NlOiB0aGUgW2B0eXBlb2ZgXVsxXSBvcGVyYXRvciBhbmQgW2BPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYF1bMl0uXG4vLy4gRWFjaCBoYXMgcHJvcyBhbmQgY29ucywgYnV0IG5laXRoZXIgc3VwcG9ydHMgdXNlci1kZWZpbmVkIHR5cGVzLlxuLy8uXG4vLy4gVGhpcyBwYWNrYWdlIHNwZWNpZmllcyBhbiBbYWxnb3JpdGhtXVszXSBmb3IgZGVyaXZpbmcgYSBfdHlwZSBpZGVudGlmaWVyX1xuLy8uIGZyb20gYW55IEphdmFTY3JpcHQgdmFsdWUsIGFuZCBleHBvcnRzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBhbGdvcml0aG0uXG4vLy4gQXV0aG9ycyBvZiBhbGdlYnJhaWMgZGF0YSB0eXBlcyBtYXkgZm9sbG93IHRoaXMgc3BlY2lmaWNhdGlvbiBpbiBvcmRlciB0b1xuLy8uIG1ha2UgdGhlaXIgZGF0YSB0eXBlcyBjb21wYXRpYmxlIHdpdGggdGhlIGFsZ29yaXRobS5cbi8vLlxuLy8uICMjIyBBbGdvcml0aG1cbi8vLlxuLy8uIDEuICBUYWtlIGFueSBKYXZhU2NyaXB0IHZhbHVlIGB4YC5cbi8vLlxuLy8uIDIuICBJZiBgeGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBnbyB0byBzdGVwIDYuXG4vLy5cbi8vLiAzLiAgSWYgYHguY29uc3RydWN0b3JgIGV2YWx1YXRlcyB0byBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIGdvIHRvIHN0ZXAgNi5cbi8vLlxuLy8uIDQuICBJZiBgeC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHhgLCBnbyB0byBzdGVwIDYuIFRoaXMgY2hlY2sgcHJldmVudHMgYVxuLy8uICAgICBwcm90b3R5cGUgb2JqZWN0IGZyb20gYmVpbmcgY29uc2lkZXJlZCBhIG1lbWJlciBvZiBpdHMgYXNzb2NpYXRlZCB0eXBlLlxuLy8uXG4vLy4gNS4gIElmIGB0eXBlb2YgeC5jb25zdHJ1Y3RvclsnQEB0eXBlJ11gIGV2YWx1YXRlcyB0byBgJ3N0cmluZydgLCByZXR1cm5cbi8vLiAgICAgdGhlIHZhbHVlIG9mIGB4LmNvbnN0cnVjdG9yWydAQHR5cGUnXWAuXG4vLy5cbi8vLiA2LiAgUmV0dXJuIHRoZSBbYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXVsyXSByZXByZXNlbnRhdGlvbiBvZiBgeGBcbi8vLiAgICAgd2l0aG91dCB0aGUgbGVhZGluZyBgJ1tvYmplY3QgJ2AgYW5kIHRyYWlsaW5nIGAnXSdgLlxuLy8uXG4vLy4gIyMjIENvbXBhdGliaWxpdHlcbi8vLlxuLy8uIEZvciBhbiBhbGdlYnJhaWMgZGF0YSB0eXBlIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGUgW2FsZ29yaXRobV1bM106XG4vLy5cbi8vLiAgIC0gZXZlcnkgbWVtYmVyIG9mIHRoZSB0eXBlIG11c3QgaGF2ZSBhIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgcG9pbnRpbmdcbi8vLiAgICAgdG8gYW4gb2JqZWN0IGtub3duIGFzIHRoZSBfdHlwZSByZXByZXNlbnRhdGl2ZV87XG4vLy5cbi8vLiAgIC0gdGhlIHR5cGUgcmVwcmVzZW50YXRpdmUgbXVzdCBoYXZlIGEgYEBAdHlwZWAgcHJvcGVydHk7IGFuZFxuLy8uXG4vLy4gICAtIHRoZSB0eXBlIHJlcHJlc2VudGF0aXZlJ3MgYEBAdHlwZWAgcHJvcGVydHkgKHRoZSBfdHlwZSBpZGVudGlmaWVyXylcbi8vLiAgICAgbXVzdCBiZSBhIHN0cmluZyBwcmltaXRpdmUsIGlkZWFsbHkgYCc8bnBtLXBhY2thZ2UtbmFtZT4vPHR5cGUtbmFtZT4nYC5cbi8vLlxuLy8uIEZvciBleGFtcGxlOlxuLy8uXG4vLy4gYGBgamF2YXNjcmlwdFxuLy8uIC8vICBJZGVudGl0eSA6OiBhIC0+IElkZW50aXR5IGFcbi8vLiBmdW5jdGlvbiBJZGVudGl0eSh4KSB7XG4vLy4gICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSWRlbnRpdHkpKSByZXR1cm4gbmV3IElkZW50aXR5KHgpO1xuLy8uICAgdGhpcy52YWx1ZSA9IHg7XG4vLy4gfVxuLy8uXG4vLy4gSWRlbnRpdHlbJ0BAdHlwZSddID0gJ215LXBhY2thZ2UvSWRlbnRpdHknO1xuLy8uIGBgYFxuLy8uXG4vLy4gTm90ZSB0aGF0IGJ5IHVzaW5nIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdGhlIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgaXMgc2V0XG4vLy4gaW1wbGljaXRseSBmb3IgZWFjaCB2YWx1ZSBjcmVhdGVkLiBDb25zdHJ1Y3RvciBmdW5jdGlvbnMgYXJlIGNvbnZlbmllbnQgZm9yXG4vLy4gdGhpcyByZWFzb24sIGJ1dCBhcmUgbm90IHJlcXVpcmVkLiBUaGlzIGRlZmluaXRpb24gaXMgYWxzbyB2YWxpZDpcbi8vLlxuLy8uIGBgYGphdmFzY3JpcHRcbi8vLiAvLyAgSWRlbnRpdHlUeXBlUmVwIDo6IFR5cGVSZXAgSWRlbnRpdHlcbi8vLiB2YXIgSWRlbnRpdHlUeXBlUmVwID0ge1xuLy8uICAgJ0BAdHlwZSc6ICdteS1wYWNrYWdlL0lkZW50aXR5J1xuLy8uIH07XG4vLy5cbi8vLiAvLyAgSWRlbnRpdHkgOjogYSAtPiBJZGVudGl0eSBhXG4vLy4gZnVuY3Rpb24gSWRlbnRpdHkoeCkge1xuLy8uICAgcmV0dXJuIHtjb25zdHJ1Y3RvcjogSWRlbnRpdHlUeXBlUmVwLCB2YWx1ZTogeH07XG4vLy4gfVxuLy8uIGBgYFxuLy8uXG4vLy4gIyMjIFVzYWdlXG4vLy5cbi8vLiBgYGBqYXZhc2NyaXB0XG4vLy4gdmFyIElkZW50aXR5ID0gcmVxdWlyZSgnbXktcGFja2FnZScpLklkZW50aXR5O1xuLy8uIHZhciB0eXBlID0gcmVxdWlyZSgnc2FuY3R1YXJ5LXR5cGUtaWRlbnRpZmllcnMnKTtcbi8vLlxuLy8uIHR5cGUobnVsbCk7ICAgICAgICAgLy8gPT4gJ051bGwnXG4vLy4gdHlwZSh0cnVlKTsgICAgICAgICAvLyA9PiAnQm9vbGVhbidcbi8vLiB0eXBlKFsxLCAyLCAzXSk7ICAgIC8vID0+ICdBcnJheSdcbi8vLiB0eXBlKElkZW50aXR5KTsgICAgIC8vID0+ICdGdW5jdGlvbidcbi8vLiB0eXBlKElkZW50aXR5KDApKTsgIC8vID0+ICdteS1wYWNrYWdlL0lkZW50aXR5J1xuLy8uIGBgYFxuLy8uXG4vLy5cbi8vLiBbMV06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy90eXBlb2Zcbi8vLiBbMl06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC90b1N0cmluZ1xuLy8uIFszXTogI2FsZ29yaXRobVxuXG4oZnVuY3Rpb24oZikge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZigpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCAhPSBudWxsKSB7XG4gICAgZGVmaW5lKFtdLCBmKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLnNhbmN0dWFyeVR5cGVJZGVudGlmaWVycyA9IGYoKTtcbiAgfVxuXG59KGZ1bmN0aW9uKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyAgJCR0eXBlIDo6IFN0cmluZ1xuICB2YXIgJCR0eXBlID0gJ0BAdHlwZSc7XG5cbiAgLy8gIHR5cGUgOjogQW55IC0+IFN0cmluZ1xuICBmdW5jdGlvbiB0eXBlKHgpIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmXG4gICAgICAgICAgIHguY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgICAgICAgICB4LmNvbnN0cnVjdG9yLnByb3RvdHlwZSAhPT0geCAmJlxuICAgICAgICAgICB0eXBlb2YgeC5jb25zdHJ1Y3RvclskJHR5cGVdID09PSAnc3RyaW5nJyA/XG4gICAgICB4LmNvbnN0cnVjdG9yWyQkdHlwZV0gOlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpLnNsaWNlKCdbb2JqZWN0ICcubGVuZ3RoLCAtJ10nLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcblxufSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgQ29sbGVjdGlvbnMgPSByZXF1aXJlKCd0eXBlc2NyaXB0LWNvbGxlY3Rpb25zJyk7XG52YXIgWiA9IHJlcXVpcmUoJ3NhbmN0dWFyeS10eXBlLWNsYXNzZXMnKTtcblxudmFyIEVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRW50cnkocmFuaywgYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yYW5rID0gcmFuaztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICB0aGlzLnNlcSA9IEVudHJ5Lm5leHRTZXErKztcclxuICAgIH1cclxuICAgIEVudHJ5LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXEudG9TdHJpbmcoKTtcclxuICAgIH07XHJcbiAgICBFbnRyeS5uZXh0U2VxID0gMDtcclxuICAgIHJldHVybiBFbnRyeTtcclxufSgpKTtcclxudmFyIFRyYW5zYWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJhbnNhY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pbkNhbGxiYWNrID0gMDtcclxuICAgICAgICB0aGlzLnRvUmVnZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByaW9yaXRpemVkUSA9IG5ldyBDb2xsZWN0aW9ucy5Qcmlvcml0eVF1ZXVlKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGU6IExvdyBwcmlvcml0eSBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIFwiZ3JlYXRlclwiIGFjY29yZGluZyB0byB0aGlzXHJcbiAgICAgICAgICAgIC8vIGNvbXBhcmlzb24sIHNvIHRoYXQgdGhlIGxvd2VzdCBudW1iZXJzIGFyZSBoaWdoZXN0IHByaW9yaXR5IGFuZCBnbyBmaXJzdC5cclxuICAgICAgICAgICAgaWYgKGEucmFuay5yYW5rIDwgYi5yYW5rLnJhbmspXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgaWYgKGEucmFuay5yYW5rID4gYi5yYW5rLnJhbmspXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGlmIChhLnNlcSA8IGIuc2VxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmIChhLnNlcSA+IGIuc2VxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXcgQ29sbGVjdGlvbnMuU2V0KGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLnRvU3RyaW5nKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuc2FtcGxlUSA9IFtdO1xyXG4gICAgICAgIHRoaXMubGFzdFEgPSBbXTtcclxuICAgICAgICB0aGlzLnBvc3RRID0gbnVsbDtcclxuICAgIH1cclxuICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0UmVnZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50b1JlZ2VuID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUucHJpb3JpdGl6ZWQgPSBmdW5jdGlvbiAodGFyZ2V0LCBhY3Rpb24pIHtcclxuICAgICAgICB2YXIgZSA9IG5ldyBFbnRyeSh0YXJnZXQsIGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0aXplZFEuZW5xdWV1ZShlKTtcclxuICAgICAgICB0aGlzLmVudHJpZXMuYWRkKGUpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5zYW1wbGUgPSBmdW5jdGlvbiAoaCkge1xyXG4gICAgICAgIHRoaXMuc2FtcGxlUS5wdXNoKGgpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKGgpIHtcclxuICAgICAgICB0aGlzLmxhc3RRLnB1c2goaCk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNhY3Rpb24uX2NvbGxlY3RDeWNsZXNBdEVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBUcmFuc2FjdGlvbi5ydW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gVHJhbnNhY3Rpb24uY29sbGVjdEN5Y2xlc0F0RW5kID0gdHJ1ZTsgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYW4gYWN0aW9uIHRvIHJ1biBhZnRlciBhbGwgbGFzdCgpIGFjdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKGNoaWxkSXgsIGFjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc3RRID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMucG9zdFEgPSBbXTtcclxuICAgICAgICAvLyBJZiBhbiBlbnRyeSBleGlzdHMgYWxyZWFkeSwgY29tYmluZSB0aGUgb2xkIG9uZSB3aXRoIHRoZSBuZXcgb25lLlxyXG4gICAgICAgIHdoaWxlICh0aGlzLnBvc3RRLmxlbmd0aCA8PSBjaGlsZEl4KVxyXG4gICAgICAgICAgICB0aGlzLnBvc3RRLnB1c2gobnVsbCk7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gdGhpcy5wb3N0UVtjaGlsZEl4XSwgbmV1ID0gZXhpc3RpbmcgPT09IG51bGwgPyBhY3Rpb25cclxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZygpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3N0UVtjaGlsZEl4XSA9IG5ldTtcclxuICAgIH07XHJcbiAgICAvLyBJZiB0aGUgcHJpb3JpdHkgcXVldWUgaGFzIGVudHJpZXMgaW4gaXQgd2hlbiB3ZSBtb2RpZnkgYW55IG9mIHRoZSBub2RlcydcclxuICAgIC8vIHJhbmtzLCB0aGVuIHdlIG5lZWQgdG8gcmUtZ2VuZXJhdGUgaXQgdG8gbWFrZSBzdXJlIGl0J3MgdXAtdG8tZGF0ZS5cclxuICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5jaGVja1JlZ2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvUmVnZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b1JlZ2VuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdGl6ZWRRLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHZhciBlcyA9IHRoaXMuZW50cmllcy50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXRpemVkUS5lbnF1ZXVlKGVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24gPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVnZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByaW9yaXRpemVkUS5pc0VtcHR5KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMucHJpb3JpdGl6ZWRRLmRlcXVldWUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50cmllcy5yZW1vdmUoZSk7XHJcbiAgICAgICAgICAgICAgICBlLmFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzcSA9IHRoaXMuc2FtcGxlUTtcclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVRID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3EubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBzcVtpXSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmlvcml0aXplZFEuaXNFbXB0eSgpICYmIHRoaXMuc2FtcGxlUS5sZW5ndGggPCAxKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sYXN0US5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgdGhpcy5sYXN0UVtpXSgpO1xyXG4gICAgICAgIHRoaXMubGFzdFEgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5wb3N0USAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3N0US5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zdFFbaV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IFRyYW5zYWN0aW9uLmN1cnJlbnRUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uLmN1cnJlbnRUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RRW2ldKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdFFbaV0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24gPSBwYXJlbnRfMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24gPSBwYXJlbnRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBvc3RRID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBydW5uYWJsZSB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbmV2ZXIgYSB0cmFuc2FjdGlvbiBpcyBzdGFydGVkLlxyXG4gICAgICogVGhhdCBydW5uYWJsZSBtYXkgc3RhcnQgdHJhbnNhY3Rpb25zIGl0c2VsZiwgd2hpY2ggd2lsbCBub3QgY2F1c2UgdGhlXHJcbiAgICAgKiBob29rcyB0byBiZSBydW4gcmVjdXJzaXZlbHkuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIG1haW4gdXNlIGNhc2Ugb2YgdGhpcyBpcyB0aGUgaW1wbGVtZW50YXRpb24gb2YgYSB0aW1lL2FsYXJtIHN5c3RlbS5cclxuICAgICAqL1xyXG4gICAgVHJhbnNhY3Rpb24ub25TdGFydCA9IGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgVHJhbnNhY3Rpb24ub25TdGFydEhvb2tzLnB1c2gocik7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNhY3Rpb24ucnVuID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICB2YXIgdHJhbnNXYXMgPSBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb247XHJcbiAgICAgICAgaWYgKHRyYW5zV2FzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghVHJhbnNhY3Rpb24ucnVubmluZ09uU3RhcnRIb29rcykge1xyXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24ucnVubmluZ09uU3RhcnRIb29rcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVHJhbnNhY3Rpb24ub25TdGFydEhvb2tzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5vblN0YXJ0SG9va3NbaV0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uLnJ1bm5pbmdPblN0YXJ0SG9va3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGEgPSBmKCk7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc1dhcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyYW5zYWN0aW9uLmNvbGxlY3RDeWNsZXNBdEVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5jb2xsZWN0Q3ljbGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY29sbGVjdEN5Y2xlc0F0RW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zV2FzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uLmN1cnJlbnRUcmFuc2FjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24gPSBudWxsO1xyXG4gICAgVHJhbnNhY3Rpb24ub25TdGFydEhvb2tzID0gW107XHJcbiAgICBUcmFuc2FjdGlvbi5ydW5uaW5nT25TdGFydEhvb2tzID0gZmFsc2U7XHJcbiAgICBUcmFuc2FjdGlvbi5jb2xsZWN0Q3ljbGVzQXRFbmQgPSBmYWxzZTtcclxuICAgIHJldHVybiBUcmFuc2FjdGlvbjtcclxufSgpKTtcblxudmFyIHRvdGFsUmVnaXN0cmF0aW9ucyA9IDA7XHJcbmZ1bmN0aW9uIGdldFRvdGFsUmVnaXN0cmF0aW9ucygpIHtcclxuICAgIHJldHVybiB0b3RhbFJlZ2lzdHJhdGlvbnM7XHJcbn1cclxudmFyIFNvdXJjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIE5vdGU6XHJcbiAgICAvLyBXaGVuIHJlZ2lzdGVyXyA9PSBudWxsLCBhIHJhbmstaW5kZXBlbmRlbnQgc291cmNlIGlzIGNvbnN0cnVjdGVkIChhIHZlcnRleCB3aGljaCBpcyBqdXN0IGtlcHQgYWxpdmUgZm9yIHRoZVxyXG4gICAgLy8gbGlmZXRpbWUgb2YgdmVydGV4IHRoYXQgY29udGFpbnMgdGhpcyBzb3VyY2UpLlxyXG4gICAgLy8gV2hlbiByZWdpc3Rlcl8gIT0gbnVsbCBpdCBpcyBsaWtlbHkgdG8gYmUgYSByYW5rLWRlcGVuZGVudCBzb3VyY2UsIGJ1dCB0aGlzIHdpbGwgZGVwZW5kIG9uIHRoZSBjb2RlIGluc2lkZSByZWdpc3Rlcl8uXHJcbiAgICAvL1xyXG4gICAgLy8gcmFuay1pbmRlcGVuZGVudCBzb3VjZXMgRE8gTk9UIGJ1bXAgdXAgdGhlIHJhbmsgb2YgdGhlIHZlcnRleCBjb250YWluaW5nIHRob3NlIHNvdXJjZXMuXHJcbiAgICAvLyByYW5rLWRlcGRlbmRlbnQgc291cmNlcyBETyBidW1wIHVwIHRoZSByYW5rIG9mIHRoZSB2ZXJ0ZXggY29udGFpbmluZyB0aG9zZXMgc291cmNlcyB3aGVuIHJlcXVpcmVkLlxyXG4gICAgZnVuY3Rpb24gU291cmNlKG9yaWdpbiwgcmVnaXN0ZXJfKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyXyA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9yaWdpbiA9PT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVsbCBvcmlnaW4hXCIpO1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJfID0gcmVnaXN0ZXJfO1xyXG4gICAgfVxyXG4gICAgU291cmNlLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5yZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyXyAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVyZWdpc3Rlcl8gPSB0aGlzLnJlZ2lzdGVyXygpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IFRoZSB1c2Ugb2YgVmVydGV4Lk5VTEwgaGVyZSBpbnN0ZWFkIG9mIFwidGFyZ2V0XCIgaXMgbm90IGEgYnVnLCB0aGlzIGlzIGRvbmUgdG8gY3JlYXRlIGFcclxuICAgICAgICAgICAgICAgIC8vIHJhbmstaW5kZXBlbmRlbnQgc291cmNlLiAoc2VlIG5vdGUgYXQgY29uc3RydWN0b3IgZm9yIG1vcmUgZGV0YWlscy4pLiBUaGUgb3JpZ2luIHZlcnRleCBzdGlsbCBnZXRzXHJcbiAgICAgICAgICAgICAgICAvLyBhZGRlZCB0YXJnZXQgdmVydGV4J3MgY2hpbGRyZW4gZm9yIHRoZSBtZW1vcnkgbWFuYWdlbWVudCBhbGdvcml0aG0uXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbi5pbmNyZW1lbnQoVmVydGV4Lk5VTEwpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNoaWxkcm4ucHVzaCh0aGlzLm9yaWdpbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9yaWdpbi5kZWNyZW1lbnQoVmVydGV4Lk5VTEwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSB0YXJnZXQuY2hpbGRybi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNoaWxkcm5baV0gPT09IF90aGlzLm9yaWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNoaWxkcm4uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNvdXJjZS5wcm90b3R5cGUuZGVyZWdpc3RlciA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXJlZ2lzdGVyXyAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVyZWdpc3Rlcl8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNvdXJjZTtcclxufSgpKTtcclxudmFyIENvbG9yO1xyXG4oZnVuY3Rpb24gKENvbG9yKSB7XHJcbiAgICBDb2xvcltDb2xvcltcImJsYWNrXCJdID0gMF0gPSBcImJsYWNrXCI7XHJcbiAgICBDb2xvcltDb2xvcltcImdyYXlcIl0gPSAxXSA9IFwiZ3JheVwiO1xyXG4gICAgQ29sb3JbQ29sb3JbXCJ3aGl0ZVwiXSA9IDJdID0gXCJ3aGl0ZVwiO1xyXG4gICAgQ29sb3JbQ29sb3JbXCJwdXJwbGVcIl0gPSAzXSA9IFwicHVycGxlXCI7XHJcbn0pKENvbG9yIHx8IChDb2xvciA9IHt9KSk7XHJcbnZhciByb290cyA9IFtdO1xyXG52YXIgbmV4dElEID0gMDtcclxudmFyIHZlcmJvc2UgPSBmYWxzZTtcclxudmFyIFZlcnRleCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlcnRleChuYW1lLCByYW5rLCBzb3VyY2VzKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5jaGlsZHJuID0gW107XHJcbiAgICAgICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBTeW5jaHJvbm91cyBDeWNsZSBDb2xsZWN0aW9uIGFsZ29yaXRobSBwcmVzZW50ZWQgaW4gXCJDb25jdXJyZW50XHJcbiAgICAgICAgLy8gQ3ljbGUgQ29sbGVjdGlvbiBpbiBSZWZlcmVuY2UgQ291bnRlZCBTeXN0ZW1zXCIgYnkgRGF2aWQgRi4gQmFjb25cclxuICAgICAgICAvLyBhbmQgVi5ULiBSYWphbi5cclxuICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3IuYmxhY2s7XHJcbiAgICAgICAgdGhpcy5idWZmZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVmQ291bnRBZGogPSAwO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5yYW5rID0gcmFuaztcclxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBzb3VyY2VzO1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXh0SUQrKztcclxuICAgIH1cclxuICAgIFZlcnRleC5wcm90b3R5cGUucmVmQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRhcmdldHMubGVuZ3RoOyB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmNyZW1lbnQodGFyZ2V0KTtcclxuICAgIH07XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLmRlcmVnaXN0ZXIgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKHZlcmJvc2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVyZWdpc3RlciBcIiArIHRoaXMuZGVzY3IoKSArIFwiID0+IFwiICsgdGFyZ2V0LmRlc2NyKCkpO1xyXG4gICAgICAgIHRoaXMuZGVjcmVtZW50KHRhcmdldCk7XHJcbiAgICAgICAgVHJhbnNhY3Rpb24uX2NvbGxlY3RDeWNsZXNBdEVuZCgpO1xyXG4gICAgfTtcclxuICAgIFZlcnRleC5wcm90b3R5cGUuaW5jUmVmQ291bnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGFueUNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5yZWZDb3VudCgpID09IDApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNvdXJjZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZXNbaV0ucmVnaXN0ZXIodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgdGFyZ2V0LmNoaWxkcm4ucHVzaCh0aGlzKTtcclxuICAgICAgICBpZiAodGFyZ2V0LmVuc3VyZUJpZ2dlclRoYW4odGhpcy5yYW5rKSlcclxuICAgICAgICAgICAgYW55Q2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgdG90YWxSZWdpc3RyYXRpb25zKys7XHJcbiAgICAgICAgcmV0dXJuIGFueUNoYW5nZWQ7XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5kZWNSZWZDb3VudCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAodmVyYm9zZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJERUMgXCIgKyB0aGlzLmRlc2NyKCkpO1xyXG4gICAgICAgIHZhciBtYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRhcmdldC5jaGlsZHJuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNoaWxkcm5baV0gPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jaGlsZHJuLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhcmdldHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldHNbaV0gPT09IHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAobWF0Y2hlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWZDb3VudCgpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zb3VyY2VzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlc1tpXS5kZXJlZ2lzdGVyKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucy0tO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLmFkZFNvdXJjZSA9IGZ1bmN0aW9uIChzcmMpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZXMucHVzaChzcmMpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlZkNvdW50KCkgPiAwKVxyXG4gICAgICAgICAgICBzcmMucmVnaXN0ZXIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5lbnN1cmVCaWdnZXJUaGFuID0gZnVuY3Rpb24gKGxpbWl0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZCkge1xyXG4gICAgICAgICAgICAvLyBVbmRvaW5nIGN5Y2xlIGRldGVjdGlvbiBmb3Igbm93IHVudGlsIFRpbWVyU3lzdGVtLnRzIHJhbmtzIGFyZSBjaGVja2VkLlxyXG4gICAgICAgICAgICAvL3Rocm93IG5ldyBFcnJvcihcIlZlcnRleCBjeWNsZSBkZXRlY3RlZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmFuayA+IGxpbWl0KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52aXNpdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJhbmsgPSBsaW1pdCArIDE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhcmdldHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5lbnN1cmVCaWdnZXJUaGFuKHRoaXMucmFuayk7XHJcbiAgICAgICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5kZXNjciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29sU3RyID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29sb3IpIHtcclxuICAgICAgICAgICAgY2FzZSBDb2xvci5ibGFjazpcclxuICAgICAgICAgICAgICAgIGNvbFN0ciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbG9yLmdyYXk6XHJcbiAgICAgICAgICAgICAgICBjb2xTdHIgPSBcImdyYXlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbG9yLndoaXRlOlxyXG4gICAgICAgICAgICAgICAgY29sU3RyID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29sb3IucHVycGxlOlxyXG4gICAgICAgICAgICAgICAgY29sU3RyID0gXCJwdXJwbGVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RyID0gdGhpcy5pZCArIFwiIFwiICsgdGhpcy5uYW1lICsgXCIgW1wiICsgdGhpcy5yZWZDb3VudCgpICsgXCIvXCIgKyB0aGlzLnJlZkNvdW50QWRqICsgXCJdIFwiICsgY29sU3RyICsgXCIgLT5cIjtcclxuICAgICAgICB2YXIgY2hzID0gdGhpcy5jaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHN0ciArIFwiIFwiICsgY2hzW2ldLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIFZlcnRleC5wcm90b3R5cGUuY2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNoaWxkcm47IH07XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLmluY3JlbWVudCA9IGZ1bmN0aW9uIChyZWZlcnJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluY1JlZkNvdW50KHJlZmVycmVyKTtcclxuICAgIH07XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLmRlY3JlbWVudCA9IGZ1bmN0aW9uIChyZWZlcnJlcikge1xyXG4gICAgICAgIHRoaXMuZGVjUmVmQ291bnQocmVmZXJyZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlZkNvdW50KCkgPT0gMClcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBvc3NpYmxlUm9vdHMoKTtcclxuICAgIH07XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IENvbG9yLmJsYWNrO1xyXG4gICAgICAgIGlmICghdGhpcy5idWZmZXJlZClcclxuICAgICAgICAgICAgdGhpcy5mcmVlKCk7XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5mcmVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnRhcmdldHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgdGhpcy5kZWNSZWZDb3VudCh0aGlzLnRhcmdldHNbMF0pO1xyXG4gICAgfTtcclxuICAgIFZlcnRleC5wcm90b3R5cGUucG9zc2libGVSb290cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb2xvciAhPSBDb2xvci5wdXJwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IENvbG9yLnB1cnBsZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJvb3RzLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LmNvbGxlY3RDeWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKFZlcnRleC5jb2xsZWN0aW5nQ3ljbGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgVmVydGV4LmNvbGxlY3RpbmdDeWNsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBWZXJ0ZXgubWFya1Jvb3RzKCk7XHJcbiAgICAgICAgICAgIFZlcnRleC5zY2FuUm9vdHMoKTtcclxuICAgICAgICAgICAgVmVydGV4LmNvbGxlY3RSb290cygpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gVmVydGV4LnRvQmVGcmVlZExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXggPSBWZXJ0ZXgudG9CZUZyZWVkTGlzdC5zcGxpY2UoaSwgMSlbMF07XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXguZnJlZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBWZXJ0ZXguY29sbGVjdGluZ0N5Y2xlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBWZXJ0ZXgubWFya1Jvb3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXdSb290cyA9IFtdO1xyXG4gICAgICAgIC8vIGNoZWNrIHJlZkNvdW50QWRqIHdhcyByZXN0b3JlZCB0byB6ZXJvIGJlZm9yZSBtYXJrIHJvb3RzXHJcbiAgICAgICAgaWYgKHZlcmJvc2UpIHtcclxuICAgICAgICAgICAgdmFyIHN0YWNrID0gcm9vdHMuc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIHZhciB2aXNpdGVkID0gbmV3IENvbGxlY3Rpb25zLlNldCgpO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciB2ZXJ0ZXggPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkLmNvbnRhaW5zKHZlcnRleC5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpc2l0ZWQuYWRkKHZlcnRleC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmVydGV4LnJlZkNvdW50QWRqICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmtSb290cygpOiByZWFjaGFibGUgcmVmQ291bnRBZGogd2FzIG5vdCByZXNldCB0byB6ZXJvOiBcIiArIHZlcnRleC5kZXNjcigpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4LmNoaWxkcm4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB2ZXJ0ZXguY2hpbGRybltpXTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHZlcmJvc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmtSb290cyBcIiArIHJvb3RzW2ldLmRlc2NyKCkpOyAvLyAjIyNcclxuICAgICAgICAgICAgaWYgKHJvb3RzW2ldLmNvbG9yID09IENvbG9yLnB1cnBsZSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdHNbaV0ubWFya0dyYXkoKTtcclxuICAgICAgICAgICAgICAgIG5ld1Jvb3RzLnB1c2gocm9vdHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm9vdHNbaV0uYnVmZmVyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChyb290c1tpXS5jb2xvciA9PSBDb2xvci5ibGFjayAmJiByb290c1tpXS5yZWZDb3VudCgpID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgVmVydGV4LnRvQmVGcmVlZExpc3QucHVzaChyb290c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcm9vdHMgPSBuZXdSb290cztcclxuICAgIH07XHJcbiAgICBWZXJ0ZXguc2NhblJvb3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHJvb3RzW2ldLnNjYW4oKTtcclxuICAgIH07XHJcbiAgICBWZXJ0ZXguY29sbGVjdFJvb3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcm9vdHNbaV0uYnVmZmVyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcm9vdHNbaV0uY29sbGVjdFdoaXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ZXJib3NlKSB7IC8vIGRvdWJsZSBjaGVjayBhZGpSZWZDb3VudCBpcyB6ZXJvIGZvciBhbGwgdmVydGljZXMgcmVhY2hhYmxlIGJ5IHJvb3RzXHJcbiAgICAgICAgICAgIHZhciBzdGFjayA9IHJvb3RzLnNsaWNlKDApO1xyXG4gICAgICAgICAgICB2YXIgdmlzaXRlZCA9IG5ldyBDb2xsZWN0aW9ucy5TZXQoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmVydGV4ID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlzaXRlZC5jb250YWlucyh2ZXJ0ZXguaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZCh2ZXJ0ZXguaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZlcnRleC5yZWZDb3VudEFkaiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xsZWN0Um9vdHMoKTogcmVhY2hhYmxlIHJlZkNvdW50QWRqIHdhcyBub3QgcmVzZXQgdG8gemVybzogXCIgKyB2ZXJ0ZXguZGVzY3IoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRleC5jaGlsZHJuLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdmVydGV4LmNoaWxkcm5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcm9vdHMgPSBbXTtcclxuICAgIH07XHJcbiAgICBWZXJ0ZXgucHJvdG90eXBlLm1hcmtHcmF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbG9yICE9IENvbG9yLmdyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IENvbG9yLmdyYXk7XHJcbiAgICAgICAgICAgIHZhciBjaHMgPSB0aGlzLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjaHNbaV0ucmVmQ291bnRBZGotLTtcclxuICAgICAgICAgICAgICAgIGlmICh2ZXJib3NlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWFya0dyYXkgXCIgKyB0aGlzLmRlc2NyKCkpO1xyXG4gICAgICAgICAgICAgICAgY2hzW2ldLm1hcmtHcmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5zY2FuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2ZXJib3NlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjYW4gXCIgKyB0aGlzLmRlc2NyKCkpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbG9yID09IENvbG9yLmdyYXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVmQ291bnQoKSArIHRoaXMucmVmQ291bnRBZGogPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FuQmxhY2soKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3Iud2hpdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodmVyYm9zZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjYW4gV0hJVEUgXCIgKyB0aGlzLmRlc2NyKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNocyA9IHRoaXMuY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoc1tpXS5zY2FuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVmVydGV4LnByb3RvdHlwZS5zY2FuQmxhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZDb3VudEFkaiA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IENvbG9yLmJsYWNrO1xyXG4gICAgICAgIHZhciBjaHMgPSB0aGlzLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHZlcmJvc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjYW5CbGFjayBcIiArIHRoaXMuZGVzY3IoKSk7XHJcbiAgICAgICAgICAgIGlmIChjaHNbaV0uY29sb3IgIT0gQ29sb3IuYmxhY2spXHJcbiAgICAgICAgICAgICAgICBjaHNbaV0uc2NhbkJsYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFZlcnRleC5wcm90b3R5cGUuY29sbGVjdFdoaXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbG9yID09IENvbG9yLndoaXRlICYmICF0aGlzLmJ1ZmZlcmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh2ZXJib3NlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xsZWN0V2hpdGUgXCIgKyB0aGlzLmRlc2NyKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3IuYmxhY2s7XHJcbiAgICAgICAgICAgIHRoaXMucmVmQ291bnRBZGogPSAwO1xyXG4gICAgICAgICAgICB2YXIgY2hzID0gdGhpcy5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNocy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGNoc1tpXS5jb2xsZWN0V2hpdGUoKTtcclxuICAgICAgICAgICAgVmVydGV4LnRvQmVGcmVlZExpc3QucHVzaCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVmVydGV4Lk5VTEwgPSBuZXcgVmVydGV4KFwidXNlclwiLCAxZTEyLCBbXSk7XHJcbiAgICBWZXJ0ZXguY29sbGVjdGluZ0N5Y2xlcyA9IGZhbHNlO1xyXG4gICAgVmVydGV4LnRvQmVGcmVlZExpc3QgPSBbXTtcclxuICAgIHJldHVybiBWZXJ0ZXg7XHJcbn0oKSk7XG5cbnZhciBMYW1iZGExID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGFtYmRhMShmLCBkZXBzKSB7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgICAgICB0aGlzLmRlcHMgPSBkZXBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhbWJkYTE7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGxhbWJkYTEoZiwgZGVwcykge1xyXG4gICAgcmV0dXJuIG5ldyBMYW1iZGExKGYsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIExhbWJkYTFfZGVwcyhmKSB7XHJcbiAgICBpZiAoZiBpbnN0YW5jZW9mIExhbWJkYTEpXHJcbiAgICAgICAgcmV0dXJuIGYuZGVwcztcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gW107XHJcbn1cclxuZnVuY3Rpb24gTGFtYmRhMV90b0Z1bmN0aW9uKGYpIHtcclxuICAgIGlmIChmIGluc3RhbmNlb2YgTGFtYmRhMSlcclxuICAgICAgICByZXR1cm4gZi5mO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmO1xyXG59XHJcbnZhciBMYW1iZGEyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGFtYmRhMihmLCBkZXBzKSB7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgICAgICB0aGlzLmRlcHMgPSBkZXBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhbWJkYTI7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGxhbWJkYTIoZiwgZGVwcykge1xyXG4gICAgcmV0dXJuIG5ldyBMYW1iZGEyKGYsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIExhbWJkYTJfZGVwcyhmKSB7XHJcbiAgICBpZiAoZiBpbnN0YW5jZW9mIExhbWJkYTIpXHJcbiAgICAgICAgcmV0dXJuIGYuZGVwcztcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gW107XHJcbn1cclxuZnVuY3Rpb24gTGFtYmRhMl90b0Z1bmN0aW9uKGYpIHtcclxuICAgIGlmIChmIGluc3RhbmNlb2YgTGFtYmRhMilcclxuICAgICAgICByZXR1cm4gZi5mO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmO1xyXG59XHJcbnZhciBMYW1iZGEzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGFtYmRhMyhmLCBkZXBzKSB7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgICAgICB0aGlzLmRlcHMgPSBkZXBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhbWJkYTM7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGxhbWJkYTMoZiwgZGVwcykge1xyXG4gICAgcmV0dXJuIG5ldyBMYW1iZGEzKGYsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIExhbWJkYTNfZGVwcyhmKSB7XHJcbiAgICBpZiAoZiBpbnN0YW5jZW9mIExhbWJkYTMpXHJcbiAgICAgICAgcmV0dXJuIGYuZGVwcztcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gW107XHJcbn1cclxuZnVuY3Rpb24gTGFtYmRhM190b0Z1bmN0aW9uKGYpIHtcclxuICAgIGlmIChmIGluc3RhbmNlb2YgTGFtYmRhMylcclxuICAgICAgICByZXR1cm4gZi5mO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmO1xyXG59XHJcbnZhciBMYW1iZGE0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGFtYmRhNChmLCBkZXBzKSB7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgICAgICB0aGlzLmRlcHMgPSBkZXBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhbWJkYTQ7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGxhbWJkYTQoZiwgZGVwcykge1xyXG4gICAgcmV0dXJuIG5ldyBMYW1iZGE0KGYsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIExhbWJkYTRfZGVwcyhmKSB7XHJcbiAgICBpZiAoZiBpbnN0YW5jZW9mIExhbWJkYTQpXHJcbiAgICAgICAgcmV0dXJuIGYuZGVwcztcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gW107XHJcbn1cclxuZnVuY3Rpb24gTGFtYmRhNF90b0Z1bmN0aW9uKGYpIHtcclxuICAgIGlmIChmIGluc3RhbmNlb2YgTGFtYmRhNClcclxuICAgICAgICByZXR1cm4gZi5mO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmO1xyXG59XHJcbnZhciBMYW1iZGE1ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGFtYmRhNShmLCBkZXBzKSB7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgICAgICB0aGlzLmRlcHMgPSBkZXBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhbWJkYTU7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGxhbWJkYTUoZiwgZGVwcykge1xyXG4gICAgcmV0dXJuIG5ldyBMYW1iZGE1KGYsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIExhbWJkYTVfZGVwcyhmKSB7XHJcbiAgICBpZiAoZiBpbnN0YW5jZW9mIExhbWJkYTUpXHJcbiAgICAgICAgcmV0dXJuIGYuZGVwcztcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gW107XHJcbn1cclxuZnVuY3Rpb24gTGFtYmRhNV90b0Z1bmN0aW9uKGYpIHtcclxuICAgIGlmIChmIGluc3RhbmNlb2YgTGFtYmRhNSlcclxuICAgICAgICByZXR1cm4gZi5mO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmO1xyXG59XHJcbnZhciBMYW1iZGE2ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGFtYmRhNihmLCBkZXBzKSB7XHJcbiAgICAgICAgdGhpcy5mID0gZjtcclxuICAgICAgICB0aGlzLmRlcHMgPSBkZXBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhbWJkYTY7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGxhbWJkYTYoZiwgZGVwcykge1xyXG4gICAgcmV0dXJuIG5ldyBMYW1iZGE2KGYsIGRlcHMpO1xyXG59XHJcbmZ1bmN0aW9uIExhbWJkYTZfZGVwcyhmKSB7XHJcbiAgICBpZiAoZiBpbnN0YW5jZW9mIExhbWJkYTYpXHJcbiAgICAgICAgcmV0dXJuIGYuZGVwcztcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gW107XHJcbn1cclxuZnVuY3Rpb24gTGFtYmRhNl90b0Z1bmN0aW9uKGYpIHtcclxuICAgIGlmIChmIGluc3RhbmNlb2YgTGFtYmRhNilcclxuICAgICAgICByZXR1cm4gZi5mO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBmO1xyXG59XHJcbmZ1bmN0aW9uIHRvU291cmNlcyhkZXBzKSB7XHJcbiAgICB2YXIgc3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBkZXAgPSBkZXBzW2ldO1xyXG4gICAgICAgIHNzLnB1c2gobmV3IFNvdXJjZShkZXAuZ2V0VmVydGV4X18oKSwgbnVsbCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNzO1xyXG59XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cblxuLyoqXHJcbiAqIEEgcmVwcmVzZW50YXRpb24gZm9yIGEgdmFsdWUgdGhhdCBtYXkgbm90IGJlIGF2YWlsYWJsZSB1bnRpbCB0aGUgY3VycmVudFxyXG4gKiB0cmFuc2FjdGlvbiBpcyBjbG9zZWQuXHJcbiAqL1xyXG52YXIgTGF6eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExhenkoZikge1xyXG4gICAgICAgIHRoaXMuZiA9IGY7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgaWYgYXZhaWxhYmxlLCB0aHJvd2luZyBhbiBleGNlcHRpb24gaWYgbm90LlxyXG4gICAgICogSW4gdGhlIGdlbmVyYWwgY2FzZSB0aGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gc3Vic2VxdWVudCB0cmFuc2FjdGlvbnMgdG9cclxuICAgICAqIHdoZW4gdGhlIExhenkgd2FzIG9idGFpbmVkLlxyXG4gICAgICovXHJcbiAgICBMYXp5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZigpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTWFwIHRoZSBsYXp5IHZhbHVlIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZ1bmN0aW9uLCBzbyB0aGUgcmV0dXJuZWQgTGF6eSByZWZsZWN0c1xyXG4gICAgICogdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBMYXp5J3MgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gZiBGdW5jdGlvbiB0byBhcHBseSB0byB0aGUgY29udGFpbmVkIHZhbHVlLiBJdCBtdXN0IGJlIDxlbT5yZWZlcmVudGlhbGx5IHRyYW5zcGFyZW50PC9lbT4uXHJcbiAgICAgKi9cclxuICAgIExhenkucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IExhenkoZnVuY3Rpb24gKCkgeyByZXR1cm4gZihfdGhpcy5mKCkpOyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIExpZnQgYSBiaW5hcnkgZnVuY3Rpb24gaW50byBsYXp5IHZhbHVlcywgc28gdGhlIHJldHVybmVkIExhenkgcmVmbGVjdHNcclxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXBwbGllZCB0byB0aGUgaW5wdXQgTGF6eXMnIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgTGF6eS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChiLCBmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IExhenkoZnVuY3Rpb24gKCkgeyByZXR1cm4gZihfdGhpcy5mKCksIGIuZigpKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaWZ0IGEgdGVybmFyeSBmdW5jdGlvbiBpbnRvIGxhenkgdmFsdWVzLCBzbyB0aGUgcmV0dXJuZWQgTGF6eSByZWZsZWN0c1xyXG4gICAgICogdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBMYXp5cycgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBMYXp5LnByb3RvdHlwZS5saWZ0MyA9IGZ1bmN0aW9uIChiLCBjLCBmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IExhenkoZnVuY3Rpb24gKCkgeyByZXR1cm4gZihfdGhpcy5mKCksIGIuZigpLCBjLmYoKSk7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlmdCBhIHF1YXRlcm5hcnkgZnVuY3Rpb24gaW50byBsYXp5IHZhbHVlcywgc28gdGhlIHJldHVybmVkIExhenkgcmVmbGVjdHNcclxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXBwbGllZCB0byB0aGUgaW5wdXQgTGF6eXMnIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgTGF6eS5wcm90b3R5cGUubGlmdDQgPSBmdW5jdGlvbiAoYiwgYywgZCwgZikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMYXp5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYoX3RoaXMuZigpLCBiLmYoKSwgYy5mKCksIGQuZigpKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExhenk7XHJcbn0oKSk7XG5cbnZhciBVbml0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVW5pdCgpIHtcclxuICAgIH1cclxuICAgIFVuaXQuVU5JVCA9IG5ldyBVbml0KCk7XHJcbiAgICByZXR1cm4gVW5pdDtcclxufSgpKTtcblxudmFyIE9wZXJhdGlvbmFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT3BlcmF0aW9uYWwoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEEgc3RyZWFtIHRoYXQgZ2l2ZXMgdGhlIHVwZGF0ZXMvc3RlcHMgZm9yIGEge0BsaW5rIENlbGx9LlxyXG4gICAgICogPFA+XHJcbiAgICAgKiBUaGlzIGlzIGFuIE9QRVJBVElPTkFMIHByaW1pdGl2ZSwgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIG1haW4gU29kaXVtXHJcbiAgICAgKiBBUEkuIEl0IGJyZWFrcyB0aGUgcHJvcGVydHkgb2Ygbm9uLWRldGVjdGFiaWxpdHkgb2YgY2VsbCBzdGVwcy91cGRhdGVzLlxyXG4gICAgICogVGhlIHJ1bGUgd2l0aCB0aGlzIHByaW1pdGl2ZSBpcyB0aGF0IHlvdSBzaG91bGQgb25seSB1c2UgaXQgaW4gZnVuY3Rpb25zXHJcbiAgICAgKiB0aGF0IGRvIG5vdCBhbGxvdyB0aGUgY2FsbGVyIHRvIGRldGVjdCB0aGUgY2VsbCB1cGRhdGVzLlxyXG4gICAgICovXHJcbiAgICBPcGVyYXRpb25hbC51cGRhdGVzID0gZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAvKiAgRG9uJ3QgdGhpbmsgdGhpcyBpcyBuZWVkZWRcclxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgU3RyZWFtV2l0aFNlbmQ8QT4obnVsbCk7XHJcbiAgICAgICAgb3V0LnNldFZlcnRleF9fKG5ldyBWZXJ0ZXgoXCJ1cGRhdGVzXCIsIDAsIFtcclxuICAgICAgICAgICAgICAgIG5ldyBTb3VyY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgYy5nZXRTdHJlYW1fXygpLmdldFZlcnRleF9fKCksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYy5nZXRTdHJlYW1fXygpLmxpc3Rlbl8ob3V0LmdldFZlcnRleF9fKCksIChhIDogQSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTb3VyY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgYy5nZXRWZXJ0ZXhfXygpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIGMuZ2V0U3RyZWFtX18oKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEEgc3RyZWFtIHRoYXQgaXMgZ3VhcmFudGVlZCB0byBmaXJlIG9uY2UgaW4gdGhlIHRyYW5zYWN0aW9uIHdoZXJlIHZhbHVlKCkgaXMgaW52b2tlZCwgZ2l2aW5nXHJcbiAgICAgKiB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY2VsbCwgYW5kIHRoZXJlYWZ0ZXIgYmVoYXZlcyBsaWtlIHtAbGluayB1cGRhdGVzKENlbGwpfSxcclxuICAgICAqIGZpcmluZyBmb3IgZWFjaCB1cGRhdGUvc3RlcCBvZiB0aGUgY2VsbCdzIHZhbHVlLlxyXG4gICAgICogPFA+XHJcbiAgICAgKiBUaGlzIGlzIGFuIE9QRVJBVElPTkFMIHByaW1pdGl2ZSwgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIG1haW4gU29kaXVtXHJcbiAgICAgKiBBUEkuIEl0IGJyZWFrcyB0aGUgcHJvcGVydHkgb2Ygbm9uLWRldGVjdGFiaWxpdHkgb2YgY2VsbCBzdGVwcy91cGRhdGVzLlxyXG4gICAgICogVGhlIHJ1bGUgd2l0aCB0aGlzIHByaW1pdGl2ZSBpcyB0aGF0IHlvdSBzaG91bGQgb25seSB1c2UgaXQgaW4gZnVuY3Rpb25zXHJcbiAgICAgKiB0aGF0IGRvIG5vdCBhbGxvdyB0aGUgY2FsbGVyIHRvIGRldGVjdCB0aGUgY2VsbCB1cGRhdGVzLlxyXG4gICAgICovXHJcbiAgICBPcGVyYXRpb25hbC52YWx1ZSA9IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzU3BhcmsgPSBuZXcgU3RyZWFtV2l0aFNlbmQoKTtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLnByaW9yaXRpemVkKHNTcGFyay5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzU3Bhcmsuc2VuZF8oVW5pdC5VTklUKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBzSW5pdGlhbCA9IHNTcGFyay5zbmFwc2hvdDEoYyk7XHJcbiAgICAgICAgICAgIHJldHVybiBPcGVyYXRpb25hbC51cGRhdGVzKGMpLm9yRWxzZShzSW5pdGlhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoIGVhY2ggZXZlbnQgb250byBhIG5ldyB0cmFuc2FjdGlvbiBndWFyYW50ZWVkIHRvIGNvbWUgYmVmb3JlIHRoZSBuZXh0IGV4dGVybmFsbHlcclxuICAgICAqIGluaXRpYXRlZCB0cmFuc2FjdGlvbi4gU2FtZSBhcyB7QGxpbmsgc3BsaXQoU3RyZWFtKX0gYnV0IGl0IHdvcmtzIG9uIGEgc2luZ2xlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBPcGVyYXRpb25hbC5kZWZlciA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgcmV0dXJuIE9wZXJhdGlvbmFsLnNwbGl0KHMubWFwKGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbYV07XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUHVzaCBlYWNoIGV2ZW50IGluIHRoZSBsaXN0IG9udG8gYSBuZXdseSBjcmVhdGVkIHRyYW5zYWN0aW9uIGd1YXJhbnRlZWRcclxuICAgICAqIHRvIGNvbWUgYmVmb3JlIHRoZSBuZXh0IGV4dGVybmFsbHkgaW5pdGlhdGVkIHRyYW5zYWN0aW9uLiBOb3RlIHRoYXQgdGhlIHNlbWFudGljc1xyXG4gICAgICogYXJlIHN1Y2ggdGhhdCB0d28gZGlmZmVyZW50IGludm9jYXRpb25zIG9mIHNwbGl0KCkgY2FuIHB1dCBldmVudHMgaW50byB0aGUgc2FtZVxyXG4gICAgICogbmV3IHRyYW5zYWN0aW9uLCBzbyB0aGUgcmVzdWx0aW5nIHN0cmVhbSdzIGV2ZW50cyBjb3VsZCBiZSBzaW11bHRhbmVvdXMgd2l0aFxyXG4gICAgICogZXZlbnRzIG91dHB1dCBieSBzcGxpdCgpIG9yIHtAbGluayBkZWZlcihTdHJlYW0pfSBpbnZva2VkIGVsc2V3aGVyZSBpbiB0aGUgY29kZS5cclxuICAgICAqL1xyXG4gICAgT3BlcmF0aW9uYWwuc3BsaXQgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHZhciBvdXQgPSBuZXcgU3RyZWFtV2l0aFNlbmQobnVsbCk7XHJcbiAgICAgICAgb3V0LnNldFZlcnRleF9fKG5ldyBWZXJ0ZXgoXCJzcGxpdFwiLCAwLCBbXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2Uocy5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQuZ2V0VmVydGV4X18oKS5jaGlsZHJuLnB1c2gocy5nZXRWZXJ0ZXhfXygpKTtcclxuICAgICAgICAgICAgICAgIHZhciBjbGVhbnVwcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY2xlYW51cHMucHVzaChzLmxpc3Rlbl8oVmVydGV4Lk5VTEwsIGZ1bmN0aW9uIChhcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLnBvc3QoaSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24ucnVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQuc2VuZF8oYXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKSk7XHJcbiAgICAgICAgICAgICAgICBjbGVhbnVwcy5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hzID0gb3V0LmdldFZlcnRleF9fKCkuY2hpbGRybjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gY2hzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaHNbaV0gPT0gcy5nZXRWZXJ0ZXhfXygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cHMuZm9yRWFjaChmdW5jdGlvbiAoY2xlYW51cCkgeyByZXR1cm4gY2xlYW51cCgpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwcy5zcGxpY2UoMCwgY2xlYW51cHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSkpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9wZXJhdGlvbmFsO1xyXG59KCkpO1xuXG52YXIgVHVwbGUyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHVwbGUyKGEsIGIpIHtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVHVwbGUyO1xyXG59KCkpO1xuXG52YXIgTGF6eVNhbXBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExhenlTYW1wbGUoY2VsbCkge1xyXG4gICAgICAgIHRoaXMuaGFzVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNlbGwgPSBjZWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhenlTYW1wbGU7XHJcbn0oKSk7XHJcbnZhciBBcHBseVN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwbHlTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZl9wcmVzZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFfcHJlc2VudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFwcGx5U3RhdGU7XHJcbn0oKSk7XHJcbnZhciBDZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2VsbChpbml0VmFsdWUsIHN0cikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGluaXRWYWx1ZTtcclxuICAgICAgICBpZiAoIXN0cikge1xyXG4gICAgICAgICAgICB0aGlzLnN0ciA9IG5ldyBTdHJlYW0oKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXggPSBuZXcgVmVydGV4KFwiQ29uc3RDZWxsXCIsIDAsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbi5ydW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2V0U3RyZWFtKHN0cik7IH0pO1xyXG4gICAgfVxyXG4gICAgQ2VsbC5wcm90b3R5cGUuc2V0U3RyZWFtID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdHIgPSBzdHI7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcywgc3JjID0gbmV3IFNvdXJjZShzdHIuZ2V0VmVydGV4X18oKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyLmxpc3Rlbl8obWUudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lLnZhbHVlVXBkYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24ubGFzdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnZhbHVlID0gbWUudmFsdWVVcGRhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmxhenlJbml0VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS52YWx1ZVVwZGF0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZS52YWx1ZVVwZGF0ZSA9IGE7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZlcnRleCA9IG5ldyBWZXJ0ZXgoXCJDZWxsXCIsIDAsIFtzcmNdKTtcclxuICAgICAgICAvLyBXZSBkbyBhIHRyaWNrIGhlcmUgb2YgcmVnaXN0ZXJpbmcgdGhlIHNvdXJjZSBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50XHJcbiAgICAgICAgLy8gdHJhbnNhY3Rpb24gc28gdGhhdCB3ZSBhcmUgZ3VhcmFudGVlZCB0byBjYXRjaCBhbnkgc3RyZWFtIGV2ZW50cyB0aGF0XHJcbiAgICAgICAgLy8gb2NjdXIgaW4gdGhlIHNhbWUgdHJhbnNhY3Rpb24uXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBBIG5ldyB0ZW1wb3JhcnkgdmVydGV4IG51bGwgaXMgY29uc3RydWN0ZWQgaGVyZSBhcyBhIHBlcmZvcm1hbmNlIHdvcmstYXJvdW5kIHRvIGF2b2lkXHJcbiAgICAgICAgLy8gaGF2aW5nIHRvbyBtYW55IGNoaWxkcmVuIGluIFZlcnRleC5OVUxMIGFzIGEgZGVyZWdpc3RlciBvcGVyYXRpb24gaXMgTyhuXjIpIHdoZXJlXHJcbiAgICAgICAgLy8gbiBpcyB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoZSB2ZXJ0ZXguXHJcbiAgICAgICAgdmFyIHRtcFZlcnRleE5VTEwgPSBuZXcgVmVydGV4KFwiQ2VsbDo6c2V0U3RyZWFtXCIsIDFlMTIsIFtdKTtcclxuICAgICAgICB0aGlzLnZlcnRleC5yZWdpc3Rlcih0bXBWZXJ0ZXhOVUxMKTtcclxuICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24ubGFzdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnZlcnRleC5kZXJlZ2lzdGVyKHRtcFZlcnRleE5VTEwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENlbGwucHJvdG90eXBlLmdldFZlcnRleF9fID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcnRleDtcclxuICAgIH07XHJcbiAgICBDZWxsLnByb3RvdHlwZS5nZXRTdHJlYW1fXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHI7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTYW1wbGUgdGhlIGNlbGwncyBjdXJyZW50IHZhbHVlLlxyXG4gICAgICogPHA+XHJcbiAgICAgKiBJdCBzaG91bGQgZ2VuZXJhbGx5IGJlIGF2b2lkZWQgaW4gZmF2b3VyIG9mIHtAbGluayBsaXN0ZW4oSGFuZGxlcil9IHNvIHlvdSBkb24ndFxyXG4gICAgICogbWlzcyBhbnkgdXBkYXRlcywgYnV0IGluIG1hbnkgY2lyY3Vtc3RhbmNlcyBpdCBtYWtlcyBzZW5zZS5cclxuICAgICAqIDxwPlxyXG4gICAgICogTk9URTogSW4gdGhlIEphdmEgYW5kIG90aGVyIHZlcnNpb25zIG9mIFNvZGl1bSwgdXNpbmcgc2FtcGxlKCkgaW5zaWRlIG1hcCgpLCBmaWx0ZXIoKSBhbmRcclxuICAgICAqIG1lcmdlKCkgaXMgZW5jb3VyYWdlZC4gSW4gdGhlIEphdmFzY3JpcHQvVHlwZXNjcmlwdCB2ZXJzaW9uLCBub3Qgc28gbXVjaCwgZm9yIHRoZVxyXG4gICAgICogZm9sbG93aW5nIHJlYXNvbjogVGhlIG1lbW9yeSBtYW5hZ2VtZW50IGlzIGRpZmZlcmVudCBpbiB0aGUgSmF2YXNjcmlwdCB2ZXJzaW9uLCBhbmQgdGhpc1xyXG4gICAgICogcmVxdWlyZXMgdXMgdG8gdHJhY2sgYWxsIGRlcGVuZGVuY2llcy4gSW4gb3JkZXIgZm9yIHRoZSB1c2Ugb2Ygc2FtcGxlKCkgaW5zaWRlXHJcbiAgICAgKiBhIGNsb3N1cmUgdG8gYmUgY29ycmVjdCwgdGhlIGNlbGwgdGhhdCB3YXMgc2FtcGxlKClkIGluc2lkZSB0aGUgY2xvc3VyZSB3b3VsZCBoYXZlIHRvIGJlXHJcbiAgICAgKiBkZWNsYXJlZCBleHBsaWNpdGx5IHVzaW5nIHRoZSBoZWxwZXJzIGxhbWJkYTEoKSwgbGFtYmRhMigpLCBldGMuIEJlY2F1c2UgdGhpcyBpc1xyXG4gICAgICogc29tZXRoaW5nIHRoYXQgY2FuIGJlIGdvdCB3cm9uZywgd2UgZG9uJ3QgZW5jb3VyYWdlIHRoaXMga2luZCBvZiB1c2Ugb2Ygc2FtcGxlKCkgaW5cclxuICAgICAqIEphdmFzY3JpcHQuIEJldHRlciBhbmQgc2ltcGxlciB0byB1c2Ugc25hcHNob3QoKS5cclxuICAgICAqIDxwPlxyXG4gICAgICogTk9URTogSWYgeW91IG5lZWQgdG8gc2FtcGxlKCkgYSBjZWxsLCB5b3UgaGF2ZSB0byBtYWtlIHN1cmUgaXQncyBcImFsaXZlXCIgaW4gdGVybXMgb2ZcclxuICAgICAqIG1lbW9yeSBtYW5hZ2VtZW50IG9yIGl0IHdpbGwgaWdub3JlIHVwZGF0ZXMuIFRvIG1ha2UgYSBjZWxsIHdvcmsgY29ycmVjdGx5XHJcbiAgICAgKiB3aXRoIHNhbXBsZSgpLCB5b3UgaGF2ZSB0byBlbnN1cmUgdGhhdCBpdCdzIGJlaW5nIHVzZWQuIE9uZSB3YXkgdG8gZ3VhcmFudGVlIHRoaXMgaXNcclxuICAgICAqIHRvIHJlZ2lzdGVyIGEgZHVtbXkgbGlzdGVuZXIgb24gdGhlIGNlbGwuIEl0IHdpbGwgYWxzbyB3b3JrIHRvIGhhdmUgaXQgcmVmZXJlbmNlZFxyXG4gICAgICogYnkgc29tZXRoaW5nIHRoYXQgaXMgdWx0aW1hdGVseSBiZWluZyBsaXN0ZW5lZCB0by5cclxuICAgICAqL1xyXG4gICAgQ2VsbC5wcm90b3R5cGUuc2FtcGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zYW1wbGVOb1RyYW5zX18oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQ2VsbC5wcm90b3R5cGUuc2FtcGxlTm9UcmFuc19fID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQSB2YXJpYW50IG9mIHtAbGluayBzYW1wbGUoKX0gdGhhdCB3b3JrcyB3aXRoIHtAbGluayBDZWxsTG9vcH1zIHdoZW4gdGhleSBoYXZlbid0IGJlZW4gbG9vcGVkIHlldC5cclxuICAgICAqIEl0IHNob3VsZCBiZSB1c2VkIGluIGFueSBjb2RlIHRoYXQncyBnZW5lcmFsIGVub3VnaCB0aGF0IGl0IGNvdWxkIGJlIHBhc3NlZCBhIHtAbGluayBDZWxsTG9vcH0uXHJcbiAgICAgKiBAc2VlIFN0cmVhbSNob2xkTGF6eShMYXp5KSBTdHJlYW0uaG9sZExhenkoKVxyXG4gICAgICovXHJcbiAgICBDZWxsLnByb3RvdHlwZS5zYW1wbGVMYXp5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBtZS5zYW1wbGVMYXp5Tm9UcmFuc19fKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIENlbGwucHJvdG90eXBlLnNhbXBsZUxhenlOb1RyYW5zX18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcywgcyA9IG5ldyBMYXp5U2FtcGxlKG1lKTtcclxuICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24uc2FtcGxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy52YWx1ZSA9IG1lLnZhbHVlVXBkYXRlICE9IG51bGwgPyBtZS52YWx1ZVVwZGF0ZSA6IG1lLnNhbXBsZU5vVHJhbnNfXygpO1xyXG4gICAgICAgICAgICBzLmhhc1ZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcy5jZWxsID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IExhenkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAocy5oYXNWYWx1ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBzLnZhbHVlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5jZWxsLnNhbXBsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIHRoZSBjZWxsJ3MgdmFsdWUgYWNjb3JkaW5nIHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgc28gdGhlIHJldHVybmVkIENlbGxcclxuICAgICAqIGFsd2F5cyByZWZsZWN0cyB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIGlucHV0IENlbGwncyB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBmIEZ1bmN0aW9uIHRvIGFwcGx5IHRvIGNvbnZlcnQgdGhlIHZhbHVlcy4gSXQgbXVzdCBiZSA8ZW0+cmVmZXJlbnRpYWxseSB0cmFuc3BhcmVudDwvZW0+LlxyXG4gICAgICovXHJcbiAgICBDZWxsLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgIHZhciBjID0gdGhpcztcclxuICAgICAgICByZXR1cm4gVHJhbnNhY3Rpb24ucnVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wZXJhdGlvbmFsLnVwZGF0ZXMoYykubWFwKGYpLmhvbGRMYXp5KGMuc2FtcGxlTGF6eSgpLm1hcChMYW1iZGExX3RvRnVuY3Rpb24oZikpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIExpZnQgYSBiaW5hcnkgZnVuY3Rpb24gaW50byBjZWxscywgc28gdGhlIHJldHVybmVkIENlbGwgYWx3YXlzIHJlZmxlY3RzIHRoZSBzcGVjaWZpZWRcclxuICAgICAqIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIGlucHV0IGNlbGxzJyB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYXBwbHkuIEl0IG11c3QgYmUgPGVtPnJlZmVyZW50aWFsbHkgdHJhbnNwYXJlbnQ8L2VtPi5cclxuICAgICAqL1xyXG4gICAgQ2VsbC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChiLCBmbjApIHtcclxuICAgICAgICB2YXIgZm4gPSBMYW1iZGEyX3RvRnVuY3Rpb24oZm4wKSwgY2YgPSB0aGlzLm1hcChmdW5jdGlvbiAoYWEpIHsgcmV0dXJuIGZ1bmN0aW9uIChiYikgeyByZXR1cm4gZm4oYWEsIGJiKTsgfTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIENlbGwuYXBwbHkoY2YsIGIsIHRvU291cmNlcyhMYW1iZGEyX2RlcHMoZm4wKSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlmdCBhIHRlcm5hcnkgZnVuY3Rpb24gaW50byBjZWxscywgc28gdGhlIHJldHVybmVkIENlbGwgYWx3YXlzIHJlZmxlY3RzIHRoZSBzcGVjaWZpZWRcclxuICAgICAqIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIGlucHV0IGNlbGxzJyB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYXBwbHkuIEl0IG11c3QgYmUgPGVtPnJlZmVyZW50aWFsbHkgdHJhbnNwYXJlbnQ8L2VtPi5cclxuICAgICAqL1xyXG4gICAgQ2VsbC5wcm90b3R5cGUubGlmdDMgPSBmdW5jdGlvbiAoYiwgYywgZm4wKSB7XHJcbiAgICAgICAgdmFyIGZuID0gTGFtYmRhM190b0Z1bmN0aW9uKGZuMCksIG1mID0gZnVuY3Rpb24gKGFhKSB7IHJldHVybiBmdW5jdGlvbiAoYmIpIHsgcmV0dXJuIGZ1bmN0aW9uIChjYykgeyByZXR1cm4gZm4oYWEsIGJiLCBjYyk7IH07IH07IH0sIGNmID0gdGhpcy5tYXAobWYpO1xyXG4gICAgICAgIHJldHVybiBDZWxsLmFwcGx5KENlbGwuYXBwbHkoY2YsIGIpLCBjLCB0b1NvdXJjZXMoTGFtYmRhM19kZXBzKGZuMCkpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIExpZnQgYSBxdWF0ZXJuYXJ5IGZ1bmN0aW9uIGludG8gY2VsbHMsIHNvIHRoZSByZXR1cm5lZCBDZWxsIGFsd2F5cyByZWZsZWN0cyB0aGUgc3BlY2lmaWVkXHJcbiAgICAgKiBmdW5jdGlvbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBjZWxscycgdmFsdWVzLlxyXG4gICAgICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGFwcGx5LiBJdCBtdXN0IGJlIDxlbT5yZWZlcmVudGlhbGx5IHRyYW5zcGFyZW50PC9lbT4uXHJcbiAgICAgKi9cclxuICAgIENlbGwucHJvdG90eXBlLmxpZnQ0ID0gZnVuY3Rpb24gKGIsIGMsIGQsIGZuMCkge1xyXG4gICAgICAgIHZhciBmbiA9IExhbWJkYTRfdG9GdW5jdGlvbihmbjApLCBtZiA9IGZ1bmN0aW9uIChhYSkgeyByZXR1cm4gZnVuY3Rpb24gKGJiKSB7IHJldHVybiBmdW5jdGlvbiAoY2MpIHsgcmV0dXJuIGZ1bmN0aW9uIChkZCkgeyByZXR1cm4gZm4oYWEsIGJiLCBjYywgZGQpOyB9OyB9OyB9OyB9LCBjZiA9IHRoaXMubWFwKG1mKTtcclxuICAgICAgICByZXR1cm4gQ2VsbC5hcHBseShDZWxsLmFwcGx5KENlbGwuYXBwbHkoY2YsIGIpLCBjKSwgZCwgdG9Tb3VyY2VzKExhbWJkYTRfZGVwcyhmbjApKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaWZ0IGEgNS1hcmd1bWVudCBmdW5jdGlvbiBpbnRvIGNlbGxzLCBzbyB0aGUgcmV0dXJuZWQgQ2VsbCBhbHdheXMgcmVmbGVjdHMgdGhlIHNwZWNpZmllZFxyXG4gICAgICogZnVuY3Rpb24gYXBwbGllZCB0byB0aGUgaW5wdXQgY2VsbHMnIHZhbHVlcy5cclxuICAgICAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBhcHBseS4gSXQgbXVzdCBiZSA8ZW0+cmVmZXJlbnRpYWxseSB0cmFuc3BhcmVudDwvZW0+LlxyXG4gICAgICovXHJcbiAgICBDZWxsLnByb3RvdHlwZS5saWZ0NSA9IGZ1bmN0aW9uIChiLCBjLCBkLCBlLCBmbjApIHtcclxuICAgICAgICB2YXIgZm4gPSBMYW1iZGE1X3RvRnVuY3Rpb24oZm4wKSwgbWYgPSBmdW5jdGlvbiAoYWEpIHsgcmV0dXJuIGZ1bmN0aW9uIChiYikgeyByZXR1cm4gZnVuY3Rpb24gKGNjKSB7IHJldHVybiBmdW5jdGlvbiAoZGQpIHsgcmV0dXJuIGZ1bmN0aW9uIChlZSkgeyByZXR1cm4gZm4oYWEsIGJiLCBjYywgZGQsIGVlKTsgfTsgfTsgfTsgfTsgfSwgY2YgPSB0aGlzLm1hcChtZik7XHJcbiAgICAgICAgcmV0dXJuIENlbGwuYXBwbHkoQ2VsbC5hcHBseShDZWxsLmFwcGx5KENlbGwuYXBwbHkoY2YsIGIpLCBjKSwgZCksIGUsIHRvU291cmNlcyhMYW1iZGE1X2RlcHMoZm4wKSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlmdCBhIDYtYXJndW1lbnQgZnVuY3Rpb24gaW50byBjZWxscywgc28gdGhlIHJldHVybmVkIENlbGwgYWx3YXlzIHJlZmxlY3RzIHRoZSBzcGVjaWZpZWRcclxuICAgICAqIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIGlucHV0IGNlbGxzJyB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0gZm4gRnVuY3Rpb24gdG8gYXBwbHkuIEl0IG11c3QgYmUgPGVtPnJlZmVyZW50aWFsbHkgdHJhbnNwYXJlbnQ8L2VtPi5cclxuICAgICAqL1xyXG4gICAgQ2VsbC5wcm90b3R5cGUubGlmdDYgPSBmdW5jdGlvbiAoYiwgYywgZCwgZSwgZiwgZm4wKSB7XHJcbiAgICAgICAgdmFyIGZuID0gTGFtYmRhNl90b0Z1bmN0aW9uKGZuMCksIG1mID0gZnVuY3Rpb24gKGFhKSB7IHJldHVybiBmdW5jdGlvbiAoYmIpIHsgcmV0dXJuIGZ1bmN0aW9uIChjYykgeyByZXR1cm4gZnVuY3Rpb24gKGRkKSB7IHJldHVybiBmdW5jdGlvbiAoZWUpIHsgcmV0dXJuIGZ1bmN0aW9uIChmZikgeyByZXR1cm4gZm4oYWEsIGJiLCBjYywgZGQsIGVlLCBmZik7IH07IH07IH07IH07IH07IH0sIGNmID0gdGhpcy5tYXAobWYpO1xyXG4gICAgICAgIHJldHVybiBDZWxsLmFwcGx5KENlbGwuYXBwbHkoQ2VsbC5hcHBseShDZWxsLmFwcGx5KENlbGwuYXBwbHkoY2YsIGIpLCBjKSwgZCksIGUpLCBmLCB0b1NvdXJjZXMoTGFtYmRhNl9kZXBzKGZuMCkpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhpZ2ggb3JkZXIgZGVwZW5lbmN5IHRyYWtpbmcuIElmIGFueSBuZXdseSBjcmVhdGVkIHNvZGl1bSBvYmplY3RzIHdpdGhpbiBhIHZhbHVlIG9mIGEgY2VsbCBvZiBhIHNvZGl1bSBvYmplY3RcclxuICAgICAqIGhhcHBlbiB0byBhY2N1bXVsYXRlIHN0YXRlLCB0aGlzIG1ldGhvZCB3aWxsIGtlZXAgdGhlIGFjY3VtdWxhdGlvbiBvZiBzdGF0ZSB1cCB0byBkYXRlLlxyXG4gICAgICovXHJcbiAgICBDZWxsLnByb3RvdHlwZS50cmFja2luZyA9IGZ1bmN0aW9uIChleHRyYWN0b3IpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvdXQgPSBuZXcgU3RyZWFtV2l0aFNlbmQobnVsbCk7XHJcbiAgICAgICAgdmFyIHZlcnRleCA9IG5ldyBWZXJ0ZXgoXCJ0cmFja2luZ1wiLCAwLCBbXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UodGhpcy52ZXJ0ZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjbGVhbnVwMiA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVEZXBzID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdENsZWFudXBzMiA9IGNsZWFudXAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXBzID0gZXh0cmFjdG9yKGEpLm1hcChmdW5jdGlvbiAoZGVwKSB7IHJldHVybiBkZXAuZ2V0VmVydGV4X18oKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXAgPSBkZXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXguY2hpbGRybi5wdXNoKGRlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcC5pbmNyZW1lbnQoVmVydGV4Lk5VTEwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVwID0gZGVwc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmVydGV4LmNoaWxkcm4ubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4LmNoaWxkcm5bal0gPT09IGRlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXguY2hpbGRybi5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcC5kZWNyZW1lbnQoVmVydGV4Lk5VTEwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Q2xlYW51cHMyKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGVwcyhfdGhpcy5zYW1wbGUoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xlYW51cDEgPSBPcGVyYXRpb25hbC51cGRhdGVzKF90aGlzKS5saXN0ZW5fKHZlcnRleCwgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZXBzKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhhKTtcclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cDEoKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwMigpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuICAgICAgICBvdXQuc2V0VmVydGV4X18odmVydGV4KTtcclxuICAgICAgICByZXR1cm4gb3V0LmhvbGRMYXp5KHRoaXMuc2FtcGxlTGF6eSgpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIExpZnQgYW4gYXJyYXkgb2YgY2VsbHMgaW50byBhIGNlbGwgb2YgYW4gYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIENlbGwubGlmdEFycmF5ID0gZnVuY3Rpb24gKGNhKSB7XHJcbiAgICAgICAgcmV0dXJuIENlbGwuX2xpZnRBcnJheShjYSwgMCwgY2EubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICBDZWxsLl9saWZ0QXJyYXkgPSBmdW5jdGlvbiAoY2EsIGZyb21JbmMsIHRvRXhjKSB7XHJcbiAgICAgICAgaWYgKHRvRXhjIC0gZnJvbUluYyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2VsbChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRvRXhjIC0gZnJvbUluYyA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYVtmcm9tSW5jXS5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIFthXTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcGl2b3QgPSBNYXRoLmZsb29yKChmcm9tSW5jICsgdG9FeGMpIC8gMik7XHJcbiAgICAgICAgICAgIC8vIHRoZSB0aHVuayBib3hpbmcvdW5ib3hpbmcgaGVyZSBpcyBhIHBlcmZvcm1hbmNlIGhhY2sgZm9yIGxpZnQgd2hlbiB0aGVyZSBhcmUgc2ltdXRhbmVvdXMgY2hhbmdpbmcgY2VsbHMuXHJcbiAgICAgICAgICAgIHJldHVybiBDZWxsLl9saWZ0QXJyYXkoY2EsIGZyb21JbmMsIHBpdm90KS5saWZ0KENlbGwuX2xpZnRBcnJheShjYSwgcGl2b3QsIHRvRXhjKSwgZnVuY3Rpb24gKGFycmF5MSwgYXJyYXkyKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBhcnJheTEuY29uY2F0KGFycmF5Mik7IH07IH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4KCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IGEgdmFsdWUgaW5zaWRlIGEgY2VsbCB0byBhIGZ1bmN0aW9uIGluc2lkZSBhIGNlbGwuIFRoaXMgaXMgdGhlXHJcbiAgICAgKiBwcmltaXRpdmUgZm9yIGFsbCBmdW5jdGlvbiBsaWZ0aW5nLlxyXG4gICAgICovXHJcbiAgICBDZWxsLmFwcGx5ID0gZnVuY3Rpb24gKGNmLCBjYSwgc291cmNlcykge1xyXG4gICAgICAgIHJldHVybiBUcmFuc2FjdGlvbi5ydW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcHVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBuZXcgQXBwbHlTdGF0ZSgpLCBvdXQgPSBuZXcgU3RyZWFtV2l0aFNlbmQoKSwgY2ZfdXBkYXRlcyA9IE9wZXJhdGlvbmFsLnVwZGF0ZXMoY2YpLCBjYV91cGRhdGVzID0gT3BlcmF0aW9uYWwudXBkYXRlcyhjYSksIHB1bXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHVtcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHB1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLnByaW9yaXRpemVkKG91dC5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBzdGF0ZS5mX3ByZXNlbnQgPyBzdGF0ZS5mIDogY2Yuc2FtcGxlTm9UcmFuc19fKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzdGF0ZS5hX3ByZXNlbnQgPyBzdGF0ZS5hIDogY2Euc2FtcGxlTm9UcmFuc19fKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGYoYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHB1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCBzcmMxID0gbmV3IFNvdXJjZShjZl91cGRhdGVzLmdldFZlcnRleF9fKCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjZl91cGRhdGVzLmxpc3Rlbl8ob3V0LmdldFZlcnRleF9fKCksIGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZiA9IGY7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZl9wcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwdW1wKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pLCBzcmMyID0gbmV3IFNvdXJjZShjYV91cGRhdGVzLmdldFZlcnRleF9fKCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYV91cGRhdGVzLmxpc3Rlbl8ob3V0LmdldFZlcnRleF9fKCksIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYSA9IGE7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYV9wcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwdW1wKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvdXQuc2V0VmVydGV4X18obmV3IFZlcnRleChcImFwcGx5XCIsIDAsIFtzcmMxLCBzcmMyXS5jb25jYXQoc291cmNlcyA/IHNvdXJjZXMgOiBbXSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dC5ob2xkTGF6eShuZXcgTGF6eShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2Yuc2FtcGxlTm9UcmFuc19fKCkoY2Euc2FtcGxlTm9UcmFuc19fKCkpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVbndyYXAgYSBjZWxsIGluc2lkZSBhbm90aGVyIGNlbGwgdG8gZ2l2ZSBhIHRpbWUtdmFyeWluZyBjZWxsIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBDZWxsLnN3aXRjaEMgPSBmdW5jdGlvbiAoY2NhKSB7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB6YSA9IGNjYS5zYW1wbGVMYXp5KCkubWFwKGZ1bmN0aW9uIChiYSkgeyByZXR1cm4gYmEuc2FtcGxlKCk7IH0pLCBvdXQgPSBuZXcgU3RyZWFtV2l0aFNlbmQoKTtcclxuICAgICAgICAgICAgdmFyIG91dFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHB1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHB1bXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHVtcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHB1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLnByaW9yaXRpemVkKG91dC5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKG91dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcHVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBsYXN0X2NhID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIGNjYV92YWx1ZSA9IE9wZXJhdGlvbmFsLnZhbHVlKGNjYSksIHNyYyA9IG5ldyBTb3VyY2UoY2NhX3ZhbHVlLmdldFZlcnRleF9fKCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBraWxsMiA9IGxhc3RfY2EgPT09IG51bGwgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBPcGVyYXRpb25hbC52YWx1ZShsYXN0X2NhKS5saXN0ZW5fKG91dC5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoYSkgeyBvdXRWYWx1ZSA9IGE7IHB1bXAoKTsgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtpbGwxID0gY2NhX3ZhbHVlLmxpc3Rlbl8ob3V0LmdldFZlcnRleF9fKCksIGZ1bmN0aW9uIChjYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfY2EgPSBjYTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb25uZWN0IGJlZm9yZSBkaXNjb25uZWN0IHRvIGF2b2lkIG1lbW9yeSBib3VuY2UsIHdoZW4gc3dpdGNoaW5nIHRvIHNhbWUgY2VsbCB0d2ljZS5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dEtpbGwyID0gT3BlcmF0aW9uYWwudmFsdWUoY2EpLmxpc3Rlbl8ob3V0LmdldFZlcnRleF9fKCksIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFZhbHVlID0gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVtcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2lsbDIgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbGwyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2lsbDIgPSBuZXh0S2lsbDI7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyBraWxsMSgpOyBraWxsMigpOyB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3V0LnNldFZlcnRleF9fKG5ldyBWZXJ0ZXgoXCJzd2l0Y2hDXCIsIDAsIFtzcmNdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXQuaG9sZExhenkoemEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVW53cmFwIGEgc3RyZWFtIGluc2lkZSBhIGNlbGwgdG8gZ2l2ZSBhIHRpbWUtdmFyeWluZyBzdHJlYW0gaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIENlbGwuc3dpdGNoUyA9IGZ1bmN0aW9uIChjc2EpIHtcclxuICAgICAgICByZXR1cm4gVHJhbnNhY3Rpb24ucnVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG91dCA9IG5ldyBTdHJlYW1XaXRoU2VuZCgpLCBoMiA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQuc2VuZF8oYSk7XHJcbiAgICAgICAgICAgIH0sIHNyYyA9IG5ldyBTb3VyY2UoY3NhLmdldFZlcnRleF9fKCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBraWxsMiA9IGNzYS5zYW1wbGVOb1RyYW5zX18oKS5saXN0ZW5fKG91dC5nZXRWZXJ0ZXhfXygpLCBoMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtpbGwxID0gY3NhLmdldFN0cmVhbV9fKCkubGlzdGVuXyhvdXQuZ2V0VmVydGV4X18oKSwgZnVuY3Rpb24gKHNhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29ubmVjdCBiZWZvcmUgZGlzY29ubmVjdCB0byBhdm9pZCBtZW1vcnkgYm91bmNlLCB3aGVuIHN3aXRjaGluZyB0byBzYW1lIHN0cmVhbSB0d2ljZS5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dEtpbGwyID0gc2EubGlzdGVuXyhvdXQuZ2V0VmVydGV4X18oKSwgaDIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtpbGwyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2lsbDIgPSBuZXh0S2lsbDI7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyBraWxsMSgpOyBraWxsMigpOyB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3V0LnNldFZlcnRleF9fKG5ldyBWZXJ0ZXgoXCJzd2l0Y2hTXCIsIDAsIFtzcmNdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRyYW5zZm9ybWluZyBhIHZhbHVlIGZyb20gYSBsYXJnZXIgdHlwZSB0byBhIHNtYWxsZXIgdHlwZSwgaXQgaXMgbGlrZWx5IGZvciBkdXBsaWNhdGUgY2hhbmdlcyB0byBiZWNvbWVcclxuICAgICAqIHByb3BlcmdhdGVkLiBUaGlzIGZ1bmN0aW9uIGluc3VyZXMgb25seSBkaXN0aW5jdCBjaGFuZ2VzIGdldCBwcm9wZXJnYXRlZC5cclxuICAgICAqL1xyXG4gICAgQ2VsbC5wcm90b3R5cGUuY2FsbSA9IGZ1bmN0aW9uIChlcSkge1xyXG4gICAgICAgIHJldHVybiBPcGVyYXRpb25hbFxyXG4gICAgICAgICAgICAudXBkYXRlcyh0aGlzKVxyXG4gICAgICAgICAgICAuY29sbGVjdExhenkodGhpcy5zYW1wbGVMYXp5KCksIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKGVxKG5ld1ZhbHVlLCBvbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFR1cGxlMihyZXN1bHQsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyTm90TnVsbCgpXHJcbiAgICAgICAgICAgIC5ob2xkTGF6eSh0aGlzLnNhbXBsZUxhenkoKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHRoZSBzYW1lIGFzIGNhbG0sIGV4Y2VwdCB5b3UgZG8gbm90IG5lZWQgdG8gcGFzcyBhbiBlcSBmdW5jdGlvbi4gVGhpcyBmdW5jdGlvbiB3aWxsIHVzZSAoPT09KVxyXG4gICAgICogYXMgaXRzIGVxIGZ1bmN0aW9uLiBJLkUuIGNhbGxpbmcgY2FsbVJlZkVxKCkgaXMgdGhlIHNhbWUgYXMgY2FsbSgoYSxiKSA9PiBhID09PSBiKS5cclxuICAgICAqL1xyXG4gICAgQ2VsbC5wcm90b3R5cGUuY2FsbVJlZkVxID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbG0oZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgPT09IGI7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciB1cGRhdGVzIHRvIHRoZSB2YWx1ZSBvZiB0aGlzIGNlbGwuIFRoaXMgaXMgdGhlIG9ic2VydmVyIHBhdHRlcm4uIFRoZVxyXG4gICAgICogcmV0dXJuZWQge0BsaW5rIExpc3RlbmVyfSBoYXMgYSB7QGxpbmsgTGlzdGVuZXIjdW5saXN0ZW4oKX0gbWV0aG9kIHRvIGNhdXNlIHRoZVxyXG4gICAgICogbGlzdGVuZXIgdG8gYmUgcmVtb3ZlZC4gVGhpcyBpcyBhbiBPUEVSQVRJT05BTCBtZWNoYW5pc20gaXMgZm9yIGludGVyZmFjaW5nIGJldHdlZW5cclxuICAgICAqIHRoZSB3b3JsZCBvZiBJL08gYW5kIGZvciBGUlAuXHJcbiAgICAgKiBAcGFyYW0gaCBUaGUgaGFuZGxlciB0byBleGVjdXRlIHdoZW4gdGhlcmUncyBhIG5ldyB2YWx1ZS5cclxuICAgICAqICAgWW91IHNob3VsZCBtYWtlIG5vIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdGhyZWFkIHlvdSBhcmUgY2FsbGVkIG9uLCBhbmQgdGhlXHJcbiAgICAgKiAgIGhhbmRsZXIgc2hvdWxkIG5vdCBibG9jay4gWW91IGFyZSBub3QgYWxsb3dlZCB0byB1c2Uge0BsaW5rIENlbGxTaW5rI3NlbmQoT2JqZWN0KX1cclxuICAgICAqICAgb3Ige0BsaW5rIFN0cmVhbVNpbmsjc2VuZChPYmplY3QpfSBpbiB0aGUgaGFuZGxlci5cclxuICAgICAqICAgQW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLCBiZWNhdXNlIHlvdSBhcmUgbm90IG1lYW50IHRvIHVzZSB0aGlzIHRvIGNyZWF0ZVxyXG4gICAgICogICB5b3VyIG93biBwcmltaXRpdmVzLlxyXG4gICAgICovXHJcbiAgICBDZWxsLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoaCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPcGVyYXRpb25hbC52YWx1ZShfdGhpcykubGlzdGVuKGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRmFudGFzeS1sYW5kIEFsZ2VicmFpYyBEYXRhIFR5cGUgQ29tcGF0YWJpbGl0eS5cclxuICAgICAqIENlbGwgc2F0aXNmaWVzIHRoZSBGdW5jdG9yLCBBcHBseSwgQXBwbGljYXRpdmUgY2F0ZWdvcmllc1xyXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZH0gZm9yIG1vcmUgaW5mb1xyXG4gICAgICovXHJcbiAgICAvL29mIDo6IEFwcGxpY2F0aXZlIGYgPT4gYSAtPiBmIGFcclxuICAgIENlbGxbJ2ZhbnRhc3ktbGFuZC9vZiddID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENlbGwoYSk7XHJcbiAgICB9O1xyXG4gICAgLy9tYXAgOjogRnVuY3RvciBmID0+IGYgYSB+PiAoYSAtPiBiKSAtPiBmIGJcclxuICAgIENlbGwucHJvdG90eXBlWydmYW50YXN5LWxhbmQvbWFwJ10gPSBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmKTtcclxuICAgIH07XHJcbiAgICAvL2FwIDo6IEFwcGx5IGYgPT4gZiBhIH4+IGYgKGEgLT4gYikgLT4gZiBiXHJcbiAgICBDZWxsLnByb3RvdHlwZVsnZmFudGFzeS1sYW5kL2FwJ10gPSBmdW5jdGlvbiAoY2YpIHtcclxuICAgICAgICByZXR1cm4gQ2VsbC5hcHBseShjZiwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENlbGw7XHJcbn0oKSk7XG5cbnZhciBMaXN0ZW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExpc3RlbmVyKGgsIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTGlzdGVuZXI7XHJcbn0oKSk7XG5cbnZhciBMYXp5Q2VsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMYXp5Q2VsbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIExhenlDZWxsKGxhenlJbml0VmFsdWUsIHN0cikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG51bGwsIG51bGwpIHx8IHRoaXM7XHJcbiAgICAgICAgVHJhbnNhY3Rpb24ucnVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHN0cilcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0cmVhbShzdHIpO1xyXG4gICAgICAgICAgICBfdGhpcy5sYXp5SW5pdFZhbHVlID0gbGF6eUluaXRWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBMYXp5Q2VsbC5wcm90b3R5cGUuc2FtcGxlTm9UcmFuc19fID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09IG51bGwgJiYgdGhpcy5sYXp5SW5pdFZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eUluaXRWYWx1ZS5nZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5sYXp5SW5pdFZhbHVlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExhenlDZWxsO1xyXG59KENlbGwpKTtcblxudmFyIE1lcmdlU3RhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sZWZ0X3ByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJpZ2h0X3ByZXNlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBNZXJnZVN0YXRlO1xyXG59KCkpO1xyXG52YXIgU3RyZWFtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RyZWFtKHZlcnRleCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5maXJpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXggPSB2ZXJ0ZXggPyB2ZXJ0ZXggOiBuZXcgVmVydGV4KFwiU3RyZWFtXCIsIDAsIFtdKTtcclxuICAgIH1cclxuICAgIFN0cmVhbS5wcm90b3R5cGUuZ2V0VmVydGV4X18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGV4O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIHRoZSBzdHJlYW0ncyBldmVudCB2YWx1ZXMgYWNjb3JkaW5nIHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgc28gdGhlIHJldHVybmVkXHJcbiAgICAgKiBTdHJlYW0ncyBldmVudCB2YWx1ZXMgcmVmbGVjdCB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIGlucHV0XHJcbiAgICAgKiBTdHJlYW0ncyBldmVudCB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0gZiBGdW5jdGlvbiB0byBhcHBseSB0byBjb252ZXJ0IHRoZSB2YWx1ZXMuIEl0IG1heSBjb25zdHJ1Y3QgRlJQIGxvZ2ljIG9yIHVzZVxyXG4gICAgICogICAge0BsaW5rIENlbGwjc2FtcGxlKCl9IGluIHdoaWNoIGNhc2UgaXQgaXMgZXF1aXZhbGVudCB0byB7QGxpbmsgU3RyZWFtI3NuYXBzaG90KENlbGwpfWluZyB0aGVcclxuICAgICAqICAgIGNlbGwuIEFwYXJ0IGZyb20gdGhpcyB0aGUgZnVuY3Rpb24gbXVzdCBiZSA8ZW0+cmVmZXJlbnRpYWxseSB0cmFuc3BhcmVudDwvZW0+LlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IFN0cmVhbVdpdGhTZW5kKG51bGwpO1xyXG4gICAgICAgIHZhciBmZiA9IExhbWJkYTFfdG9GdW5jdGlvbihmKTtcclxuICAgICAgICBvdXQudmVydGV4ID0gbmV3IFZlcnRleChcIm1hcFwiLCAwLCBbXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UodGhpcy52ZXJ0ZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5saXN0ZW5fKG91dC52ZXJ0ZXgsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGZmKGEpKTtcclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLmNvbmNhdCh0b1NvdXJjZXMoTGFtYmRhMV9kZXBzKGYpKSkpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIHN0cmVhbSdzIGV2ZW50IHZhbHVlcyBpbnRvIHRoZSBzcGVjaWZpZWQgY29uc3RhbnQgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gYiBDb25zdGFudCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgU3RyZWFtLnByb3RvdHlwZS5tYXBUbyA9IGZ1bmN0aW9uIChiKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IFN0cmVhbVdpdGhTZW5kKG51bGwpO1xyXG4gICAgICAgIG91dC52ZXJ0ZXggPSBuZXcgVmVydGV4KFwibWFwVG9cIiwgMCwgW1xyXG4gICAgICAgICAgICBuZXcgU291cmNlKHRoaXMudmVydGV4LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuXyhvdXQudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhiKTtcclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVmFyaWFudCBvZiB7QGxpbmsgU3RyZWFtI21lcmdlKFN0cmVhbSwgTGFtYmRhMil9IHRoYXQgbWVyZ2VzIHR3byBzdHJlYW1zIGFuZCB3aWxsIGRyb3AgYW4gZXZlbnRcclxuICAgICAqIGluIHRoZSBzaW11bHRhbmVvdXMgY2FzZS5cclxuICAgICAqIDxwPlxyXG4gICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdHdvIGV2ZW50cyBhcmUgc2ltdWx0YW5lb3VzIChpLmUuIGJvdGhcclxuICAgICAqIHdpdGhpbiB0aGUgc2FtZSB0cmFuc2FjdGlvbiksIHRoZSBldmVudCBmcm9tIDxlbT50aGlzPC9lbT4gd2lsbCB0YWtlIHByZWNlZGVuY2UsIGFuZFxyXG4gICAgICogdGhlIGV2ZW50IGZyb20gPGVtPnM8L2VtPiB3aWxsIGJlIGRyb3BwZWQuXHJcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBzcGVjaWZ5IHlvdXIgb3duIGNvbWJpbmluZyBmdW5jdGlvbiwgdXNlIHtAbGluayBTdHJlYW0jbWVyZ2UoU3RyZWFtLCBMYW1iZGEyKX0uXHJcbiAgICAgKiBzMS5vckVsc2UoczIpIGlzIGVxdWl2YWxlbnQgdG8gczEubWVyZ2UoczIsIChsLCByKSAtJmd0OyBsKS5cclxuICAgICAqIDxwPlxyXG4gICAgICogVGhlIG5hbWUgb3JFbHNlKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG1lcmdlKCkgdG8gbWFrZSBpdCByZWFsbHkgY2xlYXIgdGhhdCBjYXJlIHNob3VsZFxyXG4gICAgICogYmUgdGFrZW4sIGJlY2F1c2UgZXZlbnRzIGNhbiBiZSBkcm9wcGVkLlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLm9yRWxzZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2UocywgZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTWVyZ2UgdHdvIHN0cmVhbXMgb2YgdGhlIHNhbWUgdHlwZSBpbnRvIG9uZSwgc28gdGhhdCBldmVudHMgb24gZWl0aGVyIGlucHV0IGFwcGVhclxyXG4gICAgICogb24gdGhlIHJldHVybmVkIHN0cmVhbS5cclxuICAgICAqIDxwPlxyXG4gICAgICogSWYgdGhlIGV2ZW50cyBhcmUgc2ltdWx0YW5lb3VzICh0aGF0IGlzLCBvbmUgZXZlbnQgZnJvbSB0aGlzIGFuZCBvbmUgZnJvbSA8ZW0+czwvZW0+XHJcbiAgICAgKiBvY2N1cnJpbmcgaW4gdGhlIHNhbWUgdHJhbnNhY3Rpb24pLCBjb21iaW5lIHRoZW0gaW50byBvbmUgdXNpbmcgdGhlIHNwZWNpZmllZCBjb21iaW5pbmcgZnVuY3Rpb25cclxuICAgICAqIHNvIHRoYXQgdGhlIHJldHVybmVkIHN0cmVhbSBpcyBndWFyYW50ZWVkIG9ubHkgZXZlciB0byBoYXZlIG9uZSBldmVudCBwZXIgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBUaGUgZXZlbnQgZnJvbSA8ZW0+dGhpczwvZW0+IHdpbGwgYXBwZWFyIGF0IHRoZSBsZWZ0IGlucHV0IG9mIHRoZSBjb21iaW5pbmcgZnVuY3Rpb24sIGFuZFxyXG4gICAgICogdGhlIGV2ZW50IGZyb20gPGVtPnM8L2VtPiB3aWxsIGFwcGVhciBhdCB0aGUgcmlnaHQuXHJcbiAgICAgKiBAcGFyYW0gZiBGdW5jdGlvbiB0byBjb21iaW5lIHRoZSB2YWx1ZXMuIEl0IG1heSBjb25zdHJ1Y3QgRlJQIGxvZ2ljIG9yIHVzZVxyXG4gICAgICogICAge0BsaW5rIENlbGwjc2FtcGxlKCl9LiBBcGFydCBmcm9tIHRoaXMgdGhlIGZ1bmN0aW9uIG11c3QgYmUgPGVtPnJlZmVyZW50aWFsbHkgdHJhbnNwYXJlbnQ8L2VtPi5cclxuICAgICAqL1xyXG4gICAgU3RyZWFtLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChzLCBmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZmYgPSBMYW1iZGEyX3RvRnVuY3Rpb24oZik7XHJcbiAgICAgICAgdmFyIG1lcmdlU3RhdGUgPSBuZXcgTWVyZ2VTdGF0ZSgpO1xyXG4gICAgICAgIHZhciBwdW1waW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBTdHJlYW1XaXRoU2VuZChudWxsKTtcclxuICAgICAgICB2YXIgcHVtcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHB1bXBpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLnByaW9yaXRpemVkKG91dC5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVyZ2VTdGF0ZS5sZWZ0X3ByZXNlbnQgJiYgbWVyZ2VTdGF0ZS5yaWdodF9wcmVzZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGZmKG1lcmdlU3RhdGUubGVmdCwgbWVyZ2VTdGF0ZS5yaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWVyZ2VTdGF0ZS5sZWZ0X3ByZXNlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQuc2VuZF8obWVyZ2VTdGF0ZS5sZWZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lcmdlU3RhdGUucmlnaHRfcHJlc2VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhtZXJnZVN0YXRlLnJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lcmdlU3RhdGUubGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBtZXJnZVN0YXRlLmxlZnRfcHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbWVyZ2VTdGF0ZS5yaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBtZXJnZVN0YXRlLnJpZ2h0X3ByZXNlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHB1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdmVydGV4ID0gbmV3IFZlcnRleChcIm1lcmdlXCIsIDAsIFtcclxuICAgICAgICAgICAgbmV3IFNvdXJjZSh0aGlzLnZlcnRleCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGlzdGVuXyhvdXQudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgbWVyZ2VTdGF0ZS5sZWZ0ID0gYTtcclxuICAgICAgICAgICAgICAgIG1lcmdlU3RhdGUubGVmdF9wcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHB1bXAoKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpOyB9KSxcclxuICAgICAgICAgICAgbmV3IFNvdXJjZShzLnZlcnRleCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcy5saXN0ZW5fKG91dC52ZXJ0ZXgsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICBtZXJnZVN0YXRlLnJpZ2h0ID0gYTtcclxuICAgICAgICAgICAgICAgIG1lcmdlU3RhdGUucmlnaHRfcHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwdW1wKCk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTsgfSlcclxuICAgICAgICBdLmNvbmNhdCh0b1NvdXJjZXMoTGFtYmRhMl9kZXBzKGYpKSkpO1xyXG4gICAgICAgIG91dC52ZXJ0ZXggPSB2ZXJ0ZXg7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhIHN0cmVhbSB0aGF0IG9ubHkgb3V0cHV0cyBldmVudHMgZm9yIHdoaWNoIHRoZSBwcmVkaWNhdGUgcmV0dXJucyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IFN0cmVhbVdpdGhTZW5kKG51bGwpO1xyXG4gICAgICAgIHZhciBmZiA9IExhbWJkYTFfdG9GdW5jdGlvbihmKTtcclxuICAgICAgICBvdXQudmVydGV4ID0gbmV3IFZlcnRleChcImZpbHRlclwiLCAwLCBbXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UodGhpcy52ZXJ0ZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5saXN0ZW5fKG91dC52ZXJ0ZXgsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZmKGEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQuc2VuZF8oYSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXS5jb25jYXQodG9Tb3VyY2VzKExhbWJkYTFfZGVwcyhmKSkpKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgc3RyZWFtIHRoYXQgb25seSBvdXRwdXRzIGV2ZW50cyB0aGF0IGhhdmUgcHJlc2VudFxyXG4gICAgICogdmFsdWVzLCBkaXNjYXJkaW5nIG51bGwgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLmZpbHRlck5vdE51bGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IFN0cmVhbVdpdGhTZW5kKG51bGwpO1xyXG4gICAgICAgIG91dC52ZXJ0ZXggPSBuZXcgVmVydGV4KFwiZmlsdGVyTm90TnVsbFwiLCAwLCBbXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UodGhpcy52ZXJ0ZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5saXN0ZW5fKG91dC52ZXJ0ZXgsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhhKTtcclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgc3RyZWFtIHRoYXQgb25seSBvdXRwdXRzIGV2ZW50cyBmcm9tIHRoZSBpbnB1dCBzdHJlYW1cclxuICAgICAqIHdoZW4gdGhlIHNwZWNpZmllZCBjZWxsJ3MgdmFsdWUgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgU3RyZWFtLnByb3RvdHlwZS5nYXRlID0gZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbmFwc2hvdChjLCBmdW5jdGlvbiAoYSwgcHJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlZCA/IGEgOiBudWxsO1xyXG4gICAgICAgIH0pLmZpbHRlck5vdE51bGwoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFZhcmlhbnQgb2Yge0BsaW5rIHNuYXBzaG90KENlbGwsIExhbWJkYTIpfSB0aGF0IGNhcHR1cmVzIHRoZSBjZWxsJ3MgdmFsdWVcclxuICAgICAqIGF0IHRoZSB0aW1lIG9mIHRoZSBldmVudCBmaXJpbmcsIGlnbm9yaW5nIHRoZSBzdHJlYW0ncyB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgU3RyZWFtLnByb3RvdHlwZS5zbmFwc2hvdDEgPSBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBTdHJlYW1XaXRoU2VuZChudWxsKTtcclxuICAgICAgICBvdXQudmVydGV4ID0gbmV3IFZlcnRleChcInNuYXBzaG90MVwiLCAwLCBbXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UodGhpcy52ZXJ0ZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5saXN0ZW5fKG91dC52ZXJ0ZXgsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGMuc2FtcGxlTm9UcmFuc19fKCkpO1xyXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IFNvdXJjZShjLmdldFZlcnRleF9fKCksIG51bGwpXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhIHN0cmVhbSB3aG9zZSBldmVudHMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIGNvbWJpbmF0aW9uIHVzaW5nIHRoZSBzcGVjaWZpZWRcclxuICAgICAqIGZ1bmN0aW9uIG9mIHRoZSBpbnB1dCBzdHJlYW0ncyBldmVudCB2YWx1ZSBhbmQgdGhlIHZhbHVlIG9mIHRoZSBjZWxsIGF0IHRoYXQgdGltZS5cclxuICAgICAqIDxQPlxyXG4gICAgICogVGhlcmUgaXMgYW4gaW1wbGljaXQgZGVsYXk6IFN0YXRlIHVwZGF0ZXMgY2F1c2VkIGJ5IGV2ZW50IGZpcmluZ3MgYmVpbmcgaGVsZCB3aXRoXHJcbiAgICAgKiB7QGxpbmsgU3RyZWFtI2hvbGQoT2JqZWN0KX0gZG9uJ3QgYmVjb21lIHZpc2libGUgYXMgdGhlIGNlbGwncyBjdXJyZW50IHZhbHVlIHVudGlsXHJcbiAgICAgKiB0aGUgZm9sbG93aW5nIHRyYW5zYWN0aW9uLiBUbyBwdXQgdGhpcyBhbm90aGVyIHdheSwge0BsaW5rIFN0cmVhbSNzbmFwc2hvdChDZWxsLCBMYW1iZGEyKX1cclxuICAgICAqIGFsd2F5cyBzZWVzIHRoZSB2YWx1ZSBvZiBhIGNlbGwgYXMgaXQgd2FzIGJlZm9yZSBhbnkgc3RhdGUgY2hhbmdlcyBmcm9tIHRoZSBjdXJyZW50XHJcbiAgICAgKiB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgU3RyZWFtLnByb3RvdHlwZS5zbmFwc2hvdCA9IGZ1bmN0aW9uIChiLCBmXykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBTdHJlYW1XaXRoU2VuZChudWxsKTtcclxuICAgICAgICB2YXIgZmYgPSBMYW1iZGEyX3RvRnVuY3Rpb24oZl8pO1xyXG4gICAgICAgIG91dC52ZXJ0ZXggPSBuZXcgVmVydGV4KFwic25hcHNob3RcIiwgMCwgW1xyXG4gICAgICAgICAgICBuZXcgU291cmNlKHRoaXMudmVydGV4LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuXyhvdXQudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhmZihhLCBiLnNhbXBsZU5vVHJhbnNfXygpKSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgU291cmNlKGIuZ2V0VmVydGV4X18oKSwgbnVsbClcclxuICAgICAgICBdLmNvbmNhdCh0b1NvdXJjZXMoTGFtYmRhMl9kZXBzKGZfKSkpKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgc3RyZWFtIHdob3NlIGV2ZW50cyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgY29tYmluYXRpb24gdXNpbmcgdGhlIHNwZWNpZmllZFxyXG4gICAgICogZnVuY3Rpb24gb2YgdGhlIGlucHV0IHN0cmVhbSdzIGV2ZW50IHZhbHVlIGFuZCB0aGUgdmFsdWUgb2YgdGhlIGNlbGxzIGF0IHRoYXQgdGltZS5cclxuICAgICAqIDxQPlxyXG4gICAgICogVGhlcmUgaXMgYW4gaW1wbGljaXQgZGVsYXk6IFN0YXRlIHVwZGF0ZXMgY2F1c2VkIGJ5IGV2ZW50IGZpcmluZ3MgYmVpbmcgaGVsZCB3aXRoXHJcbiAgICAgKiB7QGxpbmsgU3RyZWFtI2hvbGQoT2JqZWN0KX0gZG9uJ3QgYmVjb21lIHZpc2libGUgYXMgdGhlIGNlbGwncyBjdXJyZW50IHZhbHVlIHVudGlsXHJcbiAgICAgKiB0aGUgZm9sbG93aW5nIHRyYW5zYWN0aW9uLiBUbyBwdXQgdGhpcyBhbm90aGVyIHdheSwgc25hcHNob3QoKVxyXG4gICAgICogYWx3YXlzIHNlZXMgdGhlIHZhbHVlIG9mIGEgY2VsbCBhcyBpdCB3YXMgYmVmb3JlIGFueSBzdGF0ZSBjaGFuZ2VzIGZyb20gdGhlIGN1cnJlbnRcclxuICAgICAqIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLnNuYXBzaG90MyA9IGZ1bmN0aW9uIChiLCBjLCBmXykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBTdHJlYW1XaXRoU2VuZChudWxsKTtcclxuICAgICAgICB2YXIgZmYgPSBMYW1iZGEzX3RvRnVuY3Rpb24oZl8pO1xyXG4gICAgICAgIG91dC52ZXJ0ZXggPSBuZXcgVmVydGV4KFwic25hcHNob3RcIiwgMCwgW1xyXG4gICAgICAgICAgICBuZXcgU291cmNlKHRoaXMudmVydGV4LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuXyhvdXQudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhmZihhLCBiLnNhbXBsZU5vVHJhbnNfXygpLCBjLnNhbXBsZU5vVHJhbnNfXygpKSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgU291cmNlKGIuZ2V0VmVydGV4X18oKSwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UoYy5nZXRWZXJ0ZXhfXygpLCBudWxsKVxyXG4gICAgICAgIF0uY29uY2F0KHRvU291cmNlcyhMYW1iZGEzX2RlcHMoZl8pKSkpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBzdHJlYW0gd2hvc2UgZXZlbnRzIGFyZSB0aGUgcmVzdWx0IG9mIHRoZSBjb21iaW5hdGlvbiB1c2luZyB0aGUgc3BlY2lmaWVkXHJcbiAgICAgKiBmdW5jdGlvbiBvZiB0aGUgaW5wdXQgc3RyZWFtJ3MgZXZlbnQgdmFsdWUgYW5kIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbHMgYXQgdGhhdCB0aW1lLlxyXG4gICAgICogPFA+XHJcbiAgICAgKiBUaGVyZSBpcyBhbiBpbXBsaWNpdCBkZWxheTogU3RhdGUgdXBkYXRlcyBjYXVzZWQgYnkgZXZlbnQgZmlyaW5ncyBiZWluZyBoZWxkIHdpdGhcclxuICAgICAqIHtAbGluayBTdHJlYW0jaG9sZChPYmplY3QpfSBkb24ndCBiZWNvbWUgdmlzaWJsZSBhcyB0aGUgY2VsbCdzIGN1cnJlbnQgdmFsdWUgdW50aWxcclxuICAgICAqIHRoZSBmb2xsb3dpbmcgdHJhbnNhY3Rpb24uIFRvIHB1dCB0aGlzIGFub3RoZXIgd2F5LCBzbmFwc2hvdCgpXHJcbiAgICAgKiBhbHdheXMgc2VlcyB0aGUgdmFsdWUgb2YgYSBjZWxsIGFzIGl0IHdhcyBiZWZvcmUgYW55IHN0YXRlIGNoYW5nZXMgZnJvbSB0aGUgY3VycmVudFxyXG4gICAgICogdHJhbnNhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIFN0cmVhbS5wcm90b3R5cGUuc25hcHNob3Q0ID0gZnVuY3Rpb24gKGIsIGMsIGQsIGZfKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb3V0ID0gbmV3IFN0cmVhbVdpdGhTZW5kKG51bGwpO1xyXG4gICAgICAgIHZhciBmZiA9IExhbWJkYTRfdG9GdW5jdGlvbihmXyk7XHJcbiAgICAgICAgb3V0LnZlcnRleCA9IG5ldyBWZXJ0ZXgoXCJzbmFwc2hvdFwiLCAwLCBbXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UodGhpcy52ZXJ0ZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5saXN0ZW5fKG91dC52ZXJ0ZXgsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGZmKGEsIGIuc2FtcGxlTm9UcmFuc19fKCksIGMuc2FtcGxlTm9UcmFuc19fKCksIGQuc2FtcGxlTm9UcmFuc19fKCkpKTtcclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UoYi5nZXRWZXJ0ZXhfXygpLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IFNvdXJjZShjLmdldFZlcnRleF9fKCksIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgU291cmNlKGQuZ2V0VmVydGV4X18oKSwgbnVsbClcclxuICAgICAgICBdLmNvbmNhdCh0b1NvdXJjZXMoTGFtYmRhNF9kZXBzKGZfKSkpKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgc3RyZWFtIHdob3NlIGV2ZW50cyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgY29tYmluYXRpb24gdXNpbmcgdGhlIHNwZWNpZmllZFxyXG4gICAgICogZnVuY3Rpb24gb2YgdGhlIGlucHV0IHN0cmVhbSdzIGV2ZW50IHZhbHVlIGFuZCB0aGUgdmFsdWUgb2YgdGhlIGNlbGxzIGF0IHRoYXQgdGltZS5cclxuICAgICAqIDxQPlxyXG4gICAgICogVGhlcmUgaXMgYW4gaW1wbGljaXQgZGVsYXk6IFN0YXRlIHVwZGF0ZXMgY2F1c2VkIGJ5IGV2ZW50IGZpcmluZ3MgYmVpbmcgaGVsZCB3aXRoXHJcbiAgICAgKiB7QGxpbmsgU3RyZWFtI2hvbGQoT2JqZWN0KX0gZG9uJ3QgYmVjb21lIHZpc2libGUgYXMgdGhlIGNlbGwncyBjdXJyZW50IHZhbHVlIHVudGlsXHJcbiAgICAgKiB0aGUgZm9sbG93aW5nIHRyYW5zYWN0aW9uLiBUbyBwdXQgdGhpcyBhbm90aGVyIHdheSwgc25hcHNob3QoKVxyXG4gICAgICogYWx3YXlzIHNlZXMgdGhlIHZhbHVlIG9mIGEgY2VsbCBhcyBpdCB3YXMgYmVmb3JlIGFueSBzdGF0ZSBjaGFuZ2VzIGZyb20gdGhlIGN1cnJlbnRcclxuICAgICAqIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLnNuYXBzaG90NSA9IGZ1bmN0aW9uIChiLCBjLCBkLCBlLCBmXykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBTdHJlYW1XaXRoU2VuZChudWxsKTtcclxuICAgICAgICB2YXIgZmYgPSBMYW1iZGE1X3RvRnVuY3Rpb24oZl8pO1xyXG4gICAgICAgIG91dC52ZXJ0ZXggPSBuZXcgVmVydGV4KFwic25hcHNob3RcIiwgMCwgW1xyXG4gICAgICAgICAgICBuZXcgU291cmNlKHRoaXMudmVydGV4LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuXyhvdXQudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhmZihhLCBiLnNhbXBsZU5vVHJhbnNfXygpLCBjLnNhbXBsZU5vVHJhbnNfXygpLCBkLnNhbXBsZU5vVHJhbnNfXygpLCBlLnNhbXBsZU5vVHJhbnNfXygpKSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgU291cmNlKGIuZ2V0VmVydGV4X18oKSwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UoYy5nZXRWZXJ0ZXhfXygpLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IFNvdXJjZShkLmdldFZlcnRleF9fKCksIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgU291cmNlKGUuZ2V0VmVydGV4X18oKSwgbnVsbClcclxuICAgICAgICBdLmNvbmNhdCh0b1NvdXJjZXMoTGFtYmRhNV9kZXBzKGZfKSkpKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgc3RyZWFtIHdob3NlIGV2ZW50cyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgY29tYmluYXRpb24gdXNpbmcgdGhlIHNwZWNpZmllZFxyXG4gICAgICogZnVuY3Rpb24gb2YgdGhlIGlucHV0IHN0cmVhbSdzIGV2ZW50IHZhbHVlIGFuZCB0aGUgdmFsdWUgb2YgdGhlIGNlbGxzIGF0IHRoYXQgdGltZS5cclxuICAgICAqIDxQPlxyXG4gICAgICogVGhlcmUgaXMgYW4gaW1wbGljaXQgZGVsYXk6IFN0YXRlIHVwZGF0ZXMgY2F1c2VkIGJ5IGV2ZW50IGZpcmluZ3MgYmVpbmcgaGVsZCB3aXRoXHJcbiAgICAgKiB7QGxpbmsgU3RyZWFtI2hvbGQoT2JqZWN0KX0gZG9uJ3QgYmVjb21lIHZpc2libGUgYXMgdGhlIGNlbGwncyBjdXJyZW50IHZhbHVlIHVudGlsXHJcbiAgICAgKiB0aGUgZm9sbG93aW5nIHRyYW5zYWN0aW9uLiBUbyBwdXQgdGhpcyBhbm90aGVyIHdheSwgc25hcHNob3QoKVxyXG4gICAgICogYWx3YXlzIHNlZXMgdGhlIHZhbHVlIG9mIGEgY2VsbCBhcyBpdCB3YXMgYmVmb3JlIGFueSBzdGF0ZSBjaGFuZ2VzIGZyb20gdGhlIGN1cnJlbnRcclxuICAgICAqIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLnNuYXBzaG90NiA9IGZ1bmN0aW9uIChiLCBjLCBkLCBlLCBmLCBmXykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBTdHJlYW1XaXRoU2VuZChudWxsKTtcclxuICAgICAgICB2YXIgZmYgPSBMYW1iZGE2X3RvRnVuY3Rpb24oZl8pO1xyXG4gICAgICAgIG91dC52ZXJ0ZXggPSBuZXcgVmVydGV4KFwic25hcHNob3RcIiwgMCwgW1xyXG4gICAgICAgICAgICBuZXcgU291cmNlKHRoaXMudmVydGV4LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuXyhvdXQudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5zZW5kXyhmZihhLCBiLnNhbXBsZU5vVHJhbnNfXygpLCBjLnNhbXBsZU5vVHJhbnNfXygpLCBkLnNhbXBsZU5vVHJhbnNfXygpLCBlLnNhbXBsZU5vVHJhbnNfXygpLCBmLnNhbXBsZU5vVHJhbnNfXygpKSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgU291cmNlKGIuZ2V0VmVydGV4X18oKSwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UoYy5nZXRWZXJ0ZXhfXygpLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IFNvdXJjZShkLmdldFZlcnRleF9fKCksIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgU291cmNlKGUuZ2V0VmVydGV4X18oKSwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBTb3VyY2UoZi5nZXRWZXJ0ZXhfXygpLCBudWxsKVxyXG4gICAgICAgIF0uY29uY2F0KHRvU291cmNlcyhMYW1iZGE2X2RlcHMoZl8pKSkpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSB7QGxpbmsgQ2VsbH0gd2l0aCB0aGUgc3BlY2lmaWVkIGluaXRpYWwgdmFsdWUsIHRoYXQgaXMgdXBkYXRlZFxyXG4gICAgICogYnkgdGhpcyBzdHJlYW0ncyBldmVudCB2YWx1ZXMuXHJcbiAgICAgKiA8cD5cclxuICAgICAqIFRoZXJlIGlzIGFuIGltcGxpY2l0IGRlbGF5OiBTdGF0ZSB1cGRhdGVzIGNhdXNlZCBieSBldmVudCBmaXJpbmdzIGRvbid0IGJlY29tZVxyXG4gICAgICogdmlzaWJsZSBhcyB0aGUgY2VsbCdzIGN1cnJlbnQgdmFsdWUgYXMgdmlld2VkIGJ5IHtAbGluayBTdHJlYW0jc25hcHNob3QoQ2VsbCwgTGFtYmRhMil9XHJcbiAgICAgKiB1bnRpbCB0aGUgZm9sbG93aW5nIHRyYW5zYWN0aW9uLiBUbyBwdXQgdGhpcyBhbm90aGVyIHdheSxcclxuICAgICAqIHtAbGluayBTdHJlYW0jc25hcHNob3QoQ2VsbCwgTGFtYmRhMil9IGFsd2F5cyBzZWVzIHRoZSB2YWx1ZSBvZiBhIGNlbGwgYXMgaXQgd2FzIGJlZm9yZVxyXG4gICAgICogYW55IHN0YXRlIGNoYW5nZXMgZnJvbSB0aGUgY3VycmVudCB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgU3RyZWFtLnByb3RvdHlwZS5ob2xkID0gZnVuY3Rpb24gKGluaXRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2VsbChpbml0VmFsdWUsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQSB2YXJpYW50IG9mIHtAbGluayBob2xkKE9iamVjdCl9IHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBjYXB0dXJlZCBieSB7QGxpbmsgQ2VsbCNzYW1wbGVMYXp5KCl9LlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLmhvbGRMYXp5ID0gZnVuY3Rpb24gKGluaXRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGF6eUNlbGwoaW5pdFZhbHVlLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybSBhbiBldmVudCB3aXRoIGEgZ2VuZXJhbGl6ZWQgc3RhdGUgbG9vcCAoYSBNZWFseSBtYWNoaW5lKS4gVGhlIGZ1bmN0aW9uXHJcbiAgICAgKiBpcyBwYXNzZWQgdGhlIGlucHV0IGFuZCB0aGUgb2xkIHN0YXRlIGFuZCByZXR1cm5zIHRoZSBuZXcgc3RhdGUgYW5kIG91dHB1dCB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBmIEZ1bmN0aW9uIHRvIGFwcGx5IHRvIHVwZGF0ZSB0aGUgc3RhdGUuIEl0IG1heSBjb25zdHJ1Y3QgRlJQIGxvZ2ljIG9yIHVzZVxyXG4gICAgICogICAge0BsaW5rIENlbGwjc2FtcGxlKCl9IGluIHdoaWNoIGNhc2UgaXQgaXMgZXF1aXZhbGVudCB0byB7QGxpbmsgU3RyZWFtI3NuYXBzaG90KENlbGwpfWluZyB0aGVcclxuICAgICAqICAgIGNlbGwuIEFwYXJ0IGZyb20gdGhpcyB0aGUgZnVuY3Rpb24gbXVzdCBiZSA8ZW0+cmVmZXJlbnRpYWxseSB0cmFuc3BhcmVudDwvZW0+LlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLmNvbGxlY3QgPSBmdW5jdGlvbiAoaW5pdFN0YXRlLCBmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdExhenkobmV3IExhenkoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5pdFN0YXRlOyB9KSwgZik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHZhcmlhbnQgb2Yge0BsaW5rIGNvbGxlY3QoT2JqZWN0LCBMYW1iZGEyKX0gdGhhdCB0YWtlcyBhbiBpbml0aWFsIHN0YXRlIHJldHVybmVkIGJ5XHJcbiAgICAgKiB7QGxpbmsgQ2VsbCNzYW1wbGVMYXp5KCl9LlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLmNvbGxlY3RMYXp5ID0gZnVuY3Rpb24gKGluaXRTdGF0ZSwgZikge1xyXG4gICAgICAgIHZhciBlYSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlcyA9IG5ldyBTdHJlYW1Mb29wKCksIHMgPSBlcy5ob2xkTGF6eShpbml0U3RhdGUpLCBlYnMgPSBlYS5zbmFwc2hvdChzLCBmKSwgZWIgPSBlYnMubWFwKGZ1bmN0aW9uIChicykgeyByZXR1cm4gYnMuYTsgfSksIGVzX291dCA9IGVicy5tYXAoZnVuY3Rpb24gKGJzKSB7IHJldHVybiBicy5iOyB9KTtcclxuICAgICAgICAgICAgZXMubG9vcChlc19vdXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBY2N1bXVsYXRlIG9uIGlucHV0IGV2ZW50LCBvdXRwdXR0aW5nIHRoZSBuZXcgc3RhdGUgZWFjaCB0aW1lLlxyXG4gICAgICogQHBhcmFtIGYgRnVuY3Rpb24gdG8gYXBwbHkgdG8gdXBkYXRlIHRoZSBzdGF0ZS4gSXQgbWF5IGNvbnN0cnVjdCBGUlAgbG9naWMgb3IgdXNlXHJcbiAgICAgKiAgICB7QGxpbmsgQ2VsbCNzYW1wbGUoKX0gaW4gd2hpY2ggY2FzZSBpdCBpcyBlcXVpdmFsZW50IHRvIHtAbGluayBTdHJlYW0jc25hcHNob3QoQ2VsbCl9aW5nIHRoZVxyXG4gICAgICogICAgY2VsbC4gQXBhcnQgZnJvbSB0aGlzIHRoZSBmdW5jdGlvbiBtdXN0IGJlIDxlbT5yZWZlcmVudGlhbGx5IHRyYW5zcGFyZW50PC9lbT4uXHJcbiAgICAgKi9cclxuICAgIFN0cmVhbS5wcm90b3R5cGUuYWNjdW0gPSBmdW5jdGlvbiAoaW5pdFN0YXRlLCBmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjdW1MYXp5KG5ldyBMYXp5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluaXRTdGF0ZTsgfSksIGYpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQSB2YXJpYW50IG9mIHtAbGluayBhY2N1bShPYmplY3QsIExhbWJkYTIpfSB0aGF0IHRha2VzIGFuIGluaXRpYWwgc3RhdGUgcmV0dXJuZWQgYnlcclxuICAgICAqIHtAbGluayBDZWxsI3NhbXBsZUxhenkoKX0uXHJcbiAgICAgKi9cclxuICAgIFN0cmVhbS5wcm90b3R5cGUuYWNjdW1MYXp5ID0gZnVuY3Rpb24gKGluaXRTdGF0ZSwgZikge1xyXG4gICAgICAgIHZhciBlYSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlcyA9IG5ldyBTdHJlYW1Mb29wKCksIHMgPSBlcy5ob2xkTGF6eShpbml0U3RhdGUpLCBlc19vdXQgPSBlYS5zbmFwc2hvdChzLCBmKTtcclxuICAgICAgICAgICAgZXMubG9vcChlc19vdXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXNfb3V0LmhvbGRMYXp5KGluaXRTdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBzdHJlYW0gdGhhdCBvdXRwdXRzIG9ubHkgb25lIHZhbHVlOiB0aGUgbmV4dCBldmVudCBvZiB0aGVcclxuICAgICAqIGlucHV0IHN0cmVhbSwgc3RhcnRpbmcgZnJvbSB0aGUgdHJhbnNhY3Rpb24gaW4gd2hpY2ggb25jZSgpIHdhcyBpbnZva2VkLlxyXG4gICAgICovXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldiA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gbmV3IFN0cmVhbVdpdGhTZW5kPEE+KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGEgOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxhID0gZXYubGlzdGVuXyhvdXQudmVydGV4LCAoYSA6IEEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIHRoZSBpbXBsZW1lbnRhdGlvbiBhYm92ZSwgYmVhY3VzZSBkZXJlZ2lzdGVyaW5nXHJcbiAgICAgICAgLy8gbGlzdGVuZXJzIHRyaWdnZXJzIHRoZSBleGNlcHRpb25cclxuICAgICAgICAvLyBcInNlbmQoKSB3YXMgaW52b2tlZCBiZWZvcmUgbGlzdGVuZXJzIHdlcmUgcmVnaXN0ZXJlZFwiXHJcbiAgICAgICAgLy8gV2UgY2FuIHJldmlzaXQgdGhpcyBhbm90aGVyIHRpbWUuIEZvciBub3cgd2Ugd2lsbCB1c2UgdGhlIGxlc3NcclxuICAgICAgICAvLyBlZmZpY2llbnQgaW1wbGVtZW50YXRpb24gYmVsb3cuXHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICByZXR1cm4gVHJhbnNhY3Rpb24ucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lLmdhdGUobWUubWFwVG8oZmFsc2UpLmhvbGQodHJ1ZSkpOyB9KTtcclxuICAgIH07XHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gVHJhbnNhY3Rpb24ucnVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxpc3Rlbl8oVmVydGV4Lk5VTEwsIGgsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdHJlYW0ucHJvdG90eXBlLmxpc3Rlbl8gPSBmdW5jdGlvbiAodGFyZ2V0LCBoLCBzdXBwcmVzc0VhcmxpZXJGaXJpbmdzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy52ZXJ0ZXgucmVnaXN0ZXIodGFyZ2V0KSlcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLnJlcXVlc3RSZWdlbigpO1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihoLCB0YXJnZXQpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIGlmICghc3VwcHJlc3NFYXJsaWVyRmlyaW5ncyAmJiB0aGlzLmZpcmluZ3MubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgdmFyIGZpcmluZ3NfMSA9IHRoaXMuZmlyaW5ncy5zbGljZSgpO1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24ucHJpb3JpdGl6ZWQodGFyZ2V0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbnl0aGluZyBzZW50IGFscmVhZHkgaW4gdGhpcyB0cmFuc2FjdGlvbiBtdXN0IGJlIHNlbnQgbm93IHNvIHRoYXRcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlJ3Mgbm8gb3JkZXIgZGVwZW5kZW5jeSBiZXR3ZWVuIHNlbmQgYW5kIGxpc3Rlbi5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlyaW5nc18xLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGgoZmlyaW5nc18xW2ldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZW1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGlzdGVuZXJzW2ldID09IGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVtb3ZlZClcclxuICAgICAgICAgICAgICAgIF90aGlzLnZlcnRleC5kZXJlZ2lzdGVyKHRhcmdldCk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZhbnRhc3ktbGFuZCBBbGdlYnJhaWMgRGF0YSBUeXBlIENvbXBhdGFiaWxpdHkuXHJcbiAgICAgKiBTdHJlYW0gc2F0aXNmaWVzIHRoZSBGdW5jdG9yIGFuZCBNb25vaWQgQ2F0ZWdvcmllcyAoYW5kIGhlbmNlIFNlbWlncm91cClcclxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmR9IGZvciBtb3JlIGluZm9cclxuICAgICAqL1xyXG4gICAgLy9tYXAgOjogRnVuY3RvciBmID0+IGYgYSB+PiAoYSAtPiBiKSAtPiBmIGJcclxuICAgIFN0cmVhbS5wcm90b3R5cGVbJ2ZhbnRhc3ktbGFuZC9tYXAnXSA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwKGYpO1xyXG4gICAgfTtcclxuICAgIC8vY29uY2F0IDo6IFNlbWlncm91cCBhID0+IGEgfj4gYSAtPiBhXHJcbiAgICBTdHJlYW0ucHJvdG90eXBlWydmYW50YXN5LWxhbmQvY29uY2F0J10gPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lcmdlKGEsIGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFouU2VtaWdyb3VwLnRlc3QobGVmdCkpID8gWi5jb25jYXQobGVmdCwgcmlnaHQpIDogbGVmdDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvL2VtcHR5IDo6IE1vbm9pZCBtID0+ICgpIC0+IG1cclxuICAgIFN0cmVhbS5wcm90b3R5cGVbJ2ZhbnRhc3ktbGFuZC9lbXB0eSddID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyZWFtKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmVhbTtcclxufSgpKTtcclxudmFyIFN0cmVhbVdpdGhTZW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFN0cmVhbVdpdGhTZW5kLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU3RyZWFtV2l0aFNlbmQodmVydGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHZlcnRleCkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFN0cmVhbVdpdGhTZW5kLnByb3RvdHlwZS5zZXRWZXJ0ZXhfXyA9IGZ1bmN0aW9uICh2ZXJ0ZXgpIHtcclxuICAgICAgICB0aGlzLnZlcnRleCA9IHZlcnRleDtcclxuICAgIH07XHJcbiAgICBTdHJlYW1XaXRoU2VuZC5wcm90b3R5cGUuc2VuZF8gPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlyaW5ncy5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLmxhc3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZmlyaW5ncyA9IFtdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcmluZ3MucHVzaChhKTtcclxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuc2xpY2UoKTtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciBoID0gbGlzdGVuZXJzW2ldLmg7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uLmN1cnJlbnRUcmFuc2FjdGlvbi5wcmlvcml0aXplZChsaXN0ZW5lcnNbaV0udGFyZ2V0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24uaW5DYWxsYmFjaysrO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBoKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uLmN1cnJlbnRUcmFuc2FjdGlvbi5pbkNhbGxiYWNrLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uY3VycmVudFRyYW5zYWN0aW9uLmluQ2FsbGJhY2stLTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgX2xvb3BfMShpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmVhbVdpdGhTZW5kO1xyXG59KFN0cmVhbSkpO1xyXG4vKipcclxuICogQSBmb3J3YXJkIHJlZmVyZW5jZSBmb3IgYSB7QGxpbmsgU3RyZWFtfSBlcXVpdmFsZW50IHRvIHRoZSBTdHJlYW0gdGhhdCBpcyByZWZlcmVuY2VkLlxyXG4gKi9cclxudmFyIFN0cmVhbUxvb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU3RyZWFtTG9vcCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFN0cmVhbUxvb3AoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5hc3NpZ25lZF9fID0gZmFsc2U7IC8vIHRvIGRvOiBGaWd1cmUgb3V0IGhvdyB0byBoaWRlIHRoaXNcclxuICAgICAgICBfdGhpcy52ZXJ0ZXgubmFtZSA9IFwiU3RyZWFtTG9vcFwiO1xyXG4gICAgICAgIGlmIChUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24gPT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmVhbUxvb3AvQ2VsbExvb3AgbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBleHBsaWNpdCB0cmFuc2FjdGlvblwiKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc29sdmUgdGhlIGxvb3AgdG8gc3BlY2lmeSB3aGF0IHRoZSBTdHJlYW1Mb29wIHdhcyBhIGZvcndhcmQgcmVmZXJlbmNlIHRvLiBJdFxyXG4gICAgICogbXVzdCBiZSBpbnZva2VkIGluc2lkZSB0aGUgc2FtZSB0cmFuc2FjdGlvbiBhcyB0aGUgcGxhY2Ugd2hlcmUgdGhlIFN0cmVhbUxvb3AgaXMgdXNlZC5cclxuICAgICAqIFRoaXMgcmVxdWlyZXMgeW91IHRvIGNyZWF0ZSBhbiBleHBsaWNpdCB0cmFuc2FjdGlvbiB3aXRoIHtAbGluayBUcmFuc2FjdGlvbiNydW4oTGFtYmRhMCl9XHJcbiAgICAgKiBvciB7QGxpbmsgVHJhbnNhY3Rpb24jcnVuVm9pZChSdW5uYWJsZSl9LlxyXG4gICAgICovXHJcbiAgICBTdHJlYW1Mb29wLnByb3RvdHlwZS5sb29wID0gZnVuY3Rpb24gKHNhX291dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuYXNzaWduZWRfXylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RyZWFtTG9vcCBsb29wZWQgbW9yZSB0aGFuIG9uY2VcIik7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25lZF9fID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZlcnRleC5hZGRTb3VyY2UobmV3IFNvdXJjZShzYV9vdXQuZ2V0VmVydGV4X18oKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2Ffb3V0Lmxpc3Rlbl8oX3RoaXMudmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZF8oYSk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmVhbUxvb3A7XHJcbn0oU3RyZWFtV2l0aFNlbmQpKTtcblxudmFyIENvYWxlc2NlSGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvYWxlc2NlSGFuZGxlcihmLCBvdXQpIHtcclxuICAgICAgICB0aGlzLmYgPSBMYW1iZGEyX3RvRnVuY3Rpb24oZik7XHJcbiAgICAgICAgdGhpcy5vdXQgPSBvdXQ7XHJcbiAgICAgICAgdGhpcy5vdXQuZ2V0VmVydGV4X18oKS5zb3VyY2VzID0gdGhpcy5vdXQuZ2V0VmVydGV4X18oKS5zb3VyY2VzLmNvbmNhdCh0b1NvdXJjZXMoTGFtYmRhMl9kZXBzKGYpKSk7XHJcbiAgICAgICAgdGhpcy5hY2N1bVZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBDb2FsZXNjZUhhbmRsZXIucHJvdG90eXBlLnNlbmRfID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmFjY3VtVmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuYWNjdW0gPSB0aGlzLmYodGhpcy5hY2N1bSwgYSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uLmN1cnJlbnRUcmFuc2FjdGlvbi5wcmlvcml0aXplZCh0aGlzLm91dC5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vdXQuc2VuZF8oX3RoaXMuYWNjdW0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWNjdW1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWNjdW0gPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hY2N1bSA9IGE7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjdW1WYWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2FsZXNjZUhhbmRsZXI7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBBIHN0cmVhbSB0aGF0IGFsbG93cyB2YWx1ZXMgdG8gYmUgcHVzaGVkIGludG8gaXQsIGFjdGluZyBhcyBhbiBpbnRlcmZhY2UgYmV0d2VlbiB0aGVcclxuICogd29ybGQgb2YgSS9PIGFuZCB0aGUgd29ybGQgb2YgRlJQLiBDb2RlIHRoYXQgZXhwb3J0cyBTdHJlYW1TaW5rcyBmb3IgcmVhZC1vbmx5IHVzZVxyXG4gKiBzaG91bGQgZG93bmNhc3QgdG8ge0BsaW5rIFN0cmVhbX0uXHJcbiAqL1xyXG52YXIgU3RyZWFtU2luayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTdHJlYW1TaW5rLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU3RyZWFtU2luayhmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kaXNhYmxlTGlzdGVuQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWYpXHJcbiAgICAgICAgICAgIGYgPSAoZnVuY3Rpb24gKGwsIHIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNlbmQoKSBjYWxsZWQgbW9yZSB0aGFuIG9uY2UgcGVyIHRyYW5zYWN0aW9uLCB3aGljaCBpc24ndCBhbGxvd2VkLiBEaWQgeW91IHdhbnQgdG8gY29tYmluZSB0aGUgZXZlbnRzPyBUaGVuIHBhc3MgYSBjb21iaW5pbmcgZnVuY3Rpb24gdG8geW91ciBTdHJlYW1TaW5rIGNvbnN0cnVjdG9yLlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgX3RoaXMuY29hbGVzY2VyID0gbmV3IENvYWxlc2NlSGFuZGxlcihmLCBfdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU3RyZWFtU2luay5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBUcmFuc2FjdGlvbi5ydW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBXZSB0aHJvdyB0aGlzIGVycm9yIGlmIHdlIHNlbmQgaW50byBGUlAgbG9naWMgdGhhdCBoYXMgYmVlbiBjb25zdHJ1Y3RlZFxyXG4gICAgICAgICAgICAvLyBidXQgbm90aGluZyBpcyBsaXN0ZW5pbmcgdG8gaXQgeWV0LiBXZSBuZWVkIHRvIGRvIGl0IHRoaXMgd2F5IGJlY2F1c2VcclxuICAgICAgICAgICAgLy8gaXQncyB0aGUgb25seSB3YXkgdG8gbWFuYWdlIG1lbW9yeSBpbiBhIGxhbmd1YWdlIHdpdGggbm8gZmluYWxpemVycy5cclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5kaXNhYmxlTGlzdGVuQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy52ZXJ0ZXgucmVmQ291bnQoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2VuZCgpIHdhcyBpbnZva2VkIGJlZm9yZSBsaXN0ZW5lcnMgd2VyZSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChUcmFuc2FjdGlvbi5jdXJyZW50VHJhbnNhY3Rpb24uaW5DYWxsYmFjayA+IDApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIHVzZSBzZW5kKCkgaW5zaWRlIGEgU29kaXVtIGNhbGxiYWNrXCIpO1xyXG4gICAgICAgICAgICBfdGhpcy5jb2FsZXNjZXIuc2VuZF8oYSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU3RyZWFtU2luay5wcm90b3R5cGUubGlzdGVuXyA9IGZ1bmN0aW9uICh0YXJnZXQsIGgsIHN1cHByZXNzRWFybGllckZpcmluZ3MpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gX3N1cGVyLnByb3RvdHlwZS5saXN0ZW5fLmNhbGwodGhpcywgdGFyZ2V0LCBoLCBzdXBwcmVzc0VhcmxpZXJGaXJpbmdzKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVMaXN0ZW5DaGVjayA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3RyZWFtU2luaztcclxufShTdHJlYW1XaXRoU2VuZCkpO1xuXG4vKipcclxuICogQSBmb3J3YXJkIHJlZmVyZW5jZSBmb3IgYSB7QGxpbmsgQ2VsbH0gZXF1aXZhbGVudCB0byB0aGUgQ2VsbCB0aGF0IGlzIHJlZmVyZW5jZWQuXHJcbiAqL1xyXG52YXIgQ2VsbExvb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2VsbExvb3AsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDZWxsTG9vcCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgbnVsbCwgbmV3IFN0cmVhbUxvb3AoKSkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzb2x2ZSB0aGUgbG9vcCB0byBzcGVjaWZ5IHdoYXQgdGhlIENlbGxMb29wIHdhcyBhIGZvcndhcmQgcmVmZXJlbmNlIHRvLiBJdFxyXG4gICAgICogbXVzdCBiZSBpbnZva2VkIGluc2lkZSB0aGUgc2FtZSB0cmFuc2FjdGlvbiBhcyB0aGUgcGxhY2Ugd2hlcmUgdGhlIENlbGxMb29wIGlzIHVzZWQuXHJcbiAgICAgKiBUaGlzIHJlcXVpcmVzIHlvdSB0byBjcmVhdGUgYW4gZXhwbGljaXQgdHJhbnNhY3Rpb24gd2l0aCB7QGxpbmsgVHJhbnNhY3Rpb24jcnVuKExhbWJkYTApfVxyXG4gICAgICogb3Ige0BsaW5rIFRyYW5zYWN0aW9uI3J1blZvaWQoUnVubmFibGUpfS5cclxuICAgICAqL1xyXG4gICAgQ2VsbExvb3AucHJvdG90eXBlLmxvb3AgPSBmdW5jdGlvbiAoYV9vdXQpIHtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1lLmdldFN0cmVhbV9fKCkubG9vcChhX291dC5nZXRTdHJlYW1fXygpKTtcclxuICAgICAgICAgICAgbWUubGF6eUluaXRWYWx1ZSA9IGFfb3V0LnNhbXBsZUxhenkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDZWxsTG9vcC5wcm90b3R5cGUuc2FtcGxlTm9UcmFuc19fID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXRTdHJlYW1fXygpLmFzc2lnbmVkX18pXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNlbGxMb29wIHNhbXBsZWQgYmVmb3JlIGl0IHdhcyBsb29wZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2FtcGxlTm9UcmFuc19fLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENlbGxMb29wO1xyXG59KExhenlDZWxsKSk7XG5cbi8qKlxyXG4gKiBBIGNlbGwgdGhhdCBhbGxvd3MgdmFsdWVzIHRvIGJlIHB1c2hlZCBpbnRvIGl0LCBhY3RpbmcgYXMgYW4gaW50ZXJmYWNlIGJldHdlZW4gdGhlXHJcbiAqIHdvcmxkIG9mIEkvTyBhbmQgdGhlIHdvcmxkIG9mIEZSUC4gQ29kZSB0aGF0IGV4cG9ydHMgQ2VsbFNpbmtzIGZvciByZWFkLW9ubHkgdXNlXHJcbiAqIHNob3VsZCBkb3duY2FzdCB0byB7QGxpbmsgQ2VsbH0uXHJcbiAqL1xyXG52YXIgQ2VsbFNpbmsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2VsbFNpbmssIF9zdXBlcik7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIHdyaXRhYmxlIGNlbGwgd2l0aCB0aGUgc3BlY2lmaWVkIGluaXRpYWwgdmFsdWUuIElmIG11bHRpcGxlIHZhbHVlcyBhcmVcclxuICAgICAqIHNlbnQgaW4gdGhlIHNhbWUgdHJhbnNhY3Rpb24sIHRoZSBzcGVjaWZpZWQgZnVuY3Rpb24gaXMgdXNlZCB0byBjb21iaW5lIHRoZW0uXHJcbiAgICAgKlxyXG4gICAgICogSWYgdGhlIGZ1bmN0aW9uIGlzIG5vdCBzdXBwbGllZCwgdGhlbiBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd24gaW4gdGhpcyBjYXNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBDZWxsU2luayhpbml0VmFsdWUsIGYpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgaW5pdFZhbHVlLCBuZXcgU3RyZWFtU2luayhmKSkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBhIHZhbHVlLCBtb2RpZnlpbmcgdGhlIHZhbHVlIG9mIHRoZSBjZWxsLiBzZW5kKEEpIG1heSBub3QgYmUgdXNlZCBpbnNpZGVcclxuICAgICAqIGhhbmRsZXJzIHJlZ2lzdGVyZWQgd2l0aCB7QGxpbmsgU3RyZWFtI2xpc3RlbihIYW5kbGVyKX0gb3Ige0BsaW5rIENlbGwjbGlzdGVuKEhhbmRsZXIpfS5cclxuICAgICAqIEFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93biwgYmVjYXVzZSBDZWxsU2luayBpcyBmb3IgaW50ZXJmYWNpbmcgSS9PIHRvIEZSUCBvbmx5LlxyXG4gICAgICogWW91IGFyZSBub3QgbWVhbnQgdG8gdXNlIHRoaXMgdG8gZGVmaW5lIHlvdXIgb3duIHByaW1pdGl2ZXMuXHJcbiAgICAgKiBAcGFyYW0gYSBWYWx1ZSB0byBwdXNoIGludG8gdGhlIGNlbGwuXHJcbiAgICAgKi9cclxuICAgIENlbGxTaW5rLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICB0aGlzLmdldFN0cmVhbV9fKCkuc2VuZChhKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2VsbFNpbms7XHJcbn0oQ2VsbCkpO1xuXG52YXIgUm91dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUm91dGVyKGluU3RyZWFtLCBzZWxlY3Rvciwga2V5VG9TdHIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2luU3RyZWFtID0gaW5TdHJlYW07XHJcbiAgICAgICAgdGhpcy5fdGFibGUgPSBuZXcgQ29sbGVjdGlvbnMuRGljdGlvbmFyeShrZXlUb1N0cik7XHJcbiAgICAgICAgdGhpcy5fdmVydGV4ID1cclxuICAgICAgICAgICAgbmV3IFZlcnRleChcIlJvdXRlclwiLCB0aGlzLl9pblN0cmVhbS5nZXRWZXJ0ZXhfXygpLnJhbmsgKyAxLCAvLyA8LS0gZXN0aW1hdGVkIHJhbmsgb25seSwgbWF5IGJlIGFkanVzdGVkIGJ5IGVuc3VyZUJpZ2dlclRoYW5cclxuICAgICAgICAgICAgW10pO1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleC5hZGRTb3VyY2UobmV3IFNvdXJjZSh0aGlzLl9pblN0cmVhbS5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5faW5TdHJlYW0ubGlzdGVuXyhfdGhpcy5fdmVydGV4LCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtzID0gc2VsZWN0b3IoYSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlzaXRlZCA9IG5ldyBDb2xsZWN0aW9ucy5TZXQoa2V5VG9TdHIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkLmNvbnRhaW5zKGspKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChrKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0czIgPSBfdGhpcy5fdGFibGUuZ2V0VmFsdWUoayk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dHMyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG91dHMyLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRzLnB1c2gob3V0czJbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvdXRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0c1tpXS5zZW5kXyhhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgUm91dGVyLnByb3RvdHlwZS5maWx0ZXJNYXRjaGVzID0gZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvdXQgPSBuZXcgU3RyZWFtV2l0aFNlbmQoKTtcclxuICAgICAgICB2YXIgdmVydGV4ID0gbmV3IFZlcnRleChcIlJvdXRlcjo6ZmlsdGVyTWF0Y2hlc1wiLCB0aGlzLl92ZXJ0ZXgucmFuayArIDEsIC8vIDwtLSBlc3RpbWF0ZWQgcmFuayBvbmx5LCBtYXkgYmUgYWRqdXN0ZWQgYnkgZW5zdXJlQmlnZ2VyVGhhblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgbmV3IFNvdXJjZSh0aGlzLl92ZXJ0ZXgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl92ZXJ0ZXguaW5jcmVtZW50KG91dC5nZXRWZXJ0ZXhfXygpKTtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRzID0gX3RoaXMuX3RhYmxlLmdldFZhbHVlKGspO1xyXG4gICAgICAgICAgICAgICAgaWYgKG91dHMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl90YWJsZS5zZXRWYWx1ZShrLCBvdXRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG91dHMucHVzaChvdXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fdmVydGV4LmRlY3JlbWVudChvdXQuZ2V0VmVydGV4X18oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dHMyID0gX3RoaXMuX3RhYmxlLmdldFZhbHVlKGspO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBvdXRzMi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0czJbaV0gPT0gb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRzMi5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3V0czIubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3RhYmxlLnJlbW92ZShrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG91dC5zZXRWZXJ0ZXhfXyh2ZXJ0ZXgpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJvdXRlcjtcclxufSgpKTtcblxuLyoqXHJcbiAqIEFuIGludGVyZmFjZSBmb3IgaW1wbGVtZW50YXRpb25zIG9mIEZSUCB0aW1lciBzeXN0ZW1zLlxyXG4gKi9cclxudmFyIFRpbWVyU3lzdGVtSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpbWVyU3lzdGVtSW1wbCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBUaW1lclN5c3RlbUltcGw7XHJcbn0oKSk7XHJcbnZhciBuZXh0U2VxID0gMDtcclxudmFyIEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnQodCwgc0FsYXJtKSB7XHJcbiAgICAgICAgdGhpcy50ID0gdDtcclxuICAgICAgICB0aGlzLnNBbGFybSA9IHNBbGFybTtcclxuICAgICAgICB0aGlzLnNlcSA9ICsrbmV4dFNlcTtcclxuICAgIH1cclxuICAgIHJldHVybiBFdmVudDtcclxufSgpKTtcclxudmFyIFRpbWVyU3lzdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGltZXJTeXN0ZW0oaW1wbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gbmV3IENvbGxlY3Rpb25zLkJTVHJlZShmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBpZiAoYS50IDwgYi50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoYS50ID4gYi50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmIChhLnNlcSA8IGIuc2VxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAoYS5zZXEgPiBiLnNlcSlcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBUcmFuc2FjdGlvbi5ydW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbXBsID0gaW1wbDtcclxuICAgICAgICAgICAgX3RoaXMudE1pbmltdW0gPSAwO1xyXG4gICAgICAgICAgICB2YXIgdGltZVNuayA9IG5ldyBDZWxsU2luayhpbXBsLm5vdygpKTtcclxuICAgICAgICAgICAgX3RoaXMudGltZSA9IHRpbWVTbms7XHJcbiAgICAgICAgICAgIC8vIEEgZHVtbXkgbGlzdGVuZXIgdG8gdGltZSB0byBrZWVwIGl0IGFsaXZlIGV2ZW4gd2hlbiB0aGVyZSBhcmUgbm8gb3RoZXIgbGlzdGVuZXJzLlxyXG4gICAgICAgICAgICBfdGhpcy50aW1lLmxpc3RlbihmdW5jdGlvbiAodCkgeyB9KTtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb24ub25TdGFydChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIHRpbWUgaXMgYWx3YXlzIGluY3JlYXNpbmcgZnJvbSB0aGUgRlJQJ3MgcG9pbnQgb2Ygdmlldy5cclxuICAgICAgICAgICAgICAgIHZhciB0ID0gX3RoaXMudE1pbmltdW0gPSBNYXRoLm1heChfdGhpcy50TWluaW11bSwgaW1wbC5ub3coKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXYgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZXZlbnRRdWV1ZS5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1ldiA9IF90aGlzLmV2ZW50UXVldWUubWluaW11bSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV2LnQgPD0gdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXYgPSBtZXY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUTyBETzogRGV0ZWN0IGluZmluaXRlIGxvb3BzIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTbmsuc2VuZChldi50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24ucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV2LnNBbGFybS5zZW5kXyhldi50KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyBQb3AgYW5kIGV4ZWN1dGUgYWxsIGV2ZW50cyBlYXJsaWVyIHRoYW4gb3IgZXF1YWwgdG8gdCAodGhlIGN1cnJlbnQgdGltZSkuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGltZVNuay5zZW5kKHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQSB0aW1lciB0aGF0IGZpcmVzIGF0IHRoZSBzcGVjaWZpZWQgdGltZSwgd2hpY2ggY2FuIGJlIG51bGwsIG1lYW5pbmdcclxuICAgICAqIHRoYXQgdGhlIGFsYXJtIGlzIG5vdCBzZXQuXHJcbiAgICAgKi9cclxuICAgIFRpbWVyU3lzdGVtLnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uICh0QWxhcm0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gbnVsbCwgY2FuY2VsQ3VycmVudCA9IG51bGwsIGFjdGl2ZSA9IGZhbHNlLCB0QWwgPSBudWxsLCBzYW1wbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHNBbGFybSA9IG5ldyBTdHJlYW1XaXRoU2VuZChudWxsKSwgdXBkYXRlVGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWxDdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxDdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ldmVudFF1ZXVlLnJlbW92ZShjdXJyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYW5jZWxDdXJyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2FtcGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRBbCA9IHRBbGFybS5zYW1wbGVOb1RyYW5zX18oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0QWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV3IEV2ZW50KHRBbCwgc0FsYXJtKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ldmVudFF1ZXVlLmFkZChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDdXJyZW50ID0gX3RoaXMuaW1wbC5zZXRUaW1lcih0QWwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdGlvbiB0byBlbnN1cmUgdGhlIGNsb2NrIHRpbWUgYXBwZWFycyB0byBiZSA+PSB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxhcm0gdGltZS4gSXQgY2FuIGJlIGEgZmV3IG1pbGxpc2Vjb25kcyBlYXJseSwgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgYnJlYWtzIHRoaW5ncyBvdGhlcndpc2UsIGJlY2F1c2UgaXQgZG9lc24ndCB0aGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHRpbWUgdG8gZmlyZSB0aGUgYWxhcm0geWV0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50TWluaW11bSA9IE1hdGgubWF4KF90aGlzLnRNaW5pbXVtLCB0QWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIGFuZCBjbG9zZSBhIHRyYW5zYWN0aW9uIHRvIHRyaWdnZXIgcXVldWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV2ZW50cyB0byBydW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzQWxhcm0uc2V0VmVydGV4X18obmV3IFZlcnRleChcImF0XCIsIDAsIFtcclxuICAgICAgICAgICAgbmV3IFNvdXJjZSh0QWxhcm0uZ2V0VmVydGV4X18oKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNhbXBsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uLmN1cnJlbnRUcmFuc2FjdGlvbi5wcmlvcml0aXplZChzQWxhcm0uZ2V0VmVydGV4X18oKSwgdXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtpbGwgPSB0QWxhcm0uZ2V0U3RyZWFtX18oKS5saXN0ZW5fKHNBbGFybS5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAob0FsYXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdEFsID0gb0FsYXJtO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKSk7XHJcbiAgICAgICAgcmV0dXJuIHNBbGFybTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGltZXJTeXN0ZW07XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBBIHRpbWVyIHN5c3RlbSBpbXBsZW1lbnRhdGlvbiB1c2luZyBzZWNvbmRzIGFzIHRoZSB0aW1lIHVuaXQuXHJcbiAqL1xyXG52YXIgU2Vjb25kc1RpbWVyU3lzdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlY29uZHNUaW1lclN5c3RlbSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlY29uZHNUaW1lclN5c3RlbSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgbmV3IFNlY29uZHNUaW1lclN5c3RlbUltcGwoKSkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBTZWNvbmRzVGltZXJTeXN0ZW07XHJcbn0oVGltZXJTeXN0ZW0pKTtcclxudmFyIFNlY29uZHNUaW1lclN5c3RlbUltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2Vjb25kc1RpbWVyU3lzdGVtSW1wbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlY29uZHNUaW1lclN5c3RlbUltcGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSB0aW1lciB0aGF0IHdpbGwgZXhlY3V0ZSB0aGUgc3BlY2lmaWVkIGNhbGxiYWNrIGF0IHRoZSBzcGVjaWZpZWQgdGltZS5cclxuICAgICAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNhbmNlbCB0aGUgdGltZXIuXHJcbiAgICAgKi9cclxuICAgIFNlY29uZHNUaW1lclN5c3RlbUltcGwucHJvdG90eXBlLnNldFRpbWVyID0gZnVuY3Rpb24gKHQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCBNYXRoLm1heCgodCAtIHRoaXMubm93KCkpICogMTAwMCwgMCkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IGNsZWFyVGltZW91dCh0aW1lb3V0KTsgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBjbG9jayB0aW1lLlxyXG4gICAgICovXHJcbiAgICBTZWNvbmRzVGltZXJTeXN0ZW1JbXBsLnByb3RvdHlwZS5ub3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgKiAwLjAwMTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2Vjb25kc1RpbWVyU3lzdGVtSW1wbDtcclxufShUaW1lclN5c3RlbUltcGwpKTtcblxuLyoqXHJcbiAqIEEgdGltZXIgc3lzdGVtIGltcGxlbWVudGF0aW9uIHVzaW5nIG1pbGxpc2Vjb25kcyBhcyB0aGUgdGltZSB1bml0LlxyXG4gKi9cclxudmFyIE1pbGxpc2Vjb25kc1RpbWVyU3lzdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1pbGxpc2Vjb25kc1RpbWVyU3lzdGVtLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTWlsbGlzZWNvbmRzVGltZXJTeXN0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG5ldyBNaWxsaXNlY29uZHNUaW1lclN5c3RlbUltcGwoKSkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBNaWxsaXNlY29uZHNUaW1lclN5c3RlbTtcclxufShUaW1lclN5c3RlbSkpO1xyXG52YXIgTWlsbGlzZWNvbmRzVGltZXJTeXN0ZW1JbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1pbGxpc2Vjb25kc1RpbWVyU3lzdGVtSW1wbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1pbGxpc2Vjb25kc1RpbWVyU3lzdGVtSW1wbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIHRpbWVyIHRoYXQgd2lsbCBleGVjdXRlIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgYXQgdGhlIHNwZWNpZmllZCB0aW1lLlxyXG4gICAgICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2FuY2VsIHRoZSB0aW1lci5cclxuICAgICAqL1xyXG4gICAgTWlsbGlzZWNvbmRzVGltZXJTeXN0ZW1JbXBsLnByb3RvdHlwZS5zZXRUaW1lciA9IGZ1bmN0aW9uICh0LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjYWxsYmFjaywgTWF0aC5tYXgodCAtIHRoaXMubm93KCksIDApKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyBjbGVhclRpbWVvdXQodGltZW91dCk7IH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgY2xvY2sgdGltZS5cclxuICAgICAqL1xyXG4gICAgTWlsbGlzZWNvbmRzVGltZXJTeXN0ZW1JbXBsLnByb3RvdHlwZS5ub3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1pbGxpc2Vjb25kc1RpbWVyU3lzdGVtSW1wbDtcclxufShUaW1lclN5c3RlbUltcGwpKTtcblxudmFyIElPQWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSU9BY3Rpb24oKSB7XHJcbiAgICB9XHJcbiAgICAvKiFcclxuICAgICAqIENvbnZlcnQgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIGFzeW5jaHJvbm91cyBJL08gdGFraW5nIGlucHV0IEFcclxuICAgICAqIGFuZCByZXR1cm5pbmcgYSB2YWx1ZSBvZiB0eXBlIEIgaW50byBhbiBJL08gYWN0aW9uIG9mIHR5cGVcclxuICAgICAqIChzYSA6IFN0cmVhbTxBPikgPT4gU3RyZWFtPEI+XHJcbiAgICAgKi9cclxuICAgIElPQWN0aW9uLmZyb21Bc3luYyA9IGZ1bmN0aW9uIChwZXJmb3JtSU8pIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNhKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXQgPSBuZXcgU3RyZWFtV2l0aFNlbmQobnVsbCk7XHJcbiAgICAgICAgICAgIG91dC5zZXRWZXJ0ZXhfXyhuZXcgVmVydGV4KFwibWFwXCIsIDAsIFtcclxuICAgICAgICAgICAgICAgIG5ldyBTb3VyY2Uoc2EuZ2V0VmVydGV4X18oKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzYS5saXN0ZW5fKG91dC5nZXRWZXJ0ZXhfXygpLCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJmb3JtSU8oYSwgZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uLnJ1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0LnNlbmRfKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJT0FjdGlvbjtcclxufSgpKTtcblxuZXhwb3J0cy5sYW1iZGExID0gbGFtYmRhMTtcbmV4cG9ydHMubGFtYmRhMiA9IGxhbWJkYTI7XG5leHBvcnRzLmxhbWJkYTMgPSBsYW1iZGEzO1xuZXhwb3J0cy5sYW1iZGE0ID0gbGFtYmRhNDtcbmV4cG9ydHMubGFtYmRhNSA9IGxhbWJkYTU7XG5leHBvcnRzLmxhbWJkYTYgPSBsYW1iZGE2O1xuZXhwb3J0cy5TdHJlYW0gPSBTdHJlYW07XG5leHBvcnRzLlN0cmVhbUxvb3AgPSBTdHJlYW1Mb29wO1xuZXhwb3J0cy5TdHJlYW1TaW5rID0gU3RyZWFtU2luaztcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkNlbGxMb29wID0gQ2VsbExvb3A7XG5leHBvcnRzLkNlbGxTaW5rID0gQ2VsbFNpbms7XG5leHBvcnRzLlJvdXRlciA9IFJvdXRlcjtcbmV4cG9ydHMuVHJhbnNhY3Rpb24gPSBUcmFuc2FjdGlvbjtcbmV4cG9ydHMuVHVwbGUyID0gVHVwbGUyO1xuZXhwb3J0cy5Vbml0ID0gVW5pdDtcbmV4cG9ydHMuT3BlcmF0aW9uYWwgPSBPcGVyYXRpb25hbDtcbmV4cG9ydHMuZ2V0VG90YWxSZWdpc3RyYXRpb25zID0gZ2V0VG90YWxSZWdpc3RyYXRpb25zO1xuZXhwb3J0cy5WZXJ0ZXggPSBWZXJ0ZXg7XG5leHBvcnRzLlRpbWVyU3lzdGVtSW1wbCA9IFRpbWVyU3lzdGVtSW1wbDtcbmV4cG9ydHMuVGltZXJTeXN0ZW0gPSBUaW1lclN5c3RlbTtcbmV4cG9ydHMuU2Vjb25kc1RpbWVyU3lzdGVtID0gU2Vjb25kc1RpbWVyU3lzdGVtO1xuZXhwb3J0cy5NaWxsaXNlY29uZHNUaW1lclN5c3RlbSA9IE1pbGxpc2Vjb25kc1RpbWVyU3lzdGVtO1xuZXhwb3J0cy5JT0FjdGlvbiA9IElPQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c29kaXVtLmNqcy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQlNUcmVlS1ZfMSA9IHJlcXVpcmUoXCIuL0JTVHJlZUtWXCIpO1xuLyoqXG4gKiBTcGVjaWFsLWNhc2Ugb2YgdGhlIGJpbmFyeSBzZWFyY2ggdHJlZSBpbiB3aGljaCB0aGUgc2VhcmNoIGtleSBpcyBlcXVhbCB0byB0aGUgZWxlbWVudCB0eXBlLlxuICogVGhpcyBkZWZpbml0aW9uIGlzIHN1aXRhYmxlIHdoZW4gdGhlIGVsZW1lbnQgdHlwZSBjYW4gbm90IGJlIHNwbGl0IGJldHdlZW4gd2hhdCBkZWZpbmVzIGl0cyBvcmRlclxuICogYW5kIHdoYXQgZG9lcyBub3QgKGVnLiBwcmltaXRpdmUgdHlwZXMgYXMgb3Bwb3NlZCB0byBpbmRleGVkIHJlY29yZHMpLlxuICpcbiAqIFRoZSB0YWJsZSBiZWxvdyBzaG93cyBzb21lIHVzZS1jYXNlIGV4YW1wbGVzIGZvciBib3RoIGludGVyZmFjZXM6XG4gKlxuICogICAgICAgICAgIGVsZW1lbnQgdHlwZSAgICAgICAgICAgICAgfCAgbW9zdCBzdWl0YWJsZSBpbnRlcmZhY2VcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgICBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBCU1RyZWU8bnVtYmVyPlxuICogICAgc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgQlNUcmVlPHN0cmluZz5cbiAqIHsgb3JkZXI6IG51bWJlciwgZGF0YTogc3RyaW5nIH0gICAgIHwgIEJTVHJlZUtWPHtvcmRlcjogbnVtYmVyfSwge29yZGVyOiBudW1iZXIsIGRhdGE6IHN0cmluZ30+XG4gKlxuICogQHNlZSBCU1RyZWVLVlxuICovXG52YXIgQlNUcmVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCU1RyZWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQlNUcmVlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBCU1RyZWU7XG59KEJTVHJlZUtWXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQlNUcmVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QlNUcmVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIFF1ZXVlXzEgPSByZXF1aXJlKFwiLi9RdWV1ZVwiKTtcbi8qKlxuICogR2VuZXJhbCBiaW5hcnkgc2VhcmNoIHRyZWUgaW1wbGVtZW50YXRpb24uXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgYWxsb3dzIG9uZSB0byBzZWFyY2ggZWxlbWVudHMgdXNpbmcgYSBzdWJzZXQgb2YgdGhlaXIgYXR0cmlidXRlcyAodGh1cyB0aGVcbiAqIHRyZWUgY2FuIGJlIHVzZWQgYXMgYW4gaW5kZXggZm9yIGNvbXBsZXggb2JqZWN0cykuXG4gKiBUaGUgYXR0cmlidXRlcyByZXF1aXJlZCB0byBkZWZpbmUgYW4gb3JkZXJpbmcgaW4gdGhlIHRyZWUgbXVzdCBiZSBkZWZpbmVkIGluIHRoZSB0eXBlIEsuXG4gKiBBbnkgYWRkaXRpb25hbCBhdHRyaWJ1dGUgbXVzdCBiZSBkZWZpbmVkIGluIHRoZSB0eXBlIFYuXG4gKlxuICogQHNlZSBCU1RyZWVcbiAqL1xudmFyIEJTVHJlZUtWID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZW1wdHkgYmluYXJ5IHNlYXJjaCB0cmVlLlxuICAgICAqIEBjbGFzcyA8cD5BIGJpbmFyeSBzZWFyY2ggdHJlZSBpcyBhIGJpbmFyeSB0cmVlIGluIHdoaWNoIGVhY2hcbiAgICAgKiBpbnRlcm5hbCBub2RlIHN0b3JlcyBhbiBlbGVtZW50IHN1Y2ggdGhhdCB0aGUgZWxlbWVudHMgc3RvcmVkIGluIHRoZVxuICAgICAqIGxlZnQgc3VidHJlZSBhcmUgbGVzcyB0aGFuIGl0IGFuZCB0aGUgZWxlbWVudHNcbiAgICAgKiBzdG9yZWQgaW4gdGhlIHJpZ2h0IHN1YnRyZWUgYXJlIGdyZWF0ZXIuPC9wPlxuICAgICAqIDxwPkZvcm1hbGx5LCBhIGJpbmFyeSBzZWFyY2ggdHJlZSBpcyBhIG5vZGUtYmFzZWQgYmluYXJ5IHRyZWUgZGF0YSBzdHJ1Y3R1cmUgd2hpY2hcbiAgICAgKiBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOjwvcD5cbiAgICAgKiA8dWw+XG4gICAgICogPGxpPlRoZSBsZWZ0IHN1YnRyZWUgb2YgYSBub2RlIGNvbnRhaW5zIG9ubHkgbm9kZXMgd2l0aCBlbGVtZW50cyBsZXNzXG4gICAgICogdGhhbiB0aGUgbm9kZSdzIGVsZW1lbnQ8L2xpPlxuICAgICAqIDxsaT5UaGUgcmlnaHQgc3VidHJlZSBvZiBhIG5vZGUgY29udGFpbnMgb25seSBub2RlcyB3aXRoIGVsZW1lbnRzIGdyZWF0ZXJcbiAgICAgKiB0aGFuIHRoZSBub2RlJ3MgZWxlbWVudDwvbGk+XG4gICAgICogPGxpPkJvdGggdGhlIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWVzIG11c3QgYWxzbyBiZSBiaW5hcnkgc2VhcmNoIHRyZWVzLjwvbGk+XG4gICAgICogPC91bD5cbiAgICAgKiA8cD5JZiB0aGUgaW5zZXJ0ZWQgZWxlbWVudHMgYXJlIGN1c3RvbSBvYmplY3RzIGEgY29tcGFyZSBmdW5jdGlvbiBtdXN0XG4gICAgICogYmUgcHJvdmlkZWQgYXQgY29uc3RydWN0aW9uIHRpbWUsIG90aGVyd2lzZSB0aGUgPD0sID09PSBhbmQgPj0gb3BlcmF0b3JzIGFyZVxuICAgICAqIHVzZWQgdG8gY29tcGFyZSBlbGVtZW50cy4gRXhhbXBsZTo8L3A+XG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICAgKiAgaWYgKGEgaXMgbGVzcyB0aGFuIGIgYnkgc29tZSBvcmRlcmluZyBjcml0ZXJpb24pIHtcbiAgICAgKiAgICAgcmV0dXJuIC0xO1xuICAgICAqICB9IGlmIChhIGlzIGdyZWF0ZXIgdGhhbiBiIGJ5IHRoZSBvcmRlcmluZyBjcml0ZXJpb24pIHtcbiAgICAgKiAgICAgcmV0dXJuIDE7XG4gICAgICogIH1cbiAgICAgKiAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgKiAgcmV0dXJuIDA7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6bnVtYmVyPX0gY29tcGFyZUZ1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdXNlZCB0byBjb21wYXJlIHR3byBlbGVtZW50cy4gTXVzdCByZXR1cm4gYSBuZWdhdGl2ZSBpbnRlZ2VyLFxuICAgICAqIHplcm8sIG9yIGEgcG9zaXRpdmUgaW50ZWdlciBhcyB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbGVzcyB0aGFuLCBlcXVhbCB0byxcbiAgICAgKiBvciBncmVhdGVyIHRoYW4gdGhlIHNlY29uZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBCU1RyZWVLVihjb21wYXJlRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZUZ1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdENvbXBhcmU7XG4gICAgICAgIHRoaXMubkVsZW1lbnRzID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgdG8gdGhpcyB0cmVlIGlmIGl0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gaW5zZXJ0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyB0cmVlIGRpZCBub3QgYWxyZWFkeSBjb250YWluIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnNlcnROb2RlKHRoaXMuY3JlYXRlTm9kZShlbGVtZW50KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubkVsZW1lbnRzKys7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIHRyZWUuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB0cmVlIGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyB0cmVlIGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHMgPT09IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyB0cmVlLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHRyZWUuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5FbGVtZW50cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHRyZWUgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgdHJlZSBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoTm9kZSh0aGlzLnJvb3QsIGVsZW1lbnQpICE9PSBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTG9va3MgZm9yIHRoZSB2YWx1ZSB3aXRoIHRoZSBwcm92aWRlZCBzZWFyY2gga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IFRoZSBrZXkgdG8gbG9vayBmb3JcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB2YWx1ZSBmb3VuZCBvciB1bmRlZmluZWQgaWYgaXQgd2FzIG5vdCBmb3VuZC5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHJldCA9IHRoaXMuc2VhcmNoTm9kZSh0aGlzLnJvb3QsIGVsZW1lbnQpO1xuICAgICAgICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQuZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBlbGVtZW50IGZyb20gdGhpcyB0cmVlIGlmIGl0IGlzIHByZXNlbnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHRyZWUgY29udGFpbmVkIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNlYXJjaE5vZGUodGhpcy5yb290LCBlbGVtZW50KTtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMubkVsZW1lbnRzLS07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoaXMgdHJlZSBpblxuICAgICAqIGluLW9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpcyBpbnZva2VkIHdpdGggb25lXG4gICAgICogYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW4gb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmlub3JkZXJUcmF2ZXJzYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pbm9yZGVyVHJhdmVyc2FsQXV4KHRoaXMucm9vdCwgY2FsbGJhY2ssIHtcbiAgICAgICAgICAgIHN0b3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoaXMgdHJlZSBpbiBwcmUtb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzIGludm9rZWQgd2l0aCBvbmVcbiAgICAgKiBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhbiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUucHJlb3JkZXJUcmF2ZXJzYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5wcmVvcmRlclRyYXZlcnNhbEF1eCh0aGlzLnJvb3QsIGNhbGxiYWNrLCB7XG4gICAgICAgICAgICBzdG9wOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHRyZWUgaW4gcG9zdC1vcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXMgaW52b2tlZCB3aXRoIG9uZVxuICAgICAqIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5wb3N0b3JkZXJUcmF2ZXJzYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5wb3N0b3JkZXJUcmF2ZXJzYWxBdXgodGhpcy5yb290LCBjYWxsYmFjaywge1xuICAgICAgICAgICAgc3RvcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyB0cmVlIGluXG4gICAgICogbGV2ZWwtb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzIGludm9rZWQgd2l0aCBvbmVcbiAgICAgKiBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhbiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUubGV2ZWxUcmF2ZXJzYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sZXZlbFRyYXZlcnNhbEF1eCh0aGlzLnJvb3QsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1pbmltdW0gZWxlbWVudCBvZiB0aGlzIHRyZWUuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIG1pbmltdW0gZWxlbWVudCBvZiB0aGlzIHRyZWUgb3IgdW5kZWZpbmVkIGlmIHRoaXMgdHJlZSBpc1xuICAgICAqIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5taW5pbXVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkgfHwgdGhpcy5yb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1pbmltdW1BdXgodGhpcy5yb290KS5lbGVtZW50O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWF4aW11bSBlbGVtZW50IG9mIHRoaXMgdHJlZS5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgbWF4aW11bSBlbGVtZW50IG9mIHRoaXMgdHJlZSBvciB1bmRlZmluZWQgaWYgdGhpcyB0cmVlIGlzXG4gICAgICogaXMgZW1wdHkuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLm1heGltdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSB8fCB0aGlzLnJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWF4aW11bUF1eCh0aGlzLnJvb3QpLmVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyB0cmVlIGluIGlub3JkZXIuXG4gICAgICogRXF1aXZhbGVudCB0byBpbm9yZGVyVHJhdmVyc2FsLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW5cbiAgICAgKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmlub3JkZXJUcmF2ZXJzYWwoY2FsbGJhY2spO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyB0cmVlIGluIGluLW9yZGVyLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyB0cmVlIGluIGluLW9yZGVyLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5pbm9yZGVyVHJhdmVyc2FsKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgdGhpcyB0cmVlLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGhlaWdodCBvZiB0aGlzIHRyZWUgb3IgLTEgaWYgaXMgZW1wdHkuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0QXV4KHRoaXMucm9vdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5zZWFyY2hOb2RlID0gZnVuY3Rpb24gKG5vZGUsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNtcCA9IDE7XG4gICAgICAgIHdoaWxlIChub2RlICE9PSBudWxsICYmIGNtcCAhPT0gMCkge1xuICAgICAgICAgICAgY21wID0gdGhpcy5jb21wYXJlKGVsZW1lbnQsIG5vZGUuZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoY21wIDwgMCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnRDaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNtcCA+IDApIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodENoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUudHJhbnNwbGFudCA9IGZ1bmN0aW9uIChuMSwgbjIpIHtcbiAgICAgICAgaWYgKG4xLnBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbjI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobjEgPT09IG4xLnBhcmVudC5sZWZ0Q2gpIHtcbiAgICAgICAgICAgIG4xLnBhcmVudC5sZWZ0Q2ggPSBuMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG4xLnBhcmVudC5yaWdodENoID0gbjI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBuMi5wYXJlbnQgPSBuMS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnJlbW92ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5sZWZ0Q2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwbGFudChub2RlLCBub2RlLnJpZ2h0Q2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHRDaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BsYW50KG5vZGUsIG5vZGUubGVmdENoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5taW5pbXVtQXV4KG5vZGUucmlnaHRDaCk7XG4gICAgICAgICAgICBpZiAoeS5wYXJlbnQgIT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcGxhbnQoeSwgeS5yaWdodENoKTtcbiAgICAgICAgICAgICAgICB5LnJpZ2h0Q2ggPSBub2RlLnJpZ2h0Q2g7XG4gICAgICAgICAgICAgICAgeS5yaWdodENoLnBhcmVudCA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyYW5zcGxhbnQobm9kZSwgeSk7XG4gICAgICAgICAgICB5LmxlZnRDaCA9IG5vZGUubGVmdENoO1xuICAgICAgICAgICAgeS5sZWZ0Q2gucGFyZW50ID0geTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuaW5vcmRlclRyYXZlcnNhbEF1eCA9IGZ1bmN0aW9uIChub2RlLCBjYWxsYmFjaywgc2lnbmFsKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbm9yZGVyVHJhdmVyc2FsQXV4KG5vZGUubGVmdENoLCBjYWxsYmFjaywgc2lnbmFsKTtcbiAgICAgICAgaWYgKHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2lnbmFsLnN0b3AgPSBjYWxsYmFjayhub2RlLmVsZW1lbnQpID09PSBmYWxzZTtcbiAgICAgICAgaWYgKHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbm9yZGVyVHJhdmVyc2FsQXV4KG5vZGUucmlnaHRDaCwgY2FsbGJhY2ssIHNpZ25hbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5sZXZlbFRyYXZlcnNhbEF1eCA9IGZ1bmN0aW9uIChub2RlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcXVldWUgPSBuZXcgUXVldWVfMS5kZWZhdWx0KCk7XG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBxdWV1ZS5lbnF1ZXVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBxdWV1ZS5kZXF1ZXVlKCkgfHwgbnVsbDtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKG5vZGUuZWxlbWVudCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdENoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcXVldWUuZW5xdWV1ZShub2RlLmxlZnRDaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodENoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcXVldWUuZW5xdWV1ZShub2RlLnJpZ2h0Q2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IHF1ZXVlLmRlcXVldWUoKSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5wcmVvcmRlclRyYXZlcnNhbEF1eCA9IGZ1bmN0aW9uIChub2RlLCBjYWxsYmFjaywgc2lnbmFsKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2lnbmFsLnN0b3AgPSBjYWxsYmFjayhub2RlLmVsZW1lbnQpID09PSBmYWxzZTtcbiAgICAgICAgaWYgKHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVvcmRlclRyYXZlcnNhbEF1eChub2RlLmxlZnRDaCwgY2FsbGJhY2ssIHNpZ25hbCk7XG4gICAgICAgIGlmIChzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlb3JkZXJUcmF2ZXJzYWxBdXgobm9kZS5yaWdodENoLCBjYWxsYmFjaywgc2lnbmFsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnBvc3RvcmRlclRyYXZlcnNhbEF1eCA9IGZ1bmN0aW9uIChub2RlLCBjYWxsYmFjaywgc2lnbmFsKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3N0b3JkZXJUcmF2ZXJzYWxBdXgobm9kZS5sZWZ0Q2gsIGNhbGxiYWNrLCBzaWduYWwpO1xuICAgICAgICBpZiAoc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc3RvcmRlclRyYXZlcnNhbEF1eChub2RlLnJpZ2h0Q2gsIGNhbGxiYWNrLCBzaWduYWwpO1xuICAgICAgICBpZiAoc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzaWduYWwuc3RvcCA9IGNhbGxiYWNrKG5vZGUuZWxlbWVudCkgPT09IGZhbHNlO1xuICAgIH07XG4gICAgQlNUcmVlS1YucHJvdG90eXBlLm1pbmltdW1BdXggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsICYmIG5vZGUubGVmdENoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0Q2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBCU1RyZWVLVi5wcm90b3R5cGUubWF4aW11bUF1eCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwgJiYgbm9kZS5yaWdodENoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodENoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuaGVpZ2h0QXV4ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5oZWlnaHRBdXgobm9kZS5sZWZ0Q2gpLCB0aGlzLmhlaWdodEF1eChub2RlLnJpZ2h0Q2gpKSArIDE7XG4gICAgfTtcbiAgICAvKlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5pbnNlcnROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IG51bGw7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMucm9vdDtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgY21wID0gdGhpcy5jb21wYXJlKG5vZGUuZWxlbWVudCwgcG9zaXRpb24uZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoY21wID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjbXAgPCAwKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5sZWZ0Q2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnJpZ2h0Q2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHRyZWUgaXMgZW1wdHlcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb21wYXJlKG5vZGUuZWxlbWVudCwgcGFyZW50LmVsZW1lbnQpIDwgMCkge1xuICAgICAgICAgICAgcGFyZW50LmxlZnRDaCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQucmlnaHRDaCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5jcmVhdGVOb2RlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICBsZWZ0Q2g6IG51bGwsXG4gICAgICAgICAgICByaWdodENoOiBudWxsLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gQlNUcmVlS1Y7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQlNUcmVlS1Y7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CU1RyZWVLVi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9EaWN0aW9uYXJ5XCIpO1xudmFyIFNldF8xID0gcmVxdWlyZShcIi4vU2V0XCIpO1xudmFyIEJhZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IGJhZy5cbiAgICAgKiBAY2xhc3MgPHA+QSBiYWcgaXMgYSBzcGVjaWFsIGtpbmQgb2Ygc2V0IGluIHdoaWNoIG1lbWJlcnMgYXJlXG4gICAgICogYWxsb3dlZCB0byBhcHBlYXIgbW9yZSB0aGFuIG9uY2UuPC9wPlxuICAgICAqIDxwPklmIHRoZSBpbnNlcnRlZCBlbGVtZW50cyBhcmUgY3VzdG9tIG9iamVjdHMgYSBmdW5jdGlvblxuICAgICAqIHdoaWNoIGNvbnZlcnRzIGVsZW1lbnRzIHRvIHVuaXF1ZSBzdHJpbmdzIG11c3QgYmUgcHJvdmlkZWQuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBwZXRUb1N0cmluZyhwZXQpIHtcbiAgICAgKiAgcmV0dXJuIHBldC5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KTpzdHJpbmc9fSB0b1N0ckZ1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWRcbiAgICAgKiB0byBjb252ZXJ0IGVsZW1lbnRzIHRvIHN0cmluZ3MuIElmIHRoZSBlbGVtZW50cyBhcmVuJ3Qgc3RyaW5ncyBvciBpZiB0b1N0cmluZygpXG4gICAgICogaXMgbm90IGFwcHJvcHJpYXRlLCBhIGN1c3RvbSBmdW5jdGlvbiB3aGljaCByZWNlaXZlcyBhbiBvYmplY3QgYW5kIHJldHVybnMgYVxuICAgICAqIHVuaXF1ZSBzdHJpbmcgbXVzdCBiZSBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBCYWcodG9TdHJGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnRvU3RyRiA9IHRvU3RyRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0VG9TdHJpbmc7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeSA9IG5ldyBEaWN0aW9uYXJ5XzEuZGVmYXVsdCh0aGlzLnRvU3RyRik7XG4gICAgICAgIHRoaXMubkVsZW1lbnRzID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBuQ29waWVzIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHRvIHRoaXMgYmFnLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gYWRkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbkNvcGllcyB0aGUgbnVtYmVyIG9mIGNvcGllcyB0byBhZGQsIGlmIHRoaXMgYXJndW1lbnQgaXNcbiAgICAgKiB1bmRlZmluZWQgMSBjb3B5IGlzIGFkZGVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgdW5sZXNzIGVsZW1lbnQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5Db3BpZXMpIHtcbiAgICAgICAgaWYgKG5Db3BpZXMgPT09IHZvaWQgMCkgeyBuQ29waWVzID0gMTsgfVxuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChlbGVtZW50KSB8fCBuQ29waWVzIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGNvcGllczogbkNvcGllc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXRWYWx1ZShlbGVtZW50LCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdGlvbmFyeS5nZXRWYWx1ZShlbGVtZW50KS5jb3BpZXMgKz0gbkNvcGllcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5FbGVtZW50cyArPSBuQ29waWVzO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvdW50cyB0aGUgbnVtYmVyIG9mIGNvcGllcyBvZiB0aGUgc3BlY2lmaWVkIG9iamVjdCBpbiB0aGlzIGJhZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCB0aGUgb2JqZWN0IHRvIHNlYXJjaCBmb3IuLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBjb3BpZXMgb2YgdGhlIG9iamVjdCwgMCBpZiBub3QgZm91bmRcbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0VmFsdWUoZWxlbWVudCkuY29waWVzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBiYWcgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgYmFnIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCxcbiAgICAgKiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkuY29udGFpbnNLZXkoZWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIG5Db3BpZXMgb2YgdGhlIHNwZWNpZmllZCBvYmplY3QgdG8gdGhpcyBiYWcuXG4gICAgICogSWYgdGhlIG51bWJlciBvZiBjb3BpZXMgdG8gcmVtb3ZlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgYWN0dWFsIG51bWJlclxuICAgICAqIG9mIGNvcGllcyBpbiB0aGUgQmFnLCBhbGwgY29waWVzIGFyZSByZW1vdmVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbkNvcGllcyB0aGUgbnVtYmVyIG9mIGNvcGllcyB0byByZW1vdmUsIGlmIHRoaXMgYXJndW1lbnQgaXNcbiAgICAgKiB1bmRlZmluZWQgMSBjb3B5IGlzIHJlbW92ZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBhdCBsZWFzdCAxIGVsZW1lbnQgd2FzIHJlbW92ZWQuXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgbkNvcGllcykge1xuICAgICAgICBpZiAobkNvcGllcyA9PT0gdm9pZCAwKSB7IG5Db3BpZXMgPSAxOyB9XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGVsZW1lbnQpIHx8IG5Db3BpZXMgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmRpY3Rpb25hcnkuZ2V0VmFsdWUoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAobkNvcGllcyA+IG5vZGUuY29waWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMgLT0gbm9kZS5jb3BpZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5FbGVtZW50cyAtPSBuQ29waWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5jb3BpZXMgLT0gbkNvcGllcztcbiAgICAgICAgICAgIGlmIChub2RlLmNvcGllcyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0aW9uYXJ5LnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIGJpZyBpbiBhcmJpdHJhcnkgb3JkZXIsXG4gICAgICogaW5jbHVkaW5nIG11bHRpcGxlIGNvcGllcy5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgYmFnLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZGljdGlvbmFyeS52YWx1ZXMoKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWx1ZXNfMSA9IHZhbHVlczsgX2kgPCB2YWx1ZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdmFsdWVzXzFbX2ldO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBub2RlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGNvcGllcyA9IG5vZGUuY29waWVzO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb3BpZXM7IGorKykge1xuICAgICAgICAgICAgICAgIGEucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzZXQgb2YgdW5pcXVlIGVsZW1lbnRzIGluIHRoaXMgYmFnLlxuICAgICAqIEByZXR1cm4ge2NvbGxlY3Rpb25zLlNldDxUPn0gYSBzZXQgb2YgdW5pcXVlIGVsZW1lbnRzIGluIHRoaXMgYmFnLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUudG9TZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b3JldCA9IG5ldyBTZXRfMS5kZWZhdWx0KHRoaXMudG9TdHJGKTtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5kaWN0aW9uYXJ5LnZhbHVlcygpO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGVsZW1lbnRzXzEgPSBlbGVtZW50czsgX2kgPCBlbGVtZW50c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGVsZSA9IGVsZW1lbnRzXzFbX2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZWxlLnZhbHVlO1xuICAgICAgICAgICAgdG9yZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9yZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50XG4gICAgICogcHJlc2VudCBpbiB0aGlzIGJhZywgaW5jbHVkaW5nIG11bHRpcGxlIGNvcGllcy5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudC4gVG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeS5mb3JFYWNoKGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2LnZhbHVlO1xuICAgICAgICAgICAgdmFyIGNvcGllcyA9IHYuY29waWVzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBiYWcuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgYmFnLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgYmFnIGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBiYWcgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHMgPT09IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIGJhZy5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeS5jbGVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIEJhZztcbn0oKSk7IC8vIEVuZCBvZiBiYWdcbmV4cG9ydHMuZGVmYXVsdCA9IEJhZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBEaWN0aW9uYXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZW1wdHkgZGljdGlvbmFyeS5cbiAgICAgKiBAY2xhc3MgPHA+RGljdGlvbmFyaWVzIG1hcCBrZXlzIHRvIHZhbHVlczsgZWFjaCBrZXkgY2FuIG1hcCB0byBhdCBtb3N0IG9uZSB2YWx1ZS5cbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIGFjY2VwdHMgYW55IGtpbmQgb2Ygb2JqZWN0cyBhcyBrZXlzLjwvcD5cbiAgICAgKlxuICAgICAqIDxwPklmIHRoZSBrZXlzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGZ1bmN0aW9uIHdoaWNoIGNvbnZlcnRzIGtleXMgdG8gdW5pcXVlXG4gICAgICogc3RyaW5ncyBtdXN0IGJlIHByb3ZpZGVkLiBFeGFtcGxlOjwvcD5cbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIHBldFRvU3RyaW5nKHBldCkge1xuICAgICAqICByZXR1cm4gcGV0Lm5hbWU7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KTpzdHJpbmc9fSB0b1N0ckZ1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWRcbiAgICAgKiB0byBjb252ZXJ0IGtleXMgdG8gc3RyaW5ncy4gSWYgdGhlIGtleXMgYXJlbid0IHN0cmluZ3Mgb3IgaWYgdG9TdHJpbmcoKVxuICAgICAqIGlzIG5vdCBhcHByb3ByaWF0ZSwgYSBjdXN0b20gZnVuY3Rpb24gd2hpY2ggcmVjZWl2ZXMgYSBrZXkgYW5kIHJldHVybnMgYVxuICAgICAqIHVuaXF1ZSBzdHJpbmcgbXVzdCBiZSBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEaWN0aW9uYXJ5KHRvU3RyRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy50YWJsZSA9IHt9O1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgICAgIHRoaXMudG9TdHIgPSB0b1N0ckZ1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdFRvU3RyaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB0byB3aGljaCB0aGlzIGRpY3Rpb25hcnkgbWFwcyB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGlzIGRpY3Rpb25hcnkgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhpcyBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgYXNzb2NpYXRlZCB2YWx1ZSBpcyB0byBiZSByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkgb3JcbiAgICAgKiB1bmRlZmluZWQgaWYgdGhlIG1hcCBjb250YWlucyBubyBtYXBwaW5nIGZvciB0aGlzIGtleS5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHBhaXIgPSB0aGlzLnRhYmxlWyckJyArIHRoaXMudG9TdHIoa2V5KV07XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKHBhaXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWlyLnZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXNzb2NpYXRlcyB0aGUgc3BlY2lmaWVkIHZhbHVlIHdpdGggdGhlIHNwZWNpZmllZCBrZXkgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIElmIHRoZSBkaWN0aW9uYXJ5IHByZXZpb3VzbHkgY29udGFpbmVkIGEgbWFwcGluZyBmb3IgdGhpcyBrZXksIHRoZSBvbGRcbiAgICAgKiB2YWx1ZSBpcyByZXBsYWNlZCBieSB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdpdGggd2hpY2ggdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB0byBiZVxuICAgICAqIGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBAcmV0dXJuIHsqfSBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXksIG9yIHVuZGVmaW5lZCBpZlxuICAgICAqIHRoZXJlIHdhcyBubyBtYXBwaW5nIGZvciB0aGUga2V5IG9yIGlmIHRoZSBrZXkvdmFsdWUgYXJlIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGtleSkgfHwgdXRpbC5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgdmFyIGsgPSAnJCcgKyB0aGlzLnRvU3RyKGtleSk7XG4gICAgICAgIHZhciBwcmV2aW91c0VsZW1lbnQgPSB0aGlzLnRhYmxlW2tdO1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChwcmV2aW91c0VsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLm5FbGVtZW50cysrO1xuICAgICAgICAgICAgcmV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gcHJldmlvdXNFbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFibGVba10gPSB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbWFwcGluZyBmb3IgdGhpcyBrZXkgZnJvbSB0aGlzIGRpY3Rpb25hcnkgaWYgaXQgaXMgcHJlc2VudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aG9zZSBtYXBwaW5nIGlzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4geyp9IHByZXZpb3VzIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBzcGVjaWZpZWQga2V5LCBvciB1bmRlZmluZWQgaWZcbiAgICAgKiB0aGVyZSB3YXMgbm8gbWFwcGluZyBmb3Iga2V5LlxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGsgPSAnJCcgKyB0aGlzLnRvU3RyKGtleSk7XG4gICAgICAgIHZhciBwcmV2aW91c0VsZW1lbnQgPSB0aGlzLnRhYmxlW2tdO1xuICAgICAgICBpZiAoIXV0aWwuaXNVbmRlZmluZWQocHJldmlvdXNFbGVtZW50KSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMudGFibGVba107XG4gICAgICAgICAgICB0aGlzLm5FbGVtZW50cy0tO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzRWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUga2V5cyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBrZXlzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgbmFtZV8xIGluIHRoaXMudGFibGUpIHtcbiAgICAgICAgICAgIGlmICh1dGlsLmhhcyh0aGlzLnRhYmxlLCBuYW1lXzEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSB0aGlzLnRhYmxlW25hbWVfMV07XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChwYWlyLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdmFsdWVzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgbmFtZV8yIGluIHRoaXMudGFibGUpIHtcbiAgICAgICAgICAgIGlmICh1dGlsLmhhcyh0aGlzLnRhYmxlLCBuYW1lXzIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSB0aGlzLnRhYmxlW25hbWVfMl07XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChwYWlyLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBrZXktdmFsdWUgcGFpclxuICAgICAqIHByZXNlbnQgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggdHdvIGFyZ3VtZW50czoga2V5IGFuZCB2YWx1ZS4gVG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBuYW1lXzMgaW4gdGhpcy50YWJsZSkge1xuICAgICAgICAgICAgaWYgKHV0aWwuaGFzKHRoaXMudGFibGUsIG5hbWVfMykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFpciA9IHRoaXMudGFibGVbbmFtZV8zXTtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gY2FsbGJhY2socGFpci5rZXksIHBhaXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGRpY3Rpb25hcnkgY29udGFpbnMgYSBtYXBwaW5nIGZvciB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aG9zZSBwcmVzZW5jZSBpbiB0aGlzIGRpY3Rpb25hcnkgaXMgdG8gYmVcbiAgICAgKiB0ZXN0ZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIGRpY3Rpb25hcnkgY29udGFpbnMgYSBtYXBwaW5nIGZvciB0aGVcbiAgICAgKiBzcGVjaWZpZWQga2V5LlxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLmNvbnRhaW5zS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gIXV0aWwuaXNVbmRlZmluZWQodGhpcy5nZXRWYWx1ZShrZXkpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG1hcHBpbmdzIGZyb20gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIEB0aGlzIHtjb2xsZWN0aW9ucy5EaWN0aW9uYXJ5fVxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRhYmxlID0ge307XG4gICAgICAgIHRoaXMubkVsZW1lbnRzID0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBrZXlzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2Yga2V5LXZhbHVlIG1hcHBpbmdzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmdzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmdzLlxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5FbGVtZW50cyA8PSAwO1xuICAgIH07XG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b3JldCA9ICd7JztcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICAgICAgICB0b3JldCArPSBcIlxcblxcdFwiICsgayArIFwiIDogXCIgKyB2O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRvcmV0ICsgJ1xcbn0nO1xuICAgIH07XG4gICAgcmV0dXJuIERpY3Rpb25hcnk7XG59KCkpOyAvLyBFbmQgb2YgZGljdGlvbmFyeVxuZXhwb3J0cy5kZWZhdWx0ID0gRGljdGlvbmFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpY3Rpb25hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9EaWN0aW9uYXJ5XCIpO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIEZhY3RvcnlEaWN0aW9uYXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGYWN0b3J5RGljdGlvbmFyeSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IGRpY3Rpb25hcnkuXG4gICAgICogQGNsYXNzIDxwPkRpY3Rpb25hcmllcyBtYXAga2V5cyB0byB2YWx1ZXM7IGVhY2gga2V5IGNhbiBtYXAgdG8gYXQgbW9zdCBvbmUgdmFsdWUuXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBhY2NlcHRzIGFueSBraW5kIG9mIG9iamVjdHMgYXMga2V5cy48L3A+XG4gICAgICpcbiAgICAgKiA8cD5UaGUgZGVmYXVsdCBmYWN0b3J5IGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBuZXcgb2JqZWN0IG9mIHRoZSBwcm92aWRlZFxuICAgICAqIHR5cGUuIEV4YW1wbGU6PC9wPlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0RmFjdG9yeSgpIHtcbiAgICAgKiAgcmV0dXJuIG5ldyBQZXQoKTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiA8cD5JZiB0aGUga2V5cyBhcmUgY3VzdG9tIG9iamVjdHMgYSBmdW5jdGlvbiB3aGljaCBjb252ZXJ0cyBrZXlzIHRvIHVuaXF1ZVxuICAgICAqIHN0cmluZ3MgbXVzdCBiZSBwcm92aWRlZC4gRXhhbXBsZTo8L3A+XG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBwZXRUb1N0cmluZyhwZXQpIHtcbiAgICAgKiAgcmV0dXJuIHBldC5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Vj19IGRlZmF1bHRGYWN0b3J5RnVuY3Rpb24gZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgYVxuICAgICAqIGRlZmF1bHQgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KTpzdHJpbmc9fSB0b1N0ckZ1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWRcbiAgICAgKiB0byBjb252ZXJ0IGtleXMgdG8gc3RyaW5ncy4gSWYgdGhlIGtleXMgYXJlbid0IHN0cmluZ3Mgb3IgaWYgdG9TdHJpbmcoKVxuICAgICAqIGlzIG5vdCBhcHByb3ByaWF0ZSwgYSBjdXN0b20gZnVuY3Rpb24gd2hpY2ggcmVjZWl2ZXMgYSBrZXkgYW5kIHJldHVybnMgYVxuICAgICAqIHVuaXF1ZSBzdHJpbmcgbXVzdCBiZSBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGYWN0b3J5RGljdGlvbmFyeShkZWZhdWx0RmFjdG9yeUZ1bmN0aW9uLCB0b1N0ckZ1bmN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRvU3RyRnVuY3Rpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlZmF1bHRGYWN0b3J5RnVuY3Rpb24gPSBkZWZhdWx0RmFjdG9yeUZ1bmN0aW9uO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFzc29jaWF0ZXMgdGhlIHNwZWNpZmllZCBkZWZhdWx0IHZhbHVlIHdpdGggdGhlIHNwZWNpZmllZCBrZXkgaW4gdGhpcyBkaWN0aW9uYXJ5LFxuICAgICAqIGlmIGl0IGRpZG4ndCBjb250YWluIHRoZSBrZXkgeWV0LiBJZiB0aGUga2V5IGV4aXN0ZWQsIHRoZSBleGlzdGluZyB2YWx1ZSB3aWxsIGJlIHVzZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2l0aCB3aGljaCB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHRvIGJlXG4gICAgICogYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFZhbHVlIGRlZmF1bHQgdmFsdWUgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIEByZXR1cm4geyp9IHByZXZpb3VzIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleSwgb3IgdGhlIGRlZmF1bHQgdmFsdWUsXG4gICAgICogaWYgdGhlIGtleSBkaWRuJ3QgZXhpc3QgeWV0LlxuICAgICAqL1xuICAgIEZhY3RvcnlEaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXREZWZhdWx0ID0gZnVuY3Rpb24gKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBfc3VwZXIucHJvdG90eXBlLmdldFZhbHVlLmNhbGwodGhpcywga2V5KTtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB0byB3aGljaCB0aGlzIGRpY3Rpb25hcnkgbWFwcyB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBSZXR1cm5zIGEgZGVmYXVsdCB2YWx1ZSBjcmVhdGVkIGJ5IHRoZSBmYWN0b3J5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IsXG4gICAgICogaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmcgZm9yIHRoaXMga2V5LiBUaGUgbWlzc2luZyBrZXkgd2lsbFxuICAgICAqIGF1dG9tYXRpY2FsbHkgYmUgYWRkZWQgdG8gdGhlIGRpY3Rpb25hcnkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgYXNzb2NpYXRlZCB2YWx1ZSBpcyB0byBiZSByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkgb3JcbiAgICAgKiBhIGRlZmF1bHQgdmFsdWUgaWYgdGhlIG1hcCBjb250YWlucyBubyBtYXBwaW5nIGZvciB0aGlzIGtleS5cbiAgICAgKi9cbiAgICBGYWN0b3J5RGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldERlZmF1bHQoa2V5LCB0aGlzLmRlZmF1bHRGYWN0b3J5RnVuY3Rpb24oKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmFjdG9yeURpY3Rpb25hcnk7XG59KERpY3Rpb25hcnlfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGYWN0b3J5RGljdGlvbmFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZhY3RvcnlEaWN0aW9uYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbGxlY3Rpb25zID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBhcnJheXMgPSByZXF1aXJlKFwiLi9hcnJheXNcIik7XG52YXIgSGVhcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IEhlYXAuXG4gICAgICogQGNsYXNzXG4gICAgICogPHA+QSBoZWFwIGlzIGEgYmluYXJ5IHRyZWUsIHdoZXJlIHRoZSBub2RlcyBtYWludGFpbiB0aGUgaGVhcCBwcm9wZXJ0eTpcbiAgICAgKiBlYWNoIG5vZGUgaXMgc21hbGxlciB0aGFuIGVhY2ggb2YgaXRzIGNoaWxkcmVuIGFuZCB0aGVyZWZvcmUgYSBNaW5IZWFwXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiB1c2VzIGFuIGFycmF5IHRvIHN0b3JlIGVsZW1lbnRzLjwvcD5cbiAgICAgKiA8cD5JZiB0aGUgaW5zZXJ0ZWQgZWxlbWVudHMgYXJlIGN1c3RvbSBvYmplY3RzIGEgY29tcGFyZSBmdW5jdGlvbiBtdXN0IGJlIHByb3ZpZGVkLFxuICAgICAqICBhdCBjb25zdHJ1Y3Rpb24gdGltZSwgb3RoZXJ3aXNlIHRoZSA8PSwgPT09IGFuZCA+PSBvcGVyYXRvcnMgYXJlXG4gICAgICogdXNlZCB0byBjb21wYXJlIGVsZW1lbnRzLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICogIGlmIChhIGlzIGxlc3MgdGhhbiBiIGJ5IHNvbWUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAtMTtcbiAgICAgKiAgfSBpZiAoYSBpcyBncmVhdGVyIHRoYW4gYiBieSB0aGUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAxO1xuICAgICAqICB9XG4gICAgICogIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICogIHJldHVybiAwO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIDxwPklmIGEgTWF4LUhlYXAgaXMgd2FudGVkIChncmVhdGVyIGVsZW1lbnRzIG9uIHRvcCkgeW91IGNhbiBhIHByb3ZpZGUgYVxuICAgICAqIHJldmVyc2UgY29tcGFyZSBmdW5jdGlvbiB0byBhY2NvbXBsaXNoIHRoYXQgYmVoYXZpb3IuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiByZXZlcnNlQ29tcGFyZShhLCBiKSB7XG4gICAgICogIGlmIChhIGlzIGxlc3MgdGhhbiBiIGJ5IHNvbWUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAxO1xuICAgICAqICB9IGlmIChhIGlzIGdyZWF0ZXIgdGhhbiBiIGJ5IHRoZSBvcmRlcmluZyBjcml0ZXJpb24pIHtcbiAgICAgKiAgICAgcmV0dXJuIC0xO1xuICAgICAqICB9XG4gICAgICogIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICogIHJldHVybiAwO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6bnVtYmVyPX0gY29tcGFyZUZ1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdXNlZCB0byBjb21wYXJlIHR3byBlbGVtZW50cy4gTXVzdCByZXR1cm4gYSBuZWdhdGl2ZSBpbnRlZ2VyLFxuICAgICAqIHplcm8sIG9yIGEgcG9zaXRpdmUgaW50ZWdlciBhcyB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbGVzcyB0aGFuLCBlcXVhbCB0byxcbiAgICAgKiBvciBncmVhdGVyIHRoYW4gdGhlIHNlY29uZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIZWFwKGNvbXBhcmVGdW5jdGlvbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgdXNlZCB0byBzdG9yZSB0aGUgZWxlbWVudHMgb2YgdGhlIGhlYXAuXG4gICAgICAgICAqIEB0eXBlIHtBcnJheS48T2JqZWN0Pn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBhcmUgPSBjb21wYXJlRnVuY3Rpb24gfHwgY29sbGVjdGlvbnMuZGVmYXVsdENvbXBhcmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsZWZ0IGNoaWxkIG9mIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSB0byBnZXQgdGhlIGxlZnQgY2hpbGRcbiAgICAgKiBmb3IuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGxlZnQgY2hpbGQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5sZWZ0Q2hpbGRJbmRleCA9IGZ1bmN0aW9uIChub2RlSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgyICogbm9kZUluZGV4KSArIDE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgcmlnaHQgY2hpbGQgb2YgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXggVGhlIGluZGV4IG9mIHRoZSBub2RlIHRvIGdldCB0aGUgcmlnaHQgY2hpbGRcbiAgICAgKiBmb3IuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIHJpZ2h0IGNoaWxkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucmlnaHRDaGlsZEluZGV4ID0gZnVuY3Rpb24gKG5vZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gKDIgKiBub2RlSW5kZXgpICsgMjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBwYXJlbnQgb2YgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXggVGhlIGluZGV4IG9mIHRoZSBub2RlIHRvIGdldCB0aGUgcGFyZW50IGZvci5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgcGFyZW50LlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucGFyZW50SW5kZXggPSBmdW5jdGlvbiAobm9kZUluZGV4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKChub2RlSW5kZXggLSAxKSAvIDIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHNtYWxsZXIgY2hpbGQgbm9kZSAoaWYgaXQgZXhpc3RzKS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVmdENoaWxkIGxlZnQgY2hpbGQgaW5kZXguXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0Q2hpbGQgcmlnaHQgY2hpbGQgaW5kZXguXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgaW5kZXggd2l0aCB0aGUgbWluaW11bSB2YWx1ZSBvciAtMSBpZiBpdCBkb2Vzbid0XG4gICAgICogZXhpc3RzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUubWluSW5kZXggPSBmdW5jdGlvbiAobGVmdENoaWxkLCByaWdodENoaWxkKSB7XG4gICAgICAgIGlmIChyaWdodENoaWxkID49IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChsZWZ0Q2hpbGQgPj0gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wYXJlKHRoaXMuZGF0YVtsZWZ0Q2hpbGRdLCB0aGlzLmRhdGFbcmlnaHRDaGlsZF0pIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJpZ2h0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleCB1cCB0byBpdHMgcHJvcGVyIHBsYWNlIGluIHRoZSBoZWFwLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIG5vZGUgdG8gbW92ZSB1cC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnNpZnRVcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnRJbmRleChpbmRleCk7XG4gICAgICAgIHdoaWxlIChpbmRleCA+IDAgJiYgdGhpcy5jb21wYXJlKHRoaXMuZGF0YVtwYXJlbnRdLCB0aGlzLmRhdGFbaW5kZXhdKSA+IDApIHtcbiAgICAgICAgICAgIGFycmF5cy5zd2FwKHRoaXMuZGF0YSwgcGFyZW50LCBpbmRleCk7XG4gICAgICAgICAgICBpbmRleCA9IHBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudCA9IHRoaXMucGFyZW50SW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggZG93biB0byBpdHMgcHJvcGVyIHBsYWNlIGluIHRoZSBoZWFwLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXggVGhlIGluZGV4IG9mIHRoZSBub2RlIHRvIG1vdmUgZG93bi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnNpZnREb3duID0gZnVuY3Rpb24gKG5vZGVJbmRleCkge1xuICAgICAgICAvL3NtYWxsZXIgY2hpbGQgaW5kZXhcbiAgICAgICAgdmFyIG1pbiA9IHRoaXMubWluSW5kZXgodGhpcy5sZWZ0Q2hpbGRJbmRleChub2RlSW5kZXgpLCB0aGlzLnJpZ2h0Q2hpbGRJbmRleChub2RlSW5kZXgpKTtcbiAgICAgICAgd2hpbGUgKG1pbiA+PSAwICYmIHRoaXMuY29tcGFyZSh0aGlzLmRhdGFbbm9kZUluZGV4XSwgdGhpcy5kYXRhW21pbl0pID4gMCkge1xuICAgICAgICAgICAgYXJyYXlzLnN3YXAodGhpcy5kYXRhLCBtaW4sIG5vZGVJbmRleCk7XG4gICAgICAgICAgICBub2RlSW5kZXggPSBtaW47XG4gICAgICAgICAgICBtaW4gPSB0aGlzLm1pbkluZGV4KHRoaXMubGVmdENoaWxkSW5kZXgobm9kZUluZGV4KSwgdGhpcy5yaWdodENoaWxkSW5kZXgobm9kZUluZGV4KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBidXQgZG9lcyBub3QgcmVtb3ZlIHRoZSByb290IGVsZW1lbnQgb2YgdGhpcyBoZWFwLlxuICAgICAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBhdCB0aGUgcm9vdCBvZiB0aGUgaGVhcC4gUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlXG4gICAgICogaGVhcCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBlbGVtZW50IGludG8gdGhlIGhlYXAuXG4gICAgICogQHBhcmFtIHsqfSBlbGVtZW50IHRoZSBlbGVtZW50LlxuICAgICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgYWRkZWQgb3IgZmFscyBpZiBpdCBpcyB1bmRlZmluZWQuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25zLmlzVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHRoaXMuc2lmdFVwKHRoaXMuZGF0YS5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYW5kIHJlbW92ZXMgdGhlIHJvb3QgZWxlbWVudCBvZiB0aGlzIGhlYXAuXG4gICAgICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBvZiB0aGUgaGVhcC4gUmV0dXJuc1xuICAgICAqIHVuZGVmaW5lZCBpZiB0aGUgaGVhcCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5yZW1vdmVSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLmRhdGFbMF07XG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNwbGljZSh0aGlzLmRhdGEubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZnREb3duKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgaGVhcCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBIZWFwIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCwgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgZXF1RiA9IGNvbGxlY3Rpb25zLmNvbXBhcmVUb0VxdWFscyh0aGlzLmNvbXBhcmUpO1xuICAgICAgICByZXR1cm4gYXJyYXlzLmNvbnRhaW5zKHRoaXMuZGF0YSwgZWxlbWVudCwgZXF1Rik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBoZWFwLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIGhlYXAuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBoZWFwIGlzIGVtcHR5LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYW5kIG9ubHkgaWYgdGhpcyBoZWFwIGNvbnRhaW5zIG5vIGl0ZW1zOyBmYWxzZVxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCA8PSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhpcyBoZWFwLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRhdGEubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIGhlYXAgaW5cbiAgICAgKiBubyBwYXJ0aWN1bGFyIG9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW5cbiAgICAgKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGFycmF5cy5mb3JFYWNoKHRoaXMuZGF0YSwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIEhlYXA7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSGVhcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhlYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9EaWN0aW9uYXJ5XCIpO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgYnkgdGhlIExpbmtlZERpY3Rpb25hcnkgSW50ZXJuYWxseVxuICogSGFzIHRvIGJlIGEgY2xhc3MsIG5vdCBhbiBpbnRlcmZhY2UsIGJlY2F1c2UgaXQgbmVlZHMgdG8gaGF2ZVxuICogdGhlICd1bmxpbmsnIGZ1bmN0aW9uIGRlZmluZWQuXG4gKi9cbnZhciBMaW5rZWREaWN0aW9uYXJ5UGFpciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaW5rZWREaWN0aW9uYXJ5UGFpcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIExpbmtlZERpY3Rpb25hcnlQYWlyLnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldi5uZXh0ID0gdGhpcy5uZXh0O1xuICAgICAgICB0aGlzLm5leHQucHJldiA9IHRoaXMucHJldjtcbiAgICB9O1xuICAgIHJldHVybiBMaW5rZWREaWN0aW9uYXJ5UGFpcjtcbn0oKSk7XG4vKipcbiAqIFRoZSBoZWFkIGFuZCB0YWlsIGVsZW1lbnRzIG9mIHRoZSBsaXN0IGhhdmUgbnVsbCBrZXkgYW5kIHZhbHVlIHByb3BlcnRpZXMgYnV0IHRoZXlcbiAqIHVzdWFsbHkgbGluayB0byBub3JtYWwgbm9kZXMuXG4gKi9cbnZhciBIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyKCkge1xuICAgICAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgICBIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXIucHJvdG90eXBlLnVubGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2Lm5leHQgPSB0aGlzLm5leHQ7XG4gICAgICAgIHRoaXMubmV4dC5wcmV2ID0gdGhpcy5wcmV2O1xuICAgIH07XG4gICAgcmV0dXJuIEhlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpcjtcbn0oKSk7XG5mdW5jdGlvbiBpc0hlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpcihwKSB7XG4gICAgcmV0dXJuICFwLm5leHQ7XG59XG52YXIgTGlua2VkRGljdGlvbmFyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGlua2VkRGljdGlvbmFyeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMaW5rZWREaWN0aW9uYXJ5KHRvU3RyRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdG9TdHJGdW5jdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaGVhZCA9IG5ldyBIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXIoKTtcbiAgICAgICAgX3RoaXMudGFpbCA9IG5ldyBIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXIoKTtcbiAgICAgICAgX3RoaXMuaGVhZC5uZXh0ID0gX3RoaXMudGFpbDtcbiAgICAgICAgX3RoaXMudGFpbC5wcmV2ID0gX3RoaXMuaGVhZDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSBuZXcgbm9kZSB0byB0aGUgJ3RhaWwnIG9mIHRoZSBsaXN0LCB1cGRhdGluZyB0aGVcbiAgICAgKiBuZWlnaGJvcnMsIGFuZCBtb3ZpbmcgJ3RoaXMudGFpbCcgKHRoZSBFbmQgb2YgTGlzdCBpbmRpY2F0b3IpIHRoYXRcbiAgICAgKiB0byB0aGUgZW5kLlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLmFwcGVuZFRvVGFpbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICB2YXIgbGFzdE5vZGUgPSB0aGlzLnRhaWwucHJldjtcbiAgICAgICAgbGFzdE5vZGUubmV4dCA9IGVudHJ5O1xuICAgICAgICBlbnRyeS5wcmV2ID0gbGFzdE5vZGU7XG4gICAgICAgIGVudHJ5Lm5leHQgPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbC5wcmV2ID0gZW50cnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBsaW5rZWQgZGljdGlvbmFyeSBmcm9tIHRoZSB0YWJsZSBpbnRlcm5hbGx5XG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0TGlua2VkRGljdGlvbmFyeVBhaXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGsgPSAnJCcgKyB0aGlzLnRvU3RyKGtleSk7XG4gICAgICAgIHZhciBwYWlyID0gKHRoaXMudGFibGVba10pO1xuICAgICAgICByZXR1cm4gcGFpcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIHRvIHdoaWNoIHRoaXMgZGljdGlvbmFyeSBtYXBzIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5nIGZvciB0aGlzIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aG9zZSBhc3NvY2lhdGVkIHZhbHVlIGlzIHRvIGJlIHJldHVybmVkLlxuICAgICAqIEByZXR1cm4geyp9IHRoZSB2YWx1ZSB0byB3aGljaCB0aGlzIGRpY3Rpb25hcnkgbWFwcyB0aGUgc3BlY2lmaWVkIGtleSBvclxuICAgICAqIHVuZGVmaW5lZCBpZiB0aGUgbWFwIGNvbnRhaW5zIG5vIG1hcHBpbmcgZm9yIHRoaXMga2V5LlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcGFpciA9IHRoaXMuZ2V0TGlua2VkRGljdGlvbmFyeVBhaXIoa2V5KTtcbiAgICAgICAgaWYgKCF1dGlsLmlzVW5kZWZpbmVkKHBhaXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFpci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbWFwcGluZyBmb3IgdGhpcyBrZXkgZnJvbSB0aGlzIGRpY3Rpb25hcnkgaWYgaXQgaXMgcHJlc2VudC5cbiAgICAgKiBBbHNvLCBpZiBhIHZhbHVlIGlzIHByZXNlbnQgZm9yIHRoaXMga2V5LCB0aGUgZW50cnkgaXMgcmVtb3ZlZCBmcm9tIHRoZVxuICAgICAqIGluc2VydGlvbiBvcmRlcmluZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aG9zZSBtYXBwaW5nIGlzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4geyp9IHByZXZpb3VzIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBzcGVjaWZpZWQga2V5LCBvciB1bmRlZmluZWQgaWZcbiAgICAgKiB0aGVyZSB3YXMgbm8gbWFwcGluZyBmb3Iga2V5LlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHBhaXIgPSB0aGlzLmdldExpbmtlZERpY3Rpb25hcnlQYWlyKGtleSk7XG4gICAgICAgIGlmICghdXRpbC5pc1VuZGVmaW5lZChwYWlyKSkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzLCBrZXkpOyAvLyBUaGlzIHdpbGwgcmVtb3ZlIGl0IGZyb20gdGhlIHRhYmxlXG4gICAgICAgICAgICBwYWlyLnVubGluaygpOyAvLyBUaGlzIHdpbGwgdW5saW5rIGl0IGZyb20gdGhlIGNoYWluXG4gICAgICAgICAgICByZXR1cm4gcGFpci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgbWFwcGluZ3MgZnJvbSB0aGlzIExpbmtlZERpY3Rpb25hcnkuXG4gICAgICogQHRoaXMge2NvbGxlY3Rpb25zLkxpbmtlZERpY3Rpb25hcnl9XG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuY2xlYXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5oZWFkLm5leHQgPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbC5wcmV2ID0gdGhpcy5oZWFkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb24gdXNlZCB3aGVuIHVwZGF0aW5nIGFuIGV4aXN0aW5nIEtleVZhbHVlIHBhaXIuXG4gICAgICogSXQgcGxhY2VzIHRoZSBuZXcgdmFsdWUgaW5kZXhlZCBieSBrZXkgaW50byB0aGUgdGFibGUsIGJ1dCBtYWludGFpbnNcbiAgICAgKiBpdHMgcGxhY2UgaW4gdGhlIGxpbmtlZCBvcmRlcmluZy5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG9sZFBhaXIsIG5ld1BhaXIpIHtcbiAgICAgICAgdmFyIGsgPSAnJCcgKyB0aGlzLnRvU3RyKG5ld1BhaXIua2V5KTtcbiAgICAgICAgLy8gc2V0IHRoZSBuZXcgUGFpcidzIGxpbmtzIHRvIGV4aXN0aW5nUGFpcidzIGxpbmtzXG4gICAgICAgIG5ld1BhaXIubmV4dCA9IG9sZFBhaXIubmV4dDtcbiAgICAgICAgbmV3UGFpci5wcmV2ID0gb2xkUGFpci5wcmV2O1xuICAgICAgICAvLyBEZWxldGUgRXhpc3RpbmcgUGFpciBmcm9tIHRoZSB0YWJsZSwgdW5saW5rIGl0IGZyb20gY2hhaW4uXG4gICAgICAgIC8vIEFzIGEgcmVzdWx0LCB0aGUgbkVsZW1lbnRzIGdldHMgZGVjcmVtZW50ZWQgYnkgdGhpcyBvcGVyYXRpb25cbiAgICAgICAgdGhpcy5yZW1vdmUob2xkUGFpci5rZXkpO1xuICAgICAgICAvLyBMaW5rIG5ldyBQYWlyIGluIHBsYWNlIG9mIHdoZXJlIG9sZFBhaXIgd2FzLFxuICAgICAgICAvLyBieSBwb2ludGluZyB0aGUgb2xkIHBhaXIncyBuZWlnaGJvcnMgdG8gaXQuXG4gICAgICAgIG5ld1BhaXIucHJldi5uZXh0ID0gbmV3UGFpcjtcbiAgICAgICAgbmV3UGFpci5uZXh0LnByZXYgPSBuZXdQYWlyO1xuICAgICAgICB0aGlzLnRhYmxlW2tdID0gbmV3UGFpcjtcbiAgICAgICAgLy8gVG8gbWFrZSB1cCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHdhcyBkZWNyZW1lbnRlZCxcbiAgICAgICAgLy8gV2UgbmVlZCB0byBpbmNyZWFzZSBpdCBieSBvbmUuXG4gICAgICAgICsrdGhpcy5uRWxlbWVudHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBc3NvY2lhdGVzIHRoZSBzcGVjaWZpZWQgdmFsdWUgd2l0aCB0aGUgc3BlY2lmaWVkIGtleSBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogSWYgdGhlIGRpY3Rpb25hcnkgcHJldmlvdXNseSBjb250YWluZWQgYSBtYXBwaW5nIGZvciB0aGlzIGtleSwgdGhlIG9sZFxuICAgICAqIHZhbHVlIGlzIHJlcGxhY2VkIGJ5IHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gICAgICogVXBkYXRpbmcgb2YgYSBrZXkgdGhhdCBhbHJlYWR5IGV4aXN0cyBtYWludGFpbnMgaXRzIHBsYWNlIGluIHRoZVxuICAgICAqIGluc2VydGlvbiBvcmRlciBpbnRvIHRoZSBtYXAuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2l0aCB3aGljaCB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHRvIGJlXG4gICAgICogYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIEByZXR1cm4geyp9IHByZXZpb3VzIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleSwgb3IgdW5kZWZpbmVkIGlmXG4gICAgICogdGhlcmUgd2FzIG5vIG1hcHBpbmcgZm9yIHRoZSBrZXkgb3IgaWYgdGhlIGtleS92YWx1ZSBhcmUgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoa2V5KSB8fCB1dGlsLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhpc3RpbmdQYWlyID0gdGhpcy5nZXRMaW5rZWREaWN0aW9uYXJ5UGFpcihrZXkpO1xuICAgICAgICB2YXIgbmV3UGFpciA9IG5ldyBMaW5rZWREaWN0aW9uYXJ5UGFpcihrZXksIHZhbHVlKTtcbiAgICAgICAgdmFyIGsgPSAnJCcgKyB0aGlzLnRvU3RyKGtleSk7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gZWxlbWVudCBmb3IgdGhhdCBrZXksIHdlXG4gICAgICAgIC8vIGtlZXAgaXQncyBwbGFjZSBpbiB0aGUgTGlua2VkTGlzdFxuICAgICAgICBpZiAoIXV0aWwuaXNVbmRlZmluZWQoZXhpc3RpbmdQYWlyKSkge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKGV4aXN0aW5nUGFpciwgbmV3UGFpcik7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdQYWlyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRUb1RhaWwobmV3UGFpcik7XG4gICAgICAgICAgICB0aGlzLnRhYmxlW2tdID0gbmV3UGFpcjtcbiAgICAgICAgICAgICsrdGhpcy5uRWxlbWVudHM7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBrZXlzIGluIHRoaXMgTGlua2VkRGljdGlvbmFyeSwgb3JkZXJlZFxuICAgICAqIGJ5IGluc2VydGlvbiBvcmRlci5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGtleXMgaW4gdGhpcyBMaW5rZWREaWN0aW9uYXJ5LFxuICAgICAqIG9yZGVyZWQgYnkgaW5zZXJ0aW9uIG9yZGVyLlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBpbiB0aGlzIExpbmtlZERpY3Rpb25hcnksIG9yZGVyZWQgYnlcbiAgICAgKiBpbnNlcnRpb24gb3JkZXIuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2YWx1ZXMgaW4gdGhpcyBMaW5rZWREaWN0aW9uYXJ5LFxuICAgICAqIG9yZGVyZWQgYnkgaW5zZXJ0aW9uIG9yZGVyLlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBrZXktdmFsdWUgcGFpclxuICAgICAqIHByZXNlbnQgaW4gdGhpcyBMaW5rZWREaWN0aW9uYXJ5LiBJdCBpcyBkb25lIGluIHRoZSBvcmRlciBvZiBpbnNlcnRpb25cbiAgICAgKiBpbnRvIHRoZSBMaW5rZWREaWN0aW9uYXJ5XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCB0d28gYXJndW1lbnRzOiBrZXkgYW5kIHZhbHVlLiBUbyBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW5cbiAgICAgKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjcmF3bE5vZGUgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgICAgd2hpbGUgKCFpc0hlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpcihjcmF3bE5vZGUpKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gY2FsbGJhY2soY3Jhd2xOb2RlLmtleSwgY3Jhd2xOb2RlLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Jhd2xOb2RlID0gY3Jhd2xOb2RlLm5leHQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMaW5rZWREaWN0aW9uYXJ5O1xufShEaWN0aW9uYXJ5XzEuZGVmYXVsdCkpOyAvLyBFbmQgb2YgTGlua2VkRGljdGlvbmFyeVxuZXhwb3J0cy5kZWZhdWx0ID0gTGlua2VkRGljdGlvbmFyeTtcbi8vIC8qKlxuLy8gICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBpcyBlcXVhbCB0byB0aGUgZ2l2ZW4gZGljdGlvbmFyeS5cbi8vICAqIFR3byBkaWN0aW9uYXJpZXMgYXJlIGVxdWFsIGlmIHRoZXkgY29udGFpbiB0aGUgc2FtZSBtYXBwaW5ncy5cbi8vICAqIEBwYXJhbSB7Y29sbGVjdGlvbnMuRGljdGlvbmFyeX0gb3RoZXIgdGhlIG90aGVyIGRpY3Rpb25hcnkuXG4vLyAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSB2YWx1ZXNFcXVhbEZ1bmN0aW9uIG9wdGlvbmFsXG4vLyAgKiBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGVxdWFsLlxuLy8gICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIGRpY3Rpb25hcnkgaXMgZXF1YWwgdG8gdGhlIGdpdmVuIGRpY3Rpb25hcnkuXG4vLyAgKi9cbi8vIGNvbGxlY3Rpb25zLkRpY3Rpb25hcnkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyLHZhbHVlc0VxdWFsRnVuY3Rpb24pIHtcbi8vIFx0Y29uc3QgZXFGID0gdmFsdWVzRXF1YWxGdW5jdGlvbiB8fCBjb2xsZWN0aW9ucy5kZWZhdWx0RXF1YWxzO1xuLy8gXHRpZighKG90aGVyIGluc3RhbmNlb2YgY29sbGVjdGlvbnMuRGljdGlvbmFyeSkpe1xuLy8gXHRcdHJldHVybiBmYWxzZTtcbi8vIFx0fVxuLy8gXHRpZih0aGlzLnNpemUoKSAhPT0gb3RoZXIuc2l6ZSgpKXtcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XG4vLyBcdH1cbi8vIFx0cmV0dXJuIHRoaXMuZXF1YWxzQXV4KHRoaXMuZmlyc3ROb2RlLG90aGVyLmZpcnN0Tm9kZSxlcUYpO1xuLy8gfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGlua2VkRGljdGlvbmFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBhcnJheXMgPSByZXF1aXJlKFwiLi9hcnJheXNcIik7XG52YXIgTGlua2VkTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IExpbmtlZCBMaXN0LlxuICAgICAqIEBjbGFzcyBBIGxpbmtlZCBsaXN0IGlzIGEgZGF0YSBzdHJ1Y3R1cmUgY29uc2lzdGluZyBvZiBhIGdyb3VwIG9mIG5vZGVzXG4gICAgICogd2hpY2ggdG9nZXRoZXIgcmVwcmVzZW50IGEgc2VxdWVuY2UuXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gTGlua2VkTGlzdCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcnN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmlyc3ROb2RlID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOdW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGxpc3RcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubkVsZW1lbnRzID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBlbGVtZW50IHRvIHRoaXMgbGlzdC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBlbGVtZW50IHRvIGJlIGFkZGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gaW5kZXggb3B0aW9uYWwgaW5kZXggdG8gYWRkIHRoZSBlbGVtZW50LiBJZiBubyBpbmRleCBpcyBzcGVjaWZpZWRcbiAgICAgKiB0aGUgZWxlbWVudCBpcyBhZGRlZCB0byB0aGUgZW5kIG9mIHRoaXMgbGlzdC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBhZGRlZCBvciBmYWxzZSBpZiB0aGUgaW5kZXggaXMgaW52YWxpZFxuICAgICAqIG9yIGlmIHRoZSBlbGVtZW50IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubkVsZW1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLm5FbGVtZW50cyB8fCB1dGlsLmlzVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld05vZGUgPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XG4gICAgICAgIGlmICh0aGlzLm5FbGVtZW50cyA9PT0gMCB8fCB0aGlzLmxhc3ROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBub2RlIGluIHRoZSBsaXN0LlxuICAgICAgICAgICAgdGhpcy5maXJzdE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IHRoaXMubkVsZW1lbnRzKSB7XG4gICAgICAgICAgICAvLyBJbnNlcnQgYXQgdGhlIGVuZC5cbiAgICAgICAgICAgIHRoaXMubGFzdE5vZGUubmV4dCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0aGlzLmxhc3ROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQ2hhbmdlIGZpcnN0IG5vZGUuXG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmV2ID0gdGhpcy5ub2RlQXRJbmRleChpbmRleCAtIDEpO1xuICAgICAgICAgICAgaWYgKHByZXYgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBwcmV2Lm5leHQ7XG4gICAgICAgICAgICBwcmV2Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubkVsZW1lbnRzKys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGlzIGxpc3QuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGxpc3Qgb3IgdW5kZWZpbmVkIGlmIHRoZSBsaXN0IGlzXG4gICAgICogZW1wdHkuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROb2RlLmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBpbiB0aGlzIGxpc3QuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgbGlzdCBvciB1bmRlZmluZWQgaWYgdGhlIGxpc3QgaXNcbiAgICAgKiBlbXB0eS5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdE5vZGUuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoaXMgbGlzdC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggZGVzaXJlZCBpbmRleC5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXggb3IgdW5kZWZpbmVkIGlmIHRoZSBpbmRleCBpc1xuICAgICAqIG91dCBvZiBib3VuZHMuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuZWxlbWVudEF0SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGVBdEluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGUuZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGluIHRoaXMgbGlzdCBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiB0aGVcbiAgICAgKiBzcGVjaWZpZWQgZWxlbWVudCwgb3IgLTEgaWYgdGhlIExpc3QgZG9lcyBub3QgY29udGFpbiB0aGlzIGVsZW1lbnQuXG4gICAgICogPHA+SWYgdGhlIGVsZW1lbnRzIGluc2lkZSB0aGlzIGxpc3QgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yIGEgY3VzdG9tIGVxdWFscyBmdW5jdGlvbiBzaG91bGQgYmVcbiAgICAgKiBwcm92aWRlZCB0byBwZXJmb3JtIHNlYXJjaGVzLCB0aGUgZnVuY3Rpb24gbXVzdCByZWNlaXZlIHR3byBhcmd1bWVudHMgYW5kXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhleSBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGNvbnN0IHBldHNBcmVFcXVhbEJ5TmFtZSA9IGZ1bmN0aW9uKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gT3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIGlmIHR3byBlbGVtZW50cyBhcmUgZXF1YWwuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgaW5kZXggaW4gdGhpcyBsaXN0IG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlXG4gICAgICogb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50LCBvciAtMSBpZiB0aGlzIGxpc3QgZG9lcyBub3QgY29udGFpbiB0aGVcbiAgICAgKiBlbGVtZW50LlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIGVxdWFsc0YgPSBlcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGVxdWFsc0YoY3VycmVudE5vZGUuZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGxpc3QgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIDxwPklmIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlIGxpc3QgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yIGEgY3VzdG9tIGVxdWFscyBmdW5jdGlvbiBzaG91bGQgYmVcbiAgICAgKiBwcm92aWRlZCB0byBwZXJmb3JtIHNlYXJjaGVzLCB0aGUgZnVuY3Rpb24gbXVzdCByZWNlaXZlIHR3byBhcmd1bWVudHMgYW5kXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhleSBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGNvbnN0IHBldHNBcmVFcXVhbEJ5TmFtZSA9IGZ1bmN0aW9uKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gT3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIGlmIHR3byBlbGVtZW50cyBhcmUgZXF1YWwuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIGxpc3QgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LCBmYWxzZVxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChpdGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXhPZihpdGVtLCBlcXVhbHNGdW5jdGlvbikgPj0gMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbiB0aGlzIGxpc3QuXG4gICAgICogPHA+SWYgdGhlIGVsZW1lbnRzIGluc2lkZSB0aGUgbGlzdCBhcmVcbiAgICAgKiBub3QgY29tcGFyYWJsZSB3aXRoIHRoZSA9PT0gb3BlcmF0b3IgYSBjdXN0b20gZXF1YWxzIGZ1bmN0aW9uIHNob3VsZCBiZVxuICAgICAqIHByb3ZpZGVkIHRvIHBlcmZvcm0gc2VhcmNoZXMsIHRoZSBmdW5jdGlvbiBtdXN0IHJlY2VpdmUgdHdvIGFyZ3VtZW50cyBhbmRcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiB0aGV5IGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogY29uc3QgcGV0c0FyZUVxdWFsQnlOYW1lID0gZnVuY3Rpb24ocGV0MSwgcGV0Mikge1xuICAgICAqICByZXR1cm4gcGV0MS5uYW1lID09PSBwZXQyLm5hbWU7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIGVsZW1lbnQgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoaXMgbGlzdCwgaWYgcHJlc2VudC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBsaXN0IGNvbnRhaW5lZCB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgICAgIHZhciBlcXVhbHNGID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgICAgICBpZiAodGhpcy5uRWxlbWVudHMgPCAxIHx8IHV0aWwuaXNVbmRlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldmlvdXMgPSBudWxsO1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZXF1YWxzRihjdXJyZW50Tm9kZS5lbGVtZW50LCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZSA9PT0gdGhpcy5sYXN0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE5vZGUgPT09IHRoaXMubGFzdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IHByZXZpb3VzO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5uZXh0ID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5uZXh0ID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubkVsZW1lbnRzLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91cyA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgbGlzdC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maXJzdE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgbGlzdCBpcyBlcXVhbCB0byB0aGUgZ2l2ZW4gbGlzdC5cbiAgICAgKiBUd28gbGlzdHMgYXJlIGVxdWFsIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBvcmRlci5cbiAgICAgKiBAcGFyYW0ge0xpbmtlZExpc3R9IG90aGVyIHRoZSBvdGhlciBsaXN0LlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdXNlZCB0byBjaGVjayBpZiB0d28gZWxlbWVudHMgYXJlIGVxdWFsLiBJZiB0aGUgZWxlbWVudHMgaW4gdGhlIGxpc3RzXG4gICAgICogYXJlIGN1c3RvbSBvYmplY3RzIHlvdSBzaG91bGQgcHJvdmlkZSBhIGZ1bmN0aW9uLCBvdGhlcndpc2VcbiAgICAgKiB0aGUgPT09IG9wZXJhdG9yIGlzIHVzZWQgdG8gY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgbGlzdCBpcyBlcXVhbCB0byB0aGUgZ2l2ZW4gbGlzdC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob3RoZXIsIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgICAgIHZhciBlcUYgPSBlcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgTGlua2VkTGlzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaXplKCkgIT09IG90aGVyLnNpemUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFsc0F1eCh0aGlzLmZpcnN0Tm9kZSwgb3RoZXIuZmlyc3ROb2RlLCBlcUYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5lcXVhbHNBdXggPSBmdW5jdGlvbiAobjEsIG4yLCBlcUYpIHtcbiAgICAgICAgd2hpbGUgKG4xICE9PSBudWxsICYmIG4yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIWVxRihuMS5lbGVtZW50LCBuMi5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4xID0gbjEubmV4dDtcbiAgICAgICAgICAgIG4yID0gbjIubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBwb3NpdGlvbiBpbiB0aGlzIGxpc3QuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IGdpdmVuIGluZGV4LlxuICAgICAqIEByZXR1cm4geyp9IHJlbW92ZWQgZWxlbWVudCBvciB1bmRlZmluZWQgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUucmVtb3ZlRWxlbWVudEF0SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLm5FbGVtZW50cyB8fCB0aGlzLmZpcnN0Tm9kZSA9PT0gbnVsbCB8fCB0aGlzLmxhc3ROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5uRWxlbWVudHMgPT09IDEpIHtcbiAgICAgICAgICAgIC8vRmlyc3Qgbm9kZSBpbiB0aGUgbGlzdC5cbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmZpcnN0Tm9kZS5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5maXJzdE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXMgPSB0aGlzLm5vZGVBdEluZGV4KGluZGV4IC0gMSk7XG4gICAgICAgICAgICBpZiAocHJldmlvdXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5maXJzdE5vZGUuZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Tm9kZSA9IHRoaXMuZmlyc3ROb2RlLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcmV2aW91cy5uZXh0ID09PSB0aGlzLmxhc3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMubGFzdE5vZGUuZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3ROb2RlID0gcHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldmlvdXMgIT09IG51bGwgJiYgcHJldmlvdXMubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBwcmV2aW91cy5uZXh0LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IHByZXZpb3VzLm5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5FbGVtZW50cy0tO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIGxpc3QgaW4gb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGN1cnJlbnROb2RlLmVsZW1lbnQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGUgb3JkZXIgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgbGlua2VkIGxpc3QgKG1ha2VzIHRoZSBsYXN0XG4gICAgICogZWxlbWVudCBmaXJzdCwgYW5kIHRoZSBmaXJzdCBlbGVtZW50IGxhc3QpLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IG51bGw7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHZhciB0ZW1wID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXAgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBwcmV2aW91cztcbiAgICAgICAgICAgIHByZXZpb3VzID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHRlbXAgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgdGhpcy5maXJzdE5vZGUgPSB0aGlzLmxhc3ROb2RlO1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gdGVtcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgbGlzdCBpbiBwcm9wZXJcbiAgICAgKiBzZXF1ZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheS48Kj59IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIGxpc3QsXG4gICAgICogaW4gcHJvcGVyIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGN1cnJlbnROb2RlLmVsZW1lbnQpO1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIGxpc3QuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgbGlzdC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBsaXN0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBsaXN0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5FbGVtZW50cyA8PSAwO1xuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcnJheXMudG9TdHJpbmcodGhpcy50b0FycmF5KCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5ub2RlQXRJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMubkVsZW1lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLm5FbGVtZW50cyAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZmlyc3ROb2RlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGV4ICYmIG5vZGUgIT09IG51bGw7IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuY3JlYXRlTm9kZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50OiBpdGVtLFxuICAgICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIExpbmtlZExpc3Q7XG59KCkpOyAvLyBFbmQgb2YgbGlua2VkIGxpc3RcbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtlZExpc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MaW5rZWRMaXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIERpY3Rpb25hcnlfMSA9IHJlcXVpcmUoXCIuL0RpY3Rpb25hcnlcIik7XG52YXIgYXJyYXlzID0gcmVxdWlyZShcIi4vYXJyYXlzXCIpO1xudmFyIE11bHRpRGljdGlvbmFyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IG11bHRpIGRpY3Rpb25hcnkuXG4gICAgICogQGNsYXNzIDxwPkEgbXVsdGkgZGljdGlvbmFyeSBpcyBhIHNwZWNpYWwga2luZCBvZiBkaWN0aW9uYXJ5IHRoYXQgaG9sZHNcbiAgICAgKiBtdWx0aXBsZSB2YWx1ZXMgYWdhaW5zdCBlYWNoIGtleS4gU2V0dGluZyBhIHZhbHVlIGludG8gdGhlIGRpY3Rpb25hcnkgd2lsbFxuICAgICAqIGFkZCB0aGUgdmFsdWUgdG8gYW4gYXJyYXkgYXQgdGhhdCBrZXkuIEdldHRpbmcgYSBrZXkgd2lsbCByZXR1cm4gYW4gYXJyYXksXG4gICAgICogaG9sZGluZyBhbGwgdGhlIHZhbHVlcyBzZXQgdG8gdGhhdCBrZXkuXG4gICAgICogWW91IGNhbiBjb25maWd1cmUgdG8gYWxsb3cgZHVwbGljYXRlcyBpbiB0aGUgdmFsdWVzLlxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gYWNjZXB0cyBhbnkga2luZCBvZiBvYmplY3RzIGFzIGtleXMuPC9wPlxuICAgICAqXG4gICAgICogPHA+SWYgdGhlIGtleXMgYXJlIGN1c3RvbSBvYmplY3RzIGEgZnVuY3Rpb24gd2hpY2ggY29udmVydHMga2V5cyB0byBzdHJpbmdzIG11c3QgYmVcbiAgICAgKiBwcm92aWRlZC4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIHBldFRvU3RyaW5nKHBldCkge1xuICAgICAqICAgICByZXR1cm4gcGV0Lm5hbWU7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIDxwPklmIHRoZSB2YWx1ZXMgYXJlIGN1c3RvbSBvYmplY3RzIGEgZnVuY3Rpb24gdG8gY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiB2YWx1ZXNcbiAgICAgKiBtdXN0IGJlIHByb3ZpZGVkLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0c0FyZUVxdWFsQnlBZ2UocGV0MSxwZXQyKSB7XG4gICAgICogICAgIHJldHVybiBwZXQxLmFnZSA9PT0gcGV0Mi5hZ2U7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KTpzdHJpbmc9fSB0b1N0ckZ1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uXG4gICAgICogdG8gY29udmVydCBrZXlzIHRvIHN0cmluZ3MuIElmIHRoZSBrZXlzIGFyZW4ndCBzdHJpbmdzIG9yIGlmIHRvU3RyaW5nKClcbiAgICAgKiBpcyBub3QgYXBwcm9wcmlhdGUsIGEgY3VzdG9tIGZ1bmN0aW9uIHdoaWNoIHJlY2VpdmVzIGEga2V5IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gdmFsdWVzRXF1YWxzRnVuY3Rpb24gb3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB0byBjaGVjayBpZiB0d28gdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhbGxvd0R1cGxpY2F0ZVZhbHVlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIE11bHRpRGljdGlvbmFyeSh0b1N0ckZ1bmN0aW9uLCB2YWx1ZXNFcXVhbHNGdW5jdGlvbiwgYWxsb3dEdXBsaWNhdGVWYWx1ZXMpIHtcbiAgICAgICAgaWYgKGFsbG93RHVwbGljYXRlVmFsdWVzID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGVWYWx1ZXMgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLmRpY3QgPSBuZXcgRGljdGlvbmFyeV8xLmRlZmF1bHQodG9TdHJGdW5jdGlvbik7XG4gICAgICAgIHRoaXMuZXF1YWxzRiA9IHZhbHVlc0VxdWFsc0Z1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdEVxdWFscztcbiAgICAgICAgdGhpcy5hbGxvd0R1cGxpY2F0ZSA9IGFsbG93RHVwbGljYXRlVmFsdWVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGhvbGRpbmcgdGhlIHZhbHVlcyB0byB3aGljaCB0aGlzIGRpY3Rpb25hcnkgbWFwc1xuICAgICAqIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIFJldHVybnMgYW4gZW1wdHkgYXJyYXkgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmdzIGZvciB0aGlzIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aG9zZSBhc3NvY2lhdGVkIHZhbHVlcyBhcmUgdG8gYmUgcmV0dXJuZWQuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGhvbGRpbmcgdGhlIHZhbHVlcyB0byB3aGljaCB0aGlzIGRpY3Rpb25hcnkgbWFwc1xuICAgICAqIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqL1xuICAgIE11bHRpRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmRpY3QuZ2V0VmFsdWUoa2V5KTtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheXMuY29weSh2YWx1ZXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgdmFsdWUgdG8gdGhlIGFycmF5IGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleSwgaWZcbiAgICAgKiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdpdGggd2hpY2ggdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB0byBiZVxuICAgICAqIGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZSB0byBhZGQgdG8gdGhlIGFycmF5IGF0IHRoZSBrZXlcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSB3YXMgbm90IGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIHRoYXQga2V5LlxuICAgICAqL1xuICAgIE11bHRpRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChrZXkpIHx8IHV0aWwuaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5kaWN0LmdldFZhbHVlKGtleSk7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGFycmF5KSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNldFZhbHVlKGtleSwgW3ZhbHVlXSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgIGlmIChhcnJheXMuY29udGFpbnMoYXJyYXksIHZhbHVlLCB0aGlzLmVxdWFsc0YpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCB2YWx1ZXMgZnJvbSB0aGUgYXJyYXkgb2YgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiBzcGVjaWZpZWQga2V5LiBJZiBhIHZhbHVlIGlzbid0IGdpdmVuLCBhbGwgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkXG4gICAgICoga2V5IGFyZSByZW1vdmVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIG1hcHBpbmcgaXMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZVxuICAgICAqIGRpY3Rpb25hcnkuXG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSB2YWx1ZSBvcHRpb25hbCBhcmd1bWVudCB0byBzcGVjaWZ5IHRoZSB2YWx1ZSB0byByZW1vdmVcbiAgICAgKiBmcm9tIHRoZSBhcnJheSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogQHJldHVybiB7Kn0gdHJ1ZSBpZiB0aGUgZGljdGlvbmFyeSBjaGFuZ2VkLCBmYWxzZSBpZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3Qgb3JcbiAgICAgKiBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzbid0IGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmRpY3QucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gIXV0aWwuaXNVbmRlZmluZWQodik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5kaWN0LmdldFZhbHVlKGtleSk7XG4gICAgICAgIGlmICghdXRpbC5pc1VuZGVmaW5lZChhcnJheSkgJiYgYXJyYXlzLnJlbW92ZShhcnJheSwgdmFsdWUsIHRoaXMuZXF1YWxzRikpIHtcbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBrZXlzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGtleXMgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIE11bHRpRGljdGlvbmFyeS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdC5rZXlzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2YWx1ZXMgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdmFsdWVzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZGljdC52YWx1ZXMoKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzEgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHZhbHVlc18xW19pXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgdl8xID0gdjsgX2EgPCB2XzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSB2XzFbX2FdO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2godyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBhdCBsZWFzdCBvbmUgdmFsdWUgYXNzb2NpYXR0ZWQgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgcHJlc2VuY2UgaW4gdGhpcyBkaWN0aW9uYXJ5IGlzIHRvIGJlXG4gICAgICogdGVzdGVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGF0IGxlYXN0IG9uZSB2YWx1ZSBhc3NvY2lhdHRlZFxuICAgICAqIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqL1xuICAgIE11bHRpRGljdGlvbmFyeS5wcm90b3R5cGUuY29udGFpbnNLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3QuY29udGFpbnNLZXkoa2V5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG1hcHBpbmdzIGZyb20gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIE11bHRpRGljdGlvbmFyeS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5jbGVhcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGtleXMgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBrZXktdmFsdWUgbWFwcGluZ3MgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIE11bHRpRGljdGlvbmFyeS5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdC5zaXplKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmdzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmdzLlxuICAgICAqL1xuICAgIE11bHRpRGljdGlvbmFyeS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdC5pc0VtcHR5KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTXVsdGlEaWN0aW9uYXJ5O1xufSgpKTsgLy8gZW5kIG9mIG11bHRpIGRpY3Rpb25hcnlcbmV4cG9ydHMuZGVmYXVsdCA9IE11bHRpRGljdGlvbmFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU11bHRpRGljdGlvbmFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaXJlY3Rpb247XG4oZnVuY3Rpb24gKERpcmVjdGlvbikge1xuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJCRUZPUkVcIl0gPSAwXSA9IFwiQkVGT1JFXCI7XG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIkFGVEVSXCJdID0gMV0gPSBcIkFGVEVSXCI7XG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIklOU0lERV9BVF9FTkRcIl0gPSAyXSA9IFwiSU5TSURFX0FUX0VORFwiO1xuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJJTlNJREVfQVRfU1RBUlRcIl0gPSAzXSA9IFwiSU5TSURFX0FUX1NUQVJUXCI7XG59KShEaXJlY3Rpb24gfHwgKERpcmVjdGlvbiA9IHt9KSk7XG52YXIgTXVsdGlSb290VHJlZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdWx0aVJvb3RUcmVlKHJvb3RJZHMsIG5vZGVzKSB7XG4gICAgICAgIGlmIChyb290SWRzID09PSB2b2lkIDApIHsgcm9vdElkcyA9IFtdOyB9XG4gICAgICAgIGlmIChub2RlcyA9PT0gdm9pZCAwKSB7IG5vZGVzID0ge307IH1cbiAgICAgICAgdGhpcy5yb290SWRzID0gcm9vdElkcztcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgICAgICB0aGlzLmluaXRSb290SWRzKCk7XG4gICAgICAgIHRoaXMuaW5pdE5vZGVzKCk7XG4gICAgfVxuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmluaXRSb290SWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5yb290SWRzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJvb3RJZCA9IF9hW19pXTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW1wdHlOb2RlSWZOb3RFeGlzdChyb290SWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5pbml0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5ub2Rlc1tub2RlS2V5XTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVMaXN0SXRlbSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbXB0eU5vZGVJZk5vdEV4aXN0KG5vZGVMaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5jcmVhdGVFbXB0eU5vZGVJZk5vdEV4aXN0ID0gZnVuY3Rpb24gKG5vZGVLZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVzW25vZGVLZXldKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzW25vZGVLZXldID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmdldFJvb3RJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMucm9vdElkcy5zbGljZSgpO1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5nZXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsb25lID0ge307XG4gICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVtub2RlS2V5XSA9IHRoaXMubm9kZXNbbm9kZUtleV0uc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5nZXRPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb290SWRzOiB0aGlzLmdldFJvb3RJZHMoKSxcbiAgICAgICAgICAgIG5vZGVzOiB0aGlzLmdldE5vZGVzKCksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0KCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZXh0cmFQcm9wc09iamVjdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm9vdElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHJvb3RJZCA9IHRoaXMucm9vdElkc1tpXTtcbiAgICAgICAgICAgIGV4dHJhUHJvcHNPYmplY3QucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHJvb3RJZCxcbiAgICAgICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgICAgICBoYXNQYXJlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ291bnQ6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRyYXZlcnNlKHJvb3RJZCwgdGhpcy5ub2RlcywgZXh0cmFQcm9wc09iamVjdCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBleHRyYVByb3BzT2JqZWN0XzEgPSBleHRyYVByb3BzT2JqZWN0OyBfaSA8IGV4dHJhUHJvcHNPYmplY3RfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gZXh0cmFQcm9wc09iamVjdF8xW19pXTtcbiAgICAgICAgICAgIG8uY2hpbGRyZW5Db3VudCA9IGNvdW50Q2hpbGRyZW4oby5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dHJhUHJvcHNPYmplY3Q7XG4gICAgICAgIGZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oaWQpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMubm9kZXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5Db3VudCA9IF90aGlzLm5vZGVzW2lkXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdHJhdmVyc2Uoc3RhcnRJZCwgbm9kZXMsIHJldHVybkFycmF5LCBsZXZlbCkge1xuICAgICAgICAgICAgaWYgKGxldmVsID09PSB2b2lkIDApIHsgbGV2ZWwgPSAwOyB9XG4gICAgICAgICAgICBpZiAoIXN0YXJ0SWQgfHwgIW5vZGVzIHx8ICFyZXR1cm5BcnJheSB8fCAhbm9kZXNbc3RhcnRJZF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICAgICAgdmFyIGlkc0xpc3QgPSBub2Rlc1tzdGFydElkXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWRzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGlkc0xpc3RbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7IGlkOiBpZCwgbGV2ZWw6IGxldmVsLCBoYXNQYXJlbnQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoaWQsIG5vZGVzLCByZXR1cm5BcnJheSwgbGV2ZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWwtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubW92ZUlkQmVmb3JlSWQgPSBmdW5jdGlvbiAobW92ZUlkLCBiZWZvcmVJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlSWQobW92ZUlkLCBiZWZvcmVJZCwgRGlyZWN0aW9uLkJFRk9SRSk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5tb3ZlSWRBZnRlcklkID0gZnVuY3Rpb24gKG1vdmVJZCwgYWZ0ZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlSWQobW92ZUlkLCBhZnRlcklkLCBEaXJlY3Rpb24uQUZURVIpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubW92ZUlkSW50b0lkID0gZnVuY3Rpb24gKG1vdmVJZCwgaW5zaWRlSWQsIGF0U3RhcnQpIHtcbiAgICAgICAgaWYgKGF0U3RhcnQgPT09IHZvaWQgMCkgeyBhdFN0YXJ0ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoYXRTdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZUlkKG1vdmVJZCwgaW5zaWRlSWQsIERpcmVjdGlvbi5JTlNJREVfQVRfU1RBUlQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW92ZUlkKG1vdmVJZCwgaW5zaWRlSWQsIERpcmVjdGlvbi5JTlNJREVfQVRfRU5EKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuc3dhcFJvb3RJZFdpdGhSb290SWQgPSBmdW5jdGlvbiAocm9vdElkLCB3aXRoUm9vdElkKSB7XG4gICAgICAgIHZhciBsZWZ0SW5kZXggPSB0aGlzLmZpbmRSb290SWQocm9vdElkKTtcbiAgICAgICAgdmFyIHJpZ2h0SW5kZXggPSB0aGlzLmZpbmRSb290SWQod2l0aFJvb3RJZCk7XG4gICAgICAgIHRoaXMuc3dhcFJvb3RQb3NpdGlvbldpdGhSb290UG9zaXRpb24obGVmdEluZGV4LCByaWdodEluZGV4KTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnN3YXBSb290UG9zaXRpb25XaXRoUm9vdFBvc2l0aW9uID0gZnVuY3Rpb24gKHN3YXBSb290UG9zaXRpb24sIHdpdGhSb290UG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHRlbXAgPSB0aGlzLnJvb3RJZHNbd2l0aFJvb3RQb3NpdGlvbl07XG4gICAgICAgIHRoaXMucm9vdElkc1t3aXRoUm9vdFBvc2l0aW9uXSA9IHRoaXMucm9vdElkc1tzd2FwUm9vdFBvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5yb290SWRzW3N3YXBSb290UG9zaXRpb25dID0gdGVtcDtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmRlbGV0ZUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMucm9vdERlbGV0ZUlkKGlkKTtcbiAgICAgICAgdGhpcy5ub2RlQW5kU3ViTm9kZXNEZWxldGUoaWQpO1xuICAgICAgICB0aGlzLm5vZGVSZWZyZW5jZXNEZWxldGUoaWQpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuaW5zZXJ0SWRCZWZvcmVJZCA9IGZ1bmN0aW9uIChiZWZvcmVJZCwgaW5zZXJ0SWQpIHtcbiAgICAgICAgdmFyIGZvdW5kUm9vdElkSW5kZXggPSB0aGlzLmZpbmRSb290SWQoYmVmb3JlSWQpO1xuICAgICAgICBpZiAoZm91bmRSb290SWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydElkSW50b1Jvb3QoaW5zZXJ0SWQsIGZvdW5kUm9vdElkSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmROb2RlSWRJbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCBiZWZvcmVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kTm9kZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b05vZGUobm9kZUtleSwgaW5zZXJ0SWQsIGZvdW5kTm9kZUlkSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuaW5zZXJ0SWRBZnRlcklkID0gZnVuY3Rpb24gKGJlbG93SWQsIGluc2VydElkKSB7XG4gICAgICAgIHZhciBmb3VuZFJvb3RJZEluZGV4ID0gdGhpcy5maW5kUm9vdElkKGJlbG93SWQpO1xuICAgICAgICBpZiAoZm91bmRSb290SWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydElkSW50b1Jvb3QoaW5zZXJ0SWQsIGZvdW5kUm9vdElkSW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kTm9kZUlkSW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgYmVsb3dJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kTm9kZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b05vZGUobm9kZUtleSwgaW5zZXJ0SWQsIGZvdW5kTm9kZUlkSW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmluc2VydElkSW50b0lkID0gZnVuY3Rpb24gKGluc2lkZUlkLCBpbnNlcnRJZCkge1xuICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdEVuZChpbnNpZGVJZCwgaW5zZXJ0SWQpO1xuICAgICAgICB0aGlzLm5vZGVzW2luc2VydElkXSA9IFtdO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuaW5zZXJ0SWRJbnRvUm9vdCA9IGZ1bmN0aW9uIChpZCwgcG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdEluc2VydEF0RW5kKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoXzEgPSB0aGlzLnJvb3RJZHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdElkcy5zcGxpY2UoKHBvc2l0aW9uICsgbGVuZ3RoXzEgKyAxKSwgMCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290SWRzLnNwbGljZShwb3NpdGlvbiwgMCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZXNbaWRdID0gdGhpcy5ub2Rlc1tpZF0gfHwgW107XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5pbnNlcnRJZEludG9Ob2RlID0gZnVuY3Rpb24gKG5vZGVLZXksIGlkLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLm5vZGVzW25vZGVLZXldID0gdGhpcy5ub2Rlc1tub2RlS2V5XSB8fCBbXTtcbiAgICAgICAgdGhpcy5ub2Rlc1tpZF0gPSB0aGlzLm5vZGVzW2lkXSB8fCBbXTtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0RW5kKG5vZGVLZXksIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoXzIgPSB0aGlzLm5vZGVzW25vZGVLZXldLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzW25vZGVLZXldLnNwbGljZSgocG9zaXRpb24gKyBsZW5ndGhfMiArIDEpLCAwLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzW25vZGVLZXldLnNwbGljZShwb3NpdGlvbiwgMCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5tb3ZlSWQgPSBmdW5jdGlvbiAobW92ZUlkLCBiZWZvcmVJZCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBzb3VyY2VJZCA9IG1vdmVJZDtcbiAgICAgICAgdmFyIHNvdXJjZVJvb3RJbmRleCA9IHRoaXMuZmluZFJvb3RJZChzb3VyY2VJZCk7XG4gICAgICAgIHZhciBzb3VyY2VOb2RlS2V5O1xuICAgICAgICB2YXIgc291cmNlTm9kZUlkSW5kZXg7XG4gICAgICAgIGlmICh0aGlzLm5vZGVzW2JlZm9yZUlkXSkge1xuICAgICAgICAgICAgc291cmNlTm9kZUtleSA9IGJlZm9yZUlkO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VOb2RlSWRJbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCBiZWZvcmVJZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ290IGFsbFxuICAgICAgICB2YXIgdGFyZ2V0SWQgPSBiZWZvcmVJZDtcbiAgICAgICAgdmFyIHRhcmdldFJvb3RJbmRleCA9IHRoaXMuZmluZFJvb3RJZCh0YXJnZXRJZCk7XG4gICAgICAgIHZhciB0YXJnZXROb2RlS2V5O1xuICAgICAgICB2YXIgdGFyZ2V0Tm9kZUlkSW5kZXg7XG4gICAgICAgIGlmICh0aGlzLm5vZGVzW2JlZm9yZUlkXSkge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZUtleSA9IGJlZm9yZUlkO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlSWRJbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCBiZWZvcmVJZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ290IGFsbFxuICAgICAgICBpZiAoc291cmNlUm9vdEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRSb290SW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmluZyByb290IHRvIHJvb3RcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgTW92aW5nIFJPT1QgdG8gUk9PVGApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBSb290SWRzOmApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm9vdElkcyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFRhcmdldEluZGV4PSR7dGFyZ2V0Um9vdEluZGV4fSwgU291cmNlSW5kZXg9JHtzb3VyY2VSb290SW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFRhcmdldElkPSR7dGFyZ2V0SWR9LCBTb3VyY2VJZD0ke3NvdXJjZUlkfWApO1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdERlbGV0ZShzb3VyY2VSb290SW5kZXgpOyAvLyBpbmRleGVzIGNoYW5nZSBub3dcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Um9vdEluZGV4ID4gc291cmNlUm9vdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFJvb3RJbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQkVGT1JFOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Sb290KHNvdXJjZUlkLCB0YXJnZXRSb290SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkFGVEVSOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Sb290KHNvdXJjZUlkLCB0YXJnZXRSb290SW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfU1RBUlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdFN0YXJ0KHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX0VORDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0RW5kKHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBtb3Zpbmcgcm9vdCAoc291cmNlKSBBQk9WRSBub2RlICh0YXJnZXQpXG4gICAgICAgICAgICAgICAgLy8gd2lsbCByZW1vdmUgb25lIGVudHJ5IGZyb20gcm9vdHNcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3REZWxldGUoc291cmNlUm9vdEluZGV4KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCB0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkJFRk9SRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvTm9kZShub2RlS2V5LCBzb3VyY2VJZCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkFGVEVSOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Ob2RlKG5vZGVLZXksIHNvdXJjZUlkLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9TVEFSVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0U3RhcnQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfRU5EOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRFbmQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRSb290SW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmluZyBub2RlIChzb3VyY2UpIEFCT1ZFIHJvb3QgKHRhcmdldClcbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgc291cmNlIGlkIGZyb20gZWFjaCBub2RlXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGVJbnNlcnRJZChub2RlS2V5LCBzb3VyY2VJZCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZURlbGV0ZUF0SW5kZXgobm9kZUtleSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkJFRk9SRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvUm9vdChzb3VyY2VJZCwgdGFyZ2V0Um9vdEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5BRlRFUjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvUm9vdChzb3VyY2VJZCwgdGFyZ2V0Um9vdEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX1NUQVJUOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRTdGFydCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9FTkQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdEVuZCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIG5vZGUgKHNvdXJjZSkgQUJPVkUgbm9kZSAodGFyZ2V0KVxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBzb3VyY2UgaWQgZnJvbSBlYWNoIG5vZGVcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZURlbGV0ZUF0SW5kZXgobm9kZUtleSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIHRhcmdldElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQkVGT1JFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Ob2RlKG5vZGVLZXksIHNvdXJjZUlkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQUZURVI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b05vZGUobm9kZUtleSwgc291cmNlSWQsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX1NUQVJUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRTdGFydCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9FTkQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdEVuZCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5zd2FwQXJyYXlFbGVtZW50cyA9IGZ1bmN0aW9uIChhcnIsIGluZGV4QSwgaW5kZXhCKSB7XG4gICAgICAgIHZhciB0ZW1wID0gYXJyW2luZGV4QV07XG4gICAgICAgIGFycltpbmRleEFdID0gYXJyW2luZGV4Ql07XG4gICAgICAgIGFycltpbmRleEJdID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnJvb3REZWxldGVJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZpbmRSb290SWQoaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5yb290RGVsZXRlKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubm9kZUFuZFN1Yk5vZGVzRGVsZXRlID0gZnVuY3Rpb24gKG5vZGVLZXkpIHtcbiAgICAgICAgdmFyIHRvRGVsZXRlTGF0ZXIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vZGVzW25vZGVLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB0aGlzLm5vZGVzW25vZGVLZXldW2ldO1xuICAgICAgICAgICAgdGhpcy5ub2RlQW5kU3ViTm9kZXNEZWxldGUoaWQpO1xuICAgICAgICAgICAgdG9EZWxldGVMYXRlci5wdXNoKG5vZGVLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZURlbGV0ZShub2RlS2V5KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b0RlbGV0ZUxhdGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVEZWxldGUodG9EZWxldGVMYXRlcltpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm5vZGVSZWZyZW5jZXNEZWxldGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ub2Rlc1tub2RlS2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SWQgPSB0aGlzLm5vZGVzW25vZGVLZXldW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0SWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVEZWxldGVBdEluZGV4KG5vZGVLZXksIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5ub2RlRGVsZXRlID0gZnVuY3Rpb24gKG5vZGVLZXkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubm9kZXNbbm9kZUtleV07XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5maW5kUm9vdElkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RJZHMuaW5kZXhPZihpZCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5maW5kTm9kZUlkID0gZnVuY3Rpb24gKG5vZGVLZXksIGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzW25vZGVLZXldLmluZGV4T2YoaWQpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZmluZE5vZGUgPSBmdW5jdGlvbiAobm9kZUtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlc1tub2RlS2V5XTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm5vZGVJbnNlcnRBdFN0YXJ0ID0gZnVuY3Rpb24gKG5vZGVLZXksIGlkKSB7XG4gICAgICAgIHRoaXMubm9kZXNbbm9kZUtleV0udW5zaGlmdChpZCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5ub2RlSW5zZXJ0QXRFbmQgPSBmdW5jdGlvbiAobm9kZUtleSwgaWQpIHtcbiAgICAgICAgdGhpcy5ub2Rlc1tub2RlS2V5XS5wdXNoKGlkKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnJvb3REZWxldGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5yb290SWRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5ub2RlRGVsZXRlQXRJbmRleCA9IGZ1bmN0aW9uIChub2RlS2V5LCBpbmRleCkge1xuICAgICAgICB0aGlzLm5vZGVzW25vZGVLZXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5yb290SW5zZXJ0QXRTdGFydCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB0aGlzLnJvb3RJZHMudW5zaGlmdChpZCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5yb290SW5zZXJ0QXRFbmQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdGhpcy5yb290SWRzLnB1c2goaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpUm9vdFRyZWU7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTXVsdGlSb290VHJlZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU11bHRpUm9vdFRyZWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgSGVhcF8xID0gcmVxdWlyZShcIi4vSGVhcFwiKTtcbnZhciBQcmlvcml0eVF1ZXVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZW1wdHkgcHJpb3JpdHkgcXVldWUuXG4gICAgICogQGNsYXNzIDxwPkluIGEgcHJpb3JpdHkgcXVldWUgZWFjaCBlbGVtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCBhIFwicHJpb3JpdHlcIixcbiAgICAgKiBlbGVtZW50cyBhcmUgZGVxdWV1ZWQgaW4gaGlnaGVzdC1wcmlvcml0eS1maXJzdCBvcmRlciAodGhlIGVsZW1lbnRzIHdpdGggdGhlXG4gICAgICogaGlnaGVzdCBwcmlvcml0eSBhcmUgZGVxdWV1ZWQgZmlyc3QpLiBQcmlvcml0eSBRdWV1ZXMgYXJlIGltcGxlbWVudGVkIGFzIGhlYXBzLlxuICAgICAqIElmIHRoZSBpbnNlcnRlZCBlbGVtZW50cyBhcmUgY3VzdG9tIG9iamVjdHMgYSBjb21wYXJlIGZ1bmN0aW9uIG11c3QgYmUgcHJvdmlkZWQsXG4gICAgICogb3RoZXJ3aXNlIHRoZSA8PSwgPT09IGFuZCA+PSBvcGVyYXRvcnMgYXJlIHVzZWQgdG8gY29tcGFyZSBvYmplY3QgcHJpb3JpdHkuPC9wPlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICogIGlmIChhIGlzIGxlc3MgdGhhbiBiIGJ5IHNvbWUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAtMTtcbiAgICAgKiAgfSBpZiAoYSBpcyBncmVhdGVyIHRoYW4gYiBieSB0aGUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAxO1xuICAgICAqICB9XG4gICAgICogIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICogIHJldHVybiAwO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOm51bWJlcj19IGNvbXBhcmVGdW5jdGlvbiBvcHRpb25hbFxuICAgICAqIGZ1bmN0aW9uIHVzZWQgdG8gY29tcGFyZSB0d28gZWxlbWVudCBwcmlvcml0aWVzLiBNdXN0IHJldHVybiBhIG5lZ2F0aXZlIGludGVnZXIsXG4gICAgICogemVybywgb3IgYSBwb3NpdGl2ZSBpbnRlZ2VyIGFzIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBsZXNzIHRoYW4sIGVxdWFsIHRvLFxuICAgICAqIG9yIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFByaW9yaXR5UXVldWUoY29tcGFyZUZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGVhcCA9IG5ldyBIZWFwXzEuZGVmYXVsdCh1dGlsLnJldmVyc2VDb21wYXJlRnVuY3Rpb24oY29tcGFyZUZ1bmN0aW9uKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhlIHNwZWNpZmllZCBlbGVtZW50IGludG8gdGhpcyBwcmlvcml0eSBxdWV1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBpbnNlcnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgaW5zZXJ0ZWQsIG9yIGZhbHNlIGlmIGl0IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5lbnF1ZXVlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcC5hZGQoZWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbnRvIHRoaXMgcHJpb3JpdHkgcXVldWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gaW5zZXJ0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgd2FzIGluc2VydGVkLCBvciBmYWxzZSBpZiBpdCBpcyB1bmRlZmluZWQuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcC5hZGQoZWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYW5kIHJlbW92ZXMgdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBvZiB0aGlzIHF1ZXVlLlxuICAgICAqIEByZXR1cm4geyp9IHRoZSB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50IG9mIHRoaXMgcXVldWUsXG4gICAgICogIG9yIHVuZGVmaW5lZCBpZiB0aGlzIHF1ZXVlIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLmRlcXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYXAuc2l6ZSgpICE9PSAwKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzLmhlYXAucGVlaygpO1xuICAgICAgICAgICAgdGhpcy5oZWFwLnJlbW92ZVJvb3QoKTtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzLCBidXQgZG9lcyBub3QgcmVtb3ZlLCB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50IG9mIHRoaXMgcXVldWUuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBvZiB0aGlzIHF1ZXVlLCBvciB1bmRlZmluZWQgaWYgdGhpcyBxdWV1ZSBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwLnBlZWsoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHByaW9yaXR5IHF1ZXVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHByaW9yaXR5IHF1ZXVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCxcbiAgICAgKiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwLmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgcHJpb3JpdHkgcXVldWUgaXMgZW1wdHkuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBhbmQgb25seSBpZiB0aGlzIHByaW9yaXR5IHF1ZXVlIGNvbnRhaW5zIG5vIGl0ZW1zOyBmYWxzZVxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwLmlzRW1wdHkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHByaW9yaXR5IHF1ZXVlLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHByaW9yaXR5IHF1ZXVlLlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAuc2l6ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhpcyBwcmlvcml0eSBxdWV1ZS5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oZWFwLmNsZWFyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyBxdWV1ZSBpblxuICAgICAqIG5vIHBhcnRpY3VsYXIgb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5oZWFwLmZvckVhY2goY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFByaW9yaXR5UXVldWU7XG59KCkpOyAvLyBlbmQgb2YgcHJpb3JpdHkgcXVldWVcbmV4cG9ydHMuZGVmYXVsdCA9IFByaW9yaXR5UXVldWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcmlvcml0eVF1ZXVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExpbmtlZExpc3RfMSA9IHJlcXVpcmUoXCIuL0xpbmtlZExpc3RcIik7XG52YXIgUXVldWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBxdWV1ZS5cbiAgICAgKiBAY2xhc3MgQSBxdWV1ZSBpcyBhIEZpcnN0LUluLUZpcnN0LU91dCAoRklGTykgZGF0YSBzdHJ1Y3R1cmUsIHRoZSBmaXJzdFxuICAgICAqIGVsZW1lbnQgYWRkZWQgdG8gdGhlIHF1ZXVlIHdpbGwgYmUgdGhlIGZpcnN0IG9uZSB0byBiZSByZW1vdmVkLiBUaGlzXG4gICAgICogaW1wbGVtZW50YXRpb24gdXNlcyBhIGxpbmtlZCBsaXN0IGFzIGEgY29udGFpbmVyLlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFF1ZXVlKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgTGlua2VkTGlzdF8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgaW50byB0aGUgZW5kIG9mIHRoaXMgcXVldWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gdGhlIGVsZW1lbnQgdG8gaW5zZXJ0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgd2FzIGluc2VydGVkLCBvciBmYWxzZSBpZiBpdCBpcyB1bmRlZmluZWQuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLmVucXVldWUgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmFkZChlbGVtKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhlIHNwZWNpZmllZCBlbGVtZW50IGludG8gdGhlIGVuZCBvZiB0aGlzIHF1ZXVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBpbnNlcnRlZCwgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmFkZChlbGVtKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbmQgcmVtb3ZlcyB0aGUgaGVhZCBvZiB0aGlzIHF1ZXVlLlxuICAgICAqIEByZXR1cm4geyp9IHRoZSBoZWFkIG9mIHRoaXMgcXVldWUsIG9yIHVuZGVmaW5lZCBpZiB0aGlzIHF1ZXVlIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5kZXF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5saXN0LnNpemUoKSAhPT0gMCkge1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5saXN0LmZpcnN0KCk7XG4gICAgICAgICAgICB0aGlzLmxpc3QucmVtb3ZlRWxlbWVudEF0SW5kZXgoMCk7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcywgYnV0IGRvZXMgbm90IHJlbW92ZSwgdGhlIGhlYWQgb2YgdGhpcyBxdWV1ZS5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgaGVhZCBvZiB0aGlzIHF1ZXVlLCBvciB1bmRlZmluZWQgaWYgdGhpcyBxdWV1ZSBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBRdWV1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplKCkgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3QuZmlyc3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgcXVldWUuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgcXVldWUuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc2l6ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgcXVldWUgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIDxwPklmIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhpcyBzdGFjayBhcmVcbiAgICAgKiBub3QgY29tcGFyYWJsZSB3aXRoIHRoZSA9PT0gb3BlcmF0b3IsIGEgY3VzdG9tIGVxdWFscyBmdW5jdGlvbiBzaG91bGQgYmVcbiAgICAgKiBwcm92aWRlZCB0byBwZXJmb3JtIHNlYXJjaGVzLCB0aGUgZnVuY3Rpb24gbXVzdCByZWNlaXZlIHR3byBhcmd1bWVudHMgYW5kXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhleSBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGNvbnN0IHBldHNBcmVFcXVhbEJ5TmFtZSAocGV0MSwgcGV0Mikge1xuICAgICAqICByZXR1cm4gcGV0MS5uYW1lID09PSBwZXQyLm5hbWU7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbFxuICAgICAqIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHR3byBlbGVtZW50cyBhcmUgZXF1YWwuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHF1ZXVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCxcbiAgICAgKiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGVsZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuY29udGFpbnMoZWxlbSwgZXF1YWxzRnVuY3Rpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgcXVldWUgaXMgZW1wdHkuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBhbmQgb25seSBpZiB0aGlzIHF1ZXVlIGNvbnRhaW5zIG5vIGl0ZW1zOyBmYWxzZVxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBRdWV1ZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zaXplKCkgPD0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgcXVldWUuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHF1ZXVlIGluXG4gICAgICogRklGTyBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXVlO1xufSgpKTsgLy8gRW5kIG9mIHF1ZXVlXG5leHBvcnRzLmRlZmF1bHQgPSBRdWV1ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIGFycmF5cyA9IHJlcXVpcmUoXCIuL2FycmF5c1wiKTtcbnZhciBEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9EaWN0aW9uYXJ5XCIpO1xudmFyIFNldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IHNldC5cbiAgICAgKiBAY2xhc3MgPHA+QSBzZXQgaXMgYSBkYXRhIHN0cnVjdHVyZSB0aGF0IGNvbnRhaW5zIG5vIGR1cGxpY2F0ZSBpdGVtcy48L3A+XG4gICAgICogPHA+SWYgdGhlIGluc2VydGVkIGVsZW1lbnRzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGZ1bmN0aW9uXG4gICAgICogd2hpY2ggY29udmVydHMgZWxlbWVudHMgdG8gc3RyaW5ncyBtdXN0IGJlIHByb3ZpZGVkLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0VG9TdHJpbmcocGV0KSB7XG4gICAgICogIHJldHVybiBwZXQubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJpbmdGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBlbGVtZW50cyB0byBzdHJpbmdzLiBJZiB0aGUgZWxlbWVudHMgYXJlbid0IHN0cmluZ3Mgb3IgaWYgdG9TdHJpbmcoKVxuICAgICAqIGlzIG5vdCBhcHByb3ByaWF0ZSwgYSBjdXN0b20gZnVuY3Rpb24gd2hpY2ggcmVjZWl2ZXMgYW4gb2JqZWN0IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2V0KHRvU3RyaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnlfMS5kZWZhdWx0KHRvU3RyaW5nRnVuY3Rpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCxcbiAgICAgKiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkuY29udGFpbnNLZXkoZWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB0byB0aGlzIHNldCBpZiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc2V0IGRpZCBub3QgYWxyZWFkeSBjb250YWluIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zKGVsZW1lbnQpIHx8IHV0aWwuaXNVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXRWYWx1ZShlbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGlzIGFuZCBhbm90aGVyIHNldC5cbiAgICAgKiBSZW1vdmVzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgbm90IHByZXNlbnQgdGhpcyBzZXQgYW5kIHRoZSBnaXZlbiBzZXQuXG4gICAgICogQHBhcmFtIHtjb2xsZWN0aW9ucy5TZXR9IG90aGVyU2V0IG90aGVyIHNldC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChvdGhlclNldCkge1xuICAgICAgICB2YXIgc2V0ID0gdGhpcztcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIW90aGVyU2V0LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc2V0LnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgdW5pb24gYmV0d2VlbiB0aGlzIGFuZCBhbm90aGVyIHNldC5cbiAgICAgKiBBZGRzIGFsbCB2YWx1ZXMgZnJvbSB0aGUgZ2l2ZW4gc2V0IHRvIHRoaXMgc2V0LlxuICAgICAqIEBwYXJhbSB7Y29sbGVjdGlvbnMuU2V0fSBvdGhlclNldCBvdGhlciBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uIChvdGhlclNldCkge1xuICAgICAgICB2YXIgc2V0ID0gdGhpcztcbiAgICAgICAgb3RoZXJTZXQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgc2V0LmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgYW5kIGFub3RoZXIgc2V0LlxuICAgICAqIFJlbW92ZXMgZnJvbSB0aGlzIHNldCBhbGwgdGhlIHZhbHVlcyB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBnaXZlbiBzZXQuXG4gICAgICogQHBhcmFtIHtjb2xsZWN0aW9ucy5TZXR9IG90aGVyU2V0IG90aGVyIHNldC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLmRpZmZlcmVuY2UgPSBmdW5jdGlvbiAob3RoZXJTZXQpIHtcbiAgICAgICAgdmFyIHNldCA9IHRoaXM7XG4gICAgICAgIG90aGVyU2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNldC5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gc2V0IGNvbnRhaW5zIGFsbCB0aGUgZWxlbWVudHMgaW4gdGhpcyBzZXQuXG4gICAgICogQHBhcmFtIHtjb2xsZWN0aW9ucy5TZXR9IG90aGVyU2V0IG90aGVyIHNldC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc2V0IGlzIGEgc3Vic2V0IG9mIHRoZSBnaXZlbiBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mID0gZnVuY3Rpb24gKG90aGVyU2V0KSB7XG4gICAgICAgIGlmICh0aGlzLnNpemUoKSA+IG90aGVyU2V0LnNpemUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1N1YiA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFvdGhlclNldC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGlzU3ViID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXNTdWI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBmcm9tIHRoaXMgc2V0IGlmIGl0IGlzIHByZXNlbnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHNldCBjb250YWluZWQgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnRcbiAgICAgKiBwcmVzZW50IGluIHRoaXMgc2V0LlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnRzOiB0aGUgZWxlbWVudC4gVG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeS5mb3JFYWNoKGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyBzZXQgaW4gYXJiaXRyYXJ5IG9yZGVyLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LnZhbHVlcygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmlzRW1wdHkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHNldC5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LnNpemUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgc2V0LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeS5jbGVhcigpO1xuICAgIH07XG4gICAgLypcbiAgICAqIFByb3ZpZGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGZvciBkaXNwbGF5XG4gICAgKi9cbiAgICBTZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJyYXlzLnRvU3RyaW5nKHRoaXMudG9BcnJheSgpKTtcbiAgICB9O1xuICAgIHJldHVybiBTZXQ7XG59KCkpOyAvLyBlbmQgb2YgU2V0XG5leHBvcnRzLmRlZmF1bHQgPSBTZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTGlua2VkTGlzdF8xID0gcmVxdWlyZShcIi4vTGlua2VkTGlzdFwiKTtcbnZhciBTdGFjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IFN0YWNrLlxuICAgICAqIEBjbGFzcyBBIFN0YWNrIGlzIGEgTGFzdC1Jbi1GaXJzdC1PdXQgKExJRk8pIGRhdGEgc3RydWN0dXJlLCB0aGUgbGFzdFxuICAgICAqIGVsZW1lbnQgYWRkZWQgdG8gdGhlIHN0YWNrIHdpbGwgYmUgdGhlIGZpcnN0IG9uZSB0byBiZSByZW1vdmVkLiBUaGlzXG4gICAgICogaW1wbGVtZW50YXRpb24gdXNlcyBhIGxpbmtlZCBsaXN0IGFzIGEgY29udGFpbmVyLlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFN0YWNrKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgTGlua2VkTGlzdF8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVzaGVzIGFuIGl0ZW0gb250byB0aGUgdG9wIG9mIHRoaXMgc3RhY2suXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gdGhlIGVsZW1lbnQgdG8gYmUgcHVzaGVkIG9udG8gdGhpcyBzdGFjay5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBwdXNoZWQgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5hZGQoZWxlbSwgMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdXNoZXMgYW4gaXRlbSBvbnRvIHRoZSB0b3Agb2YgdGhpcyBzdGFjay5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSB0aGUgZWxlbWVudCB0byBiZSBwdXNoZWQgb250byB0aGlzIHN0YWNrLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgd2FzIHB1c2hlZCBvciBmYWxzZSBpZiBpdCBpcyB1bmRlZmluZWQuXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuYWRkKGVsZW0sIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgb2JqZWN0IGF0IHRoZSB0b3Agb2YgdGhpcyBzdGFjayBhbmQgcmV0dXJucyB0aGF0IG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgb2JqZWN0IGF0IHRoZSB0b3Agb2YgdGhpcyBzdGFjayBvciB1bmRlZmluZWQgaWYgdGhlXG4gICAgICogc3RhY2sgaXMgZW1wdHkuXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5yZW1vdmVFbGVtZW50QXRJbmRleCgwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIExvb2tzIGF0IHRoZSBvYmplY3QgYXQgdGhlIHRvcCBvZiB0aGlzIHN0YWNrIHdpdGhvdXQgcmVtb3ZpbmcgaXQgZnJvbSB0aGVcbiAgICAgKiBzdGFjay5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgb2JqZWN0IGF0IHRoZSB0b3Agb2YgdGhpcyBzdGFjayBvciB1bmRlZmluZWQgaWYgdGhlXG4gICAgICogc3RhY2sgaXMgZW1wdHkuXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZmlyc3QoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHN0YWNrLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHN0YWNrLlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnNpemUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHN0YWNrIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiA8cD5JZiB0aGUgZWxlbWVudHMgaW5zaWRlIHRoaXMgc3RhY2sgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yLCBhIGN1c3RvbSBlcXVhbHMgZnVuY3Rpb24gc2hvdWxkIGJlXG4gICAgICogcHJvdmlkZWQgdG8gcGVyZm9ybSBzZWFyY2hlcywgdGhlIGZ1bmN0aW9uIG11c3QgcmVjZWl2ZSB0d28gYXJndW1lbnRzIGFuZFxuICAgICAqIHJldHVybiB0cnVlIGlmIHRoZXkgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBjb25zdCBwZXRzQXJlRXF1YWxCeU5hbWUgKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB0byBjaGVjayBpZiB0d28gZWxlbWVudHMgYXJlIGVxdWFsLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBzdGFjayBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmNvbnRhaW5zKGVsZW0sIGVxdWFsc0Z1bmN0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIHN0YWNrIGlzIGVtcHR5LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYW5kIG9ubHkgaWYgdGhpcyBzdGFjayBjb250YWlucyBubyBpdGVtczsgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuaXNFbXB0eSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhpcyBzdGFjay5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoaXMgc3RhY2sgaW5cbiAgICAgKiBMSUZPIG9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW5cbiAgICAgKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RhY2s7XG59KCkpOyAvLyBFbmQgb2Ygc3RhY2tcbmV4cG9ydHMuZGVmYXVsdCA9IFN0YWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgaXRlbVxuICogd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkuNFxuICogQHBhcmFtIHsqfSBhcnJheSB0aGUgYXJyYXkgaW4gd2hpY2ggdG8gc2VhcmNoIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gdGhlIGVsZW1lbnQgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiAyIGVsZW1lbnRzLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50XG4gKiB3aXRoaW4gdGhlIHNwZWNpZmllZCBhcnJheSwgb3IgLTEgaWYgbm90IGZvdW5kLlxuICovXG5mdW5jdGlvbiBpbmRleE9mKGFycmF5LCBpdGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgIHZhciBlcXVhbHMgPSBlcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlcXVhbHMoYXJyYXlbaV0sIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5leHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudFxuICogd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkuXG4gKiBAcGFyYW0geyp9IGFycmF5IHRoZSBhcnJheSBpbiB3aGljaCB0byBzZWFyY2ggdGhlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSB0aGUgZWxlbWVudCB0byBzZWFyY2guXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvXG4gKiBjaGVjayBlcXVhbGl0eSBiZXR3ZWVuIDIgZWxlbWVudHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudFxuICogd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkgb3IgLTEgaWYgbm90IGZvdW5kLlxuICovXG5mdW5jdGlvbiBsYXN0SW5kZXhPZihhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICB2YXIgZXF1YWxzID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChlcXVhbHMoYXJyYXlbaV0sIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5leHBvcnRzLmxhc3RJbmRleE9mID0gbGFzdEluZGV4T2Y7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGFycmF5IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Kn0gYXJyYXkgdGhlIGFycmF5IGluIHdoaWNoIHRvIHNlYXJjaCB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIHRoZSBlbGVtZW50IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uIHRvXG4gKiBjaGVjayBlcXVhbGl0eSBiZXR3ZWVuIDIgZWxlbWVudHMuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgYXJyYXkgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBjb250YWlucyhhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gaW5kZXhPZihhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pID49IDA7XG59XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG4vKipcbiAqIFJlbW92ZXMgdGhlIGZpcnN0IG9jdXJyZW5jZSBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgZnJvbSB0aGUgc3BlY2lmaWVkIGFycmF5LlxuICogQHBhcmFtIHsqfSBhcnJheSB0aGUgYXJyYXkgaW4gd2hpY2ggdG8gc2VhcmNoIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSB0aGUgZWxlbWVudCB0byBzZWFyY2guXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiAyIGVsZW1lbnRzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXJyYXkgY2hhbmdlZCBhZnRlciB0aGlzIGNhbGwuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICB2YXIgaW5kZXggPSBpbmRleE9mKGFycmF5LCBpdGVtLCBlcXVhbHNGdW5jdGlvbik7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgYXJyYXkgZXF1YWxcbiAqIHRvIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgdGhlIGFycmF5IGluIHdoaWNoIHRvIGRldGVybWluZSB0aGUgZnJlcXVlbmN5IG9mIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gdGhlIGVsZW1lbnQgd2hvc2UgZnJlcXVlbmN5IGlzIHRvIGJlIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvXG4gKiBjaGVjayBlcXVhbGl0eSBiZXR3ZWVuIDIgZWxlbWVudHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHNwZWNpZmllZCBhcnJheVxuICogZXF1YWwgdG8gdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZyZXF1ZW5jeShhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICB2YXIgZXF1YWxzID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIGZyZXEgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVxdWFscyhhcnJheVtpXSwgaXRlbSkpIHtcbiAgICAgICAgICAgIGZyZXErKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJlcTtcbn1cbmV4cG9ydHMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBzcGVjaWZpZWQgYXJyYXlzIGFyZSBlcXVhbCB0byBvbmUgYW5vdGhlci5cbiAqIFR3byBhcnJheXMgYXJlIGNvbnNpZGVyZWQgZXF1YWwgaWYgYm90aCBhcnJheXMgY29udGFpbiB0aGUgc2FtZSBudW1iZXJcbiAqIG9mIGVsZW1lbnRzLCBhbmQgYWxsIGNvcnJlc3BvbmRpbmcgcGFpcnMgb2YgZWxlbWVudHMgaW4gdGhlIHR3b1xuICogYXJyYXlzIGFyZSBlcXVhbCBhbmQgYXJlIGluIHRoZSBzYW1lIG9yZGVyLlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkxIG9uZSBhcnJheSB0byBiZSB0ZXN0ZWQgZm9yIGVxdWFsaXR5LlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkyIHRoZSBvdGhlciBhcnJheSB0byBiZSB0ZXN0ZWQgZm9yIGVxdWFsaXR5LlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiBlbGVtZW1lbnRzIGluIHRoZSBhcnJheXMuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICovXG5mdW5jdGlvbiBlcXVhbHMoYXJyYXkxLCBhcnJheTIsIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgdmFyIGVxdWFscyA9IGVxdWFsc0Z1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdEVxdWFscztcbiAgICBpZiAoYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBhcnJheTEubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFlcXVhbHMoYXJyYXkxW2ldLCBhcnJheTJbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmVxdWFscyA9IGVxdWFscztcbi8qKlxuICogUmV0dXJucyBzaGFsbG93IGEgY29weSBvZiB0aGUgc3BlY2lmaWVkIGFycmF5LlxuICogQHBhcmFtIHsqfSBhcnJheSB0aGUgYXJyYXkgdG8gY29weS5cbiAqIEByZXR1cm4ge0FycmF5fSBhIGNvcHkgb2YgdGhlIHNwZWNpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBjb3B5KGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmNvbmNhdCgpO1xufVxuZXhwb3J0cy5jb3B5ID0gY29weTtcbi8qKlxuICogU3dhcHMgdGhlIGVsZW1lbnRzIGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb25zIGluIHRoZSBzcGVjaWZpZWQgYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgaW4gd2hpY2ggdG8gc3dhcCBlbGVtZW50cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpIHRoZSBpbmRleCBvZiBvbmUgZWxlbWVudCB0byBiZSBzd2FwcGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGogdGhlIGluZGV4IG9mIHRoZSBvdGhlciBlbGVtZW50IHRvIGJlIHN3YXBwZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBhcnJheSBpcyBkZWZpbmVkIGFuZCB0aGUgaW5kZXhlcyBhcmUgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHN3YXAoYXJyYXksIGksIGopIHtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBhcnJheS5sZW5ndGggfHwgaiA8IDAgfHwgaiA+PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5zd2FwID0gc3dhcDtcbmZ1bmN0aW9uIHRvU3RyaW5nKGFycmF5KSB7XG4gICAgcmV0dXJuICdbJyArIGFycmF5LnRvU3RyaW5nKCkgKyAnXSc7XG59XG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIGFycmF5XG4gKiBzdGFydGluZyBmcm9tIGluZGV4IDAgdG8gbGVuZ3RoIC0gMS5cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSBpbiB3aGljaCB0byBpdGVyYXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFycmF5XzEgPSBhcnJheTsgX2kgPCBhcnJheV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZWxlID0gYXJyYXlfMVtfaV07XG4gICAgICAgIGlmIChjYWxsYmFjayhlbGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoID0gZm9yRWFjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIENvcHlyaWdodCAyMDEzIEJhc2FyYXQgQWxpIFN5ZWQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgTUlUIG9wZW4gc291cmNlIGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vIE9yZ2luYWwgamF2YXNjcmlwdCBjb2RlIHdhcyBieSBNYXVyaWNpbyBTYW50b3Ncbi8vXG52YXIgX2FycmF5cyA9IHJlcXVpcmUoXCIuL2FycmF5c1wiKTtcbmV4cG9ydHMuYXJyYXlzID0gX2FycmF5cztcbnZhciBCYWdfMSA9IHJlcXVpcmUoXCIuL0JhZ1wiKTtcbmV4cG9ydHMuQmFnID0gQmFnXzEuZGVmYXVsdDtcbnZhciBCU1RyZWVfMSA9IHJlcXVpcmUoXCIuL0JTVHJlZVwiKTtcbmV4cG9ydHMuQlNUcmVlID0gQlNUcmVlXzEuZGVmYXVsdDtcbnZhciBCU1RyZWVLVl8xID0gcmVxdWlyZShcIi4vQlNUcmVlS1ZcIik7XG5leHBvcnRzLkJTVHJlZUtWID0gQlNUcmVlS1ZfMS5kZWZhdWx0O1xudmFyIERpY3Rpb25hcnlfMSA9IHJlcXVpcmUoXCIuL0RpY3Rpb25hcnlcIik7XG5leHBvcnRzLkRpY3Rpb25hcnkgPSBEaWN0aW9uYXJ5XzEuZGVmYXVsdDtcbnZhciBIZWFwXzEgPSByZXF1aXJlKFwiLi9IZWFwXCIpO1xuZXhwb3J0cy5IZWFwID0gSGVhcF8xLmRlZmF1bHQ7XG52YXIgTGlua2VkRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vTGlua2VkRGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuTGlua2VkRGljdGlvbmFyeSA9IExpbmtlZERpY3Rpb25hcnlfMS5kZWZhdWx0O1xudmFyIExpbmtlZExpc3RfMSA9IHJlcXVpcmUoXCIuL0xpbmtlZExpc3RcIik7XG5leHBvcnRzLkxpbmtlZExpc3QgPSBMaW5rZWRMaXN0XzEuZGVmYXVsdDtcbnZhciBNdWx0aURpY3Rpb25hcnlfMSA9IHJlcXVpcmUoXCIuL011bHRpRGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuTXVsdGlEaWN0aW9uYXJ5ID0gTXVsdGlEaWN0aW9uYXJ5XzEuZGVmYXVsdDtcbnZhciBGYWN0b3J5RGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRmFjdG9yeURpY3Rpb25hcnlcIik7XG5leHBvcnRzLkZhY3RvcnlEaWN0aW9uYXJ5ID0gRmFjdG9yeURpY3Rpb25hcnlfMS5kZWZhdWx0O1xudmFyIEZhY3RvcnlEaWN0aW9uYXJ5XzIgPSByZXF1aXJlKFwiLi9GYWN0b3J5RGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuRGVmYXVsdERpY3Rpb25hcnkgPSBGYWN0b3J5RGljdGlvbmFyeV8yLmRlZmF1bHQ7XG52YXIgUXVldWVfMSA9IHJlcXVpcmUoXCIuL1F1ZXVlXCIpO1xuZXhwb3J0cy5RdWV1ZSA9IFF1ZXVlXzEuZGVmYXVsdDtcbnZhciBQcmlvcml0eVF1ZXVlXzEgPSByZXF1aXJlKFwiLi9Qcmlvcml0eVF1ZXVlXCIpO1xuZXhwb3J0cy5Qcmlvcml0eVF1ZXVlID0gUHJpb3JpdHlRdWV1ZV8xLmRlZmF1bHQ7XG52YXIgU2V0XzEgPSByZXF1aXJlKFwiLi9TZXRcIik7XG5leHBvcnRzLlNldCA9IFNldF8xLmRlZmF1bHQ7XG52YXIgU3RhY2tfMSA9IHJlcXVpcmUoXCIuL1N0YWNrXCIpO1xuZXhwb3J0cy5TdGFjayA9IFN0YWNrXzEuZGVmYXVsdDtcbnZhciBNdWx0aVJvb3RUcmVlXzEgPSByZXF1aXJlKFwiLi9NdWx0aVJvb3RUcmVlXCIpO1xuZXhwb3J0cy5NdWx0aVJvb3RUcmVlID0gTXVsdGlSb290VHJlZV8xLmRlZmF1bHQ7XG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZXhwb3J0cy51dGlsID0gX3V0aWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZXhwb3J0cy5oYXMgPSBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XG4gICAgcmV0dXJuIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59O1xuLyoqXG4gKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIGNvbXBhcmUgZWxlbWVudCBvcmRlci5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZShhLCBiKSB7XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdENvbXBhcmUgPSBkZWZhdWx0Q29tcGFyZTtcbi8qKlxuICogRGVmYXVsdCBmdW5jdGlvbiB0byB0ZXN0IGVxdWFsaXR5LlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRFcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xufVxuZXhwb3J0cy5kZWZhdWx0RXF1YWxzID0gZGVmYXVsdEVxdWFscztcbi8qKlxuICogRGVmYXVsdCBmdW5jdGlvbiB0byBjb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBkZWZhdWx0VG9TdHJpbmcoaXRlbSkge1xuICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnQ09MTEVDVElPTl9OVUxMJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNVbmRlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuICdDT0xMRUNUSU9OX1VOREVGSU5FRCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiAnJHMnICsgaXRlbTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnJG8nICsgaXRlbS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdFRvU3RyaW5nID0gZGVmYXVsdFRvU3RyaW5nO1xuLyoqXG4gKiBKb2lucyBhbGwgdGhlIHByb3BlcmllcyBvZiB0aGUgb2JqZWN0IHVzaW5nIHRoZSBwcm92aWRlZCBqb2luIHN0cmluZ1xuICovXG5mdW5jdGlvbiBtYWtlU3RyaW5nKGl0ZW0sIGpvaW4pIHtcbiAgICBpZiAoam9pbiA9PT0gdm9pZCAwKSB7IGpvaW4gPSAnLCc7IH1cbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ0NPTExFQ1RJT05fTlVMTCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiAnQ09MTEVDVElPTl9VTkRFRklORUQnO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZyhpdGVtKSkge1xuICAgICAgICByZXR1cm4gaXRlbS50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHRvcmV0ID0gJ3snO1xuICAgICAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChleHBvcnRzLmhhcyhpdGVtLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9yZXQgPSB0b3JldCArIGpvaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvcmV0ID0gdG9yZXQgKyBwcm9wICsgJzonICsgaXRlbVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9yZXQgKyAnfSc7XG4gICAgfVxufVxuZXhwb3J0cy5tYWtlU3RyaW5nID0gbWFrZVN0cmluZztcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiAodHlwZW9mIGZ1bmMpID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudCBpcyB1bmRlZmluZWQuXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygb2JqKSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgYSBzdHJpbmcuXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcbi8qKlxuICogUmV2ZXJzZXMgYSBjb21wYXJlIGZ1bmN0aW9uLlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIHJldmVyc2VDb21wYXJlRnVuY3Rpb24oY29tcGFyZUZ1bmN0aW9uKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGNvbXBhcmVGdW5jdGlvbikgfHwgIWlzRnVuY3Rpb24oY29tcGFyZUZ1bmN0aW9uKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhIDwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYSA9PT0gYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZUZ1bmN0aW9uKGQsIHYpICogLTE7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5yZXZlcnNlQ29tcGFyZUZ1bmN0aW9uID0gcmV2ZXJzZUNvbXBhcmVGdW5jdGlvbjtcbi8qKlxuICogUmV0dXJucyBhbiBlcXVhbCBmdW5jdGlvbiBnaXZlbiBhIGNvbXBhcmUgZnVuY3Rpb24uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gY29tcGFyZVRvRXF1YWxzKGNvbXBhcmVGdW5jdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gY29tcGFyZUZ1bmN0aW9uKGEsIGIpID09PSAwO1xuICAgIH07XG59XG5leHBvcnRzLmNvbXBhcmVUb0VxdWFscyA9IGNvbXBhcmVUb0VxdWFscztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiaW1wb3J0IHsgRG9tQ3R4LCBEb21DdHhJbXBsIH0gZnJvbSAnLi9kb21fY3R4JztcclxuaW1wb3J0ICogYXMgc29kaXVtIGZyb20gJ3NvZGl1bWpzJztcclxuXHJcbmNsYXNzIE1vZGVsIHtcclxuICAgIGNFbnRyaWVzOiBzb2RpdW0uQ2VsbDxFbnRyeVtdPjtcclxuICAgIGNGaWVsZDogc29kaXVtLkNlbGw8c3RyaW5nPjtcclxuICAgIGNVSUQ6IHNvZGl1bS5DZWxsPG51bWJlcj47XHJcbiAgICBjVmlzaWJpbGl0eTogc29kaXVtLkNlbGw8c3RyaW5nPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc01zZzogc29kaXVtLlN0cmVhbTxNc2c+KSB7XHJcbiAgICAgICAgbGV0IHNsRW50cmllcyA9IG5ldyBzb2RpdW0uU3RyZWFtTG9vcDxFbnRyeVtdPigpO1xyXG4gICAgICAgIHRoaXMuY0VudHJpZXMgPSBzbEVudHJpZXMuaG9sZChbXSkudHJhY2tpbmcoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IChzb2RpdW0uQ2VsbDxhbnk+fHNvZGl1bS5TdHJlYW08YW55PilbXSA9IFtdO1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gcmVzdWx0LnB1c2goZW50cnkuY0Rlc2NyaXB0aW9uLCBlbnRyeS5jQ29tcGxldGVkLCBlbnRyeS5jRWRpdGluZykpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY0ZpZWxkID1cclxuICAgICAgICAgICAgc01zZ1xyXG4gICAgICAgICAgICAgICAgLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgaW5zdGFuY2VvZiBNc2dVcGRhdGVGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyTm90TnVsbCgpXHJcbiAgICAgICAgICAgICAgICAubWFwKG1zZyA9PiBtc2cudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAub3JFbHNlKFxyXG4gICAgICAgICAgICAgICAgICAgIHNNc2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihtc2cgPT4gbXNnIGluc3RhbmNlb2YgTXNnQWRkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwVG8oXCJcIilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5ob2xkKFwiXCIpO1xyXG4gICAgICAgIGxldCBzbFVJRCA9IG5ldyBzb2RpdW0uU3RyZWFtTG9vcDxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5jVUlEID0gc2xVSUQuaG9sZCgwKTtcclxuICAgICAgICB0aGlzLmNWaXNpYmlsaXR5ID1cclxuICAgICAgICAgICAgc01zZ1xyXG4gICAgICAgICAgICAgICAgLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgaW5zdGFuY2VvZiBNc2dDaGFuZ2VWaXNpYmlsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc2c7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXJOb3ROdWxsKClcclxuICAgICAgICAgICAgICAgIC5tYXAobXNnID0+IG1zZy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC5ob2xkKFwiQWxsXCIpO1xyXG4gICAgICAgIHNsRW50cmllcy5sb29wKFxyXG4gICAgICAgICAgICBzTXNnXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKG1zZyA9PiBtc2cgaW5zdGFuY2VvZiBNc2dBZGQpXHJcbiAgICAgICAgICAgICAgICAuc25hcHNob3QxKHRoaXMuY0VudHJpZXMpXHJcbiAgICAgICAgICAgICAgICAuc25hcHNob3QzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY1VJRCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNGaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAoZW50cmllcywgdWlkLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJpZXMyID0gZW50cmllcy5zbGljZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMyLnB1c2gobmV3IEVudHJ5KHVpZCwgZmllbGQsIHNNc2cpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5vckVsc2UoXHJcbiAgICAgICAgICAgICAgICAgICAgc01zZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnIGluc3RhbmNlb2YgTXNnRGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJOb3ROdWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtc2cgPT4gbXNnLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc25hcHNob3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNFbnRyaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlkLCBlbnRyaWVzKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmlkICE9IGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAub3JFbHNlKFxyXG4gICAgICAgICAgICAgICAgICAgIHNNc2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZyBpbnN0YW5jZW9mIE1zZ0RlbGV0ZUNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJOb3ROdWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNuYXBzaG90MSh0aGlzLmNFbnRyaWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGVudHJpZXMgPT4gZW50cmllcy5maWx0ZXIoZW50cnkgPT4gIWVudHJ5LmNDb21wbGV0ZWQuc2FtcGxlKCkpKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2xVSUQubG9vcChcclxuICAgICAgICAgICAgc01zZ1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihtc2cgPT4gbXNnIGluc3RhbmNlb2YgTXNnQWRkKVxyXG4gICAgICAgICAgICAgICAgLnNuYXBzaG90MSh0aGlzLmNVSUQpXHJcbiAgICAgICAgICAgICAgICAubWFwKHggPT4geCArIDEpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRW50cnkge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGNEZXNjcmlwdGlvbjogc29kaXVtLkNlbGw8c3RyaW5nPjtcclxuICAgIGNDb21wbGV0ZWQ6IHNvZGl1bS5DZWxsPGJvb2xlYW4+O1xyXG4gICAgY0VkaXRpbmc6IHNvZGl1bS5DZWxsPGJvb2xlYW4+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBpbml0RGVzY3JpcHRpb246IHN0cmluZywgc01zZzogc29kaXVtLlN0cmVhbTxNc2c+KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY0Rlc2NyaXB0aW9uID1cclxuICAgICAgICAgICAgc01zZ1xyXG4gICAgICAgICAgICAgICAgLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgaW5zdGFuY2VvZiBNc2dVcGRhdGVFbnRyeSAmJiBtc2cuaWQgPT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyTm90TnVsbCgpXHJcbiAgICAgICAgICAgICAgICAubWFwKG1zZyA9PiBtc2cudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuaG9sZChpbml0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRoaXMuY0NvbXBsZXRlZCA9XHJcbiAgICAgICAgICAgIHNNc2dcclxuICAgICAgICAgICAgICAgIC5tYXAobXNnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXNnIGluc3RhbmNlb2YgTXNnQ2hlY2sgJiYgbXNnLmlkID09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zZztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlck5vdE51bGwoKVxyXG4gICAgICAgICAgICAgICAgLm1hcChtc2cgPT4gbXNnLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLm9yRWxzZShcclxuICAgICAgICAgICAgICAgICAgICBzTXNnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobXNnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cgaW5zdGFuY2VvZiBNc2dDaGVja0FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc2c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyTm90TnVsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobXNnID0+IG1zZy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5ob2xkKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNFZGl0aW5nID1cclxuICAgICAgICAgICAgc01zZ1xyXG4gICAgICAgICAgICAgICAgLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgaW5zdGFuY2VvZiBNc2dFZGl0aW5nRW50cnkgJiYgbXNnLmlkID09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zZztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlck5vdE51bGwoKVxyXG4gICAgICAgICAgICAgICAgLm1hcChtc2cgPT4gbXNnLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLmhvbGQoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgTXNnIHtcclxufVxyXG5cclxuY2xhc3MgTXNnTm9PcCBpbXBsZW1lbnRzIE1zZyB7fVxyXG5cclxuY2xhc3MgTXNnVXBkYXRlRmllbGQgaW1wbGVtZW50cyBNc2cge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNc2dBZGQgaW1wbGVtZW50cyBNc2cge1xyXG59XHJcblxyXG5jbGFzcyBNc2dDaGVja0FsbCBpbXBsZW1lbnRzIE1zZyB7XHJcbiAgICB2YWx1ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTXNnQ2hlY2sgaW1wbGVtZW50cyBNc2cge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTXNnRWRpdGluZ0VudHJ5IGltcGxlbWVudHMgTXNnIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB2YWx1ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1zZ0RlbGV0ZSBpbXBsZW1lbnRzIE1zZyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1zZ0RlbGV0ZUNvbXBsZXRlIGltcGxlbWVudHMgTXNnIHtcclxufVxyXG5cclxuY2xhc3MgTXNnVXBkYXRlRW50cnkgaW1wbGVtZW50cyBNc2cge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE1zZ0NoYW5nZVZpc2liaWxpdHkgaW1wbGVtZW50cyBNc2cge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBWSUVXXHJcblxyXG5mdW5jdGlvbiB2aWV3KG1vZGVsOiBNb2RlbCwgZGM6IERvbUN0eDxNc2c+KSB7XHJcbiAgICBkYy5iZWdpbkVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGMuYXR0cihcImNsYXNzXCIsIG5ldyBzb2RpdW0uQ2VsbChcInRvZG9tdmMtd3JhcHBlclwiKSk7XHJcbiAgICAgICAgZGMuYXR0cihcInN0eWxlXCIsIG5ldyBzb2RpdW0uQ2VsbChcInZpc2liaWxpdHk6aGlkZGVuO1wiKSk7XHJcbiAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgICAgICAgICAgZGMuYXR0cihcImNsYXNzXCIsIG5ldyBzb2RpdW0uQ2VsbChcInRvZG9hcHBcIikpO1xyXG4gICAgICAgICAgICB2aWV3SW5wdXQobW9kZWwuY0ZpZWxkLCBkYyk7XHJcbiAgICAgICAgICAgIHZpZXdFbnRyaWVzKG1vZGVsLmNWaXNpYmlsaXR5LCBtb2RlbC5jRW50cmllcywgZGMpO1xyXG4gICAgICAgICAgICB2aWV3Q29udHJvbHMobW9kZWwuY1Zpc2liaWxpdHksIG1vZGVsLmNFbnRyaWVzLCBkYyk7XHJcbiAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG4gICAgICAgIGluZm9Gb290ZXIoZGMpO1xyXG4gICAgZGMuZW5kRWxlbWVudCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2aWV3SW5wdXQoY1Rhc2s6IHNvZGl1bS5DZWxsPHN0cmluZz4sIGRjOiBEb21DdHg8TXNnPikge1xyXG4gICAgZGMuYmVnaW5FbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgICAgIGRjLmF0dHIoXCJjbGFzc1wiLCBuZXcgc29kaXVtLkNlbGwoXCJoZWFkZXJcIikpO1xyXG5cclxuICAgICAgICBkYy5iZWdpbkVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIGRjLnRleHQobmV3IHNvZGl1bS5DZWxsKFwidG9kb3NcIikpO1xyXG4gICAgICAgICAgICBkYy5lbmRFbGVtZW50KCk7XHJcbiAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG5cclxuICAgICAgICBkYy5iZWdpbkVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgZGMuYXR0cihcImNsYXNzXCIsIG5ldyBzb2RpdW0uQ2VsbChcIm5ldy10b2RvXCIpKTtcclxuICAgICAgICAgICAgZGMuYXR0cihcInBsYWNlaG9sZGVyXCIsIG5ldyBzb2RpdW0uQ2VsbChcIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIikpO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwiYXV0b2ZvY3VzXCIsIG5ldyBzb2RpdW0uQ2VsbChcInRydWVcIikpO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwidmFsdWVcIiwgY1Rhc2spO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwibmFtZVwiLCBuZXcgc29kaXVtLkNlbGwoXCJuZXdUb2RvXCIpKTtcclxuICAgICAgICAgICAgZGMub24oXCJpbnB1dFwiLCBuZXcgc29kaXVtLkNlbGwoKGU6IEV2ZW50KSA9PiBuZXcgTXNnVXBkYXRlRmllbGQoKGUuc3JjRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkpKTtcclxuICAgICAgICAgICAgZGMub24oXCJrZXlkb3duXCIsIG5ldyBzb2RpdW0uQ2VsbCgoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlMiA9IGUgYXMgS2V5Ym9hcmRFdmVudDtcclxuICAgICAgICAgICAgICAgIGlmIChlMi5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNc2dBZGQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTXNnTm9PcCgpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG5cclxuICAgIGRjLmVuZEVsZW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmlld0VudHJpZXMoY1Zpc2liaWxpdHk6IHNvZGl1bS5DZWxsPHN0cmluZz4sIGNFbnRyaWVzOiBzb2RpdW0uQ2VsbDxFbnRyeVtdPiwgZGM6IERvbUN0eDxNc2c+KSB7XHJcbiAgICBsZXQgY0lzVmlzaWJsZSA9XHJcbiAgICAgICAgKHRvZG86IEVudHJ5KSA9PlxyXG4gICAgICAgICAgICBjVmlzaWJpbGl0eS5saWZ0KFxyXG4gICAgICAgICAgICAgICAgdG9kby5jQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgKHZpc2liaWxpdHk6IHN0cmluZywgY29tcGxldGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2aXNpYmlsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDb21wbGV0ZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBY3RpdmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhY29tcGxldGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgbGV0IGNBbGxDb21wbGV0ZSA9XHJcbiAgICAgICAgc29kaXVtLkNlbGwuc3dpdGNoQyhcclxuICAgICAgICAgICAgY0VudHJpZXNcclxuICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2RpdW0uQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpZnRBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZW50cnkgPT4gZW50cnkuY0NvbXBsZXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoY29tcGxldGVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBsZXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgbGV0IGNDc3NWaXNpYmlsaXR5ID1cclxuICAgICAgICBjRW50cmllcy5tYXAoZW50cmllcyA9PiBlbnRyaWVzLmxlbmd0aCA9PSAwID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiKTtcclxuICAgIFxyXG4gICAgbGV0IGNWaXNpYmxlRW50cmllcyA9XHJcbiAgICAgICAgc29kaXVtLkNlbGwuc3dpdGNoQyhcclxuICAgICAgICAgICAgY0VudHJpZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgZW50cmllcyA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNvZGl1bS5DZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saWZ0QXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLm1hcChlbnRyeSA9PiBjSXNWaXNpYmxlKGVudHJ5KS5tYXAodmlzaWJsZSA9PiB2aXNpYmxlID8gW2VudHJ5XSA6IFtdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdDogRW50cnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5mb3JFYWNoKHgyID0+IHgyLmZvckVhY2goeDMgPT4gcmVzdWx0LnB1c2goeDMpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgZGMuYmVnaW5FbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgICAgICBkYy5hdHRyKFwiY2xhc3NcIiwgbmV3IHNvZGl1bS5DZWxsKFwibWFpblwiKSk7XHJcbiAgICAgICAgZGMuYXR0cihcInN0eWxlXCIsIGNDc3NWaXNpYmlsaXR5Lm1hcChjc3NWaXNpYmlsaXR5ID0+IFwidmlzaWJsZTpcIiArIGNzc1Zpc2liaWxpdHkgKyBcIjtcIikpO1xyXG4gICAgICAgIGRjLmJlZ2luRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwiY2xhc3NcIiwgbmV3IHNvZGl1bS5DZWxsKFwidG9nZ2xlLWFsbFwiKSk7XHJcbiAgICAgICAgICAgIGRjLmF0dHIoXCJ0eXBlXCIsIG5ldyBzb2RpdW0uQ2VsbChcImNoZWNrYm94XCIpKTtcclxuICAgICAgICAgICAgZGMuYXR0cihcIm5hbWVcIiwgbmV3IHNvZGl1bS5DZWxsKFwidG9nZ2xlXCIpKTtcclxuICAgICAgICAgICAgZGMuY2hlY2tlZChjQWxsQ29tcGxldGUpO1xyXG4gICAgICAgICAgICBkYy5vbihcImNsaWNrXCIsIGNBbGxDb21wbGV0ZS5tYXAoYWxsQ29tcGxldGUgPT4gKGU6IEV2ZW50KSA9PiBuZXcgTXNnQ2hlY2tBbGwoIWFsbENvbXBsZXRlKSkpO1xyXG4gICAgICAgIGRjLmVuZEVsZW1lbnQoKTtcclxuICAgICAgICBkYy5iZWdpbkVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgZGMuYXR0cihcImZvclwiLCBuZXcgc29kaXVtLkNlbGwoXCJ0b2dnbGUtYWxsXCIpKTtcclxuICAgICAgICAgICAgZGMudGV4dChuZXcgc29kaXVtLkNlbGwoXCJNYXJrIGFsbCBhcyBjb21wbGV0ZVwiKSk7XHJcbiAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG4gICAgICAgIGRjLmJlZ2luRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwiY2xhc3NcIiwgbmV3IHNvZGl1bS5DZWxsKFwidG9kby1saXN0XCIpKTtcclxuICAgICAgICAgICAgZGMuZm9yRWFjaChjVmlzaWJsZUVudHJpZXMsIGVudHJ5ID0+IFwiXCIgKyBlbnRyeS5pZCwgZW50cnkgPT4gdmlld0VudHJ5KGVudHJ5LCBkYykpO1xyXG4gICAgICAgIGRjLmVuZEVsZW1lbnQoKTtcclxuICAgIGRjLmVuZEVsZW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmlld0VudHJ5KHRvZG86IEVudHJ5LCBkYzogRG9tQ3R4PE1zZz4pIHtcclxuICAgIGxldCBjQ2xhc3MgPVxyXG4gICAgICAgIHRvZG8uY0NvbXBsZXRlZC5saWZ0KFxyXG4gICAgICAgICAgICB0b2RvLmNFZGl0aW5nLFxyXG4gICAgICAgICAgICAoY29tcGxldGVkLCBlZGl0aW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29tcGxldGVkLGVkaXRpbmdcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb21wbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGl0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImVkaXRpbmdcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgZGMuYmVnaW5FbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgZGMuYXR0cihcImNsYXNzXCIsIGNDbGFzcyk7XHJcbiAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwiY2xhc3NcIiwgbmV3IHNvZGl1bS5DZWxsKFwidmlld1wiKSk7XHJcbiAgICAgICAgICAgIGRjLmJlZ2luRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgZGMuYXR0cihcImNsYXNzXCIsIG5ldyBzb2RpdW0uQ2VsbChcInRvZ2dsZVwiKSk7XHJcbiAgICAgICAgICAgICAgICBkYy5hdHRyKFwidHlwZVwiLCBuZXcgc29kaXVtLkNlbGwoXCJjaGVja2JveFwiKSk7XHJcbiAgICAgICAgICAgICAgICBkYy5jaGVja2VkKHRvZG8uY0NvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICBkYy5vbihcImNsaWNrXCIsIHRvZG8uY0NvbXBsZXRlZC5tYXAoY29tcGxldGVkID0+IChlOiBFdmVudCkgPT4gbmV3IE1zZ0NoZWNrKHRvZG8uaWQsICFjb21wbGV0ZWQpKSk7XHJcbiAgICAgICAgICAgIGRjLmVuZEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICBkYy5vbihcImRibGNsaWNrXCIsIG5ldyBzb2RpdW0uQ2VsbCgoZTogRXZlbnQpID0+IG5ldyBNc2dFZGl0aW5nRW50cnkodG9kby5pZCwgdHJ1ZSkpKTtcclxuICAgICAgICAgICAgICAgIGRjLnRleHQodG9kby5jRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBkYy5lbmRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGRjLmJlZ2luRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGRjLmF0dHIoXCJjbGFzc1wiLCBuZXcgc29kaXVtLkNlbGwoXCJkZXN0cm95XCIpKTtcclxuICAgICAgICAgICAgICAgIGRjLm9uKFwiY2xpY2tcIiwgbmV3IHNvZGl1bS5DZWxsKChlOiBFdmVudCkgPT4gbmV3IE1zZ0RlbGV0ZSh0b2RvLmlkKSkpO1xyXG4gICAgICAgICAgICBkYy5lbmRFbGVtZW50KCk7XHJcbiAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG4gICAgICAgIGRjLmJlZ2luRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwiY2xhc3NcIiwgbmV3IHNvZGl1bS5DZWxsKFwiZWRpdFwiKSk7XHJcbiAgICAgICAgICAgIGRjLmF0dHIoXCJ2YWx1ZVwiLCB0b2RvLmNEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGRjLmF0dHIoXCJuYW1lXCIsIG5ldyBzb2RpdW0uQ2VsbChcInRpdGxlXCIpKTtcclxuICAgICAgICAgICAgZGMuYXR0cihcImlkXCIsIG5ldyBzb2RpdW0uQ2VsbChcInRvZG8tXCIgKyB0b2RvLmlkKSk7XHJcbiAgICAgICAgICAgIGRjLm9uKFwiaW5wdXRcIiwgbmV3IHNvZGl1bS5DZWxsKChlOiBFdmVudCkgPT4gbmV3IE1zZ1VwZGF0ZUVudHJ5KHRvZG8uaWQsIChlLnNyY0VsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpKSk7XHJcbiAgICAgICAgICAgIGRjLm9uKFwiYmx1clwiLCBuZXcgc29kaXVtLkNlbGwoKGU6IEV2ZW50KSA9PiBuZXcgTXNnRWRpdGluZ0VudHJ5KHRvZG8uaWQsIGZhbHNlKSkpO1xyXG4gICAgICAgICAgICBkYy5vbihcImtleWRvd25cIiwgbmV3IHNvZGl1bS5DZWxsKChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGUyID0gZSBhcyBLZXlib2FyZEV2ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGUyLmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1zZ0VkaXRpbmdFbnRyeSh0b2RvLmlkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1zZ05vT3AoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIGRjLmVuZEVsZW1lbnQoKTtcclxuICAgIGRjLmVuZEVsZW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmlld0NvbnRyb2xzKGNWaXNpYmlsaXR5OiBzb2RpdW0uQ2VsbDxzdHJpbmc+LCBjRW50cmllczogc29kaXVtLkNlbGw8RW50cnlbXT4sIGRjOiBEb21DdHg8TXNnPikge1xyXG4gICAgbGV0IGNFbnRyaWVzQ29tcGxldGUgPVxyXG4gICAgICAgIHNvZGl1bS5DZWxsXHJcbiAgICAgICAgICAgIC5zd2l0Y2hDKFxyXG4gICAgICAgICAgICAgICAgY0VudHJpZXMubWFwKGVudHJpZXMgPT5cclxuICAgICAgICAgICAgICAgICAgICBzb2RpdW0uQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlmdEFycmF5KGVudHJpZXMubWFwKGVudHJ5ID0+IGVudHJ5LmNDb21wbGV0ZWQubWFwKGNvbXBsZXRlZCA9PiBjb21wbGV0ZWQgPyBbZW50cnldIDogW10pKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IEVudHJ5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguZm9yRWFjaCh4MiA9PiB4Mi5mb3JFYWNoKHgzID0+IHJlc3VsdC5wdXNoKHgzKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHggPT4geC5sZW5ndGgpO1xyXG4gICAgbGV0IGNFbnRyaWVzTGVmdCA9XHJcbiAgICAgICAgY0VudHJpZXMubGlmdChcclxuICAgICAgICAgICAgY0VudHJpZXNDb21wbGV0ZSxcclxuICAgICAgICAgICAgKGVudHJpZXMsIGVudHJpZXNDb21wbGV0ZSkgPT4gZW50cmllcy5sZW5ndGggLSBlbnRyaWVzQ29tcGxldGVcclxuICAgICAgICApO1xyXG4gICAgXHJcbiAgICBkYy5iZWdpbkVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICAgICAgZGMuYXR0cihcImNsYXNzXCIsIG5ldyBzb2RpdW0uQ2VsbChcImZvb3RlclwiKSk7XHJcbiAgICAgICAgZGMuYXR0cihcInN0eWxlXCIsIGNFbnRyaWVzLm1hcChlbnRyaWVzID0+IGVudHJpZXMubGVuZ3RoID09IDAgPyBcImRpc3BsYXk6bm9uZTtcIiA6IFwiZGlzcGxheTpibG9jaztcIikpO1xyXG4gICAgICAgIHZpZXdDb250cm9sc0NvdW50KGNFbnRyaWVzTGVmdCwgZGMpO1xyXG4gICAgICAgIHZpZXdDb250cm9sc0ZpbHRlcnMoY1Zpc2liaWxpdHksIGRjKTtcclxuICAgICAgICB2aWV3Q29udHJvbHNDbGVhcihjRW50cmllc0NvbXBsZXRlLCBkYyk7XHJcbiAgICBkYy5lbmRFbGVtZW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpZXdDb250cm9sc0NvdW50KGNFbnRyaWVzTGVmdDogc29kaXVtLkNlbGw8bnVtYmVyPiwgZGM6IERvbUN0eDxNc2c+KSB7XHJcbiAgICBsZXQgY0l0ZW1fID0gY0VudHJpZXNMZWZ0Lm1hcChlbnRyaWVzTGVmdCA9PiBlbnRyaWVzTGVmdCA9PSAxID8gXCIgaXRlbVwiIDogXCIgaXRlbXNcIik7XHJcblxyXG4gICAgZGMuYmVnaW5FbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBkYy5hdHRyKFwiY2xhc3NcIiwgbmV3IHNvZGl1bS5DZWxsKFwidG9kby1jb3VudFwiKSk7XHJcbiAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwic3Ryb25nXCIpO1xyXG4gICAgICAgICAgICBkYy50ZXh0KGNFbnRyaWVzTGVmdC5tYXAoZW50cmllc0xlZnQgPT4gXCJcIiArIGVudHJpZXNMZWZ0KSk7XHJcbiAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG4gICAgICAgIGRjLnRleHQoY0l0ZW1fLm1hcChpdGVtXyA9PiBpdGVtXyArIFwiIGxlZnRcIikpO1xyXG4gICAgZGMuZW5kRWxlbWVudCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2aWV3Q29udHJvbHNGaWx0ZXJzKGNWaXNpYmlsaXR5OiBzb2RpdW0uQ2VsbDxzdHJpbmc+LCBkYzogRG9tQ3R4PE1zZz4pIHtcclxuICAgIGRjLmJlZ2luRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGRjLmF0dHIoXCJjbGFzc1wiLCBuZXcgc29kaXVtLkNlbGwoXCJmaWx0ZXJzXCIpKTtcclxuICAgICAgICB2aXNpYmlsaXR5U3dhcChcIiMvXCIsIFwiQWxsXCIsIGNWaXNpYmlsaXR5LCBkYyk7XHJcbiAgICAgICAgZGMudGV4dChuZXcgc29kaXVtLkNlbGwoXCIgXCIpKTtcclxuICAgICAgICB2aXNpYmlsaXR5U3dhcChcIiMvYWN0aXZlXCIsIFwiQWN0aXZlXCIsIGNWaXNpYmlsaXR5LCBkYyk7XHJcbiAgICAgICAgZGMudGV4dChuZXcgc29kaXVtLkNlbGwoXCIgXCIpKTtcclxuICAgICAgICB2aXNpYmlsaXR5U3dhcChcIiMvY29tcGxldGVkXCIsIFwiQ29tcGxldGVkXCIsIGNWaXNpYmlsaXR5LCBkYyk7XHJcbiAgICBkYy5lbmRFbGVtZW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpc2liaWxpdHlTd2FwKHVyaTogc3RyaW5nLCB2aXNpYmlsaXR5OiBzdHJpbmcsIGNBY3R1YWxWaXNpYmlsaXR5OiBzb2RpdW0uQ2VsbDxzdHJpbmc+LCBkYzogRG9tQ3R4PE1zZz4pIHtcclxuICAgIGRjLmJlZ2luRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGRjLm9uKFwiY2xpY2tcIiwgbmV3IHNvZGl1bS5DZWxsKChlOiBFdmVudCkgPT4gbmV3IE1zZ0NoYW5nZVZpc2liaWxpdHkodmlzaWJpbGl0eSkpKTtcclxuICAgICAgICBkYy5iZWdpbkVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICBkYy5hdHRyKFwiaHJlZlwiLCBuZXcgc29kaXVtLkNlbGwodXJpKSk7XHJcbiAgICAgICAgICAgIGRjLmF0dHIoXCJjbGFzc1wiLCBjQWN0dWFsVmlzaWJpbGl0eS5tYXAoYWN0dWFsVmlzaWJpbGl0eSA9PiB2aXNpYmlsaXR5ID09IGFjdHVhbFZpc2liaWxpdHkgPyBcInNlbGVjdGVkXCIgOiBcIlwiKSk7XHJcbiAgICAgICAgICAgIGRjLnRleHQobmV3IHNvZGl1bS5DZWxsKHZpc2liaWxpdHkpKTtcclxuICAgICAgICBkYy5lbmRFbGVtZW50KCk7XHJcbiAgICBkYy5lbmRFbGVtZW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpZXdDb250cm9sc0NsZWFyKGNFbnRyaWVzQ29tcGxldGVkOiBzb2RpdW0uQ2VsbDxudW1iZXI+LCBkYzogRG9tQ3R4PE1zZz4pIHtcclxuICAgIGRjLmJlZ2luRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBkYy5hdHRyKFwiY2xhc3NcIiwgbmV3IHNvZGl1bS5DZWxsKFwiY2xlYXItY29tcGxldGVkXCIpKTtcclxuICAgICAgICBkYy5hdHRyKFwic3R5bGVcIiwgY0VudHJpZXNDb21wbGV0ZWQubWFwKGVudHJpZXNDb21wbGV0ZWQgPT4gZW50cmllc0NvbXBsZXRlZCA9PSAwID8gXCJ2aXNpYmlsaXR5Om5vbmU7XCIgOiBcIlwiKSk7XHJcbiAgICAgICAgZGMub24oXCJjbGlja1wiLCBuZXcgc29kaXVtLkNlbGwoKGU6IEV2ZW50KSA9PiBuZXcgTXNnRGVsZXRlQ29tcGxldGUoKSkpO1xyXG4gICAgICAgIGRjLnRleHQoY0VudHJpZXNDb21wbGV0ZWQubWFwKGVudHJpZXNDb21wbGV0ZWQgPT4gXCJDbGVhciBjb21wbGV0ZWQgKFwiICsgZW50cmllc0NvbXBsZXRlZCArIFwiKVwiKSk7XHJcbiAgICBkYy5lbmRFbGVtZW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZm9Gb290ZXIoZGM6IERvbUN0eDxNc2c+KSB7XHJcbiAgICBkYy5iZWdpbkVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICAgICAgZGMuYXR0cihcImNsYXNzXCIsIG5ldyBzb2RpdW0uQ2VsbChcImluZm9cIikpO1xyXG4gICAgICAgIGRjLmJlZ2luRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIGRjLnRleHQobmV3IHNvZGl1bS5DZWxsKFwiRG91YmxlLWNsaWNrIHRvIGVkaXQgYSB0b2RvXCIpKTtcclxuICAgICAgICBkYy5lbmRFbGVtZW50KCk7XHJcbiAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgZGMudGV4dChuZXcgc29kaXVtLkNlbGwoXCJIYW5kIFRyYW5zcGlsZWQgQnkgXCIpKTtcclxuICAgICAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGRjLmF0dHIoXCJocmVmXCIsIG5ldyBzb2RpdW0uQ2VsbChcImh0dHA6Ly9naXRodWIuY29tL2NsaW51eHJ1bHovaWRvbS1zb2RpdW0tdG9kby1tdmNcIikpO1xyXG4gICAgICAgICAgICAgICAgZGMudGV4dChuZXcgc29kaXVtLkNlbGwoXCJDbGludG9uIFNlbGtlXCIpKTtcclxuICAgICAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBkYy50ZXh0KG5ldyBzb2RpdW0uQ2VsbChcIiwgRnJvbSBUb2RvTVZDIHdyaXR0ZW4gYnkgXCIpKTtcclxuICAgICAgICAgICAgZGMuYmVnaW5FbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGRjLmF0dHIoXCJocmVmXCIsIG5ldyBzb2RpdW0uQ2VsbChcImh0dHBzOi8vZ2l0aHViLmNvbS9ldmFuY3ovZWxtLXRvZG9tdmNcIikpO1xyXG4gICAgICAgICAgICAgICAgZGMudGV4dChuZXcgc29kaXVtLkNlbGwoXCJFdmFuIEN6YXBsaWNraVwiKSlcclxuICAgICAgICAgICAgZGMuZW5kRWxlbWVudCgpO1xyXG4gICAgICAgIGRjLmVuZEVsZW1lbnQoKTtcclxuICAgIGRjLmVuZEVsZW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIHNvZGl1bS5UcmFuc2FjdGlvbi5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGxldCBkb21DdHggPSBuZXcgRG9tQ3R4SW1wbDxNc2c+KCk7XHJcbiAgICAgICAgbGV0IHNsTXNnID0gbmV3IHNvZGl1bS5TdHJlYW1Mb29wPE1zZz4oKTtcclxuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgTW9kZWwoc2xNc2cpO1xyXG4gICAgICAgIHZpZXcobW9kZWwsIGRvbUN0eCk7XHJcbiAgICAgICAgbGV0IHJvb3RFbGVtZW50ID0gZG9tQ3R4LnN0YXRlLnJvb3RFbGVtZW50O1xyXG4gICAgICAgIGxldCBkaXNjb25uZWN0ID0gcm9vdEVsZW1lbnQuaW5pdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdEVsZW1lbnQuZWxlbWVudCk7XHJcbiAgICAgICAgc2xNc2cubG9vcChkb21DdHguc01zZyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJpbXBvcnQgKiBhcyBzb2RpdW0gZnJvbSAnc29kaXVtanMnO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ3R5cGVzY3JpcHQtY29sbGVjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb21DdHg8TVNHPiB7XHJcblxyXG4gICAgYmVnaW5FbGVtZW50KHRhZ05hbWU6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgZW5kRWxlbWVudCgpOiB2b2lkO1xyXG5cclxuICAgIGF0dHIobmFtZTogc3RyaW5nLCB2YWx1ZTogc29kaXVtLkNlbGw8c3RyaW5nPik6IHZvaWQ7XHJcblxyXG4gICAgY2hlY2tlZCh2YWx1ZTogc29kaXVtLkNlbGw8Ym9vbGVhbj4pOiB2b2lkO1xyXG5cclxuICAgIHRleHQodmFsdWU6IHNvZGl1bS5DZWxsPHN0cmluZz4pOiB2b2lkO1xyXG5cclxuICAgIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBzb2RpdW0uQ2VsbDwoZTogRXZlbnQpPT5NU0c+KTogdm9pZDtcclxuXHJcbiAgICBmb3JFYWNoPEE+KGVsZW1lbnRzOiBzb2RpdW0uQ2VsbDxBW10+LCBrZXlFeHRyYWN0b3I6IChhOkEpPT5zdHJpbmcsIHZpZXc6IChhOkEpPT52b2lkKTogdm9pZDtcclxufVxyXG5cclxuLy8gUmVhY3RpdmUgRE9NIEltcGxlbWVudGF0aW9uXHJcblxyXG5leHBvcnQgY2xhc3MgRWxlbWVudFdyYXBwZXIge1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjaGlsZHJlbjogRWxlbWVudFdyYXBwZXJbXTtcclxuICAgIGluaXRzOiAoKCkgPT4gKCgpID0+IHZvaWQpKVtdO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5pbml0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCk6ICgpPT52b2lkIHtcclxuICAgICAgICBsZXQgY2xlYW51cHM6ICgoKT0+dm9pZClbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdHMuZm9yRWFjaChpbml0ID0+IGNsZWFudXBzLnB1c2goaW5pdCgpKSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNsZWFudXBzLnB1c2goY2hpbGQuaW5pdCgpKSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFudXBzLmZvckVhY2goY2xlYW51cCA9PiBjbGVhbnVwKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tQ3R4SW1wbFN0YXRlIHtcclxuICAgIHJvb3RFbGVtZW50OiBFbGVtZW50V3JhcHBlciA9IG51bGw7XHJcbiAgICBwYXJlbnRFbGVtZW50OiBFbGVtZW50V3JhcHBlciA9IG51bGw7XHJcbiAgICBjdXJyZW50RWxlbWVudDogRWxlbWVudFdyYXBwZXIgPSBudWxsO1xyXG4gICAgZWxlbWVudFN0YWNrOiBTdGFjazxFbGVtZW50V3JhcHBlcj4gPSBuZXcgU3RhY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvbUN0eEltcGw8TVNHPiBpbXBsZW1lbnRzIERvbUN0eDxNU0c+IHtcclxuICAgIHN0YXRlOiBEb21DdHhJbXBsU3RhdGUgPSBuZXcgRG9tQ3R4SW1wbFN0YXRlKCk7XHJcbiAgICBzdGF0ZVN0YWNrOiBTdGFjazxEb21DdHhJbXBsU3RhdGU+ID0gbmV3IFN0YWNrKCk7XHJcbiAgICBfc01zZzogc29kaXVtLlN0cmVhbVNpbms8TVNHPiA9IG5ldyBzb2RpdW0uU3RyZWFtU2luaygpO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgc01zZygpOiBzb2RpdW0uU3RyZWFtPE1TRz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zTXNnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW50ZXJTdWJTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlU3RhY2sucHVzaCh0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IERvbUN0eEltcGxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGVhdmVTdWJTdGF0ZSgpOiBEb21DdHhJbXBsU3RhdGUge1xyXG4gICAgICAgIGxldCByID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZVN0YWNrLnBvcCgpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZ2luRWxlbWVudCh0YWdOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnBhcmVudEVsZW1lbnQgPSB0aGlzLnN0YXRlLmN1cnJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbGVtZW50U3RhY2sucHVzaCh0aGlzLnN0YXRlLmN1cnJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudCA9IG5ldyBFbGVtZW50V3JhcHBlcihkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLnB1c2godGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucGFyZW50RWxlbWVudC5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3RhdGUuY3VycmVudEVsZW1lbnQuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuZEVsZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWxlbWVudFN0YWNrLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvb3RFbGVtZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudCA9IHRoaXMuc3RhdGUuZWxlbWVudFN0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnBhcmVudEVsZW1lbnQgPSB0aGlzLnN0YXRlLmN1cnJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHIobmFtZTogc3RyaW5nLCB2YWx1ZTogc29kaXVtLkNlbGw8c3RyaW5nPikge1xyXG4gICAgICAgIGxldCBlID0gdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudDtcclxuICAgICAgICBlLmluaXRzLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB2YWx1ZS5saXN0ZW4oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLmVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHgpO1xyXG4gICAgICAgICAgICAgICAgKGUuZWxlbWVudCBhcyBhbnkpW25hbWVdID0geDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja2VkKHZhbHVlOiBzb2RpdW0uQ2VsbDxib29sZWFuPikge1xyXG4gICAgICAgIGxldCBlID0gdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudDtcclxuICAgICAgICBlLmluaXRzLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB2YWx1ZS5saXN0ZW4oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGUuZWxlbWVudCBhcyBhbnkpW1wiY2hlY2tlZFwiXSA9PSB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKGUuZWxlbWVudCBhcyBhbnkpW1wiY2hlY2tlZFwiXSA9IHg7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0KHZhbHVlOiBzb2RpdW0uQ2VsbDxzdHJpbmc+KSB7XHJcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcclxuICAgICAgICBsZXQgZSA9IHRoaXMuc3RhdGUuY3VycmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudC5lbGVtZW50LmFwcGVuZENoaWxkKHQpO1xyXG4gICAgICAgIGUuaW5pdHMucHVzaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHZhbHVlLmxpc3Rlbih4ID0+IHtcclxuICAgICAgICAgICAgICAgIHQuZGF0YSA9IHg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IHNvZGl1bS5DZWxsPChlOiBFdmVudCkgPT4gTVNHPikge1xyXG4gICAgICAgIGxldCBlID0gdGhpcy5zdGF0ZS5jdXJyZW50RWxlbWVudDtcclxuICAgICAgICBlLmluaXRzLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5uZXJIYW5kbGVyOiAoKGU6IEV2ZW50KSA9PiB2b2lkKSA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IGhhbmRsZXIubGlzdGVuKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlubmVySGFuZGxlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBpbm5lckhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5uZXJIYW5kbGVyID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc01zZy5zZW5kKHgoZSkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGUuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaW5uZXJIYW5kbGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlubmVySGFuZGxlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBpbm5lckhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2g8QT4oZWxlbWVudHM6IHNvZGl1bS5DZWxsPEFbXT4sIGtleUV4dHJhY3RvcjogKGE6IEEpID0+IHN0cmluZywgdmlldzogKGE6IEEpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmJlZ2luRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuc3RhdGUuY3VycmVudEVsZW1lbnQuZWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRFbGVtZW50LmluaXRzLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFzdENoaWxkcmVuOiB7W2tleTogc3RyaW5nXToge2VsZW1lbnQ6IEVsZW1lbnRXcmFwcGVyLCBjbGVhbnVwOiAoKSA9PiB2b2lkfX0gPSB7fTtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0gZWxlbWVudHMubGlzdGVuKGVsZW1lbnRzMiA9PiB7XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuUmVtb3ZlZDoge1trZXk6IHN0cmluZ106IHtlbGVtZW50OiBFbGVtZW50V3JhcHBlciwgY2xlYW51cDogKCkgPT4gdm9pZH19ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGxhc3RDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxhc3RDaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblJlbW92ZWRba2V5XSA9IGxhc3RDaGlsZHJlbltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzMi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzMltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleUV4dHJhY3RvcihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkcmVuUmVtb3ZlZFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY2hpbGRyZW5SZW1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW5SZW1vdmVkLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gY2hpbGRyZW5SZW1vdmVkW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh4LmNsZWFudXApKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGQubGFzdENoaWxkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGQucmVtb3ZlQ2hpbGQoZC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRDaGlsZHJlbjoge1trZXk6IHN0cmluZ106IHtlbGVtZW50OiBFbGVtZW50V3JhcHBlciwgY2xlYW51cDogKCkgPT4gdm9pZH19ID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzMi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHMyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlFeHRyYWN0b3IoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGUyID0gbGFzdENoaWxkcmVuW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmFwcGVuZENoaWxkKGUyLmVsZW1lbnQuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDaGlsZHJlbltrZXldID0gZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRlclN1YlN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWJTdGF0ZSA9IHRoaXMubGVhdmVTdWJTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmFwcGVuZENoaWxkKHN1YlN0YXRlLnJvb3RFbGVtZW50LmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q2hpbGRyZW5ba2V5XSA9IHtlbGVtZW50OiBzdWJTdGF0ZS5yb290RWxlbWVudCwgY2xlYW51cDogKHN1YlN0YXRlLnJvb3RFbGVtZW50LmluaXQpKCkgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYXN0Q2hpbGRyZW4gPSBuZXh0Q2hpbGRyZW47XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBsYXN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxhc3RDaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAobGFzdENoaWxkcmVuW2tleV0uY2xlYW51cCkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVuZEVsZW1lbnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
