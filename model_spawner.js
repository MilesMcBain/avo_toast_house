AFRAME.registerComponent("modelspawner",
{ schema: {
  size: {type: "int", default: 1},
  rate: {type: "number", default: 90},
  modelscale: {type: "vec3", default: {x: 1, y: 1, z: 1}},
  modelrotation: {type: "vec3", deault: {x: 0, y: 0, z: 0}},
  modelasset: {type: "model"}

},
 init: function()
 {
     this.counter = 0
 },
 tick: function(){
     this.counter++
     if(this.counter == this.data.rate){
        new_obj = document.createElement("a-entity")
        new_obj.setAttribute('gltf-model', this.data.modelasset)
        new_obj.setAttribute('position', this.el.object3D.position) 
        new_obj.setAttribute('scale', this.data.modelscale)
        new_obj.setAttribute('rotation', this.data.modelrotation)
        new_obj.setAttribute('dynamic-body', {})
        new_obj.setAttribute('ttl', {})
        this.el.sceneEl.appendChild(new_obj)
        this.counter = 0    
     }
 }
 
}
)