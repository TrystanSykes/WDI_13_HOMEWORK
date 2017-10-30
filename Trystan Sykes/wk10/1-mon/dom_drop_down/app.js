var cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX'];

$('document').ready(function() {
  cities.forEach(function(city){
    $select = $("<option/>");
    $select.text(city);
    $select.val(city.toLowerCase());
    $('#city-type').append($select);
  })
});

$('#city-type').on('change', function() {
  $('body').removeClass();
  $('body').addClass($('#city-type').val());
})