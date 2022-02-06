/* JQuery ajax code to fetch data*/
let search = $("#search-btn");
let name = $("#name-span");
let gender = $("#gender-span");
let age = $("#age-span");
let country = $("#nationality-span");

$(document).ready(function () {
  /* fetch random dog image */
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    type: "GET",
    success: function (result) {
      /* Display image with caption */
      console.log(result.message);
      $("#dog-image").attr("src", result.message);
      breed = result.message.slice(30);
      breed = breed.substring(0, breed.indexOf("/"));
      $("#caption").text(breed.charAt(0).toUpperCase() + breed.slice(1));
    },
    error: function (error) {
      console.log(error);
    },
  });

  /* On click get gender, age, and nationality info */
  $("#search-btn").click(function () {

    name_input = $("#name-input");

    $.ajax({
      url: `https://api.genderize.io/?name=${name_input.value}`,
      type: "GET",
      success: function (result) {
        console.log(result.gender);

        //$("#name-span").text(`${name_input.value}`);
        //name.innerText = input.value.charAt(0).toUpperCase() + input.value.slice(1);
      },
      error: function (error) {
        console.log(error);
      },
    });

    $.ajax({
      url: ` https://api.agify.io/?name=${name_input.value}`,
      type: "GET",
      success: function (age_result) {
        console.log(age_result.age);
      },
      error: function (error) {
        console.log(error);
      },
    });

    $.ajax({
        url: `https://api.nationalize.io/?name=${name_input.value}`,
        type: "GET",
        success: function (nationality_result) {
            //for(var i=0; i<nationality_result.country.length; i++){
                console.log(nationality_result.country[0].country_id);
                //country.innerText += " "+returned_nationality.country[i].country_id+" ";
            //}
        },
        error: function (error) {
          console.log(error);
        },
      });

    
  });
});
