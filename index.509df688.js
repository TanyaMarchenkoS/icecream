!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(1-Math.pow(2,-10*a/r))+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==n.decimalPoint&&(t=t.replace(".",n.decimalPoint)),n.thousandSeparator)for(;r.test(t);)t=t.replace(r,"$1"+n.thousandSeparator+"$2");return t}var n=t.extend({from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},a),r=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each((function(){var a,r=t(this),o=n.from;if(r.attr("data-from")&&(o=parseFloat(r.attr("data-from"))),r.attr("data-to"))a=parseFloat(r.attr("data-to"));else if(null!==n.to)a=n.to;else{var i=t.inArray(n.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+n.thousandSeparator:n.thousandSeparator,l=new RegExp(i,"g");a=parseFloat(r.text().replace(l,""))}var c,s=n.duration;if(n.leeway&&(s+=Math.round(n.duration*(2*Math.random()-1)*n.leeway/100)),r.attr("data-dp"))c=parseInt(r.attr("data-dp"),10);else if(null!==n.decimalPlaces)c=n.decimalPlaces;else{var d=r.text().indexOf(n.decimalPoint);c=d>-1?r.text().length-(d+1):0}r.css("counter",o),n.fade&&r.css("opacity",0),r.animate({counter:a,opacity:1},{easing:n.easing,duration:s,step:function(t){r.html(e(t*a,c))},complete:function(){r.css("counter",null),r.html(e(a,c)),n.complete&&n.complete(r)}})}))}}(jQuery);
//# sourceMappingURL=index.509df688.js.map
