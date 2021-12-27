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
  let oldest = 0;
  for (let i = 0; i < metryka.length; i++){
    
    let wiek = metryka[i].death - metryka[i].born;
    tablicaWieku.push(wiek);
      
    if (tablicaWieku[i] > oldest){
      oldest = tablicaWieku[i];
      wiekNumber = i;     
    }
  }
return metryka[wiekNumber];  
}

console.log(findTheOldest());