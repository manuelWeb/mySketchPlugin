
var onRun = function(context) {
  // //reference the Sketch Document
  // var doc = context.document;
  // //reference all the pages in the document in an array
  // var pages = [doc pages];
  // //loop through the pages of the document
  // for (var i = 0; i < pages.count(); i++){
    //   //reference each page
    //   var page = pages[i];
    //   //get the name of the page
    //   var pageName = [page name];
    //   //show the page name in the console
    //   log(pageName);
    // }
    var doc = context.document;
    var pages = [doc pages];

  for (var i = 0; i < pages.count(); i++){
    var page = pages[i];
    // log([page name])
    var artboards = [page artboards];
    // log(artboards)
    for (var z = 0; z < artboards.count(); z++){
      var artboard = artboards[z];
      var layers = [artboard layers];
    }

    // // log all layers & filtre MSShape
    // log(layers.length)
    // for (var l = 0; l < layers.count(); l++) {
    //   var layer = layers[l];
    //   if(layer.class() == "MSShapeGroup"){
    //     // log(`MSShapeGroup: ${layers[l]}`)
    //     log(layers[l])
    //   }
    // }

    // log slices :
    for(var k = 0; k < layers.count(); k++){
      var layer = layers[k];
      if(layer.class() == "MSSliceLayer"){
        //do something
        // log( layers[k] )
        log( layer )
        // log( layers[k].frame() )
        var layClass = layer.frame()
        var layW = layClass.width()
        var layY = layClass.y()
        log( `w: ${layW} y:${layY} ` )
        if (layW === 620){
          log(`layer: ${layer} vaut une slice `)
        }else if(layW <= 620){
          log(`layer: ${layer} est à additionner pour arriver jusqu'à 620 `)
          // while(layW !== 620){
          // }
        }
      }

    }
  }

}
