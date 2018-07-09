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

  function isSlice(idxTD, td) {
    const w = td.width;
    const x = td.x;
    const y = td.y;
    const sliceNum = "slice_" + cptS
    switch (true) {
      // slice avec une td
      case (w === artwidth || accWidth === artwidth):
        log(`indx...: ${idxTD}...cptS: ${cptS} `)
        log(`td_fc: ${td.name} x-> ${x},  y-> ${y},  w-> ${w}, idxTD: ${idxTD} `)
        ;({ accWidth, objTemp, cptS } = noNestedTab(accWidth, w, objTemp, idxTD, td, artwidth, sliceComplet, sliceNum, cptS));
      break;

      // case (w < artwidth):
      //   log('objTemp')
      // break;
      // cas td.w<artboard.w -> add td dans objTemp
      case (w < artwidth):
        // if(objTemp[`td_${idxTD-1}`]){
        //   log(objTemp)
        // }
        if(sliceComplet['slice_'+idxTD]) {
          log(`sliceComplet: ${sliceComplet['slice_'+idxTD].td_0.name} cptS:${cptS}`)
        }
        log(`td: ${td.name} x-> ${x},  y-> ${y},  w-> ${w}, idxTD: ${idxTD} `);
        cp ++;
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

  // slice avec plusieurs td mais sans d'imbrication remise à 0
  if (accWidth === artwidth) {
    // log('sliceComp:'+objTemp[`td_${idxTD}`].name)
    var preced = objTemp[`td_${idxTD} - 1`]
    var suivan = objTemp[`td_${idxTD}`]
    if(preced){
      if(preced.y === suivan.y){
        sliceComplet[sliceNum] = objTemp
        logMultiple(objTemp[`td_${idxTD}`].name)
        objTemp = {};
        accWidth = 0;
        cptS++;
      }else if(preced.y != suivan.y){
        log(preced.y)//preced.x === suivan.x
      }
    } else {
      // une slice avec td unique
      sliceComplet[sliceNum] = objTemp;
      logSimple(objTemp[`td_${idxTD}`].name)
      objTemp = {};
      accWidth = 0;
      cptS++;
    }
    // log(`une autre slice: ${sliceNum} avec dedans: `); log(sliceComplet)
  }
  return { accWidth, objTemp, cptS };

  // function fctLogExtraite() {
  //   log("TD.y: " + objTemp[`td_${idxTD}`].y);
  //   log("TD-1.y: " + objTemp[`td_${idxTD - 1}`].y);
  // }
  function logSimple(arg) {
    log(arg)
  }
  function logMultiple(arg) {
    log(arg)
  }
}


// var arg = ["accWidth", "w", "objTemp", "idxTD", "td", "artwidth", "sliceComplet", "sliceNum", "cptS"]
// log([...arg])
