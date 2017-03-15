/* v0.3.0 */
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.4.0' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};























































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _isObject = function _isObject(it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function _anObject(it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!isObject$2(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var anObject = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive = _toPrimitive;
var dP$1 = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP$1(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
  f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var dP = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
  var global = _global,
      hide = _hide,
      has = _has,
      SRC = _uid('src'),
      TO_STRING = 'toString',
      $toString = Function[TO_STRING],
      TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has(val, 'name') || hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === global) {
      O[key] = val;
    } else {
      if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else {
        if (O[key]) O[key] = val;else hide(O, key, val);
      }
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function _ctx(fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

var global$1 = _global;
var core = _core;
var hide = _hide;
var redefine = _redefine;
var ctx = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      target = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE],
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
      key,
      own,
      out,
      exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1; // forced
$export$1.G = 2; // global
$export$1.S = 4; // static
$export$1.P = 8; // proto
$export$1.B = 16; // bind
$export$1.W = 32; // wrap
$export$1.U = 64; // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString = {}.toString;

var _cof = function _cof(it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function _toIobject(it) {
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max = Math.max;
var min$1 = Math.min;
var _toIndex = function _toIndex(index, length) {
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength = _toLength;
var toIndex = _toIndex;
var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$1($this),
        length = toLength(O.length),
        index = toIndex(fromIndex, length),
        value;
    // Array#includes uses SameValueZero equality algorithm
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
      // Array#toIndex ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function _shared(key) {
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid = _uid;
var _sharedKey = function _sharedKey(key) {
  return shared[key] || (shared[key] = uid(key));
};

var has = _has;
var toIObject = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = toIObject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function _toObject(it) {
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = _objectKeys;
var gOPS = _objectGops;
var pIE = _objectPie;
var toObject = _toObject;
var IObject = _iobject;
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {},
      B = {},
      S = Symbol(),
      K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target),
      aLen = arguments.length,
      index = 1,
      getSymbols = gOPS.f,
      isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]),
        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
        length = keys.length,
        j = 0,
        key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', { assign: _objectAssign });

function createCommonjsModule$1(u, e) {
  return e = { exports: {} }, u(e, e.exports), e.exports;
}function isObject$1$1(u) {
  return null !== u && "object" === (void 0 === u ? "undefined" : _typeof$1(u));
}function RequestBase(u) {
  if (u) return mixin(u);
}function mixin(u) {
  for (var e in RequestBase.prototype) {
    u[e] = RequestBase.prototype[e];
  }return u;
}function isFunction(u) {
  return "[object Function]" === (isObject$2$1(u) ? Object.prototype.toString.call(u) : "");
}function ResponseBase(u) {
  if (u) return mixin$1(u);
}function mixin$1(u) {
  for (var e in ResponseBase.prototype) {
    u[e] = ResponseBase.prototype[e];
  }return u;
}function replacer(u, e) {
  return "function" == typeof e ? getFunctionName(e) : e;
}function assert(u, e) {
  u !== !0 && (isFunction$1(e) ? e = e() : isNil(e) && (e = 'Assert failed (turn on "Pause on exceptions" in your Source panel)'), assert.fail(e));
}function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}function runTimeout(u) {
  if (cachedSetTimeout === setTimeout) return setTimeout(u, 0);if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(u, 0);try {
    return cachedSetTimeout(u, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, u, 0);
    } catch (e) {
      return cachedSetTimeout.call(this, u, 0);
    }
  }
}function runClearTimeout(u) {
  if (cachedClearTimeout === clearTimeout) return clearTimeout(u);if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(u);try {
    return cachedClearTimeout(u);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, u);
    } catch (e) {
      return cachedClearTimeout.call(this, u);
    }
  }
}function cleanUpNextTick() {
  draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
}function drainQueue() {
  if (!draining) {
    var u = runTimeout(cleanUpNextTick);draining = !0;for (var e = queue.length; e;) {
      for (currentQueue = queue, queue = []; ++queueIndex < e;) {
        currentQueue && currentQueue[queueIndex].run();
      }queueIndex = -1, e = queue.length;
    }currentQueue = null, draining = !1, runClearTimeout(u);
  }
}function getDefaultName(u, e) {
  return "{" + getTypeName$3(u) + " | " + getFunctionName$4(e) + "}";
}function refinement$1(u, e, t) {
  function r(e, t) {
    return create(u, e, t);
  }var n = t || getDefaultName(u, e),
      i = isIdentity(u);return r.meta = { kind: "subtype", type: u, predicate: e, name: t, identity: i }, r.displayName = n, r.is = function (t) {
    return is$1$1(t, u) && e(t);
  }, r.update = function (u, e) {
    return r(assert$3.update(u, e));
  }, r;
}function getDefaultName$1(u, e) {
  return "{[key: " + getTypeName$5(u) + "]: " + getTypeName$5(e) + "}";
}function dict(u, e, t) {
  function r(t, r) {
    if (i) return t;var n = !0,
        o = {};for (var a in t) {
      if (t.hasOwnProperty(a)) {
        a = create$3(u, a, null);var s = t[a],
            c = create$3(e, s, null);n = n && s === c, o[a] = c;
      }
    }return n && (o = t), o;
  }var n = t || getDefaultName$1(u, e),
      i = (getTypeName$5(u), getTypeName$5(e), isIdentity$3(u) && isIdentity$3(e));return r.meta = { kind: "dict", domain: u, codomain: e, name: t, identity: i }, r.displayName = n, r.is = function (t) {
    if (!isObject$7(t)) return !1;for (var r in t) {
      if (t.hasOwnProperty(r) && (!is$3(r, u) || !is$3(t[r], e))) return !1;
    }return !0;
  }, r.update = function (u, e) {
    return r(assert$6.update(u, e));
  }, r;
}function getDefaultName$2(u) {
  return Object.keys(u).map(function (u) {
    return assert$9.stringify(u);
  }).join(" | ");
}function enums(u, e) {
  function t(u, e) {
    return u;
  }var r = e || getDefaultName$2(u);return t.meta = { kind: "enums", map: u, name: e, identity: !0 }, t.displayName = r, t.is = function (e) {
    return u.hasOwnProperty(e);
  }, t;
}function getDefaultName$3(u) {
  return "Array<" + getTypeName$7(u) + ">";
}function list(u, e) {
  function t(e, t) {
    if (n) return e;for (var r = !0, i = [], o = 0, a = e.length; o < a; o++) {
      var s = e[o],
          c = create$4(u, s, null);r = r && s === c, i.push(c);
    }return r && (i = e), i;
  }var r = e || getDefaultName$3(u),
      n = (getTypeName$7(u), isIdentity$4(u));return t.meta = { kind: "list", type: u, name: e, identity: n }, t.displayName = r, t.is = function (e) {
    return isArray$4(e) && e.every(function (e) {
      return is$4(e, u);
    });
  }, t.update = function (u, e) {
    return t(assert$10.update(u, e));
  }, t;
}function getDefaultName$4(u) {
  return "?" + getTypeName$8(u);
}function maybe(u, e) {
  function t(e, t) {
    return Nil$2.is(e) ? e : create$5(u, e, t);
  }if (isMaybe(u) || u === Any$2 || u === Nil$2) return u;var r = e || getDefaultName$4(u),
      n = isIdentity$5(u);return t.meta = { kind: "maybe", type: u, name: e, identity: n }, t.displayName = r, t.is = function (e) {
    return Nil$2.is(e) || is$5(e, u);
  }, t;
}function getDefaultInterfaceName$1(u) {
  return "{" + Object.keys(u).map(function (e) {
    return e + ": " + getTypeName$10(u[e]);
  }).join(", ") + "}";
}function isRefinement(u) {
  return isType$12(u) && "subtype" === u.meta.kind;
}function getPredicates(u) {
  return isRefinement(u) ? [u.meta.predicate].concat(getPredicates(u.meta.type)) : [];
}function getUnrefinedType(u) {
  return isRefinement(u) ? getUnrefinedType(u.meta.type) : u;
}function decompose$1(u) {
  return { predicates: getPredicates(u), unrefinedType: getUnrefinedType(u) };
}function compose(u, e) {
  return u.reduce(function (u, e) {
    return refinement$2(u, e);
  }, e);
}function getProps(u) {
  return isObject$10(u) ? u : u.meta.props;
}function getDefaultProps(u) {
  return isObject$10(u) ? null : u.meta.defaultProps;
}function pushAll(u, e) {
  Array.prototype.push.apply(u, e);
}function extend$1(u, e, t) {
  var r = {},
      n = {},
      i = [],
      o = {};e.forEach(function (u, e) {
    var t = decompose(u),
        a = t.unrefinedType;pushAll(i, t.predicates), mixin$5(r, getProps(a)), mixin$5(n, a.prototype), mixin$5(o, getDefaultProps(a), !0);
  }), t = u.getOptions(t), t.defaultProps = mixin$5(o, t.defaultProps, !0);var a = compose(i, u(r, t));return mixin$5(a.prototype, n), a;
}function getDefaultName$5(u) {
  return "Struct" + getDefaultInterfaceName(u);
}function extendStruct(u, e) {
  return extend(struct, u, e);
}function getOptions(u) {
  return isObject$9(u) || (u = isNil$8(u) ? {} : { name: u }), u.hasOwnProperty("strict") || (u.strict = struct.strict), u.hasOwnProperty("defaultProps") || (u.defaultProps = {}), u;
}function struct(u, e) {
  function t(e, r) {
    if (t.is(e)) return e;if (!(this instanceof t)) return new t(e, r);for (var n in u) {
      if (u.hasOwnProperty(n)) {
        var o = u[n],
            a = e[n];void 0 === a && (a = i[n]), this[n] = create$6(o, a, null);
      }
    }
  }e = getOptions(e);var r = e.name,
      n = e.strict,
      i = e.defaultProps,
      o = r || getDefaultName$5(u);return t.meta = { kind: "struct", props: u, name: r, identity: !1, strict: n, defaultProps: i }, t.displayName = o, t.is = function (u) {
    return u instanceof t;
  }, t.update = function (u, e) {
    return new t(assert$12.update(u, e));
  }, t.extend = function (u, e) {
    return extendStruct([t].concat(u), e);
  }, t;
}function getDefaultName$6(u) {
  return "[" + u.map(getTypeName$11).join(", ") + "]";
}function tuple(u, e) {
  function t(e, t) {
    if (n) return e;for (var r = !0, i = [], o = 0, a = u.length; o < a; o++) {
      var s = u[o],
          c = e[o],
          l = create$7(s, c, null);r = r && c === l, i.push(l);
    }return r && (i = e), i;
  }var r = e || getDefaultName$6(u),
      n = u.every(isIdentity$6);return t.meta = { kind: "tuple", types: u, name: e, identity: n }, t.displayName = r, t.is = function (e) {
    return isArray$6(e) && e.length === u.length && u.every(function (u, t) {
      return is$6(e[t], u);
    });
  }, t.update = function (u, e) {
    return t(assert$14.update(u, e));
  }, t;
}function getDefaultName$7(u) {
  return u.map(getTypeName$12).join(" | ");
}function union(u, e) {
  function t(u, e) {
    if (n) return u;var r = t.dispatch(u);return !r && t.is(u) ? u : create$8(r, u, e);
  }var r = e || getDefaultName$7(u),
      n = u.every(isIdentity$7);return t.meta = { kind: "union", types: u, name: e, identity: n }, t.displayName = r, t.is = function (e) {
    return u.some(function (u) {
      return is$7(e, u);
    });
  }, t.dispatch = function (e) {
    for (var t = 0, r = u.length; t < r; t++) {
      var n = u[t];if (isUnion$3(n)) {
        var i = n.dispatch(e);if (!isNil$9(i)) return i;
      } else if (is$7(e, n)) return n;
    }
  }, t.update = function (u, e) {
    return t(assert$15.update(u, e));
  }, t;
}function getDefaultName$8(u, e) {
  return "(" + u.map(getTypeName$13).join(", ") + ") => " + getTypeName$13(e);
}function isInstrumented(u) {
  return FunctionType.is(u) && isObject$11(u.instrumentation);
}function getOptionalArgumentsIndex(u) {
  for (var e = u.length, t = !1, r = e - 1; r >= 0; r--) {
    var n = u[r];if (!isType$13(n) || "maybe" !== n.meta.kind) return r + 1;t = !0;
  }return t ? 0 : e;
}function func(u, e, t) {
  function r(u, e) {
    return isInstrumented(u) ? u : r.of(u);
  }u = isArray$8(u) ? u : [u];var n = t || getDefaultName$8(u, e),
      i = u.length;getOptionalArgumentsIndex(u);return r.meta = { kind: "func", domain: u, codomain: e, name: t, identity: !0 }, r.displayName = n, r.is = function (t) {
    return isInstrumented(t) && t.instrumentation.domain.length === i && t.instrumentation.domain.every(function (e, t) {
      return e === u[t];
    }) && t.instrumentation.codomain === e;
  }, r.of = function (t, n) {
    function o() {
      var r = Array.prototype.slice.call(arguments),
          o = r.length;if (n && o < i) {
        var a = Function.prototype.bind.apply(t, [this].concat(r));return func(u.slice(o), e).of(a, !0);
      }return create$9(e, t.apply(this, r));
    }return r.is(t) ? t : (o.instrumentation = { domain: u, codomain: e, f: t }, o.displayName = getFunctionName$6(t), o);
  }, r;
}function getDefaultName$9(u) {
  return u.map(getTypeName$14).join(" & ");
}function intersection(u, e) {
  function t(u, e) {
    return u;
  }var r = e || getDefaultName$9(u),
      n = u.every(isIdentity$8);return t.meta = { kind: "intersection", types: u, name: e, identity: n }, t.displayName = r, t.is = function (e) {
    return u.every(function (u) {
      return is$8(e, u);
    });
  }, t.update = function (u, e) {
    return t(assert$17.update(u, e));
  }, t;
}function assign$1$1(u, e) {
  for (var t in e) {
    e.hasOwnProperty(t) && (u[t] = e[t]);
  }return u;
}function extendInterface(u, e) {
  return extend$2(inter, u, e);
}function getOptions$1(u) {
  return isObject$12(u) || (u = isNil$11(u) ? {} : { name: u }), u.hasOwnProperty("strict") || (u.strict = inter.strict), u;
}function inter(u, e) {
  function t(e, t) {
    if (o) return e;var r = !0,
        n = o ? {} : assign$2({}, e);for (var i in u) {
      var a = u[i],
          s = e[i],
          c = create$10(a, s, null);r = r && s === c, n[i] = c;
    }return r && (n = e), n;
  }e = getOptions$1(e);var r = e.name,
      n = e.strict,
      i = r || getDefaultInterfaceName$2(u),
      o = Object.keys(u).map(function (e) {
    return u[e];
  }).every(isIdentity$9);return t.meta = { kind: "interface", props: u, name: r, identity: o, strict: n }, t.displayName = i, t.is = function (e) {
    if (isNil$11(e)) return !1;if (n) for (var t in e) {
      if (!u.hasOwnProperty(t)) return !1;
    }for (var r in u) {
      if (!is$9(e[r], u[r])) return !1;
    }return !0;
  }, t.update = function (u, e) {
    return t(assert$18.update(u, e));
  }, t.extend = function (u, e) {
    return extendInterface([t].concat(u), e);
  }, t;
}function getShallowCopy(u) {
  return isObject$13(u) ? u instanceof Date || u instanceof RegExp ? u : assign$2$1({}, u) : isArray$10(u) ? u.concat() : u;
}function isCommand(u) {
  return update.commands.hasOwnProperty(u);
}function getCommand(u) {
  return update.commands[u];
}function update(u, e) {
  var t,
      r = u,
      n = !1;for (var i in e) {
    e.hasOwnProperty(i) && (isCommand(i) ? (t = getCommand(i)(e[i], r), t !== u ? (n = !0, r = t) : r = u) : (r === u && (r = getShallowCopy(u)), t = update(r[i], e[i]), n = n || t !== r[i], r[i] = t));
  }return n ? r : u;
}function $apply(u, e) {
  return u(e);
}function $push(u, e) {
  return u.length > 0 ? e.concat(u) : e;
}function $remove(u, e) {
  if (u.length > 0) {
    e = getShallowCopy(e);for (var t = 0, r = u.length; t < r; t++) {
      delete e[u[t]];
    }
  }return e;
}function $set(u) {
  return u;
}function $splice(u, e) {
  return u.length > 0 ? (e = getShallowCopy(e), u.reduce(function (u, e) {
    return u.splice.apply(u, e), u;
  }, e)) : e;
}function $swap(u, e) {
  if (u.from !== u.to) {
    e = getShallowCopy(e);var t = e[u.to];e[u.to] = e[u.from], e[u.from] = t;
  }return e;
}function $unshift(u, e) {
  return u.length > 0 ? u.concat(e) : e;
}function $merge(u, e) {
  var t = !1,
      r = getShallowCopy(e);for (var n in u) {
    u.hasOwnProperty(n) && (r[n] = u[n], t = t || r[n] !== e[n]);
  }return t ? r : e;
}function getDefaultValidationErrorMessage(u, e, r) {
  var n = t.getTypeName(e),
      i = r.length ? "/" + r.join("/") + ": " + n : n;return "Invalid value " + stringify(u) + " supplied to " + i;
}function getValidationErrorMessage(u, e, r, n) {
  return t.Function.is(e.getValidationErrorMessage) ? e.getValidationErrorMessage(u, r, n) : getDefaultValidationErrorMessage(u, e, r);
}function validate(u, e, r) {
  return r = r || {}, new ValidationResult(recurse(u, e, t.Array.is(r) ? r : r.path || [], r));
}function recurse(u, e, r, n) {
  return t.isType(e) ? validators[e.meta.kind](u, e, r, n) : validators.es6classes(u, e, r, n);
}function debounce(u, e, t) {
  function r(e) {
    var t = p,
        r = f;return p = f = void 0, y = e, d = u.apply(r, t);
  }function n(u) {
    return y = u, h = setTimeout(a, e), F ? r(u) : d;
  }function i(u) {
    var t = u - C,
        r = u - y,
        n = e - t;return m ? nativeMin(n, E - r) : n;
  }function o(u) {
    var t = u - C,
        r = u - y;return void 0 === C || t >= e || t < 0 || m && r >= E;
  }function a() {
    var u = now();if (o(u)) return s(u);h = setTimeout(a, i(u));
  }function s(u) {
    return h = void 0, g && p ? r(u) : (p = f = void 0, d);
  }function c() {
    void 0 !== h && clearTimeout(h), y = 0, p = C = f = h = void 0;
  }function l() {
    return void 0 === h ? d : s(now());
  }function A() {
    var u = now(),
        t = o(u);if (p = arguments, f = this, C = u, t) {
      if (void 0 === h) return n(C);if (m) return h = setTimeout(a, e), r(C);
    }return void 0 === h && (h = setTimeout(a, e)), d;
  }var p,
      f,
      E,
      d,
      h,
      C,
      y = 0,
      F = !1,
      m = !1,
      g = !0;if ("function" != typeof u) throw new TypeError(FUNC_ERROR_TEXT);return e = toNumber(e) || 0, isObject$14(t) && (F = !!t.leading, m = "maxWait" in t, E = m ? nativeMax(toNumber(t.maxWait) || 0, e) : E, g = "trailing" in t ? !!t.trailing : g), A.cancel = c, A.flush = l, A;
}function throttle(u, e, t) {
  var r = !0,
      n = !0;if ("function" != typeof u) throw new TypeError(FUNC_ERROR_TEXT);return isObject$14(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), debounce(u, e, { leading: r, maxWait: e, trailing: n });
}function isObject$14(u) {
  var e = void 0 === u ? "undefined" : _typeof$1(u);return !!u && ("object" == e || "function" == e);
}function isObjectLike(u) {
  return !!u && "object" == (void 0 === u ? "undefined" : _typeof$1(u));
}function isSymbol(u) {
  return "symbol" == (void 0 === u ? "undefined" : _typeof$1(u)) || isObjectLike(u) && objectToString.call(u) == symbolTag;
}function toNumber(u) {
  if ("number" == typeof u) return u;if (isSymbol(u)) return NAN;if (isObject$14(u)) {
    var e = "function" == typeof u.valueOf ? u.valueOf() : u;u = isObject$14(e) ? e + "" : e;
  }if ("string" != typeof u) return 0 === u ? u : +u;u = u.replace(reTrim, "");var t = reIsBinary.test(u);return t || reIsOctal.test(u) ? freeParseInt(u.slice(2), t ? 2 : 8) : reIsBadHex.test(u) ? NAN : +u;
}var ENV = { storeApiUrl: "https://www.filestackapi.com/api/store", fileApiUrl: "https://www.filestackapi.com/api/file", uploadApiUrl: "https://upload.filestackapi.com", cloudApiUrl: "https://cloud.filestackapi.com", processApiUrl: "https://process.filestackapi.com" };
var commonjsGlobal$1 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
var index = createCommonjsModule$1(function (u) {
  function e(u) {
    if (u) return t(u);
  }function t(u) {
    for (var t in e.prototype) {
      u[t] = e.prototype[t];
    }return u;
  }u.exports = e, e.prototype.on = e.prototype.addEventListener = function (u, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + u] = this._callbacks["$" + u] || []).push(e), this;
  }, e.prototype.once = function (u, e) {
    function t() {
      this.off(u, t), e.apply(this, arguments);
    }return t.fn = e, this.on(u, t), this;
  }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function (u, e) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var t = this._callbacks["$" + u];if (!t) return this;if (1 == arguments.length) return delete this._callbacks["$" + u], this;for (var r, n = 0; n < t.length; n++) {
      if ((r = t[n]) === e || r.fn === e) {
        t.splice(n, 1);break;
      }
    }return this;
  }, e.prototype.emit = function (u) {
    this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
        t = this._callbacks["$" + u];if (t) {
      t = t.slice(0);for (var r = 0, n = t.length; r < n; ++r) {
        t[r].apply(this, e);
      }
    }return this;
  }, e.prototype.listeners = function (u) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + u] || [];
  }, e.prototype.hasListeners = function (u) {
    return !!this.listeners(u).length;
  };
});
var _typeof$1 = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (u) {
  return typeof u === "undefined" ? "undefined" : _typeof(u);
} : function (u) {
  return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u === "undefined" ? "undefined" : _typeof(u);
};
var toConsumableArray$1 = function toConsumableArray$$1(u) {
  if (Array.isArray(u)) {
    for (var e = 0, t = Array(u.length); e < u.length; e++) {
      t[e] = u[e];
    }return t;
  }return Array.from(u);
};
var isObject_1 = isObject$1$1;
var isObject$3 = isObject_1;
var requestBase = RequestBase;RequestBase.prototype.clearTimeout = function () {
  return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this;
}, RequestBase.prototype.parse = function (u) {
  return this._parser = u, this;
}, RequestBase.prototype.responseType = function (u) {
  return this._responseType = u, this;
}, RequestBase.prototype.serialize = function (u) {
  return this._serializer = u, this;
}, RequestBase.prototype.timeout = function (u) {
  if (!u || "object" !== (void 0 === u ? "undefined" : _typeof$1(u))) return this._timeout = u, this._responseTimeout = 0, this;for (var e in u) {
    switch (e) {case "deadline":
        this._timeout = u.deadline;break;case "response":
        this._responseTimeout = u.response;break;default:
        console.warn("Unknown timeout option", e);}
  }return this;
}, RequestBase.prototype.retry = function (u) {
  return 0 !== arguments.length && u !== !0 || (u = 1), u <= 0 && (u = 0), this._maxRetries = u, this._retries = 0, this;
}, RequestBase.prototype._retry = function () {
  return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end();
}, RequestBase.prototype.then = function (u, e) {
  if (!this._fullfilledPromise) {
    var t = this;this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (u, e) {
      t.end(function (t, r) {
        t ? e(t) : u(r);
      });
    });
  }return this._fullfilledPromise.then(u, e);
}, RequestBase.prototype.catch = function (u) {
  return this.then(void 0, u);
}, RequestBase.prototype.use = function (u) {
  return u(this), this;
}, RequestBase.prototype.ok = function (u) {
  if ("function" != typeof u) throw Error("Callback required");return this._okCallback = u, this;
}, RequestBase.prototype._isResponseOK = function (u) {
  return !!u && (this._okCallback ? this._okCallback(u) : u.status >= 200 && u.status < 300);
}, RequestBase.prototype.get = function (u) {
  return this._header[u.toLowerCase()];
}, RequestBase.prototype.getHeader = RequestBase.prototype.get, RequestBase.prototype.set = function (u, e) {
  if (isObject$3(u)) {
    for (var t in u) {
      this.set(t, u[t]);
    }return this;
  }return this._header[u.toLowerCase()] = e, this.header[u] = e, this;
}, RequestBase.prototype.unset = function (u) {
  return delete this._header[u.toLowerCase()], delete this.header[u], this;
}, RequestBase.prototype.field = function (u, e) {
  if (null === u || void 0 === u) throw new Error(".field(name, val) name can not be empty");if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), isObject$3(u)) {
    for (var t in u) {
      this.field(t, u[t]);
    }return this;
  }if (Array.isArray(e)) {
    for (var r in e) {
      this.field(u, e[r]);
    }return this;
  }if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");return "boolean" == typeof e && (e = "" + e), this._getFormData().append(u, e), this;
}, RequestBase.prototype.abort = function () {
  return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
}, RequestBase.prototype.withCredentials = function (u) {
  return void 0 == u && (u = !0), this._withCredentials = u, this;
}, RequestBase.prototype.redirects = function (u) {
  return this._maxRedirects = u, this;
}, RequestBase.prototype.toJSON = function () {
  return { method: this.method, url: this.url, data: this._data, headers: this._header };
}, RequestBase.prototype.send = function (u) {
  var e = isObject$3(u),
      t = this._header["content-type"];if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), e && !this._data) Array.isArray(u) ? this._data = [] : this._isHost(u) || (this._data = {});else if (u && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");if (e && isObject$3(this._data)) for (var r in u) {
    this._data[r] = u[r];
  } else "string" == typeof u ? (t || this.type("form"), t = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == t ? this._data ? this._data + "&" + u : u : (this._data || "") + u) : this._data = u;return !e || this._isHost(u) ? this : (t || this.type("json"), this);
}, RequestBase.prototype.sortQuery = function (u) {
  return this._sort = void 0 === u || u, this;
}, RequestBase.prototype._timeoutError = function (u, e, t) {
  if (!this._aborted) {
    var r = new Error(u + e + "ms exceeded");r.timeout = e, r.code = "ECONNABORTED", r.errno = t, this.timedout = !0, this.abort(), this.callback(r);
  }
}, RequestBase.prototype._setTimeouts = function () {
  var u = this;this._timeout && !this._timer && (this._timer = setTimeout(function () {
    u._timeoutError("Timeout of ", u._timeout, "ETIME");
  }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
    u._timeoutError("Response timeout of ", u._responseTimeout, "ETIMEDOUT");
  }, this._responseTimeout));
};var isObject$2$1 = isObject_1; var isFunction_1 = isFunction; var type = function type(u) {
  return u.split(/ *; */).shift();
}; var params = function params(u) {
  return u.split(/ *; */).reduce(function (u, e) {
    var t = e.split(/ *= */),
        r = t.shift(),
        n = t.shift();return r && n && (u[r] = n), u;
  }, {});
}; var parseLinks = function parseLinks(u) {
  return u.split(/ *, */).reduce(function (u, e) {
    var t = e.split(/ *; */),
        r = t[0].slice(1, -1);return u[t[1].split(/ *= */)[1].slice(1, -1)] = r, u;
  }, {});
}; var cleanHeader = function cleanHeader(u, e) {
  return delete u["content-type"], delete u["content-length"], delete u["transfer-encoding"], delete u.host, e && delete u.cookie, u;
}; var utils$1 = { type: type, params: params, parseLinks: parseLinks, cleanHeader: cleanHeader }; var utils = utils$1; var responseBase = ResponseBase;ResponseBase.prototype.get = function (u) {
  return this.header[u.toLowerCase()];
}, ResponseBase.prototype._setHeaderProperties = function (u) {
  var e = u["content-type"] || "";this.type = utils.type(e);var t = utils.params(e);for (var r in t) {
    this[r] = t[r];
  }this.links = {};try {
    u.link && (this.links = utils.parseLinks(u.link));
  } catch (u) {}
}, ResponseBase.prototype._setStatusProperties = function (u) {
  var e = u / 100 | 0;this.status = this.statusCode = u, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == u, this.noContent = 204 == u, this.badRequest = 400 == u, this.unauthorized = 401 == u, this.notAcceptable = 406 == u, this.forbidden = 403 == u, this.notFound = 404 == u;
};var ERROR_CODES = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"]; var shouldRetry = function shouldRetry(u, e) {
  return !!(u && u.code && ~ERROR_CODES.indexOf(u.code)) || !!(e && e.status && e.status >= 500) || !!(u && "timeout" in u && "ECONNABORTED" == u.code);
}; var client$1 = createCommonjsModule$1(function (u, e) {
  function t() {}function r(u) {
    if (!E(u)) return u;var e = [];for (var t in u) {
      n(e, t, u[t]);
    }return e.join("&");
  }function n(u, e, t) {
    if (null != t) {
      if (Array.isArray(t)) t.forEach(function (t) {
        n(u, e, t);
      });else if (E(t)) for (var r in t) {
        n(u, e + "[" + r + "]", t[r]);
      } else u.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
    } else null === t && u.push(encodeURIComponent(e));
  }function i(u) {
    for (var e, t, r = {}, n = u.split("&"), i = 0, o = n.length; i < o; ++i) {
      e = n[i], t = e.indexOf("="), t == -1 ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, t))] = decodeURIComponent(e.slice(t + 1));
    }return r;
  }function o(u) {
    var e,
        t,
        r,
        n,
        i = u.split(/\r?\n/),
        o = {};i.pop();for (var a = 0, s = i.length; a < s; ++a) {
      t = i[a], e = t.indexOf(":"), r = t.slice(0, e).toLowerCase(), n = F(t.slice(e + 1)), o[r] = n;
    }return o;
  }function a(u) {
    return (/[\/+]json\b/.test(u)
    );
  }function s(u) {
    this.req = u, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;var e = this.xhr.status;1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = o(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && u._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }function c(u, e) {
    var t = this;this._query = this._query || [], this.method = u, this.url = e, this.header = {}, this._header = {}, this.on("end", function () {
      var u = null,
          e = null;try {
        e = new s(t);
      } catch (e) {
        return u = new Error("Parser is unable to parse the response"), u.parse = !0, u.original = e, t.xhr ? (u.rawResponse = void 0 === t.xhr.responseType ? t.xhr.responseText : t.xhr.response, u.status = t.xhr.status ? t.xhr.status : null, u.statusCode = u.status) : (u.rawResponse = null, u.status = null), t.callback(u);
      }t.emit("response", e);var r;try {
        t._isResponseOK(e) || (r = new Error(e.statusText || "Unsuccessful HTTP response"), r.original = u, r.response = e, r.status = e.status);
      } catch (u) {
        r = u;
      }r ? t.callback(r, e) : t.callback(null, e);
    });
  }function l(u, e, t) {
    var r = y("DELETE", u);return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), r;
  }var A;"undefined" != typeof window ? A = window : "undefined" != typeof self ? A = self : (console.warn("Using browser-only version of superagent in non-browser environment"), A = commonjsGlobal$1);var p = index,
      f = requestBase,
      E = isObject_1,
      d = isFunction_1,
      h = responseBase,
      C = shouldRetry,
      y = e = u.exports = function (u, t) {
    return "function" == typeof t ? new e.Request("GET", u).end(t) : 1 == arguments.length ? new e.Request("GET", u) : new e.Request(u, t);
  };e.Request = c, y.getXHR = function () {
    if (!(!A.XMLHttpRequest || A.location && "file:" == A.location.protocol && A.ActiveXObject)) return new XMLHttpRequest();try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (u) {}try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (u) {}try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (u) {}try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (u) {}throw Error("Browser-only verison of superagent could not find XHR");
  };var F = "".trim ? function (u) {
    return u.trim();
  } : function (u) {
    return u.replace(/(^\s*|\s*$)/g, "");
  };y.serializeObject = r, y.parseString = i, y.types = { html: "text/html", json: "application/json", xml: "application/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, y.serialize = { "application/x-www-form-urlencoded": r, "application/json": JSON.stringify }, y.parse = { "application/x-www-form-urlencoded": i, "application/json": JSON.parse }, h(s.prototype), s.prototype._parseBody = function (u) {
    var e = y.parse[this.type];return this.req._parser ? this.req._parser(this, u) : (!e && a(this.type) && (e = y.parse["application/json"]), e && u && (u.length || u instanceof Object) ? e(u) : null);
  }, s.prototype.toError = function () {
    var u = this.req,
        e = u.method,
        t = u.url,
        r = "cannot " + e + " " + t + " (" + this.status + ")",
        n = new Error(r);return n.status = this.status, n.method = e, n.url = t, n;
  }, y.Response = s, p(c.prototype), f(c.prototype), c.prototype.type = function (u) {
    return this.set("Content-Type", y.types[u] || u), this;
  }, c.prototype.accept = function (u) {
    return this.set("Accept", y.types[u] || u), this;
  }, c.prototype.auth = function (u, e, t) {
    switch ("object" === (void 0 === e ? "undefined" : _typeof$1(e)) && null !== e && (t = e), t || (t = { type: "function" == typeof btoa ? "basic" : "auto" }), t.type) {case "basic":
        this.set("Authorization", "Basic " + btoa(u + ":" + e));break;case "auto":
        this.username = u, this.password = e;break;case "bearer":
        this.set("Authorization", "Bearer " + u);}return this;
  }, c.prototype.query = function (u) {
    return "string" != typeof u && (u = r(u)), u && this._query.push(u), this;
  }, c.prototype.attach = function (u, e, t) {
    if (e) {
      if (this._data) throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(u, e, t || e.name);
    }return this;
  }, c.prototype._getFormData = function () {
    return this._formData || (this._formData = new A.FormData()), this._formData;
  }, c.prototype.callback = function (u, e) {
    if (this._maxRetries && this._retries++ < this._maxRetries && C(u, e)) return this._retry();var t = this._callback;this.clearTimeout(), u && (this._maxRetries && (u.retries = this._retries - 1), this.emit("error", u)), t(u, e);
  }, c.prototype.crossDomainError = function () {
    var u = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");u.crossDomain = !0, u.status = this.status, u.method = this.method, u.url = this.url, this.callback(u);
  }, c.prototype.buffer = c.prototype.ca = c.prototype.agent = function () {
    return console.warn("This is not supported in browser version of superagent"), this;
  }, c.prototype.pipe = c.prototype.write = function () {
    throw Error("Streaming is not supported in browser version of superagent");
  }, c.prototype._appendQueryString = function () {
    var u = this._query.join("&");if (u && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + u), this._sort) {
      var e = this.url.indexOf("?");if (e >= 0) {
        var t = this.url.substring(e + 1).split("&");d(this._sort) ? t.sort(this._sort) : t.sort(), this.url = this.url.substring(0, e) + "?" + t.join("&");
      }
    }
  }, c.prototype._isHost = function (u) {
    return u && "object" === (void 0 === u ? "undefined" : _typeof$1(u)) && !Array.isArray(u) && "[object Object]" !== Object.prototype.toString.call(u);
  }, c.prototype.end = function (u) {
    return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = u || t, this._appendQueryString(), this._end();
  }, c.prototype._end = function () {
    var u = this,
        e = this.xhr = y.getXHR(),
        t = this._formData || this._data;this._setTimeouts(), e.onreadystatechange = function () {
      var t = e.readyState;if (t >= 2 && u._responseTimeoutTimer && clearTimeout(u._responseTimeoutTimer), 4 == t) {
        var r;try {
          r = e.status;
        } catch (u) {
          r = 0;
        }if (!r) {
          if (u.timedout || u._aborted) return;return u.crossDomainError();
        }u.emit("end");
      }
    };var r = function r(e, t) {
      t.total > 0 && (t.percent = t.loaded / t.total * 100), t.direction = e, u.emit("progress", t);
    };if (this.hasListeners("progress")) try {
      e.onprogress = r.bind(null, "download"), e.upload && (e.upload.onprogress = r.bind(null, "upload"));
    } catch (u) {}try {
      this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0);
    } catch (u) {
      return this.callback(u);
    }if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof t && !this._isHost(t)) {
      var n = this._header["content-type"],
          i = this._serializer || y.serialize[n ? n.split(";")[0] : ""];!i && a(n) && (i = y.serialize["application/json"]), i && (t = i(t));
    }for (var o in this.header) {
      null != this.header[o] && e.setRequestHeader(o, this.header[o]);
    }return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 !== t ? t : null), this;
  }, y.get = function (u, e, t) {
    var r = y("GET", u);return "function" == typeof e && (t = e, e = null), e && r.query(e), t && r.end(t), r;
  }, y.head = function (u, e, t) {
    var r = y("HEAD", u);return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), r;
  }, y.options = function (u, e, t) {
    var r = y("OPTIONS", u);return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), r;
  }, y.del = l, y.delete = l, y.patch = function (u, e, t) {
    var r = y("PATCH", u);return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), r;
  }, y.post = function (u, e, t) {
    var r = y("POST", u);return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), r;
  }, y.put = function (u, e, t) {
    var r = y("PUT", u);return "function" == typeof e && (t = e, e = null), e && r.send(e), t && r.end(t), r;
  };
}); var isFunction$2 = function isFunction$2(u) {
  return "function" == typeof u;
}; var isNil$1 = function isNil$1(u) {
  return null === u || void 0 === u;
}; var fail$1 = function fail$1(u) {
  throw new TypeError("[tcomb] " + u);
}; var getFunctionName$1 = function getFunctionName$1(u) {
  return u.displayName || u.name || "<function" + u.length + ">";
}; var getFunctionName = getFunctionName$1; var stringify$2 = function stringify$2(u) {
  try {
    return JSON.stringify(u, replacer, 2);
  } catch (e) {
    return String(u);
  }
}; var isFunction$1 = isFunction$2; var isNil = isNil$1; var fail = fail$1; var stringify$1 = stringify$2;assert.fail = fail, assert.stringify = stringify$1;var assert_1 = assert; var global$1$1 = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}; var cachedSetTimeout = defaultSetTimout; var cachedClearTimeout = defaultClearTimeout;"function" == typeof global$1$1.setTimeout && (cachedSetTimeout = setTimeout), "function" == typeof global$1$1.clearTimeout && (cachedClearTimeout = clearTimeout);var currentQueue; var queue = []; var draining = !1; var queueIndex = -1; var performance = global$1$1.performance || {}; var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
}; var isString$1 = function isString$1(u) {
  return "string" == typeof u;
}; var isArray$1 = function isArray$1(u) {
  return Array.isArray ? Array.isArray(u) : u instanceof Array;
}; var isNil$3 = isNil$1; var isArray = isArray$1; var isObject$4 = function isObject$4(u) {
  return !isNil$3(u) && "object" === (void 0 === u ? "undefined" : _typeof$1(u)) && !isArray(u);
}; var isFunction$5 = isFunction$2; var isObject$3$1 = isObject$4; var isType$1 = function isType$1(u) {
  return isFunction$5(u) && isObject$3$1(u.meta);
}; var isType = isType$1; var getFunctionName$3 = getFunctionName$1; var getTypeName$1 = function getTypeName$1(u) {
  return isType(u) ? u.displayName : getFunctionName$3(u);
}; var irreducible$1 = function irreducible$1(u, e) {
  function t(u, e) {
    return u;
  }return t.meta = { kind: "irreducible", name: u, predicate: e, identity: !0 }, t.displayName = u, t.is = e, t;
}; var irreducible = irreducible$1; var Any = irreducible("Any", function () {
  return !0;
}); var irreducible$3 = irreducible$1; var isArray$3 = isArray$1; var _Array = irreducible$3("Array", isArray$3); var isBoolean$1 = function isBoolean$1(u) {
  return u === !0 || u === !1;
}; var irreducible$4 = irreducible$1; var isBoolean = isBoolean$1; var _Boolean = irreducible$4("Boolean", isBoolean); var irreducible$5 = irreducible$1; var _Date = irreducible$5("Date", function (u) {
  return u instanceof Date;
}); var irreducible$6 = irreducible$1; var _Error = irreducible$6("Error", function (u) {
  return u instanceof Error;
}); var irreducible$7 = irreducible$1; var isFunction$6 = isFunction$2; var _Function = irreducible$7("Function", isFunction$6); var irreducible$8 = irreducible$1; var isNil$4 = isNil$1; var Nil = irreducible$8("Nil", isNil$4); var isNumber$1 = function isNumber$1(u) {
  return "number" == typeof u && isFinite(u) && !isNaN(u);
}; var irreducible$9 = irreducible$1; var isNumber = isNumber$1; var _Number = irreducible$9("Number", isNumber); var isType$3 = isType$1; var isIdentity$1 = function isIdentity$1(u) {
  return !isType$3(u) || u.meta.identity;
}; var isType$4 = isType$1; var create$1 = function create$1(u, e, t) {
  return isType$4(u) ? u.meta.identity || "object" !== (void 0 === e ? "undefined" : _typeof$1(e)) || null === e ? u(e, t) : new u(e, t) : e;
}; var isType$5 = isType$1; var is$1 = function is$1(u, e) {
  return isType$5(e) ? e.is(u) : u instanceof e;
}; var assert$3 = assert_1; var isIdentity = isIdentity$1; var create = create$1; var is$1$1 = is$1; var getTypeName$3 = getTypeName$1; var getFunctionName$4 = getFunctionName$1;refinement$1.getDefaultName = getDefaultName;var refinement_1 = refinement$1; var refinement = refinement_1; var Number$1 = _Number; var Integer = refinement(Number$1, function (u) {
  return u % 1 == 0;
}, "Integer"); var irreducible$10 = irreducible$1; var isObject$6 = isObject$4; var _Object = irreducible$10("Object", isObject$6); var irreducible$11 = irreducible$1; var _RegExp = irreducible$11("RegExp", function (u) {
  return u instanceof RegExp;
}); var irreducible$12 = irreducible$1; var isString$4 = isString$1; var _String = irreducible$12("String", isString$4); var irreducible$13 = irreducible$1; var isType$6 = isType$1; var Type = irreducible$13("Type", isType$6); var assert$6 = assert_1; var getTypeName$5 = getTypeName$1; var isIdentity$3 = isIdentity$1; var isObject$7 = isObject$4; var create$3 = create$1; var is$3 = is$1;dict.getDefaultName = getDefaultName$1;var dict_1 = dict; var isNil$7 = isNil$1; var mixin$3 = function mixin$3(u, e, t) {
  if (isNil$7(e)) return u;for (var r in e) {
    e.hasOwnProperty(r) && (u[r] = e[r]);
  }return u;
}; var isType$8 = isType$1; var isUnion$1 = function isUnion$1(u) {
  return isType$8(u) && "union" === u.meta.kind;
}; var mixin$2 = mixin$3; var getTypeName$6 = getTypeName$1; var isUnion = isUnion$1; var nextDeclareUniqueId = 1; var declare = function declare(u) {
  function e(u, e) {
    return t(u, e);
  }var t;return e.define = function (r) {
    return isUnion(r) && e.hasOwnProperty("dispatch") && (r.dispatch = e.dispatch), t = r, mixin$2(e, t, !0), u && (t.displayName = e.displayName = u, e.meta.name = u), e.meta.identity = t.meta.identity, e.prototype = t.prototype, e;
  }, e.displayName = u || getTypeName$6(e) + "$" + nextDeclareUniqueId++, e.meta = { identity: !1 }, e.prototype = null, e;
}; var assert$9 = assert_1; var isString$5 = isString$1;enums.of = function (u, e) {
  u = isString$5(u) ? u.split(" ") : u;var t = {};return u.forEach(function (u) {
    t[u] = u;
  }), enums(t, e);
}, enums.getDefaultName = getDefaultName$2;var enums_1 = enums; var assert$10 = assert_1; var getTypeName$7 = getTypeName$1; var isIdentity$4 = isIdentity$1; var create$4 = create$1; var is$4 = is$1; var isArray$4 = isArray$1;list.getDefaultName = getDefaultName$3;var list_1 = list; var isType$9 = isType$1; var isMaybe$1 = function isMaybe$1(u) {
  return isType$9(u) && "maybe" === u.meta.kind;
}; var isMaybe = isMaybe$1; var isIdentity$5 = isIdentity$1; var Any$2 = Any; var create$5 = create$1; var Nil$2 = Nil; var is$5 = is$1; var getTypeName$8 = getTypeName$1;maybe.getDefaultName = getDefaultName$4;var maybe_1 = maybe; var getTypeName$10 = getTypeName$1; var getDefaultInterfaceName_1 = getDefaultInterfaceName$1; var isType$12 = isType$1; var decompose_1 = decompose$1; var mixin$5 = mixin$3; var isObject$10 = isObject$4; var refinement$2 = refinement_1; var decompose = decompose_1; var extend_1 = extend$1; var assert$12 = assert_1; var isObject$9 = isObject$4; var isNil$8 = isNil$1; var create$6 = create$1; var getDefaultInterfaceName = getDefaultInterfaceName_1; var extend = extend_1;struct.strict = !1, struct.getOptions = getOptions, struct.getDefaultName = getDefaultName$5, struct.extend = extendStruct;var struct_1 = struct; var assert$14 = assert_1; var getTypeName$11 = getTypeName$1; var isIdentity$6 = isIdentity$1; var isArray$6 = isArray$1; var create$7 = create$1; var is$6 = is$1;tuple.getDefaultName = getDefaultName$6;var tuple_1 = tuple; var assert$15 = assert_1; var getTypeName$12 = getTypeName$1; var isIdentity$7 = isIdentity$1; var create$8 = create$1; var is$7 = is$1; var isUnion$3 = isUnion$1; var isNil$9 = isNil$1;union.getDefaultName = getDefaultName$7;var union_1 = union; var FunctionType = _Function; var isArray$8 = isArray$1; var isObject$11 = isObject$4; var create$9 = create$1; var getFunctionName$6 = getFunctionName$1; var getTypeName$13 = getTypeName$1; var isType$13 = isType$1;func.getDefaultName = getDefaultName$8, func.getOptionalArgumentsIndex = getOptionalArgumentsIndex;var func_1 = func; var assert$17 = assert_1; var is$8 = is$1; var getTypeName$14 = getTypeName$1; var isIdentity$8 = isIdentity$1;intersection.getDefaultName = getDefaultName$9;var intersection_1 = intersection; var assign_1 = assign$1$1; var assert$18 = assert_1; var isObject$12 = isObject$4; var isNil$11 = isNil$1; var create$10 = create$1; var getDefaultInterfaceName$2 = getDefaultInterfaceName_1; var isIdentity$9 = isIdentity$1; var is$9 = is$1; var extend$2 = extend_1; var assign$2 = assign_1;inter.strict = !1, inter.getOptions = getOptions$1, inter.getDefaultName = getDefaultInterfaceName$2, inter.extend = extendInterface;var _interface = inter; var isObject$13 = isObject$4; var isArray$10 = isArray$1; var assign$2$1 = assign_1;update.commands = { $apply: $apply, $push: $push, $remove: $remove, $set: $set, $splice: $splice, $swap: $swap, $unshift: $unshift, $merge: $merge };var update_1 = update; var assert$20 = assert_1; var isFunction$16 = isFunction$2; var isType$14 = isType$1; var Any$3 = Any; var match = function match(u) {
  for (var e, t, r, n = 1, i = arguments.length; n < i;) {
    if (e = arguments[n], t = arguments[n + 1], r = arguments[n + 2], isFunction$16(r) && !isType$14(r) ? n += 3 : (r = t, t = Any$3.is, n += 2), e.is(u) && t(u)) return r(u);
  }assert$20.fail("Match error");
}; var t$2 = assert_1;t$2.Any = Any, t$2.Array = _Array, t$2.Boolean = _Boolean, t$2.Date = _Date, t$2.Error = _Error, t$2.Function = _Function, t$2.Nil = Nil, t$2.Number = _Number, t$2.Integer = Integer, t$2.IntegerT = t$2.Integer, t$2.Object = _Object, t$2.RegExp = _RegExp, t$2.String = _String, t$2.Type = Type, t$2.TypeT = t$2.Type, t$2.Arr = t$2.Array, t$2.Bool = t$2.Boolean, t$2.Dat = t$2.Date, t$2.Err = t$2.Error, t$2.Func = t$2.Function, t$2.Num = t$2.Number, t$2.Obj = t$2.Object, t$2.Re = t$2.RegExp, t$2.Str = t$2.String, t$2.dict = dict_1, t$2.declare = declare, t$2.enums = enums_1, t$2.irreducible = irreducible$1, t$2.list = list_1, t$2.maybe = maybe_1, t$2.refinement = refinement_1, t$2.struct = struct_1, t$2.tuple = tuple_1, t$2.union = union_1, t$2.func = func_1, t$2.intersection = intersection_1, t$2.subtype = t$2.refinement, t$2.inter = _interface, t$2.interface = t$2.inter, t$2.assert = t$2, t$2.update = update_1, t$2.mixin = mixin$3, t$2.isType = isType$1, t$2.is = is$1, t$2.getTypeName = getTypeName$1, t$2.match = match;var index$3 = t$2; var t = index$3; var stringify = t.stringify; var noobj = {}; var ValidationError = t.struct({ message: t.Any, actual: t.Any, expected: t.Any, path: t.list(t.union([t.String, t.Number])) }, "ValidationError");ValidationError.of = function (u, e, t, r) {
  return new ValidationError({ message: getValidationErrorMessage(u, e, t, r), actual: u, expected: e, path: t });
};var ValidationResult = t.struct({ errors: t.list(ValidationError), value: t.Any }, "ValidationResult");ValidationResult.prototype.isValid = function () {
  return !this.errors.length;
}, ValidationResult.prototype.firstError = function () {
  return this.isValid() ? null : this.errors[0];
}, ValidationResult.prototype.toString = function () {
  return this.isValid() ? "[ValidationResult, true, " + stringify(this.value) + "]" : "[ValidationResult, false, (" + this.errors.map(function (u) {
    return stringify(u.message);
  }).join(", ") + ")]";
};var validators = validate.validators = {};validators.es6classes = function (u, e, t, r) {
  return { value: u, errors: u instanceof e ? [] : [ValidationError.of(u, e, t, r.context)] };
}, validators.irreducible = validators.enums = function (u, e, t, r) {
  return { value: u, errors: e.is(u) ? [] : [ValidationError.of(u, e, t, r.context)] };
}, validators.list = function (u, e, r, n) {
  if (!t.Array.is(u)) return { value: u, errors: [ValidationError.of(u, e, r, n.context)] };for (var i = { value: [], errors: [] }, o = 0, a = u.length; o < a; o++) {
    var s = recurse(u[o], e.meta.type, r.concat(o), n);i.value[o] = s.value, i.errors = i.errors.concat(s.errors);
  }return i;
}, validators.subtype = function (u, e, t, r) {
  var n = recurse(u, e.meta.type, t, r);return n.errors.length ? n : (e.meta.predicate(n.value) || (n.errors = [ValidationError.of(u, e, t, r.context)]), n);
}, validators.maybe = function (u, e, r, n) {
  return t.Nil.is(u) ? { value: u, errors: [] } : recurse(u, e.meta.type, r, n);
}, validators.struct = function (u, e, r, n) {
  if (!t.Object.is(u)) return { value: u, errors: [ValidationError.of(u, e, r, n.context)] };if (e.is(u)) return { value: u, errors: [] };var i = { value: {}, errors: [] },
      o = e.meta.props,
      a = e.meta.defaultProps || noobj;for (var s in o) {
    if (o.hasOwnProperty(s)) {
      var c = u[s];void 0 === c && (c = a[s]);var l = recurse(c, o[s], r.concat(s), n);i.value[s] = l.value, i.errors = i.errors.concat(l.errors);
    }
  }if (n.hasOwnProperty("strict") ? n.strict : e.meta.strict) for (var A in u) {
    u.hasOwnProperty(A) && !o.hasOwnProperty(A) && i.errors.push(ValidationError.of(u[A], t.Nil, r.concat(A), n.context));
  }return i.errors.length || (i.value = new e(i.value)), i;
}, validators.tuple = function (u, e, r, n) {
  var i = e.meta.types,
      o = i.length;if (!t.Array.is(u) || u.length > o) return { value: u, errors: [ValidationError.of(u, e, r, n.context)] };for (var a = { value: [], errors: [] }, s = 0; s < o; s++) {
    var c = recurse(u[s], i[s], r.concat(s), n);a.value[s] = c.value, a.errors = a.errors.concat(c.errors);
  }return a;
}, validators.dict = function (u, e, r, n) {
  if (!t.Object.is(u)) return { value: u, errors: [ValidationError.of(u, e, r, n.context)] };var i = { value: {}, errors: [] };for (var o in u) {
    if (u.hasOwnProperty(o)) {
      var a = r.concat(o),
          s = recurse(o, e.meta.domain, a, n),
          c = recurse(u[o], e.meta.codomain, a, n);i.value[o] = c.value, i.errors = i.errors.concat(s.errors, c.errors);
    }
  }return i;
}, validators.union = function (u, e, r, n) {
  var i = e.dispatch(u);return t.Function.is(i) ? recurse(u, i, r.concat(e.meta.types.indexOf(i)), n) : { value: u, errors: [ValidationError.of(u, e, r, n.context)] };
}, validators.intersection = function (u, e, t, r) {
  for (var n = e.meta.types, i = n.length, o = { value: u, errors: [] }, a = 0, s = 0; s < i; s++) {
    "struct" === n[s].meta.kind && a++;var c = recurse(u, n[s], t, r);o.errors = o.errors.concat(c.errors);
  }return a > 1 && o.errors.push(ValidationError.of(u, e, t, r.context)), o;
}, validators.interface = function (u, e, r, n) {
  if (!t.Object.is(u)) return { value: u, errors: [ValidationError.of(u, e, r, n.context)] };var i = { value: {}, errors: [] },
      o = e.meta.props;for (var a in o) {
    var s = recurse(u[a], o[a], r.concat(a), n);i.value[a] = s.value, i.errors = i.errors.concat(s.errors);
  }if (n.hasOwnProperty("strict") ? n.strict : e.meta.strict) for (var c in u) {
    o.hasOwnProperty(c) || t.Nil.is(u[c]) || i.errors.push(ValidationError.of(u[c], t.Nil, r.concat(c), n.context));
  }return i;
}, t.mixin(t, { ValidationError: ValidationError, ValidationResult: ValidationResult, validate: validate });var index$2 = t; var LANGUAGES = { tr: { regexp: /\u0130|\u0049|\u0049\u0307/g, map: { "İ": "i", I: "ı", "İ": "i" } }, az: { regexp: /[\u0130]/g, map: { "İ": "i", I: "ı", "İ": "i" } }, lt: { regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g, map: { I: "i̇", J: "j̇", "Į": "į̇", "Ì": "i̇̀", "Í": "i̇́", "Ĩ": "i̇̃" } } }; var lowerCase$1 = function lowerCase$1(u, e) {
  var t = LANGUAGES[e];return u = null == u ? "" : String(u), t && (u = u.replace(t.regexp, function (u) {
    return t.map[u];
  })), u.toLowerCase();
}; var nonWordRegexp = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g; var camelCaseRegexp = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g; var camelCaseUpperRegexp = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]+)([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g; var lowerCase = lowerCase$1; var NON_WORD_REGEXP = nonWordRegexp; var CAMEL_CASE_REGEXP = camelCaseRegexp; var CAMEL_CASE_UPPER_REGEXP = camelCaseUpperRegexp; var noCase$1 = function noCase$1(u, e, t) {
  function r(u, e, r) {
    return 0 === e || e === r.length - u.length ? "" : t;
  }return null == u ? "" : (t = "string" != typeof t ? " " : t, u = String(u).replace(CAMEL_CASE_REGEXP, "$1 $2").replace(CAMEL_CASE_UPPER_REGEXP, "$1 $2").replace(NON_WORD_REGEXP, r), lowerCase(u, e));
}; var noCase = noCase$1; var snakeCase = function snakeCase(u, e) {
  return noCase(u, e, "_");
}; var validate$1 = index$2.validate; var checkOptions = function checkOptions(u, e, t) {
  var r = Object.keys(t),
      n = e.map(function (u) {
    return u.name;
  }),
      i = n.join(", ");return r.forEach(function (e) {
    if (n.indexOf(e) < 0) throw new Error(e + " is not a valid option for " + u + ". Valid options are: " + i);
  }), e.forEach(function (u) {
    var e = t[u.name];if ("location" === u.name && "string" == typeof e && (e = e.toLowerCase()), e) {
      var r = validate$1(e, u.type);if (!r.isValid()) throw new Error(r.firstError().message);
    }
  }), r;
}; var removeEmpty = function removeEmpty(u) {
  var e = Object.assign({}, u);return Object.keys(e).forEach(function (u) {
    return !e[u] && void 0 !== e[u] && delete e[u];
  }), e;
}; var snakeKeys = function snakeKeys(u) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      t = Object.assign({}, u);return Object.keys(t).reduce(function (u, r) {
    return u[snakeCase(e + "-" + r)] = t[r], delete t[r], u;
  }, {});
}; var storeApiUrl = ENV.storeApiUrl; var _storeURL = function _storeURL(u, e) {
  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if (!e || "string" != typeof e) throw new Error("url is required for store");checkOptions("store", [{ name: "filename", type: index$2.String }, { name: "location", type: index$2.enums.of("s3 gcs rackspace azure dropbox") }, { name: "mimetype", type: index$2.String }, { name: "path", type: index$2.String }, { name: "region", type: index$2.String }, { name: "container", type: index$2.String }, { name: "access", type: index$2.enums.of("public private") }, { name: "base64decode", type: index$2.Boolean }], t);var r = t.location || "s3",
      n = removeEmpty(t);u.policy && u.signature && (n.policy = u.policy, n.signature = u.signature);var i = storeApiUrl + "/" + r;return new Promise(function (t, r) {
    client$1.post(i).query({ key: u.apikey }).query(n).send("url=" + e).end(function (u, e) {
      u ? r(u) : t(e.body);
    });
  });
}; var fileApiUrl = ENV.fileApiUrl; var _retrieve = function _retrieve(u, e) {
  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if (!e || "string" != typeof e) throw new Error("handle is required for retrieve");checkOptions("retrieve", [{ name: "metadata", type: index$2.Boolean }, { name: "head", type: index$2.Boolean }, { name: "cache", type: index$2.Boolean }, { name: "dl", type: index$2.Boolean }, { name: "extension", type: index$2.String }], t);var r = fileApiUrl + "/" + e,
      n = removeEmpty(t);return n.extension && (r += "+" + n.extension, delete n.extension), n.metadata && (r += "/metadata"), u.policy && u.signature && (n.policy = u.policy, n.signature = u.signature), n.head ? (delete n.head, new Promise(function (u, e) {
    client$1.head(r).query(n).end(function (t, r) {
      t ? e(t) : u(r.headers);
    });
  })) : new Promise(function (u, e) {
    var t = n.metadata ? "json" : "blob";delete n.metadata, client$1.get(r).query(n).responseType(t).end(function (t, r) {
      t ? e(t) : u(r.body);
    });
  });
}; var _remove = function _remove(u, e) {
  if (!e || "string" != typeof e) throw new Error("handle is required for remove");if (!u.policy || !u.signature) throw new Error("security policy and signature are required for remove");var t = fileApiUrl + "/" + e;return new Promise(function (e, r) {
    client$1.delete(t).query({ key: u.apikey }).query({ policy: u.policy, signature: u.signature }).end(function (u, t) {
      u ? r(u) : e(t.body);
    });
  });
}; var _metadata = function _metadata(u, e) {
  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if (!e || "string" != typeof e) throw new Error("handle is required for metadata");checkOptions("retrieve", [{ name: "size", type: index$2.Boolean }, { name: "mimetype", type: index$2.Boolean }, { name: "filename", type: index$2.Boolean }, { name: "width", type: index$2.Boolean }, { name: "height", type: index$2.Boolean }, { name: "uploaded", type: index$2.Boolean }, { name: "writeable", type: index$2.Boolean }, { name: "cloud", type: index$2.Boolean }, { name: "sourceUrl", type: index$2.Boolean }, { name: "md5", type: index$2.Boolean }, { name: "sha1", type: index$2.Boolean }, { name: "sha224", type: index$2.Boolean }, { name: "sha256", type: index$2.Boolean }, { name: "sha384", type: index$2.Boolean }, { name: "sha512", type: index$2.Boolean }, { name: "location", type: index$2.Boolean }, { name: "path", type: index$2.Boolean }, { name: "container", type: index$2.Boolean }, { name: "exif", type: index$2.Boolean }], t);var r = removeEmpty(snakeKeys(t));u.policy && u.signature && (r.policy = u.policy, r.signature = u.signature);var n = fileApiUrl + "/" + e + "/metadata";return new Promise(function (u, e) {
    client$1.get(n).query(r).end(function (t, r) {
      t ? e(t) : u(r.body);
    });
  });
}; var onOff = { init: function init() {
    window.filestackInternals.logger.working = !1;
  }, isWorking: function isWorking() {
    return window.filestackInternals.logger.working;
  }, on: function on() {
    window.filestackInternals.logger.working = !0;
  }, off: function off() {
    window.filestackInternals.logger.working = !1;
  } }; var context = function u(e, t) {
  var r = function r() {
    for (var u = arguments.length, r = Array(u), n = 0; n < u; n++) {
      r[n] = arguments[n];
    }var i = [].concat(r).map(function (u) {
      return "object" === (void 0 === u ? "undefined" : _typeof$1(u)) ? JSON.stringify(u, function (u, e) {
        if ("function" == typeof e) {
          if ("json" === u) try {
            return e();
          } catch (u) {}return "[Function]";
        }return e instanceof File ? "[File name: " + e.name + ", mimetype: " + e.type + ", size: " + e.size + "]" : e;
      }, 2) : u;
    });if (t.isWorking()) {
      var o;(o = console).log.apply(o, ["[" + e + "]"].concat(toConsumableArray$1(i)));
    }
  };return r.context = function (r) {
    return u(e + "][" + r, t);
  }, r.on = t.on, r.off = t.off, r;
}; var logger = context("filestack", onOff);!function () {
  var u = void 0;"object" === ("undefined" == typeof window ? "undefined" : _typeof$1(window)) && (u = window.filestackInternals, u || (u = {}, window.filestackInternals = u), u.logger || (u.logger = logger, onOff.init())), u;
}();var log = logger.context("api-client"); var cloudApiUrl = ENV.cloudApiUrl; var _cloud = function _cloud(u, e, t) {
  var r = { apikey: u.apikey };return e && e.policy && e.signature && (r.policy = e.policy, r.signature = e.signature), { name: t, list: function list(u) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};return log("cloud.list() called:", u), new Promise(function (n, i) {
        var o = client$1.get(cloudApiUrl + "/" + t + "/folder/list" + u).query(r).withCredentials().end(function (u, e) {
          u ? i(u) : (log("cloud.list() responded:", e.body), n(e.body));
        });e.cancel = function () {
          o.abort(), i(new Error("Cancelled"));
        };
      });
    }, store: function store(u) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};log("cloud.store() called:", u, e), checkOptions("cloud.store", [{ name: "location", type: index$2.enums.of("s3 gcs rackspace azure dropbox") }, { name: "region", type: index$2.String }, { name: "path", type: index$2.String }, { name: "container", type: index$2.String }, { name: "access", type: index$2.enums.of("public private") }], e);var i = snakeKeys(e, "store");return new Promise(function (e, o) {
        var a = client$1.get(cloudApiUrl + "/" + t + "/store" + u).query(r).query(removeEmpty(i)).withCredentials().end(function (u, t) {
          u ? o(u) : (log("cloud.store() responded:", t.body), e(t.body));
        });n.cancel = function () {
          a.abort(), o(new Error("Cancelled"));
        };
      });
    }, link: function link(u) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};return log("cloud.link() called:", u), new Promise(function (n, i) {
        var o = client$1.get(cloudApiUrl + "/" + t + "/link" + u).query(r).withCredentials().end(function (u, e) {
          u ? i(u) : (log("cloud.link() responded:", e.body), n(e.body));
        });e.cancel = function () {
          o.abort(), i(new Error("Cancelled"));
        };
      });
    }, logout: function logout(e) {
      log("cloud.logout() called:", e);var t = e ? cloudApiUrl + "/" + e : cloudApiUrl;return new Promise(function (e, r) {
        client$1.get(t + "/auth/logout").query({ apikey: u.apikey }).withCredentials().end(function (u, t) {
          u ? r(u) : (log("cloud.logout() responded:", t.body), e(t.body));
        });
      });
    } };
}; var processURL = ENV.processApiUrl; var numberRange = function numberRange(u, e) {
  return index$2.refinement(index$2.Number, function (t) {
    return t >= u && t <= e;
  });
}; var min$2 = function min(u) {
  return index$2.refinement(index$2.Integer, function (e) {
    return e >= u;
  });
}; var max$1 = function max(u) {
  return index$2.refinement(index$2.Integer, function (e) {
    return e <= u;
  });
}; var range = function range(u, e) {
  return index$2.tuple([min$2(u), max$1(e)], "range");
}; var alignment = index$2.enums.of("top left right bottom"); var alignPair = index$2.refinement(index$2.tuple([alignment, alignment]), function (u) {
  return u[0] !== u[1];
}, "pair"); var formatOption = function formatOption(u, e) {
  var t = snakeCase(u.name),
      r = e[u.name];return Array.isArray(r) ? t + ":[" + r + "]" : r ? t + ":" + r : null;
}; var formatOptions = function formatOptions(u, e, t) {
  var r = e.map(function (u) {
    return formatOption(u, t);
  }).filter(function (u) {
    return u;
  }).join(","),
      n = snakeCase(u);return r.length ? n + "=" + r : n;
}; var sepia = function sepia() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "tone", type: numberRange(0, 100) }];checkOptions("sepia", t, e);var r = formatOptions("sepia", t, e);return u.concat(r);
}; var blackwhite = function blackwhite() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "threshold", type: numberRange(0, 100) }];checkOptions("blackwhite", t, e);var r = formatOptions("blackwhite", t, e);return u.concat(r);
}; var border = function border() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "width", type: numberRange(1, 1e3) }, { name: "color", type: index$2.String }, { name: "background", type: index$2.String }];checkOptions("border", t, e);var r = formatOptions("border", t, e);return u.concat(r);
}; var circle = function circle() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "background", type: index$2.String }];checkOptions("circle", t, e);var r = formatOptions("circle", t, e);return u.concat(r);
}; var shadow = function shadow() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "blur", type: numberRange(0, 20) }, { name: "opacity", type: numberRange(0, 100) }, { name: "vector", type: range(-1e3, 1e3) }, { name: "color", type: index$2.String }, { name: "background", type: index$2.String }];checkOptions("shadow", t, e);var r = formatOptions("shadow", t, e);return u.concat(r);
}; var tornEdges = function tornEdges() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "spread", type: range(1, 1e4) }, { name: "background", type: index$2.String }];checkOptions("tornEdges", t, e);var r = formatOptions("tornEdges", t, e);return u.concat(r);
}; var polaroid = function polaroid() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "color", type: index$2.String }, { name: "rotate", type: numberRange(0, 359) }, { name: "background", type: index$2.String }];checkOptions("polaroid", t, e);var r = formatOptions("polaroid", t, e);return u.concat(r);
}; var vignette = function vignette() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "amount", type: numberRange(0, 100) }, { name: "blurmode", type: index$2.enums.of("linear gaussian") }, { name: "background", type: index$2.String }];checkOptions("vignette", t, e);var r = formatOptions("vignette", t, e);return u.concat(r);
}; var roundedCorners = function roundedCorners() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "radius", type: index$2.union([numberRange(1, 1e4), index$2.enums.of("max")]) }, { name: "blur", type: numberRange(0, 20) }, { name: "background", type: index$2.String }];checkOptions("roundedCorners", t, e);var r = formatOptions("roundedCorners", t, e);return u.concat(r);
}; var rotate = function rotate() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "deg", type: index$2.union([numberRange(0, 359), index$2.enums.of("exif")]) }, { name: "exif", type: index$2.Boolean }, { name: "background", type: index$2.String }];if (checkOptions("rotate", t, e).length < 1) throw new Error("Rotate options must contain either deg or exif");var r = formatOptions("rotate", t, e);return u.concat(r);
}; var resize = function resize() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1],
      t = [{ name: "width", type: numberRange(0, 1e4) }, { name: "height", type: numberRange(0, 1e4) }, { name: "fit", type: index$2.enums.of("clip crop scale max") }, { name: "align", type: index$2.union([index$2.enums.of("center top bottom left right faces"), alignPair]) }];if (checkOptions("resize", t, e).length < 1) throw new Error("Resize options must contain either width, height, fit, or align");var r = formatOptions("resize", t, e);return u.concat(r);
}; var flip = function flip() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1];if ("boolean" != typeof e) throw Error("flip must be a Boolean value");return e ? u.concat("flip") : u;
}; var flop = function flop() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1];if ("boolean" != typeof e) throw Error("flop must be a Boolean value");return e ? u.concat("flop") : u;
}; var monochrome = function monochrome() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1];if ("boolean" != typeof e) throw Error("monochrome must be a Boolean value");return e ? u.concat("monochrome") : u;
}; var crop = function crop() {
  var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments[1];checkOptions("crop", [{ name: "dim", type: index$2.struct({ x: index$2.Integer, y: index$2.Integer, width: index$2.Integer, height: index$2.Integer }) }], e);var t = e.dim,
      r = "crop=dim:[" + t.x + "," + t.y + "," + t.width + "," + t.height + "]";return u.concat(r);
}; var transformers = { crop: crop, resize: resize, rotate: rotate, roundedCorners: roundedCorners, vignette: vignette, polaroid: polaroid, tornEdges: tornEdges, shadow: shadow, circle: circle, border: border, flip: flip, flop: flop, blackwhite: blackwhite, monochrome: monochrome, sepia: sepia }; var _transform = function _transform(u, e, t) {
  var r = Object.keys(transformers),
      n = Object.keys(t);n.forEach(function (u) {
    if (r.indexOf(u) < 0) throw new Error("Invalid option specified: " + u + " is not a valid transform option.");
  });var i = function u() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;if (r === n.length) return e;var i = n[r],
        o = t[i],
        a = transformers[i],
        s = r + 1;return u(a(e, o), s);
  };if (u.policy && u.signature) {
    var o = "security=policy:" + u.policy + ",signature:" + u.signature;return processURL + "/" + u.apikey + "/" + o + "/" + i().join("/") + "/" + e;
  }return processURL + "/" + u.apikey + "/" + i().join("/") + "/" + e;
}; var sparkMd5 = createCommonjsModule$1(function (u, e) {
  !function (e) {
    u.exports = function (u) {
      "use strict";
      function e(u, e) {
        var t = u[0],
            r = u[1],
            n = u[2],
            i = u[3];t += (r & n | ~r & i) + e[0] - 680876936 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[1] - 389564586 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[2] + 606105819 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[3] - 1044525330 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & n | ~r & i) + e[4] - 176418897 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[5] + 1200080426 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[6] - 1473231341 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[7] - 45705983 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & n | ~r & i) + e[8] + 1770035416 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[9] - 1958414417 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[10] - 42063 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[11] - 1990404162 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & n | ~r & i) + e[12] + 1804603682 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[13] - 40341101 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[14] - 1502002290 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[15] + 1236535329 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & i | n & ~i) + e[1] - 165796510 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[6] - 1069501632 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[11] + 643717713 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[0] - 373897302 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r & i | n & ~i) + e[5] - 701558691 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[10] + 38016083 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[15] - 660478335 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[4] - 405537848 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r & i | n & ~i) + e[9] + 568446438 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[14] - 1019803690 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[3] - 187363961 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[8] + 1163531501 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r & i | n & ~i) + e[13] - 1444681467 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[2] - 51403784 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[7] + 1735328473 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[12] - 1926607734 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r ^ n ^ i) + e[5] - 378558 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[8] - 2022574463 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[11] + 1839030562 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[14] - 35309556 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (r ^ n ^ i) + e[1] - 1530992060 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[4] + 1272893353 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[7] - 155497632 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[10] - 1094730640 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (r ^ n ^ i) + e[13] + 681279174 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[0] - 358537222 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[3] - 722521979 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[6] + 76029189 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (r ^ n ^ i) + e[9] - 640364487 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[12] - 421815835 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[15] + 530742520 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[2] - 995338651 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (n ^ (r | ~i)) + e[0] - 198630844 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[7] + 1126891415 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[14] - 1416354905 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[5] - 57434055 | 0, r = (r << 21 | r >>> 11) + n | 0, t += (n ^ (r | ~i)) + e[12] + 1700485571 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[3] - 1894986606 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[10] - 1051523 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[1] - 2054922799 | 0, r = (r << 21 | r >>> 11) + n | 0, t += (n ^ (r | ~i)) + e[8] + 1873313359 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[15] - 30611744 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[6] - 1560198380 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[13] + 1309151649 | 0, r = (r << 21 | r >>> 11) + n | 0, t += (n ^ (r | ~i)) + e[4] - 145523070 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[11] - 1120210379 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[2] + 718787259 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[9] - 343485551 | 0, r = (r << 21 | r >>> 11) + n | 0, u[0] = t + u[0] | 0, u[1] = r + u[1] | 0, u[2] = n + u[2] | 0, u[3] = i + u[3] | 0;
      }function t(u) {
        var e,
            t = [];for (e = 0; e < 64; e += 4) {
          t[e >> 2] = u.charCodeAt(e) + (u.charCodeAt(e + 1) << 8) + (u.charCodeAt(e + 2) << 16) + (u.charCodeAt(e + 3) << 24);
        }return t;
      }function r(u) {
        var e,
            t = [];for (e = 0; e < 64; e += 4) {
          t[e >> 2] = u[e] + (u[e + 1] << 8) + (u[e + 2] << 16) + (u[e + 3] << 24);
        }return t;
      }function n(u) {
        var r,
            n,
            i,
            o,
            a,
            s,
            c = u.length,
            l = [1732584193, -271733879, -1732584194, 271733878];for (r = 64; r <= c; r += 64) {
          e(l, t(u.substring(r - 64, r)));
        }for (u = u.substring(r - 64), n = u.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < n; r += 1) {
          i[r >> 2] |= u.charCodeAt(r) << (r % 4 << 3);
        }if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (e(l, i), r = 0; r < 16; r += 1) {
          i[r] = 0;
        }return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(o[2], 16), s = parseInt(o[1], 16) || 0, i[14] = a, i[15] = s, e(l, i), l;
      }function i(u) {
        var t,
            n,
            i,
            o,
            a,
            s,
            c = u.length,
            l = [1732584193, -271733879, -1732584194, 271733878];for (t = 64; t <= c; t += 64) {
          e(l, r(u.subarray(t - 64, t)));
        }for (u = t - 64 < c ? u.subarray(t - 64) : new Uint8Array(0), n = u.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) {
          i[t >> 2] |= u[t] << (t % 4 << 3);
        }if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (e(l, i), t = 0; t < 16; t += 1) {
          i[t] = 0;
        }return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(o[2], 16), s = parseInt(o[1], 16) || 0, i[14] = a, i[15] = s, e(l, i), l;
      }function o(u) {
        var e,
            t = "";for (e = 0; e < 4; e += 1) {
          t += E[u >> 8 * e + 4 & 15] + E[u >> 8 * e & 15];
        }return t;
      }function a(u) {
        var e;for (e = 0; e < u.length; e += 1) {
          u[e] = o(u[e]);
        }return u.join("");
      }function s(u) {
        return (/[\u0080-\uFFFF]/.test(u) && (u = unescape(encodeURIComponent(u))), u
        );
      }function c(u, e) {
        var t,
            r = u.length,
            n = new ArrayBuffer(r),
            i = new Uint8Array(n);for (t = 0; t < r; t += 1) {
          i[t] = u.charCodeAt(t);
        }return e ? i : n;
      }function l(u) {
        return String.fromCharCode.apply(null, new Uint8Array(u));
      }function A(u, e, t) {
        var r = new Uint8Array(u.byteLength + e.byteLength);return r.set(new Uint8Array(u)), r.set(new Uint8Array(e), u.byteLength), t ? r : r.buffer;
      }function p(u) {
        var e,
            t = [],
            r = u.length;for (e = 0; e < r - 1; e += 2) {
          t.push(parseInt(u.substr(e, 2), 16));
        }return String.fromCharCode.apply(String, t);
      }function f() {
        this.reset();
      }var E = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];return "5d41402abc4b2a76b9719d911017c592" !== a(n("hello")) && function (u, e) {
        var t = (65535 & u) + (65535 & e);return (u >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
      }, "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
        function e(u, e) {
          return u = 0 | u || 0, u < 0 ? Math.max(u + e, 0) : Math.min(u, e);
        }ArrayBuffer.prototype.slice = function (t, r) {
          var n,
              i,
              o,
              a,
              s = this.byteLength,
              c = e(t, s),
              l = s;return r !== u && (l = e(r, s)), c > l ? new ArrayBuffer(0) : (n = l - c, i = new ArrayBuffer(n), o = new Uint8Array(i), a = new Uint8Array(this, c, n), o.set(a), i);
        };
      }(), f.prototype.append = function (u) {
        return this.appendBinary(s(u)), this;
      }, f.prototype.appendBinary = function (u) {
        this._buff += u, this._length += u.length;var r,
            n = this._buff.length;for (r = 64; r <= n; r += 64) {
          e(this._hash, t(this._buff.substring(r - 64, r)));
        }return this._buff = this._buff.substring(r - 64), this;
      }, f.prototype.end = function (u) {
        var e,
            t,
            r = this._buff,
            n = r.length,
            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (e = 0; e < n; e += 1) {
          i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
        }return this._finish(i, n), t = a(this._hash), u && (t = p(t)), this.reset(), t;
      }, f.prototype.reset = function () {
        return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
      }, f.prototype.getState = function () {
        return { buff: this._buff, length: this._length, hash: this._hash };
      }, f.prototype.setState = function (u) {
        return this._buff = u.buff, this._length = u.length, this._hash = u.hash, this;
      }, f.prototype.destroy = function () {
        delete this._hash, delete this._buff, delete this._length;
      }, f.prototype._finish = function (u, t) {
        var r,
            n,
            i,
            o = t;if (u[o >> 2] |= 128 << (o % 4 << 3), o > 55) for (e(this._hash, u), o = 0; o < 16; o += 1) {
          u[o] = 0;
        }r = 8 * this._length, r = r.toString(16).match(/(.*?)(.{0,8})$/), n = parseInt(r[2], 16), i = parseInt(r[1], 16) || 0, u[14] = n, u[15] = i, e(this._hash, u);
      }, f.hash = function (u, e) {
        return f.hashBinary(s(u), e);
      }, f.hashBinary = function (u, e) {
        var t = n(u),
            r = a(t);return e ? p(r) : r;
      }, f.ArrayBuffer = function () {
        this.reset();
      }, f.ArrayBuffer.prototype.append = function (u) {
        var t,
            n = A(this._buff.buffer, u, !0),
            i = n.length;for (this._length += u.byteLength, t = 64; t <= i; t += 64) {
          e(this._hash, r(n.subarray(t - 64, t)));
        }return this._buff = t - 64 < i ? new Uint8Array(n.buffer.slice(t - 64)) : new Uint8Array(0), this;
      }, f.ArrayBuffer.prototype.end = function (u) {
        var e,
            t,
            r = this._buff,
            n = r.length,
            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (e = 0; e < n; e += 1) {
          i[e >> 2] |= r[e] << (e % 4 << 3);
        }return this._finish(i, n), t = a(this._hash), u && (t = p(t)), this.reset(), t;
      }, f.ArrayBuffer.prototype.reset = function () {
        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
      }, f.ArrayBuffer.prototype.getState = function () {
        var u = f.prototype.getState.call(this);return u.buff = l(u.buff), u;
      }, f.ArrayBuffer.prototype.setState = function (u) {
        return u.buff = c(u.buff, !0), f.prototype.setState.call(this, u);
      }, f.ArrayBuffer.prototype.destroy = f.prototype.destroy, f.ArrayBuffer.prototype._finish = f.prototype._finish, f.ArrayBuffer.hash = function (u, e) {
        var t = i(new Uint8Array(u)),
            r = a(t);return e ? p(r) : r;
      }, f;
    }();
  }(function (u) {
    "use strict";
    function e(u, e) {
      var t = u[0],
          r = u[1],
          n = u[2],
          i = u[3];t += (r & n | ~r & i) + e[0] - 680876936 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[1] - 389564586 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[2] + 606105819 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[3] - 1044525330 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & n | ~r & i) + e[4] - 176418897 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[5] + 1200080426 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[6] - 1473231341 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[7] - 45705983 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & n | ~r & i) + e[8] + 1770035416 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[9] - 1958414417 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[10] - 42063 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[11] - 1990404162 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & n | ~r & i) + e[12] + 1804603682 | 0, t = (t << 7 | t >>> 25) + r | 0, i += (t & r | ~t & n) + e[13] - 40341101 | 0, i = (i << 12 | i >>> 20) + t | 0, n += (i & t | ~i & r) + e[14] - 1502002290 | 0, n = (n << 17 | n >>> 15) + i | 0, r += (n & i | ~n & t) + e[15] + 1236535329 | 0, r = (r << 22 | r >>> 10) + n | 0, t += (r & i | n & ~i) + e[1] - 165796510 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[6] - 1069501632 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[11] + 643717713 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[0] - 373897302 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r & i | n & ~i) + e[5] - 701558691 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[10] + 38016083 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[15] - 660478335 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[4] - 405537848 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r & i | n & ~i) + e[9] + 568446438 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[14] - 1019803690 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[3] - 187363961 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[8] + 1163531501 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r & i | n & ~i) + e[13] - 1444681467 | 0, t = (t << 5 | t >>> 27) + r | 0, i += (t & n | r & ~n) + e[2] - 51403784 | 0, i = (i << 9 | i >>> 23) + t | 0, n += (i & r | t & ~r) + e[7] + 1735328473 | 0, n = (n << 14 | n >>> 18) + i | 0, r += (n & t | i & ~t) + e[12] - 1926607734 | 0, r = (r << 20 | r >>> 12) + n | 0, t += (r ^ n ^ i) + e[5] - 378558 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[8] - 2022574463 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[11] + 1839030562 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[14] - 35309556 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (r ^ n ^ i) + e[1] - 1530992060 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[4] + 1272893353 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[7] - 155497632 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[10] - 1094730640 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (r ^ n ^ i) + e[13] + 681279174 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[0] - 358537222 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[3] - 722521979 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[6] + 76029189 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (r ^ n ^ i) + e[9] - 640364487 | 0, t = (t << 4 | t >>> 28) + r | 0, i += (t ^ r ^ n) + e[12] - 421815835 | 0, i = (i << 11 | i >>> 21) + t | 0, n += (i ^ t ^ r) + e[15] + 530742520 | 0, n = (n << 16 | n >>> 16) + i | 0, r += (n ^ i ^ t) + e[2] - 995338651 | 0, r = (r << 23 | r >>> 9) + n | 0, t += (n ^ (r | ~i)) + e[0] - 198630844 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[7] + 1126891415 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[14] - 1416354905 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[5] - 57434055 | 0, r = (r << 21 | r >>> 11) + n | 0, t += (n ^ (r | ~i)) + e[12] + 1700485571 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[3] - 1894986606 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[10] - 1051523 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[1] - 2054922799 | 0, r = (r << 21 | r >>> 11) + n | 0, t += (n ^ (r | ~i)) + e[8] + 1873313359 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[15] - 30611744 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[6] - 1560198380 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[13] + 1309151649 | 0, r = (r << 21 | r >>> 11) + n | 0, t += (n ^ (r | ~i)) + e[4] - 145523070 | 0, t = (t << 6 | t >>> 26) + r | 0, i += (r ^ (t | ~n)) + e[11] - 1120210379 | 0, i = (i << 10 | i >>> 22) + t | 0, n += (t ^ (i | ~r)) + e[2] + 718787259 | 0, n = (n << 15 | n >>> 17) + i | 0, r += (i ^ (n | ~t)) + e[9] - 343485551 | 0, r = (r << 21 | r >>> 11) + n | 0, u[0] = t + u[0] | 0, u[1] = r + u[1] | 0, u[2] = n + u[2] | 0, u[3] = i + u[3] | 0;
    }function t(u) {
      var e,
          t = [];for (e = 0; e < 64; e += 4) {
        t[e >> 2] = u.charCodeAt(e) + (u.charCodeAt(e + 1) << 8) + (u.charCodeAt(e + 2) << 16) + (u.charCodeAt(e + 3) << 24);
      }return t;
    }function r(u) {
      var e,
          t = [];for (e = 0; e < 64; e += 4) {
        t[e >> 2] = u[e] + (u[e + 1] << 8) + (u[e + 2] << 16) + (u[e + 3] << 24);
      }return t;
    }function n(u) {
      var r,
          n,
          i,
          o,
          a,
          s,
          c = u.length,
          l = [1732584193, -271733879, -1732584194, 271733878];for (r = 64; r <= c; r += 64) {
        e(l, t(u.substring(r - 64, r)));
      }for (u = u.substring(r - 64), n = u.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < n; r += 1) {
        i[r >> 2] |= u.charCodeAt(r) << (r % 4 << 3);
      }if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (e(l, i), r = 0; r < 16; r += 1) {
        i[r] = 0;
      }return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(o[2], 16), s = parseInt(o[1], 16) || 0, i[14] = a, i[15] = s, e(l, i), l;
    }function i(u) {
      var t,
          n,
          i,
          o,
          a,
          s,
          c = u.length,
          l = [1732584193, -271733879, -1732584194, 271733878];for (t = 64; t <= c; t += 64) {
        e(l, r(u.subarray(t - 64, t)));
      }for (u = t - 64 < c ? u.subarray(t - 64) : new Uint8Array(0), n = u.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) {
        i[t >> 2] |= u[t] << (t % 4 << 3);
      }if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (e(l, i), t = 0; t < 16; t += 1) {
        i[t] = 0;
      }return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(o[2], 16), s = parseInt(o[1], 16) || 0, i[14] = a, i[15] = s, e(l, i), l;
    }function o(u) {
      var e,
          t = "";for (e = 0; e < 4; e += 1) {
        t += E[u >> 8 * e + 4 & 15] + E[u >> 8 * e & 15];
      }return t;
    }function a(u) {
      var e;for (e = 0; e < u.length; e += 1) {
        u[e] = o(u[e]);
      }return u.join("");
    }function s(u) {
      return (/[\u0080-\uFFFF]/.test(u) && (u = unescape(encodeURIComponent(u))), u
      );
    }function c(u, e) {
      var t,
          r = u.length,
          n = new ArrayBuffer(r),
          i = new Uint8Array(n);for (t = 0; t < r; t += 1) {
        i[t] = u.charCodeAt(t);
      }return e ? i : n;
    }function l(u) {
      return String.fromCharCode.apply(null, new Uint8Array(u));
    }function A(u, e, t) {
      var r = new Uint8Array(u.byteLength + e.byteLength);return r.set(new Uint8Array(u)), r.set(new Uint8Array(e), u.byteLength), t ? r : r.buffer;
    }function p(u) {
      var e,
          t = [],
          r = u.length;for (e = 0; e < r - 1; e += 2) {
        t.push(parseInt(u.substr(e, 2), 16));
      }return String.fromCharCode.apply(String, t);
    }function f() {
      this.reset();
    }var E = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];return "5d41402abc4b2a76b9719d911017c592" !== a(n("hello")) && function (u, e) {
      var t = (65535 & u) + (65535 & e);return (u >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
    }, "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
      function e(u, e) {
        return u = 0 | u || 0, u < 0 ? Math.max(u + e, 0) : Math.min(u, e);
      }ArrayBuffer.prototype.slice = function (t, r) {
        var n,
            i,
            o,
            a,
            s = this.byteLength,
            c = e(t, s),
            l = s;return r !== u && (l = e(r, s)), c > l ? new ArrayBuffer(0) : (n = l - c, i = new ArrayBuffer(n), o = new Uint8Array(i), a = new Uint8Array(this, c, n), o.set(a), i);
      };
    }(), f.prototype.append = function (u) {
      return this.appendBinary(s(u)), this;
    }, f.prototype.appendBinary = function (u) {
      this._buff += u, this._length += u.length;var r,
          n = this._buff.length;for (r = 64; r <= n; r += 64) {
        e(this._hash, t(this._buff.substring(r - 64, r)));
      }return this._buff = this._buff.substring(r - 64), this;
    }, f.prototype.end = function (u) {
      var e,
          t,
          r = this._buff,
          n = r.length,
          i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (e = 0; e < n; e += 1) {
        i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
      }return this._finish(i, n), t = a(this._hash), u && (t = p(t)), this.reset(), t;
    }, f.prototype.reset = function () {
      return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
    }, f.prototype.getState = function () {
      return { buff: this._buff, length: this._length, hash: this._hash };
    }, f.prototype.setState = function (u) {
      return this._buff = u.buff, this._length = u.length, this._hash = u.hash, this;
    }, f.prototype.destroy = function () {
      delete this._hash, delete this._buff, delete this._length;
    }, f.prototype._finish = function (u, t) {
      var r,
          n,
          i,
          o = t;if (u[o >> 2] |= 128 << (o % 4 << 3), o > 55) for (e(this._hash, u), o = 0; o < 16; o += 1) {
        u[o] = 0;
      }r = 8 * this._length, r = r.toString(16).match(/(.*?)(.{0,8})$/), n = parseInt(r[2], 16), i = parseInt(r[1], 16) || 0, u[14] = n, u[15] = i, e(this._hash, u);
    }, f.hash = function (u, e) {
      return f.hashBinary(s(u), e);
    }, f.hashBinary = function (u, e) {
      var t = n(u),
          r = a(t);return e ? p(r) : r;
    }, f.ArrayBuffer = function () {
      this.reset();
    }, f.ArrayBuffer.prototype.append = function (u) {
      var t,
          n = A(this._buff.buffer, u, !0),
          i = n.length;for (this._length += u.byteLength, t = 64; t <= i; t += 64) {
        e(this._hash, r(n.subarray(t - 64, t)));
      }return this._buff = t - 64 < i ? new Uint8Array(n.buffer.slice(t - 64)) : new Uint8Array(0), this;
    }, f.ArrayBuffer.prototype.end = function (u) {
      var e,
          t,
          r = this._buff,
          n = r.length,
          i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];for (e = 0; e < n; e += 1) {
        i[e >> 2] |= r[e] << (e % 4 << 3);
      }return this._finish(i, n), t = a(this._hash), u && (t = p(t)), this.reset(), t;
    }, f.ArrayBuffer.prototype.reset = function () {
      return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
    }, f.ArrayBuffer.prototype.getState = function () {
      var u = f.prototype.getState.call(this);return u.buff = l(u.buff), u;
    }, f.ArrayBuffer.prototype.setState = function (u) {
      return u.buff = c(u.buff, !0), f.prototype.setState.call(this, u);
    }, f.ArrayBuffer.prototype.destroy = f.prototype.destroy, f.ArrayBuffer.prototype._finish = f.prototype._finish, f.ArrayBuffer.hash = function (u, e) {
      var t = i(new Uint8Array(u)),
          r = a(t);return e ? p(r) : r;
    }, f;
  });
}); var FUNC_ERROR_TEXT = "Expected a function"; var NAN = NaN; var symbolTag = "[object Symbol]"; var reTrim = /^\s+|\s+$/g; var reIsBadHex = /^[-+]0x[0-9a-f]+$/i; var reIsBinary = /^0b[01]+$/i; var reIsOctal = /^0o[0-7]+$/i; var freeParseInt = parseInt; var freeGlobal = "object" == _typeof$1(commonjsGlobal$1) && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1; var freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof$1(self)) && self && self.Object === Object && self; var root = freeGlobal || freeSelf || Function("return this")(); var objectProto = Object.prototype; var objectToString = objectProto.toString; var nativeMax = Math.max; var nativeMin = Math.min; var now = function now() {
  return root.Date.now();
}; var index$5 = throttle; var log$1 = logger.context("api-client"); var uploadURL = ENV.uploadApiUrl; var parseStoreOpts = function parseStoreOpts(u, e) {
  checkOptions("upload (storeParams)", [{ name: "location", type: index$2.enums.of("s3 gcs rackspace azure dropbox") }, { name: "region", type: index$2.String }, { name: "path", type: index$2.String }, { name: "container", type: index$2.String }, { name: "access", type: index$2.enums.of("public private") }], e);var t = snakeKeys(e, "store");return u.policy && u.signature ? Object.assign({}, t, { signature: u.signature, policy: u.policy }) : t;
}; var Uploader = function Uploader(u, e, t) {
  function r(u) {
    return btoa(sparkMd5.ArrayBuffer.hash(u, !0));
  }this.config = Object.assign({}, { host: uploadURL, apikey: u.apikey, partSize: 5242880, maxConcurrentUploads: 5, cryptoMd5Method: r, retryOptions: { retries: 10, factor: 2, minTimeout: 1e3, maxTimeout: 6e4 }, onStart: null, onRetry: null, onUploadStart: null, onProgress: null, onPaused: null, onUploadCompleteFunction: null, onCompleteFunction: null, onUploadFailedFunction: null }, e), void 0 !== t && (this.storeParams = Object.assign({}, { store_location: "", store_region: "", store_container: "", store_path: "", store_access: "" }, parseStoreOpts(u, t))), this.parts = {}, this.file = null, this.currentUploads = 0, this.uploadData = null, this.uploadFailed = null, this.attempts = 0, this.cancelRequested = !1, this.pauseRequested = !1;
};Uploader.prototype.slice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice, Uploader.prototype.multipartUpload = function (u) {
  var e = this;e.file = u, e.parts.reader = new FileReader(), e.parts.current = 0, e.parts.total = Math.ceil(e.file.size / e.config.partSize), e.parts.uploaded = [], e.parts.failures = [], null !== e.config.onProgress && (e.parts.progress = Array.apply(void 0, toConsumableArray$1(Array(e.parts.total))).map(Number.prototype.valueOf, 0)), e.parts.reader.onload = function (u) {
    e.onPartLoad(u);
  }, e.initUpload();
}, Uploader.prototype.initUpload = function () {
  var u = this;u.start(function (e, t) {
    t && t.ok ? u.loadNextPart() : u.processRetries();
  });
}, Uploader.prototype.start = function (u) {
  var e = this;null !== e.config.onStart && e.config.onStart();var t = { filename: e.file.newName || e.file.name, mimetype: e.file.type || "application/octet-stream", size: e.file.size },
      r = e.createUploadFormData(t),
      n = new XMLHttpRequest();n.onreadystatechange = function () {
    if (4 === n.readyState) if (200 === n.status) {
      var t = { ok: !0 };e.uploadData = JSON.parse(n.response), u(null, t);
    } else {
      var r = n.response || "no response. Please check your browser network log for more info";e.config.onUploadFailedFunction(new Error('Upload "start" failed with response: ' + r));
    }
  }, n.onerror = function (e) {
    u(e, null);
  }, n.open("POST", e.config.host + "/multipart/start", !0), n.send(r);
}, Uploader.prototype.loadNextPart = function () {
  var u = this;if (u.pauseRequested || u.currentUploads >= u.config.maxConcurrentUploads) return void setTimeout(function () {
    u.loadNextPart();
  }, 100);u.currentUploads += 1;var e = u.parts.current * u.config.partSize,
      t = e + u.config.partSize >= u.file.size ? u.file.size : e + u.config.partSize;u.parts.reader.readAsArrayBuffer(u.slice.call(u.file, e, t));
}, Uploader.prototype.onPartLoad = function (u) {
  var e = this;log$1("Loading part: ", e.parts.current);var t = 0,
      r = !1;for (t = 0; t < e.parts.uploaded.length; t += 1) {
    var n = e.parts.uploaded[t].split(":", 1);if (parseInt(n[0], 10) === e.parts.current + 1) {
      r = !0;break;
    }
  }if (e.parts.current += 1, r || e.cancelRequested) e.handleError(new Error("Upload cancelled"), e.parts.current, u.total);else {
    var i = e.config.cryptoMd5Method(u.target.result);e.getUploadData(u.target.result, e.parts.current, u.total, i);
  }e.parts.current < e.parts.total ? e.loadNextPart() : e.waitForAllPartsAttempted();
}, Uploader.prototype.getUploadData = function (u, e, t, r) {
  var n = this;if (null !== n.uploadFailed) return void n.config.onUploadFailedFunction(new Error("Upload failed loading a chunk. Please check your network log."));if (null === n.uploadData) return void setTimeout(function () {
    n.getUploadData(u, e, t, r);
  }, 100);var i = { part: e, size: t, md5: r },
      o = n.createUploadFormData(i),
      a = new XMLHttpRequest();a.onreadystatechange = function () {
    4 === a.readyState && 200 === a.status && n.uploadNextPart(u, JSON.parse(a.response), e);
  }, a.onerror = function (t) {
    n.handleError(t, e, u.byteLength);
  }, a.open("POST", n.config.host + "/multipart/upload", !0), a.send(o);
}, Uploader.prototype.allPartsLoaded = function () {
  var u = this;return u.parts.uploaded.length === u.parts.total;
}, Uploader.prototype.uploadNextPart = function (u, e, t) {
  this.uploadPart(u, e, t);
}, Uploader.prototype.uploadPart = function (u, e, t) {
  var r = this;null !== r.config.onUploadStart && (r.config.onUploadStart(), r.config.onUploadStart = null);var n = new XMLHttpRequest();if (n.onreadystatechange = function () {
    if (4 === n.readyState && 200 === n.status) {
      r.currentUploads -= 1;var u = n.getResponseHeader("ETag");r.parts.uploaded.push(t + ":" + u);
    }
  }, null !== r.config.onProgress) {
    var i = index$5(function (e) {
      r.updateProgress(e.loaded, t, u.byteLength), r.cancelRequested && (n.abort(), r.handleError(new Error("Upload cancelled"), t, u.byteLength));
    }, 1e3);n.upload.onprogress = i;
  }n.onerror = function (e) {
    r.handleError(e, t, u.byteLength);
  }, n.open("PUT", e.url, !0), Object.keys(e.headers).forEach(function (u) {
    n.setRequestHeader(u, e.headers[u]);
  }), n.send(new Uint8Array(u));
}, Uploader.prototype.updateProgress = function (u, e, t) {
  var r = this;if (null !== r.config.onProgress) {
    r.parts.progress[e] = u;var n = r.parts.progress.reduce(function (u, e) {
      return u + e;
    }, 0),
        i = Math.round(n / r.file.size * 100);r.config.onProgress({ totalProgressPercent: i, progressTotal: n, part: e, loaded: u, byteLength: t });
  }
}, Uploader.prototype.handleError = function (u, e, t) {
  var r = this;log$1("handleError: ", e), r.parts.failures.indexOf(e) > -1 || (r.updateProgress(0, e, t), r.currentUploads -= 1, r.parts.failures.push(e));
}, Uploader.prototype.waitForAllPartsAttempted = function () {
  var u = this;if (u.parts.uploaded.length + u.parts.failures.length < u.parts.total) return void setTimeout(function () {
    u.waitForAllPartsAttempted();
  }, 100);u.allPartsLoaded() ? u.complete() : u.processRetries();
}, Uploader.prototype.backOffWait = function () {
  var u = this;return 0 === u.attempts ? u.config.retryOptions.minTimeout : Math.min(u.config.retryOptions.maxTimeout, 1e3 * Math.pow(u.config.retryOptions.factor, u.attempts));
}, Uploader.prototype.processRetries = function () {
  var u = this;if (!u.cancelRequested && u.config.retryOptions && u.attempts < u.config.retryOptions.retries) {
    log$1("processRetries called");var e = u.backOffWait();u.currentUploads = 0, u.parts.current = 0, u.parts.failures = [], u.attempts += 1, null !== u.config.onRetry && u.config.onRetry(u.attempts, e), u.uploadData ? setTimeout(function () {
      u.loadNextPart();
    }, e) : setTimeout(function () {
      u.initUpload();
    }, e);
  } else u.cancelRequested ? u.config.onUploadFailedFunction(new Error("Upload cancelled")) : (u.uploadFailed = !0, u.config.onUploadFailedFunction(new Error("Failed to upload after " + u.attempts + " attempt(s).")));
}, Uploader.prototype.complete = function () {
  var u = this;null !== u.config.onUploadCompleteFunction && u.config.onUploadCompleteFunction();var e = { size: u.file.size, filename: u.file.newName || u.file.name, mimetype: u.file.type || "application/octet-stream", parts: u.parts.uploaded.join(";") },
      t = u.createUploadFormData(e),
      r = new XMLHttpRequest();r.onreadystatechange = function () {
    if (4 === r.readyState) if (200 === r.status) null !== u.config.onCompleteFunction && u.config.onCompleteFunction(JSON.parse(r.response));else {
      var e = r.response || "no response. Please check your browser network log for more info";u.config.onUploadFailedFunction(new Error('Upload "complete" failed with API response: ' + e));
    }
  }, r.onerror = function (e) {
    u.config.onUploadFailedFunction(new Error('Upload "complete" failed with network error: ' + e.message));
  }, r.open("POST", u.config.host + "/multipart/complete", !0), r.send(t);
}, Uploader.prototype.createUploadFormData = function (u) {
  var e = this,
      t = new FormData();return t.append("apikey", e.config.apikey), null !== e.storeParams && Object.keys(e.storeParams).forEach(function (u) {
    "" !== e.storeParams[u] && t.append(u, e.storeParams[u]);
  }), null !== e.uploadData && Object.keys(e.uploadData).forEach(function (u) {
    t.append(u, e.uploadData[u]);
  }), u && Object.keys(u).forEach(function (e) {
    t.append(e, u[e]);
  }), t;
}, Uploader.prototype.cancel = function () {
  log$1("upload.cancel() called");var u = this;u.uploadFailed = !0, u.cancelRequested = !0;
}, Uploader.prototype.waitForAllPartsPaused = function () {
  var u = this;if (0 !== u.currentUploads) return void setTimeout(function () {
    u.waitForAllPartsPaused();
  }, 100);null === u.config.onPaused || u.uploadFailed || u.config.onPaused();
}, Uploader.prototype.pause = function () {
  log$1("upload.pause() called");var u = this;u.pauseRequested = !0, null !== u.config.onPaused && setTimeout(function () {
    u.waitForAllPartsPaused();
  }, 100);
}, Uploader.prototype.resume = function () {
  log$1("upload.resume() called"), this.pauseRequested = !1;
};var _upload = function _upload(u, e) {
  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};return log$1("cloud.upload() called:", e), new Promise(function (i, o) {
    var a = Object.assign({}, t, { onCompleteFunction: function onCompleteFunction(u) {
        return i(u);
      }, onUploadFailedFunction: function onUploadFailedFunction(u) {
        return o(u);
      } }),
        s = new Uploader(u, a, r);s.multipartUpload(e), n.cancel = function () {
      s.cancel();
    }, n.pause = function () {
      s.pause();
    }, n.resume = function () {
      s.resume();
    };
  });
}; var init$1 = function init(u, e) {
  if (!u || "string" != typeof u) throw new Error("apikey is required to initialize the Filestack client");if (e && (!e.policy || !e.signature)) throw new Error("signature and policy are both required for security");var t = Object.assign({}, e, { apikey: u });return { getSecurity: function getSecurity() {
      return { policy: t.policy, signature: t.signature };
    }, setSecurity: function setSecurity(u) {
      if (u && (!u.policy || !u.signature)) throw new Error("signature and policy are both required for security");return t.policy = u.policy, t.signature = u.signature, t;
    }, storeURL: function storeURL(u, e) {
      return _storeURL(t, u, e);
    }, retrieve: function retrieve(u, e) {
      return _retrieve(t, u, e);
    }, remove: function remove(u, e) {
      return _remove(t, u, e);
    }, metadata: function metadata(u, e) {
      return _metadata(t, u, e);
    }, cloud: function cloud(u) {
      return _cloud(t, e, u);
    }, transform: function transform(u, e) {
      return _transform(t, u, e);
    }, upload: function upload(u, e, r, n) {
      return _upload(t, u, e, r, n);
    } };
}; var client = { version: "0.3.1", init: init$1 };

// Logger can be used and required from many places.
// This is global on / off switch for it, which all
// created logger contexts respect.

var onOff$1 = {
  init: function init() {
    window.filestackInternals.logger.working = false;
  },
  isWorking: function isWorking() {
    return window.filestackInternals.logger.working;
  },
  on: function on() {
    window.filestackInternals.logger.working = true;
  },
  off: function off() {
    window.filestackInternals.logger.working = false;
  }
};

/* eslint no-console:0 */

var context$1 = function context(contextName, onOff) {
  var api = function log() {
    for (var _len = arguments.length, stuff = Array(_len), _key = 0; _key < _len; _key++) {
      stuff[_key] = arguments[_key];
    }

    var convertedToStrings = [].concat(stuff).map(function (thing) {
      if ((typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object') {
        return JSON.stringify(thing, function (key, value) {
          if (typeof value === 'function') {
            // If any function named json is found then call that function to get the json object.
            if (key === 'json') {
              try {
                return value();
              } catch (err) {
                // Throws? No worries. Just go on and return string.
              }
            }
            return '[Function]';
          }
          if (value instanceof File) {
            return '[File name: ' + value.name + ', mimetype: ' + value.type + ', size: ' + value.size + ']';
          }
          return value;
        }, 2);
      }
      return thing;
    });
    if (onOff.isWorking()) {
      var _console;

      (_console = console).log.apply(_console, ['[' + contextName + ']'].concat(toConsumableArray(convertedToStrings)));
    }
  };

  api.context = function (subContextName) {
    return context(contextName + '][' + subContextName, onOff);
  };

  api.on = onOff.on;
  api.off = onOff.off;

  return api;
};

var logger$1 = context$1('filestack', onOff$1);

var initializeGlobalNamespace = function initializeGlobalNamespace() {
  var namespace = void 0;
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    namespace = window.filestackInternals;
    if (!namespace) {
      namespace = {};
      window.filestackInternals = namespace;
    }
    if (!namespace.logger) {
      namespace.logger = logger$1;
      onOff$1.init();
    }
  }
  return namespace;
};

initializeGlobalNamespace();

var picker = createCommonjsModule(function (module, exports) {
  /* v0.3.4 */
  !function (t, e) {
    module.exports = e();
  }(commonjsGlobal, function () {
    function t(t) {
      return null == t ? "" : "object" === (void 0 === t ? "undefined" : mi(t)) ? JSON.stringify(t, null, 2) : String(t);
    }function e(t) {
      var e = parseFloat(t);return isNaN(e) ? t : e;
    }function n(t, e) {
      for (var n = Object.create(null), i = t.split(","), o = 0; o < i.length; o++) {
        n[i[o]] = !0;
      }return e ? function (t) {
        return n[t.toLowerCase()];
      } : function (t) {
        return n[t];
      };
    }function i(t, e) {
      if (t.length) {
        var n = t.indexOf(e);if (n > -1) return t.splice(n, 1);
      }
    }function o(t, e) {
      return _i.call(t, e);
    }function r(t) {
      return "string" == typeof t || "number" == typeof t;
    }function a(t) {
      var e = Object.create(null);return function (n) {
        return e[n] || (e[n] = t(n));
      };
    }function s(t, e) {
      function n(n) {
        var i = arguments.length;return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
      }return n._length = t.length, n;
    }function c(t, e) {
      e = e || 0;for (var n = t.length - e, i = new Array(n); n--;) {
        i[n] = t[n + e];
      }return i;
    }function l(t, e) {
      for (var n in e) {
        t[n] = e[n];
      }return t;
    }function u(t) {
      return null !== t && "object" === (void 0 === t ? "undefined" : mi(t));
    }function f(t) {
      return Ei.call(t) === Ti;
    }function d(t) {
      for (var e = {}, n = 0; n < t.length; n++) {
        t[n] && l(e, t[n]);
      }return e;
    }function p() {}function m(t, e) {
      var n = u(t),
          i = u(e);if (!n || !i) return !n && !i && String(t) === String(e);try {
        return JSON.stringify(t) === JSON.stringify(e);
      } catch (n) {
        return t === e;
      }
    }function h(t, e) {
      for (var n = 0; n < t.length; n++) {
        if (m(t[n], e)) return n;
      }return -1;
    }function v(t) {
      var e = !1;return function () {
        e || (e = !0, t());
      };
    }function g(t) {
      return (/native code/.test(t.toString())
      );
    }function _(t) {
      var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
    }function y(t, e, n, i) {
      Object.defineProperty(t, e, { value: n, enumerable: !!i, writable: !0, configurable: !0 });
    }function b(t) {
      if (!Hi.test(t)) {
        var e = t.split(".");return function (t) {
          for (var n = 0; n < e.length; n++) {
            if (!t) return;t = t[e[n]];
          }return t;
        };
      }
    }function C(t) {
      Wi.target && Bi.push(Wi.target), Wi.target = t;
    }function E() {
      Wi.target = Bi.pop();
    }function T(t, e) {
      t.__proto__ = e;
    }function w(t, e, n) {
      for (var i = 0, o = n.length; i < o; i++) {
        var r = n[i];y(t, r, e[r]);
      }
    }function A(t, e) {
      if (u(t)) {
        var n;return o(t, "__ob__") && t.__ob__ instanceof Ki ? n = t.__ob__ : qi.shouldConvert && !Ui() && (Array.isArray(t) || f(t)) && Object.isExtensible(t) && !t._isVue && (n = new Ki(t)), e && n && n.vmCount++, n;
      }
    }function S(t, e, n, i) {
      var o = new Wi(),
          r = Object.getOwnPropertyDescriptor(t, e);if (!r || r.configurable !== !1) {
        var a = r && r.get,
            s = r && r.set,
            c = A(n);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get$$1() {
            var e = a ? a.call(t) : n;return Wi.target && (o.depend(), c && c.dep.depend(), Array.isArray(e) && O(e)), e;
          }, set: function set$$1(e) {
            var i = a ? a.call(t) : n;e === i || e !== e && i !== i || (s ? s.call(t, e) : n = e, c = A(e), o.notify());
          } });
      }
    }function R(t, e, n) {
      if (Array.isArray(t)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;if (o(t, e)) return t[e] = n, n;var i = t.__ob__;return t._isVue || i && i.vmCount ? n : i ? (S(i.value, e, n), i.dep.notify(), n) : (t[e] = n, n);
    }function k(t, e) {
      if (Array.isArray(t)) return void t.splice(e, 1);var n = t.__ob__;t._isVue || n && n.vmCount || o(t, e) && (delete t[e], n && n.dep.notify());
    }function O(t) {
      for (var e = void 0, n = 0, i = t.length; n < i; n++) {
        e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && O(e);
      }
    }function F(t, e) {
      if (!e) return t;for (var n, i, r, a = Object.keys(e), s = 0; s < a.length; s++) {
        n = a[s], i = t[n], r = e[n], o(t, n) ? f(i) && f(r) && F(i, r) : R(t, n, r);
      }return t;
    }function L(t, e) {
      return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
    }function N(t, e) {
      var n = Object.create(t || null);return e ? l(n, e) : n;
    }function I(t) {
      var e = t.props;if (e) {
        var n,
            i,
            o,
            r = {};if (Array.isArray(e)) for (n = e.length; n--;) {
          "string" == typeof (i = e[n]) && (o = yi(i), r[o] = { type: null });
        } else if (f(e)) for (var a in e) {
          i = e[a], o = yi(a), r[o] = f(i) ? i : { type: i };
        }t.props = r;
      }
    }function x(t) {
      var e = t.directives;if (e) for (var n in e) {
        var i = e[n];"function" == typeof i && (e[n] = { bind: i, update: i });
      }
    }function $(t, e, n) {
      function i(i) {
        var o = Qi[i] || Zi;u[i] = o(t[i], e[i], n, i);
      }I(e), x(e);var r = e.extends;if (r && (t = "function" == typeof r ? $(t, r.options, n) : $(t, r, n)), e.mixins) for (var a = 0, s = e.mixins.length; a < s; a++) {
        var c = e.mixins[a];c.prototype instanceof re && (c = c.options), t = $(t, c, n);
      }var l,
          u = {};for (l in t) {
        i(l);
      }for (l in e) {
        o(t, l) || i(l);
      }return u;
    }function U(t, e, n, i) {
      if ("string" == typeof n) {
        var r = t[e];if (o(r, n)) return r[n];var a = yi(n);if (o(r, a)) return r[a];var s = bi(a);if (o(r, s)) return r[s];var c = r[n] || r[a] || r[s];return c;
      }
    }function D(t, e, n, i) {
      var r = e[t],
          a = !o(n, t),
          s = n[t];if (j(Boolean, r.type) && (a && !o(r, "default") ? s = !1 : j(String, r.type) || "" !== s && s !== Ci(t) || (s = !0)), void 0 === s) {
        s = P(i, r, t);var c = qi.shouldConvert;qi.shouldConvert = !0, A(s), qi.shouldConvert = c;
      }return s;
    }function P(t, e, n) {
      if (o(e, "default")) {
        var i = e.default;return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof i && "Function" !== M(e.type) ? i.call(t) : i;
      }
    }function M(t) {
      var e = t && t.toString().match(/^\s*function (\w+)/);return e && e[1];
    }function j(t, e) {
      if (!Array.isArray(e)) return M(e) === M(t);for (var n = 0, i = e.length; n < i; n++) {
        if (M(e[n]) === M(t)) return !0;
      }return !1;
    }function H(t, e, n) {
      if (Si.errorHandler) Si.errorHandler.call(null, t, e, n);else {
        if (!ki || "undefined" == typeof console) throw t;console.error(t);
      }
    }function z(t) {
      return new Ji(void 0, void 0, void 0, String(t));
    }function G(t) {
      var e = new Ji(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions);return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isCloned = !0, e;
    }function W(t) {
      for (var e = t.length, n = new Array(e), i = 0; i < e; i++) {
        n[i] = G(t[i]);
      }return n;
    }function B(t) {
      function e() {
        var t = arguments,
            n = e.fns;if (!Array.isArray(n)) return n.apply(null, arguments);for (var i = 0; i < n.length; i++) {
          n[i].apply(null, t);
        }
      }return e.fns = t, e;
    }function Y(t, e, n, i, o) {
      var r, a, s, c;for (r in t) {
        a = t[r], s = e[r], c = io(r), a && (s ? a !== s && (s.fns = a, t[r] = s) : (a.fns || (a = t[r] = B(a)), n(c.name, a, c.once, c.capture)));
      }for (r in e) {
        t[r] || (c = io(r), i(c.name, e[r], c.capture));
      }
    }function V(t, e, n) {
      function o() {
        n.apply(this, arguments), i(r.fns, o);
      }var r,
          a = t[e];a ? a.fns && a.merged ? (r = a, r.fns.push(o)) : r = B([a, o]) : r = B([o]), r.merged = !0, t[e] = r;
    }function X(t) {
      for (var e = 0; e < t.length; e++) {
        if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
      }return t;
    }function q(t) {
      return r(t) ? [z(t)] : Array.isArray(t) ? K(t) : void 0;
    }function K(t, e) {
      var n,
          i,
          o,
          a = [];for (n = 0; n < t.length; n++) {
        null != (i = t[n]) && "boolean" != typeof i && (o = a[a.length - 1], Array.isArray(i) ? a.push.apply(a, K(i, (e || "") + "_" + n)) : r(i) ? o && o.text ? o.text += String(i) : "" !== i && a.push(z(i)) : i.text && o && o.text ? a[a.length - 1] = z(o.text + i.text) : (i.tag && null == i.key && null != e && (i.key = "__vlist" + e + "_" + n + "__"), a.push(i)));
      }return a;
    }function Q(t) {
      return t && t.filter(function (t) {
        return t && t.componentOptions;
      })[0];
    }function Z(t) {
      t._events = Object.create(null), t._hasHookEvent = !1;var e = t.$options._parentListeners;e && et(t, e);
    }function J(t, e, n) {
      n ? eo.$once(t, e) : eo.$on(t, e);
    }function tt(t, e) {
      eo.$off(t, e);
    }function et(t, e, n) {
      eo = t, Y(e, n || {}, J, tt, t);
    }function nt(t, e) {
      var n = {};if (!t) return n;for (var i, o, r = [], a = 0, s = t.length; a < s; a++) {
        if (o = t[a], (o.context === e || o.functionalContext === e) && o.data && (i = o.data.slot)) {
          var c = n[i] || (n[i] = []);"template" === o.tag ? c.push.apply(c, o.children) : c.push(o);
        } else r.push(o);
      }return r.every(it) || (n.default = r), n;
    }function it(t) {
      return t.isComment || " " === t.text;
    }function ot(t) {
      for (var e = {}, n = 0; n < t.length; n++) {
        e[t[n][0]] = t[n][1];
      }return e;
    }function rt(t) {
      var e = t.$options,
          n = e.parent;if (n && !e.abstract) {
        for (; n.$options.abstract && n.$parent;) {
          n = n.$parent;
        }n.$children.push(t);
      }t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
    }function at(t, e, n) {
      t.$el = e, t.$options.render || (t.$options.render = no), ft(t, "beforeMount");var i;return i = function i() {
        t._update(t._render(), n);
      }, t._watcher = new fo(t, i, p), n = !1, null == t.$vnode && (t._isMounted = !0, ft(t, "mounted")), t;
    }function st(t, e, n, i, o) {
      var r = !!(o || t.$options._renderChildren || i.data.scopedSlots || t.$scopedSlots !== ji);if (t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i), t.$options._renderChildren = o, e && t.$options.props) {
        qi.shouldConvert = !1;for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
          var l = s[c];a[l] = D(l, t.$options.props, e, t);
        }qi.shouldConvert = !0, t.$options.propsData = e;
      }if (n) {
        var u = t.$options._parentListeners;t.$options._parentListeners = n, et(t, n, u);
      }r && (t.$slots = nt(o, i.context), t.$forceUpdate());
    }function ct(t) {
      for (; t && (t = t.$parent);) {
        if (t._inactive) return !0;
      }return !1;
    }function lt(t, e) {
      if (e) {
        if (t._directInactive = !1, ct(t)) return;
      } else if (t._directInactive) return;if (t._inactive || null == t._inactive) {
        t._inactive = !1;for (var n = 0; n < t.$children.length; n++) {
          lt(t.$children[n]);
        }ft(t, "activated");
      }
    }function ut(t, e) {
      if (!(e && (t._directInactive = !0, ct(t)) || t._inactive)) {
        t._inactive = !0;for (var n = 0; n < t.$children.length; n++) {
          ut(t.$children[n]);
        }ft(t, "deactivated");
      }
    }function ft(t, e) {
      var n = t.$options[e];if (n) for (var i = 0, o = n.length; i < o; i++) {
        try {
          n[i].call(t);
        } catch (n) {
          H(n, t, e + " hook");
        }
      }t._hasHookEvent && t.$emit("hook:" + e);
    }function dt() {
      ro.length = 0, ao = {}, so = co = !1;
    }function pt() {
      co = !0;var t, e, n;for (ro.sort(function (t, e) {
        return t.id - e.id;
      }), lo = 0; lo < ro.length; lo++) {
        t = ro[lo], e = t.id, ao[e] = null, t.run();
      }for (lo = ro.length; lo--;) {
        t = ro[lo], n = t.vm, n._watcher === t && n._isMounted && ft(n, "updated");
      }Di && Si.devtools && Di.emit("flush"), dt();
    }function mt(t) {
      var e = t.id;if (null == ao[e]) {
        if (ao[e] = !0, co) {
          for (var n = ro.length - 1; n >= 0 && ro[n].id > t.id;) {
            n--;
          }ro.splice(Math.max(n, lo) + 1, 0, t);
        } else ro.push(t);so || (so = !0, Mi(pt));
      }
    }function ht(t) {
      po.clear(), vt(t, po);
    }function vt(t, e) {
      var n,
          i,
          o = Array.isArray(t);if ((o || u(t)) && Object.isExtensible(t)) {
        if (t.__ob__) {
          var r = t.__ob__.dep.id;if (e.has(r)) return;e.add(r);
        }if (o) for (n = t.length; n--;) {
          vt(t[n], e);
        } else for (i = Object.keys(t), n = i.length; n--;) {
          vt(t[i[n]], e);
        }
      }
    }function gt(t, e, n) {
      mo.get = function () {
        return this[e][n];
      }, mo.set = function (t) {
        this[e][n] = t;
      }, Object.defineProperty(t, n, mo);
    }function _t(t) {
      t._watchers = [];var e = t.$options;e.props && yt(t, e.props), e.methods && wt(t, e.methods), e.data ? bt(t) : A(t._data = {}, !0), e.computed && Ct(t, e.computed), e.watch && At(t, e.watch);
    }function yt(t, e) {
      var n = t.$options.propsData || {},
          i = t._props = {},
          o = t.$options._propKeys = [],
          r = !t.$parent;qi.shouldConvert = r;for (var a in e) {
        !function (r) {
          o.push(r), S(i, r, D(r, e, n, t)), r in t || gt(t, "_props", r);
        }(a);
      }qi.shouldConvert = !0;
    }function bt(t) {
      var e = t.$options.data;e = t._data = "function" == typeof e ? e.call(t) : e || {}, f(e) || (e = {});for (var n = Object.keys(e), i = t.$options.props, r = n.length; r--;) {
        i && o(i, n[r]) || _(n[r]) || gt(t, "_data", n[r]);
      }A(e, !0);
    }function Ct(t, e) {
      var n = t._computedWatchers = Object.create(null);for (var i in e) {
        var o = e[i],
            r = "function" == typeof o ? o : o.get;n[i] = new fo(t, r, p, ho), i in t || Et(t, i, o);
      }
    }function Et(t, e, n) {
      "function" == typeof n ? (mo.get = Tt(e), mo.set = p) : (mo.get = n.get ? n.cache !== !1 ? Tt(e) : n.get : p, mo.set = n.set ? n.set : p), Object.defineProperty(t, e, mo);
    }function Tt(t) {
      return function () {
        var e = this._computedWatchers && this._computedWatchers[t];if (e) return e.dirty && e.evaluate(), Wi.target && e.depend(), e.value;
      };
    }function wt(t, e) {
      t.$options.props;for (var n in e) {
        t[n] = null == e[n] ? p : s(e[n], t);
      }
    }function At(t, e) {
      for (var n in e) {
        var i = e[n];if (Array.isArray(i)) for (var o = 0; o < i.length; o++) {
          St(t, n, i[o]);
        } else St(t, n, i);
      }
    }function St(t, e, n) {
      var i;f(n) && (i = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, i);
    }function Rt(t, e, n, i, o) {
      if (t) {
        var r = n.$options._base;if (u(t) && (t = r.extend(t)), "function" == typeof t) {
          if (!t.cid) if (t.resolved) t = t.resolved;else if (!(t = xt(t, r, function () {
            n.$forceUpdate();
          }))) return;ne(t), e = e || {}, e.model && Mt(t.options, e);var a = $t(e, t);if (t.options.functional) return kt(t, a, e, n, i);var s = e.on;e.on = e.nativeOn, t.options.abstract && (e = {}), Dt(e);var c = t.options.name || o;return new Ji("vue-component-" + t.cid + (c ? "-" + c : ""), e, void 0, void 0, void 0, n, { Ctor: t, propsData: a, listeners: s, tag: o, children: i });
        }
      }
    }function kt(t, e, n, i, o) {
      var r = {},
          a = t.options.props;if (a) for (var s in a) {
        r[s] = D(s, a, e);
      }var c = Object.create(i),
          l = function l(t, e, n, i) {
        return jt(c, t, e, n, i, !0);
      },
          u = t.options.render.call(null, l, { props: r, data: n, parent: i, children: o, slots: function slots() {
          return nt(o, i);
        } });return u instanceof Ji && (u.functionalContext = i, n.slot && ((u.data || (u.data = {})).slot = n.slot)), u;
    }function Ot(t, e, n, i) {
      var o = t.componentOptions,
          r = { _isComponent: !0, parent: e, propsData: o.propsData, _componentTag: o.tag, _parentVnode: t, _parentListeners: o.listeners, _renderChildren: o.children, _parentElm: n || null, _refElm: i || null },
          a = t.data.inlineTemplate;return a && (r.render = a.render, r.staticRenderFns = a.staticRenderFns), new o.Ctor(r);
    }function Ft(t, e, n, i) {
      if (!t.componentInstance || t.componentInstance._isDestroyed) {
        (t.componentInstance = Ot(t, oo, n, i)).$mount(e ? t.elm : void 0, e);
      } else if (t.data.keepAlive) {
        var o = t;Lt(o, o);
      }
    }function Lt(t, e) {
      var n = e.componentOptions;st(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
    }function Nt(t) {
      t.componentInstance._isMounted || (t.componentInstance._isMounted = !0, ft(t.componentInstance, "mounted")), t.data.keepAlive && lt(t.componentInstance, !0);
    }function It(t) {
      t.componentInstance._isDestroyed || (t.data.keepAlive ? ut(t.componentInstance, !0) : t.componentInstance.$destroy());
    }function xt(t, e, n) {
      if (!t.requested) {
        t.requested = !0;var i = t.pendingCallbacks = [n],
            o = !0,
            r = function r(n) {
          if (u(n) && (n = e.extend(n)), t.resolved = n, !o) for (var r = 0, a = i.length; r < a; r++) {
            i[r](n);
          }
        },
            a = function a(t) {},
            s = t(r, a);return s && "function" == typeof s.then && !t.resolved && s.then(r, a), o = !1, t.resolved;
      }t.pendingCallbacks.push(n);
    }function $t(t, e) {
      var n = e.options.props;if (n) {
        var i = {},
            o = t.attrs,
            r = t.props,
            a = t.domProps;if (o || r || a) for (var s in n) {
          var c = Ci(s);Ut(i, r, s, c, !0) || Ut(i, o, s, c) || Ut(i, a, s, c);
        }return i;
      }
    }function Ut(t, e, n, i, r) {
      if (e) {
        if (o(e, n)) return t[n] = e[n], r || delete e[n], !0;if (o(e, i)) return t[n] = e[i], r || delete e[i], !0;
      }return !1;
    }function Dt(t) {
      t.hook || (t.hook = {});for (var e = 0; e < go.length; e++) {
        var n = go[e],
            i = t.hook[n],
            o = vo[n];t.hook[n] = i ? Pt(o, i) : o;
      }
    }function Pt(t, e) {
      return function (n, i, o, r) {
        t(n, i, o, r), e(n, i, o, r);
      };
    }function Mt(t, e) {
      var n = t.model && t.model.prop || "value",
          i = t.model && t.model.event || "input";(e.props || (e.props = {}))[n] = e.model.value;var o = e.on || (e.on = {});o[i] ? o[i] = [e.model.callback].concat(o[i]) : o[i] = e.model.callback;
    }function jt(t, e, n, i, o, a) {
      return (Array.isArray(n) || r(n)) && (o = i, i = n, n = void 0), a && (o = yo), Ht(t, e, n, i, o);
    }function Ht(t, e, n, i, o) {
      if (n && n.__ob__) return no();if (!e) return no();Array.isArray(i) && "function" == typeof i[0] && (n = n || {}, n.scopedSlots = { default: i[0] }, i.length = 0), o === yo ? i = q(i) : o === _o && (i = X(i));var r, a;if ("string" == typeof e) {
        var s;a = Si.getTagNamespace(e), r = Si.isReservedTag(e) ? new Ji(Si.parsePlatformTagName(e), n, i, void 0, void 0, t) : (s = U(t.$options, "components", e)) ? Rt(s, n, t, i, e) : new Ji(e, n, i, void 0, void 0, t);
      } else r = Rt(e, n, t, i);return r ? (a && zt(r, a), r) : no();
    }function zt(t, e) {
      if (t.ns = e, "foreignObject" !== t.tag && t.children) for (var n = 0, i = t.children.length; n < i; n++) {
        var o = t.children[n];o.tag && !o.ns && zt(o, e);
      }
    }function Gt(t, e) {
      var n, i, o, r, a;if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), i = 0, o = t.length; i < o; i++) {
        n[i] = e(t[i], i);
      } else if ("number" == typeof t) for (n = new Array(t), i = 0; i < t; i++) {
        n[i] = e(i + 1, i);
      } else if (u(t)) for (r = Object.keys(t), n = new Array(r.length), i = 0, o = r.length; i < o; i++) {
        a = r[i], n[i] = e(t[a], a, i);
      }return n;
    }function Wt(t, e, n, i) {
      var o = this.$scopedSlots[t];if (o) return n = n || {}, i && l(n, i), o(n) || e;var r = this.$slots[t];return r || e;
    }function Bt(t) {
      return U(this.$options, "filters", t, !0) || Ai;
    }function Yt(t, e, n) {
      var i = Si.keyCodes[e] || n;return Array.isArray(i) ? i.indexOf(t) === -1 : i !== t;
    }function Vt(t, e, n, i) {
      if (n) if (u(n)) {
        Array.isArray(n) && (n = d(n));for (var o in n) {
          if ("class" === o || "style" === o) t[o] = n[o];else {
            var r = t.attrs && t.attrs.type,
                a = i || Si.mustUseProp(e, r, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});a[o] = n[o];
          }
        }
      } else ;return t;
    }function Xt(t, e) {
      var n = this._staticTrees[t];return n && !e ? Array.isArray(n) ? W(n) : G(n) : (n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), Kt(n, "__static__" + t, !1), n);
    }function qt(t, e, n) {
      return Kt(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
    }function Kt(t, e, n) {
      if (Array.isArray(t)) for (var i = 0; i < t.length; i++) {
        t[i] && "string" != typeof t[i] && Qt(t[i], e + "_" + i, n);
      } else Qt(t, e, n);
    }function Qt(t, e, n) {
      t.isStatic = !0, t.key = e, t.isOnce = n;
    }function Zt(t) {
      t.$vnode = null, t._vnode = null, t._staticTrees = null;var e = t.$options._parentVnode,
          n = e && e.context;t.$slots = nt(t.$options._renderChildren, n), t.$scopedSlots = ji, t._c = function (e, n, i, o) {
        return jt(t, e, n, i, o, !1);
      }, t.$createElement = function (e, n, i, o) {
        return jt(t, e, n, i, o, !0);
      };
    }function Jt(t) {
      var e = t.$options.provide;e && (t._provided = "function" == typeof e ? e.call(t) : e);
    }function te(t) {
      var e = t.$options.inject;if (e) for (var n = Array.isArray(e), i = n ? e : Pi ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < i.length; o++) {
        for (var r = i[o], a = n ? r : e[r], s = t; s;) {
          if (s._provided && a in s._provided) {
            t[r] = s._provided[a];break;
          }s = s.$parent;
        }
      }
    }function ee(t, e) {
      var n = t.$options = Object.create(t.constructor.options);n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
    }function ne(t) {
      var e = t.options;if (t.super) {
        var n = ne(t.super);if (n !== t.superOptions) {
          t.superOptions = n;var i = ie(t);i && l(t.extendOptions, i), e = t.options = $(n, t.extendOptions), e.name && (e.components[e.name] = t);
        }
      }return e;
    }function ie(t) {
      var e,
          n = t.options,
          i = t.sealedOptions;for (var o in n) {
        n[o] !== i[o] && (e || (e = {}), e[o] = oe(n[o], i[o]));
      }return e;
    }function oe(t, e) {
      if (Array.isArray(t)) {
        var n = [];e = Array.isArray(e) ? e : [e];for (var i = 0; i < t.length; i++) {
          e.indexOf(t[i]) < 0 && n.push(t[i]);
        }return n;
      }return t;
    }function re(t) {
      this._init(t);
    }function ae(t) {
      t.use = function (t) {
        if (!t.installed) {
          var e = c(arguments, 1);return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : "function" == typeof t && t.apply(null, e), t.installed = !0, this;
        }
      };
    }function se(t) {
      t.mixin = function (t) {
        this.options = $(this.options, t);
      };
    }function ce(t) {
      t.cid = 0;var e = 1;t.extend = function (t) {
        t = t || {};var n = this,
            i = n.cid,
            o = t._Ctor || (t._Ctor = {});if (o[i]) return o[i];var r = t.name || n.options.name,
            a = function a(t) {
          this._init(t);
        };return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = $(n.options, t), a.super = n, a.options.props && le(a), a.options.computed && ue(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Si._assetTypes.forEach(function (t) {
          a[t] = n[t];
        }), r && (a.options.components[r] = a), a.superOptions = n.options, a.extendOptions = t, a.sealedOptions = l({}, a.options), o[i] = a, a;
      };
    }function le(t) {
      var e = t.options.props;for (var n in e) {
        gt(t.prototype, "_props", n);
      }
    }function ue(t) {
      var e = t.options.computed;for (var n in e) {
        Et(t.prototype, n, e[n]);
      }
    }function fe(t) {
      Si._assetTypes.forEach(function (e) {
        t[e] = function (t, n) {
          return n ? ("component" === e && f(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = { bind: n, update: n }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
        };
      });
    }function de(t) {
      return t && (t.Ctor.options.name || t.tag);
    }function pe(t, e) {
      return "string" == typeof t ? t.split(",").indexOf(e) > -1 : t instanceof RegExp && t.test(e);
    }function me(t, e) {
      for (var n in t) {
        var i = t[n];if (i) {
          var o = de(i.componentOptions);o && !e(o) && (he(i), t[n] = null);
        }
      }
    }function he(t) {
      t && (t.componentInstance._inactive || ft(t.componentInstance, "deactivated"), t.componentInstance.$destroy());
    }function ve(t) {
      for (var e = t.data, n = t, i = t; i.componentInstance;) {
        i = i.componentInstance._vnode, i.data && (e = ge(i.data, e));
      }for (; n = n.parent;) {
        n.data && (e = ge(e, n.data));
      }return _e(e);
    }function ge(t, e) {
      return { staticClass: ye(t.staticClass, e.staticClass), class: t.class ? [t.class, e.class] : e.class };
    }function _e(t) {
      var e = t.class,
          n = t.staticClass;return n || e ? ye(n, be(e)) : "";
    }function ye(t, e) {
      return t ? e ? t + " " + e : t : e || "";
    }function be(t) {
      var e = "";if (!t) return e;if ("string" == typeof t) return t;if (Array.isArray(t)) {
        for (var n, i = 0, o = t.length; i < o; i++) {
          t[i] && (n = be(t[i])) && (e += n + " ");
        }return e.slice(0, -1);
      }if (u(t)) {
        for (var r in t) {
          t[r] && (e += r + " ");
        }return e.slice(0, -1);
      }return e;
    }function Ce(t) {
      return Uo(t) ? "svg" : "math" === t ? "math" : void 0;
    }function Ee(t) {
      if (!ki) return !0;if (Do(t)) return !1;if (t = t.toLowerCase(), null != Po[t]) return Po[t];var e = document.createElement(t);return t.indexOf("-") > -1 ? Po[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Po[t] = /HTMLUnknownElement/.test(e.toString());
    }function Te(t) {
      if ("string" == typeof t) {
        var e = document.querySelector(t);return e ? e : document.createElement("div");
      }return t;
    }function we(t, e) {
      var n = document.createElement(t);return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n);
    }function Ae(t, e) {
      return document.createElementNS(xo[t], e);
    }function Se(t) {
      return document.createTextNode(t);
    }function Re(t) {
      return document.createComment(t);
    }function ke(t, e, n) {
      t.insertBefore(e, n);
    }function Oe(t, e) {
      t.removeChild(e);
    }function Fe(t, e) {
      t.appendChild(e);
    }function Le(t) {
      return t.parentNode;
    }function Ne(t) {
      return t.nextSibling;
    }function Ie(t) {
      return t.tagName;
    }function xe(t, e) {
      t.textContent = e;
    }function $e(t, e, n) {
      t.setAttribute(e, n);
    }function Ue(t, e) {
      var n = t.data.ref;if (n) {
        var o = t.context,
            r = t.componentInstance || t.elm,
            a = o.$refs;e ? Array.isArray(a[n]) ? i(a[n], r) : a[n] === r && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) && a[n].indexOf(r) < 0 ? a[n].push(r) : a[n] = [r] : a[n] = r;
      }
    }function De(t) {
      return null == t;
    }function Pe(t) {
      return null != t;
    }function Me(t, e) {
      return t.key === e.key && t.tag === e.tag && t.isComment === e.isComment && !t.data == !e.data;
    }function je(t, e, n) {
      var i,
          o,
          r = {};for (i = e; i <= n; ++i) {
        o = t[i].key, Pe(o) && (r[o] = i);
      }return r;
    }function He(t, e) {
      (t.data.directives || e.data.directives) && ze(t, e);
    }function ze(t, e) {
      var n,
          i,
          o,
          r = t === Ho,
          a = e === Ho,
          s = Ge(t.data.directives, t.context),
          c = Ge(e.data.directives, e.context),
          l = [],
          u = [];for (n in c) {
        i = s[n], o = c[n], i ? (o.oldValue = i.value, Be(o, "update", e, t), o.def && o.def.componentUpdated && u.push(o)) : (Be(o, "bind", e, t), o.def && o.def.inserted && l.push(o));
      }if (l.length) {
        var f = function f() {
          for (var n = 0; n < l.length; n++) {
            Be(l[n], "inserted", e, t);
          }
        };r ? V(e.data.hook || (e.data.hook = {}), "insert", f) : f();
      }if (u.length && V(e.data.hook || (e.data.hook = {}), "postpatch", function () {
        for (var n = 0; n < u.length; n++) {
          Be(u[n], "componentUpdated", e, t);
        }
      }), !r) for (n in s) {
        c[n] || Be(s[n], "unbind", t, t, a);
      }
    }function Ge(t, e) {
      var n = Object.create(null);if (!t) return n;var i, o;for (i = 0; i < t.length; i++) {
        o = t[i], o.modifiers || (o.modifiers = Wo), n[We(o)] = o, o.def = U(e.$options, "directives", o.name, !0);
      }return n;
    }function We(t) {
      return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
    }function Be(t, e, n, i, o) {
      var r = t.def && t.def[e];r && r(n.elm, t, n, i, o);
    }function Ye(t, e) {
      if (t.data.attrs || e.data.attrs) {
        var n,
            i,
            o = e.elm,
            r = t.data.attrs || {},
            a = e.data.attrs || {};a.__ob__ && (a = e.data.attrs = l({}, a));for (n in a) {
          i = a[n], r[n] !== i && Ve(o, n, i);
        }Li && a.value !== r.value && Ve(o, "value", a.value);for (n in r) {
          null == a[n] && (Lo(n) ? o.removeAttributeNS(Fo, No(n)) : ko(n) || o.removeAttribute(n));
        }
      }
    }function Ve(t, e, n) {
      Oo(e) ? Io(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : ko(e) ? t.setAttribute(e, Io(n) || "false" === n ? "false" : "true") : Lo(e) ? Io(n) ? t.removeAttributeNS(Fo, No(e)) : t.setAttributeNS(Fo, e, n) : Io(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
    }function Xe(t, e) {
      var n = e.elm,
          i = e.data,
          o = t.data;if (i.staticClass || i.class || o && (o.staticClass || o.class)) {
        var r = ve(e),
            a = n._transitionClasses;a && (r = ye(r, be(a))), r !== n._prevClass && (n.setAttribute("class", r), n._prevClass = r);
      }
    }function qe(t) {
      var e;t[Xo] && (e = Fi ? "change" : "input", t[e] = [].concat(t[Xo], t[e] || []), delete t[Xo]), t[qo] && (e = $i ? "click" : "change", t[e] = [].concat(t[qo], t[e] || []), delete t[qo]);
    }function Ke(t, _e2, n, i) {
      if (n) {
        var o = _e2,
            r = wo;_e2 = function e(n) {
          null !== (1 === arguments.length ? o(n) : o.apply(null, arguments)) && Qe(t, _e2, i, r);
        };
      }wo.addEventListener(t, _e2, i);
    }function Qe(t, e, n, i) {
      (i || wo).removeEventListener(t, e, n);
    }function Ze(t, e) {
      if (t.data.on || e.data.on) {
        var n = e.data.on || {},
            i = t.data.on || {};wo = e.elm, qe(n), Y(n, i, Ke, Qe, e.context);
      }
    }function Je(t, e) {
      if (t.data.domProps || e.data.domProps) {
        var n,
            i,
            o = e.elm,
            r = t.data.domProps || {},
            a = e.data.domProps || {};a.__ob__ && (a = e.data.domProps = l({}, a));for (n in r) {
          null == a[n] && (o[n] = "");
        }for (n in a) {
          if (i = a[n], "textContent" !== n && "innerHTML" !== n || (e.children && (e.children.length = 0), i !== r[n])) if ("value" === n) {
            o._value = i;var s = null == i ? "" : String(i);tn(o, e, s) && (o.value = s);
          } else o[n] = i;
        }
      }
    }function tn(t, e, n) {
      return !t.composing && ("option" === e.tag || en(t, n) || nn(t, n));
    }function en(t, e) {
      return document.activeElement !== t && t.value !== e;
    }function nn(t, n) {
      var i = t.value,
          o = t._vModifiers;return o && o.number || "number" === t.type ? e(i) !== e(n) : o && o.trim ? i.trim() !== n.trim() : i !== n;
    }function on(t) {
      var e = rn(t.style);return t.staticStyle ? l(t.staticStyle, e) : e;
    }function rn(t) {
      return Array.isArray(t) ? d(t) : "string" == typeof t ? Zo(t) : t;
    }function an(t, e) {
      var n,
          i = {};if (e) for (var o = t; o.componentInstance;) {
        o = o.componentInstance._vnode, o.data && (n = on(o.data)) && l(i, n);
      }(n = on(t.data)) && l(i, n);for (var r = t; r = r.parent;) {
        r.data && (n = on(r.data)) && l(i, n);
      }return i;
    }function sn(t, e) {
      var n = e.data,
          i = t.data;if (n.staticStyle || n.style || i.staticStyle || i.style) {
        var o,
            r,
            a = e.elm,
            s = t.data.staticStyle,
            c = t.data.style || {},
            u = s || c,
            f = rn(e.data.style) || {};e.data.style = f.__ob__ ? l({}, f) : f;var d = an(e, !0);for (r in u) {
          null == d[r] && er(a, r, "");
        }for (r in d) {
          (o = d[r]) !== u[r] && er(a, r, null == o ? "" : o);
        }
      }
    }function cn(t, e) {
      if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
        return t.classList.add(e);
      }) : t.classList.add(e);else {
        var n = " " + (t.getAttribute("class") || "") + " ";n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
      }
    }function ln(t, e) {
      if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
        return t.classList.remove(e);
      }) : t.classList.remove(e);else {
        for (var n = " " + (t.getAttribute("class") || "") + " ", i = " " + e + " "; n.indexOf(i) >= 0;) {
          n = n.replace(i, " ");
        }t.setAttribute("class", n.trim());
      }
    }function un(t) {
      if (t) {
        if ("object" === (void 0 === t ? "undefined" : mi(t))) {
          var e = {};return t.css !== !1 && l(e, rr(t.name || "v")), l(e, t), e;
        }return "string" == typeof t ? rr(t) : void 0;
      }
    }function fn(t) {
      pr(function () {
        pr(t);
      });
    }function dn(t, e) {
      (t._transitionClasses || (t._transitionClasses = [])).push(e), cn(t, e);
    }function pn(t, e) {
      t._transitionClasses && i(t._transitionClasses, e), ln(t, e);
    }function mn(t, e, n) {
      var i = hn(t, e),
          o = i.type,
          r = i.timeout,
          a = i.propCount;if (!o) return n();var s = o === sr ? ur : dr,
          c = 0,
          l = function l() {
        t.removeEventListener(s, u), n();
      },
          u = function u(e) {
        e.target === t && ++c >= a && l();
      };setTimeout(function () {
        c < a && l();
      }, r + 1), t.addEventListener(s, u);
    }function hn(t, e) {
      var n,
          i = window.getComputedStyle(t),
          o = i[lr + "Delay"].split(", "),
          r = i[lr + "Duration"].split(", "),
          a = vn(o, r),
          s = i[fr + "Delay"].split(", "),
          c = i[fr + "Duration"].split(", "),
          l = vn(s, c),
          u = 0,
          f = 0;return e === sr ? a > 0 && (n = sr, u = a, f = r.length) : e === cr ? l > 0 && (n = cr, u = l, f = c.length) : (u = Math.max(a, l), n = u > 0 ? a > l ? sr : cr : null, f = n ? n === sr ? r.length : c.length : 0), { type: n, timeout: u, propCount: f, hasTransform: n === sr && mr.test(i[lr + "Property"]) };
    }function vn(t, e) {
      for (; t.length < e.length;) {
        t = t.concat(t);
      }return Math.max.apply(null, e.map(function (e, n) {
        return gn(e) + gn(t[n]);
      }));
    }function gn(t) {
      return 1e3 * Number(t.slice(0, -1));
    }function _n(t, n) {
      var i = t.elm;i._leaveCb && (i._leaveCb.cancelled = !0, i._leaveCb());var o = un(t.data.transition);if (o && !i._enterCb && 1 === i.nodeType) {
        for (var r = o.css, a = o.type, s = o.enterClass, c = o.enterToClass, l = o.enterActiveClass, f = o.appearClass, d = o.appearToClass, p = o.appearActiveClass, m = o.beforeEnter, h = o.enter, g = o.afterEnter, _ = o.enterCancelled, y = o.beforeAppear, b = o.appear, C = o.afterAppear, E = o.appearCancelled, T = o.duration, w = oo, A = oo.$vnode; A && A.parent;) {
          A = A.parent, w = A.context;
        }var S = !w._isMounted || !t.isRootInsert;if (!S || b || "" === b) {
          var R = S && f ? f : s,
              k = S && p ? p : l,
              O = S && d ? d : c,
              F = S ? y || m : m,
              L = S && "function" == typeof b ? b : h,
              N = S ? C || g : g,
              I = S ? E || _ : _,
              x = e(u(T) ? T.enter : T),
              $ = r !== !1 && !Li,
              U = Cn(L),
              D = i._enterCb = v(function () {
            $ && (pn(i, O), pn(i, k)), D.cancelled ? ($ && pn(i, R), I && I(i)) : N && N(i), i._enterCb = null;
          });t.data.show || V(t.data.hook || (t.data.hook = {}), "insert", function () {
            var e = i.parentNode,
                n = e && e._pending && e._pending[t.key];n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), L && L(i, D);
          }), F && F(i), $ && (dn(i, R), dn(i, k), fn(function () {
            dn(i, O), pn(i, R), D.cancelled || U || (bn(x) ? setTimeout(D, x) : mn(i, a, D));
          })), t.data.show && (n && n(), L && L(i, D)), $ || U || D();
        }
      }
    }function yn(t, n) {
      function i() {
        E.cancelled || (t.data.show || ((o.parentNode._pending || (o.parentNode._pending = {}))[t.key] = t), d && d(o), y && (dn(o, c), dn(o, f), fn(function () {
          dn(o, l), pn(o, c), E.cancelled || b || (bn(C) ? setTimeout(E, C) : mn(o, s, E));
        })), p && p(o, E), y || b || E());
      }var o = t.elm;o._enterCb && (o._enterCb.cancelled = !0, o._enterCb());var r = un(t.data.transition);if (!r) return n();if (!o._leaveCb && 1 === o.nodeType) {
        var a = r.css,
            s = r.type,
            c = r.leaveClass,
            l = r.leaveToClass,
            f = r.leaveActiveClass,
            d = r.beforeLeave,
            p = r.leave,
            m = r.afterLeave,
            h = r.leaveCancelled,
            g = r.delayLeave,
            _ = r.duration,
            y = a !== !1 && !Li,
            b = Cn(p),
            C = e(u(_) ? _.leave : _),
            E = o._leaveCb = v(function () {
          o.parentNode && o.parentNode._pending && (o.parentNode._pending[t.key] = null), y && (pn(o, l), pn(o, f)), E.cancelled ? (y && pn(o, c), h && h(o)) : (n(), m && m(o)), o._leaveCb = null;
        });g ? g(i) : i();
      }
    }function bn(t) {
      return "number" == typeof t && !isNaN(t);
    }function Cn(t) {
      if (!t) return !1;var e = t.fns;return e ? Cn(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
    }function En(t, e) {
      e.data.show || _n(e);
    }function Tn(t, e, n) {
      var i = e.value,
          o = t.multiple;if (!o || Array.isArray(i)) {
        for (var r, a, s = 0, c = t.options.length; s < c; s++) {
          if (a = t.options[s], o) r = h(i, An(a)) > -1, a.selected !== r && (a.selected = r);else if (m(An(a), i)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
        }o || (t.selectedIndex = -1);
      }
    }function wn(t, e) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (m(An(e[n]), t)) return !1;
      }return !0;
    }function An(t) {
      return "_value" in t ? t._value : t.value;
    }function Sn(t) {
      t.target.composing = !0;
    }function Rn(t) {
      t.target.composing = !1, kn(t.target, "input");
    }function kn(t, e) {
      var n = document.createEvent("HTMLEvents");n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }function On(t) {
      return !t.componentInstance || t.data && t.data.transition ? t : On(t.componentInstance._vnode);
    }function Fn(t) {
      var e = t && t.componentOptions;return e && e.Ctor.options.abstract ? Fn(Q(e.children)) : t;
    }function Ln(t) {
      var e = {},
          n = t.$options;for (var i in n.propsData) {
        e[i] = t[i];
      }var o = n._parentListeners;for (var r in o) {
        e[yi(r)] = o[r];
      }return e;
    }function Nn(t, e) {
      return (/\d-keep-alive$/.test(e.tag) ? t("keep-alive") : null
      );
    }function In(t) {
      for (; t = t.parent;) {
        if (t.data.transition) return !0;
      }
    }function xn(t, e) {
      return e.key === t.key && e.tag === t.tag;
    }function $n(t) {
      t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }function Un(t) {
      t.data.newPos = t.elm.getBoundingClientRect();
    }function Dn(t) {
      var e = t.data.pos,
          n = t.data.newPos,
          i = e.left - n.left,
          o = e.top - n.top;if (i || o) {
        t.data.moved = !0;var r = t.elm.style;r.transform = r.WebkitTransform = "translate(" + i + "px," + o + "px)", r.transitionDuration = "0s";
      }
    }function Pn(t) {
      Pr && (t._devtoolHook = Pr, Pr.emit("vuex:init", t), Pr.on("vuex:travel-to-state", function (e) {
        t.replaceState(e);
      }), t.subscribe(function (t, e) {
        Pr.emit("vuex:mutation", t, e);
      }));
    }function Mn(t, e) {
      Object.keys(t).forEach(function (n) {
        return e(t[n], n);
      });
    }function jn(t) {
      return null !== t && "object" === (void 0 === t ? "undefined" : mi(t));
    }function Hn(t) {
      return t && "function" == typeof t.then;
    }function zn(t, e) {
      if (!t) throw new Error("[vuex] " + e);
    }function Gn(t, e) {
      if (t.update(e), e.modules) for (var n in e.modules) {
        if (!t.getChild(n)) return void console.warn("[vuex] trying to add a new module '" + n + "' on hot reloading, manual reload is needed");Gn(t.getChild(n), e.modules[n]);
      }
    }function Wn(t, e) {
      t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null);var n = t.state;Yn(t, n, [], t._modules.root, !0), Bn(t, n, e);
    }function Bn(t, e, n) {
      var i = t._vm;t.getters = {};var o = t._wrappedGetters,
          r = {};Mn(o, function (e, n) {
        r[n] = function () {
          return e(t);
        }, Object.defineProperty(t.getters, n, { get: function get$$1() {
            return t._vm[n];
          }, enumerable: !0 });
      });var a = zr.config.silent;zr.config.silent = !0, t._vm = new zr({ data: { $$state: e }, computed: r }), zr.config.silent = a, t.strict && Zn(t), i && (n && t._withCommit(function () {
        i._data.$$state = null;
      }), zr.nextTick(function () {
        return i.$destroy();
      }));
    }function Yn(t, e, n, i, o) {
      var r = !n.length,
          a = t._modules.getNamespace(n);if (a && (t._modulesNamespaceMap[a] = i), !r && !o) {
        var s = Jn(e, n.slice(0, -1)),
            c = n[n.length - 1];t._withCommit(function () {
          zr.set(s, c, i.state);
        });
      }var l = i.context = Vn(t, a, n);i.forEachMutation(function (e, n) {
        qn(t, a + n, e, l);
      }), i.forEachAction(function (e, n) {
        Kn(t, a + n, e, l);
      }), i.forEachGetter(function (e, n) {
        Qn(t, a + n, e, l);
      }), i.forEachChild(function (i, r) {
        Yn(t, e, n.concat(r), i, o);
      });
    }function Vn(t, e, n) {
      var i = "" === e,
          o = { dispatch: i ? t.dispatch : function (n, i, o) {
          var r = ti(n, i, o),
              a = r.payload,
              s = r.options,
              c = r.type;return s && s.root || (c = e + c, t._actions[c]) ? t.dispatch(c, a) : void console.error("[vuex] unknown local action type: " + r.type + ", global type: " + c);
        }, commit: i ? t.commit : function (n, i, o) {
          var r = ti(n, i, o),
              a = r.payload,
              s = r.options,
              c = r.type;if (!(s && s.root || (c = e + c, t._mutations[c]))) return void console.error("[vuex] unknown local mutation type: " + r.type + ", global type: " + c);t.commit(c, a, s);
        } };return Object.defineProperties(o, { getters: { get: i ? function () {
            return t.getters;
          } : function () {
            return Xn(t, e);
          } }, state: { get: function get$$1() {
            return Jn(t.state, n);
          } } }), o;
    }function Xn(t, e) {
      var n = {},
          i = e.length;return Object.keys(t.getters).forEach(function (o) {
        if (o.slice(0, i) === e) {
          var r = o.slice(i);Object.defineProperty(n, r, { get: function get$$1() {
              return t.getters[o];
            }, enumerable: !0 });
        }
      }), n;
    }function qn(t, e, n, i) {
      (t._mutations[e] || (t._mutations[e] = [])).push(function (t) {
        n(i.state, t);
      });
    }function Kn(t, e, n, i) {
      (t._actions[e] || (t._actions[e] = [])).push(function (e, o) {
        var r = n({ dispatch: i.dispatch, commit: i.commit, getters: i.getters, state: i.state, rootGetters: t.getters, rootState: t.state }, e, o);return Hn(r) || (r = Promise.resolve(r)), t._devtoolHook ? r.catch(function (e) {
          throw t._devtoolHook.emit("vuex:error", e), e;
        }) : r;
      });
    }function Qn(t, e, n, i) {
      if (t._wrappedGetters[e]) return void console.error("[vuex] duplicate getter key: " + e);t._wrappedGetters[e] = function (t) {
        return n(i.state, i.getters, t.state, t.getters);
      };
    }function Zn(t) {
      t._vm.$watch(function () {
        return this._data.$$state;
      }, function () {
        zn(t._committing, "Do not mutate vuex store state outside mutation handlers.");
      }, { deep: !0, sync: !0 });
    }function Jn(t, e) {
      return e.length ? e.reduce(function (t, e) {
        return t[e];
      }, t) : t;
    }function ti(t, e, n) {
      return jn(t) && t.type && (n = e, e = t, t = t.type), zn("string" == typeof t, "Expects string as the type, but found " + (void 0 === t ? "undefined" : mi(t)) + "."), { type: t, payload: e, options: n };
    }function ei(t) {
      if (zr) return void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");zr = t, Dr(zr);
    }function ni(t) {
      return Array.isArray(t) ? t.map(function (t) {
        return { key: t, val: t };
      }) : Object.keys(t).map(function (e) {
        return { key: e, val: t[e] };
      });
    }function ii(t) {
      return function (e, n) {
        return "string" != typeof e ? (n = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n);
      };
    }function oi(t, e, n) {
      var i = t._modulesNamespaceMap[n];return i || console.error("[vuex] module namespace not found in " + e + "(): " + n), i;
    }function ri(t, e, n) {
      function i(e) {
        var n = d,
            i = p;return d = p = void 0, _ = e, h = t.apply(i, n);
      }function o(t) {
        return _ = t, v = setTimeout(s, e), y ? i(t) : h;
      }function r(t) {
        var n = t - g,
            i = t - _,
            o = e - n;return b ? es(o, m - i) : o;
      }function a(t) {
        var n = t - g,
            i = t - _;return void 0 === g || n >= e || n < 0 || b && i >= m;
      }function s() {
        var t = ns();if (a(t)) return c(t);v = setTimeout(s, r(t));
      }function c(t) {
        return v = void 0, C && d ? i(t) : (d = p = void 0, h);
      }function l() {
        void 0 !== v && clearTimeout(v), _ = 0, d = g = p = v = void 0;
      }function u() {
        return void 0 === v ? h : c(ns());
      }function f() {
        var t = ns(),
            n = a(t);if (d = arguments, p = this, g = t, n) {
          if (void 0 === v) return o(g);if (b) return v = setTimeout(s, e), i(g);
        }return void 0 === v && (v = setTimeout(s, e)), h;
      }var d,
          p,
          m,
          h,
          v,
          g,
          _ = 0,
          y = !1,
          b = !1,
          C = !0;if ("function" != typeof t) throw new TypeError(Ha);return e = ui(e) || 0, si(n) && (y = !!n.leading, b = "maxWait" in n, m = b ? ts(ui(n.maxWait) || 0, e) : m, C = "trailing" in n ? !!n.trailing : C), f.cancel = l, f.flush = u, f;
    }function ai(t, e, n) {
      var i = !0,
          o = !0;if ("function" != typeof t) throw new TypeError(Ha);return si(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), ri(t, e, { leading: i, maxWait: e, trailing: o });
    }function si(t) {
      var e = void 0 === t ? "undefined" : mi(t);return !!t && ("object" == e || "function" == e);
    }function ci(t) {
      return !!t && "object" == (void 0 === t ? "undefined" : mi(t));
    }function li(t) {
      return "symbol" == (void 0 === t ? "undefined" : mi(t)) || ci(t) && Ja.call(t) == Ga;
    }function ui(t) {
      if ("number" == typeof t) return t;if (li(t)) return za;if (si(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;t = si(e) ? e + "" : e;
      }if ("string" != typeof t) return 0 === t ? t : +t;t = t.replace(Wa, "");var n = Ya.test(t);return n || Va.test(t) ? Xa(t.slice(2), n ? 2 : 8) : Ba.test(t) ? za : +t;
    }!function (t) {
      function e() {}function n(t, e) {
        return function () {
          t.apply(e, arguments);
        };
      }function i(t) {
        if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof t) throw new TypeError("not a function");this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(t, this);
      }function o(t, e) {
        for (; 3 === t._state;) {
          t = t._value;
        }if (0 === t._state) return void t._deferreds.push(e);t._handled = !0, i._immediateFn(function () {
          var n = 1 === t._state ? e.onFulfilled : e.onRejected;if (null === n) return void (1 === t._state ? r : a)(e.promise, t._value);var i;try {
            i = n(t._value);
          } catch (t) {
            return void a(e.promise, t);
          }r(e.promise, i);
        });
      }function r(t, e) {
        try {
          if (e === t) throw new TypeError("A promise cannot be resolved with itself.");if (e && ("object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) || "function" == typeof e)) {
            var o = e.then;if (e instanceof i) return t._state = 3, t._value = e, void s(t);if ("function" == typeof o) return void l(n(o, e), t);
          }t._state = 1, t._value = e, s(t);
        } catch (e) {
          a(t, e);
        }
      }function a(t, e) {
        t._state = 2, t._value = e, s(t);
      }function s(t) {
        2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
          t._handled || i._unhandledRejectionFn(t._value);
        });for (var e = 0, n = t._deferreds.length; e < n; e++) {
          o(t, t._deferreds[e]);
        }t._deferreds = null;
      }function c(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
      }function l(t, e) {
        var n = !1;try {
          t(function (t) {
            n || (n = !0, r(e, t));
          }, function (t) {
            n || (n = !0, a(e, t));
          });
        } catch (t) {
          if (n) return;n = !0, a(e, t);
        }
      }var u = setTimeout;i.prototype.catch = function (t) {
        return this.then(null, t);
      }, i.prototype.then = function (t, n) {
        var i = new this.constructor(e);return o(this, new c(t, n, i)), i;
      }, i.all = function (t) {
        var e = Array.prototype.slice.call(t);return new i(function (t, n) {
          function i(r, a) {
            try {
              if (a && ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" == typeof a)) {
                var s = a.then;if ("function" == typeof s) return void s.call(a, function (t) {
                  i(r, t);
                }, n);
              }e[r] = a, 0 == --o && t(e);
            } catch (t) {
              n(t);
            }
          }if (0 === e.length) return t([]);for (var o = e.length, r = 0; r < e.length; r++) {
            i(r, e[r]);
          }
        });
      }, i.resolve = function (t) {
        return t && "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && t.constructor === i ? t : new i(function (e) {
          e(t);
        });
      }, i.reject = function (t) {
        return new i(function (e, n) {
          n(t);
        });
      }, i.race = function (t) {
        return new i(function (e, n) {
          for (var i = 0, o = t.length; i < o; i++) {
            t[i].then(e, n);
          }
        });
      }, i._immediateFn = "function" == typeof setImmediate && function (t) {
        setImmediate(t);
      } || function (t) {
        u(t, 0);
      }, i._unhandledRejectionFn = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
      }, i._setImmediateFn = function (t) {
        i._immediateFn = t;
      }, i._setUnhandledRejectionFn = function (t) {
        i._unhandledRejectionFn = t;
      }, "undefined" != 'object' && module.exports ? module.exports = i : t.Promise || (t.Promise = i);
    }(this);var fi,
        di,
        pi = { css: { main: "https://static.filestackapi.com/picker/v3/0.3.4/main.css" } },
        mi = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === 'undefined' ? 'undefined' : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === 'undefined' ? 'undefined' : _typeof(t);
    },
        hi = function hi(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    },
        vi = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }return t;
    },
        gi = function gi(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }return n;
      }return Array.from(t);
    },
        _i = (n("slot,component", !0), Object.prototype.hasOwnProperty),
        yi = a(function (t) {
      return t.replace(/-(\w)/g, function (t, e) {
        return e ? e.toUpperCase() : "";
      });
    }),
        bi = a(function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }),
        Ci = a(function (t) {
      return t.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase();
    }),
        Ei = Object.prototype.toString,
        Ti = "[object Object]",
        wi = function wi() {
      return !1;
    },
        Ai = function Ai(t) {
      return t;
    },
        Si = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: wi, isUnknownElement: wi, getTagNamespace: p, parsePlatformTagName: Ai, mustUseProp: wi, _assetTypes: ["component", "directive", "filter"], _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"], _maxUpdateCount: 100 },
        Ri = "__proto__" in {},
        ki = "undefined" != typeof window,
        Oi = ki && window.navigator.userAgent.toLowerCase(),
        Fi = Oi && /msie|trident/.test(Oi),
        Li = Oi && Oi.indexOf("msie 9.0") > 0,
        Ni = Oi && Oi.indexOf("edge/") > 0,
        Ii = Oi && Oi.indexOf("android") > 0,
        xi = Oi && /iphone|ipad|ipod|ios/.test(Oi),
        $i = Oi && /chrome\/\d+/.test(Oi) && !Ni,
        Ui = function Ui() {
      return void 0 === fi && (fi = !ki && "undefined" != typeof commonjsGlobal && "server" === commonjsGlobal.process.env.VUE_ENV), fi;
    },
        Di = ki && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        Pi = "undefined" != typeof Symbol && g(Symbol) && "undefined" != typeof Reflect && g(Reflect.ownKeys),
        Mi = function () {
      function t() {
        i = !1;var t = n.slice(0);n.length = 0;for (var e = 0; e < t.length; e++) {
          t[e]();
        }
      }var e,
          n = [],
          i = !1;if ("undefined" != typeof Promise && g(Promise)) {
        var o = Promise.resolve(),
            r = function r(t) {
          console.error(t);
        };e = function e() {
          o.then(t).catch(r), xi && setTimeout(p);
        };
      } else if ("undefined" == typeof MutationObserver || !g(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) e = function e() {
        setTimeout(t, 0);
      };else {
        var a = 1,
            s = new MutationObserver(t),
            c = document.createTextNode(String(a));s.observe(c, { characterData: !0 }), e = function e() {
          a = (a + 1) % 2, c.data = String(a);
        };
      }return function (t, o) {
        var r;if (n.push(function () {
          t && t.call(o), r && r(o);
        }), i || (i = !0, e()), !t && "undefined" != typeof Promise) return new Promise(function (t) {
          r = t;
        });
      };
    }();di = "undefined" != typeof Set && g(Set) ? Set : function () {
      function t() {
        this.set = Object.create(null);
      }return t.prototype.has = function (t) {
        return this.set[t] === !0;
      }, t.prototype.add = function (t) {
        this.set[t] = !0;
      }, t.prototype.clear = function () {
        this.set = Object.create(null);
      }, t;
    }();var ji = Object.freeze({}),
        Hi = /[^\w.$]/,
        zi = p,
        Gi = 0,
        Wi = function Wi() {
      this.id = Gi++, this.subs = [];
    };Wi.prototype.addSub = function (t) {
      this.subs.push(t);
    }, Wi.prototype.removeSub = function (t) {
      i(this.subs, t);
    }, Wi.prototype.depend = function () {
      Wi.target && Wi.target.addDep(this);
    }, Wi.prototype.notify = function () {
      for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) {
        t[e].update();
      }
    }, Wi.target = null;var Bi = [],
        Yi = Array.prototype,
        Vi = Object.create(Yi);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
      var e = Yi[t];y(Vi, t, function () {
        for (var n = arguments, i = arguments.length, o = new Array(i); i--;) {
          o[i] = n[i];
        }var r,
            a = e.apply(this, o),
            s = this.__ob__;switch (t) {case "push":
            r = o;break;case "unshift":
            r = o;break;case "splice":
            r = o.slice(2);}return r && s.observeArray(r), s.dep.notify(), a;
      });
    });var Xi = Object.getOwnPropertyNames(Vi),
        qi = { shouldConvert: !0, isSettingProps: !1 },
        Ki = function Ki(t) {
      if (this.value = t, this.dep = new Wi(), this.vmCount = 0, y(t, "__ob__", this), Array.isArray(t)) {
        (Ri ? T : w)(t, Vi, Xi), this.observeArray(t);
      } else this.walk(t);
    };Ki.prototype.walk = function (t) {
      for (var e = Object.keys(t), n = 0; n < e.length; n++) {
        S(t, e[n], t[e[n]]);
      }
    }, Ki.prototype.observeArray = function (t) {
      for (var e = 0, n = t.length; e < n; e++) {
        A(t[e]);
      }
    };var Qi = Si.optionMergeStrategies;Qi.data = function (t, e, n) {
      return n ? t || e ? function () {
        var i = "function" == typeof e ? e.call(n) : e,
            o = "function" == typeof t ? t.call(n) : void 0;return i ? F(i, o) : o;
      } : void 0 : e ? "function" != typeof e ? t : t ? function () {
        return F(e.call(this), t.call(this));
      } : e : t;
    }, Si._lifecycleHooks.forEach(function (t) {
      Qi[t] = L;
    }), Si._assetTypes.forEach(function (t) {
      Qi[t + "s"] = N;
    }), Qi.watch = function (t, e) {
      if (!e) return Object.create(t || null);if (!t) return e;var n = {};l(n, t);for (var i in e) {
        var o = n[i],
            r = e[i];o && !Array.isArray(o) && (o = [o]), n[i] = o ? o.concat(r) : [r];
      }return n;
    }, Qi.props = Qi.methods = Qi.computed = function (t, e) {
      if (!e) return Object.create(t || null);if (!t) return e;var n = Object.create(null);return l(n, t), l(n, e), n;
    };var Zi = function Zi(t, e) {
      return void 0 === e ? t : e;
    },
        Ji = function Ji(t, e, n, i, o, r, a) {
      this.tag = t, this.data = e, this.children = n, this.text = i, this.elm = o, this.ns = void 0, this.context = r, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1;
    },
        to = { child: {} };to.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(Ji.prototype, to);var eo,
        no = function no() {
      var t = new Ji();return t.text = "", t.isComment = !0, t;
    },
        io = a(function (t) {
      var e = "~" === t.charAt(0);t = e ? t.slice(1) : t;var n = "!" === t.charAt(0);return t = n ? t.slice(1) : t, { name: t, once: e, capture: n };
    }),
        oo = null,
        ro = [],
        ao = {},
        so = !1,
        co = !1,
        lo = 0,
        uo = 0,
        fo = function fo(t, e, n, i) {
      this.vm = t, t._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++uo, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new di(), this.newDepIds = new di(), this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = b(e), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
    };fo.prototype.get = function () {
      C(this);var t,
          e = this.vm;if (this.user) try {
        t = this.getter.call(e, e);
      } catch (t) {
        H(t, e, 'getter for watcher "' + this.expression + '"');
      } else t = this.getter.call(e, e);return this.deep && ht(t), E(), this.cleanupDeps(), t;
    }, fo.prototype.addDep = function (t) {
      var e = t.id;this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }, fo.prototype.cleanupDeps = function () {
      for (var t = this, e = this.deps.length; e--;) {
        var n = t.deps[e];t.newDepIds.has(n.id) || n.removeSub(t);
      }var i = this.depIds;this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0;
    }, fo.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : mt(this);
    }, fo.prototype.run = function () {
      if (this.active) {
        var t = this.get();if (t !== this.value || u(t) || this.deep) {
          var e = this.value;if (this.value = t, this.user) try {
            this.cb.call(this.vm, t, e);
          } catch (t) {
            H(t, this.vm, 'callback for watcher "' + this.expression + '"');
          } else this.cb.call(this.vm, t, e);
        }
      }
    }, fo.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, fo.prototype.depend = function () {
      for (var t = this, e = this.deps.length; e--;) {
        t.deps[e].depend();
      }
    }, fo.prototype.teardown = function () {
      var t = this;if (this.active) {
        this.vm._isBeingDestroyed || i(this.vm._watchers, this);for (var e = this.deps.length; e--;) {
          t.deps[e].removeSub(t);
        }this.active = !1;
      }
    };var po = new di(),
        mo = { enumerable: !0, configurable: !0, get: p, set: p },
        ho = { lazy: !0 },
        vo = { init: Ft, prepatch: Lt, insert: Nt, destroy: It },
        go = Object.keys(vo),
        _o = 1,
        yo = 2,
        bo = 0;!function (t) {
      t.prototype._init = function (t) {
        var e = this;e._uid = bo++, e._isVue = !0, t && t._isComponent ? ee(e, t) : e.$options = $(ne(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, rt(e), Z(e), Zt(e), ft(e, "beforeCreate"), te(e), _t(e), Jt(e), ft(e, "created"), e.$options.el && e.$mount(e.$options.el);
      };
    }(re), function (t) {
      var e = {};e.get = function () {
        return this._data;
      };var n = {};n.get = function () {
        return this._props;
      }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = R, t.prototype.$delete = k, t.prototype.$watch = function (t, e, n) {
        var i = this;n = n || {}, n.user = !0;var o = new fo(i, t, e, n);return n.immediate && e.call(i, o.value), function () {
          o.teardown();
        };
      };
    }(re), function (t) {
      var e = /^hook:/;t.prototype.$on = function (t, n) {
        var i = this,
            o = this;if (Array.isArray(t)) for (var r = 0, a = t.length; r < a; r++) {
          i.$on(t[r], n);
        } else (o._events[t] || (o._events[t] = [])).push(n), e.test(t) && (o._hasHookEvent = !0);return o;
      }, t.prototype.$once = function (t, e) {
        function n() {
          i.$off(t, n), e.apply(i, arguments);
        }var i = this;return n.fn = e, i.$on(t, n), i;
      }, t.prototype.$off = function (t, e) {
        var n = this,
            i = this;if (!arguments.length) return i._events = Object.create(null), i;if (Array.isArray(t)) {
          for (var o = 0, r = t.length; o < r; o++) {
            n.$off(t[o], e);
          }return i;
        }var a = i._events[t];if (!a) return i;if (1 === arguments.length) return i._events[t] = null, i;for (var s, c = a.length; c--;) {
          if ((s = a[c]) === e || s.fn === e) {
            a.splice(c, 1);break;
          }
        }return i;
      }, t.prototype.$emit = function (t) {
        var e = this,
            n = e._events[t];if (n) {
          n = n.length > 1 ? c(n) : n;for (var i = c(arguments, 1), o = 0, r = n.length; o < r; o++) {
            n[o].apply(e, i);
          }
        }return e;
      };
    }(re), function (t) {
      t.prototype._update = function (t, e) {
        var n = this;n._isMounted && ft(n, "beforeUpdate");var i = n.$el,
            o = n._vnode,
            r = oo;oo = n, n._vnode = t, n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), oo = r, i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, t.prototype.$forceUpdate = function () {
        var t = this;t._watcher && t._watcher.update();
      }, t.prototype.$destroy = function () {
        var t = this;if (!t._isBeingDestroyed) {
          ft(t, "beforeDestroy"), t._isBeingDestroyed = !0;var e = t.$parent;!e || e._isBeingDestroyed || t.$options.abstract || i(e.$children, t), t._watcher && t._watcher.teardown();for (var n = t._watchers.length; n--;) {
            t._watchers[n].teardown();
          }t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, ft(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.__patch__(t._vnode, null);
        }
      };
    }(re), function (n) {
      n.prototype.$nextTick = function (t) {
        return Mi(t, this);
      }, n.prototype._render = function () {
        var t = this,
            e = t.$options,
            n = e.render,
            i = e.staticRenderFns,
            o = e._parentVnode;if (t._isMounted) for (var r in t.$slots) {
          t.$slots[r] = W(t.$slots[r]);
        }t.$scopedSlots = o && o.data.scopedSlots || ji, i && !t._staticTrees && (t._staticTrees = []), t.$vnode = o;var a;try {
          a = n.call(t._renderProxy, t.$createElement);
        } catch (e) {
          H(e, t, "render function"), a = t._vnode;
        }return a instanceof Ji || (a = no()), a.parent = o, a;
      }, n.prototype._o = qt, n.prototype._n = e, n.prototype._s = t, n.prototype._l = Gt, n.prototype._t = Wt, n.prototype._q = m, n.prototype._i = h, n.prototype._m = Xt, n.prototype._f = Bt, n.prototype._k = Yt, n.prototype._b = Vt, n.prototype._v = z, n.prototype._e = no, n.prototype._u = ot;
    }(re);var Co = [String, RegExp],
        Eo = { name: "keep-alive", abstract: !0, props: { include: Co, exclude: Co }, created: function created() {
        this.cache = Object.create(null);
      }, destroyed: function destroyed() {
        var t = this;for (var e in t.cache) {
          he(t.cache[e]);
        }
      }, watch: { include: function include(t) {
          me(this.cache, function (e) {
            return pe(t, e);
          });
        }, exclude: function exclude(t) {
          me(this.cache, function (e) {
            return !pe(t, e);
          });
        } }, render: function render() {
        var t = Q(this.$slots.default),
            e = t && t.componentOptions;if (e) {
          var n = de(e);if (n && (this.include && !pe(this.include, n) || this.exclude && pe(this.exclude, n))) return t;var i = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;this.cache[i] ? t.componentInstance = this.cache[i].componentInstance : this.cache[i] = t, t.data.keepAlive = !0;
        }return t;
      } },
        To = { KeepAlive: Eo };!function (t) {
      var e = {};e.get = function () {
        return Si;
      }, Object.defineProperty(t, "config", e), t.util = { warn: zi, extend: l, mergeOptions: $, defineReactive: S }, t.set = R, t.delete = k, t.nextTick = Mi, t.options = Object.create(null), Si._assetTypes.forEach(function (e) {
        t.options[e + "s"] = Object.create(null);
      }), t.options._base = t, l(t.options.components, To), ae(t), se(t), ce(t), fe(t);
    }(re), Object.defineProperty(re.prototype, "$isServer", { get: Ui }), re.version = "2.2.2";var wo,
        Ao,
        So = n("input,textarea,option,select"),
        Ro = function Ro(t, e, n) {
      return "value" === n && So(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
    },
        ko = n("contenteditable,draggable,spellcheck"),
        Oo = n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        Fo = "http://www.w3.org/1999/xlink",
        Lo = function Lo(t) {
      return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
    },
        No = function No(t) {
      return Lo(t) ? t.slice(6, t.length) : "";
    },
        Io = function Io(t) {
      return null == t || t === !1;
    },
        xo = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
        $o = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
        Uo = n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Do = function Do(t) {
      return $o(t) || Uo(t);
    },
        Po = Object.create(null),
        Mo = Object.freeze({ createElement: we, createElementNS: Ae, createTextNode: Se, createComment: Re, insertBefore: ke, removeChild: Oe, appendChild: Fe, parentNode: Le, nextSibling: Ne, tagName: Ie, setTextContent: xe, setAttribute: $e }),
        jo = { create: function create(t, e) {
        Ue(e);
      }, update: function update(t, e) {
        t.data.ref !== e.data.ref && (Ue(t, !0), Ue(e));
      }, destroy: function destroy(t) {
        Ue(t, !0);
      } },
        Ho = new Ji("", {}, []),
        zo = ["create", "activate", "update", "remove", "destroy"],
        Go = { create: He, update: He, destroy: function destroy(t) {
        He(t, Ho);
      } },
        Wo = Object.create(null),
        Bo = [jo, Go],
        Yo = { create: Ye, update: Ye },
        Vo = { create: Xe, update: Xe },
        Xo = "__r",
        qo = "__c",
        Ko = { create: Ze, update: Ze },
        Qo = { create: Je, update: Je },
        Zo = a(function (t) {
      var e = {};return t.split(/;(?![^(]*\))/g).forEach(function (t) {
        if (t) {
          var n = t.split(/:(.+)/);n.length > 1 && (e[n[0].trim()] = n[1].trim());
        }
      }), e;
    }),
        Jo = /^--/,
        tr = /\s*!important$/,
        er = function er(t, e, n) {
      Jo.test(e) ? t.style.setProperty(e, n) : tr.test(n) ? t.style.setProperty(e, n.replace(tr, ""), "important") : t.style[ir(e)] = n;
    },
        nr = ["Webkit", "Moz", "ms"],
        ir = a(function (t) {
      if (Ao = Ao || document.createElement("div"), "filter" !== (t = yi(t)) && t in Ao.style) return t;for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < nr.length; n++) {
        var i = nr[n] + e;if (i in Ao.style) return i;
      }
    }),
        or = { create: sn, update: sn },
        rr = a(function (t) {
      return { enterClass: t + "-enter", enterToClass: t + "-enter-to", enterActiveClass: t + "-enter-active", leaveClass: t + "-leave", leaveToClass: t + "-leave-to", leaveActiveClass: t + "-leave-active" };
    }),
        ar = ki && !Li,
        sr = "transition",
        cr = "animation",
        lr = "transition",
        ur = "transitionend",
        fr = "animation",
        dr = "animationend";ar && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (lr = "WebkitTransition", ur = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (fr = "WebkitAnimation", dr = "webkitAnimationEnd"));var pr = ki && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
        mr = /\b(transform|all)(,|$)/,
        hr = ki ? { create: En, activate: En, remove: function remove(t, e) {
        t.data.show ? e() : yn(t, e);
      } } : {},
        vr = [Yo, Vo, Ko, Qo, or, hr],
        gr = vr.concat(Bo),
        _r = function (t) {
      function e(t) {
        return new Ji(R.tagName(t).toLowerCase(), {}, [], void 0, t);
      }function i(t, e) {
        function n() {
          0 == --n.listeners && o(t);
        }return n.listeners = e, n;
      }function o(t) {
        var e = R.parentNode(t);e && R.removeChild(e, t);
      }function a(t, e, n, i, o) {
        if (t.isRootInsert = !o, !s(t, e, n, i)) {
          var r = t.data,
              a = t.children,
              c = t.tag;Pe(c) ? (t.elm = t.ns ? R.createElementNS(t.ns, c) : R.createElement(c, t), m(t), f(t, a, e), Pe(r) && p(t, e), u(n, t.elm, i)) : t.isComment ? (t.elm = R.createComment(t.text), u(n, t.elm, i)) : (t.elm = R.createTextNode(t.text), u(n, t.elm, i));
        }
      }function s(t, e, n, i) {
        var o = t.data;if (Pe(o)) {
          var r = Pe(t.componentInstance) && o.keepAlive;if (Pe(o = o.hook) && Pe(o = o.init) && o(t, !1, n, i), Pe(t.componentInstance)) return c(t, e), r && l(t, e, n, i), !0;
        }
      }function c(t, e) {
        t.data.pendingInsert && e.push.apply(e, t.data.pendingInsert), t.elm = t.componentInstance.$el, d(t) ? (p(t, e), m(t)) : (Ue(t), e.push(t));
      }function l(t, e, n, i) {
        for (var o, r = t; r.componentInstance;) {
          if (r = r.componentInstance._vnode, Pe(o = r.data) && Pe(o = o.transition)) {
            for (o = 0; o < A.activate.length; ++o) {
              A.activate[o](Ho, r);
            }e.push(r);break;
          }
        }u(n, t.elm, i);
      }function u(t, e, n) {
        t && (n ? R.insertBefore(t, e, n) : R.appendChild(t, e));
      }function f(t, e, n) {
        if (Array.isArray(e)) for (var i = 0; i < e.length; ++i) {
          a(e[i], n, t.elm, null, !0);
        } else r(t.text) && R.appendChild(t.elm, R.createTextNode(t.text));
      }function d(t) {
        for (; t.componentInstance;) {
          t = t.componentInstance._vnode;
        }return Pe(t.tag);
      }function p(t, e) {
        for (var n = 0; n < A.create.length; ++n) {
          A.create[n](Ho, t);
        }T = t.data.hook, Pe(T) && (T.create && T.create(Ho, t), T.insert && e.push(t));
      }function m(t) {
        for (var e, n = t; n;) {
          Pe(e = n.context) && Pe(e = e.$options._scopeId) && R.setAttribute(t.elm, e, ""), n = n.parent;
        }Pe(e = oo) && e !== t.context && Pe(e = e.$options._scopeId) && R.setAttribute(t.elm, e, "");
      }function h(t, e, n, i, o, r) {
        for (; i <= o; ++i) {
          a(n[i], r, t, e);
        }
      }function v(t) {
        var e,
            n,
            i = t.data;if (Pe(i)) for (Pe(e = i.hook) && Pe(e = e.destroy) && e(t), e = 0; e < A.destroy.length; ++e) {
          A.destroy[e](t);
        }if (Pe(e = t.children)) for (n = 0; n < t.children.length; ++n) {
          v(t.children[n]);
        }
      }function g(t, e, n, i) {
        for (; n <= i; ++n) {
          var r = e[n];Pe(r) && (Pe(r.tag) ? (_(r), v(r)) : o(r.elm));
        }
      }function _(t, e) {
        if (e || Pe(t.data)) {
          var n = A.remove.length + 1;for (e ? e.listeners += n : e = i(t.elm, n), Pe(T = t.componentInstance) && Pe(T = T._vnode) && Pe(T.data) && _(T, e), T = 0; T < A.remove.length; ++T) {
            A.remove[T](t, e);
          }Pe(T = t.data.hook) && Pe(T = T.remove) ? T(t, e) : e();
        } else o(t.elm);
      }function y(t, e, n, i, o) {
        for (var r, s, c, l, u = 0, f = 0, d = e.length - 1, p = e[0], m = e[d], v = n.length - 1, _ = n[0], y = n[v], C = !o; u <= d && f <= v;) {
          De(p) ? p = e[++u] : De(m) ? m = e[--d] : Me(p, _) ? (b(p, _, i), p = e[++u], _ = n[++f]) : Me(m, y) ? (b(m, y, i), m = e[--d], y = n[--v]) : Me(p, y) ? (b(p, y, i), C && R.insertBefore(t, p.elm, R.nextSibling(m.elm)), p = e[++u], y = n[--v]) : Me(m, _) ? (b(m, _, i), C && R.insertBefore(t, m.elm, p.elm), m = e[--d], _ = n[++f]) : (De(r) && (r = je(e, u, d)), s = Pe(_.key) ? r[_.key] : null, De(s) ? (a(_, i, t, p.elm), _ = n[++f]) : (c = e[s], Me(c, _) ? (b(c, _, i), e[s] = void 0, C && R.insertBefore(t, _.elm, p.elm), _ = n[++f]) : (a(_, i, t, p.elm), _ = n[++f])));
        }u > d ? (l = De(n[v + 1]) ? null : n[v + 1].elm, h(t, l, n, f, v, i)) : f > v && g(t, e, u, d);
      }function b(t, e, n, i) {
        if (t !== e) {
          if (e.isStatic && t.isStatic && e.key === t.key && (e.isCloned || e.isOnce)) return e.elm = t.elm, void (e.componentInstance = t.componentInstance);var o,
              r = e.data,
              a = Pe(r);a && Pe(o = r.hook) && Pe(o = o.prepatch) && o(t, e);var s = e.elm = t.elm,
              c = t.children,
              l = e.children;if (a && d(e)) {
            for (o = 0; o < A.update.length; ++o) {
              A.update[o](t, e);
            }Pe(o = r.hook) && Pe(o = o.update) && o(t, e);
          }De(e.text) ? Pe(c) && Pe(l) ? c !== l && y(s, c, l, n, i) : Pe(l) ? (Pe(t.text) && R.setTextContent(s, ""), h(s, null, l, 0, l.length - 1, n)) : Pe(c) ? g(s, c, 0, c.length - 1) : Pe(t.text) && R.setTextContent(s, "") : t.text !== e.text && R.setTextContent(s, e.text), a && Pe(o = r.hook) && Pe(o = o.postpatch) && o(t, e);
        }
      }function C(t, e, n) {
        if (n && t.parent) t.parent.data.pendingInsert = e;else for (var i = 0; i < e.length; ++i) {
          e[i].data.hook.insert(e[i]);
        }
      }function E(t, e, n) {
        e.elm = t;var i = e.tag,
            o = e.data,
            r = e.children;if (Pe(o) && (Pe(T = o.hook) && Pe(T = T.init) && T(e, !0), Pe(T = e.componentInstance))) return c(e, n), !0;if (Pe(i)) {
          if (Pe(r)) if (t.hasChildNodes()) {
            for (var a = !0, s = t.firstChild, l = 0; l < r.length; l++) {
              if (!s || !E(s, r[l], n)) {
                a = !1;break;
              }s = s.nextSibling;
            }if (!a || s) return !1;
          } else f(e, r, n);if (Pe(o)) for (var u in o) {
            if (!k(u)) {
              p(e, n);break;
            }
          }
        } else t.data !== e.text && (t.data = e.text);return !0;
      }var T,
          w,
          A = {},
          S = t.modules,
          R = t.nodeOps;for (T = 0; T < zo.length; ++T) {
        for (A[zo[T]] = [], w = 0; w < S.length; ++w) {
          void 0 !== S[w][zo[T]] && A[zo[T]].push(S[w][zo[T]]);
        }
      }var k = n("attrs,style,class,staticClass,staticStyle,key");return function (t, n, i, o, r, s) {
        if (!n) return void (t && v(t));var c = !1,
            l = [];if (t) {
          var u = Pe(t.nodeType);if (!u && Me(t, n)) b(t, n, l, o);else {
            if (u) {
              if (1 === t.nodeType && t.hasAttribute("server-rendered") && (t.removeAttribute("server-rendered"), i = !0), i && E(t, n, l)) return C(n, l, !0), t;t = e(t);
            }var f = t.elm,
                p = R.parentNode(f);if (a(n, l, f._leaveCb ? null : p, R.nextSibling(f)), n.parent) {
              for (var m = n.parent; m;) {
                m.elm = n.elm, m = m.parent;
              }if (d(n)) for (var h = 0; h < A.create.length; ++h) {
                A.create[h](Ho, n.parent);
              }
            }null !== p ? g(p, [t], 0, 0) : Pe(t.tag) && v(t);
          }
        } else c = !0, a(n, l, r, s);return C(n, l, c), n.elm;
      };
    }({ nodeOps: Mo, modules: gr });Li && document.addEventListener("selectionchange", function () {
      var t = document.activeElement;t && t.vmodel && kn(t, "input");
    });var yr = { inserted: function inserted(t, e, n) {
        if ("select" === n.tag) {
          var i = function i() {
            Tn(t, e, n.context);
          };i(), (Fi || Ni) && setTimeout(i, 0);
        } else "textarea" !== n.tag && "text" !== t.type || (t._vModifiers = e.modifiers, e.modifiers.lazy || (Ii || (t.addEventListener("compositionstart", Sn), t.addEventListener("compositionend", Rn)), Li && (t.vmodel = !0)));
      }, componentUpdated: function componentUpdated(t, e, n) {
        if ("select" === n.tag) {
          Tn(t, e, n.context);(t.multiple ? e.value.some(function (e) {
            return wn(e, t.options);
          }) : e.value !== e.oldValue && wn(e.value, t.options)) && kn(t, "change");
        }
      } },
        br = { bind: function bind(t, e, n) {
        var i = e.value;n = On(n);var o = n.data && n.data.transition,
            r = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;i && o && !Li ? (n.data.show = !0, _n(n, function () {
          t.style.display = r;
        })) : t.style.display = i ? r : "none";
      }, update: function update(t, e, n) {
        var i = e.value;i !== e.oldValue && (n = On(n), n.data && n.data.transition && !Li ? (n.data.show = !0, i ? _n(n, function () {
          t.style.display = t.__vOriginalDisplay;
        }) : yn(n, function () {
          t.style.display = "none";
        })) : t.style.display = i ? t.__vOriginalDisplay : "none");
      }, unbind: function unbind(t, e, n, i, o) {
        o || (t.style.display = t.__vOriginalDisplay);
      } },
        Cr = { model: yr, show: br },
        Er = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] },
        Tr = { name: "transition", props: Er, abstract: !0, render: function render(t) {
        var e = this,
            n = this.$slots.default;if (n && (n = n.filter(function (t) {
          return t.tag;
        }), n.length)) {
          var i = this.mode,
              o = n[0];if (In(this.$vnode)) return o;var a = Fn(o);if (!a) return o;if (this._leaving) return Nn(t, o);var s = "__transition-" + this._uid + "-";a.key = null == a.key ? s + a.tag : r(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;var c = (a.data || (a.data = {})).transition = Ln(this),
              u = this._vnode,
              f = Fn(u);if (a.data.directives && a.data.directives.some(function (t) {
            return "show" === t.name;
          }) && (a.data.show = !0), f && f.data && !xn(a, f)) {
            var d = f && (f.data.transition = l({}, c));if ("out-in" === i) return this._leaving = !0, V(d, "afterLeave", function () {
              e._leaving = !1, e.$forceUpdate();
            }), Nn(t, o);if ("in-out" === i) {
              var p,
                  m = function m() {
                p();
              };V(c, "afterEnter", m), V(c, "enterCancelled", m), V(d, "delayLeave", function (t) {
                p = t;
              });
            }
          }return o;
        }
      } },
        wr = l({ tag: String, moveClass: String }, Er);delete wr.mode;var Ar = { props: wr, render: function render(t) {
        for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, o = this.$slots.default || [], r = this.children = [], a = Ln(this), s = 0; s < o.length; s++) {
          var c = o[s];c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (r.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a);
        }if (i) {
          for (var l = [], u = [], f = 0; f < i.length; f++) {
            var d = i[f];d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? l.push(d) : u.push(d);
          }this.kept = t(e, null, l), this.removed = u;
        }return t(e, null, r);
      }, beforeUpdate: function beforeUpdate() {
        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
      }, updated: function updated() {
        var t = this.prevChildren,
            e = this.moveClass || (this.name || "v") + "-move";if (t.length && this.hasMove(t[0].elm, e)) {
          t.forEach($n), t.forEach(Un), t.forEach(Dn);var n = document.body;n.offsetHeight;t.forEach(function (t) {
            if (t.data.moved) {
              var n = t.elm,
                  i = n.style;dn(n, e), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(ur, n._moveCb = function t(i) {
                i && !/transform$/.test(i.propertyName) || (n.removeEventListener(ur, t), n._moveCb = null, pn(n, e));
              });
            }
          });
        }
      }, methods: { hasMove: function hasMove(t, e) {
          if (!ar) return !1;if (null != this._hasMove) return this._hasMove;var n = t.cloneNode();t._transitionClasses && t._transitionClasses.forEach(function (t) {
            ln(n, t);
          }), cn(n, e), n.style.display = "none", this.$el.appendChild(n);var i = hn(n);return this.$el.removeChild(n), this._hasMove = i.hasTransform;
        } } },
        Sr = { Transition: Tr, TransitionGroup: Ar };re.config.mustUseProp = Ro, re.config.isReservedTag = Do, re.config.getTagNamespace = Ce, re.config.isUnknownElement = Ee, l(re.options.directives, Cr), l(re.options.components, Sr), re.prototype.__patch__ = ki ? _r : p, re.prototype.$mount = function (t, e) {
      return t = t && ki ? Te(t) : void 0, at(this, t, e);
    }, setTimeout(function () {
      Si.devtools && Di && Di.emit("init", re);
    }, 0);var Rr = "undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : {},
        kr = function (t, e) {
      return e = { exports: {} }, t(e, e.exports), e.exports;
    }(function (t, e) {
      "use strict";
      var n = null,
          i = { install: function install(t) {
          var e,
              i = t.version[0];n || (n = new t({ data: function data() {
              return { current: "", locales: {} };
            }, computed: { lang: function lang() {
                return this.current;
              }, locale: function locale() {
                return this.locales[this.current] ? this.locales[this.current] : null;
              } }, methods: { setLang: function setLang(t) {
                this.current !== t && ("" === this.current ? this.$emit("language:init", t) : this.$emit("language:changed", t)), this.current = t, this.$emit("language:modified", t);
              }, setLocales: function setLocales(e) {
                if (e) {
                  var n = Object.create(this.locales);for (var i in e) {
                    n[i] || (n[i] = {}), t.util.extend(n[i], e[i]);
                  }this.locales = Object.create(n), this.$emit("locales:loaded", e);
                }
              }, text: function text(t) {
                return this.locale && this.locale[t] ? this.locale[t] : t;
              } } }), t.prototype.$translate = n), t.mixin((e = {}, e["1" === i ? "init" : "beforeCreate"] = function () {
            this.$translate.setLocales(this.$options.locales);
          }, e.methods = { t: function t(_t2) {
              return this.$translate.text(_t2);
            } }, e.directives = { translate: function (t) {
              t.$translateKey || (t.$translateKey = t.innerText);var e = this.$translate.text(t.$translateKey);t.innerText = e;
            }.bind(n) }, e)), t.locales = function (t) {
            n.$translate.setLocales(t);
          };
        } };t.exports = i;
    }),
        Or = { init: function init() {
        window.filestackInternals.logger.working = !1;
      }, isWorking: function isWorking() {
        return window.filestackInternals.logger.working;
      }, on: function on() {
        window.filestackInternals.logger.working = !0;
      }, off: function off() {
        window.filestackInternals.logger.working = !1;
      } },
        Fr = function t(e, n) {
      var i = function i() {
        for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) {
          i[o] = arguments[o];
        }var r = [].concat(i).map(function (t) {
          return "object" === (void 0 === t ? "undefined" : mi(t)) ? JSON.stringify(t, function (t, e) {
            if ("function" == typeof e) {
              if ("json" === t) try {
                return e();
              } catch (t) {}return "[Function]";
            }return e instanceof File ? "[File name: " + e.name + ", mimetype: " + e.type + ", size: " + e.size + "]" : e;
          }, 2) : t;
        });if (n.isWorking()) {
          var a;(a = console).log.apply(a, ["[" + e + "]"].concat(gi(r)));
        }
      };return i.context = function (i) {
        return t(e + "][" + i, n);
      }, i.on = n.on, i.off = n.off, i;
    }("filestack", Or);!function () {
      var t = void 0;"object" === ("undefined" == typeof window ? "undefined" : mi(window)) && (t = window.filestackInternals, t || (t = {}, window.filestackInternals = t), t.logger || (t.logger = Fr, Or.init())), t;
    }();var Lr = function () {
      var t = void 0;return "object" === ("undefined" == typeof window ? "undefined" : mi(window)) && (t = window.filestackInternals, t || (t = {}, window.filestackInternals = t), t.loader || (t.loader = { modules: {} })), t;
    }(),
        Nr = Lr.loader.modules,
        Ir = function Ir(t) {
      var e = Nr[t];if (e || (Nr[t] = {}, e = Nr[t]), e.instance) return Promise.resolve(e.instance);if (e.promise) return e.promise;var n = new Promise(function (n) {
        var i = function i() {
          e.resolvePromise = n;var i = document.createElement("script");i.src = t, document.body.appendChild(i);
        };!function t() {
          "complete" === document.readyState ? i() : setTimeout(t, 50);
        }();
      });return e.promise = n, n;
    },
        xr = function xr(t) {
      var e = document.getElementsByTagName("script"),
          n = e[e.length - 1],
          i = n.getAttribute("src"),
          o = Nr[i];o.resolvePromise && (o.instance = t, o.resolvePromise(t), delete o.promise, delete o.resolvePromise);
    },
        $r = function $r(t) {
      return null !== document.querySelector('link[href="' + t + '"]') ? Promise.resolve() : new Promise(function (e) {
        var n = document.getElementsByTagName("head")[0],
            i = document.createElement("link"),
            o = function t() {
          e(), i.removeEventListener("load", t);
        };i.rel = "stylesheet", i.href = t, i.addEventListener("load", o), n.appendChild(i);
      });
    },
        Ur = { registerReadyModule: xr, loadModule: Ir, loadCss: $r },
        Dr = function Dr(t) {
      function e() {
        var t = this.$options;t.store ? this.$store = t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store);
      }if (Number(t.version.split(".")[0]) >= 2) {
        var n = t.config._lifecycleHooks.indexOf("init") > -1;t.mixin(n ? { init: e } : { beforeCreate: e });
      } else {
        var i = t.prototype._init;t.prototype._init = function (t) {
          void 0 === t && (t = {}), t.init = t.init ? [e].concat(t.init) : e, i.call(this, t);
        };
      }
    },
        Pr = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        Mr = function Mr(t, e) {
      this.runtime = e, this._children = Object.create(null), this._rawModule = t;
    },
        jr = { state: {}, namespaced: {} };jr.state.get = function () {
      return this._rawModule.state || {};
    }, jr.namespaced.get = function () {
      return !!this._rawModule.namespaced;
    }, Mr.prototype.addChild = function (t, e) {
      this._children[t] = e;
    }, Mr.prototype.removeChild = function (t) {
      delete this._children[t];
    }, Mr.prototype.getChild = function (t) {
      return this._children[t];
    }, Mr.prototype.update = function (t) {
      this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
    }, Mr.prototype.forEachChild = function (t) {
      Mn(this._children, t);
    }, Mr.prototype.forEachGetter = function (t) {
      this._rawModule.getters && Mn(this._rawModule.getters, t);
    }, Mr.prototype.forEachAction = function (t) {
      this._rawModule.actions && Mn(this._rawModule.actions, t);
    }, Mr.prototype.forEachMutation = function (t) {
      this._rawModule.mutations && Mn(this._rawModule.mutations, t);
    }, Object.defineProperties(Mr.prototype, jr);var Hr = function Hr(t) {
      var e = this;this.root = new Mr(t, !1), t.modules && Mn(t.modules, function (t, n) {
        e.register([n], t, !1);
      });
    };Hr.prototype.get = function (t) {
      return t.reduce(function (t, e) {
        return t.getChild(e);
      }, this.root);
    }, Hr.prototype.getNamespace = function (t) {
      var e = this.root;return t.reduce(function (t, n) {
        return e = e.getChild(n), t + (e.namespaced ? n + "/" : "");
      }, "");
    }, Hr.prototype.update = function (t) {
      Gn(this.root, t);
    }, Hr.prototype.register = function (t, e, n) {
      var i = this;void 0 === n && (n = !0);var o = this.get(t.slice(0, -1)),
          r = new Mr(e, n);o.addChild(t[t.length - 1], r), e.modules && Mn(e.modules, function (e, o) {
        i.register(t.concat(o), e, n);
      });
    }, Hr.prototype.unregister = function (t) {
      var e = this.get(t.slice(0, -1)),
          n = t[t.length - 1];e.getChild(n).runtime && e.removeChild(n);
    };var zr,
        Gr = function Gr(t) {
      var e = this;void 0 === t && (t = {}), zn(zr, "must call Vue.use(Vuex) before creating a store instance."), zn("undefined" != typeof Promise, "vuex requires a Promise polyfill in this browser.");var n = t.state;void 0 === n && (n = {});var i = t.plugins;void 0 === i && (i = []);var o = t.strict;void 0 === o && (o = !1), this._committing = !1, this._actions = Object.create(null), this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new Hr(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new zr();var r = this,
          a = this,
          s = a.dispatch,
          c = a.commit;this.dispatch = function (t, e) {
        return s.call(r, t, e);
      }, this.commit = function (t, e, n) {
        return c.call(r, t, e, n);
      }, this.strict = o, Yn(this, n, [], this._modules.root), Bn(this, n), i.concat(Pn).forEach(function (t) {
        return t(e);
      });
    },
        Wr = { state: {} };Wr.state.get = function () {
      return this._vm._data.$$state;
    }, Wr.state.set = function (t) {
      zn(!1, "Use store.replaceState() to explicit replace store state.");
    }, Gr.prototype.commit = function (t, e, n) {
      var i = this,
          o = ti(t, e, n),
          r = o.type,
          a = o.payload,
          s = o.options,
          c = { type: r, payload: a },
          l = this._mutations[r];if (!l) return void console.error("[vuex] unknown mutation type: " + r);this._withCommit(function () {
        l.forEach(function (t) {
          t(a);
        });
      }), this._subscribers.forEach(function (t) {
        return t(c, i.state);
      }), s && s.silent && console.warn("[vuex] mutation type: " + r + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }, Gr.prototype.dispatch = function (t, e) {
      var n = ti(t, e),
          i = n.type,
          o = n.payload,
          r = this._actions[i];return r ? r.length > 1 ? Promise.all(r.map(function (t) {
        return t(o);
      })) : r[0](o) : void console.error("[vuex] unknown action type: " + i);
    }, Gr.prototype.subscribe = function (t) {
      var e = this._subscribers;return e.indexOf(t) < 0 && e.push(t), function () {
        var n = e.indexOf(t);n > -1 && e.splice(n, 1);
      };
    }, Gr.prototype.watch = function (t, e, n) {
      var i = this;return zn("function" == typeof t, "store.watch only accepts a function."), this._watcherVM.$watch(function () {
        return t(i.state, i.getters);
      }, e, n);
    }, Gr.prototype.replaceState = function (t) {
      var e = this;this._withCommit(function () {
        e._vm._data.$$state = t;
      });
    }, Gr.prototype.registerModule = function (t, e) {
      "string" == typeof t && (t = [t]), zn(Array.isArray(t), "module path must be a string or an Array."), this._modules.register(t, e), Yn(this, this.state, t, this._modules.get(t)), Bn(this, this.state);
    }, Gr.prototype.unregisterModule = function (t) {
      var e = this;"string" == typeof t && (t = [t]), zn(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function () {
        var n = Jn(e.state, t.slice(0, -1));zr.delete(n, t[t.length - 1]);
      }), Wn(this);
    }, Gr.prototype.hotUpdate = function (t) {
      this._modules.update(t), Wn(this, !0);
    }, Gr.prototype._withCommit = function (t) {
      var e = this._committing;this._committing = !0, t(), this._committing = e;
    }, Object.defineProperties(Gr.prototype, Wr), "undefined" != typeof window && window.Vue && ei(window.Vue);var Br = ii(function (t, e) {
      var n = {};return ni(e).forEach(function (e) {
        var i = e.key,
            o = e.val;n[i] = function () {
          var e = this.$store.state,
              n = this.$store.getters;if (t) {
            var i = oi(this.$store, "mapState", t);if (!i) return;e = i.context.state, n = i.context.getters;
          }return "function" == typeof o ? o.call(this, e, n) : e[o];
        }, n[i].vuex = !0;
      }), n;
    }),
        Yr = ii(function (t, e) {
      var n = {};return ni(e).forEach(function (e) {
        var i = e.key,
            o = e.val;o = t + o, n[i] = function () {
          for (var e = [], n = arguments.length; n--;) {
            e[n] = arguments[n];
          }if (!t || oi(this.$store, "mapMutations", t)) return this.$store.commit.apply(this.$store, [o].concat(e));
        };
      }), n;
    }),
        Vr = ii(function (t, e) {
      var n = {};return ni(e).forEach(function (e) {
        var i = e.key,
            o = e.val;o = t + o, n[i] = function () {
          if (!t || oi(this.$store, "mapGetters", t)) return o in this.$store.getters ? this.$store.getters[o] : void console.error("[vuex] unknown getter: " + o);
        }, n[i].vuex = !0;
      }), n;
    }),
        Xr = ii(function (t, e) {
      var n = {};return ni(e).forEach(function (e) {
        var i = e.key,
            o = e.val;o = t + o, n[i] = function () {
          for (var e = [], n = arguments.length; n--;) {
            e[n] = arguments[n];
          }if (!t || oi(this.$store, "mapActions", t)) return this.$store.dispatch.apply(this.$store, [o].concat(e));
        };
      }), n;
    }),
        qr = { Store: Gr, install: ei, version: "2.2.1", mapState: Br, mapMutations: Yr, mapGetters: Vr, mapActions: Xr },
        Kr = function Kr(t) {
      return "function" == typeof t.getAsEntry ? t.getAsEntry() : "function" == typeof t.webkitGetAsEntry ? t.webkitGetAsEntry() : void 0;
    },
        Qr = function Qr(t) {
      return [".DS_Store"].indexOf(t) === -1;
    },
        Zr = function Zr(t) {
      for (var e = [], n = [], i = 0; i < t.length; i += 1) {
        var o = t[i];if ("file" === o.kind) {
          var r = o.getAsFile();r ? (e.push(r), n.push(Promise.resolve())) : (r = Kr(o)) && n.push(function t(n) {
            return new Promise(function (i) {
              n.isDirectory ? n.createReader().readEntries(function (e) {
                var n = e.map(function (e) {
                  return t(e);
                });Promise.all(n).then(i);
              }) : n.isFile && n.file(function (t) {
                Qr(t.name) && e.push(t), i();
              });
            });
          }(r));
        } else "string" === o.kind && "text/uri-list" === o.type && n.push(function (t) {
          return new Promise(function (n) {
            t.getAsString(function (t) {
              e.push({ url: t }), n();
            });
          });
        }(o));
      }return Promise.all(n).then(function () {
        return e;
      });
    },
        Jr = function Jr(t) {
      return new Promise(function (e) {
        for (var n = [], i = 0; i < t.length; i += 1) {
          n.push(t[i]);
        }e(n);
      });
    },
        ta = function ta(t) {
      return t.items ? Zr(t.items) : t.files ? Jr(t.files) : Promise.resolve([]);
    },
        ea = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { directives: [{ name: "show", rawName: "v-show", value: t.fileAboutToBeDropped, expression: "fileAboutToBeDropped" }], ref: "dropZone", staticClass: "fsp-dropzone-overlay" }, [n("div", { staticClass: "fsp-dropzone-overlay__text" })]);
      }, staticRenderFns: [], data: function data() {
        return { fileAboutToBeDropped: !1 };
      }, methods: vi({}, qr.mapActions(["addFile", "updateSelectLabelActive"]), { dragenter: function dragenter(t) {
          t.preventDefault(), this.fileAboutToBeDropped = !0, this.updateSelectLabelActive(!0);
        }, dragover: function dragover(t) {
          t.preventDefault();
        }, dragleave: function dragleave() {
          this.fileAboutToBeDropped = !1, this.updateSelectLabelActive(!1);
        }, drop: function drop(t) {
          var e = this;t.preventDefault(), this.fileAboutToBeDropped = !1, ta(t.dataTransfer).then(function (t) {
            t.forEach(function (t) {
              (t instanceof File || t instanceof Blob) && e.addFile(t);
            });
          });
        }, paste: function paste(t) {
          var e = this;ta(t.clipboardData).then(function (t) {
            t.forEach(function (t) {
              t.name = "pasted file", e.addFile(t);
            });
          });
        } }), mounted: function mounted() {
        var t = this.$root.$el,
            e = this.$refs.dropZone;t.addEventListener("dragenter", this.dragenter, !1), e.addEventListener("dragover", this.dragover, !1), e.addEventListener("dragleave", this.dragleave, !1), e.addEventListener("drop", this.drop, !1), t.addEventListener("paste", this.paste, !1);
      } },
        na = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return t.notifications.length > 0 ? n("div", { staticClass: "fsp-notifications__container" }, [n("div", { staticClass: "fsp-notifications__message" }, [n("span", { staticClass: "fsp-label" }, [t._v("Oops!")]), t._v(" " + t._s(t.mostRecentNotification.message))]), n("span", { staticClass: "fsp-icon fsp-notifications__close-button", on: { click: t.removeAllNotifications } })]) : t._e();
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["notifications"]), { mostRecentNotification: function mostRecentNotification() {
          return this.notifications[this.notifications.length - 1];
        } }), methods: vi({}, qr.mapActions(["removeAllNotifications"])) },
        ia = [{ name: "local_file_system", label: "My Device", ui: "local" }, { name: "dropbox", label: "Dropbox", ui: "cloud" }, { name: "evernote", label: "Evernote", ui: "cloud" }, { name: "facebook", label: "Facebook", ui: "cloud" }, { name: "flickr", label: "Flickr", ui: "cloud" }, { name: "instagram", label: "Instagram", ui: "cloud" }, { name: "box", label: "Box", ui: "cloud" }, { name: "googledrive", label: "Google Drive", ui: "cloud" }, { name: "github", label: "Github", ui: "cloud" }, { name: "gmail", label: "Gmail", ui: "cloud" }, { name: "picasa", label: "Google Photos", ui: "cloud" }, { name: "onedrive", label: "OneDrive", ui: "cloud" }, { name: "clouddrive", label: "Cloud Drive", ui: "cloud" }, { name: "imagesearch", label: "Web Search", ui: "imagesearch" }, { name: "source-url", label: "Link (URL)", ui: "source-url", layout_view: "list" }],
        oa = function oa(t) {
      var e = void 0;if (ia.forEach(function (n) {
        n.name === t && (e = n);
      }), !e) throw new Error('Unknown source "' + t + '"');return e;
    },
        ra = { render: function render() {
        var t = this,
            e = t.$createElement;return (t._self._c || e)("span", { staticClass: "fsp-picker__close-button fsp-icon--close-modal", on: { click: t.closePicker } });
      }, staticRenderFns: [], methods: { closePicker: function closePicker() {
          this.$root.$destroy();
        } } },
        aa = function aa(t) {
      return t.indexOf("/") !== -1;
    },
        sa = function sa(t, e) {
      return t.mimetype && "image/*" === e ? t.mimetype.indexOf("image/") !== -1 : t.mimetype && "video/*" === e ? t.mimetype.indexOf("video/") !== -1 : t.mimetype && "audio/*" === e ? t.mimetype.indexOf("audio/") !== -1 : t.mimetype === e;
    },
        ca = function ca(t) {
      return (/\.\w+$/.exec(t)[0]
      );
    },
        la = function la(t) {
      return t.replace(".", "");
    },
        ua = function ua(t, e) {
      return la(ca(t.name)) === la(e);
    },
        fa = function fa(t, e) {
      return void 0 === e || e.some(function (e) {
        return aa(e) ? sa(t, e) : ua(t, e);
      });
    },
        da = function da(t) {
      var e = { name: t.name, mimetype: t.mimetype, size: t.size, source: t.source, url: t.url, handle: t.handle };return t.status && (e.status = t.status), e;
    },
        pa = function pa(t) {
      return t.map(da);
    },
        ma = function ma(t) {
      return t >= 1048576 ? Math.round(t / 1048576) + "MB" : t >= 1024 ? Math.round(t / 1024) + "KB" : t + "B";
    },
        ha = function ha() {
      return Math.round(255 * Math.random()).toString(16);
    },
        va = function va(t) {
      for (var e = ""; e.length < 2 * t;) {
        e += ha();
      }return e;
    },
        ga = function ga(t) {
      if (t.name.length < 45) return t.name;var e = t.name.split(".");if (2 === e.length) {
        return e[0].substring(0, 42) + ".." + "." + e[1];
      }return t.name.substring(0, 42) + "...";
    },
        _a = Fr.context("picker"),
        ya = function ya(t) {
      return t.source + t.path;
    },
        ba = function ba(t, e) {
      return t.map(function (t) {
        return ya(t);
      }).indexOf(ya(e));
    },
        Ca = function Ca(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = 0,
          i = function i(t) {
        return (t instanceof File || t instanceof Blob) && (t = { source: "local_file_system", mimetype: t.type, name: t.name, path: t.name, size: t.size, originalFile: t }), t.uploadToken = va(16), t.progress = 0, t.progressSize = 0, t;
      },
          o = function o(t, e) {
        var n = function n(t) {
          var n = void 0;return t.some(function (t) {
            return t.uploadToken === e && (n = t, !0);
          }), n;
        };return n(t.waiting) || n(t.uploading) || n(t.done) || n(t.failed);
      },
          r = function r(t, e) {
        if (ba(t.getters.filesWaiting, e) !== -1) return t.commit("CANCEL_UPLOAD", e.uploadToken), void t.commit("DESELECT_FILE", e);if (e.folder) return void t.dispatch("addCloudFolder", { name: e.source, path: e.path });if (!function () {
          if (t.getters.allFilesInQueueCount === t.getters.maxFiles) {
            var e = 1 === t.getters.maxFiles ? "file" : "files";return t.dispatch("showNotification", "Our file upload limit is " + t.getters.maxFiles + " " + e), !0;
          }return !1;
        }()) {
          var n = i(e);(function (e) {
            return !!fa(e, t.getters.accept) || (t.dispatch("showNotification", "File " + ga(e) + " is not an accepted file type. The accepted file types are " + t.getters.accept), !1);
          })(n) && function (e) {
            if (void 0 !== t.getters.onFileSelected) try {
              var n = t.getters.onFileSelected(da(e));return n && "string" == typeof n.name && (e.originalFile && (e.originalFile.newName = n.name), e.name = n.name), !0;
            } catch (e) {
              return t.dispatch("showNotification", e.message), !1;
            }return !0;
          }(n) && function (e) {
            return void 0 === t.getters.maxSize || e.size < t.getters.maxSize || !e.size || (t.dispatch("showNotification", "File " + ga(e) + " is too big. The accepted file size is less than " + ma(t.getters.maxSize)), !1);
          }(n) && (_a("Selected file:", e), t.commit("MARK_FILE_AS_WAITING", n), function () {
            t.getters.startUploadingWhenMaxFilesReached === !0 && t.getters.filesWaiting.length === t.getters.maxFiles ? t.dispatch("startUploading", !0) : t.getters.uploadInBackground && t.dispatch("startUploading");
          }(), t.getters.allFilesInQueueCount === t.getters.maxFiles && (t.commit("CHANGE_ROUTE", ["summary"]), t.commit("UPDATE_MOBILE_NAV_ACTIVE", !1)));
        }
      },
          a = function a(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            o = function o() {
          return n < 4 && e.state.waiting.length > 0;
        },
            r = function r() {
          return 0 === n && 0 === e.state.waiting.length && 0 === e.state.uploading.length;
        },
            a = function a() {
          var i = e.state.waiting[0],
              o = {},
              r = void 0;if (i.tempStorage && !i.transformed) r = Promise.resolve(i.tempStorage);else if (i.transformed && !i.transformedFile) r = t.storeURL(i.transformed, e.getters.storeTo);else if (i.transformedFile) r = Promise.resolve(i.transformedFile);else if ("local_file_system" === i.source) {
            var a = { retryOptions: null, onProgress: function onProgress(t) {
                e.getters.uploadStarted && (e.commit("SET_FILE_UPLOAD_PROGRESS", { uploadToken: i.uploadToken, progress: t.totalProgressPercent, progressSize: ma(t.progressTotal) }), void 0 !== e.getters.onFileUploadProgress && e.getters.onFileUploadProgress(da(i), t));
              } };r = t.upload(i.originalFile, a, e.getters.storeTo, o);
          } else if ("source-url" === i.source) r = t.storeURL(i.path, e.getters.storeTo);else {
            if ("cloud" !== i.sourceKind) throw new Error("Can't upload this file");r = e.getters.preferLinkOverStore ? t.cloud(i.source).link(i.path) : t.cloud(i.source).store(i.path, e.getters.storeTo, o);
          }return n += 1, e.commit("MARK_FILE_AS_UPLOADING", i), o.cancel && e.commit("SET_CANCEL_TOKEN", { uploadToken: i.uploadToken, token: o }), _a("Upload started:", i), void 0 !== e.getters.onFileUploadStarted && e.getters.onFileUploadStarted(da(i)), r.then(function (t) {
            var o = vi({}, i, t);n -= 1, e.commit("MARK_FILE_AS_DONE", { file: i, uploadMetadata: o }), e.commit("REMOVE_CANCEL_TOKEN", i.uploadToken), void 0 !== e.getters.onFileUploadFinished && e.getters.onFileUploadFinished(da(o)), _a("Upload done:", i);
          }).catch(function (t) {
            n -= 1, e.commit("MARK_FILE_AS_FAILED", i), e.commit("REMOVE_CANCEL_TOKEN", i.uploadToken), void 0 !== e.getters.onFileUploadFailed && e.getters.onFileUploadFailed(da(i), t), t instanceof Error ? _a("Upload failed:", i, t.message) : _a("Upload failed:", i, t);
          }), r;
        };e.getters.uploadStarted || (i && (e.commit("SET_UPLOAD_STARTED", !0), e.commit("UPDATE_MOBILE_NAV_ACTIVE", !1), e.commit("CHANGE_ROUTE", ["summary"])), function t() {
          o() ? (a().then(t).catch(t), t()) : r() && e.getters.uploadStarted && e.dispatch("allUploadsDone");
        }());
      },
          s = function s(e, n) {
        if ("local_file_system" === e.source) return t.upload(e.originalFile, n.getters.storeTo);if ("cloud" === e.sourceKind) return t.cloud(e.source).store(e.path, n.getters.storeTo);throw new Error("Can't upload this file");
      },
          c = function c(t, e) {
        return new Promise(function (n) {
          var i = o(t.state, e),
              r = t.state.uploading.map(function (t) {
            return t.uploadToken;
          }),
              a = r.indexOf(e) !== -1;if (i.tempStorage) n(i.tempStorage);else if (a) {
            !function i() {
              var r = o(t.state, e);if (r) {
                if (void 0 !== r.tempStorage) n(r.tempStorage);else {
                  var a = t.state.failed.map(function (t) {
                    return t.uploadToken;
                  }),
                      s = a.indexOf(e) !== -1;s || setTimeout(i, 100);
                }
              } else n(null);
            }();
          } else s(i, t).then(function (i) {
            o(t.state, e) && (t.commit("SET_FILE_TEMPORARY_STORAGE", { uploadToken: e, metadata: i }), i.uploadToken = e, n(i));
          });
        });
      };return e = vi({ uploadStarted: !1, waiting: [], uploading: [], done: [], failed: [], stagedForTransform: null, pendingTokens: {} }, e), { state: e, mutations: { SET_UPLOAD_STARTED: function SET_UPLOAD_STARTED(t, e) {
            t.uploadStarted = e;
          }, MARK_FILE_AS_WAITING: function MARK_FILE_AS_WAITING(t, e) {
            t.waiting.push(e);
          }, DESELECT_FILE: function DESELECT_FILE(t, e) {
            var n = ba(t.waiting, e),
                i = ba(t.uploading, e),
                o = ba(t.done, e),
                r = ba(t.failed, e);switch ([n >= 0, i >= 0, o >= 0, r >= 0].indexOf(!0)) {case -1:
                throw new Error("Illegal operation for given file");case 0:
                t.waiting.splice(n, 1);break;case 1:
                t.uploading.splice(i, 1);break;case 2:
                t.done.splice(o, 1);break;case 3:
                t.failed.splice(r, 1);}
          }, DESELECT_FOLDER: function DESELECT_FOLDER(t, e) {
            var n = function n(t) {
              return t.filter(function (t) {
                return "cloud" !== t.sourceKind || t.path.indexOf(e.path) < 0;
              });
            };t.waiting = n(t.waiting), t.uploading = n(t.uploading), t.done = n(t.done), t.failed = n(t.failed);
          }, DESELECT_ALL_FILES: function DESELECT_ALL_FILES(t) {
            t.waiting.splice(0, t.waiting.length), t.uploading.splice(0, t.uploading.length), t.done.splice(0, t.done.length), t.failed.splice(0, t.failed.length);
          }, MARK_FILE_AS_UPLOADING: function MARK_FILE_AS_UPLOADING(t, e) {
            var n = ba(t.waiting, e);if (n === -1) throw new Error("Illegal operation for given file");t.waiting.splice(n, 1), t.uploading.push(e);
          }, MARK_FILE_AS_DONE: function MARK_FILE_AS_DONE(t, e) {
            var n = e.file,
                i = e.uploadMetadata,
                o = ba(t.uploading, n);o >= 0 && (t.uploading.splice(o, 1), t.done.push(n), n.transformed ? re.set(n, "transformedFile", i) : re.set(n, "tempStorage", i), Object.keys(i).forEach(function (t) {
              re.set(n, t, i[t]);
            }));
          }, MARK_FILE_AS_FAILED: function MARK_FILE_AS_FAILED(t, e) {
            var n = ba(t.uploading, e);n >= 0 && (t.uploading.splice(n, 1), t.failed.push(e));
          }, SET_FILE_UPLOAD_PROGRESS: function SET_FILE_UPLOAD_PROGRESS(t, e) {
            var n = e.uploadToken,
                i = e.progress,
                r = e.progressSize,
                a = o(t, n);re.set(a, "progress", i), re.set(a, "progressSize", r);
          }, SET_FILE_TEMPORARY_STORAGE: function SET_FILE_TEMPORARY_STORAGE(t, e) {
            var n = e.uploadToken,
                i = e.metadata,
                r = o(t, n);re.set(r, "tempStorage", i);
          }, SET_FILE_FOR_TRANSFORM: function SET_FILE_FOR_TRANSFORM(t, e) {
            t.stagedForTransform = e;
          }, SET_FILE_TRANSFORMATION: function SET_FILE_TRANSFORMATION(t, e) {
            var n = e.uploadToken,
                i = e.transformedUrl,
                r = o(t, n);re.set(r, "transformed", i);var a = ba(t.done, r),
                s = ba(t.failed, r),
                c = ba(t.uploading, r),
                l = ba(t.waiting, r);a >= 0 ? t.done.splice(a, 1) : c >= 0 ? t.uploading.splice(c, 1) : s >= 0 && t.failed.splice(a, 1), l < 0 && t.waiting.push(r);
          }, REMOVE_FILE_TRANSFORMATION: function REMOVE_FILE_TRANSFORMATION(t, e) {
            var n = o(t, e);re.delete(n, "transformed"), re.delete(n, "transformedFile"), n.originalFile && n.originalFile.size && re.set(n, "size", n.originalFile.size);var i = ba(t.done, n),
                r = ba(t.failed, n),
                a = ba(t.uploading, n),
                s = ba(t.waiting, n);i >= 0 ? t.done.splice(i, 1) : a >= 0 ? t.uploading.splice(a, 1) : r >= 0 && t.failed.splice(i, 1), s < 0 && t.waiting.push(n);
          }, REMOVE_SOURCE_FROM_WAITING: function REMOVE_SOURCE_FROM_WAITING(t, e) {
            var n = t.waiting.filter(function (t) {
              return t.source !== e;
            });t.waiting = n;
          }, REMOVE_CLOUDS_FROM_WAITING: function REMOVE_CLOUDS_FROM_WAITING(t) {
            var e = t.waiting.filter(function (t) {
              return "cloud" !== t.sourceKind;
            });t.waiting = e;
          }, SET_CANCEL_TOKEN: function SET_CANCEL_TOKEN(t, e) {
            var n = e.uploadToken,
                i = e.token;t.pendingTokens[n] = i;
          }, REMOVE_CANCEL_TOKEN: function REMOVE_CANCEL_TOKEN(t, e) {
            delete t.pendingTokens[e];
          }, CANCEL_UPLOAD: function CANCEL_UPLOAD(t, e) {
            var n = t.pendingTokens[e];n && n.cancel && (n.cancel(), delete t.pendingTokens[e]);
          }, CANCEL_FOLDER_UPLOAD: function CANCEL_FOLDER_UPLOAD(t, e) {
            t.waiting.concat(t.uploading).filter(function (t) {
              return "cloud" !== t.sourceKind || t.path.indexOf(e.path) >= 0;
            }).map(function (t) {
              return t.uploadToken;
            }).forEach(function (e) {
              var n = t.pendingTokens[e];n && n.cancel && (n.cancel(), delete t.pendingTokens[e]);
            });
          }, CANCEL_ALL_UPLOADS: function CANCEL_ALL_UPLOADS(t) {
            Object.keys(t.pendingTokens).forEach(function (e) {
              var n = t.pendingTokens[e];n && n.cancel && n.cancel();
            }), t.pendingTokens = {};
          } }, actions: { addFile: r, startUploading: a, uploadFileToTemporaryLocation: c, removeTransformation: function removeTransformation(t, e) {
            t.commit("REMOVE_FILE_TRANSFORMATION", e.uploadToken);
          }, deselectAllFiles: function deselectAllFiles(t) {
            t.commit("CANCEL_ALL_UPLOADS"), t.commit("DESELECT_ALL_FILES");
          }, deselectFolder: function deselectFolder(t, e) {
            t.commit("CANCEL_FOLDER_UPLOAD", e), t.commit("DESELECT_FOLDER", e);
          } }, getters: { filesWaiting: function filesWaiting(t, e) {
            return e.uploadStarted ? t.waiting : [].concat(t.waiting, t.uploading, t.done, t.failed).sort(function (t, e) {
              return t.size - e.size;
            });
          }, filesUploading: function filesUploading(t, e) {
            return e.uploadStarted ? t.uploading : [];
          }, filesDone: function filesDone(t) {
            return t.done;
          }, filesFailed: function filesFailed(t) {
            return t.failed;
          }, allFilesInQueue: function allFilesInQueue(t, e) {
            return e.uploadStarted ? [].concat(e.filesWaiting, e.filesUploading, e.filesDone, e.filesFailed) : e.filesWaiting;
          }, allFilesInQueueCount: function allFilesInQueueCount(t, e) {
            return e.uploadStarted ? e.filesWaiting.length + e.filesUploading.length + e.filesDone.length + e.filesFailed.length : e.filesWaiting.length;
          }, filesNeededCount: function filesNeededCount(t, e) {
            return e.minFiles - e.filesWaiting.length;
          }, uploadStarted: function uploadStarted(t) {
            return t.uploadStarted;
          }, canStartUpload: function canStartUpload(t, e) {
            return e.filesWaiting.length >= e.minFiles;
          }, canAddMoreFiles: function canAddMoreFiles(t, e) {
            return e.filesWaiting.length < e.maxFiles;
          }, stagedForTransform: function stagedForTransform(t) {
            return t.stagedForTransform;
          } } };
    },
        Ea = function Ea(t) {
      var e = t.path.split("/");return e.pop(), t.folder ? t.path : e.join("/");
    },
        Ta = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return t.files.length > 0 ? n("div", { staticClass: "fsp-grid" }, [n("div", { staticClass: "fsp-grid__label" }, [t._v("Files & Folders")]), t._l(t.onlyFolders, function (e) {
          return n("div", { staticClass: "fsp-grid__cell", class: { "fsp-grid__cell--selected": t.isSelected(e) }, on: { click: function click(n) {
                t.handleFolderClick(e);
              } } }, [t.isSelected(e) ? n("span", { staticClass: "fsp-badge fsp-badge--bright fsp-badge--file" }, [t._v(t._s(t.getFileCount(e)))]) : n("span", { staticClass: "fsp-grid__icon", class: t.getIconClass("fsp-grid__icon-folder", e) }), t._v(" "), n("span", { staticClass: "fsp-grid__text", class: { "fsp-grid__text--selected": t.isSelected(e) } }, [t._v(t._s(e.name))]), t._v(" "), t.isSelected(e) ? n("span", { staticClass: "fsp-grid__icon--selected", attrs: { title: "Deselect folder" }, on: { click: function click(n) {
                n.stopPropagation(), t.deselectFolder(e);
              } } }) : t._e(), t._v(" "), t.isLoading(e) || t.isSelected(e) ? t._e() : n("span", { staticClass: "fsp-grid__icon-folder-add", attrs: { title: "Add folder" }, on: { click: function click(n) {
                n.stopPropagation(), t.addFile(e);
              } } }), t.isLoading(e) ? n("div", { staticClass: "fsp-loading--folder" }) : t._e()]);
        }), t._l(t.onlyFiles, function (e) {
          return n("div", { staticClass: "fsp-grid__cell", class: { "fsp-grid__cell--selected": t.isSelected(e) }, on: { click: function click(n) {
                t.addFile(e);
              } } }, [t.isAudio(e) ? n("span", { staticClass: "fsp-grid__icon", class: t.getIconClass("fsp-grid__icon-audio", e) }) : "application/pdf" === e.mimetype ? n("span", { staticClass: "fsp-grid__icon", class: t.getIconClass("fsp-grid__icon-pdf", e) }) : "application/zip" === e.mimetype ? n("span", { staticClass: "fsp-grid__icon", class: t.getIconClass("fsp-grid__icon-zip", e) }) : n("span", { staticClass: "fsp-grid__icon", class: t.getIconClass("fsp-grid__icon-file", e) }), t._v(" "), n("span", { staticClass: "fsp-grid__text", class: { "fsp-grid__text--selected": t.isSelected(e) } }, [t._v(t._s(e.name))]), t._v(" "), t.isSelected(e) ? n("span", { staticClass: "fsp-grid__icon--selected" }) : t._e()]);
        })], 2) : t._e();
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["cloudFolders", "filesWaiting"]), { onlyFolders: function onlyFolders() {
          return this.files.filter(function (t) {
            return t.folder;
          });
        }, onlyFiles: function onlyFiles() {
          return this.files.filter(function (t) {
            return !t.folder;
          });
        } }), methods: vi({}, qr.mapActions(["addFile", "deselectFolder", "goToDirectory"]), { handleFolderClick: function handleFolderClick(t) {
          this.goToDirectory(t);
        }, getIconClass: function getIconClass(t, e) {
          var n;return n = {}, hi(n, t, !this.isSelected(e)), hi(n, t + "--selected", this.isSelected(e)), n;
        }, isAudio: function isAudio(t) {
          return t && t.mimetype && t.mimetype.indexOf("audio/") !== -1;
        }, isLoading: function isLoading(t) {
          return !!t.folder && this.cloudFolders[t.path] && this.cloudFolders[t.path].loading;
        }, isSelected: function isSelected(t) {
          return t.folder ? this.filesWaiting.filter(function (e) {
            return Ea(e) === t.path;
          }).length > 0 : ba(this.filesWaiting, t) !== -1;
        }, getFileCount: function getFileCount(t) {
          return this.filesWaiting.filter(function (e) {
            return Ea(e) === t.path;
          }).length;
        } }), props: ["files"] },
        wa = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return t.images && t.images.length > 0 ? n("div", { staticClass: "fsp-grid" }, [n("div", { staticClass: "fsp-grid__label" }, [t._v("Images")]), t._l(t.images, function (e) {
          return n("div", { key: e.path, staticClass: "fsp-image-grid__cell", class: { "fsp-image-grid__cell--selected": t.isSelected(e) }, on: { click: function click(n) {
                t.addFile(e);
              } } }, [t.isSelected(e) ? n("span", { staticClass: "fsp-image-grid__icon--selected" }) : t._e(), t._v(" "), n("img", { staticClass: "fsp-image-grid__image", class: { "fsp-image-grid__image--selected": t.isSelected(e) }, attrs: { src: e.thumbnail, alt: e.name } }), t.isSelected(e) ? n("div", { staticClass: "fsp-image-grid__cell--dark" }) : t._e()]);
        })], 2) : t._e();
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["filesWaiting"])), methods: vi({}, qr.mapActions(["addFile"]), { isSelected: function isSelected(t) {
          return ba(this.filesWaiting, t) !== -1;
        } }), props: ["images"] },
        Aa = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", [n("file-array", { attrs: { files: t.arrayOfFiles } }), t.arrayOfFiles.length && t.arrayOfImages.length ? n("hr", { staticClass: "fsp-grid__separator" }) : t._e(), n("image-array", { attrs: { images: t.arrayOfImages } })], 1);
      }, staticRenderFns: [], components: { FileArray: Ta, ImageArray: wa }, computed: vi({}, qr.mapGetters(["listForCurrentCloudPath"]), { arrayOfImages: function arrayOfImages() {
          return this.listForCurrentCloudPath.filter(this.isImage);
        }, arrayOfFiles: function arrayOfFiles() {
          var t = this;return this.listForCurrentCloudPath.filter(function (e) {
            return !t.isImage(e);
          });
        } }), methods: { isImage: function isImage(t) {
          return t && t.mimetype && t.mimetype.indexOf("image/") !== -1;
        } } },
        Sa = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-breadcrumb__container" }, [t.crumbs.length < 3 ? n("span", t._l(t.crumbs, function (e) {
          return n("span", { staticClass: "fsp-breadcrumb__label", on: { click: function click(n) {
                t.handleClick(e);
              } } }, [t._v(t._s(e.label) + " ")]);
        })) : n("span", t._l(t.truncateCrumbs(t.crumbs), function (e) {
          return n("span", { staticClass: "fsp-breadcrumb__label", on: { click: function click(n) {
                t.handleClick(e);
              } } }, [t._v(t._s(e.label))]);
        }))]);
      }, staticRenderFns: [], props: ["crumbs", "onClick"], methods: { truncateCrumbs: function truncateCrumbs(t) {
          var e = [t[0]],
              n = t.filter(function (e, n) {
            return n >= t.length - 2;
          });return e.push.apply(e, [{ path: "", label: "..." }].concat(gi(n))), e;
        }, handleClick: function handleClick(t) {
          t.path && t.label && this.onClick(t);
        } } },
        Ra = { render: function render() {
        var t = this,
            e = t.$createElement;return (t._self._c || e)("div", { staticClass: "fsp-loading" });
      }, staticRenderFns: [] },
        ka = function ka(t) {
      var e = null == t ? 0 : t.length;return e ? t[e - 1] : void 0;
    },
        Oa = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-cloud", class: { "fsp-content--selected-items": t.filesWaiting.length } }, [t.cloudLoading || t.isPrefetching ? n("loading") : t._e(), t.currentCloudAuthorized !== !0 ? n("div", { staticClass: "fsp-source-auth__wrapper" }, [n("span", { staticClass: "fsp-icon-auth fsp-icon fsp-source-auth__el", class: "fsp-icon--" + t.currentCloudName }), n("div", { staticClass: "fsp-text__title fsp-source-auth__el" }, [t._v(t._s(t.t("Select Files from")) + " " + t._s(t.currentDisplay.label))]), n("div", { staticClass: "fsp-source-auth__el" }, [n("span", { staticClass: "fsp-text__subheader" }, [t._v(t._s(t.t("You need to authenticate with ")) + " "), n("span", { staticClass: "fsp-cloudname" }, [t._v(t._s(t.currentDisplay.label))]), t._v(". " + t._s(t.t("We only extract images and never modify or delete them.")))])]), n("button", { staticClass: "fsp-button__auth fsp-source-auth__el", attrs: { type: "button" }, on: { click: t.authorize } }, [t._v(t._s(t.t("Connect")) + " "), n("span", { staticClass: "fsp-cloudname" }, [t._v(t._s(t.currentDisplay.label))])]), n("div", { staticClass: "fsp-source-auth__el" }, [n("span", { staticClass: "fsp-text__subheader" }, [t._v(t._s(t.t("A new page will open to connect your account.")))])])]) : t._e(), t.currentCloudAuthorized === !0 ? n("div", [t.currentCrumbs.length > 1 ? n("div", { staticClass: "fsp-cloud-breadcrumbs" }, [n("breadcrumbs", { attrs: { crumbs: t.currentCrumbs, "on-click": t.updatePath } })], 1) : t._e(), n("cloud-grid")], 1) : t._e()], 1);
      }, staticRenderFns: [], components: { CloudGrid: Aa, Breadcrumbs: Sa, Loading: Ra }, computed: vi({}, qr.mapGetters(["route", "currentCloudAuthorized", "currentCloudName", "currentCloudPath", "listForCurrentCloudPath", "cloudFolders", "cloudLoading", "cloudsPrefetching", "filesWaiting"]), { isPrefetching: function isPrefetching() {
          var t = this.currentCloudPath,
              e = t.length > 0 ? ka(t) : t,
              n = this.currentCloudName + e;return this.cloudsPrefetching[n];
        }, currentDisplay: function currentDisplay() {
          return oa(this.route[1]);
        }, currentCrumbs: function currentCrumbs() {
          var t = this,
              e = [{ label: this.currentDisplay.label, path: "root" }];return this.currentCloudPath.length ? e.concat(this.currentCloudPath.map(function (e) {
            return { label: t.cloudFolders[e].name, path: e };
          })) : e;
        } }), methods: vi({}, qr.mapActions(["showCloudPath"]), { authorize: function authorize() {
          var t = this,
              e = window.open(this.currentCloudAuthorized.authUrl, "_blank");!function n() {
            e.closed !== !0 ? setTimeout(n, 10) : t.showCloudPath({ name: t.route[1], path: t.route[2] });
          }();
        }, updatePath: function updatePath(t) {
          var e = this.currentCloudPath.indexOf(t.path),
              n = this.currentCloudPath.filter(function (t, n) {
            return n <= e;
          }),
              i = ["source", this.currentCloudName];"root" === t.path ? this.$store.commit("CHANGE_ROUTE", i) : (i.push(n), this.$store.commit("CHANGE_ROUTE", i));
        } }), watch: { route: { deep: !0, immediate: !0, handler: function handler(t) {
            var e = t[1],
                n = t[2];this.showCloudPath({ name: e, path: n });
          } } } },
        Fa = function Fa(t) {
      return new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile", "i").test(t);
    },
        La = function La(t) {
      return JSON.parse(JSON.stringify(t));
    },
        Na = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-mobile-menu", on: { click: function click(e) {
              t.toggleNav();
            } } }, [n("div", { staticClass: "fsp-nav__menu-toggle" })]);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["mobileNavActive", "route"]), { hideLocalOnMobile: function hideLocalOnMobile() {
          var t = La(this.route),
              e = t.pop();return !(!Fa(navigator.userAgent) || e.indexOf("local_file_system") === -1) || !this.mobileNavActive;
        } }), methods: vi({}, qr.mapActions(["updateMobileNavActive"]), { toggleNav: function toggleNav() {
          this.updateMobileNavActive(this.hideLocalOnMobile);
        } }) },
        Ia = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-header", class: { "fsp-hide-header": t.hideHeader } }, [t.sourceName && !t.mobileNavActive ? n("span", { staticClass: "fsp-header-icon", class: "fsp-navbar--" + t.sourceName }) : t._e(), t._v(" "), t.mobileNavActive ? n("span", { staticClass: "fsp-header-text" }, [t._v("Select From")]) : t._e(), t._t("default"), n("mobile-menu-button")], 2);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["mobileNavActive"])), components: { MobileMenuButton: Na }, props: ["sourceName", "hideHeader"] },
        xa = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-footer", class: { "fsp-footer--appeared": t.isVisible } }, [n("div", { staticClass: "fsp-nav" }, [n("span", { staticClass: "fsp-nav__left" }, [t._t("nav-left")], 2), n("span", { staticClass: "fsp-nav__center" }, [t._t("nav-center")], 2), n("span", { staticClass: "fsp-nav__right" }, [t._t("nav-right")], 2)])]);
      }, staticRenderFns: [], props: ["isVisible"] },
        $a = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-image-search", class: { "fsp-image-search--results": t.resultsFound } }, [n("div", { staticClass: "fsp-image-search__form-container" }, [n("form", { staticClass: "fsp-image-search__form", on: { submit: function submit(e) {
              e.preventDefault(), t.focusAndFetch(e);
            } } }, [n("input", { ref: "searchInput", staticClass: "fsp-image-search__input", attrs: { placeholder: t.placeholderText, disabled: t.isSearching }, domProps: { value: t.imageSearchInput }, on: { input: t.updateInput } }), t._v(" "), t.imageSearchInput === t.imageSearchName ? n("button", { staticClass: "fsp-image-search__submit", on: { click: function click(e) {
              e.preventDefault(), t.clearSearch(e);
            } } }, [n("span", { staticClass: "fsp-image-search__icon--reset" })]) : t._e(), t._v(" "), t.imageSearchInput !== t.imageSearchName ? n("button", { staticClass: "fsp-image-search__submit", attrs: { type: "submit" } }, [n("span", { class: { "fsp-image-search__icon--search": !0, "fsp-image-search__icon--searching": t.isSearching } })]) : t._e()])]), n("div", { staticClass: "fsp-image-search__results", class: { "fsp-content--selected-items": t.filesWaiting.length } }, [n("image-array", { attrs: { images: t.imageSearchResults } })], 1)]);
      }, staticRenderFns: [], components: { ImageArray: wa }, computed: vi({}, qr.mapGetters(["isSearching", "noResultsFound", "resultsFound", "imageSearchName", "imageSearchInput", "imageSearchResults", "filesWaiting"]), { placeholderText: function placeholderText() {
          return this.t("Search images") + "...";
        } }), methods: vi({}, qr.mapActions(["updateSearchInput", "fetchImages"]), { focusAndFetch: function focusAndFetch() {
          this.fetchImages(), this.$refs.searchInput.focus();
        }, updateInput: function updateInput(t) {
          this.updateSearchInput(t.target.value);
        }, clearSearch: function clearSearch() {
          this.updateSearchInput(""), this.$refs.searchInput.focus();
        } }) },
        Ua = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-select-labels", class: { active: t.selectLabelIsActive } }, [n("div", { staticClass: "fsp-drop-area__title fsp-text__title" }, [t._v(t._s(t.t("Select Files to Upload")))]), n("div", { staticClass: "fsp-drop-area__subtitle fsp-text__subheader" }, [t._v(t._s(t.t("or Drag and Drop, Copy and Paste Files")))])]);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["selectLabelIsActive"])) },
        Da = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", [n("div", { ref: "dropArea", staticClass: "fsp-drop-area", on: { click: t.openSelectFile } }, [n("select-files-label"), n("input", { ref: "fileUploadInput", staticClass: "fsp-local-source__fileinput", attrs: { type: "file", id: "fsp-fileUpload", accept: t.acceptStr, multiple: t.multiple, disabled: !t.canAddMoreFiles }, on: { change: function change(e) {
              t.onFilesSelected(e);
            }, click: function click(e) {
              t.clearEvent(e);
            } } })], 1)]);
      }, staticRenderFns: [], components: { SelectFilesLabel: Ua }, computed: vi({}, qr.mapGetters(["accept", "canAddMoreFiles", "maxFiles"]), { acceptStr: function acceptStr() {
          if (this.accept) return this.accept.join(",");
        }, multiple: function multiple() {
          return this.maxFiles > 1;
        } }), methods: vi({}, qr.mapActions(["addFile", "updateSelectLabelActive"]), { clearEvent: function clearEvent(t) {
          t.target.value = null;
        }, onMouseover: function onMouseover() {
          this.updateSelectLabelActive(!0);
        }, onMouseout: function onMouseout() {
          this.updateSelectLabelActive(!1);
        }, onFilesSelected: function onFilesSelected(t) {
          for (var e = t.target.files, n = 0; n < e.length; n += 1) {
            this.addFile(e[n]);
          }
        }, openSelectFile: function openSelectFile() {
          this.$refs.fileUploadInput.click();
        } }), mounted: function mounted() {
        var t = this.$refs.dropArea;t.addEventListener("mouseover", this.onMouseover), t.addEventListener("mouseout", this.onMouseout);
      } },
        Pa = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-source-list__item", class: { active: t.isSelectedSource, hidden: t.isHidden, disabled: t.uploadStarted }, on: { click: function click(e) {
              t.onNavClick(t.sourceName);
            } } }, [t.sourceSelectedCount(t.filesWaiting) ? n("span", { staticClass: "fsp-badge--source" }, [t._v(t._s(t.sourceSelectedCount(t.filesWaiting)))]) : t._e(), t._v(" "), n("span", { staticClass: "fsp-source-list__icon fsp-icon", class: "fsp-icon--" + t.sourceName }), t._v(" "), n("span", { staticClass: "fsp-source-list__label" }, [t._v(t._s(t.sourceLabel))]), t._v(" "), t.isAuthorized ? n("span", { staticClass: "fsp-source-list__logout", on: { click: function click(e) {
              e.stopPropagation(), t.logout(t.sourceName);
            } } }, [t._v("Sign Out")]) : t._e(), t._v(" "), t.isMobileLocal ? n("input", { ref: "mobileLocaInput", staticClass: "fsp-local-source__fileinput", attrs: { type: "file" }, on: { change: function change(e) {
              t.onFilesSelected(e);
            } } }) : t._e()]);
      }, staticRenderFns: [], props: ["sourceName", "sourceLabel", "isHidden"], computed: vi({}, qr.mapGetters(["filesWaiting", "route", "uploadStarted", "cloudsAuthorized", "mobileNavActive", "maxFiles", "accept"]), { isSelectedSource: function isSelectedSource() {
          return "summary" !== this.route[0] && (this.route.length > 1 ? this.route[1] : "local_file_system") === this.sourceName;
        }, isAuthorized: function isAuthorized() {
          return this.cloudsAuthorized[this.sourceName];
        }, isMobileLocal: function isMobileLocal() {
          return this.mobileNavActive && "local_file_system" === this.sourceName;
        } }), methods: vi({}, qr.mapActions(["updateMobileNavActive", "addFile", "logout"]), { onNavClick: function onNavClick(t) {
          this.isMobileLocal ? this.openSelectFile() : (this.updateMobileNavActive(!1), this.$store.commit("CHANGE_ROUTE", ["source", t]));
        }, sourceSelectedCount: function sourceSelectedCount(t) {
          var e = this;return t.filter(function (t) {
            return t.source === e.sourceName;
          }).length;
        }, openSelectFile: function openSelectFile() {
          this.$refs.mobileLocaInput.click();
        }, onFilesSelected: function onFilesSelected(t) {
          for (var e = t.target.files, n = 0; n < e.length; n += 1) {
            this.addFile(e[n]);
          }
        } }) },
        Ma = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-modal__sidebar", class: { "fsp-mobile-nav-active": t.mobileNavActive } }, [n("div", { staticClass: "fsp-source-list" }, [t._l(t.paginatedSources, function (t) {
          return n("source-nav-item", { key: t.name, attrs: { "is-hidden": t.isHidden, "source-name": t.name, "source-label": t.label } });
        }), t.fromSources.length > this.offset + 1 ? n("div", { staticClass: "fsp-source-list__item fsp-source-list__more", on: { click: t.updateIndex } }, [n("span", { staticClass: "fsp-source-list__icon fsp-source-list__more-icon" }), t._v(" "), n("span", { staticClass: "fsp-source-list__label" }, [t._v("More")])]) : t._e()], 2)]);
      }, staticRenderFns: [], components: { SourceNavItem: Pa }, computed: vi({}, qr.mapGetters(["fromSources", "mobileNavActive"]), { paginatedSources: function paginatedSources() {
          var t = this;return this.fromSources.map(function (e, n) {
            return n >= t.index && n <= t.index + t.offset ? e : vi({}, e, { isHidden: !0 });
          });
        } }), data: function data() {
        return { offset: 7, index: 0 };
      }, methods: { updateIndex: function updateIndex() {
          this.paginatedSources.filter(function (t) {
            return !t.isHidden;
          }).length <= this.offset ? this.index = 0 : this.index = this.index + (this.offset + 1);
        } } },
        ja = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-picker" }, [n("close-button"), n("div", { staticClass: "fsp-modal" }, [n("sidebar"), n("div", { staticClass: "fsp-modal__body" }, [n("div", { staticClass: "fsp-container" }, [t.isInsideCloudFolder ? n("div", { staticClass: "fsp-summary__go-back", attrs: { title: "Go back" }, on: { click: t.goBack } }) : t._e(), n("content-header", { attrs: { "source-name": t.currentSource.name, "hide-header": t.showsHeaderIcon } }), n("div", { staticClass: "fsp-content" }, ["local" === t.currentSource.ui ? n("local") : t._e(), "cloud" === t.currentSource.ui ? n("cloud") : t._e(), "imagesearch" === t.currentSource.ui ? n("image-search") : t._e()], 1)], 1), n("footer-nav", { attrs: { "is-visible": t.filesWaiting.length > 0 } }, [n("span", { staticClass: "fsp-footer-text", slot: "nav-left" }, [t._v("Selected Files: " + t._s(t.filesWaiting.length))]), t._v(" "), t.canStartUpload || 0 === t.filesWaiting.length ? t._e() : n("span", { slot: "nav-center" }, [t._v(t._s(t.getMinFilesMessage) + " ")]), n("span", { staticClass: "fsp-button fsp-button--primary", class: { "fsp-button--disabled": !t.canStartUpload }, attrs: { title: "Next" }, on: { click: t.goToSummary }, slot: "nav-right" }, [t._v("View/Edit Selected")])])], 1)], 1), t._m(0)], 1);
      }, staticRenderFns: [function () {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-picker__footer" }, [t._v("Powered by "), n("span", { staticClass: "fsp-icon--filestack" }), t._v(" Filestack")]);
      }], components: { CloseButton: ra, Cloud: Oa, ContentHeader: Ia, FooterNav: xa, ImageSearch: $a, Local: Da, Sidebar: Ma }, computed: vi({}, qr.mapGetters(["route", "filesWaiting", "cloudLoading", "currentCloudPath", "currentCloudAuthorized", "minFiles", "canStartUpload", "filesNeededCount", "mobileNavActive"]), { currentSource: function currentSource() {
          return oa(this.route[1]);
        }, getMinFilesMessage: function getMinFilesMessage() {
          return 1 === this.filesNeededCount ? "Add 1 more file" : this.filesNeededCount > 1 ? "Add " + this.filesNeededCount + " more files" : null;
        }, showsHeaderIcon: function showsHeaderIcon() {
          return "imagesearch" !== this.currentSource.ui && "source-url" !== this.currentSource.ui && ("local" === this.currentSource.ui || this.currentCloudAuthorized !== !0);
        }, isInsideCloudFolder: function isInsideCloudFolder() {
          return "cloud" === this.currentSource.ui && void 0 !== this.currentCloudPath && 0 !== this.currentCloudPath.length && !this.mobileNavActive;
        } }), methods: vi({}, qr.mapActions(["deselectAllFiles", "goBack", "updateMobileNavActive"]), { goToSummary: function goToSummary() {
          this.canStartUpload && (this.$store.commit("CHANGE_ROUTE", ["summary"]), this.updateMobileNavActive(!1));
        } }) },
        Ha = "Expected a function",
        za = NaN,
        Ga = "[object Symbol]",
        Wa = /^\s+|\s+$/g,
        Ba = /^[-+]0x[0-9a-f]+$/i,
        Ya = /^0b[01]+$/i,
        Va = /^0o[0-7]+$/i,
        Xa = parseInt,
        qa = "object" == mi(Rr) && Rr && Rr.Object === Object && Rr,
        Ka = "object" == ("undefined" == typeof self ? "undefined" : mi(self)) && self && self.Object === Object && self,
        Qa = qa || Ka || Function("return this")(),
        Za = Object.prototype,
        Ja = Za.toString,
        ts = Math.max,
        es = Math.min,
        ns = function ns() {
      return Qa.Date.now();
    },
        is = ai,
        os = Fr.context("transformer"),
        rs = function rs(t) {
      return t + "px";
    },
        as = { topLeftX: "bottomRightX", topLeftY: "bottomRightY", bottomRightX: "topLeftX", bottomRightY: "topLeftY" },
        ss = function ss(t, e, n, i) {
      var o = t.imageNaturalWidth / (e.imageWidth - e.imageX),
          r = t.imageNaturalHeight / (e.imageHeight - e.imageY),
          a = { x: Math.round((n.topLeftX - e.imageX) * o), y: Math.round((n.topLeftY - e.imageY) * r), width: Math.round((n.bottomRightX - n.topLeftX) * o), height: Math.round((n.bottomRightY - n.topLeftY) * r) };n.topLeftX === e.imageX && n.topLeftY === e.imageY && n.bottomRightX === e.imageWidth && n.bottomRightY === e.imageHeight || i.commit("SET_TRANSFORMATION", { type: "crop", options: { dim: a } });
    },
        cs = is(function (t, e, n, i) {
      return ss(t, e, n, i);
    }, 500),
        ls = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", [n("div", { directives: [{ name: "show", rawName: "v-show", value: !t.cachedCropRectangle, expression: "!cachedCropRectangle" }], staticStyle: { position: "absolute", top: "0", left: "0" } }, [n("div", { ref: "cropArea", staticClass: "fst-crop__area", style: t.cropAreaStyle }, [n("div", { staticClass: "fst-crop__area-line--right" }), n("div", { staticClass: "fst-crop__area-line--left" }), n("div", { staticClass: "fst-crop__area-line--top" }), n("div", { staticClass: "fst-crop__area-line--bottom" })]), n("div", { ref: "topLeftMarker", staticClass: "fst-crop__marker fst-crop__marker--top-left", style: t.topLeftStyle }), n("div", { ref: "topRightMarker", staticClass: "fst-crop__marker fst-crop__marker--top-right", style: t.topRightStyle }), n("div", { ref: "bottomLeftMarker", staticClass: "fst-crop__marker fst-crop__marker--bottom-left", style: t.bottomLeftStyle }), n("div", { ref: "bottomRightMarker", staticClass: "fst-crop__marker fst-crop__marker--bottom-right", style: t.bottomRightStyle })]), t.cachedCropRectangle ? n("div", { staticClass: "fst-options-bar", staticStyle: { left: "0", "padding-bottom": "20px" } }, [n("div", { staticClass: "fst-options__option" }, [n("div", { staticClass: "fst-button fst-button--cancel", staticStyle: { "font-weight": "500" }, on: { click: t.undoCrop } }, [t._v("Undo Crop")])])]) : t._e()]);
      }, staticRenderFns: [], props: { imageWidth: Number, imageHeight: Number, imageX: Number, imageY: Number }, data: function data() {
        return { cropRectangle: { topLeftX: 0, topLeftY: 0, bottomRightX: 0, bottomRightY: 0 } };
      }, computed: vi({}, qr.mapGetters(["imageNaturalWidth", "imageNaturalHeight", "cachedCropRectangle"]), { aspectRatio: function aspectRatio() {
          return this.$store.getters.cropAspectRatio;
        }, topLeftStyle: function topLeftStyle() {
          var t = this.$refs.topLeftMarker && this.$refs.topLeftMarker.getBoundingClientRect().width / 2,
              e = this.cropRectangle.topLeftX - t;return { top: rs(this.cropRectangle.topLeftY - t), left: rs(e) };
        }, topRightStyle: function topRightStyle() {
          var t = this.$refs.topRightMarker && this.$refs.topRightMarker.getBoundingClientRect().width / 2,
              e = this.cropRectangle.bottomRightX - t;return { top: rs(this.cropRectangle.topLeftY - t), left: rs(e) };
        }, bottomLeftStyle: function bottomLeftStyle() {
          var t = this.$refs.bottomLeftMarker && this.$refs.bottomLeftMarker.getBoundingClientRect().width / 2,
              e = this.cropRectangle.topLeftX - t;return { top: rs(this.cropRectangle.bottomRightY - t), left: rs(e) };
        }, bottomRightStyle: function bottomRightStyle() {
          var t = this.$refs.bottomRightMarker && this.$refs.bottomRightMarker.getBoundingClientRect().width / 2,
              e = this.cropRectangle.bottomRightX - t;return { top: rs(this.cropRectangle.bottomRightY - t), left: rs(e) };
        }, cropAreaStyle: function cropAreaStyle() {
          var t = this.cropRectangle.topLeftX,
              e = this.cropRectangle.topLeftY,
              n = this.cropRectangle.bottomRightX - this.cropRectangle.topLeftX,
              i = this.cropRectangle.bottomRightY - this.cropRectangle.topLeftY;return { left: rs(t), top: rs(e), width: rs(n), height: rs(i) };
        } }), watch: { imageWidth: function imageWidth() {
          this.imageWidth > 0 && this.imageHeight > 0 && this.initialize();
        }, imageHeight: function imageHeight() {
          this.imageWidth > 0 && this.imageHeight > 0 && this.initialize();
        }, cropRectangle: { deep: !0, handler: function handler() {
            cs({ imageNaturalWidth: this.imageNaturalWidth, imageNaturalHeight: this.imageNaturalHeight }, { imageWidth: this.imageWidth, imageHeight: this.imageHeight, imageX: this.imageX, imageY: this.imageY }, this.cropRectangle, this.$store);
          } } }, methods: vi({}, qr.mapActions(["performTransformations"]), { calculateRectangleMaintainingAspectRatio: function calculateRectangleMaintainingAspectRatio(t, e) {
          var n = { w: t, h: t / this.aspectRatio },
              i = { w: e * this.aspectRatio, h: e };return Math.sqrt(n.w * n.w + n.h * n.h) < Math.sqrt(i.w * i.w + i.h * i.h) ? n : i;
        }, ensurePointWithinBoundsX: function ensurePointWithinBoundsX(t, e) {
          if ("topLeftX" === e) {
            if (t < this.imageX) return this.imageX;if (t >= this.cropRectangle.bottomRightX) return this.cropRectangle.bottomRightX - 1;
          } else if ("bottomRightX" === e) {
            if (t <= this.cropRectangle.topLeftX) return this.cropRectangle.topLeftX + 1;if (t > this.imageWidth) return this.imageWidth;
          }return t;
        }, ensurePointWithinBoundsY: function ensurePointWithinBoundsY(t, e) {
          if ("topLeftY" === e) {
            if (t < this.imageY) return this.imageY;if (t >= this.cropRectangle.bottomRightY) return this.cropRectangle.bottomRightY - 1;
          } else if ("bottomRightY" === e) {
            if (t <= this.cropRectangle.topLeftY) return this.cropRectangle.topLeftY + 1;if (t > this.imageHeight) return this.imageHeight;
          }return t;
        }, addMarkerBehaviour: function addMarkerBehaviour(t, e, n) {
          var i = this,
              o = function o(t) {
            t.preventDefault();var o = t.touches ? t.touches[0] : t,
                r = o.clientX - i.cropRectangle[e],
                a = o.clientY - i.cropRectangle[n],
                s = function s(t) {
              var o = t.touches ? t.touches[0] : t,
                  s = void 0,
                  c = void 0,
                  l = i.ensurePointWithinBoundsX(o.clientX - r, e),
                  u = i.ensurePointWithinBoundsY(o.clientY - a, n),
                  f = as[e],
                  d = as[n],
                  p = Math.abs(l - i.cropRectangle[f]),
                  m = Math.abs(u - i.cropRectangle[d]);p < 40 && (p = 40), m < 40 && (m = 40);var h = { w: p, h: m };void 0 !== i.aspectRatio && (h = i.calculateRectangleMaintainingAspectRatio(p, m)), s = l < i.cropRectangle[f] ? i.cropRectangle[f] - h.w : i.cropRectangle[f] + h.w, c = u < i.cropRectangle[d] ? i.cropRectangle[d] - h.h : i.cropRectangle[d] + h.h, i.cropRectangle[e] = s, i.cropRectangle[n] = c;
            },
                c = function t() {
              document.documentElement.removeEventListener("mousemove", s, !1), document.documentElement.removeEventListener("mouseup", t, !1), document.documentElement.removeEventListener("mouseleave", t, !1), document.documentElement.removeEventListener("touchmove", s, !1), document.documentElement.removeEventListener("touchend", t, !1), document.documentElement.removeEventListener("touchleave", t, !1);
            };document.documentElement.addEventListener("mousemove", s, !1), document.documentElement.addEventListener("mouseup", c, !1), document.documentElement.addEventListener("mouseleave", c, !1), document.documentElement.addEventListener("touchmove", s, !1), document.documentElement.addEventListener("touchend", c, !1), document.documentElement.addEventListener("touchleave", c, !1);
          };t.addEventListener("mousedown", o, !1), t.addEventListener("touchstart", o, !1);
        }, addMoveSelectionBehaviour: function addMoveSelectionBehaviour() {
          var t = this,
              e = function e(_e3) {
            _e3.preventDefault();var n = _e3.touches ? _e3.touches[0] : _e3,
                i = n.clientX - t.cropRectangle.topLeftX,
                o = n.clientY - t.cropRectangle.topLeftY,
                r = t.cropRectangle.bottomRightX - t.cropRectangle.topLeftX,
                a = t.cropRectangle.bottomRightY - t.cropRectangle.topLeftY,
                s = function s(e) {
              var n = e.touches ? e.touches[0] : e,
                  s = n.clientX - i,
                  c = n.clientY - o;s < t.imageX ? s = t.imageX : s + r > t.imageWidth && (s = t.imageWidth - r), c < t.imageY ? c = t.imageY : c + a > t.imageHeight && (c = t.imageHeight - a), t.cropRectangle.topLeftX = s, t.cropRectangle.topLeftY = c, t.cropRectangle.bottomRightX = s + r, t.cropRectangle.bottomRightY = c + a;
            },
                c = function t() {
              document.documentElement.removeEventListener("mousemove", s, !1), document.documentElement.removeEventListener("mouseup", t, !1), document.documentElement.removeEventListener("mouseleave", t, !1), document.documentElement.removeEventListener("touchmove", s, !1), document.documentElement.removeEventListener("touchend", t, !1), document.documentElement.removeEventListener("touchleave", t, !1);
            };document.documentElement.addEventListener("mousemove", s, !1), document.documentElement.addEventListener("mouseup", c, !1), document.documentElement.addEventListener("mouseleave", c, !1), document.documentElement.addEventListener("touchmove", s, !1), document.documentElement.addEventListener("touchend", c, !1), document.documentElement.addEventListener("touchleave", c, !1);
          };this.$refs.cropArea.addEventListener("mousedown", e, !1), this.$refs.cropArea.addEventListener("touchstart", e, !1);
        }, initialize: function initialize() {
          if (void 0 !== this.aspectRatio) {
            var t = this.calculateRectangleMaintainingAspectRatio(this.imageWidth - this.imageX, this.imageHeight - this.imageY);this.cropRectangle.topLeftX = (this.imageWidth + this.imageX - t.w) / 2, this.cropRectangle.topLeftY = (this.imageHeight + this.imageY - t.h) / 2, this.cropRectangle.bottomRightX = this.cropRectangle.topLeftX + t.w, this.cropRectangle.bottomRightY = this.cropRectangle.topLeftY + t.h;
          } else this.cropRectangle.topLeftX = this.imageX, this.cropRectangle.topLeftY = this.imageY, this.cropRectangle.bottomRightX = this.imageWidth, this.cropRectangle.bottomRightY = this.imageHeight, os("crop initialized", this.cropRectangle);
        }, undoCrop: function undoCrop() {
          this.$store.commit("SET_CROP_RECTANGLE", null), this.$store.commit("REMOVE_TRANSFORMATION", "crop"), this.performTransformations();
        } }), mounted: function mounted() {
        var t = this;this.addMarkerBehaviour(this.$refs.topLeftMarker, "topLeftX", "topLeftY"), this.addMarkerBehaviour(this.$refs.topRightMarker, "bottomRightX", "topLeftY"), this.addMarkerBehaviour(this.$refs.bottomLeftMarker, "topLeftX", "bottomRightY"), this.addMarkerBehaviour(this.$refs.bottomRightMarker, "bottomRightX", "bottomRightY"), this.addMoveSelectionBehaviour(), this.$nextTick(function () {
          return t.initialize();
        }), os("crop mounted");
      }, destroyed: function destroyed() {
        this.performTransformations();
      } },
        us = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fst-options-bar" }, [n("div", { staticClass: "fst-options__option" }, [n("label", { attrs: { for: "on" } }, [t._v("On:")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.on, expression: "on" }], attrs: { id: "on", type: "radio", value: "true" }, domProps: { checked: t._q(t.on, "true") }, on: { change: t.applyTransform, __c: function __c(e) {
              t.on = "true";
            } } })]), n("div", { staticClass: "fst-options__option" }, [n("label", { attrs: { for: "on" } }, [t._v("Off:")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.on, expression: "on" }], attrs: { id: "off", type: "radio", value: "false" }, domProps: { checked: t._q(t.on, "false") }, on: { change: t.applyTransform, __c: function __c(e) {
              t.on = "false";
            } } })])]);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["transformations"])), data: function data() {
        return { on: !1 };
      }, methods: vi({}, qr.mapActions(["performTransformations"]), { applyTransform: function applyTransform() {
          "true" !== this.on ? this.$store.commit("REMOVE_TRANSFORMATION", "circle") : this.$store.commit("SET_TRANSFORMATION", { type: "circle", options: {} }), this.performTransformations();
        } }), mounted: function mounted() {
        this.on = !!this.transformations.circle || !1;
      } },
        fs = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fst-options-bar" }, [n("div", { staticClass: "fst-options__option" }, [n("label", { attrs: { for: "deg" } }, [t._v("Degree:")]), n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.options.deg, expression: "options.deg", modifiers: { number: !0 } }], attrs: { id: "deg", type: "range", min: "0", max: "359" }, domProps: { value: t.options.deg }, on: { change: t.applyTransform, __r: function __r(e) {
              t.options.deg = t._n(e.target.value);
            }, blur: function blur(e) {
              t.$forceUpdate();
            } } }), n("div", { staticClass: "fst-options__option" }, [n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.options.deg, expression: "options.deg", modifiers: { number: !0 } }], attrs: { type: "number", min: "0", max: "359" }, domProps: { value: t.options.deg }, on: { change: t.applyTransform, input: function input(e) {
              e.target.composing || (t.options.deg = t._n(e.target.value));
            }, blur: function blur(e) {
              t.$forceUpdate();
            } } })])])]);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["transformations"])), data: function data() {
        return { options: { deg: 0 } };
      }, methods: vi({}, qr.mapActions(["performTransformations"]), { applyTransform: function applyTransform() {
          var t = vi({}, this.options);this.options.exif && delete t.deg, this.$store.commit("SET_TRANSFORMATION", { type: "rotate", options: t }), this.performTransformations();
        } }), mounted: function mounted() {
        this.options = vi({}, this.options, this.transformations.rotate);
      } },
        ds = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fst-options-bar" }, [n("div", { staticClass: "fst-options__option" }, [n("label", { attrs: { for: "deg" } }, [t._v("Threshold:")]), n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.options.threshold, expression: "options.threshold", modifiers: { number: !0 } }], attrs: { id: "deg", type: "range", min: "0", max: "100" }, domProps: { value: t.options.threshold }, on: { change: t.applyTransform, __r: function __r(e) {
              t.options.threshold = t._n(e.target.value);
            }, blur: function blur(e) {
              t.$forceUpdate();
            } } }), n("div", { staticClass: "fst-options__option" }, [n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.options.threshold, expression: "options.threshold", modifiers: { number: !0 } }], attrs: { type: "number", min: "0", max: "100" }, domProps: { value: t.options.threshold }, on: { change: t.applyTransform, input: function input(e) {
              e.target.composing || (t.options.threshold = t._n(e.target.value));
            }, blur: function blur(e) {
              t.$forceUpdate();
            } } })])])]);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["transformations"])), data: function data() {
        return { options: { threshold: 0 } };
      }, methods: vi({}, qr.mapActions(["performTransformations"]), { applyTransform: function applyTransform() {
          this.$store.commit("SET_TRANSFORMATION", { type: "blackwhite", options: this.options }), this.performTransformations();
        } }), mounted: function mounted() {
        this.options = vi({}, this.options, this.transformations.blackwhite);
      } },
        ps = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fst-options-bar" }, [n("div", { staticClass: "fst-options__option" }, [n("label", { attrs: { for: "on" } }, [t._v("On:")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.on, expression: "on" }], attrs: { id: "on", type: "radio", value: "true" }, domProps: { checked: t._q(t.on, "true") }, on: { change: t.applyTransform, __c: function __c(e) {
              t.on = "true";
            } } })]), n("div", { staticClass: "fst-options__option" }, [n("label", { attrs: { for: "on" } }, [t._v("Off:")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.on, expression: "on" }], attrs: { id: "off", type: "radio", value: "false" }, domProps: { checked: t._q(t.on, "false") }, on: { change: t.applyTransform, __c: function __c(e) {
              t.on = "false";
            } } })])]);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["transformations"])), data: function data() {
        return { on: !1 };
      }, methods: vi({}, qr.mapActions(["performTransformations"]), { applyTransform: function applyTransform() {
          var t = !("true" !== this.on);this.$store.commit("SET_TRANSFORMATION", { type: "monochrome", options: t }), this.performTransformations();
        } }), mounted: function mounted() {
        this.on = this.transformations.monochrome || !1;
      } },
        ms = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fst-options-bar" }, [n("div", { staticClass: "fst-options__option" }, [n("label", { attrs: { for: "tone" } }, [t._v("Tone:")]), n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.options.tone, expression: "options.tone", modifiers: { number: !0 } }], attrs: { id: "tone", type: "range", min: "0", max: "100" }, domProps: { value: t.options.tone }, on: { change: t.applyTransform, __r: function __r(e) {
              t.options.tone = t._n(e.target.value);
            }, blur: function blur(e) {
              t.$forceUpdate();
            } } }), n("div", { staticClass: "fst-options__option" }, [n("input", { directives: [{ name: "model", rawName: "v-model.number", value: t.options.tone, expression: "options.tone", modifiers: { number: !0 } }], attrs: { type: "number", min: "0", max: "100" }, domProps: { value: t.options.tone }, on: { change: t.applyTransform, input: function input(e) {
              e.target.composing || (t.options.tone = t._n(e.target.value));
            }, blur: function blur(e) {
              t.$forceUpdate();
            } } })])])]);
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["transformations"])), data: function data() {
        return { options: { tone: 0 } };
      }, methods: vi({}, qr.mapActions(["performTransformations"]), { applyTransform: function applyTransform() {
          0 === this.options.tone ? this.$store.commit("REMOVE_TRANSFORMATION", "sepia") : this.$store.commit("SET_TRANSFORMATION", { type: "sepia", options: this.options }), this.performTransformations();
        } }), mounted: function mounted() {
        this.options = vi({}, this.options, this.transformations.sepia);
      } },
        hs = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fst-sidebar" }, t._l(t.enabled, function (e) {
          return n("div", { staticClass: "fst-sidebar__option", class: { "fst-sidebar__option--active": e === t.activeTransform }, on: { click: function click(n) {
                t.handleClick(e);
              } } }, [n("span", { staticClass: "fst-icon", class: t.genIconClass(e) }), t._v(" " + t._s(e))]);
        }));
      }, staticRenderFns: [], computed: vi({}, qr.mapGetters(["enabled", "activeTransform"])), methods: { handleClick: function handleClick(t) {
          this.$store.commit("SET_ACTIVE_TRANSFORM", t);
        }, genIconClass: function genIconClass(t) {
          return this.activeTransform === t ? "fst-icon--" + t + "-white" : "fst-icon--" + t + "-black";
        } } },
        vs = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fst-transform" }, [n("div", { staticClass: "fst-modal" }, [n("transforms"), n("div", { staticClass: "fst-modal__body" }, [n("div", { staticClass: "fst-container" }, [n("div", { staticClass: "fst-content" }, [n("img", { ref: "image", staticClass: "fst-image", attrs: { src: t.imageUrl }, on: { load: t.imageLoaded } }), "crop" === t.activeTransform ? n("crop", { attrs: { "image-width": t.imageWidth, "image-height": t.imageHeight, "image-x": t.imageX, "image-y": t.imageY } }) : t._e(), "rotate" === t.activeTransform ? n("rotate") : t._e(), "blackwhite" === t.activeTransform ? n("black-white") : t._e(), "monochrome" === t.activeTransform ? n("monochrome") : t._e(), "circle" === t.activeTransform ? n("circle-view") : t._e(), "sepia" === t.activeTransform ? n("sepia") : t._e()], 1)]), n("div", { staticClass: "fst-footer" }, [n("div", { staticClass: "fst-button fst-button--cancel", on: { click: t.cancel } }, [t._v("Cancel")]), n("div", { staticClass: "fst-button fst-button--primary", on: { click: t.done } }, [t._v("Done")])])])], 1)]);
      }, staticRenderFns: [], components: { "circle-view": us, Crop: ls, Rotate: fs, BlackWhite: ds, Monochrome: ps, Sepia: ms, Transforms: hs }, data: function data() {
        return { imageWidth: 0, imageHeight: 0 };
      }, computed: vi({}, qr.mapGetters(["imageUrl", "activeTransform"])), methods: vi({}, qr.mapActions(["performTransformations"]), { imageLoaded: function imageLoaded() {
          if (this.$refs.image) {
            var t = this.$refs.image.offsetLeft,
                e = this.$refs.image.offsetTop;this.imageWidth = this.$refs.image.offsetWidth + t, this.imageHeight = this.$refs.image.offsetHeight + e, this.imageX = t, this.imageY = e;var n = this.$refs.image.naturalWidth,
                i = this.$refs.image.naturalHeight;this.$store.commit("SET_IMAGE_NATURAL_SIZE", { w: n, h: i });
          }
        }, cancel: function cancel() {
          this.$root.$destroy();
        }, done: function done() {
          this.performTransformations({ done: !0 }), this.$root.$destroy();
        } }) };re.use(qr);var gs = { imageNaturalWidth: 0, imageNaturalHeight: 0, transformations: {}, cropRectangle: null, activeTransform: null },
        _s = function _s(t, e, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = function o(e) {
        var n = t.getSecurity();return n && n.policy && n.signature && e.indexOf("https://process.filestackapi.com") === -1 && e.indexOf("https://process-stage.filestackapi.com") === -1 ? e + "?policy=" + n.policy + "&signature=" + n.signature : e;
      };return new qr.Store({ state: vi({}, gs, { config: e }, i), mutations: { SET_IMAGE_NATURAL_SIZE: function SET_IMAGE_NATURAL_SIZE(t, e) {
            t.imageNaturalWidth = e.w, t.imageNaturalHeight = e.h;
          }, SET_CROP_RECTANGLE: function SET_CROP_RECTANGLE(t, e) {
            t.cropRectangle = e;
          }, SET_ACTIVE_TRANSFORM: function SET_ACTIVE_TRANSFORM(t, e) {
            t.activeTransform = e;
          }, SET_NEW_URL: function SET_NEW_URL(t, e) {
            var n = o(e);t.config.imageUrl = n;
          }, SET_TRANSFORMATION: function SET_TRANSFORMATION(t, e) {
            var n = e.type,
                i = e.options;re.set(t.transformations, n, i);
          }, REMOVE_TRANSFORMATION: function REMOVE_TRANSFORMATION(t, e) {
            re.delete(t.transformations, e);
          } }, actions: { performTransformations: function performTransformations(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = e.state,
                r = vi({}, o.transformations);if (o.transformations.crop) {
              var a = o.transformations.crop.dim;e.commit("SET_CROP_RECTANGLE", a), o.config.minDimensions && (o.config.minDimensions[0] > a.width || o.config.minDimensions[1] > a.height) && (r.resize = {}, r.resize.width = o.config.minDimensions[0], r.resize.height = o.config.minDimensions[1]), o.config.maxDimensions && (o.config.maxDimensions[0] < a.width || o.config.maxDimensions[1] < a.height) && (r.resize = {}, r.resize.width = o.config.maxDimensions[0], r.resize.height = o.config.maxDimensions[1]);
            } else o.config.minDimensions && (o.config.minDimensions[0] > o.imageNaturalWidth || o.config.minDimensions[1] > o.imageNaturalHeight) && (r.resize = {}, r.resize.width = o.config.minDimensions[0], r.resize.height = o.config.minDimensions[1]), o.config.maxDimensions && (o.config.maxDimensions[0] < o.imageNaturalWidth || o.config.maxDimensions[1] < o.imageNaturalHeight) && (r.resize = {}, r.resize.width = o.config.maxDimensions[0], r.resize.height = o.config.maxDimensions[1]);if (i) try {
              if (Object.keys(r).length) {
                n(t.transform(e.getters.originalUrl, r));
              } else n(null);
            } catch (t) {
              console.log(t);
            } else {
              var s = t.transform(e.getters.originalUrl, r);e.commit("SET_NEW_URL", s);
            }
          } }, getters: { imageUrl: function imageUrl(t) {
            return o(t.config.imageUrl);
          }, originalUrl: function originalUrl(t) {
            return t.config.originalUrl;
          }, cachedCropRectangle: function cachedCropRectangle(t) {
            return t.cropRectangle;
          }, transformations: function transformations(t) {
            return t.transformations;
          }, imageNaturalWidth: function imageNaturalWidth(t) {
            return t.imageNaturalWidth;
          }, imageNaturalHeight: function imageNaturalHeight(t) {
            return t.imageNaturalHeight;
          }, enabled: function enabled(t) {
            return Object.keys(t.config.transformations).filter(function (e) {
              return t.config.transformations[e];
            });
          }, activeTransform: function activeTransform(t) {
            return t.activeTransform;
          }, cropAspectRatio: function cropAspectRatio(t) {
            return t.config.transformations.crop && t.config.transformations.crop.aspectRatio;
          } } });
    },
        ys = function ys(t) {
      return "object" === (void 0 === t ? "undefined" : mi(t)) && null !== t && Array.isArray(t) === !1 && t instanceof HTMLElement == !1;
    },
        bs = function bs(t) {
      return "number" == typeof t;
    },
        Cs = { imageUrl: function imageUrl(t) {
        return t;
      }, container: function container(t) {
        if (t instanceof HTMLElement) return t;throw new Error('Invalid value for "container" config option');
      },
      minDimensions: function minDimensions(t) {
        if (Array.isArray(t)) {
          if (2 === t.length) {
            if (!t.some(function (t) {
              return "number" != typeof t;
            })) return t;throw new Error('Option "minDimensions" requires array of numbers');
          }throw new Error('Option "minDimensions" requires array with exactly two elements: [width, height]');
        }throw new Error('Invalid value for "minDimensions" config option');
      }, maxDimensions: function maxDimensions(t) {
        if (Array.isArray(t)) {
          if (2 === t.length) {
            if (!t.some(function (t) {
              return "number" != typeof t;
            })) return t;throw new Error('Option "maxDimensions" requires array of numbers');
          }throw new Error('Option "maxDimensions" requires array with exactly two elements: [width, height]');
        }throw new Error('Invalid value for "maxDimensions" config option');
      }, transformations: function transformations(t) {
        if (ys(t)) return t;throw new Error('Invalid value for "transformations" config option');
      }, "transformations.crop": function transformationsCrop(t) {
        if (ys(t)) return t;if (t === !0) return {};if (t === !1) return !1;throw new Error('Invalid value for "transformations.crop" config option');
      }, "transformations.crop.aspectRatio": function transformationsCropAspectRatio(t) {
        if (bs(t)) return t;throw new Error('Invalid value for "transformations.crop.aspectRatio" config option');
      }, "transformations.rotate": function transformationsRotate(t) {
        if ("boolean" == typeof t) return t;throw new Error('Invalid value for "transformations.rotate" config option');
      }, "transformations.blackwhite": function transformationsBlackwhite(t) {
        if ("boolean" == typeof t) return t;throw new Error('Invalid value for "transformations.blackwhite" config option');
      }, "transformations.monochrome": function transformationsMonochrome(t) {
        if ("boolean" == typeof t) return t;throw new Error('Invalid value for "transformations.monochrome" config option');
      }, "transformations.circle": function transformationsCircle(t) {
        if ("boolean" == typeof t) return t;throw new Error('Invalid value for "transformations.circle" config option');
      }, "transformations.sepia": function transformationsSepia(t) {
        if ("boolean" == typeof t) return t;throw new Error('Invalid value for "transformations.sepia" config option');
      } },
        Es = function Es(t) {
      return void 0 === t.transformations && (t.transformations = { crop: !0 }), t;
    },
        Ts = function t(e, n) {
      var i = {};return Object.keys(e).forEach(function (o) {
        var r = o;n && (r = n + "." + o);var a = Cs[r];if (!a) throw new Error('Unknown config option "' + r + '"');var s = a(e[o]);ys(s) ? i[o] = t(s, r) : i[o] = s;
      }), i;
    },
        ws = Fr.context("transformer"),
        As = function As(t, e, n) {
      return new Promise(function (i) {
        var o = function o(t) {
          i(t);
        },
            r = document.body;e.container && (r = e.container);var a = document.createElement("div");r.appendChild(a);var s = new re({ el: a, store: _s(t, e, o, n), render: function render(t) {
            return t(vs);
          }, destroyed: function destroyed() {
            return s.$el.parentNode.removeChild(s.$el), o();
          } });
      });
    },
        Ss = function Ss(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};return ws("Starting transformer v0.3.4 with config:", n), n = vi({ imageUrl: e }, n), n = Ts(Es(n)), n.originalUrl = e, Ur.loadCss(pi.css.main).then(function () {
        return As(t, n, i);
      });
    },
        Rs = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-picker" }, [n("close-button"), n("div", { ref: "container" }), t._m(0)], 1);
      }, staticRenderFns: [function () {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-picker__footer" }, [t._v("Powered by "), n("span", { staticClass: "fsp-icon--filestack" }), t._v(" Filestack")]);
      }], components: { CloseButton: ra }, computed: vi({}, qr.mapGetters(["apiClient", "stagedForTransform", "transformOptions", "uploadInBackground"])), methods: vi({}, qr.mapActions(["startUploading"]), { showInTransformer: function showInTransformer(t) {
          var e = this;Ss(this.apiClient, t.url, vi({}, this.transformOptions, { container: this.$refs.container }), { transformations: {} }).then(function (n) {
            e.$store.commit("SET_FILE_TRANSFORMATION", { uploadToken: t.uploadToken, transformedUrl: n });
          }).then(function () {
            e.$store.commit("GO_BACK_WITH_ROUTE"), e.uploadInBackground && e.startUploading();
          });
        } }), mounted: function mounted() {
        this.showInTransformer(this.stagedForTransform);
      } },
        ks = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-picker" }, [n("close-button"), n("div", { staticClass: "fsp-modal" }, [n("sidebar"), n("div", { staticClass: "fsp-modal__body" }, [n("div", { staticClass: "fsp-container" }, [t.uploadStarted || t.mobileNavActive ? t._e() : n("div", { staticClass: "fsp-summary__go-back", attrs: { title: "Go back" }, on: { click: t.goBack } }), n("content-header", [t.mobileNavActive ? t._e() : n("span", { staticClass: "fsp-header-text--visible" }, [t._v(t._s(t.headerText))])]), n("div", { staticClass: "fsp-content fsp-content--selected-items" }, [n("div", { staticClass: "fsp-summary" }, [n("div", { staticClass: "fsp-summary__header" }, [n("div", { staticClass: "fsp-summary__filter" }, [n("input", { attrs: { placeholder: "Filter" }, on: { input: t.updateFilter } }), t._v(" "), n("span", { staticClass: "fsp-summary__filter-icon" })])]), n("div", { staticClass: "fsp-summary__body" }, [t.onlyTransformedImages.length ? n("div", { staticClass: "fsp-grid__label" }, [t._v("Edited Images")]) : t._e(), t.onlyTransformedImages.length ? n("div", { staticClass: "fsp-summary__images-container" }, t._l(t.onlyTransformedImages, function (e) {
          return n("div", { key: e.uploadToken, staticClass: "fsp-summary__item" }, ["local_file_system" === e.source ? n("img", { ref: e.uploadToken, refInFor: !0, staticClass: "fsp-summary__thumbnail", attrs: { src: t.generateThumbnail(e) }, on: { load: function load(n) {
                t.revokeURL(e);
              } } }) : n("div", [n("img", { staticClass: "fsp-summary__thumbnail", attrs: { src: e.transformed || e.thumbnail } })]), n("span", { staticClass: "fsp-summary__item-name" }, [t._v(t._s(e.name) + " "), "local_file_system" === e.source ? n("span", { staticClass: "fsp-summary__size" }, [t.uploadStarted ? n("span", { staticClass: "fsp-summary__size-progress" }, [t._v(t._s(e.progressSize) + " of ")]) : t._e(), t._v(t._s(t.translatedFileSize(e.size)))]) : t._e()]), n("div", { staticClass: "fsp-summary__item-progress", style: { width: e.progress + "%" } }), t.uploadStarted ? t._e() : n("div", { staticClass: "fsp-summary__actions-container" }, [t.isLoading(e.uploadToken) ? n("span", { staticClass: "fsp-summary__action fsp-summary__action--disabled" }, [t._v("Loading...")]) : t._e(), t._v(" "), t.disableTransformer || t.isLoading(e.uploadToken) ? t._e() : n("span", [n("span", { staticClass: "fsp-summary__action fsp-summary__action--button", on: { click: function click(n) {
                t.removeTransformation(e);
              } } }, [t._v("Revert")])]), n("span", { staticClass: "fsp-summary__action-separator" }), t._v(" "), n("span", { staticClass: "fsp-summary__action fsp-summary__action--remove", on: { click: function click(n) {
                t.addFile(e);
              } } })])]);
        })) : t._e(), t.onlyImages.length ? n("div", { staticClass: "fsp-grid__label" }, [t._v("Images")]) : t._e(), t.onlyImages.length ? n("div", { staticClass: "fsp-summary__images-container" }, t._l(t.onlyImages, function (e) {
          return n("div", { key: e.uploadToken, staticClass: "fsp-summary__item" }, ["local_file_system" === e.source ? n("img", { ref: e.uploadToken, refInFor: !0, staticClass: "fsp-summary__thumbnail", attrs: { src: t.generateThumbnail(e) }, on: { load: function load(n) {
                t.revokeURL(e);
              } } }) : n("div", [n("img", { staticClass: "fsp-summary__thumbnail", attrs: { src: e.transformed || e.thumbnail } })]), n("span", { staticClass: "fsp-summary__item-name" }, [t._v(t._s(e.name) + " "), "local_file_system" === e.source ? n("span", { staticClass: "fsp-summary__size" }, [t.uploadStarted ? n("span", { staticClass: "fsp-summary__size-progress" }, [t._v(t._s(e.progressSize) + " of ")]) : t._e(), t._v(t._s(t.translatedFileSize(e.size)))]) : t._e()]), n("div", { staticClass: "fsp-summary__item-progress", style: { width: e.progress + "%" } }), t.uploadStarted ? t._e() : n("div", { staticClass: "fsp-summary__actions-container" }, [t.isLoading(e.uploadToken) ? n("span", { staticClass: "fsp-summary__action fsp-summary__action--disabled" }, [t._v("Loading...")]) : t._e(), t._v(" "), t.disableTransformer || t.isLoading(e.uploadToken) ? t._e() : n("span", [n("span", { staticClass: "fsp-summary__action fsp-summary__action--button", on: { click: function click(n) {
                t.transformImage(e);
              } } }, [t._v("Edit")])]), n("span", { staticClass: "fsp-summary__action-separator" }), t._v(" "), n("span", { staticClass: "fsp-summary__action fsp-summary__action--remove", on: { click: function click(n) {
                t.addFile(e);
              } } })])]);
        })) : t._e(), t.onlyFiles.length ? n("div", { staticClass: "fsp-grid__label" }, [t._v("Files")]) : t._e(), t._l(t.onlyFiles, function (e) {
          return n("div", { key: e.uploadToken, staticClass: "fsp-summary__item" }, [n("div", { staticClass: "fsp-summary__thumbnail-container" }, [n("span", { class: t.generateClass(e) })]), n("span", { staticClass: "fsp-summary__item-name" }, [t._v(t._s(e.name) + " "), "local_file_system" === e.source ? n("span", { staticClass: "fsp-summary__size" }, [t.uploadStarted ? n("span", { staticClass: "fsp-summary__size-progress" }, [t._v(t._s(e.progressSize) + " of ")]) : t._e(), t._v(t._s(t.translatedFileSize(e.size)))]) : t._e()]), n("div", { staticClass: "fsp-summary__item-progress", style: { width: e.progress + "%" } }), t.uploadStarted ? t._e() : n("div", { staticClass: "fsp-summary__actions-container" }, [n("div", { staticClass: "fsp-summary__action", on: { click: function click(n) {
                t.addFile(e);
              } } }, [n("span", { staticClass: "fsp-summary__action--remove" })])])]);
        }), t.hideMinFilesNotification ? t._e() : n("div", { staticClass: "fsp-notifications__container" }, [n("div", { staticClass: "fsp-notifications__message" }, [n("span", { staticClass: "fsp-label" }, [t._v(t._s(t.getMinFilesNotification))])]), n("span", { staticClass: "fsp-notifications__back-button", on: { click: t.goBack } }, [t._v("Go Back")])])], 2)])])], 1), n("footer-nav", { attrs: { "is-visible": !t.uploadStarted } }, [n("span", { staticClass: "fsp-button fsp-button--flat fsp-button__deselect", on: { click: t.deselectAllFiles }, slot: "nav-left" }, [t._v("Deselect All")]), t._v(" "), n("span", { staticClass: "fsp-button fsp-button--primary", class: { "fsp-button--disabled": !t.canStartUpload }, attrs: { title: "Upload" }, on: { click: t.startUploadMaybe }, slot: "nav-right" }, [t._v("Upload "), n("span", { staticClass: "fsp-badge fsp-badge--bright" }, [t._v(t._s(t.allFiles.length))])])])], 1)], 1), t._m(0)], 1);
      }, staticRenderFns: [function () {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "fsp-picker__footer" }, [t._v("Powered by "), n("span", { staticClass: "fsp-icon--filestack" }), t._v(" Filestack")]);
      }], components: { CloseButton: ra, ContentHeader: Ia, Sidebar: Ma, FooterNav: xa }, computed: vi({}, qr.mapGetters(["allFilesInQueueCount", "filesWaiting", "filesUploading", "filesDone", "filesFailed", "route", "routesHistory", "uploadStarted", "minFiles", "canStartUpload", "filesNeededCount", "disableTransformer", "mobileNavActive"]), { allFiles: function allFiles() {
          return this.filesUploading.concat(this.filesWaiting);
        }, getMinFilesNotification: function getMinFilesNotification() {
          return 1 === this.filesNeededCount ? "Please select 1 more file" : this.filesNeededCount > 1 ? "Please select " + this.filesNeededCount + " more files" : null;
        }, hideMinFilesNotification: function hideMinFilesNotification() {
          return this.uploadStarted || this.canStartUpload;
        }, onlyFiles: function onlyFiles() {
          var t = this,
              e = new RegExp(this.filter, "i");return this.allFiles.filter(function (e) {
            return !t.isImage(e);
          }).filter(function (t) {
            return e.test(t.name);
          });
        }, onlyImages: function onlyImages() {
          var t = this,
              e = new RegExp(this.filter, "i");return this.allFiles.filter(function (e) {
            return t.isImage(e);
          }).filter(function (t) {
            return !t.transformed;
          }).filter(function (t) {
            return e.test(t.name);
          });
        }, onlyTransformedImages: function onlyTransformedImages() {
          var t = this,
              e = new RegExp(this.filter, "i");return this.allFiles.filter(function (e) {
            return t.isImage(e);
          }).filter(function (t) {
            return t.transformed;
          }).filter(function (t) {
            return e.test(t.name);
          });
        }, headerText: function headerText() {
          return this.uploadStarted ? "Uploaded " + this.filesDone.concat(this.filesFailed).length + " of " + this.allFilesInQueueCount : this.t("Selected Files");
        }, atLeastOneLoading: function atLeastOneLoading() {
          var t = this;return !!Object.keys(this.loading).filter(function (e) {
            return t.loading[e];
          }).length;
        } }), created: function created() {
        this.$store.commit("CANCEL_ALL_PENDING_REQUESTS");
      }, data: function data() {
        return { blobURLs: {}, currentPath: null, currentSource: null, filter: "", loading: {} };
      }, methods: vi({}, qr.mapActions(["addFile", "deselectAllFiles", "deselectFolder", "removeTransformation", "startUploading", "uploadFileToTemporaryLocation", "goBack"]), { isImage: function isImage(t) {
          return t.mimetype && t.mimetype.indexOf("image/") !== -1;
        }, isAudio: function isAudio(t) {
          return t.mimetype && t.mimetype.indexOf("audio/") !== -1;
        }, isLoading: function isLoading(t) {
          return this.loading[t];
        }, fileOrFiles: function fileOrFiles(t) {
          return 1 === this.getFileCount(t) ? "File" : "Files";
        }, generateClass: function generateClass(t) {
          return this.isAudio(t) ? "fsp-grid__icon-audio" : "application/pdf" === t.mimetype ? "fsp-grid__icon-pdf" : "fsp-grid__icon-file";
        }, translatedFileSize: function translatedFileSize(t) {
          return ma(t);
        }, generateThumbnail: function generateThumbnail(t) {
          if (t.transformed) return t.transformed;var e = window.URL.createObjectURL(t.originalFile);return this.blobURLs[t.uploadToken] = e, e;
        }, revokeURL: function revokeURL(t) {
          var e = this.blobURLs[t.uploadToken];window.URL.revokeObjectURL(e);
        }, updateFilter: function updateFilter(t) {
          this.filter = t.target.value;
        }, startUploadMaybe: function startUploadMaybe() {
          this.canStartUpload && this.startUploading(!0);
        }, transformImage: function transformImage(t) {
          var e = this;if (!this.atLeastOneLoading) {
            var n = t.uploadToken;this.loading = vi({}, this.loading, hi({}, n, !0)), this.uploadFileToTemporaryLocation(n).then(function (t) {
              t ? (e.loading = vi({}, e.loading, hi({}, n, !1)), e.$store.commit("SET_FILE_FOR_TRANSFORM", t), e.$store.commit("CHANGE_ROUTE", ["transform"])) : e.loading = vi({}, e.loading, hi({}, n, !1));
            });
          }
        } }), watch: { allFiles: { handler: function handler(t) {
            0 === t.length && this.$store.commit("GO_BACK_WITH_ROUTE");
          } } } },
        Os = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return t.uiVisible ? n("div", [t.isRootRoute("source") ? n("pick-from-source") : t._e(), t.isRootRoute("summary") ? n("upload-summary") : t._e(), t.isRootRoute("transform") ? n("transform") : t._e(), n("notifications"), t.localPickingAllowed ? n("drag-and-drop") : t._e()], 1) : t._e();
      }, staticRenderFns: [], components: { DragAndDrop: ea, Notifications: na, PickFromSource: ja, Transform: Rs, UploadSummary: ks }, computed: vi({}, qr.mapGetters(["uiVisible", "route", "fromSources", "pendingReqs"]), { localPickingAllowed: function localPickingAllowed() {
          return this.fromSources.some(function (t) {
            return "local_file_system" === t.name;
          });
        } }), methods: vi({}, qr.mapActions(["prefetchClouds"]), { isRootRoute: function isRootRoute(t) {
          return this.route[0] === t;
        }, detectEscPressed: function detectEscPressed(t) {
          27 === t.keyCode && this.$root.$destroy();
        } }), created: function created() {
        var t = this;window.addEventListener("keyup", this.detectEscPressed), this.prefetchClouds(), this.interval = setInterval(function () {
          t.pendingReqs.length && t.$store.commit("EXECUTE_PENDING_REQUEST");
        }, 500);
      }, destroyed: function destroyed() {
        window.removeEventListener("keyup", this.detectEscPressed), clearInterval(this.interval), this.$store.commit("CANCEL_ALL_PENDING_REQUESTS");
      }, watch: { route: { immediate: !0, deep: !0, handler: function handler(t) {
            "done" === t[0] && this.$root.$destroy();
          } } } },
        Fs = function Fs(t) {
      var e = void 0,
          n = function n(t, e) {
        return vi({ source: e, sourceKind: "cloud" }, t);
      };return { state: { currentCloudAuthorized: !0, currentCloudName: void 0, currentCloudPath: void 0, listForCurrentCloudPath: [], cache: {}, cloudFolders: {}, cloudsAuthorized: {}, cloudsPrefetching: {}, loading: !1, pendingReqs: [], pendingTokens: [] }, mutations: { SET_CURRENT_CLOUD_AUTHORIZED: function SET_CURRENT_CLOUD_AUTHORIZED(t, e) {
            t.currentCloudAuthorized = e;
          }, SET_CURRENT_CLOUD_NAME: function SET_CURRENT_CLOUD_NAME(t, e) {
            t.currentCloudName = e;
          }, SET_CLOUD_AUTHORIZED: function SET_CLOUD_AUTHORIZED(t, e) {
            var n = e.key,
                i = e.value;re.set(t.cloudsAuthorized, n, i);
          }, RESET_CLOUD_AUTHORIZED: function RESET_CLOUD_AUTHORIZED(t) {
            t.cloudsAuthorized = {};
          }, SET_CURRENT_CLOUD_PATH: function SET_CURRENT_CLOUD_PATH(t, e) {
            var n = e.length > 0 ? ka(e) : e,
                i = t.currentCloudName + n,
                o = t.cache[i];o && (t.listForCurrentCloudPath = o), t.currentCloudPath = e;
          }, SET_LIST_FOR_CURRENT_CLOUD_PATH: function SET_LIST_FOR_CURRENT_CLOUD_PATH(t, e) {
            var n = t.currentCloudPath,
                i = n.length > 0 ? ka(n) : n,
                o = t.currentCloudName + i;t.cache[o] = e, t.listForCurrentCloudPath = e;
          }, RESET_LIST_CURRENT_CLOUD_PATH: function RESET_LIST_CURRENT_CLOUD_PATH(t) {
            t.listForCurrentCloudPath = [];
          }, SET_CLOUD_FOLDERS: function SET_CLOUD_FOLDERS(t, e) {
            e.forEach(function (e) {
              t.cloudFolders[e.path] = vi({}, t.cloudFolders[e.path], { name: e.name });
            });
          }, SET_CLOUD_FOLDER_LOADING: function SET_CLOUD_FOLDER_LOADING(t, e) {
            var n = e.path,
                i = e.value;t.cloudFolders = vi({}, t.cloudFolders, hi({}, n, vi({}, t.cloudFolders[n], { loading: i })));
          }, SET_CLOUD_LOADING: function SET_CLOUD_LOADING(t, e) {
            t.loading = e;
          }, SET_CLOUD_PREFETCHING: function SET_CLOUD_PREFETCHING(t, e) {
            var n = e.key,
                i = e.value;re.set(t.cloudsPrefetching, n, i);
          }, SET_CACHE: function SET_CACHE(t, e) {
            var n = e.key,
                i = e.value;t.cache[n] = i;
          }, RESET_CACHE: function RESET_CACHE(t) {
            t.cache = {};
          }, ADD_PENDING_REQUEST: function ADD_PENDING_REQUEST(t, e) {
            var n = e.request,
                i = e.token;t.pendingReqs.push({ request: n, token: i });
          }, EXECUTE_PENDING_REQUEST: function EXECUTE_PENDING_REQUEST(t) {
            var e = t.pendingReqs.pop();e && e.request && e.token && (e.request(), t.pendingTokens.push(e.token));
          }, CANCEL_ALL_PENDING_REQUESTS: function CANCEL_ALL_PENDING_REQUESTS(t) {
            t.pendingTokens.forEach(function (t) {
              t.cancel();
            }), t.pendingReqs = [], t.pendingTokens = [], t.cloudsPrefetching = {};
          } }, actions: { goToDirectory: function goToDirectory(t, e) {
            if (e.path !== t.getters.currentCloudPath.join("")) {
              var n = La(t.getters.currentCloudPath);n.push(e.path);var i = ["source", t.getters.currentCloudName, n];t.commit("CHANGE_ROUTE", i);
            }
          }, logout: function logout(e, n) {
            n ? t.cloud().logout(n).then(function () {
              e.commit("CANCEL_ALL_PENDING_REQUESTS"), e.commit("SET_CLOUD_AUTHORIZED", { key: n, value: !1 }), e.commit("REMOVE_SOURCE_FROM_WAITING", n), Object.keys(e.state.cache).filter(function (t) {
                return t.indexOf(n) >= 0;
              }).forEach(function (t) {
                e.commit("SET_CACHE", { key: t, value: null });
              }), n === e.state.currentCloudName && (e.commit("SET_CURRENT_CLOUD_AUTHORIZED", !1), e.commit("RESET_LIST_CURRENT_CLOUD_PATH"));
            }) : t.cloud().logout().then(function () {
              e.commit("RESET_CLOUD_AUTHORIZED"), e.commit("SET_CURRENT_CLOUD_AUTHORIZED", !1), e.commit("RESET_CACHE"), e.commit("RESET_LIST_CURRENT_CLOUD_PATH"), e.commit("REMOVE_CLOUDS_FROM_WAITING"), e.commit("CANCEL_ALL_PENDING_REQUESTS");
            });
          }, prefetchClouds: function prefetchClouds(e) {
            e.getters.fromSources.filter(function (t) {
              return "cloud" === t.ui;
            }).map(function (t) {
              return t.name;
            }).forEach(function (i) {
              e.commit("SET_CLOUD_PREFETCHING", { key: i, value: !0 });var o = t.cloud(i),
                  r = {},
                  a = function a() {
                return o.list([], r).then(function (t) {
                  e.commit("SET_CLOUD_PREFETCHING", { key: i, value: !1 }), e.commit("SET_CLOUD_AUTHORIZED", { key: i, value: !0 });var r = t.contents.map(function (t) {
                    return n(t, i);
                  }),
                      a = r.filter(function (t) {
                    return t.folder;
                  });e.commit("SET_CLOUD_FOLDERS", a), e.commit("SET_CACHE", { key: i, value: r }), e.getters.currentCloudName === i && (e.commit("SET_LIST_FOR_CURRENT_CLOUD_PATH", r), e.dispatch("prefetchFolders", { client: o, name: i, folders: a }));
                }).catch(function (t) {
                  e.commit("SET_CLOUD_PREFETCHING", { key: i, value: !1 }), e.getters.currentCloudName === i && 401 === t.status && e.commit("SET_CURRENT_CLOUD_AUTHORIZED", { status: "unauthorized", authUrl: t.response.body.redirect_url });
                });
              };e.commit("ADD_PENDING_REQUEST", { request: a, token: r });
            });
          }, prefetchFolders: function prefetchFolders(t, e) {
            var i = e.client,
                o = e.name;e.folders.forEach(function (e) {
              var r = o + e.path;if (!t.state.cache[r]) {
                var a = {},
                    s = function s() {
                  return t.commit("SET_CLOUD_PREFETCHING", { key: r, value: !0 }), i.list(e.path, a).then(function (a) {
                    var s = t.getters.currentCloudPath,
                        c = s.length > 0 ? ka(s) : s,
                        l = a.contents.map(function (t) {
                      return n(t, o);
                    }),
                        u = l.filter(function (t) {
                      return t.folder;
                    });t.commit("SET_CLOUD_PREFETCHING", { key: r, value: !1 }), t.commit("SET_CLOUD_FOLDERS", u), t.commit("SET_CACHE", { key: r, value: l }), e.path === c && (t.commit("SET_LIST_FOR_CURRENT_CLOUD_PATH", l), t.dispatch("prefetchFolders", { client: i, name: o, folders: u }));
                  }).catch(function (n) {
                    t.commit("SET_CLOUD_PREFETCHING", { key: r, value: !1 });var i = t.getters.currentCloudPath,
                        o = i.length > 0 ? ka(i) : i;e.path === o && 401 === n.status && t.commit("SET_CURRENT_CLOUD_AUTHORIZED", { status: "unauthorized", authUrl: n.response.body.redirect_url });
                  });
                };t.commit("ADD_PENDING_REQUEST", { request: s, token: a });
              }
            });
          }, addCloudFolder: function addCloudFolder(i, o) {
            var r = o.name,
                a = o.path,
                s = void 0,
                c = r + a,
                l = i.state.cache[c];l ? s = Promise.resolve(l) : (e = t.cloud(r), s = e.list(a), i.commit("SET_CLOUD_FOLDER_LOADING", { path: a, value: !0 })), s.then(function (t) {
              if (l) return void t.filter(function (t) {
                return !t.folder;
              }).forEach(function (t) {
                return i.dispatch("addFile", t);
              });i.commit("SET_CLOUD_FOLDER_LOADING", { path: a, value: !1 });var e = t.contents.map(function (t) {
                return n(t, r);
              });i.commit("SET_CACHE", { key: c, value: e }), e.filter(function (t) {
                return !t.folder;
              }).forEach(function (t) {
                return i.dispatch("addFile", t);
              });
            }).catch(function (t) {
              i.commit("SET_CLOUD_FOLDER_LOADING", { path: a, value: !1 }), i.dispatch("showNotification", t.message);
            });
          }, showCloudPath: function showCloudPath(i, o) {
            var r = o.name,
                a = o.path,
                s = void 0 === a ? [] : a;i.getters.currentCloudName !== r && (e = t.cloud(r), i.commit("SET_CURRENT_CLOUD_NAME", r)), i.getters.currentCloudAuthorized !== !0 && i.commit("SET_CURRENT_CLOUD_AUTHORIZED", !0);var c = s.length > 0 ? ka(s) : s,
                l = r + c,
                u = i.state.cache[l];if (i.commit("RESET_LIST_CURRENT_CLOUD_PATH"), i.commit("SET_CURRENT_CLOUD_PATH", s), i.commit("CANCEL_ALL_PENDING_REQUESTS"), u) {
              var f = u.filter(function (t) {
                return t.folder;
              });return void i.dispatch("prefetchFolders", { client: e, name: r, folders: f });
            }i.getters.cloudsPrefetching[l] || function (t) {
              i.commit("SET_CLOUD_LOADING", !0), e.list(t).then(function (t) {
                if (i.getters.currentCloudPath === s) {
                  var o = t.contents.map(function (t) {
                    return n(t, r);
                  }),
                      a = o.filter(function (t) {
                    return t.folder;
                  });i.dispatch("prefetchFolders", { client: e, name: r, folders: a }), i.commit("SET_CLOUD_FOLDERS", a), i.commit("SET_LIST_FOR_CURRENT_CLOUD_PATH", o), i.commit("SET_CLOUD_LOADING", !1), i.commit("SET_CLOUD_AUTHORIZED", { key: r, value: !0 });
                }
              }).catch(function (t) {
                i.commit("SET_CLOUD_LOADING", !1), i.getters.currentCloudPath === s && (401 === t.status ? i.commit("SET_CURRENT_CLOUD_AUTHORIZED", { status: "unauthorized", authUrl: t.response.body.redirect_url }) : i.dispatch("showNotification", t.response.body.status));
              });
            }(c);
          } }, getters: { currentCloudAuthorized: function currentCloudAuthorized(t) {
            return t.currentCloudAuthorized;
          }, currentCloudName: function currentCloudName(t) {
            return t.currentCloudName;
          }, currentCloudPath: function currentCloudPath(t) {
            return t.currentCloudPath;
          }, listForCurrentCloudPath: function listForCurrentCloudPath(t) {
            return t.listForCurrentCloudPath;
          }, cloudFolders: function cloudFolders(t) {
            return t.cloudFolders;
          }, cloudLoading: function cloudLoading(t) {
            return t.loading;
          }, cloudsPrefetching: function cloudsPrefetching(t) {
            return t.cloudsPrefetching;
          }, cloudsAuthorized: function cloudsAuthorized(t) {
            return t.cloudsAuthorized;
          }, pendingReqs: function pendingReqs(t) {
            return t.pendingReqs;
          } } };
    },
        Ls = function Ls(t) {
      var e = function e(t) {
        return vi({ source: "imagesearch", sourceKind: "cloud" }, t);
      };return { state: { input: "", isSearching: !1, result: null, error: null }, mutations: { UPDATE_INPUT: function UPDATE_INPUT(t, e) {
            t.input = e;
          }, FETCH_IMAGES_BEGIN: function FETCH_IMAGES_BEGIN(t) {
            t.isSearching = !0;
          }, FETCH_IMAGES_SUCCESS: function FETCH_IMAGES_SUCCESS(t, e) {
            t.result = e, t.isSearching = !1;
          }, FETCH_IMAGES_ERROR: function FETCH_IMAGES_ERROR(t, e) {
            t.error = e, t.isSearching = !1;
          }, CLEAR_RESULT_NAME: function CLEAR_RESULT_NAME(t) {
            t.result && (t.result.name = null);
          } }, actions: { updateSearchInput: function updateSearchInput(t, e) {
            "" !== e && e !== t.getters.imageSearchName || t.commit("CLEAR_RESULT_NAME"), t.commit("UPDATE_INPUT", e);
          }, fetchImages: function fetchImages(n) {
            if (!n.getters.isSearching) {
              var i = n.getters.imageSearchInput;i && (n.commit("FETCH_IMAGES_BEGIN"), t.cloud("imagesearch").list("/" + i).then(function (t) {
                0 === t.contents.length && n.dispatch("showNotification", "No search results found for " + i), t.contents = t.contents.map(e), n.commit("FETCH_IMAGES_SUCCESS", t);
              }).catch(function (t) {
                n.commit("FETCH_IMAGES_ERROR", t), n.dispatch("showNotification", t.message);
              }));
            }
          } }, getters: { isSearching: function isSearching(t) {
            return t.isSearching;
          }, noResultsFound: function noResultsFound(t) {
            return t.result && 0 === t.result.contents.length;
          }, resultsFound: function resultsFound(t) {
            return t.result && t.result.contents.length > 0;
          }, imageSearchInput: function imageSearchInput(t) {
            return t.input;
          }, imageSearchName: function imageSearchName(t) {
            return t.result && t.result.name;
          }, imageSearchResults: function imageSearchResults(t) {
            return t.result && t.result.contents;
          }, imageSearchError: function imageSearchError(t) {
            return t.error;
          } } };
    },
        Ns = { ADD_NOTIFICATION: function ADD_NOTIFICATION(t, e) {
        t.notifications.push(e);
      }, REMOVE_NOTIFICATION: function REMOVE_NOTIFICATION(t, e) {
        t.notifications = t.notifications.filter(function (t) {
          return t !== e;
        });
      }, REMOVE_ALL_NOTIFICATIONS: function REMOVE_ALL_NOTIFICATIONS(t) {
        t.notifications.splice(0, t.notifications.length);
      } },
        Is = { showNotification: function showNotification(t, e, n) {
        var i = vi({ message: e }, n);t.getters.notifications.map(function (t) {
          return t.message;
        }).indexOf(e) < 0 && (t.commit("ADD_NOTIFICATION", i), setTimeout(function () {
          t.commit("REMOVE_NOTIFICATION", i);
        }, 5e3));
      }, removeAllNotifications: function removeAllNotifications(t) {
        t.commit("REMOVE_ALL_NOTIFICATIONS");
      } },
        xs = { notifications: function notifications(t) {
        return t.notifications;
      } },
        $s = { state: { notifications: [] }, mutations: Ns, actions: Is, getters: xs };re.use(qr);var Us = function Us(t, e, n, i) {
      return i = vi({ apiClient: t, config: e, route: ["source", e.fromSources[0].name], routesHistory: [] }, i, { mobileNavActive: Fa(navigator.userAgent), selectLabelIsActive: !1 }), new qr.Store({ state: i, modules: { uploadQueue: Ca(t, i.uploadQueue), cloud: Fs(t), imageSearch: Ls(t), notifications: $s }, mutations: { CHANGE_ROUTE: function CHANGE_ROUTE(t, e) {
            Fa(navigator.userAgent) && e.indexOf("local_file_system") !== -1 && (t.mobileNavActive = !0), t.routesHistory.push(t.route), t.route = e;
          }, GO_BACK_WITH_ROUTE: function GO_BACK_WITH_ROUTE(t) {
            var e = t.routesHistory.pop();Fa(navigator.userAgent) && e.indexOf("local_file_system") !== -1 && (t.mobileNavActive = !0), t.route = e;
          }, UPDATE_MOBILE_NAV_ACTIVE: function UPDATE_MOBILE_NAV_ACTIVE(t, e) {
            t.mobileNavActive = e;
          }, UPDATE_SELECT_LABEL_ACTIVE: function UPDATE_SELECT_LABEL_ACTIVE(t, e) {
            t.selectLabelIsActive = e;
          } }, actions: { allUploadsDone: function allUploadsDone(t) {
            t.commit("CHANGE_ROUTE", ["done"]), n({ filesUploaded: pa(t.getters.filesDone), filesFailed: pa(t.getters.filesFailed) });
          }, goBack: function goBack(t) {
            t.commit("GO_BACK_WITH_ROUTE");
          }, updateMobileNavActive: function updateMobileNavActive(t, e) {
            t.commit("UPDATE_MOBILE_NAV_ACTIVE", e);
          }, updateSelectLabelActive: function updateSelectLabelActive(t, e) {
            t.commit("UPDATE_SELECT_LABEL_ACTIVE", e);
          } }, getters: { apiClient: function apiClient(t) {
            return t.apiClient;
          }, uiVisible: function uiVisible(t, e) {
            return !e.uploadStarted || !t.config.hideWhenUploading;
          }, route: function route(t) {
            return t.route;
          }, routesHistory: function routesHistory(t) {
            return t.routesHistory;
          }, fromSources: function fromSources(t) {
            return t.config.fromSources;
          }, accept: function accept(t) {
            return t.config.accept;
          }, preferLinkOverStore: function preferLinkOverStore(t) {
            return t.config.preferLinkOverStore;
          }, maxSize: function maxSize(t) {
            return t.config.maxSize;
          }, minFiles: function minFiles(t) {
            return t.config.minFiles;
          }, maxFiles: function maxFiles(t) {
            return t.config.maxFiles;
          }, startUploadingWhenMaxFilesReached: function startUploadingWhenMaxFilesReached(t) {
            return t.config.startUploadingWhenMaxFilesReached;
          }, storeTo: function storeTo(t) {
            return t.config.storeTo;
          }, uploadInBackground: function uploadInBackground(t) {
            return t.config.uploadInBackground;
          }, onFileSelected: function onFileSelected(t) {
            return t.config.onFileSelected;
          }, onFileUploadStarted: function onFileUploadStarted(t) {
            return t.config.onFileUploadStarted;
          }, onFileUploadProgress: function onFileUploadProgress(t) {
            return t.config.onFileUploadProgress;
          }, onFileUploadFinished: function onFileUploadFinished(t) {
            return t.config.onFileUploadFinished;
          }, onFileUploadFailed: function onFileUploadFailed(t) {
            return t.config.onFileUploadFailed;
          }, mobileNavActive: function mobileNavActive(t) {
            return t.mobileNavActive;
          }, selectLabelIsActive: function selectLabelIsActive(t) {
            return t.selectLabelIsActive;
          }, disableTransformer: function disableTransformer(t) {
            return t.config.disableTransformer;
          }, transformOptions: function transformOptions(t) {
            return t.config.transformOptions;
          } } });
    },
        Ds = function Ds(t) {
      return "object" === (void 0 === t ? "undefined" : mi(t)) && null !== t && Array.isArray(t) === !1;
    },
        Ps = function Ps(t) {
      return t % 1 == 0;
    },
        Ms = { fromSources: function fromSources(t) {
        return "string" == typeof t && (t = [t]), t.map(oa);
      }, accept: function accept(t) {
        return "string" == typeof t && (t = [t]), t.forEach(function (t) {
          if ("string" != typeof t) throw new Error('Invalid value for "accept" config option');
        }), t;
      }, preferLinkOverStore: function preferLinkOverStore(t) {
        if ("boolean" != typeof t) throw new Error('Invalid value for "preferLinkOverStore" config option');return t;
      }, maxSize: function maxSize(t) {
        if ("number" != typeof t || !Ps(t) || t < 0) throw new Error('Invalid value for "maxSize" config option');return t;
      }, minFiles: function minFiles(t) {
        if ("number" != typeof t || !Ps(t) || t < 0) throw new Error('Invalid value for "minFiles" config option');return t;
      }, maxFiles: function maxFiles(t) {
        if ("number" != typeof t || !Ps(t) || t < 0) throw new Error('Invalid value for "maxFiles" config option');return t;
      }, startUploadingWhenMaxFilesReached: function startUploadingWhenMaxFilesReached(t) {
        if ("boolean" != typeof t) throw new Error('Invalid value for "startUploadingWhenMaxFilesReached" config option');return t;
      }, loadCss: function loadCss(t) {
        if ("boolean" == typeof t && t === !1 || "string" == typeof t) return t;throw new Error('Invalid value for "loadCss" config option');
      }, lang: function lang(t) {
        if ("boolean" == typeof t && t === !1 || "string" == typeof t) return t;throw new Error('Invalid value for "lang" config option');
      }, storeTo: function storeTo(t) {
        if (Ds(t)) return t;throw new Error('Invalid value for "storeTo" config option');
      }, transformOptions: function transformOptions(t) {
        if (Ds(t)) return t;throw new Error('Invalid value for "transformOptions" config option');
      }, hideWhenUploading: function hideWhenUploading(t) {
        if ("boolean" != typeof t) throw new Error('Invalid value for "hideWhenUploading" config option');return t;
      }, uploadInBackground: function uploadInBackground(t) {
        if ("boolean" != typeof t) throw new Error('Invalid value for "uploadInBackground" config option');return t;
      }, disableTransformer: function disableTransformer(t) {
        if ("boolean" != typeof t) throw new Error('Invalid value for "disableTransformer" config option');return t;
      }, onFileSelected: function onFileSelected(t) {
        if ("function" != typeof t) throw new Error('Invalid value for "onFileSelected" config option');return t;
      }, onFileUploadStarted: function onFileUploadStarted(t) {
        if ("function" != typeof t) throw new Error('Invalid value for "onFileUploadStarted" config option');return t;
      }, onFileUploadProgress: function onFileUploadProgress(t) {
        if ("function" != typeof t) throw new Error('Invalid value for "onFileUploadProgress" config option');return t;
      }, onFileUploadFinished: function onFileUploadFinished(t) {
        if ("function" != typeof t) throw new Error('Invalid value for "onFileUploadFinished" config option');return t;
      }, onFileUploadFailed: function onFileUploadFailed(t) {
        if ("function" != typeof t) throw new Error('Invalid value for "onFileUploadFailed" config option');return t;
      } },
        js = function js(t, e) {
      return void 0 === t.fromSources && (t.fromSources = ["local_file_system", "imagesearch", "facebook", "instagram", "googledrive", "dropbox"]), void 0 === t.preferLinkOverStore && (t.preferLinkOverStore = !1), void 0 === t.minFiles && (t.minFiles = 1), void 0 === t.maxFiles && (t.maxFiles = 1), void 0 === t.startUploadingWhenMaxFilesReached && (t.startUploadingWhenMaxFilesReached = !1), void 0 === t.loadCss && (t.loadCss = e.css.main), void 0 === t.hideWhenUploading && (t.hideWhenUploading = !1), void 0 === t.lang && (t.lang = !1), void 0 === t.uploadInBackground && (t.uploadInBackground = !0), void 0 === t.disableTransformer && (t.disableTransformer = !1), t;
    },
        Hs = function Hs(t) {
      var e = {};if (Object.keys(t).forEach(function (n) {
        var i = Ms[n];if (!i) throw new Error('Unknown config option "' + n + '"');e[n] = i(t[n]);
      }), void 0 !== e.minFiles && void 0 !== e.maxFiles && e.minFiles > e.maxFiles) throw new Error('Config option "minFiles" must be smaller or equal to "maxFiles"');return e;
    },
        zs = function zs(t) {
      var e = {};return "es" === t ? e.es = { My: "Mi", Connect: "Conectar", View: "Ver", "A new page will open to connect your account": "Se abrirá una nueva página para conectar tu cuenta", "My Device": "Mi Dispositivo", "or Drag and Drop, Copy and Paste Files": "O arrastrar y soltar, copiar y pegar archivos", "Pick Your Files": "Elige tus archivos", "Select Files to Upload": "Seleccionar archivos para cargar", "Selected Files": "Archivos seleccionados", "Select Files from": "Seleccione Archivos de", "We only extract images and never modify or delete them": "Sólo extraemos imágenes y nunca las modificamos o eliminamos", "You need to authenticate with": "Debe autenticarse con" } : "pl" === t && (e.pl = { My: "Mój", Connect: "Połączyć", View: "Widok", "A new page will open to connect your account": "Nowa strona otworzy się połączyć swoje konto", "My Device": "Moje urządzenie", "or Drag and Drop, Copy and Paste Files": "lub przeciągnij i upuść, kopiować i wklejać pliki", "Pick Your Files": "Wybierz pliki", "Select Files to Upload": "Wybierz pliki do przesłania", "Selected Files": "Wybrane pliki", "Select Files from": "Wybierz pliki z", "We only extract images and never modify or delete them": "Mamy tylko wyodrębnić obrazy i nigdy zmodyfikować lub usunąć je", "You need to authenticate with": "Musisz uwierzytelnić" }), e;
    },
        Gs = Fr.context("picker"),
        Ws = function Ws(t, e, n) {
      return new Promise(function (i) {
        var o = function o(t) {
          i(t);
        };re.use(kr), re.locales(zs(e.lang));var r = document.createElement("div");document.body.appendChild(r);var a = new re({ el: r, store: Us(t, e, o, n), render: function render(t) {
            return t(Os);
          }, created: function created() {
            this.$translate.setLang(e.lang), document.body.classList.add("fsp-picker-open");
          }, destroyed: function destroyed() {
            a.$el.parentNode.removeChild(a.$el), document.body.classList.remove("fsp-picker-open");
          } });
      });
    },
        Bs = function Bs(t) {
      return t.loadCss === !1 ? Promise.resolve() : Ur.loadCss(t.loadCss);
    };return function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return Gs("Starting picker v0.3.4 with config:", e), e = Hs(js(e, pi)), Bs(e).then(function () {
        return Ws(t, e, n);
      });
    };
  });
});

var api = (function (apikey, security) {
  var moduleOverrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof apikey !== 'string') {
    throw new Error('No apikey specified');
  }

  if (security && !(security.policy && security.signature)) {
    throw new Error('signature and policy are both required for security');
  }

  var client$$1 = moduleOverrides.apiClient || client.init(apikey, security);

  logger$1('Initiated with apikey ' + apikey);

  return {
    getSecurity: function getSecurity() {
      return client$$1.getSecurity();
    },
    setSecurity: function setSecurity(sec) {
      return client$$1.setSecurity(sec);
    },
    pick: function pick(options) {
      return picker(client$$1, options);
    },
    storeURL: function storeURL(url, options) {
      return client$$1.storeURL(url, options);
    },
    transform: function transform(url, options) {
      return client$$1.transform(url, options);
    },
    upload: function upload(file, uploadOptions, storeOptions) {
      return client$$1.upload(file, uploadOptions, storeOptions);
    },
    retrieve: function retrieve(handle, options) {
      return client$$1.retrieve(handle, options);
    },
    remove: function remove(handle) {
      return client$$1.remove(handle);
    },
    metadata: function metadata(handle, options) {
      return client$$1.metadata(handle, options);
    }
  };
});

var init = function init(apikey, security) {
  return api(apikey, security);
};

var filestack = {
  version: '0.3.0',
  init: init
};

export default filestack;
//# sourceMappingURL=filestack.es2015.js.map