(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(130)),c={title:"Topics"},a={unversionedId:"API List v2.0/1",id:"API List v2.0/1",isDocsHomePage:!1,title:"Topics",description:"Description",source:"@site/docs/API List v2.0/1.md",sourceDirName:"API List v2.0",slug:"/API List v2.0/1",permalink:"/docs/API List v2.0/1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API List v2.0/1.md",version:"current",frontMatter:{title:"Topics"},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/docs/intro"},next:{title:"Get Students",permalink:"/docs/API List v2.0/10"}},s=[{value:"Description",id:"description",children:[]},{value:"Request",id:"request",children:[]},{value:"Condition",id:"condition",children:[]},{value:"Response",id:"response",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"Return list of topic"),Object(i.b)("h3",{id:"request"},"Request"),Object(i.b)("h4",{id:"method"},"Method"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GET\n")),Object(i.b)("h4",{id:"endpoint"},"Endpoint"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"/topics")),Object(i.b)("h4",{id:"header"},"Header"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Content-Type:application/json")),Object(i.b)("h4",{id:"body"},"Body"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"filter by title\ntitle={title}\nfilter by subject\nsubject={subject}")),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"Query results must not be null or greater than 0"),Object(i.b)("h3",{id:"response"},"Response"),Object(i.b)("h4",{id:"success"},"Success"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{\nsucess: true,\ncontent: [\n    {\n    id: int,\n    title: string,\n    description: string,\n    icon:string,\n    color: string,\n    subject: string,\n    mode: string,\n    type: string,\n    createdtime: datetime, \n    modifiedtime: datetime\n  }\n]\n}\n")),Object(i.b)("h4",{id:"fail"},"Fail"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{sucess: false}\n")))}l.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(f,a(a({ref:t},u),{},{components:n})):o.a.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);