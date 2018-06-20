// import {myLog} from "./module.js"
// @see https://github.com/skpm/skpm
var UI = require('sketch/ui')
var onRun = function(context) {

  const width_prompt = UI.getStringFromUser("Width of your masterpiece", 620)
  const doc = context.document
  const selections = context.selection

  !selections.count() ? doc.showMessage(`Please select slice`) : doc.showMessage(` your selections: ${selections}`)


  const objCel = {}
  const aryS = []
  let cpt = 1;
  let allTd = {};

  class Cellules{
    constructor(name,width,height,x,y){
      this.name = name
      this.width = width
      this.height = height
      this.x = x
      this.y = y
    }
  }

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

  var acc = 0
  for (const td in allTd) {

    const allTdProp = allTd[td]
    log(`${td}: ${allTd[td].name} `)
    // log()
    if(allTdProp["width"] == width_prompt){
      log(`${allTd[td].name}.width==${allTd[td].width} Une slice une !`)
    }else if(acc < width_prompt) {
        acc += allTdProp.width
        // log(`si acc!=width_prompt->${allTd[prop]}, acc= ${acc} `)
    }else if(acc == width_prompt){
      log(`une slice une…`)
      log(`ok acc====${width_prompt} alors on le remet a 0`)
    }else{
      acc = 0
    }

  }

  // si la td != width_prompt et que la suivante à une val y != alors c'est une table imbriquée
  // log(listerToutesLesPropriétés(objCel.td_1))
}
