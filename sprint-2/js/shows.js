const showDiv = document.createElement('div');
showDiv.className = 'show';

//show date section
const showDateDiv = document.createElement('div');
showDateDiv.className = 'show__date';

const showDateHeadingH4 = document.createElement('h4');
showDateHeadingH4.textContent = 'DATE';
showDateHeadingH4.className = 'show__date--heading';

const showDateValueH4 = document.createElement('h4');
showDateValueH4.textContent = 'Mon Dec 17 2018';
showDateValueH4.className = 'show__date--value';

showDateDiv.appendChild(showDateHeadingH4);
showDateDiv.appendChild(showDateValueH4);
showDiv.appendChild(showDateDiv);

//show venue section
const showVenueDiv = document.createElement('div');
showVenueDiv.className = 'show__venue';

const showVenueHeadingH4 = document.createElement('h4');
showVenueHeadingH4.textContent = 'VENUE';
showVenueHeadingH4.className = 'show__venue--heading';

const showVenueValueH4 = document.createElement('h4');
showVenueValueH4.textContent = 'Ronald Lane';
showVenueValueH4.className = 'show__venue--value';

showVenueDiv.appendChild(showVenueHeadingH4);
showVenueDiv.appendChild(showVenueValueH4);
showDiv.appendChild(showVenueDiv);
//continue adding location info and button
//think of refactoring

const showsListDiv = document.querySelector('.shows__list');
showsListDiv.appendChild(showDiv);

