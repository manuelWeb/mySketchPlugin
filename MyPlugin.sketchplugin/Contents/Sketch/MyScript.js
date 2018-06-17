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

    var acc = 0
    for (const prop in objCel) {
      // log(`objCel.${prop} = ${objCel[prop]}, y:${objCel[prop]["y"]} `)
      // obj td
      const objCelProp = objCel[prop]
      log(`objCel.${prop} = ${objCel[prop]}`)
      if(objCelProp["width"] == 620){
        log(`objCel==620: ${objCel[prop]}`)
      }else{
        if(acc < 620) {
          acc += objCelProp["width"]
          log(`si acc!=620->${objCel[prop]}, acc= ${acc} `)
        }else{
          log(`ok acc=620 alors on le remet a 0`)
          acc = 0
        }
        log(`objCel!=620: ${objCel[prop]}`)
      }
      // attributs td
      for(const attr in objCelProp){
        log(`objCelProp.${attr}->${objCelProp[attr]} `)
      }
    }
    // si la td != 620 et que la suivante à une val y != alors c'est une table imbriquée
  // log(listerToutesLesPropriétés(objCel.td_1))

}