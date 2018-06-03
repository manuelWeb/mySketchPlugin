
var onRun = function(context) {
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

    // log slices :
    for(var k = 0; k < layers.count(); k++){
      var layer = layers[k];
      if(layer.class() == "MSSliceLayer"){
        //do something
        // log( layers[k] )
        // log( layer )
        // log( layers[k].frame() )
        var layClass = layer.frame()
        var layW = layClass.width()
        var layY = layClass.y()
        var acc;
        var addLyW = []
        if (layW === 620){
          log(`layer: ${[layer name]} vaut une slice `)
        }else if(layW <= 620){
          log( `layer: ${[layer name]} w:${layW} y:${layY} ` )
          // log(`layer: ${layer} est à additionner pour arriver jusqu'à 620 `)
          // log(layW)
          // while(layer){
            //   addLyW.push(layW)
            // }
          }
        }
      }
      log(addLyW)
  }

}
