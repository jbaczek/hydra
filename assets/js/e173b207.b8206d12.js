"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3738],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return l},T:function(){return c}});var a=n(7462),r=n(7294),i=n(6742),p=n(2263),o=n(907);function l(e){return r.createElement(i.Z,(0,a.Z)({},e,{to:(t=e.to,l=(0,o.zu)(),(0,p.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return r.createElement(l,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},4138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=n(3899),o=["components"],l={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},c=void 0,u={unversionedId:"advanced/app_packaging",id:"advanced/app_packaging",isDocsHomePage:!1,title:"Application packaging",description:"You can package your Hydra application along with its configuration.",source:"@site/docs/advanced/packaging.md",sourceDirName:"advanced",slug:"/advanced/app_packaging",permalink:"/docs/next/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/packaging.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1642551291,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},sidebar:"docs",previous:{title:"Plugin development",permalink:"/docs/next/advanced/plugins/develop"},next:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/next/advanced/jupyter_notebooks"}},d=[],s={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p.T,{to:"examples/advanced/hydra_app_example",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"You can package your Hydra application along with its configuration.\nAn example ",(0,i.kt)(p.Z,{to:"examples/advanced/hydra_app_example",mdxType:"GithubLink"},"standalone application")," is included in the repo."),(0,i.kt)("p",null,"Run it with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,i.kt)("p",null,"Install it with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),(0,i.kt)("p",null,"Once installed, run the installed app with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,i.kt)("p",null,"The installed app will use the packaged configuration files."))}m.isMDXComponent=!0}}]);