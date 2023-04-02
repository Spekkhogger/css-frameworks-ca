const newUser = document.querySelector("#new-user");
const accountField = document.querySelector("#card-body")
const signBtn = document.querySelector("#sign-btn")
const title = document.querySelector("#login");

newUser.addEventListener("click", function(){
    title.innerHTML = `Sign up`

    accountField.innerHTML = `
                <form action="" method="post" class="needs-validation">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="email">
                      <label for="email">Enten Email</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="name">
                      <label for="name">Enter name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="password">
                      <label for="password">Enter password</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="password">
                      <label for="password">Repeat password</label>
                    </div>
                    <button type="submit" class="btn btn-primary" id="sign-btn">Sign up!</button>
                </form>
                <a href="../index.html" class="text-dark" id="new-user">Already have an account? Sign in here!</a>
    `;
})

signBtn.addEventListener("click", function(event){
  event.preventDefault();
  document.location.href = "../profile/index.html";
  console.log("Hello world")
})

// signBtn.addEventListener("click", function(){
//     // window.location.href("profile/index.html")
//     console.log("Hello world")
// })