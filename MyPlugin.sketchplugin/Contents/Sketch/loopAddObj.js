const objAllTD ={
  "index_1":     {
      name: "s1",
      height: 180, width: 620,
      x: 0, y: 0,
  },
  "index_2":     {
      name: "s2c1",
      height: 157, width: 299,
      x: 0, y: 180,
  },
  "index_3":     {
      name: "s2c2",
      height: 157, width: 165,
      x: 299, y: 180,
  },
  "index_4":     {
      name: "s2c3",
      height: 157, width: 156,
      x: 464, y: 180,
  },
  "index_5":     {
      name: "s3c1s1",
      height: 30, width: 421,
      x: 0, y: 337,
  },
  "index_6":     {
      name: "s3c1s2",
      height: 49, width: 421,
      x: 0, y: 367,
  },
  "index_7":     {
      name: "s3c1s3",
      height: 43, width: 421,
      x: 0, y: 416,
  },
  "index_8":     {
      name: "s3c2",
      height: 122, width: 199,
      x: 421, y: 337,
    }
    // ,
    // "index_9":     {
    //     height: 122,
    //     name: "s4",
    //     width: 620,
    //     x: 421,
    //     y: 337,
    // }
  }
let sliceComplet = {}
let accWidth     = 0
let   keys       = Object.keys(objAllTD);
let   numtd      = 1
let   num        = 1
let   objSlice   = {}

for(let i = 0; i < keys.length; i++) {

  const current  = keys[i]
  // const previous = objAllTD.keys[i - 1] ? keys[i - 1] : keys['nonePrev']
  // const next     = objAllTD.keys[i + 1] ? keys[i + 1] : keys['noneNext']
  const previous = keys[i - 1]
  const next     = keys[i + 1]

  if(objAllTD[current].width === 620){
    console.log(`slice avec une TD: ` + objAllTD[current].name)
    objSlice[ 'slice_' + num ] = {['td_'+numtd]: objAllTD[current].name}
    accWidth = 0
    num++
  }

  if(objAllTD.hasOwnProperty(next)
     && objAllTD[current].x === objAllTD[next].x
     && objAllTD[current].width === objAllTD[next].width){
    console.log(`
      objAllTD[current].x: ${objAllTD[current].name}:${objAllTD[current].x},w:${objAllTD[current].width} 
      objAllTD[next].x ${objAllTD[next].name}:${objAllTD[next].x},w:${objAllTD[next].width} 
      objAllTD[current].y: ${objAllTD[current].name}:${objAllTD[current].y},w:${objAllTD[current].width}, 
      objAllTD[next].y ${objAllTD[next].name}:${objAllTD[next].y},w:${objAllTD[next].width} 
      `
    );
  }
  if( objAllTD[current].width < 620 && accWidth < 620 ){
    accWidth += objAllTD[current].width
    // éviter la mutabilité de slice_num
    if(!objSlice[ 'slice_' + num ]){
      objSlice[ 'slice_' + num ] = {['td_'+numtd]: objAllTD[current].name}
      // console.log('pas de ssobj on le creer: ',objSlice[ 'slice_' + num ]);
    }else{
      objSlice[ 'slice_' + num ]['td_'+numtd] = objAllTD[current].name
      // console.log('ssobj ok on rempli',objSlice[ 'slice_' + num ]['td_'+numtd]);
    }
    numtd++
    if ( accWidth === 620 ) {
      console.log(`une slice complet td derniere: ${objAllTD[current].name} `)
      accWidth = 0
      numtd = 1
      num++
    }
  }

}
console.log(objSlice)
