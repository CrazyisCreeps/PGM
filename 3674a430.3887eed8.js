(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return r})),b.d(t,"metadata",(function(){return c})),b.d(t,"rightToc",(function(){return o})),b.d(t,"default",(function(){return s}));var l=b(1),n=b(9),a=(b(0),b(192)),r={id:"scoring",title:"Scoring"},c={id:"modules/scoring",title:"Scoring",description:"The score module can be used to give matches a score limit and modify how many points are added to the score for each kill or death. It can also be used to create score boxes that give a player or team a certain amount of points when they enter it.",source:"@site/docs/modules/scoring.mdx",permalink:"/PGM/docs/modules/scoring",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/scoring.mdx",sidebar:"Modules",previous:{title:"Blitz",permalink:"/PGM/docs/modules/blitz"},next:{title:"Other Gamemodes",permalink:"/PGM/docs/modules/other"}},o=[{value:"Time Limit",id:"time-limit",children:[]}],i={rightToc:o};function s(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The score module can be used to give matches a score limit and modify how many points are added to the score for each kill or death. It can also be used to create score boxes that give a player or team a certain amount of points when they enter it."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Score Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null),Object(a.b)("th",null))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<score> </score>")),Object(a.b)("td",{colspan:"3"},"Node containing the score settings and score boxes.")),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null,"Value/Children"),Object(a.b)("th",null,"Default")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<limit>")),Object(a.b)("td",null,"Max score that can be reached before the match ends."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null,"No limit")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<kills>")),Object(a.b)("td",null,"Points to ",Object(a.b)("strong",null,"give")," to a team for killing an enemy player"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<deaths>")),Object(a.b)("td",null,"Points to ",Object(a.b)("strong",null,"deduct")," from a team for the"," ",Object(a.b)("strong",null,"accidental")," death of a team member"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<box>")),Object(a.b)("td",null,"A single score box."),Object(a.b)("td",null,Object(a.b)("a",{href:"#score_box"},"Score Box")),Object(a.b)("td",null))))),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),"<score>\n    \x3c!-- First team to reach 100 points wins the match --\x3e\n    <limit>100</limit>\n\n    <kills>3</kills> \x3c!-- +3 points for every kill --\x3e\n    <deaths>2</deaths> \x3c!-- -2 points for accidentally dying --\x3e\n</score>\n")),Object(a.b)("h4",{id:"score-boxes"},"Score Boxes"),Object(a.b)("p",null,"A score box will give points to a players team when they enter or bring a redeemable item to the score box region. ",Object(a.b)("a",Object(l.a)({parentName:"p"},{href:"/modules/portals"}),"Portals")," should be setup to remove the player from the immediate vicinity of the score box to prevent multiple scores."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Score Box Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<box>")),Object(a.b)("td",null,"A single score box."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Score Box Sub-elements")))))),Object(a.b)("h5",{id:"score-box-attributes"},"Score Box Attributes"),Object(a.b)("div",{className:"table-responsive"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Type"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"points")),Object(a.b)("td",null,"Points awarded for entering the box."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"silent")),Object(a.b)("td",null,"Don't notify players when points are scored in this box."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"region")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The location and size of the score box."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Region")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter who can score in this box."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"No Filter"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"trigger")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Dynamic conditions under which this score box is applied."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Dynamic Filter")),Object(a.b)("td",null))))),Object(a.b)("h5",{id:"score-box-sub-elements"},"Score Box Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<redeemables>")),Object(a.b)("td",null,"Items that can be redeemed at this score box for points."),Object(a.b)("td",null,Object(a.b)("label",null,'<item points="1">'))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("span",{className:"highlight"},Object(a.b)("label",null,"<region>"))),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The region where this score box is located."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Regions"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<filter>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter who can score in this box."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Filters"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<trigger>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Dynamic conditions under which this score box is applied."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Dynamic Filters")))))),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<score>\n    \x3c!-- Only allow red team to use this score box, and give them two points --\x3e\n    <box points="2" filter="only-red">\n        <region><cylinder base="21,8,63" radius="1" height="2"/></region>\n    </box>\n</score>\n\n<score>\n    <box value="8" filter="cyan" region="cyan-scorebox"/>\n</score>\n')),Object(a.b)("h4",{id:"redeemables"},"Redeemables"),Object(a.b)("p",null,"A score box can also award points in exchange for particular items carried by the player when they\nenter the box. These items are defined inside a ",Object(a.b)("inlineCode",{parentName:"p"},"<redeemables>")," score box sub-element as ",Object(a.b)("inlineCode",{parentName:"p"},"<item>")," tags.\nEach item contains a ",Object(a.b)("a",Object(l.a)({parentName:"p"},{href:"/reference/inventory#material_finder"}),"material name"),"\nand an optional ",Object(a.b)("inlineCode",{parentName:"p"},'points="..."')," attribute specifying the number of points awarded for each item."),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<score>\n    <box filter="only-red" region="red-depot">\n        <redeemables>\n            <item points="5">diamond</item>\n            <item points="3">emerald</item>\n            <item points="1">gold nugget</item>\n        </redeemables>\n    </box>\n</score>\n')),Object(a.b)("h3",{id:"time-limit"},"Time Limit"),Object(a.b)("p",null,'Give the match a time limit, the result attribute determines how the winning team or player is calculated when the time runs out.\nResult can be the name of a team, or one of the special values; "tie" for no winner, or "objectives" for the team that has the most objectives completed. The time limit can be specified in minutes, etc., by formatting it as a ',Object(a.b)("a",Object(l.a)({parentName:"p"},{href:"/reference/time_periods"}),"time period"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NOTE!")," This tag is ",Object(a.b)("strong",{parentName:"p"},"not")," placed inside the score module, instead it is located in the root ",Object(a.b)("inlineCode",{parentName:"p"},"<map>")," element."),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<time result="objectives">5m</time>\n')),Object(a.b)("h5",{id:"time-attributes"},"Time Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Type"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"result")),Object(a.b)("td",null,"Change how the winning team or player is calculated.",Object(a.b)("br",null),"Accepts ",Object(a.b)("label",null,"default"),", ",Object(a.b)("label",null,"tie"),","," ",Object(a.b)("label",null,"objectives")," or a Team ID."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Victory Condition"),"|",Object(a.b)("span",{className:"badge badge--primary"},"Team ID")),Object(a.b)("td",null,"default")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show")),Object(a.b)("td",null,"Show the remaining time in the chat and boss bar."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true"))))))}s.isMDXComponent=!0},192:function(e,t,b){"use strict";b.d(t,"a",(function(){return u})),b.d(t,"b",(function(){return j}));var l=b(0),n=b.n(l);function a(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function r(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,l)}return b}function c(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?r(Object(b),!0).forEach((function(t){a(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):r(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function o(e,t){if(null==e)return{};var b,l,n=function(e,t){if(null==e)return{};var b,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)b=a[l],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)b=a[l],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(n[b]=e[b])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),b=t;return e&&(b="function"==typeof e?e(t):c({},t,{},e)),b},u=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(l.forwardRef)((function(e,t){var b=e.components,l=e.mdxType,a=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(b),O=l,j=u["".concat(r,".").concat(O)]||u[O]||d[O]||a;return b?n.a.createElement(j,c({ref:t},i,{components:b})):n.a.createElement(j,c({ref:t},i))}));function j(e,t){var b=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=b.length,r=new Array(a);r[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var i=2;i<a;i++)r[i]=b[i];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,b)}O.displayName="MDXCreateElement"}}]);