/*!
 * rivet-core - @version 2.6.0
 * rivet-sidenav.js
 */
function _typeof(t) {
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
        _typeof(t)
    );
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return (
        (_setPrototypeOf =
            Object.setPrototypeOf ||
            function (t, e) {
                return (t.__proto__ = e), t;
            }),
        _setPrototypeOf(t, e)
    );
}
function _createSuper(t) {
    var e = _isNativeReflectConstruct();
    return function () {
        var n,
            i = _getPrototypeOf(t);
        if (e) {
            var o = _getPrototypeOf(this).constructor;
            n = Reflect.construct(i, arguments, o);
        } else n = i.apply(this, arguments);
        return _possibleConstructorReturn(this, n);
    };
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" === _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
        return !1;
    }
}
function _getPrototypeOf(t) {
    return (
        (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              }),
        _getPrototypeOf(t)
    );
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
}
function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
var Rivet = (function (t) {
    "use strict";
    var e = "rvt",
        n =
            "function" == typeof Promise
                ? Promise
                : function (t) {
                      var e,
                          n = [],
                          i = 0;
                      return (
                          t(function (t) {
                              (e = t), (i = 1), n.splice(0).forEach(o);
                          }),
                          { then: o }
                      );
                      function o(t) {
                          return i ? setTimeout(t, 0, e) : n.push(t), this;
                      }
                  },
        i = !0,
        o = !1,
        s = "querySelectorAll";
    function r(t) {
        this.observe(t, { subtree: i, childList: i });
    }
    var u = "querySelectorAll",
        c = self,
        l = c.document,
        h = c.Element,
        a = c.MutationObserver,
        d = c.Set,
        f = c.WeakMap,
        g = function (t) {
            return u in t;
        },
        m = [].filter,
        p = Object.create,
        _ = Object.keys,
        v = new WeakMap(),
        b = new Set(),
        M = [],
        y = {},
        O = {},
        C = function (t, e) {
            for (var n = v.get(e), i = 0, o = t.length; i < o; i++) {
                var s = t[i],
                    r = s.target,
                    u = s.attributeName,
                    c = s.oldValue,
                    l = r.getAttribute(u);
                n.attributeChanged(u, c, l);
            }
        },
        A = (function (t) {
            var e = new f(),
                n = function (n, i) {
                    var o;
                    if (i)
                        for (
                            var s,
                                r = (function (t) {
                                    return t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
                                })(n),
                                u = 0,
                                c = p.length;
                            u < c;
                            u++
                        )
                            r.call(n, (s = p[u])) && (e.has(n) || e.set(n, new d()), (o = e.get(n)).has(s) || (o.add(s), t.handle(n, i, s)));
                    else
                        e.has(n) &&
                            ((o = e.get(n)),
                            e.delete(n),
                            o.forEach(function (e) {
                                t.handle(n, i, e);
                            }));
                },
                c = function (t) {
                    for (var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = 0, o = t.length; i < o; i++) n(t[i], e);
                },
                p = t.query,
                _ = t.root || l,
                v = (function (t, e, n) {
                    var u = function e(n, o, r, u, c) {
                            for (var l = 0, h = n.length; l < h; l++) {
                                var a = n[l];
                                (c || s in a) && (u ? o.has(a) || (o.add(a), r.delete(a), t(a, u)) : r.has(a) || (r.add(a), o.delete(a), t(a, u)), c || e(a[s]("*"), o, r, u, i));
                            }
                        },
                        c = new (n || MutationObserver)(function (t) {
                            for (var e = new Set(), n = new Set(), s = 0, r = t.length; s < r; s++) {
                                var c = t[s],
                                    l = c.addedNodes,
                                    h = c.removedNodes;
                                u(h, e, n, o, o), u(l, e, n, i, o);
                            }
                        });
                    return (c.add = r), c.add(e || document), c;
                })(n, _, a),
                b = h.prototype.attachShadow;
            return (
                b &&
                    (h.prototype.attachShadow = function (t) {
                        var e = b.call(this, t);
                        return v.add(e), e;
                    }),
                p.length && c(_[u](p)),
                {
                    drop: function (t) {
                        for (var n = 0, i = t.length; n < i; n++) e.delete(t[n]);
                    },
                    flush: function () {
                        for (var t = v.takeRecords(), e = 0, n = t.length; e < n; e++) c(m.call(t[e].removedNodes, g), !1), c(m.call(t[e].addedNodes, g), !0);
                    },
                    observer: v,
                    parse: c,
                }
            );
        })({
            query: M,
            handle: function (t, e, n) {
                var i = y[n],
                    o = i.m,
                    s = i.l,
                    r = i.o,
                    u =
                        o.get(t) ||
                        (function (t, e, n, i) {
                            for (var o = p(i, { element: { enumerable: !0, value: t } }), s = 0, r = n.length; s < r; s++) t.addEventListener(n[s].t, o, n[s].o);
                            e.set(t, o), o.init && o.init();
                            var u = i.observedAttributes;
                            if (u) {
                                var c = new MutationObserver(C);
                                c.observe(t, {
                                    attributes: !0,
                                    attributeOldValue: !0,
                                    attributeFilter: u.map(function (e) {
                                        return t.hasAttribute(e) && o.attributeChanged(e, null, t.getAttribute(e)), e;
                                    }),
                                }),
                                    v.set(c, o);
                            }
                            return o;
                        })(t, o, s, r),
                    c = e ? "connected" : "disconnected";
                c in u && u[c]();
            },
        }),
        E = (A.drop, A.flush),
        S = A.parse,
        T = function (t) {
            if (!(t in O)) {
                var e,
                    i = new n(function (t) {
                        e = t;
                    });
                O[t] = { _: e, $: i };
            }
            return O[t].$;
        },
        I = (function () {
            function t() {
                _classCallCheck(this, t);
            }
            return (
                _createClass(t, null, [
                    {
                        key: "initAll",
                        value: function () {
                            this.init(this.selector);
                        },
                    },
                    {
                        key: "init",
                        value: function (t) {
                            return (
                                (function (t, e) {
                                    if (-1 < M.indexOf(t)) throw new Error("duplicated: " + t);
                                    E();
                                    for (var n = [], i = p(null), o = _(e), s = 0, r = o.length; s < r; s++) {
                                        var u = o[s];
                                        if (/^on/.test(u) && !/Options$/.test(u)) {
                                            var c = e[u + "Options"] || !1,
                                                l = u.toLowerCase(),
                                                h = l.slice(2);
                                            n.push({ t: h, o: c }), (i[h] = u), l !== u && ((h = u.slice(2, 3).toLowerCase() + u.slice(3)), (i[h] = u), n.push({ t: h, o: c }));
                                        }
                                    }
                                    n.length &&
                                        (e.handleEvent = function (t) {
                                            this[i[t.type]](t);
                                        }),
                                        M.push(t),
                                        (y[t] = { m: new WeakMap(), l: n, o: e }),
                                        S(document.querySelectorAll(t)),
                                        T(t),
                                        b.has(t) || O[t]._();
                                })(t, this.methods),
                                document.querySelector(t)
                            );
                        },
                    },
                    { key: "selector", get: function () {} },
                    { key: "methods", get: function () {} },
                    {
                        key: "bindMethodToDOMElement",
                        value: function (t, e, n) {
                            Object.defineProperty(t.element, e, { value: n.bind(t), writable: !1 });
                        },
                    },
                    {
                        key: "dispatchCustomEvent",
                        value: function (t, n) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = e,
                                s = new CustomEvent("".concat(o).concat(t), { bubbles: !0, cancelable: !0, detail: i });
                            return n.dispatchEvent(s);
                        },
                    },
                    {
                        key: "dispatchComponentAddedEvent",
                        value: function (t) {
                            return this.dispatchCustomEvent("ComponentAdded", document, { component: t });
                        },
                    },
                    {
                        key: "dispatchComponentRemovedEvent",
                        value: function (t) {
                            return this.dispatchCustomEvent("ComponentRemoved", document, { component: t });
                        },
                    },
                    {
                        key: "watchForDOMChanges",
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            (t.observer = new MutationObserver(function (n, i) {
                                t._initElements(), e && e();
                            })),
                                t.observer.observe(t.element, { childList: !0, subtree: !0 });
                        },
                    },
                    {
                        key: "stopWatchingForDOMChanges",
                        value: function (t) {
                            t.observer.disconnect();
                        },
                    },
                    {
                        key: "generateUniqueId",
                        value: function () {
                            return e + "-" + Math.random().toString(20).substr(2, 12);
                        },
                    },
                    {
                        key: "setAttributeIfNotSpecified",
                        value: function (t, e, n) {
                            t.getAttribute(e) || t.setAttribute(e, n);
                        },
                    },
                ]),
                t
            );
        })(),
        D = 38,
        k = 40,
        w = 9,
        x = 27,
        P = (function (t) {
            _inherits(n, t);
            var e = _createSuper(n);
            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments);
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
                                        I.bindMethodToDOMElement(this, "open", this.open),
                                        I.bindMethodToDOMElement(this, "close", this.close);
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
                                    var t = this.element.querySelector("svg");
                                    t && t.setAttribute("focusable", "false");
                                },
                                _bindExternalEventHandlers: function () {
                                    this._onDocumentClick = this._onDocumentClick.bind(this);
                                },
                                connected: function () {
                                    I.dispatchComponentAddedEvent(this.element), this._shouldAddDocumentEventHandlers() && this._addDocumentEventHandlers();
                                },
                                _shouldAddDocumentEventHandlers: function () {
                                    return this.element.hasAttribute("data-rvt-close-click-outside");
                                },
                                _addDocumentEventHandlers: function () {
                                    document.addEventListener("click", this._onDocumentClick, !1);
                                },
                                disconnected: function () {
                                    I.dispatchComponentRemovedEvent(this.element), this._removeDocumentEventHandlers();
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
                                _eventDispatched: function (t) {
                                    return I.dispatchCustomEvent(t, this.element);
                                },
                                onClick: function (t) {
                                    this._clickOriginatedInsideDisclosureToggle(t) && (this._isOpen() ? this.close() : this.open());
                                },
                                _clickOriginatedInsideDisclosureToggle: function (t) {
                                    return this.toggleElement.contains(t.target);
                                },
                                _onDocumentClick: function (t) {
                                    this._clickOriginatedOutsideDisclosure(t) && this._isOpen() && this.close();
                                },
                                _clickOriginatedOutsideDisclosure: function (t) {
                                    return !this.element.contains(t.target);
                                },
                                onKeydown: function (t) {
                                    t.keyCode === x && (this.close(), this.toggleElement.focus());
                                },
                            };
                        },
                    },
                ]),
                n
            );
        })(I),
        q = (function (t) {
            _inherits(n, t);
            var e = _createSuper(n);
            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments);
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
                                        I.bindMethodToDOMElement(this, "open", this.open),
                                        I.bindMethodToDOMElement(this, "close", this.close);
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
                                    var t = I.generateUniqueId();
                                    I.setAttributeIfNotSpecified(this.toggleElement, this.toggleAttribute, t), I.setAttributeIfNotSpecified(this.menuElement, this.menuAttribute, t), I.setAttributeIfNotSpecified(this.menuElement, "id", t);
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
                                    var t = this.element.querySelector("svg");
                                    t && t.setAttribute("focusable", "false");
                                },
                                _bindExternalEventHandlers: function () {
                                    this._onDocumentClick = this._onDocumentClick.bind(this);
                                },
                                connected: function () {
                                    var t = this;
                                    I.dispatchComponentAddedEvent(this.element),
                                        I.watchForDOMChanges(this, function () {
                                            return t._initMenuItems();
                                        }),
                                        this._addDocumentEventHandlers();
                                },
                                _addDocumentEventHandlers: function () {
                                    document.addEventListener("click", this._onDocumentClick, !1);
                                },
                                disconnected: function () {
                                    I.dispatchComponentRemovedEvent(this.element), I.stopWatchingForDOMChanges(this), this._removeDocumentEventHandlers();
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
                                _eventDispatched: function (t) {
                                    return I.dispatchCustomEvent(t, this.element);
                                },
                                onClick: function (t) {
                                    this._eventOriginatedInsideMenu(t) || this._eventOriginatedInsideHyperlink(t) || (this._isOpen() ? this.close() : this.open());
                                },
                                _eventOriginatedInsideMenu: function (t) {
                                    return this.menuElement.contains(t.target);
                                },
                                _eventOriginatedInsideHyperlink: function (t) {
                                    return t.target.closest("a");
                                },
                                _onDocumentClick: function (t) {
                                    this._clickOriginatedOutsideDropdown(t) && this._isOpen() && this.close();
                                },
                                _clickOriginatedOutsideDropdown: function (t) {
                                    return !this.element.contains(t.target);
                                },
                                onKeydown: function (t) {
                                    switch (t.keyCode) {
                                        case x:
                                            this._handleEscapeKey();
                                            break;
                                        case D:
                                            t.preventDefault(), this._handleUpKey(t);
                                            break;
                                        case k:
                                            t.preventDefault(), this._handleDownKey(t);
                                            break;
                                        case w:
                                            this._handleTabKey(t);
                                    }
                                },
                                _handleEscapeKey: function () {
                                    this.close(), this.toggleElement.focus();
                                },
                                _handleUpKey: function (t) {
                                    t.preventDefault(), this._eventOriginatedInsideMenu(t) && this._focusPreviousMenuItem(t);
                                },
                                _focusPreviousMenuItem: function (t) {
                                    var e = this._getCurrentMenuItemIndex(t),
                                        n = this.menuItems[e - 1];
                                    if (!n && void 0 !== this.lastMenuItem) return this.lastMenuItem.focus();
                                    n.focus();
                                },
                                _getCurrentMenuItemIndex: function (t) {
                                    for (var e = 0; e < this.menuItems.length; e++) if (t.target == this.menuItems[e]) return e;
                                },
                                _handleDownKey: function (t) {
                                    t.preventDefault(), this._isOpen() || this.open(), this._eventOriginatedInsideMenu(t) ? this._focusNextMenuItem(t) : this.firstMenuItem.focus();
                                },
                                _focusNextMenuItem: function (t) {
                                    var e = this._getCurrentMenuItemIndex(t),
                                        n = this.menuItems[e + 1];
                                    if (!n) return this.firstMenuItem.focus();
                                    n.focus();
                                },
                                _handleTabKey: function (t) {
                                    this._eventOriginatedInsideMenu(t) && this._userTabbedOutOfLastMenuItem(t) && this.close();
                                },
                                _userTabbedOutOfLastMenuItem: function (t) {
                                    return document.activeElement == this.lastMenuItem && !t.shiftKey;
                                },
                            };
                        },
                    },
                ]),
                n
            );
        })(I),
        B = (function (t) {
            _inherits(n, t);
            var e = _createSuper(n);
            function n() {
                return _classCallCheck(this, n), e.apply(this, arguments);
            }
            return (
                _createClass(n, null, [
                    {
                        key: "selector",
                        get: function () {
                            return "[data-rvt-sidenav]";
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
                                        this._setInitialChildMenuStates(),
                                        I.bindMethodToDOMElement(this, "open", this.open),
                                        I.bindMethodToDOMElement(this, "close", this.close);
                                },
                                _initSelectors: function () {
                                    (this.toggleAttribute = "data-rvt-sidenav-toggle"),
                                        (this.childMenuAttribute = "data-rvt-sidenav-list"),
                                        (this.toggleSelector = "[".concat(this.toggleAttribute, "]")),
                                        (this.childMenuSelector = "[".concat(this.childMenuAttribute, "]"));
                                },
                                _initElements: function () {
                                    (this.childMenuToggleButtons = Array.from(this.element.querySelectorAll(this.toggleSelector))), (this.childMenus = Array.from(this.element.querySelectorAll(this.childMenuSelector)));
                                },
                                _initAttributes: function () {
                                    this._assignComponentElementIds();
                                },
                                _assignComponentElementIds: function () {
                                    this._assignToggleIds(), this._assignChildMenuIds();
                                },
                                _assignToggleIds: function () {
                                    var t = this;
                                    this.childMenuToggleButtons.forEach(function (e) {
                                        I.setAttributeIfNotSpecified(e, t.toggleAttribute, I.generateUniqueId());
                                    });
                                },
                                _assignChildMenuIds: function () {
                                    for (var t = this.childMenus.length, e = 0; e < t; e++) {
                                        var n = this.childMenuToggleButtons[e],
                                            i = this.childMenus[e],
                                            o = n.getAttribute(this.toggleAttribute);
                                        I.setAttributeIfNotSpecified(i, this.childMenuAttribute, o);
                                    }
                                },
                                _setInitialChildMenuStates: function () {
                                    this._setChildMenuDefaultAriaAttributes(), this._shouldOpenAllChildMenus() ? this._openAllChildMenus() : this._setChildMenuDefaultStates();
                                },
                                _setChildMenuDefaultAriaAttributes: function () {
                                    this.childMenuToggleButtons.forEach(function (t) {
                                        return t.setAttribute("aria-haspopup", "true");
                                    });
                                },
                                _shouldOpenAllChildMenus: function () {
                                    return this.element.hasAttribute("data-rvt-sidenav-open-all");
                                },
                                _openAllChildMenus: function () {
                                    var t = this;
                                    this.childMenuToggleButtons.forEach(function (e, n) {
                                        e.setAttribute("aria-expanded", "true"), t.childMenus[n].removeAttribute("hidden");
                                    });
                                },
                                _setChildMenuDefaultStates: function () {
                                    var t = this;
                                    this.childMenuToggleButtons.forEach(function (e, n) {
                                        "true" === e.getAttribute("aria-expanded") ? t.childMenus[n].removeAttribute("hidden") : (e.setAttribute("aria-expanded", "false"), t.childMenus[n].setAttribute("hidden", ""));
                                    });
                                },
                                connected: function () {
                                    I.dispatchComponentAddedEvent(this.element), I.watchForDOMChanges(this);
                                },
                                disconnected: function () {
                                    I.dispatchComponentRemovedEvent(this.element), I.stopWatchingForDOMChanges(this);
                                },
                                onClick: function (t) {
                                    this._clickOriginatedInChildMenuToggleButton(t) &&
                                        (this._setChildMenuToToggle(t), this._childMenuToToggleExists() && (this._childMenuToToggleIsOpen() ? this.close(this.childMenuToToggleId) : this.open(this.childMenuToToggleId)));
                                },
                                _clickOriginatedInChildMenuToggleButton: function (t) {
                                    return t.target.closest(this.toggleSelector);
                                },
                                _setChildMenuToToggle: function (t) {
                                    (this.childMenuToToggleId = t.target.closest(this.toggleSelector).dataset.rvtSidenavToggle),
                                        (this.childMenuToToggle = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(this.childMenuToToggleId, '"]')));
                                },
                                _childMenuToToggleExists: function () {
                                    return this.childMenuToToggle && "" !== this.childMenuToToggle.getAttribute(this.childMenuAttribute);
                                },
                                _childMenuToToggleIsOpen: function () {
                                    return !this.childMenuToToggle.hasAttribute("hidden");
                                },
                                open: function (t) {
                                    this._setChildMenuToOpen(t),
                                        this._childMenuExists(t) ? this._eventDispatched("SidenavListOpened", this.childMenuToOpen) && this._openChildMenu() : console.warn("No such subnav child menu '".concat(t, "' in open()"));
                                },
                                _setChildMenuToOpen: function (t) {
                                    (this.childMenuToOpenToggleButton = this.element.querySelector("[".concat(this.toggleAttribute, ' = "').concat(t, '"]'))),
                                        (this.childMenuToOpen = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(t, '"]')));
                                },
                                _openChildMenu: function () {
                                    this.childMenuToOpenToggleButton.setAttribute("aria-expanded", "true"), this.childMenuToOpen.removeAttribute("hidden");
                                },
                                close: function (t) {
                                    this._setChildMenuToClose(t),
                                        this._childMenuExists(t) ? this._eventDispatched("SidenavListClosed", this.childMenuToClose) && this._closeChildMenu() : console.warn("No such subnav child menu '".concat(t, "' in close()"));
                                },
                                _setChildMenuToClose: function (t) {
                                    (this.childMenuToCloseToggleButton = this.element.querySelector("[".concat(this.toggleAttribute, ' = "').concat(t, '"]'))),
                                        (this.childMenuToClose = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(t, '"]')));
                                },
                                _closeChildMenu: function () {
                                    this.childMenuToCloseToggleButton.setAttribute("aria-expanded", "false"), this.childMenuToClose.setAttribute("hidden", "");
                                },
                                _childMenuExists: function (t) {
                                    var e = this.element.querySelector("[".concat(this.toggleAttribute, ' = "').concat(t, '"]')),
                                        n = this.element.querySelector("[".concat(this.childMenuAttribute, ' = "').concat(t, '"]'));
                                    return e && n;
                                },
                                _eventDispatched: function (t, e) {
                                    return I.dispatchCustomEvent(t, this.element, { list: e });
                                },
                            };
                        },
                    },
                ]),
                n
            );
        })(I);
    return (
        (t.Disclosure = P),
        (t.Dropdown = q),
        (t.Sidenav = B),
        (t.init = function () {
            P.initAll(), q.initAll(), B.initAll();
        }),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        t
    );
})({});