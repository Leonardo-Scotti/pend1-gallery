'use strict'

function createImage(imageObject) {
    const gallery = document.getElementById('gallery')
    const image = document.createElement('div')

    const img = document.createElement('img')
    const p = document.createElement('p')

    img.src = imageObject.url
    p.textContent = imageObject.nome

    image.appendChild(img)
    image.appendChild(p)

    gallery.appendChild(image)
}

function loadImages() {
    const images = [{
            nome: 'Homem Aranha',
            url: './assets/img/homem-aranha.jpg'
        },
        {
            nome: 'Homem Aranha 2',
            url: './assets/img/homem-aranha7.jpg'
        },
        {
            nome: 'Homem Aranha 3',
            url: './assets/img/homem-aranha6.jpg'
        },
        {
            nome: 'Homem Aranha 4',
            url: './assets/img/homem-aranha4.jpg'
        },
        {
            nome: 'Homem Aranha 5',
            url: './assets/img/homem-aranha5.jpg'
        },
        {
            nome: 'Homem Aranha 6',
            url: './assets/img/homem-aranha3.jpg'
        },
        {
            nome: 'Homem Aranha 7',
            url: './assets/img/homem-aranha2.jpg'
        },
        {
            nome: 'Homem Aranha 8',
            url: './assets/img/homem-aranha8.jpg'
        },
        {
            nome: 'Homem Aranha 9',
            url: './assets/img/homem-aranha9.jpg'
        },
        {
            nome: 'Homem Aranha 10',
            url: './assets/img/homem-aranha10.jpg'
        }
    ]

    /*let i = 0
    const limit = images.length
    while (i < limit) {
        console.log(images[i])
        i++
    } */
    images.forEach(createImage)
}



loadImages()