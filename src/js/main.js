import '../styles/main.scss';

function startVid(e){
    const element = e;
}

/* document.addEventListener('DOMContentLoaded', () => {
    //gif still to video
    const displayProject = document.querySelectorAll('.display-project');
    displayProject.forEach(projectImg => projectImg.addEventListener('mouseover', () => {
        displayProject.src = '../src/img/fornitegif.gif'
        })
    );
   // displayProject.addEventListener('mouseleave', () => {displayProject.src = '../src/img/fornite_ss.png'})
}) */

document.addEventListener('DOMContentLoaded', () => {
    const displayProject = document.querySelectorAll('#display-project');
    displayProject.forEach(projectImg => {
        const stillImg = '../src/img/fortnite_ss.png';
        const movingImg = '../src/img/fortnite.gif';
        projectImg.addEventListener('mouseover', () => {
            projectImg.src = movingImg;
        })
        projectImg.addEventListener('mouseleave', () => {
            projectImg.src = stillImg;
        })
    })
});