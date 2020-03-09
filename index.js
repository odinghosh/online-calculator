var buttons = document.querySelectorAll(".btn");
var computeArray = [0, ''];

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var outputBar = document.querySelector(".result-bar");
        var progressBar = document.querySelector(".p-bar");
        
        var buttonText = this.innerHTML;

        if (this.innerHTML === "C"){
            outputBar.innerHTML = outputBar.innerHTML.slice(0,outputBar.innerHTML.length - 1);
        } else if(this.innerHTML == "CA"){
            outputBar.innerHTML = "";
            progressBar.innerHTML = "";
        } else if( buttonText === "+" || buttonText === "-" || buttonText === "x" || buttonText === "/" ){
            computeArray[0] = Number(outputBar.innerHTML);
            computeArray[1] = buttonText;
            outputBar.innerHTML = "";
            progressBar.innerHTML = computeArray[0] + " " + buttonText;
        } else if(buttonText === "=") {
            var currentNumber = Number(outputBar.innerHTML);
            switch (computeArray[1]){
                case "+":
                    result = computeArray[0] + currentNumber;
                    break;
                case "-":
                    result = computeArray[0] - currentNumber;
                    break;
                case "x":
                    result = computeArray[0] * currentNumber;
                    break;
                case "/":
                    result = computeArray[0] / currentNumber + 0.0;
                    break;
                default:
                    break;
            }
            outputBar.innerHTML = result;
            progressBar.innerHTML = "";
            
        } else{
            outputBar.innerHTML = outputBar.innerHTML + this.innerHTML;
        }
    })
}



