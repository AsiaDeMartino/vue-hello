// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const app = new Vue (
    {
        el: '#h1',
        data: {
            message: 'Vue prova',
        }
    }
);

//bonus

const img = new Vue (
    {
        el: '#img',
        data: {
            immagine: 'https://picsum.photos/200/300'
        }
    }
);
