const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function nameValidate(){
    if (inputs[0].value.length<3){
        setError(0);
    }
    else{
        removeError(0);
    }

    function setError(index){
        spans[index].style.display = 'block';
    }
    function removeError(index){
        spans[index].style.display = 'none';
    }
    function passwordValidate1(){
        if (inputs[1].value.length<8){
            setError(1);
        }
        else{
            removeError(1);
        }
    }
    function passwordValidate2(){
        if (inputs[2].value.length>=8 && inputs[1].value == inputs[2].value){
            removeError(2);
        }
        else{
            setError(2);
        }
    }
}