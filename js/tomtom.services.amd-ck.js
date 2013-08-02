var JSON;JSON||(JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),define("tomtom/lib/json2",function(){}),define("tomtom/Main",["./lib/json2"],function(){window.tomtom||(window.tomtom={}),window.tomtom.dom={},window.tomtom.layers={},window.tomtom.services={},window.tomtom.controls={},typeof String.prototype.trim!="function"&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!=r?r=0:r!=0&&r!=Infinity&&r!=-Infinity&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,r=this.length;n<r;++n)e.call(t,this[n],n,this)}),Array.prototype.some||(Array.prototype.some=function(e){if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")throw new TypeError;var r=arguments[1];for(var i=0;i<n;i++)if(i in t&&e.call(r,t[i],i,t))return!0;return!1});var e=Object.prototype.toString,t=Array.toString();Array.isArray=Array.isArray||function(n){return typeof n=="object"&&(e.call(n)=="[object Array]"||"constructor"in n&&String(n.constructor)==t)},window.tomtom.setImagePath=function(e){e.lastIndexOf("/")!=e.length-1&&(e+="/"),tomtom.baseImagePath=e},tomtom.setImagePath("./images/"),window.tomtom.API_BASE_URL="https://api.tomtom.com/",window.tomtom.releaseInfo={version:"2.0.0-RC",build:"72"},window.tomtom.isDebugMode=!1,window.tomtom.languages={en_US:{units:{distance:{meter:"m;; m",km:"km;; km",yard:"yd;; yds",mile:"mi;; mi"},time:{day:"day;; days",hour:"hour;; hours",minute:"min;; mins",type:"12"}},errors:{Unknown:"Sorry, an error occurred. Please try again or come back later"},IncidentItem:{from:"From",to:"To",delay:"Delay",length:"Length"},IncidentBalloon:{Cluster:{title:"Incidents in this area: ",listHeader:"{count} most severe incidents",orderedByLength:"(Ordered by length)",orderedByDelay:"(Ordered by delay)"},zoomIn:"Click to zoom in"}}}}),define("tomtom/Utils",["./Main"],function(){tomtom.Utils={hostIndex:0,hosts:[],getServiceUrl:function(e,t,n,r){var i=tomtom.API_BASE_URL;if(t){paramCount=0,e.indexOf("?")==-1&&(e+="?");for(var s in t)paramCount>0&&(e+="&"),e+=s+"="+t[s],paramCount++}return tomtom.proxyUrl&&(i=tomtom.proxyUrl),typeof r!="undefined"&&(r?i=i.replace(/https?:\/\//g,"https://"):i=i.replace(/https?:\/\//g,"http://")),n&&(i="http://"+this.getRandomHost(i)),e.indexOf("https://")==0||e.indexOf("http://")==0?e:i+e},getRandomHost:function(e){e=e.replace(/https?:\/\//g,"");if(typeof tomtom.enableHostCycling=="undefined"||tomtom.enableHostCycling)this.hosts.length==0&&this.initHosts(),e=this.hosts[this.hostIndex],this.hostIndex++,this.hostIndex>3&&(this.hostIndex=0);return e},isArray:function(e){return Array.isArray(e)},zeroPad:function(e,t){e=String(e);var n=[];for(var r=0;r<t;++r)n.push("0");return n.join("").substring(0,t-e.length)+e},setCookie:function(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);var i="; expires="+r.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"},getCookie:function(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null},removeCookie:function(e){this.setCookie(e,"",-1)},formatSeconds:function(e){if(e==0)return{value:0,suffix:"minute"};if(e<=3600)return{value:this.round(e/60,1),suffix:"minute"};if(e>=3600)return{value:this.round(e/3600,1),suffix:"hour"}},metersToMiles:function(t){return t*e/5280},round:function(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)},getUniqueControlId:function(e){var t=e+"_"+n;return n++,t}};var e=3.28084,t=5280,n=0;return tomtom.Utils}),define("tomtom/BaseObject",["./Main","./Utils"],function(e,t){return tomtom.BaseObject=L.Class.extend({initialize:function(){},hitch:function(e){return L.Util.bind(e,this)}}),tomtom.BaseObject}),define("tomtom/Logger",["./Main"],function(){return tomtom.Logger=L.Class.extend({initialize:function(){},info:function(){this._log("info",arguments)},debug:function(){this._log("debug",arguments)},log:function(){this._log("log",arguments)},error:function(){this._log("error",arguments)},warn:function(){this._log("warn",arguments)},_log:function(e,t){if(!tomtom.isDebugMode&&(e=="log"||e=="debug"))return;if(typeof console!="undefined"){var n=console[e];n?n.apply?n.apply(console,t):n(t[0]):n!="log"&&this._log("log",t)}}}),tomtom.Logger}),define("tomtom/services/BaseService",["../BaseObject","../Logger"],function(e,t){return tomtom.services.BaseService=e.extend({initialize:function(n){this.log=new t,e.prototype.initialize.apply(this,[]),n?this.apiKey=n:this.apiKey=tomtom.apiKey,!this.apiKey&&!tomtom.proxyUrl&&this.log.warn('An API Key has not been specified.  TomTom services will not work without an API Key. Please specify an API key either via tomtom.apiKey OR by passing the apiKey to the service\'s constructor: var service = new tomtom.services.GeocodeService("your key here");')}}),tomtom.services.BaseService}),define("tomtom/AjaxUtil",["./Main"],function(){tomtom.AjaxUtil={getJSON:function(e){var t;window.XMLHttpRequest?t=new XMLHttpRequest:t=new ActiveXObject("Microsoft.XMLHTTP"),t.onreadystatechange=function(){t.readyState==4&&t.status==200&&e.callback(JSON.parse(t.responseText))},t.open("GET",e.url,!0),t.send()},getJSONP:function(t){e.get(t.url,t.data,t.callback,t.callbackParam)}};var e=function(){function e(e){var t=document.createElement("script"),n=!1;t.src=e,t.async=!0,t.onload=t.onreadystatechange=function(){!n&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(n=!0,t.onload=t.onreadystatechange=null,t&&t.parentNode&&t.parentNode.removeChild(t))},s||(s=document.getElementsByTagName("head")[0]),s.appendChild(t)}function t(e){return encodeURIComponent(e)}function n(n,r,s,l){o=(n||"").indexOf("?")===-1?"?":"&",r=r||{};for(u in r)r.hasOwnProperty(u)&&(o+=t(u)+"="+t(r[u])+"&");var c="json"+ ++i;return a[c]=function(e){s(e);try{delete a[c]}catch(t){}a[c]=null},e(n+o+(l||f.callbackName||"callback")+"="+c),c}function r(e){f=e}var i=0,s,o,u,a=this,f={};return{get:n,init:r}}();return tomtom.AjaxUtil}),define("tomtom/services/GeocodingService",["./BaseService","../Utils","../AjaxUtil"],function(e,t,n){tomtom.services.GeocodingService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},geocode:function(e,i,s){typeof i=="function"&&(s=i,i={});var o={q:e};this.apiKey&&(o.key=this.apiKey),o=L.Util.extend(o,i),tomtom.proxyUrl?n.getJSON({url:t.getServiceUrl(r,o),callback:s}):n.getJSONP({url:t.getServiceUrl(r+"p",o),callback:s,callbackParam:"jsonp"})},reverseGeocode:function(e,r,s,o){if(isNaN(r)){o=s,s=r;var u=L.latLng(e);e=u.lat,r=u.lng}typeof s=="function"&&(o=s,s={});var a={point:e+","+r,projection:"EPSG4326"};a=L.Util.extend(a,s),this.apiKey&&(a.key=this.apiKey),tomtom.proxyUrl?n.getJSON({url:t.getServiceUrl(i,a),callback:o}):n.getJSONP({url:t.getServiceUrl(i+"p",a),callback:o,callbackParam:"jsonp"})}});var r="lbs/services/geocode/3/json",i="lbs/services/reverseGeocode/3/json";return tomtom.services.GeocodingService}),function(e,t){function n(e,t,n,r){n=n||[],t=t||M;var i,s,o,u,a=t.nodeType;if(!e||typeof e!="string")return n;if(a!==1&&a!==9)return[];o=E(t);if(!o&&!r)if(i=tt.exec(e))if(u=i[1]){if(a===9){s=t.getElementById(u);if(!s||!s.parentNode)return n;if(s.id===u)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(u))&&S(t,s)&&s.id===u)return n.push(s),n}else{if(i[2])return B.apply(n,j.call(t.getElementsByTagName(e),0)),n;if((u=i[3])&&pt&&t.getElementsByClassName)return B.apply(n,j.call(t.getElementsByClassName(u),0)),n}return v(e.replace(G,"$1"),t,n,r,o)}function r(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function i(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function s(e){return I(function(t){return t=+t,I(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function o(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function u(e,t){var r,i,s,o,u,a,f,l=U[A][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=b.preFilter;while(u){if(!r||(i=Y.exec(u)))i&&(u=u.slice(i[0].length)||u),a.push(s=[]);r=!1;if(i=Z.exec(u))s.push(r=new O(i.shift())),u=u.slice(r.length),r.type=i[0].replace(G," ");for(o in b.filter)(i=at[o].exec(u))&&(!f[o]||(i=f[o](i)))&&(s.push(r=new O(i.shift())),u=u.slice(r.length),r.type=o,r.matches=i);if(!r)break}return t?u.length:u?n.error(e):U(e,a).slice(0)}function a(e,t,n){var r=t.dir,i=n&&t.dir==="parentNode",s=P++;return t.first?function(t,n,s){while(t=t[r])if(i||t.nodeType===1)return e(t,n,s)}:function(t,n,o){if(!o){var u,a=D+" "+s+" ",f=a+g;while(t=t[r])if(i||t.nodeType===1){if((u=t[A])===f)return t.sizset;if(typeof u=="string"&&u.indexOf(a)===0){if(t.sizset)return t}else{t[A]=f;if(e(t,n,o))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[r])if(i||t.nodeType===1)if(e(t,n,o))return t}}function f(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function l(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function c(e,t,n,r,i,s){return r&&!r[A]&&(r=c(r)),i&&!i[A]&&(i=c(i,s)),I(function(s,o,u,a){var f,c,h,p=[],v=[],m=o.length,g=s||d(t||"*",u.nodeType?[u]:u,[]),y=e&&(s||!t)?l(g,p,e,u,a):g,b=n?i||(s?e:m||r)?[]:o:y;n&&n(y,b,u,a);if(r){f=l(b,v),r(f,[],u,a),c=f.length;while(c--)if(h=f[c])b[v[c]]=!(y[v[c]]=h)}if(s){if(i||e){if(i){f=[],c=b.length;while(c--)(h=b[c])&&f.push(y[c]=h);i(null,b=[],f,a)}c=b.length;while(c--)(h=b[c])&&(f=i?F.call(s,h):p[c])>-1&&(s[f]=!(o[f]=h))}}else b=l(b===o?b.splice(m,b.length):b),i?i(null,o,b,a):B.apply(o,b)})}function h(e){var t,n,r,i=e.length,s=b.relative[e[0].type],o=s||b.relative[" "],u=s?1:0,l=a(function(e){return e===t},o,!0),p=a(function(e){return F.call(t,e)>-1},o,!0),d=[function(e,n,r){return!s&&(r||n!==C)||((t=n).nodeType?l(e,n,r):p(e,n,r))}];for(;u<i;u++)if(n=b.relative[e[u].type])d=[a(f(d),n)];else{n=b.filter[e[u].type].apply(null,e[u].matches);if(n[A]){r=++u;for(;r<i;r++)if(b.relative[e[r].type])break;return c(u>1&&f(d),u>1&&e.slice(0,u-1).join("").replace(G,"$1"),n,u<r&&h(e.slice(u,r)),r<i&&h(e=e.slice(r)),r<i&&e.join(""))}d.push(n)}return f(d)}function p(e,t){var r=t.length>0,i=e.length>0,s=function(o,u,a,f,c){var h,p,d,v=[],m=0,y="0",w=o&&[],E=c!=null,S=C,x=o||i&&b.find.TAG("*",c&&u.parentNode||u),T=D+=S==null?1:Math.E;E&&(C=u!==M&&u,g=s.el);for(;(h=x[y])!=null;y++){if(i&&h){for(p=0;d=e[p];p++)if(d(h,u,a)){f.push(h);break}E&&(D=T,g=++s.el)}r&&((h=!d&&h)&&m--,o&&w.push(h))}m+=y;if(r&&y!==m){for(p=0;d=t[p];p++)d(w,v,u,a);if(o){if(m>0)while(y--)!w[y]&&!v[y]&&(v[y]=H.call(f));v=l(v)}B.apply(f,v),E&&!o&&v.length>0&&m+t.length>1&&n.uniqueSort(f)}return E&&(D=T,C=S),w};return s.el=0,r?I(s):s}function d(e,t,r){var i=0,s=t.length;for(;i<s;i++)n(e,t[i],r);return r}function v(e,t,n,r,i){var s,o,a,f,l,c=u(e),h=c.length;if(!r&&c.length===1){o=c[0]=c[0].slice(0);if(o.length>2&&(a=o[0]).type==="ID"&&t.nodeType===9&&!i&&b.relative[o[1].type]){t=b.find.ID(a.matches[0].replace(ut,""),t,i)[0];if(!t)return n;e=e.slice(o.shift().length)}for(s=at.POS.test(e)?-1:o.length-1;s>=0;s--){a=o[s];if(b.relative[f=a.type])break;if(l=b.find[f])if(r=l(a.matches[0].replace(ut,""),rt.test(o[0].type)&&t.parentNode||t,i)){o.splice(s,1),e=r.length&&o.join("");if(!e)return B.apply(n,j.call(r,0)),n;break}}}return x(e,c)(r,t,i,n,rt.test(e)),n}function m(){}var g,y,b,w,E,S,x,T,N,C,k=!0,L="undefined",A=("sizcache"+Math.random()).replace(".",""),O=String,M=e.document,_=M.documentElement,D=0,P=0,H=[].pop,B=[].push,j=[].slice,F=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},I=function(e,t){return e[A]=t==null||t,e},q=function(){var e={},t=[];return I(function(n,r){return t.push(n)>b.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},R=q(),U=q(),z=q(),W="[\\x20\\t\\r\\n\\f]",X="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",V=X.replace("w","w#"),$="([*^$|!~]?=)",J="\\["+W+"*("+X+")"+W+"*(?:"+$+W+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+V+")|)|)"+W+"*\\]",K=":("+X+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+J+")|[^:]|\\\\.)*|.*))\\)|)",Q=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)",G=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g"),Y=new RegExp("^"+W+"*,"+W+"*"),Z=new RegExp("^"+W+"*([\\x20\\t\\r\\n\\f>+~])"+W+"*"),et=new RegExp(K),tt=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,nt=/^:not/,rt=/[\x20\t\r\n\f]*[+~]/,it=/:not\($/,st=/h\d/i,ot=/input|select|textarea|button/i,ut=/\\(?!\\)/g,at={ID:new RegExp("^#("+X+")"),CLASS:new RegExp("^\\.("+X+")"),NAME:new RegExp("^\\[name=['\"]?("+X+")['\"]?\\]"),TAG:new RegExp("^("+X.replace("w","w*")+")"),ATTR:new RegExp("^"+J),PSEUDO:new RegExp("^"+K),POS:new RegExp(Q,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),needsContext:new RegExp("^"+W+"*[>+~]|"+Q,"i")},ft=function(e){var t=M.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},lt=ft(function(e){return e.appendChild(M.createComment("")),!e.getElementsByTagName("*").length}),ct=ft(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==L&&e.firstChild.getAttribute("href")==="#"}),ht=ft(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),pt=ft(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),dt=ft(function(e){e.id=A+0,e.innerHTML="<a name='"+A+"'></a><div name='"+A+"'></div>",_.insertBefore(e,_.firstChild);var t=M.getElementsByName&&M.getElementsByName(A).length===2+M.getElementsByName(A+0).length;return y=!M.getElementById(A),_.removeChild(e),t});try{j.call(_.childNodes,0)[0].nodeType}catch(vt){j=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){return n(t,null,null,[e]).length>0},w=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=w(t);return n},E=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},S=n.contains=_.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:_.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},n.attr=function(e,t){var n,r=E(e);return r||(t=t.toLowerCase()),(n=b.attrHandle[t])?n(e):r||ht?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},b=n.selectors={cacheLength:50,createPseudo:I,match:at,attrHandle:ct?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:y?function(e,t,n){if(typeof t.getElementById!==L&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==L&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==L&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:lt?function(e,t){if(typeof t.getElementsByTagName!==L)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:dt&&function(e,t){if(typeof t.getElementsByName!==L)return t.getElementsByName(name)},CLASS:pt&&function(e,t,n){if(typeof t.getElementsByClassName!==L&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ut,""),e[3]=(e[4]||e[5]||"").replace(ut,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||n.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&n.error(e[0]),e},PSEUDO:function(e){var t,n;if(at.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])et.test(t)&&(n=u(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:y?function(e){return e=e.replace(ut,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(ut,""),function(t){var n=typeof t.getAttributeNode!==L&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace(ut,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=R[A][e+" "];return t||(t=new RegExp("(^|"+W+")"+e+"("+W+"|$)"))&&R(e,function(e){return t.test(e.className||typeof e.getAttribute!==L&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(i,s){var o=n.attr(i,e);return o==null?t==="!=":t?(o+="",t==="="?o===r:t==="!="?o!==r:t==="^="?r&&o.indexOf(r)===0:t==="*="?r&&o.indexOf(r)>-1:t==="$="?r&&o.substr(o.length-r.length)===r:t==="~="?(" "+o+" ").indexOf(r)>-1:t==="|="?o===r||o.substr(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var r,i=b.pseudos[e]||b.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return i[A]?i(t):i.length>1?(r=[e,e,"",t],b.setFilters.hasOwnProperty(e.toLowerCase())?I(function(e,n){var r,s=i(e,t),o=s.length;while(o--)r=F.call(e,s[o]),e[r]=!(n[r]=s[o])}):function(e){return i(e,0,r)}):i}},pseudos:{not:I(function(e){var t=[],n=[],r=x(e.replace(G,"$1"));return r[A]?I(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:I(function(e){return function(t){return n(e,t).length>0}}),contains:I(function(e){return function(t){return(t.textContent||t.innerText||w(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!b.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return st.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:r("radio"),checkbox:r("checkbox"),file:r("file"),password:r("password"),image:r("image"),submit:i("submit"),reset:i("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return ot.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:s(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T=_.compareDocumentPosition?function(e,t){return e===t?(N=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return N=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],u=e.parentNode,a=t.parentNode,f=u;if(u===a)return o(e,t);if(!u)return-1;if(!a)return 1;while(f)i.unshift(f),f=f.parentNode;f=a;while(f)s.unshift(f),f=f.parentNode;n=i.length,r=s.length;for(var l=0;l<n&&l<r;l++)if(i[l]!==s[l])return o(i[l],s[l]);return l===n?o(e,s[l],-1):o(i[l],t,1)},[0,0].sort(T),k=!N,n.uniqueSort=function(e){var t,n=[],r=1,i=0;N=k,e.sort(T);if(N){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},x=n.compile=function(e,t){var n,r=[],i=[],s=z[A][e+" "];if(!s){t||(t=u(e)),n=t.length;while(n--)s=h(t[n]),s[A]?r.push(s):i.push(s);s=z(e,p(i,r))}return s},M.querySelectorAll&&function(){var e,t=v,r=/'|\\/g,i=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,s=[":focus"],o=[":active"],a=_.matchesSelector||_.mozMatchesSelector||_.webkitMatchesSelector||_.oMatchesSelector||_.msMatchesSelector;ft(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||s.push("\\["+W+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||s.push(":checked")}),ft(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&s.push("[*^$]="+W+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||s.push(":enabled",":disabled")}),s=new RegExp(s.join("|")),v=function(e,n,i,o,a){if(!o&&!a&&!s.test(e)){var f,l,c=!0,h=A,p=n,d=n.nodeType===9&&e;if(n.nodeType===1&&n.nodeName.toLowerCase()!=="object"){f=u(e),(c=n.getAttribute("id"))?h=c.replace(r,"\\$&"):n.setAttribute("id",h),h="[id='"+h+"'] ",l=f.length;while(l--)f[l]=h+f[l].join("");p=rt.test(e)&&n.parentNode||n,d=f.join(",")}if(d)try{return B.apply(i,j.call(p.querySelectorAll(d),0)),i}catch(v){}finally{c||n.removeAttribute("id")}}return t(e,n,i,o,a)},a&&(ft(function(t){e=a.call(t,"div");try{a.call(t,"[test!='']:sizzle"),o.push("!=",K)}catch(n){}}),o=new RegExp(o.join("|")),n.matchesSelector=function(t,r){r=r.replace(i,"='$1']");if(!E(t)&&!o.test(r)&&!s.test(r))try{var u=a.call(t,r);if(u||e||t.document&&t.document.nodeType!==11)return u}catch(f){}return n(r,null,null,[t]).length>0})}(),b.pseudos.nth=b.pseudos.eq,b.filters=m.prototype=b.pseudos,b.setFilters=new m,typeof define=="function"&&define.amd?define("sizzle",[],function(){return n}):e.Sizzle=n}(window);var L={};L.Util={extend:function(e){var t=Array.prototype.slice.call(arguments,1);for(var n=0,r=t.length,i;n<r;n++){i=t[n]||{};for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e},bind:function(e,t){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return e.apply(t,n||arguments)}},stamp:function(){var e=0,t="_leaflet_id";return function(n){return n[t]=n[t]||++e,n[t]}}(),limitExecByInterval:function(e,t,n){var r,i;return function s(){var o=arguments;if(r){i=!0;return}r=!0,setTimeout(function(){r=!1,i&&(s.apply(n,o),i=!1)},t),e.apply(n,o)}},falseFn:function(){return!1},formatNum:function(e,t){var n=Math.pow(10,t||5);return Math.round(e*n)/n},splitWords:function(e){return e.replace(/^\s+|\s+$/g,"").split(/\s+/)},setOptions:function(e,t){return e.options=L.Util.extend({},e.options,t),e.options},getParamString:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+e[n]);return"?"+t.join("&")},template:function(e,t){return e.replace(/\{ *([\w_]+) *\}/g,function(e,n){var r=t[n];if(!t.hasOwnProperty(n))throw new Error("No value provided for variable "+e);return r})},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var t,n,r=["webkit","moz","o","ms"];for(t=0;t<r.length&&!n;t++)n=window[r[t]+e];return n}function t(e){return window.setTimeout(e,1e3/60)}var n=window.requestAnimationFrame||e("RequestAnimationFrame")||t,r=window.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){window.clearTimeout(e)};L.Util.requestAnimFrame=function(e,r,i,s){e=L.Util.bind(e,r);if(!i||n!==t)return n.call(window,e,s);e()},L.Util.cancelAnimFrame=function(e){e&&r.call(window,e)}}(),L.Class=function(){},L.Class.extend=function(e){var t=function(){this.initialize&&this.initialize.apply(this,arguments)},n=function(){};n.prototype=this.prototype;var r=new n;r.constructor=t,t.prototype=r;for(var i in this)this.hasOwnProperty(i)&&i!=="prototype"&&(t[i]=this[i]);return e.statics&&(L.Util.extend(t,e.statics),delete e.statics),e.includes&&(L.Util.extend.apply(null,[r].concat(e.includes)),delete e.includes),e.options&&r.options&&(e.options=L.Util.extend({},r.options,e.options)),L.Util.extend(r,e),t},L.Class.include=function(e){L.Util.extend(this.prototype,e)},L.Class.mergeOptions=function(e){L.Util.extend(this.prototype.options,e)},L.LatLng=function(e,t,n){var r=parseFloat(e),i=parseFloat(t);if(isNaN(r)||isNaN(i))throw new Error("Invalid LatLng object: ("+e+", "+t+")");n!==!0&&(r=Math.max(Math.min(r,90),-90),i=(i+180)%360+(i<-180||i===180?180:-180)),this.lat=r,this.lng=i},L.Util.extend(L.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),L.LatLng.prototype={equals:function(e){if(!e)return!1;e=L.latLng(e);var t=Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng));return t<=L.LatLng.MAX_MARGIN},toString:function(){return"LatLng("+L.Util.formatNum(this.lat)+", "+L.Util.formatNum(this.lng)+")"},distanceTo:function(e){e=L.latLng(e);var t=6378137,n=L.LatLng.DEG_TO_RAD,r=(e.lat-this.lat)*n,i=(e.lng-this.lng)*n,s=this.lat*n,o=e.lat*n,u=Math.sin(r/2),a=Math.sin(i/2),f=u*u+a*a*Math.cos(s)*Math.cos(o);return t*2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f))}},L.latLng=function(e,t,n){return e instanceof L.LatLng?e:e instanceof Array?new L.LatLng(e[0],e[1]):isNaN(e)?e:new L.LatLng(e,t,n)},define("tomtom/lib/leaflet-base",function(){}),define("tomtom/services/RoutingService",["./BaseService","../AjaxUtil","../Utils"],function(e,t,n){tomtom.services.RoutingService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},getRoute:function(e,s,o){typeof s=="function"&&(o=s,s={}),this.apiKey&&(s.key=this.apiKey);var u=L.Util.extend({},s);u.routeType&&delete u.routeType,s.routeType||(s.routeType=i),u.language||(u.language=tomtom.LocaleManager.getPrimaryLanguage());var a=[];for(var f=0;f<e.length;f++){var l=L.latLng(e[f]);a.push(l.lat+","+l.lng)}var c={points:a.join(":"),routeType:s.routeType};tomtom.proxyUrl?t.getJSON({url:n.getServiceUrl(L.Util.template(r,c),u),callback:o}):t.getJSONP({url:n.getServiceUrl(L.Util.template(r+"p",c),u),callback:o,callbackParam:"jsonp"})}});var r="lbs/services/route/3/{points}/{routeType}/json",i="Quickest";return tomtom.services.RoutingService}),define("tomtom/i18n",["./Utils","./Main"],function(e){function t(e,t){if(e&&e.indexOf(".")>-1){var n=e.split("."),r=n.length-1;for(var i=0;i<r&&t;i++)t=t[n[i]];return e=n[i],t&&t[e]||undefined}return t[e]}var n=/{([\w_]+)}/g,r=/^([a-z]{2})([-_])([a-z]{2})/i,i=/;; ?/,s=null,o={},u=null,a="en_US",f={_rules:[[1,function(e){return 0}],[2,function(e){return e!=1?1:0}],[2,function(e){return e>1?1:0}],[3,function(e){return e%10==1&&e%100!=11?1:e!=0?2:0}],[4,function(e){return e==1||e==11?0:e==2||e==12?1:e>0&&e<20?2:3}],[3,function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2}],[3,function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?2:1}],[3,function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2}],[3,function(e){return e==1?0:e>=2&&e<=4?1:2}],[3,function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2}],[4,function(e){return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3}],[5,function(e){return e==1?0:e==2?1:e>=3&&e<=6?2:e>=7&&e<=10?3:4}],[6,function(e){return e==0?5:e==1?0:e==2?1:e%100>=3&&e%100<=10?2:e%100>=11&&e%100<=99?3:4}],[4,function(e){return e==1?0:e==0||e%100>0&&e%100<=10?1:e%100>10&&e%100<20?2:3}],[3,function(e){return e%10==1?0:e%10==2?1:2}],[2,function(e){return e%10==1&&e%100!=11?0:1}]],_languages:{"hu-HU":0,"id-ID":0,"ms-MY":0,"th-TH":0,"tr-TR":0,"zh-CN":0,"zh-TW":0,de:1,en:1,es:1,it:1,nl:1,pt:1,"af-ZA":1,"ca-ES":1,"da-DK":1,"de-DE":1,"en-GB":1,"en-US":1,"es-ES":1,"es-MX":1,"it-IT":1,"nl-BE":1,"nl-NL":1,"no-NO":1,"pt-BR":1,"pt-PT":1,"sv-SE":1,"et-EE":1,"fi-FI":1,"bg-BG":1,"el-GR":1,fr:2,"fr-CA":2,"fr-FR":2,"lv-LV":3,"lt-LT":6,"hr-HR":7,"ru-RU":7,"cs-CZ":8,"sk-SK":8,"pl-PL":9,"sl-SI":10},getPluralForm:function(e){var t=f._rules,n;if(isNaN(e)&&"string"==typeof e)if(e in f._languages)n=f._languages[e];else{var s=e.match(r);n=s&&f._languages[s[1]]}else n=Number(e);if(n==null||isNaN(n)||n<0||n>t.length)n=0;var o=t[n][1];return function(e,t){if("string"!=typeof e)return;t=isNaN(t)?1:t<0?0:t;var n=o(t),r=e?e.split(i):[""],s=n<r.length?r[n]:r[r.length-1];return s}}},l={_locale:"",getLocale:function(){return this._locale},setLocale:function(e){this._locale=e,u=f.getPluralForm(this._locale),s=tomtom.languages[this._locale]},getCountryCode:function(){var e=this._locale.match(r);return e&&e[3]||null},getPrimaryLanguage:function(
){return this._locale.substr(0,2)},hasLocalizedStrings:function(){return"object"==typeof s&&s!=null},setLocaleRule:function(t,n,r){typeof r=="function"&&(e.isArray(t)||(t=[t]),t.forEach(function(e){o[e+"_"+n]=r},this))},getLocaleRule:function(e,t){typeof t=="undefined"&&(t=e,e=this.getLocale());var n=o[e+"_"+t];return n==null&&(n=o["*_"+t]),n}},c=L.Class.extend({initialize:function h(e,n){var r={},i,o;n&&(o=n._branch,this._pathKey=n._pathKey?n._pathKey+"."+e:e),o=o||s||h._branch||r,i=o==r?r:t(e,o),this._branch="object"==typeof i?i:null}});c._branch=null,c._pathKey="",c._pluralFormRule=null,c.getBranch=function(e){return new c(e,this)},c.getString=function(e,r,i){var o=this._branch||s||{},a=t(e,o),f=(this._pathKey?this._pathKey+".":"")+e,l=tomtom.LocaleManager.getLocaleRule(f);if(l)return l.apply(this.getBranch(f),[r,i]);var c=this._pluralFormRule||u;return c&&(a=c(a,i)),"string"==typeof a?(r&&(a=a.replace(n,function(e,t){return t in r?r[t]:"#"+t+"#"})),a):"#"+e+"#"},c.prototype._pathKey=c._pathKey,c.prototype._branch=c._branch,c.prototype.getBranch=c.getBranch,c.prototype.getString=c.getString,l.setLocale(a),l.setLocaleRule("*","units.distance",function(e,t){var n=t/1e3;return t<500?t+" "+this.getString("meter",null,t):n.toFixed(1)+" "+this.getString("km",null,n)}),l.setLocaleRule(["en_GB","en_US"],"units.distance",function(e,t){var n=Math.round(t*.10936133)*10,r=n/1760;return r<.5?Math.round(n)+" "+this.getString("yard",null,n):r.toFixed(1)+" "+this.getString("mile",null,r)}),l.setLocaleRule("*","common.TomTom.HDTraffic",function(){return"HD Traffic"}),tomtom.LocaleManager=l,tomtom.StringBundle=c,tomtom.PluralForm=f}),define("tomtom/services/TrafficService",["./BaseService","../AjaxUtil","../Utils","../i18n"],function(e,t,n){tomtom.services.TrafficService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},getTrafficModel:function(e,i,s,o){typeof s=="function"&&(o=s,s={}),s.projection||(s.projection="EPSG4326");var u=L.Util.extend({},s);s.trafficModelID||(s.trafficModelID=-1),delete u.trafficModelID,u.language||(u.language=tomtom.LocaleManager.getPrimaryLanguage()),s.zoom=i,s.minY=e.top,s.minX=e.left,s.maxY=e.bottom,s.maxX=e.right,this.apiKey&&(u.key=this.apiKey),u.expandCluster=!0,tomtom.proxyUrl?t.getJSON({url:n.getServiceUrl(L.Util.template(r,s),u),callback:o}):t.getJSONP({url:n.getServiceUrl(L.Util.template(r+"p",s),u),callback:o,callbackParam:"jsonp"})}});var r="lbs/services/trafficIcons/3/s2/{minY},{minX},{maxY},{maxX}/{zoom}/{trafficModelID}/json";return tomtom.services.TrafficService}),define("tomtom/services/GeocodingServiceV4",["./BaseService","../Utils","../AjaxUtil"],function(e,t,n){tomtom.services.GeocodingServiceV4=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},geocode:function(e,i,s){typeof i=="function"&&(s=i,i={});var o={format:tomtom.proxyUrl?"json":"jsonp"};typeof e=="string"?o.query=e:o=L.Util.extend(o,e),this.apiKey&&(o.key=this.apiKey),o=L.Util.extend(o,i),tomtom.proxyUrl?n.getJSON({url:t.getServiceUrl(r,o),callback:s}):n.getJSONP({url:t.getServiceUrl(r,o),callback:s,callbackParam:"callback"})}});var r="lbs/services/geocode/4/geocode",i="lbs/services/reverseGeocode/3/json";return tomtom.services.GeocodingServiceV4}),define("tomtom/services/HDTRegionsService",["./BaseService","../AjaxUtil","../Utils"],function(e,t,n){tomtom.services.HDTRegionsService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},getRegions:function(e,i){typeof e=="function"&&(i=e,e={}),this.apiKey&&(e.key=this.apiKey),tomtom.proxyUrl?t.getJSON({url:n.getServiceUrl(r,e),callback:i}):t.getJSONP({url:n.getServiceUrl(r+"p",e),callback:i,callbackParam:"jsonp"})}});var r="lbs/services/hdtRegions/3/json";return tomtom.services.HDTRegionsService});