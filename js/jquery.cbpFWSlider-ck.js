/**
 * jquery.cbpFWSlider.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */(function(e,t,n){"use strict";var r=t.Modernizr,i=t.instance_ref;e.CBPFWSlider=function(t,n){this.$el=e(n);this._init(t)};e.CBPFWSlider.defaults={speed:500,easing:"ease"};e.CBPFWSlider.prototype={_init:function(t){this.options=e.extend(!0,{},e.CBPFWSlider.defaults,t);this._config();this._initEvents()},_config:function(){this.$list=this.$el.children("ul");this.$items=this.$list.children("li");this.itemsCount=this.$items.length;this.support=r.csstransitions&&r.csstransforms;this.support3d=r.csstransforms3d;var t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},n={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",transform:"transform"};if(this.support){this.transEndEventName=t[r.prefixed("transition")]+".cbpFWSlider";this.transformName=n[r.prefixed("transform")]}this.current=0;this.old=0;this.isAnimating=!1;this.$list.css("width",100*this.itemsCount+"%");this.support&&this.$list.css("transition",this.transformName+" "+this.options.speed+"ms "+this.options.easing);this.$items.css("width",100/this.itemsCount+"%");if(this.itemsCount>1){this.$navPrev=e('<span class="cbp-fwprev">&lt;</span>').hide();this.$navNext=e('<span class="cbp-fwnext">&gt;</span>');e("<nav/>").append(this.$navPrev,this.$navNext).appendTo(this.$el);var i="";for(var s=0;s<this.itemsCount;++s){var o=s===this.current?'<span class="cbp-fwcurrent"></span>':"<span></span>";i+=o}var u=e('<div class="cbp-fwdots"/>').append(i).appendTo(this.$el);this.$navDots=u.children("span")}},_initEvents:function(){var t=this;if(this.itemsCount>1){this.$navPrev.on("click.cbpFWSlider",e.proxy(this._navigate,this,"previous"));this.$navNext.on("click.cbpFWSlider",e.proxy(this._navigate,this,"next"));this.$navDots.on("click.cbpFWSlider",function(){t._jump(e(this).index())})}},_navigate:function(t){if(this.isAnimating)return!1;this.isAnimating=!0;this.old=this.current;t==="next"&&this.current<this.itemsCount-1?++this.current:t==="previous"&&this.current>0&&--this.current;console.log(this.current);this.current==0?e("body").css("background","#FF6A00"):this.current==1?e("body").css("background","#595C5A"):this.current==2&&e("body").css("background","#000000");this._slide()},_slide:function(){this._toggleNavControls();var t=-1*this.current*100/this.itemsCount;this.support?this.$list.css("transform",this.support3d?"translate3d("+t+"%,0,0)":"translate("+t+"%)"):this.$list.css("margin-left",-1*this.current*100+"%");var n=e.proxy(function(){this.isAnimating=!1},this);this.support?this.$list.on(this.transEndEventName,e.proxy(n,this)):n.call()},_toggleNavControls:function(){switch(this.current){case 0:this.$navNext.show();this.$navPrev.hide();break;case this.itemsCount-1:this.$navNext.hide();this.$navPrev.show();break;default:this.$navNext.show();this.$navPrev.show()}this.$navDots.eq(this.old).removeClass("cbp-fwcurrent").end().eq(this.current).addClass("cbp-fwcurrent")},_jump:function(t){if(t===this.current||this.isAnimating)return!1;this.isAnimating=!0;this.old=this.current;this.current=t;this.current==0?e("body").css("background","#FF6A00"):this.current==1?e("body").css("background","#595C5A"):this.current==2&&e("body").css("background","#000000");this._slide()},destroy:function(){if(this.itemsCount>1){this.$navPrev.parent().remove();this.$navDots.parent().remove()}this.$list.css("width","auto");this.support&&this.$list.css("transition","none");this.$items.css("width","auto")}};var s=function(e){t.console&&t.console.error(e)};e.fn.cbpFWSlider=function(t){if(typeof t=="string"){var n=Array.prototype.slice.call(arguments,1);this.each(function(){var r=e.data(this,"cbpFWSlider");if(!r){s("cannot call methods on cbpFWSlider prior to initialization; attempted to call method '"+t+"'");return}if(!e.isFunction(r[t])||t.charAt(0)==="_"){s("no such method '"+t+"' for cbpFWSlider instance");return}r[t].apply(r,n)});e.instance_ref=instance}else{this.each(function(){var n=e.data(this,"cbpFWSlider");n?n._init():n=e.data(this,"cbpFWSlider",new e.CBPFWSlider(t,this))});e.instance_ref=instance}}})(jQuery,window);