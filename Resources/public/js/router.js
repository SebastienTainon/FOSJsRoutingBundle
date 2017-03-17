/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is (C) FriendsOfSymfony and subject to the MIT license.
 */
(function() {var f,k=this;function m(a,c){var b=a.split("."),d=k;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)b.length||void 0===c?d=d[e]?d[e]:d[e]={}:d[e]=c};var n=Array.prototype,p=n.forEach?function(a,c,b){n.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e="string"==typeof a?a.split(""):a,g=0;g<d;g++)g in e&&c.call(b,e[g],g,a)};function q(a){var c=0,b;for(b in a)c++;return c}function s(a){var c={},b;for(b in a)c[b]=a[b];return c};function t(a,c){this.c={};this.b=[];var b=arguments.length;if(1<b){if(b%2)throw Error("Uneven number of arguments");for(var d=0;d<b;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof t)for(v(a),d=a.b.concat(),v(a),e=[],b=0;b<a.b.length;b++)e.push(a.c[a.b[b]]);else{var b=[],g=0;for(d in a)b[g++]=d;d=b;b=[];g=0;for(e in a)b[g++]=a[e];e=b}for(b=0;b<d.length;b++)this.set(d[b],e[b])}}t.prototype.f=0;t.prototype.p=0;
function v(a){if(a.f!=a.b.length){for(var c=0,b=0;c<a.b.length;){var d=a.b[c];w(a.c,d)&&(a.b[b++]=d);c++}a.b.length=b}if(a.f!=a.b.length){for(var e={},b=c=0;c<a.b.length;)d=a.b[c],w(e,d)||(a.b[b++]=d,e[d]=1),c++;a.b.length=b}}t.prototype.get=function(a,c){return w(this.c,a)?this.c[a]:c};t.prototype.set=function(a,c){w(this.c,a)||(this.f++,this.b.push(a),this.p++);this.c[a]=c};function w(a,c){return Object.prototype.hasOwnProperty.call(a,c)};var x,y,z,B;function C(){return k.navigator?k.navigator.userAgent:null}B=z=y=x=!1;var D;if(D=C()){var E=k.navigator;x=0==D.lastIndexOf("Opera",0);y=!x&&(-1!=D.indexOf("MSIE")||-1!=D.indexOf("Trident"));z=!x&&-1!=D.indexOf("WebKit");B=!x&&!z&&!y&&"Gecko"==E.product}var F=y,H=B,I=z;var J;if(x&&k.opera){var K=k.opera.version;"function"==typeof K&&K()}else H?J=/rv\:([^\);]+)(\)|;)/:F?J=/\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/:I&&(J=/WebKit\/(\S+)/),J&&J.exec(C());function L(a,c){this.a=a||{e:"",prefix:"",host:"",scheme:""};this.h(c||{})}L.g=function(){return L.j?L.j:L.j=new L};f=L.prototype;f.h=function(a){this.d=new t(a)};f.o=function(){return this.d};f.k=function(a){this.a.e=a};f.n=function(){return this.a.e};f.l=function(a){this.a.prefix=a};
function M(a,c,b,d){var e,g=RegExp(/\[\]$/);if(b instanceof Array)p(b,function(b,e){g.test(c)?d(c,b):M(a,c+"["+("object"===typeof b?e:"")+"]",b,d)});else if("object"===typeof b)for(e in b)M(a,c+"["+e+"]",b[e],d);else d(c,b)}
f.i=function(a){var c=this.a.prefix,b="";-1!=this.a.prefix.indexOf("__")&&(b=this.a.prefix.substring(this.a.prefix.indexOf("__")),c=this.a.prefix.substring(0,this.a.prefix.indexOf("__")));for(var c=c.split(/[_-]+/),d=null,e=c.length;0<=e;e--){var g=c.slice(0,e).join("_")+b+a;if(w(this.d.c,g)){d=g;break}}null===d&&w(this.d.c,a)&&(d=a);if(null===d)throw Error('The route "'+a+'" does not exist.');return this.d.get(d)};
f.m=function(a,c,b){var d=this.i(a),e=c||{},g=s(e),h="",u=!0,l="";p(d.tokens,function(b){if("text"===b[0])h=b[1]+h,u=!1;else if("variable"===b[0]){var c=b[3]in d.defaults;if(!1===u||!c||b[3]in e&&e[b[3]]!=d.defaults[b[3]]){if(b[3]in e){var c=e[b[3]],r=b[3];r in g&&delete g[r]}else if(c)c=d.defaults[b[3]];else{if(u)return;throw Error('The route "'+a+'" requires the parameter "'+b[3]+'".');}if(!0!==c&&!1!==c&&""!==c||!u)r=encodeURIComponent(c).replace(/%2F/g,"/"),"null"===r&&null===c&&(r=""),h=b[1]+
r+h;u=!1}else c&&(b=b[3],b in g&&delete g[b])}else throw Error('The token type "'+b[0]+'" is not supported.');});""===h&&(h="/");p(d.hosttokens,function(a){var b;if("text"===a[0])l=a[1]+l;else if("variable"===a[0]){if(a[3]in e){b=e[a[3]];var c=a[3];c in g&&delete g[c]}else a[3]in d.defaults&&(b=d.defaults[a[3]]);l=a[1]+b+l}});h=this.a.e+h;"_scheme"in d.requirements&&this.a.scheme!=d.requirements._scheme?h=d.requirements._scheme+"://"+(l||this.a.host)+h:l&&this.a.host!==l?h=this.a.scheme+"://"+l+h:
!0===b&&(h=this.a.scheme+"://"+this.a.host+h);if(0<q(g)){var A,G=[];c=function(a,b){b="function"===typeof b?b():b;G.push(encodeURIComponent(a)+"\x3d"+encodeURIComponent(null===b?"":b))};for(A in g)M(this,A,g[A],c);h=h+"?"+G.join("\x26").replace(/%20/g,"+")}return h};m("fos.Router",L);m("fos.Router.setData",function(a){var c=L.g();c.k(a.base_url);c.h(a.routes);"prefix"in a&&c.l(a.prefix);c.a.host=a.host;c.a.scheme=a.scheme});L.getInstance=L.g;L.prototype.setRoutes=L.prototype.h;L.prototype.getRoutes=L.prototype.o;L.prototype.setBaseUrl=L.prototype.k;L.prototype.getBaseUrl=L.prototype.n;L.prototype.generate=L.prototype.m;L.prototype.setPrefix=L.prototype.l;L.prototype.getRoute=L.prototype.i;window.Routing=L.g();})();