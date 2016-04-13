// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(document).ready( function() {
  $("#submit").on("click", function(event){
    event.preventDefault();
    console.log("clicked!");
    if ($("#search-type option:selected").val() == "artist") {
      searchByArtist($("input[name='keyword']").val());
    } else {
      searchByTrack($("input[name='keyword']").val());
    }
  });
});

function searchByArtist(keyword) {
  console.log("Search Artist");
  console.log(keyword);
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done ( function(response){
    console.log(response);
    // call show function below to append names
    showArtists(response);
  }).fail ( function (){
    console.log("fail");
  }).always( function(){
    console.log("Something happens");
  });
}


function searchByTrack(keyword) {
  console.log("Search Song");
  console.log(keyword);
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done ( function(response){
    console.log(response);
    // call show function below to append names
    showSongs(response);
  }).fail ( function (){
    console.log("fail");
  }).always( function(){
    console.log("Something happens");
  });
}

var showArtists = function(response) {
  for (var i = 0; i < response.artists.items.length; i++) {
    var li = $("<li class = info></li>");
    li.append(response.artists.items[i].name);
    $('#results').append(li);
  }
};

var showSongs = function(response) {
  for (var i = 0; i < response.tracks.items.length; i++) {
    var li = $("<li class = info></li>");
    li.append(response.tracks.items[i].name);
    $('#results').append(li);
  }
};
