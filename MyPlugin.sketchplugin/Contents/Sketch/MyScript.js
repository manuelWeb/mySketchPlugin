// import {myLog} from "./module.js"
// @see https://github.com/skpm/skpm
var onRun = function(context) {

  const doc = context.document;
  const selections = context.selection;

  !selections.count() ? doc.showMessage(`Please select slice`) : doc.showMessage(` your selections: ${selections}`)
  // !selections.count() ? alert(`Please select slice`) : alert(` your selections: ${selections}`)

    const objS = {}
    const aryS = []
    let cpt = 1;
    for(let i = 0; i < selections.count(); i++) {
      const selSlice = selections[i]
      const curName = selSlice.name()

      objS["item_"+cpt]           = curName;
      objS["item_"+cpt]["width"]  = selSlice.frame().width()
      objS["item_"+cpt]["height"] = selSlice.frame().height()
      objS["item_"+cpt]["x"]      = selSlice.frame().x()
      objS["item_"+cpt]["y"]      = selSlice.frame().y()

      cpt++
    }
    // alert("objS",Object.keys(objS))
    // alert("objS",Object.keys(objS.item_1))
    log(Object.keys(objS))
    log(Object.keys(objS.item_1))
    log(objS.item_2)
    log(objS.item_2.width)
    log(objS.item_2.height)

    for (const prop in objS) {
      log(`obj.${prop} = ${objS[prop]},
y:${objS[prop]["y"]} `)
    }

}