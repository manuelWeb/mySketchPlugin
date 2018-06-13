
var onRun = function(context) {
  var doc = context.document;
  var pages = [doc pages];
  var p0 = pages[1];
  var artboard = [p0 artboards];
  function showObj(obj) {
    return {...obj}
  }
  log(artboard[0])
  log(showObj(artboard[0]))
  // log(`[doc pages][1]: ${pages[1]}`)
  var selections = context.selection;
  if(selections.count() === 0){
    doc.showMessage("Please select slices.")
  }else{
    var y = [];
    for(var i = 0; i < selections.count(); i++) {
      var selection = selections[i];
      y.push( selection.frame().y() )

      if (selection.class() != "MSSliceLayer") {
        doc.showMessage( `Please select slices. ${[selection name]} is not a slice` )
      }else{
        // log(`name: ${[selection name]} width: ${selection.frame().width()}/height: ${selection.frame().height()}`)
        // log(`x: ${selection.frame().x()}/y: ${selection.frame().y()}`)
      }
    }
    log(`y:${y}`);
    // log(`y.filter(): ${y.filter(function(item) { return typeof item == 'number'; })}`)
    let onlyUnique = (value, index, self) => self.indexOf(value) === index;
    // log(`y.filter(): ${y.filter((item) => typeof item == item)}`)
    log(`y.filter(): ${y.filter(onlyUnique)}`)
    // if(selection.class() == "MSSliceLayer"){
    //   var layName = [selection name]
    //   var layY = layClass.y()
    //   log( `MSSliceLayer: ${layName} w:${layW} y:${layY} ` )
    // }
  }
  // for (var i = 0; i < pages.count(); i++){
  //   var page = pages[i];
  //   // log([page name])
  //   var artboards = [page artboards];
  //   // log(artboards)

  //   for (var z = 0; z < artboards.count(); z++){
  //     var artboard = artboards[z];
  //     var layers = [artboard layers];
  //   } // for z

  //   // log slices :
  //   var arySlice = []
  //   var sum = 0;
  //   for(var k = 0; k < layers.count(); k++){
  //     var layer = layers[k];
  //     if(layer.class() == "MSSliceLayer"){
  //       var layName = [layer name]
  //       var layClass = layer.frame()
  //       var layW = layClass.width()
  //       var layY = layClass.y()
  //       if (layW === 620){
  //         log(`layer: ${layName} vaut une slice `)
  //         arySlice.push(layName)
  //       }else if(layW <= 620){
  //         log( `layer: ${layName} w:${layW} y:${layY} ` )
  //         sum += layW
  //       }
  //       log(`sum: ${sum}`)
  //     }
  //     // while (sum <= 620) {
  //       //   continue
  //       // }
  //   } // for k
  //   log(arySlice)
  // } // for 1

} // onRun



  // var doc = context.document;
  // log(`context.document: ${context.document}`)
