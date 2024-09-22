const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

  // destructure properties
  const { cityDetails, weather } = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // remove the d-none class if present
  if(card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

};

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
  updateCity(city).then(data => updateUI(data))
    .catch(err => console.log(err));
});