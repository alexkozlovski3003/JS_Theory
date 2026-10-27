// //Homework 5 by A. Kazlouski
// //1
// fetch("https://jsonplaceholder.typicode.com/users/5").
//     then(response => response.json()).
//     then(user => console.log(`Name: ${user.name}\nEmail: ${user.email}`)).
//     catch(error => console.error(error));

// //2
// new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users/11")
//         .then(response => response.ok ?
//             resolve(response.json()) : 
//             reject(new Error("Пользователь не найден"))
//         );
// })
// .catch(error => console.error(error));

// //3
// console.log("===Loading starts===");
// fetch("https://jsonplaceholder.typicode.com/users/1").
// then(response => response.json()).
// then(user => console.log(`Name: ${user.name}\nEmail: ${user.email}`)).
// catch(error => console.error(error)).
// finally(() => console.log("===Loading ends==="));

// //4
// async function getTodos() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const todos = await response.json();
//         todos.slice(0, 10).forEach(todo => console.log(todo));
//     } catch (error) {
//         console.error(error);
//     }
// }

// getTodos();

// //5
// async function getUserAndPosts() {
//     try {
//         const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/2");
//         const user = await userResponse.json();
//         const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//         const posts = await postsResponse.json();
//         console.log(`User: ${user.name}\nPosts: ${posts.length}`);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getUserAndPosts();

// //6
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("myPromise completed successfully");
//     }, 3000);
// });

// myPromise.then(result => {
//     console.log(result);
// });

// //7
// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("newPromise failed"));
//     }, 2000);
// });

// newPromise.catch(error => {
//     console.error(error.message);
// });

// //8
// async function getParallelData() {
//     try {
//         const [userResponse, albumsResponse] = await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users/1"),
//             fetch("https://jsonplaceholder.typicode.com/albums")]);
//         const user = await userResponse.json();
//         const albums = await albumsResponse.json();
//         console.log(`User: ${user.name}\nAlbums: ${albums.length}`);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getParallelData();

// //9
// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Result of promise1");
//     }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Result of promise2");
//     }, 2000);
// });

// Promise.race([promise1, promise2]).then(result => {
//     console.log(result);
// });

// //10
// class ApiService {

//     async getData(endpoint) {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
//         return await response.json();
//     }
// }

// async function apiServiceTest() {
//     const apiService = new ApiService();
//     const data = await apiService.getData("users/3");
//     console.log(data);
// }

// apiServiceTest();