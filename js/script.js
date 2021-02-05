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
        paperPlane: '',
        attivo: null,
        filtro: '',
        prova: '',
        contatore: 0,
        resultName: 'Emanuele',
        resultImg: 'img/ema.jpg',
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
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:58:55',
                        text: 'Dajeeeeee',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'boh',
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'roma',
                        status: 'sent'
                    }
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
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Stai con i butei',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'sisi',
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'veneto',
                        status: 'sent'
                    }
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
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Noleggiato il pullman per Lugano',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'comedffdfdafdasfffffffffffffffffffffffffffffffff',
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'asddfsdffa',
                        status: 'sent'
                    }
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
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Sei uscito con la tipa?',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'fffffffffffffffffffffffffffffffffffffffffff',
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi funziona Javascript',
                        status: 'sent'
                    }
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
                        status: 'receveid'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Non fare il genovese, offri l\'ape',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi funziona Javascript',
                        status: 'sent'
                    }
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
                        status: 'received'
                    },
                    {
                        date: '15:30:55',
                        text: 'ddddddddddddddddddddddddddddddddddddd il mondo',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'dddddddddddddddd',
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi fasfddddddddfdfasdfafdasfdasfaunziona Javascript',
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
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi funziona Javascript',
                        status: 'sent'
                    },
                    {
                        date: '15:30:55',
                        text: 'cfadfasfasdfasdfome',
                        status: 'received'
                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi fuadsfdasfdasfdasdfasfanziona Javascript',
                        status: 'sent'
                    }
                ]
            }
        ]
    },
    methods:{
        contactSelected(indexFunzione){
            this.contatore = indexFunzione;
        },
        changeMicrophone(){
            //if there is almost 1 charact in input "scrivi un messaggio" ? none to microphone, block to paper-plane
            if(this.prova.length > 0){
                this.paperPlane = 'fas fa-paper-plane';
            }
            
        },
        addMessage(){
            if(this.prova.length > 0){
                this.paperPlane ='';
                const newMessage = {
                    date: '15:30:55',
                    text: this.prova,
                    status: 'sent'
                };
                this.contacts[this.contatore].message.push(newMessage);
                this.prova = '';
                
                //I can write this function in two different methods..
                setTimeout(() => {
                    this.receivedMessage()
                }, 3000);

                // setTimeout(this.receivedMessage, 3000);
            }     
        },
        receivedMessage(){
            const mexRicevuto = {
                date: '15:30:55',
                text: 'Boolean',
                status: 'received'
            }
            this.contacts[this.contatore].message.push(mexRicevuto);
            this.prova = '';
        },
        filtroRicerca(){
            //*filter
            // console.log('ciao');
            // console.log(this.filtro);
            // let arrayProva = this.contacts.filter((element) => {
            //     return element.name.toLowerCase().includes(this.filtro.toLowerCase());
            // });

            // this.contacts = arrayProva;
            // console.log(arrayProva);
            //{forEach}
            this.contacts.forEach((element) => {
                if (element.name.toLowerCase().includes(this.filtro.toLowerCase())) {
                        element.visible = true;
                }
                else{
                    element.visible = false;
                }
            });
        },
        toggleClass(index){
            // this.attivo = !this.attivo;
            this.attivo = index;
            
            
        },
        deleteMessage(indice){
            this.contacts[this.contatore].message.splice(indice, 1);
            // this.contacts[this.contatore].message.slice(index, 1);
        },
        proviamo(index){
            console.log(this.contacts[this.contatore].message[index]);
            //entra in contatti dell'utente selezionato vai nel messaggi
            console.log(this.toggleClass);
        }
    },
    created(){
    }
    
});














//controlla array e metti tutto a falso 
// this.contacts.forEach(element => {
//     if(element.visible == true){
//         element.visible = false;
//     }
//     //dopo che hai messo a falso, dai vero a quello cliccato
    
// });
// this.contacts[indexFunzione].visible = true;
// //passo qua dentro la funzione per evitare di ripetere un altro click in html
// this.imgContact();
// imgContact(){
//     this.contacts.forEach(element => {
//         if (element.visible == true) {
//             this.resultName = element.name;
//             this.resultImg = element.src;
//         }
//         //dopo che hai messo a falso, dai vero a quello cliccato
//         return this.resultImg + this.resultName;
//     });

// 