const button=document.querySelector('button');
const fopo=document.querySelector('h1');
const hugs=document.querySelector('h2');
const guhs=document.querySelector('li')
button.addEventListener('click', lOi);

function lOi(){
    if(fopo.innerHTML==='SAMYANG'){
        fopo.innerHTML='poop';
    }else{
        hugs.innerHTML='loops'
    }

    const newEl=document.createElement('h1');       //innerHTML only possible with if statments
    newEl.appendChild(document.createTextNode(`${fopo.innerHTML}`));

   guhs.appendChild(newEl)
}