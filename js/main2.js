const texta = document.querySelectorAll('div');


function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(text) {
    text.src = text.getAttribute('head_active');
}

const observer = new IntersectionObserver(handleImg, options);

texta.forEach(img => {
    observer.observe(img);
})