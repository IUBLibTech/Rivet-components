/*!
 * rivet-core - @version 2.6.0
 * rivet-tabs.js
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
        var i,
            n = _getPrototypeOf(t);
        if (e) {
            var a = _getPrototypeOf(this).constructor;
            i = Reflect.construct(n, arguments, a);
        } else i = n.apply(this, arguments);
        return _possibleConstructorReturn(this, i);
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
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}
var Rivet = (function (t) {
    "use strict";
    var e = "rvt",
        i =
            "function" == typeof Promise
                ? Promise
                : function (t) {
                      var e,
                          i = [],
                          n = 0;
                      return (
                          t(function (t) {
                              (e = t), (n = 1), i.splice(0).forEach(a);
                          }),
                          { then: a }
                      );
                      function a(t) {
                          return n ? setTimeout(t, 0, e) : i.push(t), this;
                      }
                  },
        n = !0,
        a = !1,
        s = "querySelectorAll";
    function r(t) {
        this.observe(t, { subtree: n, childList: n });
    }
    var o = "querySelectorAll",
        c = self,
        u = c.document,
        b = c.Element,
        l = c.MutationObserver,
        h = c.Set,
        d = c.WeakMap,
        f = function (t) {
            return o in t;
        },
        v = [].filter,
        p = Object.create,
        m = Object.keys,
        _ = new WeakMap(),
        T = new Set(),
        A = [],
        y = {},
        g = {},
        E = function (t, e) {
            for (var i = _.get(e), n = 0, a = t.length; n < a; n++) {
                var s = t[n],
                    r = s.target,
                    o = s.attributeName,
                    c = s.oldValue,
                    u = r.getAttribute(o);
                i.attributeChanged(o, c, u);
            }
        },
        S = (function (t) {
            var e = new d(),
                i = function (i, n) {
                    var a;
                    if (n)
                        for (
                            var s,
                                r = (function (t) {
                                    return t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
                                })(i),
                                o = 0,
                                c = p.length;
                            o < c;
                            o++
                        )
                            r.call(i, (s = p[o])) && (e.has(i) || e.set(i, new h()), (a = e.get(i)).has(s) || (a.add(s), t.handle(i, n, s)));
                    else
                        e.has(i) &&
                            ((a = e.get(i)),
                            e.delete(i),
                            a.forEach(function (e) {
                                t.handle(i, n, e);
                            }));
                },
                c = function (t) {
                    for (var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = 0, a = t.length; n < a; n++) i(t[n], e);
                },
                p = t.query,
                m = t.root || u,
                _ = (function (t, e, i) {
                    var o = function e(i, a, r, o, c) {
                            for (var u = 0, b = i.length; u < b; u++) {
                                var l = i[u];
                                (c || s in l) && (o ? a.has(l) || (a.add(l), r.delete(l), t(l, o)) : r.has(l) || (r.add(l), a.delete(l), t(l, o)), c || e(l[s]("*"), a, r, o, n));
                            }
                        },
                        c = new (i || MutationObserver)(function (t) {
                            for (var e = new Set(), i = new Set(), s = 0, r = t.length; s < r; s++) {
                                var c = t[s],
                                    u = c.addedNodes,
                                    b = c.removedNodes;
                                o(b, e, i, a, a), o(u, e, i, n, a);
                            }
                        });
                    return (c.add = r), c.add(e || document), c;
                })(i, m, l),
                T = b.prototype.attachShadow;
            return (
                T &&
                    (b.prototype.attachShadow = function (t) {
                        var e = T.call(this, t);
                        return _.add(e), e;
                    }),
                p.length && c(m[o](p)),
                {
                    drop: function (t) {
                        for (var i = 0, n = t.length; i < n; i++) e.delete(t[i]);
                    },
                    flush: function () {
                        for (var t = _.takeRecords(), e = 0, i = t.length; e < i; e++) c(v.call(t[e].removedNodes, f), !1), c(v.call(t[e].addedNodes, f), !0);
                    },
                    observer: _,
                    parse: c,
                }
            );
        })({
            query: A,
            handle: function (t, e, i) {
                var n = y[i],
                    a = n.m,
                    s = n.l,
                    r = n.o,
                    o =
                        a.get(t) ||
                        (function (t, e, i, n) {
                            for (var a = p(n, { element: { enumerable: !0, value: t } }), s = 0, r = i.length; s < r; s++) t.addEventListener(i[s].t, a, i[s].o);
                            e.set(t, a), a.init && a.init();
                            var o = n.observedAttributes;
                            if (o) {
                                var c = new MutationObserver(E);
                                c.observe(t, {
                                    attributes: !0,
                                    attributeOldValue: !0,
                                    attributeFilter: o.map(function (e) {
                                        return t.hasAttribute(e) && a.attributeChanged(e, null, t.getAttribute(e)), e;
                                    }),
                                }),
                                    _.set(c, a);
                            }
                            return a;
                        })(t, a, s, r),
                    c = e ? "connected" : "disconnected";
                c in o && o[c]();
            },
        }),
        O = (S.drop, S.flush),
        C = S.parse,
        I = function (t) {
            if (!(t in g)) {
                var e,
                    n = new i(function (t) {
                        e = t;
                    });
                g[t] = { _: e, $: n };
            }
            return g[t].$;
        },
        w = (function () {
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
                                    if (-1 < A.indexOf(t)) throw new Error("duplicated: " + t);
                                    O();
                                    for (var i = [], n = p(null), a = m(e), s = 0, r = a.length; s < r; s++) {
                                        var o = a[s];
                                        if (/^on/.test(o) && !/Options$/.test(o)) {
                                            var c = e[o + "Options"] || !1,
                                                u = o.toLowerCase(),
                                                b = u.slice(2);
                                            i.push({ t: b, o: c }), (n[b] = o), u !== o && ((b = o.slice(2, 3).toLowerCase() + o.slice(3)), (n[b] = o), i.push({ t: b, o: c }));
                                        }
                                    }
                                    i.length &&
                                        (e.handleEvent = function (t) {
                                            this[n[t.type]](t);
                                        }),
                                        A.push(t),
                                        (y[t] = { m: new WeakMap(), l: i, o: e }),
                                        C(document.querySelectorAll(t)),
                                        I(t),
                                        T.has(t) || g[t]._();
                                })(t, this.methods),
                                document.querySelector(t)
                            );
                        },
                    },
                    { key: "selector", get: function () {} },
                    { key: "methods", get: function () {} },
                    {
                        key: "bindMethodToDOMElement",
                        value: function (t, e, i) {
                            Object.defineProperty(t.element, e, { value: i.bind(t), writable: !1 });
                        },
                    },
                    {
                        key: "dispatchCustomEvent",
                        value: function (t, i) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                a = e,
                                s = new CustomEvent("".concat(a).concat(t), { bubbles: !0, cancelable: !0, detail: n });
                            return i.dispatchEvent(s);
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
                            (t.observer = new MutationObserver(function (i, n) {
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
                        value: function (t, e, i) {
                            t.getAttribute(e) || t.setAttribute(e, i);
                        },
                    },
                ]),
                t
            );
        })(),
        x = 37,
        R = 39,
        P = 36,
        k = 35,
        N = (function (t) {
            _inherits(i, t);
            var e = _createSuper(i);
            function i() {
                return _classCallCheck(this, i), e.apply(this, arguments);
            }
            return (
                _createClass(i, null, [
                    {
                        key: "selector",
                        get: function () {
                            return "[data-rvt-tabs]";
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
                                        this._initAttributes(),
                                        w.bindMethodToDOMElement(this, "activateTab", this.activateTab),
                                        w.bindMethodToDOMElement(this, "addTab", this.addTab),
                                        w.bindMethodToDOMElement(this, "removeTab", this.removeTab);
                                },
                                _initSelectors: function () {
                                    (this.tabAttribute = "data-rvt-tab"),
                                        (this.panelAttribute = "data-rvt-tab-panel"),
                                        (this.tabSelector = "[".concat(this.tabAttribute, "]")),
                                        (this.panelSelector = "[".concat(this.panelAttribute, "]")),
                                        (this.tablistSelector = "[data-rvt-tablist]"),
                                        (this.initialTabSelector = "[data-rvt-tab-init]");
                                },
                                _initElements: function () {
                                    (this.tablist = this.element.querySelector(this.tablistSelector)),
                                        (this.tabs = Array.from(this.element.querySelectorAll(this.tabSelector))),
                                        (this.panels = Array.from(this.element.querySelectorAll(this.panelSelector))),
                                        this.tablist || (this.tablist = this.tabs[0].parentElement);
                                },
                                _initProperties: function () {
                                    this.activeTab = null;
                                },
                                _initAttributes: function () {
                                    this._assignComponentElementIds(), this._setTabButtonAttributes(), this._setAriaAttributes();
                                },
                                _assignComponentElementIds: function () {
                                    this._assignTabIds(), this._assignPanelIds();
                                },
                                _assignTabIds: function () {
                                    var t = this;
                                    this.tabs.forEach(function (e) {
                                        w.setAttributeIfNotSpecified(e, t.tabAttribute, w.generateUniqueId()), w.setAttributeIfNotSpecified(e, "id", w.generateUniqueId());
                                    });
                                },
                                _assignPanelIds: function () {
                                    for (var t = this.panels.length, e = 0; e < t; e++) {
                                        var i = this.tabs[e],
                                            n = this.panels[e],
                                            a = i.getAttribute(this.tabAttribute);
                                        w.setAttributeIfNotSpecified(n, this.panelAttribute, a), w.setAttributeIfNotSpecified(n, "id", a);
                                    }
                                },
                                _setTabButtonAttributes: function () {
                                    this.tabs.forEach(function (t) {
                                        w.setAttributeIfNotSpecified(t, "type", "button");
                                    });
                                },
                                _setAriaAttributes: function () {
                                    this.tablist.setAttribute("role", "tablist"),
                                        this.tabs.forEach(function (t) {
                                            return t.setAttribute("role", "tab");
                                        }),
                                        this.panels.forEach(function (t) {
                                            t.setAttribute("role", "tabpanel"), t.setAttribute("tabindex", 0);
                                        });
                                    for (var t = 0; t < this.tabs.length; t++) {
                                        var e = this.tabs[t],
                                            i = this.panels[t],
                                            n = e.getAttribute("id");
                                        i.setAttribute("aria-labelledby", n);
                                    }
                                },
                                connected: function () {
                                    w.dispatchComponentAddedEvent(this.element), w.watchForDOMChanges(this), this._activateInitialTab();
                                },
                                _activateInitialTab: function () {
                                    var t = this.element.querySelector(this.initialTabSelector),
                                        e = this.panels[0];
                                    t ? this.activateTab(t.getAttribute(this.panelAttribute)) : this.activateTab(e.getAttribute(this.panelAttribute));
                                },
                                disconnected: function () {
                                    w.dispatchComponentRemovedEvent(this.element), w.stopWatchingForDOMChanges(this);
                                },
                                onClick: function (t) {
                                    this._eventOriginatedInsideTab(t) && this.activateTab(this._getClickedTabId(t));
                                },
                                _eventOriginatedInsideTab: function (t) {
                                    return t.target.closest(this.tabSelector);
                                },
                                _getClickedTabId: function (t) {
                                    return t.target.closest(this.tabSelector).getAttribute(this.tabAttribute);
                                },
                                onKeydown: function (t) {
                                    if (this._eventOriginatedInsideTab(t))
                                        switch ((this._setNeighboringTabIndexes(t), t.keyCode)) {
                                            case x:
                                                t.preventDefault(), this._focusPreviousTab();
                                                break;
                                            case R:
                                                t.preventDefault(), this._focusNextTab();
                                                break;
                                            case P:
                                                t.preventDefault(), this._focusFirstTab();
                                                break;
                                            case k:
                                                t.preventDefault(), this._focusLastTab();
                                        }
                                },
                                _setNeighboringTabIndexes: function (t) {
                                    var e = t.target.closest(this.tabSelector);
                                    (this.previousTabIndex = this.tabs.indexOf(e) - 1), (this.nextTabIndex = this.tabs.indexOf(e) + 1);
                                },
                                _focusPreviousTab: function () {
                                    this.tabs[this.previousTabIndex] ? this.tabs[this.previousTabIndex].focus() : this.tabs[this.tabs.length - 1].focus();
                                },
                                _focusNextTab: function () {
                                    this.tabs[this.nextTabIndex] ? this.tabs[this.nextTabIndex].focus() : this.tabs[0].focus();
                                },
                                _focusFirstTab: function () {
                                    this.tabs[0].focus();
                                },
                                _focusLastTab: function () {
                                    this.tabs[this.tabs.length - 1].focus();
                                },
                                activateTab: function (t) {
                                    var e = this._tabIndexWasPassed(t) ? this._getTabIdFromIndex(t) : t;
                                    this._setTabToActivate(e),
                                        this._tabToActivateExists() ? this._tabActivatedEventDispatched() && (this._deactivateUnselectedTabs(), this._activateSelectedTab()) : console.warn("No such tab '".concat(e, "' in activateTab()"));
                                },
                                _tabIndexWasPassed: function (t) {
                                    return "number" == typeof t;
                                },
                                _getTabIdFromIndex: function (t) {
                                    return this.tabs[t] ? this.tabs[t].getAttribute(this.tabAttribute) : null;
                                },
                                _setTabToActivate: function (t) {
                                    (this.tabToActivate = this.element.querySelector("[".concat(this.tabAttribute, ' = "').concat(t, '"]'))),
                                        (this.panelToActivate = this.element.querySelector("[".concat(this.panelAttribute, ' = "').concat(t, '"]')));
                                },
                                _tabToActivateExists: function () {
                                    return this.tabToActivate && this.panelToActivate;
                                },
                                _tabActivatedEventDispatched: function () {
                                    return w.dispatchCustomEvent("TabActivated", this.element, { tab: this.panelToActivate });
                                },
                                _deactivateUnselectedTabs: function () {
                                    var t = this;
                                    this.panels.forEach(function (e, i) {
                                        t._panelShouldBeActivated(e) || t._deactivateTab(e, i);
                                    });
                                },
                                _panelShouldBeActivated: function (t) {
                                    return t.getAttribute(this.panelAttribute) === this.panelToActivate.dataset.rvtTabPanel;
                                },
                                _deactivateTab: function (t, e) {
                                    t.setAttribute("hidden", ""), this.tabs[e].setAttribute("aria-selected", "false"), this.tabs[e].setAttribute("tabindex", "-1");
                                },
                                _activateSelectedTab: function () {
                                    this.tabToActivate.setAttribute("aria-selected", "true"), this.tabToActivate.removeAttribute("tabindex"), this.panelToActivate.removeAttribute("hidden"), (this.activeTab = this.tabToActivate);
                                },
                                addTab: function (t) {
                                    var e = this._createNewTabElement(t),
                                        i = this._createNewPanelElement(e);
                                    if (this._tabAddedEventDispatched(e, i)) return this.tablist.appendChild(e), this.element.appendChild(i), { tab: e, panel: i };
                                },
                                _createNewTabElement: function (t) {
                                    var e = document.createElement("button");
                                    return (
                                        (e.textContent = t),
                                        e.classList.add("rvt-tabs__tab"),
                                        e.setAttribute(this.tabAttribute, w.generateUniqueId()),
                                        e.setAttribute("id", w.generateUniqueId()),
                                        e.setAttribute("role", "tab"),
                                        e.setAttribute("aria-selected", !1),
                                        e.setAttribute("tabindex", -1),
                                        e
                                    );
                                },
                                _createNewPanelElement: function (t) {
                                    var e = document.createElement("div");
                                    return (
                                        e.classList.add("rvt-tabs__panel"),
                                        e.setAttribute(this.panelAttribute, t.getAttribute(this.tabAttribute)),
                                        e.setAttribute("id", t.getAttribute(this.tabAttribute)),
                                        e.setAttribute("role", "tabpanel"),
                                        e.setAttribute("tabindex", 0),
                                        e.setAttribute("aria-labelledby", t.getAttribute("id")),
                                        e.setAttribute("hidden", !0),
                                        e
                                    );
                                },
                                _tabAddedEventDispatched: function (t, e) {
                                    return w.dispatchCustomEvent("TabAdded", this.element, { tab: t, panel: e });
                                },
                                removeTab: function (t) {
                                    var e = this._tabIndexWasPassed(t) ? this._getTabIdFromIndex(t) : t;
                                    this._setTabToRemove(e),
                                        this._tabToRemoveExists()
                                            ? this._tabRemovedEventDispatched() && (this._removedTabWasActiveTab() && this._activateTabNearestToRemovedTab(), this._removeTab())
                                            : console.warn("No such tab '".concat(e, "' in removeTab()"));
                                },
                                _setTabToRemove: function (t) {
                                    (this.tabToRemove = this.element.querySelector("[".concat(this.tabAttribute, '="').concat(t, '"]'))),
                                        (this.panelToRemove = this.element.querySelector("[".concat(this.panelAttribute, ' = "').concat(t, '"]')));
                                },
                                _tabToRemoveExists: function () {
                                    return this.tabToRemove && this.panelToRemove;
                                },
                                _tabRemovedEventDispatched: function () {
                                    return w.dispatchCustomEvent("TabRemoved", this.element, { tab: this.tabToRemove, panel: this.panelToRemove });
                                },
                                _removedTabWasActiveTab: function () {
                                    return this.tabToRemove === this.activeTab;
                                },
                                _activateTabNearestToRemovedTab: function () {
                                    var t = this.tabToRemove.previousElementSibling,
                                        e = this.tabToRemove.nextElementSibling;
                                    t ? this.activateTab(t.dataset.rvtTab) : e && this.activateTab(e.dataset.rvtTab);
                                },
                                _removeTab: function () {
                                    this.tabToRemove.remove(), this.panelToRemove.remove();
                                },
                            };
                        },
                    },
                ]),
                i
            );
        })(w);
    return (
        (t.Tabs = N),
        (t.init = function () {
            N.initAll();
        }),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        t
    );
})({});