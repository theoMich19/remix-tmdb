import{j as e,g as f,h as g,i as F,F as P,L as b}from"./components-BiZKUSio.js";import{T as a}from"./index-DctlyXKp.js";import{i as u}from"./index-1YnX0IqW.js";import{a as v}from"./use-ternary-dark-mode-BV-Q2tUq.js";import{u as x,a as p,L as j,I as w,g as l,E as h,b as N,z as i,c as y,p as T,d as I,F as q,e as R,D as k}from"./dark-mode-picker-popover-BgzXLnir.js";import{B as c}from"./button-Bnoj5lEo.js";function S({name:r}){const[s]=x(r),t=p(s);return e.jsxs("div",{children:[e.jsx(j,{htmlFor:s.id,children:e.jsx(a,{id:"ATGYL1"})}),e.jsx(w,{...l(s,{type:"email",control:t}),required:!0,className:"mt-1"}),e.jsx(h,{id:s.errorId,errors:s.errors})]})}function C({name:r}){const[s]=x(r),t=p(s);return e.jsxs("div",{children:[e.jsx(j,{htmlFor:s.id,children:e.jsx(a,{id:"8ZsakT"})}),e.jsx(N,{...l(s,{type:"password",control:t}),required:!0,className:"mt-1"}),e.jsx(h,{id:s.errorId,errors:s.errors})]})}const _=r=>i.object({password:i.string({required_error:r._("Required")}).min(1),email:i.string({required_error:r._("Required")}).min(1).email({message:r._("Invalid email format")}),redirectTo:i.string().optional()}),E=i.any();i.object({request:E});function L(){const r=f(),[s]=g(),[t,o]=y({lastResult:r,shouldValidate:"onSubmit",defaultValue:{email:"",password:"",redirectTo:s.get("redirectTo")??void 0},onValidate({formData:d}){return T(d,{schema:_(u)})}}),n=F(),m=n.state==="submitting"||n.state==="loading"&&n.formMethod==="POST";return e.jsx(P,{method:"post",className:"space-y-6",...I(t),children:e.jsxs(q,{context:t.context,children:[e.jsx(v,{}),e.jsx("input",{...l(o.redirectTo,{type:"hidden"})}),e.jsx(S,{name:o.email.name}),e.jsx(C,{name:o.password.name}),t.errors?e.jsx(R,{children:t.errors.map(d=>d)}):null,e.jsxs(c,{type:"submit",className:"w-full",disabled:m,children:[e.jsx(a,{id:"e+RpCP"}),m?"...":""]}),e.jsxs("div",{className:"w-full text-center text-sm text-gray-500",children:[e.jsx(a,{id:"8wYDMp"})," ",e.jsx(c,{className:"px-0",variant:"link",asChild:!0,children:e.jsx(b,{to:{pathname:"/sign-in",search:s.toString()},children:e.jsx(a,{id:"5lWFkC"})})})]})]})})}const W=({data:r})=>[{title:(r==null?void 0:r.title)??u._({id:"e+RpCP"})}];function Y(){return e.jsx("div",{className:"flex min-h-full flex-col justify-center",children:e.jsxs("div",{className:"mx-auto w-full max-w-md  py-4 px-8 rounded-xl border bg-card text-card-foreground shadow",children:[e.jsx("div",{className:"absolute top-[15px] right-[15px]",children:e.jsx(k,{})}),e.jsx("h1",{className:"w-full text-center text-2xl font-bold",children:e.jsx(a,{id:"e+RpCP"})}),e.jsx(L,{})]})})}export{Y as default,W as meta};
