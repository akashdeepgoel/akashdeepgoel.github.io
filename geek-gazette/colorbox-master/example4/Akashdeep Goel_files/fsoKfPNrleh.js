/*!CK:2797331301!*//*1431921087,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["x6dpG"]); }

__d("CustomCallToActionConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={WEB:"CUSTOM_CTA_PLATFORM_WEB",IOS:"CUSTOM_CTA_PLATFORM_IOS",ANDROID:"CUSTOM_CTA_PLATFORM_ANDROID",PRIMARY_LINK:"customCTAEditPrimaryLink",PRIMARY_LINK_TYPE:"customCTAEditPrimaryLinkType",FALLBACK_LINK_TYPE:"customCTAEditFallbackLinkType",FALLBACK_LINK:"customCTAEditFallbackLink",APP_ID:"appID",COVER_PHOTO_SURFACE:"coverPhoto",HOVER_CARD_SURFACE:"hoverCard",PAGE_PLUGIN_SURFACE:"pagePlugin",GK_BYPASS:"pages_custom_cta_bypass",GK_PID:"pages_custom_cta_pid_2",GK_UID:"pages_custom_cta_uid",GK_CONTEXTUAL_ROW_UID:"pages_custom_cta_contextual_row_uid",GK_CONTEXTUAL_ROW_ADMIN_UID:"pages_custom_cta_contextual_row_admin_uid",GK_FOLLOW_BUTTON_IN_LIKE_DROPDOWN:"pages_follow_button_in_like_dropdown",GK_HOVER_CARD:"custom_cta_hover_card_uid",GK_SHOW_IN_SPRINGBOARD_UID:"pages_custom_cta_show_in_springboard_uid",GK_ADMIN_UID:"custom_cta_admin_uid",GK_PROMOTION_ADMIN_UID:"custom_cta_promotion_admin_uid",GK_CUSTOM_CTA_CALLOUT:"custom_cta_callout",GK_SHOW_VIEWER_UNIT_IN_LOGGED_OUT_VIEW:"custom_cta_show_viewer_unit_when_logged_out",NECTAR_APP_NAME:"custom_cta",GK_CCTA_NEW_DIALOG:"ccta_new_dialog",OPEN_APP_ID:1,OPEN_WEBSITE_ID:2};},null);
__d("ScrollColumn.react",["cx","invariant","throttle","tidyEvent","Arbiter","Event","React","Vector","ViewportBounds"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=m,q=p.PropTypes,r='ScrollColumn/adjust',s=m.createClass({displayName:"ScrollColumn",propTypes:{topOffset:q.number,zIndex:q.number},getDefaultProps:function(){return {topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function(){var t='auto',u=this.state.fixedLeft,v='auto';if(this.state.fixed==='bottom'){t=this.state.fixedBottom;}else if(this.state.fixed==='top'){v=this.state.fixedTop;}else{u='auto';v=this.state.top;}return (m.createElement("div",{className:"_5ss7",ref:"container"},m.createElement("div",{className:(("_5ss8")+(this.state.fixed?' '+"fixed_always":'')),ref:"column",style:{bottom:t,left:u,top:v,zIndex:this.props.zIndex}},this.props.children)));},componentDidMount:function(){this.setState({adjustEventListener:j(k.subscribe(r,function(){this._adjust();}.bind(this))),resizeListener:j(l.listen(window,'resize',i(this._adjust))),scrollListener:j(l.listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:j(o.subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function(t,u){if(u.fixed!==this.state.fixed)k.inform('reflow');},componentWillUnmount:function(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function(event){var t=n.getScrollPosition().y;this._scrollDelta=t-this._scroll;this._scroll=t;this._adjust();},_adjust:function(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var t=this._getTopPositionForRef('column'),u=this._getTopPositionForRef('container'),v=t-u;this._setNotFixed(v);},_getTopPositionForRef:function(t){var u=this.refs[t];h(u);var v=n.getElementPosition(m.findDOMNode(u),'viewport').y;if(this._scroll<0)v+=this._scroll;return v;},_getTopBoundWithOffset:function(){return o.getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function(){var t=this._getTopPositionForRef('container');return t>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function(){var t=n.getViewportDimensions().y-o.getBottom()-this._getTopBoundWithOffset();return m.findDOMNode(this.refs.column).offsetHeight>t;},_isBottomOfColumnVisible:function(){var t=this._getTopPositionForRef('column'),u=n.getElementDimensions(m.findDOMNode(this.refs.column),'viewport').y,v=t+u;return v<=n.getViewportDimensions().y-o.getBottom();},_isTopOfColumnVisible:function(){var t=this._getTopPositionForRef('column');return t>=this._getTopBoundWithOffset();},_getFixedLeft:function(){return (n.getElementPosition(m.findDOMNode(this.refs.container),'viewport').x);},_setFixedToBottom:function(){this.setState({fixed:'bottom',fixedBottom:o.getBottom(),fixedLeft:this._getFixedLeft()});},_setFixedToTop:function(){this.setState({fixed:'top',fixedLeft:this._getFixedLeft(),fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function(t){this.setState({fixed:false,top:t});},_updateContainerHeight:function(){m.findDOMNode(this.refs.container).style.height=m.findDOMNode(this.refs.column).offsetHeight+'px';},_updateColumnWidth:function(){m.findDOMNode(this.refs.column).style.width=m.findDOMNode(this.refs.container).offsetWidth+'px';}});s.EVENT_SHOULD_ADJUST=r;e.exports=s;},null);
__d("TabBarItem.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.createClass({displayName:"TabBarItem",getDefaultProps:function(){return {wrapper:'li'};},render:function(){var k=(("_45hc")+(this.props.selected?' '+"_1hqh":'')),l=this.props.wrapper,m=this.props.href||'#',n=this.props.ajaxify,o=this.props.rel;if(l)return (g.createElement(l,g.__spread({},this.props,{className:i(this.props.className,k)}),g.createElement("a",{ajaxify:n,href:m,rel:o},this.props.children)));return (g.createElement("a",g.__spread({},this.props,{ajaxify:n,className:i(this.props.className,k),href:m,rel:o}),this.props.children));}});e.exports=j;},null);
__d("TabBarDropdownItem.react",["ContextualDialogArrow","ContextualLayerAutoFlip","InlineBlock.react","PopoverMenu.react","React","ReactXUIMenu","TabBarItem.react","cx","onlyChild","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q=k,r=q.PropTypes,s=k.createClass({displayName:"TabBarDropdownItem",propTypes:{tabComponent:r.func},getDefaultProps:function(){return {tabComponent:m};},_renderTab:function(){var t=this.props.tabComponent,u="_45hd _45hc";return (k.createElement(t,k.__spread({},this.props,{wrapper:false,className:p(this.props.className,u)}),k.createElement("span",{className:"_1b0"},this.props.label)));},render:function(){if(this.props.children){var t=this.props.selected?l.SelectableMenu:l,u=k.createElement(t,null,this.props.children.map(this.convertTabItemWrapperToMenuItem)),v=[h,g];return (k.createElement("li",{className:"_45hd"},k.createElement(j,{menu:u,layerBehaviors:v},this._renderTab())));}else return (k.createElement("li",{className:"_45hd"},k.createElement(i,null,this._renderTab())));},convertTabItemWrapperToMenuItem:function(t,u){var v=this.props.selected?l.SelectableItem:l.Item,w=o(t.type.getComponent(t.props));return (k.createElement(v,k.__spread({},w.props,{key:u,onclick:w.props.onClick}),w.props.children));}});e.exports=s;},null);
__d("TabBar.react",["React","ReactChildren","TabBarDropdownItem.react","TabBarItem.react","cx","fbt","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=g,o=n.PropTypes,p=l._("More"),q=g.createClass({displayName:"TabBarItemWrapper",statics:{getComponent:function(s){return s.component;}},render:function(){return this.props.component;}}),r=g.createClass({displayName:"TabBar",propTypes:{activeTabKey:o.string,alwaysShowActive:o.bool,defaultActiveTabKey:o.string,maxTabsVisible:o.number,moreLabel:o.string,onTabClick:o.func,dropdownTabComponent:o.func,onWidthCalculated:o.func,shouldCalculateVisibleTabs:o.bool},getDefaultProps:function(){return {alwaysShowActive:true,dropdownTabComponent:j,maxTabsVisible:Infinity,moreLabel:p,onTabClick:function(){return true;},shouldCalculateVisibleTabs:true};},getInitialState:function(){return {activeTabKey:this.props.defaultActiveTabKey,visibleTabs:0,shouldCalculateVisibleTabs:true};},setWidth:function(s){g.findDOMNode(this).style.width=s;this.setState({shouldCalculateVisibleTabs:true});},render:function(){var s=[];h.forEach(this.props.children,function(ba){if(ba)s.push(ba);});var t=s.length,u=this.getActiveTabIndex(),v=s[u];if(this.state.shouldCalculateVisibleTabs){s=s.map(function(ba,ca){ba=g.cloneElement(ba,{selected:ca===u});return (g.createElement(q,{key:ba.key,component:ba,ref:ca}));});if(t>2)s.push(g.createElement(i,{key:"_dropdown",ref:"more",label:this.props.moreLabel,tabComponent:this.props.dropdownTabComponent}));}else{s=s.map(function(ba,ca){ba=g.cloneElement(ba,{selected:v&&v.key===ba.key,onClick:this.onTabClick.bind(this,ba.key)});return (g.createElement(q,{key:ba.key,component:ba,ref:ca}));}.bind(this));var w=this.state.visibleTabs,x;if(w>0){var y;if(!this.props.alwaysShowActive||u<w){y=s.splice(w);if(u>=w)x=true;}else{v=s.splice(u,1)[0];y=s.splice(w-1);s.push(v);}if(y.length)s.push(g.createElement(i,{selected:x,key:"_dropdown",label:this.props.moreLabel,tabComponent:this.props.dropdownTabComponent},y));}else{var z=v;if(!v)z=q.getComponent(s[0].props);var aa=z.props.children;s=g.createElement(i,{label:aa,tabComponent:this.props.dropdownTabComponent,selected:this.getActiveTabIndex()!==-1},s);}}return (g.createElement("ul",g.__spread({},this.props,{className:m(this.props.className,"_43o4")}),s));},componentDidMount:function(){this.calculateVisibleTabs();this.calculateWidth();},componentWillReceiveProps:function(s){this.setState({shouldCalculateVisibleTabs:true});},componentDidUpdate:function(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function(){if(this.props.onWidthCalculated)this.props.onWidthCalculated(g.findDOMNode(this).clientWidth);},calculateVisibleTabs:function(){var s=[];h.forEach(this.props.children,function(ca){if(ca)s.push(ca);});var t=s.length;if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabs:Math.min(t,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});return;}var u=[];for(var v=0;v<t;v++)u.push(g.findDOMNode(this.refs[v]).offsetWidth);var w=this.getActiveTabIndex();if(this.props.alwaysShowActive&&w!==-1){s.unshift(s.splice(w,1)[0]);u.unshift(u.splice(w,1)[0]);}var x=g.findDOMNode(this).offsetWidth,y=0,z=0;for(v=0;v<t;v++){var aa=u[v];if(z+aa>x){if(y>0&&t>2){var ba=g.findDOMNode(this.refs.more).offsetWidth;while(y>0&&(z+ba>x||t-y<2)){y--;z-=u[y];}}else y=0;break;}y++;z+=aa;}this.setState({visibleTabs:Math.min(y,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function(){var s=this.props.activeTabKey||this.state.activeTabKey,t=-1;if(s)h.forEach(this.props.children,function(u,v){if(u&&u.key===s)t=v;});return t;},onTabClick:function(s,event){var t=this.props.onTabClick(s,event);if(t!==false)this.setState({activeTabKey:s,shouldCalculateVisibleTabs:true});return t;}});r.Tab=j;r.DropdownItem=i;e.exports=r;},null);
__d("XUIPageNavigationItem.react",["React","TabBarItem.react","cx","fbt","merge","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=g,n=m.PropTypes,o=g.createClass({displayName:"XUIPageNavigationItem",statics:{propsForMenuItem:function(p){return k(p,{className:"_5vwz _5vw-"});}},propTypes:{selected:n.bool},getDefaultProps:function(){return {selected:false};},render:function(){var p=(("_5vwz")+(this.props.selected?' '+"_5vwy":'')),q=null;if(this.props.selected)q=g.createElement("span",{className:"accessible_elem"},j._("selected"));return (g.createElement(h,g.__spread({},this.props,{className:l(this.props.className,p)}),this.props.children,q,g.createElement("span",{className:"_13xf"})));}});e.exports=o;},null);
__d("XUIPageNavigationGroup.react",["React","TabBar.react","XUIPageNavigationItem.react"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g,k=j.PropTypes,l=g.createClass({displayName:"XUIPageNavigationGroup",propTypes:{moreLabel:k.string,maxTabsVisible:function(m,n,o){var p=m[n];if(p!=null&&!(typeof p==='number'&&p>=0))return new Error(("Invalid `"+n+"` supplied to `"+o+"`, ")+("expected positive integer."));},width:k.string},getDefaultProps:function(){return {maxTabsVisible:Infinity};},componentDidUpdate:function(){this.refs.bar.setWidth(this.props.width);},componentDidMount:function(){this.refs.bar.setWidth(this.props.width);},render:function(){return g.createElement(h,g.__spread({},this.props,{ref:"bar"}),this.props.children);}});l.Item=i;e.exports=l;},null);
__d("XUIPageNavigation.react",["Arbiter","CSS","DOMQuery","Event","LeftRight.react","React","ReactChildren","ReactComponentWithPureRenderMixin","SubscriptionsHandler","TinyViewport","Vector","ViewportBounds","XUIPageNavigationGroup.react","cloneWithProps","csx","cx","invariant","joinClasses","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z=l,aa=z.PropTypes,ba=15,ca='bluebar',da='caret',ea=l.createClass({displayName:"XUIPageNavigation",mixins:[n],propTypes:{selectedIndicator:aa.oneOf([da,ca]),caretColor:aa.oneOf(['bg-blue','fbui-desktop-wash','fbui-desktop-background-light','fbui-red','fbui-green','fbui-desktop-divider-dark','white']),size:aa.oneOf(['small','medium']),scrollThreshold:aa.number},getDefaultProps:function(){return {selectedIndicator:ca,caretColor:'fbui-desktop-wash',size:'medium',scrollThreshold:0};},getInitialState:function(){return {activeTabKey:undefined,leftWidth:null};},componentDidMount:function(){this._subscriptions=new o();this.resizeNavbarGroups();this._listenForNavbarResize();var fa="^.fixed_elem._5vx1";this.wrapper=i.scry(l.findDOMNode(this),fa)[0];if(this.wrapper){this._setViewportBounds();this._subscriptions.addSubscriptions(p.subscribe('change',function(){if(p.isTiny()){this._bound.remove();}else this._setViewportBounds();}.bind(this)));}if(this.wrapper||i.scry(l.findDOMNode(this),"^._k").length)this._showDropshadowOnScroll();},componentWillUnmount:function(){this._subscriptions.release();},onTabClick:function(fa,event){if(this.props.onTabClick){var ga=this.props.onTabClick(fa,event);if(!ga)return ga;}if(!j.$E(event).isDefaultRequested())this.setState({activeTabKey:fa});},onWidthCalculated:function(fa,ga){this[fa?'_rightWidth':'_leftWidth']=ga;},render:function(){var fa=this.props.selectedIndicator,ga=this.props.size,ha=(("_5vx2")+(ga==='small'?' '+"_5vx3":'')+(ga==='medium'?' '+"_5vx4":'')+(fa===da?' '+"_5vx5":'')+(fa===ca?' '+"_5vx6":'')),ia=null;if(fa===da){var ja=this.props.caretColor;ia=((ja==='bg-blue'?"_2d2c":'')+(ja==='fbui-desktop-wash'?' '+"_4_np":'')+(ja==='fbui-desktop-background-light'?' '+"_4_nr":'')+(ja==='fbui-red'?' '+"_4_ns":'')+(ja==='fbui-green'?' '+"_4_nv":'')+(ja==='fbui-desktop-divider-dark'?' '+"_4_nz":'')+(ja==='white'?' '+"_5-f":''));}var ka=x(ha,ia,this.props.className),la=[],ma=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;m.forEach(this.props.children,function(na,oa){var pa={onTabClick:this.onTabClick,activeTabKey:ma,onWidthCalculated:this.onWidthCalculated.bind(this,oa),ref:oa?'right':'left',key:oa};if(oa===0)pa.width=this.state.leftWidth;la.push(t(na,pa));}.bind(this));w(la.length===1||la.length===2);return (l.createElement("div",{className:ka},l.createElement(k,{className:"_5vx7"},la)));},_setViewportBounds:function(){var fa=this.wrapper.offsetHeight,ga=r.getTop();this._bound=r.addTop(ga+fa);g.subscribe('page_transition',function(){this._bound.remove();});},_listenForNavbarResize:function(){this._subscriptions.addSubscriptions(j.listen(window,'resize',y(this.resizeNavbarGroups,30)));},_showDropshadowOnScroll:function(){this._subscriptions.addSubscriptions(j.listen(window,'scroll',function(){var fa=q.getScrollPosition().y>this.props.scrollThreshold;if(this._hasDropshadow===fa)return;this._hasDropshadow=fa;h.conditionClass(l.findDOMNode(this),"_51j8",fa);}.bind(this)));},resizeNavbarGroups:function(){if(!this.refs.left)return;var fa=l.findDOMNode(this).clientWidth,ga;if(this.refs.right){ga=fa-this._rightWidth-ba;if(ga<this._rightWidth)ga=this._rightWidth+ba;}else ga=fa;this.setState({leftWidth:ga+'px'});}});ea.Group=s;ea.Item=s.Item;ea.Indicator={BlueBar:ca,Caret:da};e.exports=ea;},null);
__d("XComposerActorChangeController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/composer\/actor\/change\/",{composer_id:{type:"String",required:true},entry_point:{type:"Enum",required:true,enumType:1},from_actor_id:{type:"Int",required:true},target_id:{type:"Int",required:true}});},null);
__d("ComposerXActorSelector.react",["ActorSelector.react","ActorSelectorNuxTypes","ActorURI","Arbiter","AsyncRequest","React","emptyFunction","XActorSelectorNuxSeenWriteController","XComposerActorChangeController","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q=l,r=q.PropTypes,s=l.createClass({displayName:"ComposerXActorSelector",propTypes:{actorIDs:r.array.isRequired,composerID:r.string.isRequired,coverEnabled:r.bool.isRequired,entryPoint:r.string.isRequired,nuxEnabledCovered:r.bool,nuxEnabledUncovered:r.bool,nuxHoverContext:r.object,pagePermissions:r.object.isRequired,selectedActorID:r.string.isRequired,settingsURI:r.string,targetID:r.string.isRequired},getInitialState:function(){return {loading:false};},componentWillMount:function(){j.subscribe('ComposerXPages/composePostWithActor',function(t,u){if(u.actorID)this._updateCurrentActor(u.actorID,function(){if(u.callback)u.callback();});}.bind(this));},render:function(){return (l.createElement(g,{actorIDs:this.props.actorIDs,actorPermissions:this.props.pagePermissions,coverEnabled:this.props.coverEnabled,loading:this.state.loading,nuxBody:this._getNUXBody(),nuxEnabledCovered:this.props.nuxEnabledCovered,nuxEnabledUncovered:this.props.nuxEnabledUncovered,nuxHoverContext:this.props.nuxHoverContext,onChange:this._onChange,onCompleteNux:this._onCompleteNux,ref:"selector",selectedActorID:this.props.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName,tooltipConstructorCovered:this._getCoveredTooltip}));},_getNUXBody:function(){return (p._("Choose whether to post as yourself or as one of the Pages you manage."));},_getTooltipForActorName:function(t){return (p._("Posting as {actorName}",[p.param("actorName",t)]));},_getCoveredTooltip:function(){return (p._("Post as one of the Pages you manage."));},_onChange:function(t){this._updateCurrentActor(t.value);},_updateCurrentActor:function(t,u){u=u||m;if(this.props.selectedActorID===t){u();return;}this.setState({loading:true});var v=i.create(o.getURIBuilder().setString('composer_id',this.props.composerID).setEnum('entry_point',this.props.entryPoint).setInt('from_actor_id',this.props.selectedActorID).setInt('target_id',this.props.targetID).getURI(),t),w=function(){this.setState({loading:false});}.bind(this);new k().setURI(v).setErrorHandler(w).setServerDialogCancelHandler(w).setFinallyHandler(u).send();},_onCompleteNux:function(t){var u=t.isCovered,v=u?h.COMPOSER_COVERED:h.COMPOSER,w=n.getURIBuilder().setEnum('nux_type',v).getURI();new k().setURI(w).send();}});e.exports=s;},null);
__d("SwapButtonDEPRECATED",["Event","Arbiter","copyProperties","CSS","Focus"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o){this._swapperButton=m;this._swappeeButton=n;g.listen(m,'click',this.swap.bind(this));if(o)g.listen(n,'click',this.unswap.bind(this));h.subscribe('SwapButtonDEPRECATED/focusOnJoinButton',this.setFocusOnSwapper.bind(this),h.SUBSCRIBE_ALL);}i(l.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(m){j.hide(this._swapperButton);j.show(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swappeeButton);},unswap:function(m){j.show(this._swapperButton);j.hide(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swapperButton);},toggle:function(){j.toggle(this._swapperButton);j.toggle(this._swappeeButton);},setFocusOnSwapper:function(){this._swapperButton.focus();}});e.exports=l;},null);
__d("HubbleContext",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={},h={get:function(i){return g[i];},getPageID:function(){return g.page&&g.page.id;},setContext:function(i){g=i;},setKey:function(i,j){g[i]=j;},reset:function(){g={};}};e.exports=h;},null);
__d("HubbleLogger",["BanzaiLogger","ErrorUtils","HubbleContext","HubbleSurfaces","arrayContains"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=null,m=null,n=null,o=null,p=Object.keys(j).map(function(r){return j[r];}),q={getStatefulFields:function(){return {pageid:i.getPageID(),platform:n,prev_section:o,section:l,surface:m};},logAction:function(r){g.log('HubbleLoggerConfig',Object.assign({},this.getStatefulFields(),{action:r}));},reset:function(){l=null;m=null;n=null;o=null;},setActiveSection:function(r){o=l;l=r;},setActiveSurface:function(r){if(!k(p,r)){h.reportError('Hubble: Invalid surface value: '+r);return;}m=r;},setPlatform:function(r){n=r;}};e.exports=q;},null);
__d("CustomCTAConstants",["fbt","CustomCallToActionConstants","CustomCallToActionTypes"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=b('CustomCallToActionTypes').TYPES,j={NO_DIALOG:'CUSTOM_CTA_DIALOG_NONE',DELETE_DIALOG:'CUSTOM_CTA_DIALOG_DELETE',EDIT_DIALOG:'CUSTOM_CTA_DIALOG_EDIT',PROMOTE_DIALOG:'CUSTOM_CTA_DIALOG_PROMOTE',UPDATE_ALERT_DIALOG:'CUSTOM_CTA_DIALOG_UPDATE_ALERT',OPEN_APP_ID:1,OPEN_WEBSITE_ID:2,SHOW_FLYOUT:'SHOW_FLYOUT',CREATE_DIALOG_WIDTH:778,CREATE_DIALOG_HEIGHT:504,PREVIEW_WIDTH:436,PREVIEW_HEIGHT:416,NEW_PREVIEW_WIDTH:412,NEW_PREVIEW_HEIGHT:346,SELECTOR_WIDTH:194,URI_TRUNCATE_LENGTH:30,WEBSITE_BAR_ITEM:'Website',IPHONE_BAR_ITEM:'iPhone',ANDROID_BAR_ITEM:'Android',CREATE_CTA_TYPE_OPTIONS:[i.BOOK_NOW,i.CONTACT_US,i.OPEN_APP,i.PLAY_NOW,i.SHOP_NOW,i.SIGN_UP,i.WATCH_NOW],PLATFORM_TYPE:'CUSTOM_CTA_PLATFORM_TYPE',WEB:h.WEB,IOS:h.IOS,ANDROID:h.ANDROID,APP_ID:h.APP_ID,FALLBACK_LINK_TYPE:h.FALLBACK_LINK_TYPE,FALLBACK_LINK:h.FALLBACK_LINK,PRIMARY_LINK:h.PRIMARY_LINK,PRIMARY_LINK_TYPE:h.PRIMARY_LINK_TYPE,FALLBACK_INSTALL_APP:'fallback_install_app',FALLBACK_GO_TO_WEBSITE:'fallback_go_to_website',API_URL:'https://graph.facebook.com/',INSIGHTS_LABEL:g._("View Insights"),EDIT_LABEL:g._("Edit call to action"),DELETE_LABEL:g._("Delete call to action"),TEST_LABEL:g._("Go to Link..."),PROMOTE_LABEL:g._("Promote"),EDIT_PROMOTION_LABEL:g._("Edit Promotion"),DELETE_DIALOG_TITLE:g._("Delete Call-to-Action Button"),DELETE_DIALOG_MESSAGE:g._("Do you really want to delete the call-to-action button from your Facebook Page?"),DELETE_DURING_PROMOTION_DIALOG_TITLE:g._("This Change Will End Your Ad"),DELETE_DURING_PROMOTION_DIALOG_MESSAGE:g._("You're currently promoting this call to action. If you delete it, your ad will end."),UPDATE_DURING_PROMOTION_DIALOG_TITLE:g._("This Change Will Affect Your Ad"),UPDATE_DURING_PROMOTION_DIALOG_MESSAGE:g._("If you update your call to action here, it will also update in your current ad. Your ad will go through the review process again."),WEBSITE_LABEL:g._("Website"),IPHONE_LABEL:g._("iPhone"),ANDROID_LABEL:g._("Android"),CREATE_LABEL:g._("Create Call to Action"),CREATE_TOOLTIP:g._("Add a button to get people to take an action from your Page such as shop or sign up"),CREATE_DIALOG_TITLE:g._("Add Call-to-Action Button"),CREATE_DIALOG_BODY_MESSAGE:g._("Add a button to your Page that takes people directly to your app or website."),CREATE_DIALOG_BODY_MESSAGE_IOS:g._("Choose where to send people when they tap the button on an iPhone or an iPad."),CREATE_DIALOG_APPLINK_MESSAGE_IOS:g._("Add an iOS deep link URL for your app."),CREATE_DIALOG_APPLINK_MESSAGE_ANDROID:g._("Add a Android deep link URL for your app."),CREATE_DIALOG_BACKUP_LINK_MESSAGE:g._("Enter where to send people who don't have the app installed. If left blank it will open the website entered in the previous screen."),CREATE_DIALOG_BODY_MESSAGE_ANDROID:g._("Choose where to send people when they tap the button on Android."),EDIT_SECTION_MESSAGE:g._("These are the destination website and app links we'll send people to after they click or tap your call-to-action button:"),EDIT_SECTION_EXAMPLE:g._("For example, you may want to send someone using a mobile device to your app, or to your website if theyre on a desktop computer."),CREATE_DIALOG_PACKAGE_NAME_MESSAGE_ANDROID:g._("Add the package name of your app"),EDIT_SECTION_APP_LINK_HELP_MESSAGE:g._("Have an app or mobile website that was not found?"),CREATE_LOADING_MESSAGE:g._("Finding websites and apps connected to your Page..."),CREATE_SELECT_CTA_LABEL:g._("Button Label"),CREATE_INVALID_WEB_LINK:g._("Invalid link or URL"),CREATE_INVALID_PACKAGE_NAME:g._("Invalid package name"),CREATE_INVALID_APP_LINK:g._("Invalid app link"),CREATE_IPHONE_DEEP_LINK_TEXT:g._("We will open the app selected above if installed"),CREATE_ANDROID_DEEP_LINK_TEXT:g._("We will open the app selected above if installed"),CREATE_INVALID_URL_LINK:g._("Invalid URL link"),EDIT_CARD_WEB_TITLE:g._("Computer"),EDIT_CARD_IOS_TITLE:g._("iPhone or other iOS device"),EDIT_CARD_ANDROID_TITLE:g._("Android phone or tablet"),EDIT_CARD_OTHER_M_TITLE:g._("Other smartphone"),EDIT_LINK_TOOLTIP:g._("Make changes to this link address"),WEB_LINK_INPUT_LABEL:g._("Website"),WEB_LINK_INPUT_PLACEHOLDER:g._("Example: {url}",[g.param("url",'www.mywebsite.com')]),MOBILE_LINK_INPUT_LABEL:g._("Mobile Website"),PACKAGE_NAME_LABEL:g._("Android Package Name"),APP_LINK_INPUT_LABEL:g._("App Link"),APP_LINK_INPUT_LABEL_TOOLTIP:g._("This is the link address people will go to after tapping or clicking on your call-to-action button"),APP_LINK_INPUT_PLACEHOLDER:g._("Enter a link to your app"),APP_DESTINATION_SELECTOR_LABEL:g._("Destination"),APP_DESTINATION_SELECTOR_LABEL_TOOLTIP:g._("Choose the type of destination you want people to go to after tapping or clicking on your call-to-action button"),FALLBACK_CTA_SELECTOR_LABEL:g._("Backup"),FALLBACK_CTA_SELECTOR_LABEL_TOOLTIP:g._("Choose the type of destination you want people to go to after tapping or clicking on your call-to-action button if they haven't yet registered or installed your app"),FALLBACK_LINK_INPUT_LABEL:g._("Backup URL"),FALLBACK_LINK_INPUT_LABEL_TOOLTIP:g._("This is the link address people will go to after tapping or clicking on your call-to-action button if they haven't yet registered or installed your app"),STORE_ID_LABEL:g._("Store ID"),STORE_ID_TOOLTIP:g._("ID of app in Apple store or Google play store"),GO_TO_WEBSITE_LABEL:g._("Go to Website"),PACKAGE_NAME_LABEL:g._("Package Name"),REVIEW_DESTINATION_LINKS_TITLE:g._("Review Button Destination Links"),CREATE_CALL_TO_ACTION_WEBSITE:g._("Create a Call-to-Action Button"),EDIT_CALL_TO_ACTION_WEBSITE:g._("Edit Call-to-Action Button"),CREATE_CALL_TO_ACTION_IPHONE:g._("Choose a Destination For People Using iOS"),CREATE_CALL_TO_ACTION_ANDROID:g._("Choose a Destination For People Using Android"),CREATE_CALL_TO_ACTION_IPAD:g._("Choose a Destination For People Using iPad"),ACTION_SELECTOR_LABEL:g._("Choose a Button"),OPTIONAL_LABEL:g._("Optional"),IOS_SECTION_TITLE:g._("iOS Destination"),ANDROID_SECTION_TITLE:g._("Android Destination"),BACKUP_LINK_LABEL:g._("Backup Destination"),DEEPLINK_LEARN_MORE_LABEL:g._("Learn how to set up a deep link"),SELECTOR_OPTION_WEBSITE:g._("Website"),SELECTOR_OPTION_APP:g._("App"),LEGEND_KEY_ORGANIC:g._("Organic"),LEGEND_KEY_PAID:g._("Paid"),THIS_WEEK_CLICK_LABEL:g._("Clicks This Week")};e.exports=j;},null);
__d("CustomCTALogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={logVital:function(i){g.post('page_custom_cta_logger',i,g.VITAL);},log:function(i){g.post('page_custom_cta_logger',i);}};e.exports=h;},null);
__d("CustomCTAUtils",["fbt","invariant","AdsCallToActionTypes","CustomCTAConstants","React","XUISelector.react","CustomCallToActionTypes"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=b('CustomCallToActionTypes').LABELS,n=b('CustomCallToActionTypes').TYPES,o=l.Option,p={executeCallToAction:function(q){window.open(q);},getFallbackSelectorOptions:function(){var q=[];q.push(k.createElement(o,{value:j.FALLBACK_GO_TO_WEBSITE},p.getFallbackLabel(j.FALLBACK_GO_TO_WEBSITE)));q.push(k.createElement(o,{value:j.FALLBACK_INSTALL_APP},p.getFallbackLabel(j.FALLBACK_INSTALL_APP)));return q;},getCallToActionSelectorOptions:function(q){var r=[];q.forEach(function(s){r.push(k.createElement(o,{key:s,value:s},p.getCallToActionLabel(s)));});return r;},getFallbackLabel:function(q){switch(q){case j.FALLBACK_INSTALL_APP:return (g._("Install Now"));case j.FALLBACK_GO_TO_WEBSITE:return (g._("Go to Website"));}},getCallToActionLabel:function(q){return m[q];},getCallToActionMobileIcon:function(q){switch(q){case n.BOOK_NOW:return '/images/discovery/entity_card_actions/custom_cta/booknow.png';case n.CONTACT_US:return '/images/discovery/entity_card_actions/custom_cta/contactus.png';case n.OPEN_APP:return '/images/discovery/entity_card_actions/custom_cta/gotoapp.png';case n.PLAY_NOW:return '/images/discovery/entity_card_actions/custom_cta/playnow.png';case n.SHOP_NOW:return '/images/discovery/entity_card_actions/custom_cta/shopnow.png';case n.SIGN_UP:return '/images/discovery/entity_card_actions/custom_cta/signup.png';case n.WATCH_NOW:return '/images/discovery/entity_card_actions/custom_cta/watchnow.png';default:h(q);}},getCallToActionIcon:function(q){switch(q){case n.BOOK_NOW:return '/images/pages/custom_cta/booknow.png';case n.CONTACT_US:return '/images/pages/custom_cta/contactus.png';case n.OPEN_APP:return '/images/pages/custom_cta/openapp.png';case n.PLAY_NOW:return '/images/pages/custom_cta/playnow.png';case n.SHOP_NOW:return '/images/pages/custom_cta/shopnow.png';case n.SIGN_UP:return '/images/pages/custom_cta/signup.png';case n.WATCH_NOW:return '/images/pages/custom_cta/watchnow.png';default:h(q);}},getTruncatedURI:function(q){if(!q||q.length<j.URI_TRUNCATE_LENGTH)return q;return q.substr(0,j.URI_TRUNCATE_LENGTH)+'...';},getAdsCallToActionType:function(q){switch(q){case n.BOOK_NOW:return i.TYPES.BOOK_TRAVEL.name;case n.OPEN_APP:return i.TYPES.USE_APP.name;case n.PLAY_NOW:return i.TYPES.PLAY_GAME.name;case n.SHOP_NOW:return i.TYPES.SHOP_NOW.name;case n.SIGN_UP:return i.TYPES.SIGN_UP.name;case n.WATCH_NOW:return i.TYPES.WATCH_VIDEO.name;default:return '';}}};e.exports=p;},null);
__d("CustomCTAViewerUnit.react",["cx","CustomCTALogger","CustomCTAUtils","PagesEventType","React","Image.react","XUIButton.react"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=k,o=n.PropTypes,p=k.createClass({displayName:"CustomCTAViewerUnit",propTypes:{borderShade:o.string,callToActionType:o.string.isRequired,cctaID:o.string.isRequired,depressed:o.bool,userID:o.string.isRequired,pageID:o.string.isRequired,size:o.string,surface:o.string.isRequired,webURL:o.string.isRequired},_onButtonClick:function(){i.executeCallToAction(this.props.webURL);h.log({event_type:j.CUSTOM_CTA_CLICK_VIEWER_UNIT,ccta_id:this.props.cctaID,user_id:this.props.userID,page_id:this.props.pageID,surface:this.props.surface,target_url:this.props.webURL,ccta_type:this.props.callToActionType});},getDefaultProps:function(){return {size:"large",borderShade:"dark"};},render:function(){var q=k.createElement("span",null,k.createElement(l,{className:"_xgc",src:i.getCallToActionIcon(this.props.callToActionType)}),i.getCallToActionLabel(this.props.callToActionType));return (k.createElement(m,{borderShade:this.props.borderShade,depressed:this.props.depressed,label:q,onClick:this._onButtonClick,size:this.props.size}));}});e.exports=p;},null);
__d("XPageTabsReorderingController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pages\/tabs\/reorder\/",{page_id:{type:"Int",required:true},__asyncDialog:{type:"Int"}});},null);
__d("PagesNavTabs",["AsyncRequest","React","XPageTabsReorderingController","XUIPageNavigation.react","XUIPageNavigationGroup.react","XUIPageNavigationItem.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o='manage_tabs',p={renderPagesNavTabs:function(q,r,s,t,u,v){var w=r.map(function(y){return (h.createElement(l,{href:y.href,key:y.key},y.label));});if(u){var x=i.getURIBuilder().setInt('page_id',v).getURI();w.push(h.createElement(l,{className:"_3ew_",key:o},n._("Manage Tabs")));}if(w.length===t+1)t++;h.render(h.createElement(j,{defaultActiveTabKey:s,onTabClick:function(y){if(y===o){new g(x).setData({rel:'dialog'}).send();return false;}return true;}},h.createElement(k,{maxTabsVisible:t},w)),q);}};e.exports=p;},null);
__d("PagesTimelineController",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={LOAD_SECTION:'PagesTimelineController/loadSection',SECTION_FULLY_LOADED:'PagesTimelineController/sectionFullyLoaded',ACTIVATE_SCRUBBER_ITEM:'PagesTimelineController/activateScrubberItem',FIRST_POSTS_LOADED:'PagesTimelineController/firstPostsLoaded',REMOVE_SECTION:'PagesTimelineController/removeSection',RECENT_SECTION_KEY:'recent',NAV_BAR_LOADED:'PagesTimelineController/navBarLoaded',ADJUST_ADS:'PagesTimelineController/adjustAds',BOTTOM_OFFSET:100,loadSection:function(i){g.inform(this.LOAD_SECTION,{section_key:i},g.BEHAVIOR_STATE);},sectionFullyLoaded:function(i){g.inform(this.SECTION_FULLY_LOADED,{section_index:i},g.BEHAVIOR_PERSISTENT);},activateScrubberItem:function(i){g.inform(this.ACTIVATE_SCRUBBER_ITEM,{section_key:i},g.BEHAVIOR_STATE);},firstPostsLoaded:function(i){g.inform(this.FIRST_POSTS_LOADED,{section_key:i},g.BEHAVIOR_STATE);},removeSection:function(i){g.inform(this.REMOVE_SECTION,{section_key:i},g.BEHAVIOR_STATE);},navBarLoaded:function(){g.inform(this.NAV_BAR_LOADED,{},g.BEHAVIOR_STATE);},adjustAds:function(){g.inform(this.ADJUST_ADS,{},g.BEHAVIOR_STATE);}};e.exports=h;},null);
__d("PagesPageletScrollColumn.react",["Arbiter","DOMContainer.react","PagesTimelineController","React","ScrollColumn.react"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=j,m=l.PropTypes,n=5,o=j.createClass({displayName:"PagesPageletScrollColumn",propTypes:{pagelets:m.object.isRequired},render:function(){var p=j.createElement(k,{ref:"scrollColumn",zIndex:n},j.createElement(h,null,this.props.pagelets));return p;},componentDidMount:function(){g.subscribe(i.NAV_BAR_LOADED,function(){g.inform(k.EVENT_SHOULD_ADJUST);}.bind(this));}});e.exports=o;},null);