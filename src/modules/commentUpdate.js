const baseUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fmn7FvfYPqUQ1nyJXuIv/comments';

const postComment = async (id, name, comment) => {
  try {
    if (name !== '' && comment !== '') {
      const newComment = {
        item_id: id,
        username: name,
        comment: comment,
      };

      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
    }
    name = '';
    comment = '';
  } catch (error) {
    return error;
  }
};

export { postComment };
