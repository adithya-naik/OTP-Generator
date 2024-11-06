function clicked(){
  var randomValue = Math.floor(Math.random()*10000);
  var randomString = randomValue+"";
  if(randomString.length == 3){
    randomValue = randomString*10;
  }

  var pTag = document.querySelector('.card-text');
  pTag.innerHTML = randomValue;
  // console.log(randomString);
  // console.log(randomValue);
}