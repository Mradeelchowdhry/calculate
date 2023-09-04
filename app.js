let answer=document.getElementById("ans");

    function getvalues(val){
        answer.value +=val ;
    }
    
    function calculate(){
        if(answer.value==""){
            answer.value="please enter expression frist to calculate"
        }
        else{
            let b = eval(answer.value);//eval("2+2")=4
            answer.value=b
        }
    }

    function ClearBox(){
        answer.value=0
    }

    function backspace(){
        let input = document.getElementById("ans")
        let currentValue = input.value;
        if(currentValue.length > 0){
            currentValue = currentValue.slice(0,-1);
            input.value = currentValue;
        }
    }