
var onRun = function(context) {
  var doc = context.document;
  // var pages = [doc pages];
  // var p0 = pages[1];
  // var artboard = [p0 artboards];
  // var art0 = artboard[0];
  // var lay = [art0 layers]
  // function showObj(obj) {
  //   return {...obj}
  // }
  // log(artboard[0])
  // log(lay)
  var selections = context.selection;
  var test = selections[0]
  var testName = [test name]
  const slice1 = test.frame().width();
  doc.showMessage(`selections.count(): ${selections.count()}`)
  log(typeof testName)
  log(typeof slice1)
  
  // var obj = {a:1, b:2, c:3};
  // var obj = context.document.selectedLayers().layers();
  // for (var prop in obj) {
    //   log(`obj.${prop} = ${obj[prop]}`);
    // }
  var createObj = function (a,b,c,d,e) {
    return {
      'name': a,
      'width': b
    }
  }
  var selection = context.selection
  for (var i = 0; i < selection.count(); i++) {
    const layer  = selection[i],
          name   = layer.name,
          width  = layer.frame().width(),
          height = layer.frame().height(),
          x      = layer.frame().x(),
          y      = layer.frame().y();
    // log('layer ' + layer.name + ' is selected.')
    // log('layerWidth ' + layer.frame().width() + ' is selected.')
    createObj(name,width,height,x,y)
  }
  log(createObj)
  // for(var key in selection) {
  //   if(myObject.hasOwnProperty(key)) {
  //     log(myObject[key])
  //   }
  // }

  // if(selections.count() === 0){
  //   doc.showMessage("Please select slices.")
  // }else{
  //   var y = [];
  //   for(var i = 0; i < selections.count(); i++) {
  //     var selection = selections[i];
  //     y.push( selection.frame().y() )

  //     if (selection.class() != "MSSliceLayer") {
  //       doc.showMessage( `Please select slices. ${[selection name]} is not a slice` )
  //     }else{
  //       // log(`name: ${[selection name]} width: ${selection.frame().width()}/height: ${selection.frame().height()}`)
  //       // log(`x: ${selection.frame().x()}/y: ${selection.frame().y()}`)
  //     }
  //   }
  //   log(`y:${y}`);
  //   let onlyUnique = (value, index, self) => self.indexOf(value) === index;
  //   log(`y.filter(): ${y.filter(onlyUnique)}`)

  // }

}