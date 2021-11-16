const fetchFilm = (id) =>
  fetch(`https://api.tvmaze.com/lookup/shows?tvrage= ${id}`);

const movieCont = document.querySelector('.movie-cont');

const displayMovies = (movieName, image) => {
  movieCont.innerHTML += `<li>
    <img src=${image} alt='' class='image'>
    <div class='desc'>
        <h2 class= 'item_id'>${movieName}</h2>
        <div class='likes'>
            <i class='far fa-heart'></i>
            <p><span class='item-likes'>5</span></span><span>likes</span>
            </p>
        </div>
    </div>
    <div class='btn-cont'>
        <button class='comment-btn' data-id='comment'>comment</button>
        <button class='reservation-btn' data-id='reservation'>reservation</button>
    </div>
   </li>`;
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

export { getMyMovies };
