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
    borderDiv.style.borderBottom = '1px solid lightgray';
    showDiv.appendChild(borderDiv);

    const showsListDiv = document.querySelector('.shows__list');
    showsListDiv.appendChild(showDiv);
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

//pending items:
//change it to array of objects
//add bottom border for each row in tab and desk mode

createShowItem('Mon Dec 17 2018','Ronald Lane', 'San Francisco, CA');
createShowItem('Tue Jul 18 2019', 'Pier 3 East', 'San Francisco, CA');
createShowItem('Fri Jul 22 2019', 'View Loungue', 'San Francisco, CA');
createShowItem('Sat Aug 12 2019', 'Hyatt Agency', 'San Francisco, CA');
createShowItem('Fri Sep 05 2019', 'Moscow Center', 'San Francisco, CA');
createShowItem('Wed Aug 11 2019', 'Pres Club', 'San Francisco, CA');

createShowHeadings();






