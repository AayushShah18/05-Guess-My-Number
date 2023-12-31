'use strict';

document.querySelector('.check').addEventListener('click',function(){
    const gs = Number(document.querySelector('.guess').value);    

    if(!gs){
        document.querySelector('.message').textContent = 'No Number 😒'
    }
    

});