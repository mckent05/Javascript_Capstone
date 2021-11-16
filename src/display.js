const fetchFilm = (id) => fetch(`https://api.tvmaze.com/lookup/shows?tvrage= ${id}`);

const movieCont = document.querySelector('.movie-cont');

const commentPopup = (e) => {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modal-content');
  const content = document.createElement('section');
  content.classList = 'align-center';
  content.innerHTML = `<img src=${e.target.parentElement.parentElement.children[0].src} alt="movie-pic">
  <h2 id="movie-title">${e.target.parentElement.previousElementSibling.children[0].innerHTML}</h2>
  <section id="features" class="d-flex j-center">
    <div id="featA" class="d-flex flex-dir">
      <span>RightA</span>
      <span>RightB</span>
    </div>
    <div id="featB" class="d-flex flex-dir">
      <span>LeftA</span>
      <span>LeftB</span>
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
  </form>`

  modalContent.append(content);
  modal.style.display = 'block';

  document.getElementsByClassName('close')[0].addEventListener('click', (e) => {
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
}

const displayMovies = (movieName, image) => {
  movieCont.innerHTML += `<li class ='p-relative d-flex a-center j-center flex-dir'>
    <img src=${image} alt='' class='image'>
    <section class='desc p-relative d-flex'>
        <h2 class= 'item_id d-flex'>${movieName}</h2>
        <article class='likes p-relative d-flex flex-dir'>
            <i class='far fa-heart'></i>
            <p><span class='item-likes'>5</span></span><span>likes</span>
            </p>
        </article>
    </section>
    <div class='btn-cont p-relative d-flex a-center j-center flex-dir'>
        <button class='comment-btn p-relative' data-id='comment'>comment</button>
    </div>
   </li>`;

  const allCommentBtns = document.querySelectorAll('.comment-btn');
  allCommentBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => commentPopup(e));
  })
};

const getMovies = async (id) => {
  try {
    const data = await (await fetchFilm(id)).json();
    displayMovies(data.name, data.image.medium);
    return data;
  } catch (err) {
    return err;
  }
};

const getMyMovies = (list) => {
  list.forEach((item) => {
    getMovies(item);
  });
};

export default getMyMovies;
