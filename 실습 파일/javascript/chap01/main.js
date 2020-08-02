const getCount = (function () {
  let count = 1;
  return () => {
    ++count;
    return count;
  };
})();

console.log(getCount()); // 2
console.log(getCount()); // 3

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
