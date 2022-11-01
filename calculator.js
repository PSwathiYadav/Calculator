let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string=eval(string);
            document.querySelector('input').value = string;

        }
        else if (e.target.innerHTML == 'C'){
            string=" ";
            document.querySelector('input').value = string;
        }
        // else if(e.target.innerHTML=="<="){
		// 	var exp=document.getElementById("result").value
		// 	document.getElementById("").value=exp.substring(exp.length-1);
		// }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })

})


