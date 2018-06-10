
var onRun = function(context) {
  var doc = context.document;
  var pages = [doc pages];
  log(`[doc pages][1]: ${pages[1]}`)
  var selection = context.selection;
  if(selection.count() == 0){
    doc.showMessage("Please select slices.")
  }
  log(`context.selection: ${selection}`)
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
    var arySlice = []
    var sum = 0;
    for(var k = 0; k < layers.count(); k++){
      var layer = layers[k];
      if(layer.class() == "MSSliceLayer"){
        var layName = [layer name]
        var layClass = layer.frame()
        var layW = layClass.width()
        var layY = layClass.y()
        if (layW === 620){
          log(`layer: ${layName} vaut une slice `)
          arySlice.push(layName)
        }else if(layW <= 620){
          log( `layer: ${layName} w:${layW} y:${layY} ` )
          sum += layW
        }
        log(`sum: ${sum}`)
      }
      // while (sum <= 620) {
        //   continue
        // }
      }
      log(arySlice)
    }
    
  }
  // var doc = context.document;
  // log(`context.document: ${context.document}`)
