$(document).ready(() => {
    $(".btn").click(() => {
        let userInput = $(".form-control").val();
       $.ajax({
           url: `https://restcountries.eu/rest/v2/name/${userInput}`,
           success: function(data, status, response) {
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
       })
    });
})