'use strict';



let imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg',
    'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let counter = 0;
let round = 25;
let leftIndex;
let centerIndex;
let rightIndex;
let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById('leftImage');
let centerImage = document.getElementById('centerImage');
let rightImage = document.getElementById('rightImage');
let viewresult = document.getElementById('viewResult');
let listOfResult = document.getElementById('listOfResult');

function Goods(goodsName, path, view = 0, click = 0) {
    this.goodsName = goodsName;
    this.path = path;
    this.view = view;
    this.click = click;
    Goods.all.push(this);
}
Goods.all = [];


for (let i = 0; i < imgArray.length; i++) {

    new Goods(imgArray[i].split('.')[0], `./img/${imgArray[i]} `);
}


console.log(Goods.all);


function render() {
    // leftIndex = randomNumber(0, imgArray.length - 1);
    // centerIndex= randomNumber(0, imgArray.length - 1);
    // rightIndex = randomNumber(0, imgArray.length - 1);

    do {
        rightIndex = randomNumber(0, imgArray.length - 1);
        centerIndex = randomNumber(0, imgArray.length - 1);
        leftIndex = randomNumber(0, imgArray.length - 1);
    }
    while (leftIndex === rightIndex || leftIndex === centerIndex || rightIndex === centerIndex); {

        leftImage.src = Goods.all[leftIndex].path;
        centerImage.src = Goods.all[centerIndex].path;
        rightImage.src = Goods.all[rightIndex].path;

        Goods.all[rightIndex].view++;
        Goods.all[centerIndex].view++;
        Goods.all[leftIndex].view++;
    }
}
render();

imageSection.addEventListener('click', clickFunction);

function clickFunction(event) {
    if (counter < 25) {
        counter++;

        if (event.target.id === 'leftImage') {
            Goods.all[leftIndex].click++;
        }
        if (event.target.id === 'centerImage') {
            Goods.all[centerIndex].click++;

        }
        if (event.target.id === 'rightImage') {

            Goods.all[rightIndex].click++;
        }
        render();
    }

    else {
        imageSection.removeEventListener('click', clickFunction);
        viewResult.addEventListener('click', showData);
        localStorage.setItem('imgArray', JSON.stringify(Goods.all));

    }
    // localStorage.setItem('products', JSON.stringify(goods.all));

}






function printResult(e) {
    for (let i = 0; i < Goods.all.length; i++) {
        let goodsName = imgArray[i].split('.')[0];
        let li = document.createElement('li');
        listOfResult.appendChild(li);
        li.textContent = `${Goods.all[i].goodsName} had ${Goods.all[i].click} votes, and was seen ${Goods.all[i].view} times.`
    }
    viewResult.removeEventListener('click', showData);
}


function getData() {


    let data = JSON.parse(localStorage.getItem('imgArray'));

    if (data) {

        Goods.all = [];
        for (let i = 0; i < data.length; i++) {
            new Goods(data[i].goodsName, data[i].path, data[i].click, data[i].view);
        }

    }
}
getData();

function showData() {

    printResult();
    drawChart();

}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function drawChart() {
    let name1 = [];
    let click1 = [];
    let view1 = [];
    for (let i = 0; i < Goods.all.length; i++) {
        name1.push(Goods.all[i].goodsName);
        click1.push(Goods.all[i].click);
        view1.push(Goods.all[i].view);
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: name1,
            datasets: [{
                label: '# of click',
                data: click1,
                backgroundColor:
                    'rgba(157, 99, 365, 37)',

            },
            {
                label: '# of view',
                data: view1,
                backgroundColor:
                    'rgba(264, 34, 574, 0.66)',

            },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
