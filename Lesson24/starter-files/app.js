document
 .getElementById('fetchAllPosts')
 .addEventListener('click', getPosts);

function getPosts() {
  fetch(URL)
  .then((response) => response.json())
  .then((json) => {
    json.map(post => {
      const div = document.createElement('div');
      div.classList.add('post');
      const h3 = document.createElement('h3');
      h3.innerText = post.title;

      const p = document.createElement('p');
      p.innerText = post.body;

      div.appendChild(h3);
      div.appendChild(p);

      // TODO: add update post <a> element with a link to update.html page containing a form element. Add query parameter (?id=post.id) to the url. See update.js file for the example of hor to get post.id values from the URL.


      // TODO: add delete post button with event listener to call deletePost (make sure to provide correct post id to it).

      const container = document.getElementById('container');
      container.appendChild(div);
    })
  });
}

function getPostById() {}

function updatePost() {}

function deletePost() {}
