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
      meshURL: 'meshes/shaggy.json',
      matParameters: {
        diffuseMapURL: 'textures/Shaggy_latest_Normls.jpg',
        specularMapURL: 'textures/Fox_specular.png',
        flexMapURL: 'textures/Fox_flex.png'
      },
      position: [0,-75,0],
      scale: 3
    });
} //end main()
