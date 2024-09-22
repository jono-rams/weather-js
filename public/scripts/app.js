const cityForm = document.querySelector('form');

const updateCity = async (city) => {

  const cityDetails = await getCity(city.toLowerCase());
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather };

};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update UI with new city
  updateCity(city).then(data => {

  })
  .catch(err => console.log(err));
});