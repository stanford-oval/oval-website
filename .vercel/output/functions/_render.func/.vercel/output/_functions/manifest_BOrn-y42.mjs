import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BavcI9QS.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"affiliate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/affiliate","isIndex":false,"type":"page","pattern":"^\\/affiliate\\/?$","segments":[[{"content":"affiliate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/affiliate.astro","pathname":"/affiliate","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"joinus/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/joinus","isIndex":false,"type":"page","pattern":"^\\/joinus\\/?$","segments":[[{"content":"joinus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/joinus.astro","pathname":"/joinus","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"publications/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/publications","isIndex":false,"type":"page","pattern":"^\\/publications\\/?$","segments":[[{"content":"publications","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/publications.astro","pathname":"/publications","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"team/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/team","isIndex":false,"type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","isIndex":false,"route":"/releases/[...path]","pattern":"^\\/releases(?:\\/(.*?))?\\/?$","segments":[[{"content":"releases","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"/releases/[...path]","prerender":false,"redirect":"https://crowdie.stanford.edu/[...path]","fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/tommybruzzese/Documents/GitHub/oval-website/src/pages/affiliate.astro",{"propagation":"none","containsHead":true}],["/Users/tommybruzzese/Documents/GitHub/oval-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/tommybruzzese/Documents/GitHub/oval-website/src/pages/joinus.astro",{"propagation":"none","containsHead":true}],["/Users/tommybruzzese/Documents/GitHub/oval-website/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/tommybruzzese/Documents/GitHub/oval-website/src/pages/publications.astro",{"propagation":"none","containsHead":true}],["/Users/tommybruzzese/Documents/GitHub/oval-website/src/pages/team.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_D-p1jZeC.mjs","\u0000@astrojs-manifest":"manifest_BOrn-y42.mjs","/Users/tommybruzzese/Documents/GitHub/oval-website/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Hb05nn4I.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Cyh1vqs2.mjs","\u0000@astro-page:src/pages/affiliate@_@astro":"chunks/affiliate_DnTFJoml.mjs","\u0000@astro-page:src/pages/joinus@_@astro":"chunks/joinus_CcrqNGcs.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_CwVNwgKH.mjs","\u0000@astro-page:src/pages/publications@_@astro":"chunks/publications_DbfRNX8j.mjs","\u0000@astro-page:src/pages/team@_@astro":"chunks/team_BsuBXEET.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_C7BbnWK0.mjs","/Users/tommybruzzese/Documents/GitHub/oval-website/src/components/News/News.jsx":"_astro/News.CmqPSCbW.js","@astrojs/react/client.js":"_astro/client.D9Vng9vH.js","/astro/hoisted.js?q=0":"_astro/hoisted.Craqq5Ax.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/affiliate.BRrmijbu.css","/blob.css","/favicon.png","/_astro/News.CmqPSCbW.js","/_astro/client.D9Vng9vH.js","/_astro/hoisted.B4OhnoE3.css","/_astro/hoisted.Craqq5Ax.js","/_astro/index.DssFPYOm.css","/_astro/index.NEDEFKed.js","/assets/images/genie_worksheets.png","/assets/images/monica-talk.png","/assets/images/noise-purple-3.svg","/assets/images/noora-fig-final.png","/assets/images/noora.png","/assets/images/quote-end.svg","/assets/images/quote-start.svg","/assets/images/reactgenie.png","/assets/images/spinach.png","/assets/images/storm-fig-final.png","/assets/images/storm.png","/assets/images/wikichat-fig.png","/assets/images/wikichat.png","/assets/images/yelpbot-big.png","/assets/images/yelpbot-fig-final.png","/assets/images/yelpbot.png","/assets/images/profiles/chris-man.jpeg","/assets/images/profiles/chris-re.jpeg","/assets/images/profiles/edward.jpeg","/assets/images/profiles/fei-fei.jpeg","/assets/images/profiles/gcampagn.jpeg","/assets/images/profiles/harshit.png","/assets/images/profiles/jackie.jpeg","/assets/images/profiles/james.jpeg","/assets/images/profiles/jialiang.jpg","/assets/images/profiles/larsen.jpeg","/assets/images/profiles/mason.jpg","/assets/images/profiles/mehradmorad.jpeg","/assets/images/profiles/mfischer.png","/assets/images/profiles/michael.jpeg","/assets/images/profiles/monica.jpeg","/assets/images/profiles/ranjaykrishna.jpeg","/assets/images/profiles/shicheng.jpeg","/assets/images/profiles/sileixu.jpeg","/assets/images/profiles/sina.jpeg","/assets/images/profiles/tommy.jpg","/assets/images/profiles/yucheng.png","/affiliate/index.html","/joinus/index.html","/projects/index.html","/publications/index.html","/team/index.html","/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
