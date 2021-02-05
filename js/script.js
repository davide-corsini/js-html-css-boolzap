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
        attivo: false,
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
                staScrivendo: false,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent',
                        attivo: false
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'received',
                        attivo: false
                    },
                    {
                        date: '10/01/2020 15:58:55',
                        text: 'Dajeeeeee',
                        status: 'sent',
                        attivo: false
                    },
                    {
                        date: '15:30:55',
                        text: 'boh',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'roma',
                        status: 'sent',
                        attivo: false

                    }
                ]
            },
            {
                name: 'Yuri',
                src: 'img/yuri.jpg',
                visible: true,
                staScrivendo: false,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Stai con i butei',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'sisi',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'veneto',
                        status: 'sent',
                        attivo: false

                    }
                ]
            },
            {
                name: 'Cristiano',
                src: 'img/cri.jpg',
                visible: true,
                staScrivendo: false,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Noleggiato il pullman per Lugano',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'comedffdfdafdasfffffffffffffffffffffffffffffffff',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'asddfsdffa',
                        status: 'sent',
                        attivo: false

                    }
                ]
            },
            {
                name: 'Bif',
                src: 'img/bif.jpg',
                visible: true,
                staScrivendo: false,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Sei uscito con la tipa?',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'fffffffffffffffffffffffffffffffffffffffffff',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi funziona Javascript',
                        status: 'sent',
                        attivo: false

                    }
                ]
            },
            {
                name: 'Papaya',
                src: 'img/papaya.jpg',
                visible: true,
                staScrivendo: false,
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'come',
                        status: 'receveid',
                        attivo: false
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Non fare il genovese, offri l\'ape',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi funziona Javascript',
                        status: 'sent',
                        attivo: false

                    }
                ]
            },
            {
                name: 'Tina',
                src: 'img/tina.jpg',
                visible: true,
                staScrivendo: false,
                message: [
                    {
                        date: '15:30:55',
                        text: 'ciao',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'come',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'ddddddddddddddddddddddddddddddddddddd il mondo',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'dddddddddddddddd',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi fasfddddddddfdfasdfafdasfdasfaunziona Javascript',
                        status: 'sent',
                        attivo: false

                    }
                ]
            },
            {
                name: 'Jack Teacher',
                src: 'img/jack.jpg',
                visible: true,
                staScrivendo: false,
                message: [
                    {
                        date: '15:30:55',
                        text: 'ciao',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'come',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi funziona Javascript',
                        status: 'sent',
                        attivo: false

                    },
                    {
                        date: '15:30:55',
                        text: 'cfadfasfasdfasdfome',
                        status: 'received',
                        attivo: false

                    },
                    {
                        date: '18:30:55',
                        text: 'Non mi fuadsfdasfdasfdasdfasfanziona Javascript',
                        status: 'sent',
                        attivo: false

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
                    status: 'sent',
                    attivo: false
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
                status: 'received',
                attivo: false
            }
            this.contacts[this.contatore].message.push(mexRicevuto);
            this.prova = '';

        },
        filtroRicerca(){
            //*filter
            
            // this.contacts.filter((element) => {
            //     return element.name.toLowerCase().includes(this.filtro.toLowerCase());
            // });
            
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
            
            // this.attivo = index;


            //qui gli sto dicendo entra in array di contatore clicckato vai nei messaggi con index corrispondente, vai in attivo e fa si che attivo é uguale alla sua stessa negazione
            this.contacts[this.contatore].message[index].attivo = !this.contacts[this.contatore].message[index].attivo; 
            // this.attivo = this.contacts[this.contatore].message[index];
            // console.log(this.attivo);
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
        daje(){
            this.contacts.
        }
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