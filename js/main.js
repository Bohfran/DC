const imageObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target
                    // console.log("lazy loading ", lazyImage);
                    lazyImage.src = lazyImage.dataset.src
                    lazyImage.classList.remove("lzy_img");
                    imgObserver.unobserve(lazyImage);
                }
            })
        });
        const arr = document.querySelectorAll('.lazyloadimg')
        arr.forEach((v) => {
            imageObserver.observe(v);
        })
