import "../styles/main.scss";

function startVid(e){
    const element = e;
}
//switch image to gif or vice 

document.addEventListener('DOMContentLoaded', () => {
    const displayProject = document.querySelectorAll('#display-project');
    displayProject.forEach(projectImg => {
        const stillImg = '../src/imgs/fortnite_ss.png';
        const movingImg = '../src/imgs/fortnite.gif';
        projectImg.addEventListener('mouseleave', () => {
            projectImg.src = movingImg;
        })
        projectImg.addEventListener('mouseover', () => {
            projectImg.src = stillImg;
        })
    })
});