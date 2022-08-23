// Registering component in Target.js

AFRAME.registerComponent("flying-birds", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables     
        var posX = Math.floor(Math.random() * 3000 + (-1000));      
        var posY = Math.floor(Math.random() * 2 + (-1));
        var posZ = Math.floor(Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.flyingBirds(id, position);
      }
    },
  
    flyingBirds: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var birdEL = document.createElement("a-entity");
  
      birdEL.setAttribute("id", id);
      birdEL.setAttribute("position", position);
      
      birdEL.setAttribute("scale", { x: 500, y: 500, z: 500 }); 
      birdEL.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

      //animated models 
      birdEL.setAttribute("animation-mixer", {});
      
      terrainEl.appendChild(birdEL);
    }
  });
  
  