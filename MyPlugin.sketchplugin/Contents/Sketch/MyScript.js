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
      // 0 est artboard le plus bas dans la liste
      artwidth = artboards[0].frame().width()
      log(artwidth)
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
    const objCel = new Cellules(
      curName,
      selSlice.frame().width(),
      selSlice.frame().height(),
      selSlice.frame().x(),
      selSlice.frame().y()
    )
    // cp sous objet td dans allTd
    allTd["td_"+cpt] = objCel;
    cpt++
  }

  let accWidth = 0
  let objTemp = {}
  let cptS     = 1

  let sliceComplet = {}

  function isSlice(idxTD, td) {
    var w = td.width;
    var x = td.x;
    var y = td.y;
    var sliceNum = "slice_" + cptS
    switch (true) {
      // slice avec une td
      case (w === artwidth || accWidth === artwidth):
        // log(`td: ${td.name} x-> ${x}, idxTD: ${idxTD} `)
        ;({ accWidth, objTemp, cptS } = noNestedTab(accWidth, w, objTemp, idxTD, td, artwidth, sliceComplet, sliceNum, cptS));
      break;

      // slice avec plusieurs td mais pas d'imbrication
      case (w < artwidth):
        // log(`td: ${td.name} x-> ${x} `);
        // if( objTemp[`td_${idxTD-1}`] ){
        //   log(objTemp[`td_${idxTD-1}`])
        // }
        ;({ accWidth, objTemp, cptS } = noNestedTab(accWidth, w, objTemp, idxTD, td, artwidth, sliceComplet, sliceNum, cptS));
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

  log(sliceComplet)

}
function noNestedTab(accWidth, w, objTemp, idxTD, td, artwidth, sliceComplet, sliceNum, cptS) {
  accWidth += w;
  objTemp["td_" + idxTD] = td;

  // if( objTemp[`td_${idxTD}`] ){
  //   log('objTemp[td_'+idxTD+'] -> ');log(objTemp[`td_${idxTD}`]);
  // }

  // if(td.width === artwidth) {
  //   sliceComplet[sliceNum] = objTemp;
  //   objTemp = {};
  // }
  if (accWidth === artwidth) {
    sliceComplet[sliceNum] = objTemp;
    objTemp = {};
    // log(`une autre slice: ${sliceNum} avec dedans: `); log(sliceComplet)
    accWidth = 0;
    cptS++;
  }
  return { accWidth, objTemp, cptS };
}


// var arg = ["accWidth", "w", "objTemp", "idxTD", "td", "artwidth", "sliceComplet", "sliceNum", "cptS"]
// log([...arg])