/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","../util/oo","./Stencil"],function(_1){
var _2,_3;
dojox.drawing.manager.StencilUI=dojox.drawing.util.oo.declare(function(_4){
_2=_4.surface;
this.canvas=_4.canvas;
this.defaults=dojox.drawing.defaults.copy();
this.mouse=_4.mouse;
this.keys=_4.keys;
this._mouseHandle=this.mouse.register(this);
this.stencils={};
},{register:function(_5){
this.stencils[_5.id]=_5;
return _5;
},onUiDown:function(_6){
if(!this._isStencil(_6)){
return;
}
this.stencils[_6.id].onDown(_6);
},onUiUp:function(_7){
if(!this._isStencil(_7)){
return;
}
this.stencils[_7.id].onUp(_7);
},onOver:function(_8){
if(!this._isStencil(_8)){
return;
}
this.stencils[_8.id].onOver(_8);
},onOut:function(_9){
if(!this._isStencil(_9)){
return;
}
this.stencils[_9.id].onOut(_9);
},_isStencil:function(_a){
return !!_a.id&&!!this.stencils[_a.id]&&this.stencils[_a.id].type=="drawing.library.UI.Button";
}});
return dojox.drawing.manager.StencilUI;
});
