(function test(){
    const ogGif = document.querySelectorAll('[id="display-project"]');
    ogGif.forEach(element => {
        element.addEventListener('mouseenter', function() {
            
            if(element.className == 'project-preview-1'){
                element.src = './public/watchnrategifstill.png'
            } else if(element.className == 'project-preview-2'){
                element.src = './public/cardmemoryss.png'
            } else if(element.className == 'project-preview-3'){
                element.src = './public/ucss.png'
            } else if(element.classList == 'project-preview-4'){
                element.src = './public/cvbss.png'
            }
        })
        element.addEventListener('mouseleave', function(){
            if(element.classList == 'project-preview-1'){
                element.src = './public/watchnrategif.gif'
            } else if(element.classList == 'project-preview-2'){
                element.src = './public/card_memory_screen.gif'
            } else if(element.classList == 'project-preview-3'){
                element.src = './public/under.gif'
            } else if(element.classList == 'project-preview-4'){
                element.src = './public/cvbscreen.gif'
            }
        })
    });


})();