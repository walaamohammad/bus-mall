'use strict';



let imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg',
    'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let counter = 0;
let round=25;
let leftIndex;
let centerIndex;
let rightIndex ;
let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById('leftImage');
let centerImage = document.getElementById('centerImage');
let rightImage = document.getElementById('rightImage');
let viewresult = document.getElementById('viewResult');
let listOfResult=document.getElementById('listOfResult');

function goods(goodsName, path) {
    this.goodsName = goodsName;
    this.path= `./img/${path}`;
    this.view = 0;
    this.click = 0;
    goods.all.push(this);
}
goods.all = [];


for (let i = 0; i <imgArray.length; i++) {
    let goodsName=imgArray[i].split('.')[0];
    new goods(goodsName, imgArray[i]);
}
console.log(goods.all);
function render() {
    leftIndex = randomNumber(0, imgArray.length - 1);
     centerIndex ;
     rightIndex ;

}


    do {
        rightIndex = randomNumber(0, imgArray.length - 1);
        centerIndex=randomNumber(0,imgArray.length-1);
        leftIndex=randomNumber(0,imgArray.length-1);
    } 
    while (leftIndex === rightIndex === centerIndex);{

    leftImage.src= goods.all[rightIndex].path;
    centerImage.src = goods.all[centerIndex].path;
    rightImage.src= goods.all[leftIndex].path;

    goods.all[rightIndex].view++;
    goods.all[centerIndex].view++;
    goods.all[leftIndex].view++;
}

function clickFunction(event){
    if ((event.target.id==='leftImage' || event.target.id==='centerImage' || event.target.id==='rightImage') && counter<round)
    {
       
    }

if (event.target.id==='leftImage'){
    goods.all[leftIndex].click++;
}
if ( event.target.id==='centerImage'){
    goods.all[centerIndex].click++;

}
if(event.target.id ==='rightImage'){
    goods.all[rightIndex].click++;
}
}
render ();
counter++;
function printResult(e){
    for ( let i=0 ;i<goods.all.length ;i++){
        let goodsName=imgArray[i].split('.')[0];
    let li =document.createElement('li');
    listOfResult.appendChild(li);
    li.textContent=`${goods.all[i].goodsName} had ${goods.all[i].click} votes, and was seen ${goods.all[i].view} times.`
}
viewresult.removeEventListener('click',printResult);
}
 imageSection.addEventListener('click', clickFunction);
 viewResult.addEventListener('click' , printResult);
 function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
render();