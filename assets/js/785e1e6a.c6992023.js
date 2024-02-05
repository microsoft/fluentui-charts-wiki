"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[9159],{4242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(5893),r=n(1151);const i={title:"Testing Strategy"},o=void 0,d={id:"Testing Strategy",title:"Testing Strategy",description:"Details",source:"@site/../../docs/Testing Strategy.md",sourceDirName:".",slug:"/Testing Strategy",permalink:"/fluentui-charting-contrib/docs/Testing Strategy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Testing Strategy"},sidebar:"tutorialSidebar",previous:{title:"Creating Date Objects For Chart Data",permalink:"/fluentui-charting-contrib/docs/creating-date-objects-for-chart-data"},next:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/AreaChart/ComponentTests"}},c={},a=[];function l(e){const t={a:"a",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Details"})}),"\n",(0,s.jsx)("img",{width:"455",alt:"image",src:n(6927).Z}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Summary"})}),"\n",(0,s.jsx)("img",{width:"755",alt:"image",src:n(7673).Z}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Flowchart"})}),"\n",(0,s.jsx)("img",{width:"594",alt:"image",src:n(1598).Z}),"\n",(0,s.jsx)(t.p,{children:"Details on the above mentioned steps:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Step"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Tool to be used"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#1"}),(0,s.jsx)(t.td,{children:"Scenarios for unit tests."}),(0,s.jsx)(t.td,{children:"Jest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#1a"}),(0,s.jsx)(t.td,{children:"Scenarios which can be unit tested."}),(0,s.jsx)(t.td,{children:"Jest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#1b"}),(0,s.jsx)(t.td,{children:"Scenarios which cannot be unit tested."}),(0,s.jsx)(t.td,{children:"Jest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#1ba"}),(0,s.jsx)(t.td,{children:"Scenarios defined in unit tests which cannot be unit tested but can be tested at the component level by headless rendering of components without a browser."}),(0,s.jsx)(t.td,{children:"React Testing Library + Jest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#1bb"}),(0,s.jsx)(t.td,{children:"Scenarios defined in unit tests which cannot be unit tested and cannot be tested at the component level by headless rendering of components without a browser. These scenarios may be tested by actual browser rendering using an automation tool or may need to be covered as a part of manual testing."}),(0,s.jsxs)(t.td,{children:["(React Testing Library + Jest) ",(0,s.jsx)(t.strong,{children:"OR"})," (E2E test automation tool like Cypress/Playwright) ",(0,s.jsx)(t.strong,{children:"OR"})," Manual testing"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#1bba"}),(0,s.jsx)(t.td,{children:"Scenarios defined in unit tests which cannot be unit tested and cannot be tested at the component level by headless rendering of components without a browser. These scenarios can be tested by actual browser rendering using an automation tool."}),(0,s.jsx)(t.td,{children:"React Testing Library + Jest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#1bbb"}),(0,s.jsx)(t.td,{children:"Scenarios defined in unit tests which cannot be unit tested, cannot be tested at the component level by headless rendering of components without a browser and cannot be tested by actual browser rendering using an automation tool. These scenarios need to be covered as a part of manual testing."}),(0,s.jsx)(t.td,{children:"Manual testing"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#2"}),(0,s.jsx)(t.td,{children:"Scenarios for component tests."}),(0,s.jsx)(t.td,{children:"React Testing Library + Jest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#2a"}),(0,s.jsx)(t.td,{children:"Scenarios defined in component tests which can be tested at the component level by headless rendering of components without a browser."}),(0,s.jsx)(t.td,{children:"React Testing Library + Jest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#2b"}),(0,s.jsx)(t.td,{children:"Scenarios defined in component tests which cannot be tested at the component level by headless rendering of components without a browser. These scenarios need to be covered either by actual rendered in a browser using an automation tool or tested as a part of manual testing."}),(0,s.jsxs)(t.td,{children:["(E2E test automation tool like Cypress/Playwright) ",(0,s.jsx)(t.strong,{children:"OR"})," Manual testing"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#2ba"}),(0,s.jsx)(t.td,{children:"Scenarios defined in component tests which cannot be tested at the component level by headless rendering of components without a browser. These scenarios can be covered by actual rendered in a browser using an automation tool."}),(0,s.jsx)(t.td,{children:"E2E test automation tool like Cypress/Playwright"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#2bb"}),(0,s.jsx)(t.td,{children:"Scenarios defined in component tests which can neither be tested at the component level by headless rendering of components without a browser nor by actual rendered in a browser using an automation tool. These scenarios need to be covered using manual testing."}),(0,s.jsx)(t.td,{children:"Manual testing"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#3"}),(0,s.jsx)(t.td,{children:"Scenarios for E2E tests."}),(0,s.jsx)(t.td,{children:"E2E test automation tool like Cypress/Playwright"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#3a"}),(0,s.jsx)(t.td,{children:"Scenarios defined in E2E tests which can be tested by actual rendering in a browser using a E2E test automation tool."}),(0,s.jsx)(t.td,{children:"E2E test automation tool like Cypress/Playwright"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#3b"}),(0,s.jsx)(t.td,{children:"Scenarios defined in E2E tests which cannot be tested by actual rendering in a browser using a E2E test automation tool. These scenarios need to be tested manually."}),(0,s.jsx)(t.td,{children:"Manual testing"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Test Completion:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Unit tests / Component tests / Automation tests coverage is at least 90%"}),"\n",(0,s.jsx)(t.li,{children:"Manual test coverage is 100%."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Run tests:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Yarn update-snapshots"}),"\n",(0,s.jsx)(t.li,{children:"Yarn test"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Steps to Measure Test Coverage:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Run "yarn test --coverage --coverageReporters=html" from cmd'}),"\n",(0,s.jsx)(t.li,{children:'Open "packages\\react-charting\\coverage\\index.html" to view the test coverage.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Currently, the code coverage for master branch:"}),"\n",(0,s.jsx)(t.p,{children:'Commit Id: "1da7bd9a64b1fdf4a3944edc52dc5e851ca47548"'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3666).Z+"",width:"2483",height:"1198"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example: How to Add Tests for Donut Chart"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9782).Z+"",width:"2470",height:"543"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 1 [Unit Tests]:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Identify the functions that can be unit tested (example, functions having calculations or getting values from Utils, etc)."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If required, extract the unit testable portions out of the functions which can be independently unit tested without any requirement of DOM elements."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"convertToLocaleString()"})," [src/components/DonutChart/DonutChart.base.tsx]"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"getAccessibleDataObject()"})," [src/components/DonutChart/DonutChart.base.tsx]"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"_valueInsideDonut()"})," [src/components/DonutChart/DonutChart.base.tsx]"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"wrapTextInsideDonut()"})," [src/components/DonutChart/Pie.tsx]"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"_computeTotalValue()"})," [src/components/DonutChart/Pie.tsx]"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Identify the parts within those functions which cannot be tested via unit tests."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"wrapTextInsideDonut() -"})," cannot be unit tested as it requires the tspan length to be calculated using Browser Functions like ",(0,s.jsx)(t.strong,{children:"getComputedTextLength()"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"_computeTotalValue() -"})," depends on the data prop passed down from the DonutChart.base to Pie during component rendering"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 2 [Component Tests]:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Identify the component level scenarios that can be tested (as per the test plan). - Component Test Plan"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Identify if the parts in Step 1 (ii) can be covered via component tests."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"_computeTotalValue() -"})," can be covered by component tests by passing the data prop during component rendering."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Identify the scenarios which cannot be covered via Step 2(I and ii)."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"wrapTextInsideDonut() -"})," cannot be unit/component tested as it requires the tspan length to be calculated using Browser Functions like ",(0,s.jsx)(t.strong,{children:"getComputedTextLength()"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 3 [E2E Tests]:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Identify the E2E scenarios that can be covered (as per the test plan) - Visual Regression with Interaction Test Plan \u2013 Donut Chart"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Cover all the test scenarios which could not be covered either in Step 1 or in Step 2."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"wrapTextInsideDonut() -"})," can be covered by E2E tests as the component is now rendered in a browser."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Sample PRs and Test Plans:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Unit tests: ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/27424/files",children:"Adding unit tests for donut chart by srmukher \xb7 Pull Request #27424 \xb7 microsoft/fluentui (github.com)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Component test plan and component tests: ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/27033",children:"Component testing - Donut chart by srmukher \xb7 Pull Request #27033 \xb7 microsoft/fluentui (github.com)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Test Plans: ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/tree/master/packages/react-charting/docs/TestPlans",children:"https://github.com/microsoft/fluentui/tree/master/packages/react-charting/docs/TestPlans"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Test categorization"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 1"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 2"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 3"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 4"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 5"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 6"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 7"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 8"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Group 9"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Line"}),(0,s.jsx)(t.td,{children:"Donut"}),(0,s.jsx)(t.td,{children:"Vertical bar"}),(0,s.jsx)(t.td,{children:"Stacked bar"}),(0,s.jsx)(t.td,{children:"Area"}),(0,s.jsx)(t.td,{children:"Tree"}),(0,s.jsx)(t.td,{children:"Sankey"}),(0,s.jsx)(t.td,{children:"HeatMap"}),(0,s.jsx)(t.td,{children:"Legends"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Pie"}),(0,s.jsx)(t.td,{children:"Vertical Stacked bar"}),(0,s.jsx)(t.td,{children:"Multi stacked bar"}),(0,s.jsx)(t.td,{children:"Sparkline"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Utilities"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Gauge"}),(0,s.jsx)(t.td,{children:"Grouped Vertical bar"}),(0,s.jsx)(t.td,{children:"Horizontal bar"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Setup: ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/wiki/Setup",children:"Setup \xb7 microsoft/fluentui Wiki (github.com)"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Conclusion:"})}),"\n",(0,s.jsxs)(t.p,{children:['As per our discussion with Martin on being consistent with Fluent library and due to the limitation of Enzyme not being compatible with the newer React 18, "My comment on the PR was more about going into the future and actual ',(0,s.jsx)(t.a,{href:"https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fteams.microsoft.com%2Fl%2Fmessage%2F19%3A383bdf2ab03e4d9db0a86225b08a61cd%40thread.tacv2%2F1675850066705%3FtenantId%3D72f988bf-86f1-41af-91ab-2d7cd011db47%26groupId%3D4026aab5-5f82-4e6b-baac-324d6275db35%26parentMessageId%3D1675850066705%26teamName%3D1JS%2520Developers%26channelName%3DGeneral%26createdTime%3D1675850066705&data=05%7C01%7CSreetama.Mukherjee%40microsoft.com%7C2d55d9a4ea77434cf46908db31433ec1%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638157937130123054%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=U6pTMegvDbdv7FCrbwQlDVlghHeXMra4yw2bASLskI8%3D&reserved=0",children:"Office 365 common dependency alignment,"})," where they are going to migrate to react 18 within repos, which makes enzyme useless as there are no adapters that work with react 18."]}),"\n",(0,s.jsx)(t.p,{children:"From architectural POV context, enzyme was never a good choice, but because react community evolving and learning patterns it got very big adoption even within fluent."}),"\n",(0,s.jsxs)(t.p,{children:["I'd encourage folks within your team to plan ahead and starting using solution that don't test that much low-level details, which often creates brittle tests, by leveraging ",(0,s.jsx)(t.a,{href:"https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftesting-library.com%2Fdocs%2Freact-testing-library%2Fintro%2F&data=05%7C01%7CSreetama.Mukherjee%40microsoft.com%7C2d55d9a4ea77434cf46908db31433ec1%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638157937130278718%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=5J3WzB04YevaW%2BuTYhdcjWJP0osltgG4wvrQH8qhSjA%3D&reserved=0",children:"react testing library"}),' and its ecosystem. "']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"[Any New Test we add should be using React Testing Library.]"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6927:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/TestingStrategy1-bc1d59cb4d6c733b00dd0089cb134299.png"},7673:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/TestingStrategy2-5440e4eb0fa1d8bf97e6794198b8ec8e.png"},1598:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/TestingStrategy3-0e54615ce02ba97681f48391dc63d004.png"},3666:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Coverage-fbab8f3f69e44f3e351f293be2326c7e.png"},9782:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/DonutCoverage-c5b1e06a767bd72c3f3bbe8971d80d5c.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);