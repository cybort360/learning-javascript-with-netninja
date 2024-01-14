const cityForm  = document.querySelector('form');
const card = document.querySelector('section');
const details = document.querySelector('aside');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')
const forecast = new Forecast();

const updateUI = (data) => {
//   const cityDets = data.cityDets;
//   const weather = data.weather;

  // destructure properties

  const { cityDets, weather } = data

  //update details template
  details.innerHTML = `
    <h2>${cityDets.EnglishName}</h2>
    <div class="condition">${weather.WeatherText}</div>
    <div class="temp">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span> /
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
  `

  //update day/nigth and icon images

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  // if(weather.IsDayTime){
  //   timeSrc = 'img/day.svg';
  // } else {
  //   timeSrc = 'img/night.svg'
  // }

  time.setAttribute('src', timeSrc);

  //remove hidden class if present
  if(card.classList.contains('hidden')){
    card.classList.remove('hidden');
  }
};

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with new city
  forecast.updateCity(city)
  .then((data) => {
    updateUI(data);
  })
  .catch(err => console.log(err));

  //set local storage
localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
  forecast.updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
}