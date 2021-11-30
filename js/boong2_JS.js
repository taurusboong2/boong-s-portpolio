"use strict";

/* ====================
TEXT TAB
==================== */
{
    var targetLink = document.querySelectorAll('.left_wrap a');
    var tabContent = document.querySelectorAll('#tab_wrap p');

    for (let i = 0; i < targetLink.length; i++) {
        targetLink[i].addEventListener('click', function (e) {
            e.preventDefault();
            var orgTarget = e.target.getAttribute('href');
            var tabTarget = orgTarget.replace(".", "");

            for (let j = 0; j < tabContent.length; j++) {
                tabContent[j].style.display = 'none';
            }
            document.getElementById(tabTarget).style.display = "block";

            for (let x = 0; x < targetLink.length; x++) {
                targetLink[x].classList.remove('active');
                e.target.classList.add('active');
            }
        });
    }
    document.getElementById('tab1').style.display = "block";
}


/* ====================
third sec TAB
==================== */
{
    var targetLinkFour = document.querySelectorAll('.four_link a');
    var tabContentFour = document.querySelectorAll('.projects_wrap > div');

    for(let i = 0; i < targetLinkFour.length; i++){
        targetLinkFour[i].addEventListener('click', function(e){
            e.preventDefault();
            let orgTarget = e.target.getAttribute('href');
            let tabTarget = orgTarget.replace("#","");

            for(let j = 0; j < tabContentFour.length; j++){
                tabContentFour[j].style.display = 'none';
            }
            document.getElementById(tabTarget).style.display = "flex";

            for(let x = 0; x <  targetLinkFour.length; x++){
                targetLinkFour[x].classList.remove('active');
                e.target.classList.add('active');
            }
        });
    }
    document.getElementById('tabs_1').style.display = "flex";
}


/* ====================
MODAL
==================== */
{
    let modalWrap = document.getElementById("modal_wrap"),
        modals = document.querySelectorAll(".modal"),
        btns = document.querySelectorAll(".modalBtn"),
        close = document.querySelectorAll(".close");

    for(let i = 0; i < btns.length; i++){
        btns[i].onclick = function(e){
            e.preventDefault();
            modalWrap.style.display = "block";
            modals[i].style.display = "block";
        }
        close[i].onclick = function(){
            modalWrap.style.display = "none";
            modals[i].style.display = "none";
        }
        window.onclick = function(e){
            if(e.target == modals[i]){
                modalWrap.style.display = "none";
                modals[i].style.display = "none";
            }
        }
    }
    
}
