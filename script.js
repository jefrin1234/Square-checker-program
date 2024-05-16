 
     function calculateSquare(){
      let number = document.getElementById('number').value;
      let number2 =  document.getElementById('number2').value;
      let answer = document.getElementById('result-div')
      let answer2 = document.getElementById('result-div2')
      let result1 = number*number;
      let result2 = number2*number2;
      answer.innerHTML = ''
      answer2.innerHTML = ''



      if( number ==='' && number2 === '' ){
         answer2.innerHTML = ' * enter the numbers *'
      }
      
      else if( number !== '' && number2 === '' ){
      answer.innerHTML = `square of first number is ${result1}`
      }

      else if( number === '' && number2 !== '' ){
      answer.innerHTML = `square of second number is ${result2}`
      }
      

      
      else if( number !== '' && number2 !== '' ){
      answer.innerHTML = `square of first number number is ${result1}<br><br>
      square of second number is ${result2}`
      }
      
      

      
         
     }

