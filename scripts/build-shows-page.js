const showSection = document.getElementById("show-section");

const comments = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function createStaticComments() {
  for (let dataElement of comments) {
    const row = createCommentElement(
      dataElement.date,
      dataElement.venue,
      dataElement.location
    );
    showSection.appendChild(row);
  }
}
function createCommentElement(dateParam, venueParam, locationParam) {
  const row = document.createElement("div");
  row.classList.add("show__element");
  const showContainer = document.createElement("div");
  showContainer.classList.add("show__container");

  const date = document.createElement("div");
  date.classList.add("show__date");
  const dateLabel = document.createElement("div");
  dateLabel.classList.add("show__element-label");
  dateLabel.innerHTML = "DATE";
  const dateValue = document.createElement("div");
  dateValue.classList.add("show__element-value--date");
  dateValue.innerHTML = dateParam;

  const venue = document.createElement("div");
  venue.classList.add("show__venue");
  const venueLabel = document.createElement("div");
  venueLabel.classList.add("show__element-label");
  venueLabel.innerHTML = "VENUE";
  const venueValue = document.createElement("div");
  venueValue.classList.add("show__element-value");
  venueValue.innerHTML = venueParam;

  const location = document.createElement("div");
  location.classList.add("show__location");
  const locationLabel = document.createElement("div");
  locationLabel.classList.add("show__element-label");
  locationLabel.innerHTML = "LOCATION";
  const locationValue = document.createElement("div");
  locationValue.classList.add("show__element-value");
  locationValue.innerHTML = locationParam;

  const button = document.createElement("button");
  button.classList.add("show__button");
  button.innerHTML = "BUY TICKETS";
  showContainer.appendChild(date);
  showContainer.appendChild(venue);
  showContainer.appendChild(location);
  row.appendChild(showContainer);
  row.appendChild(button);
  date.appendChild(dateLabel);
  date.appendChild(dateValue);
  venue.appendChild(venueLabel);
  venue.appendChild(venueValue);
  location.appendChild(locationLabel);
  location.appendChild(locationValue);

  return row;
}

function createStaticCommentsForTablet() {
  const table = document.createElement("table");

  const header = document.createElement("th");

  const headerCell1 = document.createElement("td");
  headerCell1.innerHTML = "DATE";
  header.appendChild(headerCell1);

  const headerCell2 = document.createElement("td");
  headerCell2.innerHTML = "VENUE";
  header.appendChild(headerCell2);

  const headerCell3 = document.createElement("td");
  headerCell3.innerHTML = "LOCATION";
  header.appendChild(headerCell3);

  table.appendChild(header);

  for (let dataElement of comments) {
    const row = createCommentElement(
      dataElement.date,
      dataElement.venue,
      dataElement.location
    );
    showSection.appendChild(row);
  }
}

function createCommentElementForTablet(dateParam, venueParam, locationParam) {
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  row.appendChild(cell1);
  cell1.innerHTML = dateParam;
  cell1.classList.add("show__table-cell--date");

  const cell2 = document.createElement("td");
  row.appendChild(cell2);
  cell2.innerHTML = venueParam;
  cell2.classList.add("show__table-cell");

  const cell3 = document.createElement("td");
  row.appendChild(cell3);
  cell3.innerHTML = locationParam;
  cell3.classList.add("show__table-cell");

  const button = document.createElement("button");
  button.classList.add("show__table-button");
  button.innerHTML = "BUY TICKETS";
  row.appendChild(button);

  return row;
}

createStaticComments();
