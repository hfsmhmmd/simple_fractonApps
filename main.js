function zeroChecker(str)
{
    let zero = /0/;
    return zero.test(str);
}


function myfunction(e)   
 {   
// document.getElementById("output").innerHTML = e.target.value
const input = document.getElementById("inp").value;
 if (zeroChecker(input)===true){
    console.log('zero shall not pass');
    alert("Do not Input Zero");
  }
  else{
    var size = input.length
    const map1 = input.split("").map((x,index) =>		
                    x * (10 ** (size-(index+1) ))
                    
                    );
    renderResult(map1);
  }

// var char = input

// const map1 = resalt.map(x=>x*2)
/* const result = map1.reverse() */



// console.log(e)
// console.log(resalt);
// console.log(map1)
// console.log(e.target.value)
e.preventDefault();
}

function generateCard(Result){

        const textValue = document.createElement('h3');
        textValue.innerText=Result;
 
        const resultContainer = document.createElement('div');
        resultContainer.setAttribute("class","resultContainer")
        resultContainer.append(textValue)
      
        // console.log(textValue)
        return resultContainer
        // const container = document.getElementById("output");
        // container.append(item);
        // const cardResult = document.createElement('div');

}


function renderResult(result) {
    const container = document.getElementById("output");
    for(item of result){
        const resultContainer = generateCard(item);
        // console.log(resultContainer)       
        container.appendChild(resultContainer);

        // console.log(item);
    }   
    // 
   
    // console.log(item);

  }
document.getElementById('fractionForm').onsubmit = myfunction;


/* document.getElementById("output").innerHTML = inp 

// /* input.addEventListener('inp',myfunction); */
// // input.addEventListener('input', myfunction);
// execute.addEventListener('click', myfunction);


