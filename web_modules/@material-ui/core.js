import { _ as _unsupportedIterableToArray, u as useTheme$1, n as nested, T as ThemeContext, a as _extends, m as makeStyles$1, d as defaultTheme, S as SvgIcon, b as _inheritsLoose, c as _objectWithoutPropertiesLoose, e as _assertThisInitialized, w as withStyles, f as _objectWithoutProperties, g as clsx, h as _toConsumableArray, i as fade, j as capitalize, k as _defineProperty, l as _createClass, o as getThemeProps, z as zIndex, p as formatMuiErrorMessage, q as _typeof, r as mergeClasses } from '../common/SvgIcon-498852b2.js';
export { s as createMuiTheme } from '../common/SvgIcon-498852b2.js';
import { c as createCommonjsModule } from '../common/_commonjsHelpers-913f9c4a.js';
import { r as react } from '../common/index-63a1b8e9.js';
import { r as reactDom } from '../common/index-fcc20518.js';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function createStyles(styles) {
  return styles;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    return mergedTheme;
  }

  return _extends(_extends({}, outerTheme), localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = useTheme$1();

  var theme = react.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
}

// To remove in v5

function createStyles$1(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStyles(styles);
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return makeStyles$1(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

function useTheme() {
  var theme = useTheme$1() || defaultTheme;

  return theme;
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react.createElement(SvgIcon, _extends({
      ref: ref
    }, props), path);
  };

  Component.muiName = SvgIcon.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc.defaultView || window;
}

// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
function useControlled(_ref) {
  var controlled = _ref.controlled,
      defaultProp = _ref.default,
      name = _ref.name,
      _ref$state = _ref.state;

  var _React$useRef = react.useRef(controlled !== undefined),
      isControlled = _React$useRef.current;

  var _React$useState = react.useState(defaultProp),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var value = isControlled ? controlled : valueState;

  var setValueIfUncontrolled = react.useCallback(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

var useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react.useCallback(function () {
    return (ref.current).apply(void 0, arguments);
  }, []);
}

function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */

function focusTriggersKeyboardModality(node) {
  var type = node.type,
      tagName = node.tagName;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  var target = event.target;

  try {
    return target.matches(':focus-visible');
  } catch (error) {// browsers not implementing :focus-visible will throw a SyntaxError
    // we use our own heuristic for those browsers
    // rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  } // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
/**
 * Should be called if a blur event is fired on a focus-visible element
 */


function handleBlurVisible() {
  // To detect a tab/window switch, we look for a blur event followed
  // rapidly by a visibility change.
  // If we don't see a visibility change within 100ms, it's probably a
  // regular focus change.
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
    hadFocusVisibleRecently = false;
  }, 100);
}

function useIsFocusVisible() {
  var ref = react.useCallback(function (instance) {
    var node = reactDom.findDOMNode(instance);

    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);

  return {
    isFocusVisible: isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref: ref
  };
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var config = {
  disabled: false
};

var TransitionGroupContext = react.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && react.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return react.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!react.isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = react.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && react.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes =  {};
TransitionGroup.defaultProps = defaultProps;

var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return _extends({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
var Paper$1 = withStyles(styles, {
  name: 'MuiPaper'
})(Paper);

var useEnhancedEffect$1 = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  var classes = props.classes,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      inProp = props.in,
      _props$onExited = props.onExited,
      onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
      timeout = props.timeout;

  var _React$useState = react.useState(false),
      leaving = _React$useState[0],
      setLeaving = _React$useState[1];

  var rippleClassName = clsx(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = useEventCallback(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

  useEnhancedEffect$1(function () {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true); // react-transition-group#onExited

      var timeoutId = setTimeout(handleExited, timeout);
      return function () {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [handleExited, inProp, timeout]);
  return /*#__PURE__*/react.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /*#__PURE__*/react.createElement("span", {
    className: childClassName
  }));
}

var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles$1 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit'
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

var TouchRipple = /*#__PURE__*/react.forwardRef(function TouchRipple(props, ref) {
  var _props$center = props.center,
      centerProp = _props$center === void 0 ? false : _props$center,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["center", "classes", "className"]);

  var _React$useState = react.useState([]),
      ripples = _React$useState[0],
      setRipples = _React$useState[1];

  var nextKey = react.useRef(0);
  var rippleCallback = react.useRef(null);
  react.useEffect(function () {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  var ignoringMouseDown = react.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  var startTimer = react.useRef(null); // This is the hook called once the previous timeout is ready.

  var startTimerCommit = react.useRef(null);
  var container = react.useRef(null);
  react.useEffect(function () {
    return function () {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react.useCallback(function (params) {
    var pulsate = params.pulsate,
        rippleX = params.rippleX,
        rippleY = params.rippleY,
        rippleSize = params.rippleSize,
        cb = params.cb;
    setRipples(function (oldRipples) {
      return [].concat(_toConsumableArray(oldRipples), [/*#__PURE__*/react.createElement(Ripple, {
        key: nextKey.current,
        classes: classes,
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = react.useCallback(function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var _options$pulsate = options.pulsate,
        pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
        _options$center = options.center,
        center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
        _options$fakeElement = options.fakeElement,
        fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    var rippleX;
    var rippleY;
    var rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = function () {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(function () {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize,
        cb: cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react.useCallback(function () {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react.useCallback(function (event, cb) {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function () {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(function (oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react.useImperativeHandle(ref, function () {
    return {
      pulsate: pulsate,
      start: start,
      stop: stop
    };
  }, [pulsate, start, stop]);
  return /*#__PURE__*/react.createElement("span", _extends({
    className: clsx(classes.root, className),
    ref: container
  }, other), /*#__PURE__*/react.createElement(TransitionGroup, {
    component: null,
    exit: true
  }, ripples));
});
var TouchRipple$1 = withStyles(styles$1, {
  flip: false,
  name: 'MuiTouchRipple'
})( /*#__PURE__*/react.memo(TouchRipple));

var styles$2 = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

var ButtonBase = /*#__PURE__*/react.forwardRef(function ButtonBase(props, ref) {
  var action = props.action,
      buttonRefProp = props.buttonRef,
      _props$centerRipple = props.centerRipple,
      centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      onDragLeave = props.onDragLeave,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

  var buttonRef = react.useRef(null);

  function getButtonNode() {
    // #StrictMode ready
    return reactDom.findDOMNode(buttonRef.current);
  }

  var rippleRef = react.useRef(null);

  var _React$useState = react.useState(false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  var _useIsFocusVisible = useIsFocusVisible(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  react.useImperativeHandle(action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react.useEffect(function () {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
    return useEventCallback(function (event) {
      if (eventCallback) {
        eventCallback(event);
      }

      var ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  var handleMouseDown = useRippleHandler('start', onMouseDown);
  var handleDragLeave = useRippleHandler('stop', onDragLeave);
  var handleMouseUp = useRippleHandler('stop', onMouseUp);
  var handleMouseLeave = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler('start', onTouchStart);
  var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  var handleTouchMove = useRippleHandler('stop', onTouchMove);
  var handleBlur = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = useEventCallback(function (event) {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    if (isFocusVisible(event)) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  var isNonNativeButton = function isNonNativeButton() {
    var button = getButtonNode();
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  var keydownRef = react.useRef(false);
  var handleKeyDown = useEventCallback(function (event) {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = useEventCallback(function (event) {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  var buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }

    buttonProps['aria-disabled'] = disabled;
  }

  var handleUserRef = useForkRef(buttonRefProp, ref);
  var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  var handleRef = useForkRef(handleUserRef, handleOwnRef);

  var _React$useState2 = react.useState(false),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

  react.useEffect(function () {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;

  return /*#__PURE__*/react.createElement(ComponentProp, _extends({
    className: clsx(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick: onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ?
  /*#__PURE__*/

  /* TouchRipple is only needed client-side, x2 boost on the server. */
  react.createElement(TouchRipple$1, _extends({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
var ButtonBase$1 = withStyles(styles$2, {
  name: 'MuiButtonBase'
})(ButtonBase);

var styles$3 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: '50%',
      overflow: 'visible',
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      '$sizeSmall&': {
        marginLeft: -3
      }
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      '$sizeSmall&': {
        marginRight: -3
      }
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },

    /* Styles applied to the children container element. */
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

var IconButton = /*#__PURE__*/react.forwardRef(function IconButton(props, ref) {
  var _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = _objectWithoutProperties(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

  return /*#__PURE__*/react.createElement(ButtonBase$1, _extends({
    className: clsx(classes.root, className, color !== 'default' && classes["color".concat(capitalize(color))], disabled && classes.disabled, size === "small" && classes["size".concat(capitalize(size))], {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other), /*#__PURE__*/react.createElement("span", {
    className: classes.label
  }, children));
});
var IconButton$1 = withStyles(styles$3, {
  name: 'MuiIconButton'
})(IconButton);

var styles$4 = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      '@media print': {
        // Prevent the app bar to be visible on each printed page.
        position: 'absolute'
      }
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static'
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: 'transparent',
      color: 'inherit'
    }
  };
};
var AppBar = /*#__PURE__*/react.forwardRef(function AppBar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$position = props.position,
      position = _props$position === void 0 ? 'fixed' : _props$position,
      other = _objectWithoutProperties(props, ["classes", "className", "color", "position"]);

  return /*#__PURE__*/react.createElement(Paper$1, _extends({
    square: true,
    component: "header",
    elevation: 4,
    className: clsx(classes.root, classes["position".concat(capitalize(position))], classes["color".concat(capitalize(color))], className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
var AppBar$1 = withStyles(styles$4, {
  name: 'MuiAppBar'
})(AppBar);

var styles$5 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react.forwardRef(function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(capitalize(align))], display !== 'initial' && classes["display".concat(capitalize(display))]),
    ref: ref
  }, other));
});
var Typography$1 = withStyles(styles$5, {
  name: 'MuiTypography'
})(Typography);

var styles$6 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 15px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(fade(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(fade(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$disabled': {
        boxShadow: 'none'
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: 'inherit',
      marginRight: -4,
      marginLeft: 8,
      '&$iconSizeSmall': {
        marginRight: -2
      }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      '& > *:first-child': {
        fontSize: 18
      }
    },

    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: 20
      }
    },

    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      '& > *:first-child': {
        fontSize: 22
      }
    }
  };
};
var Button = /*#__PURE__*/react.forwardRef(function Button(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  var startIcon = startIconProp && /*#__PURE__*/react.createElement("span", {
    className: clsx(classes.startIcon, classes["iconSize".concat(capitalize(size))])
  }, startIconProp);
  var endIcon = endIconProp && /*#__PURE__*/react.createElement("span", {
    className: clsx(classes.endIcon, classes["iconSize".concat(capitalize(size))])
  }, endIconProp);
  return /*#__PURE__*/react.createElement(ButtonBase$1, _extends({
    className: clsx(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat(capitalize(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), /*#__PURE__*/react.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
var Button$1 = withStyles(styles$6, {
  name: 'MuiButton'
})(Button);

/**
 * @ignore - internal component.
 */

var FormControlContext = /*#__PURE__*/react.createContext();

function useFormControl() {
  return react.useContext(FormControlContext);
}

function useFormControl$1() {
  return react.useContext(FormControlContext);
}

var styles$7 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _defineProperty({
      width: '100%',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      marginRight: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },

    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];

      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }

      return acc;
    }, {}),

    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: _defineProperty({}, theme.breakpoints.up('xs'), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),

    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: _defineProperty({}, theme.breakpoints.up('sm'), {
      maxWidth: theme.breakpoints.values.sm
    }),

    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: _defineProperty({}, theme.breakpoints.up('md'), {
      maxWidth: theme.breakpoints.values.md
    }),

    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: _defineProperty({}, theme.breakpoints.up('lg'), {
      maxWidth: theme.breakpoints.values.lg
    }),

    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: _defineProperty({}, theme.breakpoints.up('xl'), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container = /*#__PURE__*/react.forwardRef(function Container(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat(capitalize(String(maxWidth)))]),
    ref: ref
  }, other));
});
var Container$1 = withStyles(styles$7, {
  name: 'MuiContainer'
})(Container);

var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var body = function body(theme) {
  return _extends({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles$8 = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: _extends({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      classes = props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/react.createElement(react.Fragment, null, children);
}

var CssBaseline$1 = withStyles(styles$8, {
  name: 'MuiCssBaseline'
})(CssBaseline);

function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return reactDom.findDOMNode(container);
}

var useEnhancedEffect$2 = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal$1 = /*#__PURE__*/react.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = useForkRef( /*#__PURE__*/react.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect$2(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect$2(function () {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function () {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect$2(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react.isValidElement(children)) {
      return /*#__PURE__*/react.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/reactDom.createPortal(children, mountNode) : mountNode;
});

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

function isOverflowing(container) {
  var doc = ownerDocument(container);

  if (doc.body === container) {
    return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat(_toConsumableArray(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = getScrollbarSize();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    _classCallCheck(this, ModalManager);

    // this.modals[modalIndex] = modal
    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  _createClass(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */
/**
 * Utility component that locks focus inside the component.
 */

function Unstable_TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react.useRef();
  var sentinelStart = react.useRef(null);
  var sentinelEnd = react.useRef(null);
  var nodeToRestore = react.useRef();
  var rootRef = react.useRef(null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react.useCallback(function (instance) {
    // #StrictMode ready
    rootRef.current = reactDom.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  var prevOpenRef = react.useRef();
  react.useEffect(function () {
    prevOpenRef.current = open;
  }, [open]);

  if (!prevOpenRef.current && open && typeof window !== 'undefined') {
    // WARNING: Potentially unsafe in concurrent mode.
    // The way the read on `nodeToRestore` is setup could make this actually safe.
    // Say we render `open={false}` -> `open={true}` but never commit.
    // We have now written a state that wasn't committed. But no committed effect
    // will read this wrong value. We only read from `nodeToRestore` in effects
    // that were committed on `open={true}`
    // WARNING: Prevents the instance from being garbage collected. Should only
    // hold a weak ref.
    nodeToRestore.current = getDoc().activeElement;
  }

  react.useEffect(function () {
    if (!open) {
      return;
    }

    var doc = ownerDocument(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/react.cloneElement(children, {
    ref: handleRef
  }), /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

var styles$9 = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = /*#__PURE__*/react.forwardRef(function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = _objectWithoutProperties(props, ["invisible", "open"]);

  return open ? /*#__PURE__*/react.createElement("div", _extends({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: _extends({}, styles$9.root, invisible ? styles$9.invisible : {}, other.style)
  })) : null;
});

function getContainer$1(container) {
  container = typeof container === 'function' ? container() : container;
  return reactDom.findDOMNode(container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new ModalManager();
var styles$a = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal = /*#__PURE__*/react.forwardRef(function Modal(inProps, ref) {
  var theme = useTheme$1();
  var props = getThemeProps({
    name: 'MuiModal',
    props: _extends({}, inProps),
    theme: theme
  });

  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? SimpleBackdrop : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = _objectWithoutProperties(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var _React$useState = react.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var modal = react.useRef({});
  var mountNodeRef = react.useRef(null);
  var modalRef = react.useRef(null);
  var handleRef = useForkRef(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return ownerDocument(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = useEventCallback(function () {
    var resolvedContainer = getContainer$1(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react.useCallback(function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = useEventCallback(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  var handleClose = react.useCallback(function () {
    manager.remove(getModal());
  }, [manager]);
  react.useEffect(function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react.useEffect(function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  var inlineStyle = styles$a(theme || {
    zIndex: zIndex
  });
  var childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }

  return /*#__PURE__*/react.createElement(Portal$1, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/react.createElement("div", _extends({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: _extends({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /*#__PURE__*/react.createElement(BackdropComponent, _extends({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), /*#__PURE__*/react.createElement(Unstable_TrapFocus, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/react.cloneElement(children, childProps))));
});

var styles$b = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: fade(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: '100%',
      width: 1
    },

    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  };
};
var Divider = /*#__PURE__*/react.forwardRef(function Divider(props, ref) {
  var _props$absolute = props.absolute,
      absolute = _props$absolute === void 0 ? false : _props$absolute,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'hr' : _props$component,
      _props$flexItem = props.flexItem,
      flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
      _props$light = props.light,
      light = _props$light === void 0 ? false : _props$light,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$role = props.role,
      role = _props$role === void 0 ? Component !== 'hr' ? 'separator' : undefined : _props$role,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
      other = _objectWithoutProperties(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, variant !== 'fullWidth' && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === 'vertical' && classes.vertical),
    role: role,
    ref: ref
  }, other));
});
var Divider$1 = withStyles(styles$b, {
  name: 'MuiDivider'
})(Divider);

function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect$3 = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
var styles$c = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize = /*#__PURE__*/react.forwardRef(function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$rowsMin = props.rowsMin,
      rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
      style = props.style,
      value = props.value,
      other = _objectWithoutProperties(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  var rowsMin = rows || rowsMinProp;

  var _React$useRef = react.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react.useRef(null);
  var handleRef = useForkRef(ref, inputRef);
  var shadowRef = react.useRef(null);
  var renders = react.useRef(0);

  var _React$useState = react.useState({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react.useCallback(function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react.useEffect(function () {
    var handleResize = debounce(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect$3(function () {
    syncHeight();
  });
  react.useEffect(function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("textarea", _extends({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: _extends({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: _extends({}, styles$c.shadow, style)
  }));
});

// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

var styles$d = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect$4 = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/react.forwardRef(function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = _objectWithoutProperties(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react.useRef();
  var handleInputRefWarning = react.useCallback(function (instance) {
  }, []);
  var handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = useForkRef(inputRef, handleInputRefProp);

  var _React$useState = react.useState(false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = useFormControl();

  var fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react.useEffect(function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react.useCallback(function (obj) {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect$4(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( formatMuiErrorMessage(1));
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react.useEffect(function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = _extends({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = _extends({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = _extends({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = TextareaAutosize;
    }
  } else {
    inputProps = _extends({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react.useEffect(function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, classes["color".concat(capitalize(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react.createElement(FormControlContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(InputComponent, _extends({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: clsx(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
var InputBase$1 = withStyles(styles$d, {
  name: 'MuiInputBase'
})(InputBase);

var styles$e = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:before': {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '27px 12px 10px',
      '&$marginDense': {
        paddingTop: 23,
        paddingBottom: 6
      }
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '27px 12px 10px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },

    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      '&$inputMarginDense': {
        paddingTop: 10,
        paddingBottom: 11
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = /*#__PURE__*/react.forwardRef(function FilledInput(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react.createElement(InputBase$1, _extends({
    classes: _extends({}, classes, {
      root: clsx(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
FilledInput.muiName = 'Input';
var FilledInput$1 = withStyles(styles$e, {
  name: 'MuiFilledInput'
})(FilledInput);

var styles$f = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */

var FormControl = /*#__PURE__*/react.forwardRef(function FormControl(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);

  var _React$useState = react.useState(function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialAdornedStart = false;

    if (children) {
      react.Children.forEach(children, function (child) {
        if (!isMuiElement(child, ['Input', 'Select'])) {
          return;
        }

        var input = isMuiElement(child, ['Select']) ? child.props.input : child;

        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

  var _React$useState2 = react.useState(function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialFilled = false;

    if (children) {
      react.Children.forEach(children, function (child) {
        if (!isMuiElement(child, ['Input', 'Select'])) {
          return;
        }

        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  var registerEffect;

  var onFilled = react.useCallback(function () {
    setFilled(true);
  }, []);
  var onEmpty = react.useCallback(function () {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart: adornedStart,
    setAdornedStart: setAdornedStart,
    color: color,
    disabled: disabled,
    error: error,
    filled: filled,
    focused: focused,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty: onEmpty,
    onFilled: onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect: registerEffect,
    required: required,
    variant: variant
  };
  return /*#__PURE__*/react.createElement(FormControlContext.Provider, {
    value: childContext
  }, /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, margin !== 'none' && classes["margin".concat(capitalize(margin))], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
var FormControl$1 = withStyles(styles$f, {
  name: 'MuiFormControl'
})(FormControl);

var styles$g = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = /*#__PURE__*/react.forwardRef(function FormHelperText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'p' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var muiFormControl = useFormControl$1();
  var fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
var FormHelperText$1 = withStyles(styles$g, {
  name: 'MuiFormHelperText'
})(FormHelperText);

var styles$h = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        color: theme.palette.secondary.main
      }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = /*#__PURE__*/react.forwardRef(function FormLabel(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'label' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      required = props.required,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

  var muiFormControl = useFormControl$1();
  var fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, classes["color".concat(capitalize(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref: ref
  }, other), children, fcs.required && /*#__PURE__*/react.createElement("span", {
    "aria-hidden": true,
    className: clsx(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", '*'));
});
var FormLabel$1 = withStyles(styles$h, {
  name: 'MuiFormLabel'
})(FormLabel);

var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    _extends(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles$i = function styles(theme) {
  return _extends({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react.forwardRef(function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = _objectWithoutProperties(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = clsx(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react.createElement(Component, _extends({
    className: className,
    ref: ref
  }, other));
});
var StyledGrid = withStyles(styles$i, {
  name: 'MuiGrid'
})(Grid);

function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles$j = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = /*#__PURE__*/react.forwardRef(function Grow(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition : _props$TransitionComp,
      other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react.useRef();
  var autoTimeout = react.useRef();
  var theme = useTheme();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = _slicedToArray(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    reflow(node); // So the animation always start from the start.

    var _getTransitionProps = getTransitionProps({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = getTransitionProps({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/react.createElement(TransitionComponent, _extends({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react.cloneElement(children, _extends({
      style: _extends({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles$j[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
Grow.muiSupportAuto = true;

var styles$k = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      fontSize: theme.typography.pxToRem(24),
      width: '1em',
      height: '1em',
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: 'hidden',
      flexShrink: 0
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(36)
    }
  };
};
var Icon = /*#__PURE__*/react.forwardRef(function Icon(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'default' : _props$fontSize,
      other = _objectWithoutProperties(props, ["classes", "className", "color", "component", "fontSize"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx('material-icons', classes.root, className, color !== 'inherit' && classes["color".concat(capitalize(color))], fontSize !== 'default' && classes["fontSize".concat(capitalize(fontSize))]),
    "aria-hidden": true,
    ref: ref
  }, other));
});
Icon.muiName = 'Icon';
var Icon$1 = withStyles(styles$k, {
  name: 'MuiIcon'
})(Icon);

var styles$l = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = /*#__PURE__*/react.forwardRef(function Input(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react.createElement(InputBase$1, _extends({
    classes: _extends({}, classes, {
      root: clsx(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
Input.muiName = 'Input';
var Input$1 = withStyles(styles$l, {
  name: 'MuiInput'
})(Input);

var styles$m = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 12px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  };
};
var InputLabel = /*#__PURE__*/react.forwardRef(function InputLabel(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableAnimati = props.disableAnimation,
      disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
      margin = props.margin,
      shrinkProp = props.shrink,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

  var muiFormControl = useFormControl$1();
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ['margin', 'variant']
  });
  return /*#__PURE__*/react.createElement(FormLabel$1, _extends({
    "data-shrink": shrink,
    className: clsx(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === 'dense' && classes.marginDense, {
      'filled': classes.filled,
      'outlined': classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref: ref
  }, other));
});
var InputLabel$1 = withStyles(styles$m, {
  name: 'MuiInputLabel'
})(InputLabel);

/**
 * @ignore - internal component.
 */

var ListContext = /*#__PURE__*/react.createContext({});

var styles$n = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = /*#__PURE__*/react.forwardRef(function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react.useMemo(function () {
    return {
      dense: dense
    };
  }, [dense]);
  return /*#__PURE__*/react.createElement(ListContext.Provider, {
    value: context
  }, /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
var List$1 = withStyles(styles$n, {
  name: 'MuiList'
})(List);

function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles$o = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = /*#__PURE__*/react.forwardRef(function Popover(props, ref) {
  var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      className = props.className,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = _objectWithoutProperties(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var paperRef = react.useRef(); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  var getAnchorOffset = react.useCallback(function (contentAnchorOffset) {
    if (anchorReference === 'anchorPosition') {

      return anchorPosition;
    }

    var resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();

    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  var getContentAnchorOffset = react.useCallback(function (element) {
    var contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      var contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  var getTransformOrigin = react.useCallback(function (elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react.useCallback(function (element) {
    // Check if the parent has requested anchoring on an inner content node
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    var containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;

      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }


    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;

      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;

      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }

    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react.useCallback(function () {
    var element = paperRef.current;

    if (!element) {
      return;
    }

    var positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  var handleEntering = function handleEntering(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  var handlePaperRef = react.useCallback(function (instance) {
    // #StrictMode ready
    paperRef.current = reactDom.findDOMNode(instance);
  }, []);
  react.useEffect(function () {
    if (open) {
      setPositioningStyles();
    }
  });
  react.useImperativeHandle(action, function () {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  react.useEffect(function () {
    if (!open) {
      return undefined;
    }

    var handleResize = debounce(function () {
      setPositioningStyles();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/react.createElement(Modal, _extends({
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    },
    className: clsx(classes.root, className)
  }, other), /*#__PURE__*/react.createElement(TransitionComponent, _extends({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: createChainedFunction(handleEntering, TransitionProps.onEntering)
  }), /*#__PURE__*/react.createElement(Paper$1, _extends({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: clsx(classes.paper, PaperProps.className)
  }), children)));
});
var Popover$1 = withStyles(styles$o, {
  name: 'MuiPopover'
})(Popover);

function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}

var useEnhancedEffect$5 = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

var MenuList = /*#__PURE__*/react.forwardRef(function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = _objectWithoutProperties(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

  var listRef = react.useRef(null);
  var textCriteriaRef = react.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect$5(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react.useImperativeHandle(actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(getScrollbarSize(), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = ownerDocument(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react.useCallback(function (instance) {
    // #StrictMode ready
    listRef.current = reactDom.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react.Children.forEach(children, function (child, index) {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return;
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react.Children.map(children, function (child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/react.cloneElement(child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/react.createElement(List$1, _extends({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});

var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles$p = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = /*#__PURE__*/react.forwardRef(function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEntering = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = _objectWithoutProperties(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

  var theme = useTheme();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = react.useRef(null);
  var contentAnchorRef = react.useRef(null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react.Children.map(children, function (child, index) {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return;
    }

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react.Children.map(children, function (child, index) {
    if (index === activeItemIndex) {
      return /*#__PURE__*/react.cloneElement(child, {
        ref: function ref(instance) {
          // #StrictMode ready
          contentAnchorRef.current = reactDom.findDOMNode(instance);
          setRef(child.ref, instance);
        }
      });
    }

    return child;
  });
  return /*#__PURE__*/react.createElement(Popover$1, _extends({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    onEntering: handleEntering,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: _extends({}, PaperProps, {
      classes: _extends({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), /*#__PURE__*/react.createElement(MenuList, _extends({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    variant: variant
  }, MenuListProps, {
    className: clsx(classes.list, MenuListProps.className)
  }), items));
});
var Menu$1 = withStyles(styles$p, {
  name: 'MuiMenu'
})(Menu);

/**
 * @ignore - internal component.
 */

var NativeSelectInput = /*#__PURE__*/react.forwardRef(function NativeSelectInput(props, ref) {
  var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("select", _extends({
    className: clsx(classes.root, // TODO v5: merge root and select
    classes.select, classes[variant], className, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /*#__PURE__*/react.createElement(IconComponent, {
    className: clsx(classes.icon, classes["icon".concat(capitalize(variant))], disabled && classes.disabled)
  }));
});

/**
 * @ignore - internal component.
 */

var ArrowDropDownIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M7 10l5 5 5-5z"
}));

var styles$q = function styles(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      },
      '&&': {
        paddingRight: 24
      }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: 'auto',
      // Resets for multpile select with chips
      minHeight: '1.1876em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      pointerEvents: 'none',
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },

    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      width: '100%'
    }
  };
};
var defaultInput = /*#__PURE__*/react.createElement(Input$1, null);
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

var NativeSelect = /*#__PURE__*/react.forwardRef(function NativeSelect(props, ref) {
  var children = props.children,
      classes = props.classes,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? ArrowDropDownIcon : _props$IconComponent,
      _props$input = props.input,
      input = _props$input === void 0 ? defaultInput : _props$input,
      inputProps = props.inputProps,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

  var muiFormControl = useFormControl$1();
  var fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return /*#__PURE__*/react.cloneElement(input, _extends({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: NativeSelectInput,
    inputProps: _extends({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
NativeSelect.muiName = 'Select';
withStyles(styles$q, {
  name: 'MuiNativeSelect'
})(NativeSelect);

var styles$r = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legendLabelled: {
      display: 'block',
      width: 'auto',
      textAlign: 'left',
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block'
      }
    },

    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1000,
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
/**
 * @ignore - internal component.
 */

var NotchedOutline = /*#__PURE__*/react.forwardRef(function NotchedOutline(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      label = props.label,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

  var theme = useTheme();
  var align = theme.direction === 'rtl' ? 'right' : 'left';

  if (label !== undefined) {
    return /*#__PURE__*/react.createElement("fieldset", _extends({
      "aria-hidden": true,
      className: clsx(classes.root, className),
      ref: ref,
      style: style
    }, other), /*#__PURE__*/react.createElement("legend", {
      className: clsx(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /*#__PURE__*/react.createElement("span", null, label) : /*#__PURE__*/react.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  }

  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /*#__PURE__*/react.createElement("fieldset", _extends({
    "aria-hidden": true,
    style: _extends(_defineProperty({}, "padding".concat(capitalize(align)), 8), style),
    className: clsx(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react.createElement("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, /*#__PURE__*/react.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
});
var NotchedOutline$1 = withStyles(styles$r, {
  name: 'PrivateNotchedOutline'
})(NotchedOutline);

var styles$s = function styles(theme) {
  var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          borderColor: borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '18.5px 14px',
      '&$marginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor: borderColor
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '18.5px 14px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = /*#__PURE__*/react.forwardRef(function OutlinedInput(props, ref) {
  var classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      label = props.label,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      notched = props.notched,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = _objectWithoutProperties(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

  return /*#__PURE__*/react.createElement(InputBase$1, _extends({
    renderSuffix: function renderSuffix(state) {
      return /*#__PURE__*/react.createElement(NotchedOutline$1, {
        className: classes.notchedOutline,
        label: label,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: _extends({}, classes, {
      root: clsx(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
OutlinedInput.muiName = 'Input';
var OutlinedInput$1 = withStyles(styles$s, {
  name: 'MuiOutlinedInput'
})(OutlinedInput);

function areEqualValues(a, b) {
  if (_typeof(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
/**
 * @ignore - internal component.
 */


var SelectInput = /*#__PURE__*/react.forwardRef(function SelectInput(props, ref) {
  var ariaLabel = props['aria-label'],
      autoFocus = props.autoFocus,
      autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      inputRefProp = props.inputRef,
      labelId = props.labelId,
      _props$MenuProps = props.MenuProps,
      MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onOpen = props.onOpen,
      openProp = props.open,
      readOnly = props.readOnly,
      renderValue = props.renderValue,
      _props$SelectDisplayP = props.SelectDisplayProps,
      SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
      tabIndexProp = props.tabIndex,
      type = props.type,
      valueProp = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var inputRef = react.useRef(null);

  var _React$useState = react.useState(null),
      displayNode = _React$useState[0],
      setDisplayNode = _React$useState[1];

  var _React$useRef = react.useRef(openProp != null),
      isOpenControlled = _React$useRef.current;

  var _React$useState2 = react.useState(),
      menuMinWidthState = _React$useState2[0],
      setMenuMinWidthState = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

  var handleRef = useForkRef(ref, inputRefProp);
  react.useImperativeHandle(handleRef, function () {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value: value
    };
  }, [displayNode, value]);
  react.useEffect(function () {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  react.useEffect(function () {
    if (displayNode) {
      var label = ownerDocument(displayNode).getElementById(labelId);

      if (label) {
        var handler = function handler() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };

        label.addEventListener('click', handler);
        return function () {
          label.removeEventListener('click', handler);
        };
      }
    }

    return undefined;
  }, [labelId, displayNode]);

  var update = function update(open, event) {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayNode.focus();
    update(true, event);
  };

  var handleClose = function handleClose(event) {
    update(false, event);
  };

  var childrenArray = react.Children.toArray(children); // Support autofill.

  var handleChange = function handleChange(event) {
    var index = childrenArray.map(function (child) {
      return child.props.value;
    }).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    var child = childrenArray[index];
    setValue(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  var handleItemClick = function handleItemClick(child) {
    return function (event) {
      if (!multiple) {
        update(false, event);
      }

      var newValue;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value === newValue) {
        return;
      }

      setValue(newValue);

      if (onChange) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: newValue,
            name: name
          }
        });
        onChange(event, child);
      }
    };
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!readOnly) {
      var validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  var open = displayNode !== null && (isOpenControlled ? openProp : openState);

  var handleBlur = function handleBlur(event) {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist(); // Preact support, target is read only property on a native event.

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value: value,
          name: name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;

  if (isFilled({
    value: value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  var items = childrenArray.map(function (child) {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return null;
    }

    var selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( formatMuiErrorMessage(2));
      }

      selected = value.some(function (v) {
        return areEqualValues(v, child.props.value);
      });

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    return /*#__PURE__*/react.cloneElement(child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected: selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  var menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  var tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, // TODO v5: merge root and select
    classes.select, classes.selectMenu, classes[variant], className, disabled && classes.disabled),
    ref: setDisplayNode,
    tabIndex: tabIndex,
    role: "button",
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus: onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : display), /*#__PURE__*/react.createElement("input", _extends({
    value: Array.isArray(value) ? value.join(',') : value,
    name: name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus: autoFocus
  }, other)), /*#__PURE__*/react.createElement(IconComponent, {
    className: clsx(classes.icon, classes["icon".concat(capitalize(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), /*#__PURE__*/react.createElement(Menu$1, _extends({
    id: "menu-".concat(name || ''),
    anchorEl: displayNode,
    open: open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: _extends({
      'aria-labelledby': labelId,
      role: 'listbox',
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: _extends({}, MenuProps.PaperProps, {
      style: _extends({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});

var styles$t = styles$q;

var _ref = /*#__PURE__*/react.createElement(Input$1, null);

var _ref2 = /*#__PURE__*/react.createElement(FilledInput$1, null);

var Select = /*#__PURE__*/react.forwardRef(function Select(props, ref) {
  var _props$autoWidth = props.autoWidth,
      autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
      children = props.children,
      classes = props.classes,
      _props$displayEmpty = props.displayEmpty,
      displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? ArrowDropDownIcon : _props$IconComponent,
      id = props.id,
      input = props.input,
      inputProps = props.inputProps,
      label = props.label,
      labelId = props.labelId,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      MenuProps = props.MenuProps,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$native = props.native,
      native = _props$native === void 0 ? false : _props$native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      _props$variant = props.variant,
      variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  var inputComponent = native ? NativeSelectInput : SelectInput;
  var muiFormControl = useFormControl$1();
  var fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: /*#__PURE__*/react.createElement(OutlinedInput$1, {
      label: label,
      labelWidth: labelWidth
    }),
    filled: _ref2
  }[variant];
  return /*#__PURE__*/react.cloneElement(InputComponent, _extends({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: _extends({
      children: children,
      IconComponent: IconComponent,
      variant: variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, native ? {
      id: id
    } : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      labelId: labelId,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: _extends({
        id: id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? mergeClasses({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
Select.muiName = 'Select';
var Select$1 = withStyles(styles$t, {
  name: 'MuiSelect'
})(Select);

var styles$u = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: _defineProperty({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48
    }
  };
};
var Toolbar = /*#__PURE__*/react.forwardRef(function Toolbar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'regular' : _props$variant,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "variant"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, classes[variant], className, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
var Toolbar$1 = withStyles(styles$u, {
  name: 'MuiToolbar'
})(Toolbar);

var variantComponent = {
  standard: Input$1,
  filled: FilledInput$1,
  outlined: OutlinedInput$1
};
var styles$v = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react.forwardRef(function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react.createElement(react.Fragment, null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react.createElement(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react.createElement(FormControl$1, _extends({
    className: clsx(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react.createElement(InputLabel$1, _extends({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react.createElement(Select$1, _extends({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react.createElement(FormHelperText$1, _extends({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
var TextField$1 = withStyles(styles$v, {
  name: 'MuiTextField'
})(TextField);

export { AppBar$1 as AppBar, Button$1 as Button, Container$1 as Container, CssBaseline$1 as CssBaseline, Divider$1 as Divider, StyledGrid as Grid, Icon$1 as Icon, IconButton$1 as IconButton, Paper$1 as Paper, TextField$1 as TextField, ThemeProvider, Toolbar$1 as Toolbar, Typography$1 as Typography, createStyles$1 as createStyles, makeStyles };
