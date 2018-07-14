const objAllTD ={
  "index_1":     {
      height: 180,
      name: "s1",
      width: 620,
      x: 0,
      y: 0,
  },
  "index_2":     {
      height: 157,
      name: "s2c1",
      width: 299,
      x: 0,
      y: 180,
  },
  "index_3":     {
      height: 157,
      name: "s2c2",
      width: 165,
      x: 299,
      y: 180,
  },
  "index_4":     {
      height: 157,
      name: "s2c3",
      width: 156,
      x: 464,
      y: 180,
  },
  "index_5":     {
      height: 30,
      name: "s3c1s1",
      width: 421,
      x: 0,
      y: 337,
  },
  "index_6":     {
      height: 49,
      name: "s3c1s2",
      width: 421,
      x: 0,
      y: 367,
  },
  "index_7":     {
      height: 43,
      name: "s3c1s3",
      width: 421,
      x: 0,
      y: 416,
  },
  "index_8":     {
      height: 122,
      name: "s3c2",
      width: 199,
      x: 421,
      y: 337,
  }
}
let sliceComplet = {}
let accWidth     = 0
let   keys       = Object.keys(objAllTD);
let   numtd      = 1
let   num        = 1
let   objSlice   = {}

for(let i = 0; i < keys.length; i++) {

  const current  = keys[i];
  const previous = keys[i - 1];
  const next     = keys[i + 1];


  if(objAllTD[current].width === 620){
    console.log(`slice avec une TD: ` + objAllTD[current].name)
    objSlice[ 'slice_' + num ] = {['td_'+numtd]: objAllTD[current].name}
    accWidth = 0
    num++
  }

  if( objAllTD[current].width < 620 && accWidth < 620 ){
    accWidth += objAllTD[current].width
    // objSlice[ 'slice_' + num ] = { ['td_'+numtd]: objAllTD[current].name }
    if(!objSlice[ 'slice_' + num ]){
      objSlice[ 'slice_' + num ] = {['td_'+numtd]: objAllTD[current].name}
      console.log('pas de ssobj on le creer: ',objSlice[ 'slice_' + num ]);
    }else{
      console.log('ssobj ok on rempli');
      objSlice[ 'slice_' + num ]['td_'+numtd] = objAllTD[current].name
    }
    // console.log( objSlice[ 'slice_' + num ].hasOwnProperty('td_') )
    // console.log(objSlice[ 'slice_' + num ]['td_'+numtd])
    // console.log(objSlice)
    // console.log( ` ['td_'+numtd]:${['td_'+numtd]} ` )
    numtd++
    if ( accWidth === 620 ) {
      console.log(`une slice complet td derniere: ${objAllTD[current].name} `)
      accWidth = 0
      num++
    }
  }
  // numtd = 1

}
console.log(objSlice.slice_2.td_2)