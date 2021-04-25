console.log("hi")

window.addEventListener('DOMContentLoaded', () => {

    const login = document.getElementById("login");
    console.log(login)
    const userNum = document.getElementById("usuario");
    console.log(userNum)

    const userPassword = document.getElementById("password");
    console.log(password)


    login.addEventListener('submit', (e) =>{
      console.log("hi")
      e.preventDefault();
  
      const newUser = {
          number: userNum.value,
          password: userPassword.value
      }
  } )
  })
