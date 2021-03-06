/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dijit/_Widget","dojox/xml/parser","dojox/wire/_base","dojox/wire/ml/util"],function(_1,_2,_3){
_1.getObject("dojox.wire.ml.Service",1);
_1.declare("dojox.wire.ml.Service",_2._Widget,{url:"",serviceUrl:"",serviceType:"",handlerClass:"",preventCache:true,postCreate:function(){
this.handler=this._createHandler();
},_handlerClasses:{"TEXT":"dojox.wire.ml.RestHandler","XML":"dojox.wire.ml.XmlHandler","JSON":"dojox.wire.ml.JsonHandler","JSON-RPC":"dojo.rpc.JsonService"},_createHandler:function(){
if(this.url){
var _4=this;
var d=_1.xhrGet({url:this.url,handleAs:"json",sync:true});
d.addCallback(function(_5){
_4.smd=_5;
});
if(this.smd&&!this.serviceUrl){
this.serviceUrl=(this.smd.serviceUrl||this.smd.serviceURL);
}
}
var _6=undefined;
if(this.handlerClass){
_6=_3.wire._getClass(this.handlerClass);
}else{
if(this.serviceType){
_6=this._handlerClasses[this.serviceType];
if(_6&&_1.isString(_6)){
_6=_3.wire._getClass(_6);
this._handlerClasses[this.serviceType]=_6;
}
}else{
if(this.smd&&this.smd.serviceType){
_6=this._handlerClasses[this.smd.serviceType];
if(_6&&_1.isString(_6)){
_6=_3.wire._getClass(_6);
this._handlerClasses[this.smd.serviceType]=_6;
}
}
}
}
if(!_6){
return null;
}
return new _6();
},callMethod:function(_7,_8){
var _9=new _1.Deferred();
this.handler.bind(_7,_8,_9,this.serviceUrl);
return _9;
}});
return _1.getObject("dojox.wire.ml.Service");
});
require(["dojox/wire/ml/Service"]);
