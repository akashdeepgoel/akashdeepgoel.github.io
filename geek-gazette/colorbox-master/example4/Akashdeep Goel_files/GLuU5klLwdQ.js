/*!CK:182664203!*//*1431923099,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["MHrKV"]); }

__d("GamesImageSlideshow.react",["Animation","React","cx"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=h,k=j.PropTypes,l=1500,m=250,n=h.createClass({displayName:"GamesImageSlideshow",getInitialState:function(){return {previous:0,active:0};},propTypes:{image_urls:k.array.isRequired,height:k.number.isRequired,width:k.number.isRequired,autoplay:k.bool},getDefaultProps:function(){return {autoplay:false};},componentDidMount:function(){if(this.props.autoplay)this.timeout=setTimeout(this._startSlideshow,l);},componentWillUnmount:function(){this._clearInterval();},_startSlideshow:function(){if(this.running)return;this.running=true;var o=(function(){var p=(this.state.active+1)%this.props.image_urls.length,q=this.props.image_urls[p],r=new Image(),s=(function(){if(!this.running)return;this._switchImage(p);this.interval=setTimeout(o,l);}).bind(this);r.onload=s;r.src=q;}).bind(this);o();},_switchImage:function(o){this.setState({previous:this.state.active,active:o},this._fadeImage);},_fadeImage:function(){if(this.state.active!==this.state.previous){var o=h.findDOMNode(this.refs[this.state.previous]),p=h.findDOMNode(this.refs[this.state.active]);this.anims=[new g(o).from('opacity',1).to('opacity',0).duration(m).go(),new g(p).from('opacity',0).to('opacity',1).duration(m).go()];}},_clearInterval:function(){if(this.interval){clearTimeout(this.interval);this.interval=null;}},_stopSlideshow:function(){this.running=false;this._clearInterval();if(this.anims)this.anims.map(function(o){o.stop();});this._switchImage(0);},_createImage:function(o){return h.createElement("img",{ref:o,key:o,src:this.props.image_urls[o]});},_getCurrentImages:function(){var o=this.state.previous,p=this.state.active;if(o==p){return [this._createImage(o)];}else return [this._createImage(o),this._createImage(p)];},render:function(){return (h.createElement("div",{style:{height:this.props.height+'px',width:this.props.width+'px'},onMouseEnter:!this.props.autoplay?this._startSlideshow:null,onMouseLeave:!this.props.autoplay?this._stopSlideshow:null,className:"_4x1w"},this._getCurrentImages()));}});e.exports=n;},null);
__d("legacy:fusion-charts",["FusionCharts"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.FusionCharts=b('FusionCharts');},3);