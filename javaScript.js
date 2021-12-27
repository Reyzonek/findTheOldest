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
    name: "Bogdan",
    born: 1953,    
  },
  {
    name: "Zdzichu",
    born: 1942,
    death: 2001
  },
  {
    name: "Grzegorz",
    born: 1932,
    death: 2000
  },
  {
    name: "Rychu",
    born: 1953,    
  }
];

function findTheOldest(){
  let tablicaWieku = [];
  let oldest = 0;
  let najstarsi = [0];
  let iloscDziadow = 0;
  for (let i = 0; i < metryka.length; i++){

    if (metryka[i].hasOwnProperty("death")){
      let wiek = metryka[i].death - metryka[i].born;
      tablicaWieku.push(wiek);
    } else {
      wiek = 2021 - metryka[i].born;
      tablicaWieku.push(wiek);
    }  

    if (tablicaWieku[i] > oldest){
      oldest = tablicaWieku[i];
      wiekNumber = i;
      najstarsi.shift();
      for(let i = 0; i < iloscDziadow; i++){
        najstarsi.shift();
      }
      najstarsi.push(metryka[i]);
      iloscDziadow = 0;    
    } else if (tablicaWieku[i] == oldest){
      najstarsi.push(metryka[i]);
      iloscDziadow++;
    }
  } 
  
  if (najstarsi.length == 1){
    console.log("Najstarszy dziad to: ")
    console.log(najstarsi[0].name);
    console.log("Ma " + tablicaWieku[wiekNumber] + " lat");
  } else {
    console.log("Najstarsze dziady to: ")
    for(let j = 0; j < iloscDziadow; j++){
      console.log(najstarsi[j].name);
    }
    console.log("Maja " + tablicaWieku[wiekNumber] + " lat");
  }
return najstarsi;  
}


console.log(findTheOldest());
