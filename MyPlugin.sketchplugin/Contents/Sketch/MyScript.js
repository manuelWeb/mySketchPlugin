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
  var test = {}
  var cp = 0

  let idx = 1;
  let objAllTD = {}
  for (const td in allTd) {
    // const currentTd = allTd[td];
    // isSlice(idx, currentTd)
    objAllTD['index_'+idx] = allTd[td]
    // objAllTD.push(allTd[td])
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
    }

  }

  // log(objAllTD)
  log(sliceComplet)

}

function noNestedTab(accWidth, w, objTemp, idxTD, td, artwidth, sliceComplet, sliceNum, cptS) {
  accWidth += w;
  objTemp["td_" + idxTD] = td;


  // slice avec plusieurs td mais sans d'imbrication remise à 0
  if (accWidth === artwidth) {
    // une slice avec td unique
    sliceComplet[sliceNum] = objTemp;
    logSimpleSlc(`cptS: ${cptS}, sliceNum: ${sliceNum}, idxTD: ${idxTD}, td.x: ${td.x} `)
    objTemp = {};
    accWidth = 0;
    cptS++;

  }
  return { accWidth, objTemp, cptS };

  // function fctLogExtraite() {
  //   log("TD.y: " + objTemp[`td_${idxTD}`].y);
  //   log("TD-1.y: " + objTemp[`td_${idxTD - 1}`].y);
  // }
  function logSimpleSlc(arg) {
    // log(arg)
  }
}


// var arg = ["accWidth", "w", "objTemp", "idxTD", "td", "artwidth", "sliceComplet", "sliceNum", "cptS"]
// log([...arg])


  // nested table
  // verif td et td n-1
  // if( objTemp[`td_${idxTD-1}`] ) {
  //   if(objTemp[`td_${idxTD-1}`].y !== objTemp[`td_${idxTD}`].y &&
  //   objTemp[`td_${idxTD-1}`].x === objTemp[`td_${idxTD}`].x ) {
  //     log('oups ces td sont imb: '
  //       + objTemp[`td_${idxTD-1}`].name
  //       + ' et ' + objTemp[`td_${idxTD}`].name
  //     )
  //     var addHeightPrev = objTemp[`td_${idxTD-1}`].height
  //     var addHeightLast = objTemp[`td_${idxTD}`].height
  //     // if(objTemp[`td_${idxTD-1}`].name != objTemp[`td_${idxTD}`].name ){
  //     //   log('addHeightPrev:'+addHeightPrev+': '+objTemp[`td_${idxTD-1}`].name)
  //     //   log('addHeightLast:'+addHeightLast+': '+objTemp[`td_${idxTD}`].name)
  //     // }
  //     if(objTemp[`td_${idxTD}`] ){
  //       log('filtre: '+objTemp[`td_${idxTD}`].name)
  //     }
  //   }
  //   // créer une td avec add height
  //   fctLogExtraite();
  // }else{
  //   log('else: ' + objTemp[`td_${idxTD}`].name + ' n\'a pas de précendente');
  // }


// Object.size = function(obj) {
//   let size = 0, key;
//   for (key in obj) {
//       if (obj.hasOwnProperty(key)) size++;
//   }
//   return size;
// };
// log(`objAllTD size: ${Object.size(objAllTD)} `)