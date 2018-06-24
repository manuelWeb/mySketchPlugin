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
  let sliceComplet = {}

  function isSlice(index, td) {
    var w = td.width;
    var sliceNum = "slice_" + cptS
    switch (true) {
      case (w === artwidth || accWidth === artwidth):
        // accTd[sliceNum] = {'name':td.name}
        // log(`${cptS}:une slice! num:${sliceNum} avec dedans td.name-> ${td.name} `)
        // sliceComplet[sliceNum] = td
        // sliceComplet[sliceNum] = sliceComplet["td_"+index] = td
        // sliceComplet[sliceNum] = "td_"+index
        // "clef1": "maValeur"
        // sliceComplet[sliceNum] = {
        //   ["td_"+index]:{
        //     "td": td
        //   }
        // }
        sliceComplet[sliceNum] = {
          ["td_"+index]: td
        }
        // log(sliceComplet["td_"+index])
        cptS ++
        accWidth = 0
        break;

      case (w < artwidth):
        // log(`slice_${cptS}->${td.name} `)
        // log(`${cptS}:${sliceNum}->${td.name} `)
        accWidth += w
        // créa clef td_num
        sliceComplet["td_"+index] = td
        // log(`index->${index} `)
        accTd[sliceNum] = sliceComplet["td_"+index]

        if(accWidth === artwidth){
          // log(`une autre slice: ${sliceNum} avec dedans: ${sliceComplet} `)
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
  }

  // log(accTd)
  // sliceComplet.slice_1 = {
  //   "maClef":{
  //     "clef1": "maValeur"
  //   }
  // }
  // log(sliceComplet.slice_1.maClef)
  log(sliceComplet)

}
