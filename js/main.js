$( document ).ready(function() {

    console.log("hello from js file");



// 3_features script start
// add a click event listener on all divs with the class button
$('.button').on('click', function(){
  // deselect all button
  $('.button').removeClass('selected');
  //select only to the clicked button
  $(this).addClass('selected');
  //hide all text tabs
  $('.tab').addClass('hide');
  //create id of the tab corresponding to the clicked button
  const tabText ='#' + $(this).attr('id').slice(0, -7) + '-text';
  //remove class from the clicked tab
  $(tabText).removeClass('hide');
});
//3_features script end

});
