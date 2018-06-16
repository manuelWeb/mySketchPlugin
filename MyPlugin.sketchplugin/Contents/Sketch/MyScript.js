function listerToutesLesPropriétés(o){
  var objectToInspect;
  var result = [];
  for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }
}
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

    var objS = {}
    var aryS = []
    var cpt = 1;
    for(let i = 0; i < selections.count(); i++) {
      var selSlice = selections[i]
      var curName = selSlice.name()

      objS["item_"+cpt]           = curName;
      objS["item_"+cpt]["width"]  = selSlice.frame().width()
      objS["item_"+cpt]["height"] = selSlice.frame().height()
      objS["item_"+cpt]["x"]      = selSlice.frame().x()
      objS["item_"+cpt]["y"]      = selSlice.frame().y()

      cpt++
    }
    alert("objS",objS.item_2.y)
    log(objS.item_2)
    log(objS.item_2.width)
    log(objS.item_2.height)

}