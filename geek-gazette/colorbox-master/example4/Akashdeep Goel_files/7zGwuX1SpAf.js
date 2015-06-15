/*!CK:2820490539!*//*1431920885,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["oDBwF"]); }

__d("InputAutoCapitalize",["CurrentLocale","Event","Input"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={enable:function(k,l){var m=h.listen(k,'keyup',function(){if(!i.isEmpty(k)){var n=i.getValue(k);l=l||g.get();if(l=='tr_TR'&&n.substr(0,1)=='i'){i.setValue(k,"\u0130"+n.substr(1));}else i.setValue(k,n.substr(0,1).toLocaleUpperCase()+n.substr(1));m.remove();}});}};e.exports=j;},null);
__d("ComposerXPlusTaggerWithOG",["ComposerXOGTaggerBehavior","ComposerXPlusTagger","classWithMixins","mixin"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=i(h,j(g));for(var l in k)if(k.hasOwnProperty(l))n[l]=k[l];var m=k===null?null:k.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=k;function n(){"use strict";if(k!==null)k.apply(this,arguments);}n.prototype.init=function(o){"use strict";m.init.call(this,o);this.initOGTagger(o);};n.prototype.cleanup=function(){"use strict";m.cleanup.call(this);this.cleanupOGTagger();};e.exports=n;},null);
__d("ComposerXInstanceResetter",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){h.instance.reset();}e.exports=g;},null);
__d("FileFormDisableInFlight",["Form"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";this._form=i;}h.prototype.enable=function(){"use strict";this._subscription=this._form.subscribe(['submit','initial'],this._handle.bind(this));};h.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};h.prototype._handle=function(i){"use strict";if(i==='submit'){setTimeout(g.setDisabled.bind(null,this._form.getRoot(),true),0);}else g.setDisabled(this._form.getRoot(),false);};e.exports=h;},null);
__d("XFamilyBulkTagAddAsyncController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/family\/bulk_tag_save\/",{subject:{type:"Int"},save_tags:{type:"String"}});},null);
__d("PhotoTagStore",["AsyncRequest","XFamilyBulkTagAddAsyncController","copyProperties","isEmpty"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(){"use strict";this._tagList={};this._textTagList={};this._originalTagList={};this._dirtyPhotosByUid={};k.instance=this;}k.prototype.getPhotoTags=function(l){"use strict";return this._tagList[l]||{};};k.prototype.photoHasTags=function(l){"use strict";return !j(this.getPhotoTags(l));};k.prototype.clear=function(){"use strict";this._tagList={};this._textTagList={};this._originalTagList={};this._dirtyPhotosByUid={};};k.prototype.addTag=function(l,m,n,o){"use strict";l[m]=l[m]||{};var p=l[m][n]||[];p.push(o);l[m][n]=p;};k.prototype.revert=function(l){"use strict";var m=this._tagList,n=this._originalTagList;for(var o in m)if(j(n[o][l])){m[o][l]=[];}else m[o][l]=n[o][l];this._dirtyPhotosByUid={};};k.prototype.hasNewTags=function(){"use strict";return !j(this._tagList)||!j(this._textTagList);};k.prototype.userHasDirtyTags=function(l){"use strict";return !j(this._dirtyPhotosByUid[l]);};k.prototype.userDirtyTagsCount=function(l){"use strict";return Object.keys(this._dirtyPhotosByUid[l]).length;};k.prototype.handleTagFetch=function(l){"use strict";for(var m in l)this.loadTagInfo(m,l[m]);};k.prototype.saveAlbumTagsForUser=function(l,m,n){"use strict";var o={},p=[],q=this._dirtyPhotosByUid[l]||{};for(var r in q){var s=this._tagList[r][l];if(j(s)){p[p.length]=r;continue;}s.forEach(function(v){o[r]={x:v.x,y:v.y};});}var t={subject:l,action:'save',save_tags:o},u='/ajax/photos/album/tags.php';if(n){t={subject:l,save_tags:JSON.stringify(o)};u=h.getURIBuilder().getURI();}new g().setURI(u).setData(t).setHandler(function(v){m(v.payload);}).setAllowCrossPageTransition(true).send();delete this._dirtyPhotosByUid[l];};k.prototype.getTagsFromList=function(l){"use strict";var m=[];for(var n in l)if(l.hasOwnProperty(n))for(var o in l[n])if(l[n].hasOwnProperty(o))l[n][o].forEach(function(p){return m.push(p);});return m;};k.prototype.getAllTags=function(){"use strict";var l=this.getTagsFromList(this._tagList),m=this.getTagsFromList(this._textTagList);return l.concat(m);};k.prototype.removeTag=function(l,m){"use strict";var n=this._tagList[l],o=this._originalTagList[l]||{};if(o[m]){this._dirtyPhotosByUid[m]=this._dirtyPhotosByUid[m]||{};this._dirtyPhotosByUid[m][l]=true;}else delete this._dirtyPhotosByUid[m][l];for(var p in n)if(p==m){var q=this._tagList[l][p];delete this._tagList[l][p];if(j(this._tagList[l]))delete this._tagList[l];return q;}};k.prototype.removeTextTag=function(l,m){"use strict";var n=this._textTagList[l];if(!j(n[m])){var o=this._textTagList[l][m];this._textTagList[l][m]=[];if(j(this._textTagList[l]))delete this._textTagList[l];return o;}return [];};k.prototype.removeAllNewTagsOfUser=function(l){"use strict";var m=[];if(!this.userHasDirtyTags(l))return m;var n=this._dirtyPhotosByUid[l];for(var o in n)m=m.concat(this.removeTag(o,l));return m;};k.prototype.removeAllTagsFromPhoto=function(l){"use strict";var m=[];if(!j(this._tagList[l]))for(var n in this._tagList[l]){if(!this._tagList[l].hasOwnProperty(n))continue;m=m.concat(this.removeTag(l,n));}if(!j(this._textTagList[l]))for(var o in this._textTagList[l]){if(!this._textTagList[l].hasOwnProperty(o))continue;m=m.concat(this.removeTextTag(l,o));}return m;};k.prototype.storeTag=function(l,m,n,o,p){"use strict";this.storeTagWithOptions(l,m,n,o,{can_remove:p});};k.prototype.storeTagWithOptions=function(l,m,n,o,p){"use strict";this._dirtyPhotosByUid[m]=this._dirtyPhotosByUid[m]||{};this._dirtyPhotosByUid[m][l]=true;var q={x:n,y:o};i(q,p);if(!m){this.addTag(this._textTagList,l,q.name,q);}else this.addTag(this._tagList,l,m,q);};k.prototype.loadTagInfo=function(l,m){"use strict";this._tagList[l]={};this._originalTagList[l]={};for(var n=0;n<m.length;n++){var o=m[n];this.addTag(this._tagList,l,o.subject,o);this.addTag(this._originalTagList,l,o.subject,o);}};k.getInstance=function(){"use strict";if(k.instance===null)new k();return k.instance;};k.instance=null;e.exports=k;},null);