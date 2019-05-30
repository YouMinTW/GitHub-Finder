// use jQuery AJAX method

$(document).ready(function () {
    $('#searchUser').on("keyup", function (e) {
        // console.log(e.target.value);
        let username = e.target.value;

        // make request to github
        $.ajax({
            url:'https://api.github.com/users/'+username,
            data:{
                client_id:'4308aa219d753d2076fe',
                client_secret:'11ea76c24fa70f63194b8bf0f505a30e3a2c86a4'
            }
        }).done(function(user){
            // further request for repos info
            $.ajax({
                url:'https://api.github.com/users/'+username+'/repos',
                data:{
                    client_id:'4308aa219d753d2076fe',
                    client_secret:'11ea76c24fa70f63194b8bf0f505a30e3a2c86a4',
                    // 預設是照字母排列、排序改為按建立時間 升冪(ascending )
                    sort:"created: asc",
                    // 顯示五筆資料
                    per_page:5
                }            
            }).done(function (repos) {
                // console.log(repos);
                // jQuery each方法
                $.each(repos, function (index, repo) {
                //    不能再用html因為會整個改寫，用append
                    $("#repos").append(`
                        <div class="card mb-3">
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
                        
                    `);
                });
            });
            // console.log(user);
            // es6``可以在字串版中展現變數
            $("#profile").html(`
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
                <div id="repos"></div>
            `);
        });
    });
});