/*!CK:2806574455!*//*1429740091,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1byz+"]); }

__d("TrendingHovercard",["cx","csx","CSS","DOM","Parent","$","Banzai","Hovercard","LitestandShareAttachment","LitestandEllipsis","TrendingEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r=100,s={},t={getLinksCurrentPosition:function(u){var v=k.byClass(l(u),"_5my2");if(!v)return 0;return Number(v.getAttribute('data-position'));},registerSubtitleHack:function(u,v){var w=j.scry(u,"._6m7")[0];if(!w)return;l(v).onmouseover=function(){var x=function(){var y=o.getNumDescriptionLines(u);if(y&&y>0){i.show(w);p.add(w,y*o.getDescriptionLineHeight());l(v).onmouseover=null;}};setTimeout(x,n.getHideDelay()+r);setTimeout(x,n.getLoadingDelay()+r);};},setDialog:function(u,v,w){var x=[v.subscribe('show',function(){m.post('trending_hovercard',Object.assign({},w,{trending_event:q.HOVERCARD_LOAD}));s[u]=Date.now();}),v.subscribe('hide',function(){if(s.hasOwnProperty(u)){var y=Date.now()-s[u];if(y<0)y=0;m.post('trending_hovercard',Object.assign({},w,{time_spent:y,trending_event:q.HOVERCARD_UNLOAD}));delete s[u];}}),v.subscribe('destroy',function(){x.forEach(function(y){return y.unsubscribe();});x=null;})];n.setDialog(u,v);}};e.exports=t;},null);
__d("TrendingHovercardLogger",["TrendingHovercard","TrendingRHCLogger","XPubcontentTrendingHovercardLoggingController","AsyncRequest"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(m,n,o,p,q){var r=i.getURIBuilder().setInt('topic_id',o).setString('source',p).setInt('position',n).setInt('query_id',q).setString('event',m).getURI();new j().setURI(r).send();}var l={registerArticleForClickEvent:function(m,n,o,p,q){m.onclick=function(){var r=String(g.getLinksCurrentPosition(q));if(r>0)h.logHovercardArticleClick(r,n);k('hovercard_article_click',r,n,o,p);};},registerFeedLinkForClickEvent:function(m,n,o,p,q){m.onclick=function(){var r=String(g.getLinksCurrentPosition(q));if(r>0)h.logHovercardFeedClick(r,n);k('hovercard_feed_click',r,n,o,p);};},registerHovercardForClickEvent:function(m,n,o,p,q){m.onclick=function(){var r=String(g.getLinksCurrentPosition(q));if(r>0)h.logHovercardFeedClick(r,n);k('hovercard_context_click',r,n,o,p);};},registerShareForClickEvent:function(m,n,o,p,q){m.onclick=function(){var r=String(g.getLinksCurrentPosition(q));if(r>0)h.logHovercardShare(r,n);k('topic_share',r,n,o,p);};}};e.exports=l;},null);