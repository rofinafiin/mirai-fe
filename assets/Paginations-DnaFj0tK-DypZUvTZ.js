import{P as e,f as u,a as b,p as j,h as f,_ as v,J as c}from"./index-CGU3vo64.js";import{a as N,b as l}from"./DefaultLayout-Chirmq72-CeNFkoRZ.js";import{P}from"./index.esm-FQqkxIFl-DEuLJyVG.js";import{v as k,x as d}from"./CRow-Le1WPV72-CTgddwaj.js";import{x as o,g as h}from"./CCardBody-CvGUaikZ-Cbh_plRX.js";import{r as x}from"./CCardHeader-CmASvoAE-CyvJ9ZC8.js";import"./js.cookie-Cz0CWeBA-DHfMUIt6.js";import"./cil-user-Dlmw-Gem-yFXlJL2b.js";var i=u.forwardRef(function(a,m){var n,g=a.children,p=a.align,r=a.className,t=a.size,y=b(a,["children","align","className","size"]);return j.createElement("nav",f({ref:m},y),j.createElement("ul",{className:v("pagination",(n={},n["justify-content-".concat(p)]=p,n["pagination-".concat(t)]=t,n),r)},g))});i.propTypes={align:c.oneOf(["start","center","end"]),children:c.node,className:c.string,size:c.oneOf(["sm","lg"])};i.displayName="CPagination";var s=u.forwardRef(function(a,m){var n=a.children,g=a.as,p=a.className,r=b(a,["children","as","className"]),t=g??(r.active?"span":"a");return j.createElement("li",f({className:v("page-item",{active:r.active,disabled:r.disabled},p)},r.active&&{"aria-current":"page"}),t==="a"?j.createElement(P,f({className:"page-link",as:t},r,{ref:m}),n):j.createElement(t,{className:"page-link",ref:m},n))});s.propTypes={as:c.elementType,children:c.node,className:c.string};s.displayName="CPaginationItem";const J=()=>e.jsxs(k,{children:[e.jsxs(d,{xs:12,children:[e.jsx(N,{href:"components/pagination/"}),e.jsxs(o,{className:"mb-4",children:[e.jsx(x,{children:e.jsx("strong",{children:"React Pagination"})}),e.jsxs(h,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ",e.jsx("code",{children:"<nav>"})," element to identify it as a navigation section to screen readers and other assistive technologies."]}),e.jsxs("p",{className:"text-body-secondary small",children:["In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive ",e.jsx("code",{children:"aria-label"})," for the"," ",e.jsx("code",{children:"<nav>"})," to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",e.jsx("code",{children:'aria-label="Search results pages"'}),"."]}),e.jsx(l,{href:"components/pagination",children:e.jsxs(i,{"aria-label":"Page navigation example",children:[e.jsx(s,{children:"Previous"}),e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{children:"Next"})]})})]})]})]}),e.jsx(d,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(x,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Working with icons"})]}),e.jsxs(h,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ",e.jsx("code",{children:"aria"})," attributes."]}),e.jsx(l,{href:"components/pagination#working-with-icons",children:e.jsxs(i,{"aria-label":"Page navigation example",children:[e.jsx(s,{"aria-label":"Previous",children:e.jsx("span",{"aria-hidden":"true",children:"«"})}),e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{"aria-label":"Next",children:e.jsx("span",{"aria-hidden":"true",children:"»"})})]})})]})]})}),e.jsx(d,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(x,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Disabled and active states"})]}),e.jsxs(h,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Pagination links are customizable for different circumstances. Use"," ",e.jsx("code",{children:"disabled"})," for links that appear un-clickable and ",e.jsx("code",{children:".active"})," to indicate the current page."]}),e.jsxs("p",{className:"text-body-secondary small",children:["While the ",e.jsx("code",{children:"disabled"})," prop uses ",e.jsx("code",{children:"pointer-events: none"})," to"," ",e.jsx("em",{children:"try"})," to disable the link functionality of ",e.jsx("code",{children:"<a>"}),"s, that CSS property is not yet standardized and doesn'taccount for keyboard navigation. As such, we always add ",e.jsx("code",{children:'tabindex="-1"'})," on disabled links and use custom JavaScript to fully disable their functionality."]}),e.jsx(l,{href:"components/pagination#disabled-and-active-states",children:e.jsxs(i,{"aria-label":"Page navigation example",children:[e.jsx(s,{"aria-label":"Previous",disabled:!0,children:e.jsx("span",{"aria-hidden":"true",children:"«"})}),e.jsx(s,{active:!0,children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{"aria-label":"Next",children:e.jsx("span",{"aria-hidden":"true",children:"»"})})]})})]})]})}),e.jsx(d,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(x,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Sizing"})]}),e.jsxs(h,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Fancy larger or smaller pagination? Add ",e.jsx("code",{children:'size="lg"'})," or"," ",e.jsx("code",{children:'size="sm"'})," for additional sizes."]}),e.jsx(l,{href:"components/pagination#sizing",children:e.jsxs(i,{size:"lg","aria-label":"Page navigation example",children:[e.jsx(s,{children:"Previous"}),e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{children:"Next"})]})}),e.jsx(l,{href:"components/pagination#sizing",children:e.jsxs(i,{size:"sm","aria-label":"Page navigation example",children:[e.jsx(s,{children:"Previous"}),e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{children:"Next"})]})})]})]})}),e.jsx(d,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(x,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Alignment"})]}),e.jsxs(h,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Change the alignment of pagination components with"," ",e.jsx("a",{href:"https://coreui.io/docs/utilities/flex/",children:"flexbox utilities"}),"."]}),e.jsx(l,{href:"components/pagination#aligment",children:e.jsxs(i,{className:"justify-content-center","aria-label":"Page navigation example",children:[e.jsx(s,{disabled:!0,children:"Previous"}),e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{children:"Next"})]})}),e.jsx(l,{href:"components/pagination#aligment",children:e.jsxs(i,{className:"justify-content-end","aria-label":"Page navigation example",children:[e.jsx(s,{disabled:!0,children:"Previous"}),e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{children:"Next"})]})})]})]})})]});export{J as default};
