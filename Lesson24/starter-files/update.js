const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
console.log(params, postId);
