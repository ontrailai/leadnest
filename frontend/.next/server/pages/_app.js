/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/supabaseClient */ \"./utils/supabaseClient.ts\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check active session\n        const checkSession = async ()=>{\n            try {\n                if (_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase) {\n                    const { data: { session } } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession();\n                    setSession(session);\n                    setUser(session?.user ?? null);\n                }\n            } catch (error) {\n                console.error(\"Error checking session:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        checkSession();\n        // Listen for auth changes\n        if (_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase) {\n            const { data: { subscription } } = _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange((_event, session)=>{\n                setSession(session);\n                setUser(session?.user ?? null);\n                setLoading(false);\n            });\n            return ()=>subscription.unsubscribe();\n        } else {\n            setLoading(false);\n        }\n    }, []);\n    const signUp = async (email, password)=>{\n        try {\n            if (!_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase) {\n                return {\n                    error: {\n                        message: \"Authentication service not configured\"\n                    }\n                };\n            }\n            const { error } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signUp({\n                email,\n                password\n            });\n            if (!error) {\n                router.push(\"/login?message=Check your email to confirm your account\");\n            }\n            return {\n                error\n            };\n        } catch (error) {\n            return {\n                error\n            };\n        }\n    };\n    const signIn = async (email, password)=>{\n        try {\n            if (!_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase) {\n                return {\n                    error: {\n                        message: \"Authentication service not configured\"\n                    }\n                };\n            }\n            const { error } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signInWithPassword({\n                email,\n                password\n            });\n            if (!error) {\n                router.push(\"/dashboard\");\n            }\n            return {\n                error\n            };\n        } catch (error) {\n            return {\n                error\n            };\n        }\n    };\n    const signOut = async ()=>{\n        try {\n            if (_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase) {\n                await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signOut();\n            }\n            router.push(\"/login\");\n        } catch (error) {\n            console.error(\"Error signing out:\", error);\n        }\n    };\n    const value = {\n        user,\n        session,\n        loading,\n        signUp,\n        signIn,\n        signOut\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/contexts/AuthContext.tsx\",\n        lineNumber: 111,\n        columnNumber: 10\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDQUU7SUFDRjtJQUVBLHFCQUFPLDhEQUFDNUIsWUFBWThCLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQVExQjs7Ozs7O0FBQzlDLEVBQUM7QUFFTSxNQUFNNEIsVUFBVTtJQUNyQixNQUFNQyxVQUFVckMsaURBQVVBLENBQUNLO0lBQzNCLElBQUlnQyxZQUFZL0IsV0FBVztRQUN6QixNQUFNLElBQUlnQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZG5lc3QtZnJvbnRlbmQvLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/NmQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFVzZXIsIFNlc3Npb24gfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJ0AvdXRpbHMvc3VwYWJhc2VDbGllbnQnXG5cbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbFxuICBzZXNzaW9uOiBTZXNzaW9uIHwgbnVsbFxuICBsb2FkaW5nOiBib29sZWFuXG4gIHNpZ25VcDogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8eyBlcnJvcjogYW55IH0+XG4gIHNpZ25JbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8eyBlcnJvcjogYW55IH0+XG4gIHNpZ25PdXQ6ICgpID0+IFByb21pc2U8dm9pZD5cbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlPFNlc3Npb24gfCBudWxsPihudWxsKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgYWN0aXZlIHNlc3Npb25cbiAgICBjb25zdCBjaGVja1Nlc3Npb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoc3VwYWJhc2UpIHtcbiAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgc2Vzc2lvbiB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKVxuICAgICAgICAgIHNldFNlc3Npb24oc2Vzc2lvbilcbiAgICAgICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgPz8gbnVsbClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgc2Vzc2lvbjonLCBlcnJvcilcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tTZXNzaW9uKClcblxuICAgIC8vIExpc3RlbiBmb3IgYXV0aCBjaGFuZ2VzXG4gICAgaWYgKHN1cGFiYXNlKSB7XG4gICAgICBjb25zdCB7IGRhdGE6IHsgc3Vic2NyaXB0aW9uIH0gfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKF9ldmVudCwgc2Vzc2lvbikgPT4ge1xuICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb24pXG4gICAgICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlciA/PyBudWxsKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXN1cGFiYXNlKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6ICdBdXRoZW50aWNhdGlvbiBzZXJ2aWNlIG5vdCBjb25maWd1cmVkJyB9IH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnblVwKHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbj9tZXNzYWdlPUNoZWNrIHlvdXIgZW1haWwgdG8gY29uZmlybSB5b3VyIGFjY291bnQnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZXJyb3IgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4geyBlcnJvciB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFzdXBhYmFzZSkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogeyBtZXNzYWdlOiAnQXV0aGVudGljYXRpb24gc2VydmljZSBub3QgY29uZmlndXJlZCcgfSB9XG4gICAgICB9XG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25JbldpdGhQYXNzd29yZCh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9yIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHsgZXJyb3IgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChzdXBhYmFzZSkge1xuICAgICAgICBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKVxuICAgICAgfVxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgb3V0OicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIHVzZXIsXG4gICAgc2Vzc2lvbixcbiAgICBsb2FkaW5nLFxuICAgIHNpZ25VcCxcbiAgICBzaWduSW4sXG4gICAgc2lnbk91dCxcbiAgfVxuXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJylcbiAgfVxuICByZXR1cm4gY29udGV4dFxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInNlc3Npb24iLCJzZXRTZXNzaW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJjaGVja1Nlc3Npb24iLCJkYXRhIiwiYXV0aCIsImdldFNlc3Npb24iLCJlcnJvciIsImNvbnNvbGUiLCJzdWJzY3JpcHRpb24iLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInVuc3Vic2NyaWJlIiwic2lnblVwIiwiZW1haWwiLCJwYXNzd29yZCIsIm1lc3NhZ2UiLCJwdXNoIiwic2lnbkluIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2lnbk91dCIsInZhbHVlIiwiUHJvdmlkZXIiLCJ1c2VBdXRoIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"LeadNest - Smart Lead Generation for Property Managers\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"LeadNest helps property managers discover high-intent leads from social media with AI-powered analysis\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"LeadNest - Smart Lead Generation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"Discover high-intent property management leads with AI-powered analysis\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: \"LeadNest\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryanwatson/Desktop/FacebookL/frontend/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ3lCO0FBRXRDLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILCtEQUFZQTs7MEJBQ1gsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNLO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0csVUFBUzt3QkFBV0QsU0FBUTs7Ozs7O2tDQUNsQyw4REFBQ0Y7d0JBQUtHLFVBQVM7d0JBQWlCRCxTQUFROzs7Ozs7a0NBQ3hDLDhEQUFDRjt3QkFBS0csVUFBUzt3QkFBZUQsU0FBUTs7Ozs7O2tDQUN0Qyw4REFBQ0U7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNUO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRuZXN0LWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdAL2NvbnRleHRzL0F1dGhDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TGVhZE5lc3QgLSBTbWFydCBMZWFkIEdlbmVyYXRpb24gZm9yIFByb3BlcnR5IE1hbmFnZXJzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxlYWROZXN0IGhlbHBzIHByb3BlcnR5IG1hbmFnZXJzIGRpc2NvdmVyIGhpZ2gtaW50ZW50IGxlYWRzIGZyb20gc29jaWFsIG1lZGlhIHdpdGggQUktcG93ZXJlZCBhbmFseXNpc1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTGVhZE5lc3QgLSBTbWFydCBMZWFkIEdlbmVyYXRpb25cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRpc2NvdmVyIGhpZ2gtaW50ZW50IHByb3BlcnR5IG1hbmFnZW1lbnQgbGVhZHMgd2l0aCBBSS1wb3dlcmVkIGFuYWx5c2lzXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiTGVhZE5lc3RcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQXV0aFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/supabaseClient.ts":
/*!*********************************!*\
  !*** ./utils/supabaseClient.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"your_supabase_project_url\" || 0;\nconst supabaseAnonKey = \"your_supabase_anon_key\" || 0;\n// Only create Supabase client if we have real credentials\nconst supabase = supabaseUrl !== \"your_supabase_project_url\" && supabaseUrl !== \"https://placeholder.supabase.co\" ? (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey) : null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZUNsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBY0MsMkJBQW9DLElBQUk7QUFDNUQsTUFBTUcsa0JBQWtCSCx3QkFBeUMsSUFBSTtBQUVyRSwwREFBMEQ7QUFDbkQsTUFBTUssV0FBVyxnQkFBaUIsK0JBQStCTixnQkFBZ0Isb0NBQ3BGRCxtRUFBWUEsQ0FBQ0MsYUFBYUksbUJBQzFCLEtBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkbmVzdC1mcm9udGVuZC8uL3V0aWxzL3N1cGFiYXNlQ2xpZW50LnRzPzFkZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCB8fCAnaHR0cHM6Ly9wbGFjZWhvbGRlci5zdXBhYmFzZS5jbydcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIHx8ICdwbGFjZWhvbGRlci1hbm9uLWtleSdcblxuLy8gT25seSBjcmVhdGUgU3VwYWJhc2UgY2xpZW50IGlmIHdlIGhhdmUgcmVhbCBjcmVkZW50aWFsc1xuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gKHN1cGFiYXNlVXJsICE9PSAneW91cl9zdXBhYmFzZV9wcm9qZWN0X3VybCcgJiYgc3VwYWJhc2VVcmwgIT09ICdodHRwczovL3BsYWNlaG9sZGVyLnN1cGFiYXNlLmNvJykgXG4gID8gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpXG4gIDogbnVsbFxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/supabaseClient.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();