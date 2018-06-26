// import {myLog} from "./module.js"
// @see https://github.com/skpm/skpm
var UI = require('sketch/ui')
var onRun = function(context) {
  // const width_prompt = UI.getStringFromUser("Width of your masterpiece", 620)
  const doc        = context.document
  const selections = context.selection
  const pages      = [doc pages];
  let artwidth     = 0;
  for (let i = 0; i < pages.count(); i++)
  {
    const page = pages[i];
    const artboards = [page artboards];
    // 0 est artboard le plus bas dans la liste
    artwidth = artboards[0].frame().width()
  }
  log(artwidth)

  // also exposed on Document
  !selections.count() ? doc.showMessage(`Please select slice`) : doc.showMessage(` your selections: ${selections}`)

  let cpt = 1;
  let allTd = {};

  class Cellules{
    constructor(name,width,height,x,y){
      this.name   = name
      this.width  = width
      this.height = height
      this.x      = x
      this.y      = y
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
  let objTemp  = {}
  let cptS     = 1

  let sliceComplet = {}

  function isSlice(idxTD, td) {
    const w = td.width;
    const x = td.x;
    const y = td.y;
    const sliceNum = "slice_" + cptS
    switch (true) {
      // slice avec une td
      case (w === artwidth || accWidth === artwidth):
        log(`td: ${td.name} x-> ${x},  y-> ${y}, idxTD: ${idxTD} `)
        ;({ accWidth, objTemp, cptS } = noNestedTab(accWidth, w, objTemp, idxTD, td, artwidth, sliceComplet, sliceNum, cptS));
      break;

      // slice avec plusieurs td mais sans d'imbrication
      case (w < artwidth):
      log(`td: ${td.name} x-> ${x},  y-> ${y} `);
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

  // nested table
  // if( objTemp[`td_${idxTD-1}`] ) {
  if( objTemp[`td_${idxTD-1}`] ) {
    log(objTemp[`td_${idxTD-1}`])
    log("TD.y: " + objTemp[`td_${idxTD}`].y)
    log("TD-1.y: " + objTemp[`td_${idxTD-1}`].y)
  }else{
    log('else: ' + objTemp[`td_${idxTD}`].name);
  }

  // slice avec plusieurs td mais sans d'imbrication remise à 0
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
