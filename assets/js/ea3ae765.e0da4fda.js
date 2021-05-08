(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(268)),o=n(275),c={id:"configuring_experiments",title:"Configuring Experiments"},s={unversionedId:"patterns/configuring_experiments",id:"patterns/configuring_experiments",isDocsHomePage:!1,title:"Configuring Experiments",description:"Problem",source:"@site/docs/patterns/configuring_experiments.md",slug:"/patterns/configuring_experiments",permalink:"/docs/next/patterns/configuring_experiments",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/configuring_experiments.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1620434303,formattedLastUpdatedAt:"5/8/2021",sidebar:"docs",previous:{title:"Extending Configs",permalink:"/docs/next/patterns/extending_configs"},next:{title:"Configuring Plugins",permalink:"/docs/next/patterns/configuring_plugins"}},l=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Example",id:"example",children:[]},{value:"Sweeping over experiments",id:"sweeping-over-experiments",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{text:"Example application",to:"examples/patterns/configuring_experiments",mdxType:"ExampleGithubLink"}),Object(i.b)("h3",{id:"problem"},"Problem"),Object(i.b)("p",null,"A common problem is maintaining multiple configurations of an application.  This can get especially\ntedious when the configuration differences span multiple dimensions.\nThis pattern shows how to cleanly support multiple configurations, with each configuration file only specifying\nthe changes to the master (default) configuration."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("p",null,"Create a config file specifying the overrides to the default configuration, and then call it via the command line.\ne.g. ",Object(i.b)("inlineCode",{parentName:"p"},"$ python my_app.py +experiment=fast_mode"),"."),Object(i.b)("p",null,"To avoid clutter, we place the experiment config files in dedicated config group called ",Object(i.b)("em",{parentName:"p"},"experiment"),"."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"In this example, we will create configurations for each of the server and database pairings that we want to benchmark."),Object(i.b)("p",null,"The default configuration is:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n  - server: apache\n\n\n\n\n\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"name: mysql\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml"',title:'"server/apache.yaml"'},"name: apache\nport: 80\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/sqlite.yaml"',title:'"db/sqlite.yaml"'},"name: sqlite\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/nginx.yaml"',title:'"server/nginx.yaml"'},"name: nginx\nport: 80\n")))),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory structure"',title:'"Directory','structure"':!0},"\u251c\u2500\u2500 config.yaml\n\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 sqlite.yaml\n\u2514\u2500\u2500 server\n    \u251c\u2500\u2500 apache.yaml\n    \u2514\u2500\u2500 nginx.yaml\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  name: mysql\nserver:\n  name: apache\n  port: 80\n\n\n")))),Object(i.b)("p",null,"The benchmark config files specify the deltas from the default configuration:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="experiment/aplite.yaml"',title:'"experiment/aplite.yaml"'},"# @package _global_\ndefaults:\n  - override /db: sqlite\n  \n  \nserver:\n  port: 8080\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="experiment/nglite.yaml"',title:'"experiment/nglite.yaml"'},"# @package _global_\ndefaults:\n  - override /db: sqlite\n  - override /server: nginx\n  \nserver:\n  port: 8080\n")))),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py +experiment=aplite"',title:'"$',python:!0,"my_app.py":!0,"+experiment":'aplite"'},"db:\n  name: sqlite\nserver:\n  name: apache\n  port: 8080\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py +experiment=nglite"',title:'"$',python:!0,"my_app.py":!0,"+experiment":'nglite"'},"db:\n  name: sqlite\nserver:\n  name: nginx\n  port: 8080\n")))),Object(i.b)("p",null,"Key concepts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"#"," @package ","_","global","_"),Object(i.b)("br",{parentName:"li"}),"Changes specified in this config should be interpreted as relative to the ","_","global","_"," package.",Object(i.b)("br",{parentName:"li"}),"We could instead place ",Object(i.b)("em",{parentName:"li"},"nglite.yaml")," and ",Object(i.b)("em",{parentName:"li"},"aplite.yaml")," next to ",Object(i.b)("em",{parentName:"li"},"config.yaml")," and omit this line."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The overrides of /db and /server are absolute paths."),Object(i.b)("br",{parentName:"li"}),"This is necessary because they are outside of the experiment directory. ")),Object(i.b)("p",null,"Running the experiments from the command line requires prefixing the experiment choice with a ",Object(i.b)("inlineCode",{parentName:"p"},"+"),".\nThe experiment config group is an addition, not an override."),Object(i.b)("h3",{id:"sweeping-over-experiments"},"Sweeping over experiments"),Object(i.b)("p",null,"This approach also enables sweeping over those experiments to easily compare their results:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py --multirun +experiment=aplite,nglite"',title:'"$',python:!0,"my_app.py":!0,"--multirun":!0,"+experiment":'aplite,nglite"'},"[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : +experiment=aplite\ndb:\n  name: sqlite\nserver:\n  name: apache\n  port: 8080\n\n[HYDRA]        #1 : +experiment=nglite\ndb:\n  name: sqlite\nserver:\n  name: nginx\n  port: 8080\n")),Object(i.b)("p",null,"To run all the experiment, use the ",Object(i.b)("a",{parentName:"p",href:"../../advanced/override_grammar/extended#glob-choice-sweep"},"glob")," syntax:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:"title=\"$ python my_app.py --multirun '+experiment=glob(*)'\"",title:'"$',python:!0,"my_app.py":!0,"--multirun":!0,"'+experiment":"glob(*)'\""},"[HYDRA]        #0 : +experiment=aplite\n...\n[HYDRA]        #1 : +experiment=nglite\n...\n")))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},270:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n(269),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),l=n(271),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,p,m=e.isNavLink,b=e.to,d=e.href,g=e.activeClassName,f=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(l.b)().withBaseUrl,x=Object(r.useContext)(s),w=b||d,N=Object(o.a)(w),D=null==w?void 0:w.replace("pathname://",""),A=void 0!==D?(n=D,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),_=m?i.e:i.c,E=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&N&&window.docusaurus.prefetch(A),function(){E&&p&&p.disconnect()}}),[A,E,N]);var V=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,C=!A||!N||V;return A&&N&&!V&&!v&&x.collectLink(A),C?a.a.createElement("a",Object.assign({href:A},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(_,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(A),P.current=!0)},innerRef:function(e){var t,n;E&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(A)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:A||""},m&&{isActive:f,activeClassName:g}))}},271:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(10),a=n(269);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},272:function(e,t,n){try{e.exports=n(273)}catch(a){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),a=n(38),i=n(274);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return i.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getDocVersionSuggestions(n,a)}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(a=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),i=a.activeVersion!==r;return{latestDocSuggestion:i?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var r=n(3),a=n(0),i=n.n(a),o=n(270),c=n(10),s=n(272);function l(e){return i.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,a=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(l,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);