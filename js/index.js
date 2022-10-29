let currentYear = $("#year")
inputs = $(".inputs")
btnSend = $("#btnSend")
span = $("#span")
// console.log(inputs);




let Cyear = new Date().getFullYear();
console.log(Cyear);

currentYear.text(new Date().getFullYear());

function validation(){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].val == "" || inputs[i].val == null){
            span.innerHTML = "Feild Required";
        }
    }
}

btnSend.on("click", function(){
    validation()
})