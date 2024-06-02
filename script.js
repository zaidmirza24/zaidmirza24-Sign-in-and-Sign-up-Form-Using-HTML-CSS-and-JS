console.log("Hey, Iam Zaid Mirza")

let signin = document.getElementById('signinbtn')
let signup = document.getElementById('signupbtn')
let namefield = document.querySelector('.input-field')
let h1 = document.querySelector('.heading')

    // signin.addEventListener('click',function(){
    //     signup.style.backgroundColor = 'white';
    // })
    // signup.addEventListener('click',function(){
    //     signin.style.backgroundColor = 'white';
    // })

signin.addEventListener('click',()=>{
    namefield.style.display = 'none';
    h1.innerHTML = `Sign in`
    if(signup.style.backgroundColor != '#A90BC9'){
        console.log('inside if')
        signin.style.backgroundColor = '#A90BC9'
        signup.style.backgroundColor = 'white'
    }
})
signup.addEventListener('click',()=>{
    namefield.style.display = 'flex';
    h1.innerHTML = `Sign up`
    if(signin.style.backgroundColor != '#A90BC9'){
        console.log('inside if')
        signup.style.backgroundColor = '#A90BC9'
        signin.style.backgroundColor = 'white'
        
    }
})

