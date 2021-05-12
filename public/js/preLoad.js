$(document).ready(function ()
{

    
    $(window).on("load", function ()
    {
        
        anime.timeline({})
            .add({
                targets: '.spinner-wrapper',
                translateY: ["0", "-50%"],
                opacity: [1, 0],
                easing: "easeOutExpo",
                duration: 1000
            })
            .add({
                targets: '.loader-container',
                opacity: [1, 0],
                easing: "easeOutExpo",
                zIndex: {
                    value: -1
                },
                duration: 1000
            });
              async function demo() {
                await new Promise(r => setTimeout(r, 5000));
                let loaderContainer = document.querySelector('.loader-container');
                loaderContainer.parentElement.removeChild(loaderContainer);
              }
              
              demo();
        
 
            
    });
  

});