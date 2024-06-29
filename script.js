const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
  
const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});



var radius = 8;
TweenMax.staggerFromTo('.blob', 4 ,{
  cycle: {
    attr:function(i) {
      var r = i*90;
      return {
        transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
      }      
    }
  }  
},{
  cycle: {
    attr:function(i) {
      var r = i*90+360;
      return {
        transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
      }      
    }
  },
  ease:Linear.easeNone,
  repeat:-1
});
