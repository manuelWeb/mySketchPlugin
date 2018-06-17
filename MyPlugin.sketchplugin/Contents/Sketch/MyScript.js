// import {myLog} from "./module.js"
// @see https://github.com/skpm/skpm
function listerToutesLesPropriétés(o){
  var objectToInspect;
  var result = [];
  for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }
  return result;
}
var onRun = function(context) {

  const doc = context.document;
  const selections = context.selection;

  !selections.count() ? doc.showMessage(`Please select slice`) : doc.showMessage(` your selections: ${selections}`)

    const objCel = {}
    const aryS = []
    let cpt = 1;
    for(let i = 0; i < selections.count(); i++) {
      const selSlice = selections[i]
      const curName = selSlice.name()

      objCel["td_"+cpt]           = curName;
      objCel["td_"+cpt]["width"]  = selSlice.frame().width()
      objCel["td_"+cpt]["height"] = selSlice.frame().height()
      objCel["td_"+cpt]["x"]      = selSlice.frame().x()
      objCel["td_"+cpt]["y"]      = selSlice.frame().y()

      cpt++
    }
    // alert("objCel",Object.keys(objCel))
    // alert("objCel",Object.keys(objCel.td_1))
    log(Object.keys(objCel))
    log(Object.keys(objCel.td_1))
    log(objCel.td_2)

    for (const prop in objCel) {
      // log(`objCel.${prop} = ${objCel[prop]}, y:${objCel[prop]["y"]} `)
      // obj td
      const objCelProp = objCel[prop]
      log(`objCel.${prop} = ${objCel[prop]}`)
      // attributs td
      for(const prop in objCelProp){
        if(objCelProp["width"] == 620){
          log(`objCel==620: ${objCelProp}`)
        }
        log(`objCelProp.${prop}->${objCelProp[prop]} `)
      }
    }
    // si la td != 620 et que la suivante à une val y != alors c'est une table imbriquée
  // log(listerToutesLesPropriétés(objCel.td_1))

}