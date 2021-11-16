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
