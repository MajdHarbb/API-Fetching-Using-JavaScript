/* Fetch data using async await */

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
let search = document.getElementById("search-btn");
search.onclick = function () {
  
  let name = document.getElementById("name-input");
  test = name.value;
  const fetchData = async () => {
    try {
      const [genderize, agify, nationalize] = await Promise.all([
        fetch(`https://api.genderize.io?name=${test}`),
        fetch(`https://api.agify.io/?name=${test}`),
        fetch(`https://api.nationalize.io/?name=${test}`),
      ]);
      const todoOne = await genderize.json();
      const todoTwo = await agify.json();
      const todoThree = await nationalize.json();
      console.log(todoOne.gender);
      console.log(todoTwo.age);
      console.log(todoThree.country);
    } catch (err) {
      throw err;
    }
  };
  fetchData();
};
