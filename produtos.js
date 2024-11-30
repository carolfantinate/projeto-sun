let currentIndex = 1;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            // Corrige o índice se necessário
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }

            // Remove a classe "active" de todas as imagens
            slides.forEach(slide => slide.classList.remove('active'));

            // Adiciona a classe "active" à imagem atual
            slides[currentIndex].classList.add('active');
        }

        function changeSlide(direction) {
            showSlide(currentIndex + direction);
        }

        // Slide automático a cada 5 segundos
        setInterval(() => changeSlide(1), 5000);
