const postLikes = (item) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/muSoj5Uz98agXzNuuOcQ/likes/', {
            method: 'POST',
            body: JSON.stringify({
                item_id: item
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
   })

const getLikes =  () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/muSoj5Uz98agXzNuuOcQ/likes/')

   export { postLikes, getLikes }