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
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}
