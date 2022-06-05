/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.getElementById('submit-btn').addEventListener('click', function (e) {
   e.preventDefault();
  let data = document.getElementById('search').value;
  let kg = parseFloat(data);
  
  let input = document.getElementById('search');
  let output = document.getElementById("output");
  output.innerHTML = '';
  let lbOutput = document.createElement("div");
  lbOutput.innerHTML = kg * 2.2046+ "lb";
  let gramsOutput = document.createElement("div");
  gramsOutput.innerHTML = kg / 0.0010000+ "g";
  let ozOutput = document.createElement("div");
  ozOutput.innerHTML = innerHTML = kg * 35.274+ "oz";
  output.appendChild(lbOutput);
  output.appendChild(gramsOutput);
  output.appendChild(ozOutput);


  document.getElementById('output').style.visibility = 'visible';

  if (data == '' ) {
    document.getElementById('output').style.visibility = 'hidden';
  }

});
