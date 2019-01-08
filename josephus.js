function lastPersonStanding () {
  var defendants = document.getElementById("defenders").value;
  var killInt = document.getElementById("killingInterval").value;
  var dead = [];
  var alive = [];
  var counter = killInt-1;
  var idx = 1; //Current Index
  //Fill Array with defendants
  for (let i =0; i < defendants; i++) {
    var person = [];
    person = new Array(i.toString(),1);
    alive[i]=person;
  };
  while(dead.length < defendants){
    alive[counter][1] = 0;
    dead.push(alive[counter][0]);
    counter += killInt;
    while(alive.length > 0 && counter >=alive.length){
      counter = counter - alive.length;
      circleTheWagons(alive);
    }
    console.log("List of the dead: ", dead);
    console.log("Last one standing: ", alive)
  }
};

function circleTheWagons(arr){
  arr.forEach(function(element, idx, array){
    if (element[1] === 0) {
      array.splice(idx,1)
    };
  });
};