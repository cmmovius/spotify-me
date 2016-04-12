// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(document).ready( function() {
  $("#submit").on("click", function(event){
    event.preventDefault();
    console.log("clicked!");
    searchByArtist($("input[name='keyword']").val());
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
    showInfo(response);
  }).fail ( function (){
    console.log("fail");
  }).always( function(){
    console.log("Something happens");
  });
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}

var showInfo = function(response) {
  console.log(response.artists.items.length);
  for (var i = 0; i < response.artists.items.length; i++) {
    $('#results').append("<li class = info></li>")
    $('.info').append(response.artists.items[i].name)

  }
}
