webpackJsonp([7],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);
        for (var i=0; i<keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(123),
    isArguments = __webpack_require__(124),
    isArray = __webpack_require__(125);

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorStyle; });
var regionStyle = {
  border: '1px solid red',
  marginTop: 10,
  padding: 10
};

var errorStyle = {
  color: 'red',
  marginTop: 10,
  padding: 10
};

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.createContainer = createContainer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _shallowequal = __webpack_require__(161);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reselect = __webpack_require__(160);

var _utils = __webpack_require__(74);

var _createEmptyContainer = __webpack_require__(150);

function createSelectGetter(s) {
  return function (state) {
    return state[s];
  };
}

function defaultMapStoreProps(store) {
  return {
    getStoreState: store.getState,
    setStoreState: store.setState,
    batchStore: store.batch
  };
}

function createContainer(selector_) {
  var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var _option$pure = option.pure;
  var pure = _option$pure === undefined ? true : _option$pure;
  var _option$mapStoreProps = option.mapStoreProps;
  var mapStoreProps = _option$mapStoreProps === undefined ? defaultMapStoreProps : _option$mapStoreProps;
  var ref = option.ref;
  var _option$storeName = option.storeName;
  var storeName = _option$storeName === undefined ? 'store' : _option$storeName;

  if (!selector_) {
    return (0, _createEmptyContainer.createEmptyContainer)(mapStoreProps, storeName);
  }

  var selector = selector_;

  if (typeof selector === 'object') {
    var selectMap = {};
    for (var s in selector) {
      if (selector.hasOwnProperty(s)) {
        selectMap[s] = createSelectGetter(selector[s]);
      }
    }
    selector = (0, _reselect.createStructuredSelector)(selectMap);
  }

  var shouldUpdateStateProps = selector.length > 1;

  return function create(WrappedComponent) {
    var Container = (function (_Component) {
      _inherits(Container, _Component);

      function Container(props, context) {
        _classCallCheck(this, Container);

        _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).call(this, props, context);
        this.onChange = this.onChange.bind(this);
        this.state = {
          appState: this.getAppState() || {}
        };
      }

      // use componentWillMount instead of componentDidMount to support setState inside WrappedComponent's componentDidMount and componentWillMount

      _createClass(Container, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          if (!this.unsubscribe) {
            this.unsubscribe = this.context[storeName].subscribe(this.onChange);
          }
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var appState = undefined;
          if (pure) {
            var propsChanged = false;
            if (shouldUpdateStateProps) {
              propsChanged = !(0, _shallowequal2['default'])(nextProps, this.props);
            }
            if (propsChanged) {
              appState = this.getAppState(nextProps);
            }
          } else if (shouldUpdateStateProps) {
            appState = this.getAppState(nextProps);
          }
          if (appState) {
            this.setState({
              appState: appState
            });
          }
        }
      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (pure) {
            var propsChanged = !(0, _shallowequal2['default'])(nextProps, this.props);
            if (propsChanged) {
              return true;
            }
            return !(0, _shallowequal2['default'])(nextState.appState, this.state.appState);
          }
          return true;
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        }
      }, {
        key: 'onChange',
        value: function onChange() {
          this.setState({
            appState: this.getAppState()
          });
        }
      }, {
        key: 'getAppState',
        value: function getAppState() {
          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

          var store = this.context[storeName];
          var state = store.getState();
          return shouldUpdateStateProps ? selector(state, props) : selector(state);
        }
      }, {
        key: 'render',
        value: function render() {
          var appState = this.state.appState;

          var store = this.context[storeName];
          return _react2['default'].createElement(WrappedComponent, _extends({}, appState, mapStoreProps(store), this.props, {
            ref: ref }));
        }
      }]);

      return Container;
    })(_react.Component);

    return (0, _utils.argumentContainer)(Container, WrappedComponent, storeName);
  };
}

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.createEmptyContainer = createEmptyContainer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(74);

function createEmptyContainer(mapStoreProps, storeName) {
  return function create(WrappedComponent) {
    var Container = (function (_Component) {
      _inherits(Container, _Component);

      function Container() {
        _classCallCheck(this, Container);

        _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).apply(this, arguments);
      }

      _createClass(Container, [{
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(WrappedComponent, _extends({}, mapStoreProps(this.context[storeName]), this.props, {
            ref: 'wrappedInstance' }));
        }
      }]);

      return Container;
    })(_react.Component);

    return (0, _utils.argumentContainer)(Container, WrappedComponent, storeName);
  };
}

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.createRootContainer = createRootContainer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Store = __webpack_require__(72);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(73);

function createRootContainerWrapper(WrappedComponent, store, storeName) {
  var RootContainer = (function (_Component) {
    _inherits(RootContainer, _Component);

    function RootContainer() {
      _classCallCheck(this, RootContainer);

      _get(Object.getPrototypeOf(RootContainer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(RootContainer, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return _defineProperty({}, storeName, store);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(WrappedComponent, this.props);
      }
    }]);

    return RootContainer;
  })(_react.Component);

  RootContainer.childContextTypes = _defineProperty({}, storeName, _constants.storeShape);
  return RootContainer;
}

function createRootContainer() {
  var initialStore = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var store = typeof initialStore.getState === 'function' ? initialStore : new _Store.Store(initialStore);
  var _option$storeName = option.storeName;
  var storeName = _option$storeName === undefined ? 'store' : _option$storeName;

  return function (WrappedComponent) {
    return createRootContainerWrapper(WrappedComponent, store, storeName);
  };
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createContainer = __webpack_require__(149);

var _createRootContainer = __webpack_require__(151);

var _Store = __webpack_require__(72);

exports.createContainer = _createContainer.createContainer;
exports.createRootContainer = _createRootContainer.createRootContainer;
exports.Store = _Store.Store;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["a"]; });
// export this package's api



/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createSelector = createSelector;
exports.createStructuredSelector = createStructuredSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function defaultEqualityCheck(a, b) {
  return a === b;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs !== null && lastArgs.length === args.length && args.every(function (value, index) {
      return equalityCheck(value, lastArgs[index]);
    })) {
      return lastResult;
    }
    lastArgs = args;
    lastResult = func.apply(undefined, args);
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    memoizeOptions[_key2 - 1] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      funcs[_key3] = arguments[_key3];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      return resultFunc.apply(undefined, arguments);
    }].concat(memoizeOptions));

    var selector = function selector(state, props) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var params = dependencies.map(function (dependency) {
        return dependency.apply(undefined, [state, props].concat(args));
      });
      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
    };

    selector.recomputations = function () {
      return recomputations;
    };
    return selector;
  };
}

function createSelector() {
  return createSelectorCreator(defaultMemoize).apply(undefined, arguments);
}

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      values[_key5] = arguments[_key5];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fetchKeys = __webpack_require__(126);

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
        return !!ret;
    }

    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = fetchKeys(objA);
    var keysB = fetchKeys(objB);

    var len = keysA.length;
    if (len !== keysB.length) {
        return false;
    }

    compareContext = compareContext || null;

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < len; i++) {
        var key = keysA[i];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];

        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (_ret === false || _ret === void 0 && valueA !== valueB) {
            return false;
        }
    }

    return true;
};

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createForm__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createForm__["a"]; });
// export this package's api



/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSwitch = __webpack_require__(279);

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Switch = function (_React$Component) {
    (0, _inherits3['default'])(Switch, _React$Component);

    function Switch() {
        (0, _classCallCheck3['default'])(this, Switch);
        return (0, _possibleConstructorReturn3['default'])(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Switch, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classes = (0, _classnames2['default'])(className, (0, _defineProperty3['default'])({}, prefixCls + '-small', size === 'small'));
            return _react2['default'].createElement(_rcSwitch2['default'], (0, _extends3['default'])({}, this.props, { className: classes }));
        }
    }]);
    return Switch;
}(_react2['default'].Component);

exports['default'] = Switch;

Switch.defaultProps = {
    prefixCls: 'ant-switch'
};
Switch.propTypes = {
    prefixCls: _propTypes2['default'].string,
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    className: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);









var classNames = __webpack_require__(9);

function noop() {}

var Switch = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Switch, _Component);

  function Switch(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Switch);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _initialiseProps.call(_this);

    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    _this.state = { checked: checked };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Switch, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      if (this.props.disabled) {
        return;
      }
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }
      this.props.onChange(checked);
    }

    // Handle auto focus when click switch in Chrome

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          className = _props.className,
          prefixCls = _props.prefixCls,
          disabled = _props.disabled,
          checkedChildren = _props.checkedChildren,
          tabIndex = _props.tabIndex,
          unCheckedChildren = _props.unCheckedChildren,
          restProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'prefixCls', 'disabled', 'checkedChildren', 'tabIndex', 'unCheckedChildren']);

      var checked = this.state.checked;
      var switchTabIndex = disabled ? -1 : tabIndex || 0;
      var switchClassName = classNames((_classNames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, className, !!className), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls, true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-checked', checked), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'span',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, restProps, {
          className: switchClassName,
          tabIndex: switchTabIndex,
          ref: 'node',
          onKeyDown: this.handleKeyDown,
          onClick: this.toggle,
          onMouseUp: this.handleMouseUp
        }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'span',
          { className: prefixCls + '-inner' },
          checked ? checkedChildren : unCheckedChildren
        )
      );
    }
  }]);

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toggle = function () {
    var onClick = _this2.props.onClick;

    var checked = !_this2.state.checked;
    _this2.setChecked(checked);
    onClick(checked);
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === 37) {
      // Left
      _this2.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      _this2.setChecked(true);
    } else if (e.keyCode === 32 || e.keyCode === 13) {
      // Space, Enter
      _this2.toggle();
    }
  };

  this.handleMouseUp = function (e) {
    if (_this2.refs.node) {
      _this2.refs.node.blur();
    }
    if (_this2.props.onMouseUp) {
      _this2.props.onMouseUp(e);
    }
  };
};

Switch.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  disabled: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  checkedChildren: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  unCheckedChildren: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  onChange: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onMouseUp: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  tabIndex: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number,
  checked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  defaultChecked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
};

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
  onChange: noop,
  onClick: noop
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(278);

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_form__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_data_binding__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_data_binding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_data_binding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_switch__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_antd_lib_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_dist_antd_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_antd_dist_antd_css__);





/* eslint react/no-multi-comp:0, no-console:0 */










var createFormContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_data_binding__["createContainer"])(function (state) {
  return {
    on: ((state.formState || {}).on || {}).value || false
  };
});

var TopForm = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(TopForm, _React$Component);

  function TopForm() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, TopForm);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (TopForm.__proto__ || Object.getPrototypeOf(TopForm)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(TopForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          on = _props.on;
      var getFieldProps = form.getFieldProps;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_10__styles__["a" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          'has email? '
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_antd_lib_switch___default.a, getFieldProps('on', {
            initialValue: on,
            valuePropName: 'checked'
          }))
        )
      );
    }
  }]);

  return TopForm;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

TopForm.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  on: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool
};


TopForm = createFormContainer(TopForm);

var BottomForm = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BottomForm, _React$Component2);

  function BottomForm() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BottomForm);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BottomForm.__proto__ || Object.getPrototypeOf(BottomForm)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BottomForm, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          form = _props2.form,
          on = _props2.on;

      var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_10__styles__["a" /* regionStyle */], {
        display: on ? 'block' : 'none'
      });
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { style: style },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          'email: '
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', form.getFieldProps('email', {
            rules: [{
              type: 'email'
            }],
            hidden: !on
          }))
        )
      );
    }
  }]);

  return BottomForm;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

BottomForm.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  on: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool
};


BottomForm = createFormContainer(BottomForm);

var Form = function (_React$Component3) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Form, _React$Component3);

  function Form() {
    var _ref;

    var _temp, _this3, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this3), _this3.onSubmit = function (e) {
      e.preventDefault();
      console.log(_this3.props.form.getFieldsValue());
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this3, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'render',
    value: function render() {
      var form = this.props.form;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(TopForm, { form: form }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(BottomForm, { form: form }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_10__styles__["a" /* regionStyle */] },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'button',
            { onClick: this.onSubmit },
            'submit'
          )
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object
};


Form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rc_form__["a" /* createForm */])({
  mapPropsToFields: function mapPropsToFields(props) {
    console.log('mapPropsToFields', props);
    return props.formState;
  },
  onFieldsChange: function onFieldsChange(props, fields) {
    console.log('onFieldsChange', fields);
    props.setStoreState({
      formState: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.formState, fields)
    });
  }
})(Form);

Form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_data_binding__["createContainer"])(function (state) {
  return {
    formState: state.formState
  };
})(Form);

var App = function (_React$Component4) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _React$Component4);

  function App() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'h2',
          null,
          'integrate with react-data-binding'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Form, null)
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var NewApp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_data_binding__["createRootContainer"])({
  formState: {
    on: { value: true }
  }
})(App);

__WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(NewApp, null), document.getElementById('__react-content'));

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var Store = (function () {
  function Store(initialData) {
    _classCallCheck(this, Store);

    this.state = initialData;
    this.batching = false;
    this.listeners = [];
    this.fireChange = this.fireChange.bind(this);
    this.batch = this.batch.bind(this);
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
  }

  _createClass(Store, [{
    key: 'setState',
    value: function setState(state) {
      this.state = _extends({}, this.state, state);
      if (!this.batching) {
        this.batchFireChange();
      }
    }
  }, {
    key: 'batch',
    value: function batch(callback) {
      var _this = this;

      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (_this.batching) {
          callback.apply(null, args);
          return;
        }
        _this.batching = true;
        var originalState = _this.state;
        callback.apply(null, args);
        _this.batching = false;
        if (originalState !== _this.state) {
          _this.batchFireChange();
        }
      };
    }
  }, {
    key: 'batchFireChange',
    value: function batchFireChange() {
      // TODO debounce ?
      _reactDom2['default'].unstable_batchedUpdates(this.fireChange);
    }
  }, {
    key: 'fireChange',
    value: function fireChange() {
      this.listeners.slice().forEach(function (listener) {
        return listener();
      });
    }
  }, {
    key: 'subscribe',
    value: function subscribe(listener) {
      var listeners = this.listeners;
      listeners.push(listener);
      var isSubscribed = true;

      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        isSubscribed = false;
        var index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.state;
    }
  }]);

  return Store;
})();

exports.Store = Store;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = __webpack_require__(0);

var storeShape = _react.PropTypes.object.isRequired;
exports.storeShape = storeShape;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.argumentContainer = argumentContainer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _hoistNonReactStatics = __webpack_require__(122);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _constants = __webpack_require__(73);

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function argumentContainer(Container, WrappedComponent, storeName) {
  Container.displayName = 'Container(' + getDisplayName(WrappedComponent) + ')';
  Container.WrappedComponent = WrappedComponent;
  Container.contextTypes = _defineProperty({}, storeName, _constants.storeShape);

  return (0, _hoistNonReactStatics2['default'])(Container, WrappedComponent);
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })

},[658]);
//# sourceMappingURL=data-binding-form.js.map