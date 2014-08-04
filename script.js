var myArr = [
  {
    url:"https://github.com/calweb",
    avatar_url: "https://avatars.githubusercontent.com/u/115030?v=1",
    name: "Calvin Webster",
    repos_url: "https://api.github.com/users/calweb/repos",
    location: "Charleston, SC",
    followers: 64,
    following: 96
  },

  {
    url:"https://github.com/lapty",
    avatar_url: "https://avatars.githubusercontent.com/u/8241367?v=1",
    name: "Charles Nguyen",
    repos_url: "https://api.github.com/users/lapty/repos",
    location: "Charleston, SC",
    followers: 7,
    following: 16
  },

  {
    url:"https://github.com/rphuber",
    avatar_url: "https://avatars.githubusercontent.com/u/8245890?v=1",
    name: "Ryan Huber",
    repos_url: "https://api.github.com/users/rphuber/repos",
    location: "Charleston, SC",
    followers: 6,
    following: 14
  },

  {
    url:"https://github.com/crotten",
    avatar_url: "https://avatars.githubusercontent.com/u/8238886?v=1",
    name: "Chris Otten",
    repos_url: "https://api.github.com/users/crotten/repos",
    location: "Charleston, SC",
    followers: 9,
    following: 40
  },

  {
    url:"https://github.com/wgallop99",
    avatar_url: "https://avatars.githubusercontent.com/u/7799207?v=2",
    name: "William Gallop",
    repos_url: "https://api.github.com/users/wgallop99/repos",
    location: "Charleston, SC ",
    followers: 6,
    following: 0
  },
  {
    url: "https://github.com/users/CTFigueroa",
    avatar_url: "https://avatars.githubusercontent.com/u/8238249?v=2",
    name: "Cory Figueroa",
    repos_url: "https://api.github.com/users/CTFigueroa/repos",
    location: "Charleston, SC",
    followers: 8,
    following: 8,
  }
]

//
// var myTemplate =
// "
//   <a href=""><img src="" alt=""></a>
//   <h2>Name: </h2>
// <ul>
//   <li><a href=""></a></li>
//   <li>Location: </li>
//   <li>Followers: </li>
//   <li>Following: </li>
// </ul>"

$(document).ready(function(){

  var myTempFunction = function(arrayName, $targetElmt){
    var beginString = "";
    for(i=0; i< arrayName.length; i++){
      beginString += "<div class=\"userInfo\">"
      +  "<a href=\"" + arrayName[i].url + "\">" + "<img src=\""+ arrayName[i].avatar_url + "\" alt=\"\">" + "</a>"
      +  "<h2>"  + arrayName[i].name + "</h2>"
      +  "<ul>"
      +  "<li>" + "<a href=\"" + arrayName[i].repos_url +"\">" + arrayName[i].name + "'s Repositories" + "</a>" + "</li>"
      +  "<li>" + "Location: " + arrayName[i].location + "</li>"
      +  "<li>" + "Followers: " + arrayName[i].followers + "</li>"
      +  "<li>" + "Following: " + arrayName[i].following + "</li>"
      +  "</ul>"
      +  "</div>"
    }

    $targetElmt.append(beginString);

  }

  myTempFunction(myArr, $(".container"));

});
