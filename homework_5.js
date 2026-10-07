//1
fetch("https://jsonplaceholder.typicode.com/users/5").
    then(response => response.json()).
    then(user => console.log(`Name: ${user.name}\nEmail: ${user.email}`)).
    catch(error => console.error(error));

//2
new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/11")
        .then(response => response.ok ?
            resolve(response.json()) : 
            reject(new Error("Пользователь не найден"))
        );
})
.catch(error => console.error(error));

//3
