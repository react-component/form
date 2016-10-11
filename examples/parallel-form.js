webpackJsonp([12],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(499);


/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(212);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(213);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createForm = _createForm2.default; // export this package's api

/***/ },

/***/ 295:
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

/***/ 297:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(299);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(300);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(320);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(301), __esModule: true };

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(302);
	__webpack_require__(315);
	module.exports = __webpack_require__(319).f('iterator');

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(303)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(304)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , defined   = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(305)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(306)
	  , hide           = __webpack_require__(11)
	  , has            = __webpack_require__(24)
	  , Iterators      = __webpack_require__(307)
	  , $iterCreate    = __webpack_require__(308)
	  , setToStringTag = __webpack_require__(312)
	  , getPrototypeOf = __webpack_require__(314)
	  , ITERATOR       = __webpack_require__(313)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },

/***/ 305:
/***/ function(module, exports) {

	module.exports = true;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ },

/***/ 307:
/***/ function(module, exports) {

	module.exports = {};

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(309)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(312)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(313)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(310)
	  , enumBugKeys = __webpack_require__(36)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(18)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(311).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(22);
	
	module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(24)
	  , TAG = __webpack_require__(313)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(34)('wks')
	  , uid        = __webpack_require__(35)
	  , Symbol     = __webpack_require__(7).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(24)
	  , toObject    = __webpack_require__(39)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(316);
	var global        = __webpack_require__(7)
	  , hide          = __webpack_require__(11)
	  , Iterators     = __webpack_require__(307)
	  , TO_STRING_TAG = __webpack_require__(313)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(317)
	  , step             = __webpack_require__(318)
	  , Iterators        = __webpack_require__(307)
	  , toIObject        = __webpack_require__(25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(304)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },

/***/ 317:
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },

/***/ 318:
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(313);

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(321), __esModule: true };

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(322);
	__webpack_require__(331);
	__webpack_require__(332);
	__webpack_require__(333);
	module.exports = __webpack_require__(8).Symbol;

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(7)
	  , has            = __webpack_require__(24)
	  , DESCRIPTORS    = __webpack_require__(16)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(306)
	  , META           = __webpack_require__(323).KEY
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(312)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(313)
	  , wksExt         = __webpack_require__(319)
	  , wksDefine      = __webpack_require__(324)
	  , keyOf          = __webpack_require__(325)
	  , enumKeys       = __webpack_require__(326)
	  , isArray        = __webpack_require__(327)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , createDesc     = __webpack_require__(20)
	  , _create        = __webpack_require__(309)
	  , gOPNExt        = __webpack_require__(328)
	  , $GOPD          = __webpack_require__(330)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(22)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(329).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(38).f  = $propertyIsEnumerable;
	  __webpack_require__(37).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(305)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(35)('meta')
	  , isObject = __webpack_require__(14)
	  , has      = __webpack_require__(24)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(17)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(7)
	  , core           = __webpack_require__(8)
	  , LIBRARY        = __webpack_require__(305)
	  , wksExt         = __webpack_require__(319)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(22)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(22)
	  , gOPS    = __webpack_require__(37)
	  , pIE     = __webpack_require__(38);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(27);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , gOPN      = __webpack_require__(329).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(23)
	  , hiddenKeys = __webpack_require__(36).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(38)
	  , createDesc     = __webpack_require__(20)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , has            = __webpack_require__(24)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },

/***/ 331:
/***/ function(module, exports) {



/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(324)('asyncIterator');

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(324)('observable');

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(335);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(339);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(299);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(336), __esModule: true };

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(337);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(338).set});

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(330).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(340), __esModule: true };

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(341);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(309)});

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _rcSwitch = __webpack_require__(364);
	
	var _rcSwitch2 = _interopRequireDefault(_rcSwitch);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(366);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Switch = (_temp = _class = function (_React$Component) {
	  _inherits(Switch, _React$Component);
	
	  function Switch() {
	    _classCallCheck(this, Switch);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Switch.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var size = _props.size;
	    var className = _props.className;
	
	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-small', size === 'small'), _classNames));
	    return _react2["default"].createElement(_rcSwitch2["default"], _extends({ className: cls }, this.props));
	  };
	
	  return Switch;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-switch'
	}, _temp);
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(365);

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var React = __webpack_require__(40);
	var classNames = __webpack_require__(366);
	
	function noop() {}
	
	var Switch = React.createClass({
	  displayName: 'Switch',
	
	  propTypes: {
	    className: React.PropTypes.string,
	    prefixCls: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    checkedChildren: React.PropTypes.any,
	    unCheckedChildren: React.PropTypes.any,
	    onChange: React.PropTypes.func,
	    onMouseUp: React.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-switch',
	      checkedChildren: null,
	      unCheckedChildren: null,
	      className: '',
	      defaultChecked: false,
	      onChange: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var checked = false;
	    if ('checked' in props) {
	      checked = !!props.checked;
	    } else {
	      checked = !!props.defaultChecked;
	    }
	    return {
	      checked: checked
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: !!nextProps.checked
	      });
	    }
	  },
	  setChecked: function setChecked(checked) {
	    if (!('checked' in this.props)) {
	      this.setState({
	        checked: checked
	      });
	    }
	    this.props.onChange(checked);
	  },
	  toggle: function toggle() {
	    var checked = !this.state.checked;
	    this.setChecked(checked);
	  },
	  handleKeyDown: function handleKeyDown(e) {
	    if (e.keyCode === 37) {
	      this.setChecked(false);
	    }
	    if (e.keyCode === 39) {
	      this.setChecked(true);
	    }
	  },
	  // Handle auto focus when click switch in Chrome
	  handleMouseUp: function handleMouseUp(e) {
	    if (this.refs.node) {
	      this.refs.node.blur();
	    }
	    if (this.props.onMouseUp) {
	      this.props.onMouseUp(e);
	    }
	  },
	  render: function render() {
	    var _classNames;
	
	    var _props = this.props;
	    var className = _props.className;
	    var prefixCls = _props.prefixCls;
	    var disabled = _props.disabled;
	    var checkedChildren = _props.checkedChildren;
	    var unCheckedChildren = _props.unCheckedChildren;
	
	    var restProps = _objectWithoutProperties(_props, ['className', 'prefixCls', 'disabled', 'checkedChildren', 'unCheckedChildren']);
	
	    var checked = this.state.checked;
	    var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
	    return React.createElement(
	      'span',
	      _extends({}, restProps, {
	        className: switchClassName,
	        tabIndex: '0',
	        ref: 'node',
	        onKeyDown: this.handleKeyDown,
	        onClick: disabled ? noop : this.toggle,
	        onMouseUp: this.handleMouseUp }),
	      React.createElement(
	        'span',
	        { className: prefixCls + '-inner' },
	        checked ? checkedChildren : unCheckedChildren
	      )
	    );
	  }
	});
	
	module.exports = Switch;

/***/ },

/***/ 366:
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

/***/ 367:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(297);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(298);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(334);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends2 = __webpack_require__(2);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _rcForm = __webpack_require__(211);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(73);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(295);
	
	var _switch = __webpack_require__(363);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	__webpack_require__(367);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint react/no-multi-comp:0, no-console:0 */
	
	var TopForm = _react2.default.createClass({
	  displayName: 'TopForm',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  render: function render() {
	    var getFieldProps = this.props.form.getFieldProps;
	
	    return _react2.default.createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2.default.createElement(
	        'div',
	        null,
	        'has email? '
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_switch2.default, getFieldProps('on', {
	          initialValue: true,
	          valuePropName: 'checked'
	        }))
	      )
	    );
	  }
	});
	
	var BottomForm = _react2.default.createClass({
	  displayName: 'BottomForm',
	
	  propTypes: {
	    form: _react.PropTypes.object,
	    on: _react.PropTypes.bool
	  },
	
	  render: function render() {
	    var form = this.props.form;
	
	    var on = form.getFieldValue('on');
	    var style = (0, _extends3.default)({}, _styles.regionStyle, {
	      display: on ? 'block' : 'none'
	    });
	    return _react2.default.createElement(
	      'div',
	      { style: style },
	      _react2.default.createElement(
	        'div',
	        null,
	        'email: '
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', form.getFieldProps('email', {
	          rules: [{
	            type: 'email'
	          }],
	          hidden: !on
	        }))
	      )
	    );
	  }
	});
	
	var Form = _react2.default.createClass({
	  displayName: 'Form',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();
	    console.log(this.props.form.getFieldsValue());
	  },
	  render: function render() {
	    var form = this.props.form;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(TopForm, { form: form }),
	      _react2.default.createElement(BottomForm, { form: form }),
	      _react2.default.createElement(
	        'div',
	        { style: _styles.regionStyle },
	        _react2.default.createElement(
	          'button',
	          { onClick: this.onSubmit },
	          'submit'
	        )
	      )
	    );
	  }
	});
	
	Form = (0, _rcForm.createForm)()(Form);
	
	var App = function (_React$Component) {
	  (0, _inherits3.default)(App, _React$Component);
	
	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'parallel form'
	      ),
	      _react2.default.createElement(Form, null)
	    );
	  };
	
	  return App;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=parallel-form.js.map