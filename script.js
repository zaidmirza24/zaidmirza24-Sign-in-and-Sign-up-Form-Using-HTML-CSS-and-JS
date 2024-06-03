console.log("Hey, I am Zaid Mirza");

let signin = document.getElementById('signinbtn');
let signup = document.getElementById('signupbtn');
let namefield = document.getElementById('name-field');
let h1 = document.querySelector('.heading');

signin.addEventListener('click', () => {
    namefield.classList.add('hidden');
    h1.innerHTML = 'Sign in';
    signin.style.backgroundColor = '#A90BC9';
    signup.style.backgroundColor = 'white';
});

signup.addEventListener('click', () => {
    namefield.classList.remove('hidden');
    h1.innerHTML = 'Sign up';
    signup.style.backgroundColor = '#A90BC9';
    signin.style.backgroundColor = 'white';
});
