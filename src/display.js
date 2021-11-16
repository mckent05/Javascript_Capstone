import { postLikes, getLikes } from './likes.js'

const fetchFilm = (id) => fetch(`https://api.tvmaze.com/lookup/shows?tvrage= ${id}`);

const movieCont = document.querySelector('.movie-cont');

const displayMovies = (movieName, image, likes) => {
  movieCont.innerHTML += `<li class ='p-relative d-flex a-center j-center flex-dir'>
    <img src=${image} alt='' class='image'>
    <section class='desc p-relative d-flex'>
        <h2 class= 'item_id d-flex'>${movieName}</h2>
        <article class='likes p-relative d-flex flex-dir'>
            <i class='far fa-heart'></i>
            <p><span class='item-likes'>${likes}</span><span>likes</span>
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
    const data_ID = data.name
    // postLikes(data.name)
    let likesData = await(await getLikes()).json()
    likesData = likesData.filter((item) => item.item_id === data_ID)
    displayMovies(data.name, data.image.medium, likesData[0].likes);
    return likesData
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
