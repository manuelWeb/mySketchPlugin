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

  const size     = Object.keys(objAllTD).length
  let   keys     = Object.keys(objAllTD);
  let   numtd    = 1
  let   num      = 1
  let   objSlice = {}

  log(objAllTD['index_'+size].name);log(objAllTD['index_'+size].width);
  log(objAllTD)

  for(let i = 0; i < keys.length; i++) {

    const current  = keys[i];
    const previous = keys[i - 1];
    const next     = keys[i + 1];


    if(objAllTD[current].width === 620){
      log(`slice avec une TD: ` + objAllTD[current].name)
      objSlice[ 'slice_' + num ] = {['td_'+numtd]: objAllTD[current].name}

      accWidth = 0
      num++
    }

    if( objAllTD[current].width < 620 && accWidth < 620 ){
      accWidth += objAllTD[current].width
      // log(`slice multi TD: ${objAllTD[current].name}, accWidth: ${accWidth} `)
      objSlice[ 'slice_' + num ] = { ['td_'+numtd]: objAllTD[current].name }
      log(objSlice)
      log( ` ['td_'+numtd]:${['td_'+numtd]} ` )
      numtd++
      if ( accWidth === 620 ) {
        log(`une slice complet td derniere: ${objAllTD[current].name} `)
        accWidth = 0
        num++
      }
    }
    // numtd = 1

  }

  log(objSlice)
  // log(`objSlice: ${objSlice.slice_1.tdidx_1}`)
  // log(`objSlice: ${objSlice.slice_1.tdidx_1}`)

  // log(`objSlice.keys.length: ${Object.keys(objSlice).length}`)

  // for (let index = 1; index <= size; index++) {
  //   if(objAllTD['index_'+index] && objAllTD['index_'+index].width === 620){
  //     log(`slice avec une TD: ` + objAllTD['index_'+index].name)
  //     accWidth = 0
  //   }
  //   if(objAllTD['index_'+index]){
  //     log(`${objAllTD['index_'+index-1]} `)
  //   }

  // }

  // log(objAllTD)

}
