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
    let allTd = {};
    function Cellules(name,width,height,x,y) {
      this.name = name
      this.width = width
      this.height = height
      this.x = x
      this.y = y
    }
    // Cellules.prototype.pushTd = function () {
    //   return this.name
    // }
    for(let i = 0; i < selections.count(); i++) {
      const selSlice = selections[i]
      const curName = selSlice.name()
      const objCel_ = new Cellules(
        curName,
        selSlice.frame().width(),
        selSlice.frame().height(),
        selSlice.frame().x(),
        selSlice.frame().y()
      )
      
      objCel["td_"+cpt]           = curName
      objCel["td_"+cpt]["width"]  = selSlice.frame().width()
      objCel["td_"+cpt]["height"] = selSlice.frame().height()
      objCel["td_"+cpt]["x"]      = selSlice.frame().x()
      objCel["td_"+cpt]["y"]      = selSlice.frame().y()
      
      allTd["td_"+cpt] = objCel_;
      cpt++
    }
    // log(`allTd.td_1:${allTd.td_1} `)
    for (const prop in allTd) {
      log(`prop: ${prop} `)
      log(allTd[prop])
    }
    // log(allTd)
    var acc = 0
    for (const prop in objCel) {
      // log(`objCel.${prop} = ${objCel[prop]}, y:${objCel[prop]["y"]} `)
      // obj td
      const objCelProp = objCel[prop]
      log(`objCel.${prop} = ${objCel[prop]}`)
      if(objCelProp["width"] == 620){
        log(`objCel==620: ${objCel[prop]}`)
        log(`une slice une…`)
      }else if(acc < 620) {
          acc += objCelProp["width"]
          if(acc==620){
            log(`une slice une…`)
          }
          // log(`si acc!=620->${objCel[prop]}, acc= ${acc} `)
      }else{
        log(`ok acc=620 alors on le remet a 0`)
        acc = 0
      }
        // log(`objCel!=620: ${objCel[prop]}`)
    }
    // attributs td
    // for(const attr in objCelProp){
    //   log(`objCelProp.${attr}->${objCelProp[attr]} `)
    // }
    // si la td != 620 et que la suivante à une val y != alors c'est une table imbriquée
  // log(listerToutesLesPropriétés(objCel.td_1))
}