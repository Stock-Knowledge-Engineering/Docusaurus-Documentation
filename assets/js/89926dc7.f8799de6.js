(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(111)),i={title:"Leaderboard",date:new Date("2018-12-29T05:02:05.000Z"),icon:"ti-panel",description:"Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",weight:1},c={unversionedId:"API-and-Scaling-Docs/Endpoints/Leaderboard/_index.en",id:"API-and-Scaling-Docs/Endpoints/Leaderboard/_index.en",isDocsHomePage:!1,title:"Leaderboard",description:"Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",source:"@site/docs/API-and-Scaling-Docs/Endpoints/Leaderboard/_index.en.md",sourceDirName:"API-and-Scaling-Docs/Endpoints/Leaderboard",slug:"/API-and-Scaling-Docs/Endpoints/Leaderboard/_index.en",permalink:"/SK_Docs/docs/API-and-Scaling-Docs/Endpoints/Leaderboard/_index.en",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API-and-Scaling-Docs/Endpoints/Leaderboard/_index.en.md",version:"current",frontMatter:{title:"Leaderboard",date:"2018-12-29T05:02:05.000Z",icon:"ti-panel",description:"Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",weight:1},sidebar:"tutorialSidebar",previous:{title:"Get Students",permalink:"/SK_Docs/docs/API-and-Scaling-Docs/Endpoints/Get-Students/_index.en"},next:{title:"Endpoints",permalink:"/SK_Docs/docs/API-and-Scaling-Docs/Endpoints/_index.en"}},d=[{value:"Method",id:"method",children:[]},{value:"Endpoint",id:"endpoint",children:[]},{value:"Header",id:"header",children:[]},{value:"Body (Optional)",id:"body-optional",children:[]},{value:"Response",id:"response",children:[]},{value:"Example",id:"example",children:[]}],l={toc:d};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"description"},"Description"),Object(o.b)("p",null,"Return students record in descending order base on student points"),Object(o.b)("h3",{id:"method"},"Method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-PHP"},"GET/POST\n")),Object(o.b)("h3",{id:"endpoint"},"Endpoint"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"/admin/api.php?f=leaderboard")),Object(o.b)("h3",{id:"header"},"Header"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Content-Type: application/x-www-form-urlencoded")),Object(o.b)("h3",{id:"body-optional"},"Body (Optional)"),Object(o.b)("h5",{id:"filter-by-school-name"},"Filter by school name"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"school_name={schoolname}")),Object(o.b)("h5",{id:"filter-by-grade-level"},"Filter by grade level"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"grade_level={gradelevel}")),Object(o.b)("h5",{id:"filter-by-school-name-and-grade-level"},"Filter by school name and grade level"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"school_name={schoolname}&grade_level={gradelevel}")),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("h5",{id:"success"},"Success"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JavaScript"},'{\n    result: "success",         //String\n    content: [                 //Array of Objects\n        {\n        id: int,\n        user_id: int,\n        firstname: string,\n        lastname: string,\n        gradelevel: int,\n        schoolname: int,\n        preferences: string,\n        points: int\n      }\n    ]\n}\n')),Object(o.b)("h5",{id:"fail"},"Fail"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JavaScript"},'{\n    result: "fail"            //String\n}\n')),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("h4",{id:"javascript"},"Javascript"),Object(o.b)("h5",{id:"get-request"},"GET Request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Javascript"},"const leaderboard = async () => {\n    const response = await fetch('http://stockknowledge.org/admin/api.php?f=leaderboard');\n    return await response.json();\n}\n")),Object(o.b)("h5",{id:"post-request"},"POST Request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Javascript"},"const leaderboard = async () => {\n    const response = await fetch('http://stockknowledge.org/admin/api.php?f=leaderboard',{\n        method: 'POST',\n        body: 'grade_level=1',\n        headers: {\n            'Content-Type': 'application/x-www-form-urlencoded'\n        }\n    });\n    return await response.json();\n}\n")))}s.isMDXComponent=!0}}]);