class UI {
  constructor(){
    this.profile = document.getElementById("profile");
  }
  showUser(user){

    profile.innerHTML = `
          <div class="card">
          <h5 class="card-header"><strong>${user.name}</strong> <br>(${user.login})</h5>
          <div class="card-body">
              <div class="row">
                  <div class="col-md-3">
                      <img src="${user.avatar_url}" class="card-img-top img-thumbnail avatar" alt="${user.name}">
                      <a target="_blank" href="${user.html_url}" class="btn btn-primary btn-block">View Profile</a>
                  </div>
                  <div class="col-md-9">
                      <span class="badge badge-danger">Public Repos : ${user.public_repos}</span>
                      <span class="badge badge-warning">Public Gists : ${user.public_gists}</span>
                      <span class="badge badge-secondary">Followers : ${user.followers}</span>
                      <span class="badge badge-info">Following : ${user.following}</span>
                      <br><br>
                      <ul class="list-group list-group">
                          <li class="list-group-item">Company : ${user.company}</li>
                          <li class="list-group-item">Website/blog : ${user.blog}</li>
                          <li class="list-group-item">Location : ${user.location}</li>
                          <li class="list-group-item">Member Since : ${user.created_at}</li>
                      </ul>                                
                  </div>
              </div>
          </div>
      </div>
      <h3  class="mt-3">Latest Repos</h3>
      <div id="repos"></div>`
  }
  showRepos(repos){
    let output = "";
    repos.forEach((repo)=>{
      output += `
      <div class="card card-body mb-3">
        <div class="row no-gutters p-3">
          <div class="col-md-7">
              <h4>${repo.name} : </h4>
              <p>${repo.description}</p>
          </div>
          <div class="col-md-3">
              <div>
                  <span class="badge badge-danger">Forks : ${repo.forks_count}</span>
                  <span class="badge badge-warning">Watchers : ${repo.watchers_count}</span>
                  <span class="badge badge-secondary">Stars : ${repo.stargazers_count}</span>
              </div>
          </div>
          <div class="col-md-2">
              <div>
                  <a target="_blank" href="${repo.html_url}" class="btn btn-primary btn-block">Repo Page</a>
              </div>
          </div>
        </div>                                
      </div>
      `;
    });
    // output repos
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className){
    // clear any other remain alerts
    this.clearAlert();
    // Creat div
    const div = document.createElement("div");
    // Add class
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get Searchbox
    const searchbox = document.querySelector(".searchbox");
    // Insert Alert
    container.insertBefore(div , searchbox);
    // Time Out after 3sec
    setTimeout(() =>this.clearAlert(),3000);
  }
  clearAlert(){
    const currentAlert = document.querySelector(".alert");
    if(currentAlert){
      currentAlert.remove();
    }
  }

  clearProfile(){
    profile.innerHTML = "";
  }
}