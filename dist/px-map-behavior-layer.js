'use strict';(function(){'use strict';var Layer={properties:{layerInstance:{type:Object,notify:true,readOnly:true}},observers:['_attachLayer(layerInstance)'],attached:function attached(){if(!this.layerInstance){this._callCreateLayer()}},detached:function detached(){if(this.layerInstance){this._tryToCallLifecycleHook('_detachLayer')}},ensureLayerAttached:function ensureLayerAttached(){if(this.layerInstance){this._callAttachLayer()}},_callCreateLayer:function _callCreateLayer(){if(!this._createLayer&&typeof this._createLayer!=='function'){this._failedToCreateLayer('The `_createLayer` method is not defined or is not a function.');return}this._tryToCallLifecycleHook('_beforeCreateLayer');var layer=this._createLayer();if(!layer||!layer.addTo||typeof layer.addTo!=='function'){this._failedToCreateLayer('The `_createLayer` method did not return a valid layer instance.');return}this._setLayerInstance(layer);this._tryToCallLifecycleHook('_afterCreateLayer')},_callAttachLayer:function _callAttachLayer(){if(!this._attachLayer&&typeof this._attachLayer!=='function'){this._failedToAttachLayer('The `_attachLayer` method is not defined or is not a function.');return}var parent=this._attachLayer();if(!parent||!this.layerInstance){return}if(!parent.hasLayer(this.layerInstance)){this.layerInstance.addTo(parent);this._tryToCallLifecycleHook('_afterAttachLayer')}},_tryToCallLifecycleHook:function _tryToCallLifecycleHook(lifecycleName){if(this[lifecycleName]&&typeof this[lifecycleName]==='function'){this[lifecycleName].call(this)}},_failedToCreateLayer:function _failedToCreateLayer(errorMsg){if(console&&typeof console.log==='function'){var errToPrint=errorMsg||'';console.log('[PX-MAP-BEHAVIOR-LAYER] ERROR: The layer could not be created.');console.log(errToPrint)}},_failedToAttachLayer:function _failedToAttachLayer(errorMsg){if(console&&typeof console.log==='function'){var errToPrint=errorMsg||'';console.log('[PX-MAP-BEHAVIOR-LAYER] ERROR: The layer could not be attached.');console.log(errToPrint)}}};var namespace=window.PxMapBehavior=window.PxMapBehavior||{};namespace.Layer=Layer})();
//# sourceMappingURL=px-map-behavior-layer.js.map