async function getWeatherData() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=37.28284226888047&lon=127.04247695353472&appid=95f143c1cad2886f7106287fd39acc8f&units=metric&lang=kr";
  const response = await axios.get(url);
  makeCardItem(response.data);
}

function makeCardItem(data) {
  // 메인 아이템
  const mainItems = [
    "feels_like",
    "pressure",
    "humidity",
    "temp_min",
    "temp_max",
  ];
  mainItems.forEach(function (item) {
    const element = document.getElementById(item);
    element.childNodes[1].innerHTML =
      parseInt(data.main[item]) + getUnits(item);
  });

  // 바람
  const windElement = document.getElementById("wind");
  windElement.childNodes[1].innerHTML =
    getWindsDeg(data.wind) + " " + parseInt(data.wind.speed) + "m/s";

  // 일출 일몰
  const sunriseElement = document.getElementById("sunrise");
  const sunsetElement = document.getElementById("sunset");
  sunriseElement.childNodes[1].innerHTML = getTime(data, "sunrise");
  sunsetElement.childNodes[1].innerHTML = getTime(data, "sunset");

  // 헤더 아이템
  const iconElement = document.getElementById("icon");
  const iconCode = data.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  iconElement.src = iconURL;

  const temperatureElement = document.getElementById("temp");
  const temperature = parseInt(data.main["temp"]) + "&deg;C";
  temperatureElement.innerHTML = temperature;

  const descriptionElement = document.getElementById("description");
  descriptionElement.innerHTML = data.weather[0].description;
}

function getUnits(item) {
  switch (item) {
    case "feels_like":
    case "temp_min":
    case "temp_max":
      return "&deg;C";
    case "pressure":
      return "hPa";
    case "humidity":
      return "%";
  }
}

function getWindsDeg(data) {
  if (data.deg === 0) return "북풍";
  else if (data.deg < 90) return "북동풍";
  else if (data.deg === 90) return "동풍";
  else if (data.deg < 180) return "남동풍";
  else if (data.deg === 180) return "남풍";
  else if (data.deg < 270) return "남서풍";
  else if (data.deg === 270) return "서풍";
  else return "북서풍";
}

function getTime(data, target) {
  let unixTime = "";
  if (target == "sunrise") {
    unixTime = data.sys.sunrise;
  } else unixTime = data.sys.sunset;

  const date = new Date(unixTime * 1000);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return hour + ":" + minutes;
}
