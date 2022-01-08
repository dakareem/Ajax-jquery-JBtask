
function getData(url) {
      return new Promise((resolve, reject) => {
            $.ajax({
                  method: "GET",
                  url: url,
                  success: data => {
                        resolve(data);
                  },
                  error: err => {
                        reject(err);
                  }
            });
      });
}

$(async function () {
      try {
            list = await getData("https://restcountries.com/v3.1/all/");
            enableButtons(list);
      }
      catch (error) {
            alert(error)
      }
})
