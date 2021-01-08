(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),i=(n(0),n(251)),o={id:"minimal_example",title:"Minimal example"},c={unversionedId:"tutorials/structured_config/minimal_example",id:"tutorials/structured_config/minimal_example",isDocsHomePage:!1,title:"Minimal example",description:"Example",source:"@site/docs/tutorials/structured_config/1_minimal_example.md",slug:"/tutorials/structured_config/minimal_example",permalink:"/docs/next/tutorials/structured_config/minimal_example",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/1_minimal_example.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1610079463,sidebar:"docs",previous:{title:"Introduction to Structured Configs",permalink:"/docs/next/tutorials/structured_config/intro"},next:{title:"A hierarchical static configuration",permalink:"/docs/next/tutorials/structured_config/hierarchical_static_config"}},l=[{value:"Duck-typing enables static type checking",id:"duck-typing-enables-static-type-checking",children:[]},{value:"Structured Configs enable Hydra to catch type errors at runtime",id:"structured-configs-enable-hydra-to-catch-type-errors-at-runtime",children:[]},{value:"Duck typing",id:"duck-typing",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/structured_configs/1_minimal/"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(i.b)("p",null,"There are four key elements in this example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"@dataclass")," describes the application's configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ConfigStore")," manages the Structured Config"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cfg")," is ",Object(i.b)("inlineCode",{parentName:"li"},"duck typed")," as a ",Object(i.b)("inlineCode",{parentName:"li"},"MySQLConfig")," instead of a ",Object(i.b)("inlineCode",{parentName:"li"},"DictConfig")),Object(i.b)("li",{parentName:"ul"},"There is a subtle typo in the code below, can you spot it?")),Object(i.b)("p",null,"In this example, the config node stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigStore")," replaces the traditional ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app_type_error.py" {18}',title:'"my_app_type_error.py"',"{18}":!0}),'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\n@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\ncs = ConfigStore.instance()\n# Registering the Config class with the name \'config\'.\ncs.store(name="config", node=MySQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: MySQLConfig) -> None:\n    # pork should be port!\n    if cfg.pork == 80:\n        print("Is this a webserver?!")\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("h3",{id:"duck-typing-enables-static-type-checking"},"Duck-typing enables static type checking"),Object(i.b)("p",null,"Duck-typing the config object as ",Object(i.b)("inlineCode",{parentName:"p"},"MySQLConfig")," enables static type checkers like ",Object(i.b)("inlineCode",{parentName:"p"},"mypy")," to catch\ntype errors before you run your code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="$ mypy my_app_type_error.py"',title:'"$',mypy:!0,'my_app_type_error.py"':!0}),'my_app_type_error.py:22: error: "MySQLConfig" has no attribute "pork"\nFound 1 error in 1 file (checked 1 source file)\n')),Object(i.b)("h3",{id:"structured-configs-enable-hydra-to-catch-type-errors-at-runtime"},"Structured Configs enable Hydra to catch type errors at runtime"),Object(i.b)("p",null,"If you forget to run ",Object(i.b)("inlineCode",{parentName:"p"},"mypy"),", Hydra will report the error at runtime:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="$ python my_app_type_error.py"',title:'"$',python:!0,'my_app_type_error.py"':!0}),"Traceback (most recent call last):\n  File \"my_app_type_error.py\", line 22, in my_app\n    if cfg.pork == 80:\nomegaconf.errors.ConfigAttributeError: Key 'pork' not in 'MySQLConfig'\n        full_key: pork\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n\nSet the environment variable HYDRA_FULL_ERROR=1 for a complete stack trace.\n")),Object(i.b)("p",null,"Hydra will also catch typos, or type errors in the command line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app_type_error.py port=fail\nError merging override port=fail\nValue 'fail' could not be converted to Integer\n        full_key: port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),Object(i.b)("p",null,"We will see additional types of runtime errors that Hydra can catch later in this tutorial. Such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Trying to read or write a non existent field in your config object"),Object(i.b)("li",{parentName:"ul"},"Assigning a value that is incompatible with the declared type"),Object(i.b)("li",{parentName:"ul"},"Attempting to modify a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html#frozen"}),"frozen config"))),Object(i.b)("h2",{id:"duck-typing"},"Duck typing"),Object(i.b)("p",null,"In the example above ",Object(i.b)("inlineCode",{parentName:"p"},"cfg")," is duck typed as ",Object(i.b)("inlineCode",{parentName:"p"},"MySQLConfig"),".\nIt is actually an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"DictConfig"),". The duck typing enables static type checking by tools like Mypy or PyCharm.\nThis reduces development time by catching coding errors before you run your application."),Object(i.b)("p",null,"The name ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Duck_typing"}),"Duck typing"),' comes from the phrase "If it walks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck".\nIt can be useful when you care about the methods or attributes of an object, not the actual type of the object.'))}s.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(y,c(c({ref:t},p),{},{components:n})):a.a.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);