$ (document).ready(function() {
   $('.tabs__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(300);
   })
})