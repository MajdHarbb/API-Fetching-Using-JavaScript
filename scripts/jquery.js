/* JS code to fetch data using jQuery */
let search = $("#search-btn");
let name = $("#name-span");
let gender = $("#gender-span");
let age = $("#age-span");
let country = $("#nationality-span");
let caption = $("#caption");


$(document).ready(function() {
    /* fetch random dog image */
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      type: "GET",
      success: function(result) {
        console.log(result.message);
      },
      error: function(error) {
        console.log(error);
      }
    });

    
  });