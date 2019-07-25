"use strict";

//entry point :
function main(){
    THREE.JeelizHelper.init({
      canvasThreeId: 'webojiCanvas',
      canvasId: 'jeefacetransferCanvas',

      assetsParentPath: '../ar_exp_source/assets/3D/',
      NNCpath: '../ar_exp_source/dist/',

      //FOX :
      //meshURL: 'meshes/fox.json',
      meshURL: 'meshes/tiger.json',
      matParameters: {
        diffuseMapURL: 'textures/diffuse_tiger.jpg',
        specularMapURL: 'textures/Fox_specular.png',
        flexMapURL: 'textures/Fox_flex.png'
      },
      position: [0,-70,0],
      scale: 1.5
    });
} //end main()
