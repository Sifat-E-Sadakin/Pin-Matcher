document.getElementById('gp').addEventListener('click', function(){
    let n = Math.round(Math.random()*10000);

    if(n/1000 >= 1){
        setTextInput('p',n);

    }
    else{
        return;

    }

    
    
    


})