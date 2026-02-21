const input=document.getElementById("input");
const buttons=document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click",function(){
        let value=button.innerText;
        if(value === "AC"){
         input.value="";
        }
        else if(value === "="){
            input.value=eval(input.value);
        }
        else{
            input.value+=value;
        }
    });
});
