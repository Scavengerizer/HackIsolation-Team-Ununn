let cases = document.getElementById("1");
let active = document.getElementById("2");
let recovered = document.getElementById("3");
let deceased = document.getElementById("4");
let x = document.querySelectorAll(".hey");
let h1 = document.querySelector(".h1");

var data = null;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
    let dat = JSON.parse(this.responseText);
    x.forEach(function(place){
      place.addEventListener('click',()=>{
        dat.countries_stat.forEach(function(country){
          if(country.country_name === place.id)
          {
          h1.innerHTML = `${country.country_name}`;
          cases.innerHTML = `${country.cases}`;
          active.innerHTML = `${country.active_cases}`;
          recovered.innerHTML = `${country.total_recovered}`;
          deceased.innerHTML = `${country.deaths}`;
          }
        });
      });
    });
    
    // ${dat.countries_stat[6].country_name}
  }
  
});

xhr.open("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api");
xhr.setRequestHeader("x-rapidapi-host", "corona-virus-world-and-india-data.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "a71261bb2fmshd34c8f638bac3dep1224d4jsn9e87776a51e1");

xhr.send(data);