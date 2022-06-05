/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch("./cars.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendCar(data);
  })
  .catch(function (err) {
    console.log(err);
  });


    function appendCar(data) {
      const carContainer = document.getElementById("output");
      innerHTML = ""
      for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.id = "card";
        div.innerText = 'Brand: ' + data[i].brand;
        let ol = document.createElement('ol');
        let li = document.createElement('li');
        li.innerText = 'Models'+':'+' '+ data[i].models;
        div.append(ol,li);
        carContainer.appendChild(div);
      }
    }

