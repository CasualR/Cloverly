"use strict"

const iconMenu = document.querySelector('.header_burger');

if (iconMenu) {
    const menuBody = document.querySelector('.header_list');
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}



if (document.documentElement.clientWidth < 900) {
const menuSpoiler = document.querySelectorAll('.footer_list_title');

function accordion() {
    const itemToggle = this.getAttribute('data-accord');
    const content = this.parentNode.querySelector('.footer_list');
    
    if (itemToggle == 'false') {
        this.setAttribute('data-accord', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
    } else if (itemToggle == 'true') {
        this.setAttribute('data-accord', 'false');
        content.style.maxHeight = null;
    }
}
menuSpoiler.forEach(item => item.addEventListener('click', accordion));
}



const animItems = document.querySelectorAll('.anim_items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim_no')) {
                animItem.classList.remove('active');
                }
            }
        }
        
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}


    let tab = function () {
        let tabNav = document.querySelectorAll('.tab');
        let tabContent = document.querySelectorAll('.blue_image'), tabName;

        tabNav.forEach( item=> {
            item.addEventListener('click', selectTabNav)
        })

        function selectTabNav() {
            tabNav.forEach(item=> {
                item.classList.remove('active');
            })
            this.classList.add('active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }
        function selectTabContent(tabName) {
            tabContent.forEach(item=>{
                item.classList.contains(tabName)? item.classList.add('active'): 
                item.classList.remove('active');
            })
        }
    };

    tab();