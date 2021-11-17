const fetchFilm = (id) => fetch(`https://api.tvmaze.com/lookup/shows?tvrage= ${id}`);

const modal = document.getElementById('myModal');

const commentPopup = (premiered, rating, type, runtime, image, title) => {
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
  <ul class="comment-list">
    <li><span id="comment-date">16/11/2021</span><span id="comment-user">Name</span><span
        id="comment-msg">Message</span>
    </li>
  </ul>
  <form action="" class="d-flex flex-dir">
    <input type="text" id="user" placeholder="Your name">
    <input type="text" id="comment" placeholder="Your insights">
    <button type="submit" id="submit">Submit</button>
  </form>`;

  modalContent.append(content);

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
