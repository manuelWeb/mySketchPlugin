const objAllTD = {
  "index_1": {
    name: "s1",
    height: 180, width: 620,
    x: 0, y: 0,
  },
  "index_2": {
    name: "s2c1",
    height: 157, width: 299,
    x: 0, y: 180,
  },
  "index_3": {
    name: "s2c2",
    height: 157, width: 165,
    x: 299, y: 180,
  },
  "index_4": {
    name: "s2c3",
    height: 157, width: 156,
    x: 464, y: 180,
  },
  "index_5": {
    name: "s3c1s1",
    height: 30, width: 421,
    x: 0, y: 337,
  },
  "index_6": {
    name: "s3c1s2",
    height: 49, width: 421,
    x: 0, y: 367,
  },
  "index_7": {
    name: "s3c1s3",
    height: 43, width: 421,
    x: 0, y: 416,
  },
  "index_8": {
    name: "s3c2",
    height: 122, width: 109,
    x: 421, y: 337,
  },
  "index_9": {
    name: "s3c3",
    height: 122, width: 90,
    x: 530, y: 337,
  }
  ,
  "index_10": {
    height: 122,
    name: "s4",
    width: 620,
    x: 0,
    y: 459,
  }
}

// let accWidth     = 0
// let keys         = Object.keys(objAllTD);
// let numtd        = 1
// let num          = 1
// let objSlice     = {}
// let nestedObj    = {}

// for(let i = 0; i < keys.length; i++) {

//   const current  = keys[i]
//   const previous = keys[i - 1]
//   const next     = keys[i + 1]

//   if(objAllTD[current].width === 620){
//     console.log(`slice avec une TD: ` + objAllTD[current].name)
//     objSlice[ 'slice_' + num ] = {['td_'+numtd]: objAllTD[current].name}
//     accWidth = 0
//     num++
//   }

//   // un bug ici si pas de next alors echou résolu par le else utile uniquement si nested table est en derniere position
//   if( objAllTD.hasOwnProperty(next) ){

//     if(objAllTD[current].x === objAllTD[next].x
//       && objAllTD[current].width === objAllTD[next].width){

//       if(!objSlice[ 'slice_' + num ]){
//         console.log('slice_'+num);
//       }

//       nestedObj['td_'+parseInt(numtd)] = objAllTD[current]
//       nestedObj['td_'+parseInt(numtd+1)] = objAllTD[next]

//       console.log('nestedObj : ',nestedObj);
//       console.log('doit on ajouter : '+nestedObj['td_'+parseInt(numtd+1)].name);

//       // le BUG se trouve ici ->
//       numtd++
//     }

//     if(objAllTD[next].name){
//       console.log(`objAllTD[next].name:.......`+objAllTD[next].name);
//       if(nestedObj){
//         console.log(`nestedObj['td_'+parseInt(numtd)]:+++++`,nestedObj['td_'+parseInt(numtd)]);
//       }
//     }

//     // si nestedObj have td with y that === objAllTD[current].y
//     // recup des TD qui suive nested table
//     nestedObj.td_1 ? nestedObj.td_1.y === objAllTD[current].y && nestedObj.td_1.name !== objAllTD[current].name ?  addNest() : console.log('nestedObj.td_1.y !== objAllTD[current].y') : console.log('!nestedObj.td_1');

//     function addNest() {
//       nestedObj['td_'+parseInt(numtd)] = objAllTD[current]
//       numtd++;
//     }

//   }

//   if( objAllTD[current].width < 620 && accWidth < 620 ){
//     accWidth += objAllTD[current].width
//     // éviter la mutabilité de slice_num
//     if(!objSlice[ 'slice_' + num ]){
//       objSlice[ 'slice_' + num ] = {['td_'+numtd]: objAllTD[current].name}
//       // console.log('pas de ssobj on le creer: ',objSlice[ 'slice_' + num ]);
//     }else{
//       objSlice[ 'slice_' + num ]['td_'+numtd] = objAllTD[current].name
//       // console.log('ssobj ok on rempli',objSlice[ 'slice_' + num ]['td_'+numtd]);
//     }
//     numtd++
//     if ( accWidth === 620 ) {
//       console.log(`une slice complet td derniere: ${objAllTD[current].name} `)
//       accWidth = 0
//       numtd = 1
//       num++
//     }
//   }

// }

// console.log(nestedObj)
// console.log(objSlice)

