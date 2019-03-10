//get weather
//display weather
//convert temps.
//get zip code (input)
//zip code validate
//display images

function handleErrors(response) {
    if (!response.ok) {
        throw alert("Enter a valid zip code!")
    } else {

        return response;
    }
}


function myFunction() {
    let zipCode = document.getElementById("zipCode").value;



    fetch('http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + '&APPID=e25a0f434288caa062f6989a813e48e2')
        .then(handleErrors)
        .then(function (response) {
            return response.json();

        })
        .catch(function (error) {
            console.log(error);

        })



        .then(function (myJson) {
            let tempK = JSON.stringify(myJson.list[0].main.temp) + "K";
            let city = JSON.stringify(myJson.city.name);
            let description = JSON.stringify(myJson.list[0].weather[0].description);


            city= city.slice(1, -1);
            description= description.slice(1, -1);

            let tempKel = parseFloat(tempK);


            let tempNumF = Math.round((tempKel - 273.15) * 9 / 5 + 32) ;
            let tempC = Math.round(tempKel - 273.15) + "°C";
            let tempF= tempNumF + "°F";
        


            document.getElementById("Here").innerHTML = tempK;
            document.getElementById("There").innerHTML = city;
            document.getElementById("Everywhere").innerHTML = description;
            document.getElementById("TempFahren").innerHTML = tempF;
            document.getElementById("TempCelcius").innerHTML = tempC;

        



console.log(tempNumF);

            if (tempNumF >= 50) {
                document.getElementById("Picture").src = "/img/sun.jpg";
            } else {
                document.getElementById("Picture").src = "/img/snow.jpg";
            }



        });


}


function table() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);

}




