const age=document.querySelector('#AGE');
const ok=document.querySelector('input[type=submit]');
const CL=document.querySelector('.koo');
const name=document.querySelector('.kopo');
ok.addEventListener('click', kop);

function kop(){
    if(name.value==='' || age.value===''){
        CL.innerHTML='<h2>Please enter fields</h2>';

        
    }else if(age.value<21 || age.value===0){
        CL.textContent='MUST BE 21+';
    }
    
}








