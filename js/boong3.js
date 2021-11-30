"use strict";
/* ====================
side bar
==================== */
{
    let hamBtn = document.getElementById("hamBtn"),
        sidebar = document.getElementById("sidenav"),
        nav = document.querySelectorAll(".navbarlist"),
        sections = document.querySelectorAll(".section");
    const firstTop = sections[0].offsetTop;
    const secondTop = sections[1].offsetTop;
    const thirdTop = sections[2].offsetTop;
    const fourthTop = sections[3].offsetTop;
    const fifthTop = sections[4].offsetTop;

    hamBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hamBtn.classList.toggle('is-active');
        sidebar.classList.toggle('goleft');
    })
}
$('#goToIntro').click(function () {
    $.fn.fullpage.moveTo(1);
})
$('#goToAbout').click(function () {
    $.fn.fullpage.moveTo(2);
})
$('#goToSkills').click(function () {
    $.fn.fullpage.moveTo(3);
})
$('#goToProjects').click(function () {
    $.fn.fullpage.moveTo(4);
})
$('#goToContact').click(function () {
    $.fn.fullpage.moveTo(5);
})




/* ====================
타이핑 효과
==================== */
// {
//     let i = 0,
//         text = "LEE JAEBOONG";
//     function typing() {
//         if (i < text.length) {
//             document.getElementById("text").innerHTML += text.charAt(i);
//             i++;
//             setTimeout(typing, 250);
//         }
//     }
//     typing();
// }


/* ====================
TEXT TAB
==================== */
{
    let targetLink = document.querySelectorAll('.left_wrap a');
    let tabContent = document.querySelectorAll('#tab_wrap p');

    for (let i = 0; i < targetLink.length; i++) {
        targetLink[i].addEventListener('click', function (e) {
            e.preventDefault();
            let orgTarget = e.target.getAttribute('href');
            let tabTarget = orgTarget.replace("#", "");

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
fourth sec TAB
==================== */
{
    var targetLinkFour = document.querySelectorAll('.four_link a');
    var tabContentFour = document.querySelectorAll('.projects_wrap > div');

    for (let i = 0; i < targetLinkFour.length; i++) {
        targetLinkFour[i].addEventListener('click', function (e) {
            e.preventDefault();
            let orgTarget = e.target.getAttribute('href');
            let tabTarget = orgTarget.replace("#", "");

            for (let j = 0; j < tabContentFour.length; j++) {
                tabContentFour[j].style.display = 'none';
            }
            document.getElementById(tabTarget).style.display = "flex";

            for (let x = 0; x < targetLinkFour.length; x++) {
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

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function (e) {
            e.preventDefault();
            modalWrap.style.display = "block";
            modals[i].style.display = "block";
        }
        close[i].onclick = function () {
            modalWrap.style.display = "none";
            modals[i].style.display = "none";
        }
        window.onclick = function (e) {
            if (e.target == modalWrap) {
                modalWrap.style.display = "none";
                modals[i].style.display = "none";
            }
        }
    }

}



/* ====================
Swiper
==================== */
{
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

