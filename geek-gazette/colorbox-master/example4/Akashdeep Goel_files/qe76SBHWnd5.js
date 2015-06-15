/*!CK:2272651492!*//*1431324103,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8LJuJ"]); }

__d("PubContentTrendingUnitEllipsis",["DOM","DOMDimensions","concatMap","createArrayFromMixed","getElementText"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l,m={add:function(p,q,r){r=r||p;g.scry(p,'br').forEach(g.remove);var s=h.getElementDimensions(r).height;if(s<=q)return p;var t,u='...',v=o(p),w=v.length-1,x=k(v[w]);while(w>=0&&s>q){t=Math.max(x.lastIndexOf(' '),x.lastIndexOf('\n'));if(t===-1)t=x.length-u.length-1;if(t<=0){n(v[w],'');w--;x=k(v[w]);}else{x=x.substr(0,t).trimRight()+u;n(v[w],x);}s=h.getElementDimensions(r).height-1;}}};function n(p,q){l=l||(p.textContent!=null?'textContent':'innerText');p[l]=q;}function o(p){if(g.isTextNode(p))return [p];return i(o,j(p.childNodes));}e.exports=m;},null);
__d("PubContentTrendingUnitTruncation",["DOM","PubContentTrendingUnitEllipsis","Style","csx"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k,l={truncate:function(m){var n=g.scry(m,"._5v9v"),o=n[n.length-1];if(o){if(k===(void 0)){var p=g.find(m,"._uhk");k=i.getFloat(p,'maxHeight');}var q=g.find(m,"._5r--");h.add(o,k,q);}}};e.exports=l;},null);
__d("XPubcontentTrendingSeeMoreController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/see_more\/",{topic_ids:{type:"IntVector",defaultValue:[]},position:{type:"Int",required:true}});},null);
__d("NewPubcontentTrendingUnitToggle",["AsyncRequest","CSS","DOM","Event","PubContentTrendingUnitTruncation","XPubcontentTrendingSeeMoreController","Run","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=false,q=[],r,s;function t(){if(r){r.remove();r=null;}if(s){s.remove();s=null;}}var u={listenForToggle:function(v,w,x,y,z,aa){function ba(){t();p=true;if(y)h.addClass(y,"_24gw");if(w)h.hide(w);if(x)h.show(x);z.forEach(function(da){q.push(da);});var ca=(l.getURIBuilder()).setIntVector('topic_ids',q).setInt('position',aa).getURI();new g().setURI(ca).setHandler(function(){if(x)h.hide(x);i.scry(v,"._5my1").forEach(function(da){k.truncate(da);});}).send();}if(y)r=j.listen(y,'click',ba);if(w)s=j.listen(w,'click',ba);m.onLeave(t);},isToggled:function(){return p;},addTopicID:function(v){q.push(v);}};e.exports=u;},null);
__d("XPubcontentTrendingReplaceTrendsController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/trending_unit\/",{is_expanded:{type:"Bool",defaultValue:false}});},null);
__d("PubcontentTrendingUnitRefresh",["AsyncRequest","NewPubcontentTrendingUnitToggle","XPubcontentTrendingReplaceTrendsController","setTimeout"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={refreshTrendingUnitWithDelay:function(l){var m=l*1000;j(function(){var n=h.isToggled(),o=(i.getURIBuilder()).setBool('is_expanded',n).getURI();new g().setURI(o).send();},m);}};e.exports=k;},null);
__d("TrendingRHCLogger",["AsyncSignal","CSS","Event","Parent","Run","BanzaiScuba","TrendingRHCConfig","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o,p,q,r,s,t,u,v,w=3,x=false;function y(da,ea,fa,ga){var ha=new l('trending_rhc',null,{sampleRate:m.sample_rate});ha.addNormal('country',s);ha.addNormal('post_search_trending_feeds',m.post_search_trending_feeds);ha.addNormal('event',ea);ha.addNormal('position',da);ha.addNormal('qe_group',p);var ia=da<=w?q:v;ha.addNormal('source',ia);ha.addNormVector('categories',fa);ha.addNormal('topic_id',ga);ha.post();}function z(da,ea){var fa=da.getAttribute('data-position');if(!fa)return;var ga=da.getAttribute('data-categories'),ha=ga?JSON.parse(ga):[],ia=da.getAttribute('data-topicid');y(fa,ea,ha,ia);}function aa(event){var da=null,ea=event.getTarget(),fa=j.byClass(event.getTarget(),"_2w2e");if(fa){ea=fa;}else if(!h.hasClass(ea,"_5my2")){da=j.byClass(ea,"_4_nl");ea=j.byClass(ea,"_5my2");}if(!ea||da||h.hasClass(event.getTarget(),"_19_3")||h.hasClass(event.getTarget(),"_1k6k"))return;z(ea,'click');var ga=ea.getAttribute('data-position');if(ga==='seemore'||ga==='trendingheader')x=true;}function ba(){if(!o)return;new g('/ajax/pubcontent/trending_rhc/log_hidden',{keys:JSON.stringify(o),source:v,scores:JSON.stringify(t),query_id:u}).send();o=null;}var ca={init:function(da,ea){q=ea.source;p=ea.qe_group;s=ea.country;o=ea.hidden_keys;r=ea.query_id;t=ea.hidden_scores;var fa=i.listen(da,'click',aa);k.onLeave(function(){fa.remove();});},initSeeMore:function(da,ea,fa,ga,ha){o=ea;t=fa;u=ga;v=ha;var ia=i.listen(da,'click',aa);if(x){ba();}else x=false;k.onLeave(function(){ia.remove();});},logHovercardArticleClick:function(da,ea){y(da,'hover_article_click',null,ea);},logHovercardFeedClick:function(da,ea){y(da,'hover_feed_click',null,ea);},logHovercardShare:function(da,ea){y(da,'topic_share',null,ea);},logImpression:function(da){z(da,'imp');},getSource:function(){return q;},getQueryID:function(){return r;},getSeeMoreSource:function(){return v;},getSeeMoreQueryID:function(){return u;}};e.exports=ca;},null);
__d("XPubcontentTrendingHideConfirmController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/hide_confirm\/",{hidden_topic_id:{type:"Int",required:true},position:{type:"Int",defaultValue:0},reason:{type:"Int",required:true},source:{type:"String"},trqid:{type:"Int",defaultValue:-1}});},null);
__d("XPubcontentTrendingInsertItemController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/trending\/hide_options\/",{num_removed_topics:{type:"Int",defaultValue:0},trending_topic_id:{type:"Int",required:true},topic_ids:{type:"IntVector",defaultValue:[]}});},null);
__d("TrendingRHCHideForDeferredSeemore",["AsyncRequest","CSS","DOM","DOMQuery","Event","PubContentTrendingUnitTruncation","TrendingRHCLogger","URI","XPubcontentTrendingHideConfirmController","XPubcontentTrendingInsertItemController","csx","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t,u,v=false,w=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function x(da){h.removeClass(da,"_4_ni");}function y(da){da.sort(function(ea,fa){var ga=Number(ea.getAttribute('data-position')),ha=Number(fa.getAttribute('data-position'));if(ga&&ha)return ga<ha?-1:1;return 0;});return da;}function z(da,ea){var fa=j.scry(da,"._5my2"),ga=fa.filter(function(ia){var ja=Number(ia.getAttribute('data-position'));return ja>=ea;}),ha=[];ga.forEach(function(ia){var ja=Number(ia.getAttribute('data-position'));ia.setAttribute('data-position',ja-1);var ka=j.scry(ia,"._7ge");ka.forEach(function(la){var ma=new n(la.getAttribute('href')).addQueryData('position',ja-1);ha.push({link:la,uri:ma.toString()});});});ha.forEach(function(ia){var ja=ia.link;ja.setAttribute('href',ia.uri);});u++;}function aa(da,ea){var fa=da[0],ga=da.filter(function(ha){return !h.hasClass(ha,"_5my1");});if(ga&&ga[0])h.addClass(ga[0],"_5my1");h.addClass(fa,"_4_ni");h.show(fa);m.logImpression(fa);w.forEach(function(event){fa.addEventListener(event,function(){l.truncate(fa);});});}function ba(da,ea){var fa=j.find(da,"^._5mym"),ga=j.scry(fa,"._5my2.hidden_elem");ga=y(ga);var ha=j.find(da,"^._5my2"),ia=i.create('div',{className:"_4_nj"});if(ga.length>=1)aa(ga,ha);var ja=Number(ha.getAttribute('data-position'));z(fa,ja);i.replace(ha,ia);var ka=(o.getURIBuilder()).setInt('reason',da.firstChild.value).setInt('hidden_topic_id',ea).setInt('position',ja);if(m.getSource())ka.setString('source',m.getSource());if(m.getQueryID())ka.setInt('trqid',m.getQueryID());var la=ka.getURI();new g().setURI(la).setRelativeTo(da).send();}var ca={initializeTrendingTopics:function(da){t=da;u=0;},addTopicID:function(da){if(t)t.push(da);},addTopicIDs:function(da){if(t)da.forEach(function(ea){t.push(ea);});},confirmHide:function(da,ea){var fa=false;s(k.listen(da,'click',function(){setTimeout(function(){if(fa)return;fa=true;ba(da,ea);},100);}));},listenForHide:function(da,ea){s(k.listen(da,'click',function(){var fa=j.find(da,"^._5my2");x(fa);var ga=j.find(fa,"._4_nl"),ha=j.find(fa,"._4_nm");h.hide(ha);h.show(ga);if(!v){v=true;var ia=(p.getURIBuilder()).setInt('trending_topic_id',ea).setIntVector('topic_ids',t).setInt('num_removed_topics',u).getURI();new g().setURI(ia).setRelativeTo(da).setHandler(function(){v=false;}).send();}}));},listenForUndo:function(da){var ea=j.find(da,"._4_nn");s(k.listen(ea,'click',function(){var fa=j.find(da,"^._5my2 ._4_nm");h.hide(da);h.show(fa);var ga=j.scry(fa,"^._5myl ._4loq");i.remove(ga[ga.length-1]);t.pop();}));},hideSeeMoreLink:function(){var da=j.scry(document,"a._5my9");if(da&&da.length>0&&!h.hasClass(da[0],'hidden_elem'))h.addClass(da[0],"_4_nk");}};e.exports=ca;},null);