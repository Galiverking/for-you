document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('album');
    const albumTitle = urlParams.get('title');
    const albumImages = {
        album1: ['images/album1/1.jpg', 'images/album1/2.jpg', 'images/album1/3.jpg', 'images/album1/4.jpg', 'images/album1/5.jpg', 'images/album1/6.jpg', 'images/album1/7.jpg', 'images/album1/8.jpg', 'images/album1/9.jpg', 'images/album1/10.jpg', 'images/album1/11.jpg', 'images/album1/12.jpg', 'images/album1/13.jpg', 'images/album1/14.jpg', 'images/album1/15.jpg'],
        album2: ['images/memory4.png', 'images/memory5.png', 'images/memory6.png'],
        album3: ['images/memory7.png', 'images/memory8.png', 'images/memory9.png']
    };

    document.getElementById('album-title').textContent = albumTitle;

    const albumContainer = document.querySelector('.album-images');
    albumImages[albumId].forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'img-fluid mb-3';
        albumContainer.appendChild(img);
    });
});
