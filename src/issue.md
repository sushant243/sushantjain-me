  GET http://localhost:3000/stories 500 (Internal Server Error)
processMessage @ webpack-internal:///…reloader-app.js:295
handler @ webpack-internal:///…reloader-app.js:407
main-app.js:1149 Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
image-loader.js:67 Uncaught Error: Invalid src prop (https://cdn.sanity.io/images/84visgb1/production/213318eb910da521db85bf77787bc4cbf1ba41d3-1024x964.png?rect=0,226,1024,512&w=800&h=400) on `next/image`, hostname "cdn.sanity.io" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
    at defaultLoader (image-loader.js:67:49)
    at eval (get-img-props.js:108:36)
    at Array.map (<anonymous>)
    at generateImgAttrs (get-img-props.js:108:24)
    at getImgProps (get-img-props.js:502:27)
    at eval (image-component.js:272:82)
    at Object.react_stack_bottom_frame (react-dom-client.development.js:23584:20)
    at renderWithHooks (react-dom-client.development.js:6793:22)
    at updateForwardRef (react-dom-client.development.js:8807:19)
    at beginWork (react-dom-client.development.js:10823:34)
    at runWithFiberInDEV (react-dom-client.development.js:872:30)
    at performUnitOfWork (react-dom-client.development.js:15727:22)
    at workLoopSync (react-dom-client.development.js:15547:41)
    at renderRootSync (react-dom-client.development.js:15527:11)
    at performWorkOnRoot (react-dom-client.development.js:15034:44)
    at performWorkOnRootViaSchedulerTask (react-dom-client.development.js:16816:7)
    at MessagePort.performWorkUntilDeadline (scheduler.development.js:45:48)
defaultLoader @ image-loader.js:67
eval @ get-img-props.js:108
generateImgAttrs @ get-img-props.js:108
getImgProps @ get-img-props.js:502
eval @ image-component.js:272
react_stack_bottom_frame @ react-dom-client.development.js:23584
renderWithHooks @ react-dom-client.development.js:6793
updateForwardRef @ react-dom-client.development.js:8807
beginWork @ react-dom-client.development.js:10823
runWithFiberInDEV @ react-dom-client.development.js:872
performUnitOfWork @ react-dom-client.development.js:15727
workLoopSync @ react-dom-client.development.js:15547
renderRootSync @ react-dom-client.development.js:15527
performWorkOnRoot @ react-dom-client.development.js:15034
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:16816
performWorkUntilDeadline @ scheduler.development.js:45
"use client"
eval @ page.tsx:42
Array.map @ VM926 <anonymous>:1
StoriesPage @ page.tsx:34
initializeElement @ react-server-dom-webpack-client.browser.development.js:1344
eval @ react-server-dom-webpack-client.browser.development.js:3066
initializeModelChunk @ react-server-dom-webpack-client.browser.development.js:1246
readChunk @ react-server-dom-webpack-client.browser.development.js:935
react_stack_bottom_frame @ react-dom-client.development.js:23691
resolveLazy @ react-dom-client.development.js:5177
createChild @ react-dom-client.development.js:5494
reconcileChildrenArray @ react-dom-client.development.js:5801
reconcileChildFibersImpl @ react-dom-client.development.js:6124
eval @ react-dom-client.development.js:6229
reconcileChildren @ react-dom-client.development.js:8783
updateFunctionComponent @ react-dom-client.development.js:9264
beginWork @ react-dom-client.development.js:10807
runWithFiberInDEV @ react-dom-client.development.js:872
performUnitOfWork @ react-dom-client.development.js:15727
workLoopConcurrentByScheduler @ react-dom-client.development.js:15721
renderRootConcurrent @ react-dom-client.development.js:15696
performWorkOnRoot @ react-dom-client.development.js:14990
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:16816
performWorkUntilDeadline @ scheduler.development.js:45
<StoriesPage>
Function.all @ VM916 <anonymous>:1
Function.all @ VM916 <anonymous>:1
initializeFakeTask @ react-server-dom-webpack-client.browser.development.js:2529
initializeDebugInfo @ react-server-dom-webpack-client.browser.development.js:2554
initializeDebugChunk @ react-server-dom-webpack-client.browser.development.js:1193
processFullStringRow @ react-server-dom-webpack-client.browser.development.js:2850
processFullBinaryRow @ react-server-dom-webpack-client.browser.development.js:2766
processBinaryChunk @ react-server-dom-webpack-client.browser.development.js:2969
progress @ react-server-dom-webpack-client.browser.development.js:3233
"use server"
ResponseInstance @ react-server-dom-webpack-client.browser.development.js:2041
createResponseFromOptions @ react-server-dom-webpack-client.browser.development.js:3094
exports.createFromReadableStream @ react-server-dom-webpack-client.browser.development.js:3478
eval @ app-index.js:130
(app-pages-browser)/./node_modules/next/dist/client/app-index.js @ main-app.js:149
options.factory @ webpack.js:1
__webpack_require__ @ webpack.js:1
fn @ webpack.js:1
eval @ app-next-dev.js:14
eval @ app-bootstrap.js:59
loadScriptsInSequence @ app-bootstrap.js:24
appBootstrap @ app-bootstrap.js:53
eval @ app-next-dev.js:13
(app-pages-browser)/./node_modules/next/dist/client/app-next-dev.js @ main-app.js:171
options.factory @ webpack.js:1
__webpack_require__ @ webpack.js:1
__webpack_exec__ @ main-app.js:1867
(anonymous) @ main-app.js:1868
webpackJsonpCallback @ webpack.js:1
(anonymous) @ main-app.js:9
stories:1 The resource http://localhost:3000/_next/static/css/app/layout.css?v=1762183459721 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
