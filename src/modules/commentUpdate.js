const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fmn7FvfYPqUQ1nyJXuIv/comments';

const postComment = async (id, name, comment) => {
  try {
    let newComment;
    if (name !== '' && comment !== '') {
      newComment = {
        item_id: id,
        username: name,
        comment,
      };

      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      document.getElementById('user').value = '';
      document.getElementById('comment').value = '';
    }
    return newComment;
  } catch (error) {
    return error;
  }
};

const getComments = async (id) => {
  const req = await fetch(`${baseUrl}?item_id=${id}`);
  const res = await req.json();
  const data = await res;
  return data;
};
export { getComments, postComment };
