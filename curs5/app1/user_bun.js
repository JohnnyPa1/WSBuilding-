const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
let users;
users = await response.json();

export { users };