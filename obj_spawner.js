AFRAME.registerComponent("objectspawner",
{ schema: {
  size: {type: "int", default: 1},
  rate: {type: "number", default: 90},
  mixinname: {type: "string"}
},
 init: function()
 {
     this.counter = 0
 },
 tick: function(){
     this.counter++
     if(this.counter == this.data.rate){
        new_obj = document.createElement("a-entity")
        new_obj.setAttribute('mixin', this.data.mixinname)
        new_obj.setAttribute('position', this.el.object3D.position) 
        this.el.sceneEl.appendChild(new_obj)
        this.counter = 0    
     }
 }
 
}
)