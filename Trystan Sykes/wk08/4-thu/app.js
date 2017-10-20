$search = $('.search')
$btn = $('.search_btn')
$resultsBox = $('.results_box')

$btn.on('click', function(){
  var options = {
    url: "http://api.giphy.com/v1/gifs/search",
    method: 'get',
    data: {
      api_key: 'vhm3aM6NLjw97DOLzVOMVsjx20n7as4H',
      q: $search.val(),
      limit: 10
    }  
  }

  $.ajax(options).done(function(resp){
      debugger
    resp['data'].forEach(function(gif){
      $img = $('<img>')
      $img.attr('src', gif['images']['original']['url']) 
      $resultsBox.append($img)
      // console.log(resp)
    })
  })
})

$(window).scroll(function () {

  if ($(window).scrollTop() + $(window).height() == $(document).height()) 
     {

      var options = {
      url: "http://api.giphy.com/v1/gifs/search",
      method: 'get',
      data: {
        api_key: 'vhm3aM6NLjw97DOLzVOMVsjx20n7as4H',
        q: $search.val(),
        limit: 10,
        offset: $resultsBox.children().length
      }  
    }

    $.ajax(options).done(function(resp){
      resp['data'].forEach(function(gif){
        $img = $('<img>')
        $img.attr('src', gif['images']['original']['url']) 
        $resultsBox.append($img)
      })
    }) 
          
  }
});


