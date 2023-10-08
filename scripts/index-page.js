const form = document.getElementById("comment-form");
const commentSection = document.getElementById("comment-section");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements[0];
  const comment = form.elements[1];

  let isNameValid = isValid(name);
  let isCommentValid = isValid(comment);
  if (isNameValid && isCommentValid) {
    const row = createCommentElement(
      name.value,
      new Date().toLocaleDateString(),
      comment.value
    );
    commentSection.insertBefore(row, commentSection.firstChild);
    name.value = "";
    comment.value = "";
  }
});

function isValid(input) {
  if (input.value.trim() === "") {
    input.classList.add("error");
    return false;
  }
  return true;
}

const comments = [
  {
    photoUrl: "",
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    photoUrl: "",
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    photoUrl: "",
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function createStaticComments() {
  for (let dataElement of comments) {
    const row = createCommentElement(
      dataElement.name,
      dataElement.date,
      dataElement.comment
    );
    commentSection.appendChild(row);
  }
}
function createCommentElement(nameParam, dateParam, commentParam) {
  const row = document.createElement("div");
  row.classList.add("comment-element");
  const img = document.createElement("div");
  img.classList.add("comment-photo");
  const content = document.createElement("div");
  const header = document.createElement("div");
  header.classList.add("comment-header");
  const name = document.createElement("div");
  name.classList.add("comment-name");
  name.innerHTML = nameParam;
  const date = document.createElement("div");
  date.classList.add("comment-date");
  date.innerHTML = dateParam;
  const paragraph = document.createElement("p");
  paragraph.classList.add("comment-paragraph");
  paragraph.innerHTML = commentParam;
  row.appendChild(img);
  row.appendChild(content);
  content.appendChild(header);
  header.appendChild(name);
  header.appendChild(date);
  content.appendChild(paragraph);

  return row;
}
createStaticComments();
