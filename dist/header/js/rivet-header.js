/*!
 * rivet-core - @version 2.6.0
 * rivet-header.js
 */
function _typeof(e) {
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
        _typeof(e)
    );
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
    return (
        (_setPrototypeOf =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e;
            }),
        _setPrototypeOf(e, t)
    );
}
function _createSuper(e) {
    var t = _isNativeReflectConstruct();
    return function () {
        var n,
            i = _getPrototypeOf(e);
        if (t) {
            var o = _getPrototypeOf(this).constructor;
            n = Reflect.construct(i, arguments, o);
        } else n = i.apply(this, arguments);
        return _possibleConstructorReturn(this, n);
    };
}
function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function _getPrototypeOf(e) {
    return (
        (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              }),
        _getPrototypeOf(e)
    );
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
var Rivet = (function (e) {
    "use strict";
    var t = "rvt",
        n =
            "function" == typeof Promise
                ? Promise
                : function (e) {
                      var t,
                          n = [],
                          i = 0;
                      return (
                          e(function (e) {
                              (t = e), (i = 1), n.splice(0).forEach(o);
                          }),
                          { then: o }
                      );
                      function o(e) {
                          return i ? setTimeout(e, 0, t) : n.push(e), this;
                      }
                  },
        i = !0,
        o = !1,
        s = "querySelectorAll";
    function r(e) {
        this.observe(e, { subtree: i, childList: i });
    }
    var u = "querySelectorAll",
        c = self,
        l = c.document,
        a = c.Element,
        h = c.MutationObserver,
        d = c.Set,
        f = c.WeakMap,
        m = function (e) {
            return u in e;
        },
        p = [].filter,
        v = Object.create,
        _ = Object.keys,
        g = new WeakMap(),
        b = new Set(),
        y = [],
        O = {},
        E = {},
        C = function (e, t) {
            for (var n = g.get(t), i = 0, o = e.length; i < o; i++) {
                var s = e[i],
                    r = s.target,
                    u = s.attributeName,
                    c = s.oldValue,
                    l = r.getAttribute(u);
                n.attributeChanged(u, c, l);
            }
        },
        D = (function (e) {
            var t = new f(),
                n = function (n, i) {
                    var o;
                    if (i)
                        for (
                            var s,
                                r = (function (e) {
                                    return e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
                                })(n),
                                u = 0,
                                c = v.length;
                            u < c;
                            u++
                        )
                            r.call(n, (s = v[u])) && (t.has(n) || t.set(n, new d()), (o = t.get(n)).has(s) || (o.add(s), e.handle(n, i, s)));
                    else
                        t.has(n) &&
                            ((o = t.get(n)),
                            t.delete(n),
                            o.forEach(function (t) {
                                e.handle(n, i, t);
                            }));
                },
                c = function (e) {
                    for (var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = 0, o = e.length; i < o; i++) n(e[i], t);
                },
                v = e.query,
                _ = e.root || l,
                g = (function (e, t, n) {
                    var u = function t(n, o, r, u, c) {
                            for (var l = 0, a = n.length; l < a; l++) {
                                var h = n[l];
                                (c || s in h) && (u ? o.has(h) || (o.add(h), r.delete(h), e(h, u)) : r.has(h) || (r.add(h), o.delete(h), e(h, u)), c || t(h[s]("*"), o, r, u, i));
                            }
                        },
                        c = new (n || MutationObserver)(function (e) {
                            for (var t = new Set(), n = new Set(), s = 0, r = e.length; s < r; s++) {
                                var c = e[s],
                                    l = c.addedNodes,
                                    a = c.removedNodes;
                                u(a, t, n, o, o), u(l, t, n, i, o);
                            }
                        });
                    return (c.add = r), c.add(t || document), c;
                })(n, _, h),
                b = a.prototype.attachShadow;
            return (
                b &&
                    (a.prototype.attachShadow = function (e) {
                        var t = b.call(this, e);
                        return g.add(t), t;
                    }),
                v.length && c(_[u](v)),
                {
                    drop: function (e) {
                        for (var n = 0, i = e.length; n < i; n++) t.delete(e[n]);
                    },
                    flush: function () {
                        for (var e = g.takeRecords(), t = 0, n = e.length; t < n; t++) c(p.call(e[t].removedNodes, m), !1), c(p.call(e[t].addedNodes, m), !0);
                    },
                    observer: g,
                    parse: c,
                }
            );
        })({
            query: y,
            handle: function (e, t, n) {
                var i = O[n],
                    o = i.m,
                    s = i.l,
                    r = i.o,
                    u =
                        o.get(e) ||
                        (function (e, t, n, i) {
                            for (var o = v(i, { element: { enumerable: !0, value: e } }), s = 0, r = n.length; s < r; s++) e.addEventListener(n[s].t, o, n[s].o);
                            t.set(e, o), o.init && o.init();
                            var u = i.observedAttributes;
                            if (u) {
                                var c = new MutationObserver(C);
                                c.observe(e, {
                                    attributes: !0,
                                    attributeOldValue: !0,
                                    attributeFilter: u.map(function (t) {
                                        return e.hasAttribute(t) && o.attributeChanged(t, null, e.getAttribute(t)), t;
                                    }),
                                }),
                                    g.set(c, o);
                            }
                            return o;
                        })(e, o, s, r),
                    c = t ? "connected" : "disconnected";
                c in u && u[c]();
            },
        }),
        I = (D.drop, D.flush),
        k = D.parse,
        A = function (e) {
            if (!(e in E)) {
                var t,
                    i = new n(function (e) {
                        t = e;
                    });
                E[e] = { _: t, $: i };
            }
            return E[e].$;
        },
        S = (function () {
            function e() {
                _classCallCheck(this, e);
            }
            return (
                _createClass(e, null, [
                    {
                        key: "initAll",
                        value: function () {
                            this.init(this.selector);
                        },
                    },
                    {
                        key: "init",
                        value: function (e) {
                            return (
                                (function (e, t) {
                                    if (-1 < y.indexOf(e)) throw new Error("duplicated: " + e);
                                    I();
                                    for (var n = [], i = v(null), o = _(t), s = 0, r = o.length; s < r; s++) {
                                        var u = o[s];
                                        if (/^on/.test(u) && !/Options$/.test(u)) {
                                            var c = t[u + "Options"] || !1,
                                                l = u.toLowerCase(),
                                                a = l.slice(2);
                                            n.push({ t: a, o: c }), (i[a] = u), l !== u && ((a = u.slice(2, 3).toLowerCase() + u.slice(3)), (i[a] = u), n.push({ t: a, o: c }));
                                        }
                                    }
                                    n.length &&
                                        (t.handleEvent = function (e) {
                                            this[i[e.type]](e);
                                        }),
                                        y.push(e),
                                        (O[e] = { m: new WeakMap(), l: n, o: t }),
                                        k(document.querySelectorAll(e)),
                                        A(e),
                                        b.has(e) || E[e]._();
                                })(e, this.methods),
                                document.querySelector(e)
                            );
                        },
                    },
                    { key: "selector", get: function () {} },
                    { key: "methods", get: function () {} },
                    {
                        key: "bindMethodToDOMElement",
                        value: function (e, t, n) {
                            Object.defineProperty(e.element, t, { value: n.bind(e), writable: !1 });
                        },
                    },
                    {
                        key: "dispatchCustomEvent",
                        value: function (e, n) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = t,
                                s = new CustomEvent("".concat(o).concat(e), { bubbles: !0, cancelable: !0, detail: i });
                            return n.dispatchEvent(s);
                        },
                    },
                    {
                        key: "dispatchComponentAddedEvent",
                        value: function (e) {
                            return this.dispatchCustomEvent("ComponentAdded", document, { component: e });
                        },
                    },
                    {
                        key: "dispatchComponentRemovedEvent",
                        value: function (e) {
                            return this.dispatchCustomEvent("ComponentRemoved", document, { component: e });
                        },
                    },
                    {
                        key: "watchForDOMChanges",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            (e.observer = new MutationObserver(function (n, i) {
                                e._initElements(), t && t();
                            })),
                                e.observer.observe(e.element, { childList: !0, subtree: !0 });
                        },
                    },
                    {
                        key: "stopWatchingForDOMChanges",
                        value: function (e) {
                            e.observer.disconnect();
                        },
                    },
                    {
                        key: "generateUniqueId",
                        value: function () {
                            return t + "-" + Math.random().toString(20).substr(2, 12);
                        },
                    },
                    {
                        key: "setAttributeIfNotSpecified",
                        value: function (e, t, n) {
                            e.getAttribute(t) || e.setAttribute(t, n);
                        },
                    },
                ]),
                e
            );
        })(),
        M = 38,
        w = 40,
        P = 9,
        T = 27,
        x = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments);
            }
            return (
                _createClass(n, null, [
                    {
                        key: "selector",
                        get: function () {
                            return "[data-rvt-disclosure]";
                        },
                    },
                    {
                        key: "methods",
                        get: function () {
                            return {
                                init: function () {
                                    this._initSelectors(),
                                        this._initElements(),
                                        this._initProperties(),
                                        this._setInitialDisclosureState(),
                                        this._removeIconFromTabOrder(),
                                        this._bindExternalEventHandlers(),
                                        S.bindMethodToDOMElement(this, "open", this.open),
                                        S.bindMethodToDOMElement(this, "close", this.close);
                                },
                                _initSelectors: function () {
                                    (this.toggleAttribute = "data-rvt-disclosure-toggle"),
                                        (this.targetAttribute = "data-rvt-disclosure-target"),
                                        (this.toggleSelector = "[".concat(this.toggleAttribute, "]")),
                                        (this.targetSelector = "[".concat(this.targetAttribute, "]"));
                                },
                                _initElements: function () {
                                    (this.toggleElement = this.element.querySelector(this.toggleSelector)), (this.targetElement = this.element.querySelector(this.targetSelector));
                                },
                                _initProperties: function () {
                                    this.isOpen = !1;
                                },
                                _setInitialDisclosureState: function () {
                                    this._shouldBeOpenByDefault() && this.open();
                                },
                                _shouldBeOpenByDefault: function () {
                                    return this.element.hasAttribute("data-rvt-disclosure-open-on-init");
                                },
                                _removeIconFromTabOrder: function () {
                                    var e = this.element.querySelector("svg");
                                    e && e.setAttribute("focusable", "false");
                                },
                                _bindExternalEventHandlers: function () {
                                    this._onDocumentClick = this._onDocumentClick.bind(this);
                                },
                                connected: function () {
                                    S.dispatchComponentAddedEvent(this.element), this._shouldAddDocumentEventHandlers() && this._addDocumentEventHandlers();
                                },
                                _shouldAddDocumentEventHandlers: function () {
                                    return this.element.hasAttribute("data-rvt-close-click-outside");
                                },
                                _addDocumentEventHandlers: function () {
                                    document.addEventListener("click", this._onDocumentClick, !1);
                                },
                                disconnected: function () {
                                    S.dispatchComponentRemovedEvent(this.element), this._removeDocumentEventHandlers();
                                },
                                _removeDocumentEventHandlers: function () {
                                    document.removeEventListener("click", this._onDocumentClick, !1);
                                },
                                open: function () {
                                    this._isDisabled() || (this._eventDispatched("DisclosureOpened") && this._setOpenState());
                                },
                                _isDisabled: function () {
                                    return this.toggleElement.hasAttribute("disabled");
                                },
                                _setOpenState: function () {
                                    this.toggleElement.setAttribute("aria-expanded", "true"), this.targetElement.removeAttribute("hidden"), (this.isOpen = !0);
                                },
                                close: function () {
                                    this._isOpen() && this._eventDispatched("DisclosureClosed") && this._setClosedState();
                                },
                                _isOpen: function () {
                                    return this.isOpen;
                                },
                                _setClosedState: function () {
                                    this.toggleElement.setAttribute("aria-expanded", "false"), this.targetElement.setAttribute("hidden", ""), (this.isOpen = !1);
                                },
                                _eventDispatched: function (e) {
                                    return S.dispatchCustomEvent(e, this.element);
                                },
                                onClick: function (e) {
                                    this._clickOriginatedInsideDisclosureToggle(e) && (this._isOpen() ? this.close() : this.open());
                                },
                                _clickOriginatedInsideDisclosureToggle: function (e) {
                                    return this.toggleElement.contains(e.target);
                                },
                                _onDocumentClick: function (e) {
                                    this._clickOriginatedOutsideDisclosure(e) && this._isOpen() && this.close();
                                },
                                _clickOriginatedOutsideDisclosure: function (e) {
                                    return !this.element.contains(e.target);
                                },
                                onKeydown: function (e) {
                                    e.keyCode === T && (this.close(), this.toggleElement.focus());
                                },
                            };
                        },
                    },
                ]),
                n
            );
        })(S),
        H = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments);
            }
            return (
                _createClass(n, null, [
                    {
                        key: "selector",
                        get: function () {
                            return "[data-rvt-dropdown]";
                        },
                    },
                    {
                        key: "methods",
                        get: function () {
                            return {
                                init: function () {
                                    this._initSelectors(),
                                        this._initElements(),
                                        this._initAttributes(),
                                        this._initProperties(),
                                        this._initMenuItems(),
                                        this._removeIconFromTabOrder(),
                                        this._bindExternalEventHandlers(),
                                        S.bindMethodToDOMElement(this, "open", this.open),
                                        S.bindMethodToDOMElement(this, "close", this.close);
                                },
                                _initSelectors: function () {
                                    (this.toggleAttribute = "data-rvt-dropdown-toggle"),
                                        (this.menuAttribute = "data-rvt-dropdown-menu"),
                                        (this.toggleSelector = "[".concat(this.toggleAttribute, "]")),
                                        (this.menuSelector = "[".concat(this.menuAttribute, "]"));
                                },
                                _initElements: function () {
                                    (this.toggleElement = this.element.querySelector(this.toggleSelector)), (this.menuElement = this.element.querySelector(this.menuSelector));
                                },
                                _initAttributes: function () {
                                    this._assignComponentElementIds(), this._setAriaAttributes();
                                },
                                _assignComponentElementIds: function () {
                                    var e = S.generateUniqueId();
                                    S.setAttributeIfNotSpecified(this.toggleElement, this.toggleAttribute, e), S.setAttributeIfNotSpecified(this.menuElement, this.menuAttribute, e), S.setAttributeIfNotSpecified(this.menuElement, "id", e);
                                },
                                _setAriaAttributes: function () {
                                    this.toggleElement.setAttribute("aria-haspopup", !0), this.toggleElement.setAttribute("aria-expanded", !1);
                                },
                                _initProperties: function () {
                                    this.isOpen = !1;
                                },
                                _initMenuItems: function () {
                                    (this.menuItems = Array.from(this.menuElement.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'))),
                                        (this.firstMenuItem = this.menuItems[0]),
                                        (this.lastMenuItem = this.menuItems[this.menuItems.length - 1]);
                                },
                                _removeIconFromTabOrder: function () {
                                    var e = this.element.querySelector("svg");
                                    e && e.setAttribute("focusable", "false");
                                },
                                _bindExternalEventHandlers: function () {
                                    this._onDocumentClick = this._onDocumentClick.bind(this);
                                },
                                connected: function () {
                                    var e = this;
                                    S.dispatchComponentAddedEvent(this.element),
                                        S.watchForDOMChanges(this, function () {
                                            return e._initMenuItems();
                                        }),
                                        this._addDocumentEventHandlers();
                                },
                                _addDocumentEventHandlers: function () {
                                    document.addEventListener("click", this._onDocumentClick, !1);
                                },
                                disconnected: function () {
                                    S.dispatchComponentRemovedEvent(this.element), S.stopWatchingForDOMChanges(this), this._removeDocumentEventHandlers();
                                },
                                _removeDocumentEventHandlers: function () {
                                    document.removeEventListener("click", this._onDocumentClick, !1);
                                },
                                open: function () {
                                    this._toggleElementIsDisabled() || (this._eventDispatched("DropdownOpened") && this._setOpenState());
                                },
                                _toggleElementIsDisabled: function () {
                                    return this.toggleElement.hasAttribute("disabled");
                                },
                                _setOpenState: function () {
                                    this.toggleElement.setAttribute("aria-expanded", "true"), this.menuElement.removeAttribute("hidden"), this.firstMenuItem.focus(), (this.isOpen = !0);
                                },
                                close: function () {
                                    this._isOpen() && this._eventDispatched("DropdownClosed") && this._setClosedState();
                                },
                                _isOpen: function () {
                                    return this.isOpen;
                                },
                                _setClosedState: function () {
                                    this.toggleElement.setAttribute("aria-expanded", "false"), this.menuElement.setAttribute("hidden", ""), (this.isOpen = !1);
                                },
                                _eventDispatched: function (e) {
                                    return S.dispatchCustomEvent(e, this.element);
                                },
                                onClick: function (e) {
                                    this._eventOriginatedInsideMenu(e) || this._eventOriginatedInsideHyperlink(e) || (this._isOpen() ? this.close() : this.open());
                                },
                                _eventOriginatedInsideMenu: function (e) {
                                    return this.menuElement.contains(e.target);
                                },
                                _eventOriginatedInsideHyperlink: function (e) {
                                    return e.target.closest("a");
                                },
                                _onDocumentClick: function (e) {
                                    this._clickOriginatedOutsideDropdown(e) && this._isOpen() && this.close();
                                },
                                _clickOriginatedOutsideDropdown: function (e) {
                                    return !this.element.contains(e.target);
                                },
                                onKeydown: function (e) {
                                    switch (e.keyCode) {
                                        case T:
                                            this._handleEscapeKey();
                                            break;
                                        case M:
                                            e.preventDefault(), this._handleUpKey(e);
                                            break;
                                        case w:
                                            e.preventDefault(), this._handleDownKey(e);
                                            break;
                                        case P:
                                            this._handleTabKey(e);
                                    }
                                },
                                _handleEscapeKey: function () {
                                    this.close(), this.toggleElement.focus();
                                },
                                _handleUpKey: function (e) {
                                    e.preventDefault(), this._eventOriginatedInsideMenu(e) && this._focusPreviousMenuItem(e);
                                },
                                _focusPreviousMenuItem: function (e) {
                                    var t = this._getCurrentMenuItemIndex(e),
                                        n = this.menuItems[t - 1];
                                    if (!n && void 0 !== this.lastMenuItem) return this.lastMenuItem.focus();
                                    n.focus();
                                },
                                _getCurrentMenuItemIndex: function (e) {
                                    for (var t = 0; t < this.menuItems.length; t++) if (e.target == this.menuItems[t]) return t;
                                },
                                _handleDownKey: function (e) {
                                    e.preventDefault(), this._isOpen() || this.open(), this._eventOriginatedInsideMenu(e) ? this._focusNextMenuItem(e) : this.firstMenuItem.focus();
                                },
                                _focusNextMenuItem: function (e) {
                                    var t = this._getCurrentMenuItemIndex(e),
                                        n = this.menuItems[t + 1];
                                    if (!n) return this.firstMenuItem.focus();
                                    n.focus();
                                },
                                _handleTabKey: function (e) {
                                    this._eventOriginatedInsideMenu(e) && this._userTabbedOutOfLastMenuItem(e) && this.close();
                                },
                                _userTabbedOutOfLastMenuItem: function (e) {
                                    return document.activeElement == this.lastMenuItem && !e.shiftKey;
                                },
                            };
                        },
                    },
                ]),
                n
            );
        })(S);
    return (
        (e.Disclosure = x),
        (e.Dropdown = H),
        (e.init = function () {
            x.initAll(), H.initAll();
        }),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        e
    );
})({});