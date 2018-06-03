
var onRun = function(context) {
  var doc = context.document;
  var pages = [doc pages];

  for (var i = 0; i < pages.count(); i++){
    var page = pages[i];
    // log([page name])
    // log slices :
    var addLyW = []
    var sum = 0;
    for(var k = 0; k < layers.count(); k++){
      var layer = layers[k];
      if(layer.class() == "MSSliceLayer"){
        //do something
        // log( layers[k] )
        // log( layer )
        // log( layers[k].frame() )
        var layName = [layer name]
        var layClass = layer.frame()
        var layW = layClass.width()
        var layY = layClass.y()
        if (layW === 620){
          log(`layer: ${layName} vaut une slice `)
        }else if(layW <= 620){
          log( `layer: ${layName} w:${layW} y:${layY} ` )
          sum += layW
        }
      }
      log(`sum: ${sum}`)
      // while (sum <= 620) {
      //   continue
      // }
    }
    log(addLyW)
  }

}
