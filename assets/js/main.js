(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  window.addEventListener('load', () => {
    if (document.querySelectorAll('.goBack').length > 0) { 
        let backBtn = document.querySelector('.goBack')
        let nextBtn = document.querySelector('.goNext')
        // Next
        nextBtn.addEventListener('click', () => {
            let Blks = document.querySelector('.stepBlk.active')
            let NextBlk = Blks.nextElementSibling
            if (NextBlk) {
                Blks.parentElement.parentElement.setAttribute('data-label', NextBlk.dataset.stepLabel)
                console.log(NextBlk.dataset.stepLabel)
                Blks.classList.remove('active')
                NextBlk.classList.add('active')
            }else{
                window.location.href = window.origin+"/result.html"
            }
        })
        // Back
        backBtn.addEventListener('click', () => {
            let Blks = document.querySelector('.stepBlk.active')
            let pastBlk = Blks.previousElementSibling
            if (pastBlk) {
                Blks.parentElement.parentElement.setAttribute('data-label', pastBlk.dataset.stepLabel)
                Blks.classList.remove('active')
                pastBlk.classList.add('active')
            }else{
                alert('Stop');
            }
        })
    } 
  })
  
 
})(jQuery);
