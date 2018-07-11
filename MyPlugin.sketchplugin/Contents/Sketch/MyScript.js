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

  // let cptS     = 1
  let sliceComplet = {}
  let accWidth = 0


  let idx = 1;
  let objAllTD = {}

  for (const td in allTd) {
    objAllTD['index_'+idx] = allTd[td]
    idx++
  }

  log(`objAllTD size: ${Object.keys(objAllTD).length} `)
  const size = Object.keys(objAllTD).length
  log(`objAllTD: `);
  log(objAllTD)
  log(objAllTD['index_'+size].name);log(objAllTD['index_'+size].width);

  for (let index = 1; index <= size; index++) {
    if(objAllTD['index_'+index] && objAllTD['index_'+index].width === 620){
      log(`slice avec une TD: ` + objAllTD['index_'+index].name)
      accWidth = 0
    }
    if(objAllTD['index_'+index]){
      log(`${objAllTD['index_'+index-1]} `)
    }

  }

  // log(objAllTD)
  log(sliceComplet)

}
