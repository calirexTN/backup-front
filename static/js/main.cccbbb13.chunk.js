(this["webpackJsonpcalirex-tunisie"] =
  this["webpackJsonpcalirex-tunisie"] || []).push([
  [0],
  {
    310: function (e, t, r) {},
    311: function (e, t, r) {},
    313: function (e, t, r) {},
    314: function (e, t, r) {},
    315: function (e, t, r) {},
    316: function (e, t, r) {},
    317: function (e) {
      e.exports = JSON.parse(
        '{"cards":[{"type":"jumbotron"},{"type":"video","src":"mIEfSU--IbA"},{"type":"card-img-right","src":"https://calirextn.com/assets/images/transport-agents-loading-truck.jpg","alt":"transport agents loading a truck","text_size":"is-size-11","title":"Un personnel qualifi\xe9","text":"En employant une technologie de pointe, du personnel comp\xe9tent et un r\xe9seau int\xe9gr\xe9 d\'actifs technologiques et humains, Calirex Tunisie offre un puissant avantage concurrentiel qui peut vous aider \xe0 fid\xe9liser vos clients et \xe0 d\xe9velopper votre entreprise."},{"type":"card-img-left","title":"Une livraison rapide","src":"https://calirextn.com/assets/images/delivery-man-in-front-of-truck.jpg","alt":"delivery man in front of a truck","text_size":"is-size-11","text":"Gr\xe2ce \xe0 notre \xe9thique commerciale focalis\xe9e sur le service client, nos prix comp\xe9titifs, une s\xe9curit\xe9 exceptionnelle et un taux de livraison de colis r\xe9ussi, nous visons \xe0 devenir rapidement l\'une des plus grandes soci\xe9t\xe9s de livraison express de la Tunisie."}]}'
      );
    },
    318: function (e, t, r) {},
    323: function (e, t, r) {},
    324: function (e, t, r) {},
    325: function (e) {
      e.exports = JSON.parse(
        '{"cards":[{"name":"Startup","company_type":"Micro-buisiness","quantity":"300 colis/mois","price":"8,00","description":"","promo":"basic","criterias":["Livraison en 24h","Mesures sanitaires COVID-19"]},{"name":"Entreprise","company_type":"Petit business","quantity":"1000 colis/mois","price":"7,60","promo":"-5%","description":"","criterias":["Livraison en 24h","Mesures sanitaires COVID-19","10% des Retours Gratuit"]},{"name":"<span class=\'mea-text\'>Calirex</span> Pro","company_type":"grande entreprise","quantity":"+5000 colis/mois","price":"7,20","promo":"-10%","description":"","criterias":["Livraison en 24h","Mesures sanitaires COVID-19","100% des Retours Gratuit","Support client 7j/7"]}]}'
      );
    },
    423: function (e, t) {},
    644: function (e, t, r) {},
    645: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(0),
        s = r(34),
        n = r.n(s),
        i = r(11),
        o = (r(310), r(9)),
        l = (r(147), r(311), r(1));
      var c = r(654),
        d = r(647),
        m = r(648),
        u = r(649),
        b =
          (r(313),
          r(314),
          function (e) {
            var t = e.embedId;
            return Object(l.jsx)("div", {
              className: "video-responsive",
              children: Object(l.jsx)("iframe", {
                src: "https://www.youtube.com/embed/".concat(t),
                frameBorder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
              }),
            });
          });
      var j = function (e) {
        var t = Object(l.jsx)(l.Fragment, {});
        return (
          "video" === e.type &&
            (t = Object(l.jsx)(c.a, {
              className: e.type,
              children: Object(l.jsx)(c.a.Body, {
                children: Object(l.jsx)(d.a, {
                  children: Object(l.jsx)(m.a, {
                    children: Object(l.jsx)(b, { embedId: e.src }),
                  }),
                }),
              }),
            })),
          "card-img-left" === e.type &&
            (t = Object(l.jsx)(c.a, {
              className: e.type,
              children: Object(l.jsx)(c.a.Body, {
                children: Object(l.jsxs)(d.a, {
                  children: [
                    Object(l.jsx)(m.a, {
                      md: 8,
                      children: Object(l.jsxs)(c.a.Text, {
                        className: e.text_size,
                        children: [
                          Object(l.jsx)("p", {
                            className: "is-size-20 is-bold",
                            children: e.title,
                          }),
                          Object(l.jsx)("p", {
                            className: "is-size-13",
                            children: e.text,
                          }),
                        ],
                      }),
                    }),
                    Object(l.jsx)(m.a, {
                      md: 4,
                      children: Object(l.jsx)(c.a.Img, {
                        loading: "lazy",
                        src: e.src,
                        alt: e.alt,
                      }),
                    }),
                  ],
                }),
              }),
            })),
          "card-img-right" === e.type &&
            (t = Object(l.jsx)(c.a, {
              className: e.type,
              children: Object(l.jsx)(c.a.Body, {
                children: Object(l.jsxs)(d.a, {
                  children: [
                    Object(l.jsx)(m.a, {
                      md: 4,
                      children: Object(l.jsx)(c.a.Img, {
                        loading: "lazy",
                        src: e.src,
                        alt: e.alt,
                      }),
                    }),
                    Object(l.jsx)(m.a, {
                      md: 8,
                      children: Object(l.jsxs)(c.a.Text, {
                        className: e.text_size,
                        children: [
                          Object(l.jsx)("p", {
                            className: "is-size-20 is-bold",
                            children: e.title,
                          }),
                          Object(l.jsx)("p", {
                            className: "is-size-13",
                            children: e.text,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })),
          "jumbotron" === e.type &&
            (t = Object(l.jsx)(l.Fragment, {
              children: Object(l.jsx)("h2", {
                className: "has-text-centered is-size-24 is-bold",
                children: "Apprenez \xe0 nous conna\xeetre?",
              }),
            })),
          Object(l.jsx)(u.a, {
            lg: !0,
            className: "card-container",
            children: t,
          })
        );
      };
      r(315);
      var p = function () {
          return Object(l.jsx)(l.Fragment, {
            children: Object(l.jsxs)("div", {
              className:
                "bg-image p-5  mb-5 text-white align-items-center d-flex",
              children: [
                Object(l.jsx)(m.a, {
                  md: 6,
                  className:
                    "cover-text-bloc has-text-centered has-text-left-touch",
                  children: Object(l.jsxs)("h1", {
                    className: "is-size-30 is-size-15-mobile is-white",
                    children: [
                      "On s'engage ",
                      Object(l.jsx)("br", {}),
                      "\xe0 am\xe9liorer",
                      Object(l.jsx)("br", {}),
                      "votre exp\xe9rience",
                    ],
                  }),
                }),
                Object(l.jsx)("img", {
                  src: "https://calirextn.com/assets/images/truck.svg",
                  className: "cover-icon is-hidden-touch",
                }),
                Object(l.jsx)("img", {
                  src: "https://calirextn.com/assets/images/building-shadow.webp",
                  className: "cover-image is-hidden-touch",
                }),
              ],
            }),
          });
        },
        g = { padding: " 2rem " },
        h = { width: "50%", display: "inline-block" },
        x = function (e) {
          return Object(l.jsxs)(u.a, {
            className: "has-text-centered",
            style: g,
            children: [
              Object(l.jsx)("hr", { style: h }),
              Object(l.jsxs)(d.a, {
                children: [
                  Object(l.jsx)("p", {
                    className: "is-size-24 is-bold",
                    children: e.title,
                  }),
                  Object(l.jsx)("p", {
                    className: "is-size-15",
                    children: e.subtitle,
                  }),
                ],
              }),
              Object(l.jsx)(d.a, {
                children: Object(l.jsx)("a", {
                  "data-expand-link": !0,
                  className: "link",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  href: "https://www.google.com/maps/place/Calirex+Tunisie/@36.7643632,10.0340955,15z/data=!4m2!3m1!1s0x0:0xe8edc1e22de4a228?sa=X&ved=2ahUKEwjgvoCwnJvzAhUkBGMBHX4YCpIQ_BJ6BAhJEAU",
                  children: Object(l.jsx)("img", {
                    "data-expand-target": !0,
                    loading: "lazy",
                    className: "standalone-img",
                    src: e.src,
                    alt: e.alt,
                  }),
                }),
              }),
            ],
          });
        };
      r(316);
      var _ = function () {
          var e,
            t = r(317),
            a = [],
            s = Object(o.a)(t.cards);
          try {
            for (s.s(); !(e = s.n()).done; ) {
              var n = e.value,
                i = Object(l.jsx)(j, {
                  type: n.type,
                  title: n.title,
                  src: n.src,
                  text_size: n.text_size,
                  text: n.text,
                  alt: n.alt ? n.alt : "",
                });
              a.push(i);
            }
          } catch (c) {
            s.e(c);
          } finally {
            s.f();
          }
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(p, {}),
              a,
              Object(l.jsx)(x, {
                title: "Vous pouvez nous retrouver \xe0 cette adresse",
                subtitle:
                  "7 avenue habib bourguiba Mornaguia, Manouba, 1110 Tunisie",
                src: "https://calirextn.com/assets/images/calirex-tunisie-geolocatisation.jpg",
                alt: "Calirex Tunisie address",
              }),
              Object(l.jsx)("div", { className: "container" }),
            ],
          });
        },
        f = r(652),
        O = r(651);
      r(318);
      var v = function (e) {
          var t = Object(l.jsx)(f.a, {
            children: Object(l.jsx)(f.a.Link, {
              href: "https://delivery.calirextn.com/",
              children: "Connexion",
            }),
          });
          return Object(l.jsx)(l.Fragment, {
            children: Object(l.jsx)(O.a, {
              collapseOnSelect: !0,
              expand: "lg",
              bg: e.bg,
              variant: "dark",
              children: Object(l.jsxs)(u.a, {
                className: "page-header",
                children: [
                  Object(l.jsxs)(O.a.Brand, {
                    href: "/",
                    children: [
                      Object(l.jsx)("img", {
                        alt: "",
                        src: "https://calirextn.com/assets/images/bare-logo-ctn.svg",
                        width: "70",
                        height: "70",
                        className: "d-inline-block align-top",
                      }),
                      " ",
                    ],
                  }),
                  Object(l.jsx)(O.a.Brand, {
                    className: "mea-text",
                    href: "/",
                    children: "Calirex Tunisie",
                  }),
                  Object(l.jsx)(O.a.Toggle, {
                    "aria-controls": "responsive-navbar-nav",
                  }),
                  Object(l.jsxs)(O.a.Collapse, {
                    id: "responsive-navbar-nav",
                    children: [
                      Object(l.jsx)(f.a, {
                        className: "me-auto",
                        children: Object(l.jsx)(f.a.Link, {
                          href: "https://delivery.calirextn.com/",
                          children: "S'enregistrer",
                        }),
                      }),
                      t,
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        y = r(57),
        N =
          (r(323),
          function () {
            return Object(l.jsxs)("footer", {
              className: "footer",
              children: [
                Object(l.jsxs)("div", {
                  className: "footer-center col-md-4 col-sm-6",
                  children: [
                    Object(l.jsxs)("p", {
                      className: "about",
                      children: [
                        Object(l.jsx)("span", {
                          children: " Qui sommes nous?",
                        }),
                        " Entreprise de livraison \xe0 domicile qui s\u2018adapte \xe0 vos besoins. Livrer plus rapidement \xe0 vos clients et finalisez vos transactions.",
                      ],
                    }),
                    Object(l.jsxs)("div", {
                      className: "icons",
                      children: [
                        Object(l.jsx)("a", {
                          href: "https://pages.facebook.com/CalirexTunisie",
                          children: Object(l.jsx)(y.a, {
                            className: "ct-icon",
                          }),
                        }),
                        Object(l.jsx)("a", {
                          href: "https://twitter.com/CalirexTunisie",
                          children: Object(l.jsx)(y.g, {
                            className: "ct-icon",
                          }),
                        }),
                        Object(l.jsx)("a", {
                          href: "https://linkedin.com/company/calirex-tunisie",
                          children: Object(l.jsx)(y.c, {
                            className: "ct-icon",
                          }),
                        }),
                        Object(l.jsx)("a", {
                          href: "https://www.instagram.com/calirex.tunisie",
                          children: Object(l.jsx)(y.b, {
                            className: "ct-icon",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "footer-center",
                  children: [
                    Object(l.jsx)("div", {
                      children: Object(l.jsxs)("a", {
                        children: [
                          Object(l.jsx)(y.d, { className: "ct-icon" }),
                          Object(l.jsxs)("p", {
                            children: [
                              Object(l.jsx)("span", {
                                children:
                                  " 7 avenue habib bourguiba, Mornaguia",
                              }),
                              " Manouba, Tunisie",
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(l.jsxs)("div", {
                      children: [
                        Object(l.jsx)(y.e, { className: "ct-icon" }),
                        Object(l.jsx)("p", { children: " (+216) 29 331 715" }),
                      ],
                    }),
                    Object(l.jsxs)("div", {
                      children: [
                        Object(l.jsx)(y.f, { className: "ct-icon" }),
                        Object(l.jsx)("p", {
                          children: Object(l.jsx)("a", {
                            href: "#",
                            children: " contact@calirextn.com",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(l.jsxs)("div", {
                  className: "footer-right",
                  children: [
                    Object(l.jsxs)("h2", {
                      className: "mea-text",
                      children: [
                        " Calirex ",
                        Object(l.jsx)("span", { children: "Tunisie" }),
                      ],
                    }),
                    Object(l.jsxs)("p", {
                      className: "menu",
                      children: [
                        Object(l.jsx)("a", { href: "/", children: " Accueil" }),
                        " |",
                        Object(l.jsx)("a", {
                          href: "/pricing",
                          children: " Tarifs",
                        }),
                        " |",
                        Object(l.jsx)("a", {
                          href: "/carrieres",
                          children: " Carri\xe8res",
                        }),
                        " |",
                      ],
                    }),
                    Object(l.jsx)("p", {
                      className: "name",
                      children: " Calirex Tunisie \xa9 2021",
                    }),
                  ],
                }),
                Object(l.jsx)("div", {
                  className: "footer-bottom",
                  children:
                    "Copyright \xa9 2021 calirex tunisie. Tous droits r\xe9serv\xe9s.",
                }),
              ],
            });
          }),
        k = r(653),
        w = r(650),
        S = r(83);
      r(324);
      var F = function () {
          var e,
            t = r(325),
            s = Object(a.useState)(!1),
            n = Object(i.a)(s, 2),
            d = n[0],
            m = n[1],
            u = function () {
              return m(!1);
            },
            b = function () {
              return m(!0);
            },
            j = [],
            p = Object(o.a)(t.cards);
          try {
            for (p.s(); !(e = p.n()).done; ) {
              var g,
                h = e.value,
                x = [],
                _ = Object(o.a)(h.criterias);
              try {
                for (_.s(); !(g = _.n()).done; ) {
                  var f = g.value,
                    O = Object(l.jsxs)("li", {
                      className: "list-group-item price-card-bullet",
                      children: [
                        Object(l.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fill: "currentColor",
                          className: "bi bi-check text-primary",
                          viewBox: "0 0 16 16",
                          children: Object(l.jsx)("path", {
                            d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z",
                          }),
                        }),
                        " ",
                        f,
                      ],
                    });
                  x.push(O);
                }
              } catch (y) {
                _.e(y);
              } finally {
                _.f();
              }
              var v = Object(l.jsx)("div", {
                className: "col-lg-4 col-md-12 mb-4",
                children: Object(l.jsxs)(c.a, {
                  className: "popout-card h-100 shadow-lg pricing-card",
                  children: [
                    Object(l.jsxs)(c.a.Body, {
                      children: [
                        Object(l.jsx)("span", {
                          className: "badge text-primary badge-card is-size-13",
                          children: h.promo,
                        }),
                        Object(l.jsxs)("div", {
                          className: "text-center p-3",
                          children: [
                            Object(l.jsx)("br", {}),
                            Object(l.jsx)(c.a.Title, {
                              className:
                                "is-size-20 text-primary text-center price-card-title",
                              dangerouslySetInnerHTML: { __html: h.name },
                            }),
                            Object(l.jsx)("br", {}),
                            Object(l.jsx)("small", {
                              className: "text-tertiary is-size-11",
                              children: h.quantity,
                            }),
                            Object(l.jsx)("br", {}),
                            Object(l.jsx)("br", {}),
                            Object(l.jsx)("span", {
                              className: "h1",
                              children: h.price,
                            }),
                            Object(l.jsx)("sup", { children: "TND" }),
                            "/colis",
                            Object(l.jsx)("br", {}),
                            Object(l.jsx)("br", {}),
                          ],
                        }),
                        Object(l.jsx)("ul", {
                          className: "list-group list-group-flush",
                          children: x,
                        }),
                      ],
                    }),
                    Object(l.jsx)(c.a.Footer, {
                      className: " text-center price-card-footer",
                      children: Object(l.jsx)("button", {
                        className: "btn btn-primary btn-card btn-lg",
                        onClick: b,
                        children: "Selectionner",
                      }),
                    }),
                  ],
                }),
              });
              j.push(v);
            }
          } catch (y) {
            p.e(y);
          } finally {
            p.f();
          }
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(S.a, {
                children: Object(l.jsx)("style", {
                  children:
                    "\n      .App {\n          background: url('https://calirextn.com/assets/images/loading-background.svg');\n          background-position: bottom right;\n          background-size: cover;\n          background-repeat: no-repeat;\n      }\n  ",
                }),
              }),
              Object(l.jsx)("div", {
                classNameName: "Prices",
                children: Object(l.jsx)("div", {
                  className: "container-fluid price-cards-container",
                  children: Object(l.jsxs)("div", {
                    className: "container p-4",
                    children: [
                      Object(l.jsx)("h2", {
                        className: " text-center text-white p-4",
                        children: "Choisissez l'offre qui vous convient",
                      }),
                      Object(l.jsx)("div", { className: "row", children: j }),
                    ],
                  }),
                }),
              }),
              Object(l.jsxs)(k.a, {
                show: d,
                onHide: u,
                children: [
                  Object(l.jsx)(k.a.Header, {
                    closeButton: !0,
                    children: Object(l.jsx)(k.a.Title, {
                      children: "Modal heading",
                    }),
                  }),
                  Object(l.jsx)(k.a.Body, {
                    children: "Woohoo, you're reading this text in a modal!",
                  }),
                  Object(l.jsxs)(k.a.Footer, {
                    children: [
                      Object(l.jsx)(w.a, {
                        variant: "secondary",
                        onClick: u,
                        children: "Close",
                      }),
                      Object(l.jsx)(w.a, {
                        variant: "primary",
                        onClick: u,
                        children: "Save Changes",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        C = r(69),
        T = r.n(C),
        P = [
          "phonenumber",
          "companyname",
          "landline",
          "plan",
          "address",
          "postalcode",
          "email",
          "country",
          "state",
          "city",
          "lastname",
          "countrycode",
          "firstname",
          "id",
        ],
        A = function () {
          return sessionStorage.getItem("token") || null;
        },
        z = function () {
          sessionStorage.removeItem("token"),
            sessionStorage.removeItem("orders"),
            sessionStorage.removeItem("customers");
          for (var e = 0; e < P.length; e++) sessionStorage.removeItem(P[e]);
        },
        I = function (e) {
          new Promise(function (t, r) {
            !(function (e, t, r) {
              T.a
                .get(
                  "https://dqnhq15t16.execute-api.eu-west-3.amazonaws.com/prod/orders?pathvar=" +
                    e.replace(/\W/g, "-") +
                    "orders"
                )
                .then(function (e) {
                  return 200 === e.data.statusCode
                    ? (t(e.data.body), e.data.body)
                    : (t(0), 0);
                })
                .catch(function (e) {
                  return t(0), 0;
                });
            })(e, t);
          }).then(function (e) {
            e
              ? (console.log(e),
                sessionStorage.setItem("orders", JSON.stringify(e.Items)))
              : sessionStorage.setItem("orders", "[]");
          });
        },
        D = function (e) {
          new Promise(function (t, r) {
            !(function (e, t, r) {
              T.a
                .get(
                  "https://dqnhq15t16.execute-api.eu-west-3.amazonaws.com/prod/customers?pathvar=" +
                    e.replace(/\W/g, "-") +
                    "customers"
                )
                .then(function (e) {
                  return 200 === e.data.statusCode
                    ? (t(e.data.body), e.data.body)
                    : (t(0), 0);
                })
                .catch(function (e) {
                  return t(0), 0;
                });
            })(e, t);
          }).then(function (e) {
            e
              ? (console.log("here"),
                console.log(e),
                sessionStorage.setItem("customers", JSON.stringify(e.Items)))
              : (console.log("empty"),
                sessionStorage.setItem("customers", "[]"));
          });
        },
        B = function (e, t) {
          console.log(t),
            new Promise(function (e, r) {
              !(function (e, t, r) {
                T.a
                  .post(
                    "https://dqnhq15t16.execute-api.eu-west-3.amazonaws.com/prod/orders",
                    e
                  )
                  .then(function (e) {
                    return 200 === e.data.statusCode
                      ? (t(e.data.body), e.data.body)
                      : (t(0), 0);
                  })
                  .catch(function (e) {
                    return t(0), 0;
                  });
              })(t, e);
            }).then(function (t) {
              t
                ? (I(e), console.log(t))
                : alert(
                    "Une erreur est survenue. Veuillez r\xe9essayer ult\xe9rieurement."
                  );
            });
        },
        M = function (e, t) {
          new Promise(function (e, r) {
            !(function (e, t, r) {
              console.log(
                "https://dqnhq15t16.execute-api.eu-west-3.amazonaws.com/prod/customers",
                e
              ),
                T.a
                  .post(
                    "https://dqnhq15t16.execute-api.eu-west-3.amazonaws.com/prod/customers",
                    e
                  )
                  .then(function (e) {
                    return 200 === e.data.statusCode
                      ? (t(e.data.body), e.data.body)
                      : (t(0), 0);
                  })
                  .catch(function (e) {
                    return t(0), 0;
                  });
            })(t, e);
          }).then(function (t) {
            t
              ? D(e)
              : alert(
                  "Une erreur est survenue. Veuillez r\xe9essayer ult\xe9rieurement."
                );
          });
        },
        J = function () {
          for (
            var e = JSON.parse(sessionStorage.getItem("orders")), t = [], r = 0;
            r < e.length;
            r++
          )
            1 == e[r].memory && t.push(e[r]);
          return JSON.stringify(t);
        },
        E = function () {
          for (
            var e = JSON.parse(sessionStorage.getItem("customers")),
              t = [],
              r = 0;
            r < e.length;
            r++
          )
            1 == e[r].memory && t.push(e[r]);
          return JSON.stringify(t);
        },
        L = function () {
          return sessionStorage.getItem("plan");
        },
        q = r(22);
      var R = function () {
          var e = Object(q.f)();
          return (
            A() || e.push("/login"),
            Object(l.jsx)("div", {
              className: "container rounded bg-white mt-5 mb-5",
              children: Object(l.jsxs)("div", {
                className: "row",
                children: [
                  Object(l.jsx)("div", {
                    className: "col-md-3 border-right",
                    children: Object(l.jsx)("div", {
                      className:
                        "d-flex flex-column align-items-center text-center p-3 py-5",
                      children: Object(l.jsx)("img", {
                        className: "rounded-circle mt-5",
                        width: "150px",
                        src: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                      }),
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "col-md-5 border-right",
                    children: Object(l.jsxs)("div", {
                      className: "p-3 py-5",
                      children: [
                        Object(l.jsx)("div", {
                          className:
                            "d-flex justify-content-between align-items-center mb-3",
                          children: Object(l.jsx)("h4", {
                            className: "text-right",
                            children: "Profile Settings",
                          }),
                        }),
                        Object(l.jsxs)("div", {
                          className: "row mt-2",
                          children: [
                            Object(l.jsxs)("div", {
                              className: "col-md-6",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Nom",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "first name",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-6",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Pr\xe9nom",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  value: "",
                                  placeholder: "surname",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Adresse mail",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter email id",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Soci\xe9t\xe9",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter email id",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Programme",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter email id",
                                  value: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(l.jsxs)("div", {
                          className: "row mt-3",
                          children: [
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Num\xe9ro de t\xe9l\xe9phone",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter phone number",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Adresse",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter address line 1",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Compl\xe9ment d'adresse",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter address line 2",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Code postal",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter address line 2",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-12",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Ville",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "enter address line 2",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-6",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "Pays",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "country",
                                  value: "",
                                }),
                              ],
                            }),
                            Object(l.jsxs)("div", {
                              className: "col-md-6",
                              children: [
                                Object(l.jsx)("label", {
                                  className: "labels",
                                  children: "\xc9tat",
                                }),
                                Object(l.jsx)("input", {
                                  type: "text",
                                  className: "form-control",
                                  value: "",
                                  placeholder: "state",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(l.jsx)("div", {
                          className: "mt-5 text-center",
                          children: Object(l.jsx)("button", {
                            className: "btn btn-primary profile-button",
                            type: "button",
                            children: "Sauvegarder",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "col-md-4",
                    children: Object(l.jsx)("div", {
                      className: "p-3 py-5",
                      children: Object(l.jsxs)("div", {
                        className: "row",
                        children: [
                          Object(l.jsx)("div", {
                            className: "col-md-6 text-right",
                            style: { textAlign: "end" },
                            children: Object(l.jsx)(w.a, {
                              variant: "primary",
                              size: "lg",
                              children: "Modifier",
                            }),
                          }),
                          Object(l.jsx)("div", {
                            className: "col-md-6",
                            style: { textAlign: "start" },
                            children: Object(l.jsx)(w.a, {
                              variant: "danger",
                              size: "lg",
                              children: "Supprimer",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        G = r(3),
        H = r(87),
        W = r(45),
        V = r.n(W),
        K = r(139),
        U = r.n(K),
        Q = r(140),
        X = r.n(Q),
        Y = r(145),
        $ = r.n(Y),
        Z = r(189),
        ee = r.n(Z),
        te = r(293),
        re = r.n(te),
        ae = r(190),
        se = r(191),
        ne = r(192);
      var ie = function (e) {
          for (
            var t = l.Fragment,
              r = [],
              a = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [],
              },
              s = { "@type": "ListItem", position: 0, name: "", item: "" },
              n = 0;
            n < e.crumbs.length;
            n++
          ) {
            var i = e.crumbs[n];
            (s.position = n),
              (s.name = i[1]),
              (s.item = "https://www.calirextn.com" + i[0]),
              a.itemListElement.push(s);
            var o = Object(l.jsx)(ne.a.Item, {
              className: !!e.invertedText && "is-white",
              active: n === e.crumbs.length - 1,
              href: s.item,
              children: s.name,
            });
            r.push(o);
          }
          var c = JSON.stringify(a);
          return (
            console.log(c),
            (t = Object(l.jsx)(l.Fragment, {
              children: Object(l.jsx)(u.a, {
                children: Object(l.jsx)(ne.a, { children: r }),
              }),
            })),
            Object(l.jsxs)(l.Fragment, {
              children: [
                t,
                Object(l.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: c },
                }),
              ],
            })
          );
        },
        oe = r(422),
        le = r(448),
        ce = A(),
        de = (function () {
          for (var e = [], t = 0; t < P.length - 1; t++) {
            if (!sessionStorage.getItem(P[t])) return null;
            e.push(sessionStorage.getItem(P[t]));
          }
          return [P.slice(0, 13), e];
        })(),
        me = function (e, t, r, a) {
          (e.memory = 1),
            (e.TableName = ce + "customers"),
            (e.country_code = "+216"),
            console.log(e),
            console.log(r);
          for (var s = !1, n = 0; n < r.length; n++)
            r[n].email === e.memory &&
              ((s = n), alert("Ce client a d\xe9j\xe0 \xe9t\xe9 cr\xe9\xe9"));
          return (
            s ||
              ((e.id = "CTCID-" + Date.now()),
              console.log(e[0]),
              console.log(a),
              (a = a + ("" === a ? "" : ",") + JSON.stringify(e)),
              console.log(JSON.stringify(e))),
            Object.keys(e).map(function (t, r) {
              e[t] = "";
            }),
            console.log(t),
            console.log(a),
            a
          );
        },
        ue = function (e, t, r) {
          var a = [];
          e.forEach(function (e) {
            console.log(e),
              a.push(t[e - 1]),
              "orders" === r && (a[a.length - 1].TableName = ce + "orders"),
              "customers" === r &&
                (a[a.length - 1].TableName = ce + "customers");
          });
          var s = JSON.stringify(a);
          "orders" === r &&
            (console.log(e),
            console.log(t),
            console.log(a),
            B(ce, '{"data":' + s + "}")),
            "customers" === r && M(ce, '{"data":' + s + "}");
        },
        be = r(304);
      var je = function (e) {
          var t = Object(a.useState)(!1),
            r = Object(i.a)(t, 2),
            s = r[0],
            n = r[1];
          console.log("props.onSubmitFunction"),
            console.log(e.onSubmitFunction);
          var o,
            c,
            d = JSON.parse(E()),
            m = JSON.parse(J()),
            u = A(),
            b = {
              title: "Veuillez remplir le formulaire",
              type: "object",
              required: Object.keys(e.requiredFields),
              properties: e.schema,
              definitions: e.additionalProperties,
            },
            j = "",
            p = "";
          return (
            "orders" === e.onSubmitFunction &&
              ((o = function (e, t) {
                var r = (function (e, t, r, a, s, n) {
                  var i = new Date();
                  (e.delivery_date = ""),
                    (e.return_date = ""),
                    (e.memory = 1),
                    (e.TableName = ce + "orders"),
                    (e.status = "en attente d'enl\xe8vement"),
                    (e.address = "0");
                  var o = 0,
                    l = 0;
                  if (!e.client_id && e.addClient) {
                    s = me(e.addClient[0], t, n, s);
                    var c = JSON.parse(s);
                    (e.client_id = c.id), console.log(e), console.log(typeof e);
                  }
                  for (
                    var d = JSON.parse("[" + a + "]"), m = !1, u = 0;
                    u < d.length;
                    u++
                  )
                    d[u].client_id === e.client_id &&
                      ((m = 1),
                      (d[u].package_number =
                        parseInt(d[u].package_number) +
                        parseInt(e.package_number)),
                      (d[u].weight_g =
                        parseInt(e.weight_g) + parseInt(d[u].weight_g)),
                      (d[u].price_base =
                        parseInt(e.price_base) + parseInt(d[u].price_base)));
                  console.log(d.length), console.log(r.length);
                  for (var b = 0; b < r.length; b++)
                    console.log(e),
                      "en attente d'enl\xe8vement" === r[b].status &&
                        ((l = b + 1),
                        (e.id = r[b].id),
                        r[b].client_id === e.client_id && (o = b + 1)),
                      b === r.length - 1 &&
                        (0 === d.length
                          ? (l
                              ? ((e.order_id = r[l - 1].order_id),
                                console.log(' formData["order_id"]'),
                                console.log(e.order_id))
                              : ((e.order_id = "CTO-" + Date.now()),
                                console.log(" order doesn't exist")),
                            o
                              ? (console.log("client order exist"),
                                (e.id = r[o - 1].id),
                                (e.package_number =
                                  parseInt(r[o - 1].package_number) +
                                  parseInt(e.package_number)),
                                (e.weight_g =
                                  parseInt(e.weight_g) +
                                  parseInt(r[o - 1].weight_g)),
                                (e.price_base =
                                  parseInt(e.price_base) +
                                  parseInt(r[o - 1].price_base)),
                                (e.creation_date = r[o - 1].creation_date))
                              : ((e.creation_date = i
                                  .toISOString()
                                  .split("T")[0]
                                  .replace(/-/g, "/")),
                                (e.id = "CTP-" + Date.now())),
                            (a = JSON.stringify(e)))
                          : m
                          ? (a = JSON.stringify(d))
                          : (o
                              ? ((e.order_id = r[l].order_id),
                                (e.id = r[o - 1].id),
                                (e.package_number =
                                  parseInt(r[o - 1].package_number) +
                                  parseInt(e.package_number)),
                                (e.weight_g =
                                  parseInt(e.weight_g) +
                                  parseInt(r[o - 1].weight_g)),
                                (e.price_base =
                                  parseInt(e.price_base) +
                                  parseInt(r[o - 1].price_base)),
                                (e.creation_date = r[o - 1].creation_date))
                              : ((e.order_id = d[0].order_id),
                                (e.id = "CTP-" + Date.now()),
                                (e.creation_date = i
                                  .toISOString()
                                  .split("T")[0]
                                  .replace(/-/g, "/"))),
                            (a = a + "," + JSON.stringify(e))));
                  return (
                    0 === r.length &&
                      (m
                        ? (a = JSON.stringify(d))
                        : ((e.id = "CTP-" + Date.now()),
                          (e.creation_date = i
                            .toISOString()
                            .split("T")[0]
                            .replace(/-/g, "/")),
                          0 === d.length
                            ? ((e.order_id = "CTO-" + Date.now()),
                              (a = JSON.stringify(e)))
                            : ((e.order_id = d[0].order_id),
                              (a = a + "," + JSON.stringify(e))))),
                    [a, s]
                  );
                })(e.formData, t, m, j, p, d);
                (p = r[1]), (j = r[0]);
              }),
              (c = function () {
                B(u, '{"data":[' + j + "]}"),
                  "" != p && M(u, '{"data":[' + p + "]}"),
                  n(!1);
              })),
            "customers" === e.onSubmitFunction &&
              ((o = function (e, t) {
                var r = e.formData;
                (j = me(r, t, d, j)),
                  document.getElementById("submit-form").reset();
              }),
              (c = function () {
                M(u, '{"data":[' + j + "]}"), n(!1);
              })),
            Object(l.jsxs)(l.Fragment, {
              children: [
                Object(l.jsx)(w.a, {
                  variant: e.color,
                  className: " btn-card btn-lg",
                  onClick: function () {
                    return n(!0);
                  },
                  children: e.buttonTitle,
                }),
                Object(l.jsxs)(k.a, {
                  show: s,
                  onHide: function () {
                    n(!1);
                  },
                  children: [
                    Object(l.jsx)(k.a.Header, {
                      closeButton: !0,
                      children: Object(l.jsx)(k.a.Title, {
                        children: e.modalTitle,
                      }),
                    }),
                    Object(l.jsx)(k.a.Body, {
                      children: Object(l.jsx)(be.a, {
                        schema: b,
                        formData: "",
                        onSubmit: o,
                        id: "submit-form",
                        children: Object(l.jsx)(w.a, {
                          variant: "secondary",
                          type: "submit",
                          children: "Confirmer et ajouter",
                        }),
                      }),
                    }),
                    Object(l.jsx)(k.a.Footer, {
                      children: Object(l.jsx)(w.a, {
                        variant: "primary",
                        onClick: c,
                        children: "Sauvgarder",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        pe = r(303),
        ge = r.n(pe);
      function he(e) {
        var t = Object(a.useRef)();
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsxs)("div", {
            children: [
              Object(l.jsx)(ge.a, {
                trigger: function () {
                  return Object(l.jsx)("div", {
                    className: "p-3",
                    children: Object(l.jsx)(w.a, {
                      className: e.printButton ? "" : "is-hidden",
                      children: "Imprimer",
                    }),
                  });
                },
                content: function () {
                  return t;
                },
              }),
              Object(l.jsxs)("div", {
                className: "to-print",
                ref: function (e) {
                  return (t = e);
                },
                children: [
                  Object(l.jsx)("style", {
                    type: "text/css",
                    media: "print",
                    children: "@page { size: A4 ; pageBreakBefore: 'always'}",
                  }),
                  e.componentToPrint,
                ],
              }),
            ],
          }),
        });
      }
      var xe = function (e) {
          var t = Y.Search.SearchBar,
            r = (Y.ColumnToggle.ToggleList, Object(q.f)());
          A() || r.push("/login");
          var s = Object(a.useState)(!1),
            n = Object(i.a)(s, 2),
            c = n[0],
            d = n[1],
            m = function () {
              be(), d(!0);
            },
            b = function () {
              d(!1);
            },
            j = JSON.parse(E()),
            p = e.customFormats,
            g = e.onSubmitFunction,
            h = e.data,
            x = [],
            _ = e.columns,
            f = e.togglecolumns,
            O = e.title,
            v = Object(a.useState)([]),
            y = Object(i.a)(v, 2),
            N = y[0],
            F = y[1],
            C = Object(a.useState)([]),
            T = Object(i.a)(C, 2),
            P = T[0],
            z = T[1],
            I = Object(a.useState)(!1),
            D = Object(i.a)(I, 2),
            B = D[0],
            M = D[1],
            J = Object(a.useState)("Voulez-vous supprimer ces \xe9l\xe9ments"),
            L = Object(i.a)(J, 2),
            R = L[0],
            W = L[1];
          _.forEach(function (e) {
            e.filter = Object(Z.textFilter)({ placeholder: "..." });
          });
          var K = function () {
              console.log(P),
                P.length > 0 &&
                  (!(function (e, t, r, a, s) {
                    if (e.length > 0) {
                      console.log("userInfo[0]"), console.log(de[0]);
                      var n,
                        i = [],
                        c = 1,
                        d = 0,
                        m = 0,
                        u = 0,
                        b = 0,
                        j = t[e[0] - 1].order_id,
                        p = 0,
                        g = new Date()
                          .toISOString()
                          .split("T")[0]
                          .replace(/-/g, "/"),
                        h = Object(o.a)(e);
                      try {
                        var x = function () {
                          var e = n.value,
                            r = t[e - 1].weight_g,
                            a = t[e - 1].package_number,
                            o = ce + t[e - 1].id + t[e - 1].order_id,
                            j =
                              "https://calirextn.com/tracking?tracking_number=" +
                              oe.AES.encrypt(o, "-tracking-number-").toString(),
                            g = t[e - 1].base_price_delivery,
                            h = t[e - 1].delivery_price,
                            x =
                              t[e - 1].price_base -
                              (isNaN(h) ? 0 : Number(isNaN(g) ? 0 : g)),
                            _ =
                              Number(x) +
                              Number(isNaN(g) ? 0 : g) +
                              Number(isNaN(h) ? 0 : h),
                            f = void 0,
                            O = void 0,
                            v = void 0,
                            y = void 0;
                          console.log(s);
                          for (var N = 0; N < s.length; N++)
                            console.log(s[N].id),
                              s[N].id == t[e - 1].client_id &&
                                ((f = s[N].firstname + " " + s[N].name),
                                (O =
                                  s[N].address +
                                  ", " +
                                  s[N].state +
                                  ", " +
                                  s[N].postal_code),
                                (v = s[N].country_code + " " + s[N].phone),
                                (y = s[N].email));
                          (p += Number(a)),
                            (b += Number(_)),
                            (u += Number(g)),
                            (m += r ? Number(r) : 0),
                            (d = d + Number(x) + Number(isNaN(h) ? 0 : h));
                          for (
                            var k = function (e) {
                                var t = c % 2 < 1,
                                  s = function () {
                                    return Object(l.jsxs)(l.Fragment, {
                                      children: [
                                        t
                                          ? Object(l.jsx)("p", {
                                              style: {
                                                pageBreakBefore: "always",
                                              },
                                            })
                                          : Object(l.jsx)(l.Fragment, {}),
                                        Object(l.jsxs)("table", {
                                          className:
                                            "table table-bordered has-background-white",
                                          children: [
                                            Object(l.jsx)("thead", {
                                              children: Object(l.jsxs)("tr", {
                                                children: [
                                                  Object(l.jsx)("th", {
                                                    scope: "col",
                                                    children: Object(l.jsx)(
                                                      "img",
                                                      {
                                                        alt: "",
                                                        src: "https://calirextn.com/assets/images/logo-ct.svg",
                                                        width: "130px",
                                                      }
                                                    ),
                                                  }),
                                                  Object(l.jsx)("th", {
                                                    scope: "col",
                                                    children: Object(l.jsxs)(
                                                      "p",
                                                      {
                                                        className: "is-size-9",
                                                        children: [
                                                          "Calirex Tunisie",
                                                          Object(l.jsx)(
                                                            "br",
                                                            {}
                                                          ),
                                                          Object(l.jsx)("u", {
                                                            children:
                                                              "Site Web: ",
                                                          }),
                                                          "https://www.calirextn.com/",
                                                          Object(l.jsx)(
                                                            "br",
                                                            {}
                                                          ),
                                                          Object(l.jsx)("u", {
                                                            children:
                                                              "Adresse: ",
                                                          }),
                                                          "7 Avenue habib bourguiba, Mornaguia,",
                                                          Object(l.jsx)(
                                                            "br",
                                                            {}
                                                          ),
                                                          " Manouba 1110, Tunisie",
                                                          Object(l.jsx)(
                                                            "br",
                                                            {}
                                                          ),
                                                          Object(l.jsx)("u", {
                                                            children:
                                                              "Num\xe9ro de t\xe9l\xe9phone: ",
                                                          }),
                                                          " (+216) 50 873 992",
                                                          Object(l.jsx)(
                                                            "br",
                                                            {}
                                                          ),
                                                          Object(l.jsx)("u", {
                                                            children:
                                                              "Matricule fiscal: ",
                                                          }),
                                                          "1726761/C",
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  Object(l.jsx)("th", {
                                                    scope: "col",
                                                    children: Object(l.jsx)(
                                                      le,
                                                      { value: j }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            Object(l.jsxs)("tbody", {
                                              children: [
                                                Object(l.jsxs)("tr", {
                                                  children: [
                                                    Object(l.jsxs)("td", {
                                                      colSpan: 2,
                                                      children: [
                                                        Object(l.jsx)("b", {
                                                          children:
                                                            "Destinataire",
                                                        }),
                                                        Object(l.jsx)("br", {}),
                                                        "Nom: ",
                                                        f,
                                                        Object(l.jsx)("br", {}),
                                                        "Adresse: ",
                                                        O,
                                                        Object(l.jsx)("br", {}),
                                                        "t\xe9l: ",
                                                        v,
                                                        Object(l.jsx)("br", {}),
                                                        "e-mail: ",
                                                        y,
                                                      ],
                                                    }),
                                                    Object(l.jsxs)("td", {
                                                      children: [
                                                        " ",
                                                        Object(l.jsx)("b", {
                                                          children:
                                                            "Exp\xe9diteur",
                                                        }),
                                                        Object(l.jsx)("br", {}),
                                                        "Soci\xe9t\xe9: ",
                                                        de[1][1],
                                                        Object(l.jsx)("br", {}),
                                                        "Adresse: ",
                                                        de[1][4],
                                                        ", ",
                                                        de[1][9],
                                                        ", ",
                                                        de[1][8],
                                                        ", ",
                                                        de[1][7],
                                                        Object(l.jsx)("br", {}),
                                                        "t\xe9l: (",
                                                        de[1][11],
                                                        ") ",
                                                        de[1][2],
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(l.jsxs)("tr", {
                                                  children: [
                                                    Object(l.jsxs)("td", {
                                                      colSpan: 2,
                                                      children: [
                                                        Object(l.jsx)("u", {
                                                          children:
                                                            "Total \xe0 payer:",
                                                        }),
                                                        Object(l.jsx)("br", {}),
                                                        "prix(TTC): ",
                                                        _,
                                                        " TND",
                                                      ],
                                                    }),
                                                    Object(l.jsxs)("td", {
                                                      children: [
                                                        Object(l.jsx)("u", {
                                                          children: "Poids:",
                                                        }),
                                                        " ",
                                                        r,
                                                        " grammes",
                                                        Object(l.jsx)("br", {}),
                                                        Object(l.jsx)("u", {
                                                          children:
                                                            "Nombre de colis:",
                                                        }),
                                                        " ",
                                                        e,
                                                        "/",
                                                        a,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    });
                                  };
                                i.push(Object(l.jsx)(s, {})), c++;
                              },
                              w = 1;
                            w <= a;
                            w++
                          )
                            k(w);
                        };
                        for (h.s(); !(n = h.n()).done; ) x();
                      } catch (f) {
                        h.e(f);
                      } finally {
                        h.f();
                      }
                      var _ = function () {
                        return Object(l.jsxs)(l.Fragment, {
                          children: [
                            Object(l.jsx)("p", {
                              style: { pageBreakBefore: "always" },
                              className: "has-text-centered is-bold is-size-18",
                              children: "Manifest",
                            }),
                            Object(l.jsx)("div", { className: "page-break" }),
                            Object(l.jsxs)("table", {
                              className:
                                "table table-bordered has-background-white",
                              children: [
                                Object(l.jsx)("thead", {
                                  children: Object(l.jsxs)("tr", {
                                    children: [
                                      Object(l.jsx)("th", {
                                        scope: "col",
                                        children: Object(l.jsx)("img", {
                                          alt: "",
                                          src: "https://calirextn.com/assets/images/logo-ct.svg",
                                          width: "130px",
                                        }),
                                      }),
                                      Object(l.jsx)("th", {
                                        scope: "col",
                                        children: Object(l.jsxs)("p", {
                                          className: "is-size-9",
                                          children: [
                                            "Societ\xe9 de livraison: ",
                                            Object(l.jsx)("u", {
                                              children: "Calirex Tunisie",
                                            }),
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("u", {
                                              children: "Site Web: ",
                                            }),
                                            "https://www.calirextn.com/",
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("u", {
                                              children: "Adresse: ",
                                            }),
                                            "7 Avenue habib bourguiba, Mornaguia,",
                                            Object(l.jsx)("br", {}),
                                            " Manouba 1110, Tunisie",
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("u", {
                                              children:
                                                "Num\xe9ro de t\xe9l\xe9phone: ",
                                            }),
                                            " (+216) 50 873 992",
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("u", {
                                              children: "Matricule fiscal: ",
                                            }),
                                            "1726761/C",
                                          ],
                                        }),
                                      }),
                                      Object(l.jsxs)("th", {
                                        children: [
                                          "Date: ",
                                          g,
                                          Object(l.jsx)("br", {}),
                                          "Manifest ",
                                          j,
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                Object(l.jsxs)("tbody", {
                                  children: [
                                    Object(l.jsxs)("tr", {
                                      children: [
                                        Object(l.jsxs)("td", {
                                          colSpan: 2,
                                          children: [
                                            " ",
                                            Object(l.jsxs)("b", {
                                              children: [
                                                "Soci\xe9t\xe9: ",
                                                de[1][1],
                                              ],
                                            }),
                                            Object(l.jsx)("br", {}),
                                            "Adresse: ",
                                            de[1][4],
                                            ", ",
                                            de[1][9],
                                            ", ",
                                            de[1][8],
                                            ", ",
                                            de[1][7],
                                            Object(l.jsx)("br", {}),
                                            "Num\xe9ro de t\xe9l\xe9phone: (",
                                            de[1][11],
                                            ") ",
                                            de[1][2],
                                          ],
                                        }),
                                        Object(l.jsx)("td", {}),
                                      ],
                                    }),
                                    Object(l.jsxs)("tr", {
                                      children: [
                                        Object(l.jsxs)("td", {
                                          children: [
                                            Object(l.jsxs)("u", {
                                              children: [
                                                Object(l.jsx)("b", {
                                                  children: "Prix du produit:",
                                                }),
                                                " ",
                                              ],
                                            }),
                                            d,
                                            " TND",
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("b", {
                                              children: "Prix de la livraison:",
                                            }),
                                            u,
                                            " TND",
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("b", {
                                              children: "Total \xe0 payer:",
                                            }),
                                            " ",
                                            b,
                                            " TND",
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("u", {
                                              children: "Poids:",
                                            }),
                                            " ",
                                            m,
                                            " grammes",
                                            Object(l.jsx)("br", {}),
                                            Object(l.jsx)("u", {
                                              children: "Nombre de colis:",
                                            }),
                                            " ",
                                            p,
                                          ],
                                        }),
                                        Object(l.jsx)("td", {
                                          children:
                                            "Signature Calirex Tunisie:",
                                        }),
                                        Object(l.jsxs)("td", {
                                          children: ["Signature ", de[1][1]],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        });
                      };
                      i.push(Object(l.jsx)(_, {})), a(i);
                    }
                  })(P, h, 0, F, j),
                  M(!0));
            },
            Q = function () {
              console.log(P),
                (function (e, t, r, a, s) {
                  console.log("userInfo[0]"), console.log(de);
                  var n = [];
                  console.log(t);
                  var i,
                    c = Object(o.a)(e);
                  try {
                    var d = function () {
                      var e = i.value,
                        r = new Date()
                          .toISOString()
                          .split("T")[0]
                          .replace(/-/g, "/"),
                        a = t[e - 1].total_weight,
                        s = t[e - 1].order_id,
                        o = t[e - 1].package_number,
                        c = ce + t[e - 1].id + t[e - 1].order_id,
                        d =
                          (oe.AES.encrypt(c, "-tracking-number-").toString(),
                          (0.93 * t[e - 1].total_price).toFixed(3)),
                        m = (0.07 * t[e - 1].total_price).toFixed(3),
                        u = t[e - 1].total_price,
                        b = (0.93 * t[e - 1].price_delivery).toFixed(3),
                        j = (0.07 * t[e - 1].price_delivery).toFixed(3),
                        p = t[e - 1].price_delivery,
                        g = (0.93 * t[e - 1].delivery_price).toFixed(3),
                        h = (0.07 * t[e - 1].delivery_price).toFixed(3),
                        x = t[e - 1].delivery_price,
                        _ =
                          Number(d) +
                          Number(isNaN(b) ? 0 : b) +
                          Number(isNaN(g) ? 0 : g),
                        f =
                          Number(m) +
                          Number(isNaN(j) ? 0 : j) +
                          Number(isNaN(h) ? 0 : h),
                        O =
                          u +
                          Number(isNaN(p) ? 0 : p) +
                          Number(isNaN(x) ? 0 : x),
                        v = function () {
                          return Object(l.jsxs)(l.Fragment, {
                            children: [
                              Object(l.jsx)("div", { className: "page-break" }),
                              Object(l.jsxs)("table", {
                                className:
                                  "table table-bordered has-background-white",
                                children: [
                                  Object(l.jsx)("thead", {
                                    children: Object(l.jsxs)("tr", {
                                      children: [
                                        Object(l.jsx)("th", {
                                          scope: "col",
                                          children: Object(l.jsx)("img", {
                                            alt: "",
                                            src: "https://calirextn.com/assets/images/logo-ct.svg",
                                            width: "130px",
                                          }),
                                        }),
                                        Object(l.jsx)("th", {
                                          scope: "col",
                                          children: Object(l.jsxs)("p", {
                                            className: "is-size-9",
                                            children: [
                                              "Societ\xe9 de livraison: ",
                                              Object(l.jsx)("u", {
                                                children: "Calirex Tunisie",
                                              }),
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("u", {
                                                children: "Site Web: ",
                                              }),
                                              "https://www.calirextn.com/",
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("u", {
                                                children: "Adresse: ",
                                              }),
                                              "7 Avenue habib bourguiba, Mornaguia,",
                                              Object(l.jsx)("br", {}),
                                              " Manouba 1110, Tunisie",
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("u", {
                                                children:
                                                  "Num\xe9ro de t\xe9l\xe9phone: ",
                                              }),
                                              " (+216) 50 873 992",
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("u", {
                                                children: "Matricule fiscal: ",
                                              }),
                                              "1726761/C",
                                            ],
                                          }),
                                        }),
                                        Object(l.jsxs)("th", {
                                          children: [
                                            "Date: ",
                                            r,
                                            Object(l.jsx)("br", {}),
                                            "Manifest ",
                                            s,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(l.jsxs)("tbody", {
                                    children: [
                                      Object(l.jsxs)("tr", {
                                        children: [
                                          Object(l.jsxs)("td", {
                                            colSpan: 2,
                                            children: [
                                              " ",
                                              Object(l.jsxs)("b", {
                                                children: [
                                                  "Soci\xe9t\xe9: ",
                                                  de[1][1],
                                                ],
                                              }),
                                              Object(l.jsx)("br", {}),
                                              "Adresse: ",
                                              de[1][4],
                                              ", ",
                                              de[1][9],
                                              ", ",
                                              de[1][8],
                                              ", ",
                                              de[1][7],
                                              Object(l.jsx)("br", {}),
                                              "Num\xe9ro de t\xe9l\xe9phone: (",
                                              de[1][11],
                                              ") ",
                                              de[1][2],
                                            ],
                                          }),
                                          Object(l.jsx)("td", {}),
                                        ],
                                      }),
                                      Object(l.jsxs)("tr", {
                                        children: [
                                          Object(l.jsxs)("td", {
                                            children: [
                                              Object(l.jsx)("u", {
                                                children: "Prix du produit:",
                                              }),
                                              " ",
                                              u,
                                              Object(l.jsx)("br", {}),
                                              "prix(HT): ",
                                              d,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              "TVA(7%): ",
                                              m,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              "prix(TTC): ",
                                              u,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("b", {
                                                children:
                                                  "Prix de la livraison:",
                                              }),
                                              Object(l.jsx)("br", {}),
                                              "prix(HT): ",
                                              b,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              "TVA(7%): ",
                                              j,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              "prix(TTC): ",
                                              p,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("b", {
                                                children: "Total \xe0 payer:",
                                              }),
                                              Object(l.jsx)("br", {}),
                                              "prix(HT): ",
                                              _,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              "TVA(7%): ",
                                              f,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              "prix(TTC): ",
                                              O,
                                              " TND",
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("u", {
                                                children: "Poids:",
                                              }),
                                              " ",
                                              a,
                                              " grammes",
                                              Object(l.jsx)("br", {}),
                                              Object(l.jsx)("u", {
                                                children: "Nombre de colis:",
                                              }),
                                              " ",
                                              o,
                                            ],
                                          }),
                                          Object(l.jsx)("td", {
                                            children:
                                              "Signature Calirex Tunisie:",
                                          }),
                                          Object(l.jsxs)("td", {
                                            children: ["Signature ", de[1][1]],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          });
                        };
                      n.push(Object(l.jsx)(v, {}));
                    };
                    for (c.s(); !(i = c.n()).done; ) d();
                  } catch (m) {
                    c.e(m);
                  } finally {
                    c.f();
                  }
                  a(n);
                })(P, h, 0, F),
                M(!0);
            },
            te = (function () {
              var e = Object(H.a)(
                V.a.mark(function e(t) {
                  var r, a;
                  return V.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          for (r = 0, console.log(t), a = 0; a < h.length; a++)
                            h[a].id === t.id && ((r = a + 1), console.log(r));
                          return e.abrupt("return", r);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ne = (function () {
              var e = Object(H.a)(
                V.a.mark(function e(t, r) {
                  return V.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Promise.all(
                            r.map(
                              (function () {
                                var e = Object(H.a)(
                                  V.a.mark(function e(t) {
                                    return V.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), te(t);
                                          case 2:
                                            return e.abrupt("return", e.sent);
                                          case 3:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          ).then(function (e) {
                            z(
                              t
                                ? P.concat(e)
                                : P.filter(function (t) {
                                    return !e.includes(t);
                                  })
                            );
                          });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
            me = function () {
              ue(x, h, g);
            },
            be = function () {
              var e = "",
                t = "";
              P.forEach(function (r) {
                0 == h[r - 1].ongoing_orders ||
                "termin\xe9" == h[r - 1].status ||
                "en attente d'enl\xe8vement" == h[r - 1].status
                  ? ((h[r - 1].memory = 0),
                    (t = t + ("" != t ? ", " : "") + h[r - 1].id))
                  : (e = e + ("" != e ? ", " : "") + h[r - 1].id),
                  W(
                    "" == e
                      ? R + ": " + t
                      : "Ces \xe9l\xe9ments ne peuvent pas \xeatre supprim\xe9s: " +
                          e +
                          ". Voulez-vous supprimer les \xe9l\xe9ments suivants: " +
                          t
                  );
              });
            },
            pe = function () {
              W("Voulez-vous supprimer ces \xe9l\xe9ments"),
                console.log(P),
                ue(P, h, g),
                b();
            },
            ge = function (e) {
              var t = e.onColumnToggle,
                r = e.toggles;
              return Object(l.jsx)("div", {
                className: "btn-group btn-group-toggle btn-group-vertical",
                style: { flexDirection: "row" },
                "data-toggle": "buttons",
                children: f
                  .map(function (e) {
                    return Object(G.a)(
                      Object(G.a)({}, e),
                      {},
                      { toggle: r[e.dataField] }
                    );
                  })
                  .map(function (e) {
                    return Object(l.jsx)(
                      w.a,
                      {
                        style: {
                          maxWidth: "200px",
                          marginRight: "0.5rem !important",
                          borderRadius: "0.3rem",
                          height: "100%",
                        },
                        type: "button",
                        variant: "outline-primary",
                        className: "toggle-button ".concat(
                          e.toggle ? "active" : ""
                        ),
                        "data-toggle": "button",
                        "aria-pressed": e.toggle ? "true" : "false",
                        onClick: function () {
                          return t(e.dataField);
                        },
                        children: e.text,
                      },
                      e.dataField
                    );
                  }),
              });
            },
            xe = {
              mode: "checkbox",
              clickToSelect: !0,
              clickToEdit: !0,
              onSelect: function (e, t) {
                var r = 0;
                console.log(e), console.log(t);
                for (var a = 0; a < h.length; a++)
                  h[a].id === e.id && ((r = a + 1), console.log(r));
                return (
                  t
                    ? (z(P.concat(r)), console.log(P), console.log("selected"))
                    : z(
                        P.filter(function (e) {
                          return e !== r;
                        })
                      ),
                  console.log(P),
                  !0
                );
              },
              onSelectAll: ne,
            },
            _e = {
              mode: "click",
              beforeSaveCell: function (e, t, r, a, s) {
                for (var n = 0; n < h.length; n++)
                  if (h[n].id === r.id) {
                    h[n][a.dataField] = t;
                    for (var i = 0; i < x.length; i++) {
                      if (x[i] === n + 1)
                        return console.log(x), s(!0), { async: !0 };
                      console.log(x);
                    }
                    x.push(n + 1), console.log(x);
                  }
                return console.log(x), s(!0), { async: !0 };
              },
            },
            fe = e.actions,
            Oe = Object(l.jsx)(ae.a, { icon: se.b }),
            ve = Object(l.jsx)(ae.a, { icon: se.a }),
            ye = e.schema,
            Ne = e.columnToggleProps;
          console.log(Ne);
          var ke = e.requiredFields,
            we = e.additionalProperties;
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(S.a, {
                children: Object(l.jsx)("style", {
                  children:
                    "\n\t\t.App {\n\t\t\tbackground: url('https://calirextn.com/assets/images/loading-background-light.svg');\n\t\t\tbackground-position: bottom right;\n\t\t\tbackground-size: cover;\n\t\t\tbackground-repeat: no-repeat;\n\t\t}\n\t\t",
                }),
              }),
              Object(l.jsx)(u.a, {
                className: "p-5 info-table",
                children: Object(l.jsx)($.a, {
                  bootstrap4: !0,
                  keyField: _[0].dataField,
                  className: "bootstrap-data-table",
                  data: h,
                  columns: _,
                  columnToggle: !0,
                  placeholder: "",
                  search: !0,
                  children: function (e) {
                    return Object(l.jsxs)("div", {
                      children: [
                        Object(l.jsxs)("h3", { children: [ve, O] }),
                        Oe,
                        Object(l.jsx)(
                          t,
                          Object(G.a)(
                            Object(G.a)({}, e.searchProps),
                            {},
                            { placeholder: "Recherche ..." }
                          )
                        ),
                        Object(l.jsxs)("div", {
                          className: "row p-3",
                          children: [
                            Object(l.jsx)("p", {
                              className: "is-size-11 has-text-centered",
                              children: Object(l.jsx)("b", {
                                children: "Afficher/Cacher le(s) colonne(s)",
                              }),
                            }),
                            Object(l.jsx)(
                              ge,
                              Object(G.a)({}, e.columnToggleProps)
                            ),
                          ],
                        }),
                        Object(l.jsx)("div", {
                          className: "mb-2",
                          children: Object(l.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(l.jsxs)("div", {
                                className: "col p-2 has-text-centered-mobile",
                                style: { textAlign: "start" },
                                children: [
                                  fe.includes("generate")
                                    ? Object(l.jsxs)(l.Fragment, {
                                        children: [
                                          Object(l.jsx)(w.a, {
                                            variant: "outline-primary",
                                            size: "lg",
                                            onClick: K,
                                            children:
                                              "G\xe9n\xe9rer le(s) bordereau(x)",
                                          }),
                                          " ",
                                        ],
                                      })
                                    : Object(l.jsx)(l.Fragment, {}),
                                  fe.includes("bill")
                                    ? Object(l.jsxs)(l.Fragment, {
                                        children: [
                                          Object(l.jsx)(w.a, {
                                            variant: "outline-primary",
                                            size: "lg",
                                            onClick: Q,
                                            children:
                                              "G\xe9n\xe9rer le(s) facture(s)",
                                          }),
                                          " ",
                                        ],
                                      })
                                    : Object(l.jsx)(l.Fragment, {}),
                                ],
                              }),
                              fe.includes("add")
                                ? Object(l.jsx)(l.Fragment, {
                                    children: Object(l.jsxs)("div", {
                                      className:
                                        "col-md-auto p-2 has-text-centered-mobile",
                                      style: { textAlign: "end" },
                                      children: [
                                        Object(l.jsx)(je, {
                                          schema: ye,
                                          requiredFields: ke,
                                          additionalProperties: we,
                                          customFormats: p,
                                          onSubmitFunction: g,
                                          color: "primary",
                                          modalTitle: "Ajouter un element",
                                          buttonTitle: "+Ajouter",
                                        }),
                                        " ",
                                      ],
                                    }),
                                  })
                                : Object(l.jsx)(l.Fragment, {}),
                              fe.includes("modify")
                                ? Object(l.jsx)(l.Fragment, {
                                    children: Object(l.jsxs)("div", {
                                      className:
                                        "col-md-auto p-2 has-text-centered-mobile",
                                      style: { textAlign: "end" },
                                      children: [
                                        Object(l.jsx)(w.a, {
                                          variant: "outline-primary",
                                          size: "lg",
                                          onClick: me,
                                          children: "Modifier",
                                        }),
                                        " ",
                                      ],
                                    }),
                                  })
                                : Object(l.jsx)(l.Fragment, {}),
                              fe.includes("delete")
                                ? Object(l.jsxs)("div", {
                                    className:
                                      "col-md-auto p-2 has-text-centered-mobile",
                                    style: { textAlign: "end" },
                                    children: [
                                      Object(l.jsx)(w.a, {
                                        variant: "outline-danger",
                                        size: "lg",
                                        onClick: m,
                                        children: "Supprimer",
                                      }),
                                      Object(l.jsxs)(k.a, {
                                        show: c,
                                        onHide: b,
                                        children: [
                                          Object(l.jsx)(k.a.Header, {
                                            closeButton: !0,
                                            children: Object(l.jsx)(k.a.Title, {
                                              children: "Supprimer",
                                            }),
                                          }),
                                          Object(l.jsx)(k.a.Body, {
                                            children: R,
                                          }),
                                          Object(l.jsxs)(k.a.Footer, {
                                            children: [
                                              Object(l.jsx)(w.a, {
                                                variant: "danger",
                                                onClick: b,
                                                children: "Annuler",
                                              }),
                                              Object(l.jsx)(w.a, {
                                                variant: "primary",
                                                onClick: pe,
                                                children: "Confirmer",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : Object(l.jsx)(l.Fragment, {}),
                            ],
                          }),
                        }),
                        Object(l.jsx)(
                          U.a,
                          Object(G.a)(
                            Object(G.a)({}, e.baseProps),
                            {},
                            {
                              pagination: X()(),
                              filter: ee()(),
                              selectRow: xe,
                              cellEdit: re()(_e),
                            }
                          )
                        ),
                        Object(l.jsx)(he, {
                          componentToPrint: N,
                          printButton: B,
                        }),
                      ],
                    });
                  },
                }),
              }),
              e.crumbs_list
                ? Object(l.jsx)(ie, { crumbs: e.crumbs_list, invertedText: !1 })
                : Object(l.jsx)(l.Fragment, {}),
            ],
          });
        },
        _e = r(89),
        fe = r(88);
      var Oe = function () {
        var e = JSON.parse(J()),
          t = JSON.parse(E()),
          r = L(),
          a = Object(q.f)();
        A() || a.push("/login");
        var s = [];
        for (var n in e)
          "1" == e[n].memory &&
            (s.push(e[n]),
            (s[s.length - 1].base_price_delivery =
              fe[r].price +
              (s[n].weight_g > 10200
                ? Math.ceil((s[n].weight_g - 10200) / 1e3) * fe[r].extra
                : "")));
        s.map(function (e) {
          var r = t.find(function (t) {
            return t.id === e.client_id;
          });
          r &&
            ((e.state = r.state),
            (e.client_name = r.firstname + " " + r.name),
            (e.postal_code = r.postal_code));
        });
        var i = [];
        for (var o in t)
          i.push(t[o].firstname + " " + t[o].name + ": " + t[o].id);
        var c = (function () {
          for (
            var e = JSON.parse(sessionStorage.getItem("customers")),
              t = [],
              r = 0;
            r < e.length;
            r++
          )
            1 == e[r].memory && t.push(e[r].id);
          return t;
        })();
        (c = [null].concat(c)),
          (i = ["Selectionnez un utilisateur"].concat(i)),
          console.log(c);
        var d = {
          client_id: {
            type: "string",
            title: "Num\xe9ro du client",
            enum: c,
            enumNames: i,
          },
          addClient: {
            type: "array",
            items: { $ref: "#/definitions/Metric" },
            maxItems: 1,
            title: "",
          },
          weight_g: { type: "number", title: "Poids en grammes" },
          price_base: { type: "number", title: "Prix du produit" },
          delivery_price: {
            type: "number",
            title: "Prix de livraison personnalis\xe9",
          },
          package_number: { type: "number", title: "Nombre de colis" },
        };
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsx)(xe, {
            data: s,
            schema: d,
            togglecolumns: _e.togglecolumns,
            requiredFields: {
              price_base: { type: "number", title: "Prix du produit" },
              package_number: { type: "number", title: "Nombre de colis" },
            },
            additionalProperties: {
              Metric: {
                title: "Nouveau Client",
                type: "object",
                properties: {
                  firstname: { type: "string", title: "Pr\xe9nom" },
                  name: { type: "string", title: "Nom de famille" },
                  email: { type: "string", title: "Adresse mail" },
                  postal_code: { type: "string", title: "Code Postal" },
                  state: { type: "string", title: "\xc9tat/Commune" },
                  address: { type: "string", title: "Adresse" },
                  phone: {
                    type: "number",
                    title: "Num\xe9ro de t\xe9l\xe9phone",
                    format: "phone-tn",
                  },
                },
                required: [
                  "firstname",
                  "name",
                  "postal_code",
                  "state",
                  "address",
                  "phone",
                ],
              },
            },
            customFormats: {},
            onSubmitFunction: "orders",
            actions: _e.actions,
            columns: _e.columns,
            title: _e.title,
            crumbs_list: _e.crumbs,
          }),
        });
      };
      var ve = function () {
          sessionStorage.getItem("firstname");
          var e = Object(q.f)();
          return (
            A() || e.push("/login"),
            Object(l.jsx)(U.a, {
              keyField: "id",
              className: "bootstrap-data-table",
              data: [],
              columns: [
                { dataField: "order_id", text: "Num\xe9ro de commande" },
                { dataField: "package_id", text: "Num\xe9ro du colis" },
                { dataField: "weight_g", text: "Poids" },
                { dataField: "name", text: "Nom du client" },
                { dataField: "email", text: "Adresse mail" },
                { dataField: "state", text: "\xc9tat" },
                { dataField: "postal_code", text: "Code postale" },
                { dataField: "price_base", text: "Prix du produit" },
                { dataField: "base_price_delivery", text: "Prix de livraison" },
                { dataField: "status", text: "statut" },
              ],
              pagination: X()(),
            })
          );
        },
        ye = r(90);
      var Ne = function () {
          var e = JSON.parse(E()),
            t = JSON.parse(J());
          console.log(e);
          var r = [];
          for (var a in e)
            if ("1" == e[a].memory) {
              var s = 0,
                n = 0;
              for (var i in t)
                t[i].client_id == e[a].id &&
                  ((s += 1), "termin\xe9" != e[a].status && (n += 1));
              (e[a].total_orders = s), (e[a].ongoing_orders = n), r.push(e[a]);
            }
          return Object(l.jsx)(l.Fragment, {
            children: Object(l.jsx)(xe, {
              data: r,
              schema: {
                firstname: { type: "string", title: "Pr\xe9nom" },
                name: { type: "string", title: "Nom de famille" },
                email: { type: "string", title: "Adresse mail" },
                postal_code: { type: "string", title: "Code Postal" },
                state: { type: "string", title: "\xc9tat/Commune" },
                address: { type: "string", title: "Adresse" },
                phone: {
                  type: "number",
                  title: "Num\xe9ro de t\xe9l\xe9phone",
                  format: "phone-tn",
                },
              },
              togglecolumns: ye.togglecolumns,
              requiredFields: {
                firstname: { type: "string", title: "Pr\xe9nom" },
                name: { type: "string", title: "Nom de famille" },
                postal_code: { type: "string", title: "Code Postal" },
                state: { type: "string", title: "\xc9tat/Commune" },
                address: { type: "string", title: "Adresse" },
                phone: {
                  type: "number",
                  title: "Num\xe9ro de t\xe9l\xe9phone",
                  format: "phone-tn",
                },
              },
              customFormats: { "phone-tn": /^[0-9]{8}$/ },
              onSubmitFunction: "customers",
              actions: ye.actions,
              columns: ye.columns,
              title: ye.title,
              crumbs_list: ye.crumbs,
            }),
          });
        },
        ke = r(91);
      var we = function () {
        var e = JSON.parse(J()),
          t = [],
          r = [],
          a = L(),
          s = [
            "delivered",
            "awaiting_pickup",
            "in_delivery",
            "postponed",
            "in_storage",
            "awaiting_return",
            "in_storage_to_return",
            "in_storage_to_return",
            "return_postponed",
            "return_pickup_postponed",
            "returned",
            "package_number",
            "total_price",
            "total_weight",
            "base_price_delivery",
            "custom_delivery_price",
            "total_packages",
            "payed",
          ],
          n = (function () {
            var t = Object(H.a)(
              V.a.mark(function t() {
                return V.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        Promise.all(
                          e.map(function (e) {
                            if (
                              "1" == e.memory &&
                              (r[e.order_id] ||
                                ((r[e.order_id] = []),
                                (r[e.order_id].order_id = e.order_id),
                                s.forEach(function (t) {
                                  r[e.order_id][t] = 0;
                                })),
                              e.order_id == r[e.order_id].order_id)
                            ) {
                              switch (e.status) {
                                case "livr\xe9":
                                  r[e.order_id].delivered =
                                    r[r[e.order_id]].delivered + 1;
                                  break;
                                case "en attente d'enl\xe8vement":
                                  r[e.order_id].awaiting_pickup =
                                    r[e.order_id].awaiting_pickup + 1;
                                  break;
                                case "en cours de livraison":
                                  r[e.order_id].in_delivery =
                                    r[e.order_id].in_delivery + 1;
                                  break;
                                case "Livraison report\xe9e":
                                  r[e.order_id].postponed =
                                    r[e.order_id].postponed + 1;
                                  break;
                                case "en entrep\xf4t":
                                  r[e.order_id].in_storage =
                                    r[e.order_id].in_storage + 1;
                                  break;
                                case "en attente de retour":
                                  r[e.order_id].awaiting_return =
                                    r[e.order_id].awaiting_return + 1;
                                  break;
                                case "en entrep\xf4t (retour)":
                                  r[e.order_id].in_storage_to_return =
                                    r[e.order_id].in_storage_to_return + 1;
                                  break;
                                case "retour report\xe9":
                                  r[e.order_id].return_postponed =
                                    r[e.order_id].return_postponed + 1;
                                  break;
                                case "enl\xe8vement report\xe9 (retour)":
                                  r[e.order_id].return_pickup_postponed =
                                    r[e.order_id].return_pickup_postponed + 1;
                                  break;
                                case "retourn\xe9":
                                case "probl\xe8me de livraison":
                                  r[e.order_id].returned =
                                    r[e.order_id].returned + 1;
                                  break;
                                case "pay\xe9":
                                  r[e.order_id].payed = r[e.order_id].payed + 1;
                                  break;
                                default:
                                  console.log("Status not recognized");
                              }
                              (e.base_price_delivery =
                                fe[a].price +
                                (e.weight_g > 10200
                                  ? Math.ceil((e.weight_g - 10200) / 1e3) *
                                    fe[a].extra
                                  : "")),
                                (r[e.order_id].total_packages =
                                  r[e.order_id].total_packages + 1),
                                (r[e.order_id].total_weight =
                                  Number(e.weight_g) +
                                  r[e.order_id].total_weight),
                                (r[e.order_id].total_price =
                                  Number(e.price_base) +
                                  r[e.order_id].total_price),
                                (r[e.order_id].base_price_delivery =
                                  Number(e.base_price_delivery) +
                                  r[e.order_id].base_price_delivery),
                                (r[e.order_id].custom_delivery_price =
                                  Number(e.custom_delivery_price) +
                                  r[e.order_id].custom_delivery_price),
                                (r[e.order_id].package_number =
                                  Number(e.package_number) +
                                  r[e.order_id].package_number);
                            }
                          })
                        ).then(function (t) {
                          return (
                            console.log("end of promises", e),
                            console.log("end of promises", t),
                            console.log("end of promises", r),
                            !0
                          );
                        });
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        for (var i in (n(), r)) t.push(r[i]), console.log(t);
        return (
          console.log(t),
          Object(l.jsx)(l.Fragment, {
            children: Object(l.jsx)(xe, {
              data: t,
              actions: ke.actions,
              togglecolumns: ke.togglecolumns,
              columns: ke.columns,
              title: ke.title,
              crumbs_list: ke.crumbs,
            }),
          })
        );
      };
      var Se = function () {
        return Object(l.jsx)("div", { className: "ContactUs" });
      };
      var Fe = function () {
          return Object(l.jsx)("div", { className: "Tracking" });
        },
        Ce = (r(644), r(27)),
        Te = r(146);
      var Pe = function () {
          var e = Object(q.f)();
          return (
            A() || (z(), e.push("/login")),
            Ce.d.register(Ce.k, Ce.a, Ce.m, Ce.f),
            Object(l.jsxs)(l.Fragment, {
              children: [
                Object(l.jsx)(S.a, {
                  children: Object(l.jsx)("style", {
                    children:
                      "\n    .App {\n        background: url('https://calirextn.com/assets/images/loading-background-light.svg');\n        background-position: bottom right;\n        background-size: cover;\n        background-repeat: no-repeat;\n    }\n    ",
                  }),
                }),
                Object(l.jsxs)("div", {
                  className: "p-5",
                  children: [
                    Object(l.jsx)("h3", {
                      className: "has-text-centered",
                      children: "Suivez facilement l'\xe9tat de vos commandes!",
                    }),
                    Object(l.jsx)(Te.a, {
                      data: {
                        labels: [
                          "Livr\xe9es",
                          "en cours",
                          "En attente d'enlevement",
                          "Retourn\xe9es",
                        ],
                        datasets: [
                          {
                            label: "# of Votes",
                            data: [12, 19, 3, 5],
                            backgroundColor: [
                              "#0943ea",
                              "#eab009",
                              "#ea6b09",
                              "#7609ea",
                            ],
                            borderWidth: 1,
                          },
                        ],
                      },
                      onClick: function () {
                        e.push("/orders");
                      },
                    }),
                  ],
                }),
                Object(l.jsx)("h3", {
                  className: "has-text-centered",
                  children:
                    "Ratio de vos commandes retourn\xe9es vs livr\xe9es!",
                }),
                Object(l.jsx)(Te.b, {
                  data: {
                    labels: ["Livr\xe9es", "Retourn\xe9es"],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [12, 19],
                        backgroundColor: ["#0943ea", "#eab009"],
                        borderWidth: 1,
                      },
                    ],
                  },
                }),
                Object(l.jsxs)("div", {
                  className: "p-5",
                  children: [
                    Object(l.jsx)("h3", {
                      className: "has-text-centered",
                      children:
                        "Ratio de vos clients livr\xe9es vs en attente de livraison!",
                    }),
                    Object(l.jsx)(Te.b, {
                      data: {
                        labels: ["Livr\xe9es", "Retourn\xe9es"],
                        datasets: [
                          {
                            label: "# of Votes",
                            data: [12, 19],
                            backgroundColor: ["#ea6b09", "#7609ea"],
                            borderWidth: 1,
                          },
                        ],
                      },
                    }),
                  ],
                }),
                Object(l.jsx)(ie, {
                  crumbs: [
                    ["/", "Accueil"],
                    ["/Dashboard", "Tableau de bord"],
                  ],
                  invertedText: !1,
                }),
              ],
            })
          );
        },
        Ae = r(66);
      var ze = function () {
        var e = Object(a.useState)(!0),
          t = Object(i.a)(e, 2),
          r = (t[0], t[1]);
        Object(a.useEffect)(function () {
          var e = A();
          e &&
            T.a
              .get(
                "https://dqnhq15t16.execute-api.eu-west-3.amazonaws.com/prod/user?operation=2&&authorizationToken=".concat(
                  e
                )
              )
              .then(function (e) {
                200 === e.data.statusCode
                  ? (!(function (e) {
                      sessionStorage.setItem("token", e.id);
                      for (var t = 0; t < P.length; t++)
                        sessionStorage.setItem(P[t], e[P[t]]);
                      I(e.id), D(e.id);
                    })(e.data.body),
                    r(!1))
                  : (z(), r(!1));
              })
              .catch(function (e) {
                z(), r(!1);
              });
        }, []);
        var s = l.Fragment;
        return (
          (s = Object(l.jsx)(v, { bg: "secondary" })),
          Object(l.jsx)(Ae.a, {
            children: Object(l.jsxs)("div", {
              className: "App",
              children: [
                s,
                Object(l.jsxs)(q.c, {
                  children: [
                    Object(l.jsx)(q.a, {
                      path: "/tracking",
                      children: Object(l.jsx)(Fe, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/pricing",
                      children: Object(l.jsx)(F, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/dashboard",
                      children: Object(l.jsx)(Pe, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/profile",
                      children: Object(l.jsx)(R, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/customers",
                      children: Object(l.jsx)(Ne, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/bills",
                      children: Object(l.jsx)(we, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/notifications",
                      children: Object(l.jsx)(ve, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/orders",
                      children: Object(l.jsx)(Oe, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/contact-us",
                      children: Object(l.jsx)(Se, {}),
                    }),
                    Object(l.jsx)(q.a, {
                      path: "/",
                      children: Object(l.jsx)(_, {}),
                    }),
                  ],
                }),
                Object(l.jsx)(N, {}),
              ],
            }),
          })
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Ie = function (e) {
        e &&
          e instanceof Function &&
          r
            .e(3)
            .then(r.bind(null, 655))
            .then(function (t) {
              var r = t.getCLS,
                a = t.getFID,
                s = t.getFCP,
                n = t.getLCP,
                i = t.getTTFB;
              r(e), a(e), s(e), n(e), i(e);
            });
      };
      n.a.render(Object(l.jsx)(ze, {}), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            }),
        Ie();
    },
    88: function (e) {
      e.exports = JSON.parse(
        '{"plan1":{"price":8,"extra":0.5,"free_return":0},"plan2":{"price":7.6,"extra":0.5,"free_return":100},"plan3":{"price":7.2,"extra":0,"free_return":5000},"plan4":{"price":7,"extra":0,"free_return":5000}}'
      );
    },
    89: function (e) {
      e.exports = JSON.parse(
        '{"title":"Tableau des commandes:","togglecolumns":[{"dataField":"client_id","text":"Num\xe9ro du client","editable":false,"hidden":true},{"dataField":"weight_g","text":"Poids","hidden":true},{"dataField":"creation_date","text":"Date de cr\xe9ation","editable":false,"hidden":true},{"dataField":"return_date","text":"Date de retour","editable":false,"hidden":true}],"columns":[{"dataField":"id","text":"Num\xe9ro du colis","editable":false},{"dataField":"order_id","text":"Num\xe9ro de commande","editable":false},{"dataField":"client_id","text":"Num\xe9ro du client","editable":false,"hidden":true},{"dataField":"client_name","text":"Nom du client","editable":false},{"dataField":"weight_g","text":"Poids","hidden":true},{"dataField":"package_number","text":"Nombre de colis"},{"dataField":"creation_date","text":"Date de cr\xe9ation","editable":false,"hidden":true},{"dataField":"return_date","text":"Date de retour","editable":false,"hidden":true},{"dataField":"delivery_date","text":"Date de livraison","editable":false},{"dataField":"state","text":"\xc9tat/Commune","editable":false},{"dataField":"postal_code","text":"Code postale","editable":false},{"dataField":"price_base","text":"Prix du produit"},{"dataField":"base_price_delivery","text":"Prix de livraison(base pro)","editable":false},{"dataField":"delivery_price","text":"livraison personnalis\xe9e","type":"number","editable":true},{"dataField":"status","text":"statut","editable":false}],"crumbs":[["/","Accueil"],["/dashboard","Tableau de bord"],["/orders","Mes commandes"]],"actions":["add","modify","delete","generate"]}'
      );
    },
    90: function (e) {
      e.exports = JSON.parse(
        '{"title":"Tableau des clients:","data":[{"id_client":1,"firstname":"Casandra","name":"Saffell","email":"csaffell0@netscape.com","total_orders":1,"address":"916 Orin Circle","postal_code":"3080-570","state":"Coimbra","ongoing_orders":1},{"id_client":2,"firstname":"Selene","name":"Goulstone","email":"sgoulstone1@qq.com","total_orders":2,"address":"842 8th Parkway","postal_code":"1211","state":null,"ongoing_orders":2},{"id_client":3,"firstname":"Orlando","name":"McGeechan","email":"omcgeechan2@japanpost.jp","total_orders":3,"address":"88 Stephen Circle","postal_code":null,"state":null,"ongoing_orders":3},{"id_client":4,"firstname":"Mallorie","name":"De Freitas","email":"mdefreitas3@wp.com","total_orders":4,"address":"60583 Morningstar Way","postal_code":null,"state":null,"ongoing_orders":4},{"id_client":5,"firstname":"Allys","name":"Roxby","email":"aroxby4@blogtalkradio.com","total_orders":5,"address":"2 Fallview Avenue","postal_code":"NN11","state":"England","ongoing_orders":5},{"id_client":6,"firstname":"Aila","name":"Pobjoy","email":"apobjoy5@myspace.com","total_orders":6,"address":"084 Springview Alley","postal_code":"30000","state":null,"ongoing_orders":6},{"id_client":7,"firstname":"Allianora","name":"Murison","email":"amurison6@digg.com","total_orders":7,"address":"17 Hollow Ridge Street","postal_code":"22179","state":"Hamburg","ongoing_orders":7},{"id_client":8,"firstname":"Cleveland","name":"Yerrell","email":"cyerrell7@nps.gov","total_orders":8,"address":"0414 Menomonie Plaza","postal_code":null,"state":null,"ongoing_orders":8},{"id_client":9,"firstname":"Bordie","name":"Orpin","email":"borpin8@howstuffworks.com","total_orders":9,"address":"921 Kensington Crossing","postal_code":null,"state":null,"ongoing_orders":9},{"id_client":10,"firstname":"Issie","name":"Bockh","email":"ibockh9@wisc.edu","total_orders":10,"address":"842 Luster Court","postal_code":"05-850","state":null,"ongoing_orders":10},{"id_client":11,"firstname":"Dorise","name":"Clowton","email":"dclowtona@chron.com","total_orders":11,"address":"2 Emmet Place","postal_code":"371 84","state":"Blekinge","ongoing_orders":11},{"id_client":12,"firstname":"Vitia","name":"Quarrell","email":"vquarrellb@liveinternet.ru","total_orders":12,"address":"6062 Anderson Trail","postal_code":"191507","state":null,"ongoing_orders":12},{"id_client":13,"firstname":"Mady","name":"Stopher","email":"mstopherc@yahoo.co.jp","total_orders":13,"address":"0 Welch Lane","postal_code":"134548","state":null,"ongoing_orders":13},{"id_client":14,"firstname":"Fae","name":"Halworth","email":"fhalworthd@friendfeed.com","total_orders":14,"address":"55 Crowley Trail","postal_code":null,"state":null,"ongoing_orders":14},{"id_client":15,"firstname":"Zola","name":"Greenalf","email":"zgreenalfe@barnesandnoble.com","total_orders":15,"address":"2974 Fordem Plaza","postal_code":null,"state":null,"ongoing_orders":15},{"id_client":16,"firstname":"Cointon","name":"Phillpot","email":"cphillpotf@photobucket.com","total_orders":16,"address":"24662 Sommers Place","postal_code":"64000-000","state":null,"ongoing_orders":16},{"id_client":17,"firstname":"Liana","name":"Coopland","email":"lcooplandg@amazon.de","total_orders":17,"address":"22 Ruskin Hill","postal_code":"3973","state":null,"ongoing_orders":17},{"id_client":18,"firstname":"Salaidh","name":"Whyler","email":"swhylerh@jalbum.net","total_orders":18,"address":"27 Prairieview Road","postal_code":"6341","state":null,"ongoing_orders":18},{"id_client":19,"firstname":"Carlye","name":"Dollard","email":"cdollardi@shop-pro.jp","total_orders":19,"address":"2513 3rd Avenue","postal_code":"2419","state":null,"ongoing_orders":19},{"id_client":20,"firstname":"Claresta","name":"Phoenix","email":"cphoenixj@wufoo.com","total_orders":20,"address":"8049 Golf Course Plaza","postal_code":"366502","state":null,"ongoing_orders":20},{"id_client":21,"firstname":"Nikolaos","name":"Roxburch","email":"nroxburchk@quantcast.com","total_orders":21,"address":"326 Magdeline Circle","postal_code":"527548","state":null,"ongoing_orders":21},{"id_client":22,"firstname":"Merle","name":"Lukasik","email":"mlukasikl@cnn.com","total_orders":22,"address":"5 Roxbury Court","postal_code":null,"state":null,"ongoing_orders":22},{"id_client":23,"firstname":"Tony","name":"Petre","email":"tpetrem@symantec.com","total_orders":23,"address":"80 Badeau Court","postal_code":null,"state":null,"ongoing_orders":23},{"id_client":24,"firstname":"Waneta","name":"Wenden","email":"wwendenn@blogs.com","total_orders":24,"address":"623 Rigney Place","postal_code":null,"state":null,"ongoing_orders":24},{"id_client":25,"firstname":"Carina","name":"Gudge","email":"cgudgeo@unc.edu","total_orders":25,"address":"94425 Morningstar Pass","postal_code":"3045-451","state":"Coimbra","ongoing_orders":25},{"id_client":26,"firstname":"Kendre","name":"Coleman","email":"kcolemanp@skype.com","total_orders":26,"address":"461 Farmco Street","postal_code":"739 12","state":null,"ongoing_orders":26},{"id_client":27,"firstname":"Jo-ann","name":"Kores","email":"jkoresq@squarespace.com","total_orders":27,"address":"75099 Basil Parkway","postal_code":null,"state":null,"ongoing_orders":27},{"id_client":28,"firstname":"Antonin","name":"Gadsby","email":"agadsbyr@webmd.com","total_orders":28,"address":"8 Grasskamp Plaza","postal_code":"169510","state":null,"ongoing_orders":28},{"id_client":29,"firstname":"Anjela","name":"Benesevich","email":"abenesevichs@cmu.edu","total_orders":29,"address":"7498 Brickson Park Place","postal_code":"2665-299","state":"Lisboa","ongoing_orders":29},{"id_client":30,"firstname":"Lefty","name":"Stockport","email":"lstockportt@aboutads.info","total_orders":30,"address":"947 Dawn Street","postal_code":null,"state":null,"ongoing_orders":30},{"id_client":31,"firstname":"Barbara","name":"Cocher","email":"bcocheru@odnoklassniki.ru","total_orders":31,"address":"35038 Towne Avenue","postal_code":"14652","state":"New York","ongoing_orders":31},{"id_client":32,"firstname":"Corbett","name":"Cruddace","email":"ccruddacev@springer.com","total_orders":32,"address":"3675 Maywood Avenue","postal_code":"07-104","state":null,"ongoing_orders":32},{"id_client":33,"firstname":"Lucine","name":"Wrates","email":"lwratesw@desdev.cn","total_orders":33,"address":"77 East Road","postal_code":null,"state":null,"ongoing_orders":33},{"id_client":34,"firstname":"Alidia","name":"Sturman","email":"asturmanx@admin.ch","total_orders":34,"address":"81334 Loomis Terrace","postal_code":"412285","state":null,"ongoing_orders":34},{"id_client":35,"firstname":"Barbi","name":"Brophy","email":"bbrophyy@g.co","total_orders":35,"address":"3 Crest Line Lane","postal_code":null,"state":null,"ongoing_orders":35},{"id_client":36,"firstname":"Doti","name":"Cass","email":"dcassz@dyndns.org","total_orders":36,"address":"31628 Sage Street","postal_code":"38197","state":"Tennessee","ongoing_orders":36},{"id_client":37,"firstname":"Montague","name":"Marco","email":"mmarco10@instagram.com","total_orders":37,"address":"29 Columbus Place","postal_code":null,"state":null,"ongoing_orders":37},{"id_client":38,"firstname":"Ludvig","name":"Hurle","email":"lhurle11@blogs.com","total_orders":38,"address":"22 John Wall Hill","postal_code":"29830-000","state":null,"ongoing_orders":38},{"id_client":39,"firstname":"Morrie","name":"Cansdell","email":"mcansdell12@vimeo.com","total_orders":39,"address":"79 Mayfield Avenue","postal_code":null,"state":null,"ongoing_orders":39},{"id_client":40,"firstname":"Joelle","name":"Le Huquet","email":"jlehuquet13@icio.us","total_orders":40,"address":"702 Northport Street","postal_code":"141667","state":null,"ongoing_orders":40},{"id_client":41,"firstname":"Erina","name":"Kelleway","email":"ekelleway14@usgs.gov","total_orders":41,"address":"1318 Bowman Crossing","postal_code":null,"state":null,"ongoing_orders":41},{"id_client":42,"firstname":"Rudie","name":"Flooks","email":"rflooks15@dion.ne.jp","total_orders":42,"address":"4 Holmberg Street","postal_code":null,"state":null,"ongoing_orders":42},{"id_client":43,"firstname":"Merrilee","name":"Curnnokk","email":"mcurnnokk16@nbcnews.com","total_orders":43,"address":"98462 Ridgeview Avenue","postal_code":"2442","state":null,"ongoing_orders":43},{"id_client":44,"firstname":"Arvy","name":"Gheeorghie","email":"agheeorghie17@phoca.cz","total_orders":44,"address":"64780 Mallard Point","postal_code":"453187","state":null,"ongoing_orders":44},{"id_client":45,"firstname":"Bar","name":"Barkshire","email":"bbarkshire18@washington.edu","total_orders":45,"address":"28531 Mayfield Avenue","postal_code":null,"state":null,"ongoing_orders":45},{"id_client":46,"firstname":"Newton","name":"Fyldes","email":"nfyldes19@ca.gov","total_orders":46,"address":"868 Boyd Avenue","postal_code":null,"state":null,"ongoing_orders":46},{"id_client":47,"firstname":"Grange","name":"Digman","email":"gdigman1a@mail.ru","total_orders":47,"address":"8 Reindahl Plaza","postal_code":null,"state":null,"ongoing_orders":47},{"id_client":48,"firstname":"Burt","name":"Fieller","email":"bfieller1b@wiley.com","total_orders":48,"address":"3 Forest Dtextale Avenue","postal_code":"J4W","state":"Qu\xe9bec","ongoing_orders":48},{"id_client":49,"firstname":"Philippe","name":"Petow","email":"ppetow1c@europa.eu","total_orders":49,"address":"35 Gerald Junction","postal_code":null,"state":null,"ongoing_orders":49},{"id_client":50,"firstname":"Sally","name":"Mumm","email":"smumm1d@theglobeandmail.com","total_orders":50,"address":"1 Jana Pass","postal_code":null,"state":null,"ongoing_orders":50},{"id_client":51,"firstname":"Ingunna","name":"Houtbie","email":"ihoutbie1e@wunderground.com","total_orders":51,"address":"6836 Russell Hill","postal_code":null,"state":null,"ongoing_orders":51},{"id_client":52,"firstname":"Halie","name":"Kunc","email":"hkunc1f@etsy.com","total_orders":52,"address":"7 Hoffman Road","postal_code":"35680-000","state":null,"ongoing_orders":52},{"id_client":53,"firstname":"Viki","name":"Stetlye","email":"vstetlye1g@blogs.com","total_orders":53,"address":"162 Ronald Regan Center","postal_code":"4100","state":null,"ongoing_orders":53},{"id_client":54,"firstname":"Essa","name":"Bamford","email":"ebamford1h@amazon.co.uk","total_orders":54,"address":"6671 Buena Vista Alley","postal_code":"32050","state":"Chihuahua","ongoing_orders":54},{"id_client":55,"firstname":"Gabriello","name":"Bristow","email":"gbristow1i@indiegogo.com","total_orders":55,"address":"1453 Cordelia Alley","postal_code":null,"state":null,"ongoing_orders":55},{"id_client":56,"firstname":"Devi","name":"Crumley","email":"dcrumley1j@dion.ne.jp","total_orders":56,"address":"57 Gerald Park","postal_code":null,"state":null,"ongoing_orders":56},{"id_client":57,"firstname":"Adey","name":"Jellico","email":"ajellico1k@nsw.gov.au","total_orders":57,"address":"33 Anhalt Junction","postal_code":null,"state":null,"ongoing_orders":57},{"id_client":58,"firstname":"Jobi","name":"Kearney","email":"jkearney1l@google.com.hk","total_orders":58,"address":"92405 Blackbird Point","postal_code":null,"state":null,"ongoing_orders":58},{"id_client":59,"firstname":"Montgomery","name":"Brookes","email":"mbrookes1m@tiny.cc","total_orders":59,"address":"830 Erie Pass","postal_code":"3144","state":null,"ongoing_orders":59},{"id_client":60,"firstname":"Gaye","name":"Balfe","email":"gbalfe1n@about.me","total_orders":60,"address":"58106 Cherokee Avenue","postal_code":"17004 CEDEX 1","state":"Poitou-Charentes","ongoing_orders":60},{"id_client":61,"firstname":"Bondie","name":"O\'Neill","email":"boneill1o@photobucket.com","total_orders":61,"address":"23699 Dottie Terrace","postal_code":"31416","state":"Georgia","ongoing_orders":61},{"id_client":62,"firstname":"Stanton","name":"Gawn","email":"sgawn1p@slashdot.org","total_orders":62,"address":"80026 Buena Vista Hill","postal_code":null,"state":null,"ongoing_orders":62},{"id_client":63,"firstname":"Ralph","name":"Allmond","email":"rallmond1q@google.cn","total_orders":63,"address":"8 Spaight Plaza","postal_code":"618541","state":null,"ongoing_orders":63},{"id_client":64,"firstname":"Carina","name":"Ranken","email":"cranken1r@bloomberg.com","total_orders":64,"address":"0 Talmadge Place","postal_code":null,"state":null,"ongoing_orders":64},{"id_client":65,"firstname":"Alvin","name":"Pringuer","email":"apringuer1s@hatena.ne.jp","total_orders":65,"address":"8 Melvin Road","postal_code":"985-0003","state":null,"ongoing_orders":65},{"id_client":66,"firstname":"Gusty","name":"Eastbury","email":"geastbury1t@sbwire.com","total_orders":66,"address":"570 Shopko Terrace","postal_code":null,"state":null,"ongoing_orders":66},{"id_client":67,"firstname":"Elnar","name":"Pegler","email":"epegler1u@sitemeter.com","total_orders":67,"address":"2121 Mcbride Lane","postal_code":null,"state":null,"ongoing_orders":67},{"id_client":68,"firstname":"Abra","name":"Watterson","email":"awatterson1v@godaddy.com","total_orders":68,"address":"28546 Chive Parkway","postal_code":null,"state":null,"ongoing_orders":68},{"id_client":69,"firstname":"Dell","name":"Keady","email":"dkeady1w@nationalgeographic.com","total_orders":69,"address":"6 Graceland Street","postal_code":"20110","state":null,"ongoing_orders":69},{"id_client":70,"firstname":"Dorise","name":"Naisey","email":"dnaisey1x@zdnet.com","total_orders":70,"address":"4550 Lukken Drive","postal_code":"5212","state":null,"ongoing_orders":70},{"id_client":71,"firstname":"Martainn","name":"Elks","email":"melks1y@loc.gov","total_orders":71,"address":"98383 Porter Parkway","postal_code":"607529","state":null,"ongoing_orders":71},{"id_client":72,"firstname":"Keeley","name":"Longbottom","email":"klongbottom1z@linkedin.com","total_orders":72,"address":"84 Mcbride Pass","postal_code":"186755","state":null,"ongoing_orders":72},{"id_client":73,"firstname":"Drusy","name":"Sings","email":"dsings20@hostgator.com","total_orders":73,"address":"8 Cordelia Alley","postal_code":null,"state":null,"ongoing_orders":73},{"id_client":74,"firstname":"Vere","name":"Toun","email":"vtoun21@mtv.com","total_orders":74,"address":"49 Utah Junction","postal_code":null,"state":null,"ongoing_orders":74},{"id_client":75,"firstname":"Derrek","name":"Doolan","email":"ddoolan22@cisco.com","total_orders":75,"address":"2 Bellgrove Terrace","postal_code":"6406","state":null,"ongoing_orders":75},{"id_client":76,"firstname":"Reiko","name":"Shopcott","email":"rshopcott23@msu.edu","total_orders":76,"address":"96 Center Court","postal_code":null,"state":null,"ongoing_orders":76},{"id_client":77,"firstname":"Sigismund","name":"Belfit","email":"sbelfit24@alibaba.com","total_orders":77,"address":"8 Rockefeller Hill","postal_code":null,"state":null,"ongoing_orders":77},{"id_client":78,"firstname":"Annadiana","name":"Torn","email":"atorn25@pen.io","total_orders":78,"address":"282 American Ash Center","postal_code":null,"state":null,"ongoing_orders":78},{"id_client":79,"firstname":"Daniela","name":"McShea","email":"dmcshea26@alibaba.com","total_orders":79,"address":"90084 Lotheville Lane","postal_code":null,"state":null,"ongoing_orders":79},{"id_client":80,"firstname":"Kathye","name":"Bartolommeo","email":"kbartolommeo27@goo.ne.jp","total_orders":80,"address":"40735 Wayridge Avenue","postal_code":null,"state":null,"ongoing_orders":80},{"id_client":81,"firstname":"Waldo","name":"Moubray","email":"wmoubray28@hc360.com","total_orders":81,"address":"7 Luster Way","postal_code":"60618 CEDEX","state":"Picardie","ongoing_orders":81},{"id_client":82,"firstname":"Budd","name":"Werendell","email":"bwerendell29@sphinn.com","total_orders":82,"address":"5 Granby Circle","postal_code":null,"state":null,"ongoing_orders":82},{"id_client":83,"firstname":"Doroteya","name":"Souza","email":"dsouza2a@newsvine.com","total_orders":83,"address":"7718 Northport Terrace","postal_code":"626125","state":null,"ongoing_orders":83},{"id_client":84,"firstname":"Kayle","name":"Fansy","email":"kfansy2b@dailymotion.com","total_orders":84,"address":"7028 Northridge Park","postal_code":"3913","state":null,"ongoing_orders":84},{"id_client":85,"firstname":"Elwyn","name":"Ivery","email":"eivery2c@list-manage.com","total_orders":85,"address":"969 Jackson Park","postal_code":null,"state":null,"ongoing_orders":85},{"id_client":86,"firstname":"Tate","name":"Lefort","email":"tlefort2d@photobucket.com","total_orders":86,"address":"29973 Golf Street","postal_code":null,"state":null,"ongoing_orders":86},{"id_client":87,"firstname":"Tybalt","name":"Bradnick","email":"tbradnick2e@hexun.com","total_orders":87,"address":"71 Carpenter Terrace","postal_code":"73-108","state":null,"ongoing_orders":87},{"id_client":88,"firstname":"Abey","name":"Godsell","email":"agodsell2f@indiatimes.com","total_orders":88,"address":"0004 Schmedeman Crossing","postal_code":null,"state":null,"ongoing_orders":88},{"id_client":89,"firstname":"Sarge","name":"Kellie","email":"skellie2g@ycombinator.com","total_orders":89,"address":"89 Johnson Pass","postal_code":"11130","state":null,"ongoing_orders":89},{"id_client":90,"firstname":"Stanton","name":"Beatens","email":"sbeatens2h@dailymotion.com","total_orders":90,"address":"0 Eastwood Parkway","postal_code":"14750-000","state":null,"ongoing_orders":90},{"id_client":91,"firstname":"Galen","name":"Stickings","email":"gstickings2i@geocities.jp","total_orders":91,"address":"15 Nevada Place","postal_code":"6550","state":null,"ongoing_orders":91},{"id_client":92,"firstname":"Teirtza","name":"Klimentyev","email":"tklimentyev2j@flickr.com","total_orders":92,"address":"0 Hauk Street","postal_code":"1685-141","state":"Lisboa","ongoing_orders":92},{"id_client":93,"firstname":"Ailyn","name":"Runchman","email":"arunchman2k@huffingtonpost.com","total_orders":93,"address":"4 Northfield Pass","postal_code":"20608","state":"Terengganu","ongoing_orders":93},{"id_client":94,"firstname":"Scotti","name":"Deering","email":"sdeering2l@youtu.be","total_orders":94,"address":"101 Ryan Road","postal_code":null,"state":null,"ongoing_orders":94},{"id_client":95,"firstname":"Murdoch","name":"De Fries","email":"mdefries2m@tripod.com","total_orders":95,"address":"5 Hayes Avenue","postal_code":null,"state":null,"ongoing_orders":95},{"id_client":96,"firstname":"Quintin","name":"Sultana","email":"qsultana2n@mtv.com","total_orders":96,"address":"3919 Sutteridge Plaza","postal_code":null,"state":null,"ongoing_orders":96},{"id_client":97,"firstname":"Celinda","name":"Grimme","email":"cgrimme2o@dot.gov","total_orders":97,"address":"95943 High Crossing Drive","postal_code":"391339","state":null,"ongoing_orders":97},{"id_client":98,"firstname":"Sile","name":"Jorioz","email":"sjorioz2p@comcast.net","total_orders":98,"address":"48008 Golf Course Parkway","postal_code":"183027","state":null,"ongoing_orders":98},{"id_client":99,"firstname":"Nita","name":"Sandells","email":"nsandells2q@ustream.tv","total_orders":99,"address":"214 Gulseth Terrace","postal_code":null,"state":null,"ongoing_orders":99},{"id_client":100,"firstname":"Syd","name":"Westley","email":"swestley2r@reference.com","total_orders":100,"address":"60 Prairieview Point","postal_code":null,"state":null,"ongoing_orders":100}],"togglecolumns":[{"dataField":"address","text":"adresse","sort":true,"hidden":true},{"dataField":"state","text":"\xc9tat/Commune","sort":true,"hidden":true},{"dataField":"postal_code","text":"Code postale","sort":true,"hidden":true},{"dataField":"total_orders","text":"Nombre de commandes","sort":true,"editable":false,"hidden":true},{"dataField":"firstname","text":"Pr\xe9nom","sort":true,"hidden":true}],"columns":[{"dataField":"id","text":"identifiant du client","sort":true,"editable":false},{"dataField":"total_orders","text":"Nombre de commandes","sort":true,"editable":false,"hidden":true},{"dataField":"firstname","text":"Pr\xe9nom","sort":true,"hidden":true},{"dataField":"name","text":"Nom","sort":true},{"dataField":"email","text":"Adresse mail","sort":true},{"dataField":"address","text":"adresse","sort":true,"hidden":true},{"dataField":"state","text":"\xc9tat/Commune","sort":true,"hidden":true},{"dataField":"postal_code","text":"Code postale","sort":true,"hidden":true},{"dataField":"ongoing_orders","text":"Commandes en cours","sort":true,"editable":false},{"dataField":"country_code","text":"Code pays","sort":true,"editable":false,"hidden":true},{"dataField":"phone","text":"Num\xe9ro de t\xe9l\xe9phone","sort":true}],"crumbs":[["/","Accueil"],["/dashboard","Tableau de bord"],["/customers","Mes clients"]],"actions":["add","modify","delete"]}'
      );
    },
    91: function (e) {
      e.exports = JSON.parse(
        '{"title":"Factures:","togglecolumns":[{"dataField":"delivered","text":"livr\xe9s","sort":true,"editable":false,"hidden":true},{"dataField":"awaiting_pickup","text":"En attente d\'enl\xe8vement","sort":true,"editable":false,"hidden":true},{"dataField":"in_delivery","text":"En cours de livraison","sort":true,"editable":false,"hidden":true},{"dataField":"postponed","text":"Livraisons report\xe9es","sort":true,"editable":false,"hidden":true},{"dataField":"in_storage","text":"En entrep\xf4t","sort":true,"editable":false,"hidden":true},{"dataField":"awaiting_return","text":"En attente de retour","sort":true,"editable":false,"hidden":true},{"dataField":"in_storage_to_return","text":"En entrep\xf4t (retours)","sort":true,"editable":false,"hidden":true},{"dataField":"return_postponed","text":"Retours report\xe9s","sort":true,"editable":false,"hidden":true},{"dataField":"return_pickup_postponed","text":"Enl\xe8vement report\xe9 (retours)","sort":true,"editable":false,"hidden":true},{"dataField":"returned","text":"Retourn\xe9s","sort":true,"editable":false,"hidden":true},{"dataField":"payed","text":"Pay\xe9(s)","editable":false,"sort":true,"hidden":true}],"columns":[{"dataField":"order_id","text":"Num\xe9ro de commande","sort":true,"editable":false},{"dataField":"total_packages","text":"Nombre de colis","sort":true,"editable":false},{"dataField":"delivered","text":"livr\xe9s","sort":true,"editable":false,"hidden":true},{"dataField":"awaiting_pickup","text":"En attente d\'enl\xe8vement","sort":true,"editable":false,"hidden":true},{"dataField":"in_delivery","text":"En cours de livraison","sort":true,"editable":false,"hidden":true},{"dataField":"postponed","text":"Livraisons report\xe9es","sort":true,"editable":false,"hidden":true},{"dataField":"in_storage","text":"En entrep\xf4t","sort":true,"editable":false,"hidden":true},{"dataField":"awaiting_return","text":"En attente de retour","sort":true,"editable":false,"hidden":true},{"dataField":"in_storage_to_return","text":"En entrep\xf4t (retours)","sort":true,"editable":false,"hidden":true},{"dataField":"return_postponed","text":"Retours report\xe9s","sort":true,"editable":false,"hidden":true},{"dataField":"return_pickup_postponed","text":"Enl\xe8vement report\xe9 (retours)","sort":true,"editable":false,"hidden":true},{"dataField":"returned","text":"Retourn\xe9s","sort":true,"editable":false,"hidden":true},{"dataField":"payed","text":"Pay\xe9(s)","sort":true,"editable":false,"hidden":true},{"dataField":"total_packages","text":"Nombre total de packets","sort":true,"editable":false},{"dataField":"total_weight","text":"Poids total","sort":true,"editable":false},{"dataField":"total_price","text":"Prix total des produits","editable":false,"sort":true}],"crumbs":[["/","Accueil"],["/dashboard","Tableau de bord"],["/bills","Factures"]],"actions":["bill"]}'
      );
    },
  },
  [[645, 1, 2]],
]);
//# sourceMappingURL=main.cccbbb13.chunk.js.map
