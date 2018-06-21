// import {myLog} from "./module.js"
// @see https://github.com/skpm/skpm
var UI = require('sketch/ui')

// var Document = require('sketch/dom').Document
// var document_ = require('sketch/dom').getSelectedDocument()
// var document_ = Document.getSelectedDocument()
// var selection = document_.selectedLayers
// selection.forEach(layer => log(layer.name))

var onRun = function(context) {
  const width_prompt = UI.getStringFromUser("Width of your masterpiece", 620)
  const doc = context.document
  const selections = context.selection
  
  
  var pages = [doc pages];
  for (var i = 0; i < pages.count(); i++){
      var page = pages[i];
      // log([page name])
      var artboards = [page artboards];
      log(artboards[0])
    }
    
// also exposed on Document

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
    // cp sous objet td dans allTd
    allTd["td_"+cpt] = objCel_;
    cpt++
  }

  var acc = 0
  for (const td in allTd) {

    const currentTd = allTd[td]

    log(`${td}: ${currentTd.name} `)

    if(currentTd["width"] == width_prompt){
      log(`${currentTd.name}.width==${currentTd.width} Une slice une !`)
    }else if(acc < width_prompt) {
      log(`acc:${acc} < w_prompt:${width_prompt}`)
      log(`acc:${acc} += currentTd.width:${currentTd.width} => ${acc} + ${currentTd.width} = ${acc+currentTd.width} `)
      acc += currentTd.width
      if(acc == width_prompt) {
        log(`une slice une…`)
      }
    }else if(acc == width_prompt){
      log(`ok acc====${width_prompt} alors on le remet a 0`)
    }else{
      acc = 0
    }

  }

  // si la td != width_prompt et que la suivante à une val y != alors c'est une table imbriquée
  // log(listerToutesLesPropriétés(objCel.td_1))
}
