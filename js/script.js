var app = new Vue({
    el: "#app",
    data: {
        activeContact:[
            {
                name: 'Davide',
                src: 'img/davide.jpg',
                visible: true
            }
        ],
        openChat: [
            {
                name: 'Emanuele',
                src: 'img/ema.jpg',
                visible: true
            }
        ],

        contacts: [
            {
                name: 'Emanuele',
                src: 'img/ema.jpg',
                visible: true,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:58:55',
                        text: 'Dajeeeeee',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Yuri',
                src: 'img/yuri.jpg',
                visible: true,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Stai con i butei',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Cristiano',
                src: 'img/cri.jpg',
                visible: true,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Noleggiato il pullman per Lugano',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Bif',
                src: 'img/bif.jpg',
                visible: true,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Sei uscito con la tipa?',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Papaya',
                src: 'img/papaya.jpg',
                visible: true,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Non fare il genovese, offri l\'ape',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Tina',
                src: 'img/tina.jpg',
                visible: true,
                message: [
                    {
                        date: '15:30:55',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'come',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'Conquisteremo il mondo',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Jack Teacher',
                src: 'img/jack.jpg',
                visible: true,
                message: [
                    {
                        date: '15:30:55',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'come',
                        status: 'sent'
                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi funziona Javascript',
                        status: 'sent'
                    }
                ]
            }
        ]
    }
    
});