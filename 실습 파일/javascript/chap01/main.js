const API_KEY = "168b8ecd20a24fc2844de0f66b3e71ba"

const fetchWeather = (API_KEY) => {
    return fetch("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=" + API_KEY)
        .then(res => res.json())
        .then(data => console.log(data))
}
fetchWeather(API_KEY)



// =======================================
/*
let request = new XMLHttpRequest();

request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=" + API_KEY
);

request.onload = function() {
    console.log(request.status)
    if (request.status === 200) {
        const onData = JSON.parse(request.responseText);
        console.log(onData, "Ds")
    } else {
        console.log("error : ", request.status)
    }
    
}
request.send();
*/