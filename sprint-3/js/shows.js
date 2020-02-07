let shows = [];

const myApiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const createShowItem = (showDate, showVenue, showLocation) => {
    
    const showDiv = document.createElement('div');
    showDiv.className = 'show';

    //show date section
    const showDateDiv = document.createElement('div');
    showDateDiv.className = 'show__date';

    const showDateHeadingH4 = document.createElement('h4');
    showDateHeadingH4.textContent = 'DATE';
    // showDateHeadingH4.className = 'show__date--heading';
    showDateHeadingH4.classList.add('show__date--heading', 'show__heading--visibility')

    const showDateValueH4 = document.createElement('h4');
    showDateValueH4.textContent = showDate;
    showDateValueH4.className = 'show__date--value';

    showDateDiv.appendChild(showDateHeadingH4);
    showDateDiv.appendChild(showDateValueH4);
    showDiv.appendChild(showDateDiv);

    //show venue section
    const showVenueDiv = document.createElement('div');
    showVenueDiv.className = 'show__venue';

    const showVenueHeadingH4 = document.createElement('h4');
    showVenueHeadingH4.textContent = 'VENUE';
    showVenueHeadingH4.classList.add('show__venue--heading', 'show__heading--visibility');

    const showVenueValueH4 = document.createElement('h4');
    showVenueValueH4.textContent = showVenue;
    showVenueValueH4.className = 'show__venue--value';

    showVenueDiv.appendChild(showVenueHeadingH4);
    showVenueDiv.appendChild(showVenueValueH4);
    showDiv.appendChild(showVenueDiv);
    
    //show location
    const showLocationDiv = document.createElement('div');
    showLocationDiv.className = 'show__location';

    const showLocationHeadingH4 = document.createElement('h4');
    showLocationHeadingH4.textContent = 'LOCATION';
    showLocationHeadingH4.classList.add('show__location--heading' ,'show__heading--visibility')

    const showLocationValueH4 = document.createElement('h4');
    showLocationValueH4.textContent = showLocation;
    showLocationValueH4.className = 'show__location--value';

    showLocationDiv.appendChild(showLocationHeadingH4);
    showLocationDiv.appendChild(showLocationValueH4);
    showDiv.appendChild(showLocationDiv);

    //buy tickets button
    const buyTicketsButton = document.createElement('button');
    buyTicketsButton.className = 'show__button';
    buyTicketsButton.textContent = 'Buy Tickets';
    showDiv.appendChild(buyTicketsButton);

    //bottom border
    const borderDiv = document.createElement('div');
    borderDiv.className = 'show__border';

    const showsListDiv = document.querySelector('.shows__list');
    showsListDiv.appendChild(showDiv);
    showsListDiv.appendChild(borderDiv);
}

const createShowHeadings = () => {
    const showsListHeadingDiv = document.createElement('div');
    showsListHeadingDiv.className = 'shows__list--headings';

    const showDateHeadingH4 = document.createElement('h4');
    showDateHeadingH4.className = "show__date--heading";
    showDateHeadingH4.textContent = 'DATES';

    const showVenueHeadingH4 = document.createElement('h4');
    showVenueHeadingH4.className = "show__venue--heading";
    showVenueHeadingH4.textContent = 'VENUE';

    const showLocationHeadingH4 = document.createElement('h4');
    showLocationHeadingH4.className = "show__location--heading";
    showLocationHeadingH4.textContent = 'LOCATION';

    showsListHeadingDiv.appendChild(showDateHeadingH4);
    showsListHeadingDiv.appendChild(showVenueHeadingH4);
    showsListHeadingDiv.appendChild(showLocationHeadingH4);

    const showsListDiv = document.querySelector('.shows__list');
    //inserting as first child of showsListDiv
    showsListDiv.insertBefore(showsListHeadingDiv, showsListDiv.childNodes[0]);

}

const fetchShows = () => {
    axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${myApiKey}`)
         .then(res => {
             shows = res.data;
         })
         .then(() => {
            shows.forEach(show => {
                createShowItem(show.date, show.place, show.location);
            });
            createShowHeadings();
         })
         .catch(err => console.log(`Error encountered: ${err}`));
}

fetchShows();









