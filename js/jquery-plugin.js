(function($){
  $.fn.myClick = function(){
    return this.find('[my-dyn-fun2]').each(function(){
      var object = $(this);
      object.on('click', function(){alert("jQuery Plugin!!!");}); 
    });
  }
})(jQuery);

$(function(){
  $('#container').myClick();
  console.log($('#container').find('[my-dyn-fun2]'));
});