document.getElementById("weatherForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const city = document.getElementById("cityInput").value;
  const apiKey = "ab3f696449e74d76ce128e704bc84ee3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }
      return response.json();
    })
    .then((data) => {
      const weatherHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temperatura: ${data.main.temp} °C</p>
        <p>🌥️ Condiciones: ${data.weather[0].description}</p>
        <p>💧 Humedad: ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherHTML;
    })
    .catch((error) => {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});
