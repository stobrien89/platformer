function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        })
    })
    image.src = url;
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

loadImage('/img/tileset.png')
.then(img => {
    context.drawImage(img, 0 , 0);
})