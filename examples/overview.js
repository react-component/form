webpackJsonp([9],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(321);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
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
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */
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
/* 250 */
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
/* 251 */
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
/* 252 */
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
/* 253 */
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
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
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
/* 265 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */
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
	    var _getParams = (0, _utils.getParams)(ns, opt, cb);
	
	    var names = _getParams.names;
	    var callback = _getParams.callback;
	    var options = _getParams.options;
	
	
	    function newCb(error, values) {
	      if (error) {
	        var firstNode = void 0;
	        var firstTop = void 0;
	        for (var name in error) {
	          if (error.hasOwnProperty(name) && error[name].instance) {
	            var node = _reactDom2["default"].findDOMNode(error[name].instance);
	            var top = node.getBoundingClientRect().top;
	            if (firstTop === undefined || firstTop > top) {
	              firstTop = top;
	              firstNode = node;
	            }
	          }
	        }
	        if (firstNode) {
	          var c = options.container || getScrollableContainer(firstNode);
	          (0, _domScrollIntoView2["default"])(firstNode, c, {
	            onlyScrollIfNeeded: true
	          });
	        }
	      }
	
	      if (typeof callback === 'function') {
	        callback(error, values);
	      }
	    }
	
	    return this.validateFields(names, options, newCb);
	  }
	};
	
	function createDOMForm(option) {
	  return (0, _createBaseForm2["default"])(_extends({}, option), [mixin]);
	}
	
	exports["default"] = createDOMForm;
	module.exports = exports['default'];

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(272);

/***/ },
/* 272 */
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
/* 273 */
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
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */
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
/* 280 */
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
/* 281 */
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
/* 282 */
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
/* 283 */
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
/* 284 */
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
/* 285 */
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
/* 286 */
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
/* 287 */
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
/* 288 */
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
/* 289 */
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
/* 290 */
/***/ function(module, exports) {

	'use strict';
	
	var seed = 0;
	module.exports = function guid() {
	  return Date.now() + '_' + seed++;
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(292);
	var classNames = __webpack_require__(264);
	
	module.exports = deprecate(classNames, '`rcUtil.classSet()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 292 */
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
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(292);
	var classNames = __webpack_require__(264);
	
	module.exports = deprecate(classNames, '`rcUtil.joinClasses()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 294 */
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
/* 295 */
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
/* 296 */
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
/* 297 */
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
/* 298 */
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
/* 299 */
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
/* 300 */
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
/* 301 */
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
/* 302 */
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
/* 303 */
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
/* 304 */
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
/* 305 */
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
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	module.exports = __webpack_require__(307);

/***/ },
/* 307 */
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
/* 308 */
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
/* 309 */
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
/* 310 */
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
/* 311 */
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
/* 312 */
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
/* 313 */
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
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/no-multi-comp:0, no-console:0 */
	
	var _createDOMForm = __webpack_require__(270);
	
	var _createDOMForm2 = _interopRequireDefault(_createDOMForm);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _select = __webpack_require__(322);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _datePicker = __webpack_require__(348);
	
	var _datePicker2 = _interopRequireDefault(_datePicker);
	
	__webpack_require__(265);
	
	var _styles = __webpack_require__(244);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function Email(props) {
	  var _props$form = props.form;
	  var getFieldProps = _props$form.getFieldProps;
	  var getFieldError = _props$form.getFieldError;
	  var isFieldValidating = _props$form.isFieldValidating;
	
	  var errors = getFieldError('email');
	  return _react2["default"].createElement(
	    'div',
	    { style: _styles.regionStyle },
	    _react2["default"].createElement(
	      'p',
	      null,
	      'email sync validate'
	    ),
	    _react2["default"].createElement(
	      'p',
	      null,
	      _react2["default"].createElement('input', getFieldProps('email', {
	        rules: [{
	          type: 'email',
	          message: _react2["default"].createElement(
	            'b',
	            { key: 'err' },
	            '错误的 email 格式'
	          )
	        }]
	      }))
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      errors
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      isFieldValidating('email') ? 'validating' : null
	    )
	  );
	}
	
	Email.propTypes = {
	  form: _react.PropTypes.object
	};
	
	var User = _react2["default"].createClass({
	  displayName: 'User',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  userExists: function userExists(rule, value, callback) {
	    setTimeout(function () {
	      if (value === '1') {
	        callback([new Error('are you kidding?')]);
	      } else if (value === 'yiminghe') {
	        callback([new Error('forbid yiminghe')]);
	      } else {
	        callback();
	      }
	    }, 300);
	  },
	  render: function render() {
	    var _props$form2 = this.props.form;
	    var getFieldProps = _props$form2.getFieldProps;
	    var getFieldError = _props$form2.getFieldError;
	    var isFieldValidating = _props$form2.isFieldValidating;
	
	    var errors = getFieldError('user');
	    return _react2["default"].createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement(
	          'span',
	          { style: { color: 'red' } },
	          '*'
	        ),
	        ' user async validate'
	      ),
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement('input', getFieldProps('user', {
	          validateFirst: true,
	          rules: [{
	            required: true
	          }, {
	            validator: this.userExists
	          }]
	        }))
	      ),
	      _react2["default"].createElement(
	        'p',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      ),
	      _react2["default"].createElement(
	        'p',
	        { style: _styles.errorStyle },
	        isFieldValidating('user') ? 'validating' : null
	      )
	    );
	  }
	});
	
	function CustomInput(props) {
	  var _props$form3 = props.form;
	  var getFieldProps = _props$form3.getFieldProps;
	  var getFieldError = _props$form3.getFieldError;
	  var isFieldValidating = _props$form3.isFieldValidating;
	
	  var errors = getFieldError('select');
	  return _react2["default"].createElement(
	    'div',
	    { style: _styles.regionStyle },
	    _react2["default"].createElement(
	      'p',
	      null,
	      _react2["default"].createElement(
	        'span',
	        { style: { color: 'red' } },
	        '*'
	      ),
	      ' custom select sync validate'
	    ),
	    _react2["default"].createElement(
	      'p',
	      null,
	      _react2["default"].createElement(
	        _select2["default"],
	        _extends({
	          placeholder: 'please select',
	          style: { width: 200 }
	        }, getFieldProps('select', {
	          rules: [{
	            required: true
	          }]
	        })),
	        _react2["default"].createElement(
	          _select.Option,
	          { value: '1' },
	          '1'
	        ),
	        _react2["default"].createElement(
	          _select.Option,
	          { value: '2' },
	          '2'
	        )
	      )
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      errors ? errors.join(',') : null
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      isFieldValidating('select') ? 'validating' : null
	    )
	  );
	}
	
	CustomInput.propTypes = {
	  form: _react.PropTypes.object
	};
	
	function DateInput(props) {
	  var _props$form4 = props.form;
	  var getFieldProps = _props$form4.getFieldProps;
	  var getFieldError = _props$form4.getFieldError;
	
	  var errors = getFieldError('date');
	  return _react2["default"].createElement(
	    'div',
	    { style: _styles.regionStyle },
	    _react2["default"].createElement(
	      'p',
	      null,
	      _react2["default"].createElement(
	        'span',
	        { style: { color: 'red' } },
	        '*'
	      ),
	      ' DateInput sync validate'
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: { width: 200 } },
	      _react2["default"].createElement(_datePicker2["default"], _extends({
	        placeholder: 'please select'
	      }, getFieldProps('date', {
	        rules: [{
	          required: true,
	          type: 'date'
	        }]
	      })))
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      errors ? errors.join(',') : null
	    )
	  );
	}
	
	DateInput.propTypes = {
	  form: _react.PropTypes.object
	};
	
	function toNumber(v) {
	  if (v === undefined) {
	    return v;
	  }
	  if (v === '') {
	    return undefined;
	  }
	  if (v && v.trim() === '') {
	    return NaN;
	  }
	  return Number(v);
	}
	
	function NumberInput(props) {
	  var _props$form5 = props.form;
	  var getFieldProps = _props$form5.getFieldProps;
	  var getFieldError = _props$form5.getFieldError;
	
	  var errors = getFieldError('number');
	  return _react2["default"].createElement(
	    'div',
	    { style: _styles.regionStyle },
	    _react2["default"].createElement(
	      'p',
	      null,
	      'number input'
	    ),
	    _react2["default"].createElement(
	      'p',
	      null,
	      _react2["default"].createElement('input', getFieldProps('number', {
	        initialValue: '1',
	        rules: [{
	          transform: toNumber,
	          type: 'number'
	        }]
	      }))
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      errors ? errors.join(',') : null
	    )
	  );
	}
	
	NumberInput.propTypes = {
	  form: _react.PropTypes.object
	};
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Form);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onSubmit = function (e) {
	      console.log('submit');
	      e.preventDefault();
	      _this.props.form.validateFieldsAndScroll(function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    }, _this.reset = function (e) {
	      e.preventDefault();
	      _this.props.form.resetFields();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var form = this.props.form;
	      var getFieldProps = form.getFieldProps;
	      var getFieldError = form.getFieldError;
	
	      return _react2["default"].createElement(
	        'div',
	        { style: { margin: 20 } },
	        _react2["default"].createElement(
	          'h2',
	          null,
	          'overview'
	        ),
	        _react2["default"].createElement(
	          'form',
	          { onSubmit: this.onSubmit },
	          _react2["default"].createElement(User, { form: form, saveRef: this.saveRef }),
	          _react2["default"].createElement(NumberInput, { form: form }),
	          _react2["default"].createElement(Email, { form: form }),
	          _react2["default"].createElement(CustomInput, { form: form }),
	          _react2["default"].createElement(DateInput, { form: form }),
	          _react2["default"].createElement(
	            'div',
	            { style: _styles.regionStyle },
	            _react2["default"].createElement(
	              'p',
	              null,
	              'normal required input'
	            ),
	            _react2["default"].createElement(
	              'p',
	              null,
	              _react2["default"].createElement('input', getFieldProps('normal', {
	                rules: [{
	                  required: true
	                }]
	              }))
	            ),
	            _react2["default"].createElement(
	              'p',
	              { style: _styles.errorStyle },
	              getFieldError('normal') ? getFieldError('normal').join(',') : null
	            )
	          ),
	          _react2["default"].createElement(
	            'div',
	            { style: _styles.regionStyle },
	            _react2["default"].createElement(
	              'button',
	              { onClick: this.reset },
	              'reset'
	            ),
	            ' ',
	            _react2["default"].createElement('input', { type: 'submit', value: 'submit' })
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
	
	
	var NewForm = (0, _createDOMForm2["default"])({
	  validateMessages: {
	    required: function required(field) {
	      return field + ' 必填';
	    }
	  }
	})(Form);
	
	_reactDom2["default"].render(_react2["default"].createElement(NewForm, null), document.getElementById('__react-content'));

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcSelect = __webpack_require__(323);
	
	var _rcSelect2 = _interopRequireDefault(_rcSelect);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var AntSelect = _react2.default.createClass({
	  displayName: 'AntSelect',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'ant-select',
	      transitionName: 'slide-up',
	      optionLabelProp: 'children',
	      choiceTransitionName: 'zoom',
	      showSearch: false
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var size = _props.size;
	    var className = _props.className;
	    var combobox = _props.combobox;
	    var notFoundContent = _props.notFoundContent;
	
	
	    var cls = (0, _classnames2.default)(_defineProperty({
	      'ant-select-lg': size === 'large',
	      'ant-select-sm': size === 'small'
	    }, className, !!className));
	
	    if (combobox) {
	      notFoundContent = null;
	    }
	
	    return _react2.default.createElement(_rcSelect2.default, _extends({}, this.props, {
	      className: cls,
	      notFoundContent: notFoundContent }));
	  }
	});
	
	AntSelect.Option = _rcSelect.Option;
	AntSelect.OptGroup = _rcSelect.OptGroup;
	
	exports.default = AntSelect;
	module.exports = exports['default'];

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Select = __webpack_require__(324);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(347);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _OptGroup = __webpack_require__(325);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	_Select2['default'].Option = _Option2['default'];
	_Select2['default'].OptGroup = _OptGroup2['default'];
	exports.Option = _Option2['default'];
	exports.OptGroup = _OptGroup2['default'];
	exports['default'] = _Select2['default'];

/***/ },
/* 324 */
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
	
	var _rcUtil = __webpack_require__(289);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _OptGroup = __webpack_require__(325);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _rcAnimate = __webpack_require__(306);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _util = __webpack_require__(326);
	
	var _SelectTrigger = __webpack_require__(338);
	
	var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);
	
	var _FilterMixin = __webpack_require__(346);
	
	var _FilterMixin2 = _interopRequireDefault(_FilterMixin);
	
	function noop() {}
	
	function filterFn(input, child) {
	  return String((0, _util.getPropValue)(child, this.props.optionFilterProp)).indexOf(input) > -1;
	}
	
	function saveRef(name, component) {
	  this[name] = component;
	}
	
	var Select = _react2['default'].createClass({
	  displayName: 'Select',
	
	  propTypes: {
	    defaultActiveFirstOption: _react.PropTypes.bool,
	    multiple: _react.PropTypes.bool,
	    filterOption: _react.PropTypes.any,
	    showSearch: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    showArrow: _react.PropTypes.bool,
	    tags: _react.PropTypes.bool,
	    transitionName: _react.PropTypes.string,
	    optionLabelProp: _react.PropTypes.string,
	    optionFilterProp: _react.PropTypes.string,
	    animation: _react.PropTypes.string,
	    choiceTransitionName: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func,
	    onSearch: _react.PropTypes.func,
	    searchPlaceholder: _react.PropTypes.string,
	    placeholder: _react.PropTypes.any,
	    onDeselect: _react.PropTypes.func,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    label: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    defaultLabel: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    dropdownStyle: _react.PropTypes.object,
	    maxTagTextLength: _react.PropTypes.number
	  },
	  mixins: [_FilterMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-select',
	      filterOption: filterFn,
	      defaultOpen: false,
	      defaultActiveFirstOption: true,
	      showSearch: true,
	      allowClear: false,
	      placeholder: '',
	      searchPlaceholder: '',
	      defaultValue: [],
	      onChange: noop,
	      onSelect: noop,
	      onSearch: noop,
	      onDeselect: noop,
	      showArrow: true,
	      dropdownMatchSelectWidth: true,
	      dropdownStyle: {},
	      dropdownMenuStyle: {},
	      optionFilterProp: 'value',
	      optionLabelProp: 'value',
	      notFoundContent: 'Not Found'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var value = [];
	    if ('value' in props) {
	      value = (0, _util.toArray)(props.value);
	    } else {
	      value = (0, _util.toArray)(props.defaultValue);
	    }
	    var label = this.getLabelFromProps(props, value, 1);
	    var inputValue = '';
	    if (props.combobox) {
	      inputValue = value.length ? String(value[0]) : '';
	    }
	    this.saveInputRef = saveRef.bind(this, 'inputInstance');
	    var open = props.open;
	    if (open === undefined) {
	      open = props.defaultOpen;
	    }
	    return { value: value, inputValue: inputValue, label: label, open: open };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      var value = (0, _util.toArray)(nextProps.value);
	      var label = this.getLabelFromProps(nextProps, value);
	      this.setState({
	        value: value,
	        label: label
	      });
	      if (nextProps.combobox) {
	        this.setState({
	          inputValue: value.length ? String(value[0]) : ''
	        });
	      }
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var state = this.state;
	    var props = this.props;
	    if (state.open && (0, _util.isMultipleOrTags)(props)) {
	      var inputNode = this.getInputDOMNode();
	      if (inputNode.value) {
	        inputNode.style.width = '';
	        inputNode.style.width = inputNode.scrollWidth + 'px';
	      } else {
	        inputNode.style.width = '';
	      }
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.clearDelayTimer();
	    if (this.dropdownContainer) {
	      _reactDom2['default'].unmountComponentAtNode(this.dropdownContainer);
	      document.body.removeChild(this.dropdownContainer);
	      this.dropdownContainer = null;
	    }
	  },
	
	  onInputChange: function onInputChange(event) {
	    var val = event.target.value;
	    var props = this.props;
	
	    this.setState({
	      inputValue: val,
	      open: true
	    });
	    if ((0, _util.isCombobox)(props)) {
	      this.fireChange([val], [val]);
	    }
	    props.onSearch(val);
	  },
	
	  onDropdownVisibleChange: function onDropdownVisibleChange(open) {
	    // selection inside combobox cause click
	    if (!open && document.activeElement === this.getInputDOMNode()) {
	      return;
	    }
	    this.setOpenState(open);
	  },
	
	  // combobox ignore
	  onKeyDown: function onKeyDown(event) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var keyCode = event.keyCode;
	    if (this.state.open && !this.getInputDOMNode()) {
	      this.onInputKeyDown(event);
	    } else if (keyCode === _rcUtil.KeyCode.ENTER || keyCode === _rcUtil.KeyCode.DOWN) {
	      this.setOpenState(true);
	      event.preventDefault();
	    }
	  },
	
	  onInputBlur: function onInputBlur() {
	    var _this = this;
	
	    if ((0, _util.isMultipleOrTagsOrCombobox)(this.props)) {
	      return;
	    }
	    this.clearDelayTimer();
	    this.delayTimer = setTimeout(function () {
	      _this.setOpenState(false);
	    }, 150);
	  },
	
	  onInputKeyDown: function onInputKeyDown(event) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var state = this.state;
	    var keyCode = event.keyCode;
	    if ((0, _util.isMultipleOrTags)(props) && !event.target.value && keyCode === _rcUtil.KeyCode.BACKSPACE) {
	      var value = state.value.concat();
	      if (value.length) {
	        var label = state.label.concat();
	        var popValue = value.pop();
	        label.pop();
	        props.onDeselect(popValue);
	        this.fireChange(value, label);
	      }
	      return;
	    }
	    if (keyCode === _rcUtil.KeyCode.DOWN) {
	      if (!state.open) {
	        this.openIfHasChildren();
	        event.preventDefault();
	        event.stopPropagation();
	        return;
	      }
	    } else if (keyCode === _rcUtil.KeyCode.ESC) {
	      if (state.open) {
	        this.setOpenState(false);
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      return;
	    }
	
	    if (state.open) {
	      var menu = this.refs.trigger.getInnerMenu();
	      if (menu && menu.onKeyDown(event)) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	    }
	  },
	
	  onMenuSelect: function onMenuSelect(_ref) {
	    var item = _ref.item;
	
	    var value = this.state.value;
	    var label = this.state.label;
	    var props = this.props;
	    var selectedValue = (0, _util.getValuePropValue)(item);
	    var selectedLabel = this.getLabelFromOption(item);
	    props.onSelect(selectedValue, item);
	    if ((0, _util.isMultipleOrTags)(props)) {
	      if (value.indexOf(selectedValue) !== -1) {
	        return;
	      }
	      value = value.concat([selectedValue]);
	      label = label.concat([selectedLabel]);
	    } else {
	      if (value[0] === selectedValue) {
	        this.setOpenState(false);
	        return;
	      }
	      value = [selectedValue];
	      label = [selectedLabel];
	      this.setOpenState(false);
	    }
	    this.fireChange(value, label);
	    this.setState({
	      inputValue: ''
	    });
	    if ((0, _util.isCombobox)(props)) {
	      this.setState({
	        inputValue: (0, _util.getPropValue)(item, props.optionLabelProp)
	      });
	    }
	  },
	
	  onMenuDeselect: function onMenuDeselect(_ref2) {
	    var item = _ref2.item;
	    var domEvent = _ref2.domEvent;
	
	    if (domEvent.type === 'click') {
	      this.removeSelected((0, _util.getValuePropValue)(item));
	    }
	    if (!(0, _util.isMultipleOrTags)(this.props)) {
	      this.setOpenState(false);
	    }
	    this.setState({
	      inputValue: ''
	    });
	  },
	
	  onPlaceholderClick: function onPlaceholderClick() {
	    this.getInputDOMNode().focus();
	  },
	
	  onClearSelection: function onClearSelection(event) {
	    var props = this.props;
	    var state = this.state;
	    if (props.disabled) {
	      return;
	    }
	    event.stopPropagation();
	    if (state.inputValue || state.value.length) {
	      this.fireChange([], []);
	      this.setOpenState(false);
	      this.setState({
	        inputValue: ''
	      });
	    }
	  },
	
	  getLabelBySingleValue: function getLabelBySingleValue(children, value) {
	    var _this2 = this;
	
	    if (value === undefined) {
	      return null;
	    }
	    var label = null;
	    _react2['default'].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2['default']) {
	        var maybe = _this2.getLabelBySingleValue(child.props.children, value);
	        if (maybe !== null) {
	          label = maybe;
	        }
	      } else if ((0, _util.getValuePropValue)(child) === value) {
	        label = _this2.getLabelFromOption(child);
	      }
	    });
	    return label;
	  },
	
	  getLabelFromOption: function getLabelFromOption(child) {
	    return (0, _util.getPropValue)(child, this.props.optionLabelProp);
	  },
	
	  getLabelFromProps: function getLabelFromProps(props, value, init) {
	    var label = [];
	    if ('label' in props) {
	      label = (0, _util.toArray)(props.label);
	    } else if (init && 'defaultLabel' in props) {
	      label = (0, _util.toArray)(props.defaultLabel);
	    } else {
	      label = this.getLabelByValue(props.children, value);
	    }
	    return label;
	  },
	
	  getVLForOnChange: function getVLForOnChange(vls) {
	    if (vls !== undefined) {
	      return (0, _util.isMultipleOrTags)(this.props) ? vls : vls[0];
	    }
	    return vls;
	  },
	
	  getLabelByValue: function getLabelByValue(children, values) {
	    var _this3 = this;
	
	    return values.map(function (value) {
	      var label = _this3.getLabelBySingleValue(children, value);
	      if (label === null) {
	        return value;
	      }
	      return label;
	    });
	  },
	
	  getDropdownContainer: function getDropdownContainer() {
	    if (!this.dropdownContainer) {
	      this.dropdownContainer = document.createElement('div');
	      document.body.appendChild(this.dropdownContainer);
	    }
	    return this.dropdownContainer;
	  },
	
	  getSearchPlaceholderElement: function getSearchPlaceholderElement(hidden) {
	    var props = this.props;
	    var placeholder = undefined;
	    if ((0, _util.isMultipleOrTagsOrCombobox)(props)) {
	      placeholder = props.placeholder || props.searchPlaceholder;
	    } else {
	      placeholder = props.searchPlaceholder;
	    }
	    if (placeholder) {
	      return _react2['default'].createElement(
	        'span',
	        {
	          style: { display: hidden ? 'none' : 'block' },
	          onClick: this.onPlaceholderClick,
	          className: props.prefixCls + '-search__field__placeholder' },
	        placeholder
	      );
	    }
	    return null;
	  },
	
	  getInputElement: function getInputElement() {
	    var props = this.props;
	    return _react2['default'].createElement(
	      'span',
	      { className: props.prefixCls + '-search__field__wrap' },
	      _react2['default'].createElement('input', {
	        ref: this.saveInputRef,
	        onBlur: this.onInputBlur,
	        onChange: this.onInputChange,
	        onKeyDown: this.onInputKeyDown,
	        value: this.state.inputValue,
	        disabled: props.disabled,
	        className: props.prefixCls + '-search__field',
	        role: 'textbox' }),
	      (0, _util.isMultipleOrTags)(props) ? null : this.getSearchPlaceholderElement(!!this.state.inputValue)
	    );
	  },
	
	  getInputDOMNode: function getInputDOMNode() {
	    return this.inputInstance;
	  },
	
	  getPopupDOMNode: function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDOMNode();
	  },
	
	  getPopupMenuComponent: function getPopupMenuComponent() {
	    return this.refs.trigger.getInnerMenu();
	  },
	
	  setOpenState: function setOpenState(open) {
	    var _this4 = this;
	
	    this.clearDelayTimer();
	    var props = this.props;
	    var refs = this.refs;
	
	    if (this.state.open === open) {
	      return;
	    }
	    this.setState({
	      open: open
	    }, function () {
	      if (open || (0, _util.isMultipleOrTagsOrCombobox)(props)) {
	        var input = _this4.getInputDOMNode();
	        if (input && document.activeElement !== input) {
	          input.focus();
	        }
	      } else if (refs.selection) {
	        refs.selection.focus();
	      }
	    });
	  },
	  clearDelayTimer: function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  },
	
	  removeSelected: function removeSelected(selectedValue) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var label = this.state.label.concat();
	    var index = this.state.value.indexOf(selectedValue);
	    var value = this.state.value.filter(function (singleValue) {
	      return singleValue !== selectedValue;
	    });
	    if (index !== -1) {
	      label.splice(index, 1);
	    }
	    var canMultiple = (0, _util.isMultipleOrTags)(props);
	    if (canMultiple) {
	      props.onDeselect(selectedValue);
	    }
	    this.fireChange(value, label);
	  },
	
	  openIfHasChildren: function openIfHasChildren() {
	    var props = this.props;
	    if (_react2['default'].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
	      this.setOpenState(true);
	    }
	  },
	
	  fireChange: function fireChange(value, label) {
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value, label: label
	      });
	    }
	    props.onChange(this.getVLForOnChange(value), this.getVLForOnChange(label));
	  },
	
	  renderTopControlNode: function renderTopControlNode() {
	    var _this5 = this;
	
	    var _state = this.state;
	    var value = _state.value;
	    var label = _state.label;
	
	    var props = this.props;
	    var choiceTransitionName = props.choiceTransitionName;
	    var prefixCls = props.prefixCls;
	    var maxTagTextLength = props.maxTagTextLength;
	
	    // single and not combobox, input is inside dropdown
	    if ((0, _util.isSingleMode)(props)) {
	      var innerNode = _react2['default'].createElement(
	        'span',
	        {
	          key: 'placeholder',
	          className: prefixCls + '-selection__placeholder' },
	        props.placeholder
	      );
	      if (label.length) {
	        innerNode = _react2['default'].createElement(
	          'span',
	          { key: 'value' },
	          label[0]
	        );
	      }
	      return _react2['default'].createElement(
	        'span',
	        { className: prefixCls + '-selection__rendered' },
	        innerNode
	      );
	    }
	
	    var selectedValueNodes = [];
	    if ((0, _util.isMultipleOrTags)(props)) {
	      selectedValueNodes = value.map(function (singleValue, index) {
	        var content = label[index];
	        var title = content;
	        if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	          content = content.slice(0, maxTagTextLength) + '...';
	        }
	        return _react2['default'].createElement(
	          'li',
	          _extends({
	            style: _util.UNSELECTABLE_STYLE
	          }, _util.UNSELECTABLE_ATTRIBUTE, {
	            onMouseDown: _util.preventDefaultEvent,
	            className: prefixCls + '-selection__choice',
	            key: singleValue,
	            title: title
	          }),
	          _react2['default'].createElement(
	            'span',
	            { className: prefixCls + '-selection__choice__content' },
	            content
	          ),
	          _react2['default'].createElement('span', {
	            className: prefixCls + '-selection__choice__remove',
	            onClick: _this5.removeSelected.bind(_this5, singleValue) })
	        );
	      });
	    }
	    selectedValueNodes.push(_react2['default'].createElement(
	      'li',
	      { className: prefixCls + '-search ' + prefixCls + '-search--inline', key: '__input' },
	      this.getInputElement()
	    ));
	    var className = prefixCls + '-selection__rendered';
	    if ((0, _util.isMultipleOrTags)(props) && choiceTransitionName) {
	      return _react2['default'].createElement(
	        _rcAnimate2['default'],
	        {
	          className: className,
	          component: 'ul',
	          transitionName: choiceTransitionName },
	        selectedValueNodes
	      );
	    }
	    return _react2['default'].createElement(
	      'ul',
	      { className: className },
	      selectedValueNodes
	    );
	  },
	
	  render: function render() {
	    var _rootCls;
	
	    var props = this.props;
	    var multiple = (0, _util.isMultipleOrTags)(props);
	    var state = this.state;
	    var className = props.className;
	    var disabled = props.disabled;
	    var allowClear = props.allowClear;
	    var prefixCls = props.prefixCls;
	
	    var ctrlNode = this.renderTopControlNode();
	    var extraSelectionProps = {};
	    var open = this.state.open;
	
	    var options = [];
	    if (open) {
	      options = this.renderFilterOptions();
	    }
	    if (open && ((0, _util.isMultipleOrTagsOrCombobox)(props) || !props.showSearch) && !options.length) {
	      open = false;
	    }
	    if (!(0, _util.isMultipleOrTagsOrCombobox)(props)) {
	      extraSelectionProps = {
	        onKeyDown: this.onKeyDown,
	        tabIndex: 0
	      };
	    }
	    var rootCls = (_rootCls = {}, _defineProperty(_rootCls, className, !!className), _defineProperty(_rootCls, prefixCls, 1), _defineProperty(_rootCls, prefixCls + '-open', open), _defineProperty(_rootCls, prefixCls + '-combobox', (0, _util.isCombobox)(props)), _defineProperty(_rootCls, prefixCls + '-disabled', disabled), _defineProperty(_rootCls, prefixCls + '-enabled', !disabled), _rootCls);
	
	    var clear = _react2['default'].createElement('span', {
	      key: 'clear',
	      className: prefixCls + '-selection__clear',
	      onClick: this.onClearSelection });
	    return _react2['default'].createElement(
	      _SelectTrigger2['default'],
	      _extends({}, props, {
	        options: options,
	        multiple: multiple,
	        disabled: disabled,
	        visible: open,
	        inputValue: state.inputValue,
	        inputElement: this.getInputElement(),
	        value: state.value,
	        onDropdownVisibleChange: this.onDropdownVisibleChange,
	        onMenuSelect: this.onMenuSelect,
	        onMenuDeselect: this.onMenuDeselect,
	        ref: 'trigger' }),
	      _react2['default'].createElement(
	        'span',
	        {
	          style: props.style,
	          className: (0, _classnames2['default'])(rootCls) },
	        _react2['default'].createElement(
	          'span',
	          _extends({
	            ref: 'selection',
	            key: 'selection',
	            className: prefixCls + '-selection ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
	            role: 'combobox',
	            'aria-autocomplete': 'list',
	            'aria-haspopup': 'true',
	            'aria-expanded': open
	          }, extraSelectionProps),
	          ctrlNode,
	          allowClear && !multiple ? clear : null,
	          multiple || !props.showArrow ? null : _react2['default'].createElement(
	            'span',
	            {
	              key: 'arrow',
	              className: prefixCls + '-arrow',
	              style: { outline: 'none' }
	            },
	            _react2['default'].createElement('b', null)
	          ),
	          multiple ? this.getSearchPlaceholderElement(!!this.state.inputValue || this.state.value.length) : null
	        )
	      )
	    );
	  }
	});
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var OptGroup = (function (_React$Component) {
	  _inherits(OptGroup, _React$Component);
	
	  function OptGroup() {
	    _classCallCheck(this, OptGroup);
	
	    _get(Object.getPrototypeOf(OptGroup.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  return OptGroup;
	})(_react2['default'].Component);
	
	exports['default'] = OptGroup;
	module.exports = exports['default'];

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getValuePropValue = getValuePropValue;
	exports.getPropValue = getPropValue;
	exports.isCombobox = isCombobox;
	exports.isMultipleOrTags = isMultipleOrTags;
	exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
	exports.isSingleMode = isSingleMode;
	exports.toArray = toArray;
	exports.preventDefaultEvent = preventDefaultEvent;
	exports.getSelectKeys = getSelectKeys;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcMenu = __webpack_require__(327);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function getValuePropValue(child) {
	  var props = child.props;
	  if ('value' in props) {
	    return props.value;
	  }
	  if (child.key) {
	    return child.key;
	  }
	  throw new Error('no key or value for ' + child);
	}
	
	function getPropValue(child, prop) {
	  if (prop === 'value') {
	    return getValuePropValue(child);
	  }
	  return child.props[prop];
	}
	
	function isCombobox(props) {
	  return props.combobox;
	}
	
	function isMultipleOrTags(props) {
	  return props.multiple || props.tags;
	}
	
	function isMultipleOrTagsOrCombobox(props) {
	  return isMultipleOrTags(props) || isCombobox(props);
	}
	
	function isSingleMode(props) {
	  return !isMultipleOrTagsOrCombobox(props);
	}
	
	function toArray(value) {
	  var ret = value;
	  if (value === undefined) {
	    ret = [];
	  } else if (!Array.isArray(value)) {
	    ret = [value];
	  }
	  return ret;
	}
	
	function preventDefaultEvent(e) {
	  e.preventDefault();
	}
	
	function getSelectKeys(menuItems, value) {
	  if (value === null || value === undefined) {
	    return [];
	  }
	  var selectedKeys = [];
	  _react2['default'].Children.forEach(menuItems, function (item) {
	    if (item.type === _rcMenu.ItemGroup) {
	      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
	    } else {
	      var itemValue = getValuePropValue(item);
	      var itemKey = item.key;
	      if (value.indexOf(itemValue) !== -1 && itemKey) {
	        selectedKeys.push(itemKey);
	      }
	    }
	  });
	  return selectedKeys;
	}
	
	var UNSELECTABLE_STYLE = {
	  userSelect: 'none',
	  WebkitUserSelect: 'none'
	};
	
	exports.UNSELECTABLE_STYLE = UNSELECTABLE_STYLE;
	var UNSELECTABLE_ATTRIBUTE = {
	  unselectable: 'unselectable'
	};
	exports.UNSELECTABLE_ATTRIBUTE = UNSELECTABLE_ATTRIBUTE;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Menu = __webpack_require__(328);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(332);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(335);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(336);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	var _Divider = __webpack_require__(337);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	exports.SubMenu = _SubMenu2['default'];
	exports.Item = _MenuItem2['default'];
	exports.MenuItem = _MenuItem2['default'];
	exports.MenuItemGroup = _MenuItemGroup2['default'];
	exports.ItemGroup = _MenuItemGroup2['default'];
	exports.Divider = _Divider2['default'];
	exports['default'] = _Menu2['default'];

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MenuMixin = __webpack_require__(329);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(330);
	
	var Menu = _react2['default'].createClass({
	  displayName: 'Menu',
	
	  propTypes: {
	    openSubMenuOnMouseEnter: _react2['default'].PropTypes.bool,
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    selectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultSelectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultOpenKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    mode: _react2['default'].PropTypes.string,
	    onClick: _react2['default'].PropTypes.func,
	    onSelect: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    openTransitionName: _react2['default'].PropTypes.string,
	    openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
	    level: _react2['default'].PropTypes.number,
	    eventKey: _react2['default'].PropTypes.string,
	    selectable: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.any
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      openSubMenuOnMouseEnter: true,
	      closeSubMenuOnMouseLeave: true,
	      selectable: true,
	      onClick: _util.noop,
	      onSelect: _util.noop,
	      onOpen: _util.noop,
	      onClose: _util.noop,
	      onDeselect: _util.noop,
	      defaultSelectedKeys: [],
	      defaultOpenKeys: []
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedKeys = props.defaultSelectedKeys;
	    var openKeys = props.defaultOpenKeys;
	    if ('selectedKeys' in props) {
	      selectedKeys = props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = props.openKeys || [];
	    }
	    return {
	      selectedKeys: selectedKeys, openKeys: openKeys
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys;
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys;
	    }
	    this.setState(props);
	  },
	
	  onDestroy: function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  },
	
	  onItemHover: function onItemHover(e) {
	    var _this = this;
	
	    var item = e.item;
	
	    // special for top sub menu
	    if (this.props.mode !== 'inline' && !this.props.closeSubMenuOnMouseLeave && item.isSubMenu) {
	      (function () {
	        var activeKey = _this.state.activeKey;
	        var activeItem = _this.getFlatInstanceArray().filter(function (c) {
	          return c && c.props.eventKey === activeKey;
	        })[0];
	        if (activeItem && activeItem.props.open) {
	          _this.onOpenChange({
	            key: item.props.eventKey,
	            item: e.item,
	            open: true
	          });
	        }
	      })();
	    }
	
	    this.onCommonItemHover(e);
	  },
	
	  onSelect: function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect((0, _objectAssign2['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	
	  onClick: function onClick(e) {
	    var props = this.props;
	    props.onClick(e);
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    var openKeys = this.state.openKeys;
	    var props = this.props;
	    var changed = true;
	    if (e.open) {
	      changed = openKeys.indexOf(e.key) === -1;
	      if (changed) {
	        openKeys = openKeys.concat(e.key);
	      }
	    } else {
	      var index = openKeys.indexOf(e.key);
	      changed = index !== -1;
	      if (changed) {
	        openKeys = openKeys.concat();
	        openKeys.splice(index, 1);
	      }
	    }
	    if (changed) {
	      if (!('openKeys' in this.props)) {
	        // hack: batch does not update state
	        this.state.openKeys = openKeys;
	        this.setState({ openKeys: openKeys });
	      }
	      var info = (0, _objectAssign2['default'])({ openKeys: openKeys }, e);
	      if (e.open) {
	        props.onOpen(info);
	      } else {
	        props.onClose(info);
	      }
	    }
	  },
	
	  onDeselect: function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect((0, _objectAssign2['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	
	  getOpenTransitionName: function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  },
	
	  isInlineMode: function isInlineMode() {
	    return this.props.mode === 'inline';
	  },
	
	  lastOpenSubMenu: function lastOpenSubMenu() {
	    var _this2 = this;
	
	    var lastOpen = [];
	    if (this.state.openKeys.length) {
	      lastOpen = this.getFlatInstanceArray().filter(function (c) {
	        return c && _this2.state.openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  },
	
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    var key = (0, _util.getKeyFromChildrenIndex)(c, this.props.eventKey, i);
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      open: state.openKeys.indexOf(key) !== -1,
	      selectedKeys: state.selectedKeys,
	      selected: state.selectedKeys.indexOf(key) !== -1,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	
	  render: function render() {
	    var props = (0, _objectAssign2['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-root';
	    return this.renderRoot(props);
	  }
	});
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 329 */
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
	
	var _rcUtil = __webpack_require__(289);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domScrollIntoView = __webpack_require__(271);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(330);
	
	var _DOMWrap = __webpack_require__(331);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}
	
	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children;
	  var eventKey = props.eventKey;
	  if (activeKey) {
	    var found = undefined;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}
	
	var MenuMixin = {
	  propTypes: {
	    focusable: _react2['default'].PropTypes.bool,
	    multiple: _react2['default'].PropTypes.bool,
	    style: _react2['default'].PropTypes.object,
	    defaultActiveFirst: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    activeKey: _react2['default'].PropTypes.string,
	    selectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultSelectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultOpenKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    children: _react2['default'].PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-menu',
	      className: '',
	      mode: 'vertical',
	      level: 1,
	      inlineIndent: 24,
	      visible: true,
	      focusable: true,
	      style: {}
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    return {
	      activeKey: getActiveKey(props, props.activeKey)
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = undefined;
	    if ('activeKey' in nextProps) {
	      props = {
	        activeKey: getActiveKey(nextProps, nextProps.activeKey)
	      };
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props = {
	          activeKey: activeKey
	        };
	      }
	    }
	    if (props) {
	      this.setState(props);
	    }
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.instanceArray = [];
	  },
	
	  // all keyboard events callbacks run from here at first
	  onKeyDown: function onKeyDown(e) {
	    var _this = this;
	
	    var keyCode = e.keyCode;
	    var handled = undefined;
	    this.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _rcUtil.KeyCode.UP || keyCode === _rcUtil.KeyCode.DOWN) {
	      activeItem = this.step(keyCode === _rcUtil.KeyCode.UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        (0, _domScrollIntoView2['default'])(_reactDom2['default'].findDOMNode(activeItem), _reactDom2['default'].findDOMNode(_this), {
	          onlyScrollIfNeeded: true
	        });
	      });
	      return 1;
	    } else if (activeItem === undefined) {
	      e.preventDefault();
	      this.setState({
	        activeKey: null
	      });
	      return 1;
	    }
	  },
	
	  onCommonItemHover: function onCommonItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key;
	    var hover = e.hover;
	    var trigger = e.trigger;
	
	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty
	
	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        this.onOpenChange({
	          item: activeItem,
	          key: activeItem.props.eventKey,
	          open: false
	        });
	      }
	    }
	  },
	
	  getFlatInstanceArray: function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  },
	
	  renderCommonMenuItem: function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var newChildProps = (0, _objectAssign2['default'])({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _rcUtil.createChainedFunction)(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && key === state.activeKey,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2['default'].cloneElement(child, newChildProps);
	  },
	
	  renderRoot: function renderRoot(props) {
	    var _classes;
	
	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.prefixCls, 1), _defineProperty(_classes, props.prefixCls + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2['default'])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return(
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2['default'].createElement(
	        _DOMWrap2['default'],
	        _extends({ style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.prefixCls + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2['default'].Children.map(props.children, this.renderMenuItem)
	      )
	      /*eslint-enable */
	
	    );
	  },
	
	  step: function step(direction) {
	    var children = this.getFlatInstanceArray();
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!this.props.defaultActiveFirst && activeIndex !== -1) {
	      if (allDisabled(children.slice(activeIndex, len - 1))) {
	        return undefined;
	      }
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  }
	};
	
	exports['default'] = MenuMixin;
	module.exports = exports['default'];

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.loopMenuItem = loopMenuItem;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var now = Date.now();
	
	function noop() {}
	
	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + now + '_' + index;
	}
	
	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2['default'].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type.isMenuItemGroup) {
	      _react2['default'].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
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
	    var props = (0, _objectAssign2['default'])({}, this.props);
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
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _SubPopupMenu = __webpack_require__(333);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(289);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var SubMenu = _react2['default'].createClass({
	  displayName: 'SubMenu',
	
	  propTypes: {
	    parentMenu: _react2['default'].PropTypes.object,
	    title: _react2['default'].PropTypes.node,
	    onClick: _react2['default'].PropTypes.func,
	    onOpenChange: _react2['default'].PropTypes.func,
	    rootPrefixCls: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.string,
	    multiple: _react2['default'].PropTypes.bool,
	    active: _react2['default'].PropTypes.bool,
	    open: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    openSubMenuOnMouseEnter: _react2['default'].PropTypes.bool,
	    onDeselect: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    onItemHover: _react2['default'].PropTypes.func
	  },
	
	  mixins: [__webpack_require__(334)],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      title: ''
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.isSubMenu = 1;
	    return {
	      defaultActiveFirst: false
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	  },
	
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	
	    if (keyCode === _rcUtil.KeyCode.ENTER) {
	      this.onClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }
	
	    if (keyCode === _rcUtil.KeyCode.RIGHT) {
	      if (this.props.open) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _rcUtil.KeyCode.LEFT) {
	      var handled = undefined;
	      if (this.props.open) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }
	
	    if (this.props.open && (keyCode === _rcUtil.KeyCode.UP || keyCode === _rcUtil.KeyCode.DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  },
	
	  onSubTreeMouseEnter: function onSubTreeMouseEnter() {
	    if (this.leaveTimer) {
	      clearTimeout(this.leaveTimer);
	      this.leaveTimer = null;
	    }
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(this.addKeyPath(e));
	  },
	
	  onMouseEnter: function onMouseEnter() {
	    if (this.leaveTimer) {
	      clearTimeout(this.leaveTimer);
	      this.leaveTimer = null;
	    }
	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	    }
	    props.onItemHover({
	      key: this.props.eventKey,
	      item: this,
	      hover: true,
	      trigger: 'mouseenter'
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      this.triggerOpenChange(true);
	    }
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	
	  onMouseLeave: function onMouseLeave() {
	    var _this = this;
	
	    // prevent popup menu and submenu gap
	    this.leaveTimer = setTimeout(function () {
	      // leave whole sub tree
	      // still active
	      if (_this.isMounted() && _this.props.active) {
	        _this.props.onItemHover({
	          key: _this.props.eventKey,
	          item: _this,
	          hover: false,
	          trigger: 'mouseleave'
	        });
	      }
	      if (_this.isMounted() && _this.props.open) {
	        if (_this.props.closeSubMenuOnMouseLeave) {
	          _this.triggerOpenChange(false);
	        }
	      }
	    }, 100);
	  },
	
	  onClick: function onClick() {
	    if (this.props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.props.open, 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	
	  onSubMenuClick: function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  },
	
	  onSelect: function onSelect(info) {
	    this.props.onSelect(info);
	  },
	
	  onDeselect: function onDeselect(info) {
	    this.props.onDeselect(info);
	  },
	
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  },
	
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	
	  getOpenClassName: function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  },
	
	  saveMenuInstance: function saveMenuInstance(c) {
	    this.menuInstance = c;
	  },
	
	  addKeyPath: function addKeyPath(info) {
	    return (0, _objectAssign2['default'])({}, info, {
	      keyPath: (info.keyPath || []).concat(this.props.eventKey)
	    });
	  },
	
	  triggerOpenChange: function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  },
	
	  renderChildren: function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: props.open,
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2['default'].createElement(
	      _SubPopupMenu2['default'],
	      baseProps,
	      children
	    );
	  },
	
	  render: function render() {
	    var _classes;
	
	    this.haveOpen = this.haveOpen || this.props.open;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls + '-' + props.mode, 1), _classes);
	
	    classes[this.getOpenClassName()] = this.props.open;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    this._menuId = this._menuId || (0, _rcUtil.guid)();
	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var clickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      clickEvents = {
	        onClick: this.onClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onSubTreeMouseEnter
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2['default'].createElement(
	      'li',
	      _extends({ className: (0, _classnames2['default'])(classes) }, mouseEvents),
	      _react2['default'].createElement(
	        'div',
	        _extends({
	          style: style,
	          className: prefixCls + '-title'
	        }, titleMouseEvents, clickEvents, {
	          'aria-open': props.open,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true'
	        }),
	        props.title
	      ),
	      this.renderChildren(props.children)
	    );
	  }
	});
	
	exports['default'] = SubMenu;
	module.exports = exports['default'];

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MenuMixin = __webpack_require__(329);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(330);
	
	var _rcAnimate = __webpack_require__(306);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var SubPopupMenu = _react2['default'].createClass({
	  displayName: 'SubPopupMenu',
	
	  propTypes: {
	    onSelect: _react2['default'].PropTypes.func,
	    onClick: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    onOpenChange: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    openTransitionName: _react2['default'].PropTypes.string,
	    openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.any
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  onDeselect: function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  },
	
	  onSelect: function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  },
	
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	
	  onItemHover: function onItemHover(e) {
	    this.onCommonItemHover(e);
	  },
	
	  getOpenTransitionName: function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  },
	
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(c, props.eventKey, i);
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      open: props.openKeys.indexOf(key) !== -1,
	      selected: props.selectedKeys.indexOf(key) !== -1,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	
	  render: function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = (0, _objectAssign2['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if (typeof props.openAnimation === 'object') {
	      animProps.animation = (0, _objectAssign2['default'])({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      _extends({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear }),
	      this.renderRoot(props)
	    );
	  }
	});
	
	exports['default'] = SubPopupMenu;
	module.exports = exports['default'];

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcUtil = __webpack_require__(289);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	exports['default'] = {
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.mode !== 'inline') {
	      if (this.props.open) {
	        this.bindRootCloseHandlers();
	      } else {
	        this.unbindRootCloseHandlers();
	      }
	    }
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === _rcUtil.KeyCode.ESC) {
	      this.props.onItemHover({
	        key: this.props.eventKey,
	        item: this,
	        hover: false
	      });
	    }
	  },
	
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    if (_rcUtil2['default'].Dom.contains(_reactDom2['default'].findDOMNode(this), e.target)) {
	      return;
	    }
	    var props = this.props;
	    props.onItemHover({
	      hover: false,
	      item: this,
	      key: this.props.eventKey
	    });
	    this.triggerOpenChange(false);
	  },
	
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    if (!this._onDocumentClickListener) {
	      this._onDocumentClickListener = _rcUtil2['default'].Dom.addEventListener(document, 'click', this.handleDocumentClick);
	      this._onDocumentKeyupListener = _rcUtil2['default'].Dom.addEventListener(document, 'keyup', this.handleDocumentKeyUp);
	    }
	  },
	
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	      this._onDocumentClickListener = null;
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	      this._onDocumentKeyupListener = null;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(289);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var MenuItem = _react2['default'].createClass({
	  displayName: 'MenuItem',
	
	  propTypes: {
	    rootPrefixCls: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.string,
	    active: _react2['default'].PropTypes.bool,
	    selected: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    title: _react2['default'].PropTypes.string,
	    onSelect: _react2['default'].PropTypes.func,
	    onClick: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    parentMenu: _react2['default'].PropTypes.object,
	    onItemHover: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onSelect: function onSelect() {},
	      onMouseEnter: function onMouseEnter() {}
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    if (keyCode === _rcUtil.KeyCode.ENTER) {
	      this.onClick(e);
	      return true;
	    }
	  },
	
	  onMouseLeave: function onMouseLeave() {
	    var _this = this;
	
	    var eventKey = this.props.eventKey;
	    var parentMenu = this.props.parentMenu;
	    parentMenu.menuItemMouseLeaveTimer = setTimeout(function () {
	      if (_this.isMounted() && _this.props.active) {
	        _this.props.onItemHover({
	          key: eventKey,
	          item: _this,
	          hover: false,
	          trigger: 'mouseleave'
	        });
	      }
	    }, 30);
	  },
	
	  onMouseEnter: function onMouseEnter() {
	    var props = this.props;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	    }
	    var eventKey = props.eventKey;
	    props.onItemHover({
	      key: eventKey,
	      item: this,
	      hover: true,
	      trigger: 'mouseenter'
	    });
	  },
	
	  onClick: function onClick(e) {
	    var props = this.props;
	    var eventKey = props.eventKey;
	    var info = {
	      key: eventKey,
	      keyPath: [eventKey],
	      item: this,
	      domEvent: e
	    };
	    props.onClick(info);
	    if (props.multiple) {
	      if (props.selected) {
	        props.onDeselect(info);
	      } else {
	        props.onSelect(info);
	      }
	    } else if (!props.selected) {
	      props.onSelect(info);
	    }
	  },
	
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  },
	
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	
	  render: function render() {
	    var props = this.props;
	    var classes = {};
	    classes[this.getActiveClassName()] = !props.disabled && props.active;
	    classes[this.getSelectedClassName()] = props.selected;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getPrefixCls()] = true;
	    classes[props.className] = !!props.className;
	    var attrs = _extends({}, props.attribute, {
	      title: props.title,
	      className: (0, _classnames2['default'])(classes),
	      role: 'menuitem',
	      'aria-selected': props.selected,
	      'aria-disabled': props.disabled
	    });
	    var mouseEvent = {};
	    if (!props.disabled) {
	      mouseEvent = {
	        onClick: this.onClick,
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = _extends({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2['default'].createElement(
	      'li',
	      _extends({ style: style
	      }, attrs, mouseEvent),
	      props.children
	    );
	  }
	});
	
	exports['default'] = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var MenuItemGroup = _react2['default'].createClass({
	  displayName: 'MenuItemGroup',
	
	  propTypes: {
	    renderMenuItem: _react.PropTypes.func,
	    index: _react.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	
	  renderInnerMenuItem: function renderInnerMenuItem(item, subIndex) {
	    var renderMenuItem = this.props.renderMenuItem;
	    return renderMenuItem(item, this.props.index, subIndex);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var className = props.className || '';
	    var rootPrefixCls = props.rootPrefixCls;
	
	    className += ' ' + rootPrefixCls + '-item-group';
	    var titleClassName = rootPrefixCls + '-item-group-title';
	    var listClassName = rootPrefixCls + '-item-group-list';
	    return _react2['default'].createElement(
	      'li',
	      { className: className },
	      _react2['default'].createElement(
	        'div',
	        { className: titleClassName },
	        props.title
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { className: listClassName },
	        _react2['default'].Children.map(props.children, this.renderInnerMenuItem)
	      )
	    );
	  }
	});
	
	MenuItemGroup.isMenuItemGroup = true;
	
	exports['default'] = MenuItemGroup;
	module.exports = exports['default'];

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Divider = _react2['default'].createClass({
	  displayName: 'Divider',
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	
	  render: function render() {
	    var props = this.props;
	    var className = props.className || '';
	    var rootPrefixCls = props.rootPrefixCls;
	    className += ' ' + (rootPrefixCls + '-item-divider');
	    return _react2['default'].createElement('li', _extends({}, props, { className: className }));
	  }
	});
	
	exports['default'] = Divider;
	module.exports = exports['default'];

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _rcTrigger = __webpack_require__(339);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _DropdownMenu = __webpack_require__(345);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  }
	};
	
	var SelectTrigger = _react2['default'].createClass({
	  displayName: 'SelectTrigger',
	
	  propTypes: {
	    dropdownMatchSelectWidth: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    filterOption: _react.PropTypes.any,
	    options: _react.PropTypes.any,
	    prefixCls: _react.PropTypes.string,
	    popupClassName: _react.PropTypes.string,
	    children: _react.PropTypes.any
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.dropdownMatchSelectWidth && this.props.visible) {
	      var dropdownDOMNode = this.getPopupDOMNode();
	      if (dropdownDOMNode) {
	        dropdownDOMNode.style.width = _reactDom2['default'].findDOMNode(this).offsetWidth + 'px';
	      }
	    }
	  },
	
	  getInnerMenu: function getInnerMenu() {
	    return this.popupMenu && this.popupMenu.refs.menu;
	  },
	
	  getPopupDOMNode: function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDomNode();
	  },
	
	  getDropdownElement: function getDropdownElement(newProps) {
	    var props = this.props;
	    return _react2['default'].createElement(_DropdownMenu2['default'], _extends({
	      ref: this.saveMenu
	    }, newProps, {
	      prefixCls: this.getDropdownPrefixCls(),
	      onMenuSelect: props.onMenuSelect,
	      onMenuDeselect: props.onMenuDeselect,
	      value: props.value,
	      defaultActiveFirstOption: props.defaultActiveFirstOption,
	      dropdownMenuStyle: props.dropdownMenuStyle
	    }));
	  },
	
	  getDropdownTransitionName: function getDropdownTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
	    }
	    return transitionName;
	  },
	
	  getDropdownPrefixCls: function getDropdownPrefixCls() {
	    return this.props.prefixCls + '-dropdown';
	  },
	
	  saveMenu: function saveMenu(menu) {
	    this.popupMenu = menu;
	  },
	  render: function render() {
	    var _popupClassName;
	
	    var props = this.props;
	    var multiple = props.multiple;
	    var visible = props.visible;
	    var inputValue = props.inputValue;
	
	    var dropdownPrefixCls = this.getDropdownPrefixCls();
	    var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, props.dropdownClassName, !!props.dropdownClassName), _defineProperty(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
	    var search = multiple || props.combobox || !props.showSearch ? null : _react2['default'].createElement(
	      'span',
	      { className: dropdownPrefixCls + '-search' },
	      props.inputElement
	    );
	    var popupElement = this.getDropdownElement({
	      menuItems: props.options,
	      search: search,
	      multiple: multiple,
	      inputValue: inputValue,
	      visible: visible
	    });
	    return _react2['default'].createElement(
	      _rcTrigger2['default'],
	      _extends({}, props, {
	        action: props.disabled ? [] : ['click'],
	        hideAction: props.disabled ? [] : ['blur'],
	        ref: 'trigger',
	        popupPlacement: 'bottomLeft',
	        builtinPlacements: BUILT_IN_PLACEMENTS,
	        prefixCls: dropdownPrefixCls,
	        popupTransitionName: this.getDropdownTransitionName(),
	        onPopupVisibleChange: props.onDropdownVisibleChange,
	        popup: popupElement,
	        popupVisible: visible,
	        popupClassName: (0, _classnames2['default'])(popupClassName),
	        popupStyle: props.dropdownStyle
	      }),
	      props.children
	    );
	  }
	});
	
	exports['default'] = SelectTrigger;
	module.exports = exports['default'];

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(340);

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(289);
	
	var _Popup = __webpack_require__(341);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _utils = __webpack_require__(344);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function noop() {}
	
	function returnEmptyString() {
	  return '';
	}
	
	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
	
	var Trigger = _react2["default"].createClass({
	  displayName: 'Trigger',
	
	  propTypes: {
	    action: _react.PropTypes.any,
	    showAction: _react.PropTypes.any,
	    hideAction: _react.PropTypes.any,
	    getPopupClassNameFromAlign: _react.PropTypes.any,
	    onPopupVisibleChange: _react.PropTypes.func,
	    afterPopupVisibleChange: _react.PropTypes.func,
	    popup: _react.PropTypes.node.isRequired,
	    popupStyle: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    popupClassName: _react.PropTypes.string,
	    popupPlacement: _react.PropTypes.string,
	    builtinPlacements: _react.PropTypes.object,
	    popupTransitionName: _react.PropTypes.string,
	    popupAnimation: _react.PropTypes.any,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    focusDelay: _react.PropTypes.number,
	    blurDelay: _react.PropTypes.number,
	    getPopupContainer: _react.PropTypes.func,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    popupAlign: _react.PropTypes.object,
	    popupVisible: _react.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-trigger-popup',
	      getPopupClassNameFromAlign: returnEmptyString,
	      onPopupVisibleChange: noop,
	      afterPopupVisibleChange: noop,
	      popupClassName: '',
	      mouseEnterDelay: 0,
	      mouseLeaveDelay: 0.1,
	      focusDelay: 0,
	      blurDelay: 0.15,
	      popupStyle: {},
	      destroyPopupOnHide: false,
	      popupAlign: {},
	      defaultPopupVisible: false,
	      action: [],
	      showAction: [],
	      hideAction: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }
	    return {
	      popupVisible: popupVisible
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('popupVisible' in nextProps) {
	      this.setState({
	        popupVisible: !!nextProps.popupVisible
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var _this = this;
	
	    var props = this.props;
	    var state = this.state;
	    if (this.popupRendered) {
	      var _ret = function () {
	        var self = _this;
	        _reactDom2["default"].unstable_renderSubtreeIntoContainer(_this, _this.getPopupElement(), _this.getPopupContainer(), function renderPopup() {
	          /* eslint react/no-is-mounted:0 */
	          if (this.isMounted()) {
	            self.popupDomNode = (0, _reactDom.findDOMNode)(this);
	          } else {
	            self.popupDomNode = null;
	          }
	          if (prevState.popupVisible !== state.popupVisible) {
	            props.afterPopupVisibleChange(state.popupVisible);
	          }
	        });
	        if (props.action.indexOf('click') !== -1) {
	          if (state.popupVisible) {
	            if (!_this.clickOutsideHandler) {
	              _this.clickOutsideHandler = _rcUtil.Dom.addEventListener(document, 'mousedown', _this.onDocumentClick);
	              _this.touchOutsideHandler = _rcUtil.Dom.addEventListener(document, 'touchstart', _this.onDocumentClick);
	            }
	            return {
	              v: void 0
	            };
	          }
	        }
	        if (_this.clickOutsideHandler) {
	          _this.clickOutsideHandler.remove();
	          _this.touchOutsideHandler.remove();
	          _this.clickOutsideHandler = null;
	          _this.touchOutsideHandler = null;
	        }
	      }();
	
	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var popupContainer = this.popupContainer;
	    if (popupContainer) {
	      _reactDom2["default"].unmountComponentAtNode(popupContainer);
	      if (this.props.getPopupContainer) {
	        var mountNode = this.props.getPopupContainer((0, _reactDom.findDOMNode)(this));
	        mountNode.removeChild(popupContainer);
	      } else {
	        document.body.removeChild(popupContainer);
	      }
	      this.popupContainer = null;
	    }
	    this.clearDelayTimer();
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	  onMouseEnter: function onMouseEnter() {
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  },
	  onMouseLeave: function onMouseLeave() {
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onFocus: function onFocus() {
	    this.focusTime = Date.now();
	    this.delaySetPopupVisible(true, this.props.focusDelay);
	  },
	  onMouseDown: function onMouseDown() {
	    this.preClickTime = Date.now();
	  },
	  onTouchStart: function onTouchStart() {
	    this.preTouchTime = Date.now();
	  },
	  onBlur: function onBlur() {
	    this.delaySetPopupVisible(false, this.props.blurDelay);
	  },
	  onClick: function onClick(event) {
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  },
	  onDocumentClick: function onDocumentClick(event) {
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!_rcUtil.Dom.contains(root, target) && !_rcUtil.Dom.contains(popupNode, target)) {
	      this.setPopupVisible(false);
	    }
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    // for test
	    return this.popupDomNode;
	  },
	  getPopupContainer: function getPopupContainer() {
	    if (!this.popupContainer) {
	      this.popupContainer = document.createElement('div');
	      if (this.props.getPopupContainer) {
	        var mountNode = this.props.getPopupContainer((0, _reactDom.findDOMNode)(this));
	        mountNode.appendChild(this.popupContainer);
	      } else {
	        document.body.appendChild(this.popupContainer);
	      }
	    }
	    return this.popupContainer;
	  },
	  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var builtinPlacements = props.builtinPlacements;
	    var prefixCls = props.prefixCls;
	
	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  },
	  getPopupAlign: function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var popupAlign = props.popupAlign;
	    var builtinPlacements = props.builtinPlacements;
	
	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  },
	  getPopupElement: function getPopupElement() {
	    var props = this.props;
	    var state = this.state;
	    var mouseProps = {};
	    if (props.action.indexOf('hover') !== -1) {
	      mouseProps.onMouseEnter = this.onMouseEnter;
	      mouseProps.onMouseLeave = this.onMouseLeave;
	    }
	    return _react2["default"].createElement(
	      _Popup2["default"],
	      _extends({
	        prefixCls: props.prefixCls,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: this.getPopupAlign(),
	        animation: props.popupAnimation,
	        getClassNameFromAlign: this.getPopupClassNameFromAlign
	      }, mouseProps, {
	        wrap: this,
	        style: props.popupStyle,
	        transitionName: props.popupTransitionName
	      }),
	      props.popup
	    );
	  },
	  setPopupVisible: function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  },
	  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
	    var _this2 = this;
	
	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this2.setPopupVisible(visible);
	        _this2.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  },
	  clearDelayTimer: function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  },
	  isClickToShow: function isClickToShow() {
	    var _props = this.props;
	    var action = _props.action;
	    var showAction = _props.showAction;
	
	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  },
	  isClickToHide: function isClickToHide() {
	    var _props2 = this.props;
	    var action = _props2.action;
	    var hideAction = _props2.hideAction;
	
	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  },
	  isMouseEnterToShow: function isMouseEnterToShow() {
	    var _props3 = this.props;
	    var action = _props3.action;
	    var showAction = _props3.showAction;
	
	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  },
	  isMouseLeaveToHide: function isMouseLeaveToHide() {
	    var _props4 = this.props;
	    var action = _props4.action;
	    var hideAction = _props4.hideAction;
	
	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  },
	  isFocusToShow: function isFocusToShow() {
	    var _props5 = this.props;
	    var action = _props5.action;
	    var showAction = _props5.showAction;
	
	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  },
	  isBlurToHide: function isBlurToHide() {
	    var _props6 = this.props;
	    var action = _props6.action;
	    var hideAction = _props6.hideAction;
	
	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  },
	  render: function render() {
	    this.popupRendered = this.popupRendered || this.state.popupVisible;
	    var props = this.props;
	    var children = props.children;
	    var child = _react2["default"].Children.only(children);
	    var childProps = child.props || {};
	    var newChildProps = {};
	
	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = (0, _rcUtil.createChainedFunction)(this.onClick, childProps.onClick);
	      newChildProps.onMouseDown = (0, _rcUtil.createChainedFunction)(this.onMouseDown, childProps.onMouseDown);
	      newChildProps.onTouchStart = (0, _rcUtil.createChainedFunction)(this.onTouchStart, childProps.onTouchStart);
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = (0, _rcUtil.createChainedFunction)(this.onMouseEnter, childProps.onMouseEnter);
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = (0, _rcUtil.createChainedFunction)(this.onMouseLeave, childProps.onMouseLeave);
	    }
	    if (this.isFocusToShow()) {
	      newChildProps.onFocus = (0, _rcUtil.createChainedFunction)(this.onFocus, childProps.onFocus);
	    }
	    if (this.isBlurToHide()) {
	      newChildProps.onBlur = (0, _rcUtil.createChainedFunction)(this.onBlur, childProps.onBlur);
	    }
	
	    ALL_HANDLERS.forEach(function (handler) {
	      var newFn = void 0;
	      if (props[handler] && newChildProps[handler]) {
	        newFn = (0, _rcUtil.createChainedFunction)(props[handler], newChildProps[handler]);
	      } else {
	        newFn = props[handler] || newChildProps[handler];
	      }
	      if (newFn) {
	        newChildProps[handler] = newFn;
	      }
	    });
	
	    return _react2["default"].cloneElement(child, newChildProps);
	  }
	});
	
	exports["default"] = Trigger;
	module.exports = exports['default'];

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAlign = __webpack_require__(279);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(306);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _PopupInner = __webpack_require__(342);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var Popup = _react2["default"].createClass({
	  displayName: 'Popup',
	
	  propTypes: {
	    visible: _react.PropTypes.bool,
	    wrap: _react.PropTypes.object,
	    style: _react.PropTypes.object,
	    getClassNameFromAlign: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    align: _react.PropTypes.any,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseLeave: _react.PropTypes.func
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  },
	  onAlign: function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    return _reactDom2["default"].findDOMNode(this);
	  },
	  getTarget: function getTarget() {
	    return _reactDom2["default"].findDOMNode(this.props.wrap);
	  },
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	  getClassName: function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  },
	  render: function render() {
	    var props = this.props;
	    var align = props.align;
	    var style = props.style;
	    var visible = props.visible;
	    var prefixCls = props.prefixCls;
	    var destroyPopupOnHide = props.destroyPopupOnHide;
	
	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    if (destroyPopupOnHide) {
	      return _react2["default"].createElement(
	        _rcAnimate2["default"],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName()
	        },
	        visible ? _react2["default"].createElement(
	          _rcAlign2["default"],
	          {
	            target: this.getTarget,
	            key: 'popup',
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2["default"].createElement(
	            _PopupInner2["default"],
	            {
	              className: className,
	              prefixCls: prefixCls,
	              visible: true,
	              onMouseEnter: props.onMouseEnter,
	              onMouseLeave: props.onMouseLeave,
	              style: style
	            },
	            props.children
	          )
	        ) : null
	      );
	    }
	    return _react2["default"].createElement(
	      _rcAnimate2["default"],
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible'
	      },
	      _react2["default"].createElement(
	        _rcAlign2["default"],
	        {
	          target: this.getTarget,
	          key: 'popup',
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        _react2["default"].createElement(
	          _PopupInner2["default"],
	          {
	            className: className,
	            hiddenClassName: hiddenClassName,
	            prefixCls: prefixCls,
	            onMouseEnter: props.onMouseEnter,
	            onMouseLeave: props.onMouseLeave,
	            style: style
	          },
	          props.children
	        )
	      )
	    );
	  }
	});
	
	exports["default"] = Popup;
	module.exports = exports['default'];

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LazyRenderBox = __webpack_require__(343);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var PopupInner = _react2["default"].createClass({
	  displayName: 'PopupInner',
	
	  propTypes: {
	    hiddenClassName: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    children: _react.PropTypes.any
	  },
	  render: function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2["default"].createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: props.style
	      },
	      _react2["default"].createElement(
	        _LazyRenderBox2["default"],
	        { prefixCls: props.prefixCls, visible: props.visible },
	        props.children
	      )
	    );
	  }
	});
	
	exports["default"] = PopupInner;
	module.exports = exports['default'];

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var LazyRenderBox = _react2["default"].createClass({
	  displayName: 'LazyRenderBox',
	
	  propTypes: {
	    children: _react.PropTypes.any,
	    visible: _react.PropTypes.bool,
	    prefixCls: _react.PropTypes.string
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.visible;
	  },
	  render: function render() {
	    if (_react2["default"].Children.count(this.props.children) > 1) {
	      return _react2["default"].createElement(
	        'div',
	        { className: this.props.prefixCls + '-content' },
	        this.props.children
	      );
	    }
	    return _react2["default"].Children.only(this.props.children);
	  }
	});
	
	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },
/* 344 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}
	
	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends({}, baseAlign, align);
	}
	
	function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _util = __webpack_require__(326);
	
	var _rcMenu = __webpack_require__(327);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	var _domScrollIntoView = __webpack_require__(271);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var DropdownMenu = _react2['default'].createClass({
	  displayName: 'DropdownMenu',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    menuItems: _react.PropTypes.any,
	    search: _react.PropTypes.any,
	    inputValue: _react.PropTypes.string,
	    visible: _react.PropTypes.bool
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.lastInputValue = this.props.inputValue;
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.scrollActiveItemToView();
	    this.lastVisible = this.props.visible;
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    if (!nextProps.visible) {
	      this.lastVisible = false;
	    }
	    // freeze when hide
	    return nextProps.visible;
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (!prevProps.visible && props.visible) {
	      this.scrollActiveItemToView();
	    }
	    this.lastVisible = props.visible;
	    this.lastInputValue = props.inputValue;
	  },
	
	  scrollActiveItemToView: function scrollActiveItemToView() {
	    // scroll into view
	    var itemComponent = (0, _reactDom.findDOMNode)(this.firstActiveItem);
	    if (itemComponent) {
	      (0, _domScrollIntoView2['default'])(itemComponent, (0, _reactDom.findDOMNode)(this.refs.menu), {
	        onlyScrollIfNeeded: true
	      });
	    }
	  },
	
	  renderMenu: function renderMenu() {
	    var _this = this;
	
	    var props = this.props;
	    var menuItems = props.menuItems;
	    var defaultActiveFirstOption = props.defaultActiveFirstOption;
	    var value = props.value;
	    var dropdownMenuStyle = props.dropdownMenuStyle;
	    var prefixCls = props.prefixCls;
	    var multiple = props.multiple;
	    var onMenuDeselect = props.onMenuDeselect;
	    var onMenuSelect = props.onMenuSelect;
	    var inputValue = props.inputValue;
	
	    if (menuItems && menuItems.length) {
	      var _ret = (function () {
	        var menuProps = {};
	        if (multiple) {
	          menuProps.onDeselect = onMenuDeselect;
	          menuProps.onSelect = onMenuSelect;
	        } else {
	          menuProps.onClick = onMenuSelect;
	        }
	
	        var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
	        var activeKeyProps = {};
	
	        var clonedMenuItems = menuItems;
	        if (selectedKeys.length) {
	          (function () {
	            if (props.visible && !_this.lastVisible) {
	              activeKeyProps.activeKey = selectedKeys[0];
	            }
	            var foundFirst = false;
	            // set firstActiveItem via cloning menus
	            // for scroll into view
	            var clone = function clone(item) {
	              if (!foundFirst && selectedKeys.indexOf(item.key) !== -1) {
	                foundFirst = true;
	                return (0, _react.cloneElement)(item, {
	                  ref: function ref(_ref) {
	                    _this.firstActiveItem = _ref;
	                  }
	                });
	              }
	              return item;
	            };
	
	            clonedMenuItems = menuItems.map(function (item) {
	              if (item.type === _rcMenu.ItemGroup) {
	                var children = item.props.children.map(clone);
	                return (0, _react.cloneElement)(item, {}, children);
	              }
	              return clone(item);
	            });
	          })();
	        }
	
	        // clear activeKey when inputValue change
	        if (inputValue !== _this.lastInputValue) {
	          activeKeyProps.activeKey = '';
	        }
	
	        return {
	          v: _react2['default'].createElement(
	            _rcMenu2['default'],
	            _extends({
	              ref: 'menu',
	              defaultActiveFirst: defaultActiveFirstOption,
	              style: dropdownMenuStyle
	            }, activeKeyProps, {
	              multiple: multiple,
	              focusable: false
	            }, menuProps, {
	              selectedKeys: selectedKeys,
	              prefixCls: prefixCls + '-menu' }),
	            clonedMenuItems
	          )
	        };
	      })();
	
	      if (typeof _ret === 'object') return _ret.v;
	    }
	    return null;
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      this.props.search,
	      _react2['default'].createElement(
	        'div',
	        { onMouseDown: _util.preventDefaultEvent },
	        this.renderMenu()
	      )
	    );
	  }
	});
	
	exports['default'] = DropdownMenu;
	module.exports = exports['default'];

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _OptGroup = __webpack_require__(325);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _util = __webpack_require__(326);
	
	var _rcMenu = __webpack_require__(327);
	
	exports['default'] = {
	  filterOption: function filterOption(input, child) {
	    if (!input) {
	      return true;
	    }
	    var filterOption = this.props.filterOption;
	    if (!filterOption) {
	      return true;
	    }
	    if (child.props.disabled) {
	      return false;
	    }
	    return filterOption.call(this, input, child);
	  },
	  renderFilterOptions: function renderFilterOptions(inputValue) {
	    return this.renderFilterOptionsFromChildren(this.props.children, true, inputValue);
	  },
	
	  renderFilterOptionsFromChildren: function renderFilterOptionsFromChildren(children, showNotFound, iv) {
	    var _this = this;
	
	    var sel = [];
	    var props = this.props;
	    var inputValue = iv === undefined ? this.state.inputValue : iv;
	    var childrenKeys = [];
	    var tags = props.tags;
	    _react2['default'].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2['default']) {
	        var innerItems = _this.renderFilterOptionsFromChildren(child.props.children, false);
	        if (innerItems.length) {
	          var label = child.props.label;
	          var key = child.key;
	          if (!key && typeof label === 'string') {
	            key = label;
	          } else if (!label && key) {
	            label = key;
	          }
	          sel.push(_react2['default'].createElement(
	            _rcMenu.ItemGroup,
	            { key: key, title: label },
	            innerItems
	          ));
	        }
	        return;
	      }
	      var childValue = (0, _util.getValuePropValue)(child);
	      if (_this.filterOption(inputValue, child)) {
	        sel.push(_react2['default'].createElement(_rcMenu.Item, _extends({
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          value: childValue,
	          key: childValue
	        }, child.props)));
	      }
	      if (tags && !child.props.disabled) {
	        childrenKeys.push(childValue);
	      }
	    });
	    if (tags) {
	      // tags value must be string
	      var value = this.state.value || [];
	      value = value.filter(function (singleValue) {
	        return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
	      });
	      sel = sel.concat(value.map(function (singleValue) {
	        return _react2['default'].createElement(
	          _rcMenu.Item,
	          {
	            style: _util.UNSELECTABLE_STYLE,
	            attribute: _util.UNSELECTABLE_ATTRIBUTE,
	            value: singleValue,
	            key: singleValue
	          },
	          singleValue
	        );
	      }));
	      if (inputValue) {
	        var notFindInputItem = sel.every(function (option) {
	          return (0, _util.getValuePropValue)(option) !== inputValue;
	        });
	        if (notFindInputItem) {
	          sel.unshift(_react2['default'].createElement(
	            _rcMenu.Item,
	            {
	              style: _util.UNSELECTABLE_STYLE,
	              attribute: _util.UNSELECTABLE_ATTRIBUTE,
	              value: inputValue,
	              key: inputValue
	            },
	            inputValue
	          ));
	        }
	      }
	    }
	    if (!sel.length && showNotFound && props.notFoundContent) {
	      sel = [_react2['default'].createElement(
	        _rcMenu.Item,
	        {
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          disabled: true,
	          value: 'NOT_FOUND',
	          key: 'NOT_FOUND'
	        },
	        props.notFoundContent
	      )];
	    }
	    return sel;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Option = (function (_React$Component) {
	  _inherits(Option, _React$Component);
	
	  function Option() {
	    _classCallCheck(this, Option);
	
	    _get(Object.getPrototypeOf(Option.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  return Option;
	})(_react2['default'].Component);
	
	exports['default'] = Option;
	module.exports = exports['default'];

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcCalendar = __webpack_require__(349);
	
	var _rcCalendar2 = _interopRequireDefault(_rcCalendar);
	
	var _MonthCalendar = __webpack_require__(374);
	
	var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);
	
	var _Picker = __webpack_require__(375);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	var _gregorianCalendar = __webpack_require__(351);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _zh_CN = __webpack_require__(377);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _RangePicker = __webpack_require__(379);
	
	var _RangePicker2 = _interopRequireDefault(_RangePicker);
	
	var _PickerMixin = __webpack_require__(393);
	
	var _PickerMixin2 = _interopRequireDefault(_PickerMixin);
	
	var _rcTimePicker = __webpack_require__(382);
	
	var _rcTimePicker2 = _interopRequireDefault(_rcTimePicker);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function createPicker(TheCalendar, defaultFormat) {
	  return _react2.default.createClass({
	    getDefaultProps: function getDefaultProps() {
	      return {
	        format: defaultFormat || 'yyyy-MM-dd',
	        transitionName: 'slide-up',
	        popupStyle: {},
	        onChange: function onChange() {},
	        onOk: function onOk() {},
	
	        locale: {},
	        align: {
	          offset: [0, -9]
	        },
	        open: false
	      };
	    },
	    getInitialState: function getInitialState() {
	      return {
	        value: this.parseDateFromValue(this.props.value || this.props.defaultValue)
	      };
	    },
	
	    mixins: [_PickerMixin2.default],
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	      if ('value' in nextProps) {
	        this.setState({
	          value: this.parseDateFromValue(nextProps.value)
	        });
	      }
	    },
	    handleChange: function handleChange(value) {
	      if (!('value' in this.props)) {
	        this.setState({ value: value });
	      }
	      var timeValue = value ? new Date(value.getTime()) : null;
	      this.props.onChange(timeValue);
	    },
	    render: function render() {
	      var _classNames,
	          _this = this;
	
	      var locale = this.getLocale();
	      // 以下两行代码
	      // 给没有初始值的日期选择框提供本地化信息
	      // 否则会以周日开始排
	      var defaultCalendarValue = new _gregorianCalendar2.default(locale);
	      defaultCalendarValue.setTime(Date.now());
	
	      var placeholder = 'placeholder' in this.props ? this.props.placeholder : locale.lang.placeholder;
	
	      var timePicker = this.props.showTime ? _react2.default.createElement(_rcTimePicker2.default, {
	        prefixCls: 'ant-time-picker',
	        placeholder: locale.lang.timePlaceholder,
	        transitionName: 'slide-up' }) : null;
	
	      var disabledTime = this.props.showTime ? this.props.disabledTime : null;
	
	      var calendarClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'ant-calendar-time', this.props.showTime), _defineProperty(_classNames, 'ant-calendar-month', _MonthCalendar2.default === TheCalendar), _classNames));
	
	      var pickerChangeHandler = {
	        onChange: this.handleChange
	      };
	
	      var calendarHandler = {
	        onOk: this.handleChange
	      };
	
	      if (this.props.showTime) {
	        pickerChangeHandler.onChange = function (value) {
	          // Click clear button
	          if (value === null) {
	            _this.handleChange(value);
	          }
	        };
	      } else {
	        calendarHandler = {};
	      }
	
	      var calendar = _react2.default.createElement(TheCalendar, _extends({
	        disabledDate: this.props.disabledDate,
	        disabledTime: disabledTime,
	        locale: locale.lang,
	        timePicker: timePicker,
	        defaultValue: defaultCalendarValue,
	        dateInputPlaceholder: placeholder,
	        prefixCls: 'ant-calendar',
	        className: calendarClassName
	      }, calendarHandler));
	
	      var sizeClass = '';
	      if (this.props.size === 'large') {
	        sizeClass = ' ant-input-lg';
	      } else if (this.props.size === 'small') {
	        sizeClass = ' ant-input-sm';
	      }
	
	      var pickerClass = 'ant-calendar-picker';
	      if (this.state.open) {
	        pickerClass += ' ant-calendar-picker-open';
	      }
	      return _react2.default.createElement(
	        'span',
	        { className: pickerClass, style: this.props.style },
	        _react2.default.createElement(
	          _Picker2.default,
	          _extends({
	            transitionName: this.props.transitionName,
	            disabled: this.props.disabled,
	            calendar: calendar,
	            value: this.state.value,
	            prefixCls: 'ant-calendar-picker-container',
	            style: this.props.popupStyle,
	            align: this.props.align,
	            getCalendarContainer: this.props.getCalendarContainer,
	            onOpen: this.toggleOpen,
	            onClose: this.toggleOpen
	          }, pickerChangeHandler),
	          function (_ref) {
	            var value = _ref.value;
	
	            return _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement('input', {
	                disabled: _this.props.disabled,
	                onChange: _this.handleInputChange,
	                value: value && _this.getFormatter().format(value),
	                placeholder: placeholder,
	                className: 'ant-calendar-picker-input ant-input' + sizeClass }),
	              _react2.default.createElement('span', { className: 'ant-calendar-picker-icon' })
	            );
	          }
	        )
	      );
	    }
	  });
	}
	
	var AntDatePicker = createPicker(_rcCalendar2.default);
	var AntMonthPicker = createPicker(_MonthCalendar2.default, 'yyyy-MM');
	
	var AntCalendar = _react2.default.createClass({
	  displayName: 'AntCalendar',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      locale: _zh_CN2.default,
	      prefixCls: 'ant-calendar'
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(_rcCalendar2.default, this.props);
	  }
	});
	
	AntDatePicker.Calendar = AntCalendar;
	AntDatePicker.RangePicker = _RangePicker2.default;
	AntDatePicker.MonthPicker = AntMonthPicker;
	
	exports.default = AntDatePicker;
	module.exports = exports['default'];

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Calendar = __webpack_require__(350);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Calendar2.default;
	module.exports = exports['default'];

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gregorianCalendar = __webpack_require__(351);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _rcUtil = __webpack_require__(289);
	
	var _DateTable = __webpack_require__(355);
	
	var _DateTable2 = _interopRequireDefault(_DateTable);
	
	var _CalendarHeader = __webpack_require__(362);
	
	var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);
	
	var _CalendarFooter = __webpack_require__(367);
	
	var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);
	
	var _CalendarMixin = __webpack_require__(370);
	
	var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);
	
	var _CommonMixin = __webpack_require__(371);
	
	var _CommonMixin2 = _interopRequireDefault(_CommonMixin);
	
	var _DateInput = __webpack_require__(373);
	
	var _DateInput2 = _interopRequireDefault(_DateInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function noop() {}
	
	function goStartMonth() {
	  var next = this.state.value.clone();
	  next.setDayOfMonth(1);
	  this.setValue(next);
	}
	
	function goEndMonth() {
	  var next = this.state.value.clone();
	  next.setDayOfMonth(next.getActualMaximum(_gregorianCalendar2.default.MONTH));
	  this.setValue(next);
	}
	
	function goMonth(direction) {
	  var next = this.state.value.clone();
	  next.addMonth(direction);
	  this.setValue(next);
	}
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setValue(next);
	}
	
	function goWeek(direction) {
	  var next = this.state.value.clone();
	  next.addWeekOfYear(direction);
	  this.setValue(next);
	}
	
	function goDay(direction) {
	  var next = this.state.value.clone();
	  next.addDayOfMonth(direction);
	  this.setValue(next);
	}
	
	var Calendar = _react2.default.createClass({
	  displayName: 'Calendar',
	
	  propTypes: {
	    disabledDate: _react.PropTypes.func,
	    disabledTime: _react.PropTypes.any,
	    value: _react.PropTypes.object,
	    selectedValue: _react.PropTypes.object,
	    defaultValue: _react.PropTypes.object,
	    className: _react.PropTypes.string,
	    locale: _react.PropTypes.object,
	    showWeekNumber: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    showToday: _react.PropTypes.bool,
	    showDateInput: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    onSelect: _react.PropTypes.func,
	    onOk: _react.PropTypes.func,
	    showOk: _react.PropTypes.bool,
	    prefixCls: _react.PropTypes.string,
	    onKeyDown: _react.PropTypes.func,
	    timePicker: _react.PropTypes.element,
	    dateInputPlaceholder: _react.PropTypes.any,
	    onClear: _react.PropTypes.func,
	    onChange: _react.PropTypes.func
	  },
	
	  mixins: [_CommonMixin2.default, _CalendarMixin2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      showToday: true,
	      showDateInput: true,
	      timePicker: null,
	      onOk: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    // bind methods
	    this.nextMonth = goMonth.bind(this, 1);
	    this.previousMonth = goMonth.bind(this, -1);
	    this.nextYear = goYear.bind(this, 1);
	    this.previousYear = goYear.bind(this, -1);
	    return {};
	  },
	  onKeyDown: function onKeyDown(event) {
	    if (event.target.nodeName.toLowerCase() === 'input') {
	      return undefined;
	    }
	    var keyCode = event.keyCode;
	    // mac
	    var ctrlKey = event.ctrlKey || event.metaKey;
	    switch (keyCode) {
	      case _rcUtil.KeyCode.DOWN:
	        goWeek.call(this, 1);
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.UP:
	        goWeek.call(this, -1);
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.LEFT:
	        if (ctrlKey) {
	          this.previousYear();
	        } else {
	          goDay.call(this, -1);
	        }
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.RIGHT:
	        if (ctrlKey) {
	          this.nextYear();
	        } else {
	          goDay.call(this, 1);
	        }
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.HOME:
	        goStartMonth.call(this);
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.END:
	        goEndMonth.call(this);
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.PAGE_DOWN:
	        this.nextMonth();
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.PAGE_UP:
	        this.previousMonth();
	        event.preventDefault();
	        return 1;
	      case _rcUtil.KeyCode.ENTER:
	        this.onSelect(this.state.value);
	        event.preventDefault();
	        return 1;
	      default:
	        this.props.onKeyDown(event);
	        return 1;
	    }
	  },
	  onClear: function onClear() {
	    this.onSelect(null);
	    this.props.onClear();
	  },
	  onOk: function onOk() {
	    var selectedValue = this.state.selectedValue;
	
	    if (this.isAllowedDate(selectedValue)) {
	      this.props.onOk(selectedValue);
	    }
	  },
	  onDateInputChange: function onDateInputChange(value) {
	    this.onSelect(value, {
	      source: 'dateInput'
	    });
	  },
	  onDateTableSelect: function onDateTableSelect(value) {
	    this.onSelect(value);
	  },
	  chooseToday: function chooseToday() {
	    var today = this.state.value.clone();
	    today.setTime(Date.now());
	    this.onSelect(today);
	  },
	  render: function render() {
	    var props = this.props;
	    var locale = props.locale;
	    var prefixCls = props.prefixCls;
	    var disabledDate = props.disabledDate;
	    var dateInputPlaceholder = props.dateInputPlaceholder;
	    var timePicker = props.timePicker;
	    var disabledTime = props.disabledTime;
	
	    var state = this.state;
	    var value = state.value;
	    var selectedValue = state.selectedValue;
	
	    var dateInputElement = props.showDateInput ? _react2.default.createElement(_DateInput2.default, {
	      formatter: this.getFormatter(),
	      key: 'date-input',
	      timePicker: timePicker,
	      gregorianCalendarLocale: value.locale,
	      locale: locale,
	      placeholder: dateInputPlaceholder,
	      showClear: true,
	      disabledTime: disabledTime,
	      disabledDate: disabledDate,
	      onClear: this.onClear,
	      prefixCls: prefixCls,
	      selectedValue: selectedValue,
	      onChange: this.onDateInputChange
	    }) : null;
	    var children = [dateInputElement, _react2.default.createElement(
	      'div',
	      {
	        key: 'date-panel',
	        className: prefixCls + '-date-panel'
	      },
	      _react2.default.createElement(_CalendarHeader2.default, {
	        locale: locale,
	        onValueChange: this.setValue,
	        value: value,
	        prefixCls: prefixCls
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-calendar-body' },
	        _react2.default.createElement(_DateTable2.default, {
	          locale: locale,
	          value: value,
	          selectedValue: selectedValue,
	          prefixCls: prefixCls,
	          dateRender: props.dateRender,
	          onSelect: this.onDateTableSelect,
	          disabledDate: disabledDate,
	          showWeekNumber: props.showWeekNumber
	        })
	      ),
	      _react2.default.createElement(_CalendarFooter2.default, {
	        showOk: props.showOk,
	        locale: locale,
	        prefixCls: prefixCls,
	        showToday: props.showToday,
	        disabledTime: disabledTime,
	        gregorianCalendarLocale: value.locale,
	        showDateInput: props.showDateInput,
	        timePicker: timePicker,
	        selectedValue: selectedValue,
	        value: value,
	        disabledDate: disabledDate,
	        onOk: this.onOk,
	        onSelect: this.onSelect,
	        onToday: this.chooseToday
	      })
	    )];
	
	    return this.renderRoot({
	      children: children,
	      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
	    });
	  }
	});
	
	exports.default = Calendar;
	module.exports = exports['default'];

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * GregorianCalendar class
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	'use strict';
	
	var toInt = parseInt;
	var Utils = __webpack_require__(352);
	var defaultLocale = __webpack_require__(354);
	var Const = __webpack_require__(353);
	
	/*
	 * GregorianCalendar class.
	 *
	 * - no arguments:
	 *   Constructs a default GregorianCalendar using the current time
	 *   in the default time zone with the default locale.
	 * - one argument locale:
	 *   Constructs a GregorianCalendar
	 *   based on the current time in the default time zone with the given locale.
	 *
	 * @class Date.Gregorian
	 */
	function GregorianCalendar(loc) {
	  var locale = loc || defaultLocale;
	
	  this.locale = locale;
	
	  this.fields = [];
	
	  /*
	   * The currently set time for this date.
	   * @protected
	   * @type Number|undefined
	   */
	  this.time = undefined;
	  /*
	   * The timezoneOffset in minutes used by this date.
	   * @type Number
	   * @protected
	   */
	
	  this.timezoneOffset = locale.timezoneOffset;
	
	  /*
	   * The first day of the week
	   * @type Number
	   * @protected
	   */
	  this.firstDayOfWeek = locale.firstDayOfWeek;
	
	  /*
	   * The number of days required for the first week in a month or year,
	   * with possible values from 1 to 7.
	   * @@protected
	   * @type Number
	   */
	  this.minimalDaysInFirstWeek = locale.minimalDaysInFirstWeek;
	
	  this.fieldsComputed = false;
	}
	
	Utils.mix(GregorianCalendar, Const);
	
	Utils.mix(GregorianCalendar, {
	  Utils: Utils,
	
	  defaultLocale: defaultLocale,
	
	  /*
	   * Determines if the given year is a leap year.
	   * Returns true if the given year is a leap year. To specify BC year numbers,
	   * 1 - year number must be given. For example, year BC 4 is specified as -3.
	   * @param {Number} year the given year.
	   * @returns {Boolean} true if the given year is a leap year; false otherwise.
	   * @static
	   * @method
	   */
	  isLeapYear: Utils.isLeapYear,
	
	  /*
	   * Enum indicating year field of date
	   * @type Number
	   */
	  YEAR: 1,
	  /*
	   * Enum indicating month field of date
	   * @type Number
	   */
	  MONTH: 2,
	  /*
	   * Enum indicating the day of the month
	   * @type Number
	   */
	  DAY_OF_MONTH: 3,
	  /*
	   * Enum indicating the hour (24).
	   * @type Number
	   */
	  HOUR_OF_DAY: 4,
	  /*
	   * Enum indicating the minute of the day
	   * @type Number
	   */
	  MINUTES: 5,
	  /*
	   * Enum indicating the second of the day
	   * @type Number
	   */
	  SECONDS: 6,
	  /*
	   * Enum indicating the millisecond of the day
	   * @type Number
	   */
	  MILLISECONDS: 7,
	  /*
	   * Enum indicating the week number within the current year
	   * @type Number
	   */
	  WEEK_OF_YEAR: 8,
	  /*
	   * Enum indicating the week number within the current month
	   * @type Number
	   */
	  WEEK_OF_MONTH: 9,
	
	  /*
	   * Enum indicating the day of the day number within the current year
	   * @type Number
	   */
	  DAY_OF_YEAR: 10,
	  /*
	   * Enum indicating the day of the week
	   * @type Number
	   */
	  DAY_OF_WEEK: 11,
	  /*
	   * Enum indicating the day of the ordinal number of the day of the week
	   * @type Number
	   */
	  DAY_OF_WEEK_IN_MONTH: 12,
	
	  /*
	   * Enum indicating am
	   * @type Number
	   */
	  AM: 0,
	  /*
	   * Enum indicating pm
	   * @type Number
	   */
	  PM: 1
	});
	
	var FIELDS = ['', 'Year', 'Month', 'DayOfMonth', 'HourOfDay', 'Minutes', 'Seconds', 'Milliseconds', 'WeekOfYear', 'WeekOfMonth', 'DayOfYear', 'DayOfWeek', 'DayOfWeekInMonth'];
	
	var YEAR = GregorianCalendar.YEAR;
	var MONTH = GregorianCalendar.MONTH;
	var DAY_OF_MONTH = GregorianCalendar.DAY_OF_MONTH;
	var HOUR_OF_DAY = GregorianCalendar.HOUR_OF_DAY;
	var MINUTE = GregorianCalendar.MINUTES;
	var SECONDS = GregorianCalendar.SECONDS;
	
	var MILLISECONDS = GregorianCalendar.MILLISECONDS;
	var DAY_OF_WEEK_IN_MONTH = GregorianCalendar.DAY_OF_WEEK_IN_MONTH;
	var DAY_OF_YEAR = GregorianCalendar.DAY_OF_YEAR;
	var DAY_OF_WEEK = GregorianCalendar.DAY_OF_WEEK;
	
	var WEEK_OF_MONTH = GregorianCalendar.WEEK_OF_MONTH;
	var WEEK_OF_YEAR = GregorianCalendar.WEEK_OF_YEAR;
	
	var MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based
	var LEAP_MONTH_LENGTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based
	
	var ONE_SECOND = 1000;
	var ONE_MINUTE = 60 * ONE_SECOND;
	var ONE_HOUR = 60 * ONE_MINUTE;
	var ONE_DAY = 24 * ONE_HOUR;
	var ONE_WEEK = ONE_DAY * 7;
	
	var EPOCH_OFFSET = 719163; // Fixed date of January 1, 1970 (Gregorian)
	
	var mod = Utils.mod;
	var _isLeapYear = Utils.isLeapYear;
	var floorDivide = Math.floor;
	
	var MIN_VALUES = [undefined, 1, // YEAR
	GregorianCalendar.JANUARY, // MONTH
	1, // DAY_OF_MONTH
	0, // HOUR_OF_DAY
	0, // MINUTE
	0, // SECONDS
	0, // MILLISECONDS
	
	1, // WEEK_OF_YEAR
	undefined, // WEEK_OF_MONTH
	
	1, // DAY_OF_YEAR
	GregorianCalendar.SUNDAY, // DAY_OF_WEEK
	1];
	
	// DAY_OF_WEEK_IN_MONTH
	var MAX_VALUES = [undefined, 292278994, // YEAR
	GregorianCalendar.DECEMBER, // MONTH
	undefined, // DAY_OF_MONTH
	23, // HOUR_OF_DAY
	59, // MINUTE
	59, // SECONDS
	999, // MILLISECONDS
	undefined, // WEEK_OF_YEAR
	undefined, // WEEK_OF_MONTH
	undefined, // DAY_OF_YEAR
	GregorianCalendar.SATURDAY, // DAY_OF_WEEK
	undefined];
	
	// ------------------- private start
	
	// DAY_OF_WEEK_IN_MONTH
	function getMonthLength(year, month) {
	  return _isLeapYear(year) ? LEAP_MONTH_LENGTH[month] : MONTH_LENGTH[month];
	}
	
	function getYearLength(year) {
	  return _isLeapYear(year) ? 366 : 365;
	}
	
	function adjustDayOfMonth(self) {
	  var fields = self.fields;
	  var year = fields[YEAR];
	  var month = fields[MONTH];
	  var monthLen = getMonthLength(year, month);
	  var dayOfMonth = fields[DAY_OF_MONTH];
	  if (dayOfMonth > monthLen) {
	    self.set(DAY_OF_MONTH, monthLen);
	  }
	}
	
	function getDayOfWeekDateOnOrBefore(fixedDate, dayOfWeek) {
	  // 1.1.1 is monday
	  // one week has 7 days
	  return fixedDate - mod(fixedDate - dayOfWeek, 7);
	}
	
	function getWeekNumber(self, fixedDay1, fixedDate) {
	  var fixedDay1st = getDayOfWeekDateOnOrBefore(fixedDay1 + 6, self.firstDayOfWeek);
	  var nDays = fixedDay1st - fixedDay1;
	  if (nDays >= self.minimalDaysInFirstWeek) {
	    fixedDay1st -= 7;
	  }
	  var normalizedDayOfPeriod = fixedDate - fixedDay1st;
	  return floorDivide(normalizedDayOfPeriod / 7) + 1;
	}
	
	// ------------------- private end
	
	GregorianCalendar.prototype = {
	  constructor: GregorianCalendar,
	
	  isGregorianCalendar: 1,
	
	  /*
	   * Determines if current year is a leap year.
	   * Returns true if the given year is a leap year. To specify BC year numbers,
	   * 1 - year number must be given. For example, year BC 4 is specified as -3.
	   * @returns {Boolean} true if the given year is a leap year; false otherwise.
	   * @method
	   * @member Date.Gregorian
	   */
	  isLeapYear: function isLeapYear() {
	    return _isLeapYear(this.getYear());
	  },
	
	  /*
	   * Return local info for current date instance
	   * @returns {Object}
	   */
	  getLocale: function getLocale() {
	    return this.locale;
	  },
	
	  /*
	   * Returns the minimum value for
	   * the given calendar field of this GregorianCalendar instance.
	   * The minimum value is defined as the smallest value
	   * returned by the get method for any possible time value,
	   * taking into consideration the current values of the getFirstDayOfWeek,
	   * getMinimalDaysInFirstWeek.
	   * @param field the calendar field.
	   * @returns {Number} the minimum value for the given calendar field.
	   */
	  getActualMinimum: function getActualMinimum(field) {
	    if (MIN_VALUES[field] !== undefined) {
	      return MIN_VALUES[field];
	    }
	    if (field === WEEK_OF_MONTH) {
	      var cal = this.clone();
	      cal.clear();
	      cal.set(this.fields[YEAR], this.fields[MONTH], 1);
	      return cal.get(WEEK_OF_MONTH);
	    }
	
	    throw new Error('minimum value not defined!');
	  },
	
	  /*
	   * Returns the maximum value for the given calendar field
	   * of this GregorianCalendar instance.
	   * The maximum value is defined as the largest value returned
	   * by the get method for any possible time value, taking into consideration
	   * the current values of the getFirstDayOfWeek, getMinimalDaysInFirstWeek methods.
	   * @param field the calendar field.
	   * @returns {Number} the maximum value for the given calendar field.
	   */
	  getActualMaximum: function getActualMaximum(field) {
	    if (MAX_VALUES[field] !== undefined) {
	      return MAX_VALUES[field];
	    }
	    var value = undefined;
	    var fields = this.fields;
	    switch (field) {
	      case DAY_OF_MONTH:
	        value = getMonthLength(fields[YEAR], fields[MONTH]);
	        break;
	
	      case WEEK_OF_YEAR:
	        var endOfYear = this.clone();
	        endOfYear.clear();
	        endOfYear.set(fields[YEAR], GregorianCalendar.DECEMBER, 31);
	        value = endOfYear.get(WEEK_OF_YEAR);
	        if (value === 1) {
	          value = 52;
	        }
	        break;
	
	      case WEEK_OF_MONTH:
	        var endOfMonth = this.clone();
	        endOfMonth.clear();
	        endOfMonth.set(fields[YEAR], fields[MONTH], getMonthLength(fields[YEAR], fields[MONTH]));
	        value = endOfMonth.get(WEEK_OF_MONTH);
	        break;
	
	      case DAY_OF_YEAR:
	        value = getYearLength(fields[YEAR]);
	        break;
	
	      case DAY_OF_WEEK_IN_MONTH:
	        value = toInt((getMonthLength(fields[YEAR], fields[MONTH]) - 1) / 7) + 1;
	        break;
	      default:
	        break;
	    }
	    if (value === undefined) {
	      throw new Error('maximum value not defined!');
	    }
	    return value;
	  },
	
	  /*
	   * Determines if the given calendar field has a value set,
	   * including cases that the value has been set by internal fields calculations
	   * triggered by a get method call.
	   * @param field the calendar field to be cleared.
	   * @returns {boolean} true if the given calendar field has a value set; false otherwise.
	   */
	  isSet: function isSet(field) {
	    return this.fields[field] !== undefined;
	  },
	
	  /*
	   * Converts the time value (millisecond offset from the Epoch)
	   * to calendar field values.
	   * @protected
	   */
	  computeFields: function computeFields() {
	    var time = this.time;
	    var timezoneOffset = this.timezoneOffset * ONE_MINUTE;
	    var fixedDate = toInt(timezoneOffset / ONE_DAY);
	    var timeOfDay = timezoneOffset % ONE_DAY;
	    fixedDate += toInt(time / ONE_DAY);
	    timeOfDay += time % ONE_DAY;
	    if (timeOfDay >= ONE_DAY) {
	      timeOfDay -= ONE_DAY;
	      fixedDate++;
	    } else {
	      while (timeOfDay < 0) {
	        timeOfDay += ONE_DAY;
	        fixedDate--;
	      }
	    }
	
	    fixedDate += EPOCH_OFFSET;
	
	    var date = Utils.getGregorianDateFromFixedDate(fixedDate);
	
	    var year = date.year;
	
	    var fields = this.fields;
	    fields[YEAR] = year;
	    fields[MONTH] = date.month;
	    fields[DAY_OF_MONTH] = date.dayOfMonth;
	    fields[DAY_OF_WEEK] = date.dayOfWeek;
	
	    if (timeOfDay !== 0) {
	      fields[HOUR_OF_DAY] = toInt(timeOfDay / ONE_HOUR);
	      var r = timeOfDay % ONE_HOUR;
	      fields[MINUTE] = toInt(r / ONE_MINUTE);
	      r %= ONE_MINUTE;
	      fields[SECONDS] = toInt(r / ONE_SECOND);
	      fields[MILLISECONDS] = r % ONE_SECOND;
	    } else {
	      fields[HOUR_OF_DAY] = fields[MINUTE] = fields[SECONDS] = fields[MILLISECONDS] = 0;
	    }
	
	    var fixedDateJan1 = Utils.getFixedDate(year, GregorianCalendar.JANUARY, 1);
	    var dayOfYear = fixedDate - fixedDateJan1 + 1;
	    var fixDateMonth1 = fixedDate - date.dayOfMonth + 1;
	
	    fields[DAY_OF_YEAR] = dayOfYear;
	    fields[DAY_OF_WEEK_IN_MONTH] = toInt((date.dayOfMonth - 1) / 7) + 1;
	
	    var weekOfYear = getWeekNumber(this, fixedDateJan1, fixedDate);
	
	    // 本周没有足够的时间在当前年
	    if (weekOfYear === 0) {
	      // If the date belongs to the last week of the
	      // previous year, use the week number of "12/31" of
	      // the "previous" year.
	      var fixedDec31 = fixedDateJan1 - 1;
	      var prevJan1 = fixedDateJan1 - getYearLength(year - 1);
	      weekOfYear = getWeekNumber(this, prevJan1, fixedDec31);
	    } else
	      // 本周是年末最后一周，可能有足够的时间在新的一年
	      if (weekOfYear >= 52) {
	        var nextJan1 = fixedDateJan1 + getYearLength(year);
	        var nextJan1st = getDayOfWeekDateOnOrBefore(nextJan1 + 6, this.firstDayOfWeek);
	        var nDays = nextJan1st - nextJan1;
	        // 本周有足够天数在新的一年
	        if (nDays >= this.minimalDaysInFirstWeek &&
	        // 当天确实在本周，weekOfYear === 53 时是不需要这个判断
	        fixedDate >= nextJan1st - 7) {
	          weekOfYear = 1;
	        }
	      }
	
	    fields[WEEK_OF_YEAR] = weekOfYear;
	    fields[WEEK_OF_MONTH] = getWeekNumber(this, fixDateMonth1, fixedDate);
	
	    this.fieldsComputed = true;
	  },
	
	  /*
	   * Converts calendar field values to the time value
	   * (millisecond offset from the Epoch).
	   * @protected
	   */
	  computeTime: function computeTime() {
	    var year = undefined;
	    var fields = this.fields;
	    if (this.isSet(YEAR)) {
	      year = fields[YEAR];
	    } else {
	      year = new Date().getFullYear();
	    }
	    var timeOfDay = 0;
	    if (this.isSet(HOUR_OF_DAY)) {
	      timeOfDay += fields[HOUR_OF_DAY];
	    }
	    timeOfDay *= 60;
	    timeOfDay += fields[MINUTE] || 0;
	    timeOfDay *= 60;
	    timeOfDay += fields[SECONDS] || 0;
	    timeOfDay *= 1000;
	    timeOfDay += fields[MILLISECONDS] || 0;
	    var fixedDate = 0;
	    fields[YEAR] = year;
	    fixedDate = fixedDate + this.getFixedDate();
	    // millis represents local wall-clock time in milliseconds.
	    var millis = (fixedDate - EPOCH_OFFSET) * ONE_DAY + timeOfDay;
	    millis -= this.timezoneOffset * ONE_MINUTE;
	    this.time = millis;
	    this.computeFields();
	  },
	
	  /*
	   * Fills in any unset fields in the calendar fields. First,
	   * the computeTime() method is called if the time value (millisecond offset from the Epoch)
	   * has not been calculated from calendar field values.
	   * Then, the computeFields() method is called to calculate all calendar field values.
	   * @protected
	   */
	  complete: function complete() {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    if (!this.fieldsComputed) {
	      this.computeFields();
	    }
	  },
	
	  getFixedDate: function getFixedDate() {
	    var self = this;
	
	    var fields = self.fields;
	
	    var firstDayOfWeekCfg = self.firstDayOfWeek;
	
	    var year = fields[YEAR];
	
	    var month = GregorianCalendar.JANUARY;
	
	    if (self.isSet(MONTH)) {
	      month = fields[MONTH];
	      if (month > GregorianCalendar.DECEMBER) {
	        year += toInt(month / 12);
	        month %= 12;
	      } else if (month < GregorianCalendar.JANUARY) {
	        year += floorDivide(month / 12);
	        month = mod(month, 12);
	      }
	    }
	
	    // Get the fixed date since Jan 1, 1 (Gregorian). We are on
	    // the first day of either `month' or January in 'year'.
	    var fixedDate = Utils.getFixedDate(year, month, 1);
	    var firstDayOfWeek = undefined;
	    var dayOfWeek = self.firstDayOfWeek;
	
	    if (self.isSet(DAY_OF_WEEK)) {
	      dayOfWeek = fields[DAY_OF_WEEK];
	    }
	
	    if (self.isSet(MONTH)) {
	      if (self.isSet(DAY_OF_MONTH)) {
	        fixedDate += fields[DAY_OF_MONTH] - 1;
	      } else {
	        if (self.isSet(WEEK_OF_MONTH)) {
	          firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);
	
	          // If we have enough days in the first week, then
	          // move to the previous week.
	          if (firstDayOfWeek - fixedDate >= self.minimalDaysInFirstWeek) {
	            firstDayOfWeek -= 7;
	          }
	
	          if (dayOfWeek !== firstDayOfWeekCfg) {
	            firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
	          }
	
	          fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_MONTH] - 1);
	        } else {
	          var dowim = undefined;
	          if (self.isSet(DAY_OF_WEEK_IN_MONTH)) {
	            dowim = fields[DAY_OF_WEEK_IN_MONTH];
	          } else {
	            dowim = 1;
	          }
	          var lastDate = 7 * dowim;
	          if (dowim < 0) {
	            lastDate = getMonthLength(year, month) + 7 * (dowim + 1);
	          }
	          fixedDate = getDayOfWeekDateOnOrBefore(fixedDate + lastDate - 1, dayOfWeek);
	        }
	      }
	    } else {
	      // We are on the first day of the year.
	      if (self.isSet(DAY_OF_YEAR)) {
	        fixedDate += fields[DAY_OF_YEAR] - 1;
	      } else if (self.isSet(WEEK_OF_YEAR)) {
	        firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);
	        // If we have enough days in the first week, then move
	        // to the previous week.
	        if (firstDayOfWeek - fixedDate >= self.minimalDaysInFirstWeek) {
	          firstDayOfWeek -= 7;
	        }
	        if (dayOfWeek !== firstDayOfWeekCfg) {
	          firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
	        }
	        fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_YEAR] - 1);
	      }
	    }
	
	    return fixedDate;
	  },
	
	  /*
	   * Returns this Calendar's time value in milliseconds
	   * @member Date.Gregorian
	   * @returns {Number} the current time as UTC milliseconds from the epoch.
	   */
	  getTime: function getTime() {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    return this.time;
	  },
	
	  /*
	   * Sets this Calendar's current time from the given long value.
	   * @param time the new time in UTC milliseconds from the epoch.
	   */
	  setTime: function setTime(time) {
	    this.time = time;
	    this.fieldsComputed = false;
	    this.complete();
	  },
	
	  /*
	   * Returns the value of the given calendar field.
	   * @param field the given calendar field.
	   * @returns {Number} the value for the given calendar field.
	   */
	  get: function get(field) {
	    this.complete();
	    return this.fields[field];
	  },
	
	  /*
	   * Returns the year of the given calendar field.
	   * @method getYear
	   * @returns {Number} the year for the given calendar field.
	   */
	
	  /*
	   * Returns the month of the given calendar field.
	   * @method getMonth
	   * @returns {Number} the month for the given calendar field.
	   */
	
	  /*
	   * Returns the day of month of the given calendar field.
	   * @method getDayOfMonth
	   * @returns {Number} the day of month for the given calendar field.
	   */
	
	  /*
	   * Returns the hour of day of the given calendar field.
	   * @method getHourOfDay
	   * @returns {Number} the hour of day for the given calendar field.
	   */
	
	  /*
	   * Returns the minute of the given calendar field.
	   * @method getMinute
	   * @returns {Number} the minute for the given calendar field.
	   */
	
	  /*
	   * Returns the second of the given calendar field.
	   * @method getSecond
	   * @returns {Number} the second for the given calendar field.
	   */
	
	  /*
	   * Returns the millisecond of the given calendar field.
	   * @method getMilliSecond
	   * @returns {Number} the millisecond for the given calendar field.
	   */
	
	  /*
	   * Returns the week of year of the given calendar field.
	   * @method getWeekOfYear
	   * @returns {Number} the week of year for the given calendar field.
	   */
	
	  /*
	   * Returns the week of month of the given calendar field.
	   * @method getWeekOfMonth
	   * @returns {Number} the week of month for the given calendar field.
	   */
	
	  /*
	   * Returns the day of year of the given calendar field.
	   * @method getDayOfYear
	   * @returns {Number} the day of year for the given calendar field.
	   */
	
	  /*
	   * Returns the day of week of the given calendar field.
	   * @method getDayOfWeek
	   * @returns {Number} the day of week for the given calendar field.
	   */
	
	  /*
	   * Returns the day of week in month of the given calendar field.
	   * @method getDayOfWeekInMonth
	   * @returns {Number} the day of week in month for the given calendar field.
	   */
	
	  /*
	   * Sets the given calendar field to the given value.
	   * @param field the given calendar field.
	   * @param v the value to be set for the given calendar field.
	   */
	  set: function set(field, v) {
	    var len = arguments.length;
	    if (len === 2) {
	      this.fields[field] = v;
	    } else if (len < MILLISECONDS + 1) {
	      for (var i = 0; i < len; i++) {
	        this.fields[YEAR + i] = arguments[i];
	      }
	    } else {
	      throw new Error('illegal arguments for GregorianCalendar set');
	    }
	    this.time = undefined;
	  },
	
	  /*
	   * Set the year of the given calendar field.
	   * @method setYear
	   */
	
	  /*
	   * Set the month of the given calendar field.
	   * @method setMonth
	   */
	
	  /*
	   * Set the day of month of the given calendar field.
	   * @method setDayOfMonth
	   */
	
	  /*
	   * Set the hour of day of the given calendar field.
	   * @method setHourOfDay
	   */
	
	  /*
	   * Set the minute of the given calendar field.
	   * @method setMinute
	   */
	
	  /*
	   * Set the second of the given calendar field.
	   * @method setSecond
	   */
	
	  /*
	   * Set the millisecond of the given calendar field.
	   * @method setMilliSecond
	   */
	
	  /*
	   * Set the week of year of the given calendar field.
	   * @method setWeekOfYear
	   */
	
	  /*
	   * Set the week of month of the given calendar field.
	   * @method setWeekOfMonth
	   */
	
	  /*
	   * Set the day of year of the given calendar field.
	   * @method setDayOfYear
	   */
	
	  /*
	   * Set the day of week of the given calendar field.
	   * @method setDayOfWeek
	   */
	
	  /*
	   * Set the day of week in month of the given calendar field.
	   * @method setDayOfWeekInMonth
	   */
	
	  /*
	   * add for specified field based on two rules:
	   *
	   *  - Add rule 1. The value of field after the call minus the value of field before the
	   *  call is amount, modulo any overflow that has occurred in field
	   *  Overflow occurs when a field value exceeds its range and,
	   *  as a result, the next larger field is incremented or
	   *  decremented and the field value is adjusted back into its range.
	   *
	   *  - Add rule 2. If a smaller field is expected to be invariant,
	   *  but it is impossible for it to be equal to its
	   *  prior value because of changes in its minimum or maximum after
	   *  field is changed, then its value is adjusted to be as close
	   *  as possible to its expected value. A smaller field represents a
	   *  smaller unit of time. HOUR_OF_DAY is a smaller field than
	   *  DAY_OF_MONTH. No adjustment is made to smaller fields
	   *  that are not expected to be invariant. The calendar system
	   *  determines what fields are expected to be invariant.
	   *
	   *
	   *      @example
	   *      use('date/gregorian',function(S, GregorianCalendar){
	   *          const d = new GregorianCalendar();
	   *          d.set(2012, GregorianCalendar.JANUARY, 31);
	   *          d.add(Gregorian.MONTH,1);
	   *          // 2012-2-29
	   *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
	   *          d.add(Gregorian.MONTH,12);
	   *          // 2013-2-28
	   *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
	   *      });
	   *
	   * @param field the calendar field.
	   * @param {Number} amount he amount of date or time to be added to the field.
	   */
	  add: function add(field, a) {
	    if (!a) {
	      return;
	    }
	    var amount = a;
	    var self = this;
	    var fields = self.fields;
	    // computer and retrieve original value
	    var value = self.get(field);
	    if (field === YEAR) {
	      value += amount;
	      self.set(YEAR, value);
	      adjustDayOfMonth(self);
	    } else if (field === MONTH) {
	      value += amount;
	      var yearAmount = floorDivide(value / 12);
	      value = mod(value, 12);
	      if (yearAmount) {
	        self.set(YEAR, fields[YEAR] + yearAmount);
	      }
	      self.set(MONTH, value);
	      adjustDayOfMonth(self);
	    } else {
	      switch (field) {
	        case HOUR_OF_DAY:
	          amount *= ONE_HOUR;
	          break;
	        case MINUTE:
	          amount *= ONE_MINUTE;
	          break;
	        case SECONDS:
	          amount *= ONE_SECOND;
	          break;
	        case MILLISECONDS:
	          break;
	        case WEEK_OF_MONTH:
	        case WEEK_OF_YEAR:
	        case DAY_OF_WEEK_IN_MONTH:
	          amount *= ONE_WEEK;
	          break;
	        case DAY_OF_WEEK:
	        case DAY_OF_YEAR:
	        case DAY_OF_MONTH:
	          amount *= ONE_DAY;
	          break;
	        default:
	          throw new Error('illegal field for add');
	      }
	      self.setTime(self.time + amount);
	    }
	  },
	
	  /*
	   * add the year of the given calendar field.
	   * @method addYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the month of the given calendar field.
	   * @method addMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the day of month of the given calendar field.
	   * @method addDayOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the hour of day of the given calendar field.
	   * @method addHourOfDay
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the minute of the given calendar field.
	   * @method addMinute
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the second of the given calendar field.
	   * @method addSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the millisecond of the given calendar field.
	   * @method addMilliSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the week of year of the given calendar field.
	   * @method addWeekOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the week of month of the given calendar field.
	   * @method addWeekOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the day of year of the given calendar field.
	   * @method addDayOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the day of week of the given calendar field.
	   * @method addDayOfWeek
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * add the day of week in month of the given calendar field.
	   * @method addDayOfWeekInMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * Get rolled value for the field
	   * @protected
	   */
	  getRolledValue: function getRolledValue(value, a, min, max) {
	    var amount = a;
	    var diff = value - min;
	    var range = max - min + 1;
	    amount %= range;
	    return min + (diff + amount + range) % range;
	  },
	
	  /*
	   * Adds a signed amount to the specified calendar field without changing larger fields.
	   * A negative roll amount means to subtract from field without changing
	   * larger fields. If the specified amount is 0, this method performs nothing.
	   *
	   *
	   *
	   *      @example
	   *      const d = new GregorianCalendar();
	   *      d.set(1999, GregorianCalendar.AUGUST, 31);
	   *      // 1999-4-30
	   *      // Tuesday June 1, 1999
	   *      d.set(1999, GregorianCalendar.JUNE, 1);
	   *      d.add(Gregorian.WEEK_OF_MONTH,-1); // === d.add(Gregorian.WEEK_OF_MONTH,
	   *      d.get(Gregorian.WEEK_OF_MONTH));
	   *      // 1999-06-29
	   *
	   *
	   * @param field the calendar field.
	   * @param {Number} amount the signed amount to add to field.
	   */
	  roll: function roll(field, amount) {
	    if (!amount) {
	      return;
	    }
	    var self = this;
	    // computer and retrieve original value
	    var value = self.get(field);
	    var min = self.getActualMinimum(field);
	    var max = self.getActualMaximum(field);
	    value = self.getRolledValue(value, amount, min, max);
	
	    self.set(field, value);
	
	    // consider compute time priority
	    switch (field) {
	      case MONTH:
	        adjustDayOfMonth(self);
	        break;
	      default:
	        // other fields are set already when get
	        self.updateFieldsBySet(field);
	        break;
	    }
	  },
	
	  /*
	   * keep field stable.
	   *
	   * 2015-09-29 setMonth 2 vs rollSetMonth 2
	   *
	   */
	  rollSet: function rollSet(field, v) {
	    this.set(field, v);
	    switch (field) {
	      case MONTH:
	        adjustDayOfMonth(this);
	        break;
	      default:
	        // other fields are set already when get
	        this.updateFieldsBySet(field);
	        break;
	    }
	  },
	
	  /*
	   * roll the year of the given calendar field.
	   * @method rollYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the month of the given calendar field.
	   * @param {Number} amount the signed amount to add to field.
	   * @method rollMonth
	   */
	
	  /*
	   * roll the day of month of the given calendar field.
	   * @method rollDayOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the hour of day of the given calendar field.
	   * @method rollHourOfDay
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the minute of the given calendar field.
	   * @method rollMinute
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the second of the given calendar field.
	   * @method rollSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the millisecond of the given calendar field.
	   * @method rollMilliSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the week of year of the given calendar field.
	   * @method rollWeekOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the week of month of the given calendar field.
	   * @method rollWeekOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the day of year of the given calendar field.
	   * @method rollDayOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * roll the day of week of the given calendar field.
	   * @method rollDayOfWeek
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /*
	   * remove other priority fields when call getFixedDate
	   * precondition: other fields are all set or computed
	   * @protected
	   */
	  updateFieldsBySet: function updateFieldsBySet(field) {
	    var fields = this.fields;
	    switch (field) {
	      case WEEK_OF_MONTH:
	        fields[DAY_OF_MONTH] = undefined;
	        break;
	      case DAY_OF_YEAR:
	        fields[MONTH] = undefined;
	        break;
	      case DAY_OF_WEEK:
	        fields[DAY_OF_MONTH] = undefined;
	        break;
	      case WEEK_OF_YEAR:
	        fields[DAY_OF_YEAR] = undefined;
	        fields[MONTH] = undefined;
	        break;
	      default:
	        break;
	    }
	  },
	
	  /*
	   * get current date instance's timezone offset
	   * @returns {Number}
	   */
	  getTimezoneOffset: function getTimezoneOffset() {
	    return this.timezoneOffset;
	  },
	
	  /*
	   * set current date instance's timezone offset
	   */
	  setTimezoneOffset: function setTimezoneOffset(timezoneOffset) {
	    if (this.timezoneOffset !== timezoneOffset) {
	      this.fieldsComputed = undefined;
	      this.timezoneOffset = timezoneOffset;
	    }
	  },
	
	  /*
	   * set first day of week for current date instance
	   */
	  setFirstDayOfWeek: function setFirstDayOfWeek(firstDayOfWeek) {
	    if (this.firstDayOfWeek !== firstDayOfWeek) {
	      this.firstDayOfWeek = firstDayOfWeek;
	      this.fieldsComputed = false;
	    }
	  },
	
	  /*
	   * Gets what the first day of the week is; e.g., SUNDAY in the U.S., MONDAY in France.
	   * @returns {Number} the first day of the week.
	   */
	  getFirstDayOfWeek: function getFirstDayOfWeek() {
	    return this.firstDayOfWeek;
	  },
	
	  /*
	   * Sets what the minimal days required in the first week of the year are; For example,
	   * if the first week is defined as one that contains the first day of the first month of a year,
	   * call this method with value 1.
	   * If it must be a full week, use value 7.
	   * @param minimalDaysInFirstWeek the given minimal days required in the first week of the year.
	   */
	  setMinimalDaysInFirstWeek: function setMinimalDaysInFirstWeek(minimalDaysInFirstWeek) {
	    if (this.minimalDaysInFirstWeek !== minimalDaysInFirstWeek) {
	      this.minimalDaysInFirstWeek = minimalDaysInFirstWeek;
	      this.fieldsComputed = false;
	    }
	  },
	
	  /*
	   * Gets what the minimal days required in the first week of the year are; e.g.,
	   * if the first week is defined as one that contains the first day of the first month of a year,
	   * this method returns 1.
	   * If the minimal days required must be a full week, this method returns 7.
	   * @returns {Number} the minimal days required in the first week of the year.
	   */
	  getMinimalDaysInFirstWeek: function getMinimalDaysInFirstWeek() {
	    return this.minimalDaysInFirstWeek;
	  },
	
	  /*
	   * Returns the number of weeks in the week year
	   * represented by this GregorianCalendar.
	   *
	   * For example, if this GregorianCalendar's date is
	   * December 31, 2008 with the ISO
	   * 8601 compatible setting, this method will return 53 for the
	   * period: December 29, 2008 to January 3, 2010
	   * while getActualMaximum(WEEK_OF_YEAR) will return
	   * 52 for the period: December 31, 2007 to December 28, 2008.
	   *
	   * @return {Number} the number of weeks in the week year.
	   */
	  getWeeksInWeekYear: function getWeeksInWeekYear() {
	    var weekYear = this.getWeekYear();
	    if (weekYear === this.get(YEAR)) {
	      return this.getActualMaximum(WEEK_OF_YEAR);
	    }
	    // Use the 2nd week for calculating the max of WEEK_OF_YEAR
	    var gc = this.clone();
	    gc.clear();
	    gc.setWeekDate(weekYear, 2, this.get(DAY_OF_WEEK));
	    return gc.getActualMaximum(WEEK_OF_YEAR);
	  },
	
	  /*
	   * Returns the week year represented by this GregorianCalendar.
	   * The dates in the weeks between 1 and the
	   * maximum week number of the week year have the same week year value
	   * that may be one year before or after the calendar year value.
	   *
	   * @return {Number} the week year represented by this GregorianCalendar.
	   */
	  getWeekYear: function getWeekYear() {
	    var year = this.get(YEAR); // implicitly  complete
	    var weekOfYear = this.get(WEEK_OF_YEAR);
	    var month = this.get(MONTH);
	    if (month === GregorianCalendar.JANUARY) {
	      if (weekOfYear >= 52) {
	        --year;
	      }
	    } else if (month === GregorianCalendar.DECEMBER) {
	      if (weekOfYear === 1) {
	        ++year;
	      }
	    }
	    return year;
	  },
	  /*
	   * Sets this GregorianCalendar to the date given by the date specifiers - weekYear,
	   * weekOfYear, and dayOfWeek. weekOfYear follows the WEEK_OF_YEAR numbering.
	   * The dayOfWeek value must be one of the DAY_OF_WEEK values: SUNDAY to SATURDAY.
	   *
	   * @param weekYear    the week year
	   * @param weekOfYear  the week number based on weekYear
	   * @param dayOfWeek   the day of week value
	   */
	  setWeekDate: function setWeekDate(weekYear, weekOfYear, dayOfWeek) {
	    if (dayOfWeek < GregorianCalendar.SUNDAY || dayOfWeek > GregorianCalendar.SATURDAY) {
	      throw new Error('invalid dayOfWeek: ' + dayOfWeek);
	    }
	    var fields = this.fields;
	    // To avoid changing the time of day fields by date
	    // calculations, use a clone with the GMT time zone.
	    var gc = this.clone();
	    gc.clear();
	    gc.setTimezoneOffset(0);
	    gc.set(YEAR, weekYear);
	    gc.set(WEEK_OF_YEAR, 1);
	    gc.set(DAY_OF_WEEK, this.getFirstDayOfWeek());
	    var days = dayOfWeek - this.getFirstDayOfWeek();
	    if (days < 0) {
	      days += 7;
	    }
	    days += 7 * (weekOfYear - 1);
	    if (days !== 0) {
	      gc.add(DAY_OF_YEAR, days);
	    } else {
	      gc.complete();
	    }
	    fields[YEAR] = gc.get(YEAR);
	    fields[MONTH] = gc.get(MONTH);
	    fields[DAY_OF_MONTH] = gc.get(DAY_OF_MONTH);
	    this.complete();
	  },
	  /*
	   * Creates and returns a copy of this object.
	   * @returns {Date.Gregorian}
	   */
	  clone: function clone() {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    var cal = new GregorianCalendar(this.locale);
	    cal.setTimezoneOffset(cal.getTimezoneOffset());
	    cal.setFirstDayOfWeek(cal.getFirstDayOfWeek());
	    cal.setMinimalDaysInFirstWeek(cal.getMinimalDaysInFirstWeek());
	    cal.setTime(this.time);
	    return cal;
	  },
	
	  /*
	   * Compares this GregorianCalendar to the specified Object.
	   * The result is true if and only if the argument is a GregorianCalendar object
	   * that represents the same time value (millisecond offset from the Epoch)
	   * under the same Calendar parameters and Gregorian change date as this object.
	   * @param {Date.Gregorian} obj the object to compare with.
	   * @returns {boolean} true if this object is equal to obj; false otherwise.
	   */
	  equals: function equals(obj) {
	    return this.getTime() === obj.getTime() && this.firstDayOfWeek === obj.firstDayOfWeek && this.timezoneOffset === obj.timezoneOffset && this.minimalDaysInFirstWeek === obj.minimalDaysInFirstWeek;
	  },
	
	  compareToDay: function compareToDay(d2) {
	    var d1Year = this.getYear();
	    var d2Year = d2.getYear();
	    var d1Month = this.getMonth();
	    var d2Month = d2.getMonth();
	    var d1Day = this.getDayOfMonth();
	    var d2Day = d2.getDayOfMonth();
	    if (d1Year !== d2Year) {
	      return d1Year - d2Year;
	    }
	    if (d1Month !== d2Month) {
	      return d1Month - d2Month;
	    }
	    return d1Day - d2Day;
	  },
	
	  /*
	   * Sets all the calendar field values or specified field and the time value
	   * (millisecond offset from the Epoch) of this Calendar undefined.
	   * This means that isSet() will return false for all the calendar fields,
	   * and the date and time calculations will treat the fields as if they had never been set.
	   * @param [field] the calendar field to be cleared.
	   */
	  clear: function clear(field) {
	    if (field === undefined) {
	      this.field = [];
	    } else {
	      this.fields[field] = undefined;
	    }
	    this.time = undefined;
	    this.fieldsComputed = false;
	  },
	
	  toString: function toString() {
	    // for debug
	    var v = this;
	    return '[GregorianCalendar]: ' + v.getYear() + '/' + v.getMonth() + '/' + v.getDayOfMonth() + ' ' + v.getHourOfDay() + ':' + v.getMinutes() + ':' + v.getSeconds();
	  }
	};
	
	var GregorianCalendarProto = GregorianCalendar.prototype;
	
	Utils.each(FIELDS, function (f, index) {
	  if (f) {
	    GregorianCalendarProto['get' + f] = function get() {
	      return this.get(index);
	    };
	
	    GregorianCalendarProto['isSet' + f] = function isSet() {
	      return this.isSet(index);
	    };
	
	    GregorianCalendarProto['set' + f] = function set(v) {
	      return this.set(index, v);
	    };
	
	    GregorianCalendarProto['add' + f] = function add(v) {
	      return this.add(index, v);
	    };
	
	    GregorianCalendarProto['roll' + f] = function roll(v) {
	      return this.roll(index, v);
	    };
	
	    GregorianCalendarProto['rollSet' + f] = function rollSet(v) {
	      return this.rollSet(index, v);
	    };
	  }
	});
	
	module.exports = GregorianCalendar;
	/*
	 http://docs.oracle.com/javase/7/docs/api/java/util/GregorianCalendar.html
	
	 TODO
	 - day saving time
	 - i18n
	 - julian calendar
	 */

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * utils for gregorian date
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var Const = __webpack_require__(353);
	var floor = Math.floor;
	var ACCUMULATED_DAYS_IN_MONTH
	//   1/1 2/1 3/1 4/1 5/1 6/1 7/1 8/1 9/1 10/1 11/1 12/1
	= [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	
	var ACCUMULATED_DAYS_IN_MONTH_LEAP
	//   1/1 2/1   3/1   4/1   5/1   6/1   7/1   8/1   9/1
	// 10/1   11/1   12/1
	= [0, 31, 59 + 1, 90 + 1, 120 + 1, 151 + 1, 181 + 1, 212 + 1, 243 + 1, 273 + 1, 304 + 1, 334 + 1];
	
	var DAYS_OF_YEAR = 365;
	var DAYS_OF_4YEAR = 365 * 4 + 1;
	var DAYS_OF_100YEAR = DAYS_OF_4YEAR * 25 - 1;
	var DAYS_OF_400YEAR = DAYS_OF_100YEAR * 4 + 1;
	var _exports = {};
	
	function getDayOfYear(year, month, dayOfMonth) {
	  return dayOfMonth + (_exports.isLeapYear(year) ? ACCUMULATED_DAYS_IN_MONTH_LEAP[month] : ACCUMULATED_DAYS_IN_MONTH[month]);
	}
	
	function getDayOfWeekFromFixedDate(fixedDate) {
	  // The fixed day 1 (January 1, 1 Gregorian) is Monday.
	  if (fixedDate >= 0) {
	    return fixedDate % 7;
	  }
	  return _exports.mod(fixedDate, 7);
	}
	
	function getGregorianYearFromFixedDate(fixedDate) {
	  var d0 = undefined;
	  var d1 = undefined;
	  var d2 = undefined;
	  var d3 = undefined;
	  var n400 = undefined;
	  var n100 = undefined;
	  var n4 = undefined;
	  var n1 = undefined;
	  var year = undefined;
	  d0 = fixedDate - 1;
	
	  n400 = floor(d0 / DAYS_OF_400YEAR);
	  d1 = _exports.mod(d0, DAYS_OF_400YEAR);
	  n100 = floor(d1 / DAYS_OF_100YEAR);
	  d2 = _exports.mod(d1, DAYS_OF_100YEAR);
	  n4 = floor(d2 / DAYS_OF_4YEAR);
	  d3 = _exports.mod(d2, DAYS_OF_4YEAR);
	  n1 = floor(d3 / DAYS_OF_YEAR);
	
	  year = 400 * n400 + 100 * n100 + 4 * n4 + n1;
	
	  // ?
	  if (!(n100 === 4 || n1 === 4)) {
	    ++year;
	  }
	
	  return year;
	}
	
	_exports = module.exports = {
	  each: function each(arr, fn) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (fn(arr[i], i, arr) === false) {
	        break;
	      }
	    }
	  },
	
	  mix: function mix(t, s) {
	    for (var p in s) {
	      if (s.hasOwnProperty(p)) {
	        t[p] = s[p];
	      }
	    }
	  },
	
	  isLeapYear: function isLeapYear(year) {
	    if ((year & 3) !== 0) {
	      return false;
	    }
	    return year % 100 !== 0 || year % 400 === 0;
	  },
	
	  mod: function mod(x, y) {
	    // 负数时不是镜像关系
	    return x - y * floor(x / y);
	  },
	
	  // month: 0 based
	  getFixedDate: function getFixedDate(year, month, dayOfMonth) {
	    var prevYear = year - 1;
	    // 考虑公元前
	    return DAYS_OF_YEAR * prevYear + floor(prevYear / 4) - floor(prevYear / 100) + floor(prevYear / 400) + getDayOfYear(year, month, dayOfMonth);
	  },
	
	  getGregorianDateFromFixedDate: function getGregorianDateFromFixedDate(fixedDate) {
	    var year = getGregorianYearFromFixedDate(fixedDate);
	    var jan1 = _exports.getFixedDate(year, Const.JANUARY, 1);
	    var isLeap = _exports.isLeapYear(year);
	    var ACCUMULATED_DAYS = isLeap ? ACCUMULATED_DAYS_IN_MONTH_LEAP : ACCUMULATED_DAYS_IN_MONTH;
	    var daysDiff = fixedDate - jan1;
	    var month = undefined;
	
	    for (var i = 0; i < ACCUMULATED_DAYS.length; i++) {
	      if (ACCUMULATED_DAYS[i] <= daysDiff) {
	        month = i;
	      } else {
	        break;
	      }
	    }
	
	    var dayOfMonth = fixedDate - jan1 - ACCUMULATED_DAYS[month] + 1;
	    var dayOfWeek = getDayOfWeekFromFixedDate(fixedDate);
	
	    return {
	      year: year,
	      month: month,
	      dayOfMonth: dayOfMonth,
	      dayOfWeek: dayOfWeek,
	      isLeap: isLeap
	    };
	  }
	};

/***/ },
/* 353 */
/***/ function(module, exports) {

	/*
	 * @ignore
	 * const for gregorian date
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	module.exports = {
	  /*
	   * Enum indicating sunday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  SUNDAY: 0,
	  /*
	   * Enum indicating monday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  MONDAY: 1,
	  /*
	   * Enum indicating tuesday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  TUESDAY: 2,
	  /*
	   * Enum indicating wednesday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  WEDNESDAY: 3,
	  /*
	   * Enum indicating thursday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  THURSDAY: 4,
	  /*
	   * Enum indicating friday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  FRIDAY: 5,
	  /*
	   * Enum indicating saturday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  SATURDAY: 6,
	  /*
	   * Enum indicating january
	   * @type Number
	   * @member Date.Gregorian
	   */
	  JANUARY: 0,
	  /*
	   * Enum indicating february
	   * @type Number
	   * @member Date.Gregorian
	   */
	  FEBRUARY: 1,
	  /*
	   * Enum indicating march
	   * @type Number
	   * @member Date.Gregorian
	   */
	  MARCH: 2,
	  /*
	   * Enum indicating april
	   * @type Number
	   * @member Date.Gregorian
	   */
	  APRIL: 3,
	  /*
	   * Enum indicating may
	   * @type Number
	   * @member Date.Gregorian
	   */
	  MAY: 4,
	  /*
	   * Enum indicating june
	   * @type Number
	   * @member Date.Gregorian
	   */
	  JUNE: 5,
	  /*
	   * Enum indicating july
	   * @type Number
	   * @member Date.Gregorian
	   */
	  JULY: 6,
	  /*
	   * Enum indicating august
	   * @type Number
	   * @member Date.Gregorian
	   */
	  AUGUST: 7,
	  /*
	   * Enum indicating september
	   * @type Number
	   * @member Date.Gregorian
	   */
	  SEPTEMBER: 8,
	  /*
	   * Enum indicating october
	   * @type Number
	   * @member Date.Gregorian
	   */
	  OCTOBER: 9,
	  /*
	   * Enum indicating november
	   * @type Number
	   * @member Date.Gregorian
	   */
	  NOVEMBER: 10,
	  /*
	   * Enum indicating december
	   * @type Number
	   * @member Date.Gregorian
	   */
	  DECEMBER: 11
	};

/***/ },
/* 354 */
/***/ function(module, exports) {

	/*
	 * en-us locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	"use strict";
	
	module.exports = {
	  // in minutes
	  timezoneOffset: -8 * 60,
	  firstDayOfWeek: 0,
	  minimalDaysInFirstWeek: 1
	};

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DateTHead = __webpack_require__(356);
	
	var _DateTHead2 = _interopRequireDefault(_DateTHead);
	
	var _DateTBody = __webpack_require__(358);
	
	var _DateTBody2 = _interopRequireDefault(_DateTBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DateTable = function (_React$Component) {
	  _inherits(DateTable, _React$Component);
	
	  function DateTable() {
	    _classCallCheck(this, DateTable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DateTable).apply(this, arguments));
	  }
	
	  _createClass(DateTable, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      return _react2.default.createElement(
	        'table',
	        { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	        _react2.default.createElement(_DateTHead2.default, props),
	        _react2.default.createElement(_DateTBody2.default, props)
	      );
	    }
	  }]);
	
	  return DateTable;
	}(_react2.default.Component);
	
	exports.default = DateTable;
	module.exports = exports['default'];

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DateConstants = __webpack_require__(357);
	
	var _DateConstants2 = _interopRequireDefault(_DateConstants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DateTHead = function (_React$Component) {
	  _inherits(DateTHead, _React$Component);
	
	  function DateTHead() {
	    _classCallCheck(this, DateTHead);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DateTHead).apply(this, arguments));
	  }
	
	  _createClass(DateTHead, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var value = props.value;
	      var locale = props.locale;
	      var prefixCls = props.prefixCls;
	      var veryShortWeekdays = [];
	      var weekDays = [];
	      var firstDayOfWeek = value.getFirstDayOfWeek();
	      var showWeekNumberEl = undefined;
	
	      for (var dateColIndex = 0; dateColIndex < _DateConstants2.default.DATE_COL_COUNT; dateColIndex++) {
	        var index = (firstDayOfWeek + dateColIndex) % _DateConstants2.default.DATE_COL_COUNT;
	        veryShortWeekdays[dateColIndex] = locale.format.veryShortWeekdays[index];
	        weekDays[dateColIndex] = locale.format.weekdays[index];
	      }
	
	      if (props.showWeekNumber) {
	        showWeekNumberEl = _react2.default.createElement(
	          'th',
	          {
	            role: 'columnheader',
	            className: prefixCls + '-column-header ' + prefixCls + '-week-number-header'
	          },
	          _react2.default.createElement(
	            'span',
	            { className: prefixCls + '-column-header-inner' },
	            'x'
	          )
	        );
	      }
	      var weekDaysEls = weekDays.map(function (day, xindex) {
	        return _react2.default.createElement(
	          'th',
	          {
	            key: xindex,
	            role: 'columnheader',
	            title: day,
	            className: prefixCls + '-column-header'
	          },
	          _react2.default.createElement(
	            'span',
	            { className: prefixCls + '-column-header-inner' },
	            veryShortWeekdays[xindex]
	          )
	        );
	      });
	      return _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          { role: 'row' },
	          showWeekNumberEl,
	          weekDaysEls
	        )
	      );
	    }
	  }]);
	
	  return DateTHead;
	}(_react2.default.Component);
	
	exports.default = DateTHead;
	module.exports = exports['default'];

/***/ },
/* 357 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  DATE_ROW_COUNT: 6,
	  DATE_COL_COUNT: 7
	};
	module.exports = exports['default'];

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DateConstants = __webpack_require__(357);
	
	var _DateConstants2 = _interopRequireDefault(_DateConstants);
	
	var _util = __webpack_require__(359);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isSameDay(one, two) {
	  return one && two && one.compareToDay(two) === 0;
	}
	
	function beforeCurrentMonthYear(current, today) {
	  if (current.getYear() < today.getYear()) {
	    return 1;
	  }
	  return current.getYear() === today.getYear() && current.getMonth() < today.getMonth();
	}
	
	function afterCurrentMonthYear(current, today) {
	  if (current.getYear() > today.getYear()) {
	    return 1;
	  }
	  return current.getYear() === today.getYear() && current.getMonth() > today.getMonth();
	}
	
	function getIdFromDate(date) {
	  return 'rc-calendar-' + date.getYear() + '-' + date.getMonth() + '-' + date.getDayOfMonth();
	}
	
	function noop() {}
	
	function handleDayClick(current) {
	  this.props.onSelect(current);
	}
	
	function handleCellMouseEnter(current) {
	  this.props.onDayHover(current);
	}
	
	var DateTBody = _react2.default.createClass({
	  displayName: 'DateTBody',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onDayHover: noop
	    };
	  },
	  render: function render() {
	    var props = this.props;
	    var iIndex = undefined;
	    var jIndex = undefined;
	    var current = undefined;
	    var dateTable = [];
	    var showWeekNumber = props.showWeekNumber;
	    var value = props.value;
	    var selectedValue = props.selectedValue;
	    var today = value.clone();
	    var prefixCls = props.prefixCls;
	    var cellClass = prefixCls + '-cell';
	    var weekNumberCellClass = prefixCls + '-week-number-cell';
	    var dateClass = prefixCls + '-date';
	    var dateRender = props.dateRender;
	    var disabledDate = props.disabledDate;
	    var todayClass = prefixCls + '-today';
	    var selectedClass = prefixCls + '-selected-day';
	    var inRangeClass = prefixCls + '-in-range-cell';
	    var lastMonthDayClass = prefixCls + '-last-month-cell';
	    var nextMonthDayClass = prefixCls + '-next-month-btn-day';
	    var disabledClass = prefixCls + '-disabled-cell';
	    var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
	    var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
	    today.setTime(Date.now());
	    var month1 = value.clone();
	    month1.set(value.getYear(), value.getMonth(), 1);
	    var day = month1.getDayOfWeek();
	    var lastMonthDiffDay = (day + 7 - value.getFirstDayOfWeek()) % 7;
	    // calculate last month
	    var lastMonth1 = month1.clone();
	    lastMonth1.addDayOfMonth(0 - lastMonthDiffDay);
	    var passed = 0;
	    for (iIndex = 0; iIndex < _DateConstants2.default.DATE_ROW_COUNT; iIndex++) {
	      for (jIndex = 0; jIndex < _DateConstants2.default.DATE_COL_COUNT; jIndex++) {
	        current = lastMonth1;
	        if (passed) {
	          current = current.clone();
	          current.addDayOfMonth(passed);
	        }
	        dateTable.push(current);
	        passed++;
	      }
	    }
	    var tableHtml = [];
	    passed = 0;
	    for (iIndex = 0; iIndex < _DateConstants2.default.DATE_ROW_COUNT; iIndex++) {
	      var weekNumberCell = undefined;
	      var dateCells = [];
	      if (showWeekNumber) {
	        weekNumberCell = _react2.default.createElement(
	          'td',
	          {
	            key: dateTable[passed].getWeekOfYear(),
	            role: 'gridcell',
	            className: weekNumberCellClass
	          },
	          dateTable[passed].getWeekOfYear()
	        );
	      }
	      for (jIndex = 0; jIndex < _DateConstants2.default.DATE_COL_COUNT; jIndex++) {
	        var next = null;
	        var last = null;
	        current = dateTable[passed];
	        if (jIndex < _DateConstants2.default.DATE_COL_COUNT - 1) {
	          next = dateTable[passed + 1];
	        }
	        if (jIndex > 0) {
	          last = dateTable[passed - 1];
	        }
	        var cls = cellClass;
	        var disabled = false;
	        var selected = false;
	
	        if (isSameDay(current, today)) {
	          cls += ' ' + todayClass;
	        }
	
	        var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
	        var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);
	
	        if (selectedValue && Array.isArray(selectedValue)) {
	          if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
	            var startValue = selectedValue[0];
	            var endValue = selectedValue[1];
	            if (startValue) {
	              if (isSameDay(current, startValue)) {
	                selected = true;
	              }
	            }
	            if (startValue && endValue) {
	              if (isSameDay(current, endValue) && !selectedValue.hovering) {
	                selected = true;
	              } else if (current.compareToDay(startValue) > 0 && current.compareToDay(endValue) < 0) {
	                cls += ' ' + inRangeClass;
	              }
	            }
	          }
	        } else if (isSameDay(current, selectedValue)) {
	          selected = true;
	        }
	        if (isBeforeCurrentMonthYear) {
	          cls += ' ' + lastMonthDayClass;
	        }
	        if (isAfterCurrentMonthYear) {
	          cls += ' ' + nextMonthDayClass;
	        }
	
	        if (disabledDate) {
	          if (disabledDate(current, value)) {
	            disabled = true;
	
	            if (!last || !disabledDate(last, value)) {
	              cls += ' ' + firstDisableClass;
	            }
	
	            if (!next || !disabledDate(next, value)) {
	              cls += ' ' + lastDisableClass;
	            }
	          }
	        }
	
	        if (selected) {
	          cls += ' ' + selectedClass;
	        }
	
	        if (disabled) {
	          cls += ' ' + disabledClass;
	        }
	
	        var dateHtml = undefined;
	        if (dateRender) {
	          dateHtml = dateRender(current, value);
	        } else {
	          dateHtml = _react2.default.createElement(
	            'span',
	            {
	              key: getIdFromDate(current),
	              className: dateClass,
	              'aria-selected': selected,
	              'aria-disabled': disabled
	            },
	            current.getDayOfMonth()
	          );
	        }
	
	        dateCells.push(_react2.default.createElement(
	          'td',
	          {
	            key: passed,
	            onClick: disabled ? noop : handleDayClick.bind(this, current),
	            onMouseEnter: disabled ? noop : handleCellMouseEnter.bind(this, current),
	            role: 'gridcell',
	            title: (0, _util.getTitleString)(current), className: cls
	          },
	          dateHtml
	        ));
	
	        passed++;
	      }
	      tableHtml.push(_react2.default.createElement(
	        'tr',
	        {
	          key: iIndex,
	          role: 'row'
	        },
	        weekNumberCell,
	        dateCells
	      ));
	    }
	    return _react2.default.createElement(
	      'tbody',
	      { className: prefixCls + 'tbody' },
	      tableHtml
	    );
	  }
	});
	
	exports.default = DateTBody;
	module.exports = exports['default'];

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getTodayTime = getTodayTime;
	exports.getTitleString = getTitleString;
	exports.getTodayTimeStr = getTodayTimeStr;
	exports.getFormatter = getFormatter;
	exports.syncTime = syncTime;
	exports.getTimeConfig = getTimeConfig;
	exports.isTimeValidByConfig = isTimeValidByConfig;
	exports.isTimeValid = isTimeValid;
	exports.isAllowedDate = isAllowedDate;
	
	var _gregorianCalendarFormat = __webpack_require__(360);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultDisabledTime = {
	  disabledHours: function disabledHours() {
	    return [];
	  },
	  disabledMinutes: function disabledMinutes() {
	    return [];
	  },
	  disabledSeconds: function disabledSeconds() {
	    return [];
	  }
	};
	
	function getTodayTime(value) {
	  var today = value.clone();
	  today.setTime(Date.now());
	  return today;
	}
	
	function getTitleString(value) {
	  return value.getYear() + '-' + (value.getMonth() + 1) + '-' + value.getDayOfMonth();
	}
	
	function getTodayTimeStr(value) {
	  var today = getTodayTime(value);
	  return getTitleString(today);
	}
	
	function getFormatter(format, locale) {
	  if (typeof format === 'string') {
	    return new _gregorianCalendarFormat2.default(format, locale.format);
	  }
	  return format;
	}
	
	function syncTime(from, to) {
	  to.setHourOfDay(from.getHourOfDay());
	  to.setMinutes(from.getMinutes());
	  to.setSeconds(from.getSeconds());
	}
	
	function getTimeConfig(value, disabledTime) {
	  var disabledTimeConfig = disabledTime ? disabledTime(value) : {};
	  disabledTimeConfig = _extends({}, defaultDisabledTime, disabledTimeConfig);
	  return disabledTimeConfig;
	}
	
	function isTimeValidByConfig(value, disabledTimeConfig) {
	  var invalidTime = false;
	  if (value) {
	    var hour = value.getHourOfDay();
	    var minutes = value.getMinutes();
	    var seconds = value.getSeconds();
	    var disabledHours = disabledTimeConfig.disabledHours();
	    if (disabledHours.indexOf(hour) === -1) {
	      var disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
	      if (disabledMinutes.indexOf(minutes) === -1) {
	        var disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
	        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
	      } else {
	        invalidTime = true;
	      }
	    } else {
	      invalidTime = true;
	    }
	  }
	  return !invalidTime;
	}
	
	function isTimeValid(value, disabledTime) {
	  var disabledTimeConfig = getTimeConfig(value, disabledTime);
	  return isTimeValidByConfig(value, disabledTimeConfig);
	}
	
	function isAllowedDate(value, disabledDate, disabledTime) {
	  if (disabledDate) {
	    if (disabledDate(value)) {
	      return false;
	    }
	  }
	  if (disabledTime) {
	    if (!isTimeValid(value, disabledTime)) {
	      return false;
	    }
	  }
	  return true;
	}

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * DateTimeFormat for
	 * Inspired by DateTimeFormat from JDK.
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var GregorianCalendar = __webpack_require__(351);
	var enUsLocale = __webpack_require__(361);
	var MAX_VALUE = Number.MAX_VALUE;
	var warning = __webpack_require__(199);
	
	/**
	 * date or time style enum
	 * @enum {Number} Date.Formatter.Style
	 */
	var DateTimeStyle = {
	  /**
	   * full style
	   */
	  FULL: 0,
	  /**
	   * long style
	   */
	  LONG: 1,
	  /**
	   * medium style
	   */
	  MEDIUM: 2,
	  /**
	   * short style
	   */
	  SHORT: 3
	};
	
	/*
	 Letter    Date or Time Component    Presentation    Examples
	 G    Era designator    Text    AD
	 y    Year    Year    1996; 96
	 Y    WeekYear    WeekYear    1996; 96
	 M    Month in year    Month    July; Jul; 07
	 w    Week in year    Number    27
	 W    Week in month    Number    2
	 D    Day in year    Number    189
	 d    Day in month    Number    10
	 F    Day of week in month    Number    2
	 E    Day in week    Text    Tuesday; Tue
	 a    Am/pm marker    Text    PM
	 H    Hour in day (0-23)    Number    0
	 k    Hour in day (1-24)    Number    24
	 K    Hour in am/pm (0-11)    Number    0
	 h    Hour in am/pm (1-12)    Number    12
	 m    Minute in hour    Number    30
	 s    Second in minute    Number    55
	 S    Millisecond    Number    978
	 x z    Time zone    General time zone    Pacific Standard Time; PST; GMT-08:00
	 Z    Time zone    RFC 822 time zone    -0800
	 */
	
	var patternChars = new Array(GregorianCalendar.DAY_OF_WEEK_IN_MONTH + 2).join('1');
	var ERA = 0;
	var calendarIndexMap = {};
	
	patternChars = patternChars.split('');
	patternChars[ERA] = 'G';
	patternChars[GregorianCalendar.YEAR] = 'y';
	patternChars[GregorianCalendar.MONTH] = 'M';
	patternChars[GregorianCalendar.DAY_OF_MONTH] = 'd';
	patternChars[GregorianCalendar.HOUR_OF_DAY] = 'H';
	patternChars[GregorianCalendar.MINUTES] = 'm';
	patternChars[GregorianCalendar.SECONDS] = 's';
	patternChars[GregorianCalendar.MILLISECONDS] = 'S';
	patternChars[GregorianCalendar.WEEK_OF_YEAR] = 'w';
	patternChars[GregorianCalendar.WEEK_OF_MONTH] = 'W';
	patternChars[GregorianCalendar.DAY_OF_YEAR] = 'D';
	patternChars[GregorianCalendar.DAY_OF_WEEK_IN_MONTH] = 'F';
	patternChars.push('Y');
	
	patternChars.forEach(function (v, key) {
	  var k = key;
	  if (v === 'Y') {
	    k = GregorianCalendar.YEAR;
	  }
	  if (v) {
	    calendarIndexMap[v] = k;
	  }
	});
	
	function mix(t, s) {
	  for (var p in s) {
	    if (s.hasOwnProperty(p)) {
	      t[p] = s[p];
	    }
	  }
	}
	
	var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g;
	var EMPTY = '';
	
	function substitute(str, o, regexp) {
	  if (typeof str !== 'string' || !o) {
	    return str;
	  }
	
	  return str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
	    if (match.charAt(0) === '\\') {
	      return match.slice(1);
	    }
	    return o[name] === undefined ? EMPTY : o[name];
	  });
	}
	
	patternChars = patternChars.join('') + 'ahkKZE';
	
	function encode(lastField, count, compiledPattern) {
	  compiledPattern.push({
	    field: lastField,
	    count: count
	  });
	}
	
	function compile(pattern) {
	  var length = pattern.length;
	  var inQuote = false;
	  var compiledPattern = [];
	  var tmpBuffer = null;
	  var count = 0;
	  var lastField = -1;
	
	  for (var i = 0; i < length; i++) {
	    var c = pattern.charAt(i);
	
	    if (c === '\'') {
	      // '' is treated as a single quote regardless of being
	      // in a quoted section.
	      if (i + 1 < length) {
	        c = pattern.charAt(i + 1);
	        if (c === '\'') {
	          i++;
	          if (count !== 0) {
	            encode(lastField, count, compiledPattern);
	            lastField = -1;
	            count = 0;
	          }
	          if (inQuote) {
	            tmpBuffer += c;
	          }
	          continue;
	        }
	      }
	      if (!inQuote) {
	        if (count !== 0) {
	          encode(lastField, count, compiledPattern);
	          lastField = -1;
	          count = 0;
	        }
	        tmpBuffer = '';
	        inQuote = true;
	      } else {
	        compiledPattern.push({
	          text: tmpBuffer
	        });
	        inQuote = false;
	      }
	      continue;
	    }
	    if (inQuote) {
	      tmpBuffer += c;
	      continue;
	    }
	    if (!(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')) {
	      if (count !== 0) {
	        encode(lastField, count, compiledPattern);
	        lastField = -1;
	        count = 0;
	      }
	      compiledPattern.push({
	        text: c
	      });
	      continue;
	    }
	
	    if (patternChars.indexOf(c) === -1) {
	      throw new Error('Illegal pattern character "' + c + '"');
	    }
	
	    if (lastField === -1 || lastField === c) {
	      lastField = c;
	      count++;
	      continue;
	    }
	    encode(lastField, count, compiledPattern);
	    lastField = c;
	    count = 1;
	  }
	
	  if (inQuote) {
	    throw new Error('Unterminated quote');
	  }
	
	  if (count !== 0) {
	    encode(lastField, count, compiledPattern);
	  }
	
	  return compiledPattern;
	}
	
	var zeroDigit = '0';
	
	// TODO zeroDigit localization??
	function zeroPaddingNumber(_x, _x2, _x3, _x4) {
	  var _again = true;
	
	  _function: while (_again) {
	    var value = _x,
	        minDigits = _x2,
	        maxDigits_ = _x3,
	        b = _x4;
	    _again = false;
	
	    // Optimization for 1, 2 and 4 digit numbers. This should
	    // cover most cases of formatting date/time related items.
	    // Note: This optimization code assumes that maxDigits is
	    // either 2 or Integer.MAX_VALUE (maxIntCount in format()).
	    var buffer = b || [];
	    var maxDigits = maxDigits_ || MAX_VALUE;
	    if (value >= 0) {
	      if (value < 100 && minDigits >= 1 && minDigits <= 2) {
	        if (value < 10 && minDigits === 2) {
	          buffer.push(zeroDigit);
	        }
	        buffer.push(value);
	        return buffer.join('');
	      } else if (value >= 1000 && value < 10000) {
	        if (minDigits === 4) {
	          buffer.push(value);
	          return buffer.join('');
	        }
	        if (minDigits === 2 && maxDigits === 2) {
	          _x = value % 100;
	          _x2 = 2;
	          _x3 = 2;
	          _x4 = buffer;
	          _again = true;
	          buffer = maxDigits = undefined;
	          continue _function;
	        }
	      }
	    }
	    buffer.push(value + '');
	    return buffer.join('');
	  }
	}
	
	/**
	 *
	 * date time formatter for GregorianCalendar
	 *
	 *      @example
	 *
	 *          const calendar = new GregorianCalendar(2013,9,24);
	 *          // ' to escape
	 *          const formatter = new GregorianCalendarFormat("'today is' ''yyyy/MM/dd a''");
	 *          document.write(formatter.format(calendar));
	 *
	 * @class GregorianCalendarFormat
	 * @param {String} pattern patter string of date formatter
	 *
	 * <table border="1">
	 * <thead valign="bottom">
	 * <tr><th class="head">Letter</th>
	 * <th class="head">Date or Time Component</th>
	 * <th class="head">Presentation</th>
	 * <th class="head">Examples</th>
	 * </tr>
	 * </thead>
	 * <tbody valign="top">
	 * <tr><td>G</td>
	 * <td>Era designator</td>
	 * <td>Text</td>
	 * <td>AD</td>
	 * </tr>
	 * <tr><td>y</td>
	 * <td>Year</td>
	 * <td>Year</td>
	 * <td>1996; 96</td>
	 * </tr>
	 * <tr><td>M</td>
	 * <td>Month in year</td>
	 * <td>Month</td>
	 * <td>July; Jul; 07</td>
	 * </tr>
	 * <tr><td>w</td>
	 * <td>Week in year</td>
	 * <td>Number</td>
	 * <td>27</td>
	 * </tr>
	 * <tr><td>W</td>
	 * <td>Week in month</td>
	 * <td>Number</td>
	 * <td>2</td>
	 * </tr>
	 * <tr><td>D</td>
	 * <td>Day in year</td>
	 * <td>Number</td>
	 * <td>189</td>
	 * </tr>
	 * <tr><td>d</td>
	 * <td>Day in month</td>
	 * <td>Number</td>
	 * <td>10</td>
	 * </tr>
	 * <tr><td>F</td>
	 * <td>Day of week in month</td>
	 * <td>Number</td>
	 * <td>2</td>
	 * </tr>
	 * <tr><td>E</td>
	 * <td>Day in week</td>
	 * <td>Text</td>
	 * <td>Tuesday; Tue</td>
	 * </tr>
	 * <tr><td>a</td>
	 * <td>Am/pm marker</td>
	 * <td>Text</td>
	 * <td>PM</td>
	 * </tr>
	 * <tr><td>H</td>
	 *       <td>Hour in day (0-23)</td>
	 * <td>Number</td>
	 * <td>0</td>
	 * </tr>
	 * <tr><td>k</td>
	 *       <td>Hour in day (1-24)</td>
	 * <td>Number</td>
	 * <td>24</td>
	 * </tr>
	 * <tr><td>K</td>
	 * <td>Hour in am/pm (0-11)</td>
	 * <td>Number</td>
	 * <td>0</td>
	 * </tr>
	 * <tr><td>h</td>
	 * <td>Hour in am/pm (1-12)</td>
	 * <td>Number</td>
	 * <td>12</td>
	 * </tr>
	 * <tr><td>m</td>
	 * <td>Minute in hour</td>
	 * <td>Number</td>
	 * <td>30</td>
	 * </tr>
	 * <tr><td>s</td>
	 * <td>Second in minute</td>
	 * <td>Number</td>
	 * <td>55</td>
	 * </tr>
	 * <tr><td>S</td>
	 * <td>Millisecond</td>
	 * <td>Number</td>
	 * <td>978</td>
	 * </tr>
	 * <tr><td>x/z</td>
	 * <td>Time zone</td>
	 * <td>General time zone</td>
	 * <td>Pacific Standard Time; PST; GMT-08:00</td>
	 * </tr>
	 * <tr><td>Z</td>
	 * <td>Time zone</td>
	 * <td>RFC 822 time zone</td>
	 * <td>-0800</td>
	 * </tr>
	 * </tbody>
	 * </table>
	
	 * @param {Object} locale format locale
	 */
	function DateTimeFormat(pattern, locale) {
	  this.locale = locale || enUsLocale;
	  this.originalPattern = pattern;
	  this.pattern = compile(pattern);
	}
	
	function formatField(field, count, locale, calendar) {
	  var current = undefined;
	  var value = undefined;
	  switch (field) {
	    case 'G':
	      value = calendar.getYear() > 0 ? 1 : 0;
	      current = locale.eras[value];
	      break;
	    case 'Y':
	      value = calendar.getWeekYear();
	      if (value <= 0) {
	        value = 1 - value;
	      }
	      current = zeroPaddingNumber(value, 2, count !== 2 ? MAX_VALUE : 2);
	      break;
	    case 'y':
	      value = calendar.getYear();
	      if (value <= 0) {
	        value = 1 - value;
	      }
	      current = zeroPaddingNumber(value, 2, count !== 2 ? MAX_VALUE : 2);
	      break;
	    case 'M':
	      value = calendar.getMonth();
	      if (count >= 4) {
	        current = locale.months[value];
	      } else if (count === 3) {
	        current = locale.shortMonths[value];
	      } else {
	        current = zeroPaddingNumber(value + 1, count);
	      }
	      break;
	    case 'k':
	      current = zeroPaddingNumber(calendar.getHourOfDay() || 24, count);
	      break;
	    case 'E':
	      value = calendar.getDayOfWeek();
	      current = count >= 4 ? locale.weekdays[value] : locale.shortWeekdays[value];
	      break;
	    case 'a':
	      current = locale.ampms[calendar.getHourOfDay() >= 12 ? 1 : 0];
	      break;
	    case 'h':
	      current = zeroPaddingNumber(calendar.getHourOfDay() % 12 || 12, count);
	      break;
	    case 'K':
	      current = zeroPaddingNumber(calendar.getHourOfDay() % 12, count);
	      break;
	    case 'Z':
	      var offset = calendar.getTimezoneOffset();
	      var parts = [offset < 0 ? '-' : '+'];
	      offset = Math.abs(offset);
	      parts.push(zeroPaddingNumber(Math.floor(offset / 60) % 100, 2), zeroPaddingNumber(offset % 60, 2));
	      current = parts.join('');
	      break;
	    default:
	      // case 'd':
	      // case 'H':
	      // case 'm':
	      // case 's':
	      // case 'S':
	      // case 'D':
	      // case 'F':
	      // case 'w':
	      // case 'W':
	      var index = calendarIndexMap[field];
	      value = calendar.get(index);
	      current = zeroPaddingNumber(value, count);
	  }
	  return current;
	}
	
	function matchPartString(dateStr, startIndex, match, mLen) {
	  for (var i = 0; i < mLen; i++) {
	    if (dateStr.charAt(startIndex + i) !== match.charAt(i)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function matchField(dateStr, startIndex, matches) {
	  var matchedLen = -1;
	  var index = -1;
	  var i = undefined;
	  var len = matches.length;
	  for (i = 0; i < len; i++) {
	    var m = matches[i];
	    var mLen = m.length;
	    if (mLen > matchedLen && matchPartString(dateStr, startIndex, m, mLen)) {
	      matchedLen = mLen;
	      index = i;
	    }
	  }
	  return index >= 0 ? {
	    value: index,
	    startIndex: startIndex + matchedLen
	  } : null;
	}
	
	function getLeadingNumberLen(str) {
	  var i = undefined;
	  var c = undefined;
	  var len = str.length;
	  for (i = 0; i < len; i++) {
	    c = str.charAt(i);
	    if (c < '0' || c > '9') {
	      break;
	    }
	  }
	  return i;
	}
	
	function matchNumber(dateStr, startIndex, count, obeyCount) {
	  var str = dateStr;
	  var n = undefined;
	  if (obeyCount) {
	    if (dateStr.length < startIndex + count) {
	      return null;
	    }
	    str = dateStr.slice(startIndex, startIndex + count);
	    if (!str.match(/^\d+$/)) {
	      throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
	    }
	  } else {
	    str = str.slice(startIndex);
	  }
	  n = parseInt(str, 10);
	  if (isNaN(n)) {
	    throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
	  }
	  return {
	    value: n,
	    startIndex: startIndex + getLeadingNumberLen(str)
	  };
	}
	
	function parseField(calendar, dateStr, startIndex_, field, count, obeyCount, tmp) {
	  var match = undefined;
	  var year = undefined;
	  var hour = undefined;
	  var startIndex = startIndex_;
	  if (dateStr.length <= startIndex) {
	    return startIndex;
	  }
	  var locale = this.locale;
	  switch (field) {
	    case 'G':
	      match = matchField(dateStr, startIndex, locale.eras);
	      if (match) {
	        if (calendar.isSetYear()) {
	          if (match.value === 0) {
	            year = calendar.getYear();
	            calendar.setYear(1 - year);
	          }
	        } else {
	          tmp.era = match.value;
	        }
	      }
	      break;
	    case 'y':
	      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
	      if (match) {
	        year = match.value;
	        if ('era' in tmp) {
	          if (tmp.era === 0) {
	            year = 1 - year;
	          }
	        }
	        calendar.setYear(year);
	      }
	      break;
	    case 'M':
	      var month = undefined;
	      if (count >= 3) {
	        match = matchField(dateStr, startIndex, locale[count === 3 ? 'shortMonths' : 'months']);
	        if (match) {
	          month = match.value;
	        }
	      } else {
	        match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
	        if (match) {
	          month = match.value - 1;
	        }
	      }
	      if (match) {
	        calendar.setMonth(month);
	      }
	      break;
	    case 'k':
	      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
	      if (match) {
	        calendar.setHourOfDay(match.value % 24);
	      }
	      break;
	    case 'E':
	      match = matchField(dateStr, startIndex, locale[count > 3 ? 'weekdays' : 'shortWeekdays']);
	      if (match) {
	        calendar.setDayOfWeek(match.value);
	      }
	      break;
	    case 'a':
	      match = matchField(dateStr, startIndex, locale.ampms);
	      if (match) {
	        if (calendar.isSetHourOfDay()) {
	          if (match.value) {
	            hour = calendar.getHourOfDay();
	            if (hour < 12) {
	              calendar.setHourOfDay((hour + 12) % 24);
	            }
	          }
	        } else {
	          tmp.ampm = match.value;
	        }
	      }
	      break;
	    case 'h':
	      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
	      if (match) {
	        hour = match.value %= 12;
	        if (tmp.ampm) {
	          hour += 12;
	        }
	        calendar.setHourOfDay(hour);
	      }
	      break;
	    case 'K':
	      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
	      if (match) {
	        hour = match.value;
	        if (tmp.ampm) {
	          hour += 12;
	        }
	        calendar.setHourOfDay(hour);
	      }
	      break;
	    case 'Z':
	      // let sign = 1;
	      var zoneChar = dateStr.charAt(startIndex);
	      if (zoneChar === '-') {
	        // sign = -1;
	        startIndex++;
	      } else if (zoneChar === '+') {
	        startIndex++;
	      } else {
	        break;
	      }
	      match = matchNumber.call(this, dateStr, startIndex, 2, true);
	      if (match) {
	        var zoneOffset = match.value * 60;
	        startIndex = match.startIndex;
	        match = matchNumber.call(this, dateStr, startIndex, 2, true);
	        if (match) {
	          zoneOffset += match.value;
	        }
	        calendar.setTimezoneOffset(zoneOffset);
	      }
	      break;
	    default:
	      // case 'd':
	      // case 'H':
	      // case 'm':
	      // case 's':
	      // case 'S':
	      // case 'D':
	      // case 'F':
	      // case 'w':
	      // case 'W'
	      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
	      if (match) {
	        var index = calendarIndexMap[field];
	        calendar.set(index, match.value);
	      }
	  }
	  if (match) {
	    startIndex = match.startIndex;
	  }
	  return startIndex;
	}
	
	mix(DateTimeFormat.prototype, {
	  /*
	   * format a GregorianDate instance according to specified pattern
	   * @param {GregorianCalendar} calendar GregorianDate instance
	   * @returns {string} formatted string of GregorianDate instance
	   */
	  format: function format(calendar) {
	    if (!calendar.isGregorianCalendar) {
	      throw new Error('calendar must be type of GregorianCalendar');
	    }
	    var i = undefined;
	    var ret = [];
	    var pattern = this.pattern;
	    var len = pattern.length;
	    for (i = 0; i < len; i++) {
	      var comp = pattern[i];
	      if (comp.text) {
	        ret.push(comp.text);
	      } else if ('field' in comp) {
	        ret.push(formatField(comp.field, comp.count, this.locale, calendar));
	      }
	    }
	    return ret.join('');
	  },
	
	  /*
	   * parse a formatted string of GregorianDate instance according to specified pattern
	   * @param {String} dateStr formatted string of GregorianDate
	   * @returns {GregorianCalendar}
	   */
	  parse: function parse(dateStr, option_) {
	    var option = option_ || {};
	    var calendarLocale = option.locale;
	    var calendar = new GregorianCalendar(calendarLocale);
	    var i = undefined;
	    var j = undefined;
	    var tmp = {};
	    var obeyCount = option.obeyCount || false;
	    var dateStrLen = dateStr.length;
	    var errorIndex = -1;
	    var startIndex = 0;
	    var oldStartIndex = 0;
	    var pattern = this.pattern;
	    var len = pattern.length;
	    /* eslint no-labels: 0 no-empty-label:0 */
	    loopPattern: {
	      for (i = 0; errorIndex < 0 && i < len; i++) {
	        var comp = pattern[i];
	        var text = undefined;
	        var textLen = undefined;
	        oldStartIndex = startIndex;
	        text = comp.text;
	        if (text) {
	          textLen = text.length;
	          if (textLen + startIndex > dateStrLen) {
	            errorIndex = startIndex;
	          } else {
	            for (j = 0; j < textLen; j++) {
	              if (text.charAt(j) !== dateStr.charAt(j + startIndex)) {
	                errorIndex = startIndex;
	                break loopPattern;
	              }
	            }
	            startIndex += textLen;
	          }
	        } else if ('field' in comp) {
	          if (!option.obeyCount) {
	            var nextComp = pattern[i + 1];
	            obeyCount = false;
	            if (nextComp) {
	              if ('field' in nextComp) {
	                obeyCount = true;
	              } else {
	                var c = nextComp.text.charAt(0);
	                if (c >= '0' && c <= '9') {
	                  obeyCount = true;
	                }
	              }
	            }
	          }
	          startIndex = parseField.call(this, calendar, dateStr, startIndex, comp.field, comp.count, obeyCount, tmp);
	          if (startIndex === oldStartIndex) {
	            errorIndex = startIndex;
	          }
	        }
	      }
	    }
	
	    if (errorIndex >= 0) {
	      warning(false, 'error when parsing date: ' + dateStr + ', position: ' + dateStr.slice(0, errorIndex) + '^');
	      return undefined;
	    }
	    return calendar;
	  }
	});
	
	mix(DateTimeFormat, {
	  Style: DateTimeStyle,
	
	  /*
	   * get a formatter instance of short style pattern.
	   * en-us: M/d/yy h:mm a
	   * zh-cn: yy-M-d ah:mm
	   * @param {Object} locale locale object
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getInstance: function getInstance(locale) {
	    return this.getDateTimeInstance(DateTimeStyle.SHORT, DateTimeStyle.SHORT, locale);
	  },
	
	  /*
	   * get a formatter instance of specified date style.
	   * @param {Date.Formatter.Style} dateStyle date format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getDateInstance: function getDateInstance(dateStyle, locale) {
	    return this.getDateTimeInstance(dateStyle, undefined, locale);
	  },
	
	  /*
	   * get a formatter instance of specified date style and time style.
	   * @param {Date.Formatter.Style} dateStyle date format style
	   * @param {Date.Formatter.Style} timeStyle time format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getDateTimeInstance: function getDateTimeInstance(dateStyle, timeStyle, locale_) {
	    var locale = locale_ || enUsLocale;
	    var datePattern = '';
	    if (dateStyle !== undefined) {
	      datePattern = locale.datePatterns[dateStyle];
	    }
	    var timePattern = '';
	    if (timeStyle !== undefined) {
	      timePattern = locale.timePatterns[timeStyle];
	    }
	    var pattern = datePattern;
	    if (timePattern) {
	      if (datePattern) {
	        pattern = substitute(locale.dateTimePattern, {
	          date: datePattern,
	          time: timePattern
	        });
	      } else {
	        pattern = timePattern;
	      }
	    }
	    return new DateTimeFormat(pattern, locale);
	  },
	
	  /*
	   * get a formatter instance of specified time style.
	   * @param {Date.Formatter.Style} timeStyle time format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getTimeInstance: function getTimeInstance(timeStyle, locale) {
	    return this.getDateTimeInstance(undefined, timeStyle, locale);
	  }
	});
	
	module.exports = DateTimeFormat;
	
	DateTimeFormat.version = '@VERSION@';
	
	// gc_format@163.com

/***/ },
/* 361 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  eras: ['BC', 'AD'],
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	  shortWeekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  veryShortWeekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	  ampms: ['AM', 'PM'],
	  datePatterns: ['EEEE, MMMM d, yyyy', 'MMMM d, yyyy', 'MMM d, yyyy', 'M/d/yy'],
	  timePatterns: ['h:mm:ss a \'GMT\'Z', 'h:mm:ss a', 'h:mm:ss a', 'h:mm a'],
	  dateTimePattern: '{date} {time}'
	};

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MonthPanel = __webpack_require__(363);
	
	var _MonthPanel2 = _interopRequireDefault(_MonthPanel);
	
	var _index = __webpack_require__(359);
	
	var _YearPanel = __webpack_require__(364);
	
	var _YearPanel2 = _interopRequireDefault(_YearPanel);
	
	var _rcUtil = __webpack_require__(289);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toFragment = _rcUtil2.default.Children.mapSelf;
	
	function goMonth(direction) {
	  var next = this.props.value.clone();
	  next.addMonth(direction);
	  this.props.onValueChange(next);
	}
	
	function goYear(direction) {
	  var next = this.props.value.clone();
	  next.addYear(direction);
	  this.props.onValueChange(next);
	}
	
	var CalendarHeader = _react2.default.createClass({
	  displayName: 'CalendarHeader',
	
	  propTypes: {
	    enablePrev: _react.PropTypes.any,
	    enableNext: _react.PropTypes.any,
	    prefixCls: _react.PropTypes.string,
	    locale: _react.PropTypes.object,
	    value: _react.PropTypes.object,
	    onValueChange: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      enableNext: 1,
	      enablePrev: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    this.yearFormatter = (0, _index.getFormatter)(props.locale.yearFormat, props.locale);
	    this.monthFormatter = (0, _index.getFormatter)(props.locale.monthFormat, props.locale);
	    this.nextMonth = goMonth.bind(this, 1);
	    this.previousMonth = goMonth.bind(this, -1);
	    this.nextYear = goYear.bind(this, 1);
	    this.previousYear = goYear.bind(this, -1);
	    return {};
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var locale = this.props.locale;
	    var nextLocale = nextProps.locale;
	
	    if (nextLocale !== locale) {
	      this.yearFormatter = (0, _index.getFormatter)(nextLocale.yearFormat, nextLocale);
	      this.monthFormatter = (0, _index.getFormatter)(nextLocale.monthFormat, nextLocale);
	    }
	  },
	  onSelect: function onSelect(value) {
	    this.setState({
	      showMonthPanel: 0,
	      showYearPanel: 0
	    });
	    this.props.onValueChange(value);
	  },
	  getMonthYearElement: function getMonthYearElement() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var locale = props.locale;
	    var value = this.props.value;
	    var monthBeforeYear = locale.monthBeforeYear;
	    var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
	    var year = _react2.default.createElement(
	      'a',
	      {
	        className: prefixCls + '-year-select',
	        role: 'button',
	        onClick: this.showYearPanel,
	        title: locale.monthSelect
	      },
	      this.yearFormatter.format(value)
	    );
	    var month = _react2.default.createElement(
	      'a',
	      {
	        className: prefixCls + '-month-select',
	        role: 'button',
	        onClick: this.showMonthPanel,
	        title: locale.monthSelect
	      },
	      this.monthFormatter.format(value)
	    );
	    var my = [];
	    if (monthBeforeYear) {
	      my = [month, year];
	    } else {
	      my = [year, month];
	    }
	    return _react2.default.createElement(
	      'span',
	      { className: selectClassName },
	      toFragment(my)
	    );
	  },
	  showIf: function showIf(condition, el) {
	    return condition ? el : null;
	  },
	  showMonthPanel: function showMonthPanel() {
	    this.setState({
	      showMonthPanel: 1,
	      showYearPanel: 0
	    });
	  },
	  showYearPanel: function showYearPanel() {
	    this.setState({
	      showMonthPanel: 0,
	      showYearPanel: 1
	    });
	  },
	  render: function render() {
	    var props = this.props;
	    var enableNext = props.enableNext;
	    var enablePrev = props.enablePrev;
	    var prefixCls = props.prefixCls;
	    var locale = props.locale;
	    var value = props.value;
	
	    var state = this.state;
	    var PanelClass = null;
	    if (state.showMonthPanel) {
	      PanelClass = _MonthPanel2.default;
	    } else if (state.showYearPanel) {
	      PanelClass = _YearPanel2.default;
	    }
	    var panel = undefined;
	    if (PanelClass) {
	      panel = _react2.default.createElement(PanelClass, {
	        locale: locale,
	        defaultValue: value,
	        rootPrefixCls: prefixCls,
	        onSelect: this.onSelect
	      });
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: prefixCls + '-header' },
	      _react2.default.createElement(
	        'div',
	        { style: { position: 'relative' } },
	        this.showIf(enablePrev, _react2.default.createElement(
	          'a',
	          {
	            className: prefixCls + '-prev-year-btn',
	            role: 'button',
	            onClick: this.previousYear,
	            title: locale.previousYear
	          },
	          '«'
	        )),
	        this.showIf(enablePrev, _react2.default.createElement(
	          'a',
	          {
	            className: prefixCls + '-prev-month-btn',
	            role: 'button',
	            onClick: this.previousMonth,
	            title: locale.previousMonth
	          },
	          '‹'
	        )),
	        this.getMonthYearElement(),
	        this.showIf(enableNext, _react2.default.createElement(
	          'a',
	          {
	            className: prefixCls + '-next-month-btn',
	            onClick: this.nextMonth,
	            title: locale.nextMonth
	          },
	          '›'
	        )),
	        this.showIf(enableNext, _react2.default.createElement(
	          'a',
	          {
	            className: prefixCls + '-next-year-btn',
	            onClick: this.nextYear,
	            title: locale.nextYear
	          },
	          '»'
	        ))
	      ),
	      panel
	    );
	  }
	});
	
	exports.default = CalendarHeader;
	module.exports = exports['default'];

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _YearPanel = __webpack_require__(364);
	
	var _YearPanel2 = _interopRequireDefault(_YearPanel);
	
	var _MonthTable = __webpack_require__(366);
	
	var _MonthTable2 = _interopRequireDefault(_MonthTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setAndChangeValue(next);
	}
	
	function noop() {}
	
	var MonthPanel = _react2.default.createClass({
	  displayName: 'MonthPanel',
	
	  propTypes: {
	    onChange: _react.PropTypes.func,
	    disabledDate: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onChange: noop,
	      onSelect: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    // bind methods
	    this.nextYear = goYear.bind(this, 1);
	    this.previousYear = goYear.bind(this, -1);
	    this.prefixCls = props.rootPrefixCls + '-month-panel';
	    return {
	      value: props.value || props.defaultValue
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      this.setState({
	        value: nextProps.value
	      });
	    }
	  },
	  onYearPanelSelect: function onYearPanelSelect(current) {
	    this.setState({
	      showYearPanel: 0
	    });
	    this.setAndChangeValue(current);
	  },
	  setAndChangeValue: function setAndChangeValue(value) {
	    this.setValue(value);
	    this.props.onChange(value);
	  },
	  setAndSelectValue: function setAndSelectValue(value) {
	    this.setValue(value);
	    this.props.onSelect(value);
	  },
	  setValue: function setValue(value) {
	    if (!('value' in this.props)) {
	      this.setState({
	        value: value
	      });
	    }
	  },
	  showYearPanel: function showYearPanel() {
	    this.setState({
	      showYearPanel: 1
	    });
	  },
	  render: function render() {
	    var props = this.props;
	    var value = this.state.value;
	    var locale = props.locale;
	    var year = value.getYear();
	    var prefixCls = this.prefixCls;
	    var yearPanel = undefined;
	    if (this.state.showYearPanel) {
	      yearPanel = _react2.default.createElement(_YearPanel2.default, {
	        locale: locale,
	        value: value,
	        rootPrefixCls: props.rootPrefixCls,
	        onSelect: this.onYearPanelSelect
	      });
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: prefixCls, style: props.style },
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-header' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: prefixCls + '-prev-year-btn',
	              role: 'button',
	              onClick: this.previousYear,
	              title: locale.previousYear
	            },
	            '«'
	          ),
	          _react2.default.createElement(
	            'a',
	            {
	              className: prefixCls + '-year-select',
	              role: 'button',
	              onClick: this.showYearPanel,
	              title: locale.yearSelect
	            },
	            _react2.default.createElement(
	              'span',
	              { className: prefixCls + '-year-select-content' },
	              year
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: prefixCls + '-year-select-arrow' },
	              'x'
	            )
	          ),
	          _react2.default.createElement(
	            'a',
	            {
	              className: prefixCls + '-next-year-btn',
	              role: 'button',
	              onClick: this.nextYear,
	              title: locale.nextYear
	            },
	            '»'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-body' },
	          _react2.default.createElement(_MonthTable2.default, {
	            disabledDate: props.disabledDate,
	            onSelect: this.setAndSelectValue,
	            locale: locale,
	            value: value,
	            prefixCls: prefixCls
	          })
	        )
	      ),
	      yearPanel
	    );
	  }
	});
	
	exports.default = MonthPanel;
	module.exports = exports['default'];

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _DecadePanel = __webpack_require__(365);
	
	var _DecadePanel2 = _interopRequireDefault(_DecadePanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ROW = 4;
	var COL = 3;
	
	function goYear(direction) {
	  var value = this.state.value.clone();
	  value.addYear(direction);
	  this.setState({
	    value: value
	  });
	}
	
	function chooseYear(year) {
	  var value = this.state.value.clone();
	  value.setYear(year);
	  value.rollSetMonth(this.state.value.getMonth());
	  this.props.onSelect(value);
	}
	
	var YearPanel = function (_React$Component) {
	  _inherits(YearPanel, _React$Component);
	
	  function YearPanel(props) {
	    _classCallCheck(this, YearPanel);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(YearPanel).call(this, props));
	
	    _this.prefixCls = props.rootPrefixCls + '-year-panel';
	    _this.state = {
	      value: props.value || props.defaultValue
	    };
	    _this.nextDecade = goYear.bind(_this, 10);
	    _this.previousDecade = goYear.bind(_this, -10);
	    ['showDecadePanel', 'onDecadePanelSelect'].forEach(function (method) {
	      _this[method] = _this[method].bind(_this);
	    });
	    return _this;
	  }
	
	  _createClass(YearPanel, [{
	    key: 'onDecadePanelSelect',
	    value: function onDecadePanelSelect(current) {
	      this.setState({
	        value: current,
	        showDecadePanel: 0
	      });
	    }
	  }, {
	    key: 'getYears',
	    value: function getYears() {
	      var value = this.state.value;
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 10, 10) * 10;
	      var previousYear = startYear - 1;
	      var endYear = startYear + 9;
	      var years = [];
	      var index = 0;
	      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
	        years[rowIndex] = [];
	        for (var colIndex = 0; colIndex < COL; colIndex++) {
	          var year = previousYear + index;
	          var content = undefined;
	          if (year < startYear) {
	            content = '';
	          } else if (year > endYear) {
	            content = '';
	          } else {
	            content = String(year);
	          }
	          years[rowIndex][colIndex] = {
	            content: content,
	            year: year,
	            title: content
	          };
	          index++;
	        }
	      }
	      return years;
	    }
	  }, {
	    key: 'showDecadePanel',
	    value: function showDecadePanel() {
	      this.setState({
	        showDecadePanel: 1
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var props = this.props;
	      var value = this.state.value;
	      var locale = props.locale;
	      var years = this.getYears();
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 10, 10) * 10;
	      var endYear = startYear + 9;
	      var prefixCls = this.prefixCls;
	
	      var yeasEls = years.map(function (row, index) {
	        var tds = row.map(function (yearData) {
	          var _classNameMap;
	
	          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', yearData.year === currentYear), _defineProperty(_classNameMap, prefixCls + '-last-decade-cell', yearData.year < startYear), _defineProperty(_classNameMap, prefixCls + '-next-decade-cell', yearData.year > endYear), _classNameMap);
	          var clickHandler = undefined;
	          if (yearData.year < startYear) {
	            clickHandler = _this2.previousDecade;
	          } else if (yearData.year > endYear) {
	            clickHandler = _this2.nextDecade;
	          } else {
	            clickHandler = chooseYear.bind(_this2, yearData.year);
	          }
	          return _react2.default.createElement(
	            'td',
	            {
	              role: 'gridcell',
	              title: yearData.title,
	              key: yearData.content,
	              onClick: clickHandler,
	              className: (0, _classnames2.default)(classNameMap)
	            },
	            _react2.default.createElement(
	              'a',
	              {
	                className: prefixCls + '-year'
	              },
	              yearData.content
	            )
	          );
	        });
	        return _react2.default.createElement(
	          'tr',
	          { key: index, role: 'row' },
	          tds
	        );
	      });
	
	      var decadePanel = undefined;
	      if (this.state.showDecadePanel) {
	        decadePanel = _react2.default.createElement(_DecadePanel2.default, {
	          locale: locale,
	          value: value,
	          rootPrefixCls: props.rootPrefixCls,
	          onSelect: this.onDecadePanelSelect
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: this.prefixCls },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-header' },
	            _react2.default.createElement(
	              'a',
	              {
	                className: prefixCls + '-prev-decade-btn',
	                role: 'button',
	                onClick: this.previousDecade,
	                title: locale.previousDecade
	              },
	              '«'
	            ),
	            _react2.default.createElement(
	              'a',
	              {
	                className: prefixCls + '-decade-select',
	                role: 'button',
	                onClick: this.showDecadePanel,
	                title: locale.decadeSelect
	              },
	              _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-decade-select-content' },
	                startYear,
	                '-',
	                endYear
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-decade-select-arrow' },
	                'x'
	              )
	            ),
	            _react2.default.createElement(
	              'a',
	              {
	                className: prefixCls + '-next-decade-btn',
	                role: 'button',
	                onClick: this.nextDecade,
	                title: locale.nextDecade
	              },
	              '»'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-body' },
	            _react2.default.createElement(
	              'table',
	              { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	              _react2.default.createElement(
	                'tbody',
	                { className: prefixCls + '-tbody' },
	                yeasEls
	              )
	            )
	          )
	        ),
	        decadePanel
	      );
	    }
	  }]);
	
	  return YearPanel;
	}(_react2.default.Component);
	
	exports.default = YearPanel;
	
	
	YearPanel.propTypes = {
	  rootPrefixCls: _react.PropTypes.string,
	  value: _react.PropTypes.object,
	  defaultValue: _react.PropTypes.object
	};
	
	YearPanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	module.exports = exports['default'];

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ROW = 4;
	var COL = 3;
	
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({
	    value: next
	  });
	}
	
	function chooseDecade(year, event) {
	  var next = this.state.value.clone();
	  next.setYear(year);
	  next.rollSetMonth(this.state.value.getMonth());
	  this.props.onSelect(next);
	  event.preventDefault();
	}
	
	var DecadePanel = function (_React$Component) {
	  _inherits(DecadePanel, _React$Component);
	
	  function DecadePanel(props) {
	    _classCallCheck(this, DecadePanel);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DecadePanel).call(this, props));
	
	    _this.state = {
	      value: props.value || props.defaultValue
	    };
	
	    // bind methods
	    _this.prefixCls = props.rootPrefixCls + '-decade-panel';
	    _this.nextCentury = goYear.bind(_this, 100);
	    _this.previousCentury = goYear.bind(_this, -100);
	    return _this;
	  }
	
	  _createClass(DecadePanel, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var value = this.state.value;
	      var locale = this.props.locale;
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 100, 10) * 100;
	      var preYear = startYear - 10;
	      var endYear = startYear + 99;
	      var decades = [];
	      var index = 0;
	      var prefixCls = this.prefixCls;
	
	      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
	        decades[rowIndex] = [];
	        for (var colIndex = 0; colIndex < COL; colIndex++) {
	          var startDecade = preYear + index * 10;
	          var endDecade = preYear + index * 10 + 9;
	          decades[rowIndex][colIndex] = {
	            startDecade: startDecade,
	            endDecade: endDecade
	          };
	          index++;
	        }
	      }
	
	      var decadesEls = decades.map(function (row, decadeIndex) {
	        var tds = row.map(function (decadeData) {
	          var _classNameMap;
	
	          var dStartDecade = decadeData.startDecade;
	          var dEndDecade = decadeData.endDecade;
	          var isLast = dStartDecade < startYear;
	          var isNext = dEndDecade > endYear;
	          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', dStartDecade <= currentYear && currentYear <= dEndDecade), _defineProperty(_classNameMap, prefixCls + '-last-century-cell', isLast), _defineProperty(_classNameMap, prefixCls + '-next-century-cell', isNext), _classNameMap);
	          var content = undefined;
	          var clickHandler = undefined;
	          if (isLast) {
	            clickHandler = _this2.previousCentury;
	          } else if (isNext) {
	            clickHandler = _this2.nextCentury;
	          } else {
	            content = dStartDecade + '-' + dEndDecade;
	            clickHandler = chooseDecade.bind(_this2, dStartDecade);
	          }
	          return _react2.default.createElement(
	            'td',
	            {
	              key: dStartDecade,
	              onClick: clickHandler,
	              role: 'gridcell',
	              className: (0, _classnames2.default)(classNameMap)
	            },
	            _react2.default.createElement(
	              'a',
	              {
	                className: prefixCls + '-decade'
	              },
	              content
	            )
	          );
	        });
	        return _react2.default.createElement(
	          'tr',
	          { key: decadeIndex, role: 'row' },
	          tds
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: this.prefixCls },
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-header' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: prefixCls + '-prev-century-btn',
	              role: 'button',
	              onClick: this.previousCentury,
	              title: locale.previousCentury
	            },
	            '«'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-century' },
	            startYear,
	            '-',
	            endYear
	          ),
	          _react2.default.createElement(
	            'a',
	            {
	              className: prefixCls + '-next-century-btn',
	              role: 'button',
	              onClick: this.nextCentury,
	              title: locale.nextCentury
	            },
	            '»'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-body' },
	          _react2.default.createElement(
	            'table',
	            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	            _react2.default.createElement(
	              'tbody',
	              { className: prefixCls + '-tbody' },
	              decadesEls
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return DecadePanel;
	}(_react2.default.Component);
	
	exports.default = DecadePanel;
	
	
	DecadePanel.propTypes = {
	  locale: _react.PropTypes.object,
	  value: _react.PropTypes.object,
	  defaultValue: _react.PropTypes.object,
	  rootPrefixCls: _react.PropTypes.string
	};
	
	DecadePanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	module.exports = exports['default'];

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ROW = 4;
	var COL = 3;
	
	function chooseMonth(month) {
	  var next = this.state.value.clone();
	  next.rollSetMonth(month);
	  this.setAndSelectValue(next);
	}
	
	function noop() {}
	
	var MonthTable = function (_Component) {
	  _inherits(MonthTable, _Component);
	
	  function MonthTable(props) {
	    _classCallCheck(this, MonthTable);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MonthTable).call(this, props));
	
	    _this.state = {
	      value: props.value
	    };
	    return _this;
	  }
	
	  _createClass(MonthTable, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ('value' in nextProps) {
	        this.setState({
	          value: nextProps.value
	        });
	      }
	    }
	  }, {
	    key: 'getMonths',
	    value: function getMonths() {
	      var props = this.props;
	      var value = this.state.value;
	      var current = value.clone();
	      var locale = props.locale;
	      var months = [];
	      var shortMonths = locale.format.shortMonths;
	      var index = 0;
	      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
	        months[rowIndex] = [];
	        for (var colIndex = 0; colIndex < COL; colIndex++) {
	          current.rollSetMonth(index);
	          months[rowIndex][colIndex] = {
	            value: index,
	            content: shortMonths[index],
	            title: shortMonths[index]
	          };
	          index++;
	        }
	      }
	      return months;
	    }
	  }, {
	    key: 'setAndSelectValue',
	    value: function setAndSelectValue(value) {
	      this.setState({
	        value: value
	      });
	      this.props.onSelect(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var props = this.props;
	      var value = this.state.value;
	      var today = value.clone();
	      today.setTime(Date.now());
	      var months = this.getMonths();
	      var currentMonth = value.getMonth();
	      var prefixCls = props.prefixCls;
	      var locale = props.locale;
	
	      var monthsEls = months.map(function (month, index) {
	        var tds = month.map(function (monthData) {
	          var _classNameMap;
	
	          var disabled = false;
	          if (props.disabledDate) {
	            var testValue = value.clone();
	            testValue.rollSetMonth(monthData.value);
	            disabled = props.disabledDate(testValue);
	          }
	          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-cell-disabled', disabled), _defineProperty(_classNameMap, prefixCls + '-selected-cell', monthData.value === currentMonth), _defineProperty(_classNameMap, prefixCls + '-current-cell', today.getYear() === value.getYear() && monthData.value === today.getMonth()), _classNameMap);
	          var cellEl = undefined;
	          if (props.cellRender) {
	            var currentValue = value.clone();
	            currentValue.rollSetMonth(monthData.value);
	            cellEl = props.cellRender(currentValue, locale);
	          } else {
	            cellEl = _react2.default.createElement(
	              'a',
	              { className: prefixCls + '-month' },
	              monthData.content
	            );
	          }
	          return _react2.default.createElement(
	            'td',
	            {
	              role: 'gridcell',
	              key: monthData.value,
	              onClick: disabled ? null : chooseMonth.bind(_this2, monthData.value),
	              title: monthData.title,
	              className: (0, _classnames2.default)(classNameMap)
	            },
	            cellEl
	          );
	        });
	        return _react2.default.createElement(
	          'tr',
	          { key: index, role: 'row' },
	          tds
	        );
	      });
	
	      return _react2.default.createElement(
	        'table',
	        { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	        _react2.default.createElement(
	          'tbody',
	          { className: prefixCls + '-tbody' },
	          monthsEls
	        )
	      );
	    }
	  }]);
	
	  return MonthTable;
	}(_react.Component);
	
	MonthTable.defaultProps = {
	  onSelect: noop
	};
	MonthTable.propTypes = {
	  onSelect: _react.PropTypes.func,
	  cellRender: _react.PropTypes.func,
	  prefixCls: _react.PropTypes.string,
	  value: _react.PropTypes.object
	};
	exports.default = MonthTable;
	module.exports = exports['default'];

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(289);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _TodayButton = __webpack_require__(368);
	
	var _TodayButton2 = _interopRequireDefault(_TodayButton);
	
	var _OkButton = __webpack_require__(369);
	
	var _OkButton2 = _interopRequireDefault(_OkButton);
	
	var _index = __webpack_require__(359);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toFragment = _rcUtil2.default.Children.mapSelf;
	
	
	var CalendarFooter = _react2.default.createClass({
	  displayName: 'CalendarFooter',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    showDateInput: _react.PropTypes.bool,
	    disabledTime: _react.PropTypes.any,
	    gregorianCalendarLocale: _react.PropTypes.object,
	    selectedValue: _react.PropTypes.any,
	    showOk: _react.PropTypes.bool,
	    onSelect: _react.PropTypes.func,
	    value: _react.PropTypes.object,
	    defaultValue: _react.PropTypes.object
	  },
	
	  onSelect: function onSelect(value) {
	    this.props.onSelect(value);
	  },
	  getRootDOMNode: function getRootDOMNode() {
	    return _reactDom2.default.findDOMNode(this);
	  },
	  render: function render() {
	    var props = this.props;
	    var value = props.value;
	    var prefixCls = props.prefixCls;
	    var showDateInput = props.showDateInput;
	    var disabledTime = props.disabledTime;
	    var gregorianCalendarLocale = props.gregorianCalendarLocale;
	    var selectedValue = props.selectedValue;
	    var showOk = props.showOk;
	
	    var timePicker = !showDateInput && props.timePicker || null;
	    var disabledTimeConfig = disabledTime && timePicker ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;
	    var footerEl = null;
	    if (props.showToday || timePicker) {
	      var nowEl = undefined;
	      if (props.showToday) {
	        nowEl = _react2.default.createElement(_TodayButton2.default, _extends({}, props, { value: value }));
	      }
	      var okBtn = undefined;
	      if (showOk === true || showOk !== false && !!props.timePicker) {
	        okBtn = _react2.default.createElement(_OkButton2.default, props);
	      }
	      var footerBtn = undefined;
	      if (nowEl || okBtn) {
	        footerBtn = _react2.default.createElement(
	          'span',
	          { className: prefixCls + '-footer-btn' },
	          toFragment([nowEl, okBtn])
	        );
	      }
	      if (timePicker) {
	        timePicker = _react2.default.cloneElement(timePicker, _extends({
	          onChange: this.onSelect,
	          allowEmpty: false,
	          gregorianCalendarLocale: gregorianCalendarLocale
	        }, disabledTimeConfig, {
	          getPopupContainer: this.getRootDOMNode,
	          value: selectedValue
	        }));
	      }
	      footerEl = _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-footer' },
	        timePicker,
	        footerBtn
	      );
	    }
	
	    return footerEl;
	  }
	});
	
	exports.default = CalendarFooter;
	module.exports = exports['default'];

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TodayButton;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(359);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TodayButton(_ref) {
	  var prefixCls = _ref.prefixCls;
	  var locale = _ref.locale;
	  var value = _ref.value;
	  var timePicker = _ref.timePicker;
	  var disabledDate = _ref.disabledDate;
	  var disabledTime = _ref.disabledTime;
	  var onToday = _ref.onToday;
	
	  var disabledToday = false;
	  var localeNow = locale.today;
	  if (timePicker) {
	    localeNow = locale.now || locale.today;
	  }
	  var disabledTodayClass = '';
	  if (disabledDate) {
	    disabledToday = !(0, _util.isAllowedDate)((0, _util.getTodayTime)(value), disabledDate, disabledTime);
	    if (disabledToday) {
	      disabledTodayClass = prefixCls + '-today-btn-disabled';
	    }
	  }
	  return _react2.default.createElement(
	    'a',
	    {
	      className: prefixCls + '-today-btn ' + disabledTodayClass,
	      role: 'button',
	      onClick: disabledToday ? null : onToday,
	      title: (0, _util.getTodayTimeStr)(value)
	    },
	    localeNow
	  );
	}
	module.exports = exports['default'];

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = OkButton;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function OkButton(_ref) {
	  var prefixCls = _ref.prefixCls;
	  var locale = _ref.locale;
	  var okDisabled = _ref.okDisabled;
	  var onOk = _ref.onOk;
	
	  var className = prefixCls + "-ok-btn";
	  if (okDisabled) {
	    className += " " + prefixCls + "-ok-btn-disabled";
	  }
	  return _react2.default.createElement(
	    "a",
	    {
	      className: className,
	      role: "button",
	      onClick: okDisabled ? null : onOk
	    },
	    locale.ok
	  );
	}
	module.exports = exports['default'];

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _gregorianCalendar = __webpack_require__(351);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _index = __webpack_require__(359);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function noop() {}
	
	function getNow() {
	  var value = new _gregorianCalendar2.default();
	  value.setTime(Date.now());
	  return value;
	}
	
	function getNowByCurrentStateValue(value) {
	  var ret = undefined;
	  if (value) {
	    ret = value.clone();
	    ret.setTime(Date.now());
	  } else {
	    ret = getNow();
	  }
	  return ret;
	}
	
	var CalendarMixin = {
	  propTypes: {
	    value: _react.PropTypes.object,
	    defaultValue: _react.PropTypes.object,
	    onKeyDown: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onKeyDown: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var value = props.value || props.defaultValue || getNow();
	    return {
	      value: value,
	      selectedValue: props.selectedValue || props.defaultSelectedValue
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var value = nextProps.value;
	    var selectedValue = nextProps.selectedValue;
	
	    if ('value' in nextProps) {
	      value = value || nextProps.defaultValue || getNowByCurrentStateValue(this.state.value);
	      this.setState({
	        value: value
	      });
	    }
	    if ('selectedValue' in nextProps) {
	      this.setState({
	        selectedValue: selectedValue
	      });
	    }
	  },
	  onSelect: function onSelect(value, cause) {
	    if (value) {
	      this.setValue(value);
	    }
	    this.setSelectedValue(value, cause);
	  },
	  renderRoot: function renderRoot(newProps) {
	    var _className;
	
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	
	    var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, prefixCls + '-hidden', !props.visible), _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, newProps.className, !!newProps.className), _className);
	
	    return _react2.default.createElement(
	      'div',
	      {
	        className: '' + (0, _classnames2.default)(className),
	        style: this.props.style,
	        tabIndex: '0', onKeyDown: this.onKeyDown
	      },
	      newProps.children
	    );
	  },
	  setSelectedValue: function setSelectedValue(selectedValue, cause) {
	    if (this.isAllowedDate(selectedValue)) {
	      if (!('selectedValue' in this.props)) {
	        this.setState({
	          selectedValue: selectedValue
	        });
	      }
	      this.props.onSelect(selectedValue, cause);
	    }
	  },
	  setValue: function setValue(value) {
	    var originalValue = this.state.value;
	    if (!('value' in this.props)) {
	      this.setState({
	        value: value
	      });
	    }
	    if (originalValue && value && originalValue.getTime() !== value.getTime() || !originalValue && value || originalValue && !value) {
	      this.props.onChange(value);
	    }
	  },
	  isAllowedDate: function isAllowedDate(value) {
	    var disabledDate = this.props.disabledDate;
	    var disabledTime = this.props.disabledTime;
	    return (0, _index.isAllowedDate)(value, disabledDate, disabledTime);
	  }
	};
	
	exports.default = CalendarMixin;
	module.exports = exports['default'];

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _en_US = __webpack_require__(372);
	
	var _en_US2 = _interopRequireDefault(_en_US);
	
	var _index = __webpack_require__(359);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function noop() {}
	
	exports.default = {
	  propTypes: {
	    className: _react.PropTypes.string,
	    locale: _react.PropTypes.object,
	    style: _react.PropTypes.object,
	    visible: _react.PropTypes.bool,
	    onSelect: _react.PropTypes.func,
	    prefixCls: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    onOk: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      locale: _en_US2.default,
	      style: {},
	      visible: true,
	      prefixCls: 'rc-calendar',
	      formatter: 'yyyy-MM-dd',
	      className: '',
	      onSelect: noop,
	      onChange: noop,
	      onClear: noop
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	  getFormatter: function getFormatter() {
	    var formatter = this.props.formatter;
	    var locale = this.props.locale;
	    if (this.normalFormatter && formatter === this.lastFormatter) {
	      return this.normalFormatter;
	    }
	    this.normalFormatter = (0, _index.getFormatter)(formatter, locale);
	    this.lastFormatter = formatter;
	    return this.normalFormatter;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _en_US = __webpack_require__(361);
	
	var _en_US2 = _interopRequireDefault(_en_US);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  today: 'Today',
	  now: 'Now',
	  ok: 'Ok',
	  clear: 'Clear',
	  month: 'Month',
	  year: 'Year',
	  monthSelect: 'Choose a month',
	  yearSelect: 'Choose a year',
	  decadeSelect: 'Choose a decade',
	  yearFormat: 'yyyy',
	  dateFormat: 'M/d/yyyy',
	  monthFormat: 'MMMM',
	  monthBeforeYear: true,
	  previousMonth: 'Previous month (PageUp)',
	  nextMonth: 'Next month (PageDown)',
	  previousYear: 'Last year (Control + left)',
	  nextYear: 'Next year (Control + right)',
	  previousDecade: 'Last decade',
	  nextDecade: 'Next decade',
	  previousCentury: 'Last century',
	  nextCentury: 'Next century',
	  format: _en_US2.default
	};
	module.exports = exports['default'];

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(359);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function copyTime(target, source) {
	  if (source) {
	    target.setHourOfDay(source.getHourOfDay());
	    target.setMinutes(source.getMinutes());
	    target.setSeconds(source.getSeconds());
	  }
	  return target;
	}
	
	var DateInput = _react2.default.createClass({
	  displayName: 'DateInput',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    timePicker: _react.PropTypes.object,
	    disabledTime: _react.PropTypes.any,
	    formatter: _react.PropTypes.object,
	    locale: _react.PropTypes.object,
	    gregorianCalendarLocale: _react.PropTypes.object,
	    disabledDate: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    onClear: _react.PropTypes.func,
	    placeholder: _react.PropTypes.string,
	    onSelect: _react.PropTypes.func,
	    selectedValue: _react.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    var selectedValue = this.props.selectedValue;
	    return {
	      str: selectedValue && this.props.formatter.format(selectedValue) || '',
	      invalid: false
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    // when popup show, click body will call this, bug!
	    var selectedValue = nextProps.selectedValue;
	    this.setState({
	      str: selectedValue && nextProps.formatter.format(selectedValue) || '',
	      invalid: false
	    });
	  },
	  onInputChange: function onInputChange(event) {
	    var str = event.target.value;
	    this.setState({
	      str: str
	    });
	    var value = undefined;
	    var _props = this.props;
	    var disabledDate = _props.disabledDate;
	    var formatter = _props.formatter;
	    var gregorianCalendarLocale = _props.gregorianCalendarLocale;
	    var onChange = _props.onChange;
	
	    if (str) {
	      try {
	        value = copyTime(formatter.parse(str, {
	          locale: gregorianCalendarLocale,
	          obeyCount: true
	        }), this.props.selectedValue);
	      } catch (ex) {
	        this.setState({
	          invalid: true
	        });
	        return;
	      }
	      if (value && (!disabledDate || !disabledDate(value))) {
	        var originalValue = this.props.selectedValue;
	        if (originalValue && value) {
	          if (originalValue.getTime() !== value.getTime()) {
	            onChange(value);
	          }
	        } else if (originalValue !== value) {
	          onChange(value);
	        }
	      } else {
	        this.setState({
	          invalid: true
	        });
	        return;
	      }
	    } else {
	      onChange(null);
	    }
	    this.setState({
	      invalid: false
	    });
	  },
	  onClear: function onClear() {
	    this.setState({
	      str: ''
	    });
	    this.props.onClear(null);
	  },
	  getRootDOMNode: function getRootDOMNode() {
	    return _reactDom2.default.findDOMNode(this);
	  },
	  render: function render() {
	    var props = this.props;
	    var _state = this.state;
	    var invalid = _state.invalid;
	    var str = _state.str;
	    var selectedValue = props.selectedValue;
	    var locale = props.locale;
	    var prefixCls = props.prefixCls;
	    var placeholder = props.placeholder;
	    var onChange = props.onChange;
	    var timePicker = props.timePicker;
	    var disabledTime = props.disabledTime;
	    var gregorianCalendarLocale = props.gregorianCalendarLocale;
	
	    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
	    var disabledTimeConfig = disabledTime && timePicker ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;
	    return _react2.default.createElement(
	      'div',
	      { className: prefixCls + '-input-wrap' },
	      _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-time-picker-wrap' },
	        timePicker ? _react2.default.cloneElement(timePicker, _extends({
	          showClear: false,
	          allowEmpty: false,
	          getPopupContainer: this.getRootDOMNode,
	          gregorianCalendarLocale: gregorianCalendarLocale,
	          value: selectedValue,
	          onChange: onChange
	        }, disabledTimeConfig)) : null
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-date-input-wrap' },
	        _react2.default.createElement('input', {
	          className: prefixCls + '-input  ' + invalidClass,
	          value: str,
	          placeholder: placeholder,
	          onChange: this.onInputChange
	        })
	      ),
	      props.showClear ? _react2.default.createElement('a', {
	        className: prefixCls + '-clear-btn',
	        role: 'button',
	        title: locale.clear,
	        onClick: this.onClear
	      }) : null
	    );
	  }
	});
	
	exports.default = DateInput;
	module.exports = exports['default'];

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MonthPanel = __webpack_require__(363);
	
	var _MonthPanel2 = _interopRequireDefault(_MonthPanel);
	
	var _CalendarMixin = __webpack_require__(370);
	
	var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);
	
	var _CommonMixin = __webpack_require__(371);
	
	var _CommonMixin2 = _interopRequireDefault(_CommonMixin);
	
	var _rcUtil = __webpack_require__(289);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MonthCalendar = _react2.default.createClass({
	  displayName: 'MonthCalendar',
	
	  mixins: [_CommonMixin2.default, _CalendarMixin2.default],
	
	  onKeyDown: function onKeyDown(event) {
	    var keyCode = event.keyCode;
	    var ctrlKey = event.ctrlKey || event.metaKey;
	    var stateValue = this.state.value;
	    var value = stateValue;
	    switch (keyCode) {
	      case _rcUtil.KeyCode.DOWN:
	        value = stateValue.clone();
	        value.addMonth(3);
	        break;
	      case _rcUtil.KeyCode.UP:
	        value = stateValue.clone();
	        value.addMonth(-3);
	        break;
	      case _rcUtil.KeyCode.LEFT:
	        value = stateValue.clone();
	        if (ctrlKey) {
	          value.addYear(-1);
	        } else {
	          value.addMonth(-1);
	        }
	        break;
	      case _rcUtil.KeyCode.RIGHT:
	        value = stateValue.clone();
	        if (ctrlKey) {
	          value.addYear(1);
	        } else {
	          value.addMonth(1);
	        }
	        break;
	      case _rcUtil.KeyCode.ENTER:
	        this.onSelect(stateValue);
	        event.preventDefault();
	        return 1;
	      default:
	        return undefined;
	    }
	    if (value !== stateValue) {
	      this.setValue(value);
	      event.preventDefault();
	      return 1;
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    var children = _react2.default.createElement(_MonthPanel2.default, {
	      locale: props.locale,
	      disabledDate: props.disabledDate,
	      style: { position: 'relative' },
	      value: this.state.value,
	      rootPrefixCls: props.prefixCls,
	      onChange: this.setValue,
	      onSelect: this.onSelect
	    });
	    return this.renderRoot({
	      children: children
	    });
	  }
	});
	
	exports.default = MonthCalendar;
	module.exports = exports['default'];

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(289);
	
	var _placements = __webpack_require__(376);
	
	var _placements2 = _interopRequireDefault(_placements);
	
	var _rcTrigger = __webpack_require__(339);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function noop() {}
	
	function refFn(field, component) {
	  this[field] = component;
	}
	
	var Picker = _react2.default.createClass({
	  displayName: 'Picker',
	
	  propTypes: {
	    animation: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	    disabled: _react.PropTypes.bool,
	    transitionName: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    onOpen: _react.PropTypes.func,
	    onClose: _react.PropTypes.func,
	    children: _react.PropTypes.func,
	    getCalendarContainer: _react.PropTypes.func,
	    calendar: _react.PropTypes.element,
	    style: _react.PropTypes.object,
	    open: _react.PropTypes.bool,
	    defaultOpen: _react.PropTypes.bool,
	    prefixCls: _react.PropTypes.string,
	    placement: _react.PropTypes.any,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
	    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
	    align: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-calendar-picker',
	      style: {},
	      align: {},
	      placement: 'bottomLeft',
	      defaultOpen: false,
	      onChange: noop,
	      onOpen: noop,
	      onClose: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var open = undefined;
	    if ('open' in props) {
	      open = props.open;
	    } else {
	      open = props.defaultOpen;
	    }
	    var value = props.value || props.defaultValue;
	    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
	    return {
	      open: open,
	      value: value
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var value = nextProps.value;
	    var open = nextProps.open;
	
	    if ('value' in nextProps) {
	      this.setState({
	        value: value
	      });
	    }
	    if (open !== undefined) {
	      this.setState({
	        open: open
	      });
	    }
	  },
	  onCalendarKeyDown: function onCalendarKeyDown(event) {
	    if (event.keyCode === _rcUtil.KeyCode.ESC) {
	      event.stopPropagation();
	      this.close(this.focus);
	    }
	  },
	  onCalendarSelect: function onCalendarSelect(value) {
	    var cause = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value
	      });
	    }
	    if (!props.calendar.props.timePicker && cause.source !== 'dateInput') {
	      this.close(this.focus);
	    }
	    props.onChange(value);
	  },
	  onCalendarOk: function onCalendarOk() {
	    this.close(this.focus);
	  },
	  onCalendarClear: function onCalendarClear() {
	    this.close(this.focus);
	  },
	  onVisibleChange: function onVisibleChange(open) {
	    var _this = this;
	
	    this.setOpen(open, function () {
	      if (open) {
	        _reactDom2.default.findDOMNode(_this.calendarInstance).focus();
	      }
	    });
	  },
	  getCalendarElement: function getCalendarElement() {
	    var props = this.props;
	    var state = this.state;
	    var calendarProp = props.calendar;
	    var value = state.value;
	
	    var defaultValue = undefined;
	    // RangeCalendar
	    if (Array.isArray(value)) {
	      defaultValue = value[0];
	    } else {
	      defaultValue = value;
	    }
	    var extraProps = {
	      ref: this.saveCalendarRef,
	      defaultValue: defaultValue || calendarProp.props.defaultValue,
	      defaultSelectedValue: value,
	      onKeyDown: this.onCalendarKeyDown,
	      onOk: (0, _rcUtil.createChainedFunction)(calendarProp.props.onOk, this.onCalendarOk),
	      onSelect: (0, _rcUtil.createChainedFunction)(calendarProp.props.onSelect, this.onCalendarSelect),
	      onClear: (0, _rcUtil.createChainedFunction)(calendarProp.props.onClear, this.onCalendarClear)
	    };
	
	    return _react2.default.cloneElement(calendarProp, extraProps);
	  },
	  setOpen: function setOpen(open, callback) {
	    var _props = this.props;
	    var onOpen = _props.onOpen;
	    var onClose = _props.onClose;
	
	    if (this.state.open !== open) {
	      this.setState({
	        open: open
	      }, callback);
	      var event = {
	        open: open
	      };
	      if (open) {
	        onOpen(event);
	      } else {
	        onClose(event);
	      }
	    }
	  },
	  open: function open(callback) {
	    this.setOpen(true, callback);
	  },
	  close: function close(callback) {
	    this.setOpen(false, callback);
	  },
	  focus: function focus() {
	    if (!this.state.open) {
	      _reactDom2.default.findDOMNode(this).focus();
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var placement = props.placement;
	    var style = props.style;
	    var getCalendarContainer = props.getCalendarContainer;
	    var align = props.align;
	    var animation = props.animation;
	    var disabled = props.disabled;
	    var transitionName = props.transitionName;
	    var children = props.children;
	
	    var state = this.state;
	    return _react2.default.createElement(
	      _rcTrigger2.default,
	      {
	        popup: this.getCalendarElement(),
	        popupAlign: align,
	        builtinPlacements: _placements2.default,
	        popupPlacement: placement,
	        action: disabled ? [] : ['click'],
	        destroyPopupOnHide: true,
	        getPopupContainer: getCalendarContainer,
	        popupStyle: style,
	        popupAnimation: animation,
	        popupTransitionName: transitionName,
	        popupVisible: state.open,
	        onPopupVisibleChange: this.onVisibleChange,
	        prefixCls: prefixCls
	      },
	      children(state, props)
	    );
	  }
	});
	
	exports.default = Picker;
	module.exports = exports['default'];

/***/ },
/* 376 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};
	
	var targetOffset = [0, 0];
	
	var placements = {
	  bottomLeft: {
	    points: ['tl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -3],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -3],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 3],
	    targetOffset: targetOffset
	  },
	  topLeft: {
	    points: ['bl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 3],
	    targetOffset: targetOffset
	  }
	};
	
	exports.default = placements;
	module.exports = exports['default'];

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _zh_CN = __webpack_require__(378);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  today: '今天',
	  now: '此刻',
	  ok: '确定',
	  clear: '清除',
	  month: '月',
	  year: '年',
	  previousMonth: '上个月 (翻页上键)',
	  nextMonth: '下个月 (翻页下键)',
	  monthSelect: '选择月份',
	  yearSelect: '选择年份',
	  decadeSelect: '选择年代',
	  yearFormat: 'yyyy\'年\'',
	  monthFormat: 'M\'月\'',
	  dateFormat: 'yyyy\'年\'M\'月\'d\'日\'',
	  previousYear: '上一年 (Control键加左方向键)',
	  nextYear: '下一年 (Control键加右方向键)',
	  previousDecade: '上一年代',
	  nextDecade: '下一年代',
	  previousCentury: '上一世纪',
	  nextCentury: '下一世纪',
	  format: _zh_CN2.default
	};
	module.exports = exports['default'];

/***/ },
/* 378 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  eras: ['公元前', '公元'],
	  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	  shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	  veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
	  ampms: ['上午', '下午'],
	  datePatterns: ['yyyy\'年\'M\'月\'d\'日\' EEEE', 'yyyy\'年\'M\'月\'d\'日\'', 'yyyy-M-d', 'yy-M-d'],
	  timePatterns: ['ahh\'时\'mm\'分\'ss\'秒\' \'GMT\'Z', 'ahh\'时\'mm\'分\'ss\'秒\'', 'H:mm:ss', 'ah:mm'],
	  dateTimePattern: '{date} {time}'
	};

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gregorianCalendar = __webpack_require__(351);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _RangeCalendar = __webpack_require__(380);
	
	var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);
	
	var _Picker = __webpack_require__(375);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	var _rcTimePicker = __webpack_require__(382);
	
	var _rcTimePicker2 = _interopRequireDefault(_rcTimePicker);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _PickerMixin = __webpack_require__(393);
	
	var _PickerMixin2 = _interopRequireDefault(_PickerMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'RangePicker',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultValue: [],
	      format: 'yyyy-MM-dd',
	      startPlaceholder: '开始日期',
	      endPlaceholder: '结束日期',
	      transitionName: 'slide-up',
	      popupStyle: {},
	      onChange: function onChange() {},
	      onOk: function onOk() {},
	
	      locale: {},
	      align: {
	        offset: [0, -9]
	      },
	      open: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var value = _props.value;
	    var defaultValue = _props.defaultValue;
	
	    var start = value && value[0] || defaultValue[0];
	    var end = value && value[1] || defaultValue[1];
	    return {
	      value: [this.parseDateFromValue(start), this.parseDateFromValue(end)]
	    };
	  },
	
	  mixins: [_PickerMixin2.default],
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      var value = nextProps.value || [];
	      var start = this.parseDateFromValue(value[0]);
	      var end = this.parseDateFromValue(value[1]);
	      this.setState({
	        value: [start, end]
	      });
	    }
	  },
	  handleChange: function handleChange(value) {
	    if (!('value' in this.props)) {
	      this.setState({ value: value });
	    }
	    var startTime = value[0] ? new Date(value[0].getTime()) : null;
	    var endTime = value[1] ? new Date(value[1].getTime()) : null;
	    this.props.onChange([startTime, endTime]);
	  },
	  render: function render() {
	    var _this = this;
	
	    var locale = this.getLocale();
	    // 以下两行代码
	    // 给没有初始值的日期选择框提供本地化信息
	    // 否则会以周日开始排
	    var defaultCalendarValue = new _gregorianCalendar2.default(locale);
	    defaultCalendarValue.setTime(Date.now());
	
	    var _props2 = this.props;
	    var disabledDate = _props2.disabledDate;
	    var showTime = _props2.showTime;
	    var size = _props2.size;
	    var startPlaceholder = _props2.startPlaceholder;
	    var endPlaceholder = _props2.endPlaceholder;
	    var getCalendarContainer = _props2.getCalendarContainer;
	    var transitionName = _props2.transitionName;
	    var disabled = _props2.disabled;
	    var popupStyle = _props2.popupStyle;
	    var align = _props2.align;
	    var style = _props2.style;
	    var onOk = _props2.onOk;
	
	    var state = this.state;
	
	    var timePicker = null;
	
	    if (showTime) {
	      timePicker = _react2.default.createElement(_rcTimePicker2.default, {
	        prefixCls: 'ant-time-picker',
	        placeholder: locale.lang.timePlaceholder,
	        transitionName: 'slide-up' });
	    }
	
	    var calendarClassName = (0, _classnames2.default)(_defineProperty({}, 'ant-calendar-time', this.props.showTime));
	
	    var pickerChangeHandler = {
	      onChange: this.handleChange
	    };
	
	    var calendarHandler = {
	      onOk: this.handleChange
	    };
	
	    if (timePicker) {
	      pickerChangeHandler.onChange = function (value) {
	        // Click clear button
	        if (value === null || value.length === 0) {
	          _this.handleChange(value);
	        }
	      };
	    } else {
	      calendarHandler = {};
	    }
	
	    var calendar = _react2.default.createElement(_RangeCalendar2.default, _extends({
	      prefixCls: 'ant-calendar',
	      className: calendarClassName,
	      timePicker: timePicker,
	      disabledDate: disabledDate,
	      dateInputPlaceholder: [startPlaceholder, endPlaceholder],
	      locale: locale.lang,
	      onOk: onOk,
	      defaultValue: [defaultCalendarValue, defaultCalendarValue]
	    }, calendarHandler));
	
	    var pickerClass = (0, _classnames2.default)({
	      'ant-calendar-picker': true,
	      'ant-calendar-picker-open': state.open
	    });
	
	    var pickerInputClass = (0, _classnames2.default)({
	      'ant-calendar-range-picker': true,
	      'ant-input': true,
	      'ant-input-lg': size === 'large',
	      'ant-input-sm': size === 'small'
	    });
	
	    return _react2.default.createElement(
	      'span',
	      { className: pickerClass, style: style },
	      _react2.default.createElement(
	        _Picker2.default,
	        _extends({
	          transitionName: transitionName,
	          disabled: disabled,
	          calendar: calendar,
	          value: state.value,
	          prefixCls: 'ant-calendar-picker-container',
	          style: popupStyle,
	          align: align,
	          getCalendarContainer: getCalendarContainer,
	          onOpen: this.toggleOpen,
	          onClose: this.toggleOpen
	        }, pickerChangeHandler),
	        function (_ref) {
	          var value = _ref.value;
	
	          var start = value[0];
	          var end = value[1];
	          return _react2.default.createElement(
	            'span',
	            { className: pickerInputClass, disabled: disabled },
	            _react2.default.createElement('input', {
	              disabled: disabled,
	              onChange: _this.handleInputChange,
	              value: start && _this.getFormatter().format(start),
	              placeholder: startPlaceholder,
	              className: 'ant-calendar-range-picker-input' }),
	            _react2.default.createElement(
	              'span',
	              { className: 'ant-calendar-range-picker-separator' },
	              ' ~ '
	            ),
	            _react2.default.createElement('input', {
	              disabled: disabled,
	              onChange: _this.handleInputChange,
	              value: end && _this.getFormatter().format(end),
	              placeholder: endPlaceholder,
	              className: 'ant-calendar-range-picker-input' }),
	            _react2.default.createElement('span', { className: 'ant-calendar-picker-icon' })
	          );
	        }
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gregorianCalendar = __webpack_require__(351);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _classnames = __webpack_require__(264);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _CalendarPart = __webpack_require__(381);
	
	var _CalendarPart2 = _interopRequireDefault(_CalendarPart);
	
	var _util = __webpack_require__(359);
	
	var _TodayButton = __webpack_require__(368);
	
	var _TodayButton2 = _interopRequireDefault(_TodayButton);
	
	var _OkButton = __webpack_require__(369);
	
	var _OkButton2 = _interopRequireDefault(_OkButton);
	
	var _CommonMixin = __webpack_require__(371);
	
	var _CommonMixin2 = _interopRequireDefault(_CommonMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function noop() {}
	
	function getNow() {
	  var selectedValue = new _gregorianCalendar2.default();
	  selectedValue.setTime(Date.now());
	  return selectedValue;
	}
	
	function onValueChange(direction, current) {
	  var value = undefined;
	  value = current;
	  if (direction === 'right') {
	    value.addMonth(-1);
	  }
	  this.fireValueChange(value);
	}
	
	function normalizeAnchor(props, init) {
	  var selectedValue = props.selectedValue || init && props.defaultSelectedValue || [];
	  var value = props.value;
	  if (Array.isArray(value)) {
	    value = value[0];
	  }
	  var defaultValue = props.defaultValue;
	  if (Array.isArray(defaultValue)) {
	    defaultValue = defaultValue[0];
	  }
	  return value || init && defaultValue || selectedValue[0] || init && getNow();
	}
	
	function onInputSelect(direction, value) {
	  if (!value) {
	    return;
	  }
	  var originalValue = this.state.selectedValue;
	  var selectedValue = originalValue.concat();
	  var index = direction === 'left' ? 0 : 1;
	  selectedValue[index] = value;
	  if (selectedValue[0] && selectedValue[1]) {
	    if (this.compare(selectedValue[0], selectedValue[1]) > 0) {
	      selectedValue[1 - index] = undefined;
	    }
	  }
	  this.fireSelectValueChange(selectedValue);
	}
	
	var RangeCalendar = _react2.default.createClass({
	  displayName: 'RangeCalendar',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    dateInputPlaceholder: _react.PropTypes.any,
	    defaultValue: _react.PropTypes.any,
	    timePicker: _react.PropTypes.any,
	    value: _react.PropTypes.any,
	    showOk: _react.PropTypes.bool,
	    selectedValue: _react.PropTypes.array,
	    defaultSelectedValue: _react.PropTypes.array,
	    onOk: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func,
	    onValueChange: _react.PropTypes.func,
	    formatter: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	    onClear: _react.PropTypes.func
	  },
	
	  mixins: [_CommonMixin2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultSelectedValue: [],
	      onValueChange: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedValue = props.selectedValue || props.defaultSelectedValue;
	    var value = normalizeAnchor(props, 1);
	    return {
	      selectedValue: selectedValue,
	      value: value
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var newState = {};
	    if ('value' in nextProps) {
	      if (nextProps.value) {
	        newState.value = nextProps.value;
	      } else {
	        newState.value = normalizeAnchor(nextProps, 0);
	      }
	      this.setState(newState);
	    }
	    if ('selectedValue' in nextProps) {
	      newState.selectedValue = nextProps.selectedValue;
	      this.setState(newState);
	    }
	  },
	  onSelect: function onSelect(value) {
	    var originalValue = this.state.selectedValue;
	    var selectedValue = originalValue.concat();
	    var changed = false;
	    if (!selectedValue.length || selectedValue.length === 2 && !originalValue.hovering) {
	      selectedValue.length = 1;
	      selectedValue[0] = value;
	      changed = true;
	    } else if (this.compare(selectedValue[0], value) <= 0) {
	      selectedValue[1] = value;
	      changed = true;
	    } else if (this.compare(selectedValue[0], value) > 0) {
	      selectedValue.length = 1;
	      selectedValue[0] = value;
	      changed = true;
	    }
	    if (changed) {
	      this.fireSelectValueChange(selectedValue);
	    }
	  },
	  onDayHover: function onDayHover(hoverValue) {
	    var selectedValue = this.state.selectedValue;
	    if (!selectedValue.length || selectedValue.length === 2 && !selectedValue.hovering) {
	      return;
	    }
	    if (this.compare(hoverValue, selectedValue[0]) < 0) {
	      return;
	    }
	    selectedValue = selectedValue.concat();
	    selectedValue[1] = hoverValue;
	    selectedValue.hovering = 1;
	    this.fireSelectValueChange(selectedValue);
	  },
	  onToday: function onToday() {
	    this.setState({
	      value: (0, _util.getTodayTime)(this.state.value)
	    });
	  },
	  onOk: function onOk() {
	    this.props.onOk(this.state.selectedValue);
	  },
	  getStartValue: function getStartValue() {
	    var value = this.state.value;
	    var selectedValue = this.state.selectedValue;
	    // keep selectedTime when select date
	    if (selectedValue[0] && this.props.timePicker) {
	      value = value.clone();
	      (0, _util.syncTime)(selectedValue[0], value);
	    }
	    return value;
	  },
	  getEndValue: function getEndValue() {
	    var endValue = this.state.value.clone();
	    endValue.addMonth(1);
	    var selectedValue = this.state.selectedValue;
	    // keep selectedTime when select date
	    if (selectedValue[1] && this.props.timePicker) {
	      (0, _util.syncTime)(selectedValue[1], endValue);
	    }
	    return endValue;
	  },
	  compare: function compare(v1, v2) {
	    if (this.props.timePicker) {
	      return v1.getTime() - v2.getTime();
	    }
	    return v1.compareToDay(v2);
	  },
	  fireSelectValueChange: function fireSelectValueChange(selectedValue, direct) {
	    if (!('selectedValue' in this.props)) {
	      this.setState({
	        selectedValue: selectedValue
	      });
	    }
	    this.props.onChange(selectedValue);
	    if (direct || selectedValue[0] && selectedValue[1] && !selectedValue.hovering) {
	      this.props.onSelect(selectedValue);
	    }
	  },
	  fireValueChange: function fireValueChange(value) {
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value
	      });
	    }
	    props.onValueChange(value);
	  },
	  clear: function clear() {
	    this.fireSelectValueChange([], true);
	    this.props.onClear();
	  },
	  render: function render() {
	    var _className;
	
	    var props = this.props;
	    var state = this.state;
	    var prefixCls = props.prefixCls;
	    var dateInputPlaceholder = props.dateInputPlaceholder;
	    var timePicker = props.timePicker;
	    var showOk = props.showOk;
	
	    var className = (_className = {}, _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, prefixCls, 1), _defineProperty(_className, prefixCls + '-hidden', !props.visible), _defineProperty(_className, prefixCls + '-range', 1), _defineProperty(_className, prefixCls + '-week-number', props.showWeekNumber), _className);
	    var classes = (0, _classnames2.default)(className);
	    var newProps = {
	      selectedValue: state.selectedValue,
	      onSelect: this.onSelect,
	      onDayHover: this.onDayHover
	    };
	
	    var placeholder1 = undefined;
	    var placeholder2 = undefined;
	
	    if (dateInputPlaceholder) {
	      if (Array.isArray(dateInputPlaceholder)) {
	        var _dateInputPlaceholder = _slicedToArray(dateInputPlaceholder, 2);
	
	        placeholder1 = _dateInputPlaceholder[0];
	        placeholder2 = _dateInputPlaceholder[1];
	      } else {
	        placeholder1 = placeholder2 = dateInputPlaceholder;
	      }
	    }
	    return _react2.default.createElement(
	      'div',
	      {
	        className: classes,
	        style: props.style,
	        tabIndex: '0'
	      },
	      _react2.default.createElement('a', { className: prefixCls + '-clear-btn', role: 'button', title: '清除', onClick: this.clear }),
	      _react2.default.createElement(_CalendarPart2.default, _extends({}, props, newProps, {
	        direction: 'left',
	        formatter: this.getFormatter(),
	        value: this.getStartValue(),
	        placeholder: placeholder1,
	        onInputSelect: onInputSelect.bind(this, 'left'),
	        onValueChange: onValueChange.bind(this, 'left')
	      })),
	      _react2.default.createElement(
	        'span',
	        { className: prefixCls + '-range-middle' },
	        '~'
	      ),
	      _react2.default.createElement(_CalendarPart2.default, _extends({}, props, newProps, {
	        direction: 'right',
	        formatter: this.getFormatter(),
	        placeholder: placeholder2,
	        value: this.getEndValue(),
	        onInputSelect: onInputSelect.bind(this, 'right'),
	        onValueChange: onValueChange.bind(this, 'right')
	      })),
	      _react2.default.createElement(
	        'div',
	        { className: prefixCls + '-range-bottom' },
	        _react2.default.createElement(_TodayButton2.default, _extends({}, props, {
	          value: state.value,
	          onToday: this.onToday
	        })),
	        showOk === true || showOk !== false && !!timePicker ? _react2.default.createElement(_OkButton2.default, _extends({}, props, {
	          value: state.value,
	          onOk: this.onOk,
	          okDisabled: state.selectedValue.length !== 2 || state.selectedValue.hovering
	        })) : null
	      )
	    );
	  }
	});
	
	exports.default = RangeCalendar;
	module.exports = exports['default'];

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CalendarHeader = __webpack_require__(362);
	
	var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);
	
	var _DateTable = __webpack_require__(355);
	
	var _DateTable2 = _interopRequireDefault(_DateTable);
	
	var _CalendarFooter = __webpack_require__(367);
	
	var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);
	
	var _DateInput = __webpack_require__(373);
	
	var _DateInput2 = _interopRequireDefault(_DateInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Calendar = _react2.default.createClass({
	  displayName: 'Calendar',
	
	  propTypes: {
	    value: _react.PropTypes.any,
	    direction: _react.PropTypes.any,
	    prefixCls: _react.PropTypes.any,
	    locale: _react.PropTypes.any,
	    selectedValue: _react.PropTypes.any,
	    formatter: _react.PropTypes.any,
	    placeholder: _react.PropTypes.any,
	    disabledDate: _react.PropTypes.any,
	    timePicker: _react.PropTypes.any,
	    disabledTime: _react.PropTypes.any
	  },
	  render: function render() {
	    var props = this.props;
	    var value = props.value;
	    var direction = props.direction;
	    var prefixCls = props.prefixCls;
	    var locale = props.locale;
	    var selectedValue = props.selectedValue;
	    var formatter = props.formatter;
	    var placeholder = props.placeholder;
	    var disabledDate = props.disabledDate;
	    var timePicker = props.timePicker;
	    var disabledTime = props.disabledTime;
	
	    var rangeClassName = prefixCls + '-range';
	    var newProps = {
	      locale: locale,
	      value: value,
	      prefixCls: prefixCls
	    };
	    var index = direction === 'left' ? 0 : 1;
	    return _react2.default.createElement(
	      'div',
	      { className: rangeClassName + '-part ' + rangeClassName + '-' + direction },
	      _react2.default.createElement(_DateInput2.default, {
	        formatter: formatter,
	        locale: locale,
	        prefixCls: prefixCls,
	        timePicker: timePicker,
	        disabledDate: disabledDate,
	        placeholder: placeholder,
	        disabledTime: disabledTime,
	        gregorianCalendarLocale: value.locale,
	        showClear: false,
	        selectedValue: selectedValue[index],
	        onChange: props.onInputSelect
	      }),
	      _react2.default.createElement(
	        'div',
	        { style: { outline: 'none' } },
	        _react2.default.createElement(_CalendarHeader2.default, _extends({}, newProps, {
	          enableNext: direction === 'right',
	          enablePrev: direction === 'left',
	          onValueChange: props.onValueChange
	        })),
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-calendar-body' },
	          _react2.default.createElement(_DateTable2.default, _extends({}, newProps, {
	            selectedValue: selectedValue,
	            dateRender: props.dateRender,
	            onSelect: props.onSelect,
	            onDayHover: props.onDayHover,
	            disabledDate: disabledDate,
	            showWeekNumber: props.showWeekNumber
	          }))
	        ),
	        _react2.default.createElement(_CalendarFooter2.default, _extends({}, newProps, {
	          disabledDate: props.disabledDate,
	          timeDisabled: !selectedValue[index] || !!selectedValue.hovering,
	          onToday: this.chooseToday
	        }))
	      )
	    );
	  }
	});
	
	exports.default = Calendar;
	module.exports = exports['default'];

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _TimePicker = __webpack_require__(383);
	
	var _TimePicker2 = _interopRequireDefault(_TimePicker);
	
	exports['default'] = _TimePicker2['default'];
	module.exports = exports['default'];

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTrigger = __webpack_require__(339);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _modulePanel = __webpack_require__(384);
	
	var _modulePanel2 = _interopRequireDefault(_modulePanel);
	
	var _utilPlacements = __webpack_require__(391);
	
	var _utilPlacements2 = _interopRequireDefault(_utilPlacements);
	
	var _mixinCommonMixin = __webpack_require__(385);
	
	var _mixinCommonMixin2 = _interopRequireDefault(_mixinCommonMixin);
	
	var _utilIndex = __webpack_require__(392);
	
	function noop() {}
	
	function refFn(field, component) {
	  this[field] = component;
	}
	
	var Picker = _react2['default'].createClass({
	  displayName: 'Picker',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    locale: _react.PropTypes.object,
	    value: _react.PropTypes.object,
	    disabled: _react.PropTypes.bool,
	    allowEmpty: _react.PropTypes.bool,
	    defaultValue: _react.PropTypes.object,
	    open: _react.PropTypes.bool,
	    defaultOpen: _react.PropTypes.bool,
	    align: _react.PropTypes.object,
	    placement: _react.PropTypes.any,
	    transitionName: _react.PropTypes.string,
	    getPopupContainer: _react.PropTypes.func,
	    placeholder: _react.PropTypes.string,
	    formatter: _react.PropTypes.any,
	    showHour: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    className: _react.PropTypes.string,
	    showSecond: _react.PropTypes.bool,
	    disabledHours: _react.PropTypes.func,
	    disabledMinutes: _react.PropTypes.func,
	    disabledSeconds: _react.PropTypes.func,
	    hideDisabledOptions: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func,
	    onOpen: _react.PropTypes.func,
	    onClose: _react.PropTypes.func
	  },
	
	  mixins: [_mixinCommonMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultOpen: false,
	      style: {},
	      className: '',
	      align: {},
	      allowEmpty: true,
	      showHour: true,
	      showSecond: true,
	      disabledHours: noop,
	      disabledMinutes: noop,
	      disabledSeconds: noop,
	      hideDisabledOptions: false,
	      placement: 'bottomLeft',
	      onChange: noop,
	      onOpen: noop,
	      onClose: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.savePanelRef = refFn.bind(this, 'panelInstance');
	    var _props = this.props;
	    var defaultOpen = _props.defaultOpen;
	    var defaultValue = _props.defaultValue;
	    var _props$open = _props.open;
	    var open = _props$open === undefined ? defaultOpen : _props$open;
	    var _props$value = _props.value;
	    var value = _props$value === undefined ? defaultValue : _props$value;
	
	    return {
	      open: open,
	      value: value
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var value = nextProps.value;
	    var open = nextProps.open;
	
	    if ('value' in nextProps) {
	      this.setState({
	        value: value
	      });
	    }
	    if (open !== undefined) {
	      this.setState({ open: open });
	    }
	  },
	
	  onPanelChange: function onPanelChange(value) {
	    this.setValue(value);
	  },
	
	  onPanelClear: function onPanelClear() {
	    this.setValue(null);
	    this.setOpen(false);
	  },
	
	  onVisibleChange: function onVisibleChange(open) {
	    this.setOpen(open);
	  },
	
	  onEsc: function onEsc() {
	    this.setOpen(false);
	    this.refs.picker.focus();
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    if (e.keyCode === 40) {
	      this.setOpen(true);
	    }
	  },
	
	  setValue: function setValue(value) {
	    if (!('value' in this.props)) {
	      this.setState({
	        value: value
	      });
	    }
	    this.props.onChange(value);
	  },
	
	  getFormatter: function getFormatter() {
	    var formatter = this.props.formatter;
	    var locale = this.props.locale;
	    if (formatter) {
	      if (formatter === this.lastFormatter) {
	        return this.normalFormatter;
	      }
	      this.normalFormatter = (0, _utilIndex.getFormatter)(formatter, locale);
	      this.lastFormatter = formatter;
	      return this.normalFormatter;
	    }
	    if (!this.props.showSecond) {
	      if (!this.notShowSecondFormatter) {
	        this.notShowSecondFormatter = (0, _utilIndex.getFormatter)('HH:mm', locale);
	      }
	      return this.notShowSecondFormatter;
	    }
	    if (!this.props.showHour) {
	      if (!this.notShowHourFormatter) {
	        this.notShowHourFormatter = (0, _utilIndex.getFormatter)('mm:ss', locale);
	      }
	      return this.notShowHourFormatter;
	    }
	    if (!this.normalFormatter) {
	      this.normalFormatter = (0, _utilIndex.getFormatter)('HH:mm:ss', locale);
	    }
	    return this.normalFormatter;
	  },
	
	  getPanelElement: function getPanelElement() {
	    var _props2 = this.props;
	    var prefixCls = _props2.prefixCls;
	    var defaultValue = _props2.defaultValue;
	    var locale = _props2.locale;
	    var placeholder = _props2.placeholder;
	    var disabledHours = _props2.disabledHours;
	    var disabledMinutes = _props2.disabledMinutes;
	    var disabledSeconds = _props2.disabledSeconds;
	    var hideDisabledOptions = _props2.hideDisabledOptions;
	    var allowEmpty = _props2.allowEmpty;
	    var showHour = _props2.showHour;
	    var showSecond = _props2.showSecond;
	
	    return _react2['default'].createElement(_modulePanel2['default'], {
	      prefixCls: prefixCls + '-panel',
	      ref: this.savePanelRef,
	      value: this.state.value,
	      onChange: this.onPanelChange,
	      gregorianCalendarLocale: locale.calendar,
	      onClear: this.onPanelClear,
	      defaultValue: defaultValue,
	      showHour: showHour,
	      onEsc: this.onEsc,
	      showSecond: showSecond,
	      locale: locale,
	      allowEmpty: allowEmpty,
	      formatter: this.getFormatter(),
	      placeholder: placeholder,
	      disabledHours: disabledHours,
	      disabledMinutes: disabledMinutes,
	      disabledSeconds: disabledSeconds,
	      hideDisabledOptions: hideDisabledOptions
	    });
	  },
	
	  setOpen: function setOpen(open, callback) {
	    var _props3 = this.props;
	    var onOpen = _props3.onOpen;
	    var onClose = _props3.onClose;
	
	    if (this.state.open !== open) {
	      this.setState({
	        open: open
	      }, callback);
	      var _event = {
	        open: open
	      };
	      if (open) {
	        onOpen(_event);
	      } else {
	        onClose(_event);
	      }
	    }
	  },
	
	  render: function render() {
	    var _props4 = this.props;
	    var prefixCls = _props4.prefixCls;
	    var placeholder = _props4.placeholder;
	    var placement = _props4.placement;
	    var align = _props4.align;
	    var disabled = _props4.disabled;
	    var transitionName = _props4.transitionName;
	    var style = _props4.style;
	    var className = _props4.className;
	    var showHour = _props4.showHour;
	    var showSecond = _props4.showSecond;
	    var getPopupContainer = _props4.getPopupContainer;
	    var _state = this.state;
	    var open = _state.open;
	    var value = _state.value;
	
	    var popupClassName = undefined;
	    if (!showHour || !showSecond) {
	      popupClassName = prefixCls + '-panel-narrow';
	    }
	    return _react2['default'].createElement(
	      _rcTrigger2['default'],
	      {
	        prefixCls: prefixCls + '-panel',
	        popupClassName: popupClassName,
	        popup: this.getPanelElement(),
	        popupAlign: align,
	        builtinPlacements: _utilPlacements2['default'],
	        popupPlacement: placement,
	        action: disabled ? [] : ['click'],
	        destroyPopupOnHide: true,
	        getPopupContainer: getPopupContainer,
	        popupTransitionName: transitionName,
	        popupVisible: open,
	        onPopupVisibleChange: this.onVisibleChange
	      },
	      _react2['default'].createElement(
	        'span',
	        { className: prefixCls + ' ' + className, style: style },
	        _react2['default'].createElement('input', { className: prefixCls + '-input',
	          ref: 'picker', type: 'text', placeholder: placeholder,
	          readOnly: true,
	          onKeyDown: this.onKeyDown,
	          disabled: disabled, value: value && this.getFormatter().format(value) }),
	        _react2['default'].createElement('span', { className: prefixCls + '-icon' })
	      )
	    );
	  }
	});
	
	exports['default'] = Picker;
	module.exports = exports['default'];

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixinCommonMixin = __webpack_require__(385);
	
	var _mixinCommonMixin2 = _interopRequireDefault(_mixinCommonMixin);
	
	var _Header = __webpack_require__(387);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Combobox = __webpack_require__(389);
	
	var _Combobox2 = _interopRequireDefault(_Combobox);
	
	function noop() {}
	
	function generateOptions(length, disabledOptions, hideDisabledOptions) {
	  var arr = [];
	  for (var value = 0; value < length; value++) {
	    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
	      arr.push(value);
	    }
	  }
	  return arr;
	}
	
	var Panel = _react2['default'].createClass({
	  displayName: 'Panel',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    value: _react.PropTypes.object,
	    locale: _react.PropTypes.object,
	    placeholder: _react.PropTypes.string,
	    gregorianCalendarLocale: _react.PropTypes.object,
	    formatter: _react.PropTypes.object,
	    disabledHours: _react.PropTypes.func,
	    disabledMinutes: _react.PropTypes.func,
	    disabledSeconds: _react.PropTypes.func,
	    hideDisabledOptions: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func,
	    onEsc: _react.PropTypes.func,
	    allowEmpty: _react.PropTypes.bool,
	    showHour: _react.PropTypes.bool,
	    showSecond: _react.PropTypes.bool,
	    onClear: _react.PropTypes.func
	  },
	
	  mixins: [_mixinCommonMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onChange: noop,
	      onClear: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.value,
	      selectionRange: []
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var value = nextProps.value;
	    if (value) {
	      this.setState({
	        value: value
	      });
	    }
	  },
	
	  onChange: function onChange(newValue) {
	    this.setState({ value: newValue });
	    this.props.onChange(newValue);
	  },
	
	  onClear: function onClear() {
	    this.props.onClear();
	  },
	
	  onCurrentSelectPanelChange: function onCurrentSelectPanelChange(currentSelectPanel) {
	    this.setState({ currentSelectPanel: currentSelectPanel });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var locale = _props.locale;
	    var prefixCls = _props.prefixCls;
	    var placeholder = _props.placeholder;
	    var disabledHours = _props.disabledHours;
	    var disabledMinutes = _props.disabledMinutes;
	    var disabledSeconds = _props.disabledSeconds;
	    var hideDisabledOptions = _props.hideDisabledOptions;
	    var allowEmpty = _props.allowEmpty;
	    var showHour = _props.showHour;
	    var showSecond = _props.showSecond;
	    var formatter = _props.formatter;
	    var gregorianCalendarLocale = _props.gregorianCalendarLocale;
	
	    var value = this.state.value;
	    var disabledHourOptions = disabledHours();
	    var disabledMinuteOptions = disabledMinutes(value ? value.getHourOfDay() : null);
	    var disabledSecondOptions = disabledSeconds(value ? value.getHourOfDay() : null, value ? value.getMinutes() : null);
	    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions);
	    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions);
	    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions);
	
	    return _react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-inner' },
	      _react2['default'].createElement(_Header2['default'], {
	        prefixCls: prefixCls,
	        gregorianCalendarLocale: gregorianCalendarLocale,
	        locale: locale,
	        value: value,
	        currentSelectPanel: this.state.currentSelectPanel,
	        onEsc: this.props.onEsc,
	        formatter: formatter,
	        placeholder: placeholder,
	        hourOptions: hourOptions,
	        minuteOptions: minuteOptions,
	        secondOptions: secondOptions,
	        disabledHours: disabledHours,
	        disabledMinutes: disabledMinutes,
	        disabledSeconds: disabledSeconds,
	        onChange: this.onChange,
	        onClear: this.onClear,
	        allowEmpty: allowEmpty
	      }),
	      _react2['default'].createElement(_Combobox2['default'], {
	        prefixCls: prefixCls,
	        value: value,
	        gregorianCalendarLocale: gregorianCalendarLocale,
	        formatter: formatter,
	        onChange: this.onChange,
	        showHour: showHour,
	        showSecond: showSecond,
	        hourOptions: hourOptions,
	        minuteOptions: minuteOptions,
	        secondOptions: secondOptions,
	        disabledHours: disabledHours,
	        disabledMinutes: disabledMinutes,
	        disabledSeconds: disabledSeconds,
	        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
	      })
	    );
	  }
	});
	
	exports['default'] = Panel;
	module.exports = exports['default'];

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _localeEn_US = __webpack_require__(386);
	
	var _localeEn_US2 = _interopRequireDefault(_localeEn_US);
	
	exports['default'] = {
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    locale: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-time-picker',
	      locale: _localeEn_US2['default']
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _gregorianCalendarFormatLibLocaleEn_US = __webpack_require__(361);
	
	var _gregorianCalendarFormatLibLocaleEn_US2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleEn_US);
	
	var _gregorianCalendarLibLocaleEn_US = __webpack_require__(354);
	
	var _gregorianCalendarLibLocaleEn_US2 = _interopRequireDefault(_gregorianCalendarLibLocaleEn_US);
	
	exports['default'] = {
	  clear: 'Clear',
	  format: _gregorianCalendarFormatLibLocaleEn_US2['default'],
	  calendar: _gregorianCalendarLibLocaleEn_US2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilSelection = __webpack_require__(388);
	
	var _utilSelection2 = _interopRequireDefault(_utilSelection);
	
	var Header = _react2['default'].createClass({
	  displayName: 'Header',
	
	  propTypes: {
	    formatter: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    gregorianCalendarLocale: _react.PropTypes.object,
	    locale: _react.PropTypes.object,
	    disabledDate: _react.PropTypes.func,
	    placeholder: _react.PropTypes.string,
	    value: _react.PropTypes.object,
	    hourOptions: _react.PropTypes.array,
	    minuteOptions: _react.PropTypes.array,
	    secondOptions: _react.PropTypes.array,
	    disabledHours: _react.PropTypes.func,
	    disabledMinutes: _react.PropTypes.func,
	    disabledSeconds: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    onClear: _react.PropTypes.func,
	    onEsc: _react.PropTypes.func,
	    allowEmpty: _react.PropTypes.bool,
	    currentSelectPanel: _react.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    var value = this.props.value;
	    return {
	      str: value && this.props.formatter.format(value) || '',
	      invalid: false
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.timer = setTimeout(this.selectRange, 0);
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var value = nextProps.value;
	    this.setState({
	      str: value && nextProps.formatter.format(value) || '',
	      invalid: false
	    });
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this.timer = setTimeout(this.selectRange, 0);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timer);
	  },
	
	  onInputChange: function onInputChange(event) {
	    var str = event.target.value;
	    this.setState({
	      str: str
	    });
	    var value = null;
	    var _props = this.props;
	    var formatter = _props.formatter;
	    var gregorianCalendarLocale = _props.gregorianCalendarLocale;
	    var hourOptions = _props.hourOptions;
	    var minuteOptions = _props.minuteOptions;
	    var secondOptions = _props.secondOptions;
	    var disabledHours = _props.disabledHours;
	    var disabledMinutes = _props.disabledMinutes;
	    var disabledSeconds = _props.disabledSeconds;
	    var onChange = _props.onChange;
	    var allowEmpty = _props.allowEmpty;
	
	    if (str) {
	      var originalValue = this.props.value;
	      try {
	        value = formatter.parse(str, {
	          locale: gregorianCalendarLocale,
	          obeyCount: true
	        });
	      } catch (ex) {
	        this.setState({
	          invalid: true
	        });
	        return;
	      }
	
	      if (value) {
	        // if time value not allowed, response warning.
	        if (hourOptions.indexOf(value.getHourOfDay()) < 0 || minuteOptions.indexOf(value.getMinutes()) < 0 || secondOptions.indexOf(value.getSeconds()) < 0) {
	          this.setState({
	            invalid: true
	          });
	          return;
	        }
	
	        // if time value is disabled, response warning.
	        var disabledHourOptions = disabledHours();
	        var disabledMinuteOptions = disabledMinutes(value.getHourOfDay());
	        var disabledSecondOptions = disabledSeconds(value.getHourOfDay(), value.getMinutes());
	        if (disabledHourOptions && disabledHourOptions.indexOf(value.getHourOfDay()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.getMinutes()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.getSeconds()) >= 0) {
	          this.setState({
	            invalid: true
	          });
	          return;
	        }
	
	        if (originalValue && value) {
	          if (originalValue.getHourOfDay() !== value.getHourOfDay() || originalValue.getMinutes() !== value.getMinutes() || originalValue.getSeconds() !== value.getSeconds()) {
	            // keep other fields for rc-calendar
	            var changedValue = originalValue.clone();
	            changedValue.setHourOfDay(value.getHourOfDay());
	            changedValue.setMinutes(value.getMinutes());
	            changedValue.setSeconds(value.getSeconds());
	            onChange(changedValue);
	          }
	        } else if (originalValue !== value) {
	          onChange(value);
	        }
	      } else {
	        this.setState({
	          invalid: true
	        });
	        return;
	      }
	    } else if (allowEmpty) {
	      onChange(null);
	    } else {
	      this.setState({
	        invalid: true
	      });
	      return;
	    }
	
	    this.setState({
	      invalid: false
	    });
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    if (e.keyCode === 27) {
	      this.props.onEsc();
	    }
	  },
	
	  onClear: function onClear() {
	    this.setState({ str: '' });
	    this.props.onClear();
	  },
	
	  getClearButton: function getClearButton() {
	    var _props2 = this.props;
	    var locale = _props2.locale;
	    var prefixCls = _props2.prefixCls;
	    var allowEmpty = _props2.allowEmpty;
	
	    if (!allowEmpty) {
	      return null;
	    }
	    return _react2['default'].createElement('a', { className: prefixCls + '-clear-btn', role: 'button', title: locale.clear, onMouseDown: this.onClear });
	  },
	
	  getInput: function getInput() {
	    var _props3 = this.props;
	    var prefixCls = _props3.prefixCls;
	    var placeholder = _props3.placeholder;
	    var _state = this.state;
	    var invalid = _state.invalid;
	    var str = _state.str;
	
	    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
	    return _react2['default'].createElement('input', { className: prefixCls + '-input  ' + invalidClass,
	      ref: 'input',
	      onKeyDown: this.onKeyDown,
	      value: str,
	      placeholder: placeholder, onChange: this.onInputChange });
	  },
	
	  selectRange: function selectRange() {
	    this.refs.input.focus();
	    if (this.props.currentSelectPanel && this.refs.input.value) {
	      var selectionRangeStart = 0;
	      var selectionRangeEnd = 0;
	      if (this.props.currentSelectPanel === 'hour') {
	        selectionRangeStart = 0;
	        selectionRangeEnd = this.refs.input.value.indexOf(':');
	      } else if (this.props.currentSelectPanel === 'minute') {
	        selectionRangeStart = this.refs.input.value.indexOf(':') + 1;
	        selectionRangeEnd = this.refs.input.value.lastIndexOf(':');
	      } else if (this.props.currentSelectPanel === 'second') {
	        selectionRangeStart = this.refs.input.value.lastIndexOf(':') + 1;
	        selectionRangeEnd = this.refs.input.value.length;
	      }
	      if (selectionRangeEnd - selectionRangeStart === 2) {
	        (0, _utilSelection2['default'])(this.refs.input, selectionRangeStart, selectionRangeEnd);
	      }
	    }
	  },
	
	  render: function render() {
	    var prefixCls = this.props.prefixCls;
	
	    return _react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-input-wrap' },
	      this.getInput(),
	      this.getClearButton()
	    );
	  }
	});
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 388 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = createSelection;
	
	function createSelection(field, start, end) {
	  if (field.createTextRange) {
	    var selRange = field.createTextRange();
	    selRange.collapse(true);
	    selRange.moveStart('character', start);
	    selRange.moveEnd('character', end);
	    selRange.select();
	    field.focus();
	  } else if (field.setSelectionRange) {
	    field.focus();
	    field.setSelectionRange(start, end);
	  } else if (typeof field.selectionStart !== 'undefined') {
	    field.selectionStart = start;
	    field.selectionEnd = end;
	    field.focus();
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(390);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _gregorianCalendar = __webpack_require__(351);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var formatOption = function formatOption(option, disabledOptions) {
	  var value = '' + option;
	  if (option < 10) {
	    value = '0' + option;
	  }
	
	  var disabled = false;
	  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
	    disabled = true;
	  }
	
	  return {
	    value: value,
	    disabled: disabled
	  };
	};
	
	var Combobox = _react2['default'].createClass({
	  displayName: 'Combobox',
	
	  propTypes: {
	    formatter: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    value: _react.PropTypes.object,
	    onChange: _react.PropTypes.func,
	    showHour: _react.PropTypes.bool,
	    gregorianCalendarLocale: _react.PropTypes.object,
	    showSecond: _react.PropTypes.bool,
	    hourOptions: _react.PropTypes.array,
	    minuteOptions: _react.PropTypes.array,
	    secondOptions: _react.PropTypes.array,
	    disabledHours: _react.PropTypes.func,
	    disabledMinutes: _react.PropTypes.func,
	    disabledSeconds: _react.PropTypes.func,
	    onCurrentSelectPanelChange: _react.PropTypes.func
	  },
	
	  onItemChange: function onItemChange(type, itemValue) {
	    var onChange = this.props.onChange;
	
	    var value = this.props.value;
	    if (value) {
	      value = value.clone();
	    } else {
	      value = this.getNow().clone();
	    }
	    if (type === 'hour') {
	      value.setHourOfDay(itemValue);
	    } else if (type === 'minute') {
	      value.setMinutes(itemValue);
	    } else {
	      value.setSeconds(itemValue);
	    }
	    onChange(value);
	  },
	
	  onEnterSelectPanel: function onEnterSelectPanel(range) {
	    this.props.onCurrentSelectPanelChange(range);
	  },
	
	  getHourSelect: function getHourSelect(hour) {
	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var hourOptions = _props.hourOptions;
	    var disabledHours = _props.disabledHours;
	    var showHour = _props.showHour;
	
	    if (!showHour) {
	      return null;
	    }
	    var disabledOptions = disabledHours();
	
	    return _react2['default'].createElement(_Select2['default'], {
	      prefixCls: prefixCls,
	      options: hourOptions.map(function (option) {
	        return formatOption(option, disabledOptions);
	      }),
	      selectedIndex: hourOptions.indexOf(hour),
	      type: 'hour',
	      onSelect: this.onItemChange,
	      onMouseEnter: this.onEnterSelectPanel.bind(this, 'hour')
	    });
	  },
	
	  getMinuteSelect: function getMinuteSelect(minute) {
	    var _props2 = this.props;
	    var prefixCls = _props2.prefixCls;
	    var minuteOptions = _props2.minuteOptions;
	    var disabledMinutes = _props2.disabledMinutes;
	
	    var value = this.props.value || this.getNow();
	    var disabledOptions = disabledMinutes(value.getHourOfDay());
	
	    return _react2['default'].createElement(_Select2['default'], {
	      prefixCls: prefixCls,
	      options: minuteOptions.map(function (option) {
	        return formatOption(option, disabledOptions);
	      }),
	      selectedIndex: minuteOptions.indexOf(minute),
	      type: 'minute',
	      onSelect: this.onItemChange,
	      onMouseEnter: this.onEnterSelectPanel.bind(this, 'minute')
	    });
	  },
	
	  getSecondSelect: function getSecondSelect(second) {
	    var _props3 = this.props;
	    var prefixCls = _props3.prefixCls;
	    var secondOptions = _props3.secondOptions;
	    var disabledSeconds = _props3.disabledSeconds;
	    var showSecond = _props3.showSecond;
	
	    if (!showSecond) {
	      return null;
	    }
	    var value = this.props.value || this.getNow();
	    var disabledOptions = disabledSeconds(value.getHourOfDay(), value.getMinutes());
	
	    return _react2['default'].createElement(_Select2['default'], {
	      prefixCls: prefixCls,
	      options: secondOptions.map(function (option) {
	        return formatOption(option, disabledOptions);
	      }),
	      selectedIndex: secondOptions.indexOf(second),
	      type: 'second',
	      onSelect: this.onItemChange,
	      onMouseEnter: this.onEnterSelectPanel.bind(this, 'second')
	    });
	  },
	
	  getNow: function getNow() {
	    if (this.showNow) {
	      return this.showNow;
	    }
	    var value = new _gregorianCalendar2['default'](this.props.gregorianCalendarLocale);
	    value.setTime(Date.now());
	    this.showNow = value;
	    return value;
	  },
	
	  render: function render() {
	    var prefixCls = this.props.prefixCls;
	
	    var value = this.props.value || this.getNow();
	    return _react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-combobox' },
	      this.getHourSelect(value.getHourOfDay()),
	      this.getMinuteSelect(value.getMinutes()),
	      this.getSecondSelect(value.getSeconds())
	    );
	  }
	});
	
	exports['default'] = Combobox;
	module.exports = exports['default'];

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames2 = __webpack_require__(264);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var scrollTo = function scrollTo(element, to, duration) {
	  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
	    return setTimeout(arguments[0], 10);
	  };
	  // jump to target if duration zero
	  if (duration <= 0) {
	    element.scrollTop = to;
	    return;
	  }
	  var difference = to - element.scrollTop;
	  var perTick = difference / duration * 10;
	
	  requestAnimationFrame(function () {
	    element.scrollTop = element.scrollTop + perTick;
	    if (element.scrollTop === to) return;
	    scrollTo(element, to, duration - 10);
	  });
	};
	
	var Select = _react2['default'].createClass({
	  displayName: 'Select',
	
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    options: _react.PropTypes.array,
	    gregorianCalendarLocale: _react.PropTypes.object,
	    selectedIndex: _react.PropTypes.number,
	    type: _react.PropTypes.string,
	    onSelect: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func
	  },
	
	  componentDidMount: function componentDidMount() {
	    // jump to selected option
	    this.scrollToSelected(0);
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    // smooth scroll to selected option
	    if (prevProps.selectedIndex !== this.props.selectedIndex) {
	      this.scrollToSelected(120);
	    }
	  },
	
	  onSelect: function onSelect(value) {
	    var _props = this.props;
	    var onSelect = _props.onSelect;
	    var type = _props.type;
	
	    onSelect(type, value);
	  },
	
	  getOptions: function getOptions() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var options = _props2.options;
	    var selectedIndex = _props2.selectedIndex;
	    var prefixCls = _props2.prefixCls;
	
	    return options.map(function (item, index) {
	      var _classnames;
	
	      var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), _defineProperty(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
	      var onclick = null;
	      if (!item.disabled) {
	        onclick = _this.onSelect.bind(_this, +item.value);
	      }
	      return _react2['default'].createElement(
	        'li',
	        { className: cls, key: index, onClick: onclick, disabled: item.disabled },
	        item.value
	      );
	    });
	  },
	
	  scrollToSelected: function scrollToSelected(duration) {
	    // move to selected item
	    var select = _reactDom2['default'].findDOMNode(this);
	    var list = _reactDom2['default'].findDOMNode(this.refs.list);
	    var index = this.props.selectedIndex;
	    if (index < 0) {
	      index = 0;
	    }
	    var topOption = list.children[index];
	    var to = topOption.offsetTop;
	    scrollTo(select, to, duration);
	  },
	
	  render: function render() {
	    if (this.props.options.length === 0) {
	      return null;
	    }
	
	    var prefixCls = this.props.prefixCls;
	
	    return _react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-select',
	        onMouseEnter: this.props.onMouseEnter },
	      _react2['default'].createElement(
	        'ul',
	        { ref: 'list' },
	        this.getOptions()
	      )
	    );
	  }
	});
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },
/* 391 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};
	
	var targetOffset = [0, 0];
	
	var placements = {
	  bottomLeft: {
	    points: ['tl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -3],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -3],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 3],
	    targetOffset: targetOffset
	  },
	  topLeft: {
	    points: ['bl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 3],
	    targetOffset: targetOffset
	  }
	};
	
	exports['default'] = placements;
	module.exports = exports['default'];

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getFormatter = getFormatter;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _gregorianCalendarFormat = __webpack_require__(360);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	function getFormatter(format, locale) {
	  if (typeof format === 'string') {
	    return new _gregorianCalendarFormat2['default'](format, locale.format);
	  }
	  return format;
	}

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _zh_CN = __webpack_require__(394);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _gregorianCalendarFormat = __webpack_require__(360);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _gregorianCalendar = __webpack_require__(351);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  getLocale: function getLocale() {
	    // 统一合并为完整的 Locale
	    var locale = (0, _objectAssign2.default)({}, _zh_CN2.default, this.props.locale);
	    locale.lang = (0, _objectAssign2.default)({}, _zh_CN2.default.lang, this.props.locale.lang);
	    return locale;
	  },
	  getFormatter: function getFormatter() {
	    var formats = this.formats = this.formats || {};
	    var format = this.props.format;
	    if (formats[format]) {
	      return formats[format];
	    }
	    formats[format] = new _gregorianCalendarFormat2.default(format, this.getLocale().lang.format);
	    return formats[format];
	  },
	  parseDateFromValue: function parseDateFromValue(value) {
	    if (value) {
	      if (typeof value === 'string') {
	        return this.getFormatter().parse(value, { locale: this.getLocale() });
	      } else if (value instanceof Date) {
	        var date = new _gregorianCalendar2.default(this.getLocale());
	        date.setTime(+value);
	        return date;
	      }
	    }
	    return value;
	  },
	
	
	  // remove input readonly warning
	  handleInputChange: function handleInputChange() {},
	  toggleOpen: function toggleOpen(e) {
	    this.setState({
	      open: e.open
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectAssign = __webpack_require__(301);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _zh_CN = __webpack_require__(395);
	
	var _zh_CN2 = _interopRequireDefault(_zh_CN);
	
	var _zh_CN3 = __webpack_require__(377);
	
	var _zh_CN4 = _interopRequireDefault(_zh_CN3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 统一合并为完整的 Locale
	var locale = (0, _objectAssign2.default)({}, _zh_CN2.default);
	locale.lang = (0, _objectAssign2.default)({
	  placeholder: '请选择日期',
	  timePlaceholder: '请选择时间'
	}, _zh_CN4.default);
	
	// should add whitespace between char in Button
	locale.lang.ok = '确 定';
	
	// All settings at:
	// https://github.com/ant-design/ant-design/issues/424
	
	exports.default = locale;
	module.exports = exports['default'];

/***/ },
/* 395 */
/***/ function(module, exports) {

	/*
	 * zh-cn locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	"use strict";
	
	module.exports = {
	  // in minutes
	  timezoneOffset: 8 * 60,
	  firstDayOfWeek: 1,
	  minimalDaysInFirstWeek: 1
	};

/***/ }
]);
//# sourceMappingURL=overview.js.map