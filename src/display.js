const fetchFilm = (id) => fetch(`https://api.tvmaze.com/lookup/shows?tvrage= ${id}`);

const movieCont = document.querySelector('.movie-cont');

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
    btn.addEventListener('click', (e) => {
      const modal = document.getElementById('myModal');
      const modalContent = document.getElementById('modal-content');
      modalContent.append(e.target.parentElement.parentElement.children[0], e.target.parentElement.previousElementSibling.children[0].innerHTML);
      modal.style.display = 'block';

      document.getElementsByClassName('close')[0].addEventListener('click', (e) => {
        modal.style.display = 'none';
        modalContent.removeChild(e.target.parentElement.parentElement.children[0], e.target.parentElement.previousElementSibling.children[0].innerHTML);
      });
    
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
          if (modalContent.hasChildNodes) {
            modalContent.removeChild(event.target.parentElement.parentElement.children[0], event.target.parentElement.previousElementSibling.children[0].innerHTML);
          }
        }
      };
    })
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
