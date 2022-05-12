// const diso=document.getElementById('#name');

const xzc=document.querySelector('h2');
function changeBackground(){
    console.log("inside the function ");

    // for(let r=0; r<=xzc.length; r++){
        console.log("Test")
        xzc.style.background='green';
    // }
}
xzc.addEventListener('click', changeBackground);

// diso.addEventListener('keyup', kUp);

function kUp(a){
    const gyo=document.querySelector('li');
    gyo.innerHTML='<h1>'+a.target.id+'</h1>';
}

function reverse(text) {
    let reveredText = ''
    for(let i=text.length -1; i>=0; i--){
        reveredText += text[i]
    }
    return reveredText;
}
let text1 = "Hakop";

console.log(reverse(text1))

class nooodles{
    constructor(food,water,takeTime){
        this.food=food;
        this.water=water;
        this.takeTime=new Date(takeTime);

    }
}
const sads= new nooodles('Spagetti', 'soda', '2-1-2021 9:19:12');
console.log(sads.takeTime);

const dom=document.querySelector('#age');
dom.addEventListener('keydown', kIp);

function kIp(q){
    const foos=document.querySelector('li');
   foos.innerHTML='<h1>'+q.target.id+'</h1>';
}

const dol=num1=>num1+99;
console.log(dol(1));

whiskey=1;

const gata=whiskey<100 ? 'FOOD': '  NO FOOD';

switch(gata){
    case '  NO FOOD':
    console.log('U GONNA STARVE TO DEATH');
    break;
    case 'FOOD':
        console.log('U GONNA LIVE TO NOT DIE');
        break;
        default:
            console.log('U R ABNORMAL AAND GAY');
           

}

const  dosz=document.querySelector('#sub');
const dzm=document.querySelector('#name');
const ageee=document.querySelector('#age');
dosz.addEventListener('click', lZas);

function lZas(){
    if(dzm.value==='Hagop'&&ageee.value>17){
        window.location.href='https://images-na.ssl-images-amazon.com/images/I/51HIbbNvgBL.jpg';
    }else{
        window.open('http://google.com');
    }
}

const dpek=document.querySelector('#cat');
dpek.addEventListener('click', lQ);

function lQ(){
    window.open('http://127.0.0.1:5500/imageBmw/2x.png');
    dpek.style.cursor='pointer';
}




