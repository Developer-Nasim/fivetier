(function($) {
  "use strict";
  
 // menu 
  window.addEventListener('load', () => {
    $('.siteBar-btn').click( function (){ 
        $('.mobile-menu').toggleClass('siteBar');   
    });
 

    //   Set Body padding
    function SetPaddingInBodyForFooter() {
        let body = document.querySelector('body')
        let footer = document.querySelector('footer')
        body.style.paddingBottom = footer.clientHeight+"px";
    }
    SetPaddingInBodyForFooter()

    function MultistepFuncs() { 
        if (document.querySelectorAll('.goBack').length > 0) { 
            let inps = document.querySelectorAll('input')
            let backBtn = document.querySelector('.goBack')
            let nextBtn = document.querySelector('.goNext')

            // Press Enter
            function PressEnter() {
                inps.forEach(inp => {
                    inp.addEventListener("keyup", (event) => {
                        if (event.keyCode === 13) {
                            NextStep()
                        }
                    });
                })
            }
            PressEnter()

            // Next Step
            function NextStep() {
                let Blks = document.querySelector('.stepBlk.active')
                let NextBlk = Blks.nextElementSibling
                if (NextBlk) {
                    Blks.parentElement.parentElement.setAttribute('data-label', NextBlk.dataset.stepLabel)  
                    // Blks.parentElement.style.minHeight = 100+Blks.clientHeight+'px'
                    Blks.classList.remove('active')
                    NextBlk.classList.add('active')
                }else{
                    window.location.href = window.origin+"/result.html"
                }
            }

            // Prev Step
            function PrevStep() {
                let Blks = document.querySelector('.stepBlk.active')
                let pastBlk = Blks.previousElementSibling
                if (pastBlk) {
                    Blks.parentElement.parentElement.setAttribute('data-label', pastBlk.dataset.stepLabel)
                    // Blks.parentElement.style.minHeight = 100+pastBlk.clientHeight+'px'
                    Blks.classList.remove('active')
                    pastBlk.classList.add('active')
                }else{
                    alert('Stop');
                }
            }

            // Next
            nextBtn.addEventListener('click', () => {
                NextStep()
            })
            // Back
            backBtn.addEventListener('click', () => {
                PrevStep()
            })
        } 
    }
    MultistepFuncs()
  })
  
 
})(jQuery);
