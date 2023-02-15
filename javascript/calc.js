document.getElementById('calc').addEventListener('click', function(cd){

    let number= cd.target.innerText;
    
    let display =document.getElementById('display');
    

    
    if(isNaN(number)){
        if(number== 'C'){
            setTextInput('display', '');
            
        }
        if(number== '<'){
            // let display =document.getElementById('display');
            let displayValue = display.value;
            
            let a = displayValue.split('');
             a.pop();
            
            let afterPop= a.join('');
            console.log(afterPop);
            setTextInput('display', afterPop);

            
        }
        

    }
    else{
        
        
        let displayValue = display.value;
        let newDisplayValue = displayValue + number; 
        setTextInput('display', newDisplayValue);
        

    }

    
    if(number=='Submit'){

     let x= getTxtInput('p')
     let y= getTxtInput('display');

     if(x==y){
        let m = document.getElementById('matched');
        m.style.display ='block';
        let n = document.getElementById('unmatched');
        n.style.display ='none';
     }
     else{
        let m = document.getElementById('unmatched');
        m.style.display ='block';
        let n = document.getElementById('matched');
        n.style.display ='none';
     }


        
        
    }
    
})