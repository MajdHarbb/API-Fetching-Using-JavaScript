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
    
    //display input name
    name_input = $("#name-input").val();
    name_input = name_input.charAt(0).toUpperCase() + name_input.slice(1);
    $("#name-span").text(`${name_input}`);

    /* Get gender using ajax */
    $.ajax({
      url: `https://api.genderize.io/?name=${name_input}`,
      type: "GET",
      success: function (result) {
        console.log(result.gender);
        gender.text(result.gender.charAt(0).toUpperCase() + result.gender.slice(1));
      },
      error: function (error) {
        console.log(error);
      },
    });


    /* Get age using ajax */
    $.ajax({
      url: ` https://api.agify.io/?name=${name_input}`,
      type: "GET",
      success: function (age_result) {
        console.log(age_result.age);
        age.text(age_result.age);
      },
      error: function (error) {
        console.log(error);
      },
    });

    /* Get nationality using ajax */
    $.ajax({
        url: `https://api.nationalize.io/?name=${name_input}`,
        type: "GET",
        success: function (nationality_result) {
            for(var i=0; i<nationality_result.country.length; i++){
                console.log(nationality_result.country[i].country_id);
                country.append(nationality_result.country[i].country_id + " ");
            }
        },
        error: function (error) {
          console.log(error);
        },
      });

    
  });
});
