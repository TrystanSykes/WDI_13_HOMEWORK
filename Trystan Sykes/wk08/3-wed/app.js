$btn = $('.search');
$input = $('.input');
$resultsBox = $('.results_box');

$btn.on('click', function() {
  $resultsBox.empty()
  var options = {
      url: 'http://www.omdbapi.com',
      method: 'get',
      data: {
        apikey: '2f6435d9',
        s: $input.val()
      }
    }

  $.ajax(options).done(function(resp){
    if (resp['Search']) {
      resp['Search'].forEach(function(movie){
        $title = $('<h2>');
        $title.text(movie['Title'] + " - " + movie['Year']);
        $link = $('<a>', { href: 'http://www.imdb.com/title/' + movie['imdbID'], target: "_blank" });
        $link.append($title);
        $resultsBox.append($link)
      })
    } else {
      $noResults = $('<h2>');
      $noResults.text('No results were found');
      $resultsBox.append($noResults);
    }
  })
})