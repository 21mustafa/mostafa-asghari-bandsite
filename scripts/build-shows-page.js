import { BandSiteAPI } from "./band-site-api.js";
const bandSiteAPI = new BandSiteAPI("0323f365-7506-4a0f-bddf-3ad2107eb92f");

bandSiteAPI.getShows().then((response) => {});

const showSection = document.getElementById("show-section");

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

const Show = (show) => {
  return `
    <div class="show__element" >
      <div class="show__container" >
        <div class="show__date"> 
          <div class="show__element-label">DATE</div>
          <div class="show__element-value--date">${new Date(show.date)}</div>
        </div>
        <div class="show__venue">
          <div class="show__element-label">VENUE</div>
          <div class="show__element-value">${show.place}</div> 
        </div>
        <div class="show__location">
          <div class="show__element-label">LOCATION</div>
          <div class="show__element-value">${show.location}</div> 
        </div>
      </div>
      <button class="show__button">BUY TICKETS</button>
    </div>
  `;
};
