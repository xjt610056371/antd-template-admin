import{x as p,s as u,r as g,v as e,B as o}from"./index-4e3ad937.js";import{l as h}from"./logo-d3ff92ff.js";import{m as x}from"./motion-30b3a6f5.js";import{F as s}from"./index-848c3bd8.js";import{I as n,C as j}from"./index-5e1758ed.js";import"./SVGVisualElement-609bf730.js";import"./index-e5ab3e08.js";import"./useMergedState-730fa904.js";import"./useFlexGapSupport-21bc15a1.js";import"./index-e0c17d72.js";const b="_container_w12h8_1",f="_bg_w12h8_13",w="_warp_w12h8_19",y="_logo_w12h8_29",t={container:b,bg:f,warp:w,logo:y},_="/antd-template-admin/assets/bg-190d9be0.svg";function B(){const i=p(),l=u(),[a,r]=g.useState(!1);async function c(m){try{r(!0),await l.login(m),r(!1),i("/dashboard")}catch(d){r(!1),console.log(d)}}return e.jsxs("div",{className:t.container,children:[e.jsx("img",{className:t.bg,src:_,alt:""}),e.jsxs(x.div,{animate:{scale:[.7,1],opacity:[.1,1]},className:t.warp,children:[e.jsxs("div",{className:t.logo,children:[e.jsx("img",{src:h,alt:""}),e.jsx("span",{children:"Welecome back"}),e.jsx("span",{children:"Hey, Enter your details to get sign in to your account"})]}),e.jsxs(s,{name:"loginForm",initialValues:{username:"test",password:"test",remember:!0},autoComplete:"off",style:{textAlign:"left"},onFinish:c,children:[e.jsx(s.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:e.jsx(n,{placeholder:"账号"})}),e.jsx(s.Item,{name:"password",rules:[{required:!0,message:"请输入密码"}],children:e.jsx(n.Password,{placeholder:"密码"})}),e.jsx(s.Item,{name:"remember",valuePropName:"checked",children:e.jsx(j,{children:"记住我"})}),e.jsx(s.Item,{children:e.jsx(o,{type:"primary",loading:a,htmlType:"submit",block:!0,children:"登录"})}),e.jsx(s.Item,{children:e.jsx(o,{type:"text",disabled:a,block:!0,children:"注册"})})]})]})]})}export{B as default};
