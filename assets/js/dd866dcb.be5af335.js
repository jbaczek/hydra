(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(268)),o=n(275),c={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},u={unversionedId:"configure_hydra/workdir",id:"configure_hydra/workdir",isDocsHomePage:!1,title:"Customizing working directory pattern",description:"Below are a few examples of customizing output directory patterns.",source:"@site/docs/configure_hydra/workdir.md",slug:"/configure_hydra/workdir",permalink:"/docs/next/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/workdir.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1620434303,formattedLastUpdatedAt:"5/8/2021",sidebar_label:"Customizing working directory pattern",sidebar:"docs",previous:{title:"Customizing logging",permalink:"/docs/next/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/next/configure_hydra/app_help"}},s=[{value:"Configuration for run",id:"configuration-for-run",children:[]},{value:"Configuration for multirun",id:"configuration-for-multirun",children:[]},{value:"Using <code>hydra.job.override_dirname</code>",id:"using-hydrajoboverride_dirname",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{text:"Example application",to:"examples/configure_hydra/workdir",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"Below are a few examples of customizing output directory patterns."),Object(i.b)("h3",{id:"configuration-for-run"},"Configuration for run"),Object(i.b)("p",null,"Run output directory grouped by date:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),Object(i.b)("p",null,"Run output directory grouped by job name:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),Object(i.b)("p",null,"Run output directory can contain user configuration variables:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n")),Object(i.b)("h3",{id:"configuration-for-multirun"},"Configuration for multirun"),Object(i.b)("p",null,"We will run the application with same command but different configurations:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun a=a1,a2,a3 \n")),Object(i.b)("p",null,"Default multirun dir configurations:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--8"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n\n"))),Object(i.b)("div",{className:"col  col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),Object(i.b)("p",null,"Similar configuration patterns in run can be applied to config multirun dir as well."),Object(i.b)("p",null,"For example, multirun output directory grouped by job name, and sub dir by job num:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: ${hydra.job.name}\n    subdir: ${hydra.job.num}\n\n"))),Object(i.b)("div",{className:"col  col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),Object(i.b)("h3",{id:"using-hydrajoboverride_dirname"},"Using ",Object(i.b)("inlineCode",{parentName:"h3"},"hydra.job.override_dirname")),Object(i.b)(o.a,{text:"Example application",to:"examples/configure_hydra/job_override_dirname",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern. It is meant to be used along with the configuration for working dir, especially\nin ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.sweep.subdir"),"."),Object(i.b)("p",null,"If we run the example application with the following commandline overrides and configs:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun batch_size=32 learning_rate=0.1,0.01\n")),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun\n    subdir: ${hydra.job.override_dirname}\n"))),Object(i.b)("div",{className:"col  col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="working dir created"',title:'"working',dir:!0,'created"':!0},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n")))),Object(i.b)("p",null,"You can further customized the output dir creation by configuring",Object(i.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),Object(i.b)("p",null,"In particular, the separator char ",Object(i.b)("inlineCode",{parentName:"p"},"=")," and the item separator char ",Object(i.b)("inlineCode",{parentName:"p"},",")," can be modified by overriding\n",Object(i.b)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.kv_sep")," and ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.item_sep"),".\nCommand line override keys can also be automatically excluded from the generated ",Object(i.b)("inlineCode",{parentName:"p"},"override_dirname"),"."),Object(i.b)("p",null,"An example of a case where the exclude is useful is a random seed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),Object(i.b)("p",null,"With this configuration, running"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py --multirun  batch_size=32 learning_rate=0.1,0.01 seed=1,2\n")),Object(i.b)("p",null,"Would result in a directory structure like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2502\xa0\xa0 \u251c\u2500\u2500 seed=1\n\u2502\xa0\xa0 \u2514\u2500\u2500 seed=2\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n    \u251c\u2500\u2500 seed=1\n    \u2514\u2500\u2500 seed=2\n")))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},270:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n(269),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(271),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,b=e.to,m=e.href,f=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,h=void 0===y||y,j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),_=b||m,N=Object(o.a)(_),x=null==_?void 0:_.replace("pathname://",""),D=void 0!==x?(n=x,h&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0,k=Object(r.useRef)(!1),A=p?i.e:i.c,C=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&N&&window.docusaurus.prefetch(D),function(){C&&d&&d.disconnect()}}),[D,C,N]);var P=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,V=!D||!N||P;return D&&N&&!P&&!v&&w.collectLink(D),V?a.a.createElement("a",Object.assign({href:D},_&&!N&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(A,Object.assign({},j,{onMouseEnter:function(){k.current||(window.docusaurus.preload(D),k.current=!0)},innerRef:function(e){var t,n;C&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(D)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:D||""},p&&{isActive:g,activeClassName:f}))}},271:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(10),a=n(269);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},272:function(e,t,n){try{e.exports=n(273)}catch(a){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),a=n(38),i=n(274);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return i.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getDocVersionSuggestions(n,a)}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(a=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),i=a.activeVersion!==r;return{latestDocSuggestion:i?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(0),i=n.n(a),o=n(270),c=n(10),u=n(272);function s(e){return i.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,a=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);