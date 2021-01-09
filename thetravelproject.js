const $button = $("#button");

$button.click("click", (event) => {
    event.preventDefault();
    let $input = $("#input").val();
    let $brewCard = $("#card-container");
    $brewCard.empty();
    $.get(`https://api.openbrewerydb.org/breweries?by_city=${$input}`).done(
        function(response) {
            console.log(response)
            response.map(function(brewery) {
                $brewCard.append (`
                <div class="card" style="width: 18rem;">
                     <div class="card-body">
                        <h5 class="card-title">${brewery.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${brewery.brewery_type}</h6>
                        <p class="card-text">
                        ${brewery.street}</br>
                        ${brewery.city}, ${brewery.state} ${brewery.postal_code}
                        </p>
                        <a href="${brewery.website_url}" class="card-link" target="_blank">${brewery.website_url}</a>
                     </div>
                </div>
                `);
            })
        })
})

//currently can't type in a city, state. Can i change?
//need to make cards wrap and scroll, think i need to do with div