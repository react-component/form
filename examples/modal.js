webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(269);


/***/ },

/***/ 244:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regionStyle = exports.regionStyle = {
	  border: '1px solid red',
	  marginTop: 10,
	  padding: 10
	};
	
	var errorStyle = exports.errorStyle = {
	  color: 'red',
	  marginTop: 10,
	  padding: 10
	};

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fetchKeys = __webpack_require__(250);
	
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

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(251),
	    isArguments = __webpack_require__(252),
	    isArray = __webpack_require__(253);
	
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


/***/ },

/***/ 251:
/***/ function(module, exports) {

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


/***/ },

/***/ 252:
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
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
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
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
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
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
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
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
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
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


/***/ },

/***/ 253:
/***/ function(module, exports) {

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


/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

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
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 265:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createDOMForm = __webpack_require__(270);
	
	var _createDOMForm2 = _interopRequireDefault(_createDOMForm);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _modal = __webpack_require__(274);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	__webpack_require__(265);
	
	var _styles = __webpack_require__(244);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-multi-comp:0, no-console:0 */
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    _classCallCheck(this, Form);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this));
	
	    _this.onSubmit = function (e) {
	      e.preventDefault();
	      _this.props.form.validateFieldsAndScroll(function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    };
	
	    _this.onCancel = function () {
	      _this.setState({
	        visible: false
	      });
	    };
	
	    _this.open = function () {
	      _this.setState({
	        visible: true
	      });
	    };
	
	    _this.state = {
	      visible: false
	    };
	    return _this;
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var _props$form = this.props.form;
	      var getFieldProps = _props$form.getFieldProps;
	      var getFieldError = _props$form.getFieldError;
	
	      return _react2["default"].createElement(
	        'div',
	        { style: { margin: 20 } },
	        _react2["default"].createElement(
	          'h2',
	          null,
	          'modal'
	        ),
	        _react2["default"].createElement(
	          _modal2["default"],
	          {
	            visible: this.state.visible,
	            bodyStyle: {
	              height: 200,
	              overflow: 'auto'
	            },
	            onCancel: this.onCancel,
	            title: 'modal'
	          },
	          _react2["default"].createElement(
	            'div',
	            { ref: 'dialogContent' },
	            _react2["default"].createElement(
	              'form',
	              { onSubmit: this.onSubmit },
	              _react2["default"].createElement('input', getFieldProps('required', {
	                rules: [{
	                  required: true,
	                  message: '必填'
	                }]
	              })),
	              _react2["default"].createElement(
	                'p',
	                { style: _styles.errorStyle },
	                getFieldError('required') ? getFieldError('required').join(',') : _react2["default"].createElement(
	                  'b',
	                  { style: { visibility: 'hidden' } },
	                  '1'
	                )
	              ),
	              _react2["default"].createElement(
	                'div',
	                { style: { marginTop: 300 } },
	                _react2["default"].createElement(
	                  'button',
	                  null,
	                  'submit'
	                )
	              )
	            )
	          )
	        ),
	        _react2["default"].createElement(
	          'div',
	          { style: _styles.regionStyle },
	          _react2["default"].createElement(
	            'button',
	            { onClick: this.open },
	            'open'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Form;
	}(_react.Component);
	
	Form.propTypes = {
	  form: _react.PropTypes.object
	};
	
	
	var NewForm = (0, _createDOMForm2["default"])()(Form);
	
	_reactDom2["default"].render(_react2["default"].createElement(NewForm, null), document.getElementById('__react-content'));

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createBaseForm = __webpack_require__(163);
	
	var _createBaseForm2 = _interopRequireDefault(_createBaseForm);
	
	var _createForm = __webpack_require__(162);
	
	var _utils = __webpack_require__(164);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domScrollIntoView = __webpack_require__(271);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function computedStyle(el, prop) {
	  var getComputedStyle = window.getComputedStyle;
	  var style =
	  // If we have getComputedStyle
	  getComputedStyle ?
	  // Query it
	  // TODO: From CSS-Query notes, we might need (node, null) for FF
	  getComputedStyle(el) :
	
	  // Otherwise, we are in IE and use currentStyle
	  el.currentStyle;
	  if (style) {
	    return style[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })];
	  }
	  return undefined;
	}
	
	function getScrollableContainer(n) {
	  var node = n;
	  var nodeName = void 0;
	  /* eslint no-cond-assign:0 */
	  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
	    var overflowY = computedStyle(node, 'overflowY');
	    if (overflowY === 'auto' || overflowY === 'scroll') {
	      return node;
	    }
	    node = node.parentNode;
	  }
	  return nodeName === 'body' ? node.ownerDocument : node;
	}
	
	var mixin = {
	  getForm: function getForm() {
	    return _extends({}, _createForm.mixin.getForm.call(this), {
	      validateFieldsAndScroll: this.validateFieldsAndScroll
	    });
	  },
	  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
	    var _this = this;
	
	    var _getParams = (0, _utils.getParams)(ns, opt, cb);
	
	    var names = _getParams.names;
	    var callback = _getParams.callback;
	    var options = _getParams.options;
	
	
	    var newCb = function newCb(error, values) {
	      if (error) {
	        var firstNode = void 0;
	        var firstTop = void 0;
	        for (var name in error) {
	          if (error.hasOwnProperty(name)) {
	            var instance = _this.getFieldInstance(name);
	            if (instance) {
	              var node = _reactDom2["default"].findDOMNode(instance);
	              var top = node.getBoundingClientRect().top;
	              if (firstTop === undefined || firstTop > top) {
	                firstTop = top;
	                firstNode = node;
	              }
	            }
	          }
	        }
	        if (firstNode) {
	          var c = options.container || getScrollableContainer(firstNode);
	          (0, _domScrollIntoView2["default"])(firstNode, c, _extends({
	            onlyScrollIfNeeded: true
	          }, options.scroll));
	        }
	      }
	
	      if (typeof callback === 'function') {
	        callback(error, values);
	      }
	    };
	
	    return this.validateFields(names, options, newCb);
	  }
	};
	
	function createDOMForm(option) {
	  return (0, _createBaseForm2["default"])(_extends({}, option), [mixin]);
	}
	
	exports["default"] = createDOMForm;
	module.exports = exports['default'];

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(272);

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(273);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;

/***/ },

/***/ 273:
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;
	
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(275);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _confirm = __webpack_require__(318);
	
	var _confirm2 = _interopRequireDefault(_confirm);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Modal2.default.info = function (props) {
	  var config = (0, _objectAssign2.default)({}, props, {
	    iconClassName: 'info-circle',
	    okCancel: false
	  });
	  return (0, _confirm2.default)(config);
	};
	
	_Modal2.default.success = function (props) {
	  var config = (0, _objectAssign2.default)({}, props, {
	    iconClassName: 'check-circle',
	    okCancel: false
	  });
	  return (0, _confirm2.default)(config);
	};
	
	_Modal2.default.error = function (props) {
	  var config = (0, _objectAssign2.default)({}, props, {
	    iconClassName: 'exclamation-circle',
	    okCancel: false
	  });
	  return (0, _confirm2.default)(config);
	};
	
	_Modal2.default.confirm = function (props) {
	  var config = (0, _objectAssign2.default)({}, props, {
	    okCancel: true
	  });
	  return (0, _confirm2.default)(config);
	};
	
	exports.default = _Modal2.default;
	module.exports = exports['default'];

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcDialog = __webpack_require__(276);
	
	var _rcDialog2 = _interopRequireDefault(_rcDialog);
	
	var _rcUtil = __webpack_require__(289);
	
	var _button = __webpack_require__(315);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function noop() {}
	
	var mousePosition = void 0;
	var mousePositionEventBinded = void 0;
	
	var AntModal = _react2.default.createClass({
	  displayName: 'AntModal',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'ant-modal',
	      onOk: noop,
	      onCancel: noop,
	      okText: '确定',
	      cancelText: '取消',
	      width: 520,
	      transitionName: 'zoom',
	      maskAnimation: 'fade',
	      confirmLoading: false,
	      visible: false
	    };
	  },
	
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    onOk: _react.PropTypes.func,
	    onCancel: _react.PropTypes.func,
	    okText: _react.PropTypes.node,
	    cancelText: _react.PropTypes.node,
	    width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    confirmLoading: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    align: _react.PropTypes.object,
	    footer: _react.PropTypes.node,
	    title: _react.PropTypes.node,
	    closable: _react.PropTypes.bool
	  },
	
	  handleCancel: function handleCancel(e) {
	    this.props.onCancel(e);
	  },
	  handleOk: function handleOk() {
	    this.props.onOk();
	  },
	  componentDidMount: function componentDidMount() {
	    if (mousePositionEventBinded) {
	      return;
	    }
	    // 只有点击事件支持从鼠标位置动画展开
	    _rcUtil.Dom.addEventListener(document.documentElement, 'click', function (e) {
	      mousePosition = {
	        x: e.pageX,
	        y: e.pageY
	      };
	      // 20ms 内发生过点击事件，则从点击位置动画展示
	      // 否则直接 zoom 展示
	      // 这样可以兼容非点击方式展开
	      setTimeout(function () {
	        return mousePosition = null;
	      }, 20);
	    });
	    mousePositionEventBinded = true;
	  },
	  render: function render() {
	    var props = this.props;
	    var defaultFooter = [_react2.default.createElement(
	      _button2.default,
	      { key: 'cancel',
	        type: 'ghost',
	        size: 'large',
	        onClick: this.handleCancel },
	      props.cancelText
	    ), _react2.default.createElement(
	      _button2.default,
	      { key: 'confirm',
	        type: 'primary',
	        size: 'large',
	        loading: props.confirmLoading,
	        onClick: this.handleOk },
	      props.okText
	    )];
	    var footer = props.footer || defaultFooter;
	    return _react2.default.createElement(_rcDialog2.default, _extends({ onClose: this.handleCancel, footer: footer }, props, {
	      visible: props.visible, mousePosition: mousePosition }));
	  }
	});
	
	exports.default = AntModal;
	module.exports = exports['default'];

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(277);

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Dialog = __webpack_require__(278);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function noop() {}
	
	function copy(obj, fields) {
	  var ret = {};
	  fields.forEach(function (f) {
	    if (obj[f] !== undefined) {
	      ret[f] = obj[f];
	    }
	  });
	  return ret;
	}
	
	var DialogWrap = (function (_React$Component) {
	  _inherits(DialogWrap, _React$Component);
	
	  function DialogWrap(props) {
	    var _this = this;
	
	    _classCallCheck(this, DialogWrap);
	
	    _get(Object.getPrototypeOf(DialogWrap.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      visible: props.visible
	    };
	    ['onClose', 'cleanDialogContainer'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(DialogWrap, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.componentDidUpdate();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if ('visible' in props) {
	        this.setState({
	          visible: props.visible
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !!(this.state.visible || nextState.visible);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.dialogRendered) {
	        this.dialogInstance = _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getDialogElement(), this.getDialogContainer());
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.dialogContainer) {
	        if (this.state.visible) {
	          _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getDialogElement({
	            onAfterClose: this.cleanDialogContainer,
	            onClose: noop,
	            visible: false
	          }), this.dialogContainer);
	        } else {
	          this.cleanDialogContainer();
	        }
	      }
	    }
	  }, {
	    key: 'onClose',
	    value: function onClose(e) {
	      this.props.onClose(e);
	    }
	  }, {
	    key: 'getDialogContainer',
	    value: function getDialogContainer() {
	      if (!this.dialogContainer) {
	        this.dialogContainer = document.createElement('div');
	        this.dialogContainer.className = this.props.prefixCls + '-container';
	        document.body.appendChild(this.dialogContainer);
	      }
	      return this.dialogContainer;
	    }
	  }, {
	    key: 'getDialogElement',
	    value: function getDialogElement(extra) {
	      var props = this.props;
	      var dialogProps = copy(props, ['className', 'closable', 'maskClosable', 'align', 'title', 'footer', 'mask', 'animation', 'transitionName', 'maskAnimation', 'maskTransitionName', 'mousePosition', 'prefixCls', 'style', 'width', 'height', 'zIndex', 'bodyStyle']);
	      dialogProps = _extends({}, dialogProps, {
	        onClose: this.onClose,
	        visible: this.state.visible
	      }, extra);
	      return _react2['default'].createElement(
	        _Dialog2['default'],
	        _extends({}, dialogProps, { key: 'dialog' }),
	        props.children
	      );
	    }
	  }, {
	    key: 'getElement',
	    value: function getElement(part) {
	      return this.dialogInstance.getElement(part);
	    }
	  }, {
	    key: 'cleanDialogContainer',
	    value: function cleanDialogContainer() {
	      _reactDom2['default'].unmountComponentAtNode(this.getDialogContainer());
	      document.body.removeChild(this.dialogContainer);
	      this.dialogContainer = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.dialogRendered = this.dialogRendered || this.state.visible;
	      return null;
	    }
	  }]);
	
	  return DialogWrap;
	})(_react2['default'].Component);
	
	DialogWrap.defaultProps = {
	  className: '',
	  align: {
	    points: ['tc', 'tc'],
	    offset: [0, 100]
	  },
	  mask: true,
	  closable: true,
	  maskClosable: true,
	  prefixCls: 'rc-dialog',
	  onClose: noop
	};
	
	DialogWrap.propTypes = {
	  className: _react2['default'].PropTypes.string,
	  align: _react2['default'].PropTypes.shape({
	    align: _react2['default'].PropTypes.array,
	    offset: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number)
	  }),
	  mask: _react2['default'].PropTypes.bool,
	  closable: _react2['default'].PropTypes.bool,
	  maskClosable: _react2['default'].PropTypes.bool,
	  prefixCls: _react2['default'].PropTypes.string,
	  visible: _react2['default'].PropTypes.bool,
	  onClose: _react2['default'].PropTypes.func
	};
	
	exports['default'] = DialogWrap;
	module.exports = exports['default'];

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAlign = __webpack_require__(279);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcUtilLibKeyCode = __webpack_require__(294);
	
	var _rcUtilLibKeyCode2 = _interopRequireDefault(_rcUtilLibKeyCode);
	
	var _rcAnimate = __webpack_require__(306);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _DOMWrap = __webpack_require__(314);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function noop() {}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function setTransformOrigin(node, value) {
	  var style = node.style;
	  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	    style[prefix + 'TransformOrigin'] = value;
	  });
	  style['transformOrigin'] = value;
	}
	
	function offset(el) {
	  var rect = el.getBoundingClientRect();
	  var pos = {
	    left: rect.left,
	    top: rect.top
	  };
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScroll(w);
	  pos.top += getScroll(w, 1);
	  return pos;
	}
	
	var Dialog = _react2['default'].createClass({
	  displayName: 'Dialog',
	
	  propTypes: {
	    onAfterClose: _react.PropTypes.func,
	    onClose: _react.PropTypes.func,
	    closable: _react.PropTypes.bool,
	    maskClosable: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    mousePosition: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onAfterClose: noop,
	      onClose: noop
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({});
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (props.visible) {
	      // first show
	      if (!prevProps.visible) {
	        this.lastOutSideFocusNode = document.activeElement;
	        _reactDom2['default'].findDOMNode(this.refs.dialog).focus();
	      }
	    } else if (prevProps.visible) {
	      if (props.mask && this.lastOutSideFocusNode) {
	        try {
	          this.lastOutSideFocusNode.focus();
	        } catch (e) {
	          this.lastOutSideFocusNode = null;
	        }
	        this.lastOutSideFocusNode = null;
	      }
	    }
	  },
	
	  onAnimateLeave: function onAnimateLeave() {
	    this.props.onAfterClose();
	  },
	
	  onMaskClick: function onMaskClick(e) {
	    if (this.props.closable && this.props.maskClosable) {
	      this.close(e);
	    }
	    _reactDom2['default'].findDOMNode(this.refs.dialog).focus();
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    var props = this.props;
	    if (props.closable) {
	      if (e.keyCode === _rcUtilLibKeyCode2['default'].ESC) {
	        this.close(e);
	      }
	    }
	    // keep focus inside dialog
	    if (props.visible) {
	      if (e.keyCode === _rcUtilLibKeyCode2['default'].TAB) {
	        var activeElement = document.activeElement;
	        var dialogRoot = _reactDom2['default'].findDOMNode(this.refs.dialog);
	        var sentinel = this.refs.sentinel;
	        if (e.shiftKey) {
	          if (activeElement === dialogRoot) {
	            sentinel.focus();
	          }
	        } else if (activeElement === this.refs.sentinel) {
	          dialogRoot.focus();
	        }
	      }
	    }
	  },
	
	  onAlign: function onAlign(dialogNode) {
	    var mousePosition = this.props.mousePosition;
	    if (this.props.visible) {
	      if (mousePosition) {
	        var elOffset = offset(dialogNode);
	        setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	      } else {
	        setTransformOrigin(dialogNode, '');
	      }
	    }
	  },
	
	  getDialogElement: function getDialogElement() {
	    var props = this.props;
	    var closable = props.closable;
	    var prefixCls = props.prefixCls;
	    var dest = {};
	    if (props.width !== undefined) {
	      dest.width = props.width;
	    }
	    if (props.height !== undefined) {
	      dest.height = props.height;
	    }
	    if (props.zIndex !== undefined) {
	      dest.zIndex = props.zIndex;
	    }
	
	    var footer = undefined;
	    if (props.footer) {
	      footer = _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-footer', ref: 'footer' },
	        props.footer
	      );
	    }
	
	    var header = undefined;
	    if (props.title) {
	      header = _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-header', ref: 'header' },
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-title' },
	          props.title
	        )
	      );
	    }
	
	    var closer = undefined;
	    if (closable) {
	      closer = _react2['default'].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: prefixCls + '-close' },
	        _react2['default'].createElement('span', { className: prefixCls + '-close-x' })
	      );
	    }
	
	    var style = _extends({}, props.style, dest);
	    var dialogProps = {
	      className: [props.prefixCls, props.className].join(' '),
	      tabIndex: '0',
	      role: 'dialog',
	      ref: 'dialog',
	      style: style,
	      onKeyDown: this.onKeyDown
	    };
	    var transitionName = this.getTransitionName();
	    var dialogElement = _react2['default'].createElement(
	      _DOMWrap2['default'],
	      _extends({}, dialogProps, {
	        hiddenClassName: prefixCls + '-hidden' }),
	      _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-content' },
	        closer,
	        header,
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-body', style: props.bodyStyle, ref: 'body' },
	          props.children
	        ),
	        footer
	      ),
	      _react2['default'].createElement(
	        'div',
	        { tabIndex: '0', ref: 'sentinel', style: { width: 0, height: 0, overflow: 'hidden' } },
	        'sentinel'
	      )
	    );
	    // add key for align to keep animate children stable
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      { key: 'dialog',
	        showProp: 'dialogVisible',
	        onLeave: this.onAnimateLeave,
	        transitionName: transitionName,
	        component: '',
	        transitionAppear: true },
	      _react2['default'].createElement(
	        _rcAlign2['default'],
	        { align: props.align,
	          key: 'dialog',
	          onAlign: this.onAlign,
	          dialogVisible: props.visible,
	          childrenProps: {
	            visible: 'dialogVisible'
	          },
	          monitorBufferTime: 80,
	          monitorWindowResize: true,
	          disabled: !props.visible },
	        dialogElement
	      )
	    );
	  },
	
	  getMaskElement: function getMaskElement() {
	    var props = this.props;
	    var maskProps = {
	      onClick: this.onMaskClick
	    };
	
	    if (props.zIndex) {
	      maskProps.style = { zIndex: props.zIndex };
	    }
	    var maskElement = undefined;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2['default'].createElement(_DOMWrap2['default'], _extends({}, maskProps, { key: 'mask',
	        className: props.prefixCls + '-mask',
	        visible: props.visible,
	        hiddenClassName: props.prefixCls + '-mask-hidden' }));
	      if (maskTransition) {
	        maskElement = _react2['default'].createElement(
	          _rcAnimate2['default'],
	          { key: 'mask', showProp: 'visible',
	            transitionAppear: true, component: '',
	            transitionName: maskTransition },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  },
	
	  getMaskTransitionName: function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var animation = props.animation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	
	  getElement: function getElement(part) {
	    return this.refs[part];
	  },
	
	  close: function close(e) {
	    this.props.onClose(e);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var className = _defineProperty({}, prefixCls + '-wrap', 1);
	
	    return _react2['default'].createElement(
	      'div',
	      { className: (0, _classnames2['default'])(className), ref: 'root' },
	      [this.getMaskElement(), this.getDialogElement()]
	    );
	  }
	});
	
	exports['default'] = Dialog;
	module.exports = exports['default'];

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Align = __webpack_require__(280);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	exports['default'] = _Align2['default'];
	module.exports = exports['default'];

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(281);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _rcUtil = __webpack_require__(289);
	
	var _isWindow = __webpack_require__(305);
	
	var _isWindow2 = _interopRequireDefault(_isWindow);
	
	function buffer(fn, ms) {
	  var timer = undefined;
	  return function bufferFn() {
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(fn, ms);
	  };
	}
	
	var Align = _react2['default'].createClass({
	  displayName: 'Align',
	
	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},
	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    if (!props.disabled) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	      if (props.monitorWindowResize) {
	        this.startMonitorWindowResize();
	      }
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	    var currentTarget = undefined;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	        currentTarget = props.target();
	      } else {
	        var lastTarget = prevProps.target();
	        currentTarget = props.target();
	        if ((0, _isWindow2['default'])(lastTarget) && (0, _isWindow2['default'])(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	
	  onWindowResize: function onWindowResize() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	    }
	  },
	
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.resizeHandler = _rcUtil.Dom.addEventListener(window, 'resize', buffer(this.onWindowResize, this.props.monitorBufferTime));
	    }
	  },
	
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var childrenProps = _props.childrenProps;
	    var children = _props.children;
	
	    var child = _react2['default'].Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2['default'].cloneElement(child, newProps);
	    }
	    return child;
	  }
	});
	
	exports['default'] = Align;
	module.exports = exports['default'];

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(282);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(283);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(284);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(285);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(286);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(287);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = undefined;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	        targetOffset = flipOffset(targetOffset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	        targetOffset = flipOffset(targetOffset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', source.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', source.height() + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = _getOffsetParent2['default'];
	
	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = domAlign;
	
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	module.exports = exports['default'];

/***/ },

/***/ 282:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = undefined;
	
	function css(el, name, v) {
	  var value = v;
	  if (typeof name === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var ret = {};
	  var key = undefined;
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      if (dir === key) {
	        ret[dir] = preset + offset[key] - old[key];
	      } else {
	        ret[dir] = preset + old[key] - offset[key];
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var val = undefined;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = undefined;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(282);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = undefined;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(282);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(283);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var scrollX = undefined;
	  var scrollY = undefined;
	  var winSize = undefined;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = _utils2['default'].getWindowScrollLeft(win);
	  scrollY = _utils2['default'].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2['default'].viewportWidth(win),
	    height: _utils2['default'].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(282);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(282);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function getRegion(node) {
	  var offset = undefined;
	  var w = undefined;
	  var h = undefined;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getAlignOffset = __webpack_require__(288);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = undefined;
	  var diff = undefined;
	  var p1 = undefined;
	  var p2 = undefined;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ },

/***/ 288:
/***/ function(module, exports) {

	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = undefined;
	  var y = undefined;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  guid: __webpack_require__(290),
	  classSet: __webpack_require__(291),
	  joinClasses: __webpack_require__(293),
	  KeyCode: __webpack_require__(294),
	  PureRenderMixin: __webpack_require__(295),
	  shallowEqual: __webpack_require__(249),
	  createChainedFunction: __webpack_require__(296),
	  Dom: {
	    addEventListener: __webpack_require__(297),
	    contains: __webpack_require__(302)
	  },
	  Children: {
	    toArray: __webpack_require__(303),
	    mapSelf: __webpack_require__(304)
	  }
	};

/***/ },

/***/ 290:
/***/ function(module, exports) {

	'use strict';
	
	var seed = 0;
	module.exports = function guid() {
	  return Date.now() + '_' + seed++;
	};

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(292);
	var classNames = __webpack_require__(264);
	
	module.exports = deprecate(classNames, '`rcUtil.classSet()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },

/***/ 292:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */
	
	module.exports = deprecate;
	
	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */
	
	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	}
	
	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */
	
	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(292);
	var classNames = __webpack_require__(264);
	
	module.exports = deprecate(classNames, '`rcUtil.joinClasses()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },

/***/ 294:
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shallowEqual = __webpack_require__(249);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   const ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },

/***/ 296:
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	"use strict";
	
	function createChainedFunction() {
	  var args = arguments;
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListenerWrap;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _addDomEventListener = __webpack_require__(298);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
	    _reactDom2['default'].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2['default'])(target, eventType, callback);
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventObject = __webpack_require__(299);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventBaseObject = __webpack_require__(300);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2['default'].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
	
	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },

/***/ 300:
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },

/***/ 301:
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },

/***/ 302:
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	
	module.exports = function toArray(children) {
	  var ret = [];
	  React.Children.forEach(children, function each(c) {
	    ret.push(c);
	  });
	  return ret;
	};

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	
	function mirror(o) {
	  return o;
	}
	
	module.exports = function mapSelf(children) {
	  // return ReactFragment
	  return React.Children.map(children, mirror);
	};

/***/ },

/***/ 305:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWindow;
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	module.exports = __webpack_require__(307);

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(308);
	
	var _AnimateChild = __webpack_require__(309);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(313);
	
	var _util2 = _interopRequireDefault(_util);
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',
	
	  propTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionAppear: _react2['default'].PropTypes.bool,
	    exclusive: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    onEnter: _react2['default'].PropTypes.func,
	    onLeave: _react2['default'].PropTypes.func,
	    onAppear: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      _this.performAppear(child.key);
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = undefined;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.isMounted()) {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  },
	
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      if (_util2['default'].allowLeaveCallback(props)) {
	        props.onLeave(key);
	        props.onEnd(key, false);
	      }
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },
	
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2['default'].createElement(
	          _AnimateChild2['default'],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(
	        Component,
	        this.props,
	        children
	      );
	    }
	    return children[0] || null;
	  }
	});
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child.key !== child2.key) {
	        same = false;
	      } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	        same = false;
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _cssAnimation = __webpack_require__(310);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(313);
	
	var _util2 = _interopRequireDefault(_util);
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',
	
	  propTypes: {
	    children: _react2['default'].PropTypes.any
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2['default'].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2['default'].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2['default'].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _reactDom2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(311);
	var Css = __webpack_require__(312);
	var isCssAnimationSupported = Event.endEvents.length !== 0;
	
	function getDuration(node, name) {
	  var style = window.getComputedStyle(node);
	  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
	    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration, animationDuration);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    Css.addClass(node, activeClassName);
	    fixBrowserByTimeout(node);
	  }, 0);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	module.exports = cssAnimation;

/***/ },

/***/ 311:
/***/ function(module, exports) {

	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = TransitionEvents;

/***/ },

/***/ 312:
/***/ function(module, exports) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	}
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, n) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    var needle = n.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },

/***/ 313:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var DOMWrap = _react2['default'].createClass({
	  displayName: 'DOMWrap',
	
	  propTypes: {
	    tag: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tag: 'div'
	    };
	  },
	
	  render: function render() {
	    var props = _extends({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    return _react2['default'].createElement(Tag, props);
	  }
	});
	
	exports['default'] = DOMWrap;
	module.exports = exports['default'];

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(316);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _buttonGroup = __webpack_require__(317);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_button2.default.Group = _buttonGroup2.default;
	exports.default = _button2.default;
	module.exports = exports['default'];

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactDom = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
	var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
	function isString(str) {
	  return typeof str === 'string';
	}
	
	var prefix = 'ant-btn-';
	
	// Insert one space between two chinese characters automatically.
	function insertSpace(child) {
	  if (isString(child) && isTwoCNChar(child)) {
	    return child.split('').join(' ');
	  }
	
	  if (isString(child.type) && isTwoCNChar(child.props.children)) {
	    return _react2.default.cloneElement(child, {}, child.props.children.split('').join(' '));
	  }
	
	  return child;
	}
	
	function clearButton(button) {
	  button.className = button.className.replace(prefix + 'clicked', '');
	}
	
	var Button = function (_React$Component) {
	  _inherits(Button, _React$Component);
	
	  function Button() {
	    _classCallCheck(this, Button);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	  }
	
	  _createClass(Button, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props;
	
	      // Add click effect
	      var buttonNode = (0, _reactDom.findDOMNode)(this);
	      clearButton(buttonNode);
	      setTimeout(function () {
	        return buttonNode.className += ' ' + prefix + 'clicked';
	      }, 10);
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        return clearButton(buttonNode);
	      }, 500);
	
	      (_props = this.props).onClick.apply(_props, arguments);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;
	
	      var props = this.props;
	      var type = props.type;
	      var shape = props.shape;
	      var size = props.size;
	      var className = props.className;
	      var htmlType = props.htmlType;
	      var children = props.children;
	
	      var others = _objectWithoutProperties(props, ['type', 'shape', 'size', 'className', 'htmlType', 'children']);
	
	      // large => lg
	      // small => sm
	
	
	      var sizeCls = {
	        large: 'lg',
	        small: 'sm'
	      }[size] || '';
	
	      var classes = (0, _classnames2.default)((_classNames = {
	        'ant-btn': true
	      }, _defineProperty(_classNames, prefix + type, type), _defineProperty(_classNames, prefix + shape, shape), _defineProperty(_classNames, prefix + sizeCls, sizeCls), _defineProperty(_classNames, prefix + 'loading', 'loading' in props && props.loading !== false), _defineProperty(_classNames, className, className), _classNames));
	
	      var kids = _react2.default.Children.map(children, insertSpace);
	
	      return _react2.default.createElement(
	        'button',
	        _extends({}, others, {
	          type: htmlType || 'button',
	          className: classes,
	          onClick: this.handleClick.bind(this) }),
	        kids
	      );
	    }
	  }]);
	
	  return Button;
	}(_react2.default.Component);
	
	exports.default = Button;
	
	
	Button.propTypes = {
	  type: _react2.default.PropTypes.oneOf(['primary', 'ghost', 'dashed']),
	  shape: _react2.default.PropTypes.oneOf(['circle', 'circle-outline']),
	  size: _react2.default.PropTypes.oneOf(['large', 'small']),
	  htmlType: _react2.default.PropTypes.oneOf(['submit', 'button', 'reset']),
	  onClick: _react2.default.PropTypes.func,
	  loading: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string
	};
	
	Button.defaultProps = {
	  onClick: function onClick() {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var prefix = 'ant-btn-group-';
	
	var ButtonGroup = function (_React$Component) {
	  _inherits(ButtonGroup, _React$Component);
	
	  function ButtonGroup() {
	    _classCallCheck(this, ButtonGroup);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).apply(this, arguments));
	  }
	
	  _createClass(ButtonGroup, [{
	    key: 'render',
	    value: function render() {
	      var _classNames;
	
	      var _props = this.props;
	      var size = _props.size;
	      var className = _props.className;
	
	      var others = _objectWithoutProperties(_props, ['size', 'className']);
	
	      // large => lg
	      // small => sm
	
	
	      var sizeCls = {
	        large: 'lg',
	        small: 'sm'
	      }[size] || '';
	
	      var classes = (0, _classnames2.default)((_classNames = {
	        'ant-btn-group': true
	      }, _defineProperty(_classNames, prefix + sizeCls, sizeCls), _defineProperty(_classNames, className, className), _classNames));
	
	      return _react2.default.createElement('div', _extends({}, others, { className: classes }));
	    }
	  }]);
	
	  return ButtonGroup;
	}(_react2.default.Component);
	
	exports.default = ButtonGroup;
	
	ButtonGroup.propTypes = {
	  size: _react2.default.PropTypes.oneOf(['large', 'small'])
	};
	module.exports = exports['default'];

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (config) {
	  var props = (0, _objectAssign2.default)({}, config || {});
	  var div = document.createElement('div');
	  document.body.appendChild(div);
	
	  var d = void 0;
	  props.iconClassName = props.iconClassName || 'question-circle';
	
	  var iconClassType = props.iconClassName;
	
	  var width = props.width || 416;
	
	  // 默认为 true，保持向下兼容
	  if (!('okCancel' in props)) {
	    props.okCancel = true;
	  }
	
	  props.okText = props.okText || (props.okCancel ? '确定' : '知道了');
	  props.cancelText = props.cancelText || '取消';
	
	  function close() {
	    d.setState({
	      visible: false
	    });
	    _reactDom2.default.unmountComponentAtNode(div);
	    div.parentNode.removeChild(div);
	  }
	
	  function onCancel() {
	    var cancelFn = props.onCancel;
	    if (cancelFn) {
	      var ret = void 0;
	      if (cancelFn.length) {
	        ret = cancelFn(close);
	      } else {
	        ret = cancelFn();
	        if (!ret) {
	          close();
	        }
	      }
	      if (ret && ret.then) {
	        ret.then(close);
	      }
	    } else {
	      close();
	    }
	  }
	
	  function onOk() {
	    var okFn = props.onOk;
	    if (okFn) {
	      var ret = void 0;
	      if (okFn.length) {
	        ret = okFn(close);
	      } else {
	        ret = okFn();
	        if (!ret) {
	          close();
	        }
	      }
	      if (ret && ret.then) {
	        ret.then(close);
	      }
	    } else {
	      close();
	    }
	  }
	
	  var body = _react2.default.createElement(
	    'div',
	    { className: 'ant-confirm-body' },
	    _react2.default.createElement(_icon2.default, { type: iconClassType }),
	    _react2.default.createElement(
	      'span',
	      { className: 'ant-confirm-title' },
	      props.title
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'ant-confirm-content' },
	      props.content
	    )
	  );
	
	  var footer = null;
	  if (props.okCancel) {
	    footer = _react2.default.createElement(
	      'div',
	      { className: 'ant-confirm-btns' },
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost', size: 'large', onClick: onCancel },
	        props.cancelText
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', size: 'large', onClick: onOk },
	        props.okText
	      )
	    );
	  } else {
	    footer = _react2.default.createElement(
	      'div',
	      { className: 'ant-confirm-btns' },
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', size: 'large', onClick: onOk },
	        props.okText
	      )
	    );
	  }
	
	  _reactDom2.default.render(_react2.default.createElement(
	    _Modal2.default,
	    {
	      prefixCls: 'ant-modal',
	      className: 'ant-confirm',
	      visible: true,
	      closable: false,
	      title: '',
	      transitionName: 'zoom',
	      footer: '',
	      maskTransitionName: 'fade', width: width },
	    _react2.default.createElement(
	      'div',
	      { style: { zoom: 1, overflow: 'hidden' } },
	      body,
	      ' ',
	      footer
	    )
	  ), div, function () {
	    d = this;
	  });
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Modal = __webpack_require__(275);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _icon = __webpack_require__(319);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _button = __webpack_require__(315);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = exports['default'];

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	exports.default = function (props) {
	  var type = props.type;
	  var _props$className = props.className;
	  var className = _props$className === undefined ? '' : _props$className;
	
	  var other = _objectWithoutProperties(props, ['type', 'className']);
	
	  className += ' anticon anticon-' + type;
	  return _react2.default.createElement('i', _extends({ className: className }, other));
	};
	
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=modal.js.map