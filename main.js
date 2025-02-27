  const images = [
        { src: "./img/watch1.png", gradient: "linear-gradient(to right, #f5b78b, #f6d6b5)" },
        { src: "./img/watch2.png", gradient: "linear-gradient(to right, #a1c4fd, #c2e9fb)" },
        { src: "./img/watch3.png", gradient: "linear-gradient(to right, #fbc2eb, #a6c1ee)" }
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById("watch-image");
    const bodyElement = document.body; // Берем весь фон страницы

    function changeImage(index) {
        currentIndex = index;
        imgElement.src = images[currentIndex].src;
        bodyElement.style.background = images[currentIndex].gradient;
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        changeImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        changeImage(currentIndex);
    }
