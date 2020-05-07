(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return o}));var b=l(1),n=l(9),a=(l(0),l(192)),c={id:"item-mods",title:"Item Mods"},r={id:"modules/item-mods",title:"Item Mods",description:"The item mods module allows modification of all items present on a map or created during the match. This can be used, for example, to make all gold swords unbreakable or give all items of a specific type a custom name.",source:"@site/docs/modules/item-mods.mdx",permalink:"/PGM/docs/modules/item-mods",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/item-mods.mdx",sidebar:"Modules",previous:{title:"Pickups",permalink:"/PGM/docs/modules/pickups"},next:{title:"Crafting Recipes",permalink:"/PGM/docs/modules/crafting"}},u=[{value:"Item Meta",id:"item-meta",children:[]}],i={rightToc:u};function o(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The item mods module allows modification of all items present on a map or created during the match. This can be used, for example, to make all gold swords unbreakable or give all items of a specific type a custom name."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<item-mods> </item-mods>")),Object(a.b)("td",null,"The item mods node, containing all the individual modification rules."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null,"Value/Children")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<rule> </rule>")),Object(a.b)("td",null,"A single item modification rule."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Rule Sub-Elements")))))),Object(a.b)("h5",{id:"rule-sub-elements"},"Rule Sub-Elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<match> </match>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),Object(a.b)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent"},"Unique"),"The material or materials to modify."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Match Sub-Elements"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<modify> </modify>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),Object(a.b)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent"},"Unique"),"The attributes to modify on the specified material(s)."),Object(a.b)("td",null,Object(a.b)("a",{href:"#itemmeta"},"Item Meta")))))),Object(a.b)("h5",{id:"match-sub-elements"},"Match Sub-Elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<material> </material>")),Object(a.b)("td",null,"An individual material to match."),Object(a.b)("td",null,Object(a.b)("a",{href:"/reference/inventory#material_matchers"},"Single Material Pattern"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<all-materials/>")),Object(a.b)("td",null,"Match all materials."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<all-blocks/>")),Object(a.b)("td",null,"Match all block type materials."),Object(a.b)("td",null))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<item-mods>\n    <rule>\n        <match>\n            <material>Iron Sword</material>\n        </match>\n        <modify unbreakable="true">\n            <enchantment level="1">Knockback</enchantment>\n        </modify>\n    </rule>\n</item-mods>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<item-mods>\n    <rule>\n        <match>\n            <material>Bow</material>\n        </match>\n        <modify show-enchantments="false" unbreakable="true">\n            <enchantment level="2">Infinity</enchantment>\n        </modify>\n    </rule>\n</item-mods>\n')),Object(a.b)("h3",{id:"item-meta"},"Item Meta"),Object(a.b)("p",null,"The following attributes and sub-elements can be used with the ",Object(a.b)("inlineCode",{parentName:"p"},"<modify>")," element to modify an item or block.\nWhile these are the same attributes as used in item kits\nthe modify element does not currently support the projectile or grenade attributes."),Object(a.b)("h5",{id:"modify-sub-elements"},"Modify Sub-Elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<enchantment> </enchantment>")),Object(a.b)("td",null,"This item's enchantments."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/items#enchantments"},"Enchantments"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<effect> </effect>")),Object(a.b)("td",null,"A custom potion effect, only applies for potion items."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/potions"},"Potion Effect"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<attribute> </attribute>")),Object(a.b)("td",null,"Custom attributes for this item."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/items#attributes"},"Attribute Modifiers"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<can-destroy> </can-destroy>")),Object(a.b)("td",null,"The materials that can be mined with the item."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/items#can-destroy"},"Can Destroy"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<can-place-on> </can-place-on>")),Object(a.b)("td",null,"Materials that the item can be placed on."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/items#can-destroy"},"Can Place On")))))),Object(a.b)("h5",{id:"modify-attributes"},"Modify Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"name")),Object(a.b)("td",null,"The item's display name."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"lore")),Object(a.b)("td",null,"Custom lore string."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"unbreakable")),Object(a.b)("td",null,"Specify if this item is unbreakable, hides the durability bar in minecraft."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"color")),Object(a.b)("td",null,"Leather armor color as a hexadecimal color. ",Object(a.b)("label",null,"RRGGBB"),Object(a.b)("br",null),Object(a.b)("i",null,"Only applies to leather armor items.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Hex Color")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"potion")),Object(a.b)("td",null,"Potion type",Object(a.b)("br",null),Object(a.b)("i",null,"Only applies to potion items.")),Object(a.b)("td",null,Object(a.b)("a",{href:"http://minecraft.gamepedia.com/Potion#Data_values"},"Potion ID")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-enchantments")),Object(a.b)("td",null,"Show enchantments in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-attributes")),Object(a.b)("td",null,"Show attribute modifiers in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-unbreakable")),Object(a.b)("td",null,"Show the unbreakable property in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-can-destroy")),Object(a.b)("td",null,"Show the breakable block list in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-can-place-on")),Object(a.b)("td",null,"Show the blocks the item can be placed on in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-other")),Object(a.b)("td",null,"Show various other things in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true"))))))}o.isMDXComponent=!0},192:function(e,t,l){"use strict";l.d(t,"a",(function(){return d})),l.d(t,"b",(function(){return O}));var b=l(0),n=l.n(b);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},a=Object.keys(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r({},t,{},e)),l},d=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(b.forwardRef)((function(e,t){var l=e.components,b=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=o(l),m=b,O=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return l?n.a.createElement(O,r({ref:t},i,{components:l})):n.a.createElement(O,r({ref:t},i))}));function O(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=l.length,c=new Array(a);c[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:b,c[1]=r;for(var i=2;i<a;i++)c[i]=l[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,l)}m.displayName="MDXCreateElement"}}]);