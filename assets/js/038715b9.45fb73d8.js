(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(f,a(a({ref:t},u),{},{components:n})):i.a.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(130)),c={title:"Get Students"},a={unversionedId:"API List v2.0/10",id:"API List v2.0/10",isDocsHomePage:!1,title:"Get Students",description:"Description",source:"@site/docs/API List v2.0/10.md",sourceDirName:"API List v2.0",slug:"/API List v2.0/10",permalink:"/docs/API List v2.0/10",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API List v2.0/10.md",version:"current",frontMatter:{title:"Get Students"},sidebar:"tutorialSidebar",previous:{title:"Topics",permalink:"/docs/API List v2.0/1"},next:{title:"Count Favorite Subjects",permalink:"/docs/API List v2.0/11"}},s=[{value:"Description",id:"description",children:[]},{value:"Request",id:"request",children:[]},{value:"Condition",id:"condition",children:[]},{value:"Response",id:"response",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"Get Students"),Object(o.b)("h3",{id:"request"},"Request"),Object(o.b)("h4",{id:"method"},"Method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET\n")),Object(o.b)("h4",{id:"endpoint"},"Endpoint"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"/students")),Object(o.b)("h4",{id:"header"},"Header"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(o.b)("h4",{id:"body"},"Body"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"N/A")),Object(o.b)("h3",{id:"condition"},"Condition"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"N/A\n")),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("h4",{id:"success"},"Success"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{\nsucess: true,\ncontent: [\n    {\n    id: int,\n    userid: int,\n    username: string,\n    firstname: string,\n    middlename:string,\n    lastname: string,\n    email: string,\n    mobile: string,\n    gender: string,\n    dateofbirth: datetime,\n    photo: string,\n    level: int,\n    experience: int,\n    verified: int,\n    gradelevel: string,\n    school: string,\n    other: string,\n    favoritesubject:string,\n    favoritesubject:string,\n    careergoal: string\n  }\n]\n}\n")),Object(o.b)("h4",{id:"fail"},"Fail"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{sucess: false}\n")))}l.isMDXComponent=!0}}]);