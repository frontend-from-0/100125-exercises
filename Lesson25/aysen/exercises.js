// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
function fetchPosts1 () {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => console.log(posts))
    .catch((error) => console.error(error));
};

async function fetchPosts(){
  try{
    const response = await  fetch('https://jsonplaceholder.typicode.com/posts');
    const posts =await response.json();
    console.log(posts);
  }
  catch(error){console.error(error);

  }
}

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData1 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data fetched successfully!');
		}, 2000);
	});
};

fetchData1()
	.then((result) => console.log(result))
	.catch((error) => console.error(error));


const fetchData = async  () => {
  try{
    const result = await new Promise((resolve)=> {
      setTimeout(() => {
        resolve("Data fetched successfully!");},2000);
    });
      console.log(result);
      return result;
  }
  catch(error){console.error(error);}
}




// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUsers1 = () => {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((users) => {
			console.log(users);
			return users;
		});
};

fetchUsers1()
	.then((users) => console.log('Total users:', users.length))
	.catch((error) => console.error(error));



  const fetchUser = async () =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users= await response.json(); 
      console.log(users);
      console.log('Total users:', users.length);
      return users;
    }
    catch(error){console.error(error);

    }
  }

  fetchUser();
  
  // 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
  const fetchUserData1 = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  fetchUserData1()
    .then(user => console.log('User data:', user))
    .catch(error => console.error('Error:', error));


  const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const user = await response.json();
      return user;
    } catch (error) {
      console.error(error);
       throw error;
    }
  };
  
// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
  const getPostsAndComments1 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((post) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      );
    })
    .then((response) => response.json())
    .then((comments) => console.log(comments))
    .catch((error) => console.error(error));
  }

  const getPostsAndComments = async () =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const post= await response.json();

      const commentsResponse =await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      );
      const comments =await commentsResponse.json();
      console.log(comments);
      return comments;
    }
    catch(error){console.error(error)}
  }


// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.
  
const fetchWithTimeout1 = (url, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then(response => resolve(response.json()))
        .catch(error => reject(error));
    }, timeout);
  });
};

fetchWithTimeout1('https://jsonplaceholder.typicode.com/posts', 2000)
  .then(posts => console.log(posts))
  .catch(error => console.error(error));


async function fetchWithTimeout(url, timeout) {
  try {
   await new Promise(resolve => setTimeout(resolve, timeout));
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 2000);