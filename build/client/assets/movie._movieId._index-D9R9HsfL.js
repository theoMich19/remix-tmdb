import{K as G,N as X,j as c,L as st}from"./components-BiZKUSio.js";import{I as V,C as at,a as it,b as ot}from"./image-C4GdKIOV.js";import{u as ut}from"./remix-8WgreAnz.js";import"./button-Bnoj5lEo.js";var tt={exports:{}};(function(M,H){(function(_,l){M.exports=l()})(G,function(){var _=1e3,l=6e4,w=36e5,Y="millisecond",f="second",j="minute",y="hour",g="day",T="week",v="month",A="quarter",D="year",S="date",b="Invalid Date",J=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},I=function(s,r,t){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(t)+s},nt={s:I,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+I(n,2,"0")+":"+I(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,v),a=t-e<0,i=r.clone().add(n+(a?-1:1),v);return+(-(n+(t-e)/(a?e-i:i-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:v,y:D,w:T,d:g,D:S,h:y,m:j,s:f,ms:Y,Q:A}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},F="en",O={};O[F]=q;var P="$isDayjsObject",R=function(s){return s instanceof E||!(!s||!s[P])},U=function s(r,t,n){var e;if(!r)return F;if(typeof r=="string"){var a=r.toLowerCase();O[a]&&(e=a),t&&(O[a]=t,e=a);var i=r.split("-");if(!e&&i.length>1)return s(i[0])}else{var u=r.name;O[u]=r,e=u}return!n&&e&&(F=e),e||!n&&F},m=function(s,r){if(R(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new E(t)},o=nt;o.l=U,o.i=R,o.w=function(s,r){return m(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var E=function(){function s(t){this.$L=U(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[P]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,a=n.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(J);if(i){var u=i[2]-1||0,d=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)):new Date(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==b},r.isSame=function(t,n){var e=m(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return m(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<m(t)},r.$g=function(t,n,e){return o.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,a=!!o.u(n)||n,i=o.p(t),u=function(k,$){var L=o.w(e.$u?Date.UTC(e.$y,$,k):new Date(e.$y,$,k),e);return a?L:L.endOf(g)},d=function(k,$){return o.w(e.toDate()[k].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice($)),e)},h=this.$W,p=this.$M,x=this.$D,C="set"+(this.$u?"UTC":"");switch(i){case D:return a?u(1,0):u(31,11);case v:return a?u(1,p):u(0,p+1);case T:var N=this.$locale().weekStart||0,W=(h<N?h+7:h)-N;return u(a?x-W:x+(6-W),p);case g:case S:return d(C+"Hours",0);case y:return d(C+"Minutes",1);case j:return d(C+"Seconds",2);case f:return d(C+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,a=o.p(t),i="set"+(this.$u?"UTC":""),u=(e={},e[g]=i+"Date",e[S]=i+"Date",e[v]=i+"Month",e[D]=i+"FullYear",e[y]=i+"Hours",e[j]=i+"Minutes",e[f]=i+"Seconds",e[Y]=i+"Milliseconds",e)[a],d=a===g?this.$D+(n-this.$W):n;if(a===v||a===D){var h=this.clone().set(S,1);h.$d[u](d),h.init(),this.$d=h.set(S,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[o.p(t)]()},r.add=function(t,n){var e,a=this;t=Number(t);var i=o.p(n),u=function(p){var x=m(a);return o.w(x.date(x.date()+Math.round(p*t)),a)};if(i===v)return this.set(v,this.$M+t);if(i===D)return this.set(D,this.$y+t);if(i===g)return u(1);if(i===T)return u(7);var d=(e={},e[j]=l,e[y]=w,e[f]=_,e)[i]||1,h=this.$d.getTime()+t*d;return o.w(h,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||b;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=o.z(this),u=this.$H,d=this.$m,h=this.$M,p=e.weekdays,x=e.months,C=e.meridiem,N=function($,L,z,Z){return $&&($[L]||$(n,a))||z[L].slice(0,Z)},W=function($){return o.s(u%12||12,$,"0")},k=C||function($,L,z){var Z=$<12?"AM":"PM";return z?Z.toLowerCase():Z};return a.replace(K,function($,L){return L||function(z){switch(z){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return h+1;case"MM":return o.s(h+1,2,"0");case"MMM":return N(e.monthsShort,h,x,3);case"MMMM":return N(x,h);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return N(e.weekdaysMin,n.$W,p,2);case"ddd":return N(e.weekdaysShort,n.$W,p,3);case"dddd":return p[n.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return W(1);case"hh":return W(2);case"a":return k(u,d,!0);case"A":return k(u,d,!1);case"m":return String(d);case"mm":return o.s(d,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return i}return null}($)||i.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var a,i=this,u=o.p(n),d=m(t),h=(d.utcOffset()-this.utcOffset())*l,p=this-d,x=function(){return o.m(i,d)};switch(u){case D:a=x()/12;break;case v:a=x();break;case A:a=x()/3;break;case T:a=(p-h)/6048e5;break;case g:a=(p-h)/864e5;break;case y:a=p/w;break;case j:a=p/l;break;case f:a=p/_;break;default:a=p}return e?a:o.a(a)},r.daysInMonth=function(){return this.endOf(v).$D},r.$locale=function(){return O[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),a=U(t,n,!0);return a&&(e.$L=a),e},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),Q=E.prototype;return m.prototype=Q,[["$ms",Y],["$s",f],["$m",j],["$H",y],["$W",g],["$M",v],["$y",D],["$D",S]].forEach(function(s){Q[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),m.extend=function(s,r){return s.$i||(s(r,E,m),s.$i=!0),m},m.locale=U,m.isDayjs=R,m.unix=function(s){return m(1e3*s)},m.en=O[F],m.Ls=O,m.p={},m})})(tt);var et=tt.exports;const B=X(et);var rt={exports:{}};(function(M,H){(function(_,l){M.exports=l()})(G,function(){var _={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(l,w,Y){var f=w.prototype,j=f.format;Y.en.formats=_,f.format=function(y){y===void 0&&(y="YYYY-MM-DDTHH:mm:ssZ");var g=this.$locale().formats,T=function(v,A){return v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(D,S,b){var J=b&&b.toUpperCase();return S||A[b]||_[b]||A[J].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(K,q,I){return q||I.slice(1)})})}(y,g===void 0?{}:g);return j.call(this,T)}}})})(rt);var ct=rt.exports;const lt=X(ct);var dt={exports:{}};(function(M,H){(function(_,l){M.exports=l(et)})(G,function(_){function l(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var w=l(_),Y={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(f){return""+f+(f===1?"er":"")}};return w.default.locale(Y,null,!0),Y})})(dt);B.locale("fr");B.extend(lt);const ft=(M,H="DD/MM/YYYY")=>B(M).locale("fr").format(H);function Mt(){const{movieDetails:M,movieRecommendations:H,moviesImagesList:_}=ut();return c.jsxs("main",{className:"w-full h-full gap-8 sm:items-center sm:justify-center bg-black text-white overflow-scroll",children:[c.jsxs("section",{className:"flex flex-col md:flex-row mx-auto w-full md:w-[80vw]  md:mt-4",children:[c.jsx(V,{src:`https://image.tmdb.org/t/p/original/${M.poster_path}`,alt:"",className:"w-full md:w-96"}),c.jsxs("div",{className:"w-full mx-4 md:ml-8 space-y-4",children:[c.jsx("h1",{className:"text-4xl font-bold",children:M.title}),c.jsx("div",{className:"flex gap-4",children:M.genres.map(({id:l,name:w})=>c.jsx("span",{className:"bg-gray-800 rounded px-4 py-2",children:w},l))}),c.jsxs("div",{className:"space-y-4 text-gray-400",children:[c.jsxs("span",{children:["Sortie : ",ft(M.release_date)]}),c.jsx("p",{children:M.overview})]})]})]}),c.jsxs("section",{className:"flex flex-col mx-auto w-full md:w-[80vw]  md:mt-4",children:[c.jsx("h4",{children:"Nos Recommendations"}),c.jsx(at,{className:"w-full md:w-[90vw] mx-auto mt-8",children:c.jsx(it,{children:H.results.map(l=>c.jsx(ot,{className:"basis-1/3 lg:basis-1/5 lg:pl-8 hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out",children:c.jsx(st,{to:`movie/${l.id}`,children:c.jsx(V,{src:`https://image.tmdb.org/t/p/original/${l.poster_path}`,alt:"",className:"w-44"})})},l.id))})})]}),c.jsxs("section",{className:"flex flex-col mx-auto w-full md:mt-4 gap-1 overflow-hidden",children:[c.jsx("h4",{children:"Gallerie photos"}),c.jsx("div",{className:"flex flex-wrap",children:_.backdrops.map(l=>c.jsx("div",{className:"hover:scale-110 hover:z-40 transition-all duration-200 ease-in-out w-full md:w-[20vw]",children:c.jsx(V,{src:`https://image.tmdb.org/t/p/original/${l.file_path}`,alt:"",className:""})},l.file_path))})]})]})}export{Mt as default};