(window.webpackJsonp = window.webpackJsonp || []).push([[42, 2, 5, 7], {
    "./node_modules/@babel/runtime/helpers/construct.js": function(e, t, n) {
        var r = n("./node_modules/@babel/runtime/helpers/setPrototypeOf.js")
          , o = n("./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");
        function a(t, n, s) {
            return o() ? e.exports = a = Reflect.construct : e.exports = a = function(e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var a = new (Function.bind.apply(e, o));
                return n && r(a, n.prototype),
                a
            }
            ,
            a.apply(null, arguments)
        }
        e.exports = a
    },
    "./node_modules/@babel/runtime/helpers/isNativeFunction.js": function(e, t) {
        e.exports = function(e) {
            return -1 !== Function.toString.call(e).indexOf("[native code]")
        }
    },
    "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js": function(e, t) {
        e.exports = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
    },
    "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js": function(e, t, n) {
        var r = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")
          , o = n("./node_modules/@babel/runtime/helpers/setPrototypeOf.js")
          , a = n("./node_modules/@babel/runtime/helpers/isNativeFunction.js")
          , s = n("./node_modules/@babel/runtime/helpers/construct.js");
        function i(t) {
            var n = "function" == typeof Map ? new Map : void 0;
            return e.exports = i = function(e) {
                if (null === e || !a(e))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== n) {
                    if (n.has(e))
                        return n.get(e);
                    n.set(e, t)
                }
                function t() {
                    return s(e, arguments, r(this).constructor)
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                o(t, e)
            }
            ,
            i(t)
        }
        e.exports = i
    },
    "./src/components/analytics/ParselyReporter.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return y
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/extends.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./node_modules/react-redux/es/index.js")
          , d = n("./src/components/session/RequireFlag.tsx")
          , m = n("./src/components/session/WithFlag.tsx")
          , p = n("./src/components/session/WithViewer.tsx")
          , f = n("./src/framework/source/SourceContext.tsx")
          , b = n("./src/util/hooks/useScript.tsx")
          , g = n("./src/util/hooks/useTimer.tsx");
        function h() {
            var e = Object(g.a)();
            return function(t) {
                var n = t.resource
                  , r = t.callback
                  , o = t.max
                  , a = t.ms;
                return function t(n) {
                    var r = n.resource
                      , o = n.callback
                      , a = n.max
                      , s = n.ms
                      , i = n.tries;
                    if (i < a)
                        try {
                            o(r())
                        } catch (n) {
                            e((function() {
                                return t({
                                    resource: r,
                                    callback: o,
                                    max: a,
                                    ms: 2 * s,
                                    tries: i + 1
                                })
                            }
                            ), s)
                        }
                }({
                    resource: n,
                    callback: r,
                    max: o || Number.POSITIVE_INFINITY,
                    ms: a || 1,
                    tries: 0
                })
            }
        }
        function v(e) {
            var t = e.currentLocation
              , n = e.referrer
              , r = e.referrerSource
              , o = function(e) {
                return e ? e.mediumMemberAt ? "member" : "user" : "visitor"
            }(e.viewer);
            return x(t, n, r, o),
            null
        }
        var x = function(e, t, n, r) {
            var a = Object(b.a)("//d1z2jf7jlzjs58.cloudfront.net/keys/medium.com/p.js", {
                id: "parsely-cf"
            })
              , s = o()(a, 2)
              , i = s[0]
              , l = s[1]
              , u = h();
            c.useEffect((function() {
                i && !l && u({
                    resource: function() {
                        return window.PARSELY.beacon
                    },
                    callback: function() {
                        return window.PARSELY.beacon.trackPageView({
                            url: E(e, n),
                            urlref: t,
                            js: 1,
                            data: {
                                viewerStatus: r
                            }
                        })
                    },
                    max: 10
                })
            }
            ), [e, t, i, l])
        };
        function E(e, t) {
            if (!e)
                return "";
            if (!t)
                return e;
            var n = new URL(e)
              , r = Object(f.c)(t)
              , a = r.name
              , s = r.dimension;
            if (a && n.searchParams.set("utm_medium", a),
            s) {
                var i = s.split(".")
                  , l = o()(i, 3)
                  , c = l[0]
                  , u = l[1]
                  , d = l[2];
                c && n.searchParams.set("utm_source", c),
                u && n.searchParams.set("utm_term", u),
                d && n.searchParams.set("utm_content", d)
            }
            return n.toString()
        }
        var y = Object(u.c)((function(e) {
            var t = e.config.isAmp
              , n = e.client.isBot
              , r = e.navigation;
            return {
                isAmp: t,
                isBot: n,
                currentLocation: r.currentLocation,
                referrer: r.referrer,
                referrerSource: r.referrerSource
            }
        }
        ))((function(e) {
            var t = e.isBot
              , n = e.isAmp
              , r = l()(e, ["isBot", "isAmp"]);
            return t || n ? null : c.createElement(d.a, {
                name: "enable_parsely"
            }, c.createElement(m.a, {
                name: "dont_track_user"
            }, (function(e) {
                return e ? null : c.createElement(c.Fragment, null, c.createElement("script", null, "window.PARSELY = window.PARSELY || {autotrack: false}"), c.createElement(p.b, null, (function(e) {
                    return c.createElement(v, s()({}, r, {
                        viewer: e
                    }))
                }
                )))
            }
            )))
        }
        ))
    },
    "./src/components/audio/AudioPlayback.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return F
        }
        )),
        n.d(t, "b", (function() {
            return H
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n.n(d)
          , p = n("./src/components/session/WithViewer.tsx")
          , f = n("./src/components/upsell/UpsellClickable.tsx")
          , b = n("./src/framework/design-system/components/index.ts")
          , g = n("./src/framework/design-system/type/index.ts")
          , h = n("./src/framework/reporter/index.ts")
          , v = n("./src/framework/source/index.ts")
          , x = n("./src/framework/style/index.ts")
          , E = n("./src/framework/track/UpsellPresentationTracker.tsx")
          , y = n("./src/styles/font.ts")
          , O = n("./src/svg/audio-21px.svg");
        function w() {
            return (w = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var C = m.a.createElement("g", {
            transform: "translate(5 4)",
            fillRule: "evenodd"
        }, m.a.createElement("rect", {
            width: 6,
            height: 17,
            rx: 2
        }), m.a.createElement("rect", {
            x: 9,
            width: 6,
            height: 17,
            rx: 2
        }))
          , _ = function(e) {
            return m.a.createElement("svg", w({
                width: 25,
                height: 25
            }, e), C)
        };
        function j() {
            return (j = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var S = m.a.createElement("path", {
            d: "M7 4v17.03a.5.5 0 0 0 .8.4l11.1-8.1a1 1 0 0 0 0-1.62L7.8 3.6A.5.5 0 0 0 7 4z"
        })
          , k = function(e) {
            return m.a.createElement("svg", j({
                width: 25,
                height: 25
            }, e), S)
        };
        function P() {
            var e = o()(["\n  fragment AudioPlayback_post on Post {\n    id\n    audioVersionUrl\n    content(postMeteringOptions: $postMeteringOptions) {\n      isLockedPreviewOnly\n    }\n    ...UpsellClickable_post\n  }\n  ", "\n"]);
            return P = function() {
                return e
            }
            ,
            e
        }
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function T(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var R = {
            duration: 0,
            elapsed: 0,
            playing: !1
        }
          , A = function(e, t) {
            switch (t.type) {
            case "load":
                return T({}, e, {
                    duration: t.duration
                });
            case "play":
                return T({}, e, {
                    playing: !0
                });
            case "pause":
                return T({}, e, {
                    playing: !1
                });
            case "seek":
                return T({}, e, {
                    elapsed: t.clickedTime
                });
            case "progress":
                return T({}, e, {
                    elapsed: t.elapsed
                });
            case "end":
                return T({}, e, {
                    playing: !1
                });
            default:
                return e
            }
        }
          , L = {
            "0%": {
                visibility: "hidden"
            },
            "1%": {
                visibility: "visible",
                opacity: 0
            },
            "100%": {
                opacity: 1
            }
        }
          , M = {
            "0%": {
                opacity: 1,
                visibility: "visible"
            },
            "99%": {
                opacity: 0
            },
            "100%": {
                visibility: "hidden"
            }
        }
          , B = function(e) {
            var t = e.postId
              , n = e.audioVersionUrl
              , r = Object(x.useCx)()
              , o = d.useReducer(A, R)
              , a = s()(o, 2)
              , i = a[0]
              , l = a[1]
              , c = i.duration
              , u = i.elapsed
              , m = i.playing
              , p = Object(x.useKeyframes)({
                fadeInKeyframesName: L,
                fadeOutKeyframesName: M
            })
              , f = p.fadeInKeyframesName
              , v = p.fadeOutKeyframesName
              , E = d.useState(!1)
              , y = s()(E, 2)
              , O = y[0]
              , w = y[1]
              , C = d.useState(!1)
              , j = s()(C, 2)
              , S = j[0]
              , P = j[1]
              , I = d.useCallback((function() {
                w((function(e) {
                    return P(!!e),
                    !1
                }
                ))
            }
            ), [])
              , T = d.useCallback((function() {
                w((function(e) {
                    return P(!e),
                    !0
                }
                ))
            }
            ), [])
              , B = Object(h.c)();
            d.useEffect((function() {
                var e = document.getElementById("audio-player");
                function t() {
                    l({
                        type: "load",
                        duration: e.duration
                    })
                }
                function n() {
                    l({
                        type: "progress",
                        elapsed: e.currentTime
                    })
                }
                function r() {
                    l({
                        type: "end"
                    })
                }
                return e.addEventListener("canplay", t),
                e.addEventListener("timeupdate", n),
                e.addEventListener("ended", r),
                function() {
                    e.removeEventListener("canplay", t),
                    e.removeEventListener("timeupdate", n),
                    e.removeEventListener("ended", r)
                }
            }
            ), []),
            d.useEffect((function() {
                var e = document.getElementById("audio-player");
                Math.round(u) !== Math.round(e.currentTime) && document.hasFocus() && (e.currentTime = u)
            }
            ), [u]);
            var D = function(e) {
                var t = e.children
                  , n = e.onClick
                  , r = Object(x.useCx)();
                return d.createElement("button", {
                    onMouseUp: n,
                    className: r((function(e) {
                        return {
                            borderRadius: "4px",
                            padding: "8px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            boxSizing: "border-box",
                            display: "inline-block",
                            textDecoration: "none",
                            ":focus": {
                                outline: "none"
                            },
                            color: e.baseColor.text.normal,
                            fill: e.baseColor.fill.normal,
                            background: 0,
                            borderColor: e.baseColor.border.dark,
                            ":hover": {
                                cursor: "pointer",
                                color: e.baseColor.text.darker,
                                fill: e.baseColor.fill.darker,
                                borderColor: e.baseColor.border.darker
                            }
                        }
                    }
                    ))
                }, t)
            };
            return d.createElement(b.b, {
                display: "flex",
                justifyContent: "center",
                margin: "20px 0"
            }, d.createElement("audio", {
                id: "audio-player"
            }, d.createElement("source", {
                src: n
            })), d.createElement(b.b, {
                display: "flex",
                alignItems: "center",
                flexGrow: "1"
            }, d.createElement(b.b, {
                marginRight: "16px"
            }, d.createElement((function(e) {
                var n = e.playing
                  , r = d.useCallback((function() {
                    var e = document.getElementById("audio-player");
                    n ? (B.event("audio.end", {
                        postId: t
                    }),
                    e.pause(),
                    l({
                        type: "pause"
                    })) : (B.event("audio.start", {
                        postId: t
                    }),
                    e.play(),
                    l({
                        type: "play"
                    }))
                }
                ), [n]);
                return d.createElement(D, {
                    onClick: r
                }, n ? d.createElement(_, null) : d.createElement(k, null))
            }
            ), {
                playing: m
            })), d.createElement(b.b, {
                display: "flex",
                flexDirection: "column",
                flexGrow: "1"
            }, d.createElement(g.b, {
                scale: "M",
                color: "DARKER"
            }, "Listen to this story"), d.createElement((function(e) {
                var t = e.duration
                  , n = e.elapsed
                  , o = e.isProgressBeanVisible
                  , a = e.onMouseEnterProgressBar
                  , s = e.onMouseLeaveProgressBar
                  , i = e.onTimeUpdate
                  , l = n && t ? Math.max(0, Math.min(n / t * 100, 100)) : 0;
                function c(e) {
                    var t = ~~(e % 60);
                    return [~~(e / 60), t < 10 ? "0" + t : t].join(":")
                }
                function u(e) {
                    var n = e.pageX
                      , r = document.getElementById("audio-player-progress-bar")
                      , o = n - (r.getBoundingClientRect().left + window.scrollX);
                    return t / r.offsetWidth * o
                }
                var m = [function(e) {
                    return {
                        backgroundColor: e.baseColor.fill.normal,
                        position: "relative",
                        marginLeft: "-5px",
                        height: "10px",
                        width: "10px",
                        borderRadius: "50%",
                        left: "".concat(l, "%"),
                        cursor: "pointer",
                        opacity: o ? 1 : 0
                    }
                }
                ];
                return S && m.push({
                    animation: "".concat(o ? f : v, " .2s ease-in-out forwards")
                }),
                d.createElement(b.b, {
                    display: "flex",
                    alignItems: "center"
                }, d.createElement(b.b, {
                    width: "28px",
                    marginRight: "12px",
                    textAlign: "left"
                }, d.createElement(g.b, {
                    scale: "M"
                }, n ? c(n) : "--:--")), d.createElement("div", {
                    className: r((function(e) {
                        return {
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            flexGrow: 1,
                            height: "2px",
                            cursor: "pointer",
                            background: "linear-gradient(to right, ".concat(e.baseColor.fill.normal, " ").concat(l, "%, ").concat(e.baseColor.background.normal, " 0)")
                        }
                    }
                    )),
                    id: "audio-player-progress-bar",
                    onMouseDown: function(e) {
                        function t(e) {
                            i(u(e))
                        }
                        i(u(e)),
                        document.addEventListener("mousemove", t),
                        document.addEventListener("mouseup", (function() {
                            document.removeEventListener("mousemove", t),
                            s()
                        }
                        ))
                    },
                    onMouseEnter: a,
                    onMouseLeave: s
                }, d.createElement("div", {
                    className: r(m),
                    onAnimationEnd: function() {
                        return P(!1)
                    }
                })), d.createElement(b.b, {
                    width: "28px",
                    marginLeft: "12px",
                    textAlign: "right"
                }, d.createElement(g.b, {
                    scale: "M"
                }, t ? c(t) : "--:--")))
            }
            ), {
                elapsed: u,
                duration: c,
                isProgressBeanVisible: O,
                onMouseEnterProgressBar: T,
                onMouseLeaveProgressBar: I,
                onTimeUpdate: function(e) {
                    return l({
                        type: "seek",
                        clickedTime: Math.max(0, Math.min(e, c))
                    })
                }
            }))))
        }
          , D = function(e) {
            return {
                fill: e.baseColor.fill.light,
                marginLeft: "15px",
                marginRight: "15px"
            }
        }
          , N = function(e) {
            return {
                color: e.baseColor.text.light,
                fontSize: "14px"
            }
        }
          , U = function(e) {
            var t = e.post
              , n = Object(x.useCx)();
            return d.createElement(b.A, {
                columns: 8,
                display: "flex",
                flexShrink: "0",
                margin: "30px 0",
                padding: "20px 12px",
                backgroundColor: "BASE_LIGHT"
            }, d.createElement(O.a, {
                className: n(D)
            }), d.createElement(b.d, {
                className: n([Object(y.h)(), N])
            }, "Psst... there’s an audio version of this story.", " ", d.createElement(f.a, {
                post: t,
                linkStyle: "OBVIOUS"
            }, "Upgrade to listen")))
        };
        function F(e) {
            var t = e.post
              , n = t.id
              , r = t.audioVersionUrl
              , o = (t.content || {}).isLockedPreviewOnly;
            return d.createElement(b.b, {
                marginTop: "30px"
            }, d.createElement(p.b, null, (function(e) {
                return e && !!e.mediumMemberAt || !o ? d.createElement(B, {
                    postId: n,
                    audioVersionUrl: r
                }) : d.createElement(v.b, {
                    source: {
                        dimension: "audio_exclusive",
                        name: "upgrade_membership",
                        postId: n
                    }
                }, d.createElement(E.a, null, d.createElement(U, {
                    post: t
                })))
            }
            )))
        }
        var H = u()(P(), f.b)
    },
    "./src/components/broadcast-banner/BroadcastBanner.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return y
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/lodash/cloneDeep.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n("./src/components/broadcast-banner/useCdcMessaging.tsx")
          , p = n("./src/components/cta/TextCTA.tsx")
          , f = n("./src/framework/design-system/components/index.ts")
          , b = n("./src/framework/style/index.ts")
          , g = n("./src/svg/exclamation-25px.svg");
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var x = function(e) {
            return {
                width: "20px",
                height: "20px",
                fill: e.baseColor.text.lighter
            }
        }
          , E = function(e) {
            var t = e.parsedMessage;
            return d.createElement(f.b, {
                marginLeft: "8px",
                maxWidth: "calc(100% - 33px)"
            }, t.map((function(e, t) {
                return "string" == typeof e ? d.createElement(d.Fragment, {
                    key: "parsedBroadcastMessage-".concat(t)
                }, e) : d.createElement(f.t, {
                    key: "parsedBroadcastMessage-".concat(t),
                    linkStyle: "OBVIOUS",
                    href: e.href,
                    target: "_blank"
                }, e.text)
            }
            )))
        }
          , y = function(e) {
            var t = e.tier
              , n = e.topics
              , r = e.tags
              , o = e.isLocked
              , a = e.postId
              , i = e.isTopicPage
              , c = e.postPublishDate
              , h = Object(b.useCx)()
              , y = Object(m.a)({
                tier: t,
                topics: n,
                tags: r,
                flag: "covid_19_cdc_banner",
                isLocked: o,
                postId: a,
                isTopicPage: i,
                postPublishDate: c
            })
              , O = y.shouldShowCdcMessaging
              , w = y.message
              , C = d.useCallback((function() {
                return function(e) {
                    for (var t = u()(e), n = t.markups, r = t.text, o = [r], a = 0, i = Object.entries(n); a < i.length; a++) {
                        var c = l()(i[a], 2)
                          , d = c[0]
                          , m = c[1]
                          , p = o.pop();
                        if (!p || "string" != typeof p) {
                            o = [r];
                            break
                        }
                        var f = p.substring(0, m.start)
                          , b = p.substring(m.start, m.end)
                          , g = p.substring(m.end);
                        o = [].concat(s()(o), [f, v({
                            text: b
                        }, m), g]);
                        for (var h = Number(d) + 1; h < n.length; h++)
                            n[h].start = n[h].start - m.end,
                            n[h].end = n[h].end - m.end
                    }
                    return o
                }(w)
            }
            ), [w]);
            if (!O)
                return null;
            var _ = C();
            return d.createElement(p.b, {
                scale: p.a.S
            }, d.createElement(f.b, {
                display: "flex"
            }, d.createElement(g.a, {
                className: h(x)
            }), d.createElement(E, {
                parsedMessage: _
            })))
        }
    },
    "./src/components/broadcast-banner/useCdcMessaging.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n("./node_modules/react-redux/es/index.js")
          , o = n("./src/components/session/useFlag.tsx")
          , a = {
            1: "tierA",
            2: "tierA",
            other: "tierA"
        }
          , s = function(e) {
            var t = e.tags
              , n = void 0 === t ? [] : t
              , s = e.topics
              , i = void 0 === s ? [] : s
              , l = e.tier
              , c = e.flag
              , u = e.isLocked
              , d = e.isTopicPage
              , m = e.postId
              , p = e.postPublishDate
              , f = Boolean(Object(o.a)(c))
              , b = Object(r.f)((function(e) {
                return {
                    sharedCdcMessaging: e.config.sharedCdcMessaging
                }
            }
            ), r.d).sharedCdcMessaging
              , g = b.COVID_APPLICABLE_TAG_SLUGS
              , h = b.COVID_APPLICABLE_TOPIC_NAMES
              , v = b.COVID_APPLICABLE_TOPIC_NAMES_FOR_TOPIC_PAGE
              , x = b.COVID_MESSAGES
              , E = b.COVID_BANNER_POST_ID_OVERRIDE_WHITELIST
              , y = {
                shouldShowCdcMessaging: !1,
                message: x[a.other]
            };
            if (E.includes(m || ""))
                return y;
            if (p && p < 15778368e5)
                return y;
            var O = g.map((function(e) {
                return e.toLowerCase()
            }
            ))
              , w = (d ? v : h).map((function(e) {
                return e.toLowerCase()
            }
            ))
              , C = n.map((function(e) {
                return O.includes((null == e ? void 0 : e.toLowerCase()) || "")
            }
            )).includes(!0)
              , _ = i.map((function(e) {
                return w.includes((null == e ? void 0 : e.toLowerCase()) || "")
            }
            )).includes(!0);
            return {
                shouldShowCdcMessaging: f && !(!C && !_),
                message: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []
                      , o = arguments.length > 4 ? arguments[4] : void 0
                      , s = r.some((function(e) {
                        return t.includes(e ? e.toLowerCase() : "")
                    }
                    ));
                    return s && o && [1, 2].includes(n || 0) ? e.paywall : null == n ? e[a.other] : e[a[n] || "tierB"]
                }(x, w, l, i, u)
            }
        }
    },
    "./src/components/collection/CollectionFollowButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return R
        }
        )),
        n.d(t, "b", (function() {
            return A
        }
        )),
        n.d(t, "a", (function() {
            return H
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/extends.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , u = n("./node_modules/graphql-tag/src/index.js")
          , d = n.n(u)
          , m = n("./node_modules/react/index.js")
          , p = n("./node_modules/react-redux/es/index.js")
          , f = n("./src/components/session/WithViewer.tsx")
          , b = n("./src/components/style/BaseThemeProvider.tsx")
          , g = n("./src/components/susi/SusiClickable.tsx")
          , h = n("./src/framework/design-system/components/index.ts")
          , v = n("./src/framework/design-system/components/portal/ui/Toast.tsx")
          , x = n("./src/framework/design-system/type/index.ts")
          , E = n("./src/framework/reporter/index.ts")
          , y = n("./src/framework/source/index.ts")
          , O = n("./src/framework/style/index.ts")
          , w = n("./src/framework/track/index.ts")
          , C = n("./src/svg/arrow-down-21px.svg")
          , _ = n("./src/util/routes.ts");
        function j() {
            var e = l()(["\n  mutation UnsubscribeCollectionEmailsMutation($id: ID!) {\n    unsubscribeCollectionEmails(collectionId: $id) {\n      __typename\n      id\n      isUserSubscribedToCollectionEmails\n    }\n  }\n"]);
            return j = function() {
                return e
            }
            ,
            e
        }
        function S() {
            var e = l()(["\n  mutation SubscribeCollectionEmailsMutation($id: ID!) {\n    subscribeCollectionEmails(collectionId: $id) {\n      __typename\n      id\n      isUserSubscribedToCollectionEmails\n    }\n  }\n"]);
            return S = function() {
                return e
            }
            ,
            e
        }
        function k() {
            var e = l()(["\n  mutation UnfollowCollectionMutation($id: ID!) {\n    unfollowCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerIsFollowing\n    }\n  }\n"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        function P() {
            var e = l()(["\n  mutation FollowCollectionMutation($id: ID!) {\n    followCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerIsFollowing\n      isUserSubscribedToCollectionEmails\n    }\n  }\n"]);
            return P = function() {
                return e
            }
            ,
            e
        }
        function I() {
            var e = l()(["\n  fragment CollectionFollowButton_collection on Collection {\n    __typename\n    id\n    viewerIsFollowing\n    name\n    viewerIsSubscribedToLetters\n    canToggleEmail\n    slug\n    isUserSubscribedToCollectionEmails\n    ...collectionUrl_collection\n    ...SusiClickable_collection\n  }\n  ", "\n  ", "\n"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        function T() {
            var e = l()(["\n  fragment CollectionFollowButton_post on Post {\n    __typename\n    id\n  }\n"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        var R = d()(T())
          , A = d()(I(), _.J, g.b)
          , L = function(e) {
            var t = e.children
              , n = e.extraTopPadding
              , r = e.extraBottomPadding
              , o = e.padding
              , a = e.margin
              , s = e.borderTop;
            return m.createElement(h.b, {
                padding: o || "".concat(n ? "20px" : "5px", " 20px ").concat(r ? "20px" : "5px", " 20px"),
                margin: a,
                borderTop: s ? "BASE_LIGHTER" : "NONE"
            }, t)
        }
          , M = d()(P())
          , B = d()(k())
          , D = d()(S())
          , N = d()(j())
          , U = {
            position: "relative",
            left: "6px"
        }
          , F = function(e) {
            return {
                followCollectionMutation: function(e) {
                    var t = Object(c.d)(M)
                      , n = s()(t, 1)[0];
                    return m.useCallback((function() {
                        return n({
                            variables: {
                                id: e.id
                            },
                            optimisticResponse: {
                                followCollection: {
                                    __typename: "Collection",
                                    id: e.id,
                                    viewerIsFollowing: !0,
                                    isUserSubscribedToCollectionEmails: !1
                                }
                            }
                        })
                    }
                    ), [e])
                }(e),
                unfollowCollectionMutation: function(e) {
                    var t = Object(c.d)(B)
                      , n = s()(t, 1)[0];
                    return m.useCallback((function() {
                        return n({
                            variables: {
                                id: e.id
                            },
                            optimisticResponse: {
                                unfollowCollection: {
                                    __typename: "Collection",
                                    id: e.id,
                                    viewerIsFollowing: !1
                                }
                            }
                        })
                    }
                    ), [e])
                }(e),
                subscribeCollectionEmailsMutation: function(e) {
                    var t = Object(c.d)(D)
                      , n = s()(t, 1)[0];
                    return m.useCallback((function() {
                        return n({
                            variables: {
                                id: e.id
                            },
                            optimisticResponse: {
                                subscribeCollectionEmails: {
                                    __typename: "Collection",
                                    id: e.id,
                                    isUserSubscribedToCollectionEmails: !0
                                }
                            }
                        })
                    }
                    ), [e])
                }(e),
                unsubscribeCollectionEmailsMutation: function(e) {
                    var t = Object(c.d)(N)
                      , n = s()(t, 1)[0];
                    return m.useCallback((function() {
                        return n({
                            variables: {
                                id: e.id
                            },
                            optimisticResponse: {
                                unsubscribeCollectionEmails: {
                                    __typename: "Collection",
                                    id: e.id,
                                    isUserSubscribedToCollectionEmails: !1
                                }
                            }
                        })
                    }
                    ), [e])
                }(e)
            }
        }
          , H = function(e) {
            var t = e.buttonSize
              , n = e.collection
              , r = e.isPopoverVisible
              , a = e.isToastVisible
              , i = e.post
              , l = e.simpleButton
              , c = Object(O.useCx)()
              , u = Object(p.f)((function(e) {
                return e.config.isAmp
            }
            ))
              , d = n && n.name ? n.name : ""
              , _ = Object(E.c)()
              , j = Object(y.d)()
              , S = m.useState(!!r)
              , k = s()(S, 2)
              , P = k[0]
              , I = k[1]
              , T = m.useState(!!a)
              , R = s()(T, 2)
              , A = R[0]
              , M = R[1]
              , B = F(n)
              , D = B.followCollectionMutation
              , N = B.unfollowCollectionMutation
              , H = B.subscribeCollectionEmailsMutation
              , G = B.unsubscribeCollectionEmailsMutation
              , q = m.useCallback((function() {
                I(!1)
            }
            ), []);
            m.useEffect((function() {
                return w.a.on("scroll", q),
                function() {
                    w.a.off("scroll", q)
                }
            }
            ), [q]);
            var W = m.useCallback((function() {
                n.viewerIsFollowing || (_.event("collection.followed", {
                    collectionId: n.id,
                    followSource: j
                }),
                D()),
                I(!0)
            }
            ), [n])
              , $ = m.useCallback((function() {
                _.event("collection.unfollowed", {
                    collectionId: n.id,
                    followSource: j
                }),
                N(),
                I(!1)
            }
            ), [])
              , Y = m.useCallback((function() {
                I(!1)
            }
            ), [])
              , K = m.useCallback((function(e) {
                _.event("client.action", {
                    action: "toggle-subscribe-collection-emails",
                    eventType: "click",
                    classAttribute: "checkbox"
                }),
                e.target.checked ? H() : G(),
                M(!0)
            }
            ), [])
              , Q = m.useCallback((function() {
                M(!1)
            }
            ), []);
            if (u)
                return null;
            if (l)
                return z(n, i, W, $);
            var X = !!n.isUserSubscribedToCollectionEmails;
            return m.createElement(y.b, {
                source: {
                    susiEntry: "follow_card"
                }
            }, m.createElement(h.w, {
                isVisible: !!P,
                hide: Y,
                popoverRenderFn: function() {
                    return m.createElement(h.b, {
                        width: "280px",
                        display: "flex",
                        flexDirection: "column"
                    }, m.createElement(L, {
                        extraTopPadding: !0
                    }, m.createElement(x.c, {
                        scale: "XS"
                    }, "You‘re following ", d)), m.createElement(L, null, m.createElement(x.b, {
                        scale: "M"
                    }, "You‘ll now see more stories from ", d, " across Medium.")), n.canToggleEmail && m.createElement(L, null, m.createElement(x.b, {
                        scale: "M"
                    }, m.createElement("label", null, m.createElement(h.b, {
                        display: "inline",
                        marginRight: "5px"
                    }, m.createElement("input", {
                        type: "checkbox",
                        onChange: K,
                        checked: X
                    })), "Receive emails from this publication"))), m.createElement(L, {
                        extraBottomPadding: !0
                    }, m.createElement(x.b, {
                        scale: "M"
                    }, m.createElement(h.t, {
                        onClick: $,
                        linkStyle: "OBVIOUS",
                        inline: !0
                    }, "Unfollow publication"))))
                }
            }, m.createElement((function(e) {
                var t = e.children
                  , r = e.buttonSize
                  , o = void 0 === r ? "SMALL" : r
                  , a = e.buttonStyle;
                return m.createElement(f.b, null, (function(e) {
                    return e ? m.createElement(h.c, {
                        size: o,
                        onClick: W,
                        buttonStyle: a
                    }, t) : m.createElement(g.a, {
                        collection: n,
                        buttonStyle: "OBVIOUS",
                        isButton: !0,
                        buttonSize: o,
                        operation: "register",
                        actionUrl: V(n, i) || ""
                    }, t)
                }
                ))
            }
            ), o()({
                buttonStyle: n.viewerIsFollowing ? "STRONG" : "OBVIOUS"
            }, t), n.viewerIsFollowing ? "Following" : "Follow", n.viewerIsFollowing && m.createElement("span", {
                className: c(U)
            }, m.createElement(C.a, null)))), m.createElement(b.b, null, m.createElement(v.a, {
                isVisible: !!A,
                hide: Q,
                duration: 2e3
            }, m.createElement(x.b, {
                scale: "M"
            }, X ? "You‘ll now receive emails from ".concat(d, ".") : "You‘ll no longer receive emails from ".concat(d, ".")))))
        }
          , V = function(e, t) {
            return e.slug && (t && t.id ? Object(_.Xb)(e.slug, t.id) : Object(_.Wb)(e.slug))
        }
          , z = function(e, t, n, r) {
            return m.createElement(y.b, {
                source: {
                    susiEntry: "follow_card"
                }
            }, m.createElement(f.b, null, (function(o) {
                return o ? m.createElement(h.c, {
                    size: "REGULAR",
                    onClick: e.viewerIsFollowing ? r : n,
                    buttonStyle: e.viewerIsFollowing ? "STRONG" : "OBVIOUS"
                }, e.viewerIsFollowing ? "Following" : "Follow") : m.createElement(g.a, {
                    collection: e,
                    buttonStyle: "OBVIOUS",
                    isButton: !0,
                    buttonSize: "REGULAR",
                    operation: "register",
                    actionUrl: V(e, t) || ""
                }, e.viewerIsFollowing ? "Following" : "Follow")
            }
            )))
        }
    },
    "./src/components/collection/CollectionLogo.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return h
        }
        )),
        n.d(t, "b", (function() {
            return v
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/publisher/auroraHooks.ts")
          , c = n("./src/components/ui/image/index.ts")
          , u = n("./src/framework/design-system/components/index.ts")
          , d = n("./src/framework/design-system/type/useTypeRules.ts")
          , m = n("./src/framework/style/index.ts")
          , p = n("./src/schema-types/globalTypes.ts")
          , f = n("./src/util/miroImage.ts");
        function b() {
            var e = o()(["\n  fragment CollectionLogo_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n"]);
            return b = function() {
                return e
            }
            ,
            e
        }
        function g() {
            var e = o()(["\n  fragment CollectionLogo_collection on Collection {\n    ...auroraHooks_publisher\n    name\n    isAuroraVisible\n    logo {\n      id\n      originalWidth\n      originalHeight\n    }\n  }\n  ", "\n"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        function h(e) {
            var t = e.clamp
              , n = void 0 === t ? 1 : t
              , r = e.collection
              , o = e.maxWidth
              , a = e.maxHeight
              , s = e.textScale
              , b = void 0 === s ? "S" : s
              , g = e.withTextColorSubtle
              , h = void 0 !== g && g
              , v = e.customNameColor
              , x = e.customLogoImage
              , E = e.nameTreatment
              , y = Object(m.useCx)()
              , O = Object(d.a)({
                name: "heading",
                scale: b,
                clamp: n
            })
              , w = function(e, t) {
                return function(n) {
                    return {
                        color: t || n.baseColor.text[e]
                    }
                }
            }(h ? "normal" : "dark", v)
              , C = Object(l.f)(r) && void 0 !== x ? x : r.logo;
            if (!C || !C.id || E === p.k.NAME_TREATMENT_TEXT)
                return i.createElement("span", {
                    className: y([O, w])
                }, r.name || "");
            var _ = C.id
              , j = C.originalWidth || 100
              , S = C.originalHeight || 100;
            if (o && j > o) {
                var k = j / o;
                j = Math.floor(j / k),
                S = Math.floor(S / k)
            }
            if (a && S > a) {
                var P = S / a;
                j = Math.floor(j / P),
                S = Math.floor(S / P)
            }
            return i.createElement(u.b, {
                width: "".concat(j, "px"),
                height: "".concat(S, "px")
            }, i.createElement(c.c, {
                miroId: _,
                alt: r.name || "Publication logo",
                width: j,
                height: S,
                strategy: f.a.Resample
            }))
        }
        var v = s()(g(), l.a);
        s()(b())
    },
    "./src/components/collection/CollectionMetabar.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return J
        }
        )),
        n.d(t, "a", (function() {
            return Z
        }
        )),
        n.d(t, "c", (function() {
            return ee
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n("./node_modules/react-redux/es/index.js")
          , p = n("./node_modules/@babel/runtime/helpers/extends.js")
          , f = n.n(p)
          , b = n("./src/components/collection/CollectionLogo.tsx")
          , g = n("./src/framework/design-system/components/index.ts")
          , h = n("./src/framework/design-system/type/Type.tsx")
          , v = n("./src/framework/style/index.ts")
          , x = n("./src/styles/breakpoints.ts");
        function E() {
            var e = o()(["\n  fragment CollectionNavItems_collection on Collection {\n    navItems {\n      title\n      url\n      type\n    }\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        var y = function(e) {
            var t;
            return t = {
                listStyleType: "none",
                margin: 0,
                lineHeight: "40px",
                whiteSpace: "nowrap",
                overflowX: "auto",
                display: "flex",
                alignItems: "flex-start"
            },
            s()(t, x.sm(e), {
                display: "none"
            }),
            s()(t, "marginTop", "".concat(20, "px")),
            s()(t, "paddingTop", "".concat(20, "px")),
            s()(t, "height", "".concat(80, "px")),
            t
        }
          , O = {
            display: "flex",
            alignItems: "center",
            height: "".concat(20, "px"),
            marginRight: "15px",
            marginLeft: "15px",
            ":first-child": {
                marginLeft: 0
            }
        }
          , w = function(e) {
            return {
                height: "".concat(20, "px"),
                minWidth: "1px",
                backgroundColor: e.baseColor.border.normal
            }
        };
        function C(e) {
            var t = e.navItems
              , n = e.withTextColorSubtle
              , r = Object(v.useCx)()
              , o = Object(v.useTheme)();
            return t ? d.createElement("ul", {
                className: r(y)
            }, t.map((function(e, t) {
                return e.url && d.createElement(d.Fragment, {
                    key: t
                }, "EXTERNAL_LINK_NAV_ITEM" === e.type && d.createElement("span", {
                    className: r(w)
                }), d.createElement("li", {
                    className: r(O)
                }, d.createElement(h.a, {
                    fontConfig: o.newFonts.detail,
                    scale: "S",
                    tag: "span",
                    additionalRules: (a = n ? "lighter" : "normal",
                    function(e) {
                        return {
                            color: e.baseColor.text[a],
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }
                    }
                    )
                }, d.createElement(g.t, {
                    href: e.url
                }, e.title))));
                var a
            }
            ))) : null
        }
        var _ = u()(E())
          , j = n("./src/components/navigation/Anchor.tsx")
          , S = n("./src/framework/design-system/typedefs/responsiveStyles.ts")
          , k = n("./src/util/routes.ts")
          , P = n("./src/util/theme.ts");
        function I() {
            var e = o()(["\n  fragment CollectionMetabarBottom_collection on Collection {\n    slug\n    ...CollectionNavItems_collection\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...ThemeUtilTintBackground_collection\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        var T = u()(I(), _, b.b, k.J, P.b)
          , R = Object(m.c)((function(e) {
            return {
                currentLocation: e.navigation.currentLocation
            }
        }
        ))((function(e) {
            var t = e.collection
              , n = e.currentLocation
              , r = e.shouldShowCollectionLogo
              , o = void 0 === r || r
              , a = e.withBorderTop
              , i = void 0 !== a && a
              , l = e.withTextColorSubtle
              , c = void 0 !== l && l
              , u = e.breakpoint
              , m = void 0 === u ? S.a.sm : u
              , p = t.navItems.slice().length > 0;
            return d.createElement(g.b, f()({
                backgroundColor: "BACKGROUND",
                display: p ? "block" : "none",
                borderTop: i ? "BASE_LIGHTER" : "NONE"
            }, s()({}, m, {
                display: "block"
            })), d.createElement(g.v, null, d.createElement(g.b, {
                display: "flex",
                alignItems: "center",
                height: "54px",
                overflow: "hidden"
            }, o ? d.createElement(g.b, {
                flexShrink: "0",
                marginRight: "40px"
            }, d.createElement(j.a, {
                href: Object(k.I)(t, n)
            }, d.createElement(b.a, {
                collection: t,
                maxWidth: 300,
                maxHeight: 36,
                textScale: "S",
                withTextColorSubtle: c
            }))) : null, d.createElement(g.b, {
                flexShrink: "1",
                overflow: "auto"
            }, d.createElement(C, {
                navItems: t.navItems,
                withTextColorSubtle: c
            })))))
        }
        ))
          , A = n("./src/components/metabar/Logo.tsx")
          , L = n("./src/components/metabar/MetabarActions.tsx")
          , M = n("./src/components/metabar/MetabarActionsLO.tsx")
          , B = n("./src/components/metabar/OpenInApp.tsx")
          , D = n("./src/components/metabar/constants.ts")
          , N = n("./src/components/session/WithViewer.tsx")
          , U = n("./src/styles/zIndex.ts");
        function F() {
            var e = o()(["\n  fragment CollectionMetabarTop_collection on Collection {\n    slug\n    ...CollectionLogo_collection\n    ...collectionUrl_collection\n    ...MetabarActions_publisher\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return F = function() {
                return e
            }
            ,
            e
        }
        var H = u()(F(), b.b, k.J, L.b)
          , V = Object(m.c)((function(e) {
            return {
                authDomain: e.config.authDomain,
                currentLocation: e.navigation.currentLocation
            }
        }
        ))((function(e) {
            var t = e.authDomain
              , n = e.collection
              , r = e.currentLocation
              , o = e.isAmp
              , a = e.post
              , i = e.shouldShowCollectionLogo
              , l = e.withMonogramDark
              , c = e.setIsMetabarLocked
              , u = e.breakpoint
              , m = void 0 === u ? S.a.sm : u
              , p = e.hideOpenInAppLink
              , h = void 0 !== p && p;
            return d.createElement(g.b, {
                backgroundColor: "BACKGROUND"
            }, d.createElement(g.v, null, d.createElement(g.b, f()({
                display: "flex",
                alignItems: "center",
                height: "".concat(D.a, "px")
            }, s()({}, m, {
                display: "flex",
                height: "".concat(D.c, "px")
            })), d.createElement(g.b, {
                display: "flex",
                alignItems: "center",
                flexGrow: "1",
                zIndex: U.a.metabar
            }, d.createElement(j.a, {
                href: "https://".concat(t, "/"),
                "aria-label": "Homepage"
            }, d.createElement(A.a, {
                dark: l
            })), i && d.createElement(d.Fragment, null, d.createElement(g.b, f()({
                height: "24px",
                width: "1px",
                marginLeft: "15px",
                marginRight: "14px",
                borderLeft: "BASE_LIGHT"
            }, s()({}, m, {
                display: "none"
            }))), d.createElement(g.b, s()({}, m, {
                display: "none"
            }), d.createElement(j.a, {
                href: Object(k.I)(n, r)
            }, d.createElement(b.a, {
                collection: n,
                maxWidth: 240,
                maxHeight: 36,
                textScale: "M"
            })))), d.createElement(N.b, null, (function(e) {
                return !h && e ? d.createElement(B.a, {
                    postId: a && a.id,
                    collectionSlug: n.slug
                }) : d.createElement(d.Fragment, null)
            }
            ))), d.createElement(g.b, {
                flexGrow: "0",
                zIndex: U.a.metabar
            }, o ? d.createElement(M.a, {
                withoutConversionButton: !0,
                post: a,
                collectionSlug: n && n.slug || null
            }) : d.createElement(L.c, {
                post: a,
                publisher: n,
                withoutConversionButton: !0,
                setIsMetabarLocked: c,
                collectionSlug: n && n.slug || null
            })))))
        }
        ))
          , z = n("./src/components/metabar/MetabarLayout.tsx")
          , G = n("./src/components/publisher/auroraHooks.ts")
          , q = n("./src/components/session/useFlag.tsx")
          , W = n("./src/metadata/Favicon.tsx");
        function $() {
            var e = o()(["\n  fragment CollectionMetabar_collection on Collection {\n    id\n    colorBehavior\n    isAuroraPilot\n    isAuroraVisible\n    favicon {\n      id\n    }\n    ...CollectionMetabarTop_collection\n    ...CollectionMetabarBottom_collection\n    ...auroraHooks_publisher\n    ...collectionDefaultBackgroundTheme_collection\n    ...collectionTintBackgroundTheme_collection\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return $ = function() {
                return e
            }
            ,
            e
        }
        function Y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function K(e) {
            return D.a + (e ? D.b : 0)
        }
        function Q(e) {
            return D.c + (e ? D.b : 0)
        }
        function X(e) {
            var t, n = e.post, r = e.collection, o = e.isAmp, a = e.isFixed, s = e.behavior, i = e.shouldShowBottomMetabar, c = void 0 === i || i, u = e.hideOpenInAppLink, p = Object(v.useTheme)(), f = d.useState(!1), b = l()(f, 2), h = b[0], x = b[1], E = d.useState(!1), y = l()(E, 2), O = y[0], w = y[1], C = Object(m.f)((function(e) {
                return e.client.isNativeMedium
            }
            )), _ = "ACCENT_COLOR" === r.colorBehavior, j = r.navItems && r.navItems.length > 0, S = c && j, k = !(S || O), I = _ || S || O, T = !!Object(q.a)("make_nav_sticky"), A = Object(G.d)(r), L = T && O;
            if (d.useEffect((function() {
                window.innerWidth < p.breakpoints.md && w(!0)
            }
            ), []),
            C)
                return null;
            var M = c && d.createElement(g.F, {
                theme: _ ? Object(P.d)(r, p, A) : Object(P.f)(r, p, A)
            }, d.createElement(R, {
                collection: r,
                withBorderTop: _,
                withTextColorSubtle: _
            }));
            return d.createElement(d.Fragment, null, d.createElement(z.a, {
                height: K(j && c),
                heightSm: Q(!L && c),
                isFixed: L || a,
                isLocked: L || h,
                behavior: s,
                marginBottom: 0,
                marginBottomSm: 0
            }, d.createElement(W.a, {
                faviconImageId: null == r || null === (t = r.favicon) || void 0 === t ? void 0 : t.id
            }), d.createElement(g.F, {
                theme: I ? Object(P.d)(r, p, A) : Object(P.f)(r, p, A)
            }, d.createElement(V, {
                post: n,
                collection: r,
                isAmp: o,
                shouldShowCollectionLogo: k,
                withMonogramDark: I,
                setIsMetabarLocked: x,
                hideOpenInAppLink: u
            })), !L && M), L && M)
        }
        function J(e) {
            var t, n = e.post, r = e.collection, o = e.isAmp, a = e.isFixed, i = e.behavior, c = e.shouldShowCollectionLogo, u = void 0 === c || c, p = e.shouldShowBottomMetabar, f = void 0 === p || p, b = e.hideOpenInAppLink, h = Object(v.useTheme)(), x = Object(G.d)(r), E = !!Object(q.a)("make_nav_sticky"), y = "ACCENT_COLOR" === r.colorBehavior, O = y ? Object(P.d)(r, h, x) : Object(P.f)(r, h, x), w = d.useState(!1), C = l()(w, 2), _ = C[0], j = C[1], k = E && _, I = y ? "#E5E5E5" : O.baseColor.border.light, T = d.useState(!1), A = l()(T, 2), L = A[0], M = A[1], B = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach((function(t) {
                        s()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, r, {
                navItems: []
            }), D = B.navItems && B.navItems.length > 0, N = f && (u || D), U = Object(m.f)((function(e) {
                return e.client.isNativeMedium
            }
            ));
            if (d.useEffect((function() {
                window.innerWidth < h.breakpoints.md && j(!0)
            }
            ), []),
            U)
                return null;
            var F = function(e) {
                return {
                    borderTop: "1px solid ".concat(e.baseColor.border.lighter),
                    opacity: .4
                }
            }
              , H = d.createElement(R, {
                collection: B,
                shouldShowCollectionLogo: u,
                withBorderTop: y,
                withTextColorSubtle: y,
                breakpoint: S.a.xs
            });
            return d.createElement(d.Fragment, null, d.createElement(z.a, {
                borderColor: I,
                height: K(D && f),
                heightSm: Q(!k && u && f),
                isFixed: k || a,
                isLocked: k || L,
                behavior: i,
                marginBottom: 0,
                marginBottomSm: 0,
                breakpoint: S.a.xs
            }, d.createElement(W.a, {
                faviconImageId: null == r || null === (t = r.favicon) || void 0 === t ? void 0 : t.id
            }), d.createElement(g.F, {
                theme: O
            }, d.createElement(g.b, {
                backgroundColor: "BACKGROUND"
            }, d.createElement(V, {
                post: n,
                collection: B,
                isAmp: o,
                shouldShowCollectionLogo: u && (!D || !f),
                withMonogramDark: !y,
                setIsMetabarLocked: M,
                breakpoint: S.a.xs,
                hideOpenInAppLink: b
            }), N && !y ? d.createElement(v.WithCx, null, (function(e) {
                return d.createElement("div", {
                    className: e(F)
                })
            }
            )) : null, !k && N && H))), k && N && d.createElement(g.F, {
                theme: O
            }, d.createElement(g.b, {
                backgroundColor: "BACKGROUND"
            }, H)))
        }
        function Z(e) {
            return e.collection.isAuroraPilot || e.collection.isAuroraVisible ? d.createElement(J, e) : d.createElement(X, e)
        }
        var ee = u()($(), H, T, G.a, P.e, P.g)
    },
    "./src/components/collection/package/TruncatedPostCard.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return Ie
        }
        )),
        n.d(t, "b", (function() {
            return Ae
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/extends.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n.n(d)
          , p = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , f = n.n(p)
          , b = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , g = n("./node_modules/react-redux/es/index.js")
          , h = n("./src/components/mutations/DeletePostMutation.tsx")
          , v = n("./src/components/mutations/SetPinnedAtMutation.tsx")
          , x = n("./src/components/post/footer/actions/PubStatusMutations.tsx")
          , E = n("./src/components/ui/PopoverMenu.tsx")
          , y = n("./src/framework/design-system/components/index.ts")
          , O = n("./src/framework/style/index.ts")
          , w = n("./src/svg/overflow-dots-filled-25px.svg")
          , C = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function() {
                var e = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var o, a = t[Symbol.iterator](); !(e = (o = a.next()).done); e = !0) {
                        (0,
                        o.value)()
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        e || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
            }
        }
          , _ = n("./src/util/hooks/useToggle.tsx")
          , j = n("./src/util/routes.ts");
        function S() {
            var e = o()(["\n  fragment TruncatedPostCardEditorWriterButton_post on Post {\n    id\n    pinnedAt\n    collection {\n      id\n      name\n      slug # Needed for rejectPostFromPub (not currently exposed as a reusable fragment)\n    }\n  }\n"]);
            return S = function() {
                return e
            }
            ,
            e
        }
        var k = function(e) {
            return {
                fill: e.baseColor.fill.normal,
                ":hover": {
                    fill: e.baseColor.fill.darker
                },
                ":focus": {
                    fill: e.baseColor.fill.darker
                }
            }
        }
          , P = function(e) {
            var t = e.post
              , n = e.isEditor
              , r = e.isWriter
              , o = Object(O.useCx)()
              , a = Object(g.f)((function(e) {
                return e.config.authDomain
            }
            ))
              , i = t.id
              , l = t.collection
              , c = t.pinnedAt
              , u = l || {
                id: "",
                name: ""
            }
              , m = u.id
              , p = u.name
              , S = Object(_.a)(!1)
              , P = f()(S, 3)
              , I = P[0]
              , T = P[1]
              , R = P[2]
              , A = Object(b.d)(v.a)
              , L = f()(A, 1)[0]
              , M = d.useCallback((function() {
                R(),
                L({
                    variables: {
                        postId: i,
                        collectionId: m,
                        pinnedAt: !c
                    }
                }).then((function() {
                    return window.location.reload()
                }
                ))
            }
            ), [i, m, R, c, L])
              , B = Object(x.b)(t)
              , D = Object(_.a)(!1)
              , N = f()(D, 3)
              , U = N[0]
              , F = N[1]
              , H = N[2]
              , V = d.useCallback((function() {
                B(l).then((function() {
                    return window.location.reload()
                }
                ))
            }
            ), [m, B])
              , z = Object(h.a)(i)
              , G = f()(z, 1)[0]
              , q = Object(_.a)(!1)
              , W = f()(q, 3)
              , $ = W[0]
              , Y = W[1]
              , K = W[2]
              , Q = d.useCallback((function() {
                G().then((function() {
                    return window.location.reload()
                }
                ))
            }
            ), [G]);
            if (!m)
                return null;
            var X = {
                buttonStyle: "ERROR",
                cancelText: "Cancel"
            };
            return d.createElement(d.Fragment, null, d.createElement(y.h, s()({}, X, {
                isVisible: U,
                onConfirm: V,
                hide: H,
                titleText: "Remove story from ".concat(p),
                confirmText: "Remove",
                isDestructiveAction: !0
            }), "This will remove this story from the publication. Are you sure?"), d.createElement(y.h, s()({}, X, {
                isVisible: $,
                onConfirm: Q,
                hide: K,
                titleText: "Delete story",
                confirmText: "Delete",
                isDestructiveAction: !0
            }), "Are you sure you want to delete this story?"), d.createElement(y.w, {
                hide: R,
                isVisible: I,
                popoverRenderFn: function() {
                    return d.createElement(E.a, null, n && d.createElement(E.b, null, d.createElement(y.t, {
                        onClick: M
                    }, c ? "Unpin" : "Pin", " story")), d.createElement(E.b, null, d.createElement(y.t, {
                        href: Object(j.Ab)(a, i)
                    }, "Edit story")), d.createElement(E.c, null), d.createElement(E.b, null, d.createElement(y.t, {
                        href: Object(j.Eb)(a, i)
                    }, "Story settings")), d.createElement(E.b, null, d.createElement(y.t, {
                        href: Object(j.Gc)(a, i)
                    }, "View stats")), d.createElement(E.c, null), d.createElement(E.b, null, d.createElement(y.t, {
                        onClick: F
                    }, "Remove story from publication")), r && d.createElement(E.b, null, d.createElement(y.t, {
                        onClick: C(R, Y)
                    }, "Delete story")))
                }
            }, d.createElement(y.t, {
                onClick: T
            }, d.createElement(w.a, {
                className: o(k)
            }))))
        }
          , I = u()(S())
          , T = n("./src/components/mutations/UserBlockMutation.tsx")
          , R = n("./src/components/mutations/UserReportStoryMutation.tsx")
          , A = n("./src/components/mutations/UserUnblockMutation.tsx")
          , L = n("./src/components/mute/useMute.tsx")
          , M = n("./src/components/session/useFlag.tsx")
          , B = n("./src/components/user/UserBlockConfirmDialog.tsx")
          , D = n("./src/components/user/UserReportStoryDialog.tsx");
        function N() {
            var e = o()(["\n  fragment TruncatedPostCardReaderButton_post on Post {\n    id\n    collection {\n      id\n    }\n    creator {\n      id\n      isBlocking\n      isMuting\n    }\n  }\n"]);
            return N = function() {
                return e
            }
            ,
            e
        }
        var U = function(e) {
            return {
                fill: e.baseColor.fill.normal,
                ":hover": {
                    fill: e.baseColor.fill.darker
                },
                ":focus": {
                    fill: e.baseColor.fill.darker
                }
            }
        }
          , F = function(e) {
            var t, n = e.post, r = e.viewer, o = Object(O.useCx)(), a = n.creator, s = n.id, i = a || {}, l = i.id, c = i.isMuting, u = i.isBlocking, m = null === (t = n.collection) || void 0 === t ? void 0 : t.id, p = Object(_.a)(!1), b = f()(p, 3), g = b[0], h = b[1], v = b[2], x = Object(M.a)("enable_mute"), j = Object(L.a)(l, m), S = j.muteAuthor, k = j.unmuteAuthor, P = Object(_.a)(!1), I = f()(P, 3), N = I[0], F = I[1], H = I[2], V = Object(_.a)(!1), z = f()(V, 3), G = z[0], q = z[1], W = z[2];
            return m && l ? d.createElement(d.Fragment, null, d.createElement(R.a, {
                targetAuthorId: l,
                targetPostId: s,
                isBlocking: u,
                onOptimisticComplete: W
            }, (function(e) {
                var t = e.mutate;
                return d.createElement(D.a, {
                    onSubmit: t,
                    isVisible: G,
                    hide: W
                })
            }
            )), u ? null : d.createElement(T.a, {
                targetUserId: l,
                viewerId: r.id,
                onCompleted: H
            }, (function(e) {
                var t = e.mutate;
                return d.createElement(B.a, {
                    onConfirm: t,
                    isVisible: N,
                    hide: H
                })
            }
            )), d.createElement(y.w, {
                hide: v,
                isVisible: g,
                popoverRenderFn: function() {
                    return d.createElement(E.a, null, x && d.createElement(E.b, null, d.createElement(y.t, {
                        onClick: C(v, c ? k : S)
                    }, c ? "Unmute" : "Mute", " this author")), d.createElement(E.b, null, u ? d.createElement(A.a, {
                        targetUserId: l,
                        viewerId: r.id
                    }, (function(e) {
                        var t = e.mutate;
                        return d.createElement(y.t, {
                            onClick: C(v, t)
                        }, "Unblock this author")
                    }
                    )) : d.createElement(y.t, {
                        onClick: C(v, F)
                    }, "Block this author")), d.createElement(E.b, null, d.createElement(y.t, {
                        onClick: C(v, q)
                    }, "Report this story")))
                }
            }, d.createElement(y.t, {
                onClick: h
            }, d.createElement(w.a, {
                className: o(U)
            })))) : null
        }
          , H = u()(N())
          , V = n("./src/components/session/useViewer.tsx");
        function z() {
            var e = o()(["\n  fragment TruncatedPostCardOverflowButton_post on Post {\n    collection {\n      viewerIsEditor\n    }\n    creator {\n      id\n    }\n    ...TruncatedPostCardEditorWriterButton_post\n    ...TruncatedPostCardReaderButton_post\n  }\n  ", "\n  ", "\n"]);
            return z = function() {
                return e
            }
            ,
            e
        }
        var G = function(e) {
            var t, n, r = e.post, o = Object(V.b)(), a = !!(null === (t = r.collection) || void 0 === t ? void 0 : t.viewerIsEditor), s = (null == o ? void 0 : o.id) === (null === (n = r.creator) || void 0 === n ? void 0 : n.id);
            return o ? a || s ? d.createElement(P, {
                post: r,
                isEditor: a,
                isWriter: s
            }) : d.createElement(F, {
                post: r,
                viewer: o
            }) : null
        }
          , q = u()(z(), I, H)
          , W = n("./src/components/collection/package/moduleHelpers.ts")
          , $ = n("./src/components/collection/package/packageTheme.ts")
          , Y = n("./src/components/sequence/NormalizeSequenceBodyModel.ts")
          , K = n("./src/schema-types/globalTypes.ts");
        function Q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var X = function(e, t) {
            var n;
            return t ? function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(n), !0).forEach((function(t) {
                        l()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, e, {
                markups: [{
                    anchorType: K.b.LINK,
                    type: K.j.A,
                    start: 0,
                    end: (null == e || null === (n = e.text) || void 0 === n ? void 0 : n.length) || 0,
                    href: t,
                    userId: null,
                    linkMetadata: null
                }]
            }) : e
        }
          , J = function(e, t) {
            var n = Object(Y.e)(e).titleIndex;
            return e.map((function(e, r) {
                return r === n ? X(e, t) : e
            }
            ))
        };
        function Z() {
            return (Z = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var ee = m.a.createElement("path", {
            d: "M18.77 6.72l-1.4 1.4V2.98A2.98 2.98 0 0 0 14.39 0H8.63a.72.72 0 0 0 0 1.44h5.76a1.54 1.54 0 0 1 1.54 1.54v5.14l-1.4-1.4a.72.72 0 0 0-1 1.01l2.62 2.63.1.09h.07l.06.04h.56l.06-.04h.06l.1-.08 2.63-2.64a.72.72 0 0 0-1.02-1zM1.24 3.85l1.4-1.4v5.14a2.98 2.98 0 0 0 2.98 2.98h5.97a.72.72 0 1 0 0-1.44H5.62A1.54 1.54 0 0 1 4.08 7.6V2.45l1.4 1.4a.72.72 0 1 0 1-1.01L3.87.2l-.1-.09H3.7L3.63.08h-.56L3 .12h-.04l-.1.09L.22 2.84a.72.72 0 0 0 1 1.03l.02-.02z",
            fill: "#292929"
        })
          , te = function(e) {
            return m.a.createElement("svg", Z({
                width: 20,
                height: 11,
                viewBox: "0 0 20 11",
                fill: "none"
            }, e), ee)
        };
        function ne() {
            var e = o()(["\n  fragment RepostingButton_post on Post {\n    id\n  }\n"]);
            return ne = function() {
                return e
            }
            ,
            e
        }
        var re = u()(ne())
          , oe = function(e) {
            var t = e.post.id
              , n = Object(g.f)((function(e) {
                return e.config.authDomain
            }
            ))
              , r = Object(j.pb)(n, t);
            return d.createElement(y.t, {
                href: r
            }, d.createElement(te, null))
        }
          , ae = n("./src/components/post/body/PostBody.tsx")
          , se = n("./src/components/post/bookmark/index.ts")
          , ie = n("./src/components/post/footer/PostFooterSocialPopover.tsx")
          , le = n("./src/components/post/multivote/MultiVote.tsx")
          , ce = n("./src/components/post/postHelpers.ts")
          , ue = n("./src/components/publisher/CardByline.tsx")
          , de = n("./src/components/responses/ResponsesIconButton.tsx")
          , me = n("./src/framework/design-system/type/index.ts")
          , pe = n("./src/framework/reporter/index.ts")
          , fe = n("./src/framework/source/index.ts")
          , be = n("./src/framework/track/index.ts")
          , ge = n("./src/framework/track/PostReadTracker.tsx")
          , he = n("./src/util/hooks/useEventCallback.tsx")
          , ve = n("./src/util/hooks/useIsEligibleToViewNewResponses.tsx")
          , xe = n("./src/util/navigation.ts")
          , Ee = n("./src/util/numbers.ts");
        function ye() {
            var e = o()(["\n  fragment TruncatedPostCard_post on Post {\n    id\n    creator {\n      ...TruncatedPostCard_user\n    }\n    collection {\n      ...CardByline_collection\n    }\n    extendedPreviewContent(\n      truncationConfig: {\n        previewParagraphsWordCountThreshold: 100\n        minimumWordLengthForTruncation: 150\n        truncateAtEndOfSentence: false\n        showFullImageCaptions: true\n      }\n    ) {\n      bodyModel {\n        ...TruncatedPostCard_bodyModel\n      }\n      isFullContent\n    }\n    firstPublishedAt\n    isLocked\n    isShortform\n    latestPublishedAt\n    mediumUrl\n    pinnedAt\n    postResponses {\n      count\n    }\n    previewContent {\n      subtitle\n    }\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n    readingTime\n    title\n    visibility\n    ...TruncatedPostCardOverflowButton_post\n    ...MultiVote_post\n    ...ResponsesIconButton_post\n    ...PostFooterSocialPopover_post\n    ...BookmarkButton_post\n    ...RepostingButton_post\n    ...PostPresentationTracker_post\n    ...PostScrollTracker_post\n    ...PostReadTracker_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return ye = function() {
                return e
            }
            ,
            e
        }
        function Oe() {
            var e = o()(["\n  fragment TruncatedPostCard_user on User {\n    __typename\n    name\n    username\n    ...CardByline_user\n  }\n  ", "\n"]);
            return Oe = function() {
                return e
            }
            ,
            e
        }
        function we() {
            var e = o()(["\n  fragment TruncatedPostCard_bodyModel on RichText {\n    ...PostBody_bodyModel\n  }\n  ", "\n"]);
            return we = function() {
                return e
            }
            ,
            e
        }
        function Ce(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function _e(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ce(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var je = function(e) {
            return {
                border: 0,
                height: "1px",
                backgroundColor: e.baseColor.border.lighter,
                margin: 0
            }
        }
          , Se = {
            xs: {
                marginTop: "32px"
            },
            sm: {
                marginTop: "32px"
            },
            md: {
                marginTop: "40px"
            },
            lg: {
                marginTop: "40px"
            },
            xl: {
                marginTop: "40px"
            }
        }
          , ke = {
            xs: {
                marginTop: "30px",
                marginBottom: "30px"
            },
            sm: {
                marginTop: "30px",
                marginBottom: "30px"
            },
            md: {
                marginTop: "50px",
                marginBottom: "50px"
            },
            lg: {
                marginTop: "50px",
                marginBottom: "50px"
            },
            xl: {
                marginTop: "50px",
                marginBottom: "50px"
            }
        }
          , Pe = function(e) {
            var t = e.theme
              , n = e.post
              , r = e.onClick
              , o = e.publisher
              , a = n.mediumUrl
              , s = n.readingTime
              , i = "".concat(Object(Ee.f)(s || 0), " min read")
              , l = "Collection" !== o.__typename && n.collection ? "Read more in ".concat(n.collection.name) : "Read more";
            return d.createElement(y.b, {
                marginTop: "34px"
            }, d.createElement(y.t, {
                href: a,
                onClick: r
            }, d.createElement(y.F, {
                theme: t
            }, d.createElement(me.b, {
                color: "ACCENT",
                scale: "M"
            }, l, " ", i ? " · ".concat(i) : ""))))
        }
          , Ie = function(e) {
            var t, n, r, o = e.excludeMargin, a = void 0 !== o && o, i = e.includeBottomDivider, l = void 0 !== i && i, c = e.isFirst, u = void 0 !== c && c, m = e.publisher, p = e.post, f = e.withPackageThemeColors, b = void 0 === f || f, g = e.hideAuthor, h = void 0 !== g && g, v = e.index, x = Object(O.useTheme)(), E = Object(O.useCx)(), w = Object(M.a)("enable_reposting"), C = Object($.f)().theme.colors.primaryTextAccentColor, _ = d.useRef(null);
            Object(be.h)(_, p);
            var j = d.useRef(null)
              , S = Object(V.c)().value;
            Object(ge.b)(!!S, j, p);
            var k, P = Object(ve.a)(), I = (null == p || null === (t = p.postResponses) || void 0 === t ? void 0 : t.count) || 0, T = p.id, R = p.clapCount, A = p.collection, L = p.extendedPreviewContent, B = p.isLocked, D = p.isShortform, N = p.firstPublishedAt, U = p.latestPublishedAt, F = p.mediumUrl, H = p.pinnedAt, z = p.visibility, q = Object(pe.c)(), Y = Object(fe.e)(), K = Object(fe.c)(_e({}, Y, {
                index: v
            }));
            F && Y && (k = Object(xe.a)(F, {
                source: K
            }));
            var Q = null == p || null === (n = p.extendedPreviewContent) || void 0 === n ? void 0 : n.bodyModel;
            if (!Q)
                return null;
            var X = _e({}, Q, {
                paragraphs: J(Q.paragraphs, k || F)
            })
              , Z = b ? _e({}, x, {}, Object(W.a)(x, C)) : x
              , ee = !!H && !!U
              , te = ee ? U : N
              , ne = ee ? "Updated " : ""
              , re = !(null == p || null === (r = p.extendedPreviewContent) || void 0 === r ? void 0 : r.isFullContent)
              , me = !u && d.createElement("hr", {
                className: E(je)
            })
              , Ee = l && d.createElement("hr", {
                className: E(je)
            })
              , ye = u ? Se : ke
              , Oe = a ? "full" : "inset"
              , we = {
                postId: T,
                collectionId: null == A ? void 0 : A.id,
                isFullPost: null == L ? void 0 : L.isFullContent,
                postVisibility: Object(ce.a)(z),
                context: 2,
                pinned: Boolean(H)
            }
              , Ce = "User" === (null == m ? void 0 : m.__typename) && p.collection ? p.collection : p.creator
              , Ie = m || p.creator;
            return d.createElement(fe.b, {
                source: {
                    index: v
                },
                extendSource: !0
            }, d.createElement(y.b, s()({
                boxSizing: "content-box",
                marginLeft: "auto",
                marginRight: "auto"
            }, a ? {} : ye), d.createElement(fe.b, {
                source: {
                    index: v
                },
                extendSource: !0
            }, d.createElement(y.v, {
                size: Oe
            }, me, d.createElement(be.b, {
                post: p,
                presentationContext: "POST_PREVIEW",
                isDisplayingFullPost: !re,
                suppressEvents: !1,
                reportClientViewedOnFullPost: !0,
                postClientViewedContext: 2,
                pinned: !!H
            }, d.createElement(y.b, {
                marginTop: me ? "24px" : void 0
            }, Ce && d.createElement(y.F, {
                theme: Z
            }, d.createElement(ue.a, {
                publisher: Ce,
                hideAuthor: h,
                href: F || void 0,
                onClick: function() {
                    q.event("post.permalinkClicked", _e({}, we, {
                        source: K,
                        interfaceElement: "byline"
                    }))
                },
                isOneLine: !0,
                datePrefix: ne,
                publishedAt: te,
                showStar: !!B && !D
            })), d.createElement(y.b, {
                marginTop: "12px",
                ref: _
            }, d.createElement(he.a, {
                event: {
                    eventName: "post.permalinkClicked",
                    data: _e({}, we, {
                        interfaceElement: "title"
                    })
                }
            }, d.createElement(ae.f, {
                ref: re ? null : j,
                bodyModel: X,
                isAuroraPostPageEnabled: !0,
                richTextStyle: "CARD"
            })))), re && F && Ie && d.createElement(Pe, {
                post: p,
                publisher: Ie,
                theme: Z,
                onClick: function() {
                    q.event("post.permalinkClicked", _e({}, we, {
                        source: K,
                        interfaceElement: "read-more"
                    }))
                }
            }), p && d.createElement(y.b, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "36px"
            }, d.createElement(y.b, {
                display: "flex",
                alignItems: "center"
            }, d.createElement(fe.b, {
                source: {
                    susiEntry: "clap_preview"
                },
                extendSource: !0
            }, d.createElement(le.a, {
                post: p,
                buttonStyle: "SUBTLE",
                hasDialog: !0,
                shouldHideClapsText: !0
            })), P && d.createElement(y.b, {
                display: "flex",
                alignItems: "center",
                xl: {
                    marginLeft: R ? "24px" : "12px"
                },
                lg: {
                    marginLeft: R ? "24px" : "12px"
                },
                md: {
                    marginLeft: R ? "16px" : "8px"
                },
                sm: {
                    marginLeft: R ? "16px" : "8px"
                },
                xs: {
                    marginLeft: R ? "16px" : "8px"
                },
                paddingTop: "3px"
            }, d.createElement(y.t, {
                href: F + "?responsesOpen=true"
            }, d.createElement(de.a, {
                location: "preview",
                postId: p.id,
                shouldHideResponsesText: !0,
                responsesCount: I,
                setIsResponsesSidebarVisible: function() {},
                allowResponses: p.allowResponses,
                isLimitedState: p.isLimitedState
            })))), d.createElement(y.b, {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
            }, w && d.createElement(y.b, {
                marginRight: "12px"
            }, d.createElement(oe, {
                post: p
            })), d.createElement(y.b, {
                marginRight: "12px"
            }, d.createElement(ie.a, {
                post: p,
                source: {
                    name: "collection_home"
                }
            })), d.createElement(y.b, {
                marginRight: "12px"
            }, d.createElement(se.a, {
                post: p
            })), d.createElement(G, {
                post: p
            }))))))), l && d.createElement(y.v, {
                size: Oe
            }, Ee))
        }
          , Te = u()(we(), ae.a)
          , Re = u()(Oe(), ue.d)
          , Ae = u()(ye(), Te, Re, q, le.b, de.b, ie.b, se.b, re, be.c, be.e, ue.b, ge.a)
    },
    "./src/components/collection/package/collectionIdToNameMaps.ts": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        ));
        var r = {
            "standard.dev:8080": {
                "62cd982de8d4": "gen",
                "504c53fa76fb": "level",
                fa6fc47570d7: "onezero",
                "1cc8061583f5": "zora",
                "9a23b344dad1": "vanilla"
            },
            "hatch.dm": {
                "9d578d280b62": "level",
                a5430dacbfe: "gen",
                "920465cb4905": "onezero",
                c30162111b49: "zora",
                f622191829f2: "vanilla"
            },
            "medium.com": {
                ae2a65f35510: "gen",
                "88d9857e584e": "level",
                "444d13b52878": "onezero",
                "8ccfed20cbb2": "zora",
                "8a9336e5bb4": "vanilla",
                "9dc80918cc93": "vanilla"
            }
        }
          , o = function(e, t) {
            return r[e][t] || "vanilla"
        }
    },
    "./src/components/collection/package/header/calculateLogoDimensions.ts": function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            var r = n / t || 0
              , o = {
                xs: {
                    maxHeight: 32,
                    maxWidth: 320
                },
                md: {
                    maxHeight: 40,
                    maxWidth: 400
                },
                xl: {
                    maxHeight: 60,
                    maxWidth: 600
                }
            };
            return r <= 2.5 ? o = {
                xs: {
                    maxHeight: 50,
                    maxWidth: 125
                },
                md: {
                    maxHeight: 70,
                    maxWidth: 175
                },
                xl: {
                    maxHeight: 90,
                    maxWidth: 225
                }
            } : r < 5 && (o = {
                xs: {
                    maxHeight: 40,
                    maxWidth: 200
                },
                md: {
                    maxHeight: 50,
                    maxWidth: 250
                },
                xl: {
                    maxHeight: 70,
                    maxWidth: 350
                }
            }),
            o[e]
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
    },
    "./src/components/collection/package/interim-components/ClickableWrapper.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/framework/design-system/components/index.ts")
          , a = function(e) {
            var t = e.children
              , n = e.className
              , a = void 0 === n ? "" : n
              , s = e.href
              , i = e.onClick;
            return s ? r.createElement(o.f, {
                className: a,
                href: s,
                onClick: i
            }, t) : t
        }
    },
    "./src/components/collection/package/moduleHelpers.ts": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return u
        }
        )),
        n.d(t, "a", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return h
        }
        )),
        n.d(t, "d", (function() {
            return x
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./src/util/miroImage.ts")
          , s = n("./src/util/numbers.ts")
          , i = n("./src/util/routes.ts");
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var u = function(e, t, n) {
            var r = e && e.baseColor
              , o = r && r.text;
            return {
                baseColor: c({}, r, {
                    text: c({}, o, {
                        lighter: n || o.lighter,
                        normal: t || o.normal
                    })
                })
            }
        }
          , d = function(e, t) {
            var n = e && e.accentColor || {};
            return {
                accentColor: c({}, n, {
                    text: c({}, n && n.text || {}, {
                        normal: t
                    })
                })
            }
        }
          , m = function(e, t) {
            var n = null !== t && -1 !== t ? t : 50;
            return "".concat(null !== e && -1 !== e ? e : 50, "% ").concat(n, "%")
        }
          , p = {
            altText: "",
            author: "",
            authorLink: "",
            bodyOnly: !1,
            cardDisplayConfig: {},
            colorCombo: "",
            creator: void 0,
            description: "",
            dek: "",
            eyebrow: "",
            headline: "",
            imageBackgroundPosition: "",
            imageCaption: "",
            imageCredit: "",
            imageUrl: "",
            isLocked: !1,
            mobileImageUrl: "",
            link: "",
            postBody: void 0,
            publication: "",
            publishedAt: 0,
            quoteText: "",
            tagline: "",
            timeToRead: "",
            mediumUrl: ""
        }
          , f = ["dek", "eyebrow", "headline", "imageCaption", "imageCredit", "quoteText"];
        function b(e, t) {
            var n = e.length > 0 ? e[e.length - 1] : ""
              , r = '"' === t
              , o = r ? "“" : "‘"
              , a = r ? "”" : "’"
              , s = t
              , i = n === (r ? "‘" : "“");
            !n || "([{\n  ".includes(n) || i ? s = o : "0123456789½¼¾⅓⅔⅛⅜⅝⅞".includes(n) ? e.lastIndexOf(o) > e.lastIndexOf(a) && (s = a) : s = a;
            return s
        }
        function g(e) {
            for (var t, n = /['"]/g, r = "", o = 0; null !== (t = n.exec(e)); )
                r += e.slice(o, t.index),
                r += b(r, t[0]),
                o = t.index + 1;
            return r + e.slice(o)
        }
        var h = function(e) {
            return e.filter((function(e) {
                return !("post"in e.itemType) || null !== e.itemType.post
            }
            ))
        }
          , v = function(e) {
            return e ? "cardType"in e && e[e.cardType] ? e[e.cardType] : "itemType"in e ? e.itemType : void 0 : void 0
        }
          , x = function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , o = v(e)
              , l = Object.assign({}, p, {
                cardDisplayConfig: r,
                publication: n
            });
            if (o && "dek"in o && o.dek ? l.dek = o.dek : t && t.previewContent && "subtitle"in t.previewContent && t.previewContent.subtitle && (l.dek = t.previewContent.subtitle),
            t && "previewImage"in t && t.previewImage && t.previewImage.id) {
                var c = t.previewImage
                  , u = c.focusPercentX
                  , d = c.focusPercentY
                  , b = c.id;
                l.imageBackgroundPosition = m(u, d),
                l.imageUrl = Object(a.d)({
                    miroId: b,
                    width: 756,
                    height: 453,
                    strategy: a.a.Resample,
                    focusPercentX: u,
                    focusPercentY: d,
                    freezeGifs: !1
                })
            } else
                o && "imageUrl"in o && o.imageUrl && (l.imageUrl = o.imageUrl);
            return o && "mobileImageUrl"in o && o.mobileImageUrl && (l.mobileImageUrl = o.mobileImageUrl),
            o && "altText"in o && o.altText && (l.altText = o.altText),
            o && "author"in o && o.author ? l.author = o.author : t && t.creator && (t.creator.name && (l.author = t.creator.name),
            t.creator.username && (l.authorLink = Object(i.sc)(t.creator.username))),
            o && "bodyOnly"in o && o.bodyOnly && (l.bodyOnly = o.bodyOnly),
            o && "eyebrow"in o && o.eyebrow && (l.eyebrow = o.eyebrow),
            o && "imageCaption"in o && o.imageCaption && (l.imageCaption = o.imageCaption),
            o && "imageCredit"in o && o.imageCredit && (l.imageCredit = o.imageCredit),
            o && "headline"in o && o.headline ? l.headline = o.headline : t && t.title && (l.headline = t.title),
            o && "quoteText"in o && o.quoteText && (l.quoteText = o.quoteText),
            o && "description"in o && o.description && (l.description = o.description),
            o && "tagline"in o && o.tagline && (l.tagline = o.tagline),
            o && "cardConfig"in o && o.cardConfig && o.cardConfig.colorTheme && (l.colorCombo = o.cardConfig.colorTheme),
            o && "storyUrl"in o && o.storyUrl ? l.link = o.storyUrl : t && (l.link = Object(i.Db)(t)),
            t && (l.publishedAt = t.firstPublishedAt,
            l.mediumUrl = t.mediumUrl || ""),
            t && t.readingTime && (l.timeToRead = "".concat(Object(s.f)(t.readingTime), " min read")),
            t && "content"in t && t.content && t.content.bodyModel && (l.postBody = t.content.bodyModel,
            t && "creator"in t && t.creator && (l.creator = t.creator)),
            f.forEach((function(e) {
                return l[e] = g(l[e])
            }
            )),
            l
        }
    },
    "./src/components/collection/package/packageTheme.ts": function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return P
        }
        )),
        n.d(t, "a", (function() {
            return I
        }
        )),
        n.d(t, "f", (function() {
            return T
        }
        )),
        n.d(t, "c", (function() {
            return R
        }
        )),
        n.d(t, "d", (function() {
            return A
        }
        )),
        n.d(t, "b", (function() {
            return L
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/lodash/merge.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , d = n.n(u)
          , m = n("./src/components/collection/package/themes/vanilla.ts")
          , p = n("./src/styles/colors.ts");
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    d()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var g = Object(m.a)();
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    d()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var x = Object(m.a)();
        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function(t) {
                    d()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var O = Object(m.a)();
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach((function(t) {
                    d()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var _ = Object(m.a)()
          , j = n("./src/util/theme.ts");
        function S() {
            var e = o()(["\n  fragment PackageTheme_collection on Collection {\n    id\n    ...ThemeUtilAccent_collection\n  }\n  ", "\n"]);
            return S = function() {
                return e
            }
            ,
            e
        }
        var k = {
            gen: function() {
                return b({}, g, {
                    colors: {
                        subtleColor: p.e,
                        verySubtleColor: p.d,
                        primaryBackgroundColor: "#F1F1F1",
                        primaryTextAccentColor: "#FB524C",
                        primaryTextMainColor: p.c,
                        secondaryBackgroundColor: "#FB524C",
                        secondaryTextAccentColor: p.c,
                        secondaryTextMainColor: p.D,
                        tertiaryBackgroundColor: p.c,
                        tertiaryTextAccentColor: "#FB524C",
                        tertiaryTextMainColor: p.D,
                        quoteBackgroundColor: "#C1A160",
                        quoteTextAccentColor: p.c,
                        quoteTextMainColor: p.c
                    },
                    standardCard: b({}, g.standardCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor"
                            }
                        }
                    }),
                    halfFeatureCard: b({}, g.halfFeatureCard, {
                        colorCombo: {
                            primary: {
                                backgroundColor: "primaryBackgroundColor",
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor"
                            },
                            secondary: {
                                backgroundColor: "secondaryBackgroundColor",
                                mainColor: "secondaryTextMainColor",
                                accentColor: "secondaryTextAccentColor"
                            },
                            tertiary: {
                                backgroundColor: "tertiaryBackgroundColor",
                                mainColor: "tertiaryTextMainColor",
                                accentColor: "tertiaryTextAccentColor"
                            }
                        }
                    }),
                    quoteCard: b({}, g.quoteCard, {
                        colorCombo: {
                            quote: {
                                backgroundColor: "quoteBackgroundColor",
                                mainColor: "quoteTextMainColor",
                                accentColor: "quoteTextAccentColor"
                            }
                        }
                    }),
                    shortStoryCard: b({}, g.shortStoryCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor",
                                imageCaptionColor: "subtleColor",
                                imageCreditColor: "verySubtleColor"
                            }
                        }
                    })
                })
            },
            level: function() {
                return v({}, x, {
                    colors: {
                        subtleColor: p.e,
                        verySubtleColor: p.d,
                        primaryBackgroundColor: p.D,
                        primaryTextAccentColor: "#46908F",
                        primaryTextMainColor: "#2E2A27",
                        secondaryBackgroundColor: "#192545",
                        secondaryTextAccentColor: "#D49BE8",
                        secondaryTextMainColor: "#E5E6E1",
                        tertiaryBackgroundColor: "#2E2A27",
                        tertiaryTextAccentColor: "#F0BA40",
                        tertiaryTextMainColor: "#E5E6E1",
                        quoteBackgroundColor: "#E5E6E1",
                        quoteTextAccentColor: "#2E2A27",
                        quoteTextMainColor: "#2E2A27"
                    },
                    standardCard: v({}, x.standardCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor"
                            }
                        }
                    }),
                    halfFeatureCard: v({}, x.halfFeatureCard, {
                        colorCombo: {
                            primary: {
                                backgroundColor: "primaryBackgroundColor",
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor"
                            },
                            secondary: {
                                backgroundColor: "secondaryBackgroundColor",
                                mainColor: "secondaryTextMainColor",
                                accentColor: "secondaryTextAccentColor"
                            },
                            tertiary: {
                                backgroundColor: "tertiaryBackgroundColor",
                                mainColor: "tertiaryTextMainColor",
                                accentColor: "tertiaryTextAccentColor"
                            }
                        }
                    }),
                    quoteCard: v({}, x.quoteCard, {
                        colorCombo: {
                            quote: {
                                backgroundColor: "quoteBackgroundColor",
                                mainColor: "quoteTextMainColor",
                                accentColor: "quoteTextAccentColor"
                            }
                        }
                    }),
                    shortStoryCard: v({}, x.shortStoryCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor",
                                imageCaptionColor: "subtleColor",
                                imageCreditColor: "verySubtleColor"
                            }
                        }
                    })
                })
            },
            onezero: function() {
                return y({}, O, {
                    colors: {
                        subtleColor: p.e,
                        verySubtleColor: p.d,
                        primaryBackgroundColor: "#E5E9F2",
                        primaryTextAccentColor: "#6A0BFF",
                        primaryTextMainColor: p.c,
                        secondaryBackgroundColor: "#6A0BFF",
                        secondaryTextAccentColor: "#DAF832",
                        secondaryTextMainColor: p.D,
                        tertiaryBackgroundColor: p.D,
                        tertiaryTextAccentColor: "#6A0BFF",
                        tertiaryTextMainColor: p.c,
                        quoteBackgroundColor: "#DAF832",
                        quoteTextAccentColor: p.c,
                        quoteTextMainColor: p.c
                    },
                    standardCard: y({}, O.standardCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor"
                            }
                        }
                    }),
                    halfFeatureCard: y({}, O.halfFeatureCard, {
                        colorCombo: {
                            primary: {
                                backgroundColor: "primaryBackgroundColor",
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor"
                            },
                            secondary: {
                                backgroundColor: "secondaryBackgroundColor",
                                mainColor: "secondaryTextMainColor",
                                accentColor: "secondaryTextAccentColor"
                            },
                            tertiary: {
                                backgroundColor: "tertiaryBackgroundColor",
                                mainColor: "tertiaryTextMainColor",
                                accentColor: "tertiaryTextAccentColor"
                            }
                        }
                    }),
                    quoteCard: y({}, O.quoteCard, {
                        colorCombo: {
                            quote: {
                                backgroundColor: "quoteBackgroundColor",
                                mainColor: "quoteTextMainColor",
                                accentColor: "quoteTextAccentColor"
                            }
                        }
                    }),
                    shortStoryCard: y({}, O.shortStoryCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor",
                                imageCaptionColor: "subtleColor",
                                imageCreditColor: "verySubtleColor"
                            }
                        }
                    })
                })
            },
            vanilla: m.a,
            zora: function() {
                return C({}, _, {
                    glyphPath: "/e/zsr/latin/e/zsb/latin/e/tb/latin",
                    colors: {
                        subtleColor: p.e,
                        verySubtleColor: p.d,
                        primaryBackgroundColor: "#F8E2E7",
                        primaryTextAccentColor: "#960564",
                        primaryTextMainColor: p.c,
                        secondaryBackgroundColor: "#650343",
                        secondaryTextAccentColor: "#FACC3D",
                        secondaryTextMainColor: p.D,
                        tertiaryBackgroundColor: p.D,
                        tertiaryTextAccentColor: "#960564",
                        tertiaryTextMainColor: p.c,
                        quoteBackgroundColor: "#FACC3D",
                        quoteTextAccentColor: "#650343",
                        quoteTextMainColor: "#650343"
                    },
                    standardCard: C({}, _.standardCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor"
                            }
                        }
                    }),
                    halfFeatureCard: C({}, _.halfFeatureCard, {
                        colorCombo: {
                            primary: {
                                backgroundColor: "primaryBackgroundColor",
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor"
                            },
                            secondary: {
                                backgroundColor: "secondaryBackgroundColor",
                                mainColor: "secondaryTextMainColor",
                                accentColor: "secondaryTextAccentColor"
                            },
                            tertiary: {
                                backgroundColor: "tertiaryBackgroundColor",
                                mainColor: "tertiaryTextMainColor",
                                accentColor: "tertiaryTextAccentColor"
                            }
                        }
                    }),
                    quoteCard: C({}, _.quoteCard, {
                        colorCombo: {
                            quote: {
                                backgroundColor: "quoteBackgroundColor",
                                mainColor: "quoteTextMainColor",
                                accentColor: "quoteTextAccentColor"
                            }
                        }
                    }),
                    shortStoryCard: C({}, _.shortStoryCard, {
                        colorCombo: {
                            standard: {
                                mainColor: "primaryTextMainColor",
                                accentColor: "primaryTextAccentColor",
                                lighterColor: "subtleColor",
                                imageCaptionColor: "subtleColor",
                                imageCreditColor: "verySubtleColor"
                            }
                        }
                    })
                })
            }
        }
          , P = "#E5E5E5"
          , I = c.createContext({
            name: "vanilla",
            theme: Object(m.a)()
        })
          , T = function() {
            return c.useContext(I)
        }
          , R = function(e) {
            return s()({}, e, {
                newFonts: {
                    subtitle: {
                        fontSize: {
                            L: 22
                        },
                        lineHeight: {
                            L: 28
                        }
                    },
                    pullQuote: {
                        fontSize: {
                            M: 22,
                            L: e.newFonts.pullQuote.fontSize.M
                        },
                        lineHeight: {
                            M: 30,
                            L: e.newFonts.pullQuote.lineHeight.M
                        }
                    },
                    title: {
                        fontSize: {
                            M: 26,
                            L: 34
                        },
                        lineHeight: {
                            M: 34,
                            L: 42
                        }
                    }
                }
            })
        }
          , A = function(e, t) {
            var n;
            if (!e && !t)
                return Object(m.a)();
            var r = null == t || null === (n = t.colorPalette) || void 0 === n ? void 0 : n.defaultBackgroundSpectrum
              , o = {
                accentColor: r ? Object(j.r)(r).text.normal : void 0
            };
            return e && k[e] ? k[e](o) : Object(m.a)(o)
        }
          , L = l()(S(), j.a)
    },
    "./src/components/collection/package/themes/vanilla.ts": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./src/styles/colors.ts")
          , o = "#03A87C"
          , a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.accentColor;
            return {
                colors: {
                    subtleColor: r.e,
                    verySubtleColor: r.d,
                    primaryBackgroundColor: r.D,
                    primaryTextAccentColor: t || o,
                    primaryTextMainColor: r.c,
                    secondaryBackgroundColor: r.D,
                    secondaryTextAccentColor: t || o,
                    secondaryTextMainColor: r.e,
                    tertiaryBackgroundColor: r.D,
                    tertiaryTextAccentColor: t || o,
                    tertiaryTextMainColor: r.c,
                    quoteBackgroundColor: "#F2F2F2",
                    quoteTextAccentColor: t || o,
                    quoteTextMainColor: r.c
                },
                standardCard: {
                    colorCombo: {
                        standard: {
                            mainColor: "primaryTextMainColor",
                            accentColor: "primaryTextAccentColor",
                            lighterColor: "subtleColor"
                        }
                    },
                    textAlign: "left",
                    detailScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    overlineScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    subtitleScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    titleScale: {
                        xs: "S",
                        sm: "S",
                        md: "S",
                        lg: "S",
                        xl: "S"
                    },
                    dek: {
                        marginBottom: "24px"
                    },
                    eyebrow: {
                        marginBottom: "4px"
                    },
                    headline: {
                        marginBottom: "4px"
                    },
                    separator: {
                        fontSize: "38px",
                        lineHeight: "14px",
                        padding: "0 6px",
                        separatorCharacter: "·"
                    }
                },
                halfFeatureCard: {
                    colorCombo: {
                        primary: {
                            backgroundColor: "primaryBackgroundColor",
                            mainColor: "primaryTextMainColor",
                            accentColor: "primaryTextAccentColor"
                        },
                        secondary: {
                            backgroundColor: "primaryBackgroundColor",
                            mainColor: "primaryTextMainColor",
                            accentColor: "primaryTextAccentColor"
                        },
                        tertiary: {
                            backgroundColor: "primaryBackgroundColor",
                            mainColor: "primaryTextMainColor",
                            accentColor: "primaryTextAccentColor"
                        }
                    },
                    textAlign: "left",
                    detailScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    overlineScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    subtitleScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    titleScale: {
                        xs: "S",
                        sm: "S",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    dek: {
                        marginBottom: "24px"
                    },
                    eyebrow: {
                        marginBottom: "4px"
                    },
                    headline: {
                        marginBottom: "8px"
                    },
                    separator: {
                        fontSize: "38px",
                        lineHeight: "14px",
                        padding: "0 6px",
                        separatorCharacter: "·"
                    }
                },
                quoteCard: {
                    colorCombo: {
                        quote: {
                            backgroundColor: "quoteBackgroundColor",
                            mainColor: "quoteTextMainColor",
                            accentColor: "quoteTextAccentColor"
                        }
                    },
                    textAlign: "left",
                    detailScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    overlineScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    pullQuoteScale: {
                        xs: "M",
                        sm: "M",
                        md: "L",
                        lg: "L",
                        xl: "L"
                    },
                    titleScale: {
                        xs: "XS",
                        sm: "XS",
                        md: "XS",
                        lg: "XS",
                        xl: "XS"
                    },
                    author: {
                        marginTop: "8px",
                        marginBottom: "40px"
                    },
                    eyebrow: {
                        marginBottom: "4px"
                    },
                    headline: {
                        marginBottom: "6px"
                    },
                    separator: {
                        fontSize: "38px",
                        lineHeight: "14px",
                        padding: "0 6px",
                        separatorCharacter: "·"
                    }
                },
                shortStoryCard: {
                    colorCombo: {
                        standard: {
                            mainColor: "primaryTextMainColor",
                            accentColor: "primaryTextAccentColor",
                            lighterColor: "subtleColor",
                            imageCaptionColor: "subtleColor",
                            imageCreditColor: "verySubtleColor"
                        }
                    },
                    textAlign: "left",
                    detailScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    overlineScale: {
                        xs: "M",
                        sm: "M",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    },
                    subtitleScale: {
                        xs: "M",
                        sm: "M",
                        md: "L",
                        lg: "L",
                        xl: "L"
                    },
                    titleScale: {
                        xs: "M",
                        sm: "M",
                        md: "L",
                        lg: "L",
                        xl: "L"
                    },
                    dek: {
                        marginBottom: "24px"
                    },
                    eyebrow: {
                        marginBottom: "4px"
                    },
                    headline: {
                        marginBottom: "8px"
                    },
                    separator: {
                        fontSize: "38px",
                        lineHeight: "14px",
                        padding: "0 6px",
                        separatorCharacter: "·"
                    }
                }
            }
        }
    },
    "./src/components/collection/theming/CustomBackgroundWrapper.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        }
        )),
        n.d(t, "b", (function() {
            return p
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/collection/theming/customStyleSheet.ts")
          , c = n("./src/components/session/useFlag.tsx")
          , u = n("./src/framework/design-system/components/index.ts");
        function d() {
            var e = o()(["\n  fragment CustomBackgroundWrapper_customStyleSheet on CustomStyleSheet {\n    id\n    global {\n      colorPalette {\n        background {\n          ...getHexFromColorValue_colorValue\n        }\n      }\n    }\n  }\n  ", "\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        var m = function(e) {
            var t = e.children
              , n = e.customStyleSheet
              , r = Object(c.a)("enable_theme_editor")
              , o = i.useMemo((function() {
                var e, t;
                return Object(l.o)(null == n || null === (e = n.global) || void 0 === e || null === (t = e.colorPalette) || void 0 === t ? void 0 : t.background)
            }
            ), [n]);
            return r && o ? i.createElement(u.b, {
                backgroundColor: "BACKGROUND"
            }, t) : i.createElement(i.Fragment, null, t)
        }
          , p = s()(d(), l.p)
    },
    "./src/components/collection/theming/CustomStyleWrapper.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/components/session/useFlag.tsx")
          , a = n("./src/framework/style/index.ts")
          , s = function(e) {
            var t = e.children
              , n = e.rule
              , s = Object(a.useCx)();
            return Object(o.a)("enable_theme_editor_component_controls") ? r.createElement("div", {
                className: s(n)
            }, t) : r.createElement(r.Fragment, null, t)
        }
    },
    "./src/components/collection/theming/Foldable.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./src/framework/design-system/components/index.ts")
          , i = n("./src/framework/design-system/type/index.ts")
          , l = n("./src/framework/style/index.ts")
          , c = n("./src/svg/arrow-down-21px.svg")
          , u = n("./src/util/hooks/useToggle.tsx")
          , d = function(e) {
            var t = e.children
              , n = e.title
              , r = e.titleComponent
              , d = e.width
              , m = e.arrowFill
              , p = Object(l.useCx)()
              , f = Object(u.a)(!1)
              , b = o()(f, 4)
              , g = b[0]
              , h = b[3]
              , v = function(e) {
                var t = a.useRef(null)
                  , n = a.useState("0px")
                  , r = o()(n, 2)
                  , s = r[0]
                  , i = r[1]
                  , l = a.useState(!1)
                  , c = o()(l, 2)
                  , u = c[0]
                  , d = c[1];
                return a.useEffect((function() {
                    var n = t.current;
                    n && (e ? (i("".concat(n.getBoundingClientRect().height, "px")),
                    d(!0),
                    setTimeout((function() {
                        i("auto"),
                        d(!1)
                    }
                    ), 300)) : "auto" === s && (i("".concat(n.getBoundingClientRect().height, "px")),
                    d(!0),
                    setTimeout((function() {
                        return i("0px")
                    }
                    ), 50),
                    setTimeout((function() {
                        return d(!1)
                    }
                    ), 300)))
                }
                ), [e]),
                {
                    height: s,
                    isAnimating: u,
                    ref: t
                }
            }(g)
              , x = v.ref
              , E = v.height
              , y = v.isAnimating;
            return a.createElement(a.Fragment, null, a.createElement("button", {
                className: p({
                    width: d || "100%",
                    height: "100%",
                    border: "none",
                    textAlign: "left",
                    outline: "none",
                    cursor: "pointer",
                    padding: "0px"
                }),
                onClick: h,
                disabled: y
            }, a.createElement(s.b, {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }, r || a.createElement(i.c, {
                scale: "XS"
            }, n || ""), a.createElement(c.a, {
                className: p((function(e) {
                    return {
                        transition: "".concat(300, "ms transform"),
                        transform: g ? "rotate(180deg)" : "rotate(0)",
                        fill: m || e.baseColor.fill.normal
                    }
                }
                ))
            }))), a.createElement("div", {
                className: p({
                    transition: "".concat(300, "ms height"),
                    height: E,
                    overflow: !g || y ? "hidden" : "visible",
                    opacity: g ? 1 : 0
                })
            }, a.createElement("div", {
                ref: x,
                className: p({
                    opacity: g ? 1 : 0,
                    transition: "".concat(300, "ms opacity"),
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    flexFlow: "wrap"
                })
            }, t)))
        }
    },
    "./src/components/cta/HighlightCTA.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./src/components/cta/TextCTA.tsx")
          , i = n("./src/framework/design-system/components/index.ts")
          , l = n("./src/framework/design-system/type/index.ts")
          , c = n("./src/framework/style/index.ts")
          , u = n("./src/styles/breakpoints.ts")
          , d = n("./src/styles/colors.ts")
          , m = function(e) {
            var t = e.children
              , n = e.scale
              , r = void 0 === n ? s.a.L : n
              , m = Object(c.useCx)();
            return a.createElement("div", {
                className: m((function(e) {
                    return o()({
                        background: Object(d.z)(.05),
                        borderRadius: "4px",
                        margin: "24px -16px",
                        position: "relative"
                    }, u.sm(e), {
                        margin: "24px -12px 0"
                    })
                }
                ))
            }, a.createElement(i.b, {
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "740px",
                padding: "16px",
                sm: {
                    padding: "12px"
                }
            }, a.createElement(l.b, {
                scale: r,
                color: "DARKER"
            }, t)))
        }
    },
    "./src/components/cta/TextCTA.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var r, o = n("./node_modules/react/index.js"), a = n("./src/framework/design-system/components/index.ts"), s = n("./src/framework/design-system/type/index.ts");
        !function(e) {
            e.S = "S",
            e.L = "L"
        }(r || (r = {}));
        var i = function(e) {
            var t = e.children
              , n = e.scale
              , i = void 0 === n ? r.L : n;
            return o.createElement(a.b, {
                margin: "40px 0",
                sm: {
                    margin: "36px 0"
                }
            }, o.createElement(s.b, {
                scale: i
            }, t))
        }
    },
    "./src/components/editor/editorHelpers.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return f
        }
        )),
        n.d(t, "c", (function() {
            return b
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        )),
        n.d(t, "e", (function() {
            return E
        }
        )),
        n.d(t, "h", (function() {
            return O
        }
        )),
        n.d(t, "m", (function() {
            return w
        }
        )),
        n.d(t, "n", (function() {
            return C
        }
        )),
        n.d(t, "i", (function() {
            return _
        }
        )),
        n.d(t, "l", (function() {
            return j
        }
        )),
        n.d(t, "f", (function() {
            return k
        }
        )),
        n.d(t, "k", (function() {
            return P
        }
        )),
        n.d(t, "j", (function() {
            return I
        }
        )),
        n.d(t, "d", (function() {
            return T
        }
        )),
        n.d(t, "g", (function() {
            return R
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/lodash/flattenDeep.js")
          , l = n.n(i)
          , c = n("./node_modules/slate/dist/index.es.js")
          , u = n("./src/schema-types/globalTypes.ts");
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var p, f = 250, b = 5;
        !function(e) {
            e[e.Link = 0] = "Link"
        }(p || (p = {}));
        var g = ["numbered-list", "bulleted-list", "bq"];
        function h(e) {
            if (!e.children)
                return [];
            if (e.children.every((function(e) {
                return function(e) {
                    return c.h.isText(e) || "link" === e.type
                }(e)
            }
            ))) {
                var t = c.c.string(e)
                  , n = !(null == e ? void 0 : e.name)
                  , r = n ? y() : e.name
                  , o = function(e) {
                    switch (e) {
                    case "oli":
                        return 10;
                    case "uli":
                        return 9;
                    case "bq-line":
                        return 6;
                    case "image":
                        return 4;
                    case "title":
                        return 3;
                    default:
                        return 1
                    }
                }(e.type);
                if ("image" === e.type)
                    return [{
                        type: n ? 1 : 3,
                        paragraph: {
                            name: r,
                            type: o,
                            text: t,
                            markups: [],
                            layout: 1,
                            metadata: {
                                id: e.imageProps.miroId,
                                originalWidth: e.imageProps.width,
                                originalHeight: e.imageProps.height
                            }
                        },
                        verifySameName: !n
                    }];
                if (!t.length && !e.name)
                    return [];
                if (!t.length && e.name)
                    return [{
                        type: 2,
                        paragraph: {
                            name: e.name
                        }
                    }];
                var a = e.children.reduce((function(e, t) {
                    var n = s()(e, 2)
                      , r = n[0]
                      , o = n[1]
                      , a = c.c.string(t).length;
                    return t.italic && o.push({
                        type: 2,
                        start: r,
                        end: r + a
                    }),
                    t.bold && o.push({
                        type: 1,
                        start: r,
                        end: r + a
                    }),
                    "link" === t.type && o.push({
                        type: 3,
                        start: r,
                        end: r + a,
                        href: t.url,
                        title: "",
                        rel: "",
                        anchorType: 0
                    }),
                    [r + a, o]
                }
                ), [0, []]);
                return [{
                    type: n ? 1 : 3,
                    paragraph: {
                        markups: s()(a, 2)[1],
                        name: r,
                        text: t,
                        type: o
                    },
                    verifySameName: !n
                }]
            }
            return l()(e.children.map(h).filter((function(e) {
                return e.length
            }
            )))
        }
        function v(e, t) {
            return e.map((function(e, n) {
                return e.index = n + t,
                e
            }
            ))
        }
        var x = function(e) {
            var t = [];
            return e.map((function(e) {
                return t.includes(e.name) ? m({}, e, {
                    name: void 0
                }) : (e.name && t.push(e.name),
                e)
            }
            ))
        };
        function E(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                includeInitialDeltas: !0
            }
              , n = t.includeInitialDeltas
              , r = [];
            if (n) {
                var o = y();
                r = [{
                    type: 8,
                    index: 0,
                    section: {
                        name: o,
                        startIndex: 0
                    }
                }]
            }
            var a = e.children
              , s = x(a);
            e.children = s;
            var i = 0;
            if (!s[0].name && "title" !== s[0].type) {
                var l = y();
                r.push({
                    type: 1,
                    index: 0,
                    paragraph: {
                        name: l,
                        type: 3,
                        text: "",
                        markups: []
                    }
                }),
                i = 1
            }
            var c = h(e)
              , u = v(c, i);
            return r.concat(u)
        }
        function y() {
            return Math.round(65535 * Math.random()).toString(16).padStart(4, "0")
        }
        var O = function(e, t) {
            e.selection && C(e, t)
        }
          , w = function(e, t) {
            var n = t || e.selection;
            c.i.unwrapNodes(e, {
                match: function(e) {
                    return "link" === e.type
                },
                at: n
            })
        }
          , C = function(e, t) {
            (function(e) {
                var t = c.a.nodes(e, {
                    match: function(e) {
                        return "link" === e.type
                    }
                });
                return !!s()(t, 1)[0]
            }
            )(e) && w(e);
            var n = e.selection
              , r = n && c.g.isCollapsed(n)
              , o = {
                type: "link",
                url: t,
                children: r ? [{
                    text: t
                }] : []
            };
            r ? c.i.insertNodes(e, o) : (c.i.wrapNodes(e, o, {
                split: !0
            }),
            c.i.collapse(e, {
                edge: "end"
            }))
        }
          , _ = function(e, t, n) {
            var r = n || e.selection
              , o = c.a.nodes(e, {
                match: function(e) {
                    return !0 === e[t] || e.type === t
                },
                at: r,
                mode: "all"
            });
            return !!s()(o, 1)[0]
        }
          , j = function(e, t) {
            _(e, t) ? c.a.removeMark(e, t) : c.a.addMark(e, t, !0)
        }
          , S = function(e) {
            switch (e) {
            case "bq":
                return "bq-line";
            case "numbered-list":
                return "oli";
            case "bulleted-list":
            default:
                return "uli"
            }
        }
          , k = function() {
            if ("undefined" != typeof window) {
                var e = window.getSelection()
                  , t = e && !e.isCollapsed && e.getRangeAt(0);
                return t && t.getBoundingClientRect()
            }
        }
          , P = function(e, t, n) {
            var r = n || e.selection
              , o = _(e, t, n)
              , a = g.includes(t)
              , s = c.g.isRange(r) ? c.a.rangeRef(e, r) : c.f.isPoint(r) ? c.a.pointRef(e, r) : c.a.pathRef(e, r);
            if (c.i.unwrapNodes(e, {
                at: r,
                match: function(e) {
                    return g.includes(e.type)
                },
                split: !0
            }),
            s.current && (c.i.setNodes(e, {
                type: o ? "paragraph" : a ? S(t) : t
            }, {
                at: s.current
            }),
            !o && a)) {
                var i = {
                    type: t,
                    children: []
                };
                c.i.wrapNodes(e, i, {
                    at: s.current
                })
            }
        }
          , I = function(e, t) {
            ["bold", "italic"].forEach((function(n) {
                _(e, n, t) && c.i.unsetNodes(e, n, {
                    at: t
                })
            }
            )),
            ["link", "numbered-list", "bulleted-list", "bq"].forEach((function(n) {
                _(e, n, t) && c.i.unwrapNodes(e, {
                    at: t,
                    match: function(e) {
                        return e.type === n
                    }
                })
            }
            ))
        }
          , T = function(e) {
            if (e) {
                var t = function(e) {
                    if (!e || !e.children.length)
                        return !1;
                    var t = c.a.point(e, [0], {
                        edge: "start"
                    })
                      , n = e.children.length;
                    return {
                        anchor: t,
                        focus: c.a.point(e, [n - 1], {
                            edge: "end"
                        })
                    }
                }(e);
                t && (c.i.removeNodes(e, {
                    at: t
                }),
                c.i.insertNodes(e, {
                    children: [{
                        text: ""
                    }]
                }))
            }
        }
          , R = function(e) {
            return e.paragraphs.map((function(e) {
                var t = e.markups
                  , n = e.name
                  , r = e.text;
                if (e.type === u.l.H3)
                    return {
                        children: [{
                            text: r
                        }],
                        name: n,
                        type: "title"
                    };
                if (!(null == t ? void 0 : t.length))
                    return {
                        children: [{
                            text: r
                        }],
                        name: n
                    };
                var o = new Set;
                o.add(0),
                o.add(r.length),
                t.forEach((function(e) {
                    var t = e.start
                      , n = e.end;
                    o.add(t),
                    o.add(n)
                }
                ));
                var a = Array.from(o);
                return {
                    children: a.sort((function(e, t) {
                        return e - t
                    }
                    )).slice(1).map((function(e, n, o) {
                        var s = n ? o[n - 1] : a[0]
                          , i = e
                          , l = t.filter((function(e) {
                            return e.start <= s && i <= e.end
                        }
                        ))
                          , c = {
                            text: r.substring(s, i)
                        };
                        return l.forEach((function(e) {
                            var t = e.href;
                            switch (e.type) {
                            case u.j.STRONG:
                                ("link" === c.type ? c.children[0] : c).bold = !0;
                                break;
                            case u.j.EM:
                                ("link" === c.type ? c.children[0] : c).italic = !0;
                                break;
                            case u.j.A:
                                c = {
                                    type: "link",
                                    url: t,
                                    children: [c]
                                }
                            }
                        }
                        )),
                        c
                    }
                    )),
                    name: n
                }
            }
            ))
        }
    },
    "./src/components/editor/getSlateBodyFromPostBodyModel_bodyModel.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js");
        function s() {
            var e = o()(["\n  fragment getSlateBodyFromPostBodyModel_bodyModel on RichText {\n    paragraphs {\n      id\n      name\n      text\n      type\n      markups {\n        type\n        start\n        end\n        href\n        anchorType\n        userId\n        linkMetadata {\n          httpStatus\n        }\n      }\n    }\n  }\n"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        var i = n.n(a)()(s())
    },
    "./src/components/error/PostResultError.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return I
        }
        )),
        n.d(t, "a", (function() {
            return T
        }
        )),
        n.d(t, "b", (function() {
            return R
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/susi/RedirectToSignIn.tsx")
          , c = n("./node_modules/@babel/runtime/helpers/classCallCheck.js")
          , u = n.n(c)
          , d = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")
          , m = n.n(d)
          , p = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")
          , f = n.n(p)
          , b = n("./node_modules/@babel/runtime/helpers/inherits.js")
          , g = n.n(b)
          , h = n("./node_modules/@babel/runtime/helpers/wrapNativeSuper.js")
          , v = function(e) {
            function t() {
                return u()(this, t),
                m()(this, f()(t).call(this, "Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id."))
            }
            return g()(t, e),
            t
        }(n.n(h)()(Error))
          , x = n("./src/screens/ContentErrorScreen.tsx")
          , E = n("./src/screens/ErrorScreen.tsx")
          , y = n("./src/screens/NotFoundScreen.tsx")
          , O = n("./src/screens/SuspendedScreen.tsx");
        function w() {
            var e = o()(["\n  fragment UnavailableForLegalReasonsScreen_unavailableForLegalReasons on UnavailableForLegalReasons {\n    lumenId\n  }\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        function C(e) {
            var t = e.errorData;
            return i.createElement(x.a, {
                code: 451,
                title: "451 Not available — Medium",
                description: "This story is subject to a DMCA copyright or other legal or government claim.",
                lumenId: t.lumenId
            })
        }
        var _ = s()(w());
        function j() {
            var e = o()(["\n  fragment WithheldInCountryScreen_withheldInCountry on WithheldInCountry {\n    lumenId\n  }\n"]);
            return j = function() {
                return e
            }
            ,
            e
        }
        function S(e) {
            var t = e.errorData;
            return i.createElement(x.a, {
                code: 451,
                title: "451 Not available in your country — Medium",
                description: "This page is not available in your country.",
                lumenId: t.lumenId
            })
        }
        var k = s()(j());
        function P() {
            var e = o()(["\n  fragment PostResultError_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n    }\n    ... on UnavailableForLegalReasons {\n      ...UnavailableForLegalReasonsScreen_unavailableForLegalReasons\n    }\n    ... on WithheldInCountry {\n      ...WithheldInCountryScreen_withheldInCountry\n    }\n  }\n  ", "\n  ", "\n"]);
            return P = function() {
                return e
            }
            ,
            e
        }
        var I = function(e) {
            return !e || "Post" !== e.__typename
        }
          , T = function(e) {
            var t = e.postResult;
            if (!t)
                return i.createElement(E.a, {
                    error: new v
                });
            switch (t.__typename) {
            case "Unauthorized":
                return i.createElement(l.a, {
                    opt_isDraft: !0
                });
            case "NotFound":
                return i.createElement(y.a, null);
            case "AccountDeleted":
                return i.createElement(x.a, {
                    code: 410,
                    title: "410 Deleted by author — Medium",
                    description: "User deactivated or deleted their account."
                });
            case "AccountSuspended":
                return i.createElement(O.a, {
                    suspension: "account"
                });
            case "PostSuspended":
                return i.createElement(O.a, {
                    suspension: "post"
                });
            case "Blocked":
                return i.createElement(x.a, {
                    code: 403,
                    title: "403 Blocked — Medium",
                    description: "This user had blocked you from following them or viewing their stories."
                });
            case "RemovedByUser":
                return i.createElement(x.a, {
                    code: 410,
                    title: "410 Deleted by author — Medium",
                    description: "The author deleted this Medium story."
                });
            case "UnavailableForLegalReasons":
                return i.createElement(C, {
                    errorData: t
                });
            case "WithheldInCountry":
                return i.createElement(S, {
                    errorData: t
                });
            default:
                return i.createElement(E.a, {
                    error: new Error("Unsupported postResult: ".concat(t.__typename))
                })
            }
        }
          , R = s()(P(), _, k)
    },
    "./src/components/footer/GlobalFooter.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return y
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./node_modules/react-redux/es/index.js")
          , i = n("./src/components/metabar/Logo.tsx")
          , l = n("./src/components/session/useFlag.tsx")
          , c = n("./src/components/session/useViewer.tsx")
          , u = n("./src/components/ui/AndroidAppDownloadButton.tsx")
          , d = n("./src/components/ui/IosAppDownloadButton.tsx")
          , m = n("./src/framework/design-system/components/index.ts")
          , p = n("./src/framework/design-system/type/index.ts")
          , f = n("./src/framework/style/index.ts")
          , b = n("./src/styles/colors.ts")
          , g = n("./src/util/routes.ts");
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function x(e) {
            var t = e.authDomain
              , n = e.productName;
            return a.createElement(m.b, {
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "0",
                margin: "0 12px"
            }, a.createElement(m.b, {
                paddingBottom: "8px"
            }, a.createElement(m.t, {
                href: Object(g.ob)(t)
            }, a.createElement(p.c, {
                scale: "S"
            }, "Become a member"))), a.createElement(p.b, {
                scale: "M"
            }, "Get unlimited access to the best stories on ", n, " — and support writers while you’re at it. Just $5/month.", " ", a.createElement(m.t, {
                href: Object(g.ob)(t),
                inline: !0,
                linkStyle: "OBVIOUS"
            }, "Upgrade")))
        }
        var E = function(e) {
            var t = e.authDomain
              , n = e.productName;
            return a.createElement(m.b, {
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "0",
                margin: "0 12px"
            }, a.createElement(m.b, {
                paddingBottom: "8px"
            }, a.createElement(m.t, {
                href: Object(g.ec)(t, "members")
            }, a.createElement(p.c, {
                scale: "S"
            }, "Explore your membership"))), a.createElement(p.b, {
                scale: "M"
            }, "Thank you for being a member of ", n, ". You get unlimited access to insightful stories from amazing thinkers and storytellers.", " ", a.createElement(m.t, {
                href: Object(g.ec)(t, "members"),
                inline: !0,
                linkStyle: "OBVIOUS"
            }, "Browse")))
        }
          , y = function(e) {
            var t = e.slimFooter
              , n = Object(s.f)((function(e) {
                return {
                    authDomain: e.config.authDomain,
                    productName: e.config.productName
                }
            }
            ), s.d)
              , r = n.authDomain
              , o = n.productName
              , h = !!Object(l.a)("enable_footer_app_buttons")
              , y = Object(f.useTheme)()
              , O = Object(c.b)()
              , w = v({}, y, {
                baseColor: v({}, y.baseColor, {
                    background: {
                        light: b.z(.76),
                        normal: b.z(.84),
                        dark: b.z(.9)
                    },
                    border: {
                        lighter: b.C(.1),
                        light: b.C(.2),
                        normal: b.C(.34),
                        dark: b.C(.54),
                        darker: b.C(.84)
                    },
                    fill: {
                        lighter: b.C(.7),
                        light: b.C(.8),
                        normal: b.C(.98),
                        dark: b.C(.99),
                        darker: b.C(1)
                    },
                    text: {
                        lighter: b.C(.7),
                        light: b.C(.8),
                        normal: b.C(.98),
                        dark: b.C(.99),
                        darker: b.C(1)
                    }
                })
            });
            return a.createElement(m.F, {
                theme: w
            }, a.createElement(m.b, {
                backgroundColor: "BASE_DARK",
                padding: "".concat(t ? "32px" : "60px", " 0"),
                sm: {
                    padding: "32px 0"
                }
            }, a.createElement(m.v, null, t ? null : a.createElement(m.b, {
                borderBottom: "BASE_DARK",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "32px",
                paddingBottom: "48px",
                sm: {
                    display: "none"
                }
            }, a.createElement(m.b, {
                display: "flex",
                justifyContent: "space-between",
                margin: "0 -12px"
            }, a.createElement(m.b, {
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "0",
                margin: "0 12px"
            }, a.createElement(m.b, {
                paddingBottom: "8px"
            }, a.createElement(m.t, {
                href: Object(g.a)({
                    authDomain: r,
                    autoplay: !0
                })
            }, a.createElement(p.c, {
                scale: "S"
            }, "Discover ", o))), a.createElement(p.b, {
                scale: "M"
            }, "Welcome to a place where words matter. On ", o, ", smart voices and original ideas take center stage - with no ads in sight.", " ", a.createElement(m.t, {
                href: Object(g.a)({
                    authDomain: r,
                    autoplay: !0
                }),
                inline: !0,
                linkStyle: "OBVIOUS"
            }, "Watch"))), a.createElement(m.b, {
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "0",
                margin: "0 12px"
            }, a.createElement(m.b, {
                paddingBottom: "8px"
            }, a.createElement(m.t, {
                href: Object(g.fc)(r)
            }, a.createElement(p.c, {
                scale: "S"
            }, "Make ", o, " yours"))), a.createElement(p.b, {
                scale: "M"
            }, "Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox.", " ", a.createElement(m.t, {
                href: Object(g.fc)(r),
                inline: !0,
                linkStyle: "OBVIOUS"
            }, "Explore"))), O && O.mediumMemberAt ? a.createElement(E, {
                authDomain: r,
                productName: o
            }) : a.createElement(x, {
                authDomain: r,
                productName: o
            }))), a.createElement(m.b, {
                display: "flex",
                flexDirection: "column"
            }, a.createElement(m.b, {
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between"
            }, a.createElement(m.t, {
                href: "https://".concat(r, "/")
            }, a.createElement(i.c, null)), a.createElement(p.b, {
                scale: "M"
            }, a.createElement(m.b, {
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "8px",
                width: "200px",
                sm: {
                    display: "flex",
                    width: "140px"
                }
            }, a.createElement(p.b, {
                color: "DARKER",
                scale: "L"
            }, a.createElement(m.t, {
                href: Object(g.a)({
                    authDomain: r
                }),
                inline: !0
            }, "About")), a.createElement(p.b, {
                color: "DARKER",
                scale: "L"
            }, a.createElement(m.t, {
                href: Object(g.Z)(),
                inline: !0
            }, "Help")), a.createElement(p.b, {
                color: "DARKER",
                scale: "L"
            }, a.createElement(m.t, {
                href: Object(g.fb)(),
                inline: !0
            }, "Legal"))))), h && a.createElement(a.Fragment, null, a.createElement(m.b, {
                display: "none",
                sm: {
                    display: "flex",
                    marginBottom: "16px",
                    marginTop: "30px"
                }
            }, a.createElement(p.b, {
                color: "LIGHTER",
                scale: "L"
            }, "Get the Medium app")), a.createElement(m.b, {
                display: "none",
                sm: {
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "16px",
                    width: "100%"
                }
            }, a.createElement(m.b, {
                marginRight: "16px"
            }, a.createElement(d.a, {
                entryPoint: "postPageFooter"
            })), a.createElement(m.b, null, a.createElement(u.a, {
                entryPoint: "postPageFooter"
            }))))))))
        }
    },
    "./src/components/format/ElapsedTimeDate.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./node_modules/date-fns/index.js")
          , o = n("./src/components/format/Date.tsx");
        function a(e) {
            var t = e.timestamp
              , n = Date.now()
              , a = Object(r.differenceInHours)(n, t);
            if (0 === a)
                return "Just now";
            if (a >= 1 && a < 24)
                return "".concat(a, " hour").concat(a > 1 ? "s" : "", " ago");
            var s = Object(r.differenceInDays)(n, t);
            return s >= 1 && s < 7 ? "".concat(s, " day").concat(s > 1 ? "s" : "", " ago") : Object(o.a)({
                timestamp: t
            })
        }
    },
    "./src/components/meter/ContentWall.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/framework/design-system/components/index.ts")
          , a = n("./src/styles/colors.ts")
          , s = function(e) {
            var t = e.children;
            return r.createElement(r.Fragment, null, r.createElement(o.b, {
                marginTop: "-240px",
                background: "linear-gradient(".concat(Object(a.C)(0), ",\n        ").concat(Object(a.C)(.5), ",\n        ").concat(Object(a.C)(1), ")"),
                height: "250px",
                position: "relative",
                width: "100%"
            }), r.createElement(o.b, {
                backgroundColor: "BACKGROUND"
            }, r.createElement(o.b, {
                margin: "auto",
                maxWidth: "760px",
                sm: {
                    margin: "0 18px 0"
                }
            }, t)))
        }
    },
    "./src/components/meter/MeterController.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return Y
        }
        )),
        n.d(t, "c", (function() {
            return K
        }
        )),
        n.d(t, "b", (function() {
            return Q
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/typeof.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , u = n("./node_modules/graphql-tag/src/index.js")
          , d = n.n(u)
          , m = n("./node_modules/react/index.js")
          , p = n("./node_modules/react-redux/es/index.js")
          , f = n("./node_modules/@babel/runtime/helpers/extends.js")
          , b = n.n(f)
          , g = n("./node_modules/pluralize/pluralize.js")
          , h = n.n(g)
          , v = n("./src/components/cta/HighlightCTA.tsx")
          , x = n("./src/components/optimizely/OptimizelyWrapper.tsx")
          , E = n("./src/framework/design-system/components/index.ts")
          , y = function(e) {
            var t = e.featureString
              , n = e.link
              , r = e.text
              , o = e.showTrialMeter;
            return m.createElement(x.a, {
                featureString: t,
                target: o ? "cc-trial-highlight-box" : "highlight-box"
            }, m.createElement(v.a, null, m.createElement(x.a, {
                featureString: t,
                target: o ? "cc-trial-copy" : "copy",
                tag: "span"
            }, r, " "), m.createElement(E.b, {
                display: "inline",
                whiteSpace: "nowrap"
            }, m.createElement(x.a, {
                featureString: t,
                target: o ? "cc-trial-link" : "link",
                tag: "span"
            }, n))))
        }
          , O = n("./src/components/session/useFlag.tsx")
          , w = n("./src/components/session/useViewer.tsx")
          , C = n("./src/components/susi/helpers/types.ts")
          , _ = n("./src/components/upsell/UpsellClickable.tsx")
          , j = n("./src/framework/reporter/index.ts")
          , S = n("./src/framework/source/index.ts")
          , k = n("./src/framework/track/UpsellPresentationTracker.tsx")
          , P = n("./src/util/routes.ts");
        function I() {
            var e = o()(["\n  fragment LIHighlightMeter_post on Post {\n    id\n    ...UpsellClickable_post\n  }\n  ", "\n"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        var T = function(e, t) {
            return e <= 0 ? m.createElement(m.Fragment, null, "This is your ", m.createElement("b", null, "last"), " free ", t && "member-only", " story this month.") : m.createElement(m.Fragment, null, "You have ", m.createElement("b", null, e), " free ", t && "member-only", " ", h()("story", e), " left this month.")
        }
          , R = function(e) {
            var t = e.meterCount
              , n = e.meterLimit
              , r = e.post
              , o = Object(w.b)()
              , a = Object(j.c)()
              , s = null == o ? void 0 : o.isMembershipTrialEligible
              , i = !(!Object(O.a)("enable_trial_upsell") || !s)
              , l = "li-highlight-meter-".concat(t);
            m.useEffect((function() {
                a.event("meter.viewed", {
                    uiType: C.a.LIHighlightCTA,
                    postId: r.id,
                    meterCount: t,
                    userId: null == o ? void 0 : o.id
                }),
                s && a.event("experiment.eligible", {
                    experimentId: "6797776ba4cf"
                })
            }
            ), []);
            var c = Object(p.f)((function(e) {
                return {
                    authDomain: e.config.authDomain
                }
            }
            )).authDomain
              , u = m.createElement(k.a, {
                tag: "span"
            }, m.createElement(_.a, b()({
                linkStyle: "OBVIOUS",
                post: r
            }, i && {
                redirectUrl: Object(P.wb)(c)
            }), i ? "Start your free trial" : "Upgrade for unlimited access."));
            return m.createElement(S.b, {
                source: {
                    dimension: "post_counter",
                    name: "upgrade_membership",
                    postId: r.id
                }
            }, m.createElement(y, {
                featureString: l,
                text: T(n - t, i),
                link: u,
                showTrialMeter: i
            }))
        }
          , A = d()(I(), _.b)
          , L = n("./src/components/susi/SusiClickable.tsx");
        function M() {
            var e = o()(["\n  fragment LOHighlightMeter_post on Post {\n    id\n  }\n"]);
            return M = function() {
                return e
            }
            ,
            e
        }
        var B = function(e) {
            switch (e) {
            case 1:
                return m.createElement(m.Fragment, null, "You have ", m.createElement("b", null, "2"), " free stories left this month.");
            case 2:
                return m.createElement(m.Fragment, null, "You have ", m.createElement("b", null, "1"), " free story left this month.");
            case 3:
                return m.createElement(m.Fragment, null, "This is your ", m.createElement("b", null, "last"), " free story this month.");
            default:
                return m.createElement(m.Fragment, null, "You've read all your free stories this month.")
            }
        }
          , D = function(e) {
            var t = e.meterCount
              , n = e.post
              , r = function(e) {
                switch (e) {
                case 3:
                    return "metered_view_3";
                case 2:
                    return "metered_view_2";
                case 1:
                default:
                    return "smart_meter"
                }
            }(t)
              , o = Object(j.c)()
              , a = "lo-highlight-meter-".concat(t);
            m.useEffect((function() {
                o.event("meter.viewed", {
                    uiType: C.a.LOHighlightCTA,
                    postId: n.id,
                    meterCount: t
                })
            }
            ), []);
            var s = m.createElement(L.a, {
                linkStyle: "OBVIOUS",
                operation: "register"
            }, "Sign up and get an extra one for free.");
            return m.createElement(S.b, {
                source: {
                    susiEntry: r,
                    postId: n.id
                }
            }, m.createElement(y, {
                featureString: a,
                text: B(t),
                link: s,
                showTrialMeter: !1
            }))
        }
          , N = d()(M())
          , U = n("./src/components/read-next/ReadNext.tsx")
          , F = n("./src/components/session/WithViewer.tsx")
          , H = n("./src/components/susi/susi-modal/SusiContainer.tsx")
          , V = n("./src/screens/helpers/visits.ts")
          , z = n("./src/store/actions/branch.ts");
        function G() {
            var e = o()(["\n  fragment MeterController_meteringInfo on MeteringInfo {\n    postIds\n    maxUnlockCount\n  }\n"]);
            return G = function() {
                return e
            }
            ,
            e
        }
        function q() {
            var e = o()(["\n  fragment MeterController_post on Post {\n    creator {\n      id\n    }\n    isLocked\n    lockedSource\n    ...LIHighlightMeter_post\n    ...LOHighlightMeter_post\n    ...SusiContainer_post\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return q = function() {
                return e
            }
            ,
            e
        }
        var W = function(e) {
            var t = e.meteringInfo
              , n = e.post
              , r = e.viewer
              , o = m.useState(!1)
              , a = l()(o, 2)
              , s = a[0]
              , i = a[1]
              , c = t.maxUnlockCount || 3
              , u = t.postIds.length;
            return u <= c ? Object(V.o)() && Object(U.b)(r) ? (Object(V.h)(),
            null) : (s || i(!0),
            m.createElement(R, {
                meterCount: u,
                post: n,
                meterLimit: c
            })) : null
        }
          , $ = function(e) {
            var t = e.meterCount
              , n = e.post
              , r = m.useState(!1)
              , o = l()(r, 2)
              , a = o[0]
              , s = o[1];
            switch (t) {
            case 1:
            case 2:
            case 3:
                return a || s(!0),
                m.createElement(D, {
                    meterCount: t,
                    post: n
                });
            default:
                return null
            }
        }
          , Y = function(e) {
            var t = e.meteringInfo
              , n = e.post
              , r = Object(p.e)()
              , o = m.useState(!1)
              , a = l()(o, 2)
              , i = a[0]
              , u = a[1];
            m.useEffect((function() {
                void 0 !== ("undefined" == typeof document ? "undefined" : s()(document)) && u(!0),
                r(Object(z.f)(!1))
            }
            ), []);
            var d = Object(c.e)(F.a)
              , f = d.loading
              , b = d.error
              , g = d.data
              , h = (g = void 0 === g ? {
                viewer: void 0
            } : g).viewer;
            if (f || b)
                return m.createElement(m.Fragment, null);
            var v = h && h.mediumMemberAt || void 0
              , x = n && n.creator && n.creator.id || void 0
              , E = h && h.id || void 0
              , y = h ? v || x === E : "LOCKED_POST_SOURCE_SYNDICATED" === n.lockedSource
              , O = !i || !n.isLocked || !t.postIds.includes(n.id) || y
              , w = h ? m.createElement(W, {
                meteringInfo: t,
                post: n,
                viewer: h
            }) : m.createElement($, {
                meterCount: t.postIds.length,
                post: n
            });
            return m.createElement(m.Fragment, null, !O && w)
        }
          , K = d()(q(), A, N, H.e)
          , Q = d()(G())
    },
    "./src/components/meter/PayWall.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return M
        }
        )),
        n.d(t, "a", (function() {
            return L
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/components/meter/ContentWall.tsx")
          , u = n("./src/components/optimizely/OptimizelyWrapper.tsx")
          , d = n("./src/components/session/useFlag.tsx")
          , m = n("./src/components/session/useViewer.tsx")
          , p = n("./src/components/style/BaseThemeProvider.tsx")
          , f = n("./src/components/susi/alternate-user/AlternateUserEmail.tsx")
          , b = n("./src/components/susi/alternate-user/AlternateUserSocial.tsx")
          , g = n("./src/components/susi/alternate-user/NotYou.tsx")
          , h = n("./src/components/susi/alternate-user/SusiAlternateUserController.tsx")
          , v = n("./src/components/upsell/UpsellClickable.tsx")
          , x = n("./src/framework/design-system/components/index.ts")
          , E = n("./src/framework/design-system/type/index.ts")
          , y = n("./src/framework/design-system/type/Detail.tsx")
          , O = n("./src/framework/reporter/index.ts")
          , w = n("./src/framework/source/index.ts")
          , C = n("./src/framework/track/UpsellPresentationTracker.tsx")
          , _ = n("./src/screens/helpers/users.ts")
          , j = n("./src/store/actions/navigation.ts")
          , S = n("./src/util/routes.ts");
        function k() {
            var e = o()(["\n  fragment PayWall_post on Post {\n    id\n  }\n"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        var P = function(e, t) {
            var n = e ? Object(_.b)(e) : null;
            return t ? "Switch to your member account for unlimited reading." : i.createElement(x.b, {
                textAlign: "left",
                sm: {
                    marginBottom: "5px",
                    textAlign: "center"
                }
            }, n && n.length <= 13 ? "".concat(n, ", get unlimited access.") : "Get unlimited access.")
        }
          , I = i.createElement(x.b, {
            textAlign: "left",
            sm: {
                textAlign: "center"
            }
        }, "You've read all of your free stories this month. Become a member to keep reading.")
          , T = function(e) {
            var t = e.optimizelyFeatureString
              , n = e.post
              , r = e.viewer
              , o = e.showTrialPaywall
              , a = e.authDomain;
            return i.createElement(w.b, {
                source: {
                    dimension: "post_limit",
                    name: "upgrade_membership",
                    postId: n.id
                }
            }, i.createElement(C.a, null, i.createElement(x.b, {
                display: "inline-block",
                textAlign: "center"
            }, i.createElement(u.a, {
                featureString: t,
                target: o ? "trial-upsell-button" : "upsell-button-".concat(r && r.hasPastMemberships ? "resume-membership" : "upgrade")
            }, i.createElement(v.a, {
                isButton: !0,
                buttonStyle: o ? "BRAND" : "STRONG",
                width: o || r && r.hasPastMemberships ? "182px" : "104px",
                redirectUrl: o ? Object(S.wb)(a) : Object(S.xb)(a)
            }, o ? "Start your free trial" : r && r.hasPastMemberships ? "Resume membership" : "Upgrade")))))
        }
          , R = function(e) {
            var t = e.declineSuggestedAccount
              , n = e.userSocialLogins
              , r = Object(l.e)();
            return i.createElement(i.Fragment, null, i.createElement(x.b, {
                display: "flex",
                sm: {
                    flexDirection: "column"
                }
            }, i.createElement(x.b, {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }, n.facebook || n.google || n.twitter ? i.createElement(b.a, {
                userSocialLogins: n
            }) : i.createElement(f.a, {
                onSuccess: function() {
                    return r(Object(j.s)({
                        step: "CHECK_YOUR_INBOX",
                        operation: "login",
                        susiEntry: "post_paywall"
                    }))
                },
                userId: n.userId
            }, (function(e) {
                var t = e.handleSubmit;
                return i.createElement(x.c, {
                    buttonStyle: "SOCIAL",
                    size: "REGULAR",
                    onClick: t
                }, "Send login link")
            }
            )))), t && i.createElement(x.b, {
                marginTop: "10px",
                marginRight: "5px",
                sm: {
                    marginTop: "20px"
                },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }, i.createElement(y.a, {
                scale: "M"
            }, i.createElement(g.a, {
                declineSuggestedAccount: t,
                isSocial: !!n && !!(n.facebook || n.google || n.twitter)
            }))))
        }
          , A = function(e) {
            var t = e.declineSuggestedAccount
              , n = e.userSocialLogins
              , r = e.suggestedAccountEventData
              , o = e.showSuggestedAccount
              , a = e.postId;
            return i.createElement(w.b, {
                source: {
                    dimension: "post_limit_suggestion",
                    name: "upgrade_membership",
                    postId: a
                }
            }, i.createElement(C.a, {
                eventData: r
            }, i.createElement(x.b, {
                display: "inline-block",
                textAlign: "center"
            }, i.createElement(R, {
                declineSuggestedAccount: t,
                showSuggestedAccount: o,
                userSocialLogins: n
            }), i.createElement(x.b, {
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
                sm: {
                    justifyContent: "center"
                }
            }, i.createElement(y.a, {
                scale: "L"
            }, i.createElement(v.a, {
                eventData: r,
                linkStyle: "OBVIOUS"
            }, "Learn more about membership"))))))
        }
          , L = function(e) {
            var t = e.post
              , n = Object(l.f)((function(e) {
                return {
                    productName: e.config.productName,
                    sessionUserId: e.session.user.id,
                    authDomain: e.config.authDomain
                }
            }
            ), l.d)
              , r = n.productName
              , o = n.sessionUserId
              , a = n.authDomain
              , s = Object(m.b)()
              , f = Object(O.c)()
              , b = null == s ? void 0 : s.isMembershipTrialEligible
              , g = !(!Object(d.a)("enable_trial_upsell") || !b);
            i.useEffect((function() {
                b && f.event("experiment.eligible", {
                    experimentId: "6797776ba4cf"
                })
            }
            ), []);
            var v = "paywall";
            return i.createElement(p.b, null, i.createElement(c.a, null, i.createElement(h.a, {
                postRenderCallback: function() {}
            }, (function(e) {
                var n, l, c, d = e.loading, m = e.showSuggestedAccount, p = e.declineSuggestedAccount, f = e.userSocialLogins;
                return d ? i.createElement(i.Fragment, null) : (m && (v = "suggested-account-paywall"),
                m && (n = {
                    alternateUserSuggestionShown: m,
                    alternateUserSuggestionAccountType: Object(_.a)(f),
                    alternateUserSuggestionTargetUserId: !!f && f.userId,
                    alternateUserSuggestionSourceUserId: s ? s.id : o
                }),
                i.createElement(i.Fragment, null, i.createElement(u.a, {
                    featureString: v,
                    target: g ? "trial-background-color" : "background-color"
                }, i.createElement(x.b, {
                    display: "flex",
                    minHeight: "350px",
                    justifyContent: "center",
                    textAlign: "center",
                    sm: {
                        flexDirection: "column"
                    }
                }, i.createElement(x.b, {
                    display: "flex",
                    flexDirection: "column",
                    padding: "48px 50px",
                    sm: {
                        padding: "28px 16px 32px",
                        textAlign: "center"
                    }
                }, i.createElement(u.a, {
                    featureString: v,
                    target: g ? "webCCTrialHeading" : "fewerClicksHeading"
                }, i.createElement(E.d, {
                    scale: {
                        xs: "S",
                        sm: "S",
                        md: "M",
                        lg: "M",
                        xl: "M"
                    }
                }, m ? P(s && s.name, m) : g ? (l = s && s.name,
                c = l ? Object(_.b)(l) : null,
                i.createElement(x.b, {
                    textAlign: "center",
                    sm: {
                        marginBottom: "5px",
                        textAlign: "center"
                    }
                }, c && c.length <= 13 ? "".concat(c, ", keep reading.") : "Keep reading.")) : P(s && s.name, m))), i.createElement(y.a, {
                    scale: {
                        xs: "M",
                        sm: "M",
                        md: "L",
                        lg: "L",
                        xl: "L"
                    },
                    color: "DARKER"
                }, !m && !g && i.createElement(i.Fragment, null, i.createElement(u.a, {
                    featureString: v,
                    target: "second-header-fewer-clicks"
                }, i.createElement(x.b, {
                    marginTop: "8px",
                    marginBottom: "28px",
                    sm: {
                        display: "inline-block"
                    }
                }, I)), i.createElement(x.b, {
                    display: "flex",
                    justifyContent: "flex-start",
                    sm: {
                        justifyContent: "center"
                    }
                }, i.createElement(T, {
                    optimizelyFeatureString: v,
                    post: t,
                    viewer: s,
                    showTrialPaywall: g,
                    authDomain: a
                }))), i.createElement(u.a, {
                    featureString: v,
                    target: g ? "subtitle-copy-web-cc-trial" : "subtitle-copy-fewer-clicks"
                }, i.createElement(x.b, {
                    marginTop: m ? "28px" : "8px",
                    marginBottom: "28px",
                    paddingRight: "6px",
                    paddingLeft: "6px",
                    sm: {
                        display: "inline-block"
                    }
                }, m ? function(e, t) {
                    if (e) {
                        var n = e.isMember
                          , r = e.redactedEmailAddress;
                        return i.createElement(i.Fragment, null, "Looks like you're coming from the ", n && "member ", "account", " ", i.createElement("b", null, r), " but you’re signed in as ", i.createElement("b", null, null == t ? void 0 : t.email), ". Switch to your", n ? " member account for unlimited access" : " account", ".")
                    }
                }(f, s) : g ? function(e) {
                    return i.createElement(x.b, {
                        marginTop: "28px",
                        marginBottom: "28px"
                    }, "You’ve reached your limit of free member-only stories this month. Get unlimited access to every idea on ", e, ", free for 1 month. If it's not for you, cancel anytime.")
                }(r) : function(e) {
                    return i.createElement(x.b, {
                        marginTop: "28px",
                        marginBottom: "28px",
                        textAlign: "left"
                    }, "Here's what you get when you upgrade to membership:", i.createElement(x.b, {
                        marginTop: "28px",
                        marginBottom: "28px"
                    }, i.createElement("b", null, "Unlimited access. "), " Explore ", e, "'s library filled with everything you're curious about."), i.createElement(x.b, {
                        marginBottom: "28px"
                    }, i.createElement("b", null, "No ads."), " There are zero ads on ", e, " and we don't sell your data."), i.createElement(x.b, {
                        marginBottom: "28px"
                    }, i.createElement("b", null, "Reward quality writing."), " When you spend time reading a story, a portion of your membership fee will go directly to its author."), i.createElement(x.b, {
                        marginBottom: "28px"
                    }, '"I love ', e, "'s membership — it gives me access to the stories I love by the writers I love, and it allows me to help support those writers financially.\"", i.createElement("br", null), " ", i.createElement("b", null, "—Kayt Molina, ", e, " member ")))
                }(r)))), !!m && f && i.createElement(A, {
                    declineSuggestedAccount: p,
                    userSocialLogins: f,
                    suggestedAccountEventData: n,
                    showSuggestedAccount: m,
                    postId: t.id
                }), g && !m && i.createElement(T, {
                    optimizelyFeatureString: v,
                    post: t,
                    viewer: s,
                    showTrialPaywall: g,
                    authDomain: a
                }))))))
            }
            ))))
        }
          , M = s()(k())
    },
    "./src/components/meter/RegWall.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return _
        }
        )),
        n.d(t, "c", (function() {
            return j
        }
        )),
        n.d(t, "b", (function() {
            return S
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/metabar/OpenInApp.tsx")
          , c = n("./src/components/meter/ContentWall.tsx")
          , u = n("./src/components/optimizely/OptimizelyWrapper.tsx")
          , d = n("./src/components/style/BaseThemeProvider.tsx")
          , m = n("./src/components/susi/SusiClickable.tsx")
          , p = n("./src/components/susi/helpers/types.ts")
          , f = n("./src/components/susi/oauth-buttons/FacebookSusiButton.tsx")
          , b = n("./src/components/susi/oauth-buttons/GoogleSusiButton.tsx")
          , g = n("./src/framework/design-system/components/index.ts")
          , h = n("./src/framework/design-system/type/index.ts")
          , v = n("./src/framework/reporter/index.ts")
          , x = n("./src/framework/source/index.ts")
          , E = n("./src/framework/track/SusiPresentationTracker.tsx");
        function y() {
            var e = o()(["\n  fragment RegWall_meteringInfo on MeteringInfo {\n    postIds\n  }\n"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        function O() {
            var e = o()(["\n  fragment RegWall_post on Post {\n    id\n    lockedSource\n    ...SusiClickable_post\n  }\n  ", "\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        var w = function(e) {
            var t = e.isSyndicated;
            return i.createElement(h.d, {
                scale: {
                    xs: "S",
                    sm: "S",
                    md: "M",
                    lg: "M",
                    xl: "M"
                }
            }, i.createElement(g.b, {
                display: "none",
                sm: {
                    display: "block"
                }
            }, "To keep reading this story, get the free app or log in."), i.createElement(g.b, {
                display: "block",
                sm: {
                    display: "none"
                }
            }, t ? "This story is just a click away." : "To keep reading this story, create a free account."))
        }
          , C = function(e) {
            var t = e.meterCount
              , n = e.optimizelyFeatureString
              , r = e.postId
              , o = {
                operation: "register"
            };
            return i.createElement(g.b, {
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                sm: {
                    flexDirection: "column"
                }
            }, i.createElement(u.a, {
                featureString: n,
                target: "google-button"
            }, i.createElement(g.b, {
                margin: "62px 0 10px",
                sm: {
                    margin: "40px 0 12px 0"
                }
            }, i.createElement(E.a, {
                eventData: {
                    meterCount: t,
                    operation: o.operation,
                    postId: r
                }
            }, i.createElement(b.a, o)))), i.createElement(u.a, {
                featureString: n,
                target: "fb-button"
            }, i.createElement(g.b, {
                marginBottom: "52px",
                sm: {
                    marginBottom: "40px"
                }
            }, i.createElement(E.a, {
                eventData: {
                    meterCount: t,
                    operation: o.operation,
                    postId: r
                }
            }, i.createElement(f.a, o)))))
        }
          , _ = function(e) {
            var t = e.meteringInfo
              , n = e.post
              , r = Object(v.c)()
              , o = "LOCKED_POST_SOURCE_SYNDICATED" === n.lockedSource
              , a = "".concat(o ? "syndicated-" : "", "regwall");
            return i.useEffect((function() {
                r.event("meter.viewed", {
                    meterCount: null == t ? void 0 : t.postIds.length,
                    postId: n.id,
                    uiType: o ? p.a.SyndicatedRegwall : p.a.RegWall
                })
            }
            ), []),
            i.createElement(d.b, null, i.createElement(x.b, {
                source: {
                    susiEntry: "post_regwall",
                    postId: n.id
                }
            }, i.createElement(c.a, null, i.createElement(u.a, {
                featureString: a,
                target: "background-color"
            }, i.createElement(g.b, {
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                sm: {
                    flexDirection: "column",
                    textAlign: "center"
                }
            }, i.createElement(g.b, {
                padding: "48px 56px",
                sm: {
                    padding: "28px 16px 48px"
                }
            }, i.createElement(u.a, {
                featureString: a,
                target: "heading"
            }, i.createElement(w, {
                isSyndicated: o
            })), i.createElement(h.b, {
                color: "DARKER",
                scale: {
                    xs: "M",
                    sm: "M",
                    md: "L",
                    lg: "L",
                    xl: "L"
                }
            }, i.createElement(g.b, {
                display: "none",
                sm: {
                    display: "block"
                }
            }, i.createElement(g.b, {
                margin: "42px 0"
            }, i.createElement(l.a, {
                isButton: !0,
                postId: n.id,
                appEntry: "regwall"
            })), i.createElement(u.a, {
                featureString: a,
                target: "skip-app-copy"
            }, i.createElement(g.b, {
                marginBottom: "-20px"
            }, "Or, continue in mobile web"))), i.createElement(C, {
                meterCount: null == t ? void 0 : t.postIds.length,
                optimizelyFeatureString: a,
                postId: n.id
            }), i.createElement(u.a, {
                featureString: a,
                target: "sign-in-copy",
                tag: "span"
            }, "Already have an account?", " "), i.createElement(u.a, {
                featureString: a,
                target: "sign-in-link",
                tag: "span"
            }, i.createElement(m.a, {
                linkStyle: "OBVIOUS",
                operation: "login",
                post: n
            }, "Sign in")))))))))
        }
          , j = s()(O(), m.d)
          , S = s()(y())
    },
    "./src/components/mutations/DeletePostMutation.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , s = n("./node_modules/graphql-tag/src/index.js");
        function i() {
            var e = o()(["\n  mutation DeletePostMutation($targetPostId: ID!) {\n    deletePost(targetPostId: $targetPostId)\n  }\n"]);
            return i = function() {
                return e
            }
            ,
            e
        }
        var l = n.n(s)()(i())
          , c = function(e) {
            var t = e ? {
                variables: {
                    targetPostId: e
                }
            } : {};
            return Object(a.d)(l, t)
        }
    },
    "./src/components/mutations/SetPinnedAtMutation.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js");
        function s() {
            var e = o()(["\n  mutation setPinnedAt($postId: ID!, $collectionId: ID!, $pinnedAt: Boolean!) {\n    __typename\n    setPinnedAt(targetPostId: $postId, targetCollectionId: $collectionId, pinnedAt: $pinnedAt) {\n      __typename\n      ... on Post {\n        id\n        collection {\n          id\n        }\n        pendingCollection {\n          id\n        }\n        pinnedAt\n      }\n    }\n  }\n"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        var i = n.n(a)()(s())
    },
    "./src/components/mutations/UserBlockMutation.tsx": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , s = n("./node_modules/graphql-tag/src/index.js")
          , i = n.n(s)
          , l = n("./node_modules/react/index.js")
          , c = n("./node_modules/react-redux/es/index.js")
          , u = n("./src/store/actions/navigation.ts");
        function d() {
            var e = o()(["\n  mutation UserBlockMutation($targetUserId: ID!, $userId: ID!) {\n    blockUser(userId: $userId, targetUserId: $targetUserId) {\n      id\n      isBlocking\n    }\n  }\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        var m = i()(d());
        t.a = Object(c.c)()((function(e) {
            var t = e.children
              , n = e.dispatch
              , r = e.targetUserId
              , o = e.viewerId
              , s = e.onCompleted;
            return l.createElement(a.a, {
                mutation: m,
                onCompleted: function() {
                    n(Object(u.m)({
                        message: "Successfully blocked user."
                    })),
                    s && s()
                },
                variables: {
                    targetUserId: r,
                    userId: o
                },
                optimisticResponse: {
                    __typename: "Mutation",
                    blockUser: {
                        __typename: "User",
                        id: r,
                        isBlocking: !0
                    }
                }
            }, (function(e) {
                return t({
                    mutate: e
                })
            }
            ))
        }
        ))
    },
    "./src/components/mutations/UserReportStoryMutation.tsx": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , s = n("./node_modules/graphql-tag/src/index.js")
          , i = n.n(s)
          , l = n("./node_modules/react/index.js")
          , c = n("./node_modules/react-redux/es/index.js")
          , u = n("./src/store/actions/navigation.ts");
        function d() {
            var e = o()(["\n  mutation UserReportStoryMutation(\n    $targetPostId: ID!\n    $targetAuthorId: ID!\n    $alsoBlockAuthor: Boolean!\n    $reason: String!\n  ) {\n    reportStoryAndMaybeBlockAuthor(\n      targetPostId: $targetPostId\n      targetAuthorId: $targetAuthorId\n      alsoBlockAuthor: $alsoBlockAuthor\n      reason: $reason\n    ) {\n      id\n      isBlocking\n    }\n  }\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        var m = i()(d());
        t.a = Object(c.c)()((function(e) {
            var t = e.targetAuthorId
              , n = e.targetPostId
              , r = e.dispatch
              , o = e.children
              , s = e.onOptimisticComplete
              , i = e.isBlocking;
            return l.createElement(a.a, {
                mutation: m,
                onCompleted: function() {
                    r(Object(u.m)({
                        message: "Successfully reported post."
                    }))
                }
            }, (function(e) {
                return o({
                    mutate: function(r, o) {
                        var a = e({
                            variables: {
                                targetAuthorId: t,
                                targetPostId: n,
                                alsoBlockAuthor: r,
                                reason: o
                            },
                            optimisticResponse: {
                                __typename: "Mutation",
                                reportStoryAndMaybeBlockAuthor: {
                                    __typename: "User",
                                    id: t,
                                    isBlocking: i || r
                                }
                            }
                        });
                        return s && s(),
                        a
                    }
                })
            }
            ))
        }
        ))
    },
    "./src/components/mutations/UserUnblockMutation.tsx": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , s = n("./node_modules/graphql-tag/src/index.js")
          , i = n.n(s)
          , l = n("./node_modules/react/index.js")
          , c = n("./node_modules/react-redux/es/index.js")
          , u = n("./src/store/actions/navigation.ts");
        function d() {
            var e = o()(["\n  mutation UserUnblockMutation($targetUserId: ID!, $userId: ID!) {\n    unblockUser(userId: $userId, targetUserId: $targetUserId) {\n      id\n      isBlocking\n    }\n  }\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        var m = i()(d());
        t.a = Object(c.c)()((function(e) {
            var t = e.children
              , n = e.dispatch
              , r = e.targetUserId
              , o = e.viewerId
              , s = e.onCompleted;
            return l.createElement(a.a, {
                mutation: m,
                onCompleted: function() {
                    n(Object(u.m)({
                        message: "Successfully unblocked user."
                    })),
                    s && s()
                },
                variables: {
                    targetUserId: r,
                    userId: o
                },
                optimisticResponse: {
                    __typename: "Mutation",
                    unblockUser: {
                        __typename: "User",
                        id: r,
                        isBlocking: !1
                    }
                }
            }, (function(e) {
                return t({
                    mutate: e
                })
            }
            ))
        }
        ))
    },
    "./src/components/newsletter-v3/GetNewsletterButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n.n(r)
          , a = n("./src/framework/design-system/components/index.ts")
          , s = n("./src/framework/reporter/index.ts")
          , i = n("./src/framework/source/index.ts")
          , l = n("./src/framework/style/index.ts");
        function c() {
            return (c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var u = o.a.createElement("path", {
            d: "M0 .35v15.3h20V.35H0zm6.95 9.38l3.05 2.5 3.05-2.5 4.88 4.73H2.07l4.88-4.73zM1.2 13.64V5.02l4.82 3.94-4.82 4.68zm12.78-4.68l4.82-3.94v8.62l-4.82-4.68zm4.82-7.42v1.94l-8.8 7.2-8.8-7.2V1.54h17.6z"
        })
          , d = function(e) {
            return o.a.createElement("svg", c({
                width: 20,
                height: 16,
                viewBox: "0 0 20 16"
            }, e), u)
        }
          , m = function(e) {
            var t = e.buttonSize
              , n = void 0 === t ? "LARGE" : t
              , o = e.buttonStyle
              , c = void 0 === o ? "STRONG" : o
              , u = e.newsletterV3Id
              , m = e.showMailIcon
              , p = void 0 === m || m
              , f = e.onClick
              , b = e.width
              , g = Object(i.f)()
              , h = Object(s.c)()
              , v = Object(l.useCx)();
            return r.createElement(a.c, {
                buttonStyle: c,
                onClick: function() {
                    h.event("newsletterV3.subscribeClicked", {
                        newsletterV3Id: u,
                        source: g
                    }),
                    f()
                },
                size: n,
                width: b
            }, p && r.createElement("span", {
                className: v((function() {
                    return {
                        marginRight: "8px"
                    }
                }
                )),
                "aria-hidden": "true"
            }, r.createElement(d, null)), "Get this newsletter")
        }
    },
    "./src/components/newsletter-v3/NewsletterV3Promo.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return w
        }
        )),
        n.d(t, "a", (function() {
            return _
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./node_modules/react-redux/es/index.js")
          , d = n("./src/components/newsletter-v3/NewsletterV3SubscribeButton.tsx")
          , m = n("./src/components/newsletter-v3/NewsletterV3SubscribeByEmail.tsx")
          , p = n("./src/components/session/useFlag.tsx")
          , f = n("./src/components/session/useViewer.tsx")
          , b = n("./src/framework/design-system/components/index.ts")
          , g = n("./src/framework/design-system/type/index.ts")
          , h = n("./src/framework/reporter/index.ts")
          , v = n("./src/framework/source/index.ts")
          , x = n("./src/framework/style/index.ts")
          , E = n("./src/styles/breakpoints.ts")
          , y = n("./src/util/routes.ts");
        function O() {
            var e = s()(["\n  fragment NewsletterV3Promo_collection on Collection {\n    id\n    slug\n    domain\n    name\n    viewerIsEditor\n    newsletterV3 {\n      slug\n      name\n      description\n      ...NewsletterV3SubscribeButton_newsletterV3\n      ...NewsletterV3SubscribeByEmail_newsletterV3\n    }\n  }\n  ", "\n  ", "\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        var w = l()(O(), d.b, m.b)
          , C = function(e) {
            return o()({
                borderTop: "3px solid ".concat(e.accentColor.border.normal),
                padding: "32px 32px 26px 32px",
                marginTop: "8px",
                marginBottom: "25px",
                backgroundColor: e.baseColor.background.normal
            }, E.sm(e), {
                padding: "24px 24px 28px 24px"
            })
        }
          , _ = function(e) {
            var t, n = e.collection, r = Object(u.f)((function(e) {
                return e.config.authDomain
            }
            )), o = Object(x.useCx)(), a = Object(h.c)(), s = Object(f.c)(), i = s.loading, l = s.value, E = !!Object(p.a)("enable_logged_out_newsletter_subscription");
            c.useEffect((function() {
                i || l || a.event("experiment.eligible", {
                    experimentId: "3881612c3ab9"
                })
            }
            ), [l]);
            var O = n.newsletterV3
              , w = Object(y.v)(n, null !== (t = null == O ? void 0 : O.slug) && void 0 !== t ? t : "", r);
            return c.createElement(v.b, {
                source: {
                    name: "newsletter_v3_promo",
                    susiEntry: "newsletter_v3_promo"
                }
            }, c.createElement("div", {
                className: o(C)
            }, c.createElement(g.c, {
                scale: {
                    xs: "S",
                    sm: "S",
                    md: "M",
                    lg: "M",
                    xl: "M"
                }
            }, "Sign up for ".concat(null == O ? void 0 : O.name)), c.createElement(b.b, {
                paddingTop: "4px"
            }, c.createElement(g.b, {
                tag: "h3",
                scale: "S",
                color: "DARKER"
            }, "By ".concat(n.name))), c.createElement(b.b, {
                paddingTop: "8px",
                paddingBottom: "10px"
            }, c.createElement(g.b, {
                scale: {
                    xs: "M",
                    sm: "M",
                    md: "L",
                    lg: "L",
                    xl: "L"
                },
                color: "DARKER",
                tag: "p"
            }, null == O ? void 0 : O.description, " ", c.createElement(b.t, {
                inline: !0,
                linkStyle: "OBVIOUS",
                href: w
            }, "Take a look"))), n.viewerIsEditor ? c.createElement(b.b, {
                paddingTop: "10px"
            }, c.createElement(g.b, {
                scale: "M",
                color: "DARKER"
            }, "You're an editor of ", null == O ? void 0 : O.name)) : c.createElement(b.b, {
                display: "flex",
                flexWrap: "wrap"
            }, O && (!l && E ? c.createElement(m.a, {
                newsletterV3: O
            }) : c.createElement(d.a, {
                newsletterV3: O,
                buttonLayout: "COMPACT",
                helperTextColor: "DARKER"
            })))))
        }
    },
    "./src/components/newsletter-v3/NewsletterV3SubscribeButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return j
        }
        )),
        n.d(t, "a", (function() {
            return S
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/components/collection/CollectionMetabar.tsx")
          , u = n("./src/components/newsletter-v3/GetNewsletterButton.tsx")
          , d = n("./src/components/newsletter-v3/NewsletterV3UnsubscribeToast.tsx")
          , m = n("./src/components/newsletter-v3/useNewsletterV3Subscription.tsx")
          , p = n("./src/components/publisher/auroraHooks.ts")
          , f = n("./src/components/session/useFlag.tsx")
          , b = n("./src/components/session/useViewer.tsx")
          , g = n("./src/components/susi/SusiClickable.tsx")
          , h = n("./src/framework/design-system/components/index.ts")
          , v = n("./src/framework/design-system/components/portal/ui/Toast.tsx")
          , x = n("./src/framework/design-system/type/index.ts")
          , E = n("./src/framework/source/index.ts")
          , y = n("./src/framework/source/SourceContext.tsx")
          , O = n("./src/store/actions/navigation.ts")
          , w = n("./src/util/routes.ts")
          , C = n("./src/util/theme.ts");
        function _() {
            var e = o()(["\n  fragment NewsletterV3SubscribeButton_newsletterV3 on NewsletterV3 {\n    id\n    name\n    isSubscribed\n    ...SusiClickable_newsletterV3\n    collection {\n      ...CollectionMetabar_collection\n      ...SusiClickable_collection\n      ...auroraHooks_publisher\n      ...collectionDefaultBackgroundTheme_collection\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return _ = function() {
                return e
            }
            ,
            e
        }
        var j = s()(_(), c.c, g.b, g.c, p.a, C.e)
          , S = function(e) {
            var t = e.newsletterV3
              , n = e.buttonLayout
              , r = void 0 === n ? "MULTI-LINE" : n
              , o = e.helperTextColor
              , a = void 0 === o ? "LIGHTER" : o
              , s = e.showHelperText
              , c = void 0 === s || s
              , _ = e.showMailIcon
              , j = void 0 === _ || _
              , S = e.buttonSize
              , k = void 0 === S ? "LARGE" : S
              , P = e.buttonStyle
              , I = void 0 === P ? "STRONG" : P
              , T = Object(b.b)()
              , R = t.id
              , A = t.name
              , L = t.collection ? t.collection : void 0
              , M = Object(O.u)()
              , B = !!Object(f.a)("enable_logged_out_newsletter_subscription")
              , D = Object(p.d)(t.collection)
              , N = Object(l.f)((function(e) {
                return {
                    interstitial: e.navigation.interstitial,
                    referrerSource: e.navigation.referrerSource
                }
            }
            ), l.d)
              , U = N.referrerSource
              , F = N.interstitial
              , H = Object(m.a)(t.id, t.isSubscribed)
              , V = H.isSubscribed
              , z = H.hasUserUnsubscribed
              , G = H.hasError
              , q = H.setSubscribe
              , W = H.setHasUserUnsubscribed;
            i.useEffect((function() {
                "unsubscribe-newsletter" === F && W(!0)
            }
            ), []),
            i.useEffect((function() {
                if (B && U) {
                    var e = Object(y.c)(U || "").susiEntry;
                    ["collection_newsletter_v3_landing", "newsletter_v3_promo"].includes(void 0 === e ? "" : e) && V && M({
                        duration: "NEXTPAGE",
                        message: "",
                        toastStyle: "NEWSLETTER_SUBSCRIBE",
                        extraParams: {
                            newsletterName: null == t ? void 0 : t.name,
                            unsubscribeFn: function() {
                                return q(!1)
                            }
                        }
                    })
                }
            }
            ), [U]);
            var $ = function(e) {
                var t = e.children;
                return i.createElement(h.b, {
                    margin: "COMPACT" === r ? "10px 20px 10px 0" : "",
                    xs: {
                        margin: "10px 0 0 0"
                    }
                }, t)
            }
              , Y = function(e) {
                var t = e.children;
                return i.createElement(h.b, {
                    maxWidth: "COMPACT" === r ? "330px" : "",
                    margin: "COMPACT" === r ? "10px 0 10px 0" : "10px 0 0 0"
                }, i.createElement(x.b, {
                    scale: "S",
                    color: a,
                    tag: "p"
                }, t))
            }
              , K = function() {
                var e = Object(w.Yb)(R)
                  , n = {
                    buttonSize: k,
                    buttonStyle: I,
                    newsletterV3Id: t.id,
                    onClick: function() {
                        T && q(!0)
                    },
                    showMailIcon: j
                };
                return i.createElement($, null, T ? i.createElement(u.a, n) : i.createElement(g.a, {
                    operation: "register",
                    newsletterV3: t,
                    collection: L,
                    actionUrl: e
                }, i.createElement(u.a, n)))
            }
              , Q = function() {
                return i.createElement(E.b, {
                    source: {
                        newsletterV3Id: t.id
                    },
                    extendSource: !0
                }, i.createElement(K, null), T ? c && i.createElement(Y, null, "Emails will be sent to ", T.email, ".", i.createElement(h.b, null, i.createElement(g.a, {
                    operation: "login",
                    newsletterV3: t,
                    collection: L
                }, i.createElement(h.t, {
                    onClick: function() {},
                    linkStyle: "OBVIOUS",
                    inline: !0,
                    target: "_blank"
                }, "Not you?")))) : i.createElement(Y, null, "Create a free Medium account to get ", t.name, " in your inbox."))
            }
              , X = function() {
                return i.createElement(i.Fragment, null, i.createElement($, null, i.createElement(h.c, {
                    buttonStyle: "SUBTLE",
                    size: "SMALL",
                    onClick: function() {
                        return q(!1)
                    }
                }, "Unsubscribe")), c && i.createElement(Y, null, "You're signed up for ", A, "."))
            };
            return i.createElement(i.Fragment, null, i.createElement(h.L, null, (function(e) {
                return i.createElement(h.F, {
                    theme: Object(C.d)(L, e, D)
                }, V ? i.createElement(X, null) : i.createElement(Q, null))
            }
            )), G && i.createElement(v.a, {
                toastStyle: "RETRYABLE_ERROR",
                isVisible: G,
                hide: function() {}
            }), z && i.createElement(d.a, {
                name: t.name || ""
            }))
        }
    },
    "./src/components/newsletter-v3/NewsletterV3SubscribeByEmail.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return R
        }
        )),
        n.d(t, "b", (function() {
            return L
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , u = n("./node_modules/graphql-tag/src/index.js")
          , d = n.n(u)
          , m = n("./node_modules/react/index.js")
          , p = n("./node_modules/react-redux/es/index.js")
          , f = n("./src/components/newsletter-v3/GetNewsletterButton.tsx")
          , b = n("./src/components/publisher/auroraHooks.ts")
          , g = n("./src/components/susi/GoogleRecaptcha.tsx")
          , h = n("./src/components/susi/helpers/index.ts")
          , v = n("./src/components/susi/susi-modal/SusiContainer.tsx")
          , x = n("./src/components/ui/Input.tsx")
          , E = n("./src/framework/design-system/components/index.ts")
          , y = n("./src/framework/design-system/type/index.ts")
          , O = n("./src/framework/source/index.ts")
          , w = n("./src/framework/style/index.ts")
          , C = n("./src/framework/track/SusiPresentationTracker.tsx")
          , _ = n("./src/util/email.ts")
          , j = n("./src/util/routes.ts")
          , S = n("./src/util/theme.ts");
        function k() {
            var e = o()(["\n  fragment NewsletterV3SubscribeByEmail_newsletterV3 on NewsletterV3 {\n    id\n    slug\n    collection {\n      ...auroraHooks_publisher\n      ...collectionDefaultBackgroundTheme_collection\n      ...collectionUrl_collection\n    }\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        function P() {
            var e = o()(["\n  mutation SendNewsletterSubscriptionAcctAuthEmail(\n    $newsletterV3Id: String!\n    $email: String!\n    $redirect: String\n    $captchaValue: String\n    $operation: String\n  ) {\n    sendNewsletterSubscriptionAcctAuthEmail(\n      newsletterV3Id: $newsletterV3Id\n      email: $email\n      redirect: $redirect\n      captchaValue: $captchaValue\n      operation: $operation\n    ) {\n      ... on SusiMethod {\n        value\n      }\n      ... on BadRequest {\n        message\n      }\n      ... on FailedChallenge {\n        message\n      }\n      ... on NotFound {\n        message\n      }\n    }\n  }\n"]);
            return P = function() {
                return e
            }
            ,
            e
        }
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function T(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    s()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var R = function(e) {
            var t = e.centerContent
              , n = void 0 !== t && t
              , r = e.newsletterV3
              , o = Object(w.useTheme)()
              , a = Object(O.d)()
              , s = Object(O.g)()
              , i = Object(p.f)((function(e) {
                return {
                    authDomain: e.config.authDomain,
                    currentLocation: e.navigation.currentLocation,
                    productName: e.config.productName
                }
            }
            ), p.d)
              , u = i.authDomain
              , d = i.currentLocation
              , k = i.productName
              , P = m.useState("")
              , I = l()(P, 2)
              , R = I[0]
              , L = I[1]
              , M = m.useState("")
              , B = l()(M, 2)
              , D = B[0]
              , N = B[1]
              , U = m.useState(!1)
              , F = l()(U, 2)
              , H = F[0]
              , V = F[1]
              , z = m.useState(!1)
              , G = l()(z, 2)
              , q = G[0]
              , W = G[1]
              , $ = m.useState(!1)
              , Y = l()($, 2)
              , K = Y[0]
              , Q = Y[1]
              , X = m.useState("")
              , J = l()(X, 2)
              , Z = J[0]
              , ee = J[1]
              , te = null == d.match("http[s]?://[^/]*".concat(u))
              , ne = r.collection
              , re = r.id
              , oe = r.slug
              , ae = Object(j.Yb)(re)
              , se = ne ? Object(j.v)(ne, oe, u) : d;
            Object(c.e)(v.a, {
                fetchPolicy: "no-cache",
                skip: !ae || te,
                onCompleted: function(e) {
                    var t = e.accountToken;
                    return t && ee(Object(h.a)(se, a, s, ae, t))
                }
            });
            var ie = Object(b.d)(ne)
              , le = function(e) {
                L(e),
                V(!0),
                setTimeout((function() {
                    return V(!1)
                }
                ), x.a),
                W(!1)
            }
              , ce = function() {
                Object(_.a)(D) ? W(!0) : le("Enter a valid email address.")
            }
              , ue = function() {
                le("We couldn't process your request. Try again, or contact our support team.")
            }
              , de = Object(c.d)(A, {
                onCompleted: function(e) {
                    switch (e.sendNewsletterSubscriptionAcctAuthEmail.__typename) {
                    case "SusiMethod":
                        N(D),
                        Q(!0);
                        break;
                    case "BadRequest":
                        le("Enter a valid email address.");
                        break;
                    case "FailedChallenge":
                    case "NotFound":
                    default:
                        ue()
                    }
                },
                onError: ue
            })
              , me = l()(de, 1)[0]
              , pe = {
                newsletterV3Id: re,
                email: D,
                operation: "register",
                redirect: Z
            };
            return m.createElement(E.F, {
                theme: Object(S.d)(ne, o, ie)
            }, m.createElement(E.b, {
                alignItems: n ? "center" : "flex-start",
                display: "flex",
                flexDirection: "column",
                justifyContent: n ? "center" : "flex-start"
            }, m.createElement(g.a, {
                callback: function(e) {
                    me({
                        variables: T({
                            captchaValue: e
                        }, pe)
                    })
                },
                shouldExecuteRecaptcha: q
            }), m.createElement(E.b, {
                display: K ? "none" : "inline"
            }, m.createElement(E.b, {
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                sm: {
                    alignItems: n ? "center" : "flex-start",
                    flexDirection: "column",
                    height: "130px",
                    paddingTop: "16px"
                },
                height: "56px"
            }, m.createElement(E.b, {
                marginTop: R && "25px",
                sm: {
                    marginTop: "0"
                }
            }, m.createElement(x.b, {
                autoFocus: !1,
                errorMessage: R,
                handleInputChange: function(e) {
                    N(e.target.value.trim())
                },
                handleSubmit: ce,
                input: D,
                inputType: x.c.EMAIL,
                isAnimating: H,
                textAlign: "start",
                placeholder: "Your email",
                width: "375px"
            })), m.createElement(E.b, {
                marginBottom: "auto",
                marginLeft: "15px",
                sm: {
                    marginLeft: "0px",
                    marginTop: "15px"
                }
            }, m.createElement(C.a, {
                eventData: {
                    operation: "register"
                }
            }, m.createElement(f.a, {
                newsletterV3Id: re,
                onClick: ce
            })))), m.createElement(E.b, {
                paddingTop: R && "20px",
                marginTop: "10px",
                sm: {
                    marginTop: "0"
                }
            }, m.createElement(y.b, {
                scale: "XS"
            }, "By signing up, you will create a ", k, " account if you don’t already have one. Review our", " ", m.createElement(E.t, {
                href: Object(j.Gb)(),
                linkStyle: "OBVIOUS",
                inline: !0,
                target: "blank"
            }, "Privacy Policy"), " ", "for more information about our privacy practices."))), m.createElement(E.b, {
                display: K ? "inline" : "none",
                marginBottom: "15px",
                marginTop: "5px"
            }, m.createElement(y.b, {
                color: "DARKER",
                scale: "M"
            }, m.createElement("b", null, "Check your inbox"), m.createElement("br", null), k, " sent you an email at ", D, " to complete your subscription."))))
        }
          , A = d()(P())
          , L = d()(k(), b.a, S.e, j.J)
    },
    "./src/components/newsletter-v3/NewsletterV3UnsubscribeToast.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./node_modules/react-redux/es/index.js")
          , a = n("./src/framework/design-system/components/index.ts")
          , s = n("./src/framework/design-system/components/portal/ui/Toast.tsx")
          , i = n("./src/framework/design-system/type/index.ts")
          , l = n("./src/util/routes.ts")
          , c = function(e) {
            var t = e.name
              , n = Object(o.f)((function(e) {
                return e.config.authDomain
            }
            ));
            return r.createElement(a.I, {
                initialVisibility: !0
            }, (function(e) {
                var o = e.hide;
                return e.isVisible && r.createElement(s.a, {
                    isVisible: !0,
                    toastStyle: "NEWSLETTER_UNSUBSCRIBE",
                    duration: 5e3,
                    hide: function() {}
                }, r.createElement(i.g, {
                    scale: "S",
                    color: "DARKER"
                }, r.createElement(r.Fragment, null, "You have unsubscribed from ", r.createElement("b", null, t), ". Changes will take effect within 24 hours.", " ", r.createElement(a.t, {
                    inline: !0,
                    href: Object(l.Fc)(n),
                    linkStyle: "OBVIOUS"
                }, "Manage all my email settings"))), r.createElement(a.g, {
                    onClick: function() {
                        o()
                    },
                    isPositionAbsolute: !1,
                    size: "SMALL"
                }))
            }
            ))
        }
    },
    "./src/components/newsletter-v3/useNewsletterV3Subscription.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return g
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , l = n("./node_modules/graphql-tag/src/index.js")
          , c = n.n(l)
          , u = n("./node_modules/react/index.js")
          , d = n("./src/framework/reporter/index.ts");
        function m() {
            var e = s()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function p() {
            var e = s()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!) {\n    subscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        var f = c()(p())
          , b = c()(m())
          , g = function(e, t) {
            var n = u.useState(t)
              , r = o()(n, 2)
              , a = r[0]
              , s = r[1]
              , l = u.useState(!1)
              , c = o()(l, 2)
              , m = c[0]
              , p = c[1]
              , g = u.useState(!1)
              , h = o()(g, 2)
              , v = h[0]
              , x = h[1]
              , E = Object(d.c)();
            m && E.event("newsletterV3.subscribe.error", {
                newsletterV3Id: e
            });
            var y = Object(i.d)(f, {
                variables: {
                    newsletterV3Id: e
                },
                onCompleted: function(e) {
                    var t = e.subscribeNewsletterV3;
                    p(!t),
                    t && s(!0)
                }
            })
              , O = o()(y, 1)[0]
              , w = Object(i.d)(b, {
                variables: {
                    newsletterV3Id: e
                },
                onCompleted: function(e) {
                    var t = e.unsubscribeNewsletterV3;
                    p(!t),
                    t && (s(!1),
                    x(!0))
                }
            })
              , C = o()(w, 1)[0];
            return {
                isSubscribed: a,
                hasUserUnsubscribed: v,
                hasError: m,
                setSubscribe: function(e) {
                    p(!1),
                    x(!1),
                    e ? O() : C()
                },
                setHasUserUnsubscribed: x
            }
        }
    },
    "./src/components/optimizely/helpers/index.ts": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "c", (function() {
            return u
        }
        )),
        n.d(t, "d", (function() {
            return d
        }
        )),
        n.d(t, "b", (function() {
            return m
        }
        ));
        var r, o = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"), a = n.n(o), s = n("./node_modules/graphql-tag/src/index.js"), i = n.n(s);
        function l() {
            var e = a()(["\n  fragment optimizelyData_post on Post {\n    creator {\n      name\n    }\n    collection {\n      name\n    }\n    primaryTopic {\n      name\n    }\n  }\n"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        !function(e) {
            e.TopicSelected = "TopicSelected",
            e.UserConvertedToTrialMember = "UserConvertedToTrialMember"
        }(r || (r = {}));
        var c = function() {
            return "undefined" != typeof window
        }
          , u = function(e, t, n) {
            var r = e.post;
            if (c()) {
                c() && (window.optimizelyDataObject = {});
                var o = r || {}
                  , a = o.creator
                  , s = o.collection
                  , i = o.primaryTopic;
                a && a.name && (window.optimizelyDataObject.author = a.name),
                s && s.name && (window.optimizelyDataObject.publication = s.name),
                i && i.name && (window.optimizelyDataObject.topic = i.name),
                t && (window.optimizelyDataObject.firstName = t),
                n && (window.optimizelyDataObject.trialRenewalDate = n)
            }
        }
          , d = function(e) {
            c() && void 0 !== window.optimizely && window.optimizely.push({
                type: "event",
                eventName: e
            })
        }
          , m = i()(l())
    },
    "./src/components/post-listing/PostListingItemRecirc.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return w
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./node_modules/react-redux/es/index.js")
          , d = n("./src/components/post/PostByline.tsx")
          , m = n("./src/components/post/PostRecircItemV2.tsx")
          , p = n("./src/components/post/bookmark/index.ts")
          , f = n("./src/components/post/multivote/MultiVote.tsx")
          , b = n("./src/components/session/WithFlag.tsx")
          , g = n("./src/components/ui/image/FocusableMiroImage.tsx")
          , h = n("./src/framework/design-system/components/index.ts")
          , v = n("./src/framework/design-system/type/Detail.tsx")
          , x = n("./src/framework/source/index.ts")
          , E = n("./src/framework/track/index.ts")
          , y = n("./src/util/routes.ts");
        function O() {
            var e = s()(["\n  fragment PostListingItemRecirc_post on Post {\n    __typename\n    id\n    title\n    isLocked\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n    ...PostByline_post\n    ...PostPresentationTracker_post\n    ...BookmarkButton_post\n    ...MultiVote_post\n    ...PostRecircItemV2_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        var w = l()(O(), d.a, E.c, p.b, f.b, m.a)
          , C = function(e) {
            var t = e.height
              , n = e.width;
            return {
                paddingBottom: "".concat(t / n * 100, "%"),
                position: "relative"
            }
        }
          , _ = {
            height: "100%",
            position: "absolute",
            width: "100%"
        }
          , j = function(e) {
            var t = e.title
              , n = e.url;
            return c.createElement(h.f, {
                href: n
            }, c.createElement(h.r, {
                size: "h4",
                tag: "h3"
            }, t))
        }
          , S = c.forwardRef((function(e, t) {
            var n, r, a = e.post, s = e.productName, i = c.useState(!1), l = o()(i, 2), u = l[0], m = l[1], O = c.useCallback((function(e) {
                !u && e.isIntersecting && m(!0)
            }
            ), [u]);
            if (Object(E.f)({
                onIntersect: O,
                target: t,
                disconnect: function() {
                    return u
                },
                rootMargin: "100px"
            }, [u]),
            "SuggestedPost" === a.__typename ? (n = function(e, t) {
                var n, r, o, a;
                switch (e && e[0] && e[0].reason) {
                case "TOP_SIMILAR_TO_POST":
                case "CF_POST_SIMILAR_TO_POST":
                    return "Related reads";
                case "TOP_IN_TOPIC":
                    return a = e[0].topics ? e[0].topics[0].name : "topic",
                    "Popular in ".concat(a);
                case "POSTS_SHARING_AUTHOR":
                    return n = e[0].users ? e[0].users[0].name : "author",
                    "More from ".concat(n);
                case "POSTS_SHARING_TAGS":
                    return (o = e[0].tags && e[0].tags[0].name) ? "Also tagged ".concat(o) : "";
                case "TOP_IN_COLLECTION":
                    return r = e[0].collections ? e[0].collections[0].name : "publication",
                    "More from ".concat(r);
                case "TOP_FOR_THE_DAY_GLOBALLY":
                    return "Top on ".concat(t);
                case "POSTS_SHARING_COLLECTION_AND_TAGS":
                    return o = e[0].tags && e[0].tags[0].name,
                    r = e[0].collections ? e[0].collections[0].name : "publication",
                    o ? "More on ".concat(o, " from ").concat(r) : "";
                case "RECOMMENDED_BY_AUTHOR":
                    return (n = e[0].users && e[0].users[0].name) ? "Applause from ".concat(n) : "";
                case "TOP_FOR_THE_DAY":
                    return "Trending on ".concat(t);
                default:
                    return "Picked for you"
                }
            }(a.postSuggestionReasons, s),
            r = a.post) : r = a,
            !r)
                return null;
            var w, S, k, P, I, T, R, A = r.previewImage ? r.previewImage.id : "", L = (w = {
                id: A || "1*hn4v1tCaJy7cWMyb0bpNpQ.png",
                width: 328,
                height: 218,
                focusPercentX: r.previewImage ? r.previewImage.focusPercentX : null,
                focusPercentY: r.previewImage ? r.previewImage.focusPercentY : null
            },
            k = w.id,
            P = w.width,
            I = w.height,
            T = w.focusPercentX,
            R = w.focusPercentY,
            k ? (S = "number" == typeof T && "number" == typeof R ? [T, R] : [50, 50],
            c.createElement(h.J, null, (function(e) {
                return c.createElement("div", {
                    className: e(C({
                        height: I,
                        width: P
                    }))
                }, c.createElement("div", {
                    className: e(_)
                }, c.createElement(g.a, {
                    miroId: k,
                    imgHeight: I,
                    imgWidth: P,
                    width: "100%",
                    height: "100%",
                    freezeGifs: !1,
                    focusPercent: S
                })))
            }
            ))) : null);
            return c.createElement(E.b, {
                post: r,
                presentationContext: "PLACEMENT"
            }, c.createElement(h.b, {
                md: {
                    marginBottom: "48px"
                }
            }, c.createElement(h.j, {
                alignItems: {
                    xs: "flex-start",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                    xl: "flex-start"
                },
                direction: {
                    xs: "row",
                    sm: "row-reverse",
                    md: "row-reverse",
                    lg: "row",
                    xl: "row"
                }
            }, c.createElement(h.k, {
                size: {
                    xs: 12,
                    sm: 6,
                    md: 6,
                    lg: 12,
                    xl: 12
                }
            }, n && c.createElement(h.b, {
                marginBottom: "12px",
                md: {
                    display: "none"
                },
                xs: {
                    display: "block"
                }
            }, c.createElement(v.a, {
                scale: "M"
            }, n)), L && c.createElement(h.b, {
                marginBottom: "16px",
                md: {
                    marginBottom: "0px"
                },
                xs: {
                    marginBottom: "16px"
                }
            }, c.createElement(h.t, {
                display: "block",
                href: Object(y.Db)(r)
            }, u ? L : null))), c.createElement(h.k, {
                size: {
                    xs: 12,
                    sm: 6,
                    md: 6,
                    lg: 12,
                    xl: 12
                }
            }, c.createElement(h.b, {
                marginBottom: "16px"
            }, n && c.createElement(h.b, {
                display: "none",
                marginBottom: "4px",
                md: {
                    display: "block"
                },
                xs: {
                    display: "none"
                }
            }, c.createElement(v.a, {
                scale: "M"
            }, n)), c.createElement(j, {
                title: r.title ? r.title : "",
                url: Object(y.Db)(r)
            })), c.createElement(h.b, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }, c.createElement(h.b, {
                flexShrink: "1",
                marginRight: "10px"
            }, c.createElement(b.a, {
                name: "remove_stars_ui"
            }, (function(e) {
                return c.createElement(d.b, {
                    post: r,
                    showBio: !1,
                    scale: "S",
                    showStar: !e && !!r.isLocked,
                    hideAvatar: !u
                })
            }
            ))), c.createElement(h.b, {
                display: "flex",
                alignItems: "center"
            }, c.createElement(x.b, {
                source: {
                    susiEntry: "clap_preview"
                },
                extendSource: !0
            }, c.createElement(f.a, {
                post: r,
                buttonStyle: "SUBTLE"
            })), c.createElement(h.b, {
                borderRight: "BASE_LIGHTER",
                marginLeft: "12px",
                marginRight: "10px",
                height: "20px",
                width: "1px"
            }), c.createElement(p.a, {
                post: r
            })))))))
        }
        ));
        t.b = Object(u.c)((function(e) {
            return {
                productName: e.config.productName
            }
        }
        ), null, null, {
            forwardRef: !0
        })(S)
    },
    "./src/components/post/EmbeddedPost.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return f
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/components/post/EmbeddedPostContext.tsx")
          , u = n("./src/framework/source/index.ts")
          , d = n("./src/framework/style/index.ts")
          , m = n("./src/handlers/EmbeddedPostHandler.tsx");
        function p() {
            var e = o()(["\n  fragment EmbeddedPost_post on Post {\n    id\n    tags {\n      ...TagList_tags\n    }\n    topics {\n      topicId\n      name\n    }\n  }\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        s()(p());
        var f = Object(l.c)((function(e) {
            return {
                embedPostRules: e.config.embedPostRules
            }
        }
        ))((function(e) {
            var t = e.postId
              , n = e.sourcePost
              , r = e.embedPostRules
              , o = t || n && function(e, t) {
                var n;
                return e ? (t.map((function(t) {
                    var r, o;
                    return n || (((null === (r = e.topics) || void 0 === r ? void 0 : r.some((function(e) {
                        var n, r;
                        return !!(null == t || null === (n = t.topics) || void 0 === n ? void 0 : n.includes((null == e || null === (r = e.name) || void 0 === r ? void 0 : r.toLowerCase()) || ""))
                    }
                    ))) || (null === (o = e.tags) || void 0 === o ? void 0 : o.some((function(e) {
                        var n, r;
                        return !!(null == t || null === (n = t.tags) || void 0 === n ? void 0 : n.includes((null == e || null === (r = e.id) || void 0 === r ? void 0 : r.toLowerCase()) || ""))
                    }
                    )))) && (n = t.embedPostId),
                    n)
                }
                )),
                n) : n
            }(n, r);
            return o ? i.createElement(m.a, {
                postId: o
            }, (function(e) {
                var t = Object(d.useCx)();
                return e ? i.createElement(c.a.Provider, {
                    value: !0
                }, i.createElement(u.b, {
                    source: {
                        name: "embedded_post"
                    }
                }, i.createElement("div", {
                    className: t({
                        padding: {
                            xs: "16px 0",
                            sm: "16px 0",
                            md: "18px 0",
                            lg: "24px 0",
                            xl: "32px 0"
                        },
                        marginBottom: "25px"
                    })
                }, e))) : null
            }
            )) : null
        }
        ))
    },
    "./src/components/post/InResponseToPostPreview.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return E
        }
        )),
        n.d(t, "c", (function() {
            return y
        }
        )),
        n.d(t, "b", (function() {
            return O
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/post/paragraph/TextParagraph.tsx")
          , c = n("./src/components/stream/Quote.tsx")
          , u = n("./src/components/ui/Card.tsx")
          , d = n("./src/framework/design-system/components/index.ts")
          , m = n("./src/schema-types/globalTypes.ts")
          , p = n("./src/svg/clap-filled-19px.svg")
          , f = n("./src/svg/response-filled-19px.svg")
          , b = n("./src/util/numbers.ts")
          , g = n("./src/util/quote.ts")
          , h = n("./src/util/routes.ts");
        function v() {
            var e = o()(["\n  fragment InResponseToPostPreview_mediaResource on Post {\n    inResponseToMediaResource {\n      mediumQuote {\n        ...Quote_quote\n      }\n    }\n  }\n  ", "\n"]);
            return v = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = o()(["\n  fragment InResponseToPostPreview_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n      title\n      mediumUrl\n      creator {\n        id\n        name\n      }\n      clapCount\n      responsesCount\n    }\n  }\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        var E = function(e) {
            var t, n = e.inResponseToPostResult, r = e.inResponseToMediaResource, o = e.padding;
            if (n)
                switch (n.__typename) {
                case "Post":
                    t = n
                }
            if (!t)
                return null;
            var a = t.title
              , s = t.creator && t.creator.name
              , c = parseInt(t.clapCount, 10)
              , v = t.responsesCount || 0
              , x = r && r.mediumQuote && Object(g.b)(r.mediumQuote)
              , E = x && x.type;
            if (E === m.l.IMG || E === m.l.IFRAME || E === m.l.COVER_TITLE || E === m.l.HR || E === m.l.MIXTAPE_EMBED || E === m.l.SECTION_CAPTION)
                return null;
            var y = i.createElement(d.f, {
                href: Object(h.Db)(t)
            }, i.createElement(u.a, null, i.createElement(d.z, {
                ui: "REGULAR"
            }, i.createElement(d.b, {
                paddingLeft: "20px",
                paddingRight: "20px"
            }, x && E && i.createElement(d.b, {
                paddingBottom: "20px"
            }, i.createElement(l.g, {
                paragraph: x,
                paragraphStyle: E,
                spaceTop: 10,
                richTextStyle: "STREAM"
            })), i.createElement(d.b, {
                display: "flex"
            }, i.createElement(d.b, {
                display: "flex",
                flexGrow: "1",
                flexShrink: "1",
                alignItems: "center"
            }, i.createElement(d.d, {
                strong: !0,
                clamp: 1
            }, a)), i.createElement(d.d, null, i.createElement(d.b, {
                display: "flex",
                flexGrow: "0",
                alignItems: "center"
            }, c > 0 ? i.createElement(d.b, {
                display: "flex",
                alignItems: "center"
            }, i.createElement(d.b, {
                tag: p.a,
                marginRight: "4px"
            }), i.createElement("div", null, Object(b.d)(c))) : null, v > 0 ? i.createElement(d.b, {
                display: "flex",
                alignItems: "center"
            }, i.createElement(d.b, {
                tag: f.a,
                marginLeft: "8px",
                marginRight: "4px"
            }), i.createElement("div", null, Object(b.d)(v))) : null))), i.createElement(d.d, null, s)))));
            return o ? i.createElement(d.b, {
                padding: o
            }, y) : y
        }
          , y = s()(x())
          , O = s()(v(), c.a)
    },
    "./src/components/post/MaybeRedirectToEditor.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return p
        }
        )),
        n.d(t, "a", (function() {
            return f
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/components/navigation/Redirect.tsx")
          , u = n("./src/components/session/WithViewer.tsx")
          , d = n("./src/util/routes.ts");
        function m() {
            var e = o()(["\n  fragment MaybeRedirectToEditor_post on Post {\n    id\n    isPublished\n    collection {\n      id\n      viewerCanEditOwnPosts\n      viewerCanEditPosts\n      viewerIsEditor\n    }\n    creator {\n      id\n    }\n  }\n"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        var p = s()(m())
          , f = Object(l.c)((function(e) {
            return {
                authDomain: e.config.authDomain
            }
        }
        ))((function(e) {
            var t = e.authDomain
              , n = e.post
              , r = e.children;
            return i.createElement(u.b, null, (function(e) {
                return function(e, t) {
                    var n = e.collection
                      , r = e.creator && t && e.creator.id === t.id
                      , o = r && n && n.viewerCanEditOwnPosts || n && (n.viewerIsEditor || n.viewerCanEditPosts);
                    return (!e || !e.isPublished) && (n ? o : r)
                }(n, e) ? i.createElement(c.a, {
                    to: Object(d.Ab)(t, n.id)
                }) : r
            }
            ))
        }
        ))
    },
    "./src/components/post/NormalizePostBodyModel.ts": function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return u
        }
        )),
        n.d(t, "b", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return m
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./src/util/string.ts");
        function l() {
            var e = o()(["\n  fragment GetFeaturedImageIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n      metadata {\n        isFeatured\n      }\n    }\n  }\n"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        function c() {
            var e = o()(["\n  fragment GetTitleIndexMap_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);
            return c = function() {
                return e
            }
            ,
            e
        }
        var u = function(e) {
            for (var t = null, n = null, r = null, o = null, a = 0; a <= e.length; a++) {
                var s = e[a];
                if (!s)
                    break;
                if (null != t) {
                    "H4" === s.type && (n = a),
                    null === r && "IMG" === s.type && (r = a);
                    break
                }
                if ("H3" === s.type || "H2" === s.type)
                    t = a;
                else {
                    if (null != o)
                        break;
                    if ("H4" !== s.type) {
                        if ("IMG" === s.type) {
                            null === r && (r = a);
                            continue
                        }
                        if ("IFRAME" === s.type || "P" === s.type && "string" == typeof s.text && Object(i.a)(s.text))
                            continue;
                        break
                    }
                    o = a
                }
            }
            return {
                titleIndex: t,
                subtitleIndex: n,
                bannerImageIndex: r
            }
        }
          , d = s()(c())
          , m = function(e) {
            for (var t = null, n = 0; n < e.length; n++)
                if ("IMG" === e[n].type) {
                    if (e[n].metadata && e[n].metadata.isFeatured)
                        return n;
                    null === t && (t = n)
                }
            return t
        }
          , p = s()(l())
    },
    "./src/components/post/PostBodyInserts.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return R
        }
        )),
        n.d(t, "a", (function() {
            return A
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/WatchBounds.tsx")
          , c = n("./src/components/post/NormalizePostBodyModel.ts")
          , u = n("./src/components/post/PostByline.tsx")
          , d = n("./src/components/post/TableOfContents.tsx")
          , m = n("./src/components/post/bookmark/index.ts")
          , p = n("./src/components/post/bookmark/PostPageBookmarkButton.tsx")
          , f = n("./src/components/post/footer/CreatorActionOverflowPopover.tsx")
          , b = n("./src/components/post/footer/PostFooterSocialPopover.tsx")
          , g = n("./src/components/publisher/CardByline.tsx")
          , h = n("./src/components/publisher/auroraHooks.ts")
          , v = n("./src/components/session/useFlag.tsx")
          , x = n("./src/components/social/ShareButtons.tsx")
          , E = n("./src/components/user/UserAvatar.tsx")
          , y = n("./src/framework/design-system/index.ts")
          , O = n("./src/framework/design-system/components/index.ts")
          , w = n("./src/framework/source/index.ts")
          , C = n("./src/framework/style/useCx.ts")
          , _ = n("./src/util/numbers.ts");
        function j() {
            var e = o()(["\n  fragment PostBodyInserts_post on Post {\n    collection {\n      ...auroraHooks_publisher\n    }\n    creator {\n      ...auroraHooks_publisher\n    }\n    isPublished\n    isShortform\n    # please note that the postMeteringOptions is defined in handlers that use PostBodyInserts\n    # (PostHandler and SequencePostHandler)\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          name\n          text\n          type\n        }\n      }\n    }\n    ...PostByline_post\n    ...PostFooterSocialPopover_post\n    ...ShareButtons_post\n    ...BookmarkButton_post\n    ...CreatorActionOverflowPopover_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return j = function() {
                return e
            }
            ,
            e
        }
        function S(e) {
            var t = e.post
              , n = Object(C.a)()
              , r = Object(h.b)(t.collection || t.creator)
              , o = Object(v.a)("enable_mute")
              , a = {
                marginTop: "32px"
            }
              , s = {
                post: t,
                source: {
                    name: "post_actions_header"
                }
            };
            return i.createElement(l.a, {
                className: n(a),
                name: "byline",
                type: "byline",
                offset: {
                    left: -600
                }
            }, i.createElement(O.b, {
                display: "flex",
                justifyContent: "space-between",
                xs: {
                    marginTop: a.marginTop
                },
                sm: {
                    flexDirection: "column-reverse",
                    marginTop: a.marginTop
                }
            }, r && t.creator ? i.createElement(g.a, {
                avatar: i.createElement(E.d, {
                    user: t.creator,
                    scale: "XXS",
                    link: !0,
                    withHalo: !0
                }),
                publisher: t.creator,
                href: t.mediumUrl || void 0,
                isOneLine: !0,
                publishedAt: t.firstPublishedAt,
                showStar: !!t.isLocked && !t.isShortform,
                timeToRead: !t.isShortform && t.readingTime ? "".concat(Object(_.f)(t.readingTime), " min read") : void 0
            }) : i.createElement(u.b, {
                scale: "M",
                post: t,
                showBio: !1,
                hideCollection: !0
            }), i.createElement(O.b, {
                display: "flex",
                alignItems: "flex-end",
                print: {
                    display: "none"
                },
                xs: {
                    marginLeft: "0px",
                    marginBottom: "30px"
                },
                sm: {
                    marginLeft: "0px",
                    marginBottom: "30px"
                },
                md: {
                    marginLeft: "30px"
                },
                lg: {
                    marginLeft: "30px"
                },
                xl: {
                    marginLeft: "30px"
                }
            }, i.createElement(O.b, {
                display: "flex",
                alignItems: "center"
            }, t.isPublished && (!r || !t.isShortform) && i.createElement(i.Fragment, null, r ? i.createElement(O.b, {
                paddingRight: "6px"
            }, i.createElement(b.a, s)) : i.createElement(x.a, s), i.createElement(O.b, {
                flexGrow: o ? void 0 : "1",
                marginRight: o ? "8px" : "-6px"
            }, i.createElement(w.b, {
                source: {
                    name: "post_actions_header",
                    susiEntry: "bookmark_header"
                }
            }, i.createElement(p.a, {
                post: t
            }))), o && i.createElement(O.b, {
                flexGrow: "1",
                marginRight: "-6px"
            }, i.createElement(O.I, null, (function(e) {
                var n = e.show;
                return i.createElement(f.a, {
                    creator: null == t ? void 0 : t.creator,
                    post: t,
                    collection: null == t ? void 0 : t.collection,
                    showLoadingIndicator: n
                })
            }
            ))))))))
        }
        function k(e, t) {
            return "".concat(t, "_").concat(e[t] ? e[t].length : 0)
        }
        function P(e, t, n, r, o) {
            e[t] || (e[t] = []),
            e[t].push({
                order: n,
                component: r,
                insertType: o
            })
        }
        function I(e, t, n) {
            return function(r) {
                var o = "number" == typeof n.titleIndex
                  , a = n.subtitleIndex || n.titleIndex || 0
                  , s = t[a] && t[a].name;
                if (s && 0 === a && !o) {
                    var l = i.createElement(S, {
                        post: e,
                        key: "insert_postBylineGroupComponent_".concat(k(r, "first"))
                    });
                    P(r, "first", "before", i.createElement(y.f, {
                        size: "inset",
                        key: "insert_MaxWidth_PostBylineGroupComponent_".concat(k(r, "first"))
                    }, l), "BYLINE")
                } else if (s) {
                    P(r, s, "after", i.createElement(S, {
                        post: e,
                        key: "insert_PostBylineGroupComponent_".concat(k(r, s))
                    }), "BYLINE")
                }
                return r
            }
        }
        function T(e, t, n) {
            return function(r) {
                var o = "number" == typeof n.titleIndex
                  , a = Math.max(n.bannerImageIndex || n.subtitleIndex || n.titleIndex || 0, n.subtitleIndex || n.titleIndex || 0)
                  , s = t[a] && t[a].name;
                if (s && 0 === a && !o) {
                    var l = i.createElement(d.b, {
                        post: e,
                        mode: "INLINE",
                        key: "insert_TOC_".concat(k(r, "first"))
                    });
                    P(r, "first", "before", i.createElement(y.f, {
                        size: "inset",
                        key: "insert_MaxWidth_TableOfContents_".concat(k(r, "first"))
                    }, l), "TABLE_OF_CONTENTS")
                } else if (s) {
                    P(r, s, "after", i.createElement(d.b, {
                        post: e,
                        mode: "INLINE",
                        key: "insert_TableOfContents_".concat(k(r, s))
                    }), "TABLE_OF_CONTENTS")
                }
                return r
            }
        }
        function R(e) {
            var t = e && e.content && e.content.bodyModel && e.content.bodyModel.paragraphs || void 0;
            if (t) {
                var n = Object(c.d)(t);
                return [I(e, t, n), T(e, t, n)].reduce((function(e, t) {
                    return t(e)
                }
                ), {})
            }
        }
        var A = s()(j(), h.a, u.a, b.b, x.b, m.b, f.b)
    },
    "./src/components/post/PostBodySection.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return N
        }
        )),
        n.d(t, "c", (function() {
            return U
        }
        )),
        n.d(t, "a", (function() {
            return F
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/classCallCheck.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/createClass.js")
          , l = n.n(i)
          , c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")
          , u = n.n(c)
          , d = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")
          , m = n.n(d)
          , p = n("./node_modules/@babel/runtime/helpers/inherits.js")
          , f = n.n(p)
          , b = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , g = n.n(b)
          , h = n("./node_modules/graphql-tag/src/index.js")
          , v = n.n(h)
          , x = n("./node_modules/react/index.js")
          , E = n("./src/WatchBounds.tsx")
          , y = n("./src/components/post/EmbeddedPostContext.tsx")
          , O = n("./src/components/post/PostBodyParagraph.tsx")
          , w = n("./src/components/post/grouping/ParagraphLayoutGrouping.tsx")
          , C = n("./src/framework/design-system/components/index.ts")
          , _ = n("./src/framework/style/index.ts")
          , j = {
            ":after": {
                display: "block",
                content: '""',
                clear: "both"
            }
        }
          , S = n("./src/util/miroImage.ts")
          , k = n("./src/util/theme.ts");
        function P() {
            var e = o()(["\n      fragment PostBodySection_paragraphs on Paragraph {\n        name\n        ...PostBodyParagraph_paragraph\n      }\n      ", "\n    "]);
            return P = function() {
                return e
            }
            ,
            e
        }
        function I() {
            var e = o()(["\n  fragment PostBodySection_customStyleSheet on CustomStyleSheet {\n    id\n    ...ParagraphLayoutGrouping_customStyleSheet\n  }\n  ", "\n"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        function T() {
            var e = o()(["\n  fragment PostBodySection_privateNote on Note {\n    ...ParagraphLayoutGrouping_privateNote\n  }\n  ", "\n"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        function R() {
            var e = o()(["\n  fragment PostBodySection_highlight on Quote {\n    ...ParagraphLayoutGrouping_highlight\n  }\n  ", "\n"]);
            return R = function() {
                return e
            }
            ,
            e
        }
        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function L(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(n), !0).forEach((function(t) {
                    g()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var M = function() {
            return {
                display: "table-cell",
                paddingBottom: "32px",
                verticalAlign: "bottom"
            }
        };
        function B(e) {
            var t, n, r, o, a = e.bgImage, s = e.children, i = e.isFullPage, l = e.paragraphName, c = Object(_.useCx)();
            return a && a.id && i ? x.createElement(E.a, {
                name: l,
                type: "bgimage"
            }, x.createElement("div", {
                className: c((t = a,
                n = t.id,
                r = t.originalWidth,
                o = t.originalHeight,
                function() {
                    var e = [400, 600, 800, 1e3, 1200, 1400, 1600, 1800, 2e3]
                      , t = {
                        miroId: n,
                        strategy: S.a.Resample,
                        verticalGradient: {
                            start: 29,
                            end: 81,
                            opacity: 40
                        }
                    }
                      , a = e.reduce((function(n, a, s) {
                        var i = Object(S.d)(L({}, t, {
                            width: a,
                            height: a / r * o
                        }));
                        return s === e.length - 1 ? (n.backgroundImage = "url(".concat(i, ")"),
                        n) : (n["@media (min-width: ".concat(a, "px)")] = {
                            backgroundImage: "url(".concat(i, ")")
                        },
                        n)
                    }
                    ), {});
                    return L({
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        backgroundPosition: "50% 50%",
                        backgroundSize: "cover",
                        display: "table",
                        minHeight: "100vh",
                        width: "100%"
                    }, a)
                }
                ))
            }, x.createElement("div", {
                className: c(M)
            }, x.createElement(C.L, null, (function(e) {
                return x.createElement(C.F, {
                    theme: Object(k.s)(e)
                }, s)
            }
            ))))) : s
        }
        var D = function(e) {
            function t() {
                return s()(this, t),
                u()(this, m()(t).apply(this, arguments))
            }
            return f()(t, e),
            l()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.paragraphViewModels
                      , n = e.postBodyInserts
                      , r = e.section
                      , o = e.customStyleSheet;
                    if (0 === t.length)
                        return null;
                    var a = function(e) {
                        switch (e) {
                        case "SERIES":
                            return {
                                paddingTop: "32px",
                                paddingBottom: "32px",
                                margin: "auto 0",
                                width: "100%"
                            };
                        case "STREAM":
                        case "CARD":
                        case "FULL_PAGE":
                            return {
                                wordBreak: "break-word",
                                wordWrap: "break-word"
                            };
                        default:
                            return {}
                        }
                    }(t[0].richTextStyle)
                      , s = Object(w.e)(t);
                    return x.createElement(y.a.Consumer, null, (function(e) {
                        return x.createElement(C.J, null, (function(i) {
                            return x.createElement("section", {
                                className: i([a, j])
                            }, x.createElement(B, {
                                bgImage: r.backgroundImage,
                                isFullPage: "FULL_PAGE" === t[0].richTextStyle,
                                paragraphName: t[0].paragraph.name
                            }, s.map((function(t, r) {
                                return x.createElement(w.a, {
                                    key: r,
                                    layoutGroup: t,
                                    postBodyInserts: n,
                                    customStyleSheet: o,
                                    isEmbedded: e
                                })
                            }
                            ))))
                        }
                        ))
                    }
                    ))
                }
            }]),
            t
        }(x.Component);
        g()(D, "fragments", {
            paragraphs: v()(P(), O.d.fragments.paragraph)
        });
        t.d = D;
        var N = v()(R(), w.c)
          , U = v()(T(), w.d)
          , F = v()(I(), w.b)
    },
    "./src/components/post/PostByline.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return N
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/classCallCheck.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/createClass.js")
          , l = n.n(i)
          , c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")
          , u = n.n(c)
          , d = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")
          , m = n.n(d)
          , p = n("./node_modules/@babel/runtime/helpers/inherits.js")
          , f = n.n(p)
          , b = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , g = n.n(b)
          , h = n("./node_modules/graphql-tag/src/index.js")
          , v = n.n(h)
          , x = n("./node_modules/react/index.js")
          , E = n("./node_modules/react-redux/es/index.js")
          , y = n("./src/components/format/Date.tsx")
          , O = n("./src/components/ui/Byline.tsx")
          , w = n("./src/components/user/UserAvatar.tsx")
          , C = n("./src/components/user/UserFollowButton.tsx")
          , _ = n("./src/framework/design-system/components/index.ts")
          , j = n("./src/framework/design-system/components/Box.tsx")
          , S = n("./src/framework/design-system/type/Detail.tsx")
          , k = n("./src/framework/source/index.ts")
          , P = n("./src/styles/breakpoints.ts")
          , I = n("./src/svg/star-15px.svg")
          , T = n("./src/svg/unlisted-19px.svg")
          , R = n("./src/util/numbers.ts")
          , A = n("./src/util/routes.ts");
        function L() {
            var e = o()(["\n  fragment PostByline_post on Post {\n    id\n    isPublished\n    mediumUrl\n    firstPublishedAt\n    readingTime\n    statusForCollection\n    isLocked\n    isShortform\n    visibility\n    collection {\n      name\n      id\n      slug\n      ...collectionUrl_collection\n    }\n    creator {\n      name\n      username\n      id\n      bio\n      isFollowing\n      ...UserAvatar_user\n    }\n  }\n  ", "\n  ", "\n"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        var M = {
            XS: {
                showFollowButton: !1,
                avatarScale: "XS"
            },
            S: {
                showFollowButton: !1,
                avatarScale: "S"
            },
            M: {
                showFollowButton: !0,
                avatarScale: "M"
            }
        }
          , B = function(e, t) {
            return g()({
                marginBottom: e ? "2px" : "0px",
                display: "flex",
                alignItems: "center"
            }, P.xs(t), {
                marginBottom: "0px"
            })
        }
          , D = function(e) {
            function t() {
                return s()(this, t),
                u()(this, m()(t).apply(this, arguments))
            }
            return f()(t, e),
            l()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.currentLocation
                      , n = e.post
                      , r = e.showBio
                      , o = e.scale
                      , a = void 0 === o ? "M" : o
                      , s = e.detailScale
                      , i = void 0 === s ? "M" : s
                      , l = e.showStar
                      , c = void 0 === l ? n.isLocked && !n.isShortform : l
                      , u = e.hideCollection
                      , d = void 0 !== u && u
                      , m = e.hideAvatar
                      , p = void 0 !== m && m
                      , f = e.hideDescription
                      , b = void 0 !== f && f
                      , g = e.noClamp
                      , h = void 0 !== g && g
                      , v = n.id
                      , E = n.creator
                      , P = n.collection
                      , L = n.statusForCollection
                      , D = n.visibility
                      , N = n.isPublished
                      , U = M[a];
                    if (!n || !v || !E)
                        return null;
                    var F = n.firstPublishedAt
                      , H = E.username
                      , V = E.name;
                    if (!V || !H)
                        return null;
                    var z = x.createElement(w.d, {
                        user: E,
                        scale: U.avatarScale,
                        link: !0
                    })
                      , G = r ? x.createElement("div", null, E.bio) : null
                      , q = "APPROVED" === L
                      , W = U.showFollowButton ? x.createElement(k.b, {
                        source: {
                            susiEntry: "follow_byline"
                        }
                    }, x.createElement(j.a, {
                        marginLeft: "8px",
                        xs: {
                            display: "none"
                        },
                        flexShrink: "0"
                    }, x.createElement(C.c, {
                        user: E,
                        buttonSize: "COMPACT"
                    }))) : null
                      , $ = x.createElement(_.J, null, (function(e) {
                        return x.createElement(_.L, null, (function(n) {
                            return x.createElement("div", {
                                className: e(B(U.showFollowButton, n))
                            }, x.createElement(S.a, {
                                scale: i,
                                tag: "span",
                                color: "DARKER",
                                clamp: h ? void 0 : 1
                            }, x.createElement(_.t, {
                                href: Object(A.sc)(H),
                                inline: !0
                            }, V), P && q && !d ? x.createElement("span", null, " ", "in", " ", x.createElement(_.t, {
                                href: Object(A.I)(P, t),
                                inline: !0
                            }, P.name)) : null), W)
                        }
                        ))
                    }
                    ))
                      , Y = x.createElement(S.a, {
                        scale: i,
                        tag: "span",
                        clamp: 1
                    }, G, x.createElement("div", null, N ? x.createElement(_.t, {
                        href: Object(A.Db)(n),
                        inline: !0
                    }, F && x.createElement(y.a, {
                        timestamp: F
                    })) : x.createElement("span", null, "Draft"), " ", "·", " ", "UNLISTED" === D ? x.createElement(S.a, {
                        scale: "S",
                        tag: "span"
                    }, x.createElement(T.a, null), " Unlisted") : x.createElement(x.Fragment, null, Object(R.f)(n.readingTime || 0), " min read"), c && x.createElement("span", {
                        style: {
                            paddingLeft: "4px"
                        }
                    }, x.createElement(I.a, {
                        style: {
                            marginTop: "-2px"
                        }
                    }))));
                    return x.createElement(O.a, {
                        avatar: !p && z,
                        title: $,
                        description: !b && Y
                    })
                }
            }]),
            t
        }(x.Component)
          , N = v()(L(), w.b, A.J);
        t.b = Object(E.c)((function(e) {
            return {
                currentLocation: e.navigation.currentLocation
            }
        }
        ))(D)
    },
    "./src/components/post/PostHeader.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return A
        }
        )),
        n.d(t, "c", (function() {
            return L
        }
        )),
        n.d(t, "b", (function() {
            return M
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/components/audio/AudioPlayback.tsx")
          , u = n("./src/components/broadcast-banner/BroadcastBanner.tsx")
          , d = n("./src/components/meter/MeterController.tsx")
          , m = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , p = n.n(m)
          , f = n("./src/components/cta/HighlightCTA.tsx")
          , b = n("./src/components/newsletter-v3/NewsletterV3UnsubscribeToast.tsx")
          , g = n("./src/components/newsletter-v3/useNewsletterV3Subscription.tsx")
          , h = n("./src/components/session/WithViewer.tsx")
          , v = n("./src/components/susi/SusiClickable.tsx")
          , x = n("./src/framework/design-system/components/index.ts")
          , E = n("./src/framework/design-system/components/portal/ui/Toast.tsx")
          , y = n("./src/framework/reporter/index.ts")
          , O = n("./src/framework/source/index.ts")
          , w = n("./src/framework/style/index.ts")
          , C = n("./src/util/routes.ts");
        function _() {
            var e = o()(["\n  fragment NewsletterV3PostHeaderCTA_collection on Collection {\n    id\n    domain\n    slug\n    name\n    viewerIsEditor\n    ...SusiClickable_collection\n    newsletterV3 {\n      id\n      slug\n      name\n      isSubscribed\n      ...SusiClickable_newsletterV3\n    }\n  }\n  ", "\n  ", "\n"]);
            return _ = function() {
                return e
            }
            ,
            e
        }
        var j = s()(_(), v.b, v.c)
          , S = function(e) {
            return {
                color: e.accentColor.text.dark,
                fontWeight: "bold",
                cursor: "pointer"
            }
        }
          , k = function(e) {
            var t = e.collection
              , n = Object(l.f)((function(e) {
                return e.config.authDomain
            }
            ))
              , r = Object(w.useCx)()
              , o = Object(y.c)()
              , a = t.newsletterV3 || {
                id: "",
                slug: "",
                name: "",
                isSubscribed: !1
            }
              , s = i.useState(!1)
              , c = p()(s, 2)
              , u = c[0]
              , d = c[1]
              , m = Object(g.a)(a.id, a.isSubscribed)
              , _ = m.isSubscribed
              , j = m.hasUserUnsubscribed
              , k = m.hasError
              , P = m.setSubscribe
              , I = Object(C.v)(t, a.slug, n)
              , T = function() {
                return i.createElement(x.t, {
                    inline: !0,
                    linkStyle: "OBVIOUS",
                    href: I
                }, a.name)
            }
              , R = function() {
                var e = function(e) {
                    var t = e.isUserLoggedIn;
                    return i.createElement("span", {
                        className: r(S),
                        onClick: function() {
                            t && (d(!0),
                            P(!0)),
                            o.event("newsletterV3.subscribeClicked", {
                                newsletterV3Id: a.id,
                                source: "newsletter_v3_post_header_cta"
                            })
                        }
                    }, " Get this newsletter")
                };
                return i.createElement(O.b, {
                    source: {
                        name: "newsletter_v3_post_header_cta",
                        newsletterV3Id: a.id,
                        susiEntry: "post_header"
                    }
                }, i.createElement(h.b, null, (function(n) {
                    return n ? i.createElement(e, {
                        isUserLoggedIn: !!n
                    }) : i.createElement(v.a, {
                        operation: "register",
                        newsletterV3: a,
                        collection: t,
                        actionUrl: Object(C.Yb)(a.id)
                    }, i.createElement(e, {
                        isUserLoggedIn: !!n
                    }))
                }
                )))
            }
              , A = function() {
                return i.createElement("span", {
                    className: r(S),
                    onClick: function() {
                        return P(!1)
                    }
                }, " Unsubscribe")
            };
            return i.createElement(i.Fragment, null, i.createElement(f.a, null, _ && u ? i.createElement((function() {
                return i.createElement(i.Fragment, null, "You are signed up for ", i.createElement(T, null), ". ", i.createElement(A, null))
            }
            ), null) : i.createElement((function() {
                return i.createElement(i.Fragment, null, "This is an email from ", i.createElement(T, null), ", a newsletter by ", t.name, ".", !a.isSubscribed && !t.viewerIsEditor && i.createElement(R, null))
            }
            ), null)), k && i.createElement(E.a, {
                toastStyle: "RETRYABLE_ERROR",
                isVisible: k,
                hide: function() {}
            }), j && i.createElement(b.a, {
                name: a.name || ""
            }))
        }
          , P = n("./src/components/post/InResponseToPostPreview.tsx")
          , I = n("./src/components/post/PostPaywallAlert.tsx");
        function T() {
            var e = o()(["\n  fragment PostHeader_meteringInfo on MeteringInfo {\n    ...MeterController_meteringInfo\n  }\n  ", "\n"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        function R() {
            var e = o()(["\n  fragment PostHeader_post on Post {\n    newsletterId\n    inResponseToPostResult {\n      ... on PostResult {\n        ...InResponseToPostPreview_postResult\n      }\n    }\n    topics {\n      name\n    }\n    tags {\n      id\n    }\n    collection {\n      ...NewsletterV3PostHeaderCTA_collection\n    }\n    layerCake\n    isLocked\n    id\n    firstPublishedAt\n    ...InResponseToPostPreview_mediaResource\n    ...MeterController_post\n    ...PostPaywallAlert_post\n    ...AudioPlayback_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return R = function() {
                return e
            }
            ,
            e
        }
        var A = Object(l.c)((function(e) {
            return {
                isAmp: e.config.isAmp
            }
        }
        ))((function(e) {
            var t, n, r = e.meteringInfo, o = e.post, a = e.isAmp;
            return i.createElement(x.A, {
                columns: 8
            }, !!o.newsletterId && !!o.collection && i.createElement(k, {
                collection: o.collection
            }), i.createElement(P.a, {
                inResponseToPostResult: o.inResponseToPostResult,
                inResponseToMediaResource: o.inResponseToMediaResource,
                padding: "10px 0 0"
            }), !!o.isLocked && !!r && i.createElement(d.a, {
                meteringInfo: r,
                post: o
            }), i.createElement(u.a, {
                topics: null == o || null === (t = o.topics) || void 0 === t ? void 0 : t.map((function(e) {
                    return e.name
                }
                )),
                tags: null == o || null === (n = o.tags) || void 0 === n ? void 0 : n.map((function(e) {
                    return e.id
                }
                )),
                tier: null == o ? void 0 : o.layerCake,
                isLocked: null == o ? void 0 : o.isLocked,
                postId: null == o ? void 0 : o.id,
                postPublishDate: null == o ? void 0 : o.firstPublishedAt
            }), !o.inResponseToPostResult && i.createElement(I.a, {
                post: o
            }), o.audioVersionUrl && !a && i.createElement(c.a, {
                post: o
            }))
        }
        ))
          , L = s()(R(), P.c, P.b, d.c, I.b, c.b, j)
          , M = s()(T(), d.b)
    },
    "./src/components/post/PostMetadata.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return z
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./node_modules/react-helmet-async/lib/index.module.js")
          , d = n("./node_modules/react-redux/es/index.js")
          , m = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")
          , p = n.n(m)
          , f = n("./node_modules/lodash/merge.js")
          , b = n.n(f)
          , g = n("./node_modules/serialize-javascript/index.js")
          , h = n.n(g)
          , v = n("./src/util/miroImage.ts")
          , x = n("./src/util/navigation.ts")
          , E = n("./src/util/post/metaHelpers.ts")
          , y = n("./src/util/routes.ts");
        function O() {
            var e = o()(["\n  fragment PostJsonLd_post on Post {\n    id\n    title\n    seoTitle\n    mediumUrl\n    creator {\n      name\n      username\n    }\n    collection {\n      id\n      name\n      domain\n      slug\n      logo {\n        id\n        originalWidth\n        originalHeight\n      }\n    }\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n      originalWidth\n      originalHeight\n    }\n    isLocked\n    firstPublishedAt\n    updatedAt\n    tags {\n      displayTitle\n    }\n    topics {\n      name\n      slug\n    }\n    sequence {\n      slug\n    }\n    lockedSource\n    layerCake\n    isShortform\n    shortformType\n    structuredData\n    ...getTitleForPost_post\n  }\n  ", "\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach((function(t) {
                    s()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var _ = "Tag"
          , j = "Topic"
          , S = "Publication"
          , k = "Sequence"
          , P = "LockedPostSource"
          , I = "Elevated"
          , T = "LayerCake"
          , R = "Lite";
        function A(e) {
            var t = e.id
              , n = e.originalWidth
              , r = e.originalHeight;
            if (!t || !n || !r)
                return null;
            var o = Math.min(r, 60)
              , a = o / r
              , s = Math.floor(n * a);
            return L({
                width: s,
                height: o,
                url: Object(v.d)({
                    miroId: t,
                    width: s,
                    freezeGifs: !0,
                    strategy: v.a.Resample
                })
            })
        }
        function L(e) {
            return C({
                "@type": "ImageObject"
            }, e)
        }
        function M(e, t) {
            return "".concat(e, ":").concat(t)
        }
        var B = Object(d.c)((function(e) {
            var t = e.config
              , n = t.productName
              , r = t.defaultImages
              , o = t.collectionStructuredData
              , a = e.navigation;
            return {
                currentLocation: a.currentLocation,
                host: a.host,
                productName: n,
                defaultImages: r,
                collectionStructuredData: o
            }
        }
        ))((function(e) {
            var t = e.currentLocation
              , n = e.host
              , r = e.post
              , o = e.postDescription
              , a = e.productName
              , s = e.defaultImages
              , i = e.collectionStructuredData
              , l = r.collection
              , d = r.creator
              , m = r.id
              , f = r.mediumUrl
              , g = r.isLocked
              , O = r.previewImage
              , w = r.firstPublishedAt
              , B = r.updatedAt
              , D = r.tags
              , N = r.topics
              , U = r.sequence
              , F = r.lockedSource
              , H = r.layerCake
              , V = r.structuredData
              , z = Object(E.e)(r, a)
              , G = {
                id: s.postLogo.imageId,
                originalWidth: s.postLogo.width,
                originalHeight: s.postLogo.height
            }
              , q = {
                id: s.orgLogo.imageId,
                originalWidth: s.orgLogo.width,
                originalHeight: s.orgLogo.height
            }
              , W = l ? {
                "@type": "Organization",
                name: l.name,
                url: l.domain || Object(x.b)(n, Object(y.I)(l, t)),
                logo: function(e) {
                    if (!e || !e.logo || !e.logo.id)
                        return A(q);
                    var t = A(e.logo);
                    return t && 60 === t.height && t.width <= 600 ? t : A(q)
                }(l)
            } : {
                "@type": "Organization",
                name: a,
                url: Object(x.b)(n, "/"),
                logo: A(q)
            };
            l && i && i[l.id] && b()(W, i[l.id].data);
            var $ = [M(R, "true")];
            D && D.forEach((function(e) {
                e.displayTitle && $.push(M(_, e.displayTitle))
            }
            )),
            N && N.forEach((function(e) {
                e.name ? $.push(M(j, e.name)) : e.slug && $.push(M(j, e.slug))
            }
            )),
            l && l.slug && $.push(M(S, l.slug)),
            $.push(M(I, (!!U).toString())),
            U && U.slug && $.push(M(k, U.slug)),
            F && $.push(M(P, F)),
            null != H && $.push(M(T, H.toString()));
            var Y = o || ""
              , K = g ? {
                isAccessibleForFree: "False",
                hasPart: {
                    "@type": "WebPageElement",
                    isAccessibleForFree: "False",
                    cssSelector: ".meteredContent"
                }
            } : {}
              , Q = {
                "@context": "http://schema.org"
            }
              , X = C({
                "@type": "NewsArticle",
                image: O && O.id ? function(e) {
                    var t = e.id
                      , n = e.originalWidth
                      , r = e.originalHeight
                      , o = e.focusPercentX
                      , a = e.focusPercentY;
                    if (!t)
                        return null;
                    var s = Object(v.b)({
                        miroId: t,
                        aspectRatio: 16 / 9,
                        croppedWidth: 1200,
                        originalWidth: n,
                        originalHeight: r,
                        focusPercentX: o,
                        focusPercentY: a
                    })
                      , i = Object(v.b)({
                        miroId: t,
                        aspectRatio: 4 / 3,
                        croppedWidth: 1200,
                        originalWidth: n,
                        originalHeight: r,
                        focusPercentX: o,
                        focusPercentY: a
                    })
                      , l = Object(v.b)({
                        miroId: t,
                        aspectRatio: 1,
                        croppedWidth: 1200,
                        originalWidth: n,
                        originalHeight: r,
                        focusPercentX: o,
                        focusPercentY: a
                    })
                      , c = new Set([s, i, l]);
                    return Array.from(c)
                }(O) : L({
                    url: Object(v.d)({
                        miroId: G.id,
                        width: G.originalWidth
                    }),
                    height: G.originalHeight,
                    width: G.originalWidth
                }),
                url: f,
                dateCreated: w && new Date(w).toISOString(),
                datePublished: w && new Date(w).toISOString(),
                dateModified: B && new Date(B).toISOString(),
                headline: z,
                name: z,
                description: Y,
                identifier: m,
                keywords: $.length ? $ : null,
                author: d && d.name && d.username ? {
                    "@type": "Person",
                    name: d.name || d.username,
                    url: Object(y.mb)(n, d.username)
                } : null,
                creator: d && [d.name],
                publisher: W,
                mainEntityOfPage: f
            }, K)
              , J = C({}, Q, {}, X);
            if (V && V.length > 0)
                try {
                    var Z = JSON.parse(V);
                    if (Z && (null == Z ? void 0 : Z["@graph"]) && (null == Z ? void 0 : Z["@graph"].length) > 0) {
                        var ee = ((null == Z ? void 0 : Z["@graph"]) || []).filter((function(e) {
                            return (null == e ? void 0 : e["@type"]) && "NewsArticle" !== (null == e ? void 0 : e["@type"])
                        }
                        ));
                        ee && ee.length > 0 && (J = C({}, Q, {
                            "@graph": [X].concat(p()(ee))
                        }))
                    }
                } catch (e) {}
            return c.createElement(u.a, null, c.createElement("script", {
                type: "application/ld+json"
            }, h()(J, {
                isJSON: !0
            })))
        }
        ))
          , D = l()(O(), E.f)
          , N = n("./src/components/session/useFlag.tsx")
          , U = n("./src/util/numbers.ts")
          , F = n("./src/util/post/metaDescription.ts");
        function H() {
            var e = o()(["\n  fragment PostMetadata_post on Post {\n    id\n    socialTitle\n    socialDek\n    canonicalUrl\n    mediumUrl\n    metaDescription\n    latestPublishedAt\n    visibility\n    isLimitedState\n    readingTime\n    creator {\n      name\n      username\n      twitterScreenName\n    }\n    collection {\n      ampEnabled\n      twitterUsername\n      facebookPageId\n    }\n    previewContent {\n      subtitle\n    }\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n      originalHeight\n      originalWidth\n    }\n    isShortform\n    ...PostJsonLd_post\n    ...postMetaDescription_post\n    ...shortformPostMetaDescription_post\n    ...shouldIndex_post\n    ...shortformPostTitle_post\n    ...getTitleDetails_post\n    ...getTitleForPost_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return H = function() {
                return e
            }
            ,
            e
        }
        function V(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        t.b = Object(d.c)((function(e) {
            return {
                host: e.navigation.host,
                productName: e.config.productName
            }
        }
        ))((function(e) {
            var t, n, r = e.isAmp, o = e.host, a = e.productName, i = e.post, l = i.canonicalUrl, d = i.collection, m = i.creator, p = i.id, f = i.latestPublishedAt, b = i.mediumUrl, g = i.previewContent, h = i.socialTitle, x = i.socialDek, O = i.visibility, w = i.isShortform, C = !!Object(N.a)("default_seo_post_titles"), _ = d && d.ampEnabled, j = m && m.name, S = Object(E.c)(i), k = i.title || "", P = S.latestTitle || k;
            if (w) {
                var I = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? V(Object(n), !0).forEach((function(t) {
                            s()(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, i, {
                    title: P
                });
                t = Object(E.i)(I, a, S.hasTitleGraf).trim(),
                n = Object(F.c)(i, S.hasTitleGraf)
            } else
                t = Object(E.e)(i, a, S, C).trim(),
                n = Object(F.a)(i);
            var T, R, A = x || g && g.subtitle || n;
            if (i && i.previewImage && i.previewImage.id && !i.isLimitedState) {
                var L = i.previewImage;
                T = Object(v.b)({
                    miroId: L.id,
                    aspectRatio: 1.9,
                    croppedWidth: L.originalWidth ? Math.min(L.originalWidth, 1200) : 1200,
                    originalWidth: L.originalWidth,
                    originalHeight: L.originalHeight,
                    focusPercentX: L.focusPercentX,
                    focusPercentY: L.focusPercentY
                })
            } else if (i.isLimitedState) {
                var M = {
                    id: "1*3SjgcTt7wCYYS10ff6-0JQ.png",
                    originalWidth: 748,
                    originalHeight: 390,
                    focusPercentX: 50,
                    focusPercentY: 40
                };
                T = Object(v.b)({
                    miroId: M.id,
                    aspectRatio: 1.9,
                    croppedWidth: M.originalWidth ? Math.min(M.originalWidth, 1200) : 1200,
                    originalWidth: M.originalWidth,
                    originalHeight: M.originalHeight,
                    focusPercentX: M.focusPercentX,
                    focusPercentY: M.focusPercentY
                })
            }
            m && m.username && (R = Object(y.mb)(o, m.username));
            var D = Object(y.j)(p)
              , H = !Object(E.k)(i)
              , z = f && new Date(f).toISOString()
              , G = Object(U.f)(i.readingTime || 0)
              , q = m && m.twitterScreenName
              , W = d && d.twitterUsername || "Medium"
              , $ = d && d.facebookPageId
              , Y = h || (k || P);
            i.isLimitedState && (Y = "");
            var K = i.isLimitedState ? "" : A
              , Q = c.useMemo((function() {
                return c.createElement(u.a, {
                    htmlAttributes: r ? {
                        amp: void 0
                    } : {}
                }, c.createElement("meta", {
                    property: "og:type",
                    content: "article"
                }), z && c.createElement("meta", {
                    property: "article:published_time",
                    content: z
                }), _ && !r ? c.createElement("link", {
                    rel: "amphtml",
                    href: Object(y.d)(o, p)
                }) : null, c.createElement("title", null, t), c.createElement("meta", {
                    name: "title",
                    content: t
                }), c.createElement("meta", {
                    property: "og:title",
                    content: Y
                }), c.createElement("meta", {
                    property: "twitter:title",
                    content: Y
                }), $ && c.createElement("meta", {
                    property: "fb:pages",
                    content: $
                }), c.createElement("meta", {
                    name: "twitter:site",
                    content: "@".concat(W)
                }), c.createElement("meta", {
                    name: "twitter:app:url:iphone",
                    content: D
                }), c.createElement("meta", {
                    property: "al:android:url",
                    content: D
                }), c.createElement("meta", {
                    property: "al:ios:url",
                    content: D
                }), c.createElement("meta", {
                    property: "al:android:app_name",
                    content: "Medium"
                }), n && c.createElement("meta", {
                    name: "description",
                    content: n
                }), A && c.createElement("meta", {
                    property: "og:description",
                    content: K
                }), A && c.createElement("meta", {
                    property: "twitter:description",
                    content: K
                }), c.createElement("meta", {
                    property: "og:url",
                    content: b
                }), c.createElement("meta", {
                    property: "al:web:url",
                    content: b
                }), T && c.createElement("meta", {
                    property: "og:image",
                    content: T
                }), T && c.createElement("meta", {
                    name: "twitter:image:src",
                    content: T
                }), c.createElement("meta", {
                    name: "twitter:card",
                    content: T ? "summary_large_image" : "summary"
                }), R && c.createElement("meta", {
                    property: "article:author",
                    content: R
                }), R && c.createElement("link", {
                    rel: "author",
                    href: R
                }), q && c.createElement("meta", {
                    name: "twitter:creator",
                    content: "@".concat(q)
                }), j && c.createElement("meta", {
                    name: "author",
                    content: j
                }), c.createElement("link", {
                    rel: "canonical",
                    href: l || b
                }), c.createElement("link", {
                    rel: "alternate",
                    href: Object(y.g)(Object(y.Fb)("medium.com", i.id))
                }), c.createElement("meta", {
                    name: "robots",
                    content: "".concat(H ? "noindex" : "index", ",follow,max-image-preview:large")
                }), c.createElement("meta", {
                    name: "referrer",
                    content: "UNLISTED" !== O ? "unsafe-url" : "origin"
                }), r ? null : c.createElement("meta", {
                    name: "twitter:label1",
                    value: "Reading time"
                }), r ? null : c.createElement("meta", {
                    name: "twitter:data1",
                    value: "".concat(G, " min read")
                }), c.createElement("meta", {
                    name: "parsely-post-id",
                    content: p
                }))
            }
            ), [r, t, l, b, T, _, p, h, n, R, j, q, D, H, z]);
            return c.createElement(c.Fragment, null, Q, c.createElement(B, {
                post: i,
                postDescription: n
            }))
        }
        ));
        var z = l()(H(), D, F.b, F.d, E.l, E.j, E.d, E.f)
    },
    "./src/components/post/PostPaywallAlert.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return C
        }
        )),
        n.d(t, "b", (function() {
            return _
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , l = n("./node_modules/graphql-tag/src/index.js")
          , c = n.n(l)
          , u = n("./node_modules/react/index.js")
          , d = n("./src/components/session/WithViewer.tsx")
          , m = n("./src/components/session/useFlag.tsx")
          , p = n("./src/framework/design-system/components/index.ts")
          , f = n("./src/framework/design-system/type/Detail.tsx")
          , b = n("./src/util/routes.ts");
        function g() {
            var e = o()(["\n  mutation PostPaywallAlertMutation($postId: ID!) {\n    dismissDistributionAlert(postId: $postId)\n  }\n"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        function h() {
            var e = o()(["\n  fragment PostPaywallAlert_post on Post {\n    id\n    visibility\n    lockedSource\n    curationEligibleAt\n    collection {\n      isEnrolledInHightower\n      isAuroraVisible\n      viewerIsEditor\n    }\n    creator {\n      id\n      isPartnerProgramEnrolled\n    }\n    isDistributionAlertDismissed\n  }\n"]);
            return h = function() {
                return e
            }
            ,
            e
        }
        var v = function() {
            return u.createElement(p.t, {
                href: Object(b.O)(),
                target: "_blank",
                inline: !0,
                linkStyle: "OBVIOUS"
            }, "Learn more")
        }
          , x = function() {
            return u.createElement(p.t, {
                href: Object(b.N)(),
                target: "_blank",
                inline: !0,
                linkStyle: "OBVIOUS"
            }, "Learn more")
        }
          , E = function() {
            return u.createElement(u.Fragment, null, "This story's distribution setting is off. ", u.createElement(v, null))
        }
          , y = {
            LOCKED: function() {
                return u.createElement(u.Fragment, null, "This story's distribution setting is on. ", u.createElement(x, null))
            },
            PUBLIC: E,
            UNLISTED: E
        }
          , O = {
            LOCKED: function() {
                return u.createElement(u.Fragment, null, "This story's distribution setting is on. You're in the Partner Program, so this story is eligible to earn money. ", u.createElement(x, null))
            },
            PUBLIC: function() {
                return u.createElement(u.Fragment, null, "This story's distribution setting is off and it won't earn money in the Partner Program.", " ", u.createElement(v, null))
            },
            UNLISTED: E
        };
        function w(e) {
            var t = e.post
              , n = e.viewer
              , r = Object(i.d)(j)
              , o = s()(r, 1)[0]
              , a = t.collection
              , l = t.lockedSource
              , c = t.creator
              , d = t.visibility
              , b = t.curationEligibleAt
              , g = t.isDistributionAlertDismissed
              , h = !(!n || !t.creator || n.id !== t.creator.id)
              , v = !(!t.collection || !t.collection.viewerIsEditor)
              , x = Object(m.a)("enable_aurora_lightweight_flow")
              , E = null == a ? void 0 : a.isAuroraVisible;
            if (!h && !v || g || x && E)
                return null;
            var w = a && a.isEnrolledInHightower
              , C = "LOCKED_POST_SOURCE_UGC" === l
              , _ = h && c && c.isPartnerProgramEnrolled
              , S = C && (v && w || _ && !w) ? O : y
              , k = !!(b && b > 0) ? S.LOCKED : S[d];
            return u.createElement(p.I, {
                initialVisibility: !0
            }, (function(e) {
                var n = e.hide;
                return e.isVisible && u.createElement(p.b, {
                    border: "BASE_LIGHT",
                    borderRadius: "4px",
                    position: "relative",
                    marginTop: "24px",
                    marginBottom: "15px"
                }, u.createElement(p.g, {
                    onClick: function() {
                        n(),
                        o({
                            variables: {
                                postId: t.id
                            }
                        })
                    },
                    size: "LARGE"
                }), u.createElement(p.b, {
                    padding: "20px"
                }, u.createElement(p.b, {
                    marginBottom: "8px"
                }, u.createElement("i", null, u.createElement(f.a, {
                    scale: "S"
                }, "Only you can see this message"))), u.createElement(f.a, {
                    scale: "M",
                    color: "DARKER"
                }, u.createElement(k, null))))
            }
            ))
        }
        function C(e) {
            var t = e.post;
            return u.createElement(d.b, null, (function(e) {
                return u.createElement(w, {
                    post: t,
                    viewer: e
                })
            }
            ))
        }
        var _ = c()(h())
          , j = c()(g())
    },
    "./src/components/post/PostPublishedDialog.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return S
        }
        )),
        n.d(t, "b", (function() {
            return k
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , s = n("./node_modules/graphql-tag/src/index.js")
          , i = n.n(s)
          , l = n("./node_modules/react/index.js")
          , c = n("./src/components/session/WithViewer.tsx")
          , u = n("./src/components/social/ShareButton.tsx")
          , d = n("./src/framework/design-system/components/index.ts")
          , m = n("./src/framework/design-system/type/index.ts")
          , p = n("./src/framework/design-system/util/type/headingSizeRule.ts")
          , f = n("./src/framework/style/index.ts")
          , b = n("./src/styles/colors.ts")
          , g = n("./src/util/CopyUrl.tsx")
          , h = n("./src/util/navigation.ts")
          , v = n("./src/util/routes.ts");
        function x() {
            var e = o()(["\n  fragment PostPublishedDialog_prerequisite_post on Post {\n    id\n    creator {\n      id\n    }\n    collection {\n      id\n      viewerIsEditor\n    }\n  }\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = o()(["\n  query PostPublishedDialogQuery($postId: ID!) {\n    post(id: $postId) {\n      id\n      ...PostPublishedDialog_post\n    }\n  }\n  ", "\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function y() {
            var e = o()(["\n  fragment PostPublishedDialog_post on Post {\n    id\n    inResponseToPostResult {\n      __typename\n    }\n    visibility\n    curationEligibleAt\n    mediumUrl\n    shareKey\n    ...ShareButton_post\n  }\n  ", "\n"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        var O = i()(y(), u.b)
          , w = i()(E(), O)
          , C = function(e) {
            var t = e.url
              , n = e.label;
            return l.createElement(g.a, {
                url: t
            }, (function(e) {
                return l.createElement(d.b, {
                    marginBottom: "8px"
                }, l.createElement(d.c, {
                    buttonStyle: "SOCIAL",
                    size: "REGULAR",
                    width: "212px",
                    onClick: function(e) {
                        return e
                    }
                }, l.createElement(d.b, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }, e ? "Copied!" : n)))
            }
            ))
        }
          , _ = function(e) {
            var t = e.post
              , n = e.isUnlisted
              , r = e.postPath;
            return l.createElement(d.b, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }, l.createElement(m.b, {
                color: "DARKER",
                scale: "L",
                tag: "p"
            }, function(e) {
                return e ? "Share your story outside Medium." : "Share your story with the world."
            }(n)), l.createElement(d.b, {
                marginTop: "20px"
            }, !n && l.createElement(l.Fragment, null, l.createElement(d.b, {
                marginBottom: "8px"
            }, l.createElement(u.a, {
                socialPlatform: "FACEBOOK",
                buttonStyle: "BUTTON_BRANDED",
                post: t
            })), l.createElement(d.b, {
                marginBottom: "8px"
            }, l.createElement(u.a, {
                socialPlatform: "TWITTER",
                buttonStyle: "BUTTON_BRANDED",
                post: t
            })), l.createElement(d.b, {
                marginBottom: "8px"
            }, l.createElement(u.a, {
                socialPlatform: "LINKEDIN",
                buttonStyle: "BUTTON_BRANDED",
                post: t
            }))), l.createElement(C, {
                url: r,
                label: "Copy story link"
            })))
        }
          , j = function(e) {
            var t = e.isVisible
              , n = e.hide
              , r = e.post
              , o = Object(f.useCx)()
              , a = r.id
              , s = r.visibility
              , i = r.curationEligibleAt
              , c = r.mediumUrl
              , u = r.shareKey
              , g = "UNLISTED" === s
              , x = !!i
              , E = Object(p.b)("h3");
            return l.createElement(d.i, {
                isVisible: t,
                hide: n,
                withAnimation: !0,
                withCloseButton: !1
            }, l.createElement(d.b, {
                background: b.D,
                borderRadius: "4px",
                boxShadow: "0 2px 10px ".concat(Object(b.z)(.15)),
                position: "relative",
                width: "900px",
                textAlign: "center",
                md: {
                    width: "600px"
                },
                sm: {
                    width: "calc(100vw - 128px)"
                }
            }, l.createElement(d.g, {
                onClick: n,
                size: "LARGE"
            }), l.createElement(d.b, {
                padding: "56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "485px"
            }, l.createElement(d.b, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }, l.createElement("h3", {
                className: o(E)
            }, "Your story is published!"), l.createElement(d.b, {
                maxWidth: "520px",
                marginTop: "20px"
            }, l.createElement(m.b, {
                color: "DARKER",
                scale: "L",
                tag: "p"
            }, function(e, t) {
                return e ? "Your unlisted story will not appear publicly on Medium, but you can still share it." : t ? "If our curators recommend your story to readers by adding it to relevant topics, we will email you to let you know. Recommended stories are part of Medium's metered paywall, and you can use the custom Friend Link below to give anyone who clicks it free access to your story." : "You chose not to make this story eligible for review by curators and distribution through Medium topics. Your story will only be shared on Medium with readers who follow you."
            }(g, x))), l.createElement(d.b, {
                paddingTop: "20px"
            }, x && !g && c && u && l.createElement(C, {
                url: Object(h.a)(Object(v.Db)(r), {
                    sk: u
                }),
                label: "Copy Friend Link"
            })), l.createElement(d.b, {
                borderBottom: "BASE_LIGHTER",
                width: "100%",
                margin: "20px 0"
            })), a && c && l.createElement(_, {
                post: r,
                isUnlisted: g,
                postPath: Object(v.Db)(r)
            }))))
        }
          , S = function(e) {
            var t = e.post;
            return l.createElement(c.b, null, (function(n) {
                return n && n.id && (n.id === (t.creator && t.creator.id) || t.collection && t.collection.viewerIsEditor) ? l.createElement(a.b, {
                    ssr: !1,
                    query: w,
                    variables: {
                        postId: t.id
                    }
                }, (function(t) {
                    var n = t.loading
                      , r = t.data
                      , o = (r = void 0 === r ? {} : r).post;
                    if (n || !o || o.inResponseToPostResult)
                        return null;
                    var a = {
                        isVisible: e.isVisible,
                        hide: e.hide,
                        post: o
                    };
                    return l.createElement(j, a)
                }
                )) : null
            }
            ))
        }
          , k = i()(x())
    },
    "./src/components/post/PostRecircItemV2.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return E
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/extends.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./node_modules/react-redux/es/index.js")
          , d = n("./src/components/post/PostByline.tsx")
          , m = n("./src/components/session/WithFlag.tsx")
          , p = n("./src/components/ui/image/ProgressiveMiroImage.tsx")
          , f = n("./src/framework/design-system/components/index.ts")
          , b = n("./src/framework/design-system/type/index.ts")
          , g = n("./src/framework/track/index.ts")
          , h = n("./src/util/miroImage.ts")
          , v = n("./src/util/routes.ts");
        function x() {
            var e = s()(["\n  fragment PostRecircItemV2_post on Post {\n    __typename\n    id\n    title\n    mediumUrl\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n    ...PostByline_post\n    ...PostPresentationTracker_post\n  }\n  ", "\n  ", "\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        var E = l()(x(), d.a, g.c);
        t.b = Object(u.c)((function(e) {
            return {
                defaultImages: e.config.defaultImages
            }
        }
        ))((function(e) {
            var t, n = e.post, r = e.defaultImages, a = (null == n ? void 0 : n.post) || n;
            if (!a)
                return null;
            var s, i, l, u, x = a.title, E = a.previewImage, y = null == r || null === (t = r.postPreviewImage) || void 0 === t ? void 0 : t.imageId, O = (s = {
                id: (null == E ? void 0 : E.id) || y,
                focusPercentX: null == E ? void 0 : E.focusPercentX,
                focusPercentY: null == E ? void 0 : E.focusPercentY
            },
            i = s.id,
            l = s.focusPercentX,
            u = s.focusPercentY,
            i ? c.createElement(p.a, {
                miroId: i,
                freezeGifs: !1,
                focusPercentX: l,
                focusPercentY: u,
                strategy: h.a.Crop,
                width: 70,
                height: 70,
                otherWidths: [48, 70],
                expectedWidth: 70,
                rules: [{
                    minWidth: {
                        xs: "48px",
                        sm: "48px",
                        md: "48px",
                        lg: "70px",
                        xl: "70px"
                    },
                    minHeight: {
                        xs: "48px",
                        sm: "48px",
                        md: "48px",
                        lg: "70px",
                        xl: "70px"
                    }
                }]
            }) : null);
            return c.createElement(g.b, {
                post: a,
                presentationContext: "PLACEMENT"
            }, c.createElement(f.b, {
                display: "flex",
                justifyContent: "space-between"
            }, c.createElement(f.b, {
                flexShrink: "1",
                xs: {
                    marginRight: "16px"
                },
                sm: {
                    marginRight: "16px"
                },
                md: {
                    marginRight: "16px"
                }
            }, c.createElement(f.b, {
                paddingBottom: "8px"
            }, c.createElement(b.c, {
                scale: {
                    xs: "XXS",
                    sm: "XXS",
                    md: "XXS",
                    lg: "XS",
                    xl: "XS"
                }
            }, c.createElement(f.f, {
                href: Object(v.Db)(a)
            }, x))), c.createElement(m.a, {
                name: "remove_stars_ui"
            }, (function(e) {
                return c.createElement(c.Fragment, null, c.createElement(d.b, {
                    post: a,
                    showBio: !1,
                    scale: "S",
                    detailScale: "S",
                    showStar: !e && !!a.isLocked,
                    hideAvatar: !0,
                    hideDescription: !0,
                    noClamp: !0
                }))
            }
            ))), O && c.createElement(f.b, o()({
                marginLeft: "12px",
                marginRight: "8px"
            }, {
                sm: {
                    marginLeft: "16px",
                    marginRight: "0px"
                }
            }), c.createElement(f.t, {
                display: "block",
                href: Object(v.Db)(a)
            }, O))))
        }
        ))
    },
    "./src/components/post/PostSidebar.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return N
        }
        )),
        n.d(t, "b", (function() {
            return V
        }
        )),
        n.d(t, "c", (function() {
            return z
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/typeof.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , u = n.n(c)
          , d = n("./node_modules/graphql-tag/src/index.js")
          , m = n.n(d)
          , p = n("./node_modules/react/index.js")
          , f = n("./node_modules/react-redux/es/index.js")
          , b = n("./src/WatchBounds.tsx")
          , g = n("./src/components/collection/CollectionFollowButton.tsx")
          , h = n("./src/components/metabar/constants.ts")
          , v = n("./src/components/post/TableOfContents.tsx")
          , x = n("./src/components/post/bookmark/index.ts")
          , E = n("./src/components/post/bookmark/PostPageBookmarkButton.tsx")
          , y = n("./src/components/post/multivote/MultiVote.tsx")
          , O = n("./src/components/publisher/auroraHooks.ts")
          , w = n("./src/components/read-next/ReadNext.tsx")
          , C = n("./src/components/responses/ResponsesIconButton.tsx")
          , _ = n("./src/components/session/useFlag.tsx")
          , j = n("./src/components/sidebar/SidebarWrapper.tsx")
          , S = n("./src/components/user/UserFollowButton.tsx")
          , k = n("./src/framework/design-system/components/index.ts")
          , P = n("./src/framework/design-system/type/index.ts")
          , I = n("./src/framework/source/index.ts")
          , T = n("./src/framework/style/index.ts")
          , R = n("./src/styles/mediaTypes.ts")
          , A = n("./src/util/dom.ts")
          , L = n("./src/util/routes.ts");
        function M() {
            var e = o()(["\n  fragment PostSidebar_post on Post {\n    id\n    clapCount\n    collection {\n      ...auroraHooks_publisher\n      ...PostSidebar_collection\n    }\n    creator {\n      bio\n      name\n      username\n      ...UserFollowButton_user\n      ...auroraHooks_publisher\n    }\n    isShortform\n    ...BookmarkButton_post\n    ...CollectionFollowButton_post\n    ...MultiVote_post\n    ...ResponsesIconButton_post\n    ...UserFollowButton_post\n    ...TableOfContents_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return M = function() {
                return e
            }
            ,
            e
        }
        function B() {
            var e = o()(["\n  fragment PostSidebar_collection on Collection {\n    id\n    description\n    tagline\n    ...CollectionFollowButton_collection\n    ...collectionUrl_collection\n  }\n  ", "\n  ", "\n"]);
            return B = function() {
                return e
            }
            ,
            e
        }
        var D = function(e) {
            var t;
            return t = {
                opacity: e ? 1 : 0,
                pointerEvents: e ? "auto" : "none",
                willChange: "opacity",
                position: "fixed",
                width: "188px",
                left: "50%",
                transform: "translateX(406px)",
                top: "calc(".concat(h.a, "px + 54px + 14px)")
            },
            u()(t, Object(R.b)("no-preference"), {
                transition: "opacity 200ms"
            }),
            u()(t, "@media all and (max-width: 1230px)", {
                display: "none"
            }),
            t
        }
          , N = p.forwardRef((function(e, t) {
            var n, r = e.isClearOfBounds, o = e.isOnPage, a = e.post, i = e.setIsResponsesSidebarVisible, c = Object(f.f)((function(e) {
                return e.navigation.currentLocation
            }
            )), u = Object(T.useCx)(), d = p.useContext(b.b).watchedBounds, m = p.useState(o || !1), g = l()(m, 2), h = g[0], x = g[1], S = p.useState(r || !1), P = l()(S, 2), R = P[0], L = P[1], M = p.useRef(null), B = p.useRef(null), N = !!Object(_.b)("enable_post_table_of_contents").value, V = p.useRef(null), z = a.collection;
            p.useEffect(H(d, x), [d]);
            var G = p.useCallback(function(e, t, n, r, o) {
                return function() {
                    if (e.current) {
                        var a = t.current
                          , s = ["image", "bgimage", "footer", "byline", "title", "header"]
                          , i = Object(j.c)(e, n, s, o)
                          , l = !a || Object(j.c)(t, n, s, o);
                        r(i && l)
                    }
                }
            }(M, B, d, L, {
                threshold: 10
            }), [d, L]);
            p.useEffect((function() {
                G()
            }
            ), []);
            var q = "object" === s()(t) ? t : null;
            p.useEffect(Object(j.d)(G, null == q ? void 0 : q.current), [G, null == q ? void 0 : q.current]);
            var W = R && h
              , $ = Object(O.b)(z || a.creator) ? p.createElement(F, {
                post: a
            }) : z && p.createElement(U, {
                post: a,
                currentLocation: c
            })
              , Y = function(e, t, n) {
                var r, o, a, s, i = null === (r = e.get("byline")) || void 0 === r || null === (o = r.ref) || void 0 === o ? void 0 : o.current, l = null === (a = e.get("ghost-track")) || void 0 === a || null === (s = a.ref) || void 0 === s ? void 0 : s.current, c = l && Object(A.a)(l).top + window.scrollY - window.innerHeight || 0;
                if (i && l) {
                    var u = i.offsetTop + i.offsetHeight + (n ? 10 : 40);
                    return t ? u - c : u
                }
            }(d, !0, N);
            return p.createElement(I.b, {
                source: {
                    susiEntry: "post_sidebar",
                    name: "post_sidebar"
                }
            }, p.createElement(j.b, {
                testId: "post-sidebar",
                isFixed: !0,
                scrollableRef: t,
                sidebarRef: M,
                topOffset: Y,
                visible: W
            }, a.isShortform ? $ : p.createElement(p.Fragment, null, p.createElement("div", {
                ref: V
            }, $, p.createElement(I.b, {
                source: {
                    susiEntry: "clap_sidebar"
                },
                extendSource: !0
            }, p.createElement(k.b, {
                display: "flex",
                marginBottom: "19px",
                marginLeft: "-3px",
                paddingTop: "28px"
            }, p.createElement(y.a, {
                post: a,
                buttonStyle: "SUBTLE_PADDED",
                hasDialog: !0
            }))), p.createElement(k.b, {
                marginBottom: "19px"
            }, p.createElement(I.b, {
                source: {
                    postId: a.id
                },
                extendSource: !0
            }, p.createElement(C.a, {
                responsesCount: null === (n = a.postResponses) || void 0 === n ? void 0 : n.count,
                location: "sidebar",
                setIsResponsesSidebarVisible: i,
                allowResponses: a.allowResponses,
                postId: a.id,
                isLimitedState: a.isLimitedState
            }))), p.createElement(E.a, {
                post: a
            })), p.createElement(v.b, {
                post: a,
                mode: "SIDEBAR",
                heightRef: V
            }))), p.createElement("div", {
                className: u(D(W)),
                ref: B
            }, p.createElement(w.a, {
                postId: a.id,
                isVisible: W
            })))
        }
        ))
          , U = function(e) {
            var t = e.post
              , n = e.currentLocation
              , r = t.collection;
            if (!r)
                return null;
            var o = t.isShortform ? "NONE" : "BASE_LIGHTER";
            return p.createElement(k.b, {
                paddingBottom: "28px",
                borderBottom: o
            }, (null == r ? void 0 : r.name) && p.createElement(k.t, {
                href: Object(L.I)(r, n)
            }, p.createElement(P.c, {
                scale: "XS"
            }, r.name)), (r.tagline || r.description) && p.createElement(k.b, {
                paddingTop: "2px",
                paddingBottom: "20px"
            }, p.createElement(P.b, {
                scale: "M",
                clamp: 6
            }, r.tagline || r.description)), p.createElement(I.b, {
                source: {
                    susiEntry: "follow_sidebar"
                },
                extendSource: !0
            }, p.createElement(g.a, {
                collection: r,
                post: t
            })))
        }
          , F = function(e) {
            var t = e.post
              , n = t.creator;
            if (!n || !n.name)
                return null;
            var r = p.createElement(P.c, {
                scale: "XS"
            }, n.name)
              , o = n.username ? p.createElement(k.t, {
                href: Object(L.sc)(n.username)
            }, r) : r
              , a = t.isShortform ? "NONE" : "BASE_LIGHTER";
            return p.createElement(k.b, {
                paddingBottom: "28px",
                borderBottom: a
            }, p.createElement(P.e, {
                scale: "S"
            }, "Written by"), p.createElement(k.b, {
                paddingTop: "5px",
                paddingBottom: "5px"
            }, o), n.bio && p.createElement(k.b, {
                paddingTop: "2px"
            }, p.createElement(P.b, {
                scale: "M",
                clamp: 6
            }, n.bio)), p.createElement(k.b, {
                paddingTop: "14px"
            }, p.createElement(S.c, {
                buttonSize: "SMALL",
                post: t,
                user: n
            })))
        }
          , H = function(e, t) {
            return function() {
                var n = new IntersectionObserver((function(n) {
                    var r = e.get("ghost-track");
                    if (r) {
                        var o = n.find((function(e) {
                            return e.target === r.ref.current
                        }
                        ));
                        o && t(o.isIntersecting)
                    } else
                        t(!1)
                }
                ));
                return e.forEach((function(e) {
                    e.ref.current && n.observe(e.ref.current)
                }
                )),
                function() {
                    n.disconnect()
                }
            }
        };
        var V = m()(B(), g.b, L.J)
          , z = m()(M(), O.a, V, S.b, x.b, g.c, y.b, C.b, S.a, v.a)
    },
    "./src/components/post/TableOfContents.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return w
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/collection/theming/Foldable.tsx")
          , c = n("./src/components/post/NormalizePostBodyModel.ts")
          , u = n("./src/components/sidebar/SidebarWrapper.tsx")
          , d = n("./src/framework/design-system/components/Link.tsx")
          , m = n("./src/framework/design-system/type/Detail.tsx")
          , p = n("./src/framework/style/index.ts")
          , f = {
            INLINE: {
                padding: "8px 0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            },
            SIDEBAR: {
                padding: "8px 0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "".concat(u.a, "px"),
                ":hover": {
                    width: "200px"
                }
            }
        };
        function b(e) {
            var t = Object(p.useCx)();
            return i.createElement("li", {
                className: t({
                    overflow: "hidden"
                })
            }, i.createElement(m.a, {
                scale: "M",
                color: "DARKER"
            }, i.createElement(d.a, {
                href: "#".concat(e.destination),
                onClick: function(t) {
                    t.preventDefault(),
                    function(e) {
                        var t = document.getElementById(e);
                        if (t) {
                            var n = t.offsetTop - 56;
                            window.scrollTo({
                                left: 0,
                                top: n,
                                behavior: "smooth"
                            }),
                            window.history.pushState({}, "", "#".concat(e))
                        }
                    }(e.destination)
                },
                disableSourceParam: !0,
                noFollow: !0,
                inline: !0
            }, i.createElement("div", {
                className: t(f[e.mode]),
                title: e.text
            }, e.text))))
        }
        var g = n("./src/components/session/RequireFlag.tsx")
          , h = n("./src/framework/design-system/components/Box.tsx")
          , v = n("./src/framework/design-system/type/Overline.tsx")
          , x = n("./src/schema-types/globalTypes.ts")
          , E = n("./src/styles/colors.ts")
          , y = n("./src/util/color.ts");
        function O() {
            var e = o()(["\n  fragment TableOfContents_post on Post {\n    id\n    collection {\n      id\n    }\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          id\n          name\n          type\n          text\n        }\n      }\n    }\n  }\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        var w = s()(O())
          , C = function(e) {
            var t = (e || {
                content: {
                    bodyModel: {
                        paragraphs: null
                    }
                }
            }).content.bodyModel.paragraphs;
            if (!t)
                throw new Error("Expected post to have paragraphs.");
            var n = Object(c.d)(t)
              , r = t.filter((function(e) {
                return function(e) {
                    switch (e) {
                    case x.l.H1:
                    case x.l.H2:
                    case x.l.H3:
                        return !0
                    }
                    return !1
                }(e.type)
            }
            ));
            return null !== n.titleIndex && r.splice(0, 1),
            r.length > 1 ? r : []
        }
          , _ = {
            INLINE: {
                display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none"
                },
                marginTop: "35px"
            },
            SIDEBAR: {
                display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "block"
                },
                margin: "50px 0",
                fontSize: "16px",
                ":hover": {
                    width: "200px"
                }
            }
        };
        t.b = function(e) {
            var t = e.post
              , n = e.mode
              , r = e.heightRef
              , o = Object(p.useCx)()
              , a = Object(p.useTheme)().backgroundColor
              , s = C(t);
            if (!function(e) {
                return !!(e.collection && e.collection.id && ["3ec9f38ac0bd", "3f6ecf56618", "8d6b8a439e32"].includes(e.collection.id)) || ["8135e6744d59"].includes(e.id)
            }(t) || !(null == s ? void 0 : s.length))
                return null;
            var c, u, d = function() {
                var e = (null == r ? void 0 : r.current) ? r.current.offsetHeight : 0
                  , t = Math.max("undefined" != typeof window ? window.innerHeight - e - 106 - 100 : 150, 150);
                return "".concat(t, "px")
            }, m = i.createElement(h.a, {
                overflow: "hidden",
                marginTop: "16px"
            }, i.createElement("ol", {
                className: o({
                    marginTop: "5px"
                })
            }, s.map((function(e) {
                return i.createElement(b, {
                    key: "toc_".concat(e.name),
                    text: e.text || "",
                    destination: e.name || "",
                    mode: n
                })
            }
            )))), f = Object(y.e)(a), x = function(e) {
                return "rgba(".concat(f[0], ", ").concat(f[1], ", ").concat(f[2], ", ").concat(e, ")")
            };
            switch (n) {
            case "INLINE":
                u = i.createElement(v.a, {
                    scale: "M",
                    color: "LIGHTER"
                }, i.createElement("div", {
                    className: o({
                        marginRight: "7px"
                    })
                }, "Jump To Section")),
                c = i.createElement("div", {
                    className: o(_[n])
                }, i.createElement(h.a, {
                    borderBottom: "BASE_LIGHTER",
                    paddingBottom: "10px"
                }, i.createElement(l.a, {
                    titleComponent: u,
                    width: "auto",
                    arrowFill: Object(E.z)(.54)
                }, m)));
                break;
            case "SIDEBAR":
                u = i.createElement(v.a, {
                    scale: "S",
                    color: "LIGHTER"
                }, "Table of Contents"),
                c = i.createElement("div", {
                    className: o(_[n])
                }, u, i.createElement(h.a, {
                    position: "relative"
                }, i.createElement("div", {
                    className: o((function() {
                        return {
                            background: "linear-gradient(".concat(x(1), ",\n      ").concat(x(.5), ",\n      ").concat(x(0), ")"),
                            position: "absolute",
                            width: "100%",
                            height: "".concat(35, "px"),
                            top: "0px"
                        }
                    }
                    ))
                }), i.createElement("div", {
                    className: o({
                        overflowY: "scroll",
                        scrollbarWidth: "none",
                        "-ms-overflow-style": "none",
                        "::-webkit-scrollbar": {
                            display: "none"
                        },
                        height: d(),
                        paddingBottom: "".concat(35, "px")
                    })
                }, m), i.createElement("div", {
                    className: o((function() {
                        return {
                            background: "linear-gradient(".concat(x(0), ",\n      ").concat(x(.5), ",\n      ").concat(x(1), ")"),
                            position: "relative",
                            width: "100%",
                            height: "".concat(35, "px"),
                            top: "-".concat(35, "px")
                        }
                    }
                    ))
                })));
                break;
            default:
                return null
            }
            return i.createElement(g.a, {
                name: "enable_post_table_of_contents"
            }, c)
        }
    },
    "./src/components/post/body/InteractivePostBody.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return A
        }
        )),
        n.d(t, "a", (function() {
            return L
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/extends.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , u = n("./node_modules/graphql-tag/src/index.js")
          , d = n.n(u)
          , m = n("./node_modules/react/index.js")
          , p = n("./src/components/post/body/ActivePrivateNoteContext.tsx")
          , f = n("./src/components/post/body/ActiveSelectionContext.tsx")
          , b = n("./src/components/post/body/ParagraphRefsMapContext.tsx")
          , g = n("./src/components/post/body/PostBody.tsx")
          , h = n("./src/components/post/markups/HighlightSegmentsContext.tsx")
          , v = n("./src/util/typeGuards.ts");
        function x() {
            var e = l()(["\n  fragment NormalizeHighlights_paragraph on Paragraph {\n    name\n    text\n  }\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = l()(["\n  fragment NormalizeHighlights_highlight on Quote {\n    endOffset\n    startOffset\n    paragraphs {\n      name\n      text\n    }\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function O(e, t, n) {
            if (!e || "number" != typeof t || "number" != typeof n)
                return null;
            var r = t
              , o = n;
            return e.substr(r, o - r)
        }
        function w(e, t) {
            return e && t ? e.map((function(e) {
                var n = e.endOffset
                  , r = e.startOffset
                  , a = e.paragraphs && e.paragraphs[0]
                  , s = function(e, t) {
                    return e ? t.find((function(t) {
                        var n = t.name;
                        return e === n
                    }
                    )) : null
                }(a.name, t);
                if (!a || !s)
                    return null;
                var i = O(a.text, r, n)
                  , l = O(s.text, r, n);
                if (!i || !l)
                    return null;
                if (i === l)
                    return e;
                var c = s.text ? s.text.indexOf(i) : null;
                return "number" != typeof c || c < 0 ? null : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, e, {
                    endOffset: c + i.length,
                    startOffset: c
                })
            }
            )).filter(v.b) : e
        }
        var C = d()(E())
          , _ = d()(x())
          , j = n("./src/components/session/WithFlag.tsx")
          , S = n("./src/components/session/WithViewer.tsx");
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function I() {
            var e = l()(["\n  query InteractivePostBodyQuery($postId: ID!, $showHighlights: Boolean!, $showNotes: Boolean!) {\n    post(id: $postId) {\n      id\n      highlights @include(if: $showHighlights) {\n        id\n        ...ActiveSelectionContext_highlight\n        ...HighlighSegmentContext_highlight\n        ...NormalizeHighlights_highlight\n        ...PostBody_highlight\n      }\n      privateNotes @include(if: $showNotes) {\n        ...PostBody_privateNote\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        function T() {
            var e = l()(["\n  fragment InteractivePostBody_customStyleSheet on CustomStyleSheet {\n    id\n    ...PostBody_customStyleSheet\n  }\n  ", "\n"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        function R() {
            var e = l()(["\n  fragment InteractivePostBody_post on Post {\n    id\n    # please note that the postMeteringOptions is defined in handlers that use InteractivePostBody\n    # (PostHandler and SequencePostHandler)\n    content(postMeteringOptions: $postMeteringOptions) {\n      isLockedPreviewOnly\n      bodyModel {\n        ...PostBody_bodyModel\n        paragraphs {\n          ...HighlighSegmentContext_paragraph\n          ...NormalizeHighlights_paragraph\n        }\n      }\n    }\n    creator {\n      id\n      allowNotes\n      ...PostBody_creator\n    }\n    ...ActiveSelectionContext_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return R = function() {
                return e
            }
            ,
            e
        }
        var A = d()(R(), f.c, h.b, _, g.a, g.b)
          , L = d()(T(), g.c)
          , M = d()(I(), f.b, h.a, g.d, g.e, C)
          , B = m.forwardRef((function(e, t) {
            var n = e.activeGrafId
              , r = e.activeNoteId
              , o = e.customStyleSheet
              , a = e.isAuroraPostPageEnabled
              , i = e.post
              , l = e.postBodyInserts
              , u = i.content
              , d = i.latestPublishedVersion;
            if (!u)
                throw new Error("Expected post to have content.");
            var v = {
                bodyModel: u.bodyModel,
                creator: i.creator,
                customStyleSheet: o,
                isAuroraPostPageEnabled: a,
                postBodyInserts: l,
                ref: t,
                richTextStyle: "FULL_PAGE"
            }
              , x = i && i.creator && i.creator.allowNotes || !1;
            return m.createElement(j.a, {
                name: "enable_lite_post_highlights_view_only",
                nonBlocking: !0
            }, (function(e) {
                return u.isLockedPreviewOnly || !e ? m.createElement(g.f, v) : m.createElement(c.b, {
                    notifyOnNetworkStatusChange: !0,
                    ssr: !1,
                    query: M,
                    variables: {
                        postId: i.id,
                        showHighlights: Boolean(e),
                        showNotes: x
                    }
                }, (function(e) {
                    var t = e.data
                      , o = (t = void 0 === t ? {} : t).post
                      , a = u.bodyModel && u.bodyModel.paragraphs
                      , l = w(o && o.highlights || [], a)
                      , c = o && o.privateNotes || null;
                    return m.createElement(b.b, null, m.createElement(j.a, {
                        name: "enable_lite_post_highlights",
                        nonBlocking: !0
                    }, (function(e) {
                        var t = m.createElement(g.f, s()({}, v, {
                            highlights: l,
                            privateNotes: c
                        }));
                        return e ? m.createElement(p.a, {
                            initialActivePrivateNoteId: r,
                            initialActiveGrafName: n
                        }, m.createElement(f.d, {
                            interactivePost: P({}, i, {
                                latestPublishedVersion: d
                            }),
                            highlights: l
                        }, m.createElement(S.b, {
                            nonBlocking: !0
                        }, (function(e) {
                            return m.createElement(h.d, {
                                highlights: l,
                                paragraphs: a,
                                viewer: e
                            }, t)
                        }
                        )))) : t
                    }
                    )))
                }
                ))
            }
            ))
        }
        ));
        t.c = B
    },
    "./src/components/post/body/PostBody.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return ue
        }
        )),
        n.d(t, "d", (function() {
            return de
        }
        )),
        n.d(t, "b", (function() {
            return me
        }
        )),
        n.d(t, "e", (function() {
            return pe
        }
        )),
        n.d(t, "c", (function() {
            return fe
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/extends.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n("./src/WatchBounds.tsx")
          , p = n("./src/framework/style/index.ts")
          , f = n("./src/styles/font.ts")
          , b = function(e) {
            return {
                color: e.baseColor.text.darker,
                border: "none",
                marginTop: "30px",
                textAlign: "center",
                ":before": {
                    content: '"..."',
                    letterSpacing: "0.6em",
                    textIndent: "0.6em",
                    fontStyle: "italic",
                    lineHeight: "1.4"
                }
            }
        };
        function g() {
            var e = Object(p.useCx)();
            return d.createElement("hr", {
                className: e([Object(f.c)({
                    fontSize: 28
                }), b])
            })
        }
        var h = n("./src/components/post/PostBodySection.tsx")
          , v = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , x = n.n(v)
          , E = n("./node_modules/@babel/runtime/helpers/typeof.js")
          , y = n.n(E)
          , O = n("./node_modules/pluralize/pluralize.js")
          , w = n.n(O)
          , C = n("./src/components/user/UserAvatar.tsx")
          , _ = n("./src/framework/design-system/components/index.ts")
          , j = n("./src/framework/design-system/type/Overline.tsx")
          , S = n("./src/framework/track/index.ts");
        function k() {
            var e = o()(["\n  fragment PostNotesDetails_user on User {\n    id\n    imageId\n    name\n    username\n    ...UserAvatar_user\n  }\n  ", "\n"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        function P(e) {
            var t = e.grid.xStep;
            return {
                padding: "".concat(3 * t, "px ").concat(4 * t, "px ").concat(3 * t, "px"),
                width: "400px"
            }
        }
        var I = d.memo((function(e) {
            var t = e.close
              , n = e.users
              , r = Object(p.useCx)()
              , o = d.useRef(null)
              , a = Object(p.useTheme)()
              , s = a.grid.xStep;
            return d.useEffect((function() {
                function e() {
                    var e = o.current;
                    if (e && e.getBoundingClientRect) {
                        var n = e.getBoundingClientRect()
                          , r = n.bottom
                          , s = n.top < 0 || r > window.innerHeight
                          , i = window.innerWidth < a.breakpoints.xl;
                        (s || i) && t()
                    }
                }
                return S.a.on("scroll_end", e),
                S.a.on("resize_throttled", e),
                function() {
                    S.a.off("scroll_end", e),
                    S.a.off("resize_throttled", e)
                }
            }
            ), []),
            d.createElement("section", {
                ref: o,
                className: r(P)
            }, d.createElement(_.b, {
                borderBottom: "BASE_LIGHTER",
                marginBottom: "-".concat(s, "px"),
                paddingBottom: "".concat(2 * s, "px")
            }, d.createElement(j.a, null, "Highlights (".concat(n.length, ")"))), d.createElement(_.b, {
                marginLeft: "3px"
            }, n.length && n.map((function(e) {
                return d.createElement(_.b, {
                    display: "inline-block",
                    key: e.id,
                    marginTop: "".concat(5 * s, "px"),
                    marginRight: "".concat(5 * s, "px"),
                    width: "".concat(8 * s, "px")
                }, d.createElement(C.d, {
                    hasPopover: !0,
                    link: !0,
                    user: e,
                    scale: "XS"
                }))
            }
            ))))
        }
        ))
          , T = u()(k(), C.b)
          , R = n("./src/components/post/markups/HighlightSegmentsContext.tsx")
          , A = n("./src/components/post/notes/PostAnnotationsPopover.tsx")
          , L = n("./src/components/post/paragraph/IframeParagraph/iframePostMessageNormalizer.ts")
          , M = n("./src/components/session/WithViewer.tsx")
          , B = n("./src/framework/design-system/type/Detail.tsx")
          , D = n("./src/framework/design-system/util/style/converters.ts")
          , N = n("./src/util/typeGuards.ts");
        function U() {
            var e = o()(["\n  fragment PostNotesMarkers_creator on User {\n    id\n    name\n    isFollowing\n  }\n"]);
            return U = function() {
                return e
            }
            ,
            e
        }
        function F() {
            var e = o()(["\n  fragment PostNotesMarkers_highlight on Quote {\n    id\n    endOffset\n    paragraphs {\n      id\n      name\n    }\n    startOffset\n    userId\n    user {\n      id\n      name\n      ...PostNotesDetails_user\n    }\n  }\n  ", "\n"]);
            return F = function() {
                return e
            }
            ,
            e
        }
        function H() {
            return {
                border: "none",
                cursor: "pointer",
                display: "block",
                padding: "0px",
                textAlign: "left",
                width: "100%"
            }
        }
        function V() {
            return {
                left: "100%",
                position: "absolute",
                top: 0
            }
        }
        function z(e, t) {
            return {
                marginTop: "6px",
                maxWidth: "100%",
                position: "absolute",
                top: "".concat(e - (t || 0), "px"),
                whiteSpace: "nowrap",
                width: "100%"
            }
        }
        function G(e) {
            return {
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "".concat(Object(D.a)(e, 8, !0), "px"),
                position: "relative"
            }
        }
        function q() {
            return {
                display: "inline-block",
                maxWidth: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }
        }
        function W(e, t) {
            return "number" == typeof e.startOffset && "number" == typeof t.startOffset ? e.startOffset < t.startOffset ? -1 : 1 : -1
        }
        function $(e, t) {
            var n = t.startOffset
              , r = t.endOffset
              , o = t.paragraphs[0].name;
            if (!o || "number" != typeof n || "number" != typeof r)
                return e;
            var a = !1
              , s = e[o] || [];
            return s.length && (s = s.map((function(e) {
                var o = n <= e.endOffset + 1
                  , s = e.startOffset
                  , i = e.endOffset;
                return o && (a = !0,
                e.highlights.push(t),
                i = Math.max(r, e.endOffset),
                s = Math.min(n, e.startOffset)),
                {
                    highlights: e.highlights,
                    endOffset: i,
                    startOffset: s
                }
            }
            ))),
            a || s.push({
                highlights: [t],
                endOffset: r,
                startOffset: n
            }),
            e[o] = s,
            e
        }
        function Y(e, t, n) {
            var r = new Map;
            if (e.size && t.length) {
                var o = function(e) {
                    var t = l()(e).sort(W).reduce($, {});
                    return Object.values(t).reduce((function(e, t) {
                        return t && "object" === y()(t) && t.length ? (e.push.apply(e, l()(t)),
                        e) : e
                    }
                    ), [])
                }(t)
                  , a = [];
                o.forEach((function(t) {
                    var o = t.highlights[0]
                      , s = o.paragraphs[0].name;
                    if (o && "number" == typeof o.startOffset && s) {
                        var i = e.get("".concat(s, "_").concat(o.startOffset));
                        if (i && i.ref && i.ref.current) {
                            var l, c = i.ref.current.getBoundingClientRect().top + window.pageYOffset;
                            a.length && (l = a.find((function(e) {
                                return c < e + n.newFonts.body.lineHeight.M && c > e || c > e - n.newFonts.body.lineHeight.M && c < e
                            }
                            )));
                            var u = l || c
                              , d = r.get(u) || [];
                            d.length || a.push(u);
                            var m = d.concat(t.highlights);
                            m.length && r.set(u, m)
                        }
                    }
                }
                ))
            }
            return r
        }
        function K(e) {
            var t = e.children
              , n = e.highlightString
              , r = e.toggle
              , o = Object(p.useCx)();
            return "Top highlight" === n ? d.createElement(d.Fragment, null, t) : d.createElement("button", {
                className: o(H),
                onClick: function() {
                    return r()
                },
                onMouseDown: function(e) {
                    return e.preventDefault()
                }
            }, t)
        }
        function Q(e) {
            var t = e.creator
              , n = e.positionMap
              , r = e.yPosOffset
              , o = Object(p.useCx)();
            if ("number" != typeof r)
                return null;
            var a = Array.from(n.entries());
            return d.createElement(M.b, {
                nonBlocking: !0
            }, (function(e) {
                return d.createElement(d.Fragment, null, a.map((function(n, a) {
                    var s = x()(n, 2)
                      , i = s[0]
                      , l = s[1]
                      , c = function(e, t, n) {
                        if (1 === e.length) {
                            if ("anon" === e[0].userId)
                                return "Top highlight";
                            if (!t)
                                return null;
                            if (n && n.id === e[0].userId && t.id !== n.id && !n.isFollowing)
                                return null;
                            if (t && t.id === e[0].userId)
                                return "You highlighted";
                            if (e[0].user && e[0].user.name)
                                return e[0].user.name
                        }
                        var r = [];
                        if (e.forEach((function(e) {
                            if (e.user) {
                                var o = t && t.id === e.userId
                                  , a = e.user.name
                                  , s = n && n.id === e.userId && (!t || t.id !== n.id && !n.isFollowing);
                                o ? r.length && "You" === r[0] || r.unshift("You") : s || !a || r.includes(a) || r.push(a)
                            }
                        }
                        )),
                        !r.length)
                            return "Top highlight";
                        if (1 === r.length)
                            return "You" === r[0] ? "You highlighted" : r[0];
                        if (2 === r.length)
                            return "".concat(r[0], " and ").concat(r[1]);
                        var o = r.slice(0, 2)
                          , a = r.length - o.length;
                        return "".concat(o[0], ", ").concat(o[1], ", and ").concat(a, " ").concat(w()("other", a))
                    }(l, e, t);
                    return c ? d.createElement("div", {
                        className: o(z(i, r)),
                        key: a
                    }, d.createElement(_.I, null, (function(e) {
                        var t = e.isVisible
                          , n = e.hide
                          , r = e.toggle;
                        return d.createElement(d.Fragment, null, d.createElement(K, {
                            toggle: r,
                            highlightString: c
                        }, d.createElement(B.a, {
                            scale: "S"
                        }, d.createElement("span", {
                            className: o(q)
                        }, c))), t && d.createElement(A.a, {
                            boundariesElement: "window",
                            isVisible: !0,
                            hide: n,
                            placement: "right",
                            popoverRenderFn: function() {
                                var e = new Set
                                  , t = l.map((function(t) {
                                    var n = t.user;
                                    return n && n.id && !e.has(n.id) ? (e.add(n.id),
                                    n) : null
                                }
                                )).filter(N.b);
                                return d.createElement(I, {
                                    close: n,
                                    users: t
                                })
                            }
                        }, d.createElement(d.Fragment, null)))
                    }
                    ))) : null
                }
                )))
            }
            ))
        }
        var X = d.forwardRef((function(e, t) {
            var n = e.creator
              , r = e.highlights
              , o = d.useContext(R.c).highlightSegments
              , a = d.useRef(null)
              , s = d.useState(null)
              , i = x()(s, 2)
              , l = i[0]
              , c = i[1]
              , u = Object(p.useCx)()
              , m = Object(p.useTheme)()
              , f = d.useState(null)
              , b = x()(f, 2)
              , g = b[0]
              , h = b[1]
              , v = d.useState(null)
              , E = x()(v, 2)
              , y = E[0]
              , O = E[1];
            return d.useEffect((function() {
                var e = function() {
                    var e = Y(o, r, m);
                    if (c(e),
                    "function" != typeof t && (null == t ? void 0 : t.current) && O(t.current.offsetTop),
                    null == a ? void 0 : a.current) {
                        var n = a.current.getBoundingClientRect().left
                          , s = window.innerWidth - n - 8 * m.grid.xStep;
                        h(s)
                    }
                };
                S.a.on("resize_throttled", e);
                var n = Object(L.a)((function(t) {
                    "iframe.resize" !== t.context && "player.js" !== t.context || e()
                }
                )).destructor;
                return e(),
                function() {
                    S.a.off("resize_throttled", e),
                    n()
                }
            }
            ), [r, o]),
            d.createElement("div", {
                className: u(G)
            }, d.createElement(_.b, {
                display: "block",
                xs: {
                    display: "none"
                },
                sm: {
                    display: "none"
                },
                md: {
                    display: "none"
                },
                lg: {
                    display: "none"
                }
            }, d.createElement("aside", {
                className: u(V),
                ref: a,
                style: {
                    width: g ? "".concat(g, "px") : void 0
                }
            }, l && d.createElement(Q, {
                creator: n,
                highlights: r,
                positionMap: l,
                yPosOffset: y,
                width: g
            }))))
        }
        ))
          , J = d.memo(X)
          , Z = u()(F(), T)
          , ee = u()(U())
          , te = n("./src/components/post/body/ActivePrivateNoteContext.tsx");
        var ne = n("./src/components/session/useFlag.tsx")
          , re = n("./src/util/richText.ts");
        function oe() {
            var e = o()(["\n  fragment PostBody_customStyleSheet on CustomStyleSheet {\n    id\n    ...PostBodySection_customStyleSheet\n  }\n  ", "\n"]);
            return oe = function() {
                return e
            }
            ,
            e
        }
        function ae() {
            var e = o()(["\n  fragment PostBody_privateNote on Note {\n    ...normalizedBodyModel_privateNote\n    ...PostBodySection_privateNote\n  }\n  ", "\n  ", "\n"]);
            return ae = function() {
                return e
            }
            ,
            e
        }
        function se() {
            var e = o()(["\n  fragment PostBody_creator on User {\n    ...PostNotesMarkers_creator\n  }\n  ", "\n"]);
            return se = function() {
                return e
            }
            ,
            e
        }
        function ie() {
            var e = o()(["\n  fragment PostBody_highlight on Quote {\n    paragraphs {\n      id\n    }\n    ...normalizedBodyModel_highlight\n    ...PostBodySection_highlight\n    ...PostNotesMarkers_highlight\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return ie = function() {
                return e
            }
            ,
            e
        }
        function le() {
            var e = o()(["\n  fragment PostBody_bodyModel on RichText {\n    sections {\n      name\n      startIndex\n      textLayout\n      imageLayout\n      backgroundImage {\n        id\n        originalHeight\n        originalWidth\n      }\n      videoLayout\n      backgroundVideo {\n        videoId\n        originalHeight\n        originalWidth\n        previewImageId\n      }\n    }\n    paragraphs {\n      id\n      ...PostBodySection_paragraphs\n    }\n    ...normalizedBodyModel_richText\n  }\n  ", "\n  ", "\n"]);
            return le = function() {
                return e
            }
            ,
            e
        }
        var ce = d.forwardRef((function(e, t) {
            var n, r, o = e.bodyModel, a = e.creator, i = e.customStyleSheet, c = e.highlights, u = e.isAuroraPostPageEnabled, f = e.privateNotes, b = e.postBodyInserts, v = e.richTextStyle, x = void 0 === v ? "FULL_PAGE" : v, E = Object(p.useCx)(), y = null === (n = d.useContext(m.b).watchedBounds.get("byline")) || void 0 === n || null === (r = n.ref) || void 0 === r ? void 0 : r.current, O = y ? y.offsetTop - 48 : 100, w = {
                position: "absolute",
                left: 0,
                top: "calc(100vh + ".concat(O, "px)"),
                bottom: "calc(100vh + ".concat(100, "px)"),
                width: "10px",
                pointerEvents: "none"
            }, C = !!Object(ne.a)("enable_icelandic_truncated_posts"), _ = Object(te.b)().privateNoteSelection, j = d.useMemo((function() {
                return c && _ ? [].concat(l()(c), [_]) : c
            }
            ), [c, _]), S = b ? function(e) {
                var t;
                return Object.keys(e).some((function(n) {
                    return !!e[n].find((function(e) {
                        return "BYLINE" === e.insertType
                    }
                    )) && (t = n,
                    !0)
                }
                )),
                t
            }(b) : void 0, k = d.useMemo((function() {
                return Object(re.f)(o, {
                    bylineParagraphName: S,
                    highlights: j,
                    isAuroraPostPageEnabled: u,
                    isLightweight: C,
                    privateNotes: f,
                    richTextStyle: x
                })
            }
            ), [o, j, f, x, C]), P = b && b.first;
            return d.createElement("div", {
                ref: t
            }, d.createElement(d.Fragment, null, d.createElement(m.a, {
                name: "ghost-track",
                type: "ghost",
                className: E(w)
            }), "FULL_PAGE" === x && c && c.length > 0 && d.createElement(J, {
                creator: a,
                highlights: l()(c),
                ref: t
            }), !!P && P.map((function(e, t) {
                return d.createElement("section", {
                    className: E({
                        marginBottom: "20px"
                    }),
                    key: "postBodyInsertFirst_".concat(t)
                }, e.component)
            }
            ))), k.map((function(e, t) {
                if ("HR" === e) {
                    var n, r, o = k[t - 1], a = k[t + 1], l = "HR" !== o && (null == o || null === (n = o.section) || void 0 === n ? void 0 : n.backgroundImage), c = "HR" !== a && (null == a || null === (r = a.section) || void 0 === r ? void 0 : r.backgroundImage);
                    return l || c ? null : d.createElement(g, {
                        key: t
                    })
                }
                return d.createElement(h.d, s()({
                    key: e.section.name || t,
                    customStyleSheet: i,
                    postBodyInserts: b
                }, e))
            }
            )))
        }
        ))
          , ue = (t.f = ce,
        u()(le(), re.i, h.d.fragments.paragraphs))
          , de = u()(ie(), re.g, h.b, Z)
          , me = u()(se(), ee)
          , pe = u()(ae(), re.h, h.c)
          , fe = u()(oe(), h.a)
    },
    "./src/components/post/bookmark/BookmarkButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return j
        }
        )),
        n.d(t, "b", (function() {
            return I
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n.n(c)
          , d = n("./src/components/post/bookmark/mutations.tsx")
          , m = n("./src/components/session/WithViewer.tsx")
          , p = n("./src/components/susi/SusiClickable.tsx")
          , f = n("./src/framework/design-system/components/index.ts")
          , b = n("./src/framework/reporter/index.ts")
          , g = n("./src/framework/source/index.ts")
          , h = n("./src/framework/style/index.ts")
          , v = n("./src/schema-types/globalTypes.ts")
          , x = n("./src/svg/bookmark-25px.svg")
          , E = n("./src/svg/bookmark-filled-25px.svg");
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var O = u.a.createElement("path", {
            d: "M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13c.2.18.52.17.71-.03a.5.5 0 0 0 .12-.29H19V6z"
        })
          , w = function(e) {
            return u.a.createElement("svg", y({
                width: 25,
                height: 25,
                viewBox: "0 0 25 25"
            }, e), O)
        }
          , C = n("./src/util/routes.ts");
        function _() {
            var e = s()(["\n  fragment BookmarkButton_post on Post {\n    ...SusiClickable_post\n    ...WithSetReadingList_post\n  }\n  ", "\n  ", "\n"]);
            return _ = function() {
                return e
            }
            ,
            e
        }
        var j = l()(_(), p.d, d.b)
          , S = function(e) {
            return {
                fill: e.baseColor.fill.light
            }
        };
        var k = function(e) {
            return {
                fill: e.baseColor.border.light,
                cursor: "default"
            }
        }
          , P = function() {
            var e = Object(h.useCx)();
            return c.createElement(w, {
                className: e(k)
            })
        };
        function I(e) {
            var t = e.post
              , n = e.withTooltip
              , r = void 0 === n || n
              , a = t.id
              , s = t.readingList
              , i = Object(h.useCx)()
              , l = Object(b.c)()
              , u = Object(g.d)()
              , y = c.useState(r)
              , O = o()(y, 2)
              , w = O[0]
              , _ = O[1]
              , j = c.useState(s || v.r.READING_LIST_NONE)
              , k = o()(j, 2)
              , I = k[0]
              , T = k[1];
            c.useEffect((function() {
                T(s || v.r.READING_LIST_NONE)
            }
            ), [s]);
            var R = c.useCallback((function(e) {
                if (s) {
                    var t = (n = s,
                    {
                        READING_LIST_NONE: v.r.READING_LIST_QUEUE,
                        READING_LIST_ARCHIVE: null,
                        READING_LIST_QUEUE: v.r.READING_LIST_NONE
                    }[n]);
                    t && T(t),
                    l.event(function(e) {
                        return {
                            READING_LIST_NONE: "post.addedBookmark",
                            READING_LIST_ARCHIVE: "post.addedArchive",
                            READING_LIST_QUEUE: "post.removedBookmark"
                        }[e]
                    }(s), {
                        postId: a,
                        source: u
                    }),
                    e(t)().catch((function() {
                        T(s)
                    }
                    )),
                    r && _(!1)
                }
                var n
            }
            ), [a, s, u, r])
              , A = c.useCallback((function() {
                r && _(!0)
            }
            ), [r]);
            return c.createElement(m.b, null, (function(e) {
                return e ? s ? c.createElement("div", {
                    className: i(S)
                }, c.createElement(d.a, {
                    post: t,
                    viewer: e
                }, (function(e) {
                    return c.createElement(f.H, {
                        isVisible: w,
                        darkTheme: !0,
                        placement: "top",
                        mouseLeaveDelay: 0,
                        targetDistance: 10,
                        popoverRenderFn: function() {
                            return c.createElement(f.b, {
                                padding: "8px"
                            }, {
                                READING_LIST_NONE: "Save story",
                                READING_LIST_ARCHIVE: "Archived",
                                READING_LIST_QUEUE: "Unsave Story"
                            }[s])
                        },
                        onMouseLeave: A
                    }, c.createElement(f.t, {
                        onClick: function() {
                            return R(e)
                        }
                    }, (t = I,
                    {
                        READING_LIST_NONE: c.createElement(x.a, null),
                        READING_LIST_ARCHIVE: c.createElement(P, null),
                        READING_LIST_QUEUE: c.createElement(E.a, null)
                    }[t])));
                    var t
                }
                ))) : null : c.createElement(f.H, {
                    isVisible: w,
                    darkTheme: !0,
                    placement: "top",
                    mouseLeaveDelay: 0,
                    targetDistance: 10,
                    popoverRenderFn: function() {
                        return c.createElement(f.b, {
                            padding: "8px"
                        }, "Bookmark story")
                    }
                }, c.createElement(p.a, {
                    post: t,
                    operation: "register",
                    actionUrl: Object(C.o)(a)
                }, c.createElement(x.a, {
                    className: i(S)
                })))
            }
            ))
        }
    },
    "./src/components/post/bookmark/PostPageBookmarkButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return C
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./src/components/post/bookmark/BookmarkButton.tsx")
          , i = n("./src/components/post/bookmark/PostPageBookmarkContext.tsx")
          , l = n("./src/components/post/bookmark/mutations.tsx")
          , c = n("./src/components/session/WithViewer.tsx")
          , u = n("./src/components/susi/SusiClickable.tsx")
          , d = n("./src/framework/design-system/components/index.ts")
          , m = n("./src/framework/reporter/index.ts")
          , p = n("./src/framework/source/index.ts")
          , f = n("./src/framework/style/index.ts")
          , b = n("./src/schema-types/globalTypes.ts")
          , g = n("./src/svg/bookmark-25px.svg")
          , h = n("./src/svg/bookmark-archive-25px.svg")
          , v = n("./src/svg/bookmark-remove-25px.svg")
          , x = n("./src/util/hooks/useIsEligibleToViewNewResponses.tsx")
          , E = n("./src/util/routes.ts");
        var y = function(e, t) {
            return e && {
                READING_LIST_QUEUE: "READING_LIST_ARCHIVE",
                READING_LIST_ARCHIVE: "READING_LIST_NONE"
            }[t]
        }
          , O = function(e) {
            return function(t) {
                return {
                    fill: e ? t.baseColor.fill.lighter : t.baseColor.border.darker
                }
            }
        }
          , w = function(e) {
            var t = e.currentReadingListType
              , n = e.isEligibleToViewNewResponses
              , r = Object(f.useCx)()
              , o = O(n);
            return {
                READING_LIST_QUEUE: a.createElement(h.a, {
                    className: r(o)
                }),
                READING_LIST_ARCHIVE: a.createElement(v.a, {
                    className: r(o)
                })
            }[t]
        }
          , C = function(e) {
            var t = e.post
              , n = e.withTooltip
              , r = void 0 === n || n
              , h = t.id
              , v = t.readingList
              , C = Object(f.useCx)()
              , _ = Object(m.c)()
              , j = Object(p.d)()
              , S = a.useContext(i.a)
              , k = S.isFirstLoadAndInReadingList
              , P = S.setIsFirstLoadAndInReadingList
              , I = a.useState(r)
              , T = o()(I, 2)
              , R = T[0]
              , A = T[1]
              , L = Object(x.a)()
              , M = a.useCallback((function(e, t) {
                if (v) {
                    if (_.event({
                        READING_LIST_QUEUE: "post.addedArchive",
                        READING_LIST_ARCHIVE: "post.removedBookmark"
                    }[v], {
                        postId: h,
                        source: j
                    }),
                    t(y(e, v))(),
                    y(e, v) === b.r.READING_LIST_NONE)
                        return void P(!1);
                    r && A(!1)
                }
            }
            ), [h, v, k, P, r, j])
              , B = a.useCallback((function() {
                r && A(!0)
            }
            ), [r]);
            return a.createElement(c.b, null, (function(e) {
                return e ? v && a.createElement("div", null, !k || v !== b.r.READING_LIST_QUEUE && v !== b.r.READING_LIST_ARCHIVE ? a.createElement(s.b, {
                    post: t
                }) : a.createElement(l.a, {
                    post: t
                }, (function(t) {
                    return a.createElement(d.H, {
                        isVisible: R,
                        darkTheme: !0,
                        placement: "top",
                        mouseLeaveDelay: 0,
                        targetDistance: 10,
                        popoverRenderFn: function() {
                            return a.createElement(d.b, {
                                padding: "8px"
                            }, {
                                READING_LIST_QUEUE: "Archive Story",
                                READING_LIST_ARCHIVE: "Remove story from reading list"
                            }[v])
                        },
                        onMouseLeave: B
                    }, a.createElement(d.t, {
                        onClick: function() {
                            return M(e, t)
                        }
                    }, a.createElement(w, {
                        currentReadingListType: v,
                        isEligibleToViewNewResponses: L
                    })))
                }
                ))) : a.createElement("div", {
                    className: C(O(L))
                }, a.createElement(u.a, {
                    post: t,
                    operation: "register",
                    actionUrl: Object(E.o)(h)
                }, a.createElement(g.a, null)))
            }
            ))
        }
    },
    "./src/components/post/bookmark/PostPageBookmarkContext.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = r.createContext({
            isFirstLoadAndInReadingList: !0,
            setIsFirstLoadAndInReadingList: function() {
                return null
            }
        })
    },
    "./src/components/post/bookmark/index.ts": function(e, t, n) {
        "use strict";
        var r = n("./src/components/post/bookmark/BookmarkButton.tsx");
        n.d(t, "a", (function() {
            return r.b
        }
        )),
        n.d(t, "b", (function() {
            return r.a
        }
        ))
    },
    "./src/components/post/bookmark/mutations.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return O
        }
        )),
        n.d(t, "a", (function() {
            return w
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , l = n("./node_modules/graphql-tag/src/index.js")
          , c = n.n(l)
          , u = n("./src/schema-types/globalTypes.ts");
        function d() {
            var e = s()(["\n  fragment WithSetReadingList_post on Post {\n    ...ReadingList_post\n  }\n  ", "\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        function m() {
            var e = s()(["\n  mutation UnarchivePostDefault($targetPostId: ID!) {\n    unarchivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ", "\n"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function p() {
            var e = s()(["\n  mutation ArchivePostDefault($targetPostId: ID!) {\n    archivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ", "\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        function f() {
            var e = s()(["\n  mutation UnbookmarkPostDefault($targetPostId: ID!) {\n    unbookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ", "\n"]);
            return f = function() {
                return e
            }
            ,
            e
        }
        function b() {
            var e = s()(["\n  mutation BookmarkPostDefault($targetPostId: ID!) {\n    bookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ", "\n"]);
            return b = function() {
                return e
            }
            ,
            e
        }
        function g() {
            var e = s()(["\n  fragment ReadingList_post on Post {\n    __typename\n    id\n    readingList\n  }\n"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        var h = c()(g())
          , v = c()(b(), h)
          , x = c()(f(), h)
          , E = c()(p(), h)
          , y = c()(m(), h)
          , O = c()(d(), h)
          , w = function(e) {
            var t = e.children
              , n = e.post
              , r = n.id
              , a = function(e) {
                var t = Object(i.d)(v, {
                    variables: {
                        targetPostId: e
                    },
                    optimisticResponse: {
                        bookmarkPost: {
                            __typename: "Post",
                            id: e,
                            readingList: u.r.READING_LIST_QUEUE
                        }
                    }
                });
                return o()(t, 1)[0]
            }(r)
              , s = function(e) {
                var t = Object(i.d)(x, {
                    variables: {
                        targetPostId: e
                    },
                    optimisticResponse: {
                        unbookmarkPost: {
                            __typename: "Post",
                            id: e,
                            readingList: u.r.READING_LIST_NONE
                        }
                    }
                });
                return o()(t, 1)[0]
            }(r)
              , l = function(e) {
                var t = Object(i.d)(E, {
                    variables: {
                        targetPostId: e
                    },
                    optimisticResponse: {
                        archivePost: {
                            __typename: "Post",
                            id: e,
                            readingList: u.r.READING_LIST_ARCHIVE
                        }
                    }
                });
                return o()(t, 1)[0]
            }(r)
              , c = function(e) {
                var t = Object(i.d)(y, {
                    variables: {
                        targetPostId: e
                    },
                    optimisticResponse: {
                        unarchivePost: {
                            __typename: "Post",
                            id: e,
                            readingList: u.r.READING_LIST_QUEUE
                        }
                    }
                });
                return o()(t, 1)[0]
            }(r);
            if (!r)
                return null;
            return t((function(e) {
                return function() {
                    switch (n.readingList) {
                    case u.r.READING_LIST_NONE:
                        if ("READING_LIST_QUEUE" === e)
                            return a();
                        break;
                    case u.r.READING_LIST_QUEUE:
                        if ("READING_LIST_NONE" === e)
                            return s();
                        if ("READING_LIST_ARCHIVE" === e)
                            return l();
                        break;
                    case u.r.READING_LIST_ARCHIVE:
                        if (!e)
                            return r;
                        if ("READING_LIST_NONE" === e)
                            return s();
                        if ("READING_LIST_QUEUE" === e)
                            return c()
                    }
                    throw new Error('Invalid reading list change from "'.concat(n.readingList || "unkown", '" to "').concat(e, '".'))
                }
            }
            ))
        }
    },
    "./src/components/post/footer/CreatorActionOverflowPopover.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return q
        }
        )),
        n.d(t, "b", (function() {
            return W
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./node_modules/react-redux/es/index.js")
          , d = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , m = n("./src/store/actions/navigation.ts");
        function p() {
            var e = o()(["\n  mutation PostAllowResponsesMutation($targetPostId: ID!, $allowResponses: Boolean!) {\n    setPostAllowResponses(targetPostId: $targetPostId, allowResponses: $allowResponses) {\n      id\n      allowResponses\n    }\n  }\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        var f = l()(p())
          , b = Object(u.c)()((function(e) {
            var t = e.children
              , n = e.dispatch
              , r = e.onCompleted
              , o = e.targetPostId;
            return c.createElement(d.a, {
                mutation: f,
                onCompleted: function() {
                    n(Object(m.m)({
                        message: "Responses are now hidden for this post."
                    })),
                    r && r()
                },
                variables: {
                    targetPostId: o,
                    allowResponses: !1
                },
                optimisticResponse: {
                    __typename: "Mutation",
                    setPostAllowResponses: {
                        __typename: "Post",
                        id: o,
                        allowResponses: !1
                    }
                }
            }, (function(e) {
                return t({
                    mutate: e
                })
            }
            ))
        }
        ))
          , g = Object(u.c)()((function(e) {
            var t = e.children
              , n = e.dispatch
              , r = e.onCompleted
              , o = e.targetPostId;
            return c.createElement(d.a, {
                mutation: f,
                onCompleted: function() {
                    n(Object(m.m)({
                        message: "Responses are now shown for this post."
                    })),
                    r && r()
                },
                variables: {
                    targetPostId: o,
                    allowResponses: !0
                },
                optimisticResponse: {
                    __typename: "Mutation",
                    setPostAllowResponses: {
                        __typename: "Post",
                        id: o,
                        allowResponses: !0
                    }
                }
            }, (function(e) {
                return t({
                    mutate: e
                })
            }
            ))
        }
        ))
          , h = n("./src/components/mutations/UserBlockMutation.tsx")
          , v = n("./src/components/mutations/UserReportStoryMutation.tsx")
          , x = n("./src/components/mutations/UserUnblockMutation.tsx")
          , E = n("./src/components/mute/MutePopoverOptions.tsx")
          , y = n("./src/framework/design-system/components/index.ts")
          , O = function(e) {
            var t = e.onConfirm
              , n = e.isVisible
              , r = e.hide;
            return c.createElement(y.h, {
                onConfirm: t,
                isVisible: n,
                hide: r,
                titleText: "Hide responses",
                cancelText: "Cancel",
                confirmText: "Confirm",
                isDestructiveAction: !1
            }, "People will still be able to respond, but the link to see responses will not be displayed at the bottom of your post.")
        }
          , w = n("./src/components/post/footer/actions/CollectionSubmission.tsx")
          , C = n("./src/components/collection/CollectionAvatar.tsx")
          , _ = n("./src/components/post/footer/actions/PubStatusMutations.tsx")
          , j = n("./src/components/post/footer/actions/shared.ts")
          , S = n("./src/components/ui/PopoverMenu.tsx")
          , k = n("./src/framework/design-system/type/index.ts")
          , P = function(e) {
            var t = e.viewer
              , n = e.show
              , r = e.post;
            return t && "PENDING" === r.statusForCollection && (Object(j.d)(r) || Object(j.e)(r, t)) ? c.createElement(S.b, null, c.createElement(y.t, {
                onClick: n
            }, "Manage submission")) : null
        }
          , I = function(e) {
            var t = e.children
              , n = e.isVisible
              , r = e.post
              , o = e.hide
              , a = e.showLoadingIndicator
              , s = Object(_.a)(r)
              , i = Object(_.b)(r)
              , l = Object(u.e)()
              , d = r.pendingCollection;
            return d ? c.createElement(y.w, {
                isVisible: n,
                hide: o,
                popoverRenderFn: function() {
                    return c.createElement(y.b, {
                        padding: "16px",
                        maxWidth: "280px"
                    }, c.createElement(y.b, {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }, c.createElement(y.b, {
                        paddingRight: "8px"
                    }, c.createElement(C.a, {
                        collection: d,
                        size: 40
                    })), c.createElement(k.b, {
                        scale: "S"
                    }, "This draft is submitted to ", d.name, ".")), c.createElement(y.b, {
                        flexDirection: "row",
                        display: "flex",
                        paddingTop: "16px"
                    }, c.createElement(y.b, {
                        paddingRight: "8px"
                    }, c.createElement(y.c, {
                        buttonStyle: "OBVIOUS",
                        onClick: function() {
                            o(),
                            a(),
                            s(r.pendingCollection).then((function() {
                                window.location.reload(!1)
                            }
                            ))
                        }
                    }, "Accept")), c.createElement(y.c, {
                        buttonStyle: "SUBTLE",
                        onClick: function() {
                            i(r.pendingCollection).then((function() {
                                l(Object(m.m)({
                                    message: "Story removed from ".concat(d.name || "publication")
                                }))
                            }
                            )),
                            o()
                        }
                    }, "Don't accept")))
                }
            }, t) : t
        }
          , T = function(e) {
            var t = e.viewer
              , n = e.show
              , r = e.post;
            return t && ("APPROVED" === r.statusForCollection && (Object(j.d)(r) || Object(j.e)(r, t) || Object(j.c)(r, t)) || "PENDING" === r.statusForCollection && Object(j.c)(r, t)) ? c.createElement(S.b, null, c.createElement(y.t, {
                onClick: n
            }, "Remove story from publication")) : null
        }
          , R = function(e) {
            var t = e.children
              , n = e.isVisible
              , r = e.hide
              , o = e.post
              , a = e.viewer
              , s = Object(u.e)()
              , i = Object(_.b)(o)
              , l = o.collection || o.pendingCollection;
            return l ? c.createElement(y.w, {
                isVisible: n,
                hide: r,
                popoverRenderFn: function() {
                    return c.createElement(y.b, {
                        padding: "16px",
                        maxWidth: "280px"
                    }, c.createElement(y.b, {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }, c.createElement(y.b, {
                        paddingRight: "8px"
                    }, c.createElement(C.a, {
                        collection: l,
                        size: 40
                    })), "APPROVED" === o.statusForCollection ? c.createElement(k.b, {
                        scale: "S"
                    }, Object(j.c)(o, a) ? "Your" : "This", " story is published in", " ", l.name, ".") : "PENDING" === o.statusForCollection ? c.createElement(k.b, {
                        scale: "S"
                    }, "Your story is being reviewed by ", l.name, " editors.") : c.createElement(k.b, {
                        scale: "S"
                    }, "This draft is submitted to ", l.name)), c.createElement(y.b, {
                        flexDirection: "row",
                        display: "flex",
                        paddingTop: "16px"
                    }, c.createElement(y.b, {
                        paddingRight: "8px"
                    }, c.createElement(y.c, {
                        buttonStyle: "SUBTLE",
                        onClick: function() {
                            i(l).then((function() {
                                s(Object(m.m)({
                                    message: "Story removed from ".concat(l.name || "publication")
                                }))
                            }
                            ), (function() {
                                s(Object(m.m)({
                                    message: "There was a problem removing the story from ".concat(l.name || "publication"),
                                    toastStyle: "ERROR"
                                }))
                            }
                            )),
                            r()
                        }
                    }, "PENDING" === o.statusForCollection ? "Cancel submission" : "Remove from ".concat(l.name || "")))))
                }
            }, t) : t
        }
          , A = n("./src/components/post/multivote/ClapMutation.tsx")
          , L = n("./src/components/session/useViewer.tsx")
          , M = n("./src/components/susi/SusiClickable.tsx")
          , B = n("./src/components/user/UserBlockConfirmDialog.tsx")
          , D = n("./src/components/user/UserReportStoryDialog.tsx")
          , N = n("./src/framework/source/index.ts")
          , U = n("./src/store/actions/multiVote.ts")
          , F = n("./src/svg/overflow-dots-filled-25px.svg")
          , H = n("./src/util/post/claps.ts");
        function V() {
            var e = o()(["\n  fragment CreatorActionOverflowPopover_post on Post {\n    allowResponses\n    id\n    statusForCollection\n    isPublished\n    clapCount\n    viewerClapCount\n    mediumUrl\n    pendingCollection {\n      id\n      name\n      viewerIsEditor\n      creator {\n        id\n      }\n      avatar {\n        id\n      }\n      domain\n      slug\n    }\n    creator {\n      id\n      isBlocking\n      ...MutePopoverOptions_creator\n    }\n    collection {\n      id\n      viewerIsEditor\n      name\n      creator {\n        id\n      }\n      avatar {\n        id\n      }\n      domain\n      slug\n      ...MutePopoverOptions_collection\n    }\n    ...ClapMutation_post\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return V = function() {
                return e
            }
            ,
            e
        }
        var z = function(e) {
            return {
                fill: e.baseColor.fill.normal,
                ":hover": {
                    fill: e.baseColor.fill.darker
                },
                ":focus": {
                    fill: e.baseColor.fill.darker
                }
            }
        };
        function G() {
            return c.createElement(y.J, null, (function(e) {
                return c.createElement(F.a, {
                    className: e(z)
                })
            }
            ))
        }
        var q = function(e) {
            var t = e.creator
              , n = e.post
              , r = e.collection
              , o = e.showLoadingIndicator
              , a = c.useState(!1)
              , i = s()(a, 2)
              , l = i[0]
              , d = i[1]
              , m = c.useState(!1)
              , p = s()(m, 2)
              , f = p[0]
              , C = p[1]
              , _ = c.useState(!1)
              , j = s()(_, 2)
              , k = j[0]
              , F = j[1]
              , V = Object(u.f)((function(e) {
                return e.multiVote.clapsPerPost
            }
            ))
              , z = Object(u.e)()
              , q = c.useCallback((function(e) {
                return z(Object(U.d)(e))
            }
            ), [z])
              , W = Object(H.a)(V, n)
              , $ = W.clapCount
              , Y = W.viewerClapCount
              , K = Object(L.b)()
              , Q = null == K ? void 0 : K.id
              , X = Object(A.b)();
            if (!n || !t || !K)
                return null;
            var J = n.allowResponses
              , Z = n.id
              , ee = (r || {}).viewerIsEditor;
            return c.createElement(y.I, null, (function(e) {
                var a = e.isVisible
                  , s = e.toggle
                  , i = e.hide;
                return c.createElement(y.I, null, (function(e) {
                    var u = e.isVisible
                      , m = e.show
                      , p = e.hide;
                    return c.createElement(y.I, null, (function(e) {
                        var _ = e.isVisible
                          , j = e.show
                          , A = e.hide;
                        return c.createElement(y.I, null, (function(e) {
                            var L = e.isVisible
                              , U = e.show
                              , H = e.hide;
                            return c.createElement(h.a, {
                                targetUserId: null == t ? void 0 : t.id,
                                viewerId: K.id,
                                onCompleted: p
                            }, (function(e) {
                                var h = e.mutate;
                                return c.createElement(x.a, {
                                    targetUserId: null == t ? void 0 : t.id,
                                    viewerId: K.id
                                }, (function(e) {
                                    var x = e.mutate;
                                    return c.createElement(v.a, {
                                        targetAuthorId: null == t ? void 0 : t.id,
                                        targetPostId: n.id,
                                        isBlocking: null == t ? void 0 : t.isBlocking
                                    }, (function(e) {
                                        var v = e.mutate;
                                        return c.createElement(g, {
                                            targetPostId: Z
                                        }, (function(e) {
                                            var g = e.mutate;
                                            return c.createElement(b, {
                                                targetPostId: Z
                                            }, (function(e) {
                                                var b = e.mutate;
                                                return c.createElement(c.Fragment, null, c.createElement(y.w, {
                                                    isVisible: a,
                                                    hide: i,
                                                    popoverRenderFn: function() {
                                                        return c.createElement(S.a, null, c.createElement(c.Fragment, null, c.createElement(E.a, {
                                                            hidePopover: i,
                                                            creator: t,
                                                            collection: r,
                                                            postId: n.id
                                                        }), c.createElement(w.b, {
                                                            post: n,
                                                            show: function() {
                                                                C(!0),
                                                                i()
                                                            }
                                                        }), c.createElement(T, {
                                                            viewer: K,
                                                            post: n,
                                                            show: function() {
                                                                F(!0),
                                                                i()
                                                            }
                                                        }), c.createElement(P, {
                                                            viewer: K,
                                                            post: n,
                                                            show: function() {
                                                                d(!0),
                                                                i()
                                                            }
                                                        })), Q === t.id || ee ? c.createElement(c.Fragment, null, c.createElement(S.b, null, c.createElement(y.t, {
                                                            onClick: function() {
                                                                J ? U() : g(),
                                                                i()
                                                            }
                                                        }, J ? "Hide responses" : "Show responses")), c.createElement(S.c, null)) : null, Q && $ && Y && Y > 0 ? c.createElement(S.b, null, c.createElement(y.t, {
                                                            onClick: function() {
                                                                X(n, (null == K ? void 0 : K.id) || "", -Y),
                                                                q({
                                                                    postId: Z,
                                                                    clapCount: $ - Y,
                                                                    viewerClapCount: 0,
                                                                    viewerHasClappedSinceFetch: !0
                                                                }),
                                                                i()
                                                            }
                                                        }, "Undo applause for this post")) : null, c.createElement(S.b, null, Q ? c.createElement(y.t, {
                                                            onClick: function() {
                                                                j(),
                                                                i()
                                                            }
                                                        }, "Report this story") : c.createElement(N.b, {
                                                            source: {
                                                                susiEntry: "report_footer"
                                                            }
                                                        }, c.createElement(M.a, {
                                                            operation: "register",
                                                            post: n
                                                        }, "Report this story"))), Q ? c.createElement(S.b, null, c.createElement(y.t, {
                                                            onClick: function() {
                                                                t.isBlocking ? x() : m(),
                                                                i()
                                                            }
                                                        }, t.isBlocking ? "Unblock this author" : "Block this author")) : null)
                                                    }
                                                }, c.createElement(w.a, {
                                                    post: n,
                                                    isVisible: f,
                                                    hide: function() {
                                                        C(!1)
                                                    },
                                                    showLoadingIndicator: o
                                                }, c.createElement(R, {
                                                    viewer: K,
                                                    post: n,
                                                    isVisible: k,
                                                    hide: function() {
                                                        F(!1)
                                                    }
                                                }, c.createElement(I, {
                                                    post: n,
                                                    isVisible: l,
                                                    hide: function() {
                                                        d(!1)
                                                    },
                                                    showLoadingIndicator: o
                                                }, c.createElement(y.b, {
                                                    flexGrow: "0"
                                                }, c.createElement(y.t, {
                                                    onClick: s
                                                }, c.createElement(G, null))))))), c.createElement(O, {
                                                    onConfirm: b,
                                                    isVisible: L,
                                                    hide: H
                                                }), c.createElement(B.a, {
                                                    onConfirm: h,
                                                    isVisible: u,
                                                    hide: p
                                                }), c.createElement(D.a, {
                                                    onSubmit: v,
                                                    isVisible: _,
                                                    hide: A
                                                }))
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ))
        }
          , W = l()(V(), E.c, E.b, A.a)
    },
    "./src/components/post/footer/PostFooter.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return Qt
        }
        )),
        n.d(t, "b", (function() {
            return Xt
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/WatchBounds.tsx")
          , u = n("./src/components/newsletter-v3/NewsletterV3Promo.tsx")
          , d = n("./src/components/post/EmbeddedPost.tsx")
          , m = n("./src/components/post/PostRecircItemV2.tsx")
          , p = n("./src/framework/design-system/components/index.ts")
          , f = n("./src/framework/design-system/type/Heading.tsx")
          , b = n("./src/framework/source/index.ts")
          , g = function(e) {
            var t = e.posts
              , n = e.sourceName;
            return t.length ? i.createElement(p.b, {
                marginTop: "24px",
                marginBottom: "40px"
            }, i.createElement(p.b, {
                borderBottom: "BASE_LIGHTER",
                marginTop: "24px",
                marginBottom: "24px",
                paddingBottom: "16px",
                sm: {
                    marginTop: "16px",
                    paddingBottom: "12px"
                }
            }, i.createElement(f.a, {
                scale: {
                    xs: "S",
                    sm: "S",
                    md: "M",
                    lg: "M",
                    xl: "M"
                }
            }, "More From Medium")), i.createElement(p.j, {
                alignItems: "flex-start"
            }, t.map((function(e, t) {
                return i.createElement(p.k, {
                    key: "post-internal-link-".concat(t),
                    size: {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        lg: 3,
                        xl: 3
                    }
                }, i.createElement(p.b, {
                    paddingBottom: "24px",
                    maxWidth: "500px"
                }, i.createElement(b.b, {
                    source: {
                        name: n,
                        index: t
                    }
                }, i.createElement(m.b, {
                    post: e
                }))))
            }
            )))) : null
        };
        function h() {
            var e = o()(["\n  fragment PostInternalLinks_post on Post {\n    id\n    internalLinks(paging: {limit: 8}) @include(if: $includePostInternalLinks) {\n      items {\n        ... on Post {\n          ...PostRecircItemV2_post\n        }\n      }\n    }\n  }\n  ", "\n"]);
            return h = function() {
                return e
            }
            ,
            e
        }
        var v = s()(h(), m.a)
          , x = function(e) {
            var t, n = e.post, r = e.sourceName, o = (null == n || null === (t = n.internalLinks) || void 0 === t ? void 0 : t.items) || [];
            return o && 0 !== o.length ? i.createElement(g, {
                posts: o,
                sourceName: r
            }) : null
        }
          , E = n("./src/components/broadcast-banner/useCdcMessaging.tsx")
          , y = n("./src/framework/style/index.ts")
          , O = i.createContext(!1)
          , w = function(e) {
            var t = Object(y.useCx)();
            return i.createElement("div", {
                className: t({
                    padding: {
                        xs: "16px 22px",
                        sm: "16px 22px",
                        md: "18px 24px",
                        lg: "24px 30px",
                        xl: "32px 40px"
                    },
                    marginBottom: "25px",
                    backgroundColor: "#f4f4f4",
                    borderLeft: "4px solid rgba(2, 184, 117, 1)"
                })
            }, e.children)
        }
          , C = n("./src/handlers/EmbeddedPostHandler.tsx")
          , _ = (Object(l.c)((function(e) {
            return {
                embeddedPostIds: e.config.embeddedPostIds
            }
        }
        ))((function(e) {
            var t = e.embeddedPostIds
              , n = null == t ? void 0 : t.coronavirus;
            return n ? i.createElement(C.a, {
                postId: n
            }, (function(e) {
                return e ? i.createElement(O.Provider, {
                    value: !0
                }, i.createElement(w, null, e)) : null
            }
            )) : null
        }
        )),
        n("./node_modules/@babel/runtime/helpers/extends.js"))
          , j = n.n(_)
          , S = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , k = n.n(S)
          , P = n("./src/components/collection/package/TruncatedPostCard.tsx")
          , I = n("./src/components/collection/package/collectionIdToNameMaps.ts")
          , T = n("./src/components/collection/package/packageTheme.ts")
          , R = n("./src/components/collection/package/themes/vanilla.ts")
          , A = n("./src/components/collection/theming/customStyleSheet.ts")
          , L = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , M = n("./src/components/post-listing/PostListingItemRecirc.tsx")
          , B = n("./src/framework/reporter/index.ts");
        function D(e) {
            var t = e.posts
              , n = e.sourceName
              , r = i.useRef(null)
              , o = Object(B.c)();
            return i.useEffect((function() {
                o.event("experiment.eligible", {
                    experimentId: "57b820b82d68"
                })
            }
            ), []),
            0 === t.length ? null : i.createElement(p.b, {
                margin: "32px 0",
                md: {
                    marginBottom: "0px"
                },
                ref: r
            }, i.createElement(p.b, {
                marginBottom: "32px",
                borderBottom: "BASE_LIGHTER",
                paddingBottom: "8px"
            }, i.createElement(f.a, {
                scale: "S"
            }, "More From Medium")), i.createElement(p.j, {
                alignItems: "flex-start"
            }, t.map((function(e, t) {
                return i.createElement(p.k, {
                    key: "recirc-".concat(t),
                    size: {
                        xs: 12,
                        sm: 12,
                        md: 12,
                        lg: 4,
                        xl: 4
                    }
                }, i.createElement(b.b, {
                    source: {
                        name: n,
                        index: t
                    }
                }, i.createElement(M.b, {
                    post: e,
                    ref: r
                })))
            }
            ))))
        }
        function N(e, t) {
            var n = Object(L.c)(e, t)
              , r = k()(n, 2)
              , o = r[0]
              , a = r[1];
            return [i.useCallback((function(e) {
                !a.called && e.isIntersecting && o()
            }
            ), [a]), a]
        }
        var U = n("./src/components/publisher/CardByline.tsx")
          , F = n("./src/framework/track/index.ts");
        function H() {
            var e = o()(["\n  fragment PostNextFiveStories_post on Post {\n    firstPublishedAt\n    pinnedAt\n  }\n"]);
            return H = function() {
                return e
            }
            ,
            e
        }
        function V() {
            var e = o()(["\n  query PostNextFiveStoriesUser($id: ID!, $from: String, $limit: PaginationLimit = 5) {\n    publisher: user(id: $id) {\n      ...PostNextFiveStories_Publisher\n    }\n  }\n  ", "\n"]);
            return V = function() {
                return e
            }
            ,
            e
        }
        function z() {
            var e = o()(["\n  query PostNextFiveStoriesCollection($id: ID!, $from: String, $limit: PaginationLimit = 5) {\n    publisher: collection(id: $id) {\n      ...PostNextFiveStories_Publisher\n    }\n  }\n  ", "\n"]);
            return z = function() {
                return e
            }
            ,
            e
        }
        function G() {
            var e = o()(["\n  fragment PostNextFiveStories_Publisher on Publisher {\n    __typename\n    id\n    homepagePostsConnection(paging: {limit: $limit, from: $from}) {\n      posts {\n        ...TruncatedPostCard_post\n      }\n    }\n    ...CardByline_publisher\n    ...getHasCustomColorPalette_publisher\n    ... on Collection {\n      ...PackageTheme_collection\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return G = function() {
                return e
            }
            ,
            e
        }
        var q = s()(G(), A.n, T.b, P.b, U.c)
          , W = s()(z(), q)
          , $ = s()(V(), q)
          , Y = i.forwardRef((function(e, t) {
            var n, r, o, a = e.post, s = e.rootMargin, c = Object(l.f)((function(e) {
                return e.config.authDomain
            }
            )), u = (null === (n = a.collection) || void 0 === n ? void 0 : n.id) || "", d = null === (r = a.creator) || void 0 === r ? void 0 : r.id, m = u || d;
            if (!m)
                return null;
            var f = function(e) {
                var t = e.firstPublishedAt
                  , n = e.pinnedAt;
                return e.collection ? n ? "P".concat(n) : "L".concat(t) : "".concat(t)
            }(a)
              , b = N(u ? W : $, {
                variables: {
                    id: m,
                    from: f
                }
            })
              , g = k()(b, 2)
              , h = g[0]
              , v = g[1]
              , x = v.called
              , E = v.loading
              , O = v.error
              , w = v.data
              , C = (w = void 0 === w ? {
                publisher: void 0
            } : w).publisher;
            if (Object(F.f)({
                onIntersect: h,
                target: t,
                disconnect: function() {
                    return x
                },
                rootMargin: s
            }, [x]),
            !x || E || O || !C)
                return null;
            var _ = Object(y.useTheme)()
              , S = null == C || null === (o = C.homepagePostsConnection) || void 0 === o ? void 0 : o.posts;
            if (!C || !S)
                return null;
            var L = "Collection" === C.__typename
              , M = L ? Object(I.b)(c, C.id) : ""
              , B = "Collection" === C.__typename ? Object(T.d)(M, C) : Object(R.a)({})
              , D = !!L && Object(A.l)(C);
            return i.createElement(p.F, {
                theme: Object(T.c)(_)
            }, i.createElement(T.a.Provider, {
                value: {
                    name: M,
                    theme: B
                }
            }, S.map((function(e, t) {
                var n = {
                    publisher: C,
                    post: e,
                    hideAuthor: !L,
                    isFirst: 0 === t,
                    includeBottomDivider: t === S.length - 1,
                    withPackageThemeColors: !D,
                    index: t
                };
                return i.createElement(P.a, j()({
                    key: e.id
                }, n))
            }
            ))))
        }
        ))
          , K = s()(H());
        function Q() {
            var e = o()(["\n  query PostRecircQuery(\n    $postId: ID!\n    $includePostRecirc: Boolean!\n    $postRecircPaging: PaginationLimit!\n  ) {\n    post(id: $postId) {\n      id\n      ...PostRecirc_post\n    }\n  }\n  ", "\n"]);
            return Q = function() {
                return e
            }
            ,
            e
        }
        function X() {
            var e = o()(["\n  fragment PostRecirc_post on Post {\n    recirc(paging: {limit: $postRecircPaging}) @include(if: $includePostRecirc) {\n      items {\n        __typename\n        ... on Post {\n          ...Recirc_post\n        }\n        ... on SuggestedPost {\n          post {\n            __typename\n            ...Recirc_post\n          }\n          postSuggestionReasons {\n            reason\n            users {\n              name\n            }\n            topics {\n              name\n            }\n            collections {\n              name\n            }\n            tags {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n  ", "\n"]);
            return X = function() {
                return e
            }
            ,
            e
        }
        function J() {
            var e = o()(["\n  fragment Recirc_post on Post {\n    ...PostListingItemRecirc_post\n  }\n  ", "\n"]);
            return J = function() {
                return e
            }
            ,
            e
        }
        var Z = s()(J(), M.a)
          , ee = s()(X(), Z)
          , te = s()(Q(), ee)
          , ne = i.forwardRef((function(e, t) {
            var n, r, o, a = e.postId, s = e.rootMargin, l = e.recircOptions, c = (null == l || null === (n = l.v1) || void 0 === n ? void 0 : n.limit) || 3, u = N(te, {
                variables: {
                    postId: a,
                    includePostRecirc: !0,
                    postRecircPaging: c
                },
                ssr: !1
            }), d = k()(u, 2), m = d[0], p = d[1], f = p.called, b = p.loading, g = p.error, h = p.data;
            Object(F.f)({
                onIntersect: m,
                target: t,
                disconnect: function() {
                    return f
                },
                rootMargin: s
            }, [f]);
            var v = null == h || null === (r = h.post) || void 0 === r || null === (o = r.recirc) || void 0 === o ? void 0 : o.items;
            return !f || b || g || !v ? null : i.createElement(D, {
                posts: v,
                sourceName: "post_recirc"
            })
        }
        ))
          , re = i.forwardRef((function(e, t) {
            return i.createElement(ne, j()({}, e, {
                ref: t
            }))
        }
        ))
          , oe = Object(l.c)((function(e) {
            return {
                recircOptions: e.config.recircOptions
            }
        }
        ), null, null, {
            forwardRef: !0
        })(re)
          , ae = n("./src/styles/font.ts")
          , se = n("./src/util/routes.ts");
        function ie() {
            var e = o()(["\n  fragment TagList_collection on Collection {\n    id\n    slug\n    domain\n  }\n"]);
            return ie = function() {
                return e
            }
            ,
            e
        }
        function le() {
            var e = o()(["\n  fragment TagList_tags on Tag {\n    id\n    displayTitle\n  }\n"]);
            return le = function() {
                return e
            }
            ,
            e
        }
        var ce = {
            padding: 0,
            margin: 0
        }
          , ue = {
            display: "inline-block",
            listStyleType: "none",
            marginRight: "8px",
            marginBottom: "8px"
        }
          , de = function(e) {
            return {
                borderRadius: "3px",
                padding: "5px 10px",
                textDecoration: "none",
                color: e.baseColor.text.lighter,
                display: "block",
                background: e.baseColor.background.normal,
                lineHeight: "22px"
            }
        };
        function me(e) {
            var t = e.tags
              , n = e.collection
              , r = Object(y.useCx)()
              , o = Object(l.f)((function(e) {
                return {
                    authDomain: e.config.authDomain,
                    isCustomDomain: e.client.isCustomDomain
                }
            }
            ))
              , a = o.authDomain
              , s = o.isCustomDomain;
            return t ? i.createElement("ul", {
                className: r(ce)
            }, t.map((function(e) {
                if (!e.id)
                    return null;
                var t = n && !n.domain ? Object(se.H)(n, e.id, a) : Object(se.bc)(e.id, s);
                return i.createElement("li", {
                    key: e.id,
                    className: r(ue)
                }, i.createElement("a", {
                    href: t,
                    className: r([de, Object(ae.w)({
                        fontSize: 15
                    })])
                }, e.displayTitle))
            }
            ))) : null
        }
        var pe = s()(le())
          , fe = s()(ie())
          , be = n("./src/components/post/bookmark/index.ts")
          , ge = n("./src/components/post/bookmark/PostPageBookmarkButton.tsx")
          , he = n("./src/components/post/footer/CreatorActionOverflowPopover.tsx")
          , ve = n("./src/components/post/footer/PostFooterSocialPopover.tsx")
          , xe = n("./src/components/post/footer/actions/CollectionSubmission.tsx")
          , Ee = n("./src/components/post/footer/actions/shared.ts")
          , ye = n("./src/components/post/multivote/MultiVote.tsx")
          , Oe = n("./src/components/responses/MobileHideSpan.tsx")
          , we = n("./src/components/responses/ResponsesIconButton.tsx")
          , Ce = n("./src/components/session/WithFlag.tsx")
          , _e = n("./src/components/social/ShareButtons.tsx")
          , je = n("./src/components/susi/SusiClickable.tsx")
          , Se = n("./src/framework/source/SourceContext.tsx")
          , ke = n("./src/util/hooks/useIsEligibleToViewNewResponses.tsx");
        function Pe() {
            var e = o()(["\n  fragment PostFooterActionsBar_post on Post {\n    id\n    visibility\n    isPublished\n    allowResponses\n    viewerClapCount\n    content(postMeteringOptions: $postMeteringOptions) {\n      isLockedPreviewOnly\n    }\n    creator {\n      id\n      isBlocking\n    }\n    collection {\n      id\n      viewerIsEditor\n    }\n    ...BookmarkButton_post\n    ...MultiVote_post\n    ...SusiClickable_post\n    ...ManageSubmission_post\n    ...CollectionSubmission_post\n    ...ShareButtons_post\n    ...ResponsesIconButton_post\n    ...CreatorActionOverflowPopover_post\n    ...PostFooterSocialPopover_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return Pe = function() {
                return e
            }
            ,
            e
        }
        var Ie = function(e) {
            var t, n = e.post, r = e.setIsResponsesSidebarVisible, o = e.useSocialPopover, a = e.shouldHideResponsesText, s = void 0 !== a && a, l = e.shouldHideClapsText, c = void 0 !== l && l, u = n.isPublished, d = n.content, m = n.creator, f = n.collection, b = (d || {}).isLockedPreviewOnly, g = Object(ke.a)(), h = i.createElement(Se.b, {
                source: {
                    name: "post_actions_footer",
                    susiEntry: "clap_footer"
                }
            }, i.createElement(p.b, {
                display: "flex",
                flexDirection: "row"
            }, i.createElement(p.b, {
                maxWidth: "155px"
            }, g ? i.createElement(i.Fragment, null, i.createElement(Oe.b, null, i.createElement(ye.a, {
                post: n,
                buttonStyle: "SUBTLE",
                hasDialog: !0,
                shouldShowResponsiveLabelText: !0,
                shouldHideClapsText: c
            })), i.createElement(Oe.a, null, i.createElement(ye.a, {
                post: n,
                buttonStyle: "SUBTLE_FOR_DESKTOP",
                hasDialog: !0,
                shouldHideClapsText: c
            }))) : i.createElement(ye.a, {
                post: n,
                buttonStyle: "OBVIOUS",
                hasDialog: !0,
                shouldHideClapsText: c
            })), i.createElement(p.b, {
                xs: {
                    width: "15px"
                },
                sm: {
                    width: "15px"
                },
                md: {
                    width: "15px"
                },
                lg: {
                    width: "25px"
                },
                xl: {
                    width: "25px"
                }
            }), i.createElement(Se.b, {
                source: {
                    name: "follow_footer",
                    susiEntry: "follow_footer"
                }
            }, i.createElement(we.a, {
                responsesCount: null === (t = n.postResponses) || void 0 === t ? void 0 : t.count,
                location: "footer",
                setIsResponsesSidebarVisible: r,
                allowResponses: n.allowResponses,
                postId: n.id,
                isLimitedState: n.isLimitedState,
                shouldHideResponsesText: s
            })))), v = i.createElement(Ce.a, {
                name: "enable_disregard_trunc_state_for_footer"
            }, (function(e) {
                return (e || !b) && h
            }
            )), x = {
                post: n,
                source: {
                    name: "post_actions_footer"
                }
            };
            return i.createElement(p.I, null, (function(e) {
                var t = e.isVisible
                  , r = e.show;
                return i.createElement(i.Fragment, null, t && i.createElement(p.u, null), i.createElement(p.b, {
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: g ? "25px" : "15px",
                    print: {
                        display: "none"
                    }
                }, v, i.createElement(p.b, {
                    display: "flex",
                    alignItems: "center"
                }, u && i.createElement(i.Fragment, null, o ? i.createElement(p.b, {
                    paddingRight: "6px"
                }, i.createElement(ve.a, x)) : i.createElement(_e.a, x), i.createElement(p.b, {
                    flexGrow: "0",
                    paddingRight: "8px"
                }, i.createElement(Se.b, {
                    source: {
                        name: "post_actions_footer",
                        susiEntry: "bookmark_footer"
                    }
                }, i.createElement(ge.a, {
                    post: n
                })))), m && i.createElement(he.a, {
                    creator: m,
                    post: n,
                    collection: f,
                    showLoadingIndicator: r
                }))))
            }
            ))
        }
          , Te = s()(Pe(), be.b, ye.b, je.d, Ee.b, xe.c, _e.b, we.b, he.b, ve.b)
          , Re = n("./src/components/collection/CollectionAvatar.tsx")
          , Ae = n("./src/components/collection/CollectionFollowButton.tsx")
          , Le = n("./src/components/session/WithViewer.tsx")
          , Me = n("./src/components/session/useFlag.tsx")
          , Be = n("./src/components/user/UserAvatar.tsx")
          , De = n("./src/components/user/UserFollowButton.tsx")
          , Ne = n("./src/components/user/UserUnblockButton.tsx")
          , Ue = n("./src/framework/design-system/type/index.ts");
        function Fe() {
            var e = o()(["\n  fragment PostFooterByline_post on Post {\n    id\n    creator {\n      name\n      username\n      bio\n      id\n      isBlocking\n      ...UserAvatar_user\n      ...UserFollowButton_user\n    }\n    collection {\n      name\n      description\n      ...CollectionAvatar_collection\n      ...CollectionFollowButton_collection\n      ...collectionUrl_collection\n    }\n    ...CollectionFollowButton_post\n    ...UserFollowButton_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return Fe = function() {
                return e
            }
            ,
            e
        }
        var He = Be.c.XL
          , Ve = Be.c.XL + 22
          , ze = function(e) {
            var t = e.creator
              , n = e.post
              , r = t.name
              , o = t.username
              , a = t.bio
              , s = void 0 === a ? "" : a
              , l = t.id
              , c = t.isBlocking;
            return r && o ? i.createElement(Le.b, null, (function(e) {
                return i.createElement(p.b, {
                    marginBottom: "32px",
                    position: "relative",
                    minHeight: "".concat(He, "px")
                }, i.createElement(p.b, {
                    tag: "span",
                    sm: {
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "24px"
                    }
                }, i.createElement(p.b, {
                    position: "absolute",
                    sm: {
                        position: "relative",
                        width: "".concat(Ve, "px")
                    }
                }, i.createElement(Be.d, {
                    user: t,
                    scale: "XL",
                    link: !0
                })), i.createElement(p.b, {
                    tag: "span"
                }, i.createElement(p.b, {
                    paddingLeft: "".concat(Ve, "px"),
                    sm: {
                        paddingLeft: "0"
                    }
                }, i.createElement(Ue.e, null, "Written by")), i.createElement(p.b, {
                    paddingLeft: "".concat(Ve, "px"),
                    display: "flex",
                    marginBottom: "6px",
                    sm: {
                        paddingLeft: "0"
                    }
                }, i.createElement(p.b, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%"
                }, i.createElement(Ue.c, {
                    scale: "M"
                }, i.createElement(p.t, {
                    href: Object(se.sc)(o)
                }, r || o)), i.createElement(p.b, {
                    sm: {
                        display: "none"
                    }
                }, e && c ? i.createElement(Ne.a, {
                    targetUserId: l
                }) : i.createElement(De.c, {
                    buttonSize: "SMALL",
                    post: n,
                    user: t
                })))))), i.createElement(p.b, {
                    maxWidth: "555px",
                    paddingLeft: "".concat(Ve, "px"),
                    sm: {
                        display: "block",
                        paddingLeft: "0"
                    }
                }, i.createElement(p.b, {
                    maxWidth: "450px"
                }, i.createElement(Ue.b, {
                    scale: "L"
                }, s)), i.createElement(p.b, {
                    display: "none",
                    sm: {
                        display: "block",
                        marginTop: "24px"
                    }
                }, i.createElement(De.c, {
                    buttonSize: "SMALL",
                    post: n,
                    user: t
                }))))
            }
            )) : null
        }
          , Ge = function(e) {
            var t = e.collection
              , n = e.currentLocation
              , r = e.post
              , o = t.name
              , a = t.description
              , s = void 0 === a ? "" : a;
            return i.createElement(p.b, {
                marginBottom: "32px",
                position: "relative",
                minHeight: "".concat(He, "px")
            }, i.createElement(p.b, {
                tag: "span",
                sm: {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "24px"
                }
            }, i.createElement(p.b, {
                position: "absolute",
                sm: {
                    position: "relative",
                    width: "".concat(Ve, "px")
                }
            }, i.createElement(Re.a, {
                collection: t,
                size: He,
                link: !0
            })), i.createElement(p.b, {
                tag: "span"
            }, i.createElement(p.b, {
                paddingLeft: "".concat(Ve, "px"),
                display: "flex",
                marginBottom: "6px",
                sm: {
                    paddingLeft: "0"
                }
            }, i.createElement(p.b, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
            }, i.createElement(Ue.c, {
                scale: "M"
            }, i.createElement(p.t, {
                href: Object(se.I)(t, n)
            }, o)), i.createElement(p.b, {
                sm: {
                    display: "none"
                }
            }, i.createElement(Ae.a, {
                collection: t,
                post: r
            })))))), i.createElement(p.b, {
                maxWidth: "550px",
                paddingLeft: "".concat(Ve, "px"),
                sm: {
                    display: "block",
                    paddingLeft: "0"
                }
            }, i.createElement(p.b, {
                maxWidth: "450px"
            }, i.createElement(Ue.b, {
                scale: "L"
            }, s)), i.createElement(p.b, {
                display: "none",
                sm: {
                    display: "block",
                    marginTop: "24px"
                }
            }, i.createElement(Ae.a, {
                collection: t,
                post: r
            }))))
        }
          , qe = function(e) {
            var t = e.collection
              , n = e.creator
              , r = e.post
              , o = e.currentLocation;
            return i.createElement(p.b, {
                paddingTop: "24px"
            }, n.name && n.username && i.createElement(p.b, {
                display: "flex",
                flexDirection: "row"
            }, i.createElement(p.b, {
                marginTop: "5px"
            }, i.createElement(Be.d, {
                user: n,
                scale: "S",
                link: !0
            })), i.createElement(p.b, {
                marginLeft: "12px"
            }, i.createElement(Ue.e, {
                scale: "S"
            }, "Written by"), i.createElement(p.b, {
                display: "flex",
                flexDirection: "row"
            }, i.createElement(Ue.c, {
                scale: "XS"
            }, i.createElement(p.t, {
                href: Object(se.sc)(n.username)
            }, n.name || n.username)), i.createElement(p.b, {
                marginLeft: "12px"
            }, i.createElement(De.c, {
                buttonSize: "COMPACT",
                post: r,
                user: n
            }))), i.createElement(p.b, {
                paddingTop: "8px"
            }, i.createElement(Ue.b, {
                scale: "M"
            }, n.bio)))), t && i.createElement(p.b, {
                paddingTop: "24px"
            }, i.createElement(p.b, {
                display: "flex",
                flexDirection: "row"
            }, i.createElement(Re.a, {
                collection: t,
                size: 40,
                link: !0
            }), i.createElement(p.b, {
                marginLeft: "12px"
            }, i.createElement(p.b, {
                display: "flex",
                flexDirection: "row"
            }, i.createElement(Ue.c, {
                scale: "XS"
            }, i.createElement(p.t, {
                href: Object(se.I)(t, o)
            }, t.name)), i.createElement(p.b, {
                marginLeft: "12px"
            }, i.createElement(Ae.a, {
                collection: t,
                post: r,
                buttonSize: "COMPACT"
            }))), i.createElement(p.b, {
                paddingTop: "8px"
            }, i.createElement(Ue.b, {
                scale: "M"
            }, t.description || ""))))))
        };
        var We = s()(Fe(), Re.b, Ae.b, Ae.c, se.J, Be.b, De.a, De.b)
          , $e = Object(l.c)((function(e) {
            return {
                currentLocation: e.navigation.currentLocation
            }
        }
        ))((function(e) {
            var t = e.currentLocation
              , n = e.post
              , r = n.creator
              , o = n.collection
              , a = !!Object(Me.a)("enable_end_of_post_cleanup");
            return r ? i.createElement(p.b, {
                marginTop: "25px",
                marginBottom: "25px",
                paddingTop: "32px",
                borderTop: "BASE_LIGHTER",
                print: {
                    display: "none"
                },
                sm: {
                    paddingTop: a ? "0" : "32px"
                }
            }, i.createElement(p.b, {
                sm: {
                    display: a ? "none" : "block"
                }
            }, i.createElement(ze, {
                creator: r,
                post: n
            }), o && i.createElement(i.Fragment, null, i.createElement(p.b, {
                paddingTop: "32px"
            }), i.createElement(Ge, {
                collection: o,
                currentLocation: t,
                post: n
            }))), a && i.createElement(p.b, {
                display: "none",
                sm: {
                    display: "block"
                }
            }, i.createElement(qe, {
                post: n,
                creator: r,
                collection: o,
                currentLocation: t
            }))) : null
        }
        ))
          , Ye = n("./src/components/publisher/auroraHooks.ts")
          , Ke = n("./src/components/session/useViewer.tsx");
        function Qe() {
            var e = o()(["\n  fragment PostFooterBylineAurora_post on Post {\n    id\n    creator {\n      name\n      username\n      bio\n      id\n      isBlocking\n      ...UserFollowButton_user\n      ...auroraHooks_publisher\n    }\n    collection {\n      name\n      description\n      ...CollectionFollowButton_collection\n      ...collectionUrl_collection\n    }\n    ...UserFollowButton_post\n    ...CollectionFollowButton_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return Qe = function() {
                return e
            }
            ,
            e
        }
        var Xe = function(e) {
            var t = e.post
              , n = t.creator
              , r = t.collection
              , o = Object(l.f)((function(e) {
                return e.navigation.currentLocation
            }
            ))
              , a = Object(Ke.b)()
              , s = {
                xs: "XS",
                sm: "XS",
                md: "S",
                lg: "S",
                xl: "S"
            }
              , c = {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }
              , u = Object(Ye.c)(t.creator)
              , d = r ? Object(se.I)(r, o) : Object(se.sc)((null == n ? void 0 : n.username) || "")
              , m = "More from ".concat(r ? r.name : null == n ? void 0 : n.name)
              , f = r ? r.description : null == n ? void 0 : n.bio
              , b = null;
            n && (b = a && n.isBlocking ? i.createElement(Ne.a, {
                buttonSize: "SMALL",
                targetUserId: n.id
            }) : i.createElement(De.c, {
                buttonSize: "SMALL",
                post: t,
                user: n
            }));
            var g = r ? i.createElement(Ae.a, {
                buttonSize: "SMALL",
                collection: r,
                post: t
            }) : b;
            return i.createElement(p.b, {
                print: {
                    display: "none"
                }
            }, (null == n ? void 0 : n.name) && (null == n ? void 0 : n.username) && !u && i.createElement(p.b, {
                paddingBottom: "30px"
            }, i.createElement(p.v, {
                size: "inset"
            }, i.createElement(p.b, j()({}, c, {
                borderTop: "BASE_LIGHTER",
                paddingTop: "33px"
            }), i.createElement(p.b, null, i.createElement(Ue.e, {
                scale: "S"
            }, "Written by"), i.createElement(Ue.c, {
                scale: s,
                clamp: 1
            }, i.createElement(p.t, {
                href: Object(se.sc)(n.username)
            }, n.name || n.username))), b), n.bio && i.createElement(p.b, {
                paddingTop: "6px",
                paddingRight: "168px"
            }, i.createElement(Ue.b, {
                scale: "M"
            }, n.bio)))), (r || u) && i.createElement(p.b, {
                paddingTop: "32px",
                paddingBottom: "4px",
                backgroundColor: "BASE_LIGHT"
            }, i.createElement(p.v, {
                size: "inset"
            }, i.createElement(p.b, c, i.createElement(Ue.c, {
                scale: s,
                clamp: 1
            }, i.createElement(p.t, {
                href: d
            }, m)), g), f && i.createElement(p.b, {
                paddingTop: "5px",
                paddingRight: "168px"
            }, i.createElement(Ue.b, {
                scale: "M"
            }, f)))))
        }
          , Je = s()(Qe(), Ae.b, Ae.c, se.J, De.a, De.b, Ye.a);
        function Ze() {
            var e = o()(["\n  fragment PostFooterCollectionButton_collection on Collection {\n    id\n    name\n    ...collectionUrl_collection\n  }\n  ", "\n"]);
            return Ze = function() {
                return e
            }
            ,
            e
        }
        var et = function(e) {
            var t = e.collection
              , n = Object(l.f)((function(e) {
                return {
                    currentLocation: e.navigation.currentLocation
                }
            }
            ), l.d).currentLocation;
            return i.createElement(i.Fragment, null, (null == t ? void 0 : t.name) && i.createElement(p.b, {
                maxWidth: "100%",
                textAlign: "center"
            }, i.createElement(p.c, {
                buttonStyle: "STRONG",
                href: Object(se.I)(t, n)
            }, "Read more from ", t.name)))
        }
          , tt = s()(Ze(), se.J);
        function nt() {
            var e = o()(["\n  fragment PostFooterResponsesButton_post on Post {\n    id\n    responsesCount\n    isLimitedState\n  }\n"]);
            return nt = function() {
                return e
            }
            ,
            e
        }
        var rt = s()(nt())
          , ot = Object(l.c)((function(e) {
            return {
                authDomain: e.config.authDomain
            }
        }
        ))((function(e) {
            var t = e.authDomain
              , n = e.post
              , r = e.setIsResponsesSidebarVisible
              , o = Object(y.useCx)()
              , a = Object(B.c)()
              , s = Object(b.d)()
              , l = n.id
              , c = n.responsesCount
              , u = n.isLimitedState
              , d = c && c > 0;
            var m = Object(ke.a)()
              , f = m ? "See responses" : "See responses (".concat(c || 0, ")")
              , g = d ? f : "Write the first response";
            return i.createElement(p.t, {
                href: u || m ? " " : Object(se.Qb)(t, l),
                onClick: function(e) {
                    return u ? function(e) {
                        e.preventDefault()
                    }(e) : m ? (a.event("responses.viewAllClicked", {
                        postId: n.id,
                        source: s
                    }),
                    function(e) {
                        e.preventDefault(),
                        r(!0)
                    }(e)) : void 0
                }
            }, i.createElement("span", {
                className: o((function(e) {
                    return {
                        color: e.baseColor.text.light,
                        opacity: u ? .25 : 1,
                        cursor: u ? "not-allowed" : "pointer"
                    }
                }
                ))
            }, i.createElement(p.b, {
                sm: {
                    display: d ? "block" : "none"
                },
                border: u ? "BASE_NORMAL" : "ACCENT_NORMAL",
                borderRadius: "4px",
                padding: "20px",
                textAlign: "center"
            }, u ? i.createElement(p.H, {
                darkTheme: !0,
                popoverRenderFn: function() {
                    return i.createElement(p.b, {
                        padding: "8px",
                        whiteSpace: "nowrap"
                    }, "This feature is temporarily disabled.")
                },
                placement: "top",
                targetDistance: 15
            }, g) : i.createElement("span", {
                className: o((function(e) {
                    return {
                        color: e.accentColor.text.normal
                    }
                }
                ))
            }, g))))
        }
        ))
          , at = n("./src/svg/creative-commons-by-21px.svg")
          , st = n("./src/svg/creative-commons-nc-21px.svg")
          , it = n("./src/svg/creative-commons-nd-21px.svg")
          , lt = n("./src/svg/creative-commons-sa-21px.svg")
          , ct = n("./src/svg/creative-commons-zero-21px.svg")
          , ut = function(e) {
            return {
                fill: e.baseColor.fill.lighter
            }
        };
        function dt(e, t) {
            return {
                PUBLIC_DOMAIN: {
                    title: "Public Domain",
                    link: "https://creativecommons.org/publicdomain/mark/1.0/"
                },
                CC_40_ZERO: {
                    title: "Creative Commons copyright waiver",
                    link: "http://creativecommons.org/publicdomain/zero/1.0/"
                },
                CC_40_BY: {
                    title: "Creative Commons Attribution 4.0 International",
                    link: "http://creativecommons.org/licenses/by/4.0/"
                },
                CC_40_BY_ND: {
                    title: "Creative Commons Attribution-NoDerivatives 4.0 International",
                    link: "https://creativecommons.org/licenses/by-nd/4.0/"
                },
                CC_40_BY_SA: {
                    title: "Creative Commons Attribution-ShareAlike 4.0 International",
                    link: "https://creativecommons.org/licenses/by-sa/4.0/"
                },
                CC_40_BY_NC: {
                    title: "Creative Commons Attribution-NonCommercial 4.0 International",
                    link: "https://creativecommons.org/licenses/by-nc/4.0/"
                },
                CC_40_BY_NC_ND: {
                    title: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International",
                    link: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
                },
                CC_40_BY_NC_SA: {
                    title: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
                    link: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
                }
            }[e][t]
        }
        var mt = function(e) {
            var t = e.license
              , n = Object(y.useCx)();
            return t ? i.createElement(p.b, null, i.createElement(p.b, {
                display: "inline-block"
            }, i.createElement(Ue.b, {
                scale: "S"
            }, i.createElement(p.H, {
                darkTheme: !0,
                placement: "top",
                popoverRenderFn: function() {
                    return i.createElement(p.b, {
                        width: "300px",
                        padding: "8px"
                    }, function(e) {
                        switch (e) {
                        case "PUBLIC_DOMAIN":
                            return "Except where otherwise noted, this work is in the public domain.";
                        case "CC_40_ZERO":
                            return "Except where otherwise noted, this work has been dedicated to the public domain using CC0.";
                        default:
                            return "Except where otherwise noted, this work is licensed under a ".concat(dt(e, "title"), " license by the author.")
                        }
                    }(t))
                }
            }, i.createElement(p.t, {
                disableSourceParam: !0,
                href: dt(t, "link"),
                linkStyle: "SUBTLE",
                inline: !0,
                target: "_blank"
            }, function(e) {
                switch (e) {
                case "PUBLIC_DOMAIN":
                    return "Public domain.";
                case "CC_40_ZERO":
                    return "No rights reserved";
                default:
                    return "Some rights reserved"
                }
            }(t))))), i.createElement(p.b, {
                display: "inline-block"
            }, i.createElement(Ue.b, {
                scale: "S"
            }, "CC_40_ZERO" === t && i.createElement("span", null, " by the author."), i.createElement("span", {
                className: n(ut),
                style: {
                    marginLeft: "5px",
                    verticalAlign: "text-bottom"
                }
            }, function(e) {
                return {
                    CC_40_ZERO: i.createElement(ct.a, null),
                    CC_40_BY: i.createElement(at.a, null),
                    CC_40_BY_ND: i.createElement(i.Fragment, null, i.createElement(at.a, null), i.createElement(it.a, null)),
                    CC_40_BY_SA: i.createElement(i.Fragment, null, i.createElement(at.a, null), i.createElement(lt.a, null)),
                    CC_40_BY_NC: i.createElement(i.Fragment, null, i.createElement(at.a, null), i.createElement(st.a, null)),
                    CC_40_BY_NC_ND: i.createElement(i.Fragment, null, i.createElement(at.a, null), i.createElement(st.a, null), i.createElement(it.a, null)),
                    CC_40_BY_NC_SA: i.createElement(i.Fragment, null, i.createElement(at.a, null), i.createElement(st.a, null), i.createElement(lt.a, null)),
                    PUBLIC_DOMAIN: i.createElement(i.Fragment, null)
                }[e]
            }(t))))) : null
        }
          , pt = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , ft = n.n(pt)
          , bt = n("./node_modules/@apollo/react-components/lib/react-components.esm.js");
        function gt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ht(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? gt(Object(n), !0).forEach((function(t) {
                    ft()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function vt() {
            var e = o()(["\n  fragment ThanksTo_post on Post {\n    id\n    creator {\n      id\n    }\n    collaborators {\n      id\n      user {\n        id\n        name\n      }\n      state\n    }\n  }\n"]);
            return vt = function() {
                return e
            }
            ,
            e
        }
        function xt() {
            var e = o()(["\n  mutation setCollaboratorState($postId: ID!, $collaboratorId: ID!, $isVisible: Boolean!) {\n    setCollaboratorState(postId: $postId, collaboratorId: $collaboratorId, isVisible: $isVisible)\n  }\n"]);
            return xt = function() {
                return e
            }
            ,
            e
        }
        var Et = s()(xt())
          , yt = s()(vt())
          , Ot = function(e) {
            var t = e.viewer
              , n = e.post
              , r = e.collaborator
              , o = r.user
              , a = n.creator;
            return o && t && a && (t.id === a.id || t.id === o.id) ? i.createElement(bt.a, {
                mutation: Et,
                optimisticResponse: {
                    setCollaboratorState: !0
                },
                update: function(e, t) {
                    var o, a = e.readFragment({
                        id: "Post:".concat(n.id),
                        fragment: yt
                    });
                    e.writeFragment({
                        id: "Post:".concat(n.id),
                        fragment: yt,
                        data: ht({}, a, {
                            collaborators: (null !== (o = null == a ? void 0 : a.collaborators) && void 0 !== o ? o : []).map((function(e) {
                                return e.id === r.id ? ht({}, e, {
                                    state: "visible" === e.state ? "hidden" : "visible"
                                }) : e
                            }
                            ))
                        })
                    })
                }
            }, (function(e) {
                return "hidden-collab" === r.state && a.id === t.id ? "(declined)" : i.createElement(i.Fragment, null, "(", i.createElement(p.t, {
                    onClick: function(t) {
                        e({
                            variables: {
                                postId: n.id,
                                collaboratorId: o.id,
                                isVisible: "visible" !== r.state
                            }
                        })
                    }
                }, "visible" === r.state ? "hide" : "show"), ")")
            }
            )) : null
        }
          , wt = function(e) {
            var t = e.index
              , n = e.total;
            return t === n - 1 ? "" : n >= 3 ? t === n - 2 ? ", and " : ", " : " and "
        }
          , Ct = function(e) {
            var t = e.post
              , n = t.collaborators
              , r = t.creator;
            return r && n && n.length ? i.createElement(Le.b, null, (function(e) {
                return i.createElement(p.b, null, i.createElement(Ue.b, {
                    scale: "S"
                }, "Thanks to ", n.map((function(o, a) {
                    var s = o.user;
                    return s ? i.createElement(i.Fragment, {
                        key: o.id
                    }, s.name, function(e, t, n) {
                        return e && (e.id === t.id || n && e.id === n.id)
                    }(e, r, s) && i.createElement(i.Fragment, null, " ", i.createElement(Ot, {
                        viewer: e,
                        post: t,
                        collaborator: o
                    })), i.createElement(wt, {
                        index: a,
                        total: n.length
                    })) : null
                }
                )), ". "))
            }
            )) : null
        };
        function _t() {
            var e = o()(["\n  fragment TranslatedBy_post on Post {\n    creator {\n      name\n      username\n    }\n    translationSourcePost {\n      id\n      title\n      mediumUrl\n    }\n  }\n"]);
            return _t = function() {
                return e
            }
            ,
            e
        }
        var jt = s()(_t())
          , St = function(e) {
            var t = e.post
              , n = t.creator;
            if (!t.translationSourcePost || !n)
                return null;
            var r = i.createElement(p.t, {
                linkStyle: "SUBTLE",
                inline: !0,
                href: Object(se.Db)(t.translationSourcePost)
            }, "original")
              , o = i.createElement(p.t, {
                linkStyle: "SUBTLE",
                inline: !0,
                href: Object(se.sc)(n.username || "")
            }, n.name);
            return i.createElement(p.b, null, i.createElement(Ue.b, {
                scale: "S"
            }, "Translated from ", r, " by ", o, "."))
        }
          , kt = n("./src/components/sequence/SequenceCoverImage.tsx");
        function Pt() {
            var e = o()(["\n  fragment SequencePreview_sequence on Sequence {\n    sequenceId\n    ...SequenceCoverImage_sequence\n    description\n    eyebrow\n    slug\n    tabletImage {\n      id\n    }\n    title\n    hideIndex\n  }\n  ", "\n"]);
            return Pt = function() {
                return e
            }
            ,
            e
        }
        var It = {
            textTransform: "uppercase"
        };
        function Tt(e) {
            var t = e.sequence
              , n = Object(y.useCx)();
            return i.createElement(p.b, {
                display: "flex",
                flexDirection: "column",
                marginBottom: "56px"
            }, i.createElement(p.b, {
                display: "flex",
                marginTop: "48px",
                xs: {
                    marginTop: "32px",
                    display: "flex"
                }
            }, i.createElement(p.b, {
                flexShrink: "0",
                borderRadius: "4px",
                overflow: "hidden",
                md: {
                    display: "none"
                }
            }, i.createElement(kt.b, {
                sequence: t,
                width: 200,
                height: 265
            })), i.createElement(p.b, {
                flexShrink: "0",
                borderRadius: "4px",
                overflow: "hidden",
                display: "none",
                md: {
                    display: "block"
                },
                xs: {
                    display: "none !important"
                }
            }, i.createElement(kt.b, {
                sequence: t,
                width: 180,
                height: 238
            })), i.createElement(p.b, {
                flexShrink: "0",
                borderRadius: "4px",
                overflow: "hidden",
                display: "none",
                xs: {
                    display: "block"
                }
            }, i.createElement(kt.b, {
                sequence: t,
                width: 98,
                height: 130
            })), i.createElement(p.b, {
                display: "flex",
                flexDirection: "column",
                marginLeft: "32px",
                justifyContent: "center",
                xs: {
                    marginLeft: "20px",
                    display: "flex"
                }
            }, i.createElement("div", {
                className: n(It)
            }, i.createElement(Ue.e, null, "About this ", t.eyebrow || "Collection")), t.title && t.slug && i.createElement(p.f, {
                href: Object(se.Mb)(t.slug)
            }, i.createElement(p.b, null, i.createElement(Ue.h, {
                scale: "L"
            }, t.title))), t.description && i.createElement(p.b, {
                marginTop: "14px",
                xs: {
                    display: "none"
                },
                maxWidth: "680px"
            }, i.createElement(Ue.b, {
                scale: "L"
            }, t.description)))), t.description && i.createElement(p.b, {
                display: "none",
                marginTop: "29px",
                xs: {
                    display: "block"
                }
            }, i.createElement(Ue.b, {
                scale: "M"
            }, t.description)))
        }
        var Rt = s()(Pt(), kt.a);
        function At() {
            var e = o()(["\n  query SequencePostRecircQuery(\n    $postId: ID!\n    $includeSequenceRecirc: Boolean!\n    $postRecircPaging: PaginationLimit!\n  ) {\n    post(id: $postId) {\n      id\n      ...SequencePostRecirc_post\n    }\n  }\n  ", "\n"]);
            return At = function() {
                return e
            }
            ,
            e
        }
        function Lt() {
            var e = o()(["\n  fragment SequencePostRecirc_post on Post {\n    elevateRecirc(paging: {limit: $postRecircPaging}) @include(if: $includeSequenceRecirc) {\n      items {\n        __typename\n        ... on Post {\n          ...PostListingItemRecirc_post\n        }\n      }\n    }\n  }\n  ", "\n"]);
            return Lt = function() {
                return e
            }
            ,
            e
        }
        var Mt = s()(Lt(), M.a)
          , Bt = s()(At(), Mt)
          , Dt = i.forwardRef((function(e, t) {
            var n, r, o, a = e.postId, s = e.rootMargin, l = e.recircOptions, c = (null == l || null === (n = l.v1) || void 0 === n ? void 0 : n.limit) || 3, u = N(Bt, {
                variables: {
                    postId: a,
                    includeSequenceRecirc: !0,
                    postRecircPaging: c
                },
                ssr: !1
            }), d = k()(u, 2), m = d[0], p = d[1], f = p.called, b = p.loading, g = p.error, h = p.data;
            Object(F.f)({
                onIntersect: m,
                target: t,
                disconnect: function() {
                    return f
                },
                rootMargin: s
            }, [f]);
            var v = null == h || null === (r = h.post) || void 0 === r || null === (o = r.elevateRecirc) || void 0 === o ? void 0 : o.items;
            return !f || b || g || !v ? null : i.createElement(D, {
                posts: v,
                sourceName: "elevate_recirc"
            })
        }
        ))
          , Nt = i.forwardRef((function(e, t) {
            return i.createElement(Dt, j()({}, e, {
                ref: t
            }))
        }
        ))
          , Ut = Object(l.c)((function(e) {
            return {
                recircOptions: e.config.recircOptions
            }
        }
        ), null, null, {
            forwardRef: !0
        })(Nt)
          , Ft = n("./src/framework/track/IntersectionPresenter.tsx")
          , Ht = n("./src/store/actions/auroraPostPage.ts")
          , Vt = n("./src/styles/colors.ts")
          , zt = n("./src/styles/flex.ts")
          , Gt = n("./src/styles/theme.ts")
          , qt = n("./src/svg/unlisted-19px.svg")
          , Wt = n("./src/util/hooks/postRecircHooks.tsx");
        function $t() {
            var e = o()(["\n  fragment PostFooter_post on Post {\n    id\n    visibility\n    license\n    isPublished\n    allowResponses\n    layerCake\n    newsletterId\n    collection {\n      viewerIsEditor\n      newsletterV3 {\n        isSubscribed\n        showPromo\n      }\n      ...auroraHooks_publisher\n      ...NewsletterV3Promo_collection\n      ...PostFooter_collection\n      ...TagList_collection\n    }\n    creator {\n      ...auroraHooks_publisher\n    }\n    sequence {\n      sequenceId\n      ...SequencePreview_sequence\n    }\n    tags {\n      id\n      ...TagList_tags\n    }\n    topics {\n      topicId\n      name\n    }\n    viewerClapCount\n    ...PostFooterActionsBar_post\n    ...PostFooterByline_post\n    ...PostFooterBylineAurora_post\n    ...PostFooterResponsesButton_post\n    ...PostInternalLinks_post\n    ...PostNextFiveStories_post\n    ...PostRecirc_post\n    ...SequencePostRecirc_post\n    ...ThanksTo_post\n    ...TranslatedBy_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return $t = function() {
                return e
            }
            ,
            e
        }
        function Yt() {
            var e = o()(["\n  fragment PostFooter_collection on Collection {\n    name\n    description\n    ...PostFooterCollectionButton_collection\n  }\n  ", "\n"]);
            return Yt = function() {
                return e
            }
            ,
            e
        }
        var Kt = function(e) {
            return {
                color: e.baseColor.text.normal
            }
        }
          , Qt = (t.c = Object(l.c)((function(e) {
            return {
                clapsPerPost: e.multiVote.clapsPerPost,
                isAmp: e.config.isAmp,
                embeddedPostIds: e.config.embeddedPostIds
            }
        }
        ), {})((function(e) {
            var t = e.post
              , n = e.isAmp
              , r = e.setIsResponsesSidebarVisible
              , o = e.embeddedPostIds
              , a = e.hideRecirc
              , s = t.id
              , m = t.layerCake
              , f = t.tags
              , b = t.topics
              , g = t.sequence
              , h = t.visibility
              , v = t.isPublished
              , O = t.allowResponses
              , w = t.collection
              , C = t.newsletterId
              , _ = i.useRef(null)
              , j = i.useRef(null)
              , S = Object(y.useCx)()
              , k = i.useContext(c.b)
              , P = Object(Me.a)("enable_aurora_recirc")
              , I = Object(Wt.a)() || n
              , T = function(e, t, n, r) {
                var o = Object(E.a)({
                    tier: r,
                    topics: n,
                    tags: t,
                    flag: "enable_more_on_coronavirus"
                }).shouldShowCdcMessaging;
                return !(!(null == e ? void 0 : e.coronavirus) || !o)
            }(o, null == f ? void 0 : f.map((function(e) {
                return e.id
            }
            )), null == b ? void 0 : b.map((function(e) {
                return e.name
            }
            )), m)
              , R = Object(Ye.b)(w || t.creator);
            i.useEffect((function() {
                var e = R ? _ : j;
                k.updateWatchedBounds("footer", e, {
                    type: "footer"
                })
            }
            ), [j, _]);
            var A, L, M = !!Object(Me.a)("enable_end_of_post_cleanup"), B = Object(ke.a)(), D = Object(l.e)();
            (A = R,
            L = i.useRef(),
            i.useEffect((function() {
                L.current = A
            }
            ), [A]),
            L.current) !== R && D(Object(Ht.b)(R));
            var N, U = null == w ? void 0 : w.newsletterV3;
            return i.createElement("div", {
                ref: j
            }, i.createElement(Se.b, {
                source: {
                    susiEntry: "follow_footer",
                    name: "follow_footer"
                }
            }, i.createElement("div", {
                className: S([(N = !v || T,
                {
                    marginTop: "40px",
                    clear: "both",
                    marginBottom: N ? "40px" : void 0
                }), Object(zt.a)({
                    flexDirection: "column",
                    justifyContent: "center"
                })])
            }, i.createElement(p.v, {
                size: "inset"
            }, !v && i.createElement(p.b, {
                height: "20px",
                borderTop: "BASE_LIGHTER"
            }), !C && (null == w ? void 0 : w.newsletterV3) && (null == U ? void 0 : U.showPromo) && ((null == w ? void 0 : w.viewerIsEditor) || !(null == U ? void 0 : U.isSubscribed)) && i.createElement(u.a, {
                collection: w
            }), i.createElement(p.b, {
                display: "flex",
                flexWrap: "wrap"
            }, v && i.createElement(Ct, {
                post: t
            }), v && i.createElement(St, {
                post: t
            })), i.createElement(p.b, {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center"
            }, "UNLISTED" === h && i.createElement(p.b, null, i.createElement(Ue.b, {
                scale: "S"
            }, i.createElement(qt.a, null), " ", i.createElement("span", {
                className: S(Kt)
            }, "Unlisted"), "ALL_RIGHTS_RESERVED" !== t.license && i.createElement("span", {
                style: {
                    marginLeft: "5px",
                    marginRight: "5px"
                }
            }, "|"))), t.license && "ALL_RIGHTS_RESERVED" !== t.license && i.createElement(mt, {
                license: t.license
            })), R && i.createElement(i.Fragment, null, !n && i.createElement(p.b, {
                marginTop: "25px",
                paddingBottom: "25px"
            }, i.createElement(Ie, {
                post: t,
                setIsResponsesSidebarVisible: r,
                useSocialPopover: !0,
                shouldHideResponsesText: !0,
                shouldHideClapsText: !0
            })), f && f.length > 0 && i.createElement(p.b, {
                marginTop: "25px",
                paddingBottom: "40px"
            }, i.createElement(me, {
                tags: f,
                collection: t.collection
            }))), !R && i.createElement(i.Fragment, null, f && f.length > 0 && i.createElement(p.b, {
                marginTop: "25px"
            }, i.createElement(me, {
                tags: f,
                collection: t.collection
            })), !n && i.createElement(Ie, {
                post: t,
                setIsResponsesSidebarVisible: r
            })), R && !w && i.createElement(p.b, {
                paddingTop: "40px"
            })), i.createElement("div", {
                ref: _
            }, i.createElement(p.v, {
                size: "inset"
            }, v && i.createElement(i.Fragment, null, !R && i.createElement($e, {
                post: t
            }), O && i.createElement(p.b, {
                borderTop: R ? void 0 : "BASE_LIGHTER",
                paddingTop: R ? void 0 : "25px",
                print: {
                    display: "none"
                },
                sm: {
                    borderTop: M ? "NONE" : "BASE_LIGHTER",
                    paddingTop: M ? "0" : "25px"
                }
            }, !B && i.createElement(ot, {
                post: t,
                setIsResponsesSidebarVisible: r
            }))), !R && T && i.createElement(p.b, {
                paddingTop: "25px"
            }, i.createElement(Ft.a, {
                ref: j,
                rootMargin: "0px 0px 1000px 0px"
            }, i.createElement(d.a, {
                postId: null == o ? void 0 : o.coronavirus,
                sourcePost: t
            })))), R && i.createElement(i.Fragment, null, i.createElement(Xe, {
                post: t
            }), i.createElement(p.b, {
                backgroundColor: "BASE_LIGHT",
                print: {
                    display: "none"
                },
                paddingTop: "25px"
            }, i.createElement(p.v, {
                size: "full"
            }, i.createElement(Y, {
                post: t,
                ref: j,
                rootMargin: "0px 0px 2000px 0px"
            }), w && i.createElement(p.b, {
                marginBottom: "96px",
                marginTop: "40px"
            }, i.createElement(et, {
                collection: w
            }))))), !a && v && !T && i.createElement(y.ThemeProvider, {
                theme: Gt.a
            }, i.createElement(p.b, {
                background: Vt.D,
                marginTop: P ? void 0 : "64px",
                print: {
                    display: "none"
                }
            }, i.createElement(p.v, null, g && !g.hideIndex && !R && i.createElement(Tt, {
                sequence: g
            }), !I && !R && (g ? i.createElement(Ut, {
                ref: j,
                postId: s,
                rootMargin: "0px 0px 2000px 0px",
                post: t
            }) : i.createElement(oe, {
                ref: j,
                postId: s,
                rootMargin: "0px 0px 2000px 0px",
                post: t
            })), I && (!R || P && R) && i.createElement(x, {
                post: t,
                sourceName: "post_internal_links"
            }))))))))
        }
        )),
        s()(Yt(), tt))
          , Xt = s()($t(), Ye.a, u.b, Qt, Te, We, Je, rt, v, K, ee, Mt, Rt, pe, fe, yt, jt)
    },
    "./src/components/post/footer/PostFooterSocialPopover.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return S
        }
        )),
        n.d(t, "b", (function() {
            return k
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n.n(c)
          , d = n("./src/components/social/ShareButton.tsx")
          , m = n("./src/components/ui/PopoverMenu.tsx")
          , p = n("./src/framework/design-system/components/index.ts")
          , f = n("./src/framework/design-system/type/index.ts")
          , b = n("./src/framework/source/index.ts")
          , g = n("./src/framework/style/index.ts")
          , h = n("./src/store/actions/navigation.ts")
          , v = n("./src/svg/link-slim.svg");
        function x() {
            return (x = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var E = u.a.createElement("g", {
            fillRule: "evenodd"
        }, u.a.createElement("path", {
            d: "M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01"
        }), u.a.createElement("path", {
            d: "M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"
        }))
          , y = function(e) {
            return u.a.createElement("svg", x({
                width: 25,
                height: 25
            }, e), E)
        }
          , O = n("./src/util/hooks/useToggle.tsx");
        function w() {
            var e = o()(["\n  fragment PostFooterSocialPopover_post on Post {\n    id\n    mediumUrl\n    title\n    ...ShareButton_post\n  }\n  ", "\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        function C(e) {
            return {
                fill: e.baseColor.fill.normal
            }
        }
        function _(e) {
            return {
                fill: e.baseColor.fill.lighter
            }
        }
        var j = {
            height: "16px",
            width: "16px",
            marginLeft: "4px"
        }
          , S = function(e) {
            var t, n = e.post, r = e.source, o = n.mediumUrl, a = n.title, i = Object(h.u)(), l = Object(g.useTheme)(), u = Object(g.useCx)(), x = Object(O.a)(!1), E = s()(x, 3), w = E[0], S = E[1], k = E[2], P = (null == l || null === (t = l.breakpoints) || void 0 === t ? void 0 : t.md) || 728;
            return c.createElement(b.b, {
                source: r
            }, c.createElement(p.w, {
                isVisible: w,
                hide: k,
                popoverRenderFn: function() {
                    return c.createElement(m.a, null, c.createElement(m.b, {
                        paddingTopBottom: "8px"
                    }, c.createElement(d.a, {
                        socialPlatform: "TWITTER",
                        buttonStyle: "LINK_INLINE_SHORT_LABEL",
                        post: n
                    })), c.createElement(m.b, {
                        paddingTopBottom: "8px"
                    }, c.createElement(d.a, {
                        socialPlatform: "FACEBOOK",
                        buttonStyle: "LINK_INLINE_SHORT_LABEL",
                        post: n
                    })), c.createElement(m.b, {
                        paddingTopBottom: "8px"
                    }, c.createElement(d.a, {
                        socialPlatform: "LINKEDIN",
                        buttonStyle: "LINK_INLINE_SHORT_LABEL",
                        post: n
                    })), o && c.createElement(m.b, {
                        paddingTopBottom: "8px"
                    }, c.createElement(p.t, {
                        onClick: function() {
                            navigator.clipboard.writeText(o),
                            i({
                                message: "Link copied",
                                toastStyle: "MESSAGE",
                                duration: 2e3
                            }),
                            k()
                        }
                    }, c.createElement(p.b, {
                        display: "inline-block"
                    }, c.createElement(v.a, {
                        className: u([_, j])
                    }), c.createElement(p.b, {
                        display: "inline-block",
                        marginLeft: "20px"
                    }, c.createElement(f.b, {
                        scale: "S"
                    }, "Copy link"))))))
                }
            }, c.createElement(p.t, {
                onClick: function() {
                    var e, t = null === (e = window) || void 0 === e ? void 0 : e.innerWidth;
                    navigator && navigator.share && o && t && t < P ? navigator.share({
                        url: o,
                        text: a || "",
                        title: a || ""
                    }) : S()
                }
            }, c.createElement(y, {
                className: u(C)
            }))))
        }
          , k = l()(w(), d.b)
    },
    "./src/components/post/footer/actions/CollectionSubmission.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return P
        }
        )),
        n.d(t, "b", (function() {
            return R
        }
        )),
        n.d(t, "a", (function() {
            return M
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , l = n("./node_modules/graphql-tag/src/index.js")
          , c = n.n(l)
          , u = n("./node_modules/react/index.js")
          , d = n("./src/components/collection/CollectionAvatar.tsx")
          , m = n("./src/components/post/footer/actions/PubStatusMutations.tsx")
          , p = n("./src/components/post/footer/actions/shared.ts")
          , f = n("./src/components/session/WithViewer.tsx")
          , b = n("./src/components/ui/PopoverMenu.tsx")
          , g = n("./src/framework/design-system/components/index.ts")
          , h = n("./src/framework/design-system/type/index.ts");
        function v() {
            var e = s()(["\n  fragment CollectionSubmission_post on Post {\n    id\n    ...CollectionSubmissionPopover_post\n    ...CollectionSubmissionPopoverMenuItem_post\n  }\n  ", "\n  ", "\n"]);
            return v = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = s()(["\n  fragment CollectionSubmissionPopover_post on Post {\n    id\n    isPublished\n    creator {\n      id\n    }\n  }\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = s()(["\n  fragment CollectionSubmissionPopoverMenuItem_post on Post {\n    id\n    statusForCollection\n    isPublished\n    creator {\n      id\n    }\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function y() {
            var e = s()(["\n  query CollectionSubmissionPopoverQuery {\n    viewer {\n      id\n      writerCollections {\n        ...CollectionSubmissionPopoverQuery_collection\n      }\n      adminCollections {\n        ...CollectionSubmissionPopoverQuery_collection\n      }\n    }\n  }\n  ", "\n"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        function O() {
            var e = s()(["\n  fragment CollectionSubmissionPopoverQuery_collection on Collection {\n    ...CollectionSubmissionOption_collection\n    ...ManageSubmission_collection\n  }\n  ", "\n  ", "\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        function w() {
            var e = s()(["\n  fragment CollectionSubmissionOption_collection on Collection {\n    id\n    name\n    slug\n    ...CollectionAvatar_collection\n  }\n  ", "\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        var C = c()(w(), d.b)
          , _ = c()(O(), C, p.a)
          , j = c()(y(), _)
          , S = c()(E())
          , k = c()(x())
          , P = c()(v(), k, S)
          , I = [{
            name: "",
            value: "No publication",
            content: u.createElement(g.b, {
                height: "32px",
                display: "flex",
                alignItems: "center",
                marginLeft: "5px"
            }, u.createElement(h.b, {
                scale: "M",
                color: "DARKER"
            }, "No publication"))
        }];
        function T(e) {
            var t = e.collection;
            return t.name ? u.createElement(g.b, {
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
                alignItems: "center",
                marginLeft: "5px"
            }, u.createElement(h.b, {
                scale: "M",
                color: "DARKER"
            }, t.name), u.createElement(d.a, {
                collection: t,
                size: 32
            })) : null
        }
        function R(e) {
            var t = e.show
              , n = e.post
              , r = n.statusForCollection
              , o = n.isPublished;
            return r || !o ? null : u.createElement(L, {
                post: n,
                noQueryReturn: null
            }, (function(e) {
                var r = e.loading
                  , o = e.error
                  , a = e.data;
                if (r || o)
                    return null;
                var s = (void 0 === a ? {
                    viewer: void 0
                } : a).viewer
                  , i = n.creator;
                if (!s || !i || s.id !== i.id)
                    return null;
                var l = s.adminCollections
                  , c = s.writerCollections;
                return 0 === l.length && 0 === c.length ? null : u.createElement(b.b, null, u.createElement(g.t, {
                    onClick: t
                }, "Add to publication"))
            }
            ))
        }
        function A(e) {
            var t = e.isVisible
              , n = e.hide;
            return u.createElement(g.i, {
                isVisible: t,
                hide: n,
                withCloseButton: !0
            }, u.createElement(g.b, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "480px"
            }, u.createElement(g.n, null, "Story submitted"), u.createElement(g.b, {
                paddingTop: "8px",
                paddingBottom: "24px"
            }, u.createElement(h.g, {
                scale: "M"
            }, "We’ll email you when the publication editor has reviewed your submission.")), u.createElement(g.c, {
                buttonStyle: "OBVIOUS",
                onClick: n
            }, "OK")))
        }
        var L = function(e) {
            var t = e.children
              , n = e.post
              , r = e.noQueryReturn
              , o = n.creator;
            return o ? u.createElement(f.b, null, (function(e) {
                return e ? e.id !== o.id ? r : u.createElement(i.b, {
                    query: j,
                    ssr: !1
                }, (function(e) {
                    var n = e.loading
                      , r = e.error
                      , o = e.data;
                    return t({
                        loading: n,
                        error: r,
                        data: o
                    })
                }
                )) : r
            }
            )) : r
        }
          , M = function(e) {
            var t = e.post
              , n = e.hide
              , r = e.showLoadingIndicator
              , a = e.isVisible
              , s = e.children
              , i = u.useState("")
              , l = o()(i, 2)
              , c = l[0]
              , d = l[1]
              , p = Object(m.a)(t)
              , f = Object(m.c)(t);
            return t.isPublished ? u.createElement(g.I, null, (function(e) {
                var o = e.isVisible
                  , i = e.hide
                  , l = e.show;
                return u.createElement(u.Fragment, null, u.createElement(A, {
                    hide: i,
                    isVisible: o
                }), u.createElement(L, {
                    post: t,
                    noQueryReturn: s
                }, (function(e) {
                    var o = e.loading
                      , i = e.error
                      , m = e.data;
                    if (o || i)
                        return s;
                    var b = (void 0 === m ? {
                        viewer: void 0
                    } : m).viewer
                      , v = t.creator;
                    if (!b || !v || b.id !== v.id)
                        return s;
                    var x = b.adminCollections
                      , E = b.writerCollections;
                    if (0 === x.length && 0 === E.length)
                        return s;
                    var y = x.concat(E).filter((function(e) {
                        return !!e && !!e.slug && !!e.name
                    }
                    )).map((function(e) {
                        return {
                            name: e.slug || "",
                            value: e.name || "",
                            content: u.createElement(T, {
                                collection: e
                            })
                        }
                    }
                    ))
                      , O = I.concat(y)
                      , w = x.reduce((function(e, t) {
                        return e[t.slug || ""] = t,
                        e
                    }
                    ), {})
                      , C = E.reduce((function(e, t) {
                        return e[t.slug || ""] = t,
                        e
                    }
                    ), {})
                      , _ = "";
                    if (c) {
                        var j = O.find((function(e) {
                            return e.name === c
                        }
                        ));
                        j && (_ = j.value)
                    }
                    return u.createElement(g.w, {
                        placement: "top",
                        hide: n,
                        isVisible: a,
                        popoverRenderFn: function() {
                            return u.createElement(g.b, {
                                padding: "20px",
                                width: "280px",
                                display: "flex",
                                flexDirection: "column"
                            }, u.createElement(h.b, {
                                scale: "M",
                                color: "DARKER"
                            }, "Add your story to a publication:"), u.createElement(g.b, {
                                marginTop: "10px"
                            }, u.createElement(g.y, {
                                value: _,
                                onChange: d,
                                options: O
                            })), u.createElement(g.b, {
                                display: "flex",
                                marginTop: "20px"
                            }, u.createElement(h.b, {
                                scale: "M",
                                color: "LIGHTER"
                            }, c in w ? u.createElement(g.c, {
                                onClick: function() {
                                    var e = w[c];
                                    n(),
                                    r(),
                                    p(e).then((function() {
                                        window.location.reload(!1)
                                    }
                                    ))
                                },
                                buttonStyle: "OBVIOUS"
                            }, "Add story") : u.createElement(g.c, {
                                onClick: function() {
                                    var e = C[c];
                                    f(e),
                                    n(),
                                    l()
                                },
                                disabled: !c
                            }, "Submit")), u.createElement(g.b, {
                                marginLeft: "10px"
                            }, u.createElement(h.b, {
                                scale: "M",
                                color: "LIGHTER"
                            }, u.createElement(g.t, {
                                onClick: n
                            }, u.createElement(g.b, {
                                padding: "10px"
                            }, "Cancel"))))), u.createElement(g.b, {
                                marginTop: "10px"
                            }, u.createElement(h.b, {
                                scale: "M"
                            }, "This story will be automatically submitted to the publication. When you submit your story, the publication's editors will be notified and will be able to edit your story.")))
                        }
                    }, s)
                }
                )))
            }
            )) : s
        }
    },
    "./src/components/post/footer/actions/PubStatusMutations.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return g
        }
        )),
        n.d(t, "a", (function() {
            return h
        }
        )),
        n.d(t, "b", (function() {
            return v
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , l = n("./node_modules/graphql-tag/src/index.js")
          , c = n.n(l)
          , u = n("./node_modules/react/index.js")
          , d = n("./src/schema-types/globalTypes.ts");
        function m() {
            var e = s()(["\n  mutation RejectPostFromPubMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      collection {\n        id\n      }\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function p() {
            var e = s()(["\n  mutation ManageCollectionPostStatusMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        var f = c()(p())
          , b = c()(m())
          , g = function(e) {
            var t = Object(i.d)(f)
              , n = o()(t, 1)[0];
            return Object(u.useCallback)((function(t) {
                return n({
                    variables: {
                        collectionSlug: (null == t ? void 0 : t.slug) || "",
                        postId: e.id,
                        status: d.c.PENDING
                    },
                    optimisticResponse: {
                        manageCollectionPostStatus: {
                            __typename: "Post",
                            id: e.id,
                            statusForCollection: d.c.PENDING,
                            pendingCollection: t
                        }
                    }
                })
            }
            ), [e])
        }
          , h = function(e) {
            var t = Object(i.d)(f)
              , n = o()(t, 1)[0];
            return Object(u.useCallback)((function(t) {
                return n({
                    variables: {
                        collectionSlug: (null == t ? void 0 : t.slug) || "",
                        postId: e.id,
                        status: d.c.APPROVED
                    }
                })
            }
            ), [e])
        }
          , v = function(e) {
            var t = Object(i.d)(b)
              , n = o()(t, 1)[0];
            return Object(u.useCallback)((function(t) {
                return n({
                    variables: {
                        collectionSlug: (null == t ? void 0 : t.slug) || "",
                        postId: e.id,
                        status: d.c.REMOVED
                    },
                    optimisticResponse: {
                        manageCollectionPostStatus: {
                            __typename: "Post",
                            id: e.id,
                            statusForCollection: null,
                            collection: null,
                            pendingCollection: null
                        }
                    }
                }).then((function(e) {
                    if (e.errors && e.errors[0])
                        throw e.errors[0];
                    return e
                }
                ))
            }
            ), [e])
        }
    },
    "./src/components/post/footer/actions/shared.ts": function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return u
        }
        )),
        n.d(t, "e", (function() {
            return d
        }
        )),
        n.d(t, "d", (function() {
            return m
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        )),
        n.d(t, "b", (function() {
            return f
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./src/components/collection/CollectionAvatar.tsx");
        function l() {
            var e = o()(["\n  fragment ManageSubmission_post on Post {\n    id\n    statusForCollection\n    collection {\n      ...ManageSubmission_collection\n    }\n    pendingCollection {\n      ...ManageSubmission_collection\n    }\n    creator {\n      id\n    }\n  }\n  ", "\n"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        function c() {
            var e = o()(["\n  fragment ManageSubmission_collection on Collection {\n    name\n    viewerIsEditor\n    creator {\n      id\n    }\n    ...CollectionAvatar_collection\n  }\n  ", "\n"]);
            return c = function() {
                return e
            }
            ,
            e
        }
        var u = function(e, t) {
            return t && e.creator && t.id === e.creator.id
        }
          , d = function(e, t) {
            var n = e.pendingCollection || e.collection;
            return n && n.creator && t.id === n.creator.id
        }
          , m = function(e) {
            var t = e.pendingCollection || e.collection;
            return t && t.viewerIsEditor
        }
          , p = s()(c(), i.b)
          , f = s()(l(), p)
    },
    "./src/components/post/grouping/ParagraphLayoutGrouping.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return C
        }
        )),
        n.d(t, "c", (function() {
            return _
        }
        )),
        n.d(t, "d", (function() {
            return j
        }
        )),
        n.d(t, "b", (function() {
            return S
        }
        )),
        n.d(t, "e", (function() {
            return k
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n("./src/components/post/grouping/ParagraphStyleGrouping.tsx")
          , p = n("./src/framework/design-system/index.ts")
          , f = n("./src/framework/style/index.ts")
          , b = n("./src/schema-types/globalTypes.ts")
          , g = n("./src/util/richText.ts");
        function h() {
            var e = s()(["\n  fragment ParagraphLayoutGrouping_customStyleSheet on CustomStyleSheet {\n    id\n    ...ParagraphStyleGrouping_customStyleSheet\n  }\n  ", "\n"]);
            return h = function() {
                return e
            }
            ,
            e
        }
        function v() {
            var e = s()(["\n  fragment ParagraphLayoutGrouping_privateNote on Note {\n    ...ParagraphStyleGrouping_privateNote\n  }\n  ", "\n"]);
            return v = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = s()(["\n  fragment ParagraphLayoutGrouping_highlight on Quote {\n    ...ParagraphStyleGrouping_highlight\n  }\n  ", "\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var y = {
            clear: "both"
        }
          , O = {
            clear: "both",
            width: "100%"
        }
          , w = function(e) {
            var t = {
                boxSizing: "border-box",
                margin: "0 auto",
                width: "100%"
            };
            return "INSET_CENTER" === e ? function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        l()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, t, {
                maxWidth: "700px",
                padding: "0 1.25em"
            }) : t
        }
          , C = d.memo((function(e) {
            var t = e.layoutGroup
              , n = e.postBodyInserts
              , r = e.customStyleSheet
              , o = e.isEmbedded
              , a = Object(f.useCx)()
              , s = t.styleGroups[0].paragraphViewModels[0].richTextStyle
              , i = t.styleGroups.map((function(e, t) {
                return d.createElement(m.a, {
                    key: t,
                    styleGroup: e,
                    postBodyInserts: n,
                    customStyleSheet: r
                })
            }
            ));
            if (Object(g.j)(s) || o)
                return d.createElement(d.Fragment, null, i);
            switch (t.effectiveLayout) {
            case "OUTSET_CENTER":
            case "OUTSET_ROW":
                return d.createElement("div", {
                    className: a(y)
                }, d.createElement(p.f, {
                    size: {
                        xs: "full",
                        sm: "full",
                        md: "full",
                        lg: "outset",
                        xl: "outset"
                    }
                }, i));
            case "FULL_WIDTH":
                return d.createElement("div", {
                    className: a(O)
                }, i);
            default:
                return "FULL_PAGE" === s ? d.createElement(p.f, {
                    size: "inset"
                }, i) : d.createElement("div", {
                    className: a(w(t.effectiveLayout))
                }, i)
            }
        }
        ))
          , _ = u()(x(), m.c)
          , j = u()(v(), m.d)
          , S = u()(h(), m.b)
          , k = function(e) {
            var t = []
              , n = [];
            e.forEach((function(e) {
                var r = P(e.paragraphStyle, e.paragraph.layout)
                  , a = t[t.length - 1];
                if (a && a.effectiveLayout === r)
                    n.push(e);
                else {
                    if (a) {
                        var s, i = Object(m.e)(n);
                        (s = a.styleGroups).push.apply(s, o()(i))
                    }
                    n.length = 0,
                    n.push(e),
                    t.push({
                        styleGroups: [],
                        effectiveLayout: r
                    })
                }
            }
            ));
            var r = t[t.length - 1];
            if (r) {
                var a, s = Object(m.e)(n);
                (a = r.styleGroups).push.apply(a, o()(s))
            }
            return t
        }
          , P = function(e, t) {
            switch (t) {
            case b.g.INSET_LEFT:
            case b.g.OUTSET_LEFT:
                return "IMG" === e || "IFRAME" === e ? b.g.INSET_CENTER : t;
            case b.g.OUTSET_ROW_CONTINUE:
                return b.g.OUTSET_ROW;
            default:
                return t || b.g.INSET_CENTER
            }
        }
    },
    "./src/components/post/multivote/ClapMutation.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return v
        }
        )),
        n.d(t, "b", (function() {
            return E
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , u = n("./node_modules/graphql-tag/src/index.js")
          , d = n.n(u)
          , m = n("./node_modules/react/index.js")
          , p = n("./src/components/post/multivote/MultiVoteCount.tsx");
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function g() {
            var e = l()(["\n  mutation ClapMutation($targetPostId: ID!, $userId: ID!, $numClaps: Int!) {\n    clap(targetPostId: $targetPostId, userId: $userId, numClaps: $numClaps) {\n      ...ClapMutation_post\n    }\n  }\n  ", "\n"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        function h() {
            var e = l()(["\n  fragment ClapMutation_post on Post {\n    __typename\n    id\n    clapCount\n    viewerClapCount\n    ...MultiVoteCount_post\n  }\n  ", "\n"]);
            return h = function() {
                return e
            }
            ,
            e
        }
        var v = d()(h(), p.b)
          , x = d()(g(), v)
          , E = function() {
            var e = Object(c.d)(x)
              , t = s()(e, 1)[0];
            return Object(m.useCallback)((function(e, n, r) {
                return t({
                    variables: {
                        targetPostId: e.id,
                        userId: n,
                        numClaps: r
                    },
                    optimisticResponse: {
                        clap: b({
                            __typename: "Post"
                        }, e, {
                            clapCount: e.clapCount + r,
                            viewerClapCount: (e.viewerClapCount || 0) + r
                        })
                    },
                    update: function(t, n) {
                        var o, a = null == n || null === (o = n.data) || void 0 === o ? void 0 : o.clap;
                        if (a) {
                            var s = t.readFragment({
                                id: "Post:".concat(a.id),
                                fragment: v,
                                fragmentName: "ClapMutation_post"
                            });
                            t.writeFragment({
                                id: "Post:".concat(a.id),
                                fragment: v,
                                fragmentName: "ClapMutation_post",
                                data: b({}, s, {
                                    clapCount: e.clapCount + r,
                                    viewerClapCount: (e.viewerClapCount || 0) + r
                                })
                            })
                        }
                    }
                })
            }
            ), [])
        }
    },
    "./src/components/post/multivote/MultiVote.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return Ve
        }
        )),
        n.d(t, "a", (function() {
            return ze
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react-redux/es/index.js")
          , m = n("./src/components/post/multivote/ClapMutation.tsx")
          , p = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , f = n.n(p)
          , b = n("./src/framework/design-system/components/index.ts")
          , g = n("./src/framework/style/index.ts")
          , h = n("./src/styles/colors.ts")
          , v = n("./src/styles/mediaTypes.ts");
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var E = {
            top: "0",
            left: "0",
            width: "60px",
            height: "60px"
        }
          , y = {
            top: "-2px",
            left: "0",
            width: "25px",
            height: "36px"
        }
          , O = function(e) {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        f()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                position: "absolute",
                pointerEvents: "none"
            }, e ? E : y)
        }
          , w = {
            "0%": {
                opacity: "0",
                transform: "scale(1)"
            },
            "32%": {
                opacity: "1"
            },
            "100%": {
                opacity: "0",
                transform: "scale(1.5)"
            }
        }
          , C = {
            "0%": {
                opacity: "0",
                transform: "scale(1)"
            },
            "32%": {
                opacity: "1",
                transform: "scale(1.3)"
            },
            "100%": {
                opacity: "0",
                transform: "scale(1.6)"
            }
        }
          , _ = function(e) {
            return f()({
                animation: "370ms ease-out 1 ".concat(e)
            }, Object(v.b)("reduce"), {
                animationDuration: "0.1ms"
            })
        }
          , j = function(e) {
            var t = e ? 30 : 13;
            return {
                position: "absolute",
                top: "".concat(48, "%"),
                left: "".concat(-5, "px"),
                transformOrigin: "".concat(t + 2 + 3, "px"),
                width: "".concat(2, "px"),
                height: "".concat(2, "px"),
                borderRadius: "50%",
                backgroundColor: h.l
            }
        }
          , S = function(e) {
            var t = e ? 30 : 13;
            return {
                position: "absolute",
                top: "".concat(44, "%"),
                left: "".concat(-9, "px"),
                transformOrigin: "".concat(t + 6 + 3, "px"),
                width: "0",
                height: "0",
                borderTop: "2px solid transparent",
                borderBottom: "2px solid transparent",
                borderLeft: "".concat(6, "px solid ").concat(h.g)
            }
        };
        function k(e) {
            var t = e.isLarge
              , n = e.offset
              , r = e.onBurstEnd
              , o = Object(g.useCx)()
              , a = o(O(t));
            return c.createElement(b.K, {
                keyframes: {
                    dotKeyframesName: w,
                    triangleKeyframesName: C
                }
            }, (function(e) {
                for (var s = e.dotKeyframesName, i = e.triangleKeyframesName, l = [], u = [], d = 0; d < 5; d++) {
                    var m = 72 * d + n;
                    l.push(c.createElement("div", {
                        key: m,
                        className: "".concat(o(j(t))),
                        style: {
                            transform: "rotate(".concat(m, "deg)")
                        }
                    })),
                    u.push(c.createElement("div", {
                        key: m,
                        className: "".concat(o(S(t))),
                        style: {
                            transform: "rotate(".concat(m + 13, "deg)")
                        }
                    }))
                }
                return c.createElement("div", {
                    className: a
                }, c.createElement("div", {
                    className: "".concat(a, " ").concat(o(_(s))),
                    onAnimationEnd: function() {
                        return r(n)
                    }
                }, l), c.createElement("div", {
                    className: "".concat(a, " ").concat(o(_(i)))
                }, u))
            }
            ))
        }
        var P = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")
          , I = n.n(P)
          , T = n("./node_modules/@babel/runtime/helpers/extends.js")
          , R = n.n(T)
          , A = n("./src/styles/breakpoints.ts")
          , L = n("./src/svg/clap-25px.svg");
        function M() {
            return (M = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var B = u.a.createElement("g", {
            fillRule: "evenodd"
        }, u.a.createElement("path", {
            d: "M13.74 1l.76 2.97.76-2.97zM16.82 4.78l1.84-2.56-1.43-.47zM10.38 2.22l1.84 2.56-.41-3.03zM22.38 22.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M9.1 22.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L6.1 15.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L6.4 11.26l-1.18-1.18a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L11.96 14a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L8.43 9.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L20.63 15c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM13 6.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 23 23.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"
        }))
          , D = function(e) {
            return u.a.createElement("svg", M({
                width: 29,
                height: 29
            }, e), B)
        };
        function N() {
            return (N = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var U = u.a.createElement("path", {
            d: "M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z",
            fillRule: "evenodd"
        })
          , F = function(e) {
            return u.a.createElement("svg", N({
                width: 33,
                height: 33,
                viewBox: "0 0 33 33"
            }, e), U)
        }
          , H = n("./src/svg/clap-filled-25px.svg");
        function V() {
            return (V = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var z = u.a.createElement("g", {
            fillRule: "evenodd"
        }, u.a.createElement("path", {
            d: "M13.74 1l.76 2.97.76-2.97zM18.63 2.22l-1.43-.47-.4 3.03zM11.79 1.75l-1.43.47 1.84 2.56zM24.47 14.3L21.45 9c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M14.58 10.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z"
        }), u.a.createElement("path", {
            d: "M17.81 10.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.71.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L9.2 7.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L5.8 8.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L4.58 15.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z"
        }))
          , G = function(e) {
            return u.a.createElement("svg", V({
                width: 29,
                height: 29
            }, e), z)
        };
        function q() {
            return (q = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var W = u.a.createElement("g", {
            fillRule: "evenodd"
        }, u.a.createElement("path", {
            d: "M29.58 17.1l-3.85-6.78c-.37-.54-.88-.9-1.44-.99a1.5 1.5 0 0 0-1.16.28c-.42.33-.65.74-.7 1.2v.01l3.63 6.37c2.46 4.5 1.67 8.8-2.33 12.8-.27.27-.54.5-.81.73a7.55 7.55 0 0 0 4.45-2.26c4.16-4.17 3.87-8.6 2.21-11.36zm-4.83.82l-3.58-6.3c-.3-.44-.73-.74-1.19-.81a1.1 1.1 0 0 0-.89.2c-.64.51-.75 1.2-.33 2.1l1.83 3.86a.6.6 0 0 1-.2.75.6.6 0 0 1-.77-.07l-9.44-9.44c-.51-.5-1.4-.5-1.9 0a1.33 1.33 0 0 0-.4.95c0 .36.14.7.4.95l5.6 5.61a.6.6 0 1 1-.84.85l-5.6-5.6-.01-.01-1.58-1.59a1.35 1.35 0 0 0-1.9 0 1.35 1.35 0 0 0 0 1.9l1.58 1.59 5.6 5.6a.6.6 0 0 1-.84.86L4.68 13.7c-.51-.51-1.4-.51-1.9 0a1.33 1.33 0 0 0-.4.95c0 .36.14.7.4.95l2.36 2.36 3.52 3.52a.6.6 0 0 1-.84.85l-3.53-3.52a1.34 1.34 0 0 0-.95-.4 1.34 1.34 0 0 0-.95 2.3l6.78 6.78c3.72 3.71 9.33 5.6 13.5 1.43 3.52-3.52 4.2-7.13 2.08-11.01zM11.82 7.72c.06-.32.21-.63.46-.89a1.74 1.74 0 0 1 2.4 0l3.23 3.24a2.87 2.87 0 0 0-.76 2.99l-5.33-5.33zM13.29.48l-1.92.88 2.37 2.84zM21.72 1.36L19.79.5l-.44 3.7zM16.5 3.3L15.48 0h2.04z"
        }))
          , $ = function(e) {
            return u.a.createElement("svg", q({
                width: 33,
                height: 33
            }, e), W)
        };
        function Y() {
            return (Y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var K = u.a.createElement("path", {
            d: "M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62",
            fillRule: "evenodd"
        })
          , Q = function(e) {
            return u.a.createElement("svg", Y({
                width: 29,
                height: 29
            }, e), K)
        }
          , X = n("./src/util/hooks/useInterval.tsx")
          , J = n("./node_modules/exenv/index.js")
          , Z = n.n(J).a.canUseDOM ? c.useLayoutEffect : c.useEffect
          , ee = n("./src/util/useragent.ts");
        function te(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(n), !0).forEach((function(t) {
                    f()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var re = {
            S: c.createElement(L.a, {
                "aria-label": "clap"
            }),
            M: c.createElement(D, {
                "aria-label": "clap"
            }),
            L: c.createElement(F, {
                "aria-label": "clap"
            })
        }
          , oe = {
            S: c.createElement(H.a, {
                "aria-label": "clap"
            }),
            M: c.createElement(G, {
                "aria-label": "clap"
            }),
            L: c.createElement($, {
                "aria-label": "clap"
            })
        }
          , ae = {
            "0%": {
                transform: "scale(1)",
                opacity: 1
            },
            "70%": {
                transform: "scale(1.4)",
                opacity: 0
            },
            "100%": {
                opacity: 0
            }
        }
          , se = {
            left: "0",
            height: "100%",
            position: "absolute",
            top: "0",
            width: "100%"
        }
          , ie = function(e) {
            var t;
            return t = {
                backgroundColor: e.backgroundColor,
                border: "1px solid ".concat(e.baseColor.border.lighter),
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                height: "60px",
                position: "relative",
                width: "60px"
            },
            f()(t, Object(v.b)("no-preference"), {
                transition: "border-color 150ms ease"
            }),
            f()(t, ":hover", {
                borderColor: e.baseColor.border.dark
            }),
            t
        }
          , le = function(e) {
            return {
                border: "1px solid ".concat(e.baseColor.border.dark)
            }
        }
          , ce = {
            transform: "translateX(-35px)"
        }
          , ue = f()({
            transform: "translateX(0)"
        }, Object(v.b)("no-preference"), {
            transition: "transform .2s ".concat("cubic-bezier(.25,0,.6,1.4)")
        })
          , de = f()({}, ":hover + .".concat("multi-vote-undo-revealed"), ce)
          , me = function(e) {
            var t;
            return t = {},
            f()(t, A.sm(e), {
                display: "none"
            }),
            f()(t, "border", "none"),
            f()(t, "cursor", "pointer"),
            f()(t, "fill", e.baseColor.fill.lighter),
            f()(t, "left", "4px"),
            f()(t, "outline", "none"),
            f()(t, "padding", "0"),
            f()(t, "position", "absolute"),
            f()(t, "transition", "transform .3s ".concat("cubic-bezier(.25,0,.6,1.4)", " 1s")),
            f()(t, ":hover", ce),
            f()(t, ":focus", {
                fill: e.baseColor.fill.dark
            }),
            f()(t, Object(v.b)("reduce"), {
                transitionDuration: "0.1ms !important"
            }),
            t
        }
          , pe = function(e, t) {
            var n, r, o = t.baseColor.fill;
            return n = o.lighter,
            {
                fill: r = o.normal,
                ":focus": {
                    fill: e ? r : n
                },
                ":hover": {
                    fill: e ? r : n
                }
            }
        }
          , fe = function() {
            return {
                opacity: .25,
                cursor: "not-allowed"
            }
        }
          , be = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return function() {
                return ne({
                    padding: 0,
                    outline: 0,
                    border: 0,
                    userSelect: "none",
                    cursor: "pointer",
                    "> svg": {
                        pointerEvents: "none"
                    },
                    ":active": {
                        borderStyle: e ? "solid" : "none"
                    }
                }, t ? de : null, {
                    "-webkit-user-select": "none"
                })
            }
        }
          , ge = !1;
        function he(e) {
            var t = e.callback
              , n = e.ms
              , r = void 0 === n ? 300 : n
              , o = e.callImmediately
              , a = void 0 === o || o
              , i = c.useState(!1)
              , l = s()(i, 2)
              , u = l[0]
              , d = l[1];
            Object(X.a)(t, u ? r : null);
            var m = c.useCallback((function(e) {
                "touchstart" === e.type && (ge = !0),
                ("mousedown" !== e.type || !ge && function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : navigator.userAgent;
                    return 0 === e.button && !(Object(ee.c)(t) && e.ctrlKey)
                }(e)) && (a && t(),
                d(!0))
            }
            ))
              , p = c.useCallback((function() {
                d(!1)
            }
            ));
            return Z((function() {
                if (u)
                    return document.addEventListener("mouseup", p),
                    function() {
                        return document.removeEventListener("mouseup", p)
                    }
            }
            ), [u]),
            {
                onMouseDown: m,
                onTouchStart: m,
                onTouchEnd: p
            }
        }
        function ve(e) {
            var t = e.pulseOnHover
              , n = void 0 === t || t
              , r = e.children
              , o = Object(g.useCx)();
            return c.createElement(b.K, {
                keyframes: {
                    pulseAnimation: ae
                }
            }, (function(e) {
                var t, a = e.pulseAnimation;
                return c.createElement("div", {
                    className: o([ie].concat(n ? (t = a,
                    function(e) {
                        return f()({}, Object(v.b)("no-preference"), {
                            "::before": ne({
                                background: "\n      radial-gradient(circle, ".concat(e.baseColor.border.darker, " 60%, transparent 70%)\n    "),
                                borderRadius: "50%",
                                content: '""',
                                display: "block",
                                zIndex: 0
                            }, se),
                            ":hover::before": {
                                animation: "".concat(t, " 2000ms infinite cubic-bezier(.1,.12,.25,1)")
                            }
                        })
                    }
                    ) : le))
                }, r)
            }
            ))
        }
        function xe(e) {
            var t = e.isSuppressed
              , n = e.onClick
              , r = Object(g.useCx)();
            return c.createElement("button", {
                className: "".concat(r([me].concat(t ? ue : []))).concat(t ? "" : " multi-vote-undo-revealed"),
                onClick: n
            }, c.createElement(Q, null))
        }
        function Ee(e) {
            var t = e.canUndo
              , n = void 0 !== t && t
              , r = e.isCircle
              , o = void 0 !== r && r
              , a = e.isFilled
              , s = void 0 !== a && a
              , i = e.isDisabled
              , l = void 0 !== i && i
              , u = e.isUndoSuppressed
              , d = void 0 !== u && u
              , m = e.scale
              , p = void 0 === m ? "L" : m
              , b = e.onClickAndHold
              , h = e.onUndo
              , x = Object(g.useCx)()
              , E = o ? function(e) {
                return function(t) {
                    var n = pe(e, t);
                    return ne({
                        alignItems: "center",
                        background: t.backgroundColor,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 2
                    }, se, {}, n, f()({}, Object(v.b)("no-preference"), {
                        transition: "fill ".concat(200, "ms ease")
                    }))
                }
            }(l) : function(e) {
                return function(t) {
                    return pe(e, t)
                }
            }(l)
              , y = he({
                callback: b,
                ms: 200
            })
              , O = s || l ? oe[p] : re[p];
            return b ? c.createElement(c.Fragment, null, c.createElement("button", R()({
                className: x([be(o, n), E])
            }, y), O), n && c.createElement(xe, {
                onClick: h,
                isSuppressed: d
            })) : c.createElement("div", {
                className: x([be(o), E].concat(I()(l ? [fe] : [])))
            }, O)
        }
        function ye(e) {
            var t = e.canUndo
              , n = e.isCircle
              , r = e.isFilled
              , o = e.isUndoSuppressed
              , a = e.disableReason
              , s = e.scale
              , i = e.onClickAndHold
              , l = e.onUndo
              , u = e.shouldHideClapsText
              , d = {
                isFilled: r,
                scale: s
            }
              , m = {
                onClickAndHold: i
            }
              , p = !!a;
            return p || u ? c.createElement(b.H, {
                darkTheme: !0,
                popoverRenderFn: function() {
                    return c.createElement(b.b, {
                        padding: "8px",
                        whiteSpace: "nowrap"
                    }, a || "Clap")
                },
                placement: "top",
                targetDistance: 15,
                hideOnClick: !0
            }, c.createElement(Ee, R()({
                isDisabled: p
            }, d, {
                onClickAndHold: p ? void 0 : i
            }))) : n ? c.createElement(ve, {
                pulseOnHover: !r
            }, c.createElement(Ee, R()({
                isCircle: !0,
                canUndo: t,
                isUndoSuppressed: o,
                onUndo: l
            }, d, m))) : c.createElement(Ee, R()({}, d, m))
        }
        var Oe = n("./src/components/post/multivote/MultiVoteCount.tsx")
          , we = {
            "0%": {
                transform: "matrix(0.97, 0, 0, 1, 0, 12)",
                opacity: "0"
            },
            "20%": {
                transform: "matrix(0.99, 0, 0, 1, 0, 2)",
                opacity: ".7"
            },
            "40%": {
                transform: "matrix(1, 0, 0, 1, 0, -1)",
                opacity: "1"
            },
            "70%": {
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                opacity: "1"
            },
            "100%": {
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                opacity: "1"
            }
        }
          , Ce = {
            "0%": {
                opacity: "1",
                transform: "translateY(0px)"
            },
            "10%": {
                opacity: "1",
                transform: "translateY(-3px)"
            },
            "100%": {
                opacity: "0",
                transform: "translateY(-50px)"
            }
        }
          , _e = {
            "0%": {
                transform: "scale(1)"
            },
            "15%": {
                transform: "scale(1.1)"
            },
            "100%": {
                transform: "scale(1)"
            }
        }
          , je = function(e) {
            return function(t) {
                return f()({
                    backgroundColor: t.baseColor.fill.normal,
                    bottom: "FAR" === e ? "85px" : "39px",
                    color: t.backgroundColor,
                    borderRadius: "50%",
                    fontSize: "15px",
                    height: "35px",
                    left: "FAR" === e ? "12px" : "-4px",
                    lineHeight: "35px",
                    position: "absolute",
                    textAlign: "center",
                    width: "35px"
                }, Object(v.b)("reduce"), {
                    animationDuration: "0.1ms !important"
                })
            }
        }
          , Se = function(e, t) {
            var n = e.current;
            n && (n.style.animation = t,
            n.scrollTop)
        };
        function ke(e) {
            var t = e.clappedAt
              , n = e.count
              , r = e.onFloatEnd
              , o = e.placement
              , a = Object(g.useCx)()
              , i = c.useState(t)
              , l = s()(i, 2)
              , u = l[0]
              , d = l[1]
              , m = t !== u
              , p = c.useRef({
                enter: "",
                exit: "",
                pop: ""
            })
              , f = c.useRef(null)
              , h = c.useCallback((function(e) {
                f.current = e,
                e && Se(f, "".concat(p.current.enter, " ").concat("400ms ease-out"))
            }
            ), []);
            function v(e) {
                var t = p.current;
                e.animationName === t.enter || e.animationName === t.pop ? Se(f, "".concat(t.exit, " ").concat("400ms ease-out 500ms")) : e.animationName === t.exit && r()
            }
            return m && (Se(f, ""),
            Se(f, "".concat(p.current.pop, " ").concat("500ms")),
            d(t)),
            c.createElement(b.K, {
                keyframes: {
                    enter: we,
                    exit: Ce,
                    pop: _e
                }
            }, (function(e) {
                return p.current = e,
                c.createElement("div", {
                    ref: h,
                    className: a([je(o)]),
                    onAnimationEnd: v
                }, "+".concat(n))
            }
            ))
        }
        var Pe = {
            "0%": {
                transform: "scale(1)"
            },
            "50%": {
                transform: "scale(1.1)"
            },
            "100%": {
                transform: "scale(1)"
            }
        };
        function Ie(e) {
            var t = e.isPopping
              , n = void 0 !== t && t
              , r = e.onPopEnd
              , o = e.children
              , a = Object(g.useCx)();
            return c.createElement(b.K, {
                keyframes: {
                    popAnimation: Pe
                }
            }, (function(e) {
                var t, s = e.popAnimation;
                return c.createElement("div", {
                    className: n ? a((t = s,
                    f()({
                        animation: "".concat(t, " 500ms 1")
                    }, Object(v.b)("reduce"), {
                        animationDuration: "0.1ms"
                    }))) : "",
                    onAnimationEnd: r
                }, o)
            }
            ))
        }
        var Te = n("./src/components/session/useViewer.tsx")
          , Re = n("./src/components/style/BaseThemeProvider.tsx")
          , Ae = n("./src/components/susi/SusiClickable.tsx")
          , Le = n("./src/framework/reporter/index.ts")
          , Me = n("./src/framework/source/index.ts")
          , Be = n("./src/store/actions/multiVote.ts")
          , De = n("./src/util/post/claps.ts")
          , Ne = n("./src/util/routes.ts");
        function Ue() {
            var e = o()(["\n  fragment MultiVote_post on Post {\n    id\n    clapCount\n    creator {\n      id\n      ...SusiClickable_user\n    }\n    viewerClapCount\n    isPublished\n    ...SusiClickable_post\n    collection {\n      id\n      slug\n    }\n    isLimitedState\n    ...MultiVoteCount_post\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return Ue = function() {
                return e
            }
            ,
            e
        }
        var Fe = {
            SUBTLE: "S",
            SUBTLE_PADDED: "M",
            OBVIOUS: "L",
            SUBTLE_FOR_DESKTOP: "L"
        }
          , He = function(e) {
            var t, n = e.post, r = e.buttonStyle, o = e.hasDialog, a = e.shouldShowResponsiveLabelText, i = void 0 !== a && a, l = e.shouldHideClapsText, u = void 0 !== l && l, p = Object(m.b)(), f = Object(Te.b)(), g = null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : "", h = Object(d.f)((function(e) {
                return e.multiVote.clapsPerPost
            }
            )), v = Object(d.e)(), x = c.useCallback((function(e) {
                return v(Object(Be.d)(e))
            }
            ), [v]), E = c.useCallback((function(e) {
                return v(Object(Be.c)(e))
            }
            ), [v]), y = c.useState(), O = s()(y, 2), w = O[0], C = O[1], _ = c.useState(0), j = s()(_, 2), S = j[0], P = j[1], I = c.useState([]), T = s()(I, 2), R = T[0], A = T[1], L = c.useState(!1), M = s()(L, 2), B = M[0], D = M[1], N = c.useState(!1), U = s()(N, 2), F = U[0], H = U[1], V = c.useState(0), z = s()(V, 2), G = z[0], q = z[1], W = Object(De.a)(h, n), $ = W.clapCount, Y = W.viewerClapCount, K = W.viewerHasClappedSinceFetch, Q = Object(Le.c)(), X = Object(Me.d)();
            function J(e) {
                A(R.filter((function(t) {
                    return t !== e
                }
                )))
            }
            function Z() {
                p(n, g, S),
                P(0),
                Q.event("post.clientUpvote", {
                    postId: n.id,
                    postIds: [n.id],
                    voteCount: S,
                    source: X
                })
            }
            c.useEffect((function() {
                if (w && clearTimeout(w),
                0 !== S) {
                    var e = setTimeout(Z, 500);
                    C(e)
                } else
                    C(void 0)
            }
            ), [S]),
            c.useEffect((function() {
                return function() {
                    E({
                        postId: n.id
                    })
                }
            }
            ), []);
            var ee, te = n.collection, ne = n.creator, re = n.id, oe = n.isPublished, ae = n.isLimitedState, se = (ee = !(!ne || ne.id !== g),
            ae ? "This feature is temporarily disabled." : oe ? ee ? "You cannot applaud your own story." : void 0 : "You cannot applaud a draft."), ie = "OBVIOUS" === r, le = "SUBTLE_FOR_DESKTOP" === r, ce = le || i, ue = ce || ie, de = !!(Y && Y > 0), me = !!($ && $ > 0), pe = Fe[r], fe = te && te.slug ? Object(Ne.mc)(te.slug, re) : Object(Ne.lc)(re), be = {
                marginRight: le ? void 0 : ie && !se ? "16px" : "5px"
            }, ge = {
                marginLeft: ie && !se ? "16px" : "8px"
            }, he = {
                marginLeft: le ? "7px" : void 0,
                marginTop: le ? "8px" : "5px"
            }, ve = {
                marginRight: "8px",
                marginTop: "2px"
            };
            return c.createElement(b.b, {
                display: "flex",
                alignItems: le ? "flex-start" : "center"
            }, c.createElement(b.b, {
                xs: ge,
                sm: ge,
                md: be,
                lg: be,
                xl: be,
                position: "relative"
            }, g || se ? c.createElement(c.Fragment, null, B && c.createElement(Re.b, null, c.createElement(ke, {
                count: Y,
                clappedAt: G,
                placement: ie ? "FAR" : "NEAR",
                onFloatEnd: function() {
                    D(!1)
                }
            })), c.createElement(Ie, {
                isPopping: F,
                onPopEnd: function() {
                    H(!1)
                }
            }, c.createElement(ye, {
                scale: pe,
                canUndo: de,
                isCircle: ie,
                isFilled: de,
                isUndoSuppressed: R.length > 0,
                disableReason: se,
                onClickAndHold: function() {
                    for (var e = 360 * Math.random(); -1 !== R.indexOf(e); )
                        e += 360;
                    A(R.concat(e)),
                    q(Date.now()),
                    D(!0),
                    H(!0),
                    function() {
                        if (Y && Y >= 50)
                            return;
                        x({
                            postId: n.id,
                            clapCount: $ + 1,
                            viewerClapCount: Y + 1,
                            viewerHasClappedSinceFetch: !0
                        }),
                        P(S + 1)
                    }()
                },
                onUndo: function() {
                    Y && (p(n, g, -Y),
                    x({
                        postId: n.id,
                        clapCount: $ - Y,
                        viewerClapCount: 0,
                        viewerHasClappedSinceFetch: !0
                    }),
                    P(0),
                    Q.event("post.clientUnvote", {
                        postId: n.id,
                        postIds: [n.id],
                        unvoteCount: Y,
                        source: X
                    }))
                },
                shouldHideClapsText: u
            })), R.map((function(e) {
                return c.createElement(k, {
                    key: e,
                    isLarge: ie,
                    offset: e,
                    onBurstEnd: J
                })
            }
            ))) : c.createElement(Ae.a, {
                operation: "register",
                post: n,
                user: n.creator,
                actionUrl: fe
            }, c.createElement(ye, {
                isCircle: ie,
                scale: pe
            }))), me && (!B || ce) && c.createElement(b.b, {
                xs: ve,
                sm: ve,
                md: he,
                lg: he,
                xl: he
            }, c.createElement(Oe.a, {
                shouldShowNetwork: ie,
                post: n,
                clapCount: $,
                showFullNumber: K,
                hasLabel: ue,
                hasDialog: o,
                shouldShowResponsiveLabelText: le || i,
                shouldHideClapsText: u
            })))
        }
          , Ve = l()(Ue(), Ae.d, Ae.f, Oe.b)
          , ze = function(e) {
            var t;
            return c.createElement(Me.b, {
                source: {
                    postId: null === (t = e.post) || void 0 === t ? void 0 : t.id
                },
                extendSource: !0
            }, c.createElement(He, e))
        }
    },
    "./src/components/post/multivote/MultiVoteCount.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return ne
        }
        )),
        n.d(t, "b", (function() {
            return re
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/pluralize/pluralize.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n.n(d)
          , p = n("./node_modules/@babel/runtime/helpers/extends.js")
          , f = n.n(p)
          , b = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")
          , g = n.n(b)
          , h = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")
          , v = n.n(h)
          , x = n("./node_modules/@babel/runtime/regenerator/index.js")
          , E = n.n(x)
          , y = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , O = n.n(y)
          , w = n("./node_modules/lodash/merge.js")
          , C = n.n(w)
          , _ = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , j = n("./src/components/user/UserAvatar.tsx")
          , S = n("./src/components/user/UserFollowButton.tsx")
          , k = n("./src/framework/design-system/components/index.ts")
          , P = n("./src/framework/design-system/type/index.ts")
          , I = n("./src/framework/design-system/util/type/toRule.ts");
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var R = m.a.createElement("g", {
            fillRule: "evenodd"
        }, m.a.createElement("path", {
            d: "M7.94 1h-.89L7.5 2.9zM10.09 1.33l-.84-.3-.23 1.95zM5.73 1.04l-.84.3L5.97 3zM5.63 11.57a3043.52 3043.52 0 0 0-1.6-1.6C2.32 8.26 1.25 7.5 1.75 7c.25-.25.62-.3.93 0 .45.46 1.54 1.65 1.54 1.65a.69.69 0 0 0 .34.2c.17.04.36-.06.5-.2.14-.13.06-.47-.06-.6L2.94 5.98c-.29-.29-.39-.78-.08-1.09.3-.29.64-.14.9.12l2.1 2.15a.33.33 0 0 0 .24.1.42.42 0 0 0 .26-.12c.13-.12.2-.36.07-.49L5 5.2c-.56-.56-.6-.95-.36-1.2.35-.35.82-.24 1.45.48l2.8 2.95-.59-1.46s-.37-.97 0-1.17c.37-.2.74.33 1 .72l1.37 2.62a3.29 3.29 0 0 1-.57 4.05c-1.22 1.22-3.18.69-4.48-.6z"
        }), m.a.createElement("path", {
            d: "M11.37 4.73c-.26-.4-.7-.4-.98-.19-.19.15-.16.48-.15.7l1.18 2.07c.91 1.49 1.23 2.7.19 4.1.31-.14.4-.27.58-.49.65-.8 1.05-2.47.39-3.88a3.35 3.35 0 0 0-.03-.05l-1.18-2.26z"
        }))
          , A = function(e) {
            return m.a.createElement("svg", T({
                width: 15,
                height: 15
            }, e), R)
        }
          , L = n("./src/util/routes.ts");
        function M() {
            var e = o()(["\n  query PostVotersDialogQuery($postId: ID!, $pagingOptions: PagingOptions) {\n    post(id: $postId) {\n      id\n      title\n      clapCount\n      voterCount\n      voters(paging: $pagingOptions) {\n        items {\n          user {\n            id\n            username\n            name\n            bio\n            ...UserAvatar_user\n            ...UserFollowButton_user\n          }\n          clapCount\n        }\n        pagingInfo {\n          next {\n            page\n          }\n        }\n      }\n      ...UserFollowButton_post\n    }\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return M = function() {
                return e
            }
            ,
            e
        }
        function B(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var D = function(e) {
            return {
                position: "relative",
                bottom: "12px",
                borderRadius: "10px",
                color: e.backgroundColor,
                fill: e.backgroundColor,
                background: e.accentColor.fill.normal,
                textAlign: "center"
            }
        }
          , N = function(e) {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(n), !0).forEach((function(t) {
                        s()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                left: "20px",
                padding: "0 6px"
            }, Object(I.a)((function(e) {
                return {
                    font: e.font.uiHeavy,
                    fontSize: 15,
                    lineHeight: 20
                }
            }
            ))(e))
        }
          , U = {
            left: "24px",
            padding: "0 2px"
        }
          , F = function(e) {
            var t = e.clapCount
              , n = [D, t ? N : U];
            return d.createElement(k.J, null, (function(e) {
                return d.createElement("span", {
                    className: e(n)
                }, t ? "+".concat(t) : d.createElement(A, null))
            }
            ))
        }
          , H = function(e) {
            var t = e.user
              , n = e.clapCount
              , r = e.post
              , o = t.username
              , a = t.name
              , s = t.bio
              , i = void 0 === s ? "" : s;
            return a && o ? d.createElement(k.b, {
                padding: "12px 0"
            }, d.createElement(k.b, {
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between"
            }, d.createElement(k.b, {
                display: "flex",
                alignItems: "flex-start"
            }, d.createElement(k.b, {
                marginRight: "20px"
            }, d.createElement(j.d, {
                user: t,
                scale: "S"
            }), d.createElement(F, {
                clapCount: n
            })), d.createElement(k.b, {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }, d.createElement(k.t, {
                href: Object(L.sc)(o)
            }, d.createElement(P.c, {
                scale: "XS"
            }, a, " ")), d.createElement(P.b, {
                scale: "S"
            }, i))), d.createElement(k.b, {
                marginLeft: "48px"
            }, d.createElement(S.c, {
                buttonSize: "SMALL",
                post: r,
                user: t
            })))) : null
        }
          , V = function(e) {
            var t = e.isVisible
              , n = e.hide
              , r = e.post
              , o = e.fetchMore
              , a = d.useState(!1)
              , s = O()(a, 2)
              , i = s[0]
              , l = s[1]
              , c = d.useCallback((function() {
                return E.a.async((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!o || i) {
                                e.next = 8;
                                break
                            }
                            return l(!0),
                            e.prev = 2,
                            e.next = 5,
                            E.a.awrap(o());
                        case 5:
                            return e.prev = 5,
                            l(!1),
                            e.finish(5);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), null, null, [[2, , 5, 8]])
            }
            ), [o, i, l]);
            if (!r)
                return null;
            var u = r.title
              , m = r.voters
              , p = r.clapCount
              , f = r.voterCount;
            return d.createElement(k.i, {
                isVisible: t,
                hide: n,
                withAnimation: !0
            }, d.createElement(k.b, {
                maxWidth: "550px",
                sm: {
                    paddingTop: "0"
                },
                paddingTop: "88px"
            }, d.createElement(k.b, {
                display: "flex",
                flexDirection: "column",
                marginBottom: "24px",
                textAlign: "center"
            }, d.createElement(P.c, {
                scale: "S"
            }, p, " claps from ", f, " ", 1 === f ? "person" : "people", ' for "', u, '"')), m && m.items.map((function(e) {
                var t = e.user
                  , n = e.clapCount;
                return t && d.createElement(H, {
                    user: t,
                    clapCount: n,
                    post: r,
                    key: t.id
                })
            }
            )), o && d.createElement(k.b, {
                display: "flex",
                flexDirection: "column",
                margin: "24px",
                alignItems: "center"
            }, d.createElement(k.c, {
                buttonStyle: "SOCIAL",
                size: "SMALL",
                onClick: c
            }, "Show more claps"))))
        };
        function z(e) {
            var t = e.postId
              , n = e.isVisible
              , r = v()(e, ["postId", "isVisible"]);
            return n ? d.createElement(_.b, {
                ssr: !1,
                query: G,
                variables: {
                    postId: t,
                    pagingOptions: {
                        limit: 10
                    }
                }
            }, (function(e) {
                var t, o = e.data, a = (o = void 0 === o ? {} : o).post, s = e.loading, i = e.error, l = e.fetchMore;
                if (s)
                    return d.createElement(k.u, null);
                if (i || !(null == a ? void 0 : a.voters))
                    return null;
                var c = a.voters.pagingInfo && a.voters.pagingInfo.next;
                if (c) {
                    var u = {
                        page: c.page
                    };
                    t = function() {
                        return l({
                            variables: {
                                pagingOptions: u
                            },
                            updateQuery: function(e, t) {
                                var n, r, o, a, s, i, l = t.fetchMoreResult;
                                return C()({}, l, {
                                    post: {
                                        voters: {
                                            items: [].concat(g()(null !== (n = null == e || null === (r = e.post) || void 0 === r || null === (o = r.voters) || void 0 === o ? void 0 : o.items) && void 0 !== n ? n : []), g()(null !== (a = null == l || null === (s = l.post) || void 0 === s || null === (i = s.voters) || void 0 === i ? void 0 : i.items) && void 0 !== a ? a : []))
                                        }
                                    }
                                })
                            }
                        })
                    }
                }
                return d.createElement(V, f()({
                    isVisible: n,
                    post: a,
                    loading: s,
                    fetchMore: t
                }, r))
            }
            )) : null
        }
        var G = l()(M(), j.b, S.b, S.a)
          , q = n("./src/util/numbers.ts");
        function W() {
            var e = o()(["\n  fragment PostVotersNetwork_post on Post {\n    voterCount\n    viewerClapCount\n    recommenders {\n      name\n    }\n  }\n"]);
            return W = function() {
                return e
            }
            ,
            e
        }
        var $ = function(e) {
            var t = e.post
              , n = e.showVoters
              , r = (t.viewerClapCount ? [{
                name: "you"
            }] : []).concat(t.recommenders || []).slice(0, 2).map((function(e) {
                return e.name
            }
            ));
            if (!r.length)
                return null;
            var o = (t.voterCount || 0) - r.length
              , a = r.join(o > 0 ? ", " : " and ")
              , s = "".concat(r.length > 1 ? "," : "", " and")
              , i = u()("other", o)
              , l = o > 0 ? "".concat(s, " ").concat(Object(q.g)(o), " ").concat(i) : "";
            return d.createElement(k.b, {
                sm: {
                    display: "none"
                }
            }, d.createElement(k.t, {
                onClick: n
            }, d.createElement(P.b, {
                scale: "S"
            }, "Applause from ".concat(a).concat(l))))
        }
          , Y = l()(W())
          , K = n("./src/components/responses/MobileHideSpan.tsx")
          , Q = n("./src/framework/design-system/components/util/VisibilityController.tsx")
          , X = n("./src/framework/design-system/type/Detail.tsx")
          , J = n("./src/framework/style/index.ts");
        function Z() {
            var e = o()(["\n  fragment MultiVoteCount_post on Post {\n    id\n    ...PostVotersNetwork_post\n  }\n  ", "\n"]);
            return Z = function() {
                return e
            }
            ,
            e
        }
        function ee(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function te(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ee(Object(n), !0).forEach((function(t) {
                    s()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ne(e) {
            var t = e.clapCount
              , n = e.hasLabel
              , r = void 0 !== n && n
              , o = e.showFullNumber
              , a = void 0 !== o && o
              , s = e.post
              , i = e.shouldShowNetwork
              , l = e.hasDialog
              , c = void 0 !== l && l
              , m = e.shouldShowResponsiveLabelText
              , p = void 0 !== m && m
              , f = e.shouldHideClapsText
              , b = void 0 !== f && f
              , g = s.id;
            if (!(t > 0))
                return null;
            var h = r && !b ? u()("clap", t) : ""
              , v = function(e) {
                var t = e.showVoters;
                return i && t ? d.createElement($, {
                    showVoters: t,
                    post: s
                }) : null
            }
              , x = a ? Object(q.g)(t) : Object(q.d)(t)
              , E = function(e) {
                var t = e.showVoters
                  , n = Object(J.useCx)();
                return d.createElement("div", {
                    className: n(te({}, p || r ? {
                        position: "relative",
                        top: "1px"
                    } : {}, {
                        "& button": {
                            textAlign: "left"
                        }
                    }))
                }, d.createElement(X.a, {
                    color: p || r || b ? "DARKER" : "LIGHTER",
                    scale: "M"
                }, p ? d.createElement(d.Fragment, null, t ? d.createElement(k.t, {
                    onClick: t
                }, x, d.createElement(K.a, null, " ", h)) : x, d.createElement(K.a, null, d.createElement(v, {
                    showVoters: t
                }))) : d.createElement(d.Fragment, null, t ? d.createElement(k.t, {
                    onClick: t
                }, x, " ", h) : x, d.createElement(v, {
                    showVoters: t
                }))))
            };
            return c && g ? d.createElement(Q.a, null, (function(e) {
                var t = e.isVisible
                  , n = e.show
                  , r = e.hide;
                return d.createElement(d.Fragment, null, d.createElement(E, {
                    showVoters: n
                }), d.createElement(z, {
                    isVisible: t,
                    hide: r,
                    postId: g
                }))
            }
            )) : d.createElement(E, null)
        }
        var re = l()(Z(), Y)
    },
    "./src/components/publisher/CardByline.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return j
        }
        )),
        n.d(t, "d", (function() {
            return S
        }
        )),
        n.d(t, "b", (function() {
            return k
        }
        )),
        n.d(t, "c", (function() {
            return P
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/components/collection/package/interim-components/ClickableWrapper.tsx")
          , u = n("./src/components/format/Date.tsx")
          , d = n("./src/components/format/ElapsedTimeDate.tsx")
          , m = n("./src/components/ui/Byline.tsx")
          , p = n("./src/framework/design-system/type/index.ts")
          , f = n("./src/framework/design-system/util/style/responsiveStyles.ts")
          , b = n("./src/framework/style/index.ts")
          , g = n("./src/svg/star-15px.svg")
          , h = n("./src/util/routes.ts");
        function v() {
            var e = o()(["\n  fragment CardByline_publisher on Publisher {\n    __typename\n    ... on User {\n      id\n      ...CardByline_user\n    }\n    ... on Collection {\n      id\n      ...CardByline_collection\n    }\n  }\n  ", "\n  ", "\n"]);
            return v = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = o()(["\n  fragment CardByline_collection on Collection {\n    __typename\n    id\n    name\n    ...collectionUrl_collection\n  }\n  ", "\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = o()(["\n  fragment CardByline_user on User {\n    __typename\n    id\n    name\n    username\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        var y = function(e) {
            return {
                fill: e.baseColor.fill.light,
                marginTop: "-2px",
                paddingLeft: "4px"
            }
        };
        function O(e, t) {
            return t && Object(f.b)(e) ? e[t] : e
        }
        var w = function(e) {
            var t = e.author
              , n = e.forceSize
              , r = e.scale
              , o = void 0 === r ? "M" : r;
            return (null == t ? void 0 : t.username) ? i.createElement(c.a, {
                href: Object(h.sc)(t.username)
            }, i.createElement(p.b, {
                color: "ACCENT",
                scale: O(o, n)
            }, t.name)) : null
        }
          , C = function(e) {
            var t = e.collection
              , n = e.forceSize
              , r = e.scale
              , o = void 0 === r ? "M" : r
              , a = Object(l.f)((function(e) {
                return e.navigation.currentLocation
            }
            ));
            if (!t)
                return null;
            var s = Object(h.I)(t, a);
            return i.createElement(c.a, {
                href: s
            }, i.createElement(p.b, {
                scale: O(o, n)
            }, "Published in ", i.createElement("b", null, t.name)))
        }
          , _ = function(e) {
            var t = e.datePrefix
              , n = void 0 === t ? "" : t
              , r = e.forceSize
              , o = e.isOneLine
              , a = e.withMidDot
              , s = void 0 === a || a
              , l = e.href
              , m = e.onClick
              , f = e.publishedAt
              , h = e.scale
              , v = void 0 === h ? "M" : h
              , x = e.showStar
              , E = void 0 !== x && x
              , w = e.timeColor
              , C = void 0 === w ? "LIGHTER" : w
              , _ = e.timeToRead
              , j = Object(b.useCx)();
            if (!f && !_)
                return null;
            var S = o ? d.a : u.a;
            return i.createElement(c.a, {
                href: l,
                onClick: m
            }, i.createElement(p.b, {
                color: C,
                scale: O(v, r)
            }, o && f && s && i.createElement("span", {
                className: j({
                    margin: "0 4px"
                })
            }, _ ? null : "·"), f ? i.createElement(i.Fragment, null, n, i.createElement(S, {
                timestamp: f
            })) : null, f && _ ? i.createElement("span", {
                className: j({
                    margin: "0 7px"
                })
            }, "·") : null, _ || null, E && i.createElement(g.a, {
                className: j(y)
            })))
        }
          , j = function(e) {
            var t = e.avatar
              , n = void 0 === t ? null : t
              , r = e.datePrefix
              , o = e.forceSize
              , a = e.hideAuthor
              , s = void 0 !== a && a
              , l = e.href
              , c = e.onClick
              , u = e.isOneLine
              , d = void 0 !== u && u
              , p = e.publisher
              , f = e.publishedAt
              , b = e.scale
              , g = e.showStar
              , h = void 0 !== g && g
              , v = e.timeColor
              , x = e.timeToRead
              , E = "Collection" === p.__typename ? i.createElement(C, {
                collection: p,
                forceSize: o,
                scale: b
            }) : s ? null : i.createElement(w, {
                author: p,
                forceSize: o,
                scale: b
            })
              , y = "Collection" === p.__typename || !s;
            return i.createElement(m.a, {
                avatar: s ? null : n,
                isOneLine: d,
                title: E,
                description: i.createElement(_, {
                    datePrefix: r,
                    publishedAt: f,
                    timeToRead: x,
                    withMidDot: y,
                    href: l,
                    onClick: c,
                    showStar: h,
                    forceSize: o,
                    scale: b,
                    timeColor: v,
                    isOneLine: d
                })
            })
        }
          , S = s()(E())
          , k = s()(x(), h.J)
          , P = s()(v(), S, k)
    },
    "./src/components/publisher/MetaHeader.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return ye
        }
        )),
        n.d(t, "e", (function() {
            return we
        }
        )),
        n.d(t, "f", (function() {
            return Ce
        }
        )),
        n.d(t, "b", (function() {
            return je
        }
        )),
        n.d(t, "d", (function() {
            return Se
        }
        )),
        n.d(t, "c", (function() {
            return ke
        }
        )),
        n.d(t, "g", (function() {
            return Pe
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/extends.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , l = n.n(i)
          , c = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , u = n.n(c)
          , d = n("./node_modules/lodash/merge.js")
          , m = n.n(d)
          , p = n("./node_modules/graphql-tag/src/index.js")
          , f = n.n(p)
          , b = n("./node_modules/react/index.js")
          , g = n("./node_modules/react-helmet-async/lib/index.module.js")
          , h = n("./node_modules/react-redux/es/index.js")
          , v = n("./src/components/collection/CollectionFollowButton.tsx")
          , x = n("./src/components/ui/image/index.ts")
          , E = n("./src/framework/design-system/components/index.ts")
          , y = n("./src/framework/design-system/type/useTypeRules.ts")
          , O = n("./src/framework/style/index.ts")
          , w = n("./src/schema-types/globalTypes.ts")
          , C = n("./src/util/miroImage.ts");
        function _() {
            var e = o()(["\n  fragment PublisherLogo_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n"]);
            return _ = function() {
                return e
            }
            ,
            e
        }
        function j(e) {
            var t = e.clamp
              , n = void 0 === t ? 1 : t
              , r = e.maxWidth
              , o = e.maxHeight
              , a = e.textScale
              , s = void 0 === a ? "S" : a
              , i = e.withTextColorSubtle
              , l = void 0 !== i && i
              , c = e.customNameColor
              , u = e.name
              , d = e.logo
              , m = e.nameTreatment
              , p = Object(O.useCx)()
              , f = Object(y.a)({
                name: "heading",
                scale: s,
                clamp: n
            })
              , g = function(e, t) {
                return function(n) {
                    return {
                        color: t || n.baseColor.text[e]
                    }
                }
            }(l ? "normal" : "dark", c);
            if (!d || !d.id || m === w.k.NAME_TREATMENT_TEXT)
                return b.createElement("span", {
                    className: p([f, g])
                }, u || "");
            var h = d.id
              , v = d.originalWidth || 100
              , _ = d.originalHeight || 100;
            if (r && v > r) {
                var j = v / r;
                v = Math.floor(v / j),
                _ = Math.floor(_ / j)
            }
            if (o && _ > o) {
                var S = _ / o;
                v = Math.floor(v / S),
                _ = Math.floor(_ / S)
            }
            return b.createElement(E.b, {
                width: "".concat(v, "px"),
                height: "".concat(_, "px")
            }, b.createElement(x.c, {
                miroId: h,
                alt: u || "Publication logo",
                width: v,
                height: _,
                strategy: C.a.Resample
            }))
        }
        var S, k, P, I, T, R, A, L = f()(_()), M = n("./src/components/collection/package/header/calculateLogoDimensions.ts"), B = n("./src/components/collection/theming/customStyleSheet.ts"), D = n("./src/components/metabar/Logo.tsx"), N = n("./src/components/metabar/MetabarActions.tsx"), U = n("./src/components/metabar/MetabarActionsLO.tsx"), F = n("./src/components/metabar/OpenInApp.tsx"), H = n("./src/components/metabar/constants.ts"), V = n("./src/components/navigation/Anchor.tsx"), z = n("./src/components/user/UserFollowButton.tsx"), G = function(e) {
            var t = e.publisher
              , n = e.buttonSize;
            if ("Collection" === t.__typename)
                return b.createElement(v.a, {
                    buttonSize: n,
                    collection: t
                });
            var r = "string" == typeof n ? n : "REGULAR";
            return b.createElement(z.c, {
                buttonSize: r,
                user: t
            })
        }, q = n("./src/components/publisher/auroraHooks.ts"), W = n("./src/routes/RoutingContext.tsx"), $ = n("./src/util/routes.ts"), Y = n("./src/components/publisher/theming/defaultStyleSheet.ts"), K = n("./src/components/session/useViewer.tsx"), Q = n("./src/framework/source/index.ts"), X = n("./src/metadata/Favicon.tsx"), J = n("./src/styles/zIndex.ts"), Z = n("./src/util/theme.ts");
        function ee() {
            var e = o()(["\n  fragment MetaHeader_post on Post {\n    id\n    ...MetabarActions_post\n    ...MetabarActionsLO_post\n  }\n  ", "\n  ", "\n"]);
            return ee = function() {
                return e
            }
            ,
            e
        }
        function te() {
            var e = o()(["\n  fragment MetaHeader_customStyleSheet on CustomStyleSheet {\n    id\n    ...publisherDefaultBackgroundTheme_customStyleSheet\n    global {\n      colorPalette {\n        primary {\n          colorPalette {\n            tintBackgroundSpectrum {\n              ...ThemeUtil_colorSpectrum\n            }\n          }\n        }\n      }\n    }\n    header {\n      postNameTreatment\n      nameTreatment\n      taglineTreatment\n      headerScale\n      verticalAlignment\n      horizontalAlignment\n      logoScale\n      backgroundColor {\n        ...getHexFromColorValue_colorValue\n        colorPalette {\n          ...collectionTintBackgroundTheme_colorPalette\n        }\n      }\n      backgroundColorDisplayMode\n      postBackgroundColor {\n        ...getHexFromColorValue_colorValue\n        colorPalette {\n          ...collectionTintBackgroundTheme_colorPalette\n        }\n      }\n      backgroundImage {\n        id\n        originalHeight\n        originalWidth\n      }\n      backgroundImageDisplayMode\n      backgroundImageVerticalAlignment\n      logoImage {\n        id\n        originalHeight\n        originalWidth\n      }\n      nameColor {\n        ...getHexFromColorValue_colorValue\n      }\n      taglineColor {\n        ...getHexFromColorValue_colorValue\n      }\n      secondaryBackgroundColor {\n        ...getHexFromColorValue_colorValue\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return te = function() {
                return e
            }
            ,
            e
        }
        function ne() {
            var e = o()(["\n  fragment MetaHeader_publisher on Publisher {\n    __typename\n    name\n    ...publisherDefaultBackgroundTheme_publisher\n    ... on Collection {\n      id\n      ...MetaHeader_collection\n    }\n    ... on User {\n      id\n      ...MetaHeader_user\n    }\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return ne = function() {
                return e
            }
            ,
            e
        }
        function re() {
            var e = o()(["\n  fragment MetaHeader_collection on Collection {\n    __typename\n    id\n    description\n    favicon {\n      id\n    }\n    logo {\n      ...PublisherLogo_image\n    }\n    shortDescription\n    slug\n    tagline\n    ...CollectionFollowButton_collection\n    ...MetabarActions_publisher\n    ...auroraHooks_publisher\n    ...publisherDefaultBackgroundTheme_publisher\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return re = function() {
                return e
            }
            ,
            e
        }
        function oe() {
            var e = o()(["\n  fragment MetaHeader_user on User {\n    __typename\n    username\n    bio\n    ...UserFollowButton_user\n    ...auroraHooks_publisher\n  }\n  ", "\n  ", "\n"]);
            return oe = function() {
                return e
            }
            ,
            e
        }
        function ae() {
            var e = o()(["\n  fragment useDefaultHighContrastStyleSheet_customStyleSheet on CustomStyleSheet {\n    ...customDefaultBackgroundTheme_customStyleSheet\n    global {\n      colorPalette {\n        primary {\n          colorPalette {\n            tintBackgroundSpectrum {\n              ...ThemeUtil_colorSpectrum\n            }\n          }\n        }\n      }\n    }\n    header {\n      backgroundColor {\n        colorPalette {\n          tintBackgroundSpectrum {\n            ...ThemeUtil_colorSpectrum\n          }\n        }\n      }\n      postBackgroundColor {\n        colorPalette {\n          tintBackgroundSpectrum {\n            ...ThemeUtil_colorSpectrum\n          }\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
            return ae = function() {
                return e
            }
            ,
            e
        }
        var se = {
            xs: "L",
            sm: "L",
            md: "L",
            lg: "XL",
            xl: "XL"
        }
          , ie = {
            xs: "S",
            sm: "S",
            md: "M",
            lg: "L",
            xl: "L"
        }
          , le = function(e, t) {
            return Object(C.d)({
                miroId: e.id,
                width: t || e.originalWidth || 2e3,
                strategy: C.a.Resample,
                freezeGifs: !1
            })
        }
          , ce = function(e, t) {
            var n, r, o, a, s, i, l, c, d, m, p, f = null !== (n = null == e || null === (r = e.header) || void 0 === r ? void 0 : r.backgroundImageDisplayMode) && void 0 !== n ? n : Y.b.backgroundImageDisplayMode, g = t ? Y.b.backgroundColorDisplayMode : null !== (o = null == e || null === (a = e.header) || void 0 === a ? void 0 : a.backgroundColorDisplayMode) && void 0 !== o ? o : Y.b.backgroundColorDisplayMode, h = t ? Object(B.o)(null == e || null === (s = e.header) || void 0 === s ? void 0 : s.postBackgroundColor) : null, v = h ? null : null == e || null === (i = e.header) || void 0 === i ? void 0 : i.backgroundImage, x = (l = v,
            c = b.useState(""),
            d = u()(c, 2),
            m = d[0],
            p = d[1],
            b.useEffect((function() {
                if (l) {
                    var e = new Image;
                    e.onload = function() {
                        return p((function(t) {
                            return t || e.src
                        }
                        ))
                    }
                    ,
                    e.src = le(l, 64);
                    var t = new Image;
                    t.onload = function() {
                        return p(t.src)
                    }
                    ,
                    t.src = le(l)
                }
            }
            ), [null == l ? void 0 : l.id]),
            m);
            return b.useMemo((function() {
                return function(t) {
                    var n, r, o = Object(B.o)(null == e || null === (n = e.header) || void 0 === n ? void 0 : n.backgroundColor), a = Object(B.o)(null == e || null === (r = e.header) || void 0 === r ? void 0 : r.secondaryBackgroundColor), s = {
                        display: "flex",
                        flexDirection: "column"
                    };
                    if (v || g !== w.d.COLOR_DISPLAY_MODE_SOLID || (s.backgroundColor = h || o || t.backgroundColor),
                    h)
                        return s;
                    var i = [];
                    if (v && g === w.d.COLOR_DISPLAY_MODE_SOLID ? i.push("linear-gradient(to bottom, ".concat(o || "transparent", ", ").concat(o || "transparent", ")")) : g === w.d.COLOR_DISPLAY_MODE_VERTICAL_GRADIENT && i.push("linear-gradient(to bottom, ".concat(o || "transparent", ", ").concat(a || "transparent", ")")),
                    v) {
                        var l, c;
                        i.push("url(".concat(x, ")"));
                        var u = pe[null !== (l = null == e || null === (c = e.header) || void 0 === c ? void 0 : c.backgroundImageVerticalAlignment) && void 0 !== l ? l : Y.b.backgroundImageVerticalAlignment];
                        switch (s.backgroundPosition = u,
                        f) {
                        case w.f.IMAGE_DISPLAY_MODE_FILL:
                            s.backgroundSize = "cover";
                            break;
                        case w.f.IMAGE_DISPLAY_MODE_TILE:
                            s.backgroundRepeatX = "repeat",
                            s.backgroundRepeatY = "repeat",
                            s.backgroundSize = "auto";
                            break;
                        case w.f.IMAGE_DISPLAY_MODE_FIT:
                            s.backgroundRepeatX = "no-repeat",
                            s.backgroundRepeatY = "no-repeat",
                            s.backgroundSize = "contain";
                            break;
                        case w.f.IMAGE_DISPLAY_MODE_AUTO:
                            s.backgroundRepeatX = "no-repeat",
                            s.backgroundRepeatY = "no-repeat",
                            s.backgroundSize = "auto"
                        }
                    }
                    return i.length > 0 && (s.backgroundImage = i.join(", ")),
                    s
                }
            }
            ), [e, x])
        }
          , ue = (S = {},
        l()(S, w.e.HEADER_SCALE_SMALL, "0px"),
        l()(S, w.e.HEADER_SCALE_MEDIUM, {
            xs: "235px",
            sm: "235px",
            md: "235px",
            lg: "295px",
            xl: "295px"
        }),
        l()(S, w.e.HEADER_SCALE_LARGE, {
            xs: "calc(100vh - 347px)",
            sm: "calc(100vh - 347px)",
            md: "calc(100vh - 189px)",
            lg: "calc(100vh - 189px)",
            xl: "calc(100vh - 189px)"
        }),
        S)
          , de = (k = {},
        l()(k, w.a.START, "flex-start"),
        l()(k, w.a.END, "flex-end"),
        l()(k, w.a.CENTER, "center"),
        k)
          , me = (P = {},
        l()(P, w.a.START, "left"),
        l()(P, w.a.END, "right"),
        l()(P, w.a.CENTER, "center"),
        P)
          , pe = (I = {},
        l()(I, w.a.START, "top"),
        l()(I, w.a.END, "bottom"),
        l()(I, w.a.CENTER, "center"),
        I)
          , fe = function(e, t) {
            var n, r, o = function(e) {
                var n = be(e.small, t)
                  , r = be(e.large, t);
                return {
                    width: {
                        xs: "".concat(Math.floor(n.width), "px"),
                        sm: "".concat(Math.floor(n.width), "px"),
                        md: "".concat(Math.floor(r.width), "px"),
                        lg: "".concat(Math.floor(r.width), "px"),
                        xl: "".concat(Math.floor(r.width), "px")
                    },
                    height: {
                        xs: "".concat(Math.floor(n.height), "px"),
                        sm: "".concat(Math.floor(n.height), "px"),
                        md: "".concat(Math.floor(r.height), "px"),
                        lg: "".concat(Math.floor(r.height), "px"),
                        xl: "".concat(Math.floor(r.height), "px")
                    }
                }
            }, a = (null !== (n = null == t ? void 0 : t.originalWidth) && void 0 !== n ? n : 0) / (null !== (r = null == t ? void 0 : t.originalHeight) && void 0 !== r ? r : 0);
            return a <= 2.5 ? e === w.e.HEADER_SCALE_SMALL ? o({
                small: {
                    width: 150,
                    height: 60
                },
                large: {
                    width: 250,
                    height: 100
                }
            }) : e === w.e.HEADER_SCALE_MEDIUM ? o({
                small: {
                    width: 220,
                    height: 88
                },
                large: {
                    width: 350,
                    height: 140
                }
            }) : o({
                small: {
                    width: 280,
                    height: 128
                },
                large: {
                    width: 450,
                    height: 180
                }
            }) : a < 5 ? e === w.e.HEADER_SCALE_SMALL ? o({
                small: {
                    width: 160,
                    height: 32
                },
                large: {
                    width: 240,
                    height: 48
                }
            }) : e === w.e.HEADER_SCALE_MEDIUM ? o({
                small: {
                    width: 280,
                    height: 56
                },
                large: {
                    width: 360,
                    height: 72
                }
            }) : o({
                small: {
                    width: 280,
                    height: 64
                },
                large: {
                    width: 520,
                    height: 104
                }
            }) : e === w.e.HEADER_SCALE_SMALL ? o({
                small: {
                    width: 280,
                    height: 24
                },
                large: {
                    width: 320,
                    height: 32
                }
            }) : e === w.e.HEADER_SCALE_MEDIUM ? o({
                small: {
                    width: 280,
                    height: 40
                },
                large: {
                    width: 600,
                    height: 60
                }
            }) : o({
                small: {
                    width: 280,
                    height: 60
                },
                large: {
                    width: 680,
                    height: 80
                }
            })
        }
          , be = function(e, t) {
            var n, r, o, a, s = Math.min(e.width / (null !== (n = null == t ? void 0 : t.originalWidth) && void 0 !== n ? n : 0), e.height / (null !== (r = null == t ? void 0 : t.originalHeight) && void 0 !== r ? r : 0));
            return {
                width: s * (null !== (o = null == t ? void 0 : t.originalWidth) && void 0 !== o ? o : 0),
                height: s * (null !== (a = null == t ? void 0 : t.originalHeight) && void 0 !== a ? a : 0)
            }
        }
          , ge = (T = {},
        l()(T, w.e.HEADER_SCALE_LARGE, "12px"),
        l()(T, w.e.HEADER_SCALE_MEDIUM, "8px"),
        l()(T, w.e.HEADER_SCALE_SMALL, "8px"),
        T)
          , he = (R = {},
        l()(R, w.e.HEADER_SCALE_LARGE, "48px"),
        l()(R, w.e.HEADER_SCALE_MEDIUM, "36px"),
        l()(R, w.e.HEADER_SCALE_SMALL, "24px"),
        R)
          , ve = (A = {},
        l()(A, w.e.HEADER_SCALE_LARGE, "24px"),
        l()(A, w.e.HEADER_SCALE_MEDIUM, "20px"),
        l()(A, w.e.HEADER_SCALE_SMALL, "16px"),
        A)
          , xe = function(e) {
            var t, n = e.logo, r = e.logoScale, o = e.name, a = e.nameTreatment, s = e.textScale, i = void 0 === s ? "S" : s, c = e.withTextColorSubtle, u = void 0 !== c && c, d = e.customNameColor, m = Object(O.useCx)(), p = Object(y.a)({
                name: "heading",
                scale: i
            }), f = function(e, t) {
                return function(n) {
                    return {
                        color: t || n.baseColor.text[e]
                    }
                }
            }(u ? "normal" : "dark", d), g = (t = {},
            l()(t, w.e.HEADER_SCALE_SMALL, {
                fontSize: {
                    xs: "40px",
                    sm: "40px",
                    md: "54px",
                    lg: "54px",
                    xl: "54px"
                },
                lineHeight: {
                    xs: "44px",
                    sm: "44px",
                    md: "56px",
                    lg: "56px",
                    xl: "56px"
                }
            }),
            l()(t, w.e.HEADER_SCALE_MEDIUM, {
                fontSize: {
                    xs: "60px",
                    sm: "60px",
                    md: "90px",
                    lg: "90px",
                    xl: "90px"
                },
                lineHeight: {
                    xs: "64px",
                    sm: "64px",
                    md: "96px",
                    lg: "96px",
                    xl: "96px"
                }
            }),
            l()(t, w.e.HEADER_SCALE_LARGE, {
                fontSize: {
                    xs: "80px",
                    sm: "80px",
                    md: "126px",
                    lg: "126px",
                    xl: "126px"
                },
                lineHeight: {
                    xs: "84px",
                    sm: "84px",
                    md: "136px",
                    lg: "136px",
                    xl: "136px"
                }
            }),
            t)[null != r ? r : Y.b.logoScale];
            if (!n || !n.id || a === w.k.NAME_TREATMENT_TEXT)
                return b.createElement("span", {
                    className: m([p, f, g])
                }, o || "");
            var h, v = n.id, E = be((h = null != r ? r : Y.b.logoScale) === w.e.HEADER_SCALE_SMALL ? {
                width: 240,
                height: 48
            } : h === w.e.HEADER_SCALE_MEDIUM ? {
                width: 360,
                height: 72
            } : h === w.e.HEADER_SCALE_LARGE ? {
                width: 520,
                height: 104
            } : {
                width: 0,
                height: 0
            }, n);
            return b.createElement(x.c, {
                miroId: v,
                alt: o || "Publication logo",
                width: 2 * E.width,
                height: 2 * E.height,
                strategy: C.a.Resample,
                rules: fe(null != r ? r : Y.b.logoScale, n)
            })
        }
          , Ee = function(e, t) {
            var n, r, o, a, s, i, l = null == e || null === (n = e.header) || void 0 === n || null === (r = n.backgroundColor) || void 0 === r || null === (o = r.colorPalette) || void 0 === o ? void 0 : o.tintBackgroundSpectrum, c = null == e || null === (a = e.header) || void 0 === a || null === (s = a.postBackgroundColor) || void 0 === s || null === (i = s.colorPalette) || void 0 === i ? void 0 : i.tintBackgroundSpectrum;
            return t && c || l
        }
          , ye = function(e) {
            var t, n, r, o, a, i, c, u, d, p, f, v, x, C, _, S, k, P, I, T = e.publisher, R = e.customStyleSheet, A = e.post, L = e.forceSmall, z = void 0 !== L && L, Z = e.headerLink, ee = void 0 !== Z && Z, te = z ? w.e.HEADER_SCALE_SMALL : null !== (t = null == R || null === (n = R.header) || void 0 === n ? void 0 : n.headerScale) && void 0 !== t ? t : Y.b.headerScale, ne = null !== (r = null == R || null === (o = R.header) || void 0 === o ? void 0 : o.verticalAlignment) && void 0 !== r ? r : Y.b.verticalAlignment, re = null !== (a = null == R || null === (i = R.header) || void 0 === i ? void 0 : i.horizontalAlignment) && void 0 !== a ? a : Y.b.horizontalAlignment, oe = Object(h.f)((function(e) {
                return e.config.authDomain
            }
            )), ae = Object(h.f)((function(e) {
                return e.config.isAmp
            }
            )), pe = Object(K.b)(), fe = Object(q.f)(T), be = function(e, t) {
                var n, r, o, a = !!(null == e || null === (n = e.header) || void 0 === n ? void 0 : n.backgroundColor) || t && !!(null == e || null === (r = e.header) || void 0 === r ? void 0 : r.postBackgroundColor), s = !!(null == e || null === (o = e.header) || void 0 === o ? void 0 : o.backgroundImage);
                return !a && !s
            }(R, z), Ee = Object(B.o)(null == R || null === (c = R.header) || void 0 === c ? void 0 : c.taglineColor), ye = Object(B.o)(null == R || null === (u = R.header) || void 0 === u ? void 0 : u.nameColor), we = null == R || null === (d = R.header) || void 0 === d ? void 0 : d.logoImage, Ce = null == R || null === (p = R.header) || void 0 === p ? void 0 : p.logoScale, _e = null !== (f = null == R || null === (v = R.header) || void 0 === v ? void 0 : v.nameTreatment) && void 0 !== f ? f : Y.b.nameTreatment, je = null !== (x = null == R || null === (C = R.header) || void 0 === C ? void 0 : C.taglineTreatment) && void 0 !== x ? x : Y.b.taglineTreatment, Se = null !== (_ = null == R || null === (S = R.header) || void 0 === S ? void 0 : S.postNameTreatment) && void 0 !== _ ? _ : Y.b.postNameTreatment, ke = "Collection" === T.__typename ? T.tagline : T.bio, Pe = !!ke && je === w.v.TAGLINE_TREATMENT_HEADER, Ie = (null == we ? void 0 : we.originalHeight) || 0, Te = (null == we ? void 0 : we.originalWidth) || 0, Re = Object(M.a)("xs", Ie, Te), Ae = ce(R, z), Le = b.useMemo((function() {
                return function(e, t, n, r) {
                    return function(o) {
                        return {
                            display: "flex",
                            flexGrow: "1",
                            flexDirection: "column",
                            overflow: "hidden",
                            transition: "min-height ".concat(600, "ms"),
                            minHeight: ue[e],
                            textAlign: me[t],
                            alignItems: de[t],
                            justifyContent: de[n],
                            paddingTop: {
                                xs: "24px",
                                sm: "24px",
                                md: "32px",
                                lg: "32px",
                                xl: "32px"
                            },
                            paddingBottom: {
                                xs: "24px",
                                sm: "24px",
                                md: "32px",
                                lg: "32px",
                                xl: "32px"
                            },
                            borderBottom: r ? void 0 : "1px solid ".concat(o.baseColor.border.normal)
                        }
                    }
                }(te, re, ne, !be)
            }
            ), [te, re, ne, Pe, be]), Me = (I = Ee) ? {
                color: I
            } : {}, Be = function(e) {
                var t = "Collection" === e.__typename ? e.slug : null
                  , n = Object(W.d)("ShowCollectionHome", t ? {
                    collectionSlug: t
                } : {
                    collectionSlug: ""
                });
                return "Collection" === e.__typename ? n : "User" === e.__typename && e.username ? Object($.sc)(e.username) : ""
            }(T), De = "".concat(function(e) {
                switch (e.__typename) {
                case "Collection":
                    return "Publication";
                case "User":
                    return "Author";
                default:
                    return "Publisher"
                }
            }(T), " Homepage"), Ne = re !== w.a.START || Pe, Ue = _e === w.k.NAME_TREATMENT_LOGO && !!we, Fe = Ne ? "marginBottom" : "marginRight", He = Ce || Y.b.logoScale, Ve = function(e) {
                return _e === w.k.NAME_TREATMENT_TEXT ? {
                    xs: l()({}, e, ge[He]),
                    sm: l()({}, e, ge[He]),
                    md: l()({}, e, he[He]),
                    lg: l()({}, e, he[He]),
                    xl: l()({}, e, he[He])
                } : l()({}, e, ve[He])
            }, ze = {
                clamp: 0,
                textScale: se,
                withTextColorSubtle: be,
                customNameColor: ye,
                nameTreatment: z ? Se : _e
            }, Ge = Object(y.a)({
                name: "subtitle",
                scale: ie,
                color: be ? "LIGHTER" : "DARKER"
            }), qe = void 0 !== we, We = "Collection" === T.__typename ? T.logo : null, $e = fe && qe ? we : We, Ye = de[re], Ke = b.useMemo((function() {
                return m()({}, Ve("marginTop"), Ve("marginBottom"))
            }
            ), []);
            return b.createElement(b.Fragment, null, "Collection" === T.__typename && b.createElement(X.a, {
                faviconImageId: null == T || null === (k = T.favicon) || void 0 === k ? void 0 : k.id
            }), (null == R || null === (P = R.header) || void 0 === P ? void 0 : P.backgroundImage) && b.createElement(g.a, null, b.createElement("link", {
                rel: "preload",
                href: le(R.header.backgroundImage),
                as: "image"
            }), b.createElement("link", {
                rel: "preload",
                href: le(R.header.backgroundImage, 64),
                as: "image"
            })), b.createElement(Oe, {
                publisher: T,
                customStyleSheet: R,
                isForcedSmall: z
            }, b.createElement(O.WithCx, null, (function(e) {
                return b.createElement("div", {
                    className: e(Ae)
                }, b.createElement(E.v, null, b.createElement(E.b, {
                    display: "flex",
                    alignItems: "center",
                    height: "".concat(H.a, "px"),
                    sm: {
                        display: "flex",
                        height: "".concat(H.c, "px")
                    }
                }, b.createElement(E.b, {
                    display: "flex",
                    alignItems: "center",
                    flexGrow: "1",
                    zIndex: J.a.metabar
                }, b.createElement(V.a, {
                    href: "https://".concat(oe, "/"),
                    "aria-label": "Homepage"
                }, b.createElement(D.a, {
                    dark: be
                })), te === w.e.HEADER_SCALE_SMALL && b.createElement(E.b, {
                    display: "flex",
                    alignItems: "center",
                    sm: {
                        display: "none"
                    }
                }, b.createElement(E.b, {
                    marginTop: "1px",
                    marginLeft: "16px",
                    marginRight: "16px"
                }, b.createElement(D.b, null)), b.createElement(V.a, {
                    href: Be,
                    "aria-label": De
                }, b.createElement(j, s()({}, ze, {
                    clamp: 1,
                    textScale: "M",
                    maxHeight: 35,
                    maxWidth: Re.maxWidth,
                    logo: $e,
                    name: T.name
                }))), !z && b.createElement(E.b, {
                    marginLeft: "16px"
                }, b.createElement(Q.b, {
                    source: {
                        susiEntry: "follow_header"
                    },
                    extendSource: !0
                }, b.createElement(G, {
                    buttonSize: "SMALL",
                    publisher: T
                })))), pe ? b.createElement(F.a, {
                    postId: A && A.id,
                    collectionSlug: "Collection" === T.__typename ? T.slug : void 0,
                    username: "Collection" === T.__typename ? void 0 : T.username
                }) : null), b.createElement(E.b, {
                    flexGrow: "0",
                    zIndex: J.a.metabar
                }, ae ? b.createElement(U.a, {
                    withoutConversionButton: !0,
                    post: A,
                    collectionSlug: "Collection" === T.__typename ? T.slug : void 0,
                    username: "Collection" === T.__typename ? void 0 : T.username
                }) : b.createElement(N.c, {
                    post: A,
                    publisher: T,
                    withoutConversionButton: !0,
                    setIsMetabarLocked: function() {},
                    collectionSlug: "Collection" === T.__typename ? T.slug : void 0,
                    username: "Collection" === T.__typename ? void 0 : T.username
                }))), te === w.e.HEADER_SCALE_SMALL && b.createElement(E.b, {
                    display: "none",
                    sm: {
                        display: "flex",
                        height: "60px",
                        alignItems: "center"
                    },
                    xs: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        height: "84px"
                    }
                }, b.createElement(V.a, {
                    href: Be,
                    "aria-label": De
                }, b.createElement(j, s()({}, ze, {
                    maxHeight: 35,
                    maxWidth: Re.maxWidth,
                    textScale: "M",
                    logo: $e,
                    name: T.name,
                    clamp: 1
                }))), !z && b.createElement(E.b, {
                    xs: {
                        marginTop: "4px",
                        marginLeft: "0"
                    },
                    sm: {
                        marginLeft: "16px"
                    }
                }, b.createElement(Q.b, {
                    source: {
                        susiEntry: "follow_header"
                    },
                    extendSource: !0
                }, b.createElement(G, {
                    buttonSize: "SMALL",
                    publisher: T
                })))), te !== w.e.HEADER_SCALE_SMALL && b.createElement("div", {
                    className: e(Le)
                }, b.createElement(E.b, {
                    display: "flex",
                    flexDirection: Ne ? "column" : "row",
                    flexWrap: "wrap",
                    alignItems: Ne ? Ye : "center"
                }, b.createElement(E.b, s()({
                    display: "flex",
                    flexDirection: Ne ? "column" : "row",
                    alignItems: Ne ? Ye : "center"
                }, Ve(Fe)), ee ? b.createElement(V.a, {
                    href: Be,
                    "aria-label": De
                }, b.createElement(xe, {
                    customNameColor: ye,
                    nameTreatment: _e,
                    logoScale: Ce,
                    logo: we,
                    name: T.name
                })) : b.createElement(xe, {
                    customNameColor: ye,
                    nameTreatment: _e,
                    logoScale: Ce,
                    logo: we,
                    name: T.name
                }), Pe && b.createElement(E.b, {
                    paddingTop: Ue ? "8px" : void 0,
                    maxWidth: "400px"
                }, b.createElement("span", {
                    className: e([Ge, Me])
                }, ke))), b.createElement(E.b, Ne ? {} : Ke, b.createElement(Q.b, {
                    source: {
                        susiEntry: "follow_header"
                    },
                    extendSource: !0
                }, b.createElement(G, {
                    buttonSize: {
                        xs: "SMALL",
                        sm: "SMALL",
                        md: "REGULAR",
                        lg: "REGULAR",
                        xl: "REGULAR"
                    },
                    publisher: T
                })))))))
            }
            ))))
        }
          , Oe = function(e) {
            var t, n, r, o, a = e.publisher, s = e.customStyleSheet, i = e.children, l = e.isForcedSmall, c = Object(O.useTheme)(), u = Object(q.d)("Collection" === a.__typename ? a : null), d = Ee(s, l), m = null == s || null === (t = s.global) || void 0 === t || null === (n = t.colorPalette) || void 0 === n || null === (r = n.primary) || void 0 === r || null === (o = r.colorPalette) || void 0 === o ? void 0 : o.tintBackgroundSpectrum, p = d ? Object(Z.x)({
                tint: d,
                accent: m
            }, c) : Object(Z.t)(a, c, u);
            return b.createElement(E.F, {
                theme: p
            }, i)
        }
          , we = function(e) {
            var t, n, r, o, a = Object(O.useTheme)(), s = Ee(e, !1), i = null == e || null === (t = e.global) || void 0 === t || null === (n = t.colorPalette) || void 0 === n || null === (r = n.primary) || void 0 === r || null === (o = r.colorPalette) || void 0 === o ? void 0 : o.tintBackgroundSpectrum;
            return s ? Object(Z.x)({
                tint: s,
                accent: i
            }, a) : Object(Z.i)(e, a, !0)
        }
          , Ce = f()(ae(), Z.k, Z.c)
          , _e = f()(oe(), z.b, q.a)
          , je = f()(re(), v.b, N.b, q.a, Z.v, L)
          , Se = f()(ne(), je, _e, Z.v)
          , ke = f()(te(), Z.c, B.p, Z.h, Z.u)
          , Pe = (f()(ee(), N.a, U.b),
        function(e) {
            var t, n = b.useState(!1), r = u()(n, 2), o = r[0], a = r[1];
            return b.useEffect((function() {
                var t;
                if (null == e || null === (t = e.header) || void 0 === t ? void 0 : t.headerScale) {
                    a(!0);
                    var n = setTimeout((function() {
                        a(!1)
                    }
                    ), 600);
                    return function() {
                        n && clearTimeout(n)
                    }
                }
            }
            ), [null == e || null === (t = e.header) || void 0 === t ? void 0 : t.headerScale]),
            o
        }
        )
    },
    "./src/components/publisher/theming/defaultStyleSheet.ts": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./src/schema-types/globalTypes.ts")
          , o = {
            horizontalAlignment: r.a.START,
            verticalAlignment: r.a.CENTER,
            headerScale: r.e.HEADER_SCALE_MEDIUM,
            logoScale: r.e.HEADER_SCALE_MEDIUM,
            backgroundColorDisplayMode: r.d.COLOR_DISPLAY_MODE_SOLID,
            backgroundImageDisplayMode: r.f.IMAGE_DISPLAY_MODE_FILL,
            backgroundImageVerticalAlignment: r.a.START,
            nameTreatment: r.k.NAME_TREATMENT_TEXT,
            postNameTreatment: r.k.NAME_TREATMENT_LOGO,
            taglineTreatment: r.v.TAGLINE_TREATMENT_SIDEBAR,
            backgroundColor: null,
            secondaryBackgroundColor: null,
            postBackgroundColor: null,
            taglineColor: null,
            backgroundImage: null,
            logoImage: null,
            nameColor: null
        }
          , a = {
            font1: {
                name: r.u.SERIF_1
            },
            font2: {
                name: r.u.SANS_SERIF_1
            },
            font3: {
                name: r.u.SERIF_1
            }
        }
    },
    "./src/components/read-next/ReadNext.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return B
        }
        )),
        n.d(t, "b", (function() {
            return D
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , u = n("./node_modules/graphql-tag/src/index.js")
          , d = n.n(u)
          , m = n("./node_modules/react/index.js")
          , p = n("./node_modules/react-redux/es/index.js")
          , f = n("./src/components/ui/image/index.ts")
          , b = n("./src/framework/design-system/components/index.ts")
          , g = n("./src/framework/design-system/type/Detail.tsx")
          , h = n("./src/framework/design-system/type/Overline.tsx")
          , v = n("./src/framework/style/index.ts")
          , x = n("./src/util/miroImage.ts")
          , E = n("./src/util/routes.ts");
        function y() {
            var e = o()(["\n  fragment ReadNextPostCard_post on Post {\n    id\n    title\n    mediumUrl\n    primaryTopic {\n      name\n      slug\n    }\n    collection {\n      id\n      name\n    }\n    previewImage {\n      id\n      alt\n      focusPercentX\n      focusPercentY\n    }\n  }\n"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        var O = d()(y())
          , w = Object(p.c)((function(e) {
            return {
                mediumOwnedAndOperatedCollectionIds: e.config.mediumOwnedAndOperatedCollectionIds,
                isCustomDomain: e.client.isCustomDomain
            }
        }
        ))((function(e) {
            var t = e.isCustomDomain
              , n = e.mediumOwnedAndOperatedCollectionIds
              , r = e.post
              , o = r && r.previewImage || {}
              , a = o.focusPercentX
              , s = o.focusPercentY
              , i = o.id
              , l = o.alt
              , c = r.collection || {}
              , u = c.name
              , d = c.id
              , p = r.primaryTopic && r.primaryTopic.name
              , y = d && (n.includes(d) ? u : p) || ""
              , O = r && r.title || ""
              , w = Object(E.Db)(r, t)
              , C = Object(v.useCx)()
              , _ = m.createElement(b.b, {
                marginBottom: "4px"
            }, m.createElement(h.a, {
                tag: "span"
            }, m.createElement(g.a, {
                scale: "S",
                color: "DARKER"
            }, m.createElement("div", {
                className: C({
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                })
            }, y))));
            return m.createElement(b.f, {
                href: w
            }, m.createElement(b.b, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "20px"
            }, _, m.createElement(b.b, {
                display: "flex",
                flexDirection: "row"
            }, m.createElement(f.c, {
                miroId: i || "",
                alt: l || "",
                height: 50,
                width: 50,
                freezeGifs: !0,
                strategy: x.a.Crop,
                rules: {
                    marginRight: "9px",
                    marginTop: "4px"
                },
                focusPercentX: a || 50,
                focusPercentY: s || 50
            }), m.createElement(b.b, {
                display: "flex",
                flexDirection: "column",
                width: "130px"
            }, m.createElement(g.a, {
                scale: "S",
                color: "DARKER",
                clamp: 3
            }, O)))))
        }
        ))
          , C = n("./src/components/session/WithViewer.tsx")
          , _ = n("./src/framework/design-system/components/buttons/CloseButton.tsx")
          , j = n("./src/framework/design-system/type/index.ts")
          , S = n("./src/framework/reporter/index.ts")
          , k = n("./src/framework/source/index.ts")
          , P = n("./src/screens/helpers/visits.ts")
          , I = n("./src/util/constants.ts");
        function T() {
            var e = o()(["\n  query ReadNextQuery($postId: ID!) {\n    post(id: $postId) {\n      id\n      readNext {\n        ... on ReadNextItem {\n          reason\n          post {\n            ... on Post {\n              ...ReadNextPostCard_post\n            }\n          }\n        }\n      }\n    }\n  }\n  ", "\n"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function A(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    s()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var L = {
            display: "none"
        }
          , M = {
            ":last-of-type": {
                xs: L,
                sm: L,
                md: L,
                lg: L,
                xl: {
                    display: "block"
                }
            }
        }
          , B = function(e) {
            var t = e.isVisible
              , n = void 0 === t || t
              , r = e.postId
              , o = m.useState(!1)
              , a = l()(o, 2)
              , s = a[0]
              , i = a[1]
              , u = Object(c.e)(C.a).data
              , d = (u = void 0 === u ? {
                viewer: void 0
            } : u).viewer
              , p = Object(c.c)(N)
              , f = l()(p, 2)
              , g = f[0]
              , h = f[1]
              , x = h.called
              , E = h.loading
              , y = h.error
              , O = h.data
              , I = (O = void 0 === O ? {
                post: void 0
            } : O).post
              , T = d && D(d) && !(Object(P.i)() || s)
              , R = Object(S.c)()
              , L = Object(v.useCx)()
              , B = Object(k.e)()
              , U = I && I.readNext;
            return m.useEffect((function() {
                E || !y || U && U.length || R.event("readNextError", {
                    post: I,
                    postId: r,
                    error: y,
                    readNextLength: U && U.length || 0
                })
            }
            ), [E]),
            m.useEffect((function() {
                n && U && (R.event("readNext.viewed", {
                    position: "sidebar"
                }),
                U.slice(0, 4).map((function(e, t) {
                    var n = e.post
                      , r = e.reason;
                    return R.event("post.clientPresented", {
                        source: Object(k.c)(A({}, B, {
                            index: t,
                            postFeedReason: r || void 0
                        })),
                        location: "post/".concat(n && n.id)
                    }),
                    !0
                }
                )))
            }
            ), [n, U]),
            !x && T && g({
                variables: {
                    postId: r || ""
                }
            }),
            x && !E && !y && I && U && U.length && T ? m.createElement(k.b, {
                source: {
                    name: "read_next",
                    sectionType: k.a.READ_NEXT_SIDEBAR
                },
                extendSource: !0
            }, m.createElement(b.b, {
                width: "188px"
            }, m.createElement(b.b, {
                md: {
                    display: "none"
                },
                lg: {
                    width: "780px",
                    margin: "0 24px"
                },
                position: "relative",
                backgroundColor: "BACKGROUND",
                paddingBottom: "24px",
                paddingTop: "24px",
                width: "100%"
            }, m.createElement(b.b, {
                position: "absolute",
                right: "0",
                top: "-4px"
            }, m.createElement(_.a, {
                onClick: function() {
                    Object(P.a)(),
                    i(!0)
                },
                size: "SMALL",
                isPositionAbsolute: !1
            })), m.createElement(b.b, {
                width: "200px"
            }, m.createElement(j.d, {
                scale: "XS"
            }, "Your journey starts here.")), m.createElement(b.b, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }, I.readNext.slice(0, 4).map((function(e, t) {
                var n = e.post;
                return m.createElement("div", {
                    className: L(M),
                    key: t
                }, m.createElement(w, {
                    key: t,
                    post: n
                }))
            }
            )))))) : null
        };
        function D(e) {
            return e && e.createdAt + I.a > Date.now()
        }
        var N = d()(T(), O)
    },
    "./src/components/responses/MobileHideSpan.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        )),
        n.d(t, "b", (function() {
            return u
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/extends.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/framework/design-system/components/index.ts")
          , c = function(e) {
            var t = e.children
              , n = s()(e, ["children"]);
            return i.createElement(l.b, o()({
                xs: {
                    display: "none"
                },
                sm: {
                    display: "none"
                },
                md: {
                    display: "none"
                },
                lg: {
                    display: "inline-block"
                },
                xl: {
                    display: "inline-block"
                },
                tag: "span"
            }, n), t)
        }
          , u = function(e) {
            var t = e.children
              , n = s()(e, ["children"]);
            return i.createElement(l.b, o()({
                xs: {
                    display: "inline-block"
                },
                sm: {
                    display: "inline-block"
                },
                md: {
                    display: "inline-block"
                },
                lg: {
                    display: "none"
                },
                xl: {
                    display: "none"
                },
                tag: "span"
            }, n), t)
        }
    },
    "./src/components/responses/ReadOrEditSimpleResponseContext.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = r.createContext({
            isEditing: !1,
            setIsEditing: function() {
                return null
            },
            setEditingQuote: function() {
                return null
            }
        })
    },
    "./src/components/responses/ResponseQuote.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return h
        }
        )),
        n.d(t, "b", (function() {
            return v
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n("./src/components/post/paragraph/TextParagraph.tsx")
          , d = n("./src/framework/style/index.ts")
          , m = n("./src/schema-types/globalTypes.ts")
          , p = n("./src/util/quote.ts");
        function f() {
            var e = o()(["\n  fragment ResponseQuote_post on Post {\n    inResponseToMediaResource {\n      href\n      mediumQuote {\n        quoteId\n        startOffset\n        endOffset\n        paragraphs {\n          ...TextParagraph_paragraph\n        }\n        ...buildQuotePreviewParagraph_quote\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
            return f = function() {
                return e
            }
            ,
            e
        }
        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function(t) {
                    s()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var h = function(e) {
            var t = e.inResponseToMediaResource
              , n = Object(d.useCx)()
              , r = null == t ? void 0 : t.mediumQuote;
            if (!r)
                return null;
            var o = Object(p.a)(r);
            if (!o || !o.type)
                return null;
            var a = o.type;
            return a === m.l.IMG || a === m.l.IFRAME || a === m.l.COVER_TITLE || a === m.l.HR || a === m.l.MIXTAPE_EMBED || a === m.l.SECTION_CAPTION ? null : c.createElement("div", {
                onClick: function() {
                    var e = null == t ? void 0 : t.href;
                    if (e) {
                        var n = null == e ? void 0 : e.split("#")[1];
                        if (n) {
                            var r = n.split("--")[0];
                            if (r) {
                                var o = document.getElementById(r);
                                if (o) {
                                    var a = (null == o ? void 0 : o.offsetTop) - 100;
                                    a && window.scrollTo({
                                        top: a,
                                        behavior: "smooth"
                                    })
                                }
                            }
                        }
                    }
                },
                className: n({
                    boxShadow: "0px 1px 4px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "3px",
                    marginTop: "22px",
                    marginBottom: "3px",
                    padding: "20px 16px",
                    cursor: "pointer"
                })
            }, c.createElement(u.g, {
                paragraph: g({}, o, {
                    name: "embedded-quote-".concat(r.quoteId, "-").concat(o.name)
                }),
                paragraphStyle: a,
                spaceTop: 4,
                richTextStyle: "STREAM"
            }))
        }
          , v = l()(f(), p.c, u.d)
    },
    "./src/components/responses/ResponsesContext.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = r.createContext({
            setIsSavingResponse: function() {
                return null
            },
            editingResponsesAtIndices: [],
            setEditingResponsesAtIndices: function() {
                return null
            },
            setInResponseToQuote: function() {
                return null
            }
        })
    },
    "./src/components/responses/ResponsesIconButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return w
        }
        )),
        n.d(t, "b", (function() {
            return C
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n.n(i)
          , c = n("./src/components/responses/MobileHideSpan.tsx")
          , u = n("./src/framework/design-system/components/index.ts")
          , d = n("./src/framework/design-system/type/index.ts")
          , m = n("./src/framework/reporter/index.ts")
          , p = n("./src/framework/source/index.ts")
          , f = n("./src/framework/style/index.ts")
          , b = n("./src/svg/response-25px.svg");
        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var h = l.a.createElement("path", {
            clipRule: "evenodd",
            d: "M24.28 25.5l.32-.29c2.11-1.94 3.4-4.61 3.4-7.56C28 11.83 22.92 7 16.5 7S5 11.83 5 17.65s5.08 10.66 11.5 10.66c1.22 0 2.4-.18 3.5-.5l.5-.15.41.33a8.86 8.86 0 0 0 4.68 2.1 7.34 7.34 0 0 1-1.3-4.15v-.43zm1 .45c0 1.5.46 2.62 1.69 4.44.22.32.01.75-.38.75a9.69 9.69 0 0 1-6.31-2.37c-1.2.35-2.46.54-3.78.54C9.6 29.3 4 24.09 4 17.65 4 11.22 9.6 6 16.5 6S29 11.22 29 17.65c0 3.25-1.42 6.18-3.72 8.3z"
        })
          , v = function(e) {
            return l.a.createElement("svg", g({
                width: 33,
                height: 33,
                viewBox: "0 0 33 33",
                fill: "none"
            }, e), h)
        }
          , x = n("./src/util/hooks/useIsEligibleToViewNewResponses.tsx");
        function E() {
            var e = o()(["\n  fragment ResponsesIconButton_post on Post {\n    allowResponses\n    postResponses {\n      count\n    }\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        var y = function(e) {
            return {
                fill: e.baseColor.fill.normal
            }
        }
          , O = function(e) {
            return {
                fill: e.baseColor.fill.normal,
                opacity: .4,
                cursor: "not-allowed"
            }
        }
          , w = function(e) {
            var t = e.allowResponses
              , n = e.responsesCount
              , r = e.location
              , o = e.setIsResponsesSidebarVisible
              , a = e.postId
              , s = e.isLimitedState
              , l = e.shouldHideResponsesText
              , g = void 0 !== l && l
              , h = Object(f.useCx)()
              , E = Object(m.c)()
              , w = Object(p.d)()
              , C = Object(x.a)();
            if (!C || !t)
                return null;
            var _ = "sidebar" === r
              , j = "preview" === r
              , S = "response" === r
              , k = _ || j ? i.createElement(b.a, {
                className: h(y),
                "aria-label": "responses"
            }) : S ? i.createElement(u.b, {
                position: "relative",
                top: "2px"
            }, i.createElement(b.a, {
                "aria-label": "responses"
            })) : i.createElement(i.Fragment, null, i.createElement(c.a, {
                marginLeft: "-1px"
            }, i.createElement(v, {
                className: h(y),
                "aria-label": "responses"
            })), i.createElement(c.b, {
                marginLeft: "-4px"
            }, i.createElement(b.a, {
                className: h(y),
                "aria-label": "responses"
            })))
              , P = i.createElement(u.H, {
                darkTheme: !0,
                popoverRenderFn: function() {
                    return i.createElement(u.b, {
                        padding: "8px",
                        whiteSpace: "nowrap"
                    }, "This feature is temporarily disabled.")
                },
                placement: "top",
                targetDistance: 15
            }, _ || j ? i.createElement(b.a, {
                className: h(O),
                "aria-label": "responses"
            }) : S ? i.createElement(u.b, {
                position: "relative",
                top: "2px"
            }, i.createElement(b.a, {
                className: h(O),
                "aria-label": "responses"
            })) : i.createElement(i.Fragment, null, i.createElement(c.a, {
                marginLeft: "-1px"
            }, i.createElement(v, {
                className: h(O),
                "aria-label": "responses"
            })), i.createElement(c.b, {
                marginLeft: "-4px"
            }, i.createElement(b.a, {
                className: h(O),
                "aria-label": "responses"
            }))))
              , I = {
                paddingLeft: _ ? "6px" : S ? "3px" : "7px",
                top: _ ? void 0 : S ? "3.5px" : j ? "1px" : "3px"
            }
              , T = {
                paddingLeft: _ ? "6px" : "3px",
                top: S ? "3.5px" : j ? "-1px" : "3px"
            };
            return i.createElement("button", {
                onClick: C && !s ? function() {
                    o(!0),
                    E.event("responses.viewAllClicked", {
                        postId: a,
                        source: w
                    })
                }
                : void 0,
                className: h({
                    cursor: "pointer",
                    border: 0,
                    padding: 0
                })
            }, i.createElement(u.b, {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingRight: n ? "9px" : "4px"
            }, s ? P : g ? i.createElement(u.H, {
                darkTheme: !0,
                popoverRenderFn: function() {
                    return i.createElement(d.b, {
                        scale: "S"
                    }, i.createElement(u.b, {
                        padding: "8px",
                        whiteSpace: "nowrap"
                    }, i.createElement("span", {
                        className: h({
                            color: "white"
                        })
                    }, "Responses")))
                },
                placement: "top",
                targetDistance: 15
            }, k) : k, i.createElement(u.b, {
                position: "relative",
                xs: T,
                sm: T,
                md: T,
                lg: I,
                xl: I
            }, !!n && i.createElement(d.b, {
                scale: "M",
                color: _ ? "LIGHTER" : "DARKER"
            }, n || null, " ", !_ && !S && !s && !g && i.createElement(c.a, null, "response", 1 === n ? "" : "s")))))
        }
          , C = s()(E())
    },
    "./src/components/responses/ResponsesSidebar.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return lt
        }
        )),
        n.d(t, "a", (function() {
            return mt
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , u = n("./node_modules/react/index.js")
          , d = n("./src/components/responses/ReadOrEditSimpleResponseContext.tsx")
          , m = n("./src/components/responses/ResponsesContext.tsx")
          , p = n("./src/components/editor/editorHelpers.tsx")
          , f = n("./src/components/post/UgcContext.tsx")
          , b = n("./src/components/post/multivote/MultiVote.tsx")
          , g = n("./src/components/format/TimeAgo.tsx")
          , h = n("./src/framework/style/index.ts")
          , v = function() {
            var e = Object(h.useCx)();
            return u.createElement("div", {
                className: e((function(e) {
                    return {
                        color: "white",
                        backgroundColor: e.brandColor.sage.dark,
                        borderRadius: "2px",
                        fontSize: "11px",
                        padding: "0px 6px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "8px"
                    }
                }
                ))
            }, "AUTHOR")
        }
          , x = n("./src/components/session/useFlag.tsx")
          , E = n("./src/components/session/useViewer.tsx")
          , y = n("./src/components/user/UserAvatar.tsx")
          , O = n("./src/framework/design-system/components/index.ts")
          , w = n("./src/framework/design-system/type/index.ts")
          , C = n("./src/framework/source/index.ts")
          , _ = n("./src/svg/overflow-dots-filled-25px.svg")
          , j = n("./src/util/routes.ts")
          , S = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , k = n.n(S)
          , P = n("./node_modules/graphql-tag/src/index.js")
          , I = n.n(P)
          , T = n("./node_modules/react-redux/es/index.js")
          , R = n("./src/components/responses/ResponsesSidebar_PostResponsesQuery.tsx");
        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function L(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var M = function(e, t) {
            var n, r = null == e || null === (n = e.post) || void 0 === n ? void 0 : n.postResponses;
            if (!e || !(null == r ? void 0 : r.responsesConnection) || null === (null == r ? void 0 : r.count))
                return null;
            var o = r.responsesConnection.stream
              , a = o.filter((function(e) {
                var n;
                return (null === (n = e.itemType.post) || void 0 === n ? void 0 : n.id) !== t
            }
            ));
            return a.length === o.length ? null : Object.assign({}, e, {
                post: L({}, e.post, {
                    postResponses: L({}, r, {
                        count: r.count - 1,
                        responsesConnection: L({}, r.responsesConnection, {
                            stream: a
                        })
                    })
                })
            })
        }
          , B = n("./src/components/ui/PopoverMenu.tsx")
          , D = n("./src/framework/reporter/index.ts")
          , N = n("./src/store/actions/navigation.ts");
        function U() {
            var e = k()(["\n  mutation DeleteResponseMutation($responseId: ID!) {\n    deletePost(targetPostId: $responseId)\n  }\n"]);
            return U = function() {
                return e
            }
            ,
            e
        }
        var F, H = I()(U()), V = function(e) {
            var t, n = e.response, r = e.parentPostId, o = e.hidePopoverMenu, a = u.useState(!1), i = s()(a, 2), l = i[0], d = i[1], m = Object(D.c)(), p = Object(C.d)(), f = Object(T.e)(), b = Object(E.b)(), g = Object(c.d)(H, {
                variables: {
                    responseId: n.id
                },
                update: function(e) {
                    var t = {
                        postId: r,
                        postResponsesPaging: {
                            limit: 10
                        }
                    }
                      , a = e.readQuery({
                        query: R.a,
                        variables: t
                    })
                      , s = M(a, n.id);
                    null !== s && (e.writeQuery({
                        query: R.a,
                        data: s,
                        variables: t
                    }),
                    m.event("responses.removed", {
                        postId: n.id,
                        source: p
                    }),
                    f(Object(N.m)({
                        message: "Successfully deleted response."
                    })),
                    o())
                }
            }), h = s()(g, 1)[0];
            return (null == b ? void 0 : b.id) && (null == b ? void 0 : b.id) === (null === (t = n.creator) || void 0 === t ? void 0 : t.id) ? u.createElement(u.Fragment, null, u.createElement(B.b, null, u.createElement(O.t, {
                onClick: function() {
                    return d(!0)
                }
            }, "Delete")), l && u.createElement(O.i, {
                isVisible: l,
                hide: function() {
                    return d(!1)
                },
                withCloseButton: !1,
                noPortal: !0,
                padding: 50
            }, u.createElement(O.b, {
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }, u.createElement(w.c, {
                scale: "M"
            }, "Delete"), u.createElement(O.b, {
                display: "flex",
                width: "100%",
                paddingRight: "5px",
                marginTop: "10px",
                marginBottom: "40px",
                textAlign: "center"
            }, u.createElement(w.b, {
                scale: "M",
                color: "DARKER"
            }, "Deleted responses are gone forever.", u.createElement("br", null), "Are you sure?")), u.createElement(O.b, {
                display: "flex",
                marginBottom: "20px"
            }, u.createElement(O.t, {
                onClick: function() {
                    return d(!1)
                }
            }, u.createElement(w.b, {
                scale: "M",
                color: "DARKER"
            }, "Cancel")), u.createElement(O.b, {
                marginLeft: "25px"
            }, u.createElement(O.c, {
                buttonStyle: "ERROR",
                onClick: h,
                "data-test-id": "close-discussion-button"
            }, "Delete Response")))))) : null
        };
        !function(e) {
            e.SIMPLE = "SIMPLE",
            e.STORY = "STORY"
        }(F || (F = {}));
        var z = n("./src/framework/style/useCx.ts")
          , G = n("./src/components/user/UserBlockConfirmDialog.tsx");
        function q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? q(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function $() {
            var e = k()(["\n  mutation UserBlockMutation($targetUserId: ID!, $userId: ID!) {\n    blockUser(userId: $userId, targetUserId: $targetUserId) {\n      id\n      isBlocking\n    }\n  }\n"]);
            return $ = function() {
                return e
            }
            ,
            e
        }
        var Y = I()($())
          , K = function(e) {
            var t, n, r = e.response, o = e.parentPost, a = e.hidePopoverMenu, i = Object(E.b)(), l = Object(D.c)(), d = Object(C.d)(), m = Object(T.e)(), p = u.useState(!1), f = s()(p, 2), b = f[0], g = f[1], h = function() {
                return g(!1)
            }, v = null == r || null === (t = r.creator) || void 0 === t ? void 0 : t.id, x = Object(c.d)(Y, {
                variables: {
                    targetUserId: v,
                    userId: null == i ? void 0 : i.id
                },
                update: function(e) {
                    var t = {
                        postId: o.id,
                        postResponsesPaging: {
                            limit: 10
                        }
                    }
                      , n = e.readQuery({
                        query: R.a,
                        variables: t
                    })
                      , r = Q(n, v);
                    null !== r && e.writeQuery({
                        query: R.a,
                        data: r,
                        variables: t
                    })
                },
                optimisticResponse: {
                    __typename: "Mutation",
                    blockUser: {
                        __typename: "User",
                        id: v,
                        isBlocking: !0
                    }
                },
                onCompleted: function() {
                    h(),
                    m(Object(N.m)({
                        message: "Responses by this user have been hidden from this story."
                    }))
                }
            }), y = s()(x, 1)[0], w = null === (n = o.creator) || void 0 === n ? void 0 : n.id, _ = (null == i ? void 0 : i.id) === w;
            return (null == i ? void 0 : i.id) === v ? null : i && v && _ ? u.createElement(u.Fragment, null, u.createElement(B.b, null, u.createElement(O.t, {
                onClick: function() {
                    g(!0)
                }
            }, "Block this author")), b && u.createElement(G.a, {
                onConfirm: function() {
                    l.event("user.blocked", {
                        userId: v,
                        source: d
                    }),
                    y()
                },
                isVisible: b,
                isInResponsesSidebar: !0,
                hide: function() {
                    h(),
                    a()
                }
            })) : null
        }
          , Q = function(e, t) {
            var n, r = null == e || null === (n = e.post) || void 0 === n ? void 0 : n.postResponses;
            if (!e || !t || !(null == r ? void 0 : r.responsesConnection) || null === (null == r ? void 0 : r.count))
                return null;
            var o = r.responsesConnection.stream
              , a = o.filter((function(e) {
                var n, r;
                return (null === (n = e.itemType.post) || void 0 === n || null === (r = n.creator) || void 0 === r ? void 0 : r.id) !== t
            }
            ));
            if (a.length === o.length)
                return null;
            var s = o.length - a.length;
            return W({}, e, {
                post: W({}, e.post, {
                    postResponses: W({}, r, {
                        count: r.count - s,
                        responsesConnection: W({}, r.responsesConnection, {
                            stream: a
                        })
                    })
                })
            })
        }
          , X = function(e) {
            var t, n = e.response, r = Object(E.b)(), o = u.useContext(d.a), a = o.setIsEditing, s = o.isEditing, i = o.setEditingQuote;
            return (null === (t = n.creator) || void 0 === t ? void 0 : t.id) === (null == r ? void 0 : r.id) ? u.createElement(B.b, null, u.createElement(O.t, {
                onClick: function() {
                    n.inResponseToMediaResource && i(n.inResponseToMediaResource.mediumQuote),
                    a(!s)
                }
            }, "Edit this response")) : null
        };
        function J() {
            var e = k()(["\n  mutation HidePostResponseOnParentMutation($parentPostId: ID!, $postResponseId: ID!) {\n    hidePostResponseOnParentPost(parentPostId: $parentPostId, postResponseId: $postResponseId)\n  }\n"]);
            return J = function() {
                return e
            }
            ,
            e
        }
        var Z = I()(J())
          , ee = function(e) {
            var t, n, r, o = e.responseToBeHidden, a = e.parentPost, i = e.hidePopoverMenu, l = Object(E.b)(), d = Object(T.e)(), m = Object(D.c)(), p = Object(C.d)(), f = (null == l ? void 0 : l.id) === (null === (t = a.creator) || void 0 === t ? void 0 : t.id), b = null == a || null === (n = a.collection) || void 0 === n ? void 0 : n.viewerIsEditor, g = (null == l ? void 0 : l.id) === (null === (r = o.creator) || void 0 === r ? void 0 : r.id), h = Object(c.d)(Z, {
                variables: {
                    postResponseId: o.id,
                    parentPostId: a.id
                },
                update: function(e) {
                    var t = {
                        postId: a.id,
                        postResponsesPaging: {
                            limit: 10
                        }
                    }
                      , n = e.readQuery({
                        query: R.a,
                        variables: t
                    })
                      , r = M(n, o.id);
                    null !== r && (e.writeQuery({
                        query: R.a,
                        data: r,
                        variables: t
                    }),
                    m.event("response.hidden", {
                        postId: o.id,
                        source: p
                    }),
                    d(Object(N.m)({
                        message: "",
                        toastStyle: "HIDE_POST_RESPONSE",
                        extraParams: {
                            responseId: o.id,
                            parentPostId: a.id
                        }
                    })),
                    i())
                }
            }), v = s()(h, 1)[0];
            return g ? null : f || b ? u.createElement(B.b, null, u.createElement(O.t, {
                onClick: v
            }, "Hide this response")) : null
        };
        function te() {
            var e = k()(["\n  mutation UserReportStoryMutation(\n    $targetPostId: ID!\n    $targetAuthorId: ID!\n    $alsoBlockAuthor: Boolean!\n    $reason: String!\n  ) {\n    reportStoryAndMaybeBlockAuthor(\n      targetPostId: $targetPostId\n      targetAuthorId: $targetAuthorId\n      alsoBlockAuthor: $alsoBlockAuthor\n      reason: $reason\n    ) {\n      id\n      isBlocking\n    }\n  }\n"]);
            return te = function() {
                return e
            }
            ,
            e
        }
        var ne = I()(te())
          , re = n("./src/components/susi/SusiClickable.tsx")
          , oe = n("./src/components/user/UserReportStoryDialog.tsx")
          , ae = function(e) {
            var t, n = e.response, r = e.parentPost, o = e.hidePopoverMenu, a = Object(E.b)(), i = Object(D.c)(), l = Object(C.d)(), d = u.useState(!1), m = s()(d, 2), p = m[0], f = m[1], b = function(e) {
                var t, n, r = e.response, o = r.id, a = null === (t = r.creator) || void 0 === t ? void 0 : t.id, i = null === (n = r.creator) || void 0 === n ? void 0 : n.isBlocking, l = Object(T.e)(), d = Object(c.d)(ne, {
                    variables: {
                        targetPostId: o,
                        targetAuthorId: a,
                        alsoBlockAuthor: !1,
                        reason: "Spam"
                    },
                    onCompleted: function() {
                        l(Object(N.m)({
                            message: "Successfully reported post."
                        }))
                    }
                }), m = s()(d, 2), p = m[0], f = m[1];
                return {
                    reportStory: u.useCallback((function(e) {
                        var t = e.alsoBlockAuthor
                          , n = void 0 !== t && t
                          , r = e.reportReason;
                        return p({
                            variables: {
                                targetPostId: o,
                                targetAuthorId: a,
                                alsoBlockAuthor: n,
                                reason: void 0 === r ? "Spam" : r
                            },
                            optimisticResponse: {
                                __typename: "Mutation",
                                reportStoryAndMaybeBlockAuthor: {
                                    __typename: "User",
                                    id: a,
                                    isBlocking: i || n
                                }
                            }
                        })
                    }
                    ), [r, p]),
                    error: null == f ? void 0 : f.error,
                    loading: null == f ? void 0 : f.loading
                }
            }({
                response: n
            }).reportStory, g = (null == a ? void 0 : a.id) === (null === (t = n.creator) || void 0 === t ? void 0 : t.id);
            return !n.creator || g ? null : u.createElement(u.Fragment, null, u.createElement(B.b, null, (null == a ? void 0 : a.id) ? u.createElement(O.t, {
                onClick: function() {
                    return f(!0)
                }
            }, "Report this response") : u.createElement(C.b, {
                source: {
                    susiEntry: "respond_sidebar"
                }
            }, u.createElement(re.a, {
                operation: "register",
                post: r
            }, "Report this response"))), u.createElement(oe.a, {
                onSubmit: function(e, t) {
                    return i.event("response.flagged", {
                        postId: n.id,
                        reason: t,
                        source: l
                    }),
                    b({
                        alsoBlockAuthor: e,
                        reportReason: t
                    })
                },
                isVisible: p,
                hide: function() {
                    f(!1),
                    o()
                },
                isResponse: !0
            }))
        }
          , se = n("./src/components/post/multivote/ClapMutation.tsx")
          , ie = n("./src/store/actions/multiVote.ts")
          , le = n("./src/util/post/claps.ts")
          , ce = function(e) {
            var t = e.response
              , n = e.hidePopoverMenu
              , r = Object(se.b)()
              , o = Object(D.c)()
              , a = Object(E.b)()
              , s = Object(C.d)()
              , i = Object(T.f)((function(e) {
                return e.multiVote.clapsPerPost
            }
            ))
              , l = Object(T.e)()
              , c = u.useCallback((function(e) {
                return l(Object(ie.d)(e))
            }
            ), [l])
              , d = Object(le.a)(i, t)
              , m = d.clapCount
              , p = d.viewerClapCount;
            return (null == a ? void 0 : a.id) && 0 !== m && 0 !== p ? u.createElement(B.b, null, u.createElement(O.t, {
                onClick: function() {
                    r(t, (null == a ? void 0 : a.id) || "", -p),
                    c({
                        postId: t.id,
                        clapCount: m - p,
                        viewerClapCount: 0,
                        viewerHasClappedSinceFetch: !0
                    }),
                    o.event("post.clientUnvote", {
                        postId: t.id,
                        postIds: [t.id],
                        unvoteCount: p,
                        source: s
                    }),
                    n()
                }
            }, "Undo applause for this response")) : null
        }
          , ue = {
            position: "absolute !important",
            top: "-16px",
            right: "0",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            zIndex: "1000",
            backgroundColor: "rgba(255, 255, 255, 1)",
            minWidth: "150px"
        }
          , de = function(e) {
            var t = e.response
              , n = e.responseType
              , r = e.parentPost
              , o = e.isPopoverMenuVisible
              , a = e.hidePopoverMenu
              , s = Object(z.a)()
              , i = Boolean(Object(x.a)("enable_responses_moderation"))
              , l = t.creator
              , c = Boolean(Object(x.a)("enable_responses_edit_and_delete"))
              , d = u.useRef(null);
            return u.useEffect((function() {
                var e = function(e) {
                    var t;
                    (null == d || null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target)) || a()
                };
                if (o)
                    return document.addEventListener("click", e),
                    function() {
                        document.removeEventListener("click", e)
                    }
            }
            ), [o]),
            t && l ? u.createElement("div", {
                className: s(ue),
                ref: d
            }, u.createElement(B.a, null, u.createElement(u.Fragment, null, u.createElement(ae, {
                response: t,
                parentPost: r,
                hidePopoverMenu: a
            }), i && u.createElement(u.Fragment, null, u.createElement(ee, {
                responseToBeHidden: t,
                parentPost: r,
                hidePopoverMenu: a
            }), u.createElement(K, {
                response: t,
                parentPost: r,
                hidePopoverMenu: a
            })), n === F.SIMPLE && u.createElement(ce, {
                response: t,
                hidePopoverMenu: a
            })), c && u.createElement(u.Fragment, null, n === F.SIMPLE && u.createElement(X, {
                response: t
            }), u.createElement(V, {
                response: t,
                hidePopoverMenu: a,
                parentPostId: r.id
            })))) : null
        }
          , me = function(e) {
            return {
                cursor: "pointer",
                border: 0,
                fill: e.baseColor.fill.light,
                ":hover": {
                    fill: e.baseColor.fill.dark
                },
                ":focus": {
                    outline: "none"
                }
            }
        }
          , pe = function(e) {
            var t, n = e.response, r = e.responseType, o = e.parentPost, a = Object(E.b)(), i = Object(h.useCx)(), l = n.creator, c = n.mediumUrl, d = n.createdAt, m = u.useState(!1), p = s()(m, 2), f = p[0], b = p[1], S = Boolean(Object(x.a)("enable_responses_edit_and_delete"));
            if (!n || !l || !c)
                return null;
            var k = (null === (t = o.creator) || void 0 === t ? void 0 : t.id) === l.id
              , P = (null == a ? void 0 : a.id) === l.id
              , I = !!S || !P
              , T = S && function(e, t) {
                return e && t === F.SIMPLE
            }(n, r) && (null == n ? void 0 : n.firstPublishedAt) !== (null == n ? void 0 : n.latestPublishedAt);
            return u.createElement(u.Fragment, null, u.createElement(O.b, {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }, u.createElement(O.b, {
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }, u.createElement(y.d, {
                scale: "XS",
                user: l
            }), u.createElement(O.b, {
                paddingLeft: "12px"
            }, u.createElement(O.b, {
                display: "flex",
                flexDirection: "row"
            }, u.createElement(O.t, {
                href: Object(j.sc)(l.username || "")
            }, u.createElement(w.b, {
                scale: "M",
                color: "DARKER"
            }, l.name)), k && u.createElement(v, null)), u.createElement(O.t, {
                href: c,
                linkStyle: "SUBTLE",
                inline: !0,
                noFollow: !0
            }, u.createElement(w.b, {
                scale: "M"
            }, u.createElement(g.a, {
                timestamp: d
            }), T && u.createElement(u.Fragment, null, " (edited)"))))), I && u.createElement(O.t, {
                onClick: function(e) {
                    e.nativeEvent.stopPropagation(),
                    b(!f)
                },
                inline: !0,
                className: i(me)
            }, u.createElement(_.a, null))), f && u.createElement("div", {
                className: i({
                    position: "relative"
                })
            }, u.createElement(C.b, {
                source: {
                    susiEntry: "respond_sidebar"
                },
                extendSource: !0
            }, u.createElement(de, {
                response: n,
                responseType: r,
                parentPost: o,
                isPopoverMenuVisible: f,
                hidePopoverMenu: function() {
                    return b(!1)
                }
            }))))
        }
          , fe = n("./src/components/responses/ResponseQuote.tsx")
          , be = n("./src/components/responses/ResponsesIconButton.tsx")
          , ge = n("./src/components/post/markups/Markups.tsx")
          , he = n("./src/schema-types/globalTypes.ts");
        function ve(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ve(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Ee(e, t, n) {
            return "char" === e && t > p.b || "line" === e && n > p.c
        }
        function ye(e) {
            var t = e.paragraphs
              , n = e.truncateStrategy
              , r = e.isExpanded
              , o = Object(h.useCx)()
              , a = 0
              , s = 0
              , i = "none" !== n && !r;
            return u.createElement("pre", {
                className: o({
                    whiteSpace: "pre-wrap"
                })
            }, t.map((function(e) {
                if (!r && Ee(n, a, s))
                    return null;
                var t = (null == e ? void 0 : e.text) || "";
                a += t.length || 0,
                s += t.split("\n").length || 0;
                var l = xe({}, e, {
                    dropCapImage: null,
                    hasDropCap: null
                })
                  , c = !r && Ee(n, a, s);
                if (c && "char" === n) {
                    var d = p.b - (a - t.length || 0);
                    l.markups = l.markups.reduce((function(e, t) {
                        if (t.start < d) {
                            var n = xe({}, t);
                            n.end > d && (n.end = d),
                            e.push(n)
                        }
                        return e
                    }
                    ), []),
                    l.text = t.slice(0, d)
                }
                return u.createElement(O.b, {
                    padding: "5px 0px",
                    key: e.name || e.id
                }, u.createElement(w.b, {
                    scale: "M",
                    color: "DARKER"
                }, u.createElement("div", {
                    className: o({
                        lineHeight: "24px"
                    })
                }, u.createElement(ge.a, {
                    paragraph: l,
                    richTextStyle: "FULL_PAGE",
                    paragraphStyle: he.l.P
                }), i && c && "...")))
            }
            )).filter((function(e) {
                return !!e
            }
            )))
        }
        var Oe = n("./src/framework/track/index.ts")
          , we = n("./src/framework/track/PostPresentationTracker.tsx")
          , Ce = n("./src/util/useragent.ts")
          , _e = function() {
            return {
                paddingBottom: "5px",
                cursor: "pointer"
            }
        }
          , je = function(e) {
            var t, n = e.simpleResponse, r = e.parentPost, o = e.omitBottomBorder, a = n.creator, i = n.content, l = n.mediumUrl, c = n.isLimitedState, d = u.useState(!1), m = s()(d, 2), g = m[0], v = m[1], x = u.useRef(null), E = Object(h.useCx)();
            Object(Oe.h)(x, n);
            var y = null == i || null === (t = i.bodyModel) || void 0 === t ? void 0 : t.paragraphs;
            if (!(a && i && y && l))
                return null;
            var _, j = y.map((function(e) {
                return e.text || ""
            }
            )), S = (_ = j).join("").length > p.b ? "char" : _.join("\n").split("\n").length > p.c ? "line" : "none", k = "none" !== S, P = k && !g, I = Object(Ce.d)(navigator && navigator.userAgent);
            return u.createElement(we.b, {
                post: n,
                presentationContext: "POST_PREVIEW",
                isDisplayingFullPost: !k
            }, u.createElement(O.b, {
                paddingTop: "25px",
                paddingBottom: I && o ? "48px" : "16px",
                borderBottom: o ? void 0 : "BASE_LIGHTER",
                ref: x
            }, u.createElement(pe, {
                response: n,
                responseType: F.SIMPLE,
                parentPost: r
            }), u.createElement(fe.a, {
                inResponseToMediaResource: n.inResponseToMediaResource
            }), u.createElement(O.b, {
                marginTop: "5px"
            }, u.createElement(f.a.Provider, {
                value: !0
            }, u.createElement(ye, {
                paragraphs: y,
                truncateStrategy: S,
                isExpanded: g
            }))), P && u.createElement("div", {
                onClick: function() {
                    return v(!0)
                },
                className: E(_e)
            }, u.createElement(w.b, {
                scale: "S",
                color: "ACCENT"
            }, "Read More")), u.createElement(O.b, {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "14px"
            }, u.createElement(C.b, {
                source: {
                    susiEntry: "respond_sidebar"
                },
                extendSource: !0
            }, u.createElement(b.a, {
                buttonStyle: "SUBTLE",
                post: n,
                shouldShowResponsiveLabelText: !0
            })), u.createElement(O.b, {
                width: "12px"
            }), u.createElement(O.t, {
                href: l + "?responsesOpen=true"
            }, u.createElement(be.a, {
                location: "response",
                postId: n.id,
                responsesCount: n.responsesCount,
                setIsResponsesSidebarVisible: function() {},
                allowResponses: n.allowResponses,
                isLimitedState: c
            })))))
        }
          , Se = n("./node_modules/react-loadable/lib/index.js")
          , ke = n.n(Se)
          , Pe = n("./src/components/responses/editor/SimpleEditorType.tsx")
          , Ie = n("./src/screens/ErrorScreen.tsx")
          , Te = n("./src/screens/LoadingScreen.tsx");
        function Re(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var Ae, Le, Me = {
            delay: 1e3,
            timeout: 2e4,
            loading: function(e) {
                return e.error ? u.createElement(Ie.a, {
                    error: e.error
                }) : e.timedOut ? u.createElement(Ie.a, {
                    error: new Error("Loadable Screen component has timed out")
                }) : e.pastDelay ? u.createElement(Te.a, null) : null
            }
        }, Be = ke()(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Re(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }({}, Me, {
            loader: function() {
                return Promise.all([n.e(8), n.e(67)]).then(n.bind(null, "./src/components/responses/editor/InlineResponseEditor.tsx"))
            },
            modules: ["src/components/responses/editor/InlineResponseEditor"],
            webpack: function() {
                return ["./src/components/responses/editor/InlineResponseEditor.tsx"]
            },
            render: function(e, t) {
                var n = e.InlineResponseEditor;
                return u.createElement(n, t)
            }
        })), De = function(e) {
            var t = e.parentPostId
              , n = e.responseId
              , r = e.type
              , o = void 0 === r ? Pe.a.create : r
              , a = e.initialValue;
            return u.createElement(Be, {
                parentPostId: t,
                responseId: n,
                type: o,
                initialValue: a
            })
        }, Ne = function(e) {
            var t, n, r, a, i = e.response, l = e.index, c = e.parentPost, p = e.omitBottomBorder, f = u.useState(!1), b = s()(f, 2), g = b[0], h = b[1], v = u.useState(null), x = s()(v, 2), E = x[0], y = x[1], O = u.useContext(m.a), w = O.editingResponsesAtIndices, _ = O.setEditingResponsesAtIndices;
            return u.useEffect((function() {
                if (g && !w.includes(l) && _([].concat(o()(w), [l])),
                !g && w.includes(l)) {
                    var e = w.filter((function(e) {
                        return e !== l
                    }
                    ));
                    _(e)
                }
            }
            ), [g, w, _]),
            i.post ? g ? u.createElement(d.a.Provider, {
                value: {
                    isEditing: g,
                    setIsEditing: h,
                    latestRev: null === (t = i.post) || void 0 === t ? void 0 : t.latestRev,
                    createdAt: null === (n = i.post) || void 0 === n ? void 0 : n.createdAt,
                    setEditingQuote: y,
                    editingQuote: E
                }
            }, u.createElement(C.b, {
                source: {
                    index: l
                },
                key: i.post.id,
                extendSource: !0
            }, u.createElement(De, {
                type: Pe.a.edit,
                parentPostId: c.id,
                responseId: i.post.id,
                initialValue: null == i || null === (r = i.post) || void 0 === r || null === (a = r.content) || void 0 === a ? void 0 : a.bodyModel
            }))) : u.createElement(d.a.Provider, {
                value: {
                    isEditing: g,
                    setIsEditing: h,
                    setEditingQuote: y,
                    editingQuote: E
                }
            }, u.createElement(C.b, {
                source: {
                    index: l
                },
                key: i.post.id,
                extendSource: !0
            }, u.createElement(je, {
                parentPost: c,
                simpleResponse: i.post,
                omitBottomBorder: p
            }))) : null
        }, Ue = {
            "0%": {
                opacity: "0.8"
            },
            "50%": {
                opacity: "0.5"
            },
            "100%": {
                opacity: "0.8"
            }
        }, Fe = function() {
            var e = Object(h.useKeyframes)({
                shimmerKeyframesName: Ue
            }).shimmerKeyframesName
              , t = Object(h.useCx)();
            return u.createElement("div", {
                className: t((function() {
                    return {
                        animation: "".concat(e, " 1.2s ease-in-out infinite"),
                        padding: "32px 0"
                    }
                }
                ))
            }, u.createElement(O.b, {
                display: "flex",
                flexDirection: "row"
            }, u.createElement(O.b, {
                height: "32px",
                width: "32px",
                borderRadius: "100%",
                backgroundColor: "BASE_NORMAL"
            }), u.createElement(O.b, {
                marginLeft: "8px",
                marginTop: "4px"
            }, u.createElement(O.b, {
                height: "8px",
                width: "120px",
                marginBottom: "8px",
                backgroundColor: "BASE_NORMAL"
            }), u.createElement(O.b, {
                height: "8px",
                width: "80px",
                backgroundColor: "BASE_NORMAL"
            }))), u.createElement(O.b, {
                marginTop: "12px"
            }, u.createElement(O.b, {
                height: "10px",
                width: "100%",
                marginBottom: "8px",
                backgroundColor: "BASE_NORMAL"
            }), u.createElement(O.b, {
                height: "10px",
                width: "100%",
                marginBottom: "8px",
                backgroundColor: "BASE_NORMAL"
            }), u.createElement(O.b, {
                height: "10px",
                width: "90%",
                backgroundColor: "BASE_NORMAL"
            })))
        }, He = n("./src/svg/clap-filled-19px.svg"), Ve = n("./src/svg/response-filled-19px.svg"), ze = n("./src/util/numbers.ts"), Ge = function(e) {
            return {
                fill: e.baseColor.fill.lighter,
                float: "right"
            }
        }, qe = function(e) {
            var t, n, r = e.storyResponse, o = e.parentPost, a = e.omitBottomBorder, s = Object(h.useCx)(), i = r.creator, l = r.previewContent, c = r.mediumUrl, d = r.clapCount, m = r.responsesCount, p = null == l || null === (t = l.bodyModel) || void 0 === t ? void 0 : t.paragraphs;
            if (!(i && l && l.bodyModel && c && p))
                return null;
            var f = function(e) {
                var t = []
                  , n = !0
                  , r = !1
                  , o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                        var i = a.value;
                        if (i.text && (t.push(i),
                        t.length >= 2))
                            break
                    }
                } catch (e) {
                    r = !0,
                    o = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return {
                    title: t[0],
                    subtitle: t[1]
                }
            }(p);
            if (!f.title && !f.subtitle)
                return null;
            var b, g = null !== (null === (n = r.inResponseToMediaResource) || void 0 === n ? void 0 : n.mediumQuote), v = m || 0;
            return u.createElement(we.b, {
                post: r,
                presentationContext: "POST_PREVIEW",
                isDisplayingFullPost: !1
            }, u.createElement(O.b, {
                paddingTop: "25px",
                paddingBottom: "20px",
                borderBottom: a ? void 0 : "BASE_LIGHTER"
            }, u.createElement(pe, {
                response: r,
                responseType: F.STORY,
                parentPost: o
            }), u.createElement(fe.a, {
                inResponseToMediaResource: r.inResponseToMediaResource
            }), u.createElement(O.f, {
                href: Object(j.Db)(r)
            }, u.createElement("div", {
                className: s({
                    boxShadow: "0px 1px 4px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "3px",
                    padding: "12px",
                    marginTop: g ? "12px" : "16px"
                })
            }, u.createElement("div", {
                className: s(Ge)
            }, u.createElement(w.b, {
                scale: "S",
                color: "LIGHTER"
            }, u.createElement(O.b, {
                display: "flex",
                flexGrow: "0",
                alignItems: "center",
                marginLeft: d > 0 || v > 0 ? "20px" : "0"
            }, d > 0 ? u.createElement(O.b, {
                display: "flex",
                alignItems: "center"
            }, u.createElement(O.b, {
                tag: He.a,
                marginRight: "2px"
            }), u.createElement("div", null, Object(ze.d)(d))) : null, v > 0 ? u.createElement(O.b, {
                display: "flex",
                alignItems: "center"
            }, u.createElement(O.b, {
                tag: Ve.a,
                marginLeft: d ? "8px" : "0",
                marginRight: "2px"
            }), u.createElement("div", null, Object(ze.d)(v))) : null))), u.createElement(w.b, {
                scale: "M",
                clamp: 2,
                color: "DARKER"
            }, f.title && u.createElement(O.b, null, f.title.text), f.subtitle && u.createElement("div", {
                className: s((b = f.title.type,
                function(e) {
                    return {
                        color: b === he.l.H3 ? e.baseColor.text.lighter : e.baseColor.text.normal
                    }
                }
                ))
            }, f.subtitle.text))))))
        }, We = n("./src/components/responses/management-menu/CloseDiscussionMenuItem.tsx"), $e = {
            position: "absolute !important",
            right: "0",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            zIndex: "1000",
            backgroundColor: "rgba(255, 255, 255, 1)",
            minWidth: "200px"
        }, Ye = function(e) {
            var t = e.parentPostId
              , n = e.responsesLocked
              , r = e.isPopoverMenuVisible
              , o = e.hidePopoverMenu
              , a = Object(z.a)()
              , s = Object(T.f)((function(e) {
                return e.config.authDomain
            }
            ))
              , i = u.useRef(null);
            return u.useEffect((function() {
                var e = function(e) {
                    var t;
                    (null == i || null === (t = i.current) || void 0 === t ? void 0 : t.contains(e.target)) || o()
                };
                if (r)
                    return document.addEventListener("click", e),
                    function() {
                        document.removeEventListener("click", e)
                    }
            }
            ), [r]),
            u.createElement("div", {
                className: a($e),
                ref: i
            }, u.createElement(B.a, null, u.createElement(B.b, null, u.createElement(O.t, {
                href: Object(j.Cb)(s, t)
            }, "Manage responses")), u.createElement(We.a, {
                parentPostId: t,
                responsesLocked: n,
                hidePopoverMenu: o
            })))
        }, Ke = function(e) {
            return {
                cursor: "pointer",
                border: 0,
                fill: e.baseColor.fill.light,
                ":hover": {
                    fill: e.baseColor.fill.dark
                },
                ":focus": {
                    outline: "none"
                }
            }
        }, Qe = function(e) {
            var t, n, r = e.parentPost, o = e.responsesLocked, a = Object(z.a)(), i = Object(E.b)(), l = Object(T.f)((function(e) {
                return e.config.authDomain
            }
            )), c = Boolean(Object(x.a)("enable_lock_responses")), d = u.useState(!1), m = s()(d, 2), p = m[0], f = m[1], b = (null == i ? void 0 : i.id) === (null === (t = r.creator) || void 0 === t ? void 0 : t.id), g = null == r || null === (n = r.collection) || void 0 === n ? void 0 : n.viewerIsEditor;
            return b || g ? c ? u.createElement(O.b, null, u.createElement(O.t, {
                onClick: function(e) {
                    e.nativeEvent.stopPropagation(),
                    f(!p)
                },
                inline: !0,
                className: a(Ke)
            }, u.createElement(_.a, null)), p && u.createElement("div", {
                className: a({
                    position: "relative"
                })
            }, u.createElement(C.b, {
                source: {
                    susiEntry: "respond_sidebar"
                },
                extendSource: !0
            }, u.createElement(Ye, {
                parentPostId: r.id,
                responsesLocked: o,
                isPopoverMenuVisible: p,
                hidePopoverMenu: function() {
                    return f(!1)
                }
            })))) : u.createElement(O.b, {
                paddingRight: "8px"
            }, u.createElement(O.t, {
                href: Object(j.Cb)(l, r.id),
                linkStyle: "OBVIOUS",
                inline: !0
            }, u.createElement(w.b, {
                scale: "S",
                color: "LIGHTER"
            }, "Manage responses"))) : null
        }, Xe = n("./src/components/session/RequireFlag.tsx"), Je = n("./src/framework/design-system/components/buttons/CloseButton.tsx"), Ze = n("./src/svg/arrow-down-15px.svg");
        !function(e) {
            e.StoryResponse = "StreamItemPostStoryResponse",
            e.SimpleResponse = "StreamItemPostSimpleResponse"
        }(Ae || (Ae = {})),
        function(e) {
            e.Recommended = "Recommended",
            e.Oldest = "Oldest",
            e.Newest = "Newest"
        }(Le || (Le = {}));
        var et = [Le.Recommended, Le.Newest, Le.Oldest]
          , tt = {
            height: "80vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontStyle: "italic",
            fontWeight: 200
        }
          , nt = function(e) {
            var t, n, r, o = e.responses, a = e.parentPost, i = e.responsesLocked, l = e.isLockedResponse, c = e.isLoadingInitialContent, d = e.isFetchingNextSetOfResponses, p = e.isResponsesSidebarVisible, f = e.setIsResponsesSidebarVisible, b = e.inResponseToQuote, g = e.setInResponseToQuote, v = Object(h.useCx)(), x = u.useState(Le.Recommended), E = s()(x, 2), y = E[0], _ = E[1], j = u.useState(!1), S = s()(j, 2), k = S[0], P = S[1], I = u.useState([]), T = s()(I, 2), R = T[0], A = T[1], L = a.id, M = (null == o ? void 0 : o.count) && 0 !== (null == o ? void 0 : o.count) ? "(".concat(null == o ? void 0 : o.count, ")") : "", D = null == o || null === (t = o.responsesConnection) || void 0 === t ? void 0 : t.stream, N = null == o || null === (n = o.responsesConnection) || void 0 === n || null === (r = n.pagingInfo) || void 0 === r ? void 0 : r.next, U = D && o && o.count && (null == D ? void 0 : D.length) < (null == o ? void 0 : o.count) - 1, F = d && N && U;
            return u.createElement(m.a.Provider, {
                value: {
                    setIsSavingResponse: P,
                    responsesLocked: i,
                    isLockedResponse: l,
                    editingResponsesAtIndices: R,
                    setEditingResponsesAtIndices: A,
                    inResponseToQuote: b,
                    setInResponseToQuote: g
                }
            }, p && k && u.createElement(O.u, {
                horizontalOverride: {
                    left: "calc(100vw - ".concat(lt, ")")
                }
            }), u.createElement(O.b, {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "24px",
                paddingBottom: "18px"
            }, u.createElement(w.c, {
                scale: "S"
            }, "Responses ", M), u.createElement(O.b, {
                display: "flex",
                flexDirection: "row"
            }, u.createElement(Qe, {
                parentPost: a,
                responsesLocked: i
            }), u.createElement(O.b, {
                position: "relative",
                right: "-7px"
            }, u.createElement(Je.a, {
                onClick: function() {
                    return f(!1)
                },
                size: "REGULAR",
                isPositionAbsolute: !1
            })))), c ? u.createElement(O.b, {
                padding: "0 24px"
            }, u.createElement(Fe, null)) : u.createElement(u.Fragment, null, u.createElement(De, {
                parentPostId: L
            }), u.createElement(Xe.a, {
                name: "enable_responses_sortby"
            }, u.createElement(O.I, {
                initialVisibility: !0
            }, (function(e) {
                var t = e.isVisible
                  , n = e.toggle
                  , r = e.hide;
                return u.createElement(O.b, {
                    backgroundColor: "BASE_LIGHT",
                    padding: "10px 24px"
                }, u.createElement(O.w, {
                    isVisible: t,
                    hide: r,
                    customZIndex: 530,
                    popoverRenderFn: function() {
                        return u.createElement(B.a, null, et.map((function(e) {
                            return u.createElement(B.b, null, u.createElement(O.t, {
                                linkStyle: "SUBTLE",
                                onClick: function() {
                                    !function(e) {
                                        _(e)
                                    }(e),
                                    r()
                                }
                            }, e))
                        }
                        )))
                    }
                }, u.createElement(O.t, {
                    onClick: n
                }, y, u.createElement(Ze.a, {
                    className: v({
                        margin: "0px 5px"
                    })
                }))))
            }
            ))), o && 0 !== (null == D ? void 0 : D.length) ? u.createElement(O.b, {
                padding: "0 24px"
            }, null == D ? void 0 : D.map((function(e, t) {
                var n = e.itemType.__typename
                  , r = R.includes(t + 1)
                  , o = D.length - 1 === t;
                switch (n) {
                case Ae.SimpleResponse:
                    var s = e.itemType;
                    return s.post ? u.createElement(Ne, {
                        key: s.post.id,
                        response: s,
                        index: t,
                        parentPost: a,
                        omitBottomBorder: r || o
                    }) : null;
                case Ae.StoryResponse:
                    var i = e.itemType;
                    return i.post ? u.createElement(C.b, {
                        source: {
                            index: t
                        },
                        key: i.post.id,
                        extendSource: !0
                    }, u.createElement(qe, {
                        storyResponse: i.post,
                        parentPost: a,
                        omitBottomBorder: r || o
                    })) : null;
                default:
                    return null
                }
            }
            )), F && u.createElement(Fe, null)) : u.createElement("div", {
                className: v(tt)
            }, u.createElement(w.b, {
                scale: "L",
                color: "LIGHTER"
            }, "There are currently no responses for this story."), u.createElement(w.b, {
                scale: "L",
                color: "LIGHTER"
            }, "Be the first to respond."))))
        }
          , rt = n("./src/components/style/BaseThemeProvider.tsx")
          , ot = n("./src/styles/breakpoints.ts");
        function at(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function st(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? at(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var it = function() {
            return {
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                zIndex: 510,
                cursor: "pointer",
                opacity: 0,
                transition: "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s",
                pointerEvents: "none"
            }
        }
          , lt = "414px"
          , ct = function(e) {
            return l()({
                width: lt,
                position: "fixed",
                zIndex: 520,
                backgroundColor: "white",
                left: "100%",
                top: "0px",
                height: "100%",
                boxSizing: "border-box",
                overflow: "auto",
                "-ms-overflow-style": "-ms-autohiding-scrollbar",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px",
                opacity: 1,
                transform: "translateX(0px)",
                transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s, opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s"
            }, Object(ot.sm)(e), {
                left: 0,
                width: "100%",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                transform: "translateY(100%)",
                "-webkit-overflow-scrolling": "touch"
            })
        }
          , ut = function(e, t) {
            return function(n) {
                if (e) {
                    var r = n.breakpoints.md - .02;
                    return t <= r ? {
                        transform: "translateY(30px) !important"
                    } : {
                        transform: "translateX(-415px)"
                    }
                }
                return {}
            }
        }
          , dt = function(e) {
            return e ? {
                opacity: 1,
                pointerEvents: "all"
            } : {}
        }
          , mt = function(e) {
            var t, n, r, o, a, i, l = e.setIsResponsesSidebarVisible, d = e.isResponsesSidebarVisible, m = e.inResponseToQuote, p = e.setInResponseToQuote, f = e.parentPost, b = Object(rt.c)().baseTheme, g = Object(h.useCx)(), v = Object(c.e)(R.a, {
                variables: {
                    postId: f.id,
                    postResponsesPaging: {
                        limit: 10
                    }
                },
                ssr: !1
            }), x = v.loading, E = v.data, y = v.fetchMore, w = null == E || null === (t = E.post) || void 0 === t ? void 0 : t.responsesLocked, _ = null == E || null === (n = E.post) || void 0 === n ? void 0 : n.isLockedResponse, j = null == E || null === (r = E.post) || void 0 === r ? void 0 : r.postResponses, S = u.useState(0), k = s()(S, 2), P = k[0], I = k[1], T = u.useState(!1), A = s()(T, 2), L = A[0], M = A[1];
            u.useEffect((function() {
                P || I(window.innerWidth)
            }
            ), []);
            var B = null == j || null === (o = j.responsesConnection) || void 0 === o || null === (a = o.pagingInfo) || void 0 === a ? void 0 : a.next;
            if (B) {
                var D = {
                    postId: f.id,
                    postResponsesPaging: {
                        limit: B.limit,
                        to: B.to
                    }
                };
                i = function() {
                    return y({
                        variables: D,
                        updateQuery: function(e, t) {
                            var n = t.fetchMoreResult;
                            return M(!1),
                            ft(e, n)
                        }
                    })
                }
            }
            return u.createElement(O.F, {
                theme: b
            }, u.createElement(C.b, {
                source: {
                    name: "responses",
                    postId: f.id
                },
                extendSource: !0
            }, u.createElement(O.b, {
                print: {
                    display: "none"
                }
            }, u.createElement("div", {
                className: g([it, dt(d)]),
                onClick: function() {
                    l(!1)
                },
                "aria-hidden": !d
            }), u.createElement("div", {
                className: g([ct, ut(d, P)]),
                "aria-hidden": !d,
                onScroll: function(e) {
                    return pt(e, B, L, M, i)
                }
            }, u.createElement(nt, {
                responses: j,
                parentPost: f,
                responsesLocked: w,
                isLockedResponse: _,
                isLoadingInitialContent: x,
                isFetchingNextSetOfResponses: L,
                isResponsesSidebarVisible: d,
                setIsResponsesSidebarVisible: l,
                inResponseToQuote: m,
                setInResponseToQuote: p
            })))))
        }
          , pt = function(e, t, n, r, o) {
            e.preventDefault();
            var a = e.currentTarget;
            a.scrollHeight - a.scrollTop - a.clientHeight < 1.5 * a.clientHeight && t && !n && (r(!0),
            o())
        }
          , ft = function(e, t) {
            var n, r, a, s, i, l, c, u, d = null == t || null === (n = t.post) || void 0 === n ? void 0 : n.postResponses, m = null == t ? void 0 : t.post;
            if (!m || !d || !(null === (r = d.responsesConnection) || void 0 === r ? void 0 : r.stream))
                return e;
            var p = (null == e || null === (a = e.post) || void 0 === a || null === (s = a.postResponses) || void 0 === s || null === (i = s.responsesConnection) || void 0 === i ? void 0 : i.stream) || []
              , f = (null == t || null === (l = t.post) || void 0 === l || null === (c = l.postResponses) || void 0 === c || null === (u = c.responsesConnection) || void 0 === u ? void 0 : u.stream) || [];
            return {
                post: st({}, m, {
                    postResponses: st({}, d, {
                        responsesConnection: st({}, d.responsesConnection, {
                            stream: [].concat(o()(p), o()(f))
                        })
                    })
                })
            }
        }
    },
    "./src/components/responses/ResponsesSidebar_PostResponsesQuery.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return h
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./src/components/responses/SimpleResponse_simpleResponse.tsx")
          , l = n("./src/components/user/UserAvatar.tsx")
          , c = n("./src/framework/track/PostPresentationTracker.tsx");
        function u() {
            var e = o()(["\n  fragment ResponseHeader_post on Post {\n    createdAt\n    creator {\n      ...UserAvatar_user\n      isBlocking\n    }\n    mediumUrl\n  }\n  ", "\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        var d = s()(u(), l.b)
          , m = n("./src/components/responses/ResponseQuote.tsx");
        function p() {
            var e = o()(["\n  fragment StoryResponse_storyResponse on StreamItemPostStoryResponse {\n    post {\n      ...ResponseHeader_post\n      ...ResponseQuote_post\n      id\n      responsesCount\n      creator {\n        isBlocking\n      }\n      clapCount\n      ...PostPresentationTracker_post\n      previewContent {\n        bodyModel {\n          paragraphs {\n            text\n            type\n          }\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        var f = s()(p(), d, l.b, c.a, m.b)
          , b = n("./src/components/responses/management-menu/CloseDiscussionMenuItem.tsx");
        function g() {
            var e = o()(['\n  query PostResponsesQuery($postId: ID!, $postResponsesPaging: PagingOptions) {\n    post(id: $postId) {\n      id\n      ...CloseDiscussion_post\n      postResponses {\n        count\n        responsesConnection(paging: $postResponsesPaging) @connection(key: "responsesConnection") {\n          pagingInfo {\n            next {\n              limit\n              to\n            }\n          }\n          stream {\n            itemType {\n              __typename\n              ... on StreamItemPostStoryResponse {\n                ...StoryResponse_storyResponse\n              }\n              ... on StreamItemPostSimpleResponse {\n                ...SimpleResponse_simpleResponse\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ', "\n  ", "\n  ", "\n"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        var h = s()(g(), b.b, f, i.a)
    },
    "./src/components/responses/SimpleResponse_simpleResponse.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./src/components/editor/getSlateBodyFromPostBodyModel_bodyModel.tsx")
          , l = n("./src/components/responses/ResponseQuote.tsx")
          , c = n("./src/framework/track/index.ts");
        function u() {
            var e = o()(["\n  fragment SimpleResponse_simpleResponse on StreamItemPostSimpleResponse {\n    post {\n      id\n      createdAt\n      firstPublishedAt\n      latestPublishedAt\n      title\n      creator {\n        id\n        name\n        username\n        imageId\n        mediumMemberAt\n        isBlocking\n      }\n      clapCount\n      viewerClapCount\n      isPublished\n      voterCount\n      responsesCount\n      allowResponses\n      latestRev\n      recommenders {\n        id\n        name\n      }\n      mediumUrl\n      content {\n        bodyModel {\n          paragraphs {\n            text\n          }\n          ...getSlateBodyFromPostBodyModel_bodyModel\n        }\n      }\n      collection {\n        id\n        slug\n      }\n      isLimitedState\n      ...PostPresentationTracker_post\n      ...PostScrollTracker_post\n      ...ResponseQuote_post\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        var d = s()(u(), c.c, c.e, l.b, i.a)
    },
    "./src/components/responses/editor/SimpleEditorType.tsx": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e.edit = "EDIT",
            e.create = "CREATE"
        }(r || (r = {}))
    },
    "./src/components/responses/management-menu/CloseDiscussionMenuItem.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return k
        }
        )),
        n.d(t, "b", (function() {
            return I
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , u = n("./node_modules/graphql-tag/src/index.js")
          , d = n.n(u)
          , m = n("./node_modules/react/index.js")
          , p = n("./src/components/ui/PopoverMenu.tsx")
          , f = n("./src/framework/design-system/components/index.ts")
          , b = n("./src/framework/design-system/type/index.ts")
          , g = n("./src/framework/reporter/index.ts")
          , h = n("./src/framework/source/index.ts")
          , v = n("./src/framework/style/index.ts");
        function x() {
            var e = l()(["\n  query FetchPostResponsesLockedQuery($postId: ID!) {\n    post(id: $postId) {\n      id\n      ...CloseDiscussion_post\n    }\n  }\n  ", "\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = l()(["\n  fragment CloseDiscussion_post on Post {\n    id\n    responsesLocked\n    isLockedResponse\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function w() {
            var e = l()(["\n  mutation UnlockResponsesOnPostMutation($postId: ID!) {\n    unlockResponsesOnPost(postId: $postId)\n  }\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        function C() {
            var e = l()(["\n  mutation LockResponsesOnPostMutation($postId: ID!) {\n    lockResponsesOnPost(postId: $postId)\n  }\n"]);
            return C = function() {
                return e
            }
            ,
            e
        }
        var _ = function() {
            return {
                fontStyle: "italic",
                textAlign: "center"
            }
        }
          , j = d()(C())
          , S = d()(w())
          , k = function(e) {
            var t, n = e.parentPostId, r = e.responsesLocked, o = e.hidePopoverMenu, a = Object(v.useCx)(), i = Object(g.c)(), l = Object(h.d)(), u = m.useState(!1), d = s()(u, 2), x = d[0], E = d[1], y = Object(c.d)(j, {
                variables: {
                    postId: n
                },
                update: function(e) {
                    i.event("responses.locked", {
                        postId: n,
                        source: l
                    }),
                    P(e, n, !0, o)
                }
            }), O = s()(y, 1)[0], w = Object(c.d)(S, {
                variables: {
                    postId: n
                },
                update: function(e) {
                    P(e, n, !1, o)
                }
            }), C = s()(w, 1)[0];
            return t = !0 === r ? m.createElement(f.t, {
                onClick: C
            }, "Open discussion") : m.createElement(f.t, {
                onClick: function() {
                    return E(!0)
                }
            }, "Close discussion"),
            m.createElement(m.Fragment, null, m.createElement(p.b, null, t), x && m.createElement(f.i, {
                isVisible: x,
                hide: function() {
                    return E(!1)
                },
                withCloseButton: !1,
                noPortal: !0,
                padding: 50
            }, m.createElement(f.b, {
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }, m.createElement(b.c, {
                scale: "M"
            }, "Close Discussion"), m.createElement(f.b, {
                display: "flex",
                width: "100%",
                paddingRight: "5px",
                marginTop: "10px",
                marginBottom: "70px",
                textAlign: "center"
            }, m.createElement(b.b, {
                scale: "M",
                color: "DARKER"
            }, "Closing a discussion prevents responses from being added or edited on your story. Existing responses will remain on your story.")), m.createElement(f.b, {
                display: "flex",
                marginBottom: "20px"
            }, m.createElement(f.t, {
                onClick: function() {
                    return E(!1)
                }
            }, m.createElement(b.b, {
                scale: "M",
                color: "DARKER"
            }, "Cancel")), m.createElement(f.b, {
                marginLeft: "25px"
            }, m.createElement(f.c, {
                buttonStyle: "ERROR",
                onClick: O,
                "data-test-id": "close-discussion-button"
            }, "Close discussion"))), m.createElement("div", {
                className: a(_)
            }, m.createElement(b.b, {
                scale: "M"
            }, "You can reopen the discussion at any time.")))))
        }
          , P = function(e, t, n, r) {
            var o = e.readQuery({
                query: T,
                variables: {
                    postId: t
                }
            });
            o && (e.writeQuery({
                query: T,
                data: Object.assign({}, o, {
                    post: O({}, o.post, {
                        responsesLocked: n
                    })
                }),
                variables: {
                    postId: t
                }
            }),
            r())
        }
          , I = d()(E())
          , T = d()(x(), I)
    },
    "./src/components/sequence/NormalizeSequenceBodyModel.ts": function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return f
        }
        )),
        n.d(t, "c", (function() {
            return b
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/lodash/cloneDeep.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./src/components/post/NormalizePostBodyModel.ts");
        function m() {
            var e = o()(["\n  fragment NormalizeSequenceBodyModel_bodyModel on RichText {\n    ...GetFeaturedImageIndex_bodyModel\n    ...GetTitleIndexMap_bodyModel\n    sections {\n      name\n      startIndex\n    }\n  }\n  ", "\n  ", "\n"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function f(e) {
            var t = Object(d.d)(e.paragraphs)
              , n = [t.titleIndex, t.subtitleIndex, Object(d.c)(e.paragraphs)].filter((function(e) {
                return null != e
            }
            )).sort()
              , r = e.paragraphs.slice(0)
              , o = l()(e.sections);
            n.forEach((function(t, n) {
                r.splice(t - n, 1);
                for (var a = 1; a < e.sections.length; a++) {
                    var s = e.sections[a]
                      , i = o[a];
                    s.startIndex >= t && (i.startIndex -= 1)
                }
            }
            ));
            var a = o.slice(1).filter((function(e) {
                return e.startIndex > 0
            }
            ));
            return o.length > 0 && a.unshift(o[0]),
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        s()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, e, {
                paragraphs: r,
                sections: a
            })
        }
        n.d(t, "e", (function() {
            return d.d
        }
        )),
        n.d(t, "d", (function() {
            return d.c
        }
        )),
        n.d(t, "b", (function() {
            return d.b
        }
        )),
        n.d(t, "a", (function() {
            return d.a
        }
        ));
        var b = u()(m(), d.a, d.b)
    },
    "./src/components/sequence/SequenceCoverImage.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return d
        }
        )),
        n.d(t, "a", (function() {
            return m
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/ui/image/index.ts")
          , c = n("./src/util/miroImage.ts");
        function u() {
            var e = o()(["\n  fragment SequenceCoverImage_sequence on Sequence {\n    title\n    coverImage {\n      id\n    }\n  }\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function d(e) {
            var t = e.sequence
              , n = e.width
              , r = e.height
              , o = t.title
              , a = t.coverImage;
            return a ? i.createElement("div", null, i.createElement(l.c, {
                miroId: a.id,
                alt: o || "Collection on Medium",
                width: n,
                height: r,
                strategy: c.a.Resample,
                freezeGifs: !1
            })) : null
        }
        var m = s()(u())
    },
    "./src/components/sidebar/SidebarWrapper.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return f
        }
        )),
        n.d(t, "b", (function() {
            return h
        }
        )),
        n.d(t, "c", (function() {
            return v
        }
        )),
        n.d(t, "d", (function() {
            return x
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./src/components/metabar/constants.ts")
          , i = n("./src/components/session/useFlag.tsx")
          , l = n("./src/framework/design-system/components/index.ts")
          , c = n("./src/framework/style/index.ts")
          , u = n("./src/framework/track/DomMonitor.ts")
          , d = n("./src/styles/breakpoints.ts")
          , m = n("./src/styles/mediaTypes.ts")
          , p = n("./src/util/dom.ts")
          , f = 131
          , b = function(e) {
            var t = e.enableDifferentGrid
              , n = e.isFixed
              , r = void 0 === n || n
              , a = e.disableTransition
              , i = void 0 !== a && a
              , l = e.scrollableRef
              , c = e.topOffset
              , u = e.visible
              , p = e.fixedWidth;
            return function(e) {
                var n, a = d.lg(e);
                t && (a = Object(m.a)(e, f, e.grid.xStep * e.grid.marginSteps.lg, l && "current"in l ? l.current : null));
                var b = void 0 === c ? s.a + 54 + 40 : c;
                return n = {
                    opacity: u ? 1 : 0,
                    pointerEvents: "none",
                    position: r ? "fixed" : "absolute",
                    willChange: "opacity",
                    width: p ? "".concat(p, "px") : "100%",
                    top: "".concat(b, "px")
                },
                o()(n, Object(m.b)("no-preference"), {
                    transition: i ? "opacity 0s" : "opacity 200ms"
                }),
                o()(n, a, {
                    display: "none"
                }),
                n
            }
        }
          , g = function(e) {
            return {
                pointerEvents: e ? "auto" : "none"
            }
        }
          , h = function(e) {
            var t = e.children
              , n = e.disableTransition
              , r = e.isFixed
              , o = e.scrollableRef
              , s = e.sidebarRef
              , u = e.testId
              , d = e.topOffset
              , m = e.visible
              , p = e.fixedWidth
              , h = !!Object(i.a)("enable_different_grid")
              , v = Object(c.useCx)();
            return a.createElement("div", {
                className: v(b({
                    enableDifferentGrid: h,
                    isFixed: r,
                    scrollableRef: o,
                    topOffset: d,
                    visible: m,
                    disableTransition: n,
                    fixedWidth: p
                })),
                "data-test-id": u
            }, a.createElement(l.v, {
                size: "outset"
            }, a.createElement(l.b, {
                display: "flex",
                flexDirection: "column",
                width: "".concat(f, "px"),
                ref: s
            }, a.createElement("div", {
                className: v(g(m))
            }, t))))
        }
          , v = function(e, t, n, r) {
            var o = e.current;
            if (!o)
                return !1;
            var a = r.threshold || 10
              , s = Array.from(t.values()).filter((function(e) {
                var t, r = e.ref, o = e.opts;
                return n.includes(null !== (t = o.type) && void 0 !== t ? t : "") && !!r.current
            }
            )).map((function(e) {
                var t = e.ref
                  , n = e.opts
                  , r = n && n.offset
                  , o = Object(p.a)(t.current);
                return Object(p.h)(o, r)
            }
            ))
              , i = Object(p.a)(o);
            return !s.some((function(e) {
                return Object(p.f)(e, i, a)
            }
            ))
        }
          , x = function(e, t) {
            return function() {
                var n = Object(u.b)(t);
                return n.on("scroll_throttled", e),
                n.on("scroll_end", e),
                n.on("resize_throttled", e),
                function() {
                    n.off("scroll_throttled", e),
                    n.off("scroll_end", e),
                    n.off("resize_throttled", e)
                }
            }
        }
    },
    "./src/components/social/ShareButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return Z
        }
        )),
        n.d(t, "a", (function() {
            return te
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/extends.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/graphql-tag/src/index.js")
          , l = n.n(i)
          , c = n("./node_modules/react/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react-redux/es/index.js")
          , m = n("./src/framework/design-system/components/index.ts")
          , p = n("./src/framework/design-system/type/index.ts")
          , f = n("./src/framework/reporter/index.ts")
          , b = n("./src/framework/source/index.ts")
          , g = n("./src/framework/style/index.ts");
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var v = u.a.createElement("path", {
            d: "M18.26 10.55c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-7.75 7.79 7.77 7.77 0 0 0 6.54 7.68v-5.49H7.4v-2.2h1.9V8.92c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71"
        })
          , x = function(e) {
            return u.a.createElement("svg", h({
                width: 21,
                height: 21,
                viewBox: "0 0 21 21"
            }, e), v)
        }
          , E = n("./src/svg/facebook-square-25px.svg");
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var O = u.a.createElement("path", {
            d: "M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"
        })
          , w = function(e) {
            return u.a.createElement("svg", y({
                width: 29,
                height: 29
            }, e), O)
        };
        function C() {
            return (C = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var _ = u.a.createElement("path", {
            d: "M3 4.07C3 3.48 3.5 3 4.1 3h12.8c.6 0 1.1.48 1.1 1.07v12.86c0 .59-.5 1.07-1.1 1.07H4.1A1.1 1.1 0 0 1 3 16.93V4.07z"
        })
          , j = u.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.55 15.56V8.78H5.28v6.78h2.27zM6.4 7.86c.8 0 1.29-.52 1.29-1.17-.02-.67-.5-1.17-1.27-1.17-.78 0-1.28.5-1.28 1.17 0 .65.49 1.17 1.25 1.17h.01zM8.8 15.56h2.27v-3.79a1.24 1.24 0 0 1 1.24-1.37c.81 0 1.14.62 1.14 1.53v3.63h2.27v-3.89c0-2.08-1.12-3.05-2.61-3.05-1.22 0-1.76.68-2.06 1.15h.02v-.99H8.8c.03.64 0 6.78 0 6.78z",
            fill: "#fff"
        })
          , S = function(e) {
            return u.a.createElement("svg", C({
                width: 21,
                height: 21,
                viewBox: "0 0 21 21",
                fill: "none"
            }, e), _, j)
        };
        function k() {
            return (k = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var P = u.a.createElement("path", {
            d: "M4 5.22C4 4.55 4.56 4 5.26 4h14.48c.7 0 1.26.55 1.26 1.22v14.56c0 .67-.56 1.22-1.26 1.22H5.26C4.56 21 4 20.45 4 19.78V5.22z"
        })
          , I = u.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.15 18.23v-7.68H6.6v7.68h2.56zM7.87 9.51c.9 0 1.45-.6 1.45-1.33-.01-.75-.56-1.33-1.43-1.33-.88 0-1.46.58-1.46 1.33 0 .74.56 1.33 1.42 1.33h.02zM10.57 18.23h2.57v-4.29c0-.23.02-.45.09-.62.18-.46.6-.93 1.31-.93.93 0 1.3.7 1.3 1.73v4.11h2.57v-4.4c0-2.36-1.26-3.46-2.95-3.46-1.39 0-2 .77-2.34 1.3h.02v-1.12h-2.57c.04.72 0 7.68 0 7.68z",
            fill: "#fff"
        })
          , T = function(e) {
            return u.a.createElement("svg", k({
                width: 25,
                height: 25,
                viewBox: "0 0 25 25",
                fill: "none"
            }, e), P, I)
        };
        function R() {
            return (R = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var A = u.a.createElement("path", {
            d: "M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"
        })
          , L = u.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z",
            fill: "#fff"
        })
          , M = function(e) {
            return u.a.createElement("svg", R({
                width: 29,
                height: 29,
                viewBox: "0 0 29 29",
                fill: "none"
            }, e), A, L)
        }
          , B = n("./src/svg/twitter-filled-21px.svg")
          , D = n("./src/svg/twitter-filled-25px.svg");
        function N() {
            return (N = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var U = u.a.createElement("path", {
            d: "M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"
        })
          , F = function(e) {
            return u.a.createElement("svg", N({
                width: 29,
                height: 29
            }, e), U)
        }
          , H = n("./src/util/hooks/useIsEligibleToViewNewResponses.tsx")
          , V = n("./src/util/routes.ts");
        function z() {
            var e = s()(["\n  fragment ShareButton_post on Post {\n    id\n  }\n"]);
            return z = function() {
                return e
            }
            ,
            e
        }
        var G = {
            fill: "#3b5998"
        }
          , q = {
            fill: "#38a1f3"
        }
          , W = {
            fill: "#292929"
        }
          , $ = function(e) {
            return {
                fill: e.baseColor.fill.lighter
            }
        }
          , Y = function(e) {
            return {
                fill: e.baseColor.fill.normal
            }
        }
          , K = function(e) {
            return {
                fill: e.baseColor.fill.lighter
            }
        }
          , Q = function() {
            return {
                opacity: .25,
                cursor: "not-allowed"
            }
        }
          , X = {
            marginRight: "8px"
        }
          , J = {
            FACEBOOK: "Facebook",
            TWITTER: "Twitter",
            LINKEDIN: "LinkedIn"
        }
          , Z = l()(z());
        function ee(e) {
            var t = e.buttonStyle
              , n = e.socialPlatform
              , r = Object(g.useCx)()
              , o = Object(H.a)();
            switch (t) {
            case "LINK_DISABLED":
                switch (n) {
                case "FACEBOOK":
                    return c.createElement(w, {
                        className: r(Q)
                    });
                case "TWITTER":
                    return c.createElement(F, {
                        className: r(Q)
                    });
                case "LINKEDIN":
                    return c.createElement(M, {
                        className: r(Q)
                    });
                default:
                    return null
                }
            case "LINK":
                if (o)
                    switch (n) {
                    case "FACEBOOK":
                        return c.createElement(w, {
                            className: r(K)
                        });
                    case "TWITTER":
                        return c.createElement(F, {
                            className: r(K)
                        });
                    case "LINKEDIN":
                        return c.createElement(M, {
                            className: r(K)
                        });
                    default:
                        return null
                    }
                switch (n) {
                case "FACEBOOK":
                    return c.createElement(w, {
                        className: r(Y)
                    });
                case "TWITTER":
                    return c.createElement(F, {
                        className: r(Y)
                    });
                case "LINKEDIN":
                    return c.createElement(M, {
                        className: r(Y)
                    });
                default:
                    return null
                }
            case "LINK_INLINE":
                switch (n) {
                case "FACEBOOK":
                    return c.createElement(x, {
                        className: r($)
                    });
                case "TWITTER":
                    return c.createElement(B.a, {
                        className: r($)
                    });
                case "LINKEDIN":
                    return c.createElement(S, {
                        className: r($)
                    });
                default:
                    return null
                }
            case "LINK_INLINE_SHORT_LABEL":
                switch (n) {
                case "FACEBOOK":
                    return c.createElement(E.a, {
                        className: r($)
                    });
                case "TWITTER":
                    return c.createElement(D.a, {
                        className: r($)
                    });
                case "LINKEDIN":
                    return c.createElement(T, {
                        className: r($)
                    });
                default:
                    return null
                }
            case "BUTTON_BRANDED":
                switch (n) {
                case "FACEBOOK":
                    return c.createElement(x, {
                        className: r([G, X])
                    });
                case "TWITTER":
                    return c.createElement(B.a, {
                        className: r([q, X])
                    });
                case "LINKEDIN":
                    return c.createElement(S, {
                        className: r([W, X])
                    });
                default:
                    return null
                }
            default:
                return null
            }
        }
        var te = Object(d.c)((function(e) {
            var t = e.config;
            return {
                authDomain: t.authDomain,
                isAmp: t.isAmp
            }
        }
        ))((function(e) {
            var t, n = e.authDomain, r = e.isAmp, a = e.post, s = e.buttonStyle, i = e.socialPlatform, l = Object(f.c)(), u = Object(b.f)();
            if ("FACEBOOK" === i)
                t = Object(V.S)(n, a.id);
            else if ("TWITTER" === i)
                t = Object(V.ic)(n, a.id);
            else {
                if ("LINKEDIN" !== i)
                    return null;
                t = Object(V.gb)(n, a.id)
            }
            var d = J[i];
            if (!d)
                return null;
            var g = {
                href: t,
                onClick: function() {
                    u && l.event("post.shareOpen", {
                        postId: a.id,
                        source: u,
                        dest: i.toLowerCase(),
                        dialogType: "native"
                    })
                },
                target: "_blank",
                noFollow: !0
            };
            if (!r) {
                delete g.href,
                delete g.target;
                var h = g.onClick;
                g.onClick = function() {
                    h();
                    var e = Math.max((window.outerHeight || 200) / 2 - 560, 100)
                      , n = (window.outerWidth || 200) / 2 - 250;
                    "LINKEDIN" === i ? window.open(t, "LIP", "resizable,scrollbars,status,top=".concat(e, ",left=").concat(n, ",height=").concat(560, ",width=").concat(500)) : window.open(t)
                }
            }
            switch (s) {
            case "LINK_DISABLED":
                return c.createElement(m.H, {
                    darkTheme: !0,
                    popoverRenderFn: function() {
                        return c.createElement(m.b, {
                            padding: "8px",
                            whiteSpace: "nowrap"
                        }, "This feature is temporarily disabled.")
                    },
                    placement: "top",
                    targetDistance: 15
                }, c.createElement(ee, {
                    buttonStyle: s,
                    socialPlatform: i
                }));
            case "LINK":
                return c.createElement(m.t, g, c.createElement(ee, {
                    buttonStyle: s,
                    socialPlatform: i
                }));
            case "LINK_INLINE":
                return c.createElement(m.t, g, c.createElement(ee, {
                    buttonStyle: s,
                    socialPlatform: i
                }), c.createElement(m.b, {
                    display: "inline",
                    marginLeft: "8px",
                    marginTop: "2px"
                }, c.createElement(p.b, {
                    scale: "S",
                    tag: "span"
                }, "Share on ", d)));
            case "LINK_INLINE_SHORT_LABEL":
                return c.createElement(m.t, g, c.createElement(ee, {
                    buttonStyle: s,
                    socialPlatform: i
                }), c.createElement(m.b, {
                    display: "inline",
                    marginLeft: "16px",
                    marginTop: "2px"
                }, c.createElement(p.b, {
                    scale: "S",
                    tag: "span"
                }, d)));
            case "BUTTON_BRANDED":
                return c.createElement(m.c, o()({}, g, {
                    buttonStyle: "SOCIAL",
                    size: "REGULAR",
                    width: "212px"
                }), c.createElement(m.b, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }, c.createElement(ee, {
                    buttonStyle: s,
                    socialPlatform: i
                }), "Share with ".concat(d)));
            default:
                return null
            }
        }
        ))
    },
    "./src/components/social/ShareButtons.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return m
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./src/components/social/ShareButton.tsx")
          , c = n("./src/framework/design-system/components/index.ts")
          , u = n("./src/framework/source/index.ts");
        function d() {
            var e = o()(["\n  fragment ShareButtons_post on Post {\n    id\n    isLimitedState\n    visibility\n    ...ShareButton_post\n  }\n  ", "\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        var m = s()(d(), l.b);
        function p(e) {
            var t = e.post
              , n = e.source
              , r = "UNLISTED" === t.visibility;
            return i.createElement(u.b, {
                source: n
            }, i.createElement(c.b, {
                flexGrow: "0",
                paddingRight: "6px"
            }, !r && i.createElement(l.a, {
                socialPlatform: "TWITTER",
                buttonStyle: t.isLimitedState ? "LINK_DISABLED" : "LINK",
                post: t
            })), i.createElement(c.b, {
                flexGrow: "0",
                paddingRight: "6px"
            }, !r && i.createElement(l.a, {
                socialPlatform: "LINKEDIN",
                buttonStyle: t.isLimitedState ? "LINK_DISABLED" : "LINK",
                post: t
            })), i.createElement(c.b, {
                flexGrow: "0",
                paddingRight: "6px"
            }, !r && i.createElement(l.a, {
                socialPlatform: "FACEBOOK",
                buttonStyle: t.isLimitedState ? "LINK_DISABLED" : "LINK",
                post: t
            })))
        }
    },
    "./src/components/stream/Quote.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return _
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/classCallCheck.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/createClass.js")
          , l = n.n(i)
          , c = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")
          , u = n.n(c)
          , d = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")
          , m = n.n(d)
          , p = n("./node_modules/@babel/runtime/helpers/inherits.js")
          , f = n.n(p)
          , b = n("./node_modules/graphql-tag/src/index.js")
          , g = n.n(b)
          , h = n("./node_modules/react/index.js")
          , v = n("./src/components/post/paragraph/TextParagraph.tsx")
          , x = n("./src/framework/design-system/components/index.ts")
          , E = n("./src/schema-types/globalTypes.ts")
          , y = n("./src/util/quote.ts")
          , O = n("./src/util/routes.ts");
        function w() {
            var e = o()(["\n  fragment Quote_quote on Quote {\n    quoteId\n    userId\n    post {\n      id\n      title\n      mediumUrl\n      creator {\n        id\n        username\n        name\n      }\n    }\n    startOffset\n    endOffset\n    paragraphs {\n      text\n      type\n      markups {\n        anchorType\n        end\n        href\n        rel\n        start\n        title\n        type\n        userId\n      }\n      ...TextParagraph_paragraph\n    }\n    ...buildQuotePreviewParagraph_quote\n  }\n  ", "\n  ", "\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        var C = function(e) {
            function t() {
                return s()(this, t),
                u()(this, m()(t).apply(this, arguments))
            }
            return f()(t, e),
            l()(t, [{
                key: "render",
                value: function() {
                    var e = this.props.quote;
                    if (!e || null == e.startOffset || null == e.endOffset || !e.post || !e.post.id)
                        return null;
                    var t = e.post.title
                      , n = e.post.creator && e.post.creator.name
                      , r = e.post.creator && e.post.creator.username;
                    if (!n || !r)
                        return null;
                    var o = Object(y.b)(e)
                      , a = o && o.type;
                    return o && a ? a === E.l.IMG || a === E.l.IFRAME || a === E.l.COVER_TITLE || a === E.l.HR || a === E.l.MIXTAPE_EMBED || a === E.l.SECTION_CAPTION ? null : h.createElement(x.b, {
                        paddingLeft: "20px",
                        paddingRight: "20px"
                    }, h.createElement(x.z, {
                        ui: "REGULAR"
                    }, h.createElement(x.d, null, "From", " ", h.createElement(x.t, {
                        href: Object(O.Db)(e.post),
                        inline: !0
                    }, t), " ", "by", " ", h.createElement(x.t, {
                        href: Object(O.sc)(r),
                        inline: !0
                    }, n))), h.createElement(x.f, {
                        href: Object(O.Db)(e.post)
                    }, h.createElement(v.g, {
                        paragraph: o,
                        paragraphStyle: a,
                        spaceTop: 30,
                        richTextStyle: "STREAM"
                    }))) : null
                }
            }]),
            t
        }(h.Component);
        t.b = C;
        var _ = g()(w(), y.c, v.d)
    },
    "./src/components/susi/RedirectToSignIn.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./node_modules/react-redux/es/index.js")
          , a = n("./src/components/navigation/Redirect.tsx")
          , s = n("./src/util/navigation.ts")
          , i = n("./src/util/routes.ts")
          , l = function(e) {
            var t = e.opt_isDraft
              , n = Object(o.f)((function(e) {
                return {
                    authDomain: e.config.authDomain,
                    currentLocation: e.navigation.currentLocation
                }
            }
            ), o.d)
              , l = n.authDomain
              , c = n.currentLocation
              , u = Object(s.a)(Object(i.Ob)(l), {
                operation: "login",
                redirect: c,
                isDraft: t ? "1" : "0"
            });
            return r.createElement(a.a, {
                to: u,
                temporary: !0
            })
        }
    },
    "./src/components/susi/alternate-user/AlternateUserEmail.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return O
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , l = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n("./node_modules/react-redux/es/index.js")
          , p = n("./src/components/session/WithViewer.tsx")
          , f = n("./src/components/session/useFlag.tsx")
          , b = n("./src/components/susi/GoogleRecaptcha.tsx")
          , g = n("./src/components/susi/helpers/index.ts")
          , h = n("./src/framework/reporter/index.ts")
          , v = n("./src/framework/source/index.ts")
          , x = n("./src/screens/helpers/visits.ts");
        function E() {
            var e = s()(["\n  mutation SendAcctAuthEmailByUserId(\n    $userId: String!\n    $redirect: String\n    $fullName: String\n    $captchaValue: String\n  ) {\n    sendAcctAuthEmailByUserId(\n      userId: $userId\n      redirect: $redirect\n      fullName: $fullName\n      captchaValue: $captchaValue\n    ) {\n      ... on SusiMethod {\n        value\n      }\n      ... on BadRequest {\n        message\n      }\n      ... on FailedChallenge {\n        message\n      }\n      ... on NotFound {\n        message\n      }\n    }\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        var y = u()(E())
          , O = function(e) {
            var t = e.actionUrl
              , n = e.children
              , r = e.onSuccess
              , a = e.token
              , s = e.userId
              , c = Object(h.c)()
              , u = !!Object(f.a)("skip_sign_in_recaptcha")
              , E = d.useState(!1)
              , O = o()(E, 2)
              , w = O[0]
              , C = O[1]
              , _ = Object(m.f)((function(e) {
                return e.navigation.currentLocation
            }
            ))
              , j = Object(m.f)((function(e) {
                return e.session.user.id
            }
            ))
              , S = function() {
                C(!1)
            }
              , k = Object(v.d)()
              , P = Object(v.g)()
              , I = t && a ? Object(g.a)(_, k, P, t, a) : Object(g.a)(_, k, P)
              , T = Object(l.e)(p.a)
              , R = T.loading
              , A = T.error
              , L = T.data
              , M = (L = void 0 === L ? {
                viewer: void 0
            } : L).viewer;
            return R || A ? d.createElement(d.Fragment, null) : d.createElement(i.a, {
                mutation: y,
                onCompleted: function(e) {
                    switch (e.sendAcctAuthEmailByUserId.__typename) {
                    case "SusiMethod":
                        c.event("site.loginLinkSent", {}),
                        r && r();
                        break;
                    case "FailedChallenge":
                        c.event("site.loginByEmailCaptchaFailure", {}),
                        C(!1);
                        break;
                    case "BadRequest":
                    case "NotFound":
                    default:
                        S()
                    }
                },
                onError: S
            }, (function(e) {
                var t = function(t) {
                    var n = M ? M.id : j;
                    Object(x.m)(!0, n, s, "Email", !1);
                    c.event("susi.methodClicked", {
                        entryPoint: P,
                        operation: "login",
                        susiMethod: "medium".toLowerCase(),
                        alternateUserSuggestionShown: !0,
                        alternateUserSuggestionAccountType: "medium".toLowerCase(),
                        alternateUserSuggestionTargetUserId: s,
                        alternateUserSuggestionSourceUserId: n
                    }),
                    e({
                        variables: {
                            userId: s,
                            redirect: I,
                            captchaValue: t
                        }
                    })
                };
                return d.createElement(d.Fragment, null, !u && d.createElement(b.a, {
                    callback: t,
                    shouldExecuteRecaptcha: w
                }), n({
                    handleSubmit: function() {
                        return u ? t(null) : C(!0)
                    }
                }))
            }
            ))
        }
    },
    "./src/components/susi/alternate-user/AlternateUserSocial.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/components/susi/oauth-buttons/FacebookSusiButton.tsx")
          , a = n("./src/components/susi/oauth-buttons/GoogleSusiButton.tsx")
          , s = n("./src/components/susi/oauth-buttons/TwitterSusiButton.tsx")
          , i = n("./src/framework/track/SusiPresentationTracker.tsx")
          , l = function(e) {
            var t = e.actionUrl
              , n = e.token
              , l = e.userSocialLogins
              , c = {
                actionUrl: t || "",
                operation: "login",
                token: n || "",
                targetUserId: l.userId,
                alternateUserSuggestion: !0
            };
            return r.createElement(i.a, {
                eventData: {
                    operation: c.operation
                }
            }, l.google ? r.createElement(a.a, c) : l.facebook ? r.createElement(o.a, c) : l.twitter ? r.createElement(s.a, c) : r.createElement(r.Fragment, null))
        }
    },
    "./src/components/susi/alternate-user/NotYou.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return f
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , s = n("./node_modules/react/index.js")
          , i = n("./node_modules/react-redux/es/index.js")
          , l = n("./src/components/session/WithViewer.tsx")
          , c = n("./src/components/session/useFlag.tsx")
          , u = n("./src/framework/design-system/components/index.ts")
          , d = n("./src/framework/source/index.ts")
          , m = n("./src/store/actions/navigation.ts");
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var f = function(e) {
            var t = e.declineSuggestedAccount
              , n = e.isSocial
              , r = Object(i.f)((function(e) {
                return {
                    hasRenderedAlternateUserBanner: e.navigation.hasRenderedAlternateUserBanner
                }
            }
            ), i.d).hasRenderedAlternateUserBanner
              , f = !!Object(c.a)("enable_highlander_member_digest")
              , b = Object(d.g)()
              , g = Object(i.e)()
              , h = Object(a.e)(l.a)
              , v = h.loading
              , x = h.error
              , E = h.data
              , y = (E = void 0 === E ? {
                viewer: void 0
            } : E).viewer;
            if (v || x)
                return s.createElement(s.Fragment, null);
            var O = function(e) {
                return e ? s.createElement(u.t, {
                    onClick: function() {
                        return w("SIGNIN_OPTIONS")
                    },
                    linkStyle: "OBVIOUS"
                }, "See all login options") : s.createElement(s.Fragment, null, "Not you?", " ", s.createElement(u.t, {
                    onClick: function() {
                        return w("SIGNIN_OPTIONS")
                    },
                    linkStyle: "OBVIOUS"
                }, "Sign in"), " or ", s.createElement(u.t, {
                    onClick: function() {
                        return w("SIGNUP_OPTIONS")
                    },
                    linkStyle: "OBVIOUS"
                }, "create an account"))
            }
              , w = function(e) {
                var n = "SIGNIN_OPTIONS" === e ? "login" : "register";
                t(),
                g(Object(m.s)(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    operation: n,
                    step: e
                }, !!b && {
                    susiEntry: b
                })))
            };
            return f && r ? O(y) : y ? s.createElement(u.t, {
                onClick: function() {
                    return t()
                }
            }, "Not me") : O(n)
        }
    },
    "./src/components/susi/alternate-user/SusiAlternateUserController.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return w
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , u = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , d = n("./node_modules/graphql-tag/src/index.js")
          , m = n.n(d)
          , p = n("./node_modules/react/index.js")
          , f = n("./node_modules/react-redux/es/index.js")
          , b = n("./src/components/session/WithViewer.tsx")
          , g = n("./src/framework/reporter/index.ts")
          , h = n("./src/framework/source/index.ts")
          , v = n("./src/framework/source/SourceContext.tsx")
          , x = n("./src/screens/helpers/users.ts");
        function E() {
            var e = o()(["\n  query UserSocialLoginsQuery($userId: String!) {\n    userSocialLogins(userId: $userId) {\n      userId\n      twitter\n      facebook\n      google\n      redactedEmailAddress\n      isMember\n      emailAddress\n      userAvatar {\n        username\n        name\n        imageId\n        mediumMemberAt\n      }\n    }\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function(t) {
                    s()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var w = function(e) {
            var t = e.children
              , n = e.postRenderCallback
              , r = Object(g.c)()
              , o = Object(h.g)()
              , a = Object(f.f)((function(e) {
                return {
                    referrerSource: e.navigation.referrerSource,
                    sessionUserId: e.session.user.id
                }
            }
            ), f.d)
              , s = a.referrerSource
              , i = a.sessionUserId
              , d = Object(v.c)(s || "")
              , m = d.userId
              , E = d.name
              , y = p.useState({
                shouldRun: !1,
                showSuggestedAccount: !1,
                userSocialLogins: {
                    facebook: !1,
                    google: !1,
                    twitter: !1,
                    redactedEmailAddress: "",
                    emailAddress: "",
                    userAvatar: {
                        username: "",
                        name: "",
                        imageId: "",
                        mediumMemberAt: 0
                    },
                    userId: "",
                    isMember: !1
                }
            })
              , w = l()(y, 2)
              , _ = w[0]
              , j = w[1];
            p.useEffect((function() {
                var e = _.shouldRun
                  , t = _.showSuggestedAccount
                  , r = _.userSocialLogins;
                e && n(T, t, r)
            }
            ), [_.shouldRun]);
            var S = Object(u.e)(b.a)
              , k = S.loading
              , P = S.error
              , I = S.data
              , T = (I = void 0 === I ? {
                viewer: void 0
            } : I).viewer;
            if (k || P)
                return p.createElement(p.Fragment, null);
            var R = !("email" !== E || T && T.mediumMemberAt || !m);
            return R && m ? p.createElement(c.b, {
                query: C,
                variables: {
                    userId: m
                }
            }, (function(e) {
                var a = e.loading
                  , s = e.error
                  , l = e.data
                  , c = (l = void 0 === l ? {} : l).userSocialLogins
                  , u = !(a || s || !c || T && !c.isMember || !c.facebook && !c.google && !c.twitter && !c.redactedEmailAddress)
                  , d = O({
                    loading: a,
                    showSuggestedAccount: u
                }, u && {
                    userSocialLogins: c,
                    declineSuggestedAccount: function() {
                        var e = Object(x.a)(c);
                        r.event("susi.suggestNotYou", {
                            entryPoint: o,
                            susiMethod: e,
                            alternateUserSuggestionAccountType: e,
                            alternateUserSuggestionTargetUserId: null == c ? void 0 : c.userId,
                            alternateUserSuggestionSourceUserId: T ? T.id : i
                        })
                    }
                });
                return !n || a || _.shouldRun || j({
                    shouldRun: !0,
                    showSuggestedAccount: u,
                    userSocialLogins: c
                }),
                t(d)
            }
            )) : (n && !_.shouldRun && j(O({}, _, {
                shouldRun: !0
            })),
            t({
                showSuggestedAccount: R,
                loading: !1
            }))
        }
          , C = m()(E())
    },
    "./src/components/susi/helpers/types.ts": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e.LOHighlightCTA = "lo_highlight_cta",
            e.LIHighlightCTA = "li_highlight_cta",
            e.RegWall = "regwall",
            e.SyndicatedRegwall = "syndicated_regwall"
        }(r || (r = {}))
    },
    "./src/components/tns/SuspendedBannerLoader.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return m
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/store/actions/navigation.ts");
        function u() {
            var e = o()(["\n  fragment SuspendedBannerLoader_post on Post {\n    id\n    isSuspended\n  }\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function d() {
            var e = o()(["\n  fragment SuspendedBannerLoader_user on User {\n    id\n    isSuspended\n  }\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        t.c = Object(l.c)()((function(e) {
            var t = e.dispatch
              , n = e.user
              , r = e.post;
            return i.useEffect((function() {
                n && n.isSuspended ? t(Object(c.m)({
                    duration: "NEXTPAGE",
                    message: "This is a suspended user.",
                    toastStyle: "ERROR"
                })) : r && r.isSuspended && t(Object(c.m)({
                    duration: "NEXTPAGE",
                    message: "This story is under investigation or was found in violation of the Medium Rules",
                    toastStyle: "ERROR"
                }))
            }
            ), []),
            null
        }
        ));
        var m = s()(d())
          , p = s()(u())
    },
    "./src/components/ui/AndroidAppDownloadButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/components/ui/image/index.ts")
          , a = n("./src/framework/design-system/components/index.ts")
          , s = n("./src/framework/reporter/index.ts")
          , i = n("./src/util/miroImage.ts")
          , l = n("./src/util/routes.ts")
          , c = function(e) {
            var t = e.entryPoint
              , n = e.height
              , c = void 0 === n ? 41 : n
              , u = e.width
              , d = void 0 === u ? 135 : u
              , m = Object(s.c)();
            return r.createElement(a.t, {
                href: Object(l.h)(),
                onClick: function() {
                    m.event("googlePlay.appStoreButtonClicked", {
                        entryPoint: t
                    })
                }
            }, r.createElement(o.c, {
                miroId: "1*W_RAPQ62h0em559zluJLdQ.png",
                width: d,
                height: c,
                strategy: i.a.Resample,
                alt: "A button that says 'Get it on, Google Play', and if clicked it will lead you to the Google Play store"
            }))
        }
    },
    "./src/components/ui/Card.tsx": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n("./src/framework/design-system/components/index.ts")
          , a = n("./src/framework/style/index.ts");
        t.a = function(e) {
            var t = e.children
              , n = Object(a.useTheme)();
            return r.createElement(o.b, {
                backgroundColor: "BACKGROUND",
                border: "BASE_LIGHTER",
                borderRadius: "5px",
                boxShadow: "0 1px 4px ".concat(n.baseColor.border.lighter),
                marginBottom: "24px",
                padding: "23px 0"
            }, t)
        }
    },
    "./src/components/ui/IosAppDownloadButton.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/components/ui/image/index.ts")
          , a = n("./src/framework/design-system/components/index.ts")
          , s = n("./src/framework/reporter/index.ts")
          , i = n("./src/framework/source/index.ts")
          , l = n("./src/util/miroImage.ts")
          , c = n("./src/util/navigation.ts")
          , u = n("./src/util/routes.ts")
          , d = function(e) {
            var t = e.entryPoint
              , n = e.height
              , d = void 0 === n ? 41 : n
              , m = e.width
              , p = void 0 === m ? 135 : m
              , f = Object(s.c)()
              , b = Object(i.f)()
              , g = Object(c.a)(Object(u.db)(), {
                ct: b
            });
            return r.createElement(a.t, {
                href: g,
                onClick: function() {
                    f.event("apple.appStoreButtonClicked", {
                        entryPoint: t
                    })
                }
            }, r.createElement(o.c, {
                miroId: "1*Crl55Tm6yDNMoucPo1tvDg.png",
                width: p,
                height: d,
                strategy: l.a.Resample,
                alt: "A button that says 'Download on the App Store', and if clicked it will lead you to the iOS App store"
            }))
        }
    },
    "./src/components/ui/banners/AlternateUserTopBanner.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return S
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , s = n("./node_modules/react/index.js")
          , i = n("./node_modules/react-redux/es/index.js")
          , l = n("./src/components/optimizely/OptimizelyWrapper.tsx")
          , c = n("./src/components/session/WithViewer.tsx")
          , u = n("./src/components/session/useFlag.tsx")
          , d = n("./src/components/style/BaseThemeProvider.tsx")
          , m = n("./src/components/susi/alternate-user/AlternateUserEmail.tsx")
          , p = n("./src/components/susi/alternate-user/AlternateUserSocial.tsx")
          , f = n("./src/components/susi/alternate-user/NotYou.tsx")
          , b = n("./src/components/susi/alternate-user/SusiAlternateUserController.tsx")
          , g = n("./src/components/susi/helpers/useReduxSusi.tsx")
          , h = n("./src/components/ui/banners/TopBanner.tsx")
          , v = n("./src/components/user/UserAvatar.tsx")
          , x = n("./src/framework/design-system/components/index.ts")
          , E = n("./src/framework/design-system/type/index.ts")
          , y = n("./src/framework/reporter/index.ts")
          , O = n("./src/framework/source/index.ts")
          , w = n("./src/screens/helpers/users.ts")
          , C = n("./src/store/actions/alternateUserTopBanner.ts")
          , _ = n("./src/store/actions/googleOneTap.ts")
          , j = function(e) {
            var t = e.userSocialLogins
              , n = Object(g.a)().openModal;
            return t.facebook || t.google || t.twitter ? s.createElement(p.a, {
                userSocialLogins: t
            }) : s.createElement(m.a, {
                onSuccess: function() {
                    return n({
                        step: "CHECK_YOUR_INBOX",
                        operation: "login",
                        susiEntry: "alternate_user_top_banner"
                    })
                },
                userId: t.userId
            }, (function(e) {
                var t = e.handleSubmit;
                return s.createElement(x.c, {
                    buttonStyle: "SOCIAL",
                    size: "REGULAR",
                    onClick: t
                }, "Send login link")
            }
            ))
        }
          , S = function() {
            var e = Object(a.e)(c.a).data
              , t = (e = void 0 === e ? {
                viewer: void 0
            } : e).viewer
              , n = Object(i.f)((function(e) {
                return e.session.user.id
            }
            ))
              , r = Object(i.e)()
              , m = Object(y.c)()
              , p = !!Object(u.a)("enable_highlander_member_digest")
              , g = s.useState(!1)
              , S = o()(g, 2)
              , k = S[0]
              , P = S[1]
              , I = s.useState("loading")
              , T = o()(I, 2)
              , R = T[0]
              , A = T[1];
            return s.useEffect((function() {
                r(Object(_.d)(!0)),
                P(!0)
            }
            ), []),
            s.useEffect((function() {
                "rendered" === R && r(Object(C.b)(!0)),
                "not_eligible" === R && r(Object(_.d)(!1))
            }
            ), [R]),
            s.createElement(O.b, {
                source: {
                    susiEntry: "alternate_user_top_banner"
                }
            }, s.createElement(b.a, {
                postRenderCallback: function(e, t, r) {
                    A(t ? "rendered" : "not_eligible"),
                    t && (m.event("experiment.eligible", {
                        experimentId: "358323e239a2"
                    }),
                    p && m.event("alternateUserBanner.viewed", {
                        alternateUserSuggestionAccountType: Object(w.a)(r),
                        alternateUserSuggestionTargetUserId: r.userId,
                        alternateUserSuggestionSourceUserId: e ? e.id : n
                    }))
                }
            }, (function(e) {
                var r, o = e.showSuggestedAccount, a = e.declineSuggestedAccount, i = e.userSocialLogins;
                return p && k && o && a && i ? s.createElement(d.b, null, s.createElement(h.a, {
                    onClose: function() {
                        return m.event("alternateUserBanner.dismissed", {
                            alternateUserSuggestionAccountType: Object(w.a)(i),
                            alternateUserSuggestionTargetUserId: i.userId,
                            alternateUserSuggestionSourceUserId: t ? t.id : n
                        })
                    }
                }, s.createElement(x.b, {
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    sm: {
                        alignItems: "center"
                    }
                }, s.createElement(x.b, {
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "21px",
                    sm: {
                        flexDirection: "column",
                        margin: "0 21px 21px",
                        textAlign: "center"
                    }
                }, !t && (null === (r = i.userAvatar) || void 0 === r ? void 0 : r.imageId) && s.createElement(x.b, {
                    display: "flex",
                    marginRight: "20px",
                    sm: {
                        marginBottom: "18px",
                        marginRight: "0"
                    }
                }, s.createElement(v.d, {
                    scale: "S",
                    user: i.userAvatar
                })), s.createElement(l.a, {
                    featureString: "alternate-user-top-banner",
                    target: "header"
                }, s.createElement(E.b, {
                    color: "DARKER",
                    scale: "M"
                }, function(e, t) {
                    var n = t.isMember
                      , r = t.redactedEmailAddress;
                    return s.createElement(s.Fragment, null, e ? "Switch" : "Sign in", " to your ", n ? "member " : "", "account (", s.createElement("b", null, r), ") for", n ? " unlimited access" : " your personalized experience", ".")
                }(t, i)))), s.createElement(x.b, {
                    alignItems: "center",
                    display: "flex",
                    sm: {
                        flexDirection: "column"
                    }
                }, s.createElement(j, {
                    userSocialLogins: i
                }), s.createElement(x.b, {
                    margin: "0 12px",
                    sm: {
                        margin: "24px 0 0"
                    }
                }, s.createElement(f.a, {
                    declineSuggestedAccount: a,
                    isSocial: !!(i.facebook || i.google || i.twitter)
                })))))) : s.createElement(s.Fragment, null)
            }
            )))
        }
    },
    "./src/components/ui/banners/SignInConfirmationBanner.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return C
        }
        ));
        var r = n("./node_modules/@babel/runtime/regenerator/index.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , l = n("./node_modules/react/index.js")
          , c = n("./node_modules/react-redux/es/index.js")
          , u = n("./src/components/optimizely/OptimizelyWrapper.tsx")
          , d = n("./src/components/session/WithViewer.tsx")
          , m = n("./src/components/session/useFlag.tsx")
          , p = n("./src/components/style/BaseThemeProvider.tsx")
          , f = n("./src/components/susi/helpers/useReduxSusi.tsx")
          , b = n("./src/components/ui/banners/TopBanner.tsx")
          , g = n("./src/components/user/UserAvatar.tsx")
          , h = n("./src/framework/design-system/components/index.ts")
          , v = n("./src/framework/design-system/type/index.ts")
          , x = n("./src/framework/reporter/index.ts")
          , E = n("./src/framework/source/index.ts")
          , y = n("./src/framework/source/SourceContext.tsx")
          , O = n("./src/screens/helpers/visits.ts")
          , w = n("./src/util/constants.ts")
          , C = function() {
            var e = Object(x.c)()
              , t = Object(f.a)().openModal
              , n = !!Object(m.a)("enable_confirm_sign_in")
              , r = l.useState(!1)
              , a = s()(r, 2)
              , C = a[0]
              , _ = a[1]
              , j = l.useState(!1)
              , S = s()(j, 2)
              , k = S[0]
              , P = S[1]
              , I = l.useState(!0)
              , T = s()(I, 2)
              , R = T[0]
              , A = T[1]
              , L = Object(i.e)(d.a).data
              , M = (L = void 0 === L ? {
                viewer: void 0
            } : L).viewer
              , B = Object(c.f)((function(e) {
                return {
                    referrerSource: e.navigation.referrerSource,
                    xsrf: e.session.xsrf
                }
            }
            ), c.d)
              , D = B.referrerSource
              , N = B.xsrf
              , U = Object(y.c)(D || "").name;
            return l.useEffect((function() {
                return _(!0)
            }
            ), []),
            l.useEffect((function() {
                if (C && M) {
                    e.event("experiment.eligible", {
                        experimentId: "b4152480e71c"
                    });
                    o.a.async((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                o.a.awrap(Object(O.g)(null == M ? void 0 : M.id, N));
                            case 2:
                                t = e.sent,
                                A(t);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    )),
                    n && Object(O.n)(M.id, N)
                }
                var t
            }
            ), [C]),
            l.useEffect((function() {
                k && n && e.event("signInConfirmationBanner.viewed", {})
            }
            ), [k]),
            !(n && C && M && U && "login" === U && M.createdAt) || Date.now() - M.createdAt <= 5 * w.c || R ? null : (k || P(!0),
            l.createElement(E.b, {
                source: {
                    susiEntry: "signin_confirmation_banner"
                },
                extendSource: !0
            }, l.createElement(p.b, null, l.createElement(b.a, {
                onClose: function() {
                    return e.event("signInConfirmationBanner.dismissed", {})
                }
            }, l.createElement(h.b, {
                display: "flex",
                alignItems: "center"
            }, l.createElement(h.b, {
                display: "none",
                marginRight: "20px",
                sm: {
                    display: "flex"
                }
            }, l.createElement(g.d, {
                scale: "S",
                user: M
            })), l.createElement(v.b, {
                color: "DARKER",
                scale: "M"
            }, l.createElement(u.a, {
                featureString: "confirm-sign-in-banner",
                target: "header",
                tag: "span"
            }, "Welcome back. You are signed", " ", M.mediumMemberAt ? "into your member account " : "in as ", l.createElement("b", null, M.email), ".", " "), l.createElement(h.t, {
                onClick: function() {
                    e.event("signInConfirmationBanner.notYouClicked", {}),
                    t({
                        operation: "login",
                        step: "SIGNIN_OPTIONS",
                        susiEntry: "signin_confirmation_banner"
                    })
                },
                linkStyle: "OBVIOUS"
            }, "Not you?")))))))
        }
    },
    "./src/components/ui/banners/TopBanner.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/framework/design-system/components/index.ts")
          , a = function(e) {
            var t = e.children
              , n = e.onClose;
            return r.createElement(o.I, {
                initialVisibility: !0
            }, (function(e) {
                var a = e.isVisible
                  , s = e.hide;
                return a && r.createElement(o.b, {
                    backgroundColor: "BASE_LIGHT",
                    borderBottom: "BASE_LIGHTER",
                    borderTop: "BASE_LIGHTER"
                }, r.createElement(o.v, null, r.createElement(o.b, {
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "20px",
                    paddingTop: "20px"
                }, t, r.createElement(o.g, {
                    onClick: function() {
                        n && n(),
                        s()
                    },
                    isPositionAbsolute: !1,
                    size: "REGULAR"
                }))))
            }
            ))
        }
    },
    "./src/components/user/UserBlockConfirmDialog.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/framework/design-system/components/index.ts");
        function a(e) {
            var t = e.onConfirm
              , n = e.isVisible
              , a = e.hide
              , s = e.isInResponsesSidebar;
            return r.createElement(o.h, {
                onConfirm: t,
                isVisible: n,
                hide: a,
                titleText: "Block this user?",
                cancelText: "Cancel",
                confirmText: "Block",
                noPortal: s,
                withCloseButton: !s && void 0,
                isDestructiveAction: !0
            }, r.createElement(o.b, {
                paddingBottom: "2px"
            }, "They will no longer be able to follow you or view your content."), r.createElement(o.t, {
                inline: !0,
                linkStyle: "OBVIOUS",
                target: "_blank",
                href: "https://help.medium.com/hc/en-us/articles/217048077-Block-a-user"
            }, "Learn more about blocking"), ".")
        }
    },
    "./src/components/user/UserReportStoryDialog.tsx": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./src/framework/design-system/components/index.ts")
          , i = n("./src/framework/design-system/type/index.ts");
        t.a = function(e) {
            var t = e.isVisible
              , n = e.hide
              , r = e.onSubmit
              , l = e.isResponse
              , c = a.useState(!1)
              , u = o()(c, 2)
              , d = u[0]
              , m = u[1]
              , p = a.useState("Spam")
              , f = o()(p, 2)
              , b = f[0]
              , g = f[1]
              , h = a.useCallback((function(e, t) {
                return g(t)
            }
            ), []);
            return a.createElement(s.i, {
                isVisible: t,
                hide: n,
                noPortal: l,
                withCloseButton: !1,
                customBackgroundColor: l ? "rgba(255, 255, 255, 0.97)" : "rgba(255, 255, 255, 0.94)"
            }, a.createElement(s.b, {
                height: "550px",
                width: l ? "100%" : "900px",
                background: l ? "none" : "white",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: l ? "none" : "rgba(0, 0, 0, 0.15) 0px 2px 10px",
                padding: "18px",
                sm: {
                    boxShadow: "none",
                    background: "none"
                },
                xs: {
                    boxShadow: "none",
                    background: "none"
                }
            }, !l && a.createElement(s.b, {
                alignSelf: "flex-end"
            }, a.createElement(s.g, {
                onClick: n,
                size: "LARGE",
                isPositionAbsolute: !1
            })), a.createElement(s.b, {
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                alignItems: l ? "flex-start" : "center"
            }, a.createElement(i.c, {
                scale: "M"
            }, "Report ", l ? "Response" : "Story"), a.createElement(s.b, {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingRight: "5px",
                marginBottom: "30px"
            }, a.createElement(s.b, {
                marginTop: "25px",
                marginBottom: "30px",
                padding: "5px 0"
            }, a.createElement(s.y, {
                onChange: h,
                value: b,
                radioStyle: "SUBTLE",
                options: [{
                    name: "Spam",
                    value: "Spam"
                }, {
                    name: "Harassment",
                    value: "Harassment"
                }, {
                    name: "Rules Violation",
                    value: "Other"
                }]
            })), a.createElement(s.e, {
                checked: d,
                onChange: function() {
                    m(!d)
                }
            }, a.createElement(s.b, {
                paddingTop: l ? "16px" : "0"
            }, "Also block the author of this ", l ? "response" : "story"))), a.createElement(s.b, {
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px"
            }, a.createElement(s.b, {
                marginRight: "8px"
            }, a.createElement(s.c, {
                onClick: n
            }, "Cancel")), a.createElement(s.c, {
                buttonStyle: "ERROR",
                onClick: function() {
                    r(d, b),
                    n()
                }
            }, "Report")), a.createElement(s.b, {
                marginTop: "50px",
                textAlign: l ? "left" : "center"
            }, a.createElement(s.d, null, "Report", " ", a.createElement(s.t, {
                href: "https://medium.com/policy/mediums-copyright-and-dmca-policy-d126f73695",
                linkStyle: "OBVIOUS",
                target: "_blank",
                inline: !0
            }, "copyright infringement"), " ", "or", " ", a.createElement(s.t, {
                href: "https://medium.com/policy/mediums-trademark-policy-e3bb53df59a7",
                linkStyle: "OBVIOUS",
                target: "_blank",
                inline: !0
            }, "trademark infringement"), ". ", !l && a.createElement("br", null), "Read", " ", a.createElement(s.t, {
                href: "https://medium.com/policy/medium-rules-30e5502c4eb4",
                linkStyle: "OBVIOUS",
                target: "_blank",
                inline: !0
            }, "our rules"), ".")))))
        }
    },
    "./src/components/user/UserUnblockButton.tsx": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/@babel/runtime/helpers/classCallCheck.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/createClass.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")
          , l = n.n(i)
          , c = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")
          , u = n.n(c)
          , d = n("./node_modules/@babel/runtime/helpers/inherits.js")
          , m = n.n(d)
          , p = n("./node_modules/react/index.js")
          , f = n("./src/components/mutations/UserUnblockMutation.tsx")
          , b = n("./src/components/session/WithViewer.tsx")
          , g = n("./src/framework/design-system/components/index.ts")
          , h = function(e) {
            function t(e) {
                var n;
                return o()(this, t),
                (n = l()(this, u()(t).call(this, e))).state = {
                    isHovering: !1
                },
                n
            }
            return m()(t, e),
            s()(t, [{
                key: "handleMouseEnter",
                value: function() {
                    this.setState({
                        isHovering: !0
                    })
                }
            }, {
                key: "handleMouseLeave",
                value: function() {
                    this.setState({
                        isHovering: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.buttonSize
                      , r = t.targetUserId
                      , o = this.state.isHovering;
                    return p.createElement(b.b, null, (function(t) {
                        return p.createElement(f.a, {
                            targetUserId: r,
                            viewerId: t && t.id
                        }, (function(t) {
                            var r = t.mutate;
                            return p.createElement(g.c, {
                                buttonStyle: o ? "SUBTLE" : "ERROR",
                                onClick: r,
                                size: n || "REGULAR",
                                onMouseEnter: function() {
                                    return e.handleMouseEnter()
                                },
                                onMouseLeave: function() {
                                    return e.handleMouseLeave()
                                }
                            }, o ? "Unblock" : "Blocked")
                        }
                        ))
                    }
                    ))
                }
            }]),
            t
        }(p.Component);
        t.a = h
    },
    "./src/framework/design-system/type/Type.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./src/framework/design-system/type/createClampRule.ts")
          , i = n("./src/framework/design-system/type/createCropRule.ts")
          , l = n("./src/framework/design-system/type/createSizeRule.ts")
          , c = n("./src/framework/design-system/util/style/responsiveStyles.ts")
          , u = n("./src/framework/style/index.ts")
          , d = function(e) {
            var t = e.fontConfig
              , n = e.scale
              , r = e.tag
              , d = e.children
              , m = e.additionalRules
              , p = e.clamp
              , f = e.cropMargins
              , b = Object(u.useCx)()
              , g = r
              , h = {
                fontFamily: t.family,
                fontWeight: t.weight
            }
              , v = Object(c.c)((function(e) {
                var n = o()(e, 1)[0];
                return t.lineHeight[n]
            }
            ), n)
              , x = Object(l.a)({
                fontConfig: t,
                scale: n
            })
              , E = p ? Object(s.a)({
                clamp: p,
                lineHeight: v
            }) : void 0
              , y = f ? Object(i.a)({
                fontConfig: t,
                scale: n
            }) : void 0;
            return a.createElement(g, {
                className: b([h, x, E, y, m])
            }, d)
        }
    },
    "./src/handlers/EmbeddedPostHandler.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return g
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , s = n("./node_modules/graphql-tag/src/index.js")
          , i = n.n(s)
          , l = n("./node_modules/react/index.js")
          , c = n("./src/framework/reporter/index.ts")
          , u = n("./src/components/post/body/PostBody.tsx");
        function d() {
            var e = o()(["\n  fragment PostContentScreen_post on Post {\n    id\n    title\n    # please note that the postMeteringOptions are defined in the postHandler file\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        ...PostBody_bodyModel\n      }\n    }\n    creator {\n      id\n      ...PostBody_creator\n    }\n  }\n  ", "\n  ", "\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        function m(e) {
            var t = e.post
              , n = {
                bodyModel: t.content.bodyModel,
                creator: t.creator,
                postBodyInserts: null,
                ref: null,
                richTextStyle: "FULL_PAGE",
                customStyleSheet: null
            };
            return l.createElement(u.f, n)
        }
        var p = i()(d(), u.b, u.a);
        function f() {
            var e = o()(["\n  query EmbeddedPostHandler($postId: ID!, $postMeteringOptions: PostMeteringOptions) {\n    post(id: $postId) {\n      ...PostContentScreen_post\n    }\n  }\n  ", "\n"]);
            return f = function() {
                return e
            }
            ,
            e
        }
        var b = i()(f(), p)
          , g = function(e) {
            var t = e.postId
              , n = e.children
              , r = Object(c.c)();
            return l.createElement(a.b, {
                query: b,
                variables: {
                    postId: t,
                    postMeteringOptions: {
                        source: null,
                        referrer: null,
                        sk: null
                    }
                }
            }, (function(e) {
                var o = e.loading
                  , a = e.error
                  , s = e.data
                  , i = (s = void 0 === s ? {} : s).post;
                return o ? n(null) : a ? (r.event("embeddedPost.error", {
                    errorMessage: a.message,
                    postId: t
                }),
                n(null)) : i ? (r.event("embeddedPost.postPresented", {
                    postId: t
                }),
                n(l.createElement(m, {
                    post: i
                }))) : (r.event("embeddedPost.noPost", {
                    postId: t
                }),
                n(null))
            }
            ))
        }
    },
    "./src/handlers/PostHandler.tsx": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "PostHandlerQuery", (function() {
            return f
        }
        )),
        n.d(t, "PostHandler", (function() {
            return b
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./node_modules/react/index.js")
          , l = n("./node_modules/react-redux/es/index.js")
          , c = n("./src/framework/source/index.ts")
          , u = n("./src/handlers/SharedPostHandler.tsx")
          , d = n("./src/screens/PostScreen.tsx")
          , m = n("./src/util/hooks/postRecircHooks.tsx");
        function p() {
            var e = o()(["\n  query PostHandler(\n    $postId: ID!\n    $postMeteringOptions: PostMeteringOptions\n    $includePostInternalLinks: Boolean!\n    $includePostRecirc: Boolean = false\n    $includeSequenceRecirc: Boolean = false\n    $postRecircPaging: PaginationLimit\n  ) {\n    meterPost(postId: $postId, postMeteringOptions: $postMeteringOptions) {\n      __typename\n      ... on MeteringInfo {\n        ...PostScreen_meteringInfo\n      }\n    }\n    postResult(id: $postId) {\n      __typename\n      ...SharedPostHandler_postResult\n      ... on Post {\n        ...PostScreen_post\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        var f = s()(p(), d.b, u.b, d.c)
          , b = Object(l.c)((function(e) {
            return {
                recircOptions: e.config.recircOptions
            }
        }
        ))((function(e) {
            var t, n, r = e.match, o = e.recircOptions, a = Object(m.a)(), s = (a ? null == o || null === (t = o.v2) || void 0 === t ? void 0 : t.limit : null == o || null === (n = o.v1) || void 0 === n ? void 0 : n.limit) || 3;
            return i.createElement(u.a, {
                match: r,
                query: f,
                extraVariables: {
                    includePostInternalLinks: a,
                    postRecircPaging: s
                }
            }, (function(e) {
                var t = e.meterPost
                  , n = e.postId
                  , r = e.postResult
                  , o = e.viewer;
                return i.createElement(c.b, {
                    source: {
                        name: "post_page",
                        postId: n
                    }
                }, i.createElement(d.a, {
                    viewer: o,
                    meteringInfo: t,
                    post: r
                }))
            }
            ))
        }
        ))
    },
    "./src/handlers/SharedPostHandler.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return P
        }
        )),
        n.d(t, "a", (function() {
            return I
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/@apollo/react-components/lib/react-components.esm.js")
          , l = n("./node_modules/graphql-tag/src/index.js")
          , c = n.n(l)
          , u = n("./node_modules/react/index.js")
          , d = n("./node_modules/react-redux/es/index.js")
          , m = n("./src/components/error/PostResultError.tsx")
          , p = n("./node_modules/url/url.js")
          , f = n.n(p)
          , b = n("./src/components/navigation/Redirect.tsx")
          , g = n("./src/util/navigation.ts");
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v() {
            var e = s()(["\n  fragment PostCanonicalizer_post on Post {\n    mediumUrl\n  }\n"]);
            return v = function() {
                return e
            }
            ,
            e
        }
        var x = c()(v())
          , E = function(e) {
            var t = e.post
              , n = e.matchedPath
              , r = e.children
              , a = Object(d.f)((function(e) {
                var t = e.navigation
                  , n = t.host
                  , r = t.referrerSource;
                return {
                    currentHost: n,
                    shareKey: t.shareKey,
                    source: r
                }
            }
            ), d.d)
              , s = a.currentHost
              , i = a.shareKey
              , l = a.source
              , c = t.mediumUrl;
            if (!c)
                return r;
            var m = f.a.parse(decodeURIComponent(c))
              , p = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        o()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, l ? {
                source: l
            } : {}, {}, i ? {
                sk: i
            } : {});
            return s !== m.host ? u.createElement(b.a, {
                to: Object(g.a)(c, p)
            }) : m.path && n !== m.path ? u.createElement(b.a, {
                to: Object(g.a)(m.path, p)
            }) : r
        }
          , y = n("./src/components/session/WithViewer.tsx")
          , O = n("./src/handlers/SharedPostContext.tsx")
          , w = n("./src/screens/ErrorScreen.tsx")
          , C = n("./src/screens/LoadingScreen.tsx")
          , _ = n("./src/screens/NotFoundScreen.tsx")
          , j = n("./src/util/routes.ts");
        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function k() {
            var e = s()(["\n  fragment SharedPostHandler_postResult on PostResult {\n    __typename\n    ...PostResultError_postResult\n    ... on Post {\n      ...PostCanonicalizer_post\n    }\n  }\n  ", "\n  ", "\n"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        var P = c()(k(), m.b, x)
          , I = function(e) {
            var t = e.children
              , n = e.match
              , r = e.query
              , a = e.extraVariables
              , s = void 0 === a ? {} : a
              , l = Object(d.f)((function(e) {
                var t = e.navigation;
                return {
                    source: t.referrerSource || void 0,
                    referrer: t.referrer,
                    shareKey: t.shareKey
                }
            }
            ), d.d)
              , c = l.source
              , p = l.referrer
              , f = l.shareKey
              , b = Object(j.Bb)(n);
            if (!b)
                return u.createElement(_.a, null);
            var g = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        o()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                postId: b,
                postMeteringOptions: {
                    referrer: p,
                    source: c,
                    sk: f
                }
            }, s);
            return u.createElement(i.b, {
                query: r,
                variables: g
            }, (function(e) {
                var r = e.loading
                  , o = e.error
                  , a = e.data
                  , s = (a = void 0 === a ? {} : a).meterPost
                  , i = a.postResult
                  , l = e.refetch
                  , c = e.fetchMore;
                return r ? u.createElement(C.a, null) : o ? u.createElement(w.a, {
                    error: o
                }) : Object(m.c)(i) ? u.createElement(m.a, {
                    postResult: i
                }) : u.createElement(O.a.Provider, {
                    value: {
                        refetch: l,
                        fetchMore: c,
                        postId: b
                    }
                }, u.createElement(E, {
                    post: i,
                    matchedPath: n.url,
                    key: b
                }, u.createElement(y.b, null, (function(e) {
                    return t({
                        meterPost: s,
                        postId: b,
                        postResult: i,
                        viewer: e
                    })
                }
                ))))
            }
            ))
        }
    },
    "./src/screens/ContentErrorScreen.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return h
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/react/index.js")
          , s = n("./node_modules/react-helmet-async/lib/index.module.js")
          , i = n("./node_modules/react-router/esm/react-router.js")
          , l = n("./src/components/metabar/Metabar.tsx")
          , c = n("./src/framework/design-system/components/index.ts")
          , u = n("./src/framework/design-system/util/type/toRule.ts")
          , d = n("./src/framework/style/index.ts")
          , m = n("./src/styles/font.ts");
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var f = {
            fontSize: "20px",
            textTransform: "uppercase"
        }
          , b = function(e) {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        o()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, Object(u.a)((function(e) {
                return {
                    font: e.font.marketing,
                    fontSize: 192,
                    lineHeight: 200,
                    display: "block"
                }
            }
            ))(e))
        }
          , g = {
            fontSize: "24px"
        };
        function h(e) {
            var t = e.code
              , n = e.title
              , r = e.description
              , o = e.lumenId
              , u = Object(d.useCx)();
            return a.createElement(i.b, {
                render: function(e) {
                    var i = e.staticContext;
                    return i && (i.statusCode = t),
                    a.createElement("div", null, a.createElement(s.a, null, a.createElement("title", null, n)), a.createElement(l.a, null), a.createElement(c.b, {
                        tag: "section",
                        paddingTop: "60px",
                        paddingBottom: "60px"
                    }, a.createElement(c.A, {
                        columns: 8
                    }, a.createElement(c.b, {
                        display: "flex",
                        alignItems: "flex-start",
                        flexWrap: "wrap"
                    }, a.createElement(c.b, {
                        display: "flex",
                        flexDirection: "column"
                    }, a.createElement("div", {
                        className: u(f)
                    }, "Error"), a.createElement("div", {
                        className: u(b)
                    }, t)), a.createElement("div", {
                        className: u(Object(m.l)())
                    }, a.createElement(c.b, {
                        marginBottom: "28px"
                    }, a.createElement("div", {
                        className: u(g)
                    }, r)), o ? a.createElement("div", {
                        className: u(g)
                    }, "A report is available on", " ", a.createElement(c.t, {
                        href: "https://lumendatabase.org/notices/".concat(o),
                        display: "inline-block",
                        inline: !0,
                        target: "_blank",
                        linkStyle: "OBVIOUS"
                    }, "Lumen"), ".") : null)))))
                }
            })
        }
    },
    "./src/screens/PostScreen.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return Et
        }
        )),
        n.d(t, "b", (function() {
            return Ot
        }
        )),
        n.d(t, "c", (function() {
            return wt
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/extends.js")
          , s = n.n(a)
          , i = n("./node_modules/@babel/runtime/helpers/slicedToArray.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./node_modules/react/index.js")
          , m = n.n(d)
          , p = n("./node_modules/react-redux/es/index.js")
          , f = n("./src/WatchBounds.tsx")
          , b = n("./src/framework/style/index.ts")
          , g = n("./src/styles/font.ts")
          , h = n("./src/util/routes.ts");
        function v() {
            var e = o()(["\n  fragment TopicList_topics on Topic {\n    id\n    slug\n    name\n  }\n"]);
            return v = function() {
                return e
            }
            ,
            e
        }
        var x = {
            padding: 0,
            margin: 0
        }
          , E = {
            display: "inline-block",
            listStyleType: "none",
            marginRight: "8px",
            marginBottom: "8px"
        }
          , y = function(e) {
            return {
                border: "".concat(e.baseColor.border.light, " 1px solid"),
                padding: "5px 10px",
                textDecoration: "none",
                color: e.baseColor.text.normal,
                display: "block",
                lineHeight: "22px"
            }
        };
        function O(e) {
            var t = e.topics
              , n = Object(b.useCx)()
              , r = Object(p.f)((function(e) {
                return {
                    authDomain: e.config.authDomain
                }
            }
            )).authDomain;
            return t ? d.createElement("ul", {
                className: n(x)
            }, t.map((function(e) {
                return e.id ? d.createElement("li", {
                    key: e.id,
                    className: n(E)
                }, d.createElement("a", {
                    href: Object(h.ec)(r, e.slug || ""),
                    className: n([y, Object(g.w)({
                        fontSize: 15
                    })])
                }, e.name)) : null
            }
            ))) : null
        }
        u()(v());
        var w = n("./src/components/session/WithViewer.tsx")
          , C = n("./src/components/susi/SusiClickable.tsx")
          , _ = n("./src/components/user/UserAvatar.tsx")
          , j = n("./src/framework/design-system/components/index.ts")
          , S = n("./src/framework/design-system/type/Overline.tsx")
          , k = n("./src/framework/source/index.ts")
          , P = n("./src/svg/apple-25px.svg")
          , I = n("./src/svg/arrow-down-21px.svg")
          , T = n("./src/svg/bell-25px.svg")
          , R = n("./src/svg/bookmark-25px.svg")
          , A = n("./src/svg/logo-monogram-35px.svg")
          , L = n("./src/svg/logo-wordmark-112x22px.svg")
          , M = n("./src/svg/response-25px.svg")
          , B = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s, opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s, border 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s"
          , D = [{
            id: "a1",
            slug: "art",
            name: "Art"
        }, {
            id: "b1",
            slug: "beauty",
            name: "Beauty"
        }, {
            id: "c1",
            slug: "comics",
            name: "Comics"
        }, {
            id: "c2",
            slug: "culture",
            name: "Culture"
        }, {
            id: "f1",
            slug: "fiction",
            name: "Fiction"
        }, {
            id: "f2",
            slug: "food",
            name: "Food"
        }, {
            id: "h1",
            slug: "humor",
            name: "Humor"
        }, {
            id: "m1",
            slug: "music",
            name: "Music"
        }, {
            id: "s1",
            slug: "sports",
            name: "Sports"
        }, {
            id: "w1",
            slug: "writing",
            name: "Writing"
        }]
          , N = function(e) {
            return {
                display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex"
                },
                flexDirection: "column",
                justifyContent: "space-between",
                background: e.backgroundColor,
                borderRight: "".concat(e.baseColor.border.lighter, " 1px solid"),
                position: "fixed",
                top: "0px",
                height: "100%",
                width: "".concat(250, "px")
            }
        }
          , U = {
            opacity: 1,
            height: "100%",
            padding: "20px",
            overflow: "hidden",
            transition: B,
            zIndex: 500
        }
          , F = function(e) {
            return {
                width: "100%",
                background: e.backgroundColor,
                borderTop: "".concat(e.baseColor.border.lighter, " 1px solid"),
                padding: "15px",
                transition: B,
                zIndex: 510
            }
        }
          , H = {
            margin: "0px 10px",
            opacity: 1,
            transition: B,
            display: "block",
            width: "100%"
        }
          , V = {
            margin: "0px 10px",
            height: "35px",
            width: "35px"
        }
          , z = {
            fontSize: "24px",
            margin: "20px 0px",
            display: "block"
        }
          , G = function(e) {
            var t = "undefined" != typeof window ? window.innerHeight : 0;
            return e ? {} : {
                transform: "translateY(".concat(t, "px) !important"),
                opacity: 0
            }
        }
          , q = function(e) {
            return e ? {} : {
                border: "none !important"
            }
        }
          , W = function(e) {
            return e ? {} : {
                opacity: "0 !important"
            }
        }
          , $ = function(e) {
            return e ? {} : {
                border: "none !important"
            }
        }
          , Y = function() {
            var e = Object(p.f)((function(e) {
                return e.config.authDomain
            }
            ))
              , t = Object(b.useCx)()
              , n = d.useState(!1)
              , r = l()(n, 2)
              , o = r[0]
              , a = r[1]
              , s = d.useState(null)
              , i = l()(s, 2)
              , c = i[0]
              , u = i[1]
              , m = function() {
                clearTimeout(c),
                a(!0)
            }
              , f = function() {
                var e = setTimeout((function() {
                    a(!1)
                }
                ), 500);
                u(e)
            };
            return d.createElement(k.b, {
                source: {
                    name: "norway_sidebar"
                }
            }, d.createElement(w.b, null, (function(n) {
                return n ? d.createElement("div", {
                    className: t([N, q(o)])
                }, d.createElement("div", {
                    className: t([U, G(o)]),
                    onMouseOver: m,
                    onMouseLeave: f
                }, d.createElement(j.b, {
                    margin: "20px 15px"
                }, d.createElement(L.a, null)), d.createElement(j.t, {
                    href: "/",
                    className: t(z)
                }, d.createElement(j.b, {
                    display: "flex",
                    alignItems: "center"
                }, d.createElement(P.a, {
                    className: t(V)
                }), d.createElement(d.Fragment, null, "Home"))), d.createElement(j.t, {
                    href: Object(h.Ac)(e),
                    className: t(z)
                }, d.createElement(j.b, {
                    display: "flex",
                    alignItems: "center"
                }, d.createElement(R.a, {
                    className: t(V)
                }), d.createElement(d.Fragment, null, "Reading List"))), d.createElement(j.t, {
                    href: Object(h.xc)(e),
                    className: t(z)
                }, d.createElement(j.b, {
                    display: "flex",
                    alignItems: "center"
                }, d.createElement(T.a, {
                    className: t(V)
                }), d.createElement(d.Fragment, null, "Notifications"))), d.createElement(j.t, {
                    href: Object(h.tc)(n.username || ""),
                    className: t(z)
                }, d.createElement(j.b, {
                    display: "flex",
                    alignItems: "center"
                }, d.createElement(M.a, {
                    className: t(V)
                }), d.createElement(d.Fragment, null, "Responses")))), d.createElement(j.b, {
                    display: "flex",
                    flexGrow: "1",
                    alignItems: "flex-end"
                }, d.createElement("div", {
                    className: t([F, $(o)]),
                    onMouseEnter: m,
                    onMouseLeave: f
                }, d.createElement(j.b, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }, d.createElement(_.d, {
                    user: n,
                    scale: "S"
                }), d.createElement("div", {
                    className: t([H, W(o)])
                }, d.createElement(j.b, null, n.name), d.createElement(j.b, null, d.createElement(j.t, {
                    href: Object(h.mb)(e, n.username || "")
                }, "@", n.username))))))) : d.createElement("div", {
                    className: t([N, q(o)])
                }, d.createElement("div", {
                    className: t([U, G(o)]),
                    onMouseOver: m,
                    onMouseLeave: f
                }, d.createElement(j.b, {
                    margin: "20px 15px"
                }, d.createElement(L.a, null)), d.createElement(j.t, {
                    href: Object(h.ab)(),
                    className: t(z)
                }, d.createElement(j.b, {
                    display: "flex",
                    alignItems: "center"
                }, d.createElement(P.a, {
                    className: t(V)
                }), d.createElement(d.Fragment, null, "Home"))), d.createElement(j.b, null, d.createElement(j.b, {
                    margin: "20px"
                }, d.createElement(S.a, {
                    scale: "M",
                    color: "LIGHTER"
                }, "Trending Topics"), d.createElement(j.b, {
                    marginTop: "10px"
                }, d.createElement(O, {
                    topics: D
                }))), d.createElement(j.b, {
                    margin: "20px"
                }, d.createElement(S.a, {
                    scale: "M",
                    color: "LIGHTER"
                }, "Others in ...")))), d.createElement(j.b, {
                    display: "flex",
                    flexGrow: "1",
                    alignItems: "flex-end"
                }, d.createElement("div", {
                    className: t([F, $(o)]),
                    onMouseEnter: m,
                    onMouseLeave: f
                }, d.createElement(j.b, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }, d.createElement(A.a, null), d.createElement("div", {
                    className: t([H, W(o)])
                }, d.createElement(C.a, {
                    operation: "login"
                }, d.createElement(j.b, {
                    display: "flex",
                    justifyContent: "space-between"
                }, "Log In or Sign Up", " ", d.createElement(I.a, {
                    className: t({
                        transform: "rotate(-90deg)"
                    })
                }))))))))
            }
            )))
        }
          , K = n("./src/components/analytics/ParselyReporter.tsx")
          , Q = n("./src/components/branch-banner/helpers/index.ts")
          , X = n("./src/components/collection/CollectionMetabar.tsx")
          , J = n("./src/components/collection/theming/CustomBackgroundWrapper.tsx")
          , Z = n("./src/components/collection/theming/CustomStyleWrapper.tsx")
          , ee = n("./src/components/collection/theming/customStyleSheet.ts")
          , te = n("./src/components/debug/GoogleAnalytics.tsx")
          , ne = n("./src/components/footer/GlobalFooter.tsx")
          , re = n("./src/components/metabar/Metabar.tsx")
          , oe = n("./src/components/metabar/MetabarLayout.tsx")
          , ae = n("./src/components/meter/PayWall.tsx")
          , se = n("./src/components/meter/RegWall.tsx")
          , ie = n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js")
          , le = n("./src/components/session/useViewer.tsx");
        function ce() {
            var e = o()(["\n  mutation AddCollaboratorMutation($postId: ID!) {\n    addCollaborator(postId: $postId)\n  }\n"]);
            return ce = function() {
                return e
            }
            ,
            e
        }
        function ue() {
            var e = o()(["\n  fragment AddCollaborator_post on Post {\n    isPublished\n    id\n  }\n"]);
            return ue = function() {
                return e
            }
            ,
            e
        }
        var de = u()(ue())
          , me = u()(ce())
          , pe = n("./src/components/optimizely/helpers/index.ts")
          , fe = n("./src/components/post/MaybeRedirectToEditor.tsx");
        function be() {
            var e = o()(["\n  fragment NextPostButton_post on Post {\n    id\n    nextPostId\n  }\n"]);
            return be = function() {
                return e
            }
            ,
            e
        }
        var ge = {
            transform: "rotate(-90deg)",
            fill: "white"
        }
          , he = {
            transition: "width 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s",
            color: "white",
            width: "0px",
            overflow: "hidden",
            display: "inline",
            whiteSpace: "nowrap"
        }
          , ve = function(e) {
            return e ? {
                width: "75px",
                margin: "0px 0px 0px 15px"
            } : {}
        }
          , xe = function(e) {
            var t = "undefined" != typeof window ? window.innerHeight : 0
              , n = "undefined" != typeof window ? window.innerWidth : 0;
            return {
                transition: "margin 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s",
                position: "fixed",
                top: "".concat(Math.max(t - 50, 0), "px"),
                left: "".concat(Math.max(n - 50, 0), "px"),
                backgroundColor: e.baseColor.fill.darker,
                borderRadius: "20px"
            }
        }
          , Ee = function(e) {
            var t, n = e.postId, r = Object(b.useCx)(), o = Object(p.f)((function(e) {
                return {
                    authDomain: e.config.authDomain
                }
            }
            )).authDomain, a = d.useState(!1), s = l()(a, 2), i = s[0], c = s[1];
            return "undefined" != typeof window && n ? d.createElement("div", {
                className: r([xe, (t = i,
                t ? {
                    margin: "0 0 0 -95px"
                } : {})]),
                onMouseOver: function() {
                    return c(!0)
                },
                onMouseOut: function() {
                    return c(!1)
                }
            }, d.createElement(j.t, {
                href: Object(h.Fb)(o, n)
            }, d.createElement("div", {
                className: r({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                })
            }, d.createElement("div", {
                className: r([he, ve(i)])
            }, "Next Story"), d.createElement(I.a, {
                className: r(ge)
            })))) : null
        }
          , ye = u()(be())
          , Oe = n("./src/components/post/PostBodyInserts.tsx")
          , we = n("./src/components/post/PostHeader.tsx")
          , Ce = n("./src/components/post/PostMetadata.tsx")
          , _e = n("./src/components/post/PostPublishedDialog.tsx")
          , je = n("./src/components/post/PostSidebar.tsx")
          , Se = n("./src/components/post/ResponsesSidebarContext.tsx")
          , ke = n("./src/components/post/TableOfContents.tsx")
          , Pe = n("./src/components/post/body/InteractivePostBody.tsx")
          , Ie = n("./src/components/post/bookmark/PostPageBookmarkContext.tsx")
          , Te = n("./src/components/post/footer/PostFooter.tsx")
          , Re = n("./src/components/post/helpers/loggedOutHistory.ts")
          , Ae = n("./src/components/publisher/MetaHeader.tsx")
          , Le = n("./src/components/publisher/auroraHooks.ts")
          , Me = n("./src/components/responses/ResponsesSidebar.tsx")
          , Be = n("./src/components/session/RequireFlag.tsx")
          , De = n("./src/components/session/useFlag.tsx")
          , Ne = n("./src/framework/design-system/type/index.ts")
          , Ue = n("./src/store/actions/navigation.ts")
          , Fe = n("./src/styles/colors.ts");
        function He() {
            return (He = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var Ve = m.a.createElement("path", {
            fill: "#fff",
            d: "M0 0h49v57H0z"
        })
          , ze = m.a.createElement("path", {
            d: "M45.95 17.53v-.04l-.05-1.55a5.32 5.32 0 0 0-5.04-5.17c-5.8-.32-10.3-2.2-14.13-5.89l-.03-.03a3.26 3.26 0 0 0-4.4 0l-.03.03c-3.84 3.7-8.33 5.57-14.13 5.89-2.79.15-5 2.42-5.04 5.18l-.05 1.54v.1c-.11 5.84-.25 13.12 2.21 19.73 1.36 3.63 3.41 6.79 6.1 9.38 3.07 2.96 7.09 5.3 11.94 6.98a3.74 3.74 0 0 0 2.4 0c4.85-1.68 8.86-4.03 11.93-6.98 2.69-2.6 4.74-5.76 6.1-9.39 2.47-6.63 2.33-13.92 2.22-19.78zm-5 18.77c-2.6 6.96-7.9 11.74-16.23 14.62a.67.67 0 0 1-.45 0c-8.32-2.87-13.63-7.65-16.23-14.61-2.27-6.1-2.14-12.78-2.03-18.67v-.03c.03-.5.04-1.04.05-1.62.02-1.22 1-2.23 2.24-2.3 3.29-.18 6.17-.81 8.83-1.92 2.64-1.1 5-2.67 7.19-4.77.1-.1.25-.1.36 0a23.11 23.11 0 0 0 7.2 4.77 26.27 26.27 0 0 0 8.82 1.92 2.36 2.36 0 0 1 2.24 2.3c0 .58.02 1.12.05 1.62.11 5.9.24 12.59-2.04 18.69z",
            fill: "#757575"
        })
          , Ge = m.a.createElement("path", {
            d: "M24.5 17.76c-7.11 0-12.9 5.4-12.9 12.04 0 6.64 5.79 12.04 12.9 12.04s12.9-5.4 12.9-12.04c0-6.64-5.79-12.04-12.9-12.04zm0 21.25c-5.44 0-9.86-4.13-9.86-9.2 0-5.08 4.42-9.21 9.86-9.21 5.44 0 9.86 4.13 9.86 9.2 0 5.08-4.42 9.2-9.86 9.2z",
            fill: "#757575"
        })
          , qe = m.a.createElement("path", {
            d: "M28.08 25.1l-5.64 6.12-1.53-1.66c-.56-.6-1.46-.6-2.02 0-.55.6-.55 1.59 0 2.2l2.54 2.75c.28.3.65.45 1.01.45.37 0 .73-.15 1.01-.45l6.65-7.22c.55-.6.55-1.59 0-2.2-.56-.6-1.47-.6-2.02 0z",
            fill: "#757575"
        })
          , We = function(e) {
            return m.a.createElement("svg", He({
                width: 49,
                height: 57,
                viewBox: "0 0 49 57",
                fill: "none"
            }, e), Ve, ze, Ge, qe)
        };
        var $e = Object(p.c)()((function(e) {
            var t = e.dispatch
              , n = e.isVisible
              , r = e.hide;
            return d.createElement(j.i, {
                isVisible: n,
                hide: r,
                withCloseButton: !1,
                withTransparentOverlay: !0
            }, d.createElement(j.b, {
                display: "flex",
                justifyContent: "center",
                paddingTop: "100px"
            }, d.createElement(j.b, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                textAlign: "center",
                background: Fe.D,
                boxShadow: "0 2px 10px ".concat(Object(Fe.z)(.15)),
                borderRadius: "4px",
                height: "550px",
                width: "900px",
                paddingBottom: "14px",
                md: {
                    width: "600px",
                    height: "auto",
                    padding: "14px 8px"
                },
                sm: {
                    width: "95vw !important",
                    padding: "14px 8px"
                }
            }, d.createElement(j.b, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%"
            }, d.createElement(j.b, {
                paddingBottom: "24px"
            }, d.createElement(We, null)), d.createElement(j.b, {
                paddingBottom: "24px",
                paddingRight: "24px",
                paddingLeft: "24px"
            }, d.createElement(Ne.c, {
                scale: "L"
            }, "The following content was reported as a potential violation of Medium’s rules and is under investigation.")), d.createElement(j.b, {
                padding: "0 0 24px 0"
            }, d.createElement(j.c, {
                buttonStyle: "BRAND",
                size: "REGULAR",
                onClick: function() {
                    r(),
                    t(Object(Ue.m)({
                        duration: "FOREVER",
                        message: "",
                        toastStyle: "LIMITED_STATE_BANNER"
                    }))
                }
            }, "I understand and want to proceed anyway"), d.createElement(j.I, null, (function(e) {
                var t = e.isVisible
                  , n = e.toggle
                  , r = e.hide;
                return d.createElement(j.w, {
                    isVisible: t,
                    hide: r,
                    display: "block",
                    customZIndex: 800,
                    popoverRenderFn: function() {
                        return d.createElement(j.b, {
                            padding: "15px 20px",
                            width: "400px"
                        }, d.createElement(Ne.b, {
                            scale: "S"
                        }, "Anyone can publish on Medium, provided the content adheres to Medium’s rules and policies. When Medium is made aware of potential violations, the content is manually evaluated and appropriate action taken. Some features may be disabled while the content is under review."))
                    },
                    placement: "top",
                    targetDistance: 15
                }, d.createElement(j.b, {
                    paddingTop: "10px"
                }, d.createElement(j.t, {
                    onClick: n
                }, d.createElement("u", null, d.createElement(Ne.b, {
                    scale: "S"
                }, "Why am I seeing this?")))))
            }
            )))), d.createElement(j.b, {
                display: "flex",
                justifyContent: "center"
            }, d.createElement(j.d, null, "View our", " ", d.createElement(j.t, {
                href: "https://medium.com/policy/medium-rules-30e5502c4eb4",
                linkStyle: "OBVIOUS",
                inline: !0
            }, "Rules,"), " ", d.createElement(j.t, {
                href: "https://medium.com/policy/medium-terms-of-service-9db0094a1e0f",
                linkStyle: "OBVIOUS",
                inline: !0
            }, "Terms of Service"), " ", "&", " ", d.createElement(j.t, {
                href: "https://medium.com/policy/medium-partner-program-terms-fcfe9cf777b8",
                linkStyle: "OBVIOUS",
                inline: !0
            }, "Partner Program Terms"))))))
        }
        ));
        function Ye() {
            var e = o()(["\n  fragment LimitedStateInterstitial_post on Post {\n    creator {\n      id\n    }\n    isLimitedState\n  }\n"]);
            return Ye = function() {
                return e
            }
            ,
            e
        }
        var Ke = function(e) {
            return function() {
                return {
                    filter: e ? "blur(10px)" : "blur(0)"
                }
            }
        };
        function Qe(e) {
            var t = e.post
              , n = t.creator
              , r = t.isLimitedState
              , o = e.viewerId
              , a = e.children
              , s = Object(b.useCx)()
              , i = d.useState(!1)
              , c = l()(i, 2)
              , u = c[0]
              , m = c[1];
            return d.useEffect((function() {
                m(!0)
            }
            ), []),
            r && (n && n.id) !== o ? d.createElement(j.I, {
                initialVisibility: !0
            }, (function(e) {
                var t = e.isVisible
                  , n = e.hide;
                return d.createElement(d.Fragment, null, d.createElement("div", {
                    className: s(Ke(t))
                }, a), u && d.createElement($e, {
                    isVisible: t,
                    hide: n
                }))
            }
            )) : a
        }
        var Xe = u()(Ye())
          , Je = n("./src/components/tns/SuspendedBannerLoader.tsx")
          , Ze = n("./src/components/ui/banners/AlternateUserTopBanner.tsx")
          , et = n("./src/components/ui/banners/SignInConfirmationBanner.tsx")
          , tt = n("./src/framework/reporter/index.ts")
          , nt = n("./src/framework/track/index.ts")
          , rt = n("./src/schema-types/globalTypes.ts")
          , ot = n("./src/screens/helpers/users.ts")
          , at = n("./src/screens/helpers/visits.ts")
          , st = n("./src/store/actions/branch.ts")
          , it = n("./node_modules/serialize-javascript/index.js")
          , lt = n.n(it);
        function ct(e) {
            var t = {
                __html: '<script type="application/json">'.concat(lt()(e.json, {
                    isJSON: !0
                }), "<\/script>")
            };
            return d.createElement("amp-analytics", {
                id: "medium-analytics",
                dangerouslySetInnerHTML: t
            })
        }
        var ut = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , dt = n.n(ut);
        function mt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function pt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? mt(Object(n), !0).forEach((function(t) {
                    dt()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ft = Object(p.c)((function(e) {
            return {
                googleAnalyticsCode: e.config.googleAnalyticsCode
            }
        }
        ))((function(e) {
            var t = e.googleAnalyticsCode
              , n = e.collectionGoogleAnalyticsId
              , r = {
                triggers: pt({}, {
                    trackPageview: {
                        on: "visible",
                        request: "pageview",
                        vars: {
                            account: t
                        }
                    }
                }, {}, n ? {
                    trackCollectionPageview: {
                        on: "visible",
                        request: "pageview",
                        vars: {
                            account: n
                        }
                    }
                } : {})
            }
              , o = {
                __html: '<script type="application/json">'.concat(lt()(r, {
                    isJSON: !0
                }), "<\/script>")
            };
            return d.createElement("amp-analytics", {
                type: "googleanalytics",
                id: "google-analytics",
                dangerouslySetInnerHTML: o
            })
        }
        ));
        function bt() {
            var e = {
                __html: '<script type="application/json">'.concat(lt()({
                    vars: {
                        apikey: "medium.com"
                    }
                }, {
                    isJSON: !0
                }), "<\/script>")
            };
            return d.createElement("amp-analytics", {
                type: "parsely",
                id: "parsely-amp-analytics",
                dangerouslySetInnerHTML: e
            })
        }
        var gt = n("./src/util/hooks/useIsEligibleToViewNewResponses.tsx")
          , ht = n("./src/util/theme.ts");
        function vt() {
            var e = o()(["\n  fragment PostScreen_post on Post {\n    id\n    canonicalUrl\n    collection {\n      id\n      domain\n      googleAnalyticsId\n      slug\n      colorPalette {\n        ...customDefaultBackgroundTheme_colorPalette\n      }\n      ...CollectionMetabar_collection\n      ...MetaHeader_collection\n      ...auroraHooks_publisher\n    }\n    # please note that the postMeteringOptions are defined in the postHandler file\n    content(postMeteringOptions: $postMeteringOptions) {\n      isLockedPreviewOnly\n      validatedShareKey\n    }\n    creator {\n      ...SuspendedBannerLoader_user\n      ...MetaHeader_publisher\n      ...auroraHooks_publisher\n    }\n    customStyleSheet {\n      id\n      postBody {\n        ...SupportedContainerStyles_styleNode\n      }\n      ...CustomBackgroundWrapper_customStyleSheet\n      ...InteractivePostBody_customStyleSheet\n      ...MetaHeader_customStyleSheet\n      ...customDefaultBackgroundTheme_customStyleSheet\n      ...customStyleSheetFontTheme_customStyleSheet\n    }\n    firstPublishedAt\n    isLocked\n    isPublished\n    isShortform\n    isEmail\n    layerCake\n    primaryTopic {\n      name\n      slug\n    }\n    title\n    ...AddCollaborator_post\n    ...InteractivePostBody_post\n    ...LimitedStateInterstitial_post\n    ...MaybeRedirectToEditor_post\n    ...Metabar_post\n    ...PayWall_post\n    ...PostBodyInserts_post\n    ...PostFooter_post\n    ...PostHeader_post\n    ...PostMetadata_post\n    ...PostPublishedDialog_prerequisite_post\n    ...PostReadTracker_post\n    ...PostScrollTracker_post\n    ...PostSidebar_post\n    ...RegWall_post\n    ...SuspendedBannerLoader_post\n    ...buildBranchViewData_post\n    ...optimizelyData_post\n    ...TableOfContents_post\n    ...NextPostButton_post\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
            return vt = function() {
                return e
            }
            ,
            e
        }
        function xt() {
            var e = o()(["\n  fragment PostScreen_meteringInfo on MeteringInfo {\n    __typename\n    postIds\n    maxUnlockCount\n    unlocksRemaining\n    ...PostHeader_meteringInfo\n    ...RegWall_meteringInfo\n    ...buildBranchViewData_meteringInfo\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return xt = function() {
                return e
            }
            ,
            e
        }
        function Et(e) {
            var t, n = e.meteringInfo, r = e.post, o = e.viewer, a = r.id, s = r.isPublished, i = r.isLocked, c = r.isShortform, u = r.isEmail, m = r.content, b = r.collection, g = r.canonicalUrl, v = Object(p.e)(), x = Object(tt.c)(), E = Object(p.f)((function(e) {
                return {
                    authDomain: e.config.authDomain,
                    isAmp: e.config.isAmp,
                    isBot: e.client.isBot,
                    inAppBrowser: e.client.inAppBrowserName,
                    currentHash: e.navigation.currentHash,
                    postPublishedType: e.navigation.postPublishedType,
                    referrer: e.navigation.referrer,
                    referrerSource: e.navigation.referrerSource,
                    responsesOpen: e.navigation.responsesOpen,
                    sessionUserId: e.session.user.id
                }
            }
            ), p.d), y = E.authDomain, O = E.currentHash, w = E.isAmp, C = E.isBot, _ = E.inAppBrowser, S = E.postPublishedType, k = E.referrer, P = E.referrerSource, I = E.responsesOpen, T = E.sessionUserId, R = d.useState(!1), A = l()(R, 2), L = A[0], M = A[1], B = d.useState(r.readingList === rt.r.READING_LIST_QUEUE || r.readingList === rt.r.READING_LIST_ARCHIVE), D = l()(B, 2), N = D[0], U = D[1], F = d.useRef(null), H = !!o, V = b || {}, z = V.id, G = V.slug, q = V.googleAnalyticsId, W = m || {}, $ = W.isLockedPreviewOnly, X = W.validatedShareKey, re = q ? [q] : null;
            Object(te.b)(re, C, w),
            Object(nt.h)(F, r),
            Object(nt.g)(!!H, F, r),
            function(e) {
                var t = Object(le.b)()
                  , n = Object(ie.d)(me, {
                    variables: {
                        postId: e.id
                    }
                })
                  , r = l()(n, 2)
                  , o = r[0]
                  , a = r[1].called;
                d.useEffect((function() {
                    !e.isPublished && (null == t ? void 0 : t.id) && !a && o()
                }
                ), [t])
            }(r);
            var oe = Object(De.a)("enable_norway_sidebar")
              , ce = Object(Le.b)(b)
              , ue = c && ce
              , de = Object(gt.a)()
              , be = de && I
              , ge = d.useState(Boolean(be))
              , he = l()(ge, 2)
              , ve = he[0]
              , xe = he[1]
              , ye = d.useState(void 0)
              , ke = l()(ye, 2)
              , Ae = ke[0]
              , Ne = ke[1]
              , Fe = Object(Le.d)(b || r.creator)
              , He = Object(Oe.b)(r);
            d.useEffect((function() {
                if (s) {
                    H || (r.isLocked ? Object(at.k)() : Object(at.l)());
                    var e = Object(Q.a)({
                        inAppBrowser: _,
                        post: r,
                        meteringInfo: n,
                        referrer: k,
                        referrerSource: P,
                        viewer: o,
                        currentUserId: T
                    });
                    b && b.domain && (e.data.$canonical_url = Object(h.Fb)(y, r.id));
                    var t = o && o.name ? Object(ot.b)(o.name) : void 0;
                    Object(pe.c)({
                        post: r
                    }, t),
                    Object(Q.g)(e),
                    v(Object(st.h)(e)),
                    v(Object(st.j)()),
                    x.event("post.clientViewed", {
                        postId: a,
                        collectionId: z,
                        collectionSlug: G,
                        context: 1,
                        isFriendLink: !!X
                    })
                } else
                    x.event("post.draftViewed", {
                        postId: a
                    });
                switch (H || Object(Re.b)(a),
                S) {
                case "initial":
                    M(!u),
                    v(Object(Ue.k)());
                    break;
                case "repub":
                    v(Object(Ue.m)({
                        duration: 3e3,
                        message: "Your changes have been published."
                    })),
                    v(Object(Ue.k)())
                }
                return function() {
                    v(Object(st.g)())
                }
            }
            ), [a, s]);
            var Ve, ze, Ge = $ && (H ? d.createElement(ae.a, {
                post: r
            }) : d.createElement(se.a, {
                post: r,
                meteringInfo: n
            })), qe = function(e) {
                Ne(e),
                xe(!0)
            }, We = i ? {
                className: "meteredContent"
            } : {};
            if (O) {
                var $e = O.split("-");
                Ve = $e[0],
                ze = $e[1]
            }
            return d.createElement(d.Fragment, null, d.createElement(K.a, null), d.createElement(fe.a, {
                post: r
            }, d.createElement(Ce.b, {
                isAmp: w,
                post: r
            }), (null == o ? void 0 : o.id) === (null === (t = r.creator) || void 0 === t ? void 0 : t.id) ? d.createElement(Je.c, {
                post: r,
                user: r.creator
            }) : d.createElement(Be.a, {
                name: "can_view_suspended_content"
            }, d.createElement(Je.c, {
                post: r,
                user: r.creator
            })), d.createElement(j.L, null, (function(e) {
                var t, a = function(e) {
                    return Object(ht.l)(r.customStyleSheet, Object(ht.i)(r.customStyleSheet, e, Fe, null == b ? void 0 : b.colorPalette))
                }(e);
                return d.createElement(j.F, {
                    theme: a
                }, d.createElement(J.a, {
                    customStyleSheet: r.customStyleSheet
                }, d.createElement(yt, {
                    post: r
                }), de && d.createElement(Me.a, {
                    isResponsesSidebarVisible: ve,
                    setIsResponsesSidebarVisible: xe,
                    inResponseToQuote: Ae,
                    parentPost: r,
                    setInResponseToQuote: Ne
                }), d.createElement(Z.a, {
                    rule: (t = r.customStyleSheet,
                    Object(ee.k)(null == t ? void 0 : t.postBody))
                }, d.createElement(f.c, null, d.createElement(Ie.a.Provider, {
                    value: {
                        isFirstLoadAndInReadingList: N,
                        setIsFirstLoadAndInReadingList: U
                    }
                }, d.createElement(Ze.a, null), d.createElement(et.a, null), d.createElement("article", We, d.createElement(we.a, {
                    post: r,
                    meteringInfo: n
                }), d.createElement(Se.a.Provider, {
                    value: {
                        openSidebarToRespondToHighlight: qe
                    }
                }, d.createElement(Qe, {
                    post: r,
                    viewerId: null == o ? void 0 : o.id
                }, d.createElement(Pe.c, {
                    activeGrafId: Ve,
                    activeNoteId: ze,
                    isAuroraPostPageEnabled: ce,
                    post: r,
                    postBodyInserts: He,
                    customStyleSheet: r.customStyleSheet,
                    ref: F
                })))), !$ && !!s && !ue && (oe ? d.createElement(Y, null) : d.createElement(je.a, {
                    post: r,
                    setIsResponsesSidebarVisible: xe
                })), Ge, !$ && d.createElement(Te.c, {
                    post: r,
                    setIsResponsesSidebarVisible: xe
                })))), d.createElement(_e.a, {
                    hide: function() {
                        return M(!1)
                    },
                    isVisible: L,
                    post: r
                }), !!s && d.createElement(ne.a, {
                    slimFooter: ce
                }), oe && d.createElement(Ee, {
                    postId: r.nextPostId
                })))
            }
            )), w && d.createElement(d.Fragment, null, d.createElement(ct, {
                json: {
                    requests: {
                        base: Object(h.f)(y),
                        pageview: Object(h.c)(y),
                        scrollPing: Object(h.e)(y)
                    },
                    vars: {
                        postId: a,
                        collectionId: z,
                        canonicalUrl: g,
                        referrer: k
                    },
                    triggers: {
                        defaultPageview: {
                            on: "visible",
                            request: "pageview"
                        },
                        scrollDepths: {
                            on: "scroll",
                            scrollSpec: {
                                verticalBoundaries: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
                            },
                            request: "scrollPing"
                        }
                    },
                    transport: {
                        beacon: !1,
                        xhrpost: !1,
                        image: !0
                    }
                }
            }), d.createElement(ft, {
                collectionGoogleAnalyticsId: q
            }), d.createElement(bt, null))))
        }
        var yt = function(e) {
            var t = e.post
              , n = t.collection
              , r = n || t.creator
              , o = Object(Le.f)(r)
              , a = Object(De.a)("enable_post_page_nav_stickiness_removal")
              , i = Object(p.f)((function(e) {
                return e.config.isAmp
            }
            ));
            if (Object(De.a)("enable_norway_sidebar"))
                return null;
            if (r && o)
                return d.createElement(Ae.a, {
                    publisher: r,
                    customStyleSheet: t.customStyleSheet,
                    post: t,
                    forceSmall: !0
                });
            var l = {
                behavior: oe.b.Aggressive,
                isAmp: i,
                isFixed: !a,
                post: t
            };
            if (n)
                return d.createElement(X.a, s()({}, l, {
                    collection: n
                }));
            var c = t.layerCake
              , u = t.primaryTopic
              , m = c && (1 === c || 2 === c || 3 === c)
              , f = m ? u : null;
            return d.createElement(re.a, s()({}, l, {
                isMonogramOnly: !m,
                marginBottom: 0,
                marginBottomSm: 0,
                topic: f
            }))
        }
          , Ot = u()(xt(), we.b, se.b, Q.b)
          , wt = u()(vt(), de, X.c, J.b, Pe.b, Pe.a, Xe, fe.b, re.b, Ae.b, Ae.c, ae.b, Oe.a, Te.b, we.c, Ce.a, _e.b, nt.d, nt.e, je.c, se.c, ee.b, Je.a, Je.b, Le.a, Q.c, pe.b, ke.a, Ae.d, ht.j, ht.k, ht.m, ye)
    },
    "./src/screens/SuspendedScreen.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = n("./src/components/session/WithFlag.tsx")
          , a = n("./src/framework/design-system/components/index.ts")
          , s = n("./src/framework/design-system/type/index.ts")
          , i = n("./src/framework/reporter/index.ts")
          , l = n("./src/screens/ContentErrorScreen.tsx")
          , c = n("./src/util/routes.ts")
          , u = function(e) {
            var t = e.suspension
              , n = Object(i.c)();
            return r.createElement(l.a, {
                code: 410,
                title: "410 ".concat(t, " suspended — Medium"),
                description: r.createElement(o.a, {
                    name: "enable_new_suspended_page"
                }, (function(e) {
                    return e ? r.createElement(r.Fragment, null, r.createElement(a.b, {
                        display: "flex",
                        marginTop: "-30px"
                    }, r.createElement(s.g, {
                        scale: "S"
                    }, "This ", t, " is under investigation or was found in violation of the Medium Rules.", " ")), r.createElement(a.b, {
                        display: "flex",
                        marginTop: "80px"
                    }, r.createElement(s.g, {
                        color: "DARKER",
                        scale: "M"
                    }, "There are thousands of stories to read on Medium. Visit our homepage ", r.createElement("br", null), " to find one that’s right for you.")), r.createElement(a.b, {
                        display: "flex",
                        marginTop: "15px"
                    }, r.createElement(a.c, {
                        buttonStyle: "SUBTLE",
                        href: Object(c.ab)(),
                        onClick: function() {
                            n.event("suspendedPage.backToHomeClicked", {})
                        }
                    }, "Take me to Medium"))) : r.createElement(r.Fragment, null, "This ", t, " is under investigation or was found in violation of the", " ", r.createElement(a.t, {
                        href: "https://medium.com/policy/30e5502c4eb4",
                        display: "inline-block",
                        inline: !0,
                        target: "_blank",
                        linkStyle: "OBVIOUS"
                    }, "Medium Rules"))
                }
                ))
            })
        }
    },
    "./src/screens/helpers/users.ts": function(e, t, n) {
        "use strict";
        function r(e) {
            if ((e.match(/ /g) || []).length > 1)
                return "";
            var t = e.indexOf(" ");
            return e.substring(0, t)
        }
        function o(e) {
            return e.google ? "google" : e.facebook ? "facebook" : e.twitter ? "twitter" : "medium"
        }
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        ))
    },
    "./src/svg/arrow-down-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21,
                viewBox: "0 0 21 21"
            }, e), s)
        }
    },
    "./src/svg/audio-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("g", {
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, o.a.createElement("path", {
            d: "M17.4 7s2.64 3.56 0 6.88M15 8.56s1.6 2.38 0 4.4"
        }))
          , i = o.a.createElement("path", {
            d: "M11.9 3.01a.19.19 0 0 0-.19.04L6.47 7.7H3.2c-.09 0-.21.06-.21.14v5.28c0 .08.12.3.21.3h3.14L11.72 18h.18a.17.17 0 0 0 .1-.15V3.14a.14.14 0 0 0-.1-.14z"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21
            }, e), s, i)
        }
    },
    "./src/svg/bookmark-25px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 25,
                height: 25,
                viewBox: "0 0 25 25"
            }, e), s)
        }
    },
    "./src/svg/bookmark-archive-25px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.47 9.95h17v-3h-17v3zm16 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-17a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9zm-1 0h-13v9h13v-9z"
        })
          , i = o.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.47 12.45c0-.28.21-.5.48-.5h6.04c.27 0 .48.22.48.5 0 .27-.21.5-.48.5H9.95a.49.49 0 0 1-.48-.5z"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 25,
                height: 25,
                viewBox: "0 1 25 25",
                fill: "#757575"
            }, e), s, i)
        }
    },
    "./src/svg/bookmark-filled-25px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13c.2.18.52.17.71-.03a.5.5 0 0 0 .12-.29H19V6z"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 25,
                height: 25,
                viewBox: "0 0 25 25"
            }, e), s)
        }
    },
    "./src/svg/bookmark-remove-25px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.48 7.45H3.46v10.13H16a.47.47 0 1 1 0 .94H3.46c-.54 0-.99-.42-.99-.94V7.45c0-.52.45-.93 1-.93h17c.55 0 1 .41 1 .93v5.57a.5.5 0 0 1-1 0V7.45zM5.47 10.02c0-.28.22-.5.5-.5h9.11a.5.5 0 1 1 0 1H5.97a.5.5 0 0 1-.5-.5zm.51 2.5a.5.5 0 0 0-.51.5c0 .27.23.5.51.5h5.98a.5.5 0 0 0 .51-.5.5.5 0 0 0-.51-.5H5.98zm12.52 3.02c.2-.2.5-.2.7 0l1.77 1.77 1.77-1.77a.5.5 0 1 1 .7.7l-1.76 1.78 1.76 1.76a.5.5 0 1 1-.7.71l-1.77-1.77-1.77 1.77a.5.5 0 0 1-.7-.7l1.76-1.77-1.76-1.77a.5.5 0 0 1 0-.7z"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 25,
                height: 25,
                viewBox: "0 0 25 25",
                fill: "#757575"
            }, e), s)
        }
    },
    "./src/svg/clap-25px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("g", {
            fillRule: "evenodd"
        }, o.a.createElement("path", {
            d: "M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"
        }));
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 25,
                height: 25,
                viewBox: "0 0 25 25"
            }, e), s)
        }
    },
    "./src/svg/clap-filled-19px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("g", {
            fillRule: "evenodd"
        }, o.a.createElement("path", {
            d: "M6.93 15.34l-2.06-2.06c-2.16-2.16-3.53-3.15-2.9-3.79.33-.32.8-.39 1.2 0l2.13 2.2c.08.08.16.07.38.13.21.05.36-.05.54-.23.17-.16.07-.6-.09-.77L3.5 8.2c-.37-.36-.5-1-.1-1.39.37-.37.8-.19 1.14.15.39.38 2.7 2.76 2.7 2.76a.42.42 0 0 0 .3.13.54.54 0 0 0 .33-.16c.17-.16.25-.46.09-.63 0 0-1.34-1.4-1.82-1.88-.71-.72-.77-1.22-.46-1.54.45-.44 1.05-.3 1.86.62l3.58 3.89-.75-1.95s-.47-1.25 0-1.5.84.4 1.17.9l1.86 3.34c1.01 1.65.69 3.8-.73 5.19-1.87 1.87-4.07.87-5.73-.78zM10.26.04H8.73l.77 3.3zM13.93 1.2L12.5.7l-.4 3.36zM6.5.57l-1.44.52L6.9 3.93z"
        }), o.a.createElement("path", {
            d: "M14.3 7.03c-.34-.5-.9-.52-1.25-.24-.25.19-.21.6-.2.9l1.51 2.64c1.17 1.9 1.33 3.66 0 5.45.4-.19.52-.23.9-.61 1.52-1.52 1.86-3.32.85-4.96l-1.8-3.18z"
        }));
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 19,
                height: 19,
                viewBox: "0 0 19 19"
            }, e), s)
        }
    },
    "./src/svg/clap-filled-25px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("g", {
            fillRule: "evenodd"
        }, o.a.createElement("path", {
            d: "M11.74 0l.76 2.97.76-2.97zM16.63 1.22L15.2.75l-.4 3.03zM9.79.75l-1.43.47 1.84 2.56zM22.47 13.3L19.45 8c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M12.58 9.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z"
        }), o.a.createElement("path", {
            d: "M15.81 9.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.72.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L7.2 6.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L3.8 7.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L2.58 14.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z"
        }));
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 25,
                height: 25
            }, e), s)
        }
    },
    "./src/svg/creative-commons-by-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M10.48 2c2.4 0 4.4.82 6.04 2.46A8.2 8.2 0 0 1 19 10.5c0 2.39-.81 4.38-2.43 5.96A8.4 8.4 0 0 1 10.49 19c-2.3 0-4.3-.83-5.98-2.5C2.84 14.82 2 12.83 2 10.5s.83-4.34 2.5-6.04A8.14 8.14 0 0 1 10.48 2zm.03 1.53c-1.93 0-3.56.68-4.9 2.04a6.84 6.84 0 0 0-.01 9.82 6.71 6.71 0 0 0 4.92 2.06c1.89 0 3.54-.69 4.94-2.07a6.47 6.47 0 0 0 2-4.87c0-1.93-.67-3.57-2.03-4.93a6.72 6.72 0 0 0-4.91-2.03zM12.8 8.4v3.48h-.97v4.12H9.18v-4.12h-.97V8.39A.53.53 0 0 1 8.37 8a.53.53 0 0 1 .39-.16h3.49c.14 0 .27.06.38.16a.52.52 0 0 1 .16.39zM9.32 6.2c0-.8.39-1.2 1.18-1.2.79 0 1.18.4 1.18 1.2 0 .8-.4 1.19-1.18 1.19-.79 0-1.18-.4-1.18-1.18z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21
            }, e), s)
        }
    },
    "./src/svg/creative-commons-nc-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M10.48 2c2.4 0 4.4.82 6.04 2.46C18.18 6.1 19 8.11 19 10.5s-.81 4.38-2.43 5.96A8.4 8.4 0 0 1 10.49 19c-2.31 0-4.3-.84-5.98-2.52A8.16 8.16 0 0 1 2 10.5c0-2.33.83-4.34 2.5-6.04A8.14 8.14 0 0 1 10.48 2zM3.91 8.2a6.68 6.68 0 0 0-.38 2.3c0 1.88.7 3.51 2.07 4.89a6.77 6.77 0 0 0 4.92 2.05c1.9 0 3.56-.7 4.94-2.08a6.2 6.2 0 0 0 1.17-1.5l-3.2-1.42c-.1.54-.38.98-.8 1.32a2.8 2.8 0 0 1-1.53.58v1.3h-.98v-1.3a3.95 3.95 0 0 1-2.58-1.02l1.16-1.18c.56.51 1.19.77 1.9.77.3 0 .54-.07.75-.2.2-.13.31-.35.31-.65a.66.66 0 0 0-.23-.52l-.82-.35-1-.45-1.35-.6L3.92 8.2zm6.6-4.68a6.6 6.6 0 0 0-4.9 2.05 8 8 0 0 0-.94 1.14l3.25 1.45c.14-.44.41-.8.8-1.07a2.68 2.68 0 0 1 1.39-.44V5.33h.98v1.3c.78.04 1.49.3 2.13.8L12.1 8.56c-.48-.33-.96-.5-1.46-.5-.26 0-.5.05-.7.15-.21.1-.31.28-.31.52 0 .07.02.14.07.2l1.08.49.75.33 1.37.6 4.36 1.94c.14-.6.22-1.21.22-1.83 0-1.95-.67-3.6-2.03-4.93a6.64 6.64 0 0 0-4.92-2.05z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21
            }, e), s)
        }
    },
    "./src/svg/creative-commons-nd-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M10.48 2c2.38 0 4.4.82 6.04 2.47A8.17 8.17 0 0 1 19 10.5a8.1 8.1 0 0 1-2.43 5.98A8.39 8.39 0 0 1 10.49 19c-2.3 0-4.3-.83-5.99-2.5a8.18 8.18 0 0 1-2.5-6 8.3 8.3 0 0 1 2.5-6.03A8.15 8.15 0 0 1 10.48 2zm.03 1.53a6.6 6.6 0 0 0-4.9 2.05 6.78 6.78 0 0 0-2.08 4.92c0 1.9.7 3.52 2.07 4.89a6.71 6.71 0 0 0 4.91 2.06c1.9 0 3.55-.69 4.95-2.07a6.5 6.5 0 0 0 2-4.87c0-1.94-.67-3.58-2.03-4.9a6.67 6.67 0 0 0-4.91-2.06zm3.2 4.97v1.45H7.55V8.5h6.18zm0 2.73v1.45H7.55v-1.45h6.18z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21
            }, e), s)
        }
    },
    "./src/svg/creative-commons-sa-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M10.48 2c2.38 0 4.4.82 6.04 2.47A8.17 8.17 0 0 1 19 10.5a8.1 8.1 0 0 1-2.43 5.98A8.39 8.39 0 0 1 10.49 19c-2.3 0-4.3-.83-5.99-2.5a8.18 8.18 0 0 1-2.5-6c0-2.32.83-4.33 2.5-6.03A8.15 8.15 0 0 1 10.48 2zm.03 1.53a6.6 6.6 0 0 0-4.9 2.05 6.79 6.79 0 0 0-2.08 4.92c0 1.9.7 3.52 2.07 4.89a6.71 6.71 0 0 0 4.92 2.06c1.89 0 3.54-.7 4.94-2.08a6.5 6.5 0 0 0 2-4.87c0-1.94-.67-3.58-2.03-4.92a6.64 6.64 0 0 0-4.91-2.05zM6.72 9.3a3.8 3.8 0 0 1 1.26-2.42 3.7 3.7 0 0 1 2.47-.86c1.34 0 2.4.43 3.2 1.3a4.7 4.7 0 0 1 1.18 3.3c0 1.3-.41 2.4-1.23 3.26a4.2 4.2 0 0 1-3.2 1.3 3.8 3.8 0 0 1-2.48-.87 3.7 3.7 0 0 1-1.26-2.46H8.8c.05 1.03.67 1.55 1.87 1.55.6 0 1.08-.26 1.44-.78.36-.52.54-1.21.54-2.07 0-.9-.17-1.6-.5-2.06a1.68 1.68 0 0 0-1.45-.71c-1.14 0-1.77.5-1.92 1.5h.62l-1.68 1.68-1.68-1.68h.66z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21
            }, e), s)
        }
    },
    "./src/svg/creative-commons-zero-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("g", {
            fillRule: "evenodd"
        }, o.a.createElement("path", {
            d: "M10.5 5.68c-2.76 0-3.46 2.61-3.46 4.82 0 2.21.7 4.82 3.46 4.82s3.46-2.6 3.46-4.82c0-2.21-.7-4.82-3.46-4.82zm0 1.82c.11 0 .21 0 .31.04.2.17.3.4.1.73l-1.83 3.38A9.1 9.1 0 0 1 9 10.49c0-.98.07-3 1.5-3zm1.38 1.55c.1.52.1 1.06.1 1.44 0 .97-.06 3-1.48 3-.11 0-.22-.01-.31-.04l-.06-.02-.1-.03c-.31-.14-.51-.38-.22-.81l2.06-3.55z"
        }), o.a.createElement("path", {
            d: "M10.48 2c-2.36 0-4.34.82-5.96 2.47a8.6 8.6 0 0 0-1.88 2.8A8.35 8.35 0 0 0 2 10.5c0 1.13.21 2.21.64 3.23a8.58 8.58 0 0 0 1.85 2.76 8.84 8.84 0 0 0 2.76 1.87 8.4 8.4 0 0 0 3.23.64c1.13 0 2.22-.22 3.27-.66a8.7 8.7 0 0 0 2.82-1.88 7.72 7.72 0 0 0 1.81-2.68A8.62 8.62 0 0 0 19 10.5a8.6 8.6 0 0 0-.62-3.27 8.12 8.12 0 0 0-1.82-2.74A8.3 8.3 0 0 0 10.48 2zm.04 1.53a6.7 6.7 0 0 1 4.93 2.05 6.81 6.81 0 0 1 1.5 2.25 6.97 6.97 0 0 1 .52 2.67c0 1.95-.67 3.57-2 4.87a7.33 7.33 0 0 1-2.31 1.54 6.92 6.92 0 0 1-5.29 0 7.17 7.17 0 0 1-2.26-1.51 7.33 7.33 0 0 1-1.55-2.27 6.8 6.8 0 0 1 0-5.3 7.3 7.3 0 0 1 1.55-2.28 6.6 6.6 0 0 1 4.9-2.03z"
        }));
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21
            }, e), s)
        }
    },
    "./src/svg/link-slim.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M16.94 1.1A3.7 3.7 0 0 0 14.3 0c-1 0-1.94.39-2.64 1.1L7.43 5.3c-.91.92-2.09 3.2 0 5.27a.75.75 0 0 0 .82.16c.09-.03.17-.09.24-.15a.74.74 0 0 0 0-1.06c-1.16-1.15-.77-2.39-.02-3.16l4.24-4.22a2.2 2.2 0 0 1 1.58-.65c.6 0 1.16.23 1.58.65.86.87.86 2.29 0 3.16L12.7 8.47a.74.74 0 0 0 1.04 1.05l3.17-3.16a3.73 3.73 0 0 0 0-5.27h.03zM9.54 7.4a.74.74 0 0 0 0 1.06c1.16 1.15.76 2.39 0 3.16l-4.22 4.22c-.42.42-.99.65-1.59.65a2.23 2.23 0 0 1-1.58-3.82l3.17-3.16A.73.73 0 0 0 5.54 9a.78.78 0 0 0-.22-.52.77.77 0 0 0-1.05 0L1.1 11.64A3.72 3.72 0 0 0 3.74 18c1 0 1.94-.39 2.65-1.1l4.23-4.2c.21-.22.94-1.02 1.13-2.2.18-1.12-.2-2.15-1.12-3.07-.27-.27-.78-.27-1.06 0l-.02-.02z",
            clipRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                fill: "none",
                viewBox: "0 0 18 18",
                "aria-labelledby": "link-slim-svg"
            }, e), s)
        }
    },
    "./src/svg/response-25px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03zm0-1v.5l.03-.5h-.03zm-3.92-1.64l.21.2a6.09 6.09 0 0 0 3.24 1.54 7.14 7.14 0 0 1-.83-1.84 5.15 5.15 0 0 1-.16-.75 2.4 2.4 0 0 1-.02-.29v-.23l.18-.15a6.6 6.6 0 0 0 2.3-4.96c0-3.82-3.4-6.93-7.6-6.93-4.19 0-7.6 3.11-7.6 6.93 0 3.83 3.41 6.94 7.6 6.94.83 0 1.64-.12 2.41-.35l.28-.08z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 25,
                height: 25
            }, e), s)
        }
    },
    "./src/svg/response-filled-19px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M16.19 9.42c0 1.67-.72 2.84-2.03 4l-.1.09v.13a4.3 4.3 0 0 0 .15.85c.17.6.46 1.2.86 1.8a4.94 4.94 0 0 1-2.46-.84c-.26-.17-.33-.2-.54-.4l-.13-.12-.16.05c-.68.2-2.75.46-4.88-.16a5.9 5.9 0 0 1-4.1-5.4c0-3.37 3-6.12 6.7-6.12s6.69 2.75 6.69 6.12z",
            fillRule: "evenodd"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 19,
                height: 19,
                viewBox: "0 0 19 19"
            }, e), s)
        }
    },
    "./src/svg/twitter-filled-21px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("path", {
            d: "M18.5 4.43a6.9 6.9 0 0 1-2.18.88 3.45 3.45 0 0 0-2.55-1.12 3.49 3.49 0 0 0-3.49 3.48c0 .28.03.55.07.81a9.91 9.91 0 0 1-7.17-3.67 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44.15.15 0 0 0 0 .06c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06A3.5 3.5 0 0 0 7.17 15a7.33 7.33 0 0 1-4.36 1.49L2 16.44A9.96 9.96 0 0 0 7.36 18c6.4 0 9.91-5.32 9.9-9.9v-.5A6.55 6.55 0 0 0 19 5.79a6.18 6.18 0 0 1-2 .56 3.33 3.33 0 0 0 1.5-1.93"
        });
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 21,
                height: 21,
                viewBox: "0 0 21 21"
            }, e), s)
        }
    },
    "./src/svg/unlisted-19px.svg": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/react/index.js")
          , o = n.n(r);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = o.a.createElement("g", {
            fillRule: "evenodd"
        }, o.a.createElement("path", {
            d: "M4.13 12.21a15.4 15.4 0 0 1-2.54-2.28 6.61 6.61 0 0 1-.16-.2l-.25-.3.25-.3a13.08 13.08 0 0 1 .63-.7 15.4 15.4 0 0 1 1.7-1.51C5.55 5.54 7.5 4.7 9.51 4.7c.62 0 1.28.13 1.98.37l-.8.78a4.54 4.54 0 0 0-1.18-.18c-1.76 0-3.52.76-5.18 2.02-.58.45-1.12.93-1.58 1.41-.28.3-.28.36 0 .65a14.43 14.43 0 0 0 2.08 1.77l-.71.7zm3.05 1.57a6.32 6.32 0 0 0 4.61-.11c1-.38 2.04-.98 3.1-1.72a25.27 25.27 0 0 0 2.68-2.17l.37-.35-.37-.36a23.05 23.05 0 0 0-.76-.68 25.26 25.26 0 0 0-2.28-1.73l-.72.7a24.05 24.05 0 0 1 2.37 1.77c.2.17.2.42 0 .59-.57.49-1.2.97-1.84 1.43-1.01.7-2 1.26-2.9 1.61a5.4 5.4 0 0 1-1.92.42A6.6 6.6 0 0 1 8 13l-.81.78z"
        }), o.a.createElement("path", {
            d: "M12.05 9.06a2.68 2.68 0 0 1-2.7 3A2.74 2.74 0 0 1 9 12l3.06-2.96zM9.72 6.79a2.83 2.83 0 0 0-.37-.02 2.68 2.68 0 0 0-2.7 3l3.07-2.98zM3.6 14.3l-.35.34.68.7.35-.34 10.4-10.08.36-.34-.68-.7-.35.34z"
        }));
        t.a = function(e) {
            return o.a.createElement("svg", a({
                width: 19,
                height: 19,
                viewBox: "0 0 19 19"
            }, e), s)
        }
    },
    "./src/util/hooks/postRecircHooks.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./node_modules/react-redux/es/index.js")
          , o = n("./src/store/selectors/session.ts");
        function a() {
            var e = Object(r.f)((function(e) {
                var t = e.session;
                return {
                    user: t.user,
                    isSpoofed: t.isSpoofed
                }
            }
            ))
              , t = e.user.id
              , n = e.isSpoofed;
            return !(t && Object(o.a)(t) || n)
        }
    },
    "./src/util/hooks/useInterval.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = n("./node_modules/react/index.js");
        function o(e, t) {
            var n = r.useRef(e);
            function o() {
                n.current && n.current()
            }
            r.useEffect((function() {
                n.current = e
            }
            ), [e]),
            r.useEffect((function() {
                if (null !== t) {
                    var e = setInterval(o, t);
                    return function() {
                        clearInterval(e)
                    }
                }
            }
            ), [t])
        }
    },
    "./src/util/hooks/useIsEligibleToViewNewResponses.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n("./src/components/session/useFlag.tsx")
          , o = n("./src/components/session/useViewer.tsx")
          , a = function() {
            var e = Boolean(Object(r.a)("enable_responses_2"))
              , t = Boolean(Object(r.a)("enable_responses_all"))
              , n = Boolean(Object(r.a)("is_super_user"))
              , a = Object(o.b)();
            return e && (n || Boolean(null == a ? void 0 : a.isEligibleToViewNewResponses)) || t
        }
    },
    "./src/util/hooks/useTimer.tsx": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = n("./node_modules/react/index.js")
          , o = function() {
            var e = r.useRef(null)
              , t = function() {
                e.current && clearTimeout(e.current)
            };
            return r.useEffect((function() {
                return t
            }
            )),
            function(n, r) {
                return t(),
                e.current = setTimeout(n, r),
                t
            }
        }
    },
    "./src/util/post/claps.ts": function(e, t, n) {
        "use strict";
        function r(e, t) {
            return !!t && e[t.id] || {
                clapCount: (null == t ? void 0 : t.clapCount) || 0,
                viewerClapCount: (null == t ? void 0 : t.viewerClapCount) || 0,
                viewerHasClappedSinceFetch: !1
            }
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
    },
    "./src/util/post/metaDescription.ts": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return p
        }
        )),
        n.d(t, "c", (function() {
            return f
        }
        )),
        n.d(t, "b", (function() {
            return b
        }
        )),
        n.d(t, "d", (function() {
            return g
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/graphql-tag/src/index.js")
          , s = n.n(a)
          , i = n("./src/schema-types/globalTypes.ts")
          , l = n("./src/util/post/metaHelpers.ts")
          , c = n("./src/util/string.ts");
        function u() {
            var e = o()(["\n  fragment shortformPostMetaDescription_post on Post {\n    id\n    metaDescription\n    seoDescription\n    shortformType\n    title\n    ...getPostContentAsString_post\n  }\n  ", "\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function d() {
            var e = o()(["\n  fragment postMetaDescription_post on Post {\n    id\n    title\n    seoDescription\n    metaDescription\n    creator {\n      id\n      name\n    }\n    collection {\n      id\n      name\n    }\n    previewContent {\n      subtitle\n    }\n    ...getPostContentAsString_post\n  }\n  ", "\n"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        var m = function(e) {
            var t = e.metaDescription
              , n = e.seoDescription
              , r = e.title || "";
            if (n)
                return n;
            if (t)
                return t;
            var o = function(e) {
                var t = Object(l.a)(e, 250);
                return t && Object(c.b)(t, 200)
            }(e);
            if (o.length > 150)
                return o;
            var a = e.previewContent && e.previewContent.subtitle || "";
            if (a.length > 140)
                return a;
            a.length > 0 && (a += ".");
            var s = (r.length ? r + ". " : "") + a;
            if (s.length > 140)
                return s;
            var i = "“".concat(r, "” is published");
            return e.creator && e.creator.name && (i += " by ".concat(e.creator.name)),
            e.collection && e.collection.name && (i += " in ".concat(e.collection.name)),
            "".concat(a, " ").concat(i, ".")
        }
          , p = function(e) {
            return m(e).trim()
        }
          , f = function(e, t) {
            var n = e.metaDescription
              , r = e.seoDescription
              , o = e.shortformType
              , a = o === i.s.SHORTFORM_TYPE_NOTE || !o;
            if (r)
                return r;
            if (n)
                return n;
            if (a && t) {
                var s = Object(l.a)(e, 350, 0);
                return Object(c.b)(s, 300)
            }
            return ""
        }
          , b = s()(d(), l.b)
          , g = s()(u(), l.b)
    },
    "./src/util/post/metaHelpers.ts": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return j
        }
        )),
        n.d(t, "b", (function() {
            return S
        }
        )),
        n.d(t, "c", (function() {
            return k
        }
        )),
        n.d(t, "d", (function() {
            return P
        }
        )),
        n.d(t, "g", (function() {
            return R
        }
        )),
        n.d(t, "h", (function() {
            return A
        }
        )),
        n.d(t, "e", (function() {
            return L
        }
        )),
        n.d(t, "f", (function() {
            return M
        }
        )),
        n.d(t, "i", (function() {
            return B
        }
        )),
        n.d(t, "j", (function() {
            return D
        }
        )),
        n.d(t, "k", (function() {
            return N
        }
        )),
        n.d(t, "l", (function() {
            return U
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , s = n.n(a)
          , i = n("./node_modules/date-fns/index.js")
          , l = n("./node_modules/graphql-tag/src/index.js")
          , c = n.n(l)
          , u = n("./src/components/post/NormalizePostBodyModel.ts")
          , d = n("./src/schema-types/globalTypes.ts")
          , m = n("./src/util/post/titleHelpers.ts")
          , p = n("./src/util/string.ts");
        function f() {
            var e = s()(["\n  fragment shouldIndex_post on Post {\n    id\n    firstPublishedAt\n    isLimitedState\n    isShortform\n    shortformType\n    visibility\n    ...getPostContentAsString_post\n  }\n  ", "\n"]);
            return f = function() {
                return e
            }
            ,
            e
        }
        function b() {
            var e = s()(["\n  fragment shortformPostTitle_post on Post {\n    id\n    title\n    seoTitle\n    ...getPostContentAsString_post\n    ...appendPostContext_post\n    collection {\n      ...maybeAppendProductName_collection\n    }\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return b = function() {
                return e
            }
            ,
            e
        }
        function g() {
            var e = s()(["\n  fragment getTitleForPost_post on Post {\n    id\n    title\n    ...postTitle_post\n    ...getTitleDetails_post\n  }\n  ", "\n  ", "\n"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function x() {
            var e = s()(["\n  fragment postTitle_post on Post {\n    id\n    title\n    seoTitle\n    firstPublishedAt\n    ...getPostContentAsString_post\n    ...appendPostContext_post\n    collection {\n      id\n      name\n      domain\n      ...maybeAppendProductName_collection\n    }\n    creator {\n      name\n    }\n    previewContent {\n      subtitle\n    }\n  }\n  ", "\n  ", "\n  ", "\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = s()(["\n  fragment maybeAppendProductName_collection on Collection {\n    id\n    domain\n  }\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function y() {
            var e = s()(["\n  fragment getTitleDetails_post on Post {\n    id\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        ...GetTitleIndexMap_bodyModel\n      }\n    }\n    ...getPostContentAsString_post\n  }\n  ", "\n  ", "\n"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        function O() {
            var e = s()(["\n  fragment getPostContentAsString_post on Post {\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          text\n          type\n          mixtapeMetadata {\n            href\n          }\n        }\n      }\n    }\n  }\n"]);
            return O = function() {
                return e
            }
            ,
            e
        }
        function w() {
            var e = s()(["\n  fragment appendPostContext_post on Post {\n    id\n    sequence {\n      title\n    }\n    collection {\n      name\n    }\n    creator {\n      name\n    }\n  }\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        function C(e, t) {
            var n, r, o;
            return (null === (n = t.sequence) || void 0 === n ? void 0 : n.title) ? e += " - ".concat(t.sequence.title) : (null === (r = t.collection) || void 0 === r ? void 0 : r.name) ? e += " - ".concat(t.collection.name) : (null === (o = t.creator) || void 0 === o ? void 0 : o.name) && (e += " - ".concat(t.creator.name)),
            e
        }
        var _ = c()(w());
        function j(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                includeMixtapeHref: !1
            }, s = a.includeMixtapeHref, i = (null === (t = e.content) || void 0 === t || null === (n = t.bodyModel) || void 0 === n ? void 0 : n.paragraphs) || [], l = "", c = !0, u = !1, d = void 0;
            try {
                for (var m, p = i[Symbol.iterator](); !(c = (m = p.next()).done); c = !0) {
                    var f = m.value
                      , b = f.mixtapeMetadata
                      , g = f.text
                      , h = f.type;
                    if (s && (null == b ? void 0 : b.href) ? l += l ? " ".concat(b.href) : b.href : "P" === h && g && g.length > o && (l += l ? " ".concat(g) : g),
                    l.length > r)
                        break
                }
            } catch (e) {
                u = !0,
                d = e
            } finally {
                try {
                    c || null == p.return || p.return()
                } finally {
                    if (u)
                        throw d
                }
            }
            return l
        }
        var S = c()(O());
        function k(e) {
            var t = !1
              , n = "";
            if (e.content && e.content.bodyModel && e.content.bodyModel.paragraphs) {
                var r = e.content.bodyModel.paragraphs
                  , o = Object(u.d)(r).titleIndex;
                "number" == typeof o && (n = r[o].text,
                t = !0)
            }
            return {
                hasTitleGraf: t,
                latestTitle: n
            }
        }
        var P = c()(y(), S, u.b);
        function I(e, t, n) {
            return (null == n ? void 0 : n.domain) ? e : "".concat(e, " - ").concat(t)
        }
        var T = c()(E());
        function R(e, t) {
            var n, r, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a = e.seoTitle, s = e.title || "", l = (null === (n = e.previewContent) || void 0 === n ? void 0 : n.subtitle) || "";
            if (a)
                return Object(m.a)(a, e.collection && e.collection.name, t);
            if (!o)
                return s.length > 50 ? s : s = I(s = C(s, e), t, e.collection);
            s.length < 33 && l && (l = Object(p.b)(l, 40),
            s += ". ".concat(l)),
            (null === (r = e.creator) || void 0 === r ? void 0 : r.name) && (s += " | by ".concat(e.creator.name));
            var c = ""
              , u = Date.now() - 5184e6;
            e.firstPublishedAt >= u && (c = " | ".concat(Object(i.format)(e.firstPublishedAt, "MMM, YYYY")));
            var d = e.collection;
            return d ? d.domain ? s += "".concat(c, " | ").concat(d.name) : s += " | ".concat(d.name).concat(c, " | ").concat(t) : s += "".concat(c, " | ").concat(t),
            s
        }
        var A = c()(x(), S, _, T);
        function L(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k(e)
              , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , o = e.title || ""
              , a = n.latestTitle || o
              , s = v({}, e, {
                title: a
            });
            return R(s, t, r).trim()
        }
        var M = c()(g(), A, P);
        function B(e, t, n) {
            var r = e.seoTitle
              , o = e.title || "";
            return r ? Object(m.a)(r, e.collection && e.collection.name, t) : o = I(o = C(o = function(e, t, n) {
                var r = t.shortformType
                  , o = r === d.s.SHORTFORM_TYPE_NOTE || !r;
                return n || (o ? e = j(t, 250, 0) : r === d.s.SHORTFORM_TYPE_LINK && (e = j(t, 250, 0, {
                    includeMixtapeHref: !0
                }))),
                Object(p.b)(e, 200)
            }(o, e, n), e), t, e.collection)
        }
        var D = c()(b(), S, _, T);
        function N(e) {
            var t = e.firstPublishedAt
              , n = e.isLimitedState
              , r = e.isShortform
              , o = e.shortformType
              , a = e.visibility
              , s = o === d.s.SHORTFORM_TYPE_NOTE || !o;
            return !!t && (("PUBLIC" === a || "LOCKED" === a) && (!n && (!r || (s ? j(e, 10, 0).length > 10 : j(e, 10, 0).length > 0))))
        }
        var U = c()(f(), S)
    },
    "./src/util/post/titleHelpers.ts": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = function(e) {
            return e || "Untitled story"
        }
          , o = function(e, t, n) {
            return t ? "".concat(e, " | ").concat(t) : n ? "".concat(e, " | ").concat(n) : e
        }
    },
    "./src/util/quote.ts": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return f
        }
        )),
        n.d(t, "a", (function() {
            return b
        }
        )),
        n.d(t, "c", (function() {
            return g
        }
        ));
        var r = n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")
          , o = n.n(r)
          , a = n("./node_modules/@babel/runtime/helpers/defineProperty.js")
          , s = n.n(a)
          , i = n("./node_modules/lodash/cloneDeep.js")
          , l = n.n(i)
          , c = n("./node_modules/graphql-tag/src/index.js")
          , u = n.n(c)
          , d = n("./src/schema-types/globalTypes.ts");
        function m() {
            var e = o()(["\n  fragment buildQuotePreviewParagraph_quote on Quote {\n    paragraphs {\n      id\n      text\n      type\n      markups {\n        end\n        start\n        type\n      }\n    }\n    startOffset\n    endOffset\n  }\n"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var f = function(e) {
            if (1 !== e.paragraphs.length)
                return null;
            var t = l()(e.paragraphs[0])
              , n = t.text || ""
              , r = 0
              , o = e.startOffset || 0
              , a = e.endOffset || n.length;
            if (n.length - a > 100 && (n = n.substring(0, a + 100) + "…"),
            o > 100) {
                var s = o - 100;
                n = "…" + n.substring(s),
                r = s - 1
            }
            t.text = n,
            t.type = d.l.P,
            t.markups.unshift({
                end: a,
                start: o,
                type: d.j.HIGHLIGHT
            });
            var i = !0
              , c = !1
              , u = void 0;
            try {
                for (var m, p = t.markups[Symbol.iterator](); !(i = (m = p.next()).done); i = !0) {
                    var f = m.value;
                    f.start -= r,
                    f.end -= r
                }
            } catch (e) {
                c = !0,
                u = e
            } finally {
                try {
                    i || null == p.return || p.return()
                } finally {
                    if (c)
                        throw u
                }
            }
            return t
        }
          , b = function(e) {
            if (1 !== e.paragraphs.length)
                return null;
            var t = e.paragraphs[0].text || ""
              , n = e.startOffset || 0
              , r = e.endOffset || t.length
              , o = t.slice(n, r);
            return o.length >= 185 && (o = o.substring(0, 185) + "..."),
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        s()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, e.paragraphs[0], {
                text: o,
                type: d.l.P,
                markups: [{
                    end: o.length,
                    start: 0,
                    type: d.j.HIGHLIGHT,
                    anchorType: null,
                    href: null,
                    linkMetadata: null,
                    userId: null
                }],
                hasDropCap: null,
                dropCapImage: null
            })
        }
          , g = u()(m())
    },
    "./src/util/string.ts": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        ));
        var r = function(e) {
            return /^[\s\xa0]*$/.test(e)
        }
          , o = function(e, t) {
            if (e.length < t)
                return e;
            var n = e.substr(0, t)
              , r = n.charCodeAt(n.length - 1)
              , o = n.charCodeAt(n.length - 2);
            return r >= 55296 && r <= 57343 && !(o >= 55296 && o <= 57343) && (n = n.substr(0, n.length - 1)),
            (n = (n = n.replace(/(\s+\S+|\s+)$/, "")).replace(/[.,:;?!-]+$/, "")) + "…"
        }
    }
}]);
//# sourceMappingURL=Post.b0a0e9a4.chunk.js.map
