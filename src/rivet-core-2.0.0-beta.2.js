/*!
 * rivet-core - @version 2.0.0-beta.2

 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

"use strict";

function _typeof(t) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _typeof(t)
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && _setPrototypeOf(t, e)
}

function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
    }, _setPrototypeOf(t, e)
}

function _createSuper(t) {
    var e = _isNativeReflectConstruct();
    return function () {
        var n, i = _getPrototypeOf(t);
        if (e) {
            var s = _getPrototypeOf(this).constructor;
            n = Reflect.construct(i, arguments, s)
        } else n = i.apply(this, arguments);
        return _possibleConstructorReturn(this, n)
    }
}

function _possibleConstructorReturn(t, e) {
    if (e && ("object" === _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t)
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
    } catch (t) {
        return !1
    }
}

function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }, _getPrototypeOf(t)
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
}

function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
}
var Rivet = function (t) {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
            var e = this;
            if (!document.documentElement.contains(this)) return null;
            do {
                if (e.matches(t)) return e;
                e = e.parentElement
            } while (null !== e);
            return null
        }),
        function () {
            if ("function" == typeof window.CustomEvent) return !1;

            function t(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            }
            t.prototype = window.Event.prototype, window.CustomEvent = t
        }(), Array.from || (Array.from = function () {
            var t;
            try {
                t = Symbol.iterator ? Symbol.iterator : "Symbol(Symbol.iterator)"
            } catch (e) {
                t = "Symbol(Symbol.iterator)"
            }
            var e = Object.prototype.toString,
                n = function (t) {
                    return "function" == typeof t || "[object Function]" === e.call(t)
                },
                i = Math.pow(2, 53) - 1,
                s = function (t) {
                    var e = function (t) {
                        var e = Number(t);
                        return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
                    }(t);
                    return Math.min(Math.max(e, 0), i)
                },
                o = function (e, n) {
                    var i = e && n[t]();
                    return function (t) {
                        return e ? i.next() : n[t]
                    }
                },
                r = function (t, e, n, i, s, o) {
                    for (var r = 0; r < n || s;) {
                        var c = i(r),
                            l = s ? c.value : c;
                        if (s && c.done) return e;
                        e[r] = o ? void 0 === t ? o(l, r) : o.call(t, l, r) : l, r += 1
                    }
                    if (s) throw new TypeError("Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1");
                    return e.length = n, e
                };
            return function (e) {
                var i = this,
                    c = Object(e),
                    l = n(c[t]);
                if (null == e && !l) throw new TypeError("Array.from requires an array-like object or iterator - not null or undefined");
                var a, u = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== u) {
                    if (!n(u)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (a = arguments[2])
                }
                var h = s(c.length),
                    d = n(i) ? Object(new i(h)) : new Array(h);
                return r(a, d, h, o(l, c), l, u)
            }
        }()), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (t) {
            t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                    null !== this.parentNode && this.parentNode.removeChild(this)
                }
            })
        }));
    var e = "rvt",
        n = "function" == typeof Promise ? Promise : function (t) {
            var e, n = [],
                i = 0;
            return t((function (t) {
                e = t, i = 1, n.splice(0).forEach(s)
            })), {
                then: s
            };

            function s(t) {
                return i ? setTimeout(t, 0, e) : n.push(t), this
            }
        },
        i = !0,
        s = !1,
        o = "querySelectorAll";

    function r(t) {
        this.observe(t, {
            subtree: i,
            childList: i
        })
    }
    var c = "querySelectorAll",
        l = self,
        a = l.document,
        u = l.Element,
        h = l.MutationObserver,
        d = l.Set,
        f = l.WeakMap,
        g = function (t) {
            return c in t
        },
        p = [].filter,
        m = Object.create,
        b = Object.keys,
        _ = new WeakMap,
        v = new Set,
        T = [],
        A = {},
        E = {},
        y = function (t, e) {
            for (var n = _.get(e), i = 0, s = t.length; i < s; i++) {
                var o = t[i],
                    r = o.target,
                    c = o.attributeName,
                    l = o.oldValue,
                    a = r.getAttribute(c);
                n.attributeChanged(c, l, a)
            }
        },
        C = function (t) {
            var e = new f,
                n = function (n, i) {
                    var s;
                    if (i)
                        for (var o, r = function (t) {
                                return t.matches || t.webkitMatchesSelector || t.msMatchesSelector
                            }(n), c = 0, l = m.length; c < l; c++) r.call(n, o = m[c]) && (e.has(n) || e.set(n, new d), (s = e.get(n)).has(o) || (s.add(o), t.handle(n, i, o)));
                    else e.has(n) && (s = e.get(n), e.delete(n), s.forEach((function (e) {
                        t.handle(n, i, e)
                    })))
                },
                l = function (t) {
                    for (var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = 0, s = t.length; i < s; i++) n(t[i], e)
                },
                m = t.query,
                b = t.root || a,
                _ = function (t, e, n) {
                    var c = function e(n, s, r, c, l) {
                            for (var a = 0, u = n.length; a < u; a++) {
                                var h = n[a];
                                (l || o in h) && (c ? s.has(h) || (s.add(h), r.delete(h), t(h, c)) : r.has(h) || (r.add(h), s.delete(h), t(h, c)), l || e(h[o]("*"), s, r, c, i))
                            }
                        },
                        l = new(n || MutationObserver)((function (t) {
                            for (var e = new Set, n = new Set, o = 0, r = t.length; o < r; o++) {
                                var l = t[o],
                                    a = l.addedNodes,
                                    u = l.removedNodes;
                                c(u, e, n, s, s), c(a, e, n, i, s)
                            }
                        }));
                    return l.add = r, l.add(e || document), l
                }(n, b, h),
                v = u.prototype.attachShadow;
            return v && (u.prototype.attachShadow = function (t) {
                var e = v.call(this, t);
                return _.add(e), e
            }), m.length && l(b[c](m)), {
                drop: function (t) {
                    for (var n = 0, i = t.length; n < i; n++) e.delete(t[n])
                },
                flush: function () {
                    for (var t = _.takeRecords(), e = 0, n = t.length; e < n; e++) l(p.call(t[e].removedNodes, g), !1), l(p.call(t[e].addedNodes, g), !0)
                },
                observer: _,
                parse: l
            }
        }({
            query: T,
            handle: function (t, e, n) {
                var i = A[n],
                    s = i.m,
                    o = i.l,
                    r = i.o,
                    c = s.get(t) || function (t, e, n, i) {
                        for (var s = m(i, {
                                element: {
                                    enumerable: !0,
                                    value: t
                                }
                            }), o = 0, r = n.length; o < r; o++) t.addEventListener(n[o].t, s, n[o].o);
                        e.set(t, s), s.init && s.init();
                        var c = i.observedAttributes;
                        if (c) {
                            var l = new MutationObserver(y);
                            l.observe(t, {
                                attributes: !0,
                                attributeOldValue: !0,
                                attributeFilter: c.map((function (e) {
                                    return t.hasAttribute(e) && s.attributeChanged(e, null, t.getAttribute(e)), e
                                }))
                            }), _.set(l, s)
                        }
                        return s
                    }(t, s, o, r),
                    l = e ? "connected" : "disconnected";
                l in c && c[l]()
            }
        }),
        S = (C.drop, C.flush),
        O = C.parse,
        M = function (t) {
            if (!(t in E)) {
                var e, i = new n((function (t) {
                    e = t
                }));
                E[t] = {
                    _: e,
                    $: i
                }
            }
            return E[t].$
        },
        k = function () {
            function t() {
                _classCallCheck(this, t)
            }
            return _createClass(t, null, [{
                key: "initAll",
                value: function () {
                    this.init(this.selector)
                }
            }, {
                key: "init",
                value: function (t) {
                    return function (t, e) {
                        if (-1 < T.indexOf(t)) throw new Error("duplicated: " + t);
                        S();
                        for (var n = [], i = m(null), s = b(e), o = 0, r = s.length; o < r; o++) {
                            var c = s[o];
                            if (/^on/.test(c) && !/Options$/.test(c)) {
                                var l = e[c + "Options"] || !1,
                                    a = c.toLowerCase(),
                                    u = a.slice(2);
                                n.push({
                                    t: u,
                                    o: l
                                }), i[u] = c, a !== c && (u = c.slice(2, 3).toLowerCase() + c.slice(3), i[u] = c, n.push({
                                    t: u,
                                    o: l
                                }))
                            }
                        }
                        n.length && (e.handleEvent = function (t) {
                            this[i[t.type]](t)
                        }), T.push(t), A[t] = {
                            m: new WeakMap,
                            l: n,
                            o: e
                        }, O(document.querySelectorAll(t)), M(t), v.has(t) || E[t]._()
                    }(t, this.methods), document.querySelector(t)
                }
            }, {
                key: "selector",
                get: function () {}
            }, {
                key: "methods",
                get: function () {}
            }, {
                key: "bindMethodToDOMElement",
                value: function (t, e, n) {
                    Object.defineProperty(t.element, e, {
                        value: n.bind(t),
                        writable: !1
                    })
                }
            }, {
                key: "dispatchCustomEvent",
                value: function (t, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = e,
                        o = new CustomEvent("".concat(s, ":").concat(t), {
                            bubbles: !0,
                            cancelable: !0,
                            detail: i
                        });
                    return n.dispatchEvent(o)
                }
            }, {
                key: "dispatchComponentAddedEvent",
                value: function (t) {
                    return this.dispatchCustomEvent("componentAdded", document, {
                        component: t
                    })
                }
            }, {
                key: "dispatchComponentRemovedEvent",
                value: function (t) {
                    return this.dispatchCustomEvent("componentRemoved", document, {
                        component: t
                    })
                }
            }]), t
        }(),
        w = 38,
        I = 40,
        D = 37,
        x = 39,
        P = 9,
        B = 27,
        q = 36,
        F = 35,
        N = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-accordion]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), this._setInitialPanelStates(), k.bindMethodToDOMElement(this, "open", this.open), k.bindMethodToDOMElement(this, "close", this.close)
                        },
                        _initSelectors: function () {
                            this.triggerAttribute = "data-rvt-accordion-trigger", this.panelAttribute = "data-rvt-accordion-panel", this.triggerSelector = "[".concat(this.triggerAttribute, "]"), this.panelSelector = "[".concat(this.panelAttribute, "]")
                        },
                        _initElements: function () {
                            this.triggers = Array.from(this.element.querySelectorAll(this.triggerSelector)), this.panels = Array.from(this.element.querySelectorAll(this.panelSelector))
                        },
                        _setInitialPanelStates: function () {
                            this._shouldOpenAllPanels() ? this._openAllPanels() : this._setPanelDefaultStates()
                        },
                        _shouldOpenAllPanels: function () {
                            return this.element.hasAttribute("data-rvt-accordion-open-all")
                        },
                        _openAllPanels: function () {
                            var t = this;
                            this.panels.forEach((function (e, n) {
                                return t._openPanel(n)
                            }))
                        },
                        _setPanelDefaultStates: function () {
                            var t = this;
                            this.panels.forEach((function (e) {
                                t._panelShouldBeOpen(e) ? t.open(e.getAttribute(t.panelAttribute)) : t.close(e.getAttribute(t.panelAttribute))
                            }))
                        },
                        _panelShouldBeOpen: function (t) {
                            return t.hasAttribute("data-rvt-accordion-panel-init")
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element)
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element)
                        },
                        onClick: function (t) {
                            this._eventOriginatedInsideTrigger(t) && (this._setTriggerToToggle(t), this._triggerToToggleIsOpen() ? this.close(this.triggerToToggleId) : this.open(this.triggerToToggleId))
                        },
                        _eventOriginatedInsideTrigger: function (t) {
                            return t.target.closest(this.triggerSelector)
                        },
                        _setTriggerToToggle: function (t) {
                            this.triggerToToggle = t.target.closest(this.triggerSelector), this.triggerToToggleId = this.triggerToToggle.getAttribute(this.triggerAttribute)
                        },
                        _triggerToToggleIsOpen: function () {
                            return "true" === this.triggerToToggle.getAttribute("aria-expanded")
                        },
                        onKeydown: function (t) {
                            if (this._eventOriginatedInsideTrigger(t)) switch (this._setNeighboringTriggerIndexes(t), t.keyCode) {
                                case w:
                                    this._focusPreviousTrigger();
                                    break;
                                case I:
                                    this._focusNextTrigger();
                                    break;
                                case q:
                                    this._focusFirstTrigger();
                                    break;
                                case F:
                                    this._focusLastTrigger()
                            }
                        },
                        _setNeighboringTriggerIndexes: function (t) {
                            var e = t.target.closest(this.triggerSelector);
                            this.previousTriggerIndex = this.triggers.indexOf(e) - 1, this.nextTriggerIndex = this.triggers.indexOf(e) + 1
                        },
                        _focusPreviousTrigger: function () {
                            this.triggers[this.previousTriggerIndex] ? this.triggers[this.previousTriggerIndex].focus() : this.triggers[this.triggers.length - 1].focus()
                        },
                        _focusNextTrigger: function () {
                            this.triggers[this.nextTriggerIndex] ? this.triggers[this.nextTriggerIndex].focus() : this.triggers[0].focus()
                        },
                        _focusFirstTrigger: function () {
                            this.triggers[0].focus()
                        },
                        _focusLastTrigger: function () {
                            this.triggers[this.triggers.length - 1].focus()
                        },
                        open: function (t) {
                            this._setPanelToOpen(t), this._panelToOpenExists() ? this._eventDispatched("accordionOpened", this.panelToOpen) && this._openPanel() : console.warn("No such accordion panel '".concat(t, "' in open()"))
                        },
                        _setPanelToOpen: function (t) {
                            this.triggerToOpen = this.element.querySelector("[".concat(this.triggerAttribute, ' = "').concat(t, '"]')), this.panelToOpen = this.element.querySelector("[".concat(this.panelAttribute, ' = "').concat(t, '"]'))
                        },
                        _panelToOpenExists: function () {
                            return this.panelToOpen
                        },
                        _openPanel: function () {
                            this.triggerToOpen.setAttribute("aria-expanded", "true"), this.panelToOpen.removeAttribute("hidden")
                        },
                        close: function (t) {
                            this._setPanelToClose(t), this._panelToCloseExists() ? this._eventDispatched("accordionClosed", this.panelToClose) && this._closePanel() : console.warn("No such accordion panel '".concat(t, "' in close()"))
                        },
                        _setPanelToClose: function (t) {
                            this.triggerToClose = this.element.querySelector("[".concat(this.triggerAttribute, ' = "').concat(t, '"]')), this.panelToClose = this.element.querySelector("[".concat(this.panelAttribute, ' = "').concat(t, '"]'))
                        },
                        _panelToCloseExists: function () {
                            return this.panelToClose
                        },
                        _closePanel: function () {
                            this.triggerToClose.setAttribute("aria-expanded", "false"), this.panelToClose.setAttribute("hidden", "")
                        },
                        _eventDispatched: function (t, e) {
                            return k.dispatchCustomEvent(t, this.element, {
                                panel: e
                            })
                        }
                    }
                }
            }]), n
        }(k),
        R = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-alert]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), k.bindMethodToDOMElement(this, "dismiss", this.dismiss)
                        },
                        _initSelectors: function () {
                            this.closeButtonAttribute = "data-rvt-alert-close", this.closeButtonSelector = "[".concat(this.closeButtonAttribute, "]")
                        },
                        _initElements: function () {
                            this.closeButton = this.element.querySelector(this.closeButtonSelector)
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element)
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element)
                        },
                        onClick: function (t) {
                            this._clickOriginatedInsideCloseButton(t) && this.dismiss()
                        },
                        _clickOriginatedInsideCloseButton: function (t) {
                            return this.closeButton && this.closeButton.contains(t.target)
                        },
                        dismiss: function () {
                            this._dismissEventDispatched() && this.element.remove()
                        },
                        _dismissEventDispatched: function () {
                            return k.dispatchCustomEvent("alertDismissed", this.element)
                        }
                    }
                }
            }]), n
        }(k),
        L = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-disclosure]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), this._initProperties(), this._removeIconFromTabOrder(), k.bindMethodToDOMElement(this, "open", this.open), k.bindMethodToDOMElement(this, "close", this.close)
                        },
                        _initSelectors: function () {
                            this.toggleAttribute = "data-rvt-disclosure-toggle", this.targetAttribute = "data-rvt-disclosure-target", this.toggleSelector = "[".concat(this.toggleAttribute, "]"), this.targetSelector = "[".concat(this.targetAttribute, "]")
                        },
                        _initElements: function () {
                            this.toggleElement = this.element.querySelector(this.toggleSelector), this.targetElement = this.element.querySelector(this.targetSelector)
                        },
                        _initProperties: function () {
                            this.isOpen = !1
                        },
                        _removeIconFromTabOrder: function () {
                            var t = this.element.querySelector("svg");
                            t && t.setAttribute("focusable", "false")
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element)
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element)
                        },
                        open: function () {
                            this._isDisabled() || this._eventDispatched("disclosureOpened") && this._setOpenState()
                        },
                        _isDisabled: function () {
                            return this.toggleElement.hasAttribute("disabled")
                        },
                        _setOpenState: function () {
                            this.toggleElement.setAttribute("aria-expanded", "true"), this.targetElement.removeAttribute("hidden"), this.isOpen = !0
                        },
                        close: function () {
                            this._isOpen() && this._eventDispatched("disclosureClosed") && this._setClosedState()
                        },
                        _isOpen: function () {
                            return this.isOpen
                        },
                        _setClosedState: function () {
                            this.toggleElement.setAttribute("aria-expanded", "false"), this.targetElement.setAttribute("hidden", ""), this.isOpen = !1
                        },
                        _eventDispatched: function (t) {
                            return k.dispatchCustomEvent(t, this.element)
                        },
                        onClick: function (t) {
                            this._clickOriginatedInsideDisclosureTarget(t) || (this._isOpen() ? this.close() : this.open())
                        },
                        _clickOriginatedInsideDisclosureTarget: function (t) {
                            return this.targetElement.contains(t.target)
                        },
                        onKeydown: function (t) {
                            t.keyCode === B && (this.close(), this.toggleElement.focus())
                        }
                    }
                }
            }]), n
        }(k),
        j = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-dropdown]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), this._initProperties(), this._initMenuItems(), this._removeIconFromTabOrder(), this._bindExternalEventHandlers(), k.bindMethodToDOMElement(this, "open", this.open), k.bindMethodToDOMElement(this, "close", this.close)
                        },
                        _initSelectors: function () {
                            this.toggleAttribute = "data-rvt-dropdown-toggle", this.menuAttribute = "data-rvt-dropdown-menu", this.toggleSelector = "[".concat(this.toggleAttribute, "]"), this.menuSelector = "[".concat(this.menuAttribute, "]")
                        },
                        _initElements: function () {
                            this.toggleElement = this.element.querySelector(this.toggleSelector), this.menuElement = this.element.querySelector(this.menuSelector)
                        },
                        _initProperties: function () {
                            this.isOpen = !1
                        },
                        _initMenuItems: function () {
                            this.menuItems = Array.from(this.menuElement.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')), this.firstMenuItem = this.menuItems[0], this.lastMenuItem = this.menuItems[this.menuItems.length - 1]
                        },
                        _removeIconFromTabOrder: function () {
                            var t = this.element.querySelector("svg");
                            t && t.setAttribute("focusable", "false")
                        },
                        _bindExternalEventHandlers: function () {
                            this._onDocumentClick = this._onDocumentClick.bind(this)
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element), this._addDocumentEventHandlers()
                        },
                        _addDocumentEventHandlers: function () {
                            document.addEventListener("click", this._onDocumentClick, !1)
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element), this._removeDocumentEventHandlers()
                        },
                        _removeDocumentEventHandlers: function () {
                            document.removeEventListener("click", this._onDocumentClick, !1)
                        },
                        open: function () {
                            this._toggleElementIsDisabled() || this._eventDispatched("dropdownOpened") && this._setOpenState()
                        },
                        _toggleElementIsDisabled: function () {
                            return this.toggleElement.hasAttribute("disabled")
                        },
                        _setOpenState: function () {
                            this.toggleElement.setAttribute("aria-expanded", "true"), this.menuElement.removeAttribute("hidden"), this.isOpen = !0
                        },
                        close: function () {
                            this._isOpen() && this._eventDispatched("dropdownClosed") && this._setClosedState()
                        },
                        _isOpen: function () {
                            return this.isOpen
                        },
                        _setClosedState: function () {
                            this.toggleElement.setAttribute("aria-expanded", "false"), this.menuElement.setAttribute("hidden", ""), this.isOpen = !1
                        },
                        _eventDispatched: function (t) {
                            return k.dispatchCustomEvent(t, this.element)
                        },
                        onClick: function (t) {
                            this._eventOriginatedInsideMenu(t) || (this._isOpen() ? this.close() : this.open())
                        },
                        _eventOriginatedInsideMenu: function (t) {
                            return this.menuElement.contains(t.target)
                        },
                        _onDocumentClick: function (t) {
                            this._clickOriginatedOutsideDropdown(t) && this._isOpen() && this.close()
                        },
                        _clickOriginatedOutsideDropdown: function (t) {
                            return !this.element.contains(t.target)
                        },
                        onKeydown: function (t) {
                            switch (t.keyCode) {
                                case B:
                                    this._handleEscapeKey();
                                    break;
                                case w:
                                    this._handleUpKey(t);
                                    break;
                                case I:
                                    this._handleDownKey(t);
                                    break;
                                case P:
                                    this._handleTabKey(t)
                            }
                        },
                        _handleEscapeKey: function () {
                            this.close(), this.toggleElement.focus()
                        },
                        _handleUpKey: function (t) {
                            t.preventDefault(), this._eventOriginatedInsideMenu(t) && this._focusPreviousMenuItem(t)
                        },
                        _focusPreviousMenuItem: function (t) {
                            for (var e, n = 0; n < this.menuItems.length; n++) t.target == this.menuItems[n] && (e = n);
                            var i = this.menuItems[e - 1];
                            i || void 0 === this.lastMenuItem ? i.focus() : this.lastMenuItem.focus()
                        },
                        _handleDownKey: function (t) {
                            this._isOpen() || this.open(), this._eventOriginatedInsideMenu(t) ? this._focusNextMenuItem(t) : this.firstMenuItem.focus()
                        },
                        _focusNextMenuItem: function (t) {
                            for (var e, n = 0; n < this.menuItems.length; n++) t.target == this.menuItems[n] && (e = n);
                            var i = this.menuItems[e + 1];
                            i ? i.focus() : this.firstMenuItem.focus()
                        },
                        _handleTabKey: function (t) {
                            this._eventOriginatedInsideMenu(t) && this._userTabbedOutOfLastMenuItem(t) && this.close()
                        },
                        _userTabbedOutOfLastMenuItem: function (t) {
                            return document.activeElement == this.lastMenuItem && !t.shiftKey
                        }
                    }
                }
            }]), n
        }(k),
        K = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-file-input]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), this._initProperties()
                        },
                        _initSelectors: function () {
                            this.inputElementAttribute = "data-rvt-file-input-button", this.previewElementAttribute = "data-rvt-file-input-preview", this.inputElementSelector = "[".concat(this.inputElementAttribute, "]"), this.previewElementSelector = "[".concat(this.previewElementAttribute, "]")
                        },
                        _initElements: function () {
                            this.inputElement = this.element.querySelector(this.inputElementSelector), this.previewElement = this.element.querySelector(this.previewElementSelector)
                        },
                        _initProperties: function () {
                            this.defaultPreviewText = this.previewElement.textContent
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element)
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element)
                        },
                        onChange: function (t) {
                            if (this._hasAttachedFiles()) {
                                if (!this._attachEventDispatched()) return;
                                this._hasMultipleAttachedFiles() ? this._showNumberOfAttachedFiles() : this._showAttachedFilename()
                            } else this._resetPreviewTextToDefault()
                        },
                        _hasAttachedFiles: function () {
                            return this.inputElement.files.length > 0
                        },
                        _attachEventDispatched: function () {
                            var t = Array.from(this.inputElement.files).map((function (t) {
                                return t.name
                            }));
                            return k.dispatchCustomEvent("fileAttached", this.element, {
                                files: t
                            })
                        },
                        _hasMultipleAttachedFiles: function () {
                            return this.inputElement.files.length > 1
                        },
                        _showNumberOfAttachedFiles: function () {
                            this.previewElement.textContent = this.inputElement.files.length + " files selected"
                        },
                        _showAttachedFilename: function () {
                            this.previewElement.textContent = this._getSanitizedFilename()
                        },
                        _getSanitizedFilename: function () {
                            return this.inputElement.files[0].name.replace(/[^\w\.\-]+/gi, "")
                        },
                        _resetPreviewTextToDefault: function () {
                            this.previewElement.textContent = this.defaultPreviewText
                        }
                    }
                }
            }]), n
        }(k),
        H = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-modal]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), this._initProperties(), this._bindExternalEventHandlers(), k.bindMethodToDOMElement(this, "open", this.open), k.bindMethodToDOMElement(this, "close", this.close), k.bindMethodToDOMElement(this, "focusTrigger", this.focusTrigger), k.bindMethodToDOMElement(this, "focusModal", this.focusModal)
                        },
                        _initSelectors: function () {
                            this.modalAttribute = "data-rvt-modal", this.innerModalAttribute = "data-rvt-modal-inner", this.triggerAttribute = "data-rvt-modal-trigger", this.closeButtonAttribute = "data-rvt-modal-close", this.dialogAttribute = this.dialogAttribute, this.innerModalSelector = "[".concat(this.innerModalAttribute, "]"), this.triggerSelector = "[".concat(this.triggerAttribute, "]"), this.closeButtonSelector = "[".concat(this.closeButtonAttribute, "]")
                        },
                        _initElements: function () {
                            var t = this.element.getAttribute(this.modalAttribute);
                            this.innerModal = this.element.querySelector(this.innerModalSelector), this.triggerButton = document.querySelector("[".concat(this.triggerAttribute, ' = "').concat(t, '"]')), this.closeButtons = this.element.querySelectorAll(this.closeButtonSelector)
                        },
                        _initProperties: function () {
                            this.id = this.element.getAttribute("id"), this.isOpen = !1, this.isDialog = this.element.hasAttribute(this.dialogAttribute)
                        },
                        _bindExternalEventHandlers: function () {
                            this._onTriggerClick = this._onTriggerClick.bind(this), this._onDocumentClick = this._onDocumentClick.bind(this)
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element), this._addTriggerEventHandlers(), this._addDocumentEventHandlers(), this._shouldBeOpenByDefault() && this.open()
                        },
                        _shouldBeOpenByDefault: function () {
                            return this.element.hasAttribute("data-rvt-modal-open-on-init")
                        },
                        _addTriggerEventHandlers: function () {
                            this._hasTriggerButton() && this.triggerButton.addEventListener("click", this._onTriggerClick, !1)
                        },
                        _hasTriggerButton: function () {
                            return this.triggerButton
                        },
                        _addDocumentEventHandlers: function () {
                            document.addEventListener("click", this._onDocumentClick, !1)
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element), this._removeTriggerEventHandlers(), this._removeDocumentEventHandlers()
                        },
                        _removeTriggerEventHandlers: function () {
                            this._hasTriggerButton() && this.triggerButton.removeEventListener("click", this._onTriggerClick, !1)
                        },
                        _removeDocumentEventHandlers: function () {
                            document.removeEventListener("click", this._onDocumentClick, !1)
                        },
                        onClick: function (t) {
                            this._isOpen() && this._clickOriginatedInCloseButton(t) && this.close()
                        },
                        _isOpen: function () {
                            return this.isOpen
                        },
                        _clickOriginatedInCloseButton: function (t) {
                            return t.target.closest(this.closeButtonSelector)
                        },
                        _onTriggerClick: function (t) {
                            this._isOpen() ? this.close() : this.open()
                        },
                        _onDocumentClick: function (t) {
                            this._clickOriginatedInsideModalOrTrigger(t) || this._isOpen() && (this._isDialog() || this.close())
                        },
                        _clickOriginatedInsideModalOrTrigger: function (t) {
                            return t.target.closest(this.innerModalSelector) || t.target.closest(this.triggerSelector)
                        },
                        _isDialog: function () {
                            return this.isDialog
                        },
                        onKeydown: function (t) {
                            switch (t.keyCode) {
                                case P:
                                    this._setFocusableChildElements(), this._shiftKeyPressed(t) ? this._handleBackwardTab(t) : this._handleForwardTab(t);
                                    break;
                                case B:
                                    this._isDialog() || this.close()
                            }
                        },
                        _setFocusableChildElements: function () {
                            this.focusableChildElements = this.element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="-1"]'), this.firstFocusableChildElement = this.focusableChildElements[0], this.lastFocusableChildElement = this.focusableChildElements[this.focusableChildElements.length - 1]
                        },
                        _shiftKeyPressed: function (t) {
                            return t.shiftKey
                        },
                        _handleBackwardTab: function (t) {
                            this._shouldTrapBackwardTabFocus() && (t.preventDefault(), this.lastFocusableChildElement.focus())
                        },
                        _shouldTrapBackwardTabFocus: function () {
                            return document.activeElement === this.firstFocusableChildElement || document.activeElement === this.element
                        },
                        _handleForwardTab: function (t) {
                            this._shouldTrapForwardTabFocus() && (t.preventDefault(), this.firstFocusableChildElement.focus())
                        },
                        _shouldTrapForwardTabFocus: function () {
                            return document.activeElement === this.lastFocusableChildElement
                        },
                        open: function () {
                            this._isOpen() || this._eventDispatched("modalOpened") && (this._setOpenState(), this.focusModal())
                        },
                        _setOpenState: function () {
                            this.isOpen = !0, this.element.removeAttribute("hidden"), document.body.classList.add("rvt-modal-open")
                        },
                        focusModal: function () {
                            this.element.focus()
                        },
                        close: function () {
                            this._isOpen() && this._eventDispatched("modalClosed") && (this._setClosedState(), this._hasTriggerButton() && this.focusTrigger())
                        },
                        _setClosedState: function () {
                            this.isOpen = !1, this.element.setAttribute("hidden", ""), document.body.classList.remove("rvt-modal-open")
                        },
                        focusTrigger: function () {
                            this._hasTriggerButton() ? this.triggerButton.focus() : console.warn("Could not find a trigger button with for modal ID '".concat(this.id, "'"))
                        },
                        _eventDispatched: function (t) {
                            return k.dispatchCustomEvent(t, this.element)
                        }
                    }
                }
            }]), n
        }(k),
        z = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-sidenav]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), this._setInitialChildMenuStates(), k.bindMethodToDOMElement(this, "open", this.open), k.bindMethodToDOMElement(this, "close", this.close)
                        },
                        _initSelectors: function () {
                            this.toggleAttribute = "data-rvt-sidenav-toggle", this.childMenuAttribute = "data-rvt-sidenav-list", this.toggleSelector = "[".concat(this.toggleAttribute, "]"), this.childMenuSelector = "[".concat(this.childMenuAttribute, "]")
                        },
                        _initElements: function () {
                            this.childMenuToggleButtons = Array.from(this.element.querySelectorAll(this.toggleSelector)), this.childMenus = Array.from(this.element.querySelectorAll(this.childMenuSelector))
                        },
                        _setInitialChildMenuStates: function () {
                            this._setChildMenuDefaultAriaAttributes(), this._shouldOpenAllChildMenus() ? this._openAllChildMenus() : this._setChildMenuDefaultStates()
                        },
                        _setChildMenuDefaultAriaAttributes: function () {
                            this.childMenuToggleButtons.forEach((function (t) {
                                return t.setAttribute("aria-haspopup", "true")
                            }))
                        },
                        _shouldOpenAllChildMenus: function () {
                            return this.element.hasAttribute("data-rvt-sidenav-open-all")
                        },
                        _openAllChildMenus: function () {
                            var t = this;
                            this.childMenuToggleButtons.forEach((function (e, n) {
                                e.setAttribute("aria-expanded", "true"), t.childMenus[n].removeAttribute("hidden")
                            }))
                        },
                        _setChildMenuDefaultStates: function () {
                            var t = this;
                            this.childMenuToggleButtons.forEach((function (e, n) {
                                "true" === e.getAttribute("aria-expanded") ? t.childMenus[n].removeAttribute("hidden") : (e.setAttribute("aria-expanded", "false"), t.childMenus[n].setAttribute("hidden", ""))
                            }))
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element)
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element)
                        },
                        onClick: function (t) {
                            this._clickOriginatedInChildMenuToggleButton(t) && (this._setChildMenuToToggle(t), this._childMenuToToggleExists() && (this._childMenuToToggleIsOpen() ? this.close(this.childMenuToToggleId) : this.open(this.childMenuToToggleId)))
                        },
                        _clickOriginatedInChildMenuToggleButton: function (t) {
                            return t.target.closest(this.toggleSelector)
                        },
                        _setChildMenuToToggle: function (t) {
                            this.childMenuToToggleId = t.target.closest(this.toggleSelector).dataset.rvtSidenavToggle, this.childMenuToToggle = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(this.childMenuToToggleId, '"]'))
                        },
                        _childMenuToToggleExists: function () {
                            return this.childMenuToToggle && "" !== this.childMenuToToggle.getAttribute(this.childMenuAttribute)
                        },
                        _childMenuToToggleIsOpen: function () {
                            return !this.childMenuToToggle.hasAttribute("hidden")
                        },
                        open: function (t) {
                            this._setChildMenuToOpen(t), this._childMenuExists(t) ? this._eventDispatched("sidenavListOpened", this.childMenuToOpen) && this._openChildMenu() : console.warn("No such subnav child menu '".concat(t, "' in open()"))
                        },
                        _setChildMenuToOpen: function (t) {
                            this.childMenuToOpenToggleButton = this.element.querySelector("[".concat(this.toggleAttribute, ' = "').concat(t, '"]')), this.childMenuToOpen = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(t, '"]'))
                        },
                        _openChildMenu: function () {
                            this.childMenuToOpenToggleButton.setAttribute("aria-expanded", "true"), this.childMenuToOpen.removeAttribute("hidden")
                        },
                        close: function (t) {
                            this._setChildMenuToClose(t), this._childMenuExists(t) ? this._eventDispatched("sidenavListClosed", this.childMenuToClose) && this._closeChildMenu() : console.warn("No such subnav child menu '".concat(t, "' in close()"))
                        },
                        _setChildMenuToClose: function (t) {
                            this.childMenuToCloseToggleButton = this.element.querySelector("[".concat(this.toggleAttribute, ' = "').concat(t, '"]')), this.childMenuToClose = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(t, '"]'))
                        },
                        _closeChildMenu: function () {
                            this.childMenuToCloseToggleButton.setAttribute("aria-expanded", "false"), this.childMenuToClose.setAttribute("hidden", "")
                        },
                        _childMenuExists: function (t) {
                            var e = this.element.querySelector("[".concat(this.toggleAttribute, ' = "').concat(t, '"]')),
                                n = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(t, '"]'));
                            return e && n
                        },
                        _eventDispatched: function (t, e) {
                            return k.dispatchCustomEvent(t, this.element, {
                                list: e
                            })
                        }
                    }
                }
            }]), n
        }(k),
        U = function (t) {
            _inherits(n, t);
            var e = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments)
            }
            return _createClass(n, null, [{
                key: "selector",
                get: function () {
                    return "[data-rvt-tabs]"
                }
            }, {
                key: "methods",
                get: function () {
                    return {
                        init: function () {
                            this._initSelectors(), this._initElements(), k.bindMethodToDOMElement(this, "activateTab", this.activateTab)
                        },
                        _initSelectors: function () {
                            this.tabAttribute = "data-rvt-tab", this.panelAttribute = "data-rvt-tab-panel", this.tabSelector = "[".concat(this.tabAttribute, "]"), this.panelSelector = "[".concat(this.panelAttribute, "]"), this.tablistSelector = '[role="tablist"]', this.initialTabSelector = "[data-rvt-tab-init]"
                        },
                        _initElements: function () {
                            this.tablist = this.element.querySelector(this.tablistSelector), this.tabs = Array.from(this.element.querySelectorAll(this.tabSelector)), this.panels = Array.from(this.element.querySelectorAll(this.panelSelector))
                        },
                        connected: function () {
                            k.dispatchComponentAddedEvent(this.element), this._activateInitialTab()
                        },
                        _activateInitialTab: function () {
                            var t = this.element.querySelector(this.initialTabSelector),
                                e = this.panels[0];
                            t ? this.activateTab(t.getAttribute(this.panelAttribute)) : this.activateTab(e.getAttribute(this.panelAttribute))
                        },
                        disconnected: function () {
                            k.dispatchComponentRemovedEvent(this.element)
                        },
                        onClick: function (t) {
                            this._eventOriginatedInsideTab(t) && this.activateTab(this._getClickedTabId(t))
                        },
                        _eventOriginatedInsideTab: function (t) {
                            return t.target.closest(this.tabSelector)
                        },
                        _getClickedTabId: function (t) {
                            return t.target.closest(this.tabSelector).getAttribute(this.tabAttribute)
                        },
                        onKeydown: function (t) {
                            if (this._eventOriginatedInsideTab(t)) switch (this._setNeighboringTabIndexes(t), t.keyCode) {
                                case D:
                                    this._focusPreviousTab();
                                    break;
                                case x:
                                    this._focusNextTab();
                                    break;
                                case q:
                                    this._focusFirstTab();
                                    break;
                                case F:
                                    this._focusLastTab()
                            }
                        },
                        _setNeighboringTabIndexes: function (t) {
                            var e = t.target.closest(this.tabSelector);
                            this.previousTabIndex = this.tabs.indexOf(e) - 1, this.nextTabIndex = this.tabs.indexOf(e) + 1
                        },
                        _focusPreviousTab: function () {
                            this.tabs[this.previousTabIndex] ? this.tabs[this.previousTabIndex].focus() : this.tabs[this.tabs.length - 1].focus()
                        },
                        _focusNextTab: function () {
                            this.tabs[this.nextTabIndex] ? this.tabs[this.nextTabIndex].focus() : this.tabs[0].focus()
                        },
                        _focusFirstTab: function () {
                            this.tabs[0].focus()
                        },
                        _focusLastTab: function () {
                            this.tabs[this.tabs.length - 1].focus()
                        },
                        activateTab: function (t) {
                            this._setTabToActivate(t), this._tabToActivateExists() ? this._tabActivatedEventDispatched() && (this._deactivateUnselectedTabs(), this._activateSelectedTab()) : console.warn("No such tab '".concat(t, "' in activateTab()"))
                        },
                        _setTabToActivate: function (t) {
                            this.tabToActivate = this.element.querySelector("[".concat(this.tabAttribute, ' = "').concat(t, '"]')), this.panelToActivate = this.element.querySelector("[".concat(this.panelAttribute, ' = "').concat(t, '"]'))
                        },
                        _tabToActivateExists: function () {
                            return this.tabToActivate && this.panelToActivate
                        },
                        _tabActivatedEventDispatched: function () {
                            return k.dispatchCustomEvent("tabActivated", this.element, {
                                tab: this.panelToActivate
                            })
                        },
                        _deactivateUnselectedTabs: function () {
                            var t = this;
                            this.panels.forEach((function (e, n) {
                                t._panelShouldBeActivated(e) || t._deactivateTab(e, n)
                            }))
                        },
                        _panelShouldBeActivated: function (t) {
                            t.getAttribute(this.panelAttribute), this.panelToActivate.dataset.rvtTabPanel
                        },
                        _deactivateTab: function (t, e) {
                            t.setAttribute("hidden", ""), this.tabs[e].setAttribute("aria-selected", "false"), this.tabs[e].setAttribute("tabindex", "-1")
                        },
                        _activateSelectedTab: function () {
                            this.tabToActivate.setAttribute("aria-selected", "true"), this.tabToActivate.removeAttribute("tabindex"), this.panelToActivate.removeAttribute("hidden")
                        }
                    }
                }
            }]), n
        }(k);
    return t.Accordion = N, t.Alert = R, t.Disclosure = L, t.Dropdown = j, t.FileInput = K, t.Modal = H, t.Sidenav = z, t.Tabs = U, t.init = function () {
        N.initAll(), R.initAll(), L.initAll(), j.initAll(), K.initAll(), H.initAll(), z.initAll(), U.initAll()
    }, t
}({});