/* JS code to fetch data using async await */
let search = document.getElementById("search-btn");
let name = document.getElementById("name-span");
let gender = document.getElementById("gender-span");
let age = document.getElementById("age-span");
let country = document.getElementById("nationality-span");

/* fetch random dog image */
async function fetchDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dogs = await response.json();
  return dogs;
}

/* Display dog image */
fetchDogImage().then((dogs) => {
  dogs;
  console.log(dogs);
  document.getElementById("dog-image").src = dogs.message;
});

/* fetch data on button click */
search.onclick = function () {
  
  let input = document.getElementById("name-input");
  country.innerText = "";
  /* If input field is null --> alert the user*/
  if(input.value == "" ){
      alert("Please Insert A Name First!");
      
  } else{
    const fetchData = async () => {
        try {
          const [genderize, agify, nationalize] = await Promise.all([
            fetch(`https://api.genderize.io?name=${input.value}`),
            fetch(`https://api.agify.io/?name=${input.value}`),
            fetch(`https://api.nationalize.io/?name=${input.value}`),
          ]);
    
          const returned_gender = await genderize.json();
          const returned_age = await agify.json();
          const returned_nationality = await nationalize.json();

          name.innerText = input.value;
          gender.innerText = returned_gender.gender;
          age.innerText = returned_age.age;
          console.log(returned_gender.gender);
          console.log(returned_age.age);

          for(var i=0; i<returned_nationality.country.length; i++){
            console.log(returned_nationality.country[i].country_id);
            country.innerText += " "+returned_nationality.country[i].country_id+" ";
        }
          //console.log(returned_nationality.country.country_id);
    
        } catch (err) {
          throw err;
        }
      };
      fetchData();
  }
 
};
