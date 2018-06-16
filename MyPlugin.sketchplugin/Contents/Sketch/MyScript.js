// "layer", "name", "width", "height", "x", "y"
var onRun = function(context) {
  var doc = context.document;
  var selections = context.selection;
  function alert(title, message){
    var app = [NSApplication sharedApplication];
    [app displayDialog:message withTitle:title];
  }
  !selections.count() ? doc.showMessage(`Please select slice`) : doc.showMessage(` your selections: ${selections}`)
  // !selections.count() ? alert(`Please select slice`) : alert(` your selections: ${selections}`)

  class Slice_name {
    constructor(name) {
      this.name = name;
    }
  }
  class Cel {
    constructor(cel_item) {
      this.cel_item = cel_item;
    }
  }
  class Slice_size {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  // let s1 = new Slice(test.frame().height());
  // let s1Name = new Slice_name( test.name() );
  // if (test[0].frame().x() === test[1].frame().x())
  // let s1Size = new Slice_size( test.frame().width(), test.frame().height() );
  // créer une fonction qui fabrique les objets slices :
  // function creatObjSlice(selections){
    var objS = {}
    var aryS = []
    var cpt = 1;
    for(let i = 0; i < selections.count(); i++) {
      var selSlice = selections[i]
      // log(selections[i])
      // log(selSlice.frame().width())
      // (selection.class() != "")
      // log(selSlice.class())
      var curName = selSlice.name()
      // var curName = [selSlice name]
      function listerToutesLesPropriétés(o){
        var objectToInspect;
        var result = [];
        for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
          result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        }
        log(`result: ${result} `);
      }listerToutesLesPropriétés(curName)

      objS["item_"+cpt] = curName;
      aryS.push(curName)
      cpt++
      // objS["item"]["width"] += selSlice.frame().width()
      // let monObj = new Slice( selSlice.frame().height() );
    }
    log(objS.item_2)
    log(aryS)


}