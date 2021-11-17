import { getComments, postComment } from './commentUpdate';

const fetchFilm = (id) =>
  fetch(`https://api.tvmaze.com/lookup/shows?tvrage= ${id}`);

const modal = document.getElementById('myModal');

const commentPopup = (
  premiered,
  rating,
  type,
  runtime,
  image,
  title,
  movieId
) => {
  const modalContent = document.getElementById('modal-content');
  const content = document.createElement('section');
  content.classList = 'align-center';
  content.innerHTML = `<img src=${image} alt="movie-pic">
  <h2 id="movie-title">${title}</h2>
  <section id="features" class="d-flex j-center j-space-around">
    <div id="featA" class="d-flex flex-dir">
      <span>Premiered Date: ${premiered}</span>
      <span>Movie Rating: ${rating}</span>
    </div>
    <div id="featB" class="d-flex flex-dir">
      <span>Movie Type: ${type}</span>
      <span>Runtime: ${runtime} hrs</span>
    </div>
  </section>
  <h2>comments <span id="comment-count"></span></h2>
  <ul class="comment-list"></ul>
  <form action="" class="d-flex flex-dir">
    <input type="text" id="user" placeholder="Your name" required>
    <input type="text" id="comment" placeholder="Your insights" required>
    <button type="submit" id="submit">Submit</button>
  </form>`;

  modalContent.appendChild(content);

  document.getElementsByClassName('close')[0].addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.removeChild(content);
  });

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      if (modalContent.hasChildNodes) {
        modalContent.removeChild(content);
      }
    }
  };

  const commentList = document.querySelector('.comment-list');
  const commentCount = document.querySelector('#comment-count');
  const eachComment = getComments(movieId);
  eachComment.then((data) => {
    commentCount.textContent = `(${data.length})`;
    if (data.length > 0 || data.error !== "'item_id' not found.") {
      data.forEach((comment) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span id="comment-date">${comment.creation_date}</span>
          <span id="comment-user">${comment.username}</span>
          <span id="comment-msg">${comment.comment}</span>
        `;
        commentList.append(li);
      });
    }
  });

  const submitComment = document.getElementById('submit');
  submitComment.addEventListener('click', (e) => {
    e.preventDefault();
    postComment(
      movieId,
      document.getElementById('user').value,
      document.getElementById('comment').value
    );
  });
};

const fetchPopup = async (id, movieName) => {
  try {
    const req = await (await fetchFilm(id)).json();
    if (req.name === movieName) {
      commentPopup(
        req.premiered,
        req.rating.average,
        req.type,
        req.averageRuntime,
        req.image.medium,
        req.name,
        req.id
      );
    }
    return req;
  } catch (error) {
    return error;
  }
};

const fetchAllPopup = (list, movieName) => {
  list.forEach((movie) => {
    fetchPopup(movie, movieName);
  });
};

export { modal, fetchAllPopup, fetchFilm };
