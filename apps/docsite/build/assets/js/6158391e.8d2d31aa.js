"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[605],{430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var l=n(5893),r=n(1151);const s={},i=void 0,d={id:"Test Plans/HorizontalBarChart/ComponentTests",title:"ComponentTests",description:"Horizontal Bar Chart \u2013 Component test plan",source:"@site/../../docs/Test Plans/HorizontalBarChart/ComponentTests.md",sourceDirName:"Test Plans/HorizontalBarChart",slug:"/Test Plans/HorizontalBarChart/ComponentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/HorizontalBarChart/ComponentTests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/GroupedVerticalBarChart/ComponentTests"},next:{title:"UnitTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/HorizontalBarChart/UnitTests"}},c={},o=[];function x(e){const t={li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Horizontal Bar Chart \u2013 Component test plan"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Sub-components: Bar, Callout, Labels, Benchmark"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Bar: Bar data, Bar color (single), bar label(left and right)"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Callout: Default/custom callout"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Labels: Default/Custom labels"})}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Test steps"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Validation"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Tool used"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 1: [Snapshot testing]"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, string data on x-axis."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render horizontal bar chart legend with string data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With variant set to \u201cabsolute scale\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render absolute scale variant correctly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With variant set to \u201cabsolute scale\u201d and hide labels set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render bar labels in absolute scale variant"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 2: Basic props testing"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideTooltip prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not mount callout when hideTootip is true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideTooltip prop set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should mount callout when hideTootip is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerHorizantalBar prop is not given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render onRenderCalloutPerHorizantalBar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerHorizantalBar is given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render onRenderCalloutPerHorizantalBar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideLabels prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render bar labels when hideLabels is true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Legend value set to \u201cx\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should display legend/left side label with specified data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 3: Render calling with respective to props"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- No prop changes: Mount HorizontalBarChart and then set the same props again"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Prop changes: Mount HorizontalBarChart chart and then set some other prop"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 4: Mouse events"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse move from one bar to other bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mouse move"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a bar with customized callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 5: [Sub-Component]: Bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify bar color"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bar with the specified color"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- setbarHeight to \u201cx\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bars with specified height"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set variant to \u201cabsolute scale\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bars right side label inline with bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set variant to \u201cpart to whole\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bars right side label on top of bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set chartDataMode to \u201cfraction\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bar right side label value as a fractional one"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set chartDataMode to \u201cpercentage\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bar right side label value as a percentage value"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set barChartCustomData to \u201cx\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show custom data on bar right side label"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 6: [Sub-Component]: Benchmark"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify benchmark data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bars with benchmark symbol"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 7: [Sub-Component]: Callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler on mouse over bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a bar to display callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the default callout over that bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify custom callout and hover mouse over a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the custom callout over that bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 8: [Sub-Component]: Screen resolution"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Increase the screen resolution (zoom in)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom in"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Decrease the screen resolution (zoom out)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom out"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 9: Theme changed to Dark Theme"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reflect theme change"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 10: Horizontal bar chart re-rendering"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Update chart data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should re-render chart when data is updated"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 11: Horizontal bar chart with empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Chart with Empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render chart with Empty chart are label"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Chart with proper data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render chart with empty chart are label"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var l=n(7294);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);