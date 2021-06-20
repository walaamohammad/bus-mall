'use strict';



let imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg',
    'dargon.jpg','pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.pnj', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
    let counter=0;
let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById('leftImage');
let centerImage = document.getElementById('centerImage');
let rightImage = document.getElementById('rightImage');
function goods(goodsName, src) {
    this.goodsName = goodsName;
    this.src =`./img/${src}`;
    this.view = 0;
    goods.all.push(this);
}
goods.all = [];


for (let i = 0; i < imgArray.length; i++) {
    // console.log(imgArray[i].split( '.' ));
    new goods(imgArray[i].split('.')[0], imgArray[i]);
}
function render() {
    let leftIndex = randomNumber(0, imgArray.length - 1);
    let centerIndex=randomNumber(0,imgArray.length -1);
    let rightIndex=randomNumber(0 , imgArray.length -1);

}
function render() {
    let leftIndex = randomNumber(0, imgArray.length-1);
    let centerIndex=randomNumber(0, imgArray.length-1);
    let rightIndex=randomNumber(0, imgArray.length-1);
   

    do {
        rightIndex = randomNumber(0, imgArray.length - 1);
    } while (leftIndex === rightIndex ===centerIndex);

    rightImage.src = goods.all[rightIndex].src;
    centerImage.src = goods.all[centerIndex].src;
    leftImage.src = goods.all[leftIndex].src;

   goods.all[rightIndex].view++;
    goods.all[centerIndex].view++;
 goods.all[leftIndex].view++;
}
function eventHandler(e) {

    if ((e.target.id === 'rightImage' || e.target.id === 'leftImage' || e.target.id === 'centerImage') && counter < 25) {
      render();
        counter++;
    }
}
imageSection.addEventListener('click', eventHandler);



function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min ); 
  }
  render();
  