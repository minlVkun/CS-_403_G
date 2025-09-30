// Khi bấm vào category-pill sẽ tự động đưa vào ô search
document.querySelectorAll('.category-pill').forEach(p => {
    p.addEventListener('click', () => {
        const input = document.querySelector('.search-bar input');
        input.value = p.textContent;
    });
});

// Carousel auto chạy 8 giây
var myCarousel = document.querySelector('#courseCarousel');
if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 8000,
        ride: 'carousel'
    });
}
