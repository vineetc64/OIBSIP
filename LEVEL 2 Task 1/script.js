var_no_of_buttons= document.querySelectorAll(".button").length;
var string="";

for(var i=0; i<var_no_of_buttons ;i++){
document.querySelectorAll(".button")[i].style.fontSize= "15px";

}


for(var i=0;i<var_no_of_buttons;i++){

    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var but= this.textContent;
        
         if(but === "="){
            string=eval(string);
            document.querySelector(".input").value= string;
        }

        else if(but === "C"){
            document.querySelector(".input").value= "";
            string="";          
            
        }

        else if( but === "M+" || but === "M-"){
            if(but === "M+"){
                
                string= "+" + string;
            document.querySelector(".input").value= string;
            
            }

            if(but === "M-"){

                string= "-" + string;
                document.querySelector(".input").value=  string;
                
                }

        }

        else{
      string= string+ but;
      document.querySelector(".input").value=string;
        }
    });


}

 



/*
The eval() method evaluates or executes an argument.

If the argument is an expression, eval() evaluates the expression. If the argument is 
one or more JavaScript statements, eval() executes the statements. */







