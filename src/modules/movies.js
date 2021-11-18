import { getLikes } from './likes.js';
import { modal, fetchAllPopup, fetchFilm } from './display.js';
import postNewLikes from './addlikes.js';

const movieID = [
  35814, 22622, 28417, 38923, 27387, 28376, 24493, 2589, 41883, 27195,
];
const movieCont = document.querySelector('.movie-cont');
const movieCounter = document.querySelector('.movie-counter');

const displayMovies = (movieName, image, likes) => {
  movieCont.innerHTML += `<li class ='p-relative d-flex a-center j-center flex-dir'>
    <img src=${image} alt='' class='image'>
    <section class='desc p-relative d-flex j-space-around'>
        <h2 class= 'item_id d-flex'>${movieName}</h2>
        <article class='likes p-relative d-flex flex-dir'>
            <i class='fas fa-heart'></i>
            <p><span class='item-likes'>${likes}</span><span>likes</span>
            </p>
        </article>
    </section>
    <div class='btn-cont p-relative d-flex a-center j-center flex-dir'>
        <button class='comment-btn p-relative' data-id='comment'>comment</button>
    </div>
   </li>`;

  const allCommentBtns = document.querySelectorAll('.comment-btn');
  const myLikes = document.querySelectorAll('.fa-heart');

  allCommentBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const movieTitle = e.target.parentElement.previousElementSibling.children[0].innerHTML;
      modal.style.display = 'block';
      fetchAllPopup(movieID, movieTitle);
    });
  });

  myLikes.forEach((like) => {
    like.addEventListener('click', (e) => {
      e.currentTarget.classList.add('red-back');
      const itemId = e.currentTarget.parentElement.parentElement.children[0].innerHTML;
      let newLikes = e.currentTarget.nextElementSibling.children[0].innerHTML;
      newLikes = parseInt(newLikes, 10);
      postNewLikes(itemId);
      newLikes += 1;
      e.currentTarget.nextElementSibling.children[0].innerHTML = newLikes;
    });
  });
};

const getMovies = async (id) => {
  try {
    const data = await (await fetchFilm(id)).json();
    const dataID = data.name;
    let likesData = await (await getLikes()).json();
    likesData = likesData.filter((item) => item.item_id === dataID);
    displayMovies(data.name, data.image.medium, likesData[0].likes);
    return likesData;
  } catch (err) {
    return err;
  }
};

const getMyMovies = (list) => {
  list.forEach((item) => {
    getMovies(item);
  });
  movieCounter.innerHTML = ` (${list.length})`;
};

export { movieID, getMyMovies };
