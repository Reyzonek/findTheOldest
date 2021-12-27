const metryka = [
  {
    name: "Zbychu",
    born: 1944,
    death: 2012
  },
  {
    name: "Stachu",
    born: 1986,
    death: 2020
  },
  {
    name: "Zdzichu",
    born: 1942,
    death: 2011
  },
];

function findTheOldest(){
  let tablicaWieku = [];
  for (let i = 0; i < metryka.length; i++){
    let wiek = metryka[i].death - metryka[i].born;
    tablicaWieku.push(wiek);
  }
  let oldest = 0;
  for (let j = 0; j < tablicaWieku.length; j++){    
    if (tablicaWieku[j] > oldest){
      oldest = tablicaWieku[j];
      wiekNumber = j;     
    }
  }
return metryka[wiekNumber];  
}

console.log(findTheOldest());