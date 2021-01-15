// add event Listener
document.getElementById("button").addEventListener("click",(event)=>{
    event.preventDefault();
var input=document.getElementById("input")
fetch (`https://api.weatherapi.com/v1/current.json?key=11706febca884fdcabd05551210601&q=${input.value}`)
//  store api data 
.then(response => response.json())
// grab json data
.then(data => populateLocation(data));
});



function populateLocation(data){
console.log(data)
var locationContainer=document.getElementById("locationContainer")
    locationContainer.innerHTML = `
    <div class="card weatherCard mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-sm-4">
                <img src="https:${data.current.condition.icon}" class="card-img" alt="temperature">
            </div>
            <div class="col-md-8">
             <div class="card-body">
                <h5 class="card-title">Current Weather</h5>
                <p class="card-text">
                Weather conditions in ${data.location.name} show a temperture of ${data.current.temp_f} that feels like ${data.current.feelslike_f} and ${data.current.condition.text} skies.
                </p>
             </div>
            </div>
        </div>
    </div>

        `;
}

/*
        <div class="justify-content-center" style="width: 18rem;"> 
            <img src="https:${data.current.condition.icon}" class="card-img-top" alt="temperature icon">
                <div class="card-body">
                <p class="card-text">Weather conditions in ${data.location.name} show a temperture of ${data.current.temp_f} that feels like ${data.current.feelslike_f} and ${data.current.condition.text} skies.</p>
                </div>
        </div>
*/





