/*!CK:3025819086!*//*1432045202,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["HieZw"]); }

__d("PerfXClientMetricsConfig",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={LOGGER_CONFIG:"PerfXClientMetricsLoggerConfig"};},null);
__d("PixelRatioConst",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={cookieName:"dpr"};},null);
__d("ScriptPathLogger",["Banzai","ScriptPath","isInIframe"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='script_path_change',k={scriptPath:null,categoryToken:null,extraInfoFromServer:{}},l=false;function m(s,t,u){if(!l||i())return;var v=g.isEnabled('vital_navigations')?g.VITAL:g.BASIC,w={source_path:s.scriptPath,source_token:s.categoryToken,dest_path:t.scriptPath,dest_token:t.categoryToken,impression_id:t.extraInfoFromServer.imp_id,cause:u};if(s.scriptPath===null)w.referrer=document.referrer;var x=h.getClickPointInfo();if(x)w.click_point_info=x;if(s.extraInfoFromServer.entity_id)w.source_owning_entity_id=s.extraInfoFromServer.entity_id;if(t.extraInfoFromServer.entity_id)w.dest_owning_entity_id=t.extraInfoFromServer.entity_id;if(s.topViewEndpoint)w.source_endpoint=s.topViewEndpoint;if(t.topViewEndpoint)w.dest_endpoint=t.topViewEndpoint;if(t.extraInfoFromServer.search_sid)w.dest_search_sid=t.extraInfoFromServer.search_sid;if(s.extraInfoFromServer.search_sid)w.source_search_sid=s.extraInfoFromServer.search_sid;g.post(j,w,v);h.setClickPointInfo(null);}function n(){m(k,h.getPageInfo(),h.CAUSE.PAGE_LOAD);}function o(s,t){m(s,t,h.CAUSE.TRANSITION);}function p(){m(h.getPageInfo(),k,h.CAUSE.PAGE_UNLOAD);}var q=h.subscribe(function(s){if(l){var t=s.source,u=s.dest,v=s.cause;if(v){m(t||k,u||k,v);}else if(t){o(t,u);}else n();}});g.subscribe(g.SHUTDOWN,p);var r={startLogging:function(){l=true;if(h.getPageInfo())n();},stopLogging:function(){l=false;h.unsubscribe(q);}};r.BANZAI_LOGGING_ROUTE=j;e.exports=r;},null);
__d("sourceMetaToString",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){var j;if(h.name){j=h.name;if(h.module)j=h.module+'.'+j;if(i&&h.line){j+=':'+h.line;if(h.column)j+=':'+h.column;}}return j;}e.exports=g;},null);
__d("PerfXFlusher",["BanzaiLogger","PerfXClientMetricsConfig","invariant"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=h.LOGGER_CONFIG,k=['perfx_page','perfx_page_type','tti','e2e'];function l(n){k.forEach(function(o){i(o in n);});}var m={flush:function(n,o){l(o);o.lid=n;if(o.fbtrace_id){g.log(j,o,{delay:10*1000});}else g.log(j,o);}};e.exports=m;},null);
__d("RequiredFormListener",["Event","Input"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();g.listen(document.documentElement,'submit',function(i){var j=i.getTarget().getElementsByTagName('*');for(var k=0;k<j.length;k++)if(j[k].getAttribute('required')&&h.isEmpty(j[k])){j[k].focus();return false;}},g.Priority.URGENT);},null);
__d("LayerHideOnSuccess",["copyProperties"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";this._layer=i;}h.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('success',this._layer.hide.bind(this._layer));};h.prototype.disable=function(){"use strict";if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};g(h.prototype,{_subscription:null});e.exports=h;},null);
__d("Overlay",["CSS","DataStore","DOM","Layer","LayerButtons","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerFormHooks","LayerHideOnBlur","LayerHideOnEscape","LayerHideOnSuccess","LayerHideOnTransition","LayerMouseHooks","LayerTabIsolation","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();for(var w in j)if(j.hasOwnProperty(w))y[w]=j[w];var x=j===null?null:j.prototype;y.prototype=Object.create(x);y.prototype.constructor=y;y.__superConstructor__=j;function y(z,aa){"use strict";z=v({buildWrapper:true},z||{});this._shouldBuildWrapper=z.buildWrapper;j.call(this,z,aa);}y.prototype._configure=function(z,aa){"use strict";x._configure.call(this,z,aa);var ba=this.getRoot();this._overlay=i.scry(ba,'div.uiOverlay')[0]||ba;g.hide(ba);i.appendContent(this.getInsertParent(),ba);h.set(this._overlay,'overlay',this);var ca=h.get(this._overlay,'width');ca&&this.setWidth(ca);if(this.setFixed)this.setFixed(h.get(this._overlay,'fixed')=='true');if(h.get(this._overlay,'fadeonshow')!='false')this.enableBehavior(n);if(h.get(this._overlay,'fadeonhide')!='false')this.enableBehavior(m);if(h.get(this._overlay,'hideonsuccess')!='false')this.enableBehavior(r);if(h.get(this._overlay,'hideonblur')=='true')this.enableBehavior(p);if(h.get(this._overlay,'destroyonhide')!='false')this.enableBehavior(l);return this;};y.prototype._getDefaultBehaviors=function(){"use strict";return x._getDefaultBehaviors.call(this).concat([k,o,t,q,s,u]);};y.prototype.initWithoutBuildingWrapper=function(){"use strict";this._shouldBuildWrapper=false;return this.init.apply(this,arguments);};y.prototype._buildWrapper=function(z,aa){"use strict";aa=x._buildWrapper.call(this,z,aa);if(!this._shouldBuildWrapper){this._contentRoot=aa;return aa;}this._contentRoot=i.create('div',{className:'uiOverlayContent'},aa);return i.create('div',{className:'uiOverlay'},this._contentRoot);};y.prototype.getContentRoot=function(){"use strict";return this._contentRoot;};y.prototype.destroy=function(){"use strict";h.remove(this.getRoot(),'overlay');x.destroy.call(this);};e.exports=y;},null);
__d("PixelRatio",["Arbiter","Cookie","PixelRatioConst","Run"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i.cookieName,l,m;function n(){return window.devicePixelRatio||1;}function o(){h.set(k,n());}function p(){h.clear(k);}function q(){var s=n();if(s!==l){o();}else p();}var r={startDetecting:function(s){l=s||1;p();if(m)return;m=[g.subscribe('pre_page_transition',q)];j.onBeforeUnload(q);}};e.exports=r;},null);
__d("PerfXLogger",["Arbiter","LogBuffer","PageEvents","PerfXFlusher","performance"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={},m='BigPipe/init',n='tti_bigpipe',o={},p,q={_listenersSetUp:false,_setupListeners:function(){if(this.listenersSetUp)return;this._subscribeToBigPipeInit(g);this._subscribeToFullPageE2E(g);this.listenersSetUp=true;},_init:function(r,s,t){l[r]={perfx_page:s,perfx_page_type:t};this._setupListeners();},initForPageLoad:function(r,s,t){p=r;this._init(r,s,t);},initForQuickling:function(r,s,t,u){this._init(r,s,t);o[r]=u;},_subscribeToBigPipeInit:function(r){r.subscribe(m,function(event,s){var t=s.arbiter;this._subscribeToTTI(t);this._subscribeToAsyncTransitionE2E(t);}.bind(this));},_subscribeToTTI:function(r){r.subscribe(n,function(event,s){var t=s.lid;if(!(t in l))return;l[t].tti=s.ts;});},_subscribeToFullPageE2E:function(r){r.subscribe(i.BIGPIPE_ONLOAD,function(event,s){if(!(p in l))return;l[p].e2e=s.ts;this._finishPageload(p);}.bind(this));},_subscribeToAsyncTransitionE2E:function(r){r.subscribe(i.AJAXPIPE_ONLOAD,function(event,s){var t=s.lid;if(!(t in l))return;l[t].e2e=s.ts;this._finishQuickling(t);}.bind(this));},_generatePayload:function(r,s){var t=l[r];if(t.fbtrace_id){t.js_tti=this._getJSTime(s,t.tti);t.js_e2e=this._getJSTime(s,t.e2e);}var u=Object.assign({},t);if(!this._adjustAndValidateValues(u,s))return;return u;},_getPageloadPayload:function(r){if(!(r in l))return;if(!k.timing){delete l[r];return;}var s=k.timing.navigationStart;return this._generatePayload(r,s);},_getQuicklingPayload:function(r){if(!(r in o)||!(r in l))return;if(!k.timing||!k.getEntriesByName){delete o[r];delete l[r];return;}var s=o[r],t=k.getEntriesByName(s);if(t.length===0)return;var u=t[0],v=k.timing.navigationStart+u.startTime;return this._generatePayload(r,v);},_finishPageload:function(r){var s=this._getPageloadPayload(r);if(s)this._log(r,s);},_finishQuickling:function(r){var s=this._getQuicklingPayload(r);if(s)this._log(r,s);},_log:function(r,s){j.flush(r,s);},_adjustAndValidateValues:function(r,s){var t=['e2e','tti'],u=true;for(var v=0;v<t.length;v++){var w=t[v],x=r[w];if(!x){u=false;break;}r[w]=x-s;}return u;},getPayload:function(r){if(!(r in l))return;var s=l[r].perfx_page_type;if(s==="normal"){return this._getPageloadPayload(r);}else if(s==="quickling")return this._getQuicklingPayload(r);},setFBTraceID:function(r,s){if(r in l)l[r].fbtrace_id=s;},_getJSTime:function(r,s){if(r>s)return 0;var t=0;h.read('time_slice').forEach(function(u){var v=u.begin,w=u.end;if(v>w)return;if(r<=v&&w<=s){t+=w-v;}else if(v<=r&&s<=w){t+=s-r;}else if(v<=r&&r<=w){t+=w-r;}else if(v<=s&&s<=w)t+=s-v;});return t;}};e.exports=q;},null);
__d("ContextualDialogFooterLink",["CSS","DOM","Event","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l){"use strict";this._layer=l;}k.prototype.enable=function(){"use strict";var l=this._layer.getRoot(),m=h.scry(l,'.uiContextualDialogFooterLink')[0],n='uiContextualDialogHoverFooterArrow';this._subscriptions=[i.listen(m,'mouseenter',g.addClass.bind(null,l,n)),i.listen(m,'mouseleave',g.removeClass.bind(null,l,n))];};k.prototype.disable=function(){"use strict";this._subscriptions.forEach(function(l){l.remove();});this._subscriptions=null;};j(k.prototype,{_subscriptions:null});e.exports=k;},null);
__d("LegacyContextualDialog",["Arbiter","ArbiterMixin","ARIA","Bootloader","ContextualDialogFooterLink","ContextualThing","CSS","DataStore","DOM","Event","LayerAutoFocus","LayerRefocusOnHide","Locale","Overlay","Parent","Scroll","Style","Vector","$","copyProperties","getOverlayZIndex","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){b.__markCompiled&&b.__markCompiled();for(var ca in t)if(t.hasOwnProperty(ca))ea[ca]=t[ca];var da=t===null?null:t.prototype;ea.prototype=Object.create(da);ea.prototype.constructor=ea;ea.__superConstructor__=t;function ea(){"use strict";if(t!==null)t.apply(this,arguments);}ea.prototype._configure=function(fa,ga){"use strict";da._configure.call(this,fa,ga);var ha=this.getRoot(),ia=n.get.bind(null,ha);this.setAlignH(ia('alignh','left'));this.setOffsetX(ia('offsetx',0));this.setOffsetY(ia('offsety',0));this.setPosition(ia('position','above'));this._hasFooter=ia('hasfooter',false);if(this._hasFooter){var ja=o.scry(ha,'.uiContextualDialogFooterLink')[0];ja&&this.enableBehavior(k);}this.enableBehaviors(this._getDefaultBehaviors());this._setContextSubscription=this.subscribe('beforeshow',function(){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;var la=ia('context');if(la){this.setContext(y(la));}else{la=ia('contextselector');if(la)this.setContext(o.find(document,la));}}.bind(this));this._content=o.scry(ha,'.uiContextualDialogContent')[0];if(this._content){this._content.setAttribute('role','dialog');var ka=o.scry(this._content,'.legacyContextualDialogTitle')[0];if(ka)this._content.setAttribute('aria-labelledby',o.getID(ka));}this._showSubscription=this.subscribe('show',function(){var la=ba(this.updatePosition,this);this._resizeListener=p.listen(window,'resize',la);this._reflowSubscription=g.subscribe('reflow',la);this._setupScrollListener(this._scrollParent);l.register(ha,this.context);g.inform('layer_shown',{type:'ContextualDialog'});}.bind(this));this._hideSubscription=this.subscribe('hide',function(){this._teardownResizeAndReflowListeners();this._teardownScrollListener();g.inform('layer_hidden',{type:'ContextualDialog'});}.bind(this));return this;};ea.prototype._getDefaultBehaviors=function(){"use strict";return da._getDefaultBehaviors.call(this).concat([q,r]);};ea.prototype._buildWrapper=function(fa,ga){"use strict";var ha=da._buildWrapper.call(this,fa,ga);if(!this._shouldBuildWrapper)return ha;m.addClass(ha,'uiContextualDialog');return o.create('div',{className:'uiContextualDialogPositioner'},ha);};ea.prototype.setWidth=function(fa){"use strict";this._width=Math.floor(fa);return this;};ea.prototype.setFixed=function(fa){"use strict";fa=!!fa;m.conditionClass(this.getRoot(),'uiContextualDialogFixed',fa);this._fixed=fa;return this;};ea.prototype.setAlignH=function(fa){"use strict";this.alignH=fa;this._updateAlignmentClass();this._shown&&this.updatePosition();this.position&&this._updateArrow();return this;};ea.prototype.getContent=function(){"use strict";return this._content;};ea.prototype.getContext=function(){"use strict";return this.context;};ea.prototype.setContext=function(fa){"use strict";if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}fa=y(fa);if(this.context&&this.context!=fa)n.remove(this.context,'LegacyContextualDialog');this.context=fa;i.setPopup(this.getCausalElement(),this.getRoot());var ga=u.byClass(fa,'fbPhotoSnowlift');this.setInsertParent(ga||document.body);if(this._scrollListener&&this._scrollParent!==ga){this._teardownScrollListener();this._setupScrollListener(ga);}this._scrollParent=ga;var ha=aa(fa,this._insertParent);w.set(this.getRoot(),'z-index',ha>200?ha:'');n.set(this.context,'LegacyContextualDialog',this);return this;};ea.prototype.getCausalElement=function(){"use strict";return da.getCausalElement.call(this)||this.context;};ea.prototype.listen=function(fa,ga){"use strict";return p.listen(this.getRoot(),fa,ga);};ea.prototype.setOffsetX=function(fa){"use strict";this.offsetX=parseInt(fa,10)||0;this._shown&&this.updatePosition();return this;};ea.prototype.setOffsetY=function(fa){"use strict";this.offsetY=parseInt(fa,10)||0;this._shown&&this.updatePosition();return this;};ea.prototype.setPosition=function(fa){"use strict";this.position=fa;for(var ga in ea.POSITION_TO_CLASS)m.conditionClass(this.getRoot(),ea.POSITION_TO_CLASS[ga],fa==ga);this._updateAlignmentClass();this._shown&&this.updatePosition();this._updateArrow();return this;};ea.prototype.updatePosition=function(){"use strict";if(!this.context)return false;if(this._width)w.set(this._overlay,'width',this._width+'px');var fa=this._fixed?'viewport':'document',ga=x.getElementPosition(this.context,fa),ha=this._scrollParent;if(ha)ga=ga.sub(x.getElementPosition(ha,'document')).add(v.getLeft(ha),v.getTop(ha));var ia=x.getElementDimensions(this.context),ja=this.position=='above'||this.position=='below',ka=s.isRTL();if((this.position=='right'||(ja&&this.alignH=='right'))!=ka)ga=ga.add(ia.x,0);if(this.position=='below')ga=ga.add(0,ia.y);var la=new x(0,0);if(ja&&this.alignH=='center'){la=la.add((ia.x-this._width)/2,0);}else{var ma=ja?ia.x:ia.y,na=2*ea.ARROW_INSET;if(ma<na){var oa=ma/2-ea.ARROW_INSET;if(ja&&(this.alignH=='right'!=ka))oa=-oa;la=la.add(ja?oa:0,ja?0:oa);}}la=la.add(this.offsetX,this.offsetY);if(ka)la=la.mul(-1,1);ga=ga.add(la);if(this._fixed)ga=new x(ga.x,ga.y,'document');ga.setElementPosition(this.getRoot());this._adjustVerticalPosition();this._adjustHorizontalPosition();return true;};ea.prototype.scrollTo=function(){"use strict";if(this.context)j.loadModules(["DOMScroll"],function(fa){fa.scrollTo(this.context,true,true);}.bind(this));};ea.prototype.destroy=function(){"use strict";this.unsubscribe(this._showSubscription);this.unsubscribe(this._hideSubscription);if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}this._teardownScrollListener();this._teardownResizeAndReflowListeners();this.context&&n.remove(this.context,'LegacyContextualDialog');da.destroy.call(this);};ea.prototype._adjustVerticalPosition=function(){"use strict";if(this.position!='left'&&this.position!='right'){w.set(this._overlay,'top','');return;}var fa=this.getRoot(),ga=x.getElementPosition(fa,'viewport').y,ha=x.getElementDimensions(this._overlay).y,ia=x.getViewportDimensions().y,ja=Math.min(Math.max(ga,ea.MIN_TOP_GAP),ea.TOP_MARGIN),ka=Math.min(Math.max(0,ga+ha+ea.BOTTOM_MARGIN-ia),Math.max(-ja,ga-ja),ha-2*ea.ARROW_INSET);w.set(this._overlay,'top',(-1*ka)+'px');w.set(this._arrow,'top',ea.ARROW_OFFSET+'px');w.set(this._arrow,'marginTop',ka+'px');};ea.prototype._adjustHorizontalPosition=function(){"use strict";if((this.position!='above'&&this.position!='below')||this.alignH!='left'){w.set(this._overlay,'left','');w.set(this._overlay,'right','');return;}var fa=this.getRoot(),ga=x.getElementPosition(fa,'viewport').x,ha=x.getElementDimensions(this._overlay).x,ia=x.getViewportDimensions().x,ja=s.isRTL(),ka;if(!ja){ka=ga+ha+ea.RIGHT_MARGIN-ia;}else ka=ea.LEFT_MARGIN+ha-ga;ka=Math.min(Math.max(0,ka),ha-2*ea.ARROW_INSET);w.set(this._overlay,ja?'right':'left',-1*ka+'px');w.set(this._arrow,ja?'right':'left',ea.ARROW_OFFSET+'px');w.set(this._arrow,ja?'marginRight':'marginLeft',ka+'px');};ea.prototype._updateArrow=function(){"use strict";var fa=0;if(this.position=='above'||this.position=='below')switch(this.alignH){case 'center':fa=50;break;case 'right':fa=100;break;}this._renderArrow(ea.POSITION_TO_ARROW[this.position],fa);};ea.prototype._renderArrow=function(fa,ga){"use strict";for(var ha in ea.ARROW_CLASS)m.conditionClass(this._overlay,ea.ARROW_CLASS[ha],fa==ha);m.conditionClass(this._overlay,'uiContextualDialogWithFooterArrowBottom',fa=='bottom'&&this._hasFooter);if(fa=='none')return;if(!this._arrow){this._arrow=o.create('i',{className:'uiContextualDialogArrow'});o.appendContent(this._overlay,this._arrow);}w.set(this._arrow,'top','');w.set(this._arrow,'left','');w.set(this._arrow,'right','');w.set(this._arrow,'margin','');var ia=fa=='top'||fa=='bottom',ja=ia?(s.isRTL()?'right':'left'):'top';ga=ga||0;w.set(this._arrow,ja,ga+'%');var ka=ea.ARROW_LENGTH+ea.ARROW_OFFSET*2,la=-(ka*ga/100-ea.ARROW_OFFSET);w.set(this._arrow,'margin-'+ja,la+'px');};ea.prototype._updateAlignmentClass=function(){"use strict";m.conditionClass(this.getRoot(),ea.RIGHT_ALIGNED_CLASS,(this.position=='above'||this.position=='below')&&this.alignH=='right');};ea.prototype._setupScrollListener=function(fa){"use strict";this._scrollListener=p.listen(fa||window,'scroll',ba(this._adjustVerticalPosition,this));};ea.prototype._teardownScrollListener=function(){"use strict";if(this._scrollListener){this._scrollListener.remove();this._scrollListener=null;}};ea.prototype._teardownResizeAndReflowListeners=function(){"use strict";if(this._resizeListener){this._resizeListener.remove();this._resizeListener=null;}if(this._reflowSubscription){this._reflowSubscription.unsubscribe();this._reflowSubscription=null;}};ea.getInstance=function(fa){"use strict";var ga=n.get(fa,'LegacyContextualDialog');if(!ga){var ha=u.byClass(fa,'uiOverlay');if(ha)ga=n.get(ha,'overlay');}return ga;};z(ea,h,{ARROW_OFFSET:15,ARROW_LENGTH:16,ARROW_INSET:22,TOP_MARGIN:50,BOTTOM_MARGIN:30,LEFT_MARGIN:15,RIGHT_MARGIN:30,MIN_TOP_GAP:5,POSITION_TO_CLASS:{above:'uiContextualDialogAbove',below:'uiContextualDialogBelow',left:'uiContextualDialogLeft',right:'uiContextualDialogRight'},RIGHT_ALIGNED_CLASS:'uiContextualDialogRightAligned',ARROW_CLASS:{bottom:'uiContextualDialogArrowBottom',top:'uiContextualDialogArrowTop',right:'uiContextualDialogArrowRight',left:'uiContextualDialogArrowLeft'},POSITION_TO_ARROW:{above:'bottom',below:'top',left:'right',right:'left'}});z(ea.prototype,{_scrollListener:null,_scrollParent:null,_width:null,_fixed:false,_hasFooter:false,_showSubscription:null,_hideSubscription:null,_setContextSubscription:null,_resizeListener:null,_reflowSubscription:null});e.exports=ea;},null);