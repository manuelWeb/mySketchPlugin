// import {myLog} from "./module.js"
// @see https://github.com/skpm/skpm
var UI = require('sketch/ui')

// var Document = require('sketch/dom').Document
// var document_ = require('sketch/dom').getSelectedDocument()
// var document_ = Document.getSelectedDocument()
// var selection = document_.selectedLayers
// selection.forEach(layer => log(layer.name))

var onRun = function(context) {
  // const width_prompt = UI.getStringFromUser("Width of your masterpiece", 620)
  const doc = context.document
  const selections = context.selection
  var pages = [doc pages];
  var artwidth = 0;
  for (var i = 0; i < pages.count(); i++)
  {
      var page = pages[i];
      // log([page name])
      var artboards = [page artboards];
      log(artboards[0])
      log(artboards[0].frame().width())
      artwidth = artboards[0].frame().width()
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

  let accWidth = 0
  let accTd    = {}
  let cptS     = 1
  let test = {}
  let test2 = []

  function isSlice(td) {
    var w = td.width;
    var sliceNum = "slice_" + cptS
    switch (true) {
      case (w === artwidth || accWidth === artwidth):
        // accTd = { 'slice':sliceNum }
        accTd[sliceNum] = {'name':td.name}
        cptS ++
        accWidth = 0
        log(`une slice:${sliceNum} yeah, td.name: ${td.name} `)
        break;
        case (w < artwidth):
        // accTd["slice___"+cptS] = {'name':td.name}
        log(`slice___${cptS}->${td.name} `)
        accWidth += w;
        test2.push(td)
        test[sliceNum] = td.name
        if(accWidth === artwidth){
          log(`une autre slice:${td.name} slice_${cptS} `)
          cptS ++
        }
        break;
      // default:
      //   break;
    }
  }
  for (const td in allTd) {
    const currentTd = allTd[td]
    isSlice(currentTd)
    // log(`${td}: ${currentTd.name} `);
  }
  log(`obj accTd `);log(accTd);
  log(test);log(test2)
  // for (const key in test) {
  // }

  // si la td != width_prompt et que la suivante à une val y != alors c'est une table imbriquée
  // log(listerToutesLesPropriétés(objCel.td_1))
}
