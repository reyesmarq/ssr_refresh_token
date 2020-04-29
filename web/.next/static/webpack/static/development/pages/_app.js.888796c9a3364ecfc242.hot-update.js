webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/apollo.tsx":
/*!************************!*\
  !*** ./lib/apollo.tsx ***!
  \************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var apollo_link_token_refresh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-link-token-refresh */ "./node_modules/apollo-link-token-refresh/lib/tokenRefreshLink.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _accessToken__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./accessToken */ "./lib/accessToken.ts");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");




var _jsxFileName = "C:\\Users\\E072894\\Documents\\repos\\nodejs\\nextjs_repos\\ssr_refresh_token\\web\\lib\\apollo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














// one way to check if we are on the server or not, is to check the window.
var isServer = function isServer() {
  return false;
};
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */


function withApollo(PageComponent) {
  var _this = this;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr;

  var WithApollo = function WithApollo(_ref2) {
    var apolloClient = _ref2.apolloClient,
        apolloState = _ref2.apolloState,
        pageProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["apolloClient", "apolloState"]);

    var client = apolloClient || initApolloClient(apolloState);
    return __jsx(PageComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
      apolloClient: client,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }
    }));
  };

  if (true) {
    // Find correct display name
    var displayName = PageComponent.displayName || PageComponent.name || 'Component'; // Warn if old way of installing apollo is used

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    } // Set correct display name for devtools


    WithApollo.displayName = "withApollo(".concat(displayName, ")");
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = function _callee(ctx) {
      var AppTree, _ctx$ctx, req, res, apolloClient, pageProps, _await$import, getDataFromTree, apolloState;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              AppTree = ctx.AppTree, _ctx$ctx = ctx.ctx, req = _ctx$ctx.req, res = _ctx$ctx.res;

              if (isServer()) {
                console.log(req.headers.cookie);
              } // Run all GraphQL queries in the component tree
              // and extract the resulting data


              apolloClient = ctx.ctx.apolloClient = initApolloClient({});

              if (!PageComponent.getInitialProps) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(PageComponent.getInitialProps(ctx));

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = {};

            case 10:
              pageProps = _context.t0;

              if (true) {
                _context.next = 28;
                break;
              }

              if (!(res && res.finished)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", {});

            case 14:
              if (!ssr) {
                _context.next = 27;
                break;
              }

              _context.prev = 15;
              _context.next = 18;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js")));

            case 18:
              _await$import = _context.sent;
              getDataFromTree = _await$import.getDataFromTree;
              _context.next = 22;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getDataFromTree(__jsx(AppTree, {
                pageProps: _objectSpread({}, pageProps, {
                  apolloClient: apolloClient
                }),
                apolloClient: apolloClient,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 15
                }
              })));

            case 22:
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t1 = _context["catch"](15);
              // Prevent Apollo Client GraphQL errors from crashing SSR.
              // Handle them in components via the data.error prop:
              // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
              console.error('Error while running `getDataFromTree`', _context.t1);

            case 27:
              // getDataFromTree does not call componentWillUnmount
              // head side effect therefore need to be cleared manually
              next_head__WEBPACK_IMPORTED_MODULE_5___default.a.rewind();

            case 28:
              // Extract query data from the Apollo store
              apolloState = apolloClient.cache.extract();
              return _context.abrupt("return", _objectSpread({}, pageProps, {
                apolloState: apolloState
              }));

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[15, 24]], Promise);
    };
  }

  return WithApollo;
}
var apolloClient = null;
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */

function initApolloClient(initState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (false) {} // Reuse client on the client-side


  if (!apolloClient) {
    // setAccessToken(cookie.parse(document.cookie).test);
    apolloClient = createApolloClient(initState);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */


function createApolloClient() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_8__["HttpLink"]({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default.a
  });
  var refreshLink = new apollo_link_token_refresh__WEBPACK_IMPORTED_MODULE_11__["TokenRefreshLink"]({
    accessTokenField: 'accessToken',
    isTokenValidOrUndefined: function isTokenValidOrUndefined() {
      var token = Object(_accessToken__WEBPACK_IMPORTED_MODULE_13__["getAccessToken"])();

      if (!token) {
        return true;
      }

      try {
        var _jwtDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_12___default()(token),
            exp = _jwtDecode.exp;

        if (Date.now() >= exp * 1000) {
          return false;
        } else {
          return true;
        }
      } catch (_unused) {
        return false;
      }
    },
    fetchAccessToken: function fetchAccessToken() {
      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('http://localhost:4000/refresh_token', {
        method: 'POST',
        credentials: 'include'
      });
    },
    handleFetch: function handleFetch(accessToken) {
      Object(_accessToken__WEBPACK_IMPORTED_MODULE_13__["setAccessToken"])(accessToken);
    },
    handleError: function handleError(err) {
      console.warn('Your refresh token is invalid. Try to relogin');
      console.error(err);
    }
  });
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_9__["setContext"])(function (_request, _ref3) {
    var headers = _ref3.headers;
    var token = Object(_accessToken__WEBPACK_IMPORTED_MODULE_13__["getAccessToken"])();
    return {
      headers: _objectSpread({}, headers, {
        authorization: token ? "bearer ".concat(token) : ''
      })
    };
  });
  var errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_14__["onError"])(function (_ref4) {
    var graphQLErrors = _ref4.graphQLErrors,
        networkError = _ref4.networkError;
    console.log(graphQLErrors);
    console.log(networkError);
  });
  return new apollo_client__WEBPACK_IMPORTED_MODULE_6__["ApolloClient"]({
    ssrMode: false,
    // Disables forceFetch on the server (so queries are only run once)
    link: apollo_link__WEBPACK_IMPORTED_MODULE_15__["ApolloLink"].from([refreshLink, authLink, errorLink, httpLink]),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__["InMemoryCache"]().restore(initialState)
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.888796c9a3364ecfc242.hot-update.js.map