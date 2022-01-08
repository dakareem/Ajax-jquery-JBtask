
function enableButtons(list) {


      $(".search").click(function (event) {
            event.preventDefault();
            searchState(list);
      });

      $(".text").on('keypress', function (event) {
            if (event.which == 13) {
                  event.preventDefault();
                  searchState(list);
            }
      }
      )
}



let sumPopulation = 0;
function renderStates(list) {
      $(".renderTable").append("<table class='table'></table>");

      const statePopolationlist = list.map((item) => {
            return item.population;
      });

      const sumPopulation = statePopolationlist.reduce((num1, num2) => num1 + num2);
      const a = sumPopulation;
      const b = list.length;
      const avarage = a / b;
      console.log(avarage);


      $(`<table class="population-Info">
                <tr>
                    <td>Amount of states : ${list.length}</td> 
                </tr>
                <tr>
                    <td>Total states Population : ${sumPopulation}</td> 
                </tr>
                <tr>
                     <td>Avarage Population : ${avarage}</td>         
                </tr>
            </table><br><br>`).appendTo(".infoPopulation");


      $(`<table class="titleTable">
                <tr class="tableTitle">
                    <td class="tdTitle">State Name</td>
                    <td class="tdTitle">Flag</td>  
                    <td class="tdTitle">Number of citizens</td> 
                    <td class="tdTitle">Currancy</td>
                                 
                </tr>
            </table>`).appendTo(".table");


      list.forEach((item) => {
            let { name, population, flags, currencies } = item;
            name = name.common;

            let srcFlag = "";
            for (let prop in flags) {
                  srcFlag = flags[prop];
            }

            let currency = "";
            for (let prop in currencies) {
                  currency = currency + currencies[prop].name + "<br>";
            }

            if (population == null) {
                  population = "";
            }
            if (srcFlag == null) {
                  srcFlag = "";
            }

            $(`     
         <table id="#allStates">
         <tr>
            <td>${name}</td>
            <td><img src="${srcFlag}" class="imgFlag"></td>
            <td>${population}</td>
            <td>${currency}</td>       
        </tr>
        </table>     
         `).appendTo(".table");
      });

}


let list;

function searchState(list) {

      let text = $(".text").val();

      const found = list.filter((item) =>
            item.name.common.toLowerCase().includes(text.toLowerCase())
      );

      if (found.length === 0) {
            $(".renderTable").empty();
            $(".infoPopulation").empty();
            $(".text").addClass("inputEmpty")
            $("<div class='mess'> Oops! the state was not found.<br>Please try again.</div>").appendTo(".renderTable")
      }
      else if (!text) {
            $(".renderTable").empty();
            $(".infoPopulation").empty();
            $(".text").addClass("inputEmpty")
            $("<div class='mess'> Oops! you didn't entered any keyword for searching.</div>").appendTo(".renderTable")
      }
      else {
            $(".text").removeClass("inputEmpty")
            $(".infoPopulation").empty();
            $(".renderTable").empty();
            $(".renderTable").innerHTML = renderStates(found);
      }
}
