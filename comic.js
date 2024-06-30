function t(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}const e=43200,n=1440;let a={};function r(){return a}function o(e){const n=t(e),a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return a.setUTCFullYear(n.getFullYear()),+e-+a}function i(e,n){const a=t(e),r=t(n),o=a.getTime()-r.getTime();return o<0?-1:o>0?1:o}function s(t){return function(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}(t,Date.now())}function u(e){const n=t(e);return+function(e){const n=t(e);return n.setHours(23,59,59,999),n}(n)==+function(e){const n=t(e),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}(n)}function c(e,n){const a=t(e),r=t(n),o=i(a,r),s=Math.abs(function(e,n){const a=t(e),r=t(n);return 12*(a.getFullYear()-r.getFullYear())+(a.getMonth()-r.getMonth())}(a,r));let c;if(s<1)c=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*s);let n=i(a,r)===-o;u(t(e))&&1===s&&1===i(e,r)&&(n=!1),c=o*(s-Number(n))}return 0===c?0:c}function d(e,n,a){const r=function(e,n){return+t(e)-+t(n)}(e,n)/1e3;return(o=a?.roundingMethod,t=>{const e=(o?Math[o]:Math.trunc)(t);return 0===e?0:e})(r);var o}const l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const h={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function y(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(s,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(s,(t=>t.test(i)));let c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;return{value:c,rest:e.slice(i.length)}}}var b;const w={code:"en-US",formatDistance:(t,e,n)=>{let a;const r=l[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:h,formatRelative:(t,e,n,a)=>f[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(b={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(b.matchPattern);if(!n)return null;const a=n[0],r=t.match(b.parsePattern);if(!r)return null;let o=b.valueCallback?b.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(a,u){return function(a,s,u){const l=r(),m=u?.locale??l.locale??w,h=i(a,s);if(isNaN(h))throw new RangeError("Invalid time value");const f=Object.assign({},u,{addSuffix:u?.addSuffix,comparison:h});let g,y;h>0?(g=t(s),y=t(a)):(g=t(a),y=t(s));const b=d(y,g),p=(o(y)-o(g))/1e3,M=Math.round((b-p)/60);let v;if(M<2)return u?.includeSeconds?b<5?m.formatDistance("lessThanXSeconds",5,f):b<10?m.formatDistance("lessThanXSeconds",10,f):b<20?m.formatDistance("lessThanXSeconds",20,f):b<40?m.formatDistance("halfAMinute",0,f):b<60?m.formatDistance("lessThanXMinutes",1,f):m.formatDistance("xMinutes",1,f):0===M?m.formatDistance("lessThanXMinutes",1,f):m.formatDistance("xMinutes",M,f);if(M<45)return m.formatDistance("xMinutes",M,f);if(M<90)return m.formatDistance("aboutXHours",1,f);if(M<n){const t=Math.round(M/60);return m.formatDistance("aboutXHours",t,f)}if(M<2520)return m.formatDistance("xDays",1,f);if(M<e){const t=Math.round(M/n);return m.formatDistance("xDays",t,f)}if(M<2*e)return v=Math.round(M/e),m.formatDistance("aboutXMonths",v,f);if(v=c(y,g),v<12){const t=Math.round(M/e);return m.formatDistance("xMonths",t,f)}{const t=v%12,e=Math.trunc(v/12);return t<3?m.formatDistance("aboutXYears",e,f):t<9?m.formatDistance("overXYears",e,f):m.formatDistance("almostXYears",e+1,f)}}(a,s(a),u)}!async function(){const t=await function(t){const e=new URLSearchParams;return e.append("email",t),fetch("https://fwd.innopolis.university/api/hw2?"+e.toString()).then((t=>t.json())).then((t=>parseInt(t)))}("a.alisheva@innopolis.university"),e=await function(t){const e=new URLSearchParams;return t&&e.append("id",t.toString()),fetch("https://fwd.innopolis.university/api/comic?"+e.toString()).then((t=>t.json()))}(t);console.log(e);const n=document.getElementById("comic");n.insertBefore(function(t,e){const n=document.createElement("img");return n.src=t,n.alt=e,n}(e.img,e.alt),n.firstChild);const a=document.getElementById("imgInfo");a.textContent="";const r=document.createElement("label");r.textContent=e.safe_title,r.id="comicTitle",a.appendChild(r);const o=new Date(Date.UTC(e.year,e.month-1,e.day));a.appendChild(function(t){const e=document.createElement("label");return e.textContent=t.toLocaleDateString(void 0,{day:"numeric",month:"numeric",year:"numeric"}),e.id="releaseDate",e}(o));const i=document.createElement("label");i.id="fromNow",i.textContent=`Released ${p(o)} ago`,a.appendChild(i)}();
