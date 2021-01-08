// add event Listener
document.getElementById("searchButton").addEventListener("click",(event)=>{
    event.preventDefault();
var input=document.getElementById("input")
fetch (`http://api.weatherapi.com/v1/current.json?key=11706febca884fdcabd05551210601&q=${input.value}`)
//  store api data 
.then(response => response.json())
// grab json data
.then(data => populateLocation(data));
});



function populateLocation(data){
console.log(data)
var locationContainer=document.getElementById("locationContainer")
    locationContainer.innerHTML = `
    <div class="" style="width: 18rem;"> <img src="https:${data.current.condition.icon}" class="card-img-top" alt="temperature icon">
    <div class="card-body">
    <p class="card-text">Weather conditions in ${data.location.name} show a temperture of ${data.current.temp_f} that feels like ${data.current.feelslike_f} and ${data.current.condition.text} skies.</p>
          </div>
    </div>

        `;
}






