import { BandSiteAPI } from "./band-site-api.js";
const bandSiteAPI = new BandSiteAPI("0323f365-7506-4a0f-bddf-3ad2107eb92f");

bandSiteAPI.getComments().then((response) => {
  createComments(response);
});

const form = document.getElementById("comment-form");
const commentSection = document.getElementById("comment-section");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = form.elements[0];
  const comment = form.elements[1];

  let isNameValid = isValid(name);
  let isCommentValid = isValid(comment);
  if (isNameValid && isCommentValid) {
    await bandSiteAPI.postComment({
      name: name.value,
      comment: comment.value,
    });
    name.value = "";
    comment.value = "";

    await rerender();
  }
});

const rerender = async () => {
  commentSection.innerHTML = "";

  const updatedComments = await bandSiteAPI.getComments();
  createComments(updatedComments);
};

function isValid(input) {
  if (input.value.trim() === "") {
    input.classList.add("error");
    return false;
  }
  return true;
}

function createComments(comments) {
  let elements = "";
  for (let dataElement of comments) {
    elements += Comment(dataElement);
  }

  commentSection.innerHTML = elements;
  addEventListeners(comments);
}

async function onDelete(event) {
  const id = event.target.id.split("_")[0];
  bandSiteAPI.deleteComment(id).then(() => {
    rerender();
  });
}

function addEventListeners(comments) {
  for (let comment of comments) {
    document
      .getElementById(`${comment.id}_delete`)
      .addEventListener("click", onDelete);
    document
      .getElementById(`${comment.id}_like`)
      .addEventListener("click", onLike);
  }
}

async function onLike(event) {
  const id = event.target.id.split("_")[0];
  bandSiteAPI.likeComment(id).then(() => {
    rerender();
  });
}

const Comment = (comment) => {
  return `
    <div class="comment-element" id="${comment.id}">
      <div class="comment-photo"> </div>
      <div class="comment-content">
        <div class="comment-header">
          <div class="comment-name">
            ${comment.name}
          </div>
          <div class="comment-date">
            ${new Date(comment.timestamp).toLocaleDateString()}
          </div>
        </div>

        <p class="comment-paragraph"> 
          ${comment.comment}
        </p>
      </div>
      
      <div class="comment-element__buttons"> 

        <button class="comment-element__button" id="${
          comment.id
        }_delete">DELETE</button>
        <button class="comment-element__button" id="${
          comment.id
        }_like">LIKE</button>
        <div class="comment-element__like">
          <i class="fa-solid fa-thumbs-up"></i>
          <div class="comment-element__number" id="${comment.id}_likeCount">
            ${comment.likes}
          </div>
        </div>
      </div>
    </div>
  `;
};
