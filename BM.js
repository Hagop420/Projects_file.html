class fumo{
    constructor(car,smoke,timeOfDeath,n,u){
        this.car=car;
        this.smoke=smoke;
        this.timeOfDeath=new Date(timeOfDeath);
        this.n=n;
        this.u=u;

    }
    getFullName(){
        return `${this.car} ${this.n} ${this.smoke} ${this.u}`
    }
    getBirthYear(){
        return this.timeOfDeath.getDay();
    }
}
const FUMARI=new fumo('Bmw','HookahAndVape','8-9-3019', 'n', 'Thats it')
console.log(FUMARI.getBirthYear());

x=1;
                    //true      //false
const suka=x<2 ? 'FUMARI': 'AL FAKHER';

switch(suka){ 
    case 'FUMARI':
        console.log('You will be smoking a Fumari mix today');
        break;
        case 'AL FAKHER':
            console.log('You will be smoking an AL FAKHER mix today');
            break;
            default:
                console.error('You will smoke nothing');
}

const numb=(num1,num2)=>num1+9;
console.log(numb(1)); 

class tabak{
    constructor(fumari,alFakher,обезьяна,goDown){
        this.fumari=fumari;
        this.alFakher=alFakher;
        this.обезьяна=обезьяна;
        this.goDown=new Date(goDown);
    }
    getBirthYear(){
        return this.goDown.getFullYear();
    }
}
const Fumari=new tabak('lemonMint', 'bluberryMint', 'Звезда', 'May22,2017 3:15:32');
console.log(Fumari.getBirthYear());

const foodsa=num1=>num1+99;
console.log(foodsa(1));

yoyo=11;
const udan=yoyo<8 ? 'Spiced chai&Mochaccino': 'tangiers';


switch(udan){
    case 'Spiced chai&Mochaccino':
    console.log('This mix is the wave');
    break;
    case 'tangiers':
        console.log('Idont like tangiers that much. Only Foreplay and Cane. And also peach iced tea');
        break;
        default:
            console.warn('Fumari over Tangiers');
            
}

const guns=document.querySelector('.lp');
const JONY=document.querySelector('#ops');
JONY.addEventListener('mouseover', kLp);

function kLp(){
     guns.src='imageBmw/J.png';
     setTimeout(()=> guns.remove(), 1000, 0)
     guns.style.border='10px black solid'
    guns.style.borderRadius='25px'
}

const lk=document.querySelector('.lp');
const sleepin=document.querySelector('#ops');

sleepin.addEventListener('mouseout', lOp);

function lOp(){
    lk.src='imageBmw/myShit.png'
}

const fgb=[
    {
        TOBACCO:'fumo',
        SMOKE:'HOOKAH',
        yes:true,
    },
    {
        TOBACCO:'AlFakher',
        SMOKE:'HOOKAH',
        yes:true,
    },
    {
        VAPE:'naked100',
        SMOKE:'VAPE',
        yes:false,
    },
];
console.log(fgb);
const JAN=JSON.stringify(fgb);
console.warn(JAN);

fgb.forEach(function(nun){
    console.log(nun);
});

const sarah=fgb.filter(function(iopen){
    return iopen.yes===false;
});
console.log(sarah);

const soap=fgb.map(function(rick){
    return rick.VAPE;
});
console.log(soap);

for(f=0; f<fgb.length; f++){
    fgb[f].TOBACCO;
}
console.log(fgb.TOBACCO);

for(r=0; r<5; r++){
    console.log(`for loop ${r}`);
};

while(ty=0){
    ty<5;
    ty++;
}

function kobe(name,lastName,dateAndTime){
    this.name=name;
    this.lastName=lastName;
    this.dateAndTime=new Date(dateAndTime);

    this.getBirthYear=function(){
        return this.dateAndTime.getDay();
    }
    this.getFullName=function(){
        return `I hate ${name} ${lastName}`
    }
}

const lbj=new kobe('Kobe', 'Bryant', '1-28-13 11:27:22');
console.log(lbj.getFullName());
console.log(lbj);

class jojiComp{
    constructor(name,lName,dAndTme,what){
        this.name=name;
        this.lName=lName;
        this.dAndTme=new Date(dAndTme);
        this.what=what;
    }
    getBirthYear(){
        return this.dAndTme.getFullYear();
    }
}
const gumpy=new jojiComp('Jolieee', 'NOTHING', '1-2-2017 3:19:11', 'Canehead');
console.log(gumpy.getBirthYear());

for(let yu=0; yu<12; yu++){
    console.log(`for loop ${yu}`);
};

const GLOP=fgb.map(function(gogo){
    return gogo.TOBACCO;
});
console.log(GLOP);

const ASHLAVASH=fgb.map(function(AEO){
    return AEO.yes;
});
console.log(ASHLAVASH);

const GOOGLE=fgb.filter(function(GAGIK){
    return GAGIK.yes===false;
}).map(function(iyoop){
    return iyoop.SMOKE;
});
console.log(GOOGLE);


let yu=0;
while(yu<=19){
console.warn(`while ${yu}`);
yu++
};

x='111';
rusty='12'
if(x<1000||rusty<12){
    console.log('it is true');
}
//}else if(x==='1000'){
    //console.log('X is egual to 1000');
//}
//else{
    //console.log('X is greater than 1000');
//}

cakesAndCigars=100;

const mucky='po'//cakesAndCigars>10 ? 'HOOKAH FTW': 'VAPE FTW';

console.log(mucky);

switch(mucky){
    case 'HOOKAH FTW':
        console.log('HOOKAH TASTES BETTER THAN VAPING');
    break;
    case 'VAPE FTW':
        console.log('VAPING IS SAFER AND TASTES BETTER');
        break;
        default:
            console.error('You decide');
   
}

const wdFrm=num2=>500+num2;
console.log(wdFrm(1));

class jessicAnderson{
    constructor(name,last,school,DandT){
        this.name=name;
        this.last=last;
        this.school=school;
        this.DandT=new Date(DandT);
    }
    getFullName(){
        return `${this.name} ${this.last} was sooo hot`
    }
}
const HUSTLE= new jessicAnderson('JESSICA', 'ANDERSON', 'PILIBOS', 'May16,2020 1:40:00');
console.log(HUSTLE.getFullName());


const greatRmen=document.querySelector('.opp');
console.log(greatRmen);
greatRmen.firstElementChild.textContent='looploo';
greatRmen.children[2].innerText='loopk';


