// import {myLog} from "./module.js"
// @see https://github.com/skpm/skpm
var UI = require('sketch/ui')
var onRun = function(context) {
  // const width_prompt = UI.getStringFromUser("Width of your masterpiece", 620)
  const doc = context.document
  const selections = context.selection
  var pages = [doc pages];
  var artwidth = 0;
  for (var i = 0; i < pages.count(); i++)
  {
      var page = pages[i];
      var artboards = [page artboards];
      artwidth = artboards[0].frame().width()
  }

// also exposed on Document

  !selections.count() ? doc.showMessage(`Please select slice`) : doc.showMessage(` your selections: ${selections}`)

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

  function isSlice(index, td) {
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
        accWidth += w
        // le bug est ici on vide l'objet sans accumuler les td
        // créa clef td_num
        test["td_"+index] = td
        if(accWidth === artwidth){
          log(`une autre slice:${td.name} slice_${cptS} `)
          cptS ++
        }
        break;
      // default:
      //   break;
    }
  }
  let idx = 0;
  for (const td in allTd) {
    const currentTd = allTd[td];
    isSlice(idx, currentTd)
    idx++
    // log(`${td}: ${currentTd.name} `);
  }
  // log(`obj accTd `);log(accTd);
  log(test)
  // for (const key in test) {
  // }

  // si la td != width_prompt et que la suivante à une val y != alors c'est une table imbriquée
  // log(listerToutesLesPropriétés(objCel.td_1))
}
