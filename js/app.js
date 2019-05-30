// use Vanilla JavaScript ES6

// init the instance
const github = new GitHub();
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser")

// search input event listener
searchUser.addEventListener('keyup',(e) =>{
  // get input text
  const userText = e.target.value;

  if(userText !== ""){

    // make http call
    github.getUser(userText)
      .then(data =>{
        
        //check user exist or not
        if(data.profile.message !== "Not Found"){
          // UI show profile
          ui.showUser(data.profile);
          ui.showRepos(data.repos);
        }  else  {
          // UI show alert
          ui.showAlert("User not found","alert alert-danger");
        }

      })
  } else {
    // UI clear profile
    ui.clearProfile();
  }
});