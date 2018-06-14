
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
  var sliceLayout = ["layer", "name", "width", "height", "x", "y"]
  class Slice {

    constructor(attribut, value) {
      this.attribut = attribut;
      this.value = value;
    }
    present() {
      // log(`attribut: ${this.attribut} value: ${this.value} `)
      return {
        "attribut": this.attribut,
        "value": this.value
      }
    }

  }
  let width = new Slice("width", test.frame().width());
  let height = new Slice("height", test.frame().height());
  // john.present();  width.present(): ${width.present()}
  log(width.present())
  log(`width.attr: ${width.attribut}, width.value: ${height.value}, height.attr: ${height.attribut}, height.value: ${height.value} `)
  log(`test.frame().x():${test.frame().x()},test.name():${test.name()},`)

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