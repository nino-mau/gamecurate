// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dwhei":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "125fc8868135a82b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"adjPd":[function(require,module,exports,__globalThis) {
// ********************
// **** IMPORT CSS ****
// ********************
// Custom css
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainCss = require("./assets/css/main.css");
var _customStyleCss = require("./assets/css/custom-style.css");
// Librairies
var _hoverMinCss = require("./node_modules/hover.css/css/hover-min.css"); // Hover.css
var _animateMinCss = require("./node_modules/animate.css/animate.min.css"); // Animate.css
var _swiperBundleMinCss = require("./node_modules/swiper/swiper-bundle.min.css"); // Swiper
// ********************
// **** IMPORT JS *****
// ********************
// Custom js
var _scriptsJs = require("./assets/js/scripts.js");
// Librairies
var _popperMinJs = require("@popperjs/core/dist/umd/popper.min.js"); // Popper.js
var _bootstrapBundleMinJs = require("bootstrap/dist/js/bootstrap.bundle.min.js"); // Bootstrap
var _swiperBundleMin = require("./node_modules/swiper/swiper-bundle.min"); // Swiper
var _swiperBundleMinDefault = parcelHelpers.interopDefault(_swiperBundleMin);
// **********************
// **** IMPORT MEDIA ****
// **********************
// Videos
var _homeIllustrationMp4 = require("url:./assets/video/home-illustration.mp4");
// Games-list img
var _theWitcher3WildHuntJpeg = require("url:./assets/img/games/the-witcher-3-wild-hunt.jpeg");
var _redDeadRedemption2Jpeg = require("url:./assets/img/games/red-dead-redemption-2.jpeg");
var _godOfWarJpeg = require("url:./assets/img/games/god-of-war.jpeg");
var _horizonForbiddenWestJpeg = require("url:./assets/img/games/horizon-forbidden-west.jpeg");
var _spiderManMilesMoralesJpeg = require("url:./assets/img/games/spider-man-miles-morales.jpeg");
var _sekiroShadowsDieTwiceJpeg = require("url:./assets/img/games/sekiro-shadows-die-twice.jpeg");
var _residentEvilVillageJpeg = require("url:./assets/img/games/resident-evil-village.jpeg");
var _cyberpunk2077Jpeg = require("url:./assets/img/games/cyberpunk-2077.jpeg");
var _ghostOfTsushimaJpeg = require("url:./assets/img/games/ghost-of-tsushima.jpeg");
var _deathStrandingJpeg = require("url:./assets/img/games/death-stranding.jpeg");
var _controlJpeg = require("url:./assets/img/games/control.jpeg");
var _doomEternalJpeg = require("url:./assets/img/games/doom-eternal.jpeg");
var _finalFantasyViiRemakeJpeg = require("url:./assets/img/games/final-fantasy-vii-remake.jpeg");
var _animalCrossingNewHorizonsJpeg = require("url:./assets/img/games/animal-crossing-new-horizons.jpeg");
var _oriAndTheWillOfTheWispsJpeg = require("url:./assets/img/games/ori-and-the-will-of-the-wisps.jpeg");
var _forzaHorizon5Jpeg = require("url:./assets/img/games/forza-horizon-5.jpeg");
var _eldenRingJpeg = require("url:./assets/img/games/elden-ring.jpeg");
var _darkSouls3Jpeg = require("url:./assets/img/games/dark-souls-3.jpeg");
var _hadesJpeg = require("url:./assets/img/games/hades.jpeg");
var _persona5RoyalJpeg = require("url:./assets/img/games/persona-5-royal.jpeg");
var _deathloopJpeg = require("url:./assets/img/games/deathloop.jpeg");
var _itTakesTwoJpeg = require("url:./assets/img/games/it-takes-two.jpeg");
var _ratchetAndClankRiftApartJpeg = require("url:./assets/img/games/ratchet-and-clank-rift-apart.jpeg");
var _demonsSoulsJpeg = require("url:./assets/img/games/demons-souls.jpeg");
var _discoElysiumJpeg = require("url:./assets/img/games/disco-elysium.jpeg");
var _returnalJpeg = require("url:./assets/img/games/returnal.jpeg");
var _kingdomComeDeliverance2Jpeg = require("url:./assets/img/games/kingdom-come-deliverance-2.jpeg");
var _fallout76Jpeg = require("url:./assets/img/games/fallout-76.jpeg");
var _balanWonderworldJpeg = require("url:./assets/img/games/balan-wonderworld.jpeg");
var _falloutNewVegasJpeg = require("url:./assets/img/games/fallout-new-vegas.jpeg");
// Svg icons
// Contact
var _callIconSvg = require("url:./assets/img/icons/contact/call-icon.svg");
var _homeIconSvg = require("url:./assets/img/icons/contact/home-icon.svg");
var _mailIconSvg = require("url:./assets/img/icons/contact/mail-icon.svg");
var _printIconSvg = require("url:./assets/img/icons/contact/print-icon.svg");
// Games genre
var _actionIconSvg = require("url:./assets/img/icons/games-genre/action-icon.svg");
var _adventureIcon4Svg = require("url:./assets/img/icons/games-genre/adventure-icon4.svg");
var _coopIconSvg = require("url:./assets/img/icons/games-genre/coop-icon.svg");
var _homeIconSvg1 = require("url:./assets/img/icons/games-genre/home-icon.svg");
var _horrorIconSvg = require("url:./assets/img/icons/games-genre/horror-icon.svg");
var _immersiveSimIconSvg = require("url:./assets/img/icons/games-genre/immersive-sim-icon.svg");
var _openWorldIconSvg = require("url:./assets/img/icons/games-genre/open-world-icon.svg");
var _platformerIconSvg = require("url:./assets/img/icons/games-genre/platformer-icon.svg");
var _racingIcon2Svg = require("url:./assets/img/icons/games-genre/racing-icon2.svg");
var _rpgIconSvg = require("url:./assets/img/icons/games-genre/rpg-icon.svg");
var _shooterIconSvg = require("url:./assets/img/icons/games-genre/shooter-icon.svg");
var _simulationIconSvg = require("url:./assets/img/icons/games-genre/simulation-icon.svg");
// Meny
var _barsIconSvg = require("url:./assets/img/icons/menu/bars-icon.svg");
var _chevronDownIconSvg = require("url:./assets/img/icons/menu/chevron-down-icon.svg");
var _chevronDownOutlineIconSvg = require("url:./assets/img/icons/menu/chevron-down-outline-icon.svg");
var _gridFillIconSvg = require("url:./assets/img/icons/menu/grid-fill-icon.svg");
var _gridIconSvg = require("url:./assets/img/icons/menu/grid-icon.svg");
var _gridIcon2Svg = require("url:./assets/img/icons/menu/grid-icon2.svg");
var _gridIcon3Svg = require("url:./assets/img/icons/menu/grid-icon3.svg");
// Socials
var _logoFacebookSvg = require("url:./assets/img/icons/socials/logo-facebook.svg");
var _logoGithubSvg = require("url:./assets/img/icons/socials/logo-github.svg");
var _logoInstagramSvg = require("url:./assets/img/icons/socials/logo-instagram.svg");
var _logoLinkedinSvg = require("url:./assets/img/icons/socials/logo-linkedin.svg");
var _logoTwitterSvg = require("url:./assets/img/icons/socials/logo-twitter.svg");
var _logoYoutubeSvg = require("url:./assets/img/icons/socials/logo-youtube.svg");
// User
var _userAvatarSvg = require("url:./assets/img/icons/user/UserAvatar.svg");
var _userAvatarFilledSvg = require("url:./assets/img/icons/user/UserAvatarFilled.svg");
// General
var _faviconSvg = require("url:./assets/img/icons/favicon.svg");
var _searchCircleIconSvg = require("url:./assets/img/icons/search-circle-icon.svg");
var _searchIconFaSvg = require("url:./assets/img/icons/search-icon-fa.svg");
var _searchIconSvg = require("url:./assets/img/icons/search-icon.svg");
var _siteIconSvg = require("url:./assets/img/icons/site-icon.svg");
var _starIconSvg = require("url:./assets/img/icons/star-icon.svg");

},{"./assets/css/main.css":"gdeW1","./assets/css/custom-style.css":"hBIeV","./node_modules/hover.css/css/hover-min.css":"32xVj","./node_modules/animate.css/animate.min.css":"655y7","./node_modules/swiper/swiper-bundle.min.css":"girFM","./assets/js/scripts.js":"1iIjL","@popperjs/core/dist/umd/popper.min.js":"cjdzq","bootstrap/dist/js/bootstrap.bundle.min.js":"gCRej","./node_modules/swiper/swiper-bundle.min":"7Zd86","url:./assets/video/home-illustration.mp4":"gMdIc","url:./assets/img/games/the-witcher-3-wild-hunt.jpeg":"87I6m","url:./assets/img/games/red-dead-redemption-2.jpeg":"hY95v","url:./assets/img/games/god-of-war.jpeg":"8jS5g","url:./assets/img/games/horizon-forbidden-west.jpeg":"ajHvW","url:./assets/img/games/spider-man-miles-morales.jpeg":"eyScG","url:./assets/img/games/sekiro-shadows-die-twice.jpeg":"jgqPo","url:./assets/img/games/resident-evil-village.jpeg":"8rIn7","url:./assets/img/games/cyberpunk-2077.jpeg":"iQywr","url:./assets/img/games/ghost-of-tsushima.jpeg":"a80Bg","url:./assets/img/games/death-stranding.jpeg":"bIBEJ","url:./assets/img/games/control.jpeg":"4ytK5","url:./assets/img/games/doom-eternal.jpeg":"hnK1b","url:./assets/img/games/final-fantasy-vii-remake.jpeg":"7oJsE","url:./assets/img/games/animal-crossing-new-horizons.jpeg":"5ajnB","url:./assets/img/games/ori-and-the-will-of-the-wisps.jpeg":"gZdFg","url:./assets/img/games/forza-horizon-5.jpeg":"1SvCS","url:./assets/img/games/elden-ring.jpeg":"kMBcF","url:./assets/img/games/dark-souls-3.jpeg":"8vw4u","url:./assets/img/games/hades.jpeg":"4dK5V","url:./assets/img/games/persona-5-royal.jpeg":"jGXox","url:./assets/img/games/deathloop.jpeg":"jQCsc","url:./assets/img/games/it-takes-two.jpeg":"1h83y","url:./assets/img/games/ratchet-and-clank-rift-apart.jpeg":"8Hl2E","url:./assets/img/games/demons-souls.jpeg":"3n1vC","url:./assets/img/games/disco-elysium.jpeg":"7cInS","url:./assets/img/games/returnal.jpeg":"lRUBx","url:./assets/img/games/kingdom-come-deliverance-2.jpeg":"iUWR4","url:./assets/img/games/fallout-76.jpeg":"8s8px","url:./assets/img/games/balan-wonderworld.jpeg":"lmypT","url:./assets/img/games/fallout-new-vegas.jpeg":"i4JpA","url:./assets/img/icons/contact/call-icon.svg":"iYCUB","url:./assets/img/icons/contact/home-icon.svg":"9tGIA","url:./assets/img/icons/contact/mail-icon.svg":"3NrAQ","url:./assets/img/icons/contact/print-icon.svg":"9xhnK","url:./assets/img/icons/games-genre/action-icon.svg":"ljlZk","url:./assets/img/icons/games-genre/adventure-icon4.svg":"jd7as","url:./assets/img/icons/games-genre/coop-icon.svg":"3TIjb","url:./assets/img/icons/games-genre/home-icon.svg":"cOb74","url:./assets/img/icons/games-genre/horror-icon.svg":"dncxo","url:./assets/img/icons/games-genre/immersive-sim-icon.svg":"kPUu8","url:./assets/img/icons/games-genre/open-world-icon.svg":"4WiX7","url:./assets/img/icons/games-genre/platformer-icon.svg":"16qL1","url:./assets/img/icons/games-genre/racing-icon2.svg":"aVOSt","url:./assets/img/icons/games-genre/rpg-icon.svg":"ldtyj","url:./assets/img/icons/games-genre/shooter-icon.svg":"8QX0C","url:./assets/img/icons/games-genre/simulation-icon.svg":"7XxTv","url:./assets/img/icons/menu/bars-icon.svg":"kwR3N","url:./assets/img/icons/menu/chevron-down-icon.svg":"bVLyN","url:./assets/img/icons/menu/chevron-down-outline-icon.svg":"1Epqg","url:./assets/img/icons/menu/grid-fill-icon.svg":"6h55n","url:./assets/img/icons/menu/grid-icon.svg":"bsHrE","url:./assets/img/icons/menu/grid-icon2.svg":"426pW","url:./assets/img/icons/menu/grid-icon3.svg":"5SWg9","url:./assets/img/icons/socials/logo-facebook.svg":"cmGjd","url:./assets/img/icons/socials/logo-github.svg":"ty3Up","url:./assets/img/icons/socials/logo-instagram.svg":"kLCLP","url:./assets/img/icons/socials/logo-linkedin.svg":"eza5C","url:./assets/img/icons/socials/logo-twitter.svg":"fddXW","url:./assets/img/icons/socials/logo-youtube.svg":"fNsZm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:./assets/img/icons/favicon.svg":"j0nwl","url:./assets/img/icons/search-circle-icon.svg":"2PCfr","url:./assets/img/icons/search-icon-fa.svg":"eIjoc","url:./assets/img/icons/search-icon.svg":"ercxD","url:./assets/img/icons/site-icon.svg":"9DE15","url:./assets/img/icons/star-icon.svg":"83RH3","url:./assets/img/icons/user/UserAvatar.svg":"1OjTG","url:./assets/img/icons/user/UserAvatarFilled.svg":"4ZL1P"}],"gdeW1":[function() {},{}],"hBIeV":[function() {},{}],"32xVj":[function() {},{}],"655y7":[function() {},{}],"girFM":[function() {},{}],"1iIjL":[function(require,module,exports,__globalThis) {
/* global bootstrap */ /** -- Global variables -- */ const API_URL = "http://gamecurate.local/api/";
/** -- Functions -- */ // Handle dynamic page titling
function handleDynamicHeadersElements() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const pageSettings = {
        Index: {
            title: "Home - GameCurate",
            linkToHighlight: "[data-js-home-link]"
        },
        Login: {
            title: "Logging - GameCurate"
        },
        Register: {
            title: "Resiter - GameCurate"
        },
        "Register-success.php": {
            title: "Succesfuly Registration - GameCurate"
        },
        Profile: {
            title: "Account Profile - GameCurate"
        },
        "Games-list": {
            title: "Games List - GameCurate",
            linkToHighlight: "[data-js-games-link]"
        },
        Contact: {
            title: "Contact - GameCurate",
            linkToHighlight: "[data-js-contact-link]"
        },
        Discover: {
            title: "discover - GameCurate",
            linkToHighlight: "[data-js-discover-link]"
        }
    };
    const settings = pageSettings[page] || {
        title: "Home - GameCurate",
        linkToHighlight: "[data-js-home-link]"
    };
    document.title = settings.title;
    if (settings.linkToHighlight) {
        const linkElement = document.querySelector(settings.linkToHighlight);
        if (linkElement) linkElement.style.fontWeight = "700";
    }
}
// Handle relaying infos from games filter buttons
function gamesFilterBtnListener() {
    const filterButtons = document.querySelectorAll("[data-js-navbar-filter-btns]");
    filterButtons.forEach((button)=>{
        button.addEventListener("click", async ()=>{
            const filterVal = button.querySelector("[data-js-filter-txt]").textContent;
            const cleanedVal = filterVal.toLowerCase();
            try {
                await postData(API_URL + "get_genre_filter.php", cleanedVal);
                // Reload the page after delay when btn is clicked so that php updates the game list
                window.location.href = window.location.pathname;
            } catch (error) {
                console.error("Error during POST request:", error);
            }
        });
    });
}
// Handle displaying loaders for every games image on the games list
function handleGamesListLoaders() {
    const gamesListCellContainers = document.querySelectorAll("[data-js-games-list-cells-container]");
    gamesListCellContainers.forEach((cell)=>{
        const img = cell.querySelector("[data-js-games-list-img]");
        const spinner = cell.querySelector("[data-js-games-list-cells-spinners]");
        const textElements = cell.querySelectorAll("[data-js-games-list-text]");
        if (img && spinner) {
            // Set initial states
            img.style.opacity = "0";
            img.style.transition = "opacity 0.3s ease-in-out";
            // Handle both load and error events
            const handleLoad = ()=>{
                spinner.style.display = "none";
                img.style.opacity = "1";
                textElements.forEach((el)=>el.style.visibility = "visible");
            };
            const handleError = ()=>{
                spinner.style.display = "none";
                img.style.opacity = "0";
                console.error("Error loading image:", img.src);
            };
            // Check if image is already loaded
            if (img.complete) handleLoad();
            else {
                img.addEventListener("load", handleLoad);
                img.addEventListener("error", handleError);
            }
        } else console.warn("Image or spinner not found in cell:", cell);
    });
}
// Used to trigger login success modal
function triggerModal(event) {
    let e = new Event(event);
    document.dispatchEvent(e);
}
handleDynamicHeadersElements();
/** -- SERVER REQUESTS -- */ // functions using Fetch API to send or get data from specified php endpoint
async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const jsonData = await response.json();
        console.log("Debug:", jsonData); //Debug
        return jsonData;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
async function postData(url, data) {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        let result = await response.json();
        console.log("Response from PHP:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}
/** -- HTML-DOM RELATED CODE -- */ document.addEventListener("DOMContentLoaded", function() {
    console.log("-- DOM content loaded --");
    /** - Handle loaders - */ handleGamesListLoaders();
    // Trigger modal on specific event
    document.addEventListener("openLoginSuccessModal", ()=>{
        var myModal = new bootstrap.Modal(document.querySelector("[data-js-login-success-modal]"));
        myModal.show();
    });
    // Display username in account menu
    (async ()=>{
        const userData = await getData(API_URL + "get_username.php");
        if (userData.username) {
            // Show username in account menu
            const cUsername = userData.username.toUpperCase();
            const accountMenuTitle = document.querySelector("[data-js-account-menu-title]");
            accountMenuTitle.textContent = cUsername + " :";
            if (userData.firstLogin) {
                // Trigger login success modal and show username
                var myModal = new bootstrap.Modal(document.querySelector("[data-js-login-success-modal]"));
                myModal.show();
                document.querySelector("[data-js-login-success-modal-text]").textContent = "Welcome " + cUsername + " ! You succesfuly logged in to your account.";
            }
        }
    })();
    gamesFilterBtnListener();
});

},{}],"cjdzq":[function(require,module,exports,__globalThis) {
/**
 * @popperjs/core v2.11.8 - MIT License
 */ !function(e, t) {
    t(exports);
}(this, function(e) {
    "use strict";
    function t(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window;
        }
        return e;
    }
    function n(e) {
        return e instanceof t(e).Element || e instanceof Element;
    }
    function r(e) {
        return e instanceof t(e).HTMLElement || e instanceof HTMLElement;
    }
    function o(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot);
    }
    var i = Math.max, a = Math.min, s = Math.round;
    function f() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
            return e.brand + "/" + e.version;
        }).join(" ") : navigator.userAgent;
    }
    function c() {
        return !/^((?!chrome|android).)*safari/i.test(f());
    }
    function p(e, o, i) {
        void 0 === o && (o = !1), void 0 === i && (i = !1);
        var a = e.getBoundingClientRect(), f = 1, p = 1;
        o && r(e) && (f = e.offsetWidth > 0 && s(a.width) / e.offsetWidth || 1, p = e.offsetHeight > 0 && s(a.height) / e.offsetHeight || 1);
        var u = (n(e) ? t(e) : window).visualViewport, l = !c() && i, d = (a.left + (l && u ? u.offsetLeft : 0)) / f, h = (a.top + (l && u ? u.offsetTop : 0)) / p, m = a.width / f, v = a.height / p;
        return {
            width: m,
            height: v,
            top: h,
            right: d + m,
            bottom: h + v,
            left: d,
            x: d,
            y: h
        };
    }
    function u(e) {
        var n = t(e);
        return {
            scrollLeft: n.pageXOffset,
            scrollTop: n.pageYOffset
        };
    }
    function l(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function d(e) {
        return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
    function h(e) {
        return p(d(e)).left + u(e).scrollLeft;
    }
    function m(e) {
        return t(e).getComputedStyle(e);
    }
    function v(e) {
        var t = m(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
    }
    function y(e, n, o) {
        void 0 === o && (o = !1);
        var i, a, f = r(n), c = r(n) && function(e) {
            var t = e.getBoundingClientRect(), n = s(t.width) / e.offsetWidth || 1, r = s(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r;
        }(n), m = d(n), y = p(e, c, o), g = {
            scrollLeft: 0,
            scrollTop: 0
        }, b = {
            x: 0,
            y: 0
        };
        return (f || !f && !o) && (("body" !== l(n) || v(m)) && (g = (i = n) !== t(i) && r(i) ? {
            scrollLeft: (a = i).scrollLeft,
            scrollTop: a.scrollTop
        } : u(i)), r(n) ? ((b = p(n, !0)).x += n.clientLeft, b.y += n.clientTop) : m && (b.x = h(m))), {
            x: y.left + g.scrollLeft - b.x,
            y: y.top + g.scrollTop - b.y,
            width: y.width,
            height: y.height
        };
    }
    function g(e) {
        var t = p(e), n = e.offsetWidth, r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
        };
    }
    function b(e) {
        return "html" === l(e) ? e : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || d(e);
    }
    function x(e) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(l(e)) >= 0 ? e.ownerDocument.body : r(e) && v(e) ? e : x(b(e));
    }
    function w(e, n) {
        var r;
        void 0 === n && (n = []);
        var o = x(e), i = o === (null == (r = e.ownerDocument) ? void 0 : r.body), a = t(o), s = i ? [
            a
        ].concat(a.visualViewport || [], v(o) ? o : []) : o, f = n.concat(s);
        return i ? f : f.concat(w(b(s)));
    }
    function O(e) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(l(e)) >= 0;
    }
    function j(e) {
        return r(e) && "fixed" !== m(e).position ? e.offsetParent : null;
    }
    function E(e) {
        for(var n = t(e), i = j(e); i && O(i) && "static" === m(i).position;)i = j(i);
        return i && ("html" === l(i) || "body" === l(i) && "static" === m(i).position) ? n : i || function(e) {
            var t = /firefox/i.test(f());
            if (/Trident/i.test(f()) && r(e) && "fixed" === m(e).position) return null;
            var n = b(e);
            for(o(n) && (n = n.host); r(n) && [
                "html",
                "body"
            ].indexOf(l(n)) < 0;){
                var i = m(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                n = n.parentNode;
            }
            return null;
        }(e) || n;
    }
    var D = "top", A = "bottom", L = "right", P = "left", M = "auto", k = [
        D,
        A,
        L,
        P
    ], W = "start", B = "end", H = "viewport", T = "popper", R = k.reduce(function(e, t) {
        return e.concat([
            t + "-" + W,
            t + "-" + B
        ]);
    }, []), S = [].concat(k, [
        M
    ]).reduce(function(e, t) {
        return e.concat([
            t,
            t + "-" + W,
            t + "-" + B
        ]);
    }, []), V = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite"
    ];
    function q(e) {
        var t = new Map, n = new Set, r = [];
        function o(e) {
            n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                if (!n.has(e)) {
                    var r = t.get(e);
                    r && o(r);
                }
            }), r.push(e);
        }
        return e.forEach(function(e) {
            t.set(e.name, e);
        }), e.forEach(function(e) {
            n.has(e.name) || o(e);
        }), r;
    }
    function C(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && o(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host;
            }while (r);
        }
        return !1;
    }
    function N(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        });
    }
    function I(e, r, o) {
        return r === H ? N(function(e, n) {
            var r = t(e), o = d(e), i = r.visualViewport, a = o.clientWidth, s = o.clientHeight, f = 0, p = 0;
            if (i) {
                a = i.width, s = i.height;
                var u = c();
                (u || !u && "fixed" === n) && (f = i.offsetLeft, p = i.offsetTop);
            }
            return {
                width: a,
                height: s,
                x: f + h(e),
                y: p
            };
        }(e, o)) : n(r) ? function(e, t) {
            var n = p(e, !1, "fixed" === t);
            return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
        }(r, o) : N(function(e) {
            var t, n = d(e), r = u(e), o = null == (t = e.ownerDocument) ? void 0 : t.body, a = i(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = i(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), f = -r.scrollLeft + h(e), c = -r.scrollTop;
            return "rtl" === m(o || n).direction && (f += i(n.clientWidth, o ? o.clientWidth : 0) - a), {
                width: a,
                height: s,
                x: f,
                y: c
            };
        }(d(e)));
    }
    function _(e, t, o, s) {
        var f = "clippingParents" === t ? function(e) {
            var t = w(b(e)), o = [
                "absolute",
                "fixed"
            ].indexOf(m(e).position) >= 0 && r(e) ? E(e) : e;
            return n(o) ? t.filter(function(e) {
                return n(e) && C(e, o) && "body" !== l(e);
            }) : [];
        }(e) : [].concat(t), c = [].concat(f, [
            o
        ]), p = c[0], u = c.reduce(function(t, n) {
            var r = I(e, n, s);
            return t.top = i(r.top, t.top), t.right = a(r.right, t.right), t.bottom = a(r.bottom, t.bottom), t.left = i(r.left, t.left), t;
        }, I(e, p, s));
        return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
    }
    function F(e) {
        return e.split("-")[0];
    }
    function U(e) {
        return e.split("-")[1];
    }
    function z(e) {
        return [
            "top",
            "bottom"
        ].indexOf(e) >= 0 ? "x" : "y";
    }
    function X(e) {
        var t, n = e.reference, r = e.element, o = e.placement, i = o ? F(o) : null, a = o ? U(o) : null, s = n.x + n.width / 2 - r.width / 2, f = n.y + n.height / 2 - r.height / 2;
        switch(i){
            case D:
                t = {
                    x: s,
                    y: n.y - r.height
                };
                break;
            case A:
                t = {
                    x: s,
                    y: n.y + n.height
                };
                break;
            case L:
                t = {
                    x: n.x + n.width,
                    y: f
                };
                break;
            case P:
                t = {
                    x: n.x - r.width,
                    y: f
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                };
        }
        var c = i ? z(i) : null;
        if (null != c) {
            var p = "y" === c ? "height" : "width";
            switch(a){
                case W:
                    t[c] = t[c] - (n[p] / 2 - r[p] / 2);
                    break;
                case B:
                    t[c] = t[c] + (n[p] / 2 - r[p] / 2);
            }
        }
        return t;
    }
    function Y(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e);
    }
    function G(e, t) {
        return t.reduce(function(t, n) {
            return t[n] = e, t;
        }, {});
    }
    function J(e, t) {
        void 0 === t && (t = {});
        var r = t, o = r.placement, i = void 0 === o ? e.placement : o, a = r.strategy, s = void 0 === a ? e.strategy : a, f = r.boundary, c = void 0 === f ? "clippingParents" : f, u = r.rootBoundary, l = void 0 === u ? H : u, h = r.elementContext, m = void 0 === h ? T : h, v = r.altBoundary, y = void 0 !== v && v, g = r.padding, b = void 0 === g ? 0 : g, x = Y("number" != typeof b ? b : G(b, k)), w = m === T ? "reference" : T, O = e.rects.popper, j = e.elements[y ? w : m], E = _(n(j) ? j : j.contextElement || d(e.elements.popper), c, l, s), P = p(e.elements.reference), M = X({
            reference: P,
            element: O,
            strategy: "absolute",
            placement: i
        }), W = N(Object.assign({}, O, M)), B = m === T ? W : P, R = {
            top: E.top - B.top + x.top,
            bottom: B.bottom - E.bottom + x.bottom,
            left: E.left - B.left + x.left,
            right: B.right - E.right + x.right
        }, S = e.modifiersData.offset;
        if (m === T && S) {
            var V = S[i];
            Object.keys(R).forEach(function(e) {
                var t = [
                    L,
                    A
                ].indexOf(e) >= 0 ? 1 : -1, n = [
                    D,
                    A
                ].indexOf(e) >= 0 ? "y" : "x";
                R[e] += V[n] * t;
            });
        }
        return R;
    }
    var K = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Q() {
        for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
        });
    }
    function Z(e) {
        void 0 === e && (e = {});
        var t = e, r = t.defaultModifiers, o = void 0 === r ? [] : r, i = t.defaultOptions, a = void 0 === i ? K : i;
        return function(e, t, r) {
            void 0 === r && (r = a);
            var i, s, f = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, K, a),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }, c = [], p = !1, u = {
                state: f,
                setOptions: function(r) {
                    var i = "function" == typeof r ? r(f.options) : r;
                    l(), f.options = Object.assign({}, a, f.options, i), f.scrollParents = {
                        reference: n(e) ? w(e) : e.contextElement ? w(e.contextElement) : [],
                        popper: w(t)
                    };
                    var s, p, d = function(e) {
                        var t = q(e);
                        return V.reduce(function(e, n) {
                            return e.concat(t.filter(function(e) {
                                return e.phase === n;
                            }));
                        }, []);
                    }((s = [].concat(o, f.options.modifiers), p = s.reduce(function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t, e;
                    }, {}), Object.keys(p).map(function(e) {
                        return p[e];
                    })));
                    return f.orderedModifiers = d.filter(function(e) {
                        return e.enabled;
                    }), f.orderedModifiers.forEach(function(e) {
                        var t = e.name, n = e.options, r = void 0 === n ? {} : n, o = e.effect;
                        if ("function" == typeof o) {
                            var i = o({
                                state: f,
                                name: t,
                                instance: u,
                                options: r
                            }), a = function() {};
                            c.push(i || a);
                        }
                    }), u.update();
                },
                forceUpdate: function() {
                    if (!p) {
                        var e = f.elements, t = e.reference, n = e.popper;
                        if (Q(t, n)) {
                            f.rects = {
                                reference: y(t, E(n), "fixed" === f.options.strategy),
                                popper: g(n)
                            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(e) {
                                return f.modifiersData[e.name] = Object.assign({}, e.data);
                            });
                            for(var r = 0; r < f.orderedModifiers.length; r++)if (!0 !== f.reset) {
                                var o = f.orderedModifiers[r], i = o.fn, a = o.options, s = void 0 === a ? {} : a, c = o.name;
                                "function" == typeof i && (f = i({
                                    state: f,
                                    options: s,
                                    name: c,
                                    instance: u
                                }) || f);
                            } else f.reset = !1, r = -1;
                        }
                    }
                },
                update: (i = function() {
                    return new Promise(function(e) {
                        u.forceUpdate(), e(f);
                    });
                }, function() {
                    return s || (s = new Promise(function(e) {
                        Promise.resolve().then(function() {
                            s = void 0, e(i());
                        });
                    })), s;
                }),
                destroy: function() {
                    l(), p = !0;
                }
            };
            if (!Q(e, t)) return u;
            function l() {
                c.forEach(function(e) {
                    return e();
                }), c = [];
            }
            return u.setOptions(r).then(function(e) {
                !p && r.onFirstUpdate && r.onFirstUpdate(e);
            }), u;
        };
    }
    var $ = {
        passive: !0
    };
    var ee = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var n = e.state, r = e.instance, o = e.options, i = o.scroll, a = void 0 === i || i, s = o.resize, f = void 0 === s || s, c = t(n.elements.popper), p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
            return a && p.forEach(function(e) {
                e.addEventListener("scroll", r.update, $);
            }), f && c.addEventListener("resize", r.update, $), function() {
                a && p.forEach(function(e) {
                    e.removeEventListener("scroll", r.update, $);
                }), f && c.removeEventListener("resize", r.update, $);
            };
        },
        data: {}
    };
    var te = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state, n = e.name;
            t.modifiersData[n] = X({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            });
        },
        data: {}
    }, ne = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function re(e) {
        var n, r = e.popper, o = e.popperRect, i = e.placement, a = e.variation, f = e.offsets, c = e.position, p = e.gpuAcceleration, u = e.adaptive, l = e.roundOffsets, h = e.isFixed, v = f.x, y = void 0 === v ? 0 : v, g = f.y, b = void 0 === g ? 0 : g, x = "function" == typeof l ? l({
            x: y,
            y: b
        }) : {
            x: y,
            y: b
        };
        y = x.x, b = x.y;
        var w = f.hasOwnProperty("x"), O = f.hasOwnProperty("y"), j = P, M = D, k = window;
        if (u) {
            var W = E(r), H = "clientHeight", T = "clientWidth";
            if (W === t(r) && "static" !== m(W = d(r)).position && "absolute" === c && (H = "scrollHeight", T = "scrollWidth"), W, i === D || (i === P || i === L) && a === B) M = A, b -= (h && W === k && k.visualViewport ? k.visualViewport.height : W[H]) - o.height, b *= p ? 1 : -1;
            if (i === P || (i === D || i === A) && a === B) j = L, y -= (h && W === k && k.visualViewport ? k.visualViewport.width : W[T]) - o.width, y *= p ? 1 : -1;
        }
        var R, S = Object.assign({
            position: c
        }, u && ne), V = !0 === l ? function(e, t) {
            var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
            return {
                x: s(n * o) / o || 0,
                y: s(r * o) / o || 0
            };
        }({
            x: y,
            y: b
        }, t(r)) : {
            x: y,
            y: b
        };
        return y = V.x, b = V.y, p ? Object.assign({}, S, ((R = {})[M] = O ? "0" : "", R[j] = w ? "0" : "", R.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + b + "px)" : "translate3d(" + y + "px, " + b + "px, 0)", R)) : Object.assign({}, S, ((n = {})[M] = O ? b + "px" : "", n[j] = w ? y + "px" : "", n.transform = "", n));
    }
    var oe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state, n = e.options, r = n.gpuAcceleration, o = void 0 === r || r, i = n.adaptive, a = void 0 === i || i, s = n.roundOffsets, f = void 0 === s || s, c = {
                placement: F(t.placement),
                variation: U(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: o,
                isFixed: "fixed" === t.options.strategy
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, re(Object.assign({}, c, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a,
                roundOffsets: f
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, re(Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: f
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            });
        },
        data: {}
    };
    var ie = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function(e) {
                var n = t.styles[e] || {}, o = t.attributes[e] || {}, i = t.elements[e];
                r(i) && l(i) && (Object.assign(i.style, n), Object.keys(o).forEach(function(e) {
                    var t = o[e];
                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
                }));
            });
        },
        effect: function(e) {
            var t = e.state, n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
                Object.keys(t.elements).forEach(function(e) {
                    var o = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                        return e[t] = "", e;
                    }, {});
                    r(o) && l(o) && (Object.assign(o.style, a), Object.keys(i).forEach(function(e) {
                        o.removeAttribute(e);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    var ae = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(e) {
            var t = e.state, n = e.options, r = e.name, o = n.offset, i = void 0 === o ? [
                0,
                0
            ] : o, a = S.reduce(function(e, n) {
                return e[n] = function(e, t, n) {
                    var r = F(e), o = [
                        P,
                        D
                    ].indexOf(r) >= 0 ? -1 : 1, i = "function" == typeof n ? n(Object.assign({}, t, {
                        placement: e
                    })) : n, a = i[0], s = i[1];
                    return a = a || 0, s = (s || 0) * o, [
                        P,
                        L
                    ].indexOf(r) >= 0 ? {
                        x: s,
                        y: a
                    } : {
                        x: a,
                        y: s
                    };
                }(n, t.rects, i), e;
            }, {}), s = a[t.placement], f = s.x, c = s.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a;
        }
    }, se = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function fe(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return se[e];
        });
    }
    var ce = {
        start: "end",
        end: "start"
    };
    function pe(e) {
        return e.replace(/start|end/g, function(e) {
            return ce[e];
        });
    }
    function ue(e, t) {
        void 0 === t && (t = {});
        var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, f = n.allowedAutoPlacements, c = void 0 === f ? S : f, p = U(r), u = p ? s ? R : R.filter(function(e) {
            return U(e) === p;
        }) : k, l = u.filter(function(e) {
            return c.indexOf(e) >= 0;
        });
        0 === l.length && (l = u);
        var d = l.reduce(function(t, n) {
            return t[n] = J(e, {
                placement: n,
                boundary: o,
                rootBoundary: i,
                padding: a
            })[F(n)], t;
        }, {});
        return Object.keys(d).sort(function(e, t) {
            return d[e] - d[t];
        });
    }
    var le = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state, n = e.options, r = e.name;
            if (!t.modifiersData[r]._skip) {
                for(var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, p = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, y = F(v), g = f || (y === v || !h ? [
                    fe(v)
                ] : function(e) {
                    if (F(e) === M) return [];
                    var t = fe(e);
                    return [
                        pe(e),
                        t,
                        pe(t)
                    ];
                }(v)), b = [
                    v
                ].concat(g).reduce(function(e, n) {
                    return e.concat(F(n) === M ? ue(t, {
                        placement: n,
                        boundary: p,
                        rootBoundary: u,
                        padding: c,
                        flipVariations: h,
                        allowedAutoPlacements: m
                    }) : n);
                }, []), x = t.rects.reference, w = t.rects.popper, O = new Map, j = !0, E = b[0], k = 0; k < b.length; k++){
                    var B = b[k], H = F(B), T = U(B) === W, R = [
                        D,
                        A
                    ].indexOf(H) >= 0, S = R ? "width" : "height", V = J(t, {
                        placement: B,
                        boundary: p,
                        rootBoundary: u,
                        altBoundary: l,
                        padding: c
                    }), q = R ? T ? L : P : T ? A : D;
                    x[S] > w[S] && (q = fe(q));
                    var C = fe(q), N = [];
                    if (i && N.push(V[H] <= 0), s && N.push(V[q] <= 0, V[C] <= 0), N.every(function(e) {
                        return e;
                    })) {
                        E = B, j = !1;
                        break;
                    }
                    O.set(B, N);
                }
                if (j) for(var I = function(e) {
                    var t = b.find(function(t) {
                        var n = O.get(t);
                        if (n) return n.slice(0, e).every(function(e) {
                            return e;
                        });
                    });
                    if (t) return E = t, "break";
                }, _ = h ? 3 : 1; _ > 0; _--){
                    if ("break" === I(_)) break;
                }
                t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function de(e, t, n) {
        return i(e, a(t, n));
    }
    var he = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = void 0 === o || o, f = n.altAxis, c = void 0 !== f && f, p = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.padding, h = n.tether, m = void 0 === h || h, v = n.tetherOffset, y = void 0 === v ? 0 : v, b = J(t, {
                boundary: p,
                rootBoundary: u,
                padding: d,
                altBoundary: l
            }), x = F(t.placement), w = U(t.placement), O = !w, j = z(x), M = "x" === j ? "y" : "x", k = t.modifiersData.popperOffsets, B = t.rects.reference, H = t.rects.popper, T = "function" == typeof y ? y(Object.assign({}, t.rects, {
                placement: t.placement
            })) : y, R = "number" == typeof T ? {
                mainAxis: T,
                altAxis: T
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, T), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
                x: 0,
                y: 0
            };
            if (k) {
                if (s) {
                    var q, C = "y" === j ? D : P, N = "y" === j ? A : L, I = "y" === j ? "height" : "width", _ = k[j], X = _ + b[C], Y = _ - b[N], G = m ? -H[I] / 2 : 0, K = w === W ? B[I] : H[I], Q = w === W ? -H[I] : -B[I], Z = t.elements.arrow, $ = m && Z ? g(Z) : {
                        width: 0,
                        height: 0
                    }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, te = ee[C], ne = ee[N], re = de(0, B[I], $[I]), oe = O ? B[I] / 2 - G - re - te - R.mainAxis : K - re - te - R.mainAxis, ie = O ? -B[I] / 2 + G + re + ne + R.mainAxis : Q + re + ne + R.mainAxis, ae = t.elements.arrow && E(t.elements.arrow), se = ae ? "y" === j ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, fe = null != (q = null == S ? void 0 : S[j]) ? q : 0, ce = _ + ie - fe, pe = de(m ? a(X, _ + oe - fe - se) : X, _, m ? i(Y, ce) : Y);
                    k[j] = pe, V[j] = pe - _;
                }
                if (c) {
                    var ue, le = "x" === j ? D : P, he = "x" === j ? A : L, me = k[M], ve = "y" === M ? "height" : "width", ye = me + b[le], ge = me - b[he], be = -1 !== [
                        D,
                        P
                    ].indexOf(x), xe = null != (ue = null == S ? void 0 : S[M]) ? ue : 0, we = be ? ye : me - B[ve] - H[ve] - xe + R.altAxis, Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ge, je = m && be ? function(e, t, n) {
                        var r = de(e, t, n);
                        return r > n ? n : r;
                    }(we, me, Oe) : de(m ? we : ye, me, m ? Oe : ge);
                    k[M] = je, V[M] = je - me;
                }
                t.modifiersData[r] = V;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    var me = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = F(n.placement), f = z(s), c = [
                P,
                L
            ].indexOf(s) >= 0 ? "height" : "width";
            if (i && a) {
                var p = function(e, t) {
                    return Y("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : e) ? e : G(e, k));
                }(o.padding, n), u = g(i), l = "y" === f ? D : P, d = "y" === f ? A : L, h = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c], m = a[f] - n.rects.reference[f], v = E(i), y = v ? "y" === f ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = h / 2 - m / 2, x = p[l], w = y - u[c] - p[d], O = y / 2 - u[c] / 2 + b, j = de(x, O, w), M = f;
                n.modifiersData[r] = ((t = {})[M] = j, t.centerOffset = j - O, t);
            }
        },
        effect: function(e) {
            var t = e.state, n = e.options.element, r = void 0 === n ? "[data-popper-arrow]" : n;
            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && C(t.elements.popper, r) && (t.elements.arrow = r);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function ve(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        };
    }
    function ye(e) {
        return [
            D,
            L,
            A,
            P
        ].some(function(t) {
            return e[t] >= 0;
        });
    }
    var ge = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(e) {
            var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = J(t, {
                elementContext: "reference"
            }), s = J(t, {
                altBoundary: !0
            }), f = ve(a, r), c = ve(s, o, i), p = ye(f), u = ye(c);
            t.modifiersData[n] = {
                referenceClippingOffsets: f,
                popperEscapeOffsets: c,
                isReferenceHidden: p,
                hasPopperEscaped: u
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": p,
                "data-popper-escaped": u
            });
        }
    }, be = Z({
        defaultModifiers: [
            ee,
            te,
            oe,
            ie
        ]
    }), xe = [
        ee,
        te,
        oe,
        ie,
        ae,
        le,
        he,
        me,
        ge
    ], we = Z({
        defaultModifiers: xe
    });
    e.applyStyles = ie, e.arrow = me, e.computeStyles = oe, e.createPopper = we, e.createPopperLite = be, e.defaultModifiers = xe, e.detectOverflow = J, e.eventListeners = ee, e.flip = le, e.hide = ge, e.offset = ae, e.popperGenerator = Z, e.popperOffsets = te, e.preventOverflow = he, Object.defineProperty(e, "__esModule", {
        value: !0
    });
});

},{}],"gCRej":[function(require,module,exports,__globalThis) {
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    const t = new Map, e = {
        set (e, i, n) {
            t.has(e) || t.set(e, new Map);
            const s = t.get(e);
            s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
        },
        get: (e, i)=>t.has(e) && t.get(e).get(i) || null,
        remove (e, i) {
            if (!t.has(e)) return;
            const n = t.get(e);
            n.delete(i), 0 === n.size && t.delete(e);
        }
    }, i = "transitionend", n = (t)=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e)=>`#${CSS.escape(e)}`)), t), s = (t)=>{
        t.dispatchEvent(new Event(i));
    }, o = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), r = (t)=>o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null, a = (t)=>{
        if (!o(t) || 0 === t.getClientRects().length) return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
        }
        return e;
    }, l = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), c = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    }, h = ()=>{}, d = (t)=>{
        t.offsetHeight;
    }, u = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = ()=>"rtl" === document.documentElement.dir, m = (t)=>{
        var e;
        e = ()=>{
            const e = u();
            if (e) {
                const i = t.NAME, n = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = n, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const t of f)t();
        }), f.push(e)) : e();
    }, g = (t, e = [], i = t)=>"function" == typeof t ? t(...e) : i, _ = (t, e, n = !0)=>{
        if (!n) return void g(t);
        const o = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(e) + 5;
        let r = !1;
        const a = ({ target: n })=>{
            n === e && (r = !0, e.removeEventListener(i, a), g(t));
        };
        e.addEventListener(i, a), setTimeout(()=>{
            r || s(e);
        }, o);
    }, b = (t, e, i, n)=>{
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
    let E = 1;
    const T = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, C = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++;
    }
    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e];
    }
    function k(t, e, i = null) {
        return Object.values(t).find((t)=>t.callable === e && t.delegationSelector === i);
    }
    function L(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            r = t(r);
        }
        const l = x(t), c = l[a] || (l[a] = {}), h = k(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")), u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r } = s; r && r !== this; r = r.parentNode)for (const a of o)if (a === r) return P(s, {
                    delegateTarget: r
                }), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
            };
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return P(n, {
                    delegateTarget: t
                }), i.oneOff && N.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s))o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
    }
    function I(t) {
        return t = t.replace(y, ""), T[t] || t;
    }
    const N = {
        on (t, e, i, n) {
            S(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            S(t, e, i, n, !0);
        },
        off (t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l))$(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)){
                    const s = i.replace(w, "");
                    a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                D(t, l, r, o, s ? i : null);
            }
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null, o = !0, r = !0, a = !1;
            e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = P(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        }
    };
    function P(t, e = {}) {
        for (const [i, n] of Object.entries(e))try {
            t[i] = n;
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: ()=>n
            });
        }
        return t;
    }
    function j(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function M(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const F = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${M(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${M(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t)=>t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i){
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = j(t.dataset[n]);
            }
            return e;
        },
        getDataAttribute: (t, e)=>j(t.getAttribute(`data-bs-${M(e)}`))
    };
    class H {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? F.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [n, s] of Object.entries(e)){
                const e = t[n], r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`);
            }
            var i;
        }
    }
    class W extends H {
        constructor(t, i){
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i);
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.3";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const B = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e ? e.split(",").map((t)=>n(t)).join(",") : null;
    }, z = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for(; n;)i.push(n), n = n.parentNode.closest(e);
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter((t)=>!l(t) && a(t));
        },
        getSelectorFromElement (t) {
            const e = B(t);
            return e && z.findOne(e) ? e : null;
        },
        getElementFromSelector (t) {
            const e = B(t);
            return e ? z.findOne(e) : null;
        },
        getMultipleElementsFromSelector (t) {
            const e = B(t);
            return e ? z.find(e) : [];
        }
    }, R = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
        N.on(document, i, `[data-bs-dismiss="${n}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
        });
    }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
    class Q extends W {
        static get NAME() {
            return "alert";
        }
        close() {
            if (N.trigger(this._element, V).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    N.on(document, "click.bs.button.data-api", X, (t)=>{
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle();
    }), m(Y);
    const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }, nt = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class st extends H {
        constructor(t, e){
            super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
            return it;
        }
        static get DefaultType() {
            return nt;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            N.off(this._element, U);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t)=>this._start(t)), N.on(this._element, et, (t)=>this._end(t)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t)=>this._start(t)), N.on(this._element, J, (t)=>this._move(t)), N.on(this._element, Z, (t)=>this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`, ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`, _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active", At = ".carousel-item", Et = wt + At, Tt = {
        ArrowLeft: ht,
        ArrowRight: ct
    }, Ct = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }, Ot = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class xt extends W {
        constructor(t, e){
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle();
        }
        static get Default() {
            return Ct;
        }
        static get DefaultType() {
            return Ot;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(at);
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
        }
        prev() {
            this._slide(lt);
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, ()=>this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void N.one(this._element, ut, ()=>this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? at : lt;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t;
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t)=>this._keydown(t)), "hover" === this._config.pause && (N.on(this._element, pt, ()=>this.pause()), N.on(this._element, mt, ()=>this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element))N.on(t, gt, (t)=>t.preventDefault());
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(ct)),
                rightCallback: ()=>this._slide(this._directionToOrder(ht)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval));
                }
            };
            this._swipeHelper = new st(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Tt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = z.findOne(wt, this._indicatorsElement);
            e.classList.remove(yt), e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === at, s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s), r = (e)=>N.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(dt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(()=>{
                s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut);
            }, i, this._isAnimated()), a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return z.findOne(Et, this._element);
        }
        _getItems() {
            return z.find(At, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t) {
            return p() ? t === ct ? lt : at : t === ct ? at : lt;
        }
        _orderToDirection(t) {
            return p() ? t === lt ? ct : ht : t === lt ? ht : ct;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(vt)) return;
        t.preventDefault();
        const i = xt.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }), N.on(window, _t, ()=>{
        const t = z.find('[data-bs-ride="carousel"]');
        for (const e of t)xt.getOrCreateInstance(e);
    }), m(xt);
    const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`, It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", jt = "collapsing", Mt = `:scope .${Pt} .${Pt}`, Ft = '[data-bs-toggle="collapse"]', Ht = {
        parent: null,
        toggle: !0
    }, Wt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class Bt extends W {
        constructor(t, e){
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = z.find(Ft);
            for (const t of i){
                const e = z.getSelectorFromElement(t), i = z.find(e).filter((t)=>t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return Ht;
        }
        static get DefaultType() {
            return Wt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t)=>t !== this._element).map((t)=>Bt.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            if (N.trigger(this._element, Lt).defaultPrevented) return;
            for (const e of t)e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(jt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(jt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St);
            }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (N.trigger(this._element, Dt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(jt), this._element.classList.remove(Pt, Nt);
            for (const t of this._triggerArray){
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([
                    t
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(jt), this._element.classList.add(Pt), N.trigger(this._element, $t);
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(Nt);
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Ft);
            for (const e of t){
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = z.find(Mt, this._config.parent);
            return z.find(t, this._config.parent).filter((t)=>!e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t)i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                const i = Bt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    N.on(document, It, Ft, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle();
    }), m(Bt);
    var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [
        zt,
        Rt,
        qt,
        Vt
    ], Xt = "start", Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference", te = Qt.reduce(function(t, e) {
        return t.concat([
            e + "-" + Xt,
            e + "-" + Yt
        ]);
    }, []), ee = [].concat(Qt, [
        Kt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + Xt,
            e + "-" + Yt
        ]);
    }, []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain", le = "beforeWrite", ce = "write", he = "afterWrite", de = [
        ie,
        ne,
        se,
        oe,
        re,
        ae,
        le,
        ce,
        he
    ];
    function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function fe(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element;
    }
    function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
    }
    function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const _e = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function(t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t) {
            var e = t.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t) {
                    var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {});
                    me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function be(t) {
        return t.split("-")[0];
    }
    var ve = Math.max, ye = Math.min, we = Math.round;
    function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
            return t.brand + "/" + t.version;
        }).join(" ") : navigator.userAgent;
    }
    function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae());
    }
    function Te(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), s = 1, o = 1;
        e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
        var r = (pe(t) ? fe(t) : window).visualViewport, a = !Ee() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s, c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        };
    }
    function Ce(t) {
        var e = Te(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ge(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n);
        }
        return !1;
    }
    function xe(t) {
        return fe(t).getComputedStyle(t);
    }
    function ke(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(ue(t)) >= 0;
    }
    function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
    }
    function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null;
    }
    function $e(t) {
        for(var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;)i = De(i);
        return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
            var i = Se(t);
            for(ge(i) && (i = i.host); me(i) && [
                "html",
                "body"
            ].indexOf(ue(i)) < 0;){
                var n = xe(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        }(t) || e;
    }
    function Ie(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    function Ne(t, e, i) {
        return ve(t, ye(e, i));
    }
    function Pe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function je(t, e) {
        return e.reduce(function(e, i) {
            return e[i] = t, e;
        }, {});
    }
    const Me = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = be(i.placement), l = Ie(a), c = [
                Vt,
                qt
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : je(t, Qt));
                }(s.padding, i), d = Ce(o), u = "y" === l ? zt : Vt, f = "y" === l ? Rt : qt, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = $e(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = Ne(v, w, y), E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function Fe(t) {
        return t.split("-")[1];
    }
    var He = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function We(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({
            x: f,
            y: m
        }) : {
            x: f,
            y: m
        };
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = Vt, y = zt, w = window;
        if (c) {
            var A = $e(i), E = "clientHeight", T = "clientWidth";
            A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
        }
        var C, O = Object.assign({
            position: a
        }, c && He), x = !0 === h ? function(t, e) {
            var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
            return {
                x: we(i * s) / s || 0,
                y: we(n * s) / s || 0
            };
        }({
            x: f,
            y: m
        }, fe(i)) : {
            x: f,
            y: m
        };
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
    }
    const Be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: be(e.placement),
                variation: Fe(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {}
    };
    var ze = {
        passive: !0
    };
    const Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = fe(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, ze);
            }), a && l.addEventListener("resize", i.update, ze), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, ze);
                }), a && l.removeEventListener("resize", i.update, ze);
            };
        },
        data: {}
    };
    var qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Ve(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return qe[t];
        });
    }
    var Ke = {
        start: "end",
        end: "start"
    };
    function Qe(t) {
        return t.replace(/start|end/g, function(t) {
            return Ke[t];
        });
    }
    function Xe(t) {
        var e = fe(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft;
    }
    function Ue(t) {
        var e = xe(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ge(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t));
    }
    function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = fe(n), r = s ? [
            o
        ].concat(o.visualViewport || [], Ue(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)));
    }
    function Ze(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function ti(t, e, i) {
        return e === Gt ? Ze(function(t, e) {
            var i = fe(t), n = Le(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Ee();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
            }
            return {
                width: o,
                height: r,
                x: a + Ye(t),
                y: l
            };
        }(t, i)) : pe(e) ? function(t, e) {
            var i = Te(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
        }(e, i) : Ze(function(t) {
            var e, i = Le(t), n = Xe(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ye(t), l = -n.scrollTop;
            return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(Le(t)));
    }
    function ei(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? be(s) : null, r = s ? Fe(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case zt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case Rt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case qt:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case Vt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case Xt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Yt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ii(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy, r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Ut : a, c = i.rootBoundary, h = void 0 === c ? Gt : c, d = i.elementContext, u = void 0 === d ? Jt : d, f = i.altBoundary, p = void 0 !== f && f, m = i.padding, g = void 0 === m ? 0 : m, _ = Pe("number" != typeof g ? g : je(g, Qt)), b = u === Jt ? Zt : Jt, v = t.rects.popper, y = t.elements[p ? b : u], w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = Je(Se(t)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
                return pe(i) ? e.filter(function(t) {
                    return pe(t) && Oe(t, i) && "body" !== ue(t);
                }) : [];
            }(t) : [].concat(e), o = [].concat(s, [
                i
            ]), r = o[0], a = o.reduce(function(e, i) {
                var s = ti(t, i, n);
                return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e;
            }, ti(t, r, n));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r), A = Te(t.elements.reference), E = ei({
            reference: A,
            element: v,
            strategy: "absolute",
            placement: s
        }), T = Ze(Object.assign({}, v, E)), C = u === Jt ? T : A, O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }, x = t.modifiersData.offset;
        if (u === Jt && x) {
            var k = x[s];
            Object.keys(O).forEach(function(t) {
                var e = [
                    qt,
                    Rt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    zt,
                    Rt
                ].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function ni(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? ee : l, h = Fe(n), d = h ? a ? te : te.filter(function(t) {
            return Fe(t) === h;
        }) : Qt, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = ii(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[be(i)], e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const si = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for(var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
                    if (be(t) === Kt) return [];
                    var e = Ve(t);
                    return [
                        Qe(t),
                        e,
                        Qe(e)
                    ];
                }(g) : [
                    Ve(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(be(i) === Kt ? ni(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++){
                    var O = v[C], x = be(O), k = Fe(O) === Xt, L = [
                        zt,
                        Rt
                    ].indexOf(x) >= 0, S = L ? "width" : "height", D = ii(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), $ = L ? k ? qt : Vt : k ? Rt : zt;
                    y[S] > w[S] && ($ = Ve($));
                    var I = Ve($), N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function(t) {
                        return t;
                    })) {
                        T = O, E = !1;
                        break;
                    }
                    A.set(O, N);
                }
                if (E) for(var P = function(t) {
                    var e = v.find(function(e) {
                        var i = A.get(e);
                        if (i) return i.slice(0, t).every(function(t) {
                            return t;
                        });
                    });
                    if (e) return T = e, "break";
                }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function oi(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function ri(t) {
        return [
            zt,
            qt,
            Rt,
            Vt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const ai = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = ii(e, {
                elementContext: "reference"
            }), a = ii(e, {
                altBoundary: !0
            }), l = oi(r, n), c = oi(a, s, o), h = ri(l), d = ri(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, li = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [
                0,
                0
            ] : s, r = ee.reduce(function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = be(t), s = [
                        Vt,
                        zt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        Vt,
                        qt
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                }(i, e.rects, o), t;
            }, {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
        }
    }, ci = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = ei({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            });
        },
        data: {}
    }, hi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = ii(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = be(e.placement), b = Fe(e.placement), v = !b, y = Ie(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets, E = e.rects.reference, T = e.rects.popper, C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m, O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, S = "y" === y ? zt : Vt, D = "y" === y ? Rt : qt, $ = "y" === y ? "height" : "width", I = A[y], N = I + g[S], P = I - g[D], j = f ? -T[$] / 2 : 0, M = b === Xt ? E[$] : T[$], F = b === Xt ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? Ce(H) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = B[S], R = B[D], q = Ne(0, E[$], W[$]), V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis, K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis, Q = e.elements.arrow && $e(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y, G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
                    A[y] = G, k[y] = G - I;
                }
                if (a) {
                    var J, Z = "x" === y ? zt : Vt, tt = "x" === y ? Rt : qt, et = A[w], it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt], ot = -1 !== [
                        zt,
                        Vt
                    ].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = Ne(t, e, i);
                        return n > i ? i : n;
                    }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
                    A[w] = ct, k[w] = ct - et;
                }
                e.modifiersData[n] = k;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function di(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = me(e), r = me(e) && function(t) {
            var e = t.getBoundingClientRect(), i = we(e.width) / t.offsetWidth || 1, n = we(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n;
        }(e), a = Le(e), l = Te(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        };
    }
    function ui(t) {
        var e = new Map, i = new Set, n = [];
        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n.push(t);
        }
        return t.forEach(function(t) {
            e.set(t.name, t);
        }), t.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n;
    }
    var fi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function pi() {
        for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function mi(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? fi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, fi, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                        reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                        popper: Je(e)
                    };
                    var r, c, u = function(t) {
                        var e = ui(t);
                        return de.reduce(function(t, i) {
                            return t.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t;
                    }, {}), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {});
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (pi(e, i)) {
                            a.rects = {
                                reference: di(e, $e(i), "fixed" === a.options.strategy),
                                popper: Ce(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r || (r = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r = void 0, t(s());
                        });
                    })), r;
                }),
                destroy: function() {
                    d(), c = !0;
                }
            };
            if (!pi(t, e)) return h;
            function d() {
                l.forEach(function(t) {
                    return t();
                }), l = [];
            }
            return h.setOptions(i).then(function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }), h;
        };
    }
    var gi = mi(), _i = mi({
        defaultModifiers: [
            Re,
            ci,
            Be,
            _e
        ]
    }), bi = mi({
        defaultModifiers: [
            Re,
            ci,
            Be,
            _e,
            li,
            si,
            hi,
            Me,
            ai
        ]
    });
    const vi = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: ae,
        afterRead: se,
        afterWrite: he,
        applyStyles: _e,
        arrow: Me,
        auto: Kt,
        basePlacements: Qt,
        beforeMain: oe,
        beforeRead: ie,
        beforeWrite: le,
        bottom: Rt,
        clippingParents: Ut,
        computeStyles: Be,
        createPopper: bi,
        createPopperBase: gi,
        createPopperLite: _i,
        detectOverflow: ii,
        end: Yt,
        eventListeners: Re,
        flip: si,
        hide: ai,
        left: Vt,
        main: re,
        modifierPhases: de,
        offset: li,
        placements: ee,
        popper: Jt,
        popperGenerator: mi,
        popperOffsets: ci,
        preventOverflow: hi,
        read: ne,
        reference: Zt,
        right: qt,
        start: Xt,
        top: zt,
        variationPlacements: te,
        viewport: Gt,
        write: ce
    }, Symbol.toStringTag, {
        value: "Module"
    })), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp", Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show", Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu", ji = p() ? "top-end" : "top-start", Mi = p() ? "top-start" : "top-end", Fi = p() ? "bottom-end" : "bottom-start", Hi = p() ? "bottom-start" : "bottom-end", Wi = p() ? "left-start" : "right-start", Bi = p() ? "right-start" : "left-start", zi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    }, Ri = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class qi extends W {
        constructor(t, e){
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return zi;
        }
        static get DefaultType() {
            return Ri;
        }
        static get NAME() {
            return yi;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children))N.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!N.trigger(this._element, Ci, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = bi(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains($i);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Wi;
            if (t.classList.contains("dropstart")) return Bi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Mi : ji : e ? Hi : Fi;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ...g(this._config.popperConfig, [
                    t
                ])
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t)=>a(t));
            i.length && b(i, e, t === Ti, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = z.find(Ni);
            for (const i of e){
                const e = qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [
                Ei,
                Ti
            ].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode), o = qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function(t) {
        t.preventDefault(), qi.getOrCreateInstance(this).toggle();
    }), m(qi);
    const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`, Xi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }, Yi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Ui extends H {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        static get Default() {
            return Xi;
        }
        static get DefaultType() {
            return Yi;
        }
        static get NAME() {
            return Vi;
        }
        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(()=>{
                g(t);
            });
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(()=>{
                this.dispose(), g(t);
            })) : g(t);
        }
        dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), N.on(t, Qi, ()=>{
                g(this._config.clickCallback);
            }), this._isAppended = !0;
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn = "backward", en = {
        autofocus: !0,
        trapElement: null
    }, nn = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class sn extends H {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
            return en;
        }
        static get DefaultType() {
            return nn;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t)=>this._handleFocusin(t)), N.on(document, Zi, (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, N.off(document, Gi));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
        }
    }
    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn = ".sticky-top", an = "padding-right", ln = "margin-right";
    class cn {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e)=>e + t), this._setElementAttributes(on, an, (e)=>e + t), this._setElementAttributes(rn, ln, (e)=>e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else for (const i of z.find(t, this._element))e(i);
        }
    }
    const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static", Tn = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }, Cn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class On extends W {
        constructor(t, e){
            super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn, this._addEventListeners();
        }
        static get Default() {
            return Tn;
        }
        static get DefaultType() {
            return Cn;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(()=>this._showElement(t)));
        }
        hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Ui({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {
                    relatedTarget: t
                });
            }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            N.on(this._element, vn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), N.on(window, gn, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }), N.on(this._element, bn, (t)=>{
                N.one(this._element, _n, (e)=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
            });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(()=>{
                this._element.classList.remove(En), this._queueCallback(()=>{
                    this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    N.on(document, yn, '[data-bs-toggle="modal"]', function(t) {
        const e = z.getElementFromSelector(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), N.one(e, pn, (t)=>{
            t.defaultPrevented || N.one(e, fn, ()=>{
                a(this) && this.focus();
            });
        });
        const i = z.findOne(".modal.show");
        i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
    }), R(On), m(On);
    const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, jn = `hide${xn}`, Mn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`, zn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Rn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class qn extends W {
        constructor(t, e){
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
            return zn;
        }
        static get DefaultType() {
            return Rn;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || N.trigger(this._element, Nn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new cn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (N.trigger(this._element, jn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new cn).reset(), N.trigger(this._element, Fn);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ui({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Mn);
                } : null
            });
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            N.on(this._element, Bn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Mn));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t) {
        const e = z.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this)) return;
        N.one(e, Fn, ()=>{
            a(this) && this.focus();
        });
        const i = z.findOne(In);
        i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
    }), N.on(window, Ln, ()=>{
        for (const t of z.find(In))qn.getOrCreateInstance(t).show();
    }), N.on(window, Hn, ()=>{
        for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide();
    }), R(qn), m(qn);
    const Vn = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            /^aria-[\w-]*$/i
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, Kn = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t)=>t instanceof RegExp).some((t)=>t.test(i));
    }, Yn = {
        allowList: Vn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, Un = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, Gn = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Jn extends H {
        constructor(t){
            super(), this._config = this._getConfig(t);
        }
        static get Default() {
            return Yn;
        }
        static get DefaultType() {
            return Un;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content).map((t)=>this._resolvePossibleFunction(t)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))super._typeCheckConfig({
                selector: e,
                entry: i
            }, Gn);
        }
        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s){
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue;
                    }
                    const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)Xn(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
            }(t, this._config.allowList, this._config.sanitizeFn) : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [
                this
            ]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Zn = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), ts = "fade", es = "show", is = ".modal", ns = "hide.bs.modal", ss = "hover", os = "focus", rs = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
    }, as = {
        allowList: Vn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: !1,
        offset: [
            0,
            6
        ],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, ls = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class cs extends W {
        constructor(t, e){
            if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
            return as;
        }
        static get DefaultType() {
            return ls;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = N.trigger(this._element, this.constructor.eventName("show")), e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: n } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.on(t, "mouseover", h);
            this._queueCallback(()=>{
                N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
            }, this.tip, this._isAnimated());
        }
        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.off(t, "mouseover", h);
                this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
                }, this.tip, this._isAnimated());
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t)=>{
                do t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(es);
        }
        _createPopper(t) {
            const e = g(this._config.placement, [
                this,
                t,
                this._element
            ]), i = rs[e.toUpperCase()];
            return bi(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [
                this._element
            ]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t)=>{
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        }
                    }
                ]
            };
            return {
                ...e,
                ...g(this._config.popperConfig, [
                    e
                ])
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t)=>{
                this._initializeOnDelegatedTarget(t).toggle();
            });
            else if ("manual" !== e) {
                const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter();
                }), N.on(this._element, i, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave();
                });
            }
            this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, N.on(this._element.closest(is), ns, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(()=>{
                this._isHovered && this.show();
            }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(()=>{
                this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e))Zn.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config))this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(cs);
    const hs = {
        ...cs.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, ds = {
        ...cs.DefaultType,
        content: "(null|string|element|function)"
    };
    class us extends cs {
        static get Default() {
            return hs;
        }
        static get DefaultType() {
            return ds;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(us);
    const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active", bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`, ws = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [
            .1,
            .5,
            1
        ]
    }, As = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class Es extends W {
        constructor(t, e){
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh();
        }
        static get Default() {
            return ws;
        }
        static get DefaultType() {
            return As;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t)=>Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t)=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n;
                }
            }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t)=>this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t)=>this._targetLinks.get(`#${t.target.id}`), i = (t)=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
            }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t){
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = z.find(bs, this._config.target);
            for (const e of t){
                if (!e.hash || l(e)) continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
            else for (const e of z.parents(t, ".nav, .list-group"))for (const t of z.prev(e, ys))t.classList.add(_s);
        }
        _clearActiveClass(t) {
            t.classList.remove(_s);
            const e = z.find(`${bs}.${_s}`, t);
            for (const t of e)t.classList.remove(_s);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(window, gs, ()=>{
        for (const t of z.find('[data-bs-spy="scroll"]'))Es.getOrCreateInstance(t);
    }), m(Es);
    const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown", js = "Home", Ms = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ".dropdown-toggle", zs = `:not(${Bs})`, Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`, Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W {
        constructor(t){
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t)=>this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? N.trigger(e, Cs, {
                relatedTarget: t
            }) : null;
            N.trigger(t, xs, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {
                    relatedTarget: e
                })) : t.classList.add(Ws);
            }, t, t.classList.contains(Hs)));
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {
                    relatedTarget: e
                })) : t.classList.remove(Ws);
            }, t, t.classList.contains(Hs)));
        }
        _keydown(t) {
            if (![
                $s,
                Is,
                Ns,
                Ps,
                js,
                Ms
            ].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t)=>!l(t));
            let i;
            if ([
                js,
                Ms
            ].includes(t.key)) i = e[t.key === js ? 0 : e.length - 1];
            else {
                const n = [
                    Is,
                    Ps
                ].includes(t.key);
                i = b(e, t.target, n, !0);
            }
            i && (i.focus({
                preventScroll: !0
            }), Ks.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return z.find(qs, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t)=>this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n)=>{
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Fs);
        }
        _getInnerElement(t) {
            return t.matches(qs) ? t : z.findOne(qs, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ks.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(document, Ls, Rs, function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
    }), N.on(window, Ds, ()=>{
        for (const t of z.find(Vs))Ks.getOrCreateInstance(t);
    }), m(Ks);
    const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Ys = `mouseout${Qs}`, Us = `focusin${Qs}`, Gs = `focusout${Qs}`, Js = `hide${Qs}`, Zs = `hidden${Qs}`, to = `show${Qs}`, eo = `shown${Qs}`, io = "hide", no = "show", so = "showing", oo = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, ro = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class ao extends W {
        constructor(t, e){
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
            return ro;
        }
        static get DefaultType() {
            return oo;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(()=>{
                this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(()=>{
                this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(no);
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            N.on(this._element, Xs, (t)=>this._onInteraction(t, !0)), N.on(this._element, Ys, (t)=>this._onInteraction(t, !1)), N.on(this._element, Us, (t)=>this._onInteraction(t, !0)), N.on(this._element, Gs, (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return R(ao), m(ao), {
        Alert: Q,
        Button: Y,
        Carousel: xt,
        Collapse: Bt,
        Dropdown: qi,
        Modal: On,
        Offcanvas: qn,
        Popover: us,
        ScrollSpy: Es,
        Tab: Ks,
        Toast: ao,
        Tooltip: cs
    };
});

},{}],"7Zd86":[function(require,module,exports,__globalThis) {
/**
 * Swiper 11.2.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 14, 2025
 */ var Swiper = function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {});
        const i = [
            "__proto__",
            "constructor",
            "prototype"
        ];
        Object.keys(a).filter((e)=>i.indexOf(e) < 0).forEach((i)=>{
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
        });
    }
    const s = {
        body: {},
        addEventListener () {},
        removeEventListener () {},
        activeElement: {
            blur () {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
                initEvent () {}
            }),
        createElement: ()=>({
                children: [],
                childNodes: [],
                style: {},
                setAttribute () {},
                getElementsByTagName: ()=>[]
            }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e;
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState () {},
            pushState () {},
            go () {},
            back () {}
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener () {},
        removeEventListener () {},
        getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            }),
        Image () {},
        Date () {},
        screen: {},
        setTimeout () {},
        clearTimeout () {},
        matchMedia: ()=>({}),
        requestAnimationFrame: (e)=>"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e;
    }
    function n(e) {
        return void 0 === e && (e = ""), e.trim().split(" ").filter((e)=>!!e.trim());
    }
    function l(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function o() {
        return Date.now();
    }
    function d(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e)=>e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }
    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function p() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = [
            "__proto__",
            "constructor",
            "prototype"
        ];
        for(let a = 1; a < arguments.length; a += 1){
            const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const s = Object.keys(Object(i)).filter((e)=>t.indexOf(e) < 0);
                for(let t = 0, a = s.length; t < a; t += 1){
                    const a = s[t], r = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a]);
                }
            }
        }
        var s;
        return e;
    }
    function u(e, t, s) {
        e.style.setProperty(t, s);
    }
    function m(e) {
        let { swiper: t, targetPosition: s, side: a } = e;
        const i = r(), n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev", p = (e, t)=>"next" === c && e >= t || "prev" === c && e <= t, u = ()=>{
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [a]: c
            }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(()=>{
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                    [a]: c
                });
            }), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u);
        };
        u();
    }
    function h(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
    }
    function f(e, t) {
        void 0 === t && (t = "");
        const s = r(), a = [
            ...e.children
        ];
        return s.HTMLSlotElement && e instanceof HTMLSlotElement && a.push(...e.assignedElements()), t ? a.filter((e)=>e.matches(t)) : a;
    }
    function g(e) {
        try {
            return void console.warn(e);
        } catch (e) {}
    }
    function v(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : n(t)), s;
    }
    function w(e) {
        const t = r(), s = a(), i = e.getBoundingClientRect(), n = s.body, l = e.clientTop || n.clientTop || 0, o = e.clientLeft || n.clientLeft || 0, d = e === t ? t.scrollY : e.scrollTop, c = e === t ? t.scrollX : e.scrollLeft;
        return {
            top: i.top + d - l,
            left: i.left + c - o
        };
    }
    function b(e, t) {
        return r().getComputedStyle(e, null).getPropertyValue(t);
    }
    function y(e) {
        let t, s = e;
        if (s) {
            for(t = 0; null !== (s = s.previousSibling);)1 === s.nodeType && (t += 1);
            return t;
        }
    }
    function E(e, t) {
        const s = [];
        let a = e.parentElement;
        for(; a;)t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
        return s;
    }
    function x(e, t) {
        t && e.addEventListener("transitionend", function s(a) {
            a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s));
        });
    }
    function S(e, t, s) {
        const a = r();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
    }
    function T(e) {
        return (Array.isArray(e) ? e : [
            e
        ]).filter((e)=>!!e);
    }
    function M(e) {
        return (t)=>Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 == 0 ? t + .001 : t;
    }
    let C, P, L;
    function I() {
        return C || (C = function() {
            const e = r(), t = a();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            };
        }()), C;
    }
    function z(e) {
        return void 0 === e && (e = {}), P || (P = function(e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = I(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent, l = {
                ios: !1,
                android: !1
            }, o = a.screen.width, d = a.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810"
            ].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [
                0,
                1,
                "13_0_0"
            ]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l;
        }(e)), P;
    }
    function A() {
        return L || (L = function() {
            const e = r(), t = z();
            let s = !1;
            function a() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
            }
            if (a()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    const [e, a] = t.split("Version/")[1].split(" ")[0].split(".").map((e)=>Number(e));
                    s = e < 16 || 16 === e && a < 2;
                }
            }
            const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), n = a();
            return {
                isSafari: s || n,
                needPerspectiveFix: s,
                need3dFix: n || i && t.ios,
                isWebView: i
            };
        }()), L;
    }
    var $ = {
        on (e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e)=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
            }), a;
        },
        once (e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for(var s = arguments.length, r = new Array(s), n = 0; n < s; n++)r[n] = arguments[n];
                t.apply(a, r);
            }
            return i.__emitterProxy = t, a.on(e, i, s);
        },
        onAny (e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
        },
        offAny (e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off (e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e)=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i)=>{
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
                });
            }), s) : s;
        },
        emit () {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for(var i = arguments.length, r = new Array(i), n = 0; n < i; n++)r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t)=>{
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e)=>{
                    e.apply(a, [
                        t,
                        ...s
                    ]);
                }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e)=>{
                    e.apply(a, s);
                });
            }), e;
        }
    };
    const k = (e, t, s)=>{
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
    };
    const O = (e, t, s)=>{
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
    };
    const D = (e, t)=>{
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
        if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
                s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove());
            })), t && t.remove();
        }
    }, G = (e, t)=>{
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
    }, H = (e)=>{
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const s = i, r = [
                s - t
            ];
            return r.push(...Array.from({
                length: t
            }).map((e, t)=>s + a + t)), void e.slides.forEach((t, s)=>{
                r.includes(t.column) && G(e, s);
            });
        }
        const r = i + a - 1;
        if (e.params.rewind || e.params.loop) for(let a = i - t; a <= r + t; a += 1){
            const t = (a % s + s) % s;
            (t < i || t > r) && G(e, t);
        }
        else for(let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)a !== i && (a > r || a < i) && G(e, a);
    };
    var X = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10), s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }));
        },
        updateSlides: function() {
            const e = this;
            function t(t, s) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
            }
            const s = e.params, { wrapperEl: a, slidesEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e, o = e.virtual && s.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, c = f(i, `.${e.params.slideClass}, swiper-slide`), p = o ? e.virtual.slides.length : c.length;
            let m = [];
            const h = [], g = [];
            let v = s.slidesOffsetBefore;
            "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
            let w = s.slidesOffsetAfter;
            "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length, E = e.slidesGrid.length;
            let x = s.spaceBetween, T = -v, M = 0, C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)), e.virtualSize = -x, c.forEach((e)=>{
                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
            }), s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
            const P = s.grid && s.grid.rows > 1 && e.grid;
            let L;
            P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const I = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e)=>void 0 !== s.breakpoints[e].slidesPerView).length > 0;
            for(let a = 0; a < p; a += 1){
                let i;
                if (L = 0, c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display")) {
                    if ("auto" === s.slidesPerView) {
                        I && (c[a].style[e.getDirectionLabel("width")] = "");
                        const r = getComputedStyle(i), n = i.style.transform, l = i.style.webkitTransform;
                        if (n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
                        else {
                            const e = t(r, "width"), s = t(r, "padding-left"), a = t(r, "padding-right"), n = t(r, "margin-left"), l = t(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) L = e + n + l;
                            else {
                                const { clientWidth: t, offsetWidth: r } = i;
                                L = e + s + a + n + l + (r - t);
                            }
                        }
                        n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L));
                    } else L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
                    c[a] && (c[a].swiperSlideSize = L), g.push(L), s.centeredSlides ? (T = T + L / 2 + M / 2 + x, 0 === M && 0 !== a && (T = T - r / 2 - x), 0 === a && (T = T - r / 2 - x), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && m.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), T = T + L + x), e.virtualSize += L + x, M = L, C += 1;
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + w, n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize + x}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`), P && e.grid.updateWrapperSize(L, m), !s.centeredSlides) {
                const t = [];
                for(let a = 0; a < m.length; a += 1){
                    let i = m[a];
                    s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i);
                }
                m = t, Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r);
            }
            if (o && s.loop) {
                const t = g[0] + x;
                if (s.slidesPerGroup > 1) {
                    const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup), i = t * s.slidesPerGroup;
                    for(let e = 0; e < a; e += 1)m.push(m[m.length - 1] + i);
                }
                for(let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1)1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t;
            }
            if (0 === m.length && (m = [
                0
            ]), 0 !== x) {
                const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter((e, t)=>!(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e)=>{
                    e.style[t] = `${x}px`;
                });
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t)=>{
                    e += t + (x || 0);
                }), e -= x;
                const t = e > r ? e - r : 0;
                m = m.map((e)=>e <= 0 ? -v : e > t ? t + w : e);
            }
            if (s.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t)=>{
                    e += t + (x || 0);
                }), e -= x;
                const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < r) {
                    const s = (r - e - t) / 2;
                    m.forEach((e, t)=>{
                        m[t] = e - s;
                    }), h.forEach((e, t)=>{
                        h[t] = e + s;
                    });
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: m,
                slidesGrid: h,
                slidesSizesGrid: g
            }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                const t = -e.snapGrid[0], s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e)=>e + t), e.slidesGrid = e.slidesGrid.map((e)=>e + s);
            }
            if (p !== d && e.emit("slidesLengthChange"), m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== E && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                const t = `${s.containerModifierClass}backface-hidden`, a = e.el.classList.contains(t);
                p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t);
            }
        },
        updateAutoHeight: function(e) {
            const t = this, s = [], a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = (e)=>a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
                if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e)=>{
                    s.push(e);
                });
                else for(i = 0; i < Math.ceil(t.params.slidesPerView); i += 1){
                    const e = t.activeIndex + i;
                    if (e > t.slides.length && !a) break;
                    s.push(n(e));
                }
            } else s.push(n(t.activeIndex));
            for(i = 0; i < s.length; i += 1)if (void 0 !== s[i]) {
                const e = s[i].offsetHeight;
                r = e > r ? e : r;
            }
            (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
        },
        updateSlidesOffset: function() {
            const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for(let a = 0; a < t.length; a += 1)t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, s = t.params, { slides: a, rtlTranslate: i, snapGrid: r } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            let l = s.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
            for(let e = 0; e < a.length; e += 1){
                const o = a[e];
                let d = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
                const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), u = -(n - d), m = u + t.slidesSizesGrid[e], h = u >= 0 && u <= t.size - t.slidesSizesGrid[e], f = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
                f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)), k(o, f, s.slideVisibleClass), k(o, h, s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p;
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0;
            }
            const s = t.params, a = t.maxTranslate() - t.minTranslate();
            let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
            const o = r, d = n;
            if (0 === a) i = 0, r = !0, n = !0;
            else {
                i = (e - t.minTranslate()) / a;
                const s = Math.abs(e - t.minTranslate()) < 1, l = Math.abs(e - t.maxTranslate()) < 1;
                r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1);
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0), a = t.getSlideIndexByData(t.slides.length - 1), i = t.slidesGrid[s], r = t.slidesGrid[a], n = t.slidesGrid[t.slidesGrid.length - 1], o = Math.abs(e);
                l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1);
            }
            Object.assign(t, {
                progress: i,
                progressLoop: l,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i);
        },
        updateSlidesClasses: function() {
            const e = this, { slides: t, params: s, slidesEl: a, activeIndex: i } = e, r = e.virtual && s.virtual.enabled, n = e.grid && s.grid && s.grid.rows > 1, l = (e)=>f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let o, d, c;
            if (r) {
                if (s.loop) {
                    let t = i - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`);
                } else o = l(`[data-swiper-slide-index="${i}"]`);
            } else n ? (o = t.find((e)=>e.column === i), c = t.find((e)=>e.column === i + 1), d = t.find((e)=>e.column === i - 1)) : o = t[i];
            o && (n || (c = function(e, t) {
                const s = [];
                for(; e.nextElementSibling;){
                    const a = e.nextElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a;
                }
                return s;
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function(e, t) {
                const s = [];
                for(; e.previousElementSibling;){
                    const a = e.previousElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a;
                }
                return s;
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop)), t.forEach((e)=>{
                O(e, e === o, s.slideActiveClass), O(e, e === c, s.slideNextClass), O(e, e === d, s.slidePrevClass);
            }), e.emitSlidesClasses();
        },
        updateActiveIndex: function(e) {
            const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: a, params: i, activeIndex: r, realIndex: n, snapIndex: l } = t;
            let o, d = e;
            const c = (e)=>{
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
            };
            if (void 0 === d && (d = function(e) {
                const { slidesGrid: t, params: s } = e, a = e.rtlTranslate ? e.translate : -e.translate;
                let i;
                for(let e = 0; e < t.length; e += 1)void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i;
            }(t)), a.indexOf(s) >= 0) o = a.indexOf(s);
            else {
                const e = Math.min(i.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / i.slidesPerGroup);
            }
            if (o >= a.length && (o = a.length - 1), d === r && !t.params.loop) return void (o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
            if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
            const p = t.grid && i.grid && i.grid.rows > 1;
            let u;
            if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
            else if (p) {
                const e = t.slides.find((e)=>e.column === d);
                let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows);
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                u = e ? parseInt(e, 10) : d;
            } else u = d;
            Object.assign(t, {
                previousSnapIndex: l,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: u,
                previousIndex: r,
                activeIndex: d
            }), t.initialized && H(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"));
        },
        updateClickedSlide: function(e, t) {
            const s = this, a = s.params;
            let i = e.closest(`.${a.slideClass}, swiper-slide`);
            !i && s.isElement && t && t.length > 1 && t.includes(e) && [
                ...t.slice(t.indexOf(e) + 1, t.length)
            ].forEach((e)=>{
                !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e);
            });
            let r, n = !1;
            if (i) {
                for(let e = 0; e < s.slides.length; e += 1)if (s.slides[e] === i) {
                    n = !0, r = e;
                    break;
                }
            }
            if (!i || !n) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
            s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
        }
    };
    var B = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = d(i, e);
            return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            const s = this, { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
            let l, o = 0, d = 0;
            s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
            const c = s.maxTranslate() - s.minTranslate();
            l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this, { params: n, wrapperEl: l } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(), d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll) return m({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, s && r.emit("transitionEnd"));
            }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
        }
    };
    function Y(e) {
        let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
        const { activeIndex: r, previousIndex: n } = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
        }
    }
    var N = {
        slideTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: f } = r;
            if (!f && !a && !i || r.destroyed || r.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = r.params.speed);
            const g = Math.min(r.params.slidesPerGroupSkip, n);
            let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
            v >= o.length && (v = o.length - 1);
            const w = -o[v];
            if (l.normalizeSlideIndex) for(let e = 0; e < d.length; e += 1){
                const t = -Math.floor(100 * w), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e);
            }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
                if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
            }
            let b;
            n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset";
            const y = r.virtual && r.params.virtual.enabled;
            if (!(y && i) && (u && -w === r.translate || !u && w === r.translate)) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(), s = u ? w : -w;
                if (0 === t) y && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(()=>{
                    h[e ? "scrollLeft" : "scrollTop"] = s;
                })) : h[e ? "scrollLeft" : "scrollTop"] = s, y && requestAnimationFrame(()=>{
                    r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
                });
                else {
                    if (!r.support.smoothScroll) return m({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top"
                    }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            const E = A().isSafari;
            return y && !i && E && r.isElement && r.virtual.update(!1, !1, n), r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
            }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) e = parseInt(e, 10);
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const r = i.grid && i.params.grid && i.params.grid.rows > 1;
            let n = e;
            if (i.params.loop) {
                if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
                else {
                    let e;
                    if (r) {
                        const t = n * i.params.grid.rows;
                        e = i.slides.find((e)=>1 * e.getAttribute("data-swiper-slide-index") === t).column;
                    } else e = i.getSlideIndexByData(n);
                    const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, { centeredSlides: s } = i.params;
                    let l = i.params.slidesPerView;
                    "auto" === l ? l = i.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
                    let o = t - e < l;
                    if (s && (o = o || e < Math.ceil(l / 2)), a && s && "auto" !== i.params.slidesPerView && !r && (o = !1), o) {
                        const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                        i.loopFix({
                            direction: a,
                            slideTo: !0,
                            activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === a ? i.realIndex : void 0
                        });
                    }
                    if (r) {
                        const e = n * i.params.grid.rows;
                        n = i.slides.find((t)=>1 * t.getAttribute("data-swiper-slide-index") === e).column;
                    } else n = i.getSlideIndexByData(n);
                }
            }
            return requestAnimationFrame(()=>{
                i.slideTo(n, t, s, a);
            }), i;
        },
        slideNext: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this, { enabled: i, params: r, animating: n } = a;
            if (!i || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            let l = r.slidesPerGroup;
            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l, d = a.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding) return !1;
                if (a.loopFix({
                    direction: "next"
                }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame(()=>{
                    a.slideTo(a.activeIndex + o, e, t, s);
                }), !0;
            }
            return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
        },
        slidePrev: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this, { params: i, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d } = a;
            if (!o || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            const c = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (d && !c && i.loopPreventsSliding) return !1;
                a.loopFix({
                    direction: "prev"
                }), a._clientLeft = a.wrapperEl.clientLeft;
            }
            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = p(l ? a.translate : -a.translate), m = r.map((e)=>p(e)), h = i.freeMode && i.freeMode.enabled;
            let f = r[m.indexOf(u) - 1];
            if (void 0 === f && (i.cssMode || h)) {
                let e;
                r.forEach((t, s)=>{
                    u >= t && (e = s);
                }), void 0 !== e && (f = h ? r[e] : r[e > 0 ? e - 1 : e]);
            }
            let g = 0;
            if (void 0 !== f && (g = n.indexOf(f), g < 0 && (g = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (g = g - a.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s);
            }
            return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame(()=>{
                a.slideTo(g, e, t, s);
            }), !0) : a.slideTo(g, e, t, s);
        },
        slideReset: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this;
            if (!a.destroyed) return void 0 === e && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s);
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
        },
        slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const { params: t, slidesEl: s } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l(()=>{
                    e.slideTo(r);
                })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l(()=>{
                    e.slideTo(r);
                })) : e.slideTo(r);
            } else e.slideTo(r);
        }
    };
    var R = {
        loopCreate: function(e) {
            const t = this, { params: s, slidesEl: a } = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled) return;
            const i = ()=>{
                f(a, `.${s.slideClass}, swiper-slide`).forEach((e, t)=>{
                    e.setAttribute("data-swiper-slide-index", t);
                });
            }, r = t.grid && s.grid && s.grid.rows > 1, n = s.slidesPerGroup * (r ? s.grid.rows : 1), l = t.slides.length % n != 0, o = r && t.slides.length % s.grid.rows != 0, d = (e)=>{
                for(let a = 0; a < e; a += 1){
                    const e = t.isElement ? v("swiper-slide", [
                        s.slideBlankClass
                    ]) : v("div", [
                        s.slideClass,
                        s.slideBlankClass
                    ]);
                    t.slidesEl.append(e);
                }
            };
            if (l) {
                if (s.loopAddBlankSlides) d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides();
                else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i();
            } else if (o) {
                if (s.loopAddBlankSlides) d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides();
                else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i();
            } else i();
            t.loopFix({
                slideRealIndex: e,
                direction: s.centeredSlides ? void 0 : "next"
            });
        },
        loopFix: function(e) {
            let { slideRealIndex: t, slideTo: s = !0, direction: a, setTranslate: i, activeSlideIndex: r, byController: n, byMousewheel: l } = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop) return;
            o.emit("beforeLoopFix");
            const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m } = o, { centeredSlides: h } = m;
            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
            let f = m.slidesPerView;
            "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)), h && f % 2 == 0 && (f += 1));
            const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
            let w = v;
            w % v != 0 && (w += v - w % v), w += m.loopAdditionalSlides, o.loopedSlides = w;
            const b = o.grid && m.grid && m.grid.rows > 1;
            d.length < f + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [], E = [];
            let x = o.activeIndex;
            void 0 === r ? r = o.getSlideIndex(d.find((e)=>e.classList.contains(m.slideActiveClass))) : x = r;
            const S = "next" === a || !a, T = "prev" === a || !a;
            let M = 0, C = 0;
            const P = b ? Math.ceil(d.length / m.grid.rows) : d.length, L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
            if (L < w) {
                M = Math.max(w - L, v);
                for(let e = 0; e < w - L; e += 1){
                    const t = e - Math.floor(e / P) * P;
                    if (b) {
                        const e = P - t - 1;
                        for(let t = d.length - 1; t >= 0; t -= 1)d[t].column === e && y.push(t);
                    } else y.push(P - t - 1);
                }
            } else if (L + f > P - w) {
                C = Math.max(L - (P - 2 * w), v);
                for(let e = 0; e < C; e += 1){
                    const t = e - Math.floor(e / P) * P;
                    b ? d.forEach((e, s)=>{
                        e.column === t && E.push(s);
                    }) : E.push(t);
                }
            }
            if (o.__preventObserver__ = !0, requestAnimationFrame(()=>{
                o.__preventObserver__ = !1;
            }), T && y.forEach((e)=>{
                d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1;
            }), S && E.forEach((e)=>{
                d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1;
            }), o.recalcSlides(), "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach((e, t)=>{
                o.grid.updateSlide(t, e, o.slides);
            }), m.watchSlidesProgress && o.updateSlidesOffset(), s) {
                if (y.length > 0 && T) {
                    if (void 0 === t) {
                        const e = o.slidesGrid[x], t = o.slidesGrid[x + M] - e;
                        l ? o.setTranslate(o.translate - t) : (o.slideTo(x + Math.ceil(M), 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
                    } else if (i) {
                        const e = b ? y.length / m.grid.rows : y.length;
                        o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
                    }
                } else if (E.length > 0 && S) {
                    if (void 0 === t) {
                        const e = o.slidesGrid[x], t = o.slidesGrid[x - C] - e;
                        l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
                    } else {
                        const e = b ? E.length / m.grid.rows : E.length;
                        o.slideTo(o.activeIndex - e, 0, !1, !0);
                    }
                }
            }
            if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
                const e = {
                    slideRealIndex: t,
                    direction: a,
                    setTranslate: i,
                    activeSlideIndex: r,
                    byController: !0
                };
                Array.isArray(o.controller.control) ? o.controller.control.forEach((t)=>{
                    !t.destroyed && t.params.loop && t.loopFix({
                        ...e,
                        slideTo: t.params.slidesPerView === m.slidesPerView && s
                    });
                }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                    ...e,
                    slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
                });
            }
            o.emit("loopFix");
        },
        loopDestroy: function() {
            const e = this, { params: t, slidesEl: s } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const a = [];
            e.slides.forEach((e)=>{
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                a[t] = e;
            }), e.slides.forEach((e)=>{
                e.removeAttribute("data-swiper-slide-index");
            }), a.forEach((e)=>{
                s.append(e);
            }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
        }
    };
    function q(e, t, s) {
        const a = r(), { params: i } = e, n = i.edgeSwipeDetection, l = i.edgeSwipeThreshold;
        return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(), !0);
    }
    function _(e) {
        const t = this, s = a();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const n = t.touchEventsData;
        if ("pointerdown" === i.type) {
            if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
            n.pointerId = i.pointerId;
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void q(t, i, i.targetTouches[0].pageX);
        const { params: l, touches: d, enabled: c } = t;
        if (!c) return;
        if (!l.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = i.target;
        if ("wrapper" === l.touchEventsTarget && !function(e, t) {
            const s = r();
            let a = t.contains(e);
            !a && s.HTMLSlotElement && t instanceof HTMLSlotElement && (a = [
                ...t.assignedElements()
            ].includes(e), a || (a = function(e, t) {
                const s = [
                    t
                ];
                for(; s.length > 0;){
                    const t = s.shift();
                    if (e === t) return !0;
                    s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : []);
                }
            }(e, t)));
            return a;
        }(p, t.wrapperEl)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass, m = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && m && (p = m[0]);
        const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, f = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this), function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            }(t);
        }(h, p) : p.closest(h))) return void (t.allowClick = !0);
        if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
        d.currentX = i.pageX, d.currentY = i.pageY;
        const g = d.currentX, v = d.currentY;
        if (!q(t, i, g)) return;
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), d.startX = g, d.startY = v, n.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1);
        let w = !0;
        p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !p.matches(n.focusableElements)) && s.activeElement.blur();
        const b = w && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i);
    }
    function F(e) {
        const t = a(), s = this, i = s.touchEventsData, { params: r, touches: n, rtlTranslate: l, enabled: d } = s;
        if (!d) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
            if (null !== i.touchId) return;
            if (p.pointerId !== i.pointerId) return;
        }
        if ("touchmove" === p.type) {
            if (c = [
                ...p.changedTouches
            ].find((e)=>e.identifier === i.touchId), !c || c.identifier !== i.touchId) return;
        } else c = p;
        if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX, m = c.pageY;
        if (p.preventedByNestedSwiper) return n.startX = u, void (n.startY = m);
        if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m
        }), i.touchStartTime = o()));
        if (r.touchReleaseOnEdges && !r.loop) {
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
        }
        if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
        const h = n.currentX - n.startX, f = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
        let g = s.isHorizontal() ? h : f, v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), n.diff = g, g *= r.touchRatio, l && (g = -g, v = -v);
        const w = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
        const b = s.params.loop && !r.cssMode, y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
            if (b && y && s.loopFix({
                direction: s.swipeDirection
            }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        bySwiperTouchMove: !0
                    }
                });
                s.wrapperEl.dispatchEvent(e);
            }
            i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p);
        }
        if ((new Date).getTime(), !1 !== r._loopSwapReset && i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m,
            startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
        let E = !0, x = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }
    function V(e) {
        const t = this, s = t.touchEventsData;
        let a, i = e;
        i.originalEvent && (i = i.originalEvent);
        if ("touchend" === i.type || "touchcancel" === i.type) {
            if (a = [
                ...i.changedTouches
            ].find((e)=>e.identifier === s.touchId), !a || a.identifier !== s.touchId) return;
        } else {
            if (null !== s.touchId) return;
            if (i.pointerId !== s.pointerId) return;
            a = i;
        }
        if ([
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu"
        ].includes(i.type)) {
            if (!([
                "pointercancel",
                "contextmenu"
            ].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return;
        }
        s.pointerId = null, s.touchId = null;
        const { params: r, touches: n, rtlTranslate: d, slidesGrid: c, enabled: p } = t;
        if (!p) return;
        if (!r.simulateTouch && "mouse" === i.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = o(), m = u - s.touchStartTime;
        if (t.allowClick) {
            const e = i.path || i.composedPath && i.composedPath();
            t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i);
        }
        if (s.lastClickTime = o(), l(()=>{
            t.destroyed || (t.allowClick = !0);
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
        if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        const f = h >= -t.maxTranslate() && !t.params.loop;
        let g = 0, v = t.slidesSizesGrid[0];
        for(let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup){
            const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2]);
        }
        let w = null, b = null;
        r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const y = (h - c[g]) / v, E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (m > r.longSwipesMs) {
            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g));
        } else {
            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g));
        }
    }
    function W() {
        const e = this, { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e, n = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(()=>{
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
        }, 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function j(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function U() {
        const e = this, { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
    function K(e) {
        const t = this;
        D(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
    }
    function Z() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
    }
    const Q = (e, t)=>{
        const s = a(), { params: i, el: r, wrapperEl: n, device: l } = e, o = !!i.nested, d = "on" === t ? "addEventListener" : "removeEventListener", c = t;
        r && "string" != typeof r && (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
        }), r[d]("touchstart", e.onTouchStart, {
            passive: !1
        }), r[d]("pointerdown", e.onTouchStart, {
            passive: !1
        }), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("touchend", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerup", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
        }), s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerout", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
        }), s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
        }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", W, !0) : e[c]("observerUpdate", W, !0), r[d]("load", e.onLoad, {
            capture: !0
        }));
    };
    const J = (e, t)=>e.grid && t.grid && t.grid.rows > 1;
    var ee = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function te(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), [
                "pagination",
                "scrollbar"
            ].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), p(t, s)) : p(t, s)) : p(t, s);
        };
    }
    const se = {
        eventsEmitter: $,
        update: X,
        translate: B,
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t);
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                const s = this, { params: a } = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), Y({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }));
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                const s = this, { params: a } = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), Y({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }));
            }
        },
        slide: N,
        loop: R,
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(()=>{
                    t.__preventObserver__ = !1;
                });
            },
            unsetGrabCursor: function() {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(()=>{
                    e.__preventObserver__ = !1;
                }));
            }
        },
        events: {
            attachEvents: function() {
                const e = this, { params: t } = e;
                e.onTouchStart = _.bind(e), e.onTouchMove = F.bind(e), e.onTouchEnd = V.bind(e), e.onDocumentTouchStart = Z.bind(e), t.cssMode && (e.onScroll = U.bind(e)), e.onClick = j.bind(e), e.onLoad = K.bind(e), Q(e, "on");
            },
            detachEvents: function() {
                Q(this, "off");
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this, { realIndex: t, initialized: s, params: i, el: r } = e, n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = a(), o = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase, d = [
                    "window",
                    "container"
                ].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : l.querySelector(i.breakpointsBase), c = e.getBreakpoint(n, o, d);
                if (!c || e.currentBreakpoint === c) return;
                const u = (c in n ? n[c] : void 0) || e.originalParams, m = J(e, i), h = J(e, u), f = e.params.grabCursor, g = u.grabCursor, v = i.enabled;
                m && !h ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !m && h && (r.classList.add(`${i.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), f && !g ? e.unsetGrabCursor() : !f && g && e.setGrabCursor(), [
                    "navigation",
                    "pagination",
                    "scrollbar"
                ].forEach((t)=>{
                    if (void 0 === u[t]) return;
                    const s = i[t] && i[t].enabled, a = u[t] && u[t].enabled;
                    s && !a && e[t].disable(), !s && a && e[t].enable();
                });
                const w = u.direction && u.direction !== i.direction, b = i.loop && (u.slidesPerView !== i.slidesPerView || w), y = i.loop;
                w && s && e.changeDirection(), p(e.params, u);
                const E = e.params.enabled, x = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), v && !E ? e.disable() : !v && E && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", u), s && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && x ? (e.loopCreate(t), e.updateSlides()) : y && !x && e.loopDestroy()), e.emit("breakpoint", u);
            },
            getBreakpoint: function(e, t, s) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                let a = !1;
                const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map((e)=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        };
                    }
                    return {
                        value: e,
                        point: e
                    };
                });
                l.sort((e, t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
                for(let e = 0; e < l.length; e += 1){
                    const { point: r, value: n } = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
                }
                return a || "max";
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: a } = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            }
        },
        classes: {
            addClasses: function() {
                const e = this, { classNames: t, params: s, rtl: a, el: i, device: r } = e, n = function(e, t) {
                    const s = [];
                    return e.forEach((e)=>{
                        "object" == typeof e ? Object.keys(e).forEach((a)=>{
                            e[a] && s.push(t + a);
                        }) : "string" == typeof e && s.push(t + e);
                    }), s;
                }([
                    "initialized",
                    s.direction,
                    {
                        "free-mode": e.params.freeMode && s.freeMode.enabled
                    },
                    {
                        autoheight: s.autoHeight
                    },
                    {
                        rtl: a
                    },
                    {
                        grid: s.grid && s.grid.rows > 1
                    },
                    {
                        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                    },
                    {
                        android: r.android
                    },
                    {
                        ios: r.ios
                    },
                    {
                        "css-mode": s.cssMode
                    },
                    {
                        centered: s.cssMode && s.centeredSlides
                    },
                    {
                        "watch-progress": s.watchSlidesProgress
                    }
                ], s.containerModifierClass);
                t.push(...n), i.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function() {
                const { el: e, classNames: t } = this;
                e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
            }
        }
    }, ae = {};
    class ie {
        constructor(){
            let e, t;
            for(var s = arguments.length, i = new Array(s), r = 0; r < s; r++)i[r] = arguments[r];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
            const n = a();
            if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                const e = [];
                return n.querySelectorAll(t.el).forEach((s)=>{
                    const a = p({}, t, {
                        el: s
                    });
                    e.push(new ie(a));
                }), e;
            }
            const l = this;
            l.__swiper__ = !0, l.support = I(), l.device = z({
                userAgent: t.userAgent
            }), l.browser = A(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [
                ...l.__modules__
            ], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
            const o = {};
            l.modules.forEach((e)=>{
                e({
                    params: t,
                    swiper: l,
                    extendParams: te(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l)
                });
            });
            const d = p({}, ee, o);
            return l.params = p({}, d, ae, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e)=>{
                l.on(e, l.params.on[e]);
            }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                enabled: l.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === l.params.direction,
                isVertical: ()=>"vertical" === l.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment () {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), l.emit("_swiper"), l.params.init && l.init(), l;
        }
        getDirectionLabel(e) {
            return this.isHorizontal() ? e : ({
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            })[e];
        }
        getSlideIndex(e) {
            const { slidesEl: t, params: s } = this, a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
            return y(e) - a;
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.find((t)=>1 * t.getAttribute("data-swiper-slide-index") === e));
        }
        recalcSlides() {
            const { slidesEl: e, params: t } = this;
            this.slides = f(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t)=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e)=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((s)=>{
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a);
            }), e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this;
            let o = 1;
            if ("number" == typeof s.slidesPerView) return s.slidesPerView;
            if (s.centeredSlides) {
                let e, t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
                for(let s = l + 1; s < a.length; s += 1)a[s] && !e && (t += Math.ceil(a[s].swiperSlideSize), o += 1, t > n && (e = !0));
                for(let s = l - 1; s >= 0; s -= 1)a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
            } else if ("current" === e) for(let e = l + 1; e < a.length; e += 1)(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
            else for(let e = l - 1; e >= 0; e -= 1)i[l] - i[e] < n && (o += 1);
            return o;
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: s } = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            if (s.breakpoints && e.setBreakpoint(), [
                ...e.el.querySelectorAll('[loading="lazy"]')
            ].forEach((t)=>{
                t.complete && D(e, t);
            }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                    const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0);
                } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a();
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this, a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t)=>{
                "vertical" === e ? t.style.width = "" : t.style.height = "";
            }), s.emit("changeDirection"), t && s.update()), s;
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
            s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            const a = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let i = (()=>{
                if (s && s.shadowRoot && s.shadowRoot.querySelector) return s.shadowRoot.querySelector(a());
                return f(s, a())[0];
            })();
            return !i && t.params.createElements && (i = v("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach((e)=>{
                i.append(e);
            })), Object.assign(t, {
                el: s,
                wrapperEl: i,
                slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                hostEl: t.isElement ? s.parentNode.host : s,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
                wrongRTL: "-webkit-box" === b(i, "display")
            }), !0;
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            if (!1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
            const s = [
                ...t.el.querySelectorAll('[loading="lazy"]')
            ];
            return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e)=>{
                e.complete ? D(t, e) : e.addEventListener("load", (e)=>{
                    D(t, e.target);
                });
            }), H(t), t.initialized = !0, H(t), t.emit("init"), t.emit("afterInit"), t;
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this, { params: a, el: i, wrapperEl: r, slides: n } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), r && r.removeAttribute("style"), n && n.length && n.forEach((e)=>{
                e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
            })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e)=>{
                s.off(e);
            }), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function(e) {
                const t = e;
                Object.keys(t).forEach((e)=>{
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            }(s)), s.destroyed = !0), null;
        }
        static extendDefaults(e) {
            p(ae, e);
        }
        static get extendedDefaults() {
            return ae;
        }
        static get defaults() {
            return ee;
        }
        static installModule(e) {
            ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
            const t = ie.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e)=>ie.installModule(e)), ie) : (ie.installModule(e), ie);
        }
    }
    function re(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i)=>{
            if (!s[i] && !0 === s.auto) {
                let r = f(e.el, `.${a[i]}`)[0];
                r || (r = v("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r;
            }
        }), s;
    }
    function ne(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function le(e) {
        const t = this, { params: s, slidesEl: a } = t;
        s.loop && t.loopDestroy();
        const i = (e)=>{
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, a.append(t.children[0]), t.innerHTML = "";
            } else a.append(e);
        };
        if ("object" == typeof e && "length" in e) for(let t = 0; t < e.length; t += 1)e[t] && i(e[t]);
        else i(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update();
    }
    function oe(e) {
        const t = this, { params: s, activeIndex: a, slidesEl: i } = t;
        s.loop && t.loopDestroy();
        let r = a + 1;
        const n = (e)=>{
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = "";
            } else i.prepend(e);
        };
        if ("object" == typeof e && "length" in e) {
            for(let t = 0; t < e.length; t += 1)e[t] && n(e[t]);
            r = a + e.length;
        } else n(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1);
    }
    function de(e, t) {
        const s = this, { params: a, activeIndex: i, slidesEl: r } = s;
        let n = i;
        a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for(let t = l - 1; t >= e; t -= 1){
            const e = s.slides[t];
            e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
            for(let e = 0; e < t.length; e += 1)t[e] && r.append(t[e]);
            o = n > e ? n + t.length : n;
        } else r.append(t);
        for(let e = 0; e < d.length; e += 1)r.append(d[e]);
        s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function ce(e) {
        const t = this, { params: s, activeIndex: a } = t;
        let i = a;
        s.loop && (i -= t.loopedSlides, t.loopDestroy());
        let r, n = i;
        if ("object" == typeof e && "length" in e) {
            for(let s = 0; s < e.length; s += 1)r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
            n = Math.max(n, 0);
        } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
    }
    function pe() {
        const e = this, t = [];
        for(let s = 0; s < e.slides.length; s += 1)t.push(s);
        e.removeSlide(t);
    }
    function ue(e) {
        const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e;
        let c;
        a("beforeInit", ()=>{
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }), a("setTranslate", ()=>{
            s.params.effect === t && i();
        }), a("setTransition", (e, a)=>{
            s.params.effect === t && r(a);
        }), a("transitionEnd", ()=>{
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.forEach((e)=>{
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e)=>e.remove());
                }), o();
            }
        }), a("virtualUpdate", ()=>{
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(()=>{
                c && s.slides && s.slides.length && (i(), c = !1);
            }));
        });
    }
    function me(e, t) {
        const s = h(t);
        return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s;
    }
    function he(e) {
        let { swiper: t, duration: s, transformElements: a, allSlides: i } = e;
        const { activeIndex: r } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a : a.filter((e)=>{
                const s = e.classList.contains("swiper-slide-transform") ? ((e)=>{
                    if (!e.parentElement) return t.slides.find((t)=>t.shadowRoot && t.shadowRoot === e.parentNode);
                    return e.parentElement;
                })(e) : e;
                return t.getSlideIndex(s) === r;
            }), e.forEach((e)=>{
                x(e, ()=>{
                    if (s) return;
                    if (!t || t.destroyed) return;
                    s = !0, t.animating = !1;
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.wrapperEl.dispatchEvent(e);
                });
            });
        }
    }
    function fe(e, t, s) {
        const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, i = h(t);
        let r = i.querySelector(`.${a.split(" ").join(".")}`);
        return r || (r = v("div", a.split(" ")), i.append(r)), r;
    }
    Object.keys(se).forEach((e)=>{
        Object.keys(se[e]).forEach((t)=>{
            ie.prototype[t] = se[e][t];
        });
    }), ie.use([
        function(e) {
            let { swiper: t, on: s, emit: a } = e;
            const i = r();
            let n = null, l = null;
            const o = ()=>{
                t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
            }, d = ()=>{
                t && !t.destroyed && t.initialized && a("orientationchange");
            };
            s("init", ()=>{
                t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e)=>{
                    l = i.requestAnimationFrame(()=>{
                        const { width: s, height: a } = t;
                        let i = s, r = a;
                        e.forEach((e)=>{
                            let { contentBoxSize: s, contentRect: a, target: n } = e;
                            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
                        }), i === s && r === a || o();
                    });
                }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
            }), s("destroy", ()=>{
                l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e;
            const n = [], l = r(), o = function(e, s) {
                void 0 === s && (s = {});
                const a = new (l.MutationObserver || l.WebkitMutationObserver)((e)=>{
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const s = function() {
                        i("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0);
                });
                a.observe(e, {
                    attributes: void 0 === s.attributes || s.attributes,
                    childList: t.isElement || (void 0 === s.childList || s).childList,
                    characterData: void 0 === s.characterData || s.characterData
                }), n.push(a);
            };
            s({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), a("init", ()=>{
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = E(t.hostEl);
                        for(let t = 0; t < e.length; t += 1)o(e[t]);
                    }
                    o(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }), o(t.wrapperEl, {
                        attributes: !1
                    });
                }
            }), a("destroy", ()=>{
                n.forEach((e)=>{
                    e.disconnect();
                }), n.splice(0, n.length);
            });
        }
    ]);
    const ge = [
        function(e) {
            let t, { swiper: s, extendParams: i, on: r, emit: n } = e;
            i({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            });
            const l = a();
            s.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            };
            const o = l.createElement("div");
            function d(e, t) {
                const a = s.params.virtual;
                if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                let i;
                return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i;
            }
            function c(e, t, a) {
                const { slidesPerView: i, slidesPerGroup: r, centeredSlides: l, loop: o, initialSlide: c } = s.params;
                if (t && !o && c > 0) return;
                const { addSlidesBefore: p, addSlidesAfter: u } = s.params.virtual, { from: m, to: h, slides: g, slidesGrid: v, offset: w } = s.virtual;
                s.params.cssMode || s.updateActiveIndex();
                const b = void 0 === a ? s.activeIndex || 0 : a;
                let y, E, x;
                y = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", l ? (E = Math.floor(i / 2) + r + u, x = Math.floor(i / 2) + r + p) : (E = i + (r - 1) + u, x = (o ? i : r) + p);
                let S = b - x, T = b + E;
                o || (S = Math.max(S, 0), T = Math.min(T, g.length - 1));
                let M = (s.slidesGrid[S] || 0) - (s.slidesGrid[0] || 0);
                function C() {
                    s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate");
                }
                if (o && b >= x ? (S -= x, l || (M += s.slidesGrid[0])) : o && b < x && (S = -x, l && (M += s.slidesGrid[0])), Object.assign(s.virtual, {
                    from: S,
                    to: T,
                    offset: M,
                    slidesGrid: s.slidesGrid,
                    slidesBefore: x,
                    slidesAfter: E
                }), m === S && h === T && !e) return s.slidesGrid !== v && M !== w && s.slides.forEach((e)=>{
                    e.style[y] = M - Math.abs(s.cssOverflowAdjustment()) + "px";
                }), s.updateProgress(), void n("virtualUpdate");
                if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                    offset: M,
                    from: S,
                    to: T,
                    slides: function() {
                        const e = [];
                        for(let t = S; t <= T; t += 1)e.push(g[t]);
                        return e;
                    }()
                }), void (s.params.virtual.renderExternalUpdate ? C() : n("virtualUpdate"));
                const P = [], L = [], I = (e)=>{
                    let t = e;
                    return e < 0 ? t = g.length + e : t >= g.length && (t -= g.length), t;
                };
                if (e) s.slides.filter((e)=>e.matches(`.${s.params.slideClass}, swiper-slide`)).forEach((e)=>{
                    e.remove();
                });
                else for(let e = m; e <= h; e += 1)if (e < S || e > T) {
                    const t = I(e);
                    s.slides.filter((e)=>e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`)).forEach((e)=>{
                        e.remove();
                    });
                }
                const z = o ? -g.length : 0, A = o ? 2 * g.length : g.length;
                for(let t = z; t < A; t += 1)if (t >= S && t <= T) {
                    const s = I(t);
                    void 0 === h || e ? L.push(s) : (t > h && L.push(s), t < m && P.push(s));
                }
                if (L.forEach((e)=>{
                    s.slidesEl.append(d(g[e], e));
                }), o) for(let e = P.length - 1; e >= 0; e -= 1){
                    const t = P[e];
                    s.slidesEl.prepend(d(g[t], t));
                }
                else P.sort((e, t)=>t - e), P.forEach((e)=>{
                    s.slidesEl.prepend(d(g[e], e));
                });
                f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e)=>{
                    e.style[y] = M - Math.abs(s.cssOverflowAdjustment()) + "px";
                }), C();
            }
            r("beforeInit", ()=>{
                if (!s.params.virtual.enabled) return;
                let e;
                if (void 0 === s.passedParams.virtual.slides) {
                    const t = [
                        ...s.slidesEl.children
                    ].filter((e)=>e.matches(`.${s.params.slideClass}, swiper-slide`));
                    t && t.length && (s.virtual.slides = [
                        ...t
                    ], e = !0, t.forEach((e, t)=>{
                        e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove();
                    }));
                }
                e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, c(!1, !0);
            }), r("setTranslate", ()=>{
                s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(()=>{
                    c();
                }, 100)) : c());
            }), r("init update resize", ()=>{
                s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
            }), Object.assign(s.virtual, {
                appendSlide: function(e) {
                    if ("object" == typeof e && "length" in e) for(let t = 0; t < e.length; t += 1)e[t] && s.virtual.slides.push(e[t]);
                    else s.virtual.slides.push(e);
                    c(!0);
                },
                prependSlide: function(e) {
                    const t = s.activeIndex;
                    let a = t + 1, i = 1;
                    if (Array.isArray(e)) {
                        for(let t = 0; t < e.length; t += 1)e[t] && s.virtual.slides.unshift(e[t]);
                        a = t + e.length, i = e.length;
                    } else s.virtual.slides.unshift(e);
                    if (s.params.virtual.cache) {
                        const e = s.virtual.cache, t = {};
                        Object.keys(e).forEach((s)=>{
                            const a = e[s], r = a.getAttribute("data-swiper-slide-index");
                            r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a;
                        }), s.virtual.cache = t;
                    }
                    c(!0), s.slideTo(a, 0);
                },
                removeSlide: function(e) {
                    if (null == e) return;
                    let t = s.activeIndex;
                    if (Array.isArray(e)) for(let a = e.length - 1; a >= 0; a -= 1)s.params.virtual.cache && (delete s.virtual.cache[e[a]], Object.keys(s.virtual.cache).forEach((t)=>{
                        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
                    })), s.virtual.slides.splice(e[a], 1), e[a] < t && (t -= 1), t = Math.max(t, 0);
                    else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach((t)=>{
                        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
                    })), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
                    c(!0), s.slideTo(t, 0);
                },
                removeAllSlides: function() {
                    s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0);
                },
                update: c
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: i, emit: n } = e;
            const l = a(), o = r();
            function d(e) {
                if (!t.enabled) return;
                const { rtlTranslate: s } = t;
                let a = e;
                a.originalEvent && (a = a.originalEvent);
                const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i, p = 37 === i, u = 39 === i, m = 38 === i, h = 40 === i;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
                        let e = !1;
                        if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
                        const a = t.el, i = a.clientWidth, r = a.clientHeight, n = o.innerWidth, l = o.innerHeight, d = w(a);
                        s && (d.left -= a.scrollLeft);
                        const c = [
                            [
                                d.left,
                                d.top
                            ],
                            [
                                d.left + i,
                                d.top
                            ],
                            [
                                d.left,
                                d.top + r
                            ],
                            [
                                d.left + i,
                                d.top + r
                            ]
                        ];
                        for(let t = 0; t < c.length; t += 1){
                            const s = c[t];
                            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                e = !0;
                            }
                        }
                        if (!e) return;
                    }
                    t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i);
                }
            }
            function c() {
                t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0);
            }
            function p() {
                t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1);
            }
            t.keyboard = {
                enabled: !1
            }, s({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), i("init", ()=>{
                t.params.keyboard.enabled && c();
            }), i("destroy", ()=>{
                t.keyboard.enabled && p();
            }), Object.assign(t.keyboard, {
                enable: c,
                disable: p
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e;
            const n = r();
            let d;
            s({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel"
                }
            }), t.mousewheel = {
                enabled: !1
            };
            let c, p = o();
            const u = [];
            function m() {
                t.enabled && (t.mouseEntered = !0);
            }
            function h() {
                t.enabled && (t.mouseEntered = !1);
            }
            function f(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = (new n.Date).getTime(), !1));
            }
            function g(e) {
                let s = e, a = !0;
                if (!t.enabled) return;
                if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                const r = t.params.mousewheel;
                t.params.cssMode && s.preventDefault();
                let n = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
                const p = n && n.contains(s.target);
                if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
                s.originalEvent && (s = s.originalEvent);
                let m = 0;
                const h = t.rtlTranslate ? -1 : 1, g = function(e) {
                    let t = 0, s = 0, a = 0, i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    };
                }(s);
                if (r.forceToAxis) {
                    if (t.isHorizontal()) {
                        if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                        m = -g.pixelX * h;
                    } else {
                        if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                        m = -g.pixelY;
                    }
                } else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
                if (0 === m) return !0;
                r.invert && (m = -m);
                let v = t.getTranslate() + m * r.sensitivity;
                if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    const e = {
                        time: o(),
                        delta: Math.abs(m),
                        direction: Math.sign(m)
                    }, a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                    if (!a) {
                        c = void 0;
                        let n = t.getTranslate() + m * r.sensitivity;
                        const o = t.isBeginning, p = t.isEnd;
                        if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                            direction: e.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }), t.params.freeMode.sticky) {
                            clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
                            const s = u.length ? u[u.length - 1] : void 0, a = u[0];
                            if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0);
                            else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                                const s = m > 0 ? .8 : .2;
                                c = e, u.splice(0), d = l(()=>{
                                    !t.destroyed && t.params && t.slideToClosest(t.params.speed, !0, void 0, s);
                                }, 0);
                            }
                            d || (d = l(()=>{
                                if (t.destroyed || !t.params) return;
                                c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
                            }, 500));
                        }
                        if (a || i("scroll", s), t.params.autoplay && t.params.autoplay.disableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate())) return !0;
                    }
                } else {
                    const s = {
                        time: o(),
                        delta: Math.abs(m),
                        direction: Math.sign(m),
                        raw: e
                    };
                    u.length >= 2 && u.shift();
                    const a = u.length ? u[u.length - 1] : void 0;
                    if (u.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function(e) {
                        const s = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                        return !1;
                    }(s)) return !0;
                }
                return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
            }
            function v(e) {
                let s = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g);
            }
            function w() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0);
            }
            function b() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0);
            }
            a("init", ()=>{
                !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w();
            }), a("destroy", ()=>{
                t.params.cssMode && w(), t.mousewheel.enabled && b();
            }), Object.assign(t.mousewheel, {
                enable: w,
                disable: b
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e;
            function r(e) {
                let s;
                return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e) || t.hostEl.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [
                    ...document.querySelectorAll(e)
                ]), t.params.uniqueNavElements && "string" == typeof e && s && s.length > 1 && 1 === t.el.querySelectorAll(e).length ? s = t.el.querySelector(e) : s && 1 === s.length && (s = s[0])), e && !s ? e : s);
            }
            function n(e, s) {
                const a = t.params.navigation;
                (e = T(e)).forEach((e)=>{
                    e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
                });
            }
            function l() {
                const { nextEl: e, prevEl: s } = t.navigation;
                if (t.params.loop) return n(s, !1), void n(e, !1);
                n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
            }
            function o(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
            }
            function d(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
            }
            function c() {
                const e = t.params.navigation;
                if (t.params.navigation = re(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
                let s = r(e.nextEl), a = r(e.prevEl);
                Object.assign(t.navigation, {
                    nextEl: s,
                    prevEl: a
                }), s = T(s), a = T(a);
                const i = (s, a)=>{
                    s && s.addEventListener("click", "next" === a ? d : o), !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
                };
                s.forEach((e)=>i(e, "next")), a.forEach((e)=>i(e, "prev"));
            }
            function p() {
                let { nextEl: e, prevEl: s } = t.navigation;
                e = T(e), s = T(s);
                const a = (e, s)=>{
                    e.removeEventListener("click", "next" === s ? d : o), e.classList.remove(...t.params.navigation.disabledClass.split(" "));
                };
                e.forEach((e)=>a(e, "next")), s.forEach((e)=>a(e, "prev"));
            }
            s({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {
                nextEl: null,
                prevEl: null
            }, a("init", ()=>{
                !1 === t.params.navigation.enabled ? u() : (c(), l());
            }), a("toEdge fromEdge lock unlock", ()=>{
                l();
            }), a("destroy", ()=>{
                p();
            }), a("enable disable", ()=>{
                let { nextEl: e, prevEl: s } = t.navigation;
                e = T(e), s = T(s), t.enabled ? l() : [
                    ...e,
                    ...s
                ].filter((e)=>!!e).forEach((e)=>e.classList.add(t.params.navigation.lockClass));
            }), a("click", (e, s)=>{
                let { nextEl: a, prevEl: r } = t.navigation;
                a = T(a), r = T(r);
                const n = s.target;
                let l = r.includes(n) || a.includes(n);
                if (t.isElement && !l) {
                    const e = s.path || s.composedPath && s.composedPath();
                    e && (l = e.find((e)=>a.includes(e) || r.includes(e)));
                }
                if (t.params.navigation.hideOnClick && !l) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                    let e;
                    a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [
                        ...a,
                        ...r
                    ].filter((e)=>!!e).forEach((e)=>e.classList.toggle(t.params.navigation.hiddenClass));
                }
            });
            const u = ()=>{
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p();
            };
            Object.assign(t.navigation, {
                enable: ()=>{
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), l();
                },
                disable: u,
                update: l,
                init: c,
                destroy: p
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e;
            const r = "swiper-pagination";
            let n;
            s({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (e)=>e,
                    formatFractionTotal: (e)=>e,
                    bulletClass: `${r}-bullet`,
                    bulletActiveClass: `${r}-bullet-active`,
                    modifierClass: `${r}-`,
                    currentClass: `${r}-current`,
                    totalClass: `${r}-total`,
                    hiddenClass: `${r}-hidden`,
                    progressbarFillClass: `${r}-progressbar-fill`,
                    progressbarOppositeClass: `${r}-progressbar-opposite`,
                    clickableClass: `${r}-clickable`,
                    lockClass: `${r}-lock`,
                    horizontalClass: `${r}-horizontal`,
                    verticalClass: `${r}-vertical`,
                    paginationDisabledClass: `${r}-disabled`
                }
            }), t.pagination = {
                el: null,
                bullets: []
            };
            let l = 0;
            function o() {
                return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
            }
            function d(e, s) {
                const { bulletActiveClass: a } = t.params.pagination;
                e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`));
            }
            function c(e) {
                const s = e.target.closest(ne(t.params.pagination.bulletClass));
                if (!s) return;
                e.preventDefault();
                const a = y(s) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === a) return;
                    const e = (i = t.realIndex, r = a, n = t.slides.length, (r %= n) == 1 + (i %= n) ? "next" : r === i - 1 ? "previous" : void 0);
                    "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(a);
                } else t.slideTo(a);
                var i, r, n;
            }
            function p() {
                const e = t.rtl, s = t.params.pagination;
                if (o()) return;
                let a, r, c = t.pagination.el;
                c = T(c);
                const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const i = t.pagination.bullets;
                    let o, p, u;
                    if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0), c.forEach((e)=>{
                        e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
                    }), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(a - l, 0), p = o + (Math.min(i.length, s.dynamicMainBullets) - 1), u = (p + o) / 2), i.forEach((e)=>{
                        const t = [
                            ...[
                                "",
                                "-next",
                                "-next-next",
                                "-prev",
                                "-prev-prev",
                                "-main"
                            ].map((e)=>`${s.bulletActiveClass}${e}`)
                        ].map((e)=>"string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                        e.classList.remove(...t);
                    }), c.length > 1) i.forEach((e)=>{
                        const i = y(e);
                        i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= o && i <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && d(e, "prev"), i === p && d(e, "next"));
                    });
                    else {
                        const e = i[a];
                        if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && i.forEach((e, t)=>{
                            e.setAttribute("part", t === a ? "bullet-active" : "bullet");
                        }), s.dynamicBullets) {
                            const e = i[o], t = i[p];
                            for(let e = o; e <= p; e += 1)i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                            d(e, "prev"), d(t, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        const a = Math.min(i.length, s.dynamicMainBullets + 4), r = (n * a - n) / 2 - u * n, l = e ? "right" : "left";
                        i.forEach((e)=>{
                            e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
                        });
                    }
                }
                c.forEach((e, r)=>{
                    if ("fraction" === s.type && (e.querySelectorAll(ne(s.currentClass)).forEach((e)=>{
                        e.textContent = s.formatFractionCurrent(a + 1);
                    }), e.querySelectorAll(ne(s.totalClass)).forEach((e)=>{
                        e.textContent = s.formatFractionTotal(u);
                    })), "progressbar" === s.type) {
                        let i;
                        i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const r = (a + 1) / u;
                        let n = 1, l = 1;
                        "horizontal" === i ? n = r : l = r, e.querySelectorAll(ne(s.progressbarFillClass)).forEach((e)=>{
                            e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`;
                        });
                    }
                    "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, u), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
                });
            }
            function u() {
                const e = t.params.pagination;
                if (o()) return;
                const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
                let a = t.pagination.el;
                a = T(a);
                let r = "";
                if ("bullets" === e.type) {
                    let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
                    for(let s = 0; s < a; s += 1)e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
                }
                "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((s)=>{
                    "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(ne(e.bulletClass)));
                }), "custom" !== e.type && i("paginationRender", a[0]);
            }
            function m() {
                t.params.pagination = re(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination"
                });
                const e = t.params.pagination;
                if (!e.el) return;
                let s;
                "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [
                    ...document.querySelectorAll(e.el)
                ]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [
                    ...t.el.querySelectorAll(e.el)
                ], s.length > 1 && (s = s.find((e)=>E(e, ".swiper")[0] === t.el))), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
                    el: s
                }), s = T(s), s.forEach((s)=>{
                    "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), t.enabled || s.classList.add(e.lockClass);
                }));
            }
            function h() {
                const e = t.params.pagination;
                if (o()) return;
                let s = t.pagination.el;
                s && (s = T(s), s.forEach((s)=>{
                    s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c));
                })), t.pagination.bullets && t.pagination.bullets.forEach((t)=>t.classList.remove(...e.bulletActiveClass.split(" ")));
            }
            a("changeDirection", ()=>{
                if (!t.pagination || !t.pagination.el) return;
                const e = t.params.pagination;
                let { el: s } = t.pagination;
                s = T(s), s.forEach((s)=>{
                    s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
                });
            }), a("init", ()=>{
                !1 === t.params.pagination.enabled ? f() : (m(), u(), p());
            }), a("activeIndexChange", ()=>{
                void 0 === t.snapIndex && p();
            }), a("snapIndexChange", ()=>{
                p();
            }), a("snapGridLengthChange", ()=>{
                u(), p();
            }), a("destroy", ()=>{
                h();
            }), a("enable disable", ()=>{
                let { el: e } = t.pagination;
                e && (e = T(e), e.forEach((e)=>e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
            }), a("lock unlock", ()=>{
                p();
            }), a("click", (e, s)=>{
                const a = s.target, r = T(t.pagination.el);
                if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                    const e = r[0].classList.contains(t.params.pagination.hiddenClass);
                    i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e)=>e.classList.toggle(t.params.pagination.hiddenClass));
                }
            });
            const f = ()=>{
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let { el: e } = t.pagination;
                e && (e = T(e), e.forEach((e)=>e.classList.add(t.params.pagination.paginationDisabledClass))), h();
            };
            Object.assign(t.pagination, {
                enable: ()=>{
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let { el: e } = t.pagination;
                    e && (e = T(e), e.forEach((e)=>e.classList.remove(t.params.pagination.paginationDisabledClass))), m(), u(), p();
                },
                disable: f,
                render: u,
                update: p,
                init: m,
                destroy: h
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: i, emit: r } = e;
            const o = a();
            let d, c, p, u, m = !1, h = null, f = null;
            function g() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const { scrollbar: e, rtlTranslate: s } = t, { dragEl: a, el: i } = e, r = t.params.scrollbar, n = t.params.loop ? t.progressLoop : t.progress;
                let l = c, o = (p - c) * n;
                s ? (o = -o, o > 0 ? (l = c - o, o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o, o = 0) : o + c > p && (l = p - o), t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`, a.style.height = `${l}px`), r.hide && (clearTimeout(h), i.style.opacity = 1, h = setTimeout(()=>{
                    i.style.opacity = 0, i.style.transitionDuration = "400ms";
                }, 1e3));
            }
            function b() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const { scrollbar: e } = t, { dragEl: s, el: a } = e;
                s.style.width = "", s.style.height = "", p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`, a.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
            }
            function y(e) {
                return t.isHorizontal() ? e.clientX : e.clientY;
            }
            function E(e) {
                const { scrollbar: s, rtlTranslate: a } = t, { el: i } = s;
                let r;
                r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
                const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
                t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
            }
            function x(e) {
                const s = t.params.scrollbar, { scrollbar: a, wrapperEl: i } = t, { el: n, dragEl: l } = a;
                m = !0, d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", E(e), clearTimeout(f), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e);
            }
            function S(e) {
                const { scrollbar: s, wrapperEl: a } = t, { el: i, dragEl: n } = s;
                m && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, E(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e));
            }
            function M(e) {
                const s = t.params.scrollbar, { scrollbar: a, wrapperEl: i } = t, { el: n } = a;
                m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = l(()=>{
                    n.style.opacity = 0, n.style.transitionDuration = "400ms";
                }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
            }
            function C(e) {
                const { scrollbar: s, params: a } = t, i = s.el;
                if (!i) return;
                const r = i, n = !!a.passiveListeners && {
                    passive: !1,
                    capture: !1
                }, l = !!a.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
                if (!r) return;
                const d = "on" === e ? "addEventListener" : "removeEventListener";
                r[d]("pointerdown", x, n), o[d]("pointermove", S, n), o[d]("pointerup", M, l);
            }
            function P() {
                const { scrollbar: e, el: s } = t;
                t.params.scrollbar = re(t, t.originalParams.scrollbar, t.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const a = t.params.scrollbar;
                if (!a.el) return;
                let i, r;
                if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el) i || (i = a.el);
                else if (i = o.querySelectorAll(a.el), !i.length) return;
                t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(ne(t.params.scrollbar.dragClass)), r || (r = v("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
                    el: i,
                    dragEl: r
                }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
            }
            function L() {
                const e = t.params.scrollbar, s = t.scrollbar.el;
                s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && C("off");
            }
            s({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), t.scrollbar = {
                el: null,
                dragEl: null
            }, i("changeDirection", ()=>{
                if (!t.scrollbar || !t.scrollbar.el) return;
                const e = t.params.scrollbar;
                let { el: s } = t.scrollbar;
                s = T(s), s.forEach((s)=>{
                    s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
                });
            }), i("init", ()=>{
                !1 === t.params.scrollbar.enabled ? I() : (P(), b(), g());
            }), i("update resize observerUpdate lock unlock changeDirection", ()=>{
                b();
            }), i("setTranslate", ()=>{
                g();
            }), i("setTransition", (e, s)=>{
                !function(e) {
                    t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
                }(s);
            }), i("enable disable", ()=>{
                const { el: e } = t.scrollbar;
                e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
            }), i("destroy", ()=>{
                L();
            });
            const I = ()=>{
                t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), L();
            };
            Object.assign(t.scrollbar, {
                enable: ()=>{
                    t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), P(), b(), g();
                },
                disable: I,
                updateSize: b,
                setTranslate: g,
                init: P,
                destroy: L
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                parallax: {
                    enabled: !1
                }
            });
            const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", r = (e, s)=>{
                const { rtl: a } = t, i = a ? -1 : 1, r = e.getAttribute("data-swiper-parallax") || "0";
                let n = e.getAttribute("data-swiper-parallax-x"), l = e.getAttribute("data-swiper-parallax-y");
                const o = e.getAttribute("data-swiper-parallax-scale"), d = e.getAttribute("data-swiper-parallax-opacity"), c = e.getAttribute("data-swiper-parallax-rotate");
                if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
                    const t = d - (d - 1) * (1 - Math.abs(s));
                    e.style.opacity = t;
                }
                let p = `translate3d(${n}, ${l}, 0px)`;
                if (null != o) p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
                if (c && null != c) p += ` rotate(${c * s * -1}deg)`;
                e.style.transform = p;
            }, n = ()=>{
                const { el: e, slides: s, progress: a, snapGrid: n, isElement: l } = t, o = f(e, i);
                t.isElement && o.push(...f(t.hostEl, i)), o.forEach((e)=>{
                    r(e, a);
                }), s.forEach((e, s)=>{
                    let l = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e)=>{
                        r(e, l);
                    });
                });
            };
            a("beforeInit", ()=>{
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
            }), a("init", ()=>{
                t.params.parallax.enabled && n();
            }), a("setTranslate", ()=>{
                t.params.parallax.enabled && n();
            }), a("setTransition", (e, s)=>{
                t.params.parallax.enabled && function(e) {
                    void 0 === e && (e = t.params.speed);
                    const { el: s, hostEl: a } = t, r = [
                        ...s.querySelectorAll(i)
                    ];
                    t.isElement && r.push(...a.querySelectorAll(i)), r.forEach((t)=>{
                        let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.style.transitionDuration = `${s}ms`;
                    });
                }(s);
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a, emit: i } = e;
            const n = r();
            s({
                zoom: {
                    enabled: !1,
                    limitToOriginalSize: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    panOnMouseMove: !1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), t.zoom = {
                enabled: !1
            };
            let l = 1, o = !1, c = !1, p = {
                x: 0,
                y: 0
            };
            const u = -3;
            let m, h;
            const g = [], v = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3
            }, b = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            }, y = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
            let x, S = 1;
            function T() {
                if (g.length < 2) return 1;
                const e = g[0].pageX, t = g[0].pageY, s = g[1].pageX, a = g[1].pageY;
                return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
            }
            function M() {
                const e = t.params.zoom, s = v.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
                if (e.limitToOriginalSize && v.imageEl && v.imageEl.naturalWidth) {
                    const e = v.imageEl.naturalWidth / v.imageEl.offsetWidth;
                    return Math.min(e, s);
                }
                return s;
            }
            function C(e) {
                const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
                return !!e.target.matches(s) || t.slides.filter((t)=>t.contains(e.target)).length > 0;
            }
            function P(e) {
                const s = `.${t.params.zoom.containerClass}`;
                return !!e.target.matches(s) || [
                    ...t.hostEl.querySelectorAll(s)
                ].filter((t)=>t.contains(e.target)).length > 0;
            }
            function L(e) {
                if ("mouse" === e.pointerType && g.splice(0, g.length), !C(e)) return;
                const s = t.params.zoom;
                if (m = !1, h = !1, g.push(e), !(g.length < 2)) {
                    if (m = !0, v.scaleStart = T(), !v.slideEl) {
                        v.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), v.slideEl || (v.slideEl = t.slides[t.activeIndex]);
                        let a = v.slideEl.querySelector(`.${s.containerClass}`);
                        if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), v.imageEl = a, v.imageWrapEl = a ? E(v.imageEl, `.${s.containerClass}`)[0] : void 0, !v.imageWrapEl) return void (v.imageEl = void 0);
                        v.maxRatio = M();
                    }
                    if (v.imageEl) {
                        const [e, t] = function() {
                            if (g.length < 2) return {
                                x: null,
                                y: null
                            };
                            const e = v.imageEl.getBoundingClientRect();
                            return [
                                (g[0].pageX + (g[1].pageX - g[0].pageX) / 2 - e.x - n.scrollX) / l,
                                (g[0].pageY + (g[1].pageY - g[0].pageY) / 2 - e.y - n.scrollY) / l
                            ];
                        }();
                        v.originX = e, v.originY = t, v.imageEl.style.transitionDuration = "0ms";
                    }
                    o = !0;
                }
            }
            function I(e) {
                if (!C(e)) return;
                const s = t.params.zoom, a = t.zoom, i = g.findIndex((t)=>t.pointerId === e.pointerId);
                i >= 0 && (g[i] = e), g.length < 2 || (h = !0, v.scaleMove = T(), v.imageEl && (a.scale = v.scaleMove / v.scaleStart * l, a.scale > v.maxRatio && (a.scale = v.maxRatio - 1 + (a.scale - v.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), v.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`));
            }
            function z(e) {
                if (!C(e)) return;
                if ("mouse" === e.pointerType && "pointerout" === e.type) return;
                const s = t.params.zoom, a = t.zoom, i = g.findIndex((t)=>t.pointerId === e.pointerId);
                i >= 0 && g.splice(i, 1), m && h && (m = !1, h = !1, v.imageEl && (a.scale = Math.max(Math.min(a.scale, v.maxRatio), s.minRatio), v.imageEl.style.transitionDuration = `${t.params.speed}ms`, v.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, l = a.scale, o = !1, a.scale > 1 && v.slideEl ? v.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && v.slideEl && v.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a.scale && (v.originX = 0, v.originY = 0, v.slideEl = void 0)));
            }
            function A() {
                t.touchEventsData.preventTouchMoveFromPointerMove = !1;
            }
            function $(e) {
                const s = "mouse" === e.pointerType && t.params.zoom.panOnMouseMove;
                if (!C(e) || !P(e)) return;
                const a = t.zoom;
                if (!v.imageEl) return;
                if (!b.isTouched || !v.slideEl) return void (s && O(e));
                if (s) return void O(e);
                b.isMoved || (b.width = v.imageEl.offsetWidth || v.imageEl.clientWidth, b.height = v.imageEl.offsetHeight || v.imageEl.clientHeight, b.startX = d(v.imageWrapEl, "x") || 0, b.startY = d(v.imageWrapEl, "y") || 0, v.slideWidth = v.slideEl.offsetWidth, v.slideHeight = v.slideEl.offsetHeight, v.imageWrapEl.style.transitionDuration = "0ms");
                const i = b.width * a.scale, r = b.height * a.scale;
                b.minX = Math.min(v.slideWidth / 2 - i / 2, 0), b.maxX = -b.minX, b.minY = Math.min(v.slideHeight / 2 - r / 2, 0), b.maxY = -b.minY, b.touchesCurrent.x = g.length > 0 ? g[0].pageX : e.pageX, b.touchesCurrent.y = g.length > 0 ? g[0].pageY : e.pageY;
                if (Math.max(Math.abs(b.touchesCurrent.x - b.touchesStart.x), Math.abs(b.touchesCurrent.y - b.touchesStart.y)) > 5 && (t.allowClick = !1), !b.isMoved && !o) {
                    if (t.isHorizontal() && (Math.floor(b.minX) === Math.floor(b.startX) && b.touchesCurrent.x < b.touchesStart.x || Math.floor(b.maxX) === Math.floor(b.startX) && b.touchesCurrent.x > b.touchesStart.x)) return b.isTouched = !1, void A();
                    if (!t.isHorizontal() && (Math.floor(b.minY) === Math.floor(b.startY) && b.touchesCurrent.y < b.touchesStart.y || Math.floor(b.maxY) === Math.floor(b.startY) && b.touchesCurrent.y > b.touchesStart.y)) return b.isTouched = !1, void A();
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(x), t.touchEventsData.preventTouchMoveFromPointerMove = !0, x = setTimeout(()=>{
                    t.destroyed || A();
                }), b.isMoved = !0;
                const n = (a.scale - l) / (v.maxRatio - t.params.zoom.minRatio), { originX: c, originY: p } = v;
                b.currentX = b.touchesCurrent.x - b.touchesStart.x + b.startX + n * (b.width - 2 * c), b.currentY = b.touchesCurrent.y - b.touchesStart.y + b.startY + n * (b.height - 2 * p), b.currentX < b.minX && (b.currentX = b.minX + 1 - (b.minX - b.currentX + 1) ** .8), b.currentX > b.maxX && (b.currentX = b.maxX - 1 + (b.currentX - b.maxX + 1) ** .8), b.currentY < b.minY && (b.currentY = b.minY + 1 - (b.minY - b.currentY + 1) ** .8), b.currentY > b.maxY && (b.currentY = b.maxY - 1 + (b.currentY - b.maxY + 1) ** .8), y.prevPositionX || (y.prevPositionX = b.touchesCurrent.x), y.prevPositionY || (y.prevPositionY = b.touchesCurrent.y), y.prevTime || (y.prevTime = Date.now()), y.x = (b.touchesCurrent.x - y.prevPositionX) / (Date.now() - y.prevTime) / 2, y.y = (b.touchesCurrent.y - y.prevPositionY) / (Date.now() - y.prevTime) / 2, Math.abs(b.touchesCurrent.x - y.prevPositionX) < 2 && (y.x = 0), Math.abs(b.touchesCurrent.y - y.prevPositionY) < 2 && (y.y = 0), y.prevPositionX = b.touchesCurrent.x, y.prevPositionY = b.touchesCurrent.y, y.prevTime = Date.now(), v.imageWrapEl.style.transform = `translate3d(${b.currentX}px, ${b.currentY}px,0)`;
            }
            function k() {
                const e = t.zoom;
                v.slideEl && t.activeIndex !== t.slides.indexOf(v.slideEl) && (v.imageEl && (v.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), v.imageWrapEl && (v.imageWrapEl.style.transform = "translate3d(0,0,0)"), v.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, l = 1, v.slideEl = void 0, v.imageEl = void 0, v.imageWrapEl = void 0, v.originX = 0, v.originY = 0);
            }
            function O(e) {
                if (l <= 1 || !v.imageWrapEl) return;
                if (!C(e) || !P(e)) return;
                const t = n.getComputedStyle(v.imageWrapEl).transform, s = new n.DOMMatrix(t);
                if (!c) return c = !0, p.x = e.clientX, p.y = e.clientY, b.startX = s.e, b.startY = s.f, b.width = v.imageEl.offsetWidth || v.imageEl.clientWidth, b.height = v.imageEl.offsetHeight || v.imageEl.clientHeight, v.slideWidth = v.slideEl.offsetWidth, void (v.slideHeight = v.slideEl.offsetHeight);
                const a = (e.clientX - p.x) * u, i = (e.clientY - p.y) * u, r = b.width * l, o = b.height * l, d = v.slideWidth, m = v.slideHeight, h = Math.min(d / 2 - r / 2, 0), f = -h, g = Math.min(m / 2 - o / 2, 0), w = -g, y = Math.max(Math.min(b.startX + a, f), h), E = Math.max(Math.min(b.startY + i, w), g);
                v.imageWrapEl.style.transitionDuration = "0ms", v.imageWrapEl.style.transform = `translate3d(${y}px, ${E}px, 0)`, p.x = e.clientX, p.y = e.clientY, b.startX = y, b.startY = E;
            }
            function D(e) {
                const s = t.zoom, a = t.params.zoom;
                if (!v.slideEl) {
                    e && e.target && (v.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), v.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? v.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : v.slideEl = t.slides[t.activeIndex]);
                    let s = v.slideEl.querySelector(`.${a.containerClass}`);
                    s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), v.imageEl = s, v.imageWrapEl = s ? E(v.imageEl, `.${a.containerClass}`)[0] : void 0;
                }
                if (!v.imageEl || !v.imageWrapEl) return;
                let i, r, o, d, c, p, u, m, h, g, y, x, S, T, C, P, L, I;
                t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), v.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === b.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = b.touchesStart.x, r = b.touchesStart.y);
                const z = "number" == typeof e ? e : null;
                1 === l && z && (i = void 0, r = void 0, b.touchesStart.x = void 0, b.touchesStart.y = void 0);
                const A = M();
                s.scale = z || A, l = z || A, !e || 1 === l && z ? (u = 0, m = 0) : (L = v.slideEl.offsetWidth, I = v.slideEl.offsetHeight, o = w(v.slideEl).left + n.scrollX, d = w(v.slideEl).top + n.scrollY, c = o + L / 2 - i, p = d + I / 2 - r, h = v.imageEl.offsetWidth || v.imageEl.clientWidth, g = v.imageEl.offsetHeight || v.imageEl.clientHeight, y = h * s.scale, x = g * s.scale, S = Math.min(L / 2 - y / 2, 0), T = Math.min(I / 2 - x / 2, 0), C = -S, P = -T, u = c * s.scale, m = p * s.scale, u < S && (u = S), u > C && (u = C), m < T && (m = T), m > P && (m = P)), z && 1 === s.scale && (v.originX = 0, v.originY = 0), v.imageWrapEl.style.transitionDuration = "300ms", v.imageWrapEl.style.transform = `translate3d(${u}px, ${m}px,0)`, v.imageEl.style.transitionDuration = "300ms", v.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`;
            }
            function G() {
                const e = t.zoom, s = t.params.zoom;
                if (!v.slideEl) {
                    t.params.virtual && t.params.virtual.enabled && t.virtual ? v.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : v.slideEl = t.slides[t.activeIndex];
                    let e = v.slideEl.querySelector(`.${s.containerClass}`);
                    e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), v.imageEl = e, v.imageWrapEl = e ? E(v.imageEl, `.${s.containerClass}`)[0] : void 0;
                }
                v.imageEl && v.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, l = 1, b.touchesStart.x = void 0, b.touchesStart.y = void 0, v.imageWrapEl.style.transitionDuration = "300ms", v.imageWrapEl.style.transform = "translate3d(0,0,0)", v.imageEl.style.transitionDuration = "300ms", v.imageEl.style.transform = "translate3d(0,0,0) scale(1)", v.slideEl.classList.remove(`${s.zoomedSlideClass}`), v.slideEl = void 0, v.originX = 0, v.originY = 0, t.params.zoom.panOnMouseMove && (p = {
                    x: 0,
                    y: 0
                }, c && (c = !1, b.startX = 0, b.startY = 0)));
            }
            function H(e) {
                const s = t.zoom;
                s.scale && 1 !== s.scale ? G() : D(e);
            }
            function X() {
                return {
                    passiveListener: !!t.params.passiveListeners && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !t.params.passiveListeners || {
                        passive: !1,
                        capture: !0
                    }
                };
            }
            function B() {
                const e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const { passiveListener: s, activeListenerWithCapture: a } = X();
                t.wrapperEl.addEventListener("pointerdown", L, s), t.wrapperEl.addEventListener("pointermove", I, a), [
                    "pointerup",
                    "pointercancel",
                    "pointerout"
                ].forEach((e)=>{
                    t.wrapperEl.addEventListener(e, z, s);
                }), t.wrapperEl.addEventListener("pointermove", $, a);
            }
            function Y() {
                const e = t.zoom;
                if (!e.enabled) return;
                e.enabled = !1;
                const { passiveListener: s, activeListenerWithCapture: a } = X();
                t.wrapperEl.removeEventListener("pointerdown", L, s), t.wrapperEl.removeEventListener("pointermove", I, a), [
                    "pointerup",
                    "pointercancel",
                    "pointerout"
                ].forEach((e)=>{
                    t.wrapperEl.removeEventListener(e, z, s);
                }), t.wrapperEl.removeEventListener("pointermove", $, a);
            }
            Object.defineProperty(t.zoom, "scale", {
                get: ()=>S,
                set (e) {
                    if (S !== e) {
                        const t = v.imageEl, s = v.slideEl;
                        i("zoomChange", e, t, s);
                    }
                    S = e;
                }
            }), a("init", ()=>{
                t.params.zoom.enabled && B();
            }), a("destroy", ()=>{
                Y();
            }), a("touchStart", (e, s)=>{
                t.zoom.enabled && function(e) {
                    const s = t.device;
                    if (!v.imageEl) return;
                    if (b.isTouched) return;
                    s.android && e.cancelable && e.preventDefault(), b.isTouched = !0;
                    const a = g.length > 0 ? g[0] : e;
                    b.touchesStart.x = a.pageX, b.touchesStart.y = a.pageY;
                }(s);
            }), a("touchEnd", (e, s)=>{
                t.zoom.enabled && function() {
                    const e = t.zoom;
                    if (g.length = 0, !v.imageEl) return;
                    if (!b.isTouched || !b.isMoved) return b.isTouched = !1, void (b.isMoved = !1);
                    b.isTouched = !1, b.isMoved = !1;
                    let s = 300, a = 300;
                    const i = y.x * s, r = b.currentX + i, n = y.y * a, l = b.currentY + n;
                    0 !== y.x && (s = Math.abs((r - b.currentX) / y.x)), 0 !== y.y && (a = Math.abs((l - b.currentY) / y.y));
                    const o = Math.max(s, a);
                    b.currentX = r, b.currentY = l;
                    const d = b.width * e.scale, c = b.height * e.scale;
                    b.minX = Math.min(v.slideWidth / 2 - d / 2, 0), b.maxX = -b.minX, b.minY = Math.min(v.slideHeight / 2 - c / 2, 0), b.maxY = -b.minY, b.currentX = Math.max(Math.min(b.currentX, b.maxX), b.minX), b.currentY = Math.max(Math.min(b.currentY, b.maxY), b.minY), v.imageWrapEl.style.transitionDuration = `${o}ms`, v.imageWrapEl.style.transform = `translate3d(${b.currentX}px, ${b.currentY}px,0)`;
                }();
            }), a("doubleTap", (e, s)=>{
                !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && H(s);
            }), a("transitionEnd", ()=>{
                t.zoom.enabled && t.params.zoom.enabled && k();
            }), a("slideChange", ()=>{
                t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && k();
            }), Object.assign(t.zoom, {
                enable: B,
                disable: Y,
                in: D,
                out: G,
                toggle: H
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            function i(e, t) {
                const s = function() {
                    let e, t, s;
                    return (a, i)=>{
                        for(t = -1, e = a.length; e - t > 1;)s = e + t >> 1, a[s] <= i ? t = s : e = s;
                        return e;
                    };
                }();
                let a, i;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
                }, this;
            }
            function r() {
                t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
            }
            s({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t.controller = {
                control: void 0
            }, a("beforeInit", ()=>{
                if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) ("string" == typeof t.params.controller.control ? [
                    ...document.querySelectorAll(t.params.controller.control)
                ] : [
                    t.params.controller.control
                ]).forEach((e)=>{
                    if (t.controller.control || (t.controller.control = []), e && e.swiper) t.controller.control.push(e.swiper);
                    else if (e) {
                        const s = `${t.params.eventsPrefix}init`, a = (i)=>{
                            t.controller.control.push(i.detail[0]), t.update(), e.removeEventListener(s, a);
                        };
                        e.addEventListener(s, a);
                    }
                });
                else t.controller.control = t.params.controller.control;
            }), a("update", ()=>{
                r();
            }), a("resize", ()=>{
                r();
            }), a("observerUpdate", ()=>{
                r();
            }), a("setTranslate", (e, s, a)=>{
                t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a);
            }), a("setTransition", (e, s, a)=>{
                t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a);
            }), Object.assign(t.controller, {
                setTranslate: function(e, s) {
                    const a = t.controller.control;
                    let r, n;
                    const l = t.constructor;
                    function o(e) {
                        if (e.destroyed) return;
                        const s = t.rtlTranslate ? -t.translate : t.translate;
                        "slide" === t.params.controller.by && (!function(e) {
                            t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid);
                        }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                    if (Array.isArray(a)) for(let e = 0; e < a.length; e += 1)a[e] !== s && a[e] instanceof l && o(a[e]);
                    else a instanceof l && s !== a && o(a);
                },
                setTransition: function(e, s) {
                    const a = t.constructor, i = t.controller.control;
                    let r;
                    function n(s) {
                        s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && l(()=>{
                            s.updateAutoHeight();
                        }), x(s.wrapperEl, ()=>{
                            i && s.transitionEnd();
                        })));
                    }
                    if (Array.isArray(i)) for(r = 0; r < i.length; r += 1)i[r] !== s && i[r] instanceof a && n(i[r]);
                    else i instanceof a && s !== i && n(i);
                }
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: i } = e;
            s({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    containerRole: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null,
                    scrollOnFocus: !0
                }
            }), t.a11y = {
                clicked: !1
            };
            let r, n, l = null, o = (new Date).getTime();
            function d(e) {
                const t = l;
                0 !== t.length && (t.innerHTML = "", t.innerHTML = e);
            }
            function c(e) {
                (e = T(e)).forEach((e)=>{
                    e.setAttribute("tabIndex", "0");
                });
            }
            function p(e) {
                (e = T(e)).forEach((e)=>{
                    e.setAttribute("tabIndex", "-1");
                });
            }
            function u(e, t) {
                (e = T(e)).forEach((e)=>{
                    e.setAttribute("role", t);
                });
            }
            function m(e, t) {
                (e = T(e)).forEach((e)=>{
                    e.setAttribute("aria-roledescription", t);
                });
            }
            function h(e, t) {
                (e = T(e)).forEach((e)=>{
                    e.setAttribute("aria-label", t);
                });
            }
            function f(e) {
                (e = T(e)).forEach((e)=>{
                    e.setAttribute("aria-disabled", !0);
                });
            }
            function g(e) {
                (e = T(e)).forEach((e)=>{
                    e.setAttribute("aria-disabled", !1);
                });
            }
            function w(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const s = t.params.a11y, a = e.target;
                if (!t.pagination || !t.pagination.el || a !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(ne(t.params.pagination.bulletClass))) {
                    if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                        const e = T(t.navigation.prevEl);
                        T(t.navigation.nextEl).includes(a) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)), e.includes(a) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage));
                    }
                    t.pagination && a.matches(ne(t.params.pagination.bulletClass)) && a.click();
                }
            }
            function b() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
            }
            function E() {
                return b() && t.params.pagination.clickable;
            }
            const x = (e, t, s)=>{
                c(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", w)), h(e, s), function(e, t) {
                    (e = T(e)).forEach((e)=>{
                        e.setAttribute("aria-controls", t);
                    });
                }(e, t);
            }, S = (e)=>{
                n && n !== e.target && !n.contains(e.target) && (r = !0), t.a11y.clicked = !0;
            }, M = ()=>{
                r = !1, requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        t.destroyed || (t.a11y.clicked = !1);
                    });
                });
            }, C = (e)=>{
                o = (new Date).getTime();
            }, P = (e)=>{
                if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
                if ((new Date).getTime() - o < 100) return;
                const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                if (!s || !t.slides.includes(s)) return;
                n = s;
                const a = t.slides.indexOf(s) === t.activeIndex, i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(()=>{
                    r || (t.params.loop ? t.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(s), 0), r = !1);
                }));
            }, L = ()=>{
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage), e.slideRole && u(t.slides, e.slideRole);
                const s = t.slides.length;
                e.slideLabelMessage && t.slides.forEach((a, i)=>{
                    const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
                    h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s));
                });
            }, I = ()=>{
                const e = t.params.a11y;
                t.el.append(l);
                const s = t.el;
                e.containerRoleDescriptionMessage && m(s, e.containerRoleDescriptionMessage), e.containerMessage && h(s, e.containerMessage), e.containerRole && u(s, e.containerRole);
                const i = t.wrapperEl, r = e.id || i.getAttribute("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16))}`;
                var n;
                const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var d;
                d = r, T(i).forEach((e)=>{
                    e.setAttribute("id", d);
                }), function(e, t) {
                    (e = T(e)).forEach((e)=>{
                        e.setAttribute("aria-live", t);
                    });
                }(i, o), L();
                let { nextEl: c, prevEl: p } = t.navigation ? t.navigation : {};
                if (c = T(c), p = T(p), c && c.forEach((t)=>x(t, r, e.nextSlideMessage)), p && p.forEach((t)=>x(t, r, e.prevSlideMessage)), E()) T(t.pagination.el).forEach((e)=>{
                    e.addEventListener("keydown", w);
                });
                a().addEventListener("visibilitychange", C), t.el.addEventListener("focus", P, !0), t.el.addEventListener("focus", P, !0), t.el.addEventListener("pointerdown", S, !0), t.el.addEventListener("pointerup", M, !0);
            };
            i("beforeInit", ()=>{
                l = v("span", t.params.a11y.notificationClass), l.setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true");
            }), i("afterInit", ()=>{
                t.params.a11y.enabled && I();
            }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
                t.params.a11y.enabled && L();
            }), i("fromEdge toEdge afterInit lock unlock", ()=>{
                t.params.a11y.enabled && function() {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    const { nextEl: e, prevEl: s } = t.navigation;
                    s && (t.isBeginning ? (f(s), p(s)) : (g(s), c(s))), e && (t.isEnd ? (f(e), p(e)) : (g(e), c(e)));
                }();
            }), i("paginationUpdate", ()=>{
                t.params.a11y.enabled && function() {
                    const e = t.params.a11y;
                    b() && t.pagination.bullets.forEach((s)=>{
                        t.params.pagination.clickable && (c(s), t.params.pagination.renderBullet || (u(s, "button"), h(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))), s.matches(ne(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current");
                    });
                }();
            }), i("destroy", ()=>{
                t.params.a11y.enabled && function() {
                    l && l.remove();
                    let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
                    e = T(e), s = T(s), e && e.forEach((e)=>e.removeEventListener("keydown", w)), s && s.forEach((e)=>e.removeEventListener("keydown", w)), E() && T(t.pagination.el).forEach((e)=>{
                        e.removeEventListener("keydown", w);
                    });
                    a().removeEventListener("visibilitychange", C), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", P, !0), t.el.removeEventListener("pointerdown", S, !0), t.el.removeEventListener("pointerup", M, !0));
                }();
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1
                }
            });
            let i = !1, n = {};
            const l = (e)=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = (e)=>{
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e)=>"" !== e), i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                };
            }, d = (e, s)=>{
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`) : t.slides[s];
                let d = l(o.getAttribute("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e ? `${e}/` : ""}${d}`;
                } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                    value: d
                }, null, d) : a.history.pushState({
                    value: d
                }, null, d));
            }, c = (e, s, a)=>{
                if (s) for(let i = 0, r = t.slides.length; i < r; i += 1){
                    const r = t.slides[i];
                    if (l(r.getAttribute("data-history")) === s) {
                        const s = t.getSlideIndex(r);
                        t.slideTo(s, e, a);
                    }
                }
                else t.slideTo(0, e, a);
            }, p = ()=>{
                n = o(t.params.url), c(t.params.speed, n.value, !1);
            };
            a("init", ()=>{
                t.params.history.enabled && (()=>{
                    const e = r();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                        i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p);
                    }
                })();
            }), a("destroy", ()=>{
                t.params.history.enabled && (()=>{
                    const e = r();
                    t.params.history.replaceState || e.removeEventListener("popstate", p);
                })();
            }), a("transitionEnd _freeModeNoMomentumRelease", ()=>{
                i && d(t.params.history.key, t.activeIndex);
            }), a("slideChange", ()=>{
                i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, emit: i, on: n } = e, l = !1;
            const o = a(), d = r();
            s({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1,
                    getSlideIndex (e, s) {
                        if (t.virtual && t.params.virtual.enabled) {
                            const e = t.slides.find((e)=>e.getAttribute("data-hash") === s);
                            if (!e) return 0;
                            return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        }
                        return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0]);
                    }
                }
            });
            const c = ()=>{
                i("hashChange");
                const e = o.location.hash.replace("#", ""), s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                if (e !== (s ? s.getAttribute("data-hash") : "")) {
                    const s = t.params.hashNavigation.getSlideIndex(t, e);
                    if (void 0 === s || Number.isNaN(s)) return;
                    t.slideTo(s);
                }
            }, p = ()=>{
                if (!l || !t.params.hashNavigation.enabled) return;
                const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex], s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"));
            };
            n("init", ()=>{
                t.params.hashNavigation.enabled && (()=>{
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    l = !0;
                    const e = o.location.hash.replace("#", "");
                    if (e) {
                        const s = 0, a = t.params.hashNavigation.getSlideIndex(t, e);
                        t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
                    }
                    t.params.hashNavigation.watchState && d.addEventListener("hashchange", c);
                })();
            }), n("destroy", ()=>{
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c);
            }), n("transitionEnd _freeModeNoMomentumRelease", ()=>{
                l && p();
            }), n("slideChange", ()=>{
                l && t.params.cssMode && p();
            });
        },
        function(e) {
            let t, s, { swiper: i, extendParams: r, on: n, emit: l, params: o } = e;
            i.autoplay = {
                running: !1,
                paused: !1,
                timeLeft: 0
            }, r({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !1,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            });
            let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3, w = o && o.autoplay ? o.autoplay.delay : 3e3, b = (new Date).getTime();
            function y(e) {
                i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || e.detail && e.detail.bySwiperTouchMove || C());
            }
            const E = ()=>{
                if (i.destroyed || !i.autoplay.running) return;
                i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
                const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
                i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), s = requestAnimationFrame(()=>{
                    E();
                });
            }, x = (e)=>{
                if (i.destroyed || !i.autoplay.running) return;
                cancelAnimationFrame(s), E();
                let a = void 0 === e ? i.params.autoplay.delay : e;
                v = i.params.autoplay.delay, w = i.params.autoplay.delay;
                const r = (()=>{
                    let e;
                    if (e = i.virtual && i.params.virtual.enabled ? i.slides.find((e)=>e.classList.contains("swiper-slide-active")) : i.slides[i.activeIndex], !e) return;
                    return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
                })();
                !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, v = r, w = r), d = a;
                const n = i.params.speed, o = ()=>{
                    i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame(()=>{
                        x();
                    })));
                };
                return a > 0 ? (clearTimeout(t), t = setTimeout(()=>{
                    o();
                }, a)) : requestAnimationFrame(()=>{
                    o();
                }), a;
            }, S = ()=>{
                b = (new Date).getTime(), i.autoplay.running = !0, x(), l("autoplayStart");
            }, T = ()=>{
                i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop");
            }, M = (e, s)=>{
                if (i.destroyed || !i.autoplay.running) return;
                clearTimeout(t), e || (f = !0);
                const a = ()=>{
                    l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C();
                };
                if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
                const r = d || i.params.autoplay.delay;
                d = r - ((new Date).getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a());
            }, C = ()=>{
                i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(), f ? (f = !1, x(d)) : x(), i.autoplay.paused = !1, l("autoplayResume"));
            }, P = ()=>{
                if (i.destroyed || !i.autoplay.running) return;
                const e = a();
                "hidden" === e.visibilityState && (f = !0, M(!0)), "visible" === e.visibilityState && C();
            }, L = (e)=>{
                "mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || M(!0));
            }, I = (e)=>{
                "mouse" === e.pointerType && (g = !1, i.autoplay.paused && C());
            };
            n("init", ()=>{
                i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", I)), a().addEventListener("visibilitychange", P), S());
            }), n("destroy", ()=>{
                i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", I)), a().removeEventListener("visibilitychange", P), i.autoplay.running && T();
            }), n("_freeModeStaticRelease", ()=>{
                (u || f) && C();
            }), n("_freeModeNoMomentumRelease", ()=>{
                i.params.autoplay.disableOnInteraction ? T() : M(!0, !0);
            }), n("beforeTransitionStart", (e, t, s)=>{
                !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T());
            }), n("sliderFirstMove", ()=>{
                !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, f = !1, m = setTimeout(()=>{
                    f = !0, u = !0, M(!0);
                }, 200)));
            }), n("touchEnd", ()=>{
                if (!i.destroyed && i.autoplay.running && p) {
                    if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
                    u && i.params.cssMode && C(), u = !1, p = !1;
                }
            }), n("slideChange", ()=>{
                !i.destroyed && i.autoplay.running && (h = !0);
            }), Object.assign(i.autoplay, {
                start: S,
                stop: T,
                pause: M,
                resume: C
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: i } = e;
            s({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let r = !1, n = !1;
            function l() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const s = e.clickedIndex, a = e.clickedSlide;
                if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let i;
                i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
            }
            function o() {
                const { thumbs: e } = t.params;
                if (r) return !1;
                r = !0;
                const s = t.constructor;
                if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper.update();
                else if (c(e.swiper)) {
                    const a = Object.assign({}, e.swiper);
                    Object.assign(a, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new s(a), n = !0;
                }
                return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0;
            }
            function d(e) {
                const s = t.thumbs.swiper;
                if (!s || s.destroyed) return;
                const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                let i = 1;
                const r = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach((e)=>e.classList.remove(r)), s.params.loop || s.params.virtual && s.params.virtual.enabled) for(let e = 0; e < i; e += 1)f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e)=>{
                    e.classList.add(r);
                });
                else for(let e = 0; e < i; e += 1)s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
                const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
                if (t.realIndex !== s.realIndex || l) {
                    const i = s.activeIndex;
                    let r, o;
                    if (s.params.loop) {
                        const e = s.slides.find((e)=>e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`);
                        r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev";
                    } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
                    l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0));
                }
            }
            t.thumbs = {
                swiper: null
            }, i("beforeInit", ()=>{
                const { thumbs: e } = t.params;
                if (e && e.swiper) {
                    if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                        const s = a(), i = ()=>{
                            const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                            if (a && a.swiper) e.swiper = a.swiper, o(), d(!0);
                            else if (a) {
                                const s = `${t.params.eventsPrefix}init`, i = (r)=>{
                                    e.swiper = r.detail[0], a.removeEventListener(s, i), o(), d(!0), e.swiper.update(), t.update();
                                };
                                a.addEventListener(s, i);
                            }
                            return a;
                        }, r = ()=>{
                            if (t.destroyed) return;
                            i() || requestAnimationFrame(r);
                        };
                        requestAnimationFrame(r);
                    } else o(), d(!0);
                }
            }), i("slideChange update resize observerUpdate", ()=>{
                d();
            }), i("setTransition", (e, s)=>{
                const a = t.thumbs.swiper;
                a && !a.destroyed && a.setTransition(s);
            }), i("beforeDestroy", ()=>{
                const e = t.thumbs.swiper;
                e && !e.destroyed && n && e.destroy();
            }), Object.assign(t.thumbs, {
                init: o,
                update: d
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, emit: a, once: i } = e;
            s({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }), Object.assign(t, {
                freeMode: {
                    onTouchStart: function() {
                        if (t.params.cssMode) return;
                        const e = t.getTranslate();
                        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                            currentPos: t.rtl ? t.translate : -t.translate
                        });
                    },
                    onTouchMove: function() {
                        if (t.params.cssMode) return;
                        const { touchEventsData: e, touches: s } = t;
                        0 === e.velocities.length && e.velocities.push({
                            position: s[t.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({
                            position: s[t.isHorizontal() ? "currentX" : "currentY"],
                            time: o()
                        });
                    },
                    onTouchEnd: function(e) {
                        let { currentPos: s } = e;
                        if (t.params.cssMode) return;
                        const { params: r, wrapperEl: n, rtlTranslate: l, snapGrid: d, touchEventsData: c } = t, p = o() - c.touchStartTime;
                        if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                        else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                        else {
                            if (r.freeMode.momentum) {
                                if (c.velocities.length > 1) {
                                    const e = c.velocities.pop(), s = c.velocities.pop(), a = e.position - s.position, i = e.time - s.time;
                                    t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || o() - e.time > 300) && (t.velocity = 0);
                                } else t.velocity = 0;
                                t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                                let e = 1e3 * r.freeMode.momentumRatio;
                                const s = t.velocity * e;
                                let p = t.translate + s;
                                l && (p = -p);
                                let u, m = !1;
                                const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                                let f;
                                if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
                                else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
                                else if (r.freeMode.sticky) {
                                    let e;
                                    for(let t = 0; t < d.length; t += 1)if (d[t] > -p) {
                                        e = t;
                                        break;
                                    }
                                    p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p;
                                }
                                if (f && i("transitionEnd", ()=>{
                                    t.loopFix();
                                }), 0 !== t.velocity) {
                                    if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                                        const s = Math.abs((l ? -p : p) - t.translate), a = t.slidesSizesGrid[t.activeIndex];
                                        e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                                    }
                                } else if (r.freeMode.sticky) return void t.slideToClosest();
                                r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, ()=>{
                                    t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(()=>{
                                        t.setTranslate(u), x(n, ()=>{
                                            t && !t.destroyed && t.transitionEnd();
                                        });
                                    }, 0));
                                })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, ()=>{
                                    t && !t.destroyed && t.transitionEnd();
                                }))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses();
                            } else {
                                if (r.freeMode.sticky) return void t.slideToClosest();
                                r.freeMode && a("_freeModeNoMomentumRelease");
                            }
                            (!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                        }
                    }
                }
            });
        },
        function(e) {
            let t, s, a, i, { swiper: r, extendParams: n, on: l } = e;
            n({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            });
            const o = ()=>{
                let e = r.params.spaceBetween;
                return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e;
            };
            l("init", ()=>{
                i = r.params.grid && r.params.grid.rows > 1;
            }), l("update", ()=>{
                const { params: e, el: t } = r, s = e.grid && e.grid.rows > 1;
                i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), i = s;
            }), r.grid = {
                initSlides: (e)=>{
                    const { slidesPerView: i } = r.params, { rows: n, fill: l } = r.params.grid, o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
                    a = Math.floor(o / n), t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n, "auto" !== i && "row" === l && (t = Math.max(t, i * n)), s = t / n;
                },
                unsetSlides: ()=>{
                    r.slides && r.slides.forEach((e)=>{
                        e.swiperSlideGridSet && (e.style.height = "", e.style[r.getDirectionLabel("margin-top")] = "");
                    });
                },
                updateSlide: (e, i, n)=>{
                    const { slidesPerGroup: l } = r.params, d = o(), { rows: c, fill: p } = r.params.grid, u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
                    let m, h, f;
                    if ("row" === p && l > 1) {
                        const s = Math.floor(e / (l * c)), a = e - c * l * s, r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
                        f = Math.floor(a / r), h = a - f * r + s * l, m = h + f * t / c, i.style.order = m;
                    } else "column" === p ? (h = Math.floor(e / c), f = e - h * c, (h > a || h === a && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
                    i.row = f, i.column = h, i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`, i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", i.swiperSlideGridSet = !0;
                },
                updateWrapperSize: (e, s)=>{
                    const { centeredSlides: a, roundLengths: i } = r.params, n = o(), { rows: l } = r.params.grid;
                    if (r.virtualSize = (e + n) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - n, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`), a) {
                        const e = [];
                        for(let t = 0; t < s.length; t += 1){
                            let a = s[t];
                            i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a);
                        }
                        s.splice(0, s.length), s.push(...e);
                    }
                }
            };
        },
        function(e) {
            let { swiper: t } = e;
            Object.assign(t, {
                appendSlide: le.bind(t),
                prependSlide: oe.bind(t),
                addSlide: de.bind(t),
                removeSlide: ce.bind(t),
                removeAllSlides: pe.bind(t)
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                fadeEffect: {
                    crossFade: !1
                }
            }), ue({
                effect: "fade",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                    const { slides: e } = t;
                    t.params.fadeEffect;
                    for(let s = 0; s < e.length; s += 1){
                        const e = t.slides[s];
                        let a = -e.swiperSlideOffset;
                        t.params.virtualTranslate || (a -= t.translate);
                        let i = 0;
                        t.isHorizontal() || (i = a, a = 0);
                        const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0), n = me(0, e);
                        n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`;
                    }
                },
                setTransition: (e)=>{
                    const s = t.slides.map((e)=>h(e));
                    s.forEach((t)=>{
                        t.style.transitionDuration = `${e}ms`;
                    }), he({
                        swiper: t,
                        duration: e,
                        transformElements: s,
                        allSlides: !0
                    });
                },
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            });
            const i = (e, t, s)=>{
                let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0));
            };
            ue({
                effect: "cube",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                    const { el: e, wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: d } = t, c = M(t), p = t.params.cubeEffect, u = t.isHorizontal(), m = t.virtual && t.params.virtual.enabled;
                    let h, f = 0;
                    p.shadow && (u ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${r}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), e.append(h))));
                    for(let e = 0; e < a.length; e += 1){
                        const t = a[e];
                        let s = e;
                        m && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                        let r = 90 * s, n = Math.floor(r / 360);
                        l && (r = -r, n = Math.floor(-r / 360));
                        const d = Math.max(Math.min(t.progress, 1), -1);
                        let h = 0, g = 0, v = 0;
                        s % 4 == 0 ? (h = 4 * -n * o, v = 0) : (s - 1) % 4 == 0 ? (h = 0, v = 4 * -n * o) : (s - 2) % 4 == 0 ? (h = o + 4 * n * o, v = o) : (s - 3) % 4 == 0 && (h = -o, v = 3 * o + 4 * o * n), l && (h = -h), u || (g = h, h = 0);
                        const w = `rotateX(${c(u ? 0 : -r)}deg) rotateY(${c(u ? r : 0)}deg) translate3d(${h}px, ${g}px, ${v}px)`;
                        d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.style.transform = w, p.slideShadows && i(t, d, u);
                    }
                    if (s.style.transformOrigin = `50% 50% -${o / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`, p.shadow) {
                        if (u) h.style.transform = `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`;
                        else {
                            const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset;
                            h.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-89.99deg)`;
                        }
                    }
                    const g = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                    s.style.transform = `translate3d(0px,0,${g}px) rotateX(${c(t.isHorizontal() ? 0 : f)}deg) rotateY(${c(t.isHorizontal() ? -f : 0)}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${g}px`);
                },
                setTransition: (e)=>{
                    const { el: s, slides: a } = t;
                    if (a.forEach((t)=>{
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                            t.style.transitionDuration = `${e}ms`;
                        });
                    }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                        const t = s.querySelector(".swiper-cube-shadow");
                        t && (t.style.transitionDuration = `${e}ms`);
                    }
                },
                recreateShadows: ()=>{
                    const e = t.isHorizontal();
                    t.slides.forEach((t)=>{
                        const s = Math.max(Math.min(t.progress, 1), -1);
                        i(t, s, e);
                    });
                },
                getEffectParams: ()=>t.params.cubeEffect,
                perspective: ()=>!0,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            });
            const i = (e, s)=>{
                let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                a || (a = fe("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = fe("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0));
            };
            ue({
                effect: "flip",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                    const { slides: e, rtlTranslate: s } = t, a = t.params.flipEffect, r = M(t);
                    for(let n = 0; n < e.length; n += 1){
                        const l = e[n];
                        let o = l.progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(l.progress, 1), -1));
                        const d = l.swiperSlideOffset;
                        let c = -180 * o, p = 0, u = t.params.cssMode ? -d - t.translate : -d, m = 0;
                        t.isHorizontal() ? s && (c = -c) : (m = u, u = 0, p = -c, c = 0), l.style.zIndex = -Math.abs(Math.round(o)) + e.length, a.slideShadows && i(l, o);
                        const h = `translate3d(${u}px, ${m}px, 0px) rotateX(${r(p)}deg) rotateY(${r(c)}deg)`;
                        me(0, l).style.transform = h;
                    }
                },
                setTransition: (e)=>{
                    const s = t.slides.map((e)=>h(e));
                    s.forEach((t)=>{
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                            t.style.transitionDuration = `${e}ms`;
                        });
                    }), he({
                        swiper: t,
                        duration: e,
                        transformElements: s
                    });
                },
                recreateShadows: ()=>{
                    t.params.flipEffect, t.slides.forEach((e)=>{
                        let s = e.progress;
                        t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s);
                    });
                },
                getEffectParams: ()=>t.params.flipEffect,
                perspective: ()=>!0,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            }), ue({
                effect: "coverflow",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                    const { width: e, height: s, slides: a, slidesSizesGrid: i } = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth, p = M(t);
                    for(let e = 0, t = a.length; e < t; e += 1){
                        const t = a[e], s = i[e], l = (o - t.swiperSlideOffset - s / 2) / s, u = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                        let m = n ? d * u : 0, h = n ? 0 : d * u, f = -c * Math.abs(u), g = r.stretch;
                        "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * s);
                        let v = n ? 0 : g * u, w = n ? g * u : 0, b = 1 - (1 - r.scale) * Math.abs(u);
                        Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0);
                        const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${p(h)}deg) rotateY(${p(m)}deg) scale(${b})`;
                        if (me(0, t).style.transform = y, t.style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
                            let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"), s = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                            e || (e = fe("coverflow", t, n ? "left" : "top")), s || (s = fe("coverflow", t, n ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), s && (s.style.opacity = -u > 0 ? -u : 0);
                        }
                    }
                },
                setTransition: (e)=>{
                    t.slides.map((e)=>h(e)).forEach((t)=>{
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                            t.style.transitionDuration = `${e}ms`;
                        });
                    });
                },
                perspective: ()=>!0,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0
                    })
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                creativeEffect: {
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const i = (e)=>"string" == typeof e ? e : `${e}px`;
            ue({
                effect: "creative",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                    const { slides: e, wrapperEl: s, slidesSizesGrid: a } = t, r = t.params.creativeEffect, { progressMultiplier: n } = r, l = t.params.centeredSlides, o = M(t);
                    if (l) {
                        const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                        s.style.transform = `translateX(calc(50% - ${e}px))`;
                    }
                    for(let s = 0; s < e.length; s += 1){
                        const a = e[s], d = a.progress, c = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
                        let p = c;
                        l || (p = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
                        const u = a.swiperSlideOffset, m = [
                            t.params.cssMode ? -u - t.translate : -u,
                            0,
                            0
                        ], h = [
                            0,
                            0,
                            0
                        ];
                        let f = !1;
                        t.isHorizontal() || (m[1] = m[0], m[0] = 0);
                        let g = {
                            translate: [
                                0,
                                0,
                                0
                            ],
                            rotate: [
                                0,
                                0,
                                0
                            ],
                            scale: 1,
                            opacity: 1
                        };
                        c < 0 ? (g = r.next, f = !0) : c > 0 && (g = r.prev, f = !0), m.forEach((e, t)=>{
                            m[t] = `calc(${e}px + (${i(g.translate[t])} * ${Math.abs(c * n)}))`;
                        }), h.forEach((e, t)=>{
                            let s = g.rotate[t] * Math.abs(c * n);
                            h[t] = s;
                        }), a.style.zIndex = -Math.abs(Math.round(d)) + e.length;
                        const v = m.join(", "), w = `rotateX(${o(h[0])}deg) rotateY(${o(h[1])}deg) rotateZ(${o(h[2])}deg)`, b = p < 0 ? `scale(${1 + (1 - g.scale) * p * n})` : `scale(${1 - (1 - g.scale) * p * n})`, y = p < 0 ? 1 + (1 - g.opacity) * p * n : 1 - (1 - g.opacity) * p * n, E = `translate3d(${v}) ${w} ${b}`;
                        if (f && g.shadow || !f) {
                            let e = a.querySelector(".swiper-slide-shadow");
                            if (!e && g.shadow && (e = fe("creative", a)), e) {
                                const t = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                            }
                        }
                        const x = me(0, a);
                        x.style.transform = E, x.style.opacity = y, g.origin && (x.style.transformOrigin = g.origin);
                    }
                },
                setTransition: (e)=>{
                    const s = t.slides.map((e)=>h(e));
                    s.forEach((t)=>{
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                            t.style.transitionDuration = `${e}ms`;
                        });
                    }), he({
                        swiper: t,
                        duration: e,
                        transformElements: s,
                        allSlides: !0
                    });
                },
                perspective: ()=>t.params.creativeEffect.perspective,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
            });
        },
        function(e) {
            let { swiper: t, extendParams: s, on: a } = e;
            s({
                cardsEffect: {
                    slideShadows: !0,
                    rotate: !0,
                    perSlideRotate: 2,
                    perSlideOffset: 8
                }
            }), ue({
                effect: "cards",
                swiper: t,
                on: a,
                setTranslate: ()=>{
                    const { slides: e, activeIndex: s, rtlTranslate: a } = t, i = t.params.cardsEffect, { startTranslate: r, isTouched: n } = t.touchEventsData, l = a ? -t.translate : t.translate;
                    for(let o = 0; o < e.length; o += 1){
                        const d = e[o], c = d.progress, p = Math.min(Math.max(c, -4), 4);
                        let u = d.swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                        let m = t.params.cssMode ? -u - t.translate : -u, h = 0;
                        const f = -100 * Math.abs(p);
                        let g = 1, v = -i.perSlideRotate * p, w = i.perSlideOffset - .75 * Math.abs(p);
                        const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o, y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r, E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
                        if (y || E) {
                            const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                            v += -28 * p * e, g += -0.5 * e, w += 96 * e, h = -25 * e * Math.abs(p) + "%";
                        }
                        if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
                            const e = h;
                            h = m, m = e;
                        }
                        const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p), S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
                        if (i.slideShadows) {
                            let e = d.querySelector(".swiper-slide-shadow");
                            e || (e = fe("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1));
                        }
                        d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
                        me(0, d).style.transform = S;
                    }
                },
                setTransition: (e)=>{
                    const s = t.slides.map((e)=>h(e));
                    s.forEach((t)=>{
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                            t.style.transitionDuration = `${e}ms`;
                        });
                    }), he({
                        swiper: t,
                        duration: e,
                        transformElements: s
                    });
                },
                perspective: ()=>!0,
                overwriteParams: ()=>({
                        _loopSwapReset: !1,
                        watchSlidesProgress: !0,
                        loopAdditionalSlides: 3,
                        centeredSlides: !0,
                        virtualTranslate: !t.params.cssMode
                    })
            });
        }
    ];
    return ie.use(ge), ie;
}();

},{}],"gMdIc":[function(require,module,exports,__globalThis) {
module.exports = require("57f171e07df38a36").getBundleURL('1zNV8') + "home-illustration.f0b89fa0.mp4" + "?" + Date.now();

},{"57f171e07df38a36":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"87I6m":[function(require,module,exports,__globalThis) {
module.exports = require("b61af35738fbd9e3").getBundleURL('1zNV8') + "the-witcher-3-wild-hunt.9b217ac2.jpeg" + "?" + Date.now();

},{"b61af35738fbd9e3":"lgJ39"}],"hY95v":[function(require,module,exports,__globalThis) {
module.exports = require("a6bd925df521d30d").getBundleURL('1zNV8') + "red-dead-redemption-2.8741699f.jpeg" + "?" + Date.now();

},{"a6bd925df521d30d":"lgJ39"}],"8jS5g":[function(require,module,exports,__globalThis) {
module.exports = require("d55273baa6f86801").getBundleURL('1zNV8') + "god-of-war.8a81131e.jpeg" + "?" + Date.now();

},{"d55273baa6f86801":"lgJ39"}],"ajHvW":[function(require,module,exports,__globalThis) {
module.exports = require("9b78d52412b15b47").getBundleURL('1zNV8') + "horizon-forbidden-west.4710f83f.jpeg" + "?" + Date.now();

},{"9b78d52412b15b47":"lgJ39"}],"eyScG":[function(require,module,exports,__globalThis) {
module.exports = require("959ef5df9f2ebf1e").getBundleURL('1zNV8') + "spider-man-miles-morales.eab8321f.jpeg" + "?" + Date.now();

},{"959ef5df9f2ebf1e":"lgJ39"}],"jgqPo":[function(require,module,exports,__globalThis) {
module.exports = require("668be1680e6df043").getBundleURL('1zNV8') + "sekiro-shadows-die-twice.e34befe0.jpeg" + "?" + Date.now();

},{"668be1680e6df043":"lgJ39"}],"8rIn7":[function(require,module,exports,__globalThis) {
module.exports = require("6097c6365fe8ec11").getBundleURL('1zNV8') + "resident-evil-village.9b69f660.jpeg" + "?" + Date.now();

},{"6097c6365fe8ec11":"lgJ39"}],"iQywr":[function(require,module,exports,__globalThis) {
module.exports = require("4f1dec9830ca83ea").getBundleURL('1zNV8') + "cyberpunk-2077.1aaa6776.jpeg" + "?" + Date.now();

},{"4f1dec9830ca83ea":"lgJ39"}],"a80Bg":[function(require,module,exports,__globalThis) {
module.exports = require("56011821efe8b4d1").getBundleURL('1zNV8') + "ghost-of-tsushima.c2534981.jpeg" + "?" + Date.now();

},{"56011821efe8b4d1":"lgJ39"}],"bIBEJ":[function(require,module,exports,__globalThis) {
module.exports = require("122f4b949a57194d").getBundleURL('1zNV8') + "death-stranding.fb180b7d.jpeg" + "?" + Date.now();

},{"122f4b949a57194d":"lgJ39"}],"4ytK5":[function(require,module,exports,__globalThis) {
module.exports = require("212a859d4a1471ec").getBundleURL('1zNV8') + "control.cea62ef3.jpeg" + "?" + Date.now();

},{"212a859d4a1471ec":"lgJ39"}],"hnK1b":[function(require,module,exports,__globalThis) {
module.exports = require("dc6c3ac69ace35d5").getBundleURL('1zNV8') + "doom-eternal.c033dc3d.jpeg" + "?" + Date.now();

},{"dc6c3ac69ace35d5":"lgJ39"}],"7oJsE":[function(require,module,exports,__globalThis) {
module.exports = require("c7cd8bdd731ca8a3").getBundleURL('1zNV8') + "final-fantasy-vii-remake.07ea5050.jpeg" + "?" + Date.now();

},{"c7cd8bdd731ca8a3":"lgJ39"}],"5ajnB":[function(require,module,exports,__globalThis) {
module.exports = require("6497888932ab9156").getBundleURL('1zNV8') + "animal-crossing-new-horizons.31cacf56.jpeg" + "?" + Date.now();

},{"6497888932ab9156":"lgJ39"}],"gZdFg":[function(require,module,exports,__globalThis) {
module.exports = require("de0c0dc2f6e4f1f7").getBundleURL('1zNV8') + "ori-and-the-will-of-the-wisps.ea922cd8.jpeg" + "?" + Date.now();

},{"de0c0dc2f6e4f1f7":"lgJ39"}],"1SvCS":[function(require,module,exports,__globalThis) {
module.exports = require("488c305d43303ae3").getBundleURL('1zNV8') + "forza-horizon-5.f998fa79.jpeg" + "?" + Date.now();

},{"488c305d43303ae3":"lgJ39"}],"kMBcF":[function(require,module,exports,__globalThis) {
module.exports = require("8c0ce531fa1a362a").getBundleURL('1zNV8') + "elden-ring.ff4b2d95.jpeg" + "?" + Date.now();

},{"8c0ce531fa1a362a":"lgJ39"}],"8vw4u":[function(require,module,exports,__globalThis) {
module.exports = require("204c3f85070375ca").getBundleURL('1zNV8') + "dark-souls-3.1957766b.jpeg" + "?" + Date.now();

},{"204c3f85070375ca":"lgJ39"}],"4dK5V":[function(require,module,exports,__globalThis) {
module.exports = require("d341916c1bde5f80").getBundleURL('1zNV8') + "hades.b89cb2f0.jpeg" + "?" + Date.now();

},{"d341916c1bde5f80":"lgJ39"}],"jGXox":[function(require,module,exports,__globalThis) {
module.exports = require("9c04a85755f94597").getBundleURL('1zNV8') + "persona-5-royal.d1de6154.jpeg" + "?" + Date.now();

},{"9c04a85755f94597":"lgJ39"}],"jQCsc":[function(require,module,exports,__globalThis) {
module.exports = require("40ce136d417a129d").getBundleURL('1zNV8') + "deathloop.ca7421a0.jpeg" + "?" + Date.now();

},{"40ce136d417a129d":"lgJ39"}],"1h83y":[function(require,module,exports,__globalThis) {
module.exports = require("f9040527c942c771").getBundleURL('1zNV8') + "it-takes-two.595e1924.jpeg" + "?" + Date.now();

},{"f9040527c942c771":"lgJ39"}],"8Hl2E":[function(require,module,exports,__globalThis) {
module.exports = require("d3ad2f5409eaa594").getBundleURL('1zNV8') + "ratchet-and-clank-rift-apart.0f6444e7.jpeg" + "?" + Date.now();

},{"d3ad2f5409eaa594":"lgJ39"}],"3n1vC":[function(require,module,exports,__globalThis) {
module.exports = require("bba73538ef0c4ff6").getBundleURL('1zNV8') + "demons-souls.58202bf7.jpeg" + "?" + Date.now();

},{"bba73538ef0c4ff6":"lgJ39"}],"7cInS":[function(require,module,exports,__globalThis) {
module.exports = require("8f8c1c2c165cb15").getBundleURL('1zNV8') + "disco-elysium.883bc152.jpeg" + "?" + Date.now();

},{"8f8c1c2c165cb15":"lgJ39"}],"lRUBx":[function(require,module,exports,__globalThis) {
module.exports = require("a1dc31be529cddd6").getBundleURL('1zNV8') + "returnal.a4dcb33d.jpeg" + "?" + Date.now();

},{"a1dc31be529cddd6":"lgJ39"}],"iUWR4":[function(require,module,exports,__globalThis) {
module.exports = require("ac2e62bfa822d3d0").getBundleURL('1zNV8') + "kingdom-come-deliverance-2.c7819b4a.jpeg" + "?" + Date.now();

},{"ac2e62bfa822d3d0":"lgJ39"}],"8s8px":[function(require,module,exports,__globalThis) {
module.exports = require("d22993e31042c4ac").getBundleURL('1zNV8') + "fallout-76.bcf1ba1e.jpeg" + "?" + Date.now();

},{"d22993e31042c4ac":"lgJ39"}],"lmypT":[function(require,module,exports,__globalThis) {
module.exports = require("866dbfa69b447ea1").getBundleURL('1zNV8') + "balan-wonderworld.8fe1102a.jpeg" + "?" + Date.now();

},{"866dbfa69b447ea1":"lgJ39"}],"i4JpA":[function(require,module,exports,__globalThis) {
module.exports = require("fa2d81f32a009743").getBundleURL('1zNV8') + "fallout-new-vegas.549d92ec.jpeg" + "?" + Date.now();

},{"fa2d81f32a009743":"lgJ39"}],"iYCUB":[function(require,module,exports,__globalThis) {
module.exports = require("1eb4493925a2baf6").getBundleURL('1zNV8') + "call-icon.b7e1a931.svg" + "?" + Date.now();

},{"1eb4493925a2baf6":"lgJ39"}],"9tGIA":[function(require,module,exports,__globalThis) {
module.exports = require("271be7858b92a1c6").getBundleURL('1zNV8') + "home-icon.2831a079.svg" + "?" + Date.now();

},{"271be7858b92a1c6":"lgJ39"}],"3NrAQ":[function(require,module,exports,__globalThis) {
module.exports = require("d4204ef32093d959").getBundleURL('1zNV8') + "mail-icon.9a8eb0da.svg" + "?" + Date.now();

},{"d4204ef32093d959":"lgJ39"}],"9xhnK":[function(require,module,exports,__globalThis) {
module.exports = require("c7f085d20cdbb7f1").getBundleURL('1zNV8') + "print-icon.3fd08f67.svg" + "?" + Date.now();

},{"c7f085d20cdbb7f1":"lgJ39"}],"ljlZk":[function(require,module,exports,__globalThis) {
module.exports = require("11ef180cbc494861").getBundleURL('1zNV8') + "action-icon.f18a647e.svg" + "?" + Date.now();

},{"11ef180cbc494861":"lgJ39"}],"jd7as":[function(require,module,exports,__globalThis) {
module.exports = require("74b1199abe79646b").getBundleURL('1zNV8') + "adventure-icon4.3e007208.svg" + "?" + Date.now();

},{"74b1199abe79646b":"lgJ39"}],"3TIjb":[function(require,module,exports,__globalThis) {
module.exports = require("bbad691f67d81d67").getBundleURL('1zNV8') + "coop-icon.71c2842d.svg" + "?" + Date.now();

},{"bbad691f67d81d67":"lgJ39"}],"cOb74":[function(require,module,exports,__globalThis) {
module.exports = require("fcbc5b483de1158e").getBundleURL('1zNV8') + "home-icon.dbd52206.svg" + "?" + Date.now();

},{"fcbc5b483de1158e":"lgJ39"}],"dncxo":[function(require,module,exports,__globalThis) {
module.exports = require("1d23facc86997dd3").getBundleURL('1zNV8') + "horror-icon.a6a03861.svg" + "?" + Date.now();

},{"1d23facc86997dd3":"lgJ39"}],"kPUu8":[function(require,module,exports,__globalThis) {
module.exports = require("b6471050b564fa90").getBundleURL('1zNV8') + "immersive-sim-icon.e728af41.svg" + "?" + Date.now();

},{"b6471050b564fa90":"lgJ39"}],"4WiX7":[function(require,module,exports,__globalThis) {
module.exports = require("f63719e91e684440").getBundleURL('1zNV8') + "open-world-icon.0d86cc24.svg" + "?" + Date.now();

},{"f63719e91e684440":"lgJ39"}],"16qL1":[function(require,module,exports,__globalThis) {
module.exports = require("8326130284c26743").getBundleURL('1zNV8') + "platformer-icon.d3660975.svg" + "?" + Date.now();

},{"8326130284c26743":"lgJ39"}],"aVOSt":[function(require,module,exports,__globalThis) {
module.exports = require("99beaf22fbc3a65c").getBundleURL('1zNV8') + "racing-icon2.05f886be.svg" + "?" + Date.now();

},{"99beaf22fbc3a65c":"lgJ39"}],"ldtyj":[function(require,module,exports,__globalThis) {
module.exports = require("1d408de3c8ca807f").getBundleURL('1zNV8') + "rpg-icon.3750c22c.svg" + "?" + Date.now();

},{"1d408de3c8ca807f":"lgJ39"}],"8QX0C":[function(require,module,exports,__globalThis) {
module.exports = require("baa83d2b9b58e432").getBundleURL('1zNV8') + "shooter-icon.cb50bfe0.svg" + "?" + Date.now();

},{"baa83d2b9b58e432":"lgJ39"}],"7XxTv":[function(require,module,exports,__globalThis) {
module.exports = require("fb2c645eade2f019").getBundleURL('1zNV8') + "simulation-icon.6cbbb2e2.svg" + "?" + Date.now();

},{"fb2c645eade2f019":"lgJ39"}],"kwR3N":[function(require,module,exports,__globalThis) {
module.exports = require("3851697fbe9c5b").getBundleURL('1zNV8') + "bars-icon.bf96d2b5.svg" + "?" + Date.now();

},{"3851697fbe9c5b":"lgJ39"}],"bVLyN":[function(require,module,exports,__globalThis) {
module.exports = require("45fc201e20668d55").getBundleURL('1zNV8') + "chevron-down-icon.980079f5.svg" + "?" + Date.now();

},{"45fc201e20668d55":"lgJ39"}],"1Epqg":[function(require,module,exports,__globalThis) {
module.exports = require("4834b7bdb70f2713").getBundleURL('1zNV8') + "chevron-down-outline-icon.66e25d23.svg" + "?" + Date.now();

},{"4834b7bdb70f2713":"lgJ39"}],"6h55n":[function(require,module,exports,__globalThis) {
module.exports = require("228db86277fd6028").getBundleURL('1zNV8') + "grid-fill-icon.27ab98d6.svg" + "?" + Date.now();

},{"228db86277fd6028":"lgJ39"}],"bsHrE":[function(require,module,exports,__globalThis) {
module.exports = require("abad057ede0cb18c").getBundleURL('1zNV8') + "grid-icon.f051cc15.svg" + "?" + Date.now();

},{"abad057ede0cb18c":"lgJ39"}],"426pW":[function(require,module,exports,__globalThis) {
module.exports = require("def2a1645a722d2a").getBundleURL('1zNV8') + "grid-icon2.a5476786.svg" + "?" + Date.now();

},{"def2a1645a722d2a":"lgJ39"}],"5SWg9":[function(require,module,exports,__globalThis) {
module.exports = require("461d6081b6ad9b2").getBundleURL('1zNV8') + "grid-icon3.cfe410be.svg" + "?" + Date.now();

},{"461d6081b6ad9b2":"lgJ39"}],"cmGjd":[function(require,module,exports,__globalThis) {
module.exports = require("91459ef39f6f16c5").getBundleURL('1zNV8') + "logo-facebook.8a1477c9.svg" + "?" + Date.now();

},{"91459ef39f6f16c5":"lgJ39"}],"ty3Up":[function(require,module,exports,__globalThis) {
module.exports = require("5bea13e7e370a687").getBundleURL('1zNV8') + "logo-github.17ce47d0.svg" + "?" + Date.now();

},{"5bea13e7e370a687":"lgJ39"}],"kLCLP":[function(require,module,exports,__globalThis) {
module.exports = require("569ef6ff63fb2b9a").getBundleURL('1zNV8') + "logo-instagram.e45fa3a7.svg" + "?" + Date.now();

},{"569ef6ff63fb2b9a":"lgJ39"}],"eza5C":[function(require,module,exports,__globalThis) {
module.exports = require("ebdbd6b243f5d8bc").getBundleURL('1zNV8') + "logo-linkedin.dffd28e9.svg" + "?" + Date.now();

},{"ebdbd6b243f5d8bc":"lgJ39"}],"fddXW":[function(require,module,exports,__globalThis) {
module.exports = require("bbdb586ef6d231d0").getBundleURL('1zNV8') + "logo-twitter.5e66b31f.svg" + "?" + Date.now();

},{"bbdb586ef6d231d0":"lgJ39"}],"fNsZm":[function(require,module,exports,__globalThis) {
module.exports = require("4f6ac290dea2868e").getBundleURL('1zNV8') + "logo-youtube.6b086467.svg" + "?" + Date.now();

},{"4f6ac290dea2868e":"lgJ39"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"j0nwl":[function(require,module,exports,__globalThis) {
module.exports = require("b7116dc853baba23").getBundleURL('1zNV8') + "favicon.d9abd795.svg" + "?" + Date.now();

},{"b7116dc853baba23":"lgJ39"}],"2PCfr":[function(require,module,exports,__globalThis) {
module.exports = require("d52467ea6f844719").getBundleURL('1zNV8') + "search-circle-icon.ea7a961e.svg" + "?" + Date.now();

},{"d52467ea6f844719":"lgJ39"}],"eIjoc":[function(require,module,exports,__globalThis) {
module.exports = require("dbdb7e782ad738f3").getBundleURL('1zNV8') + "search-icon-fa.152bc0c6.svg" + "?" + Date.now();

},{"dbdb7e782ad738f3":"lgJ39"}],"ercxD":[function(require,module,exports,__globalThis) {
module.exports = require("531e6646d19691ac").getBundleURL('1zNV8') + "search-icon.e37e2d61.svg" + "?" + Date.now();

},{"531e6646d19691ac":"lgJ39"}],"9DE15":[function(require,module,exports,__globalThis) {
module.exports = require("c766237b041af272").getBundleURL('1zNV8') + "site-icon.c2c82a1b.svg" + "?" + Date.now();

},{"c766237b041af272":"lgJ39"}],"83RH3":[function(require,module,exports,__globalThis) {
module.exports = require("f66684f09a80a670").getBundleURL('1zNV8') + "star-icon.a27cfedc.svg" + "?" + Date.now();

},{"f66684f09a80a670":"lgJ39"}],"1OjTG":[function(require,module,exports,__globalThis) {
module.exports = require("e7685ec09b088cca").getBundleURL('1zNV8') + "UserAvatar.2cacbff1.svg" + "?" + Date.now();

},{"e7685ec09b088cca":"lgJ39"}],"4ZL1P":[function(require,module,exports,__globalThis) {
module.exports = require("1e8518106748dc06").getBundleURL('1zNV8') + "UserAvatarFilled.3dac4a76.svg" + "?" + Date.now();

},{"1e8518106748dc06":"lgJ39"}]},["dwhei","adjPd"], "adjPd", "parcelRequire94c2")

//# sourceMappingURL=main.js.map
