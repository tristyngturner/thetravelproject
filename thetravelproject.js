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
            <div class="d-flex flex-wrap align-items-top">
                <div class="card col-mb-4">
                     <div class="card-body" style="width: 18rem;">
                        <h5 class="card-title">${brewery.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${brewery.brewery_type}</h6>
                        <p class="card-text">
                        ${brewery.street}</br>
                        ${brewery.city}, ${brewery.state} ${brewery.postal_code}
                        </p>
                        <a href="${brewery.website_url}" class="card-link" target="_blank">${brewery.website_url}</a>
                     </div>
                </div>
            </div>
                `);
            })
        })
})

