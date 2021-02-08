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
        greenCheck: false,
        ultimoAccesso: '',
        messaggiEliminati: [],
        notify: false, //cambio campana
        timingAccess: moment().locale('it').format('LT'),
        paperPlane: '',
        dark: false,    //dark mode to implementation of background color black;
        attivo2: false, //activation of dark mode
        displayDark: false, //activation of display as background-image
        movement: false,    //movement of my circle for the dark mode
        filtro: '', //filter for research of contacts
        prova: '',  //variable for v-model for create new message from me
        contatore: 0,  //fondamental counter for the code for selection of contact selected
        
        contacts: [
            {
                name: 'Emanuele',
                src: 'img/ema.jpg',
                visible: true,
                staScrivendo: false,
                online: false,
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
                        date: '15:58:55',
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
                online: false,

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
                online: false,

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
                online: false,

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
                online: false,

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
                        status: 'receveid',
                        attivo: false
                    },
                    {
                        date: '15:30:55',
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
                online: false,

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
                online: false,

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
    mounted(){
        console.log(this.messaggiEliminati, 'io sono messaggi eliminati');

        console.log(this.contacts, 'io sono contacts nel mounted' );
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
        addMessage(index){
            
                setTimeout(() => {
                    this.contacts[index].online = true;
                    
                    
                },100);
                setTimeout(() => {

                    if(this.prova.length > 0){
                        this.greenCheck = 'green';
                        this.paperPlane ='';
                        const newMessage = {
                            date: this.timingAccess,
                            text: this.prova,
                            status: 'sent',
                            attivo: false
                        };
                    //creation new message from me
                        this.contacts[index].message.push(newMessage);
                        this.prova = '';
        
        
                        
                        this.contacts[index].staScrivendo = true;
                        //I can write this function in two different methods..
                        
                        
                    }     
                },1000);
                setTimeout(() => {
                    setTimeout(() => {

                        this.contacts[index].online = true;
                        setTimeout(() => {
                            this.contacts[index].online = false;

                        });
                    },1000);
                    
                    this.receivedMessage(index);
                    
                }, 5000);
            },
        receivedMessage(index){
            //Creation new message receive from other contact
            const mexRicevuto = {
                date: this.timingAccess,
                text: 'ok',
                status: 'received',
                attivo: false
            }
            this.contacts[index].message.push(mexRicevuto);
            this.prova = '';
            this.contacts[index].staScrivendo = false;
            // this.contacts[this.contatore].online = false


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

            //qui gli sto dicendo entra in array di contatore clicckato vai nei messaggi con index corrispondente, vai in attivo e fa si che attivo é uguale alla sua stessa negazione
            this.contacts[this.contatore].message[index].attivo = !this.contacts[this.contatore].message[index].attivo; 
            
        },
        deleteMessage(indice){
            this.messaggiEliminati.push(this.contacts[this.contatore].message[indice]);
            console.log(this.messaggiEliminati);
            this.contacts[this.contatore].message.splice(indice, 1);

            console.log(this.contacts, 'contatcts post delete');

            this.ultimoAccesso = this.messaggiEliminati[this.contatore].message[this.messaggiEliminati[this.contatore].message.length - 1].data;
            console.log(this.ultimoAccesso);
            
            console.log(this.messaggiEliminati, "messaggi eliminati function delete");
        },
        proviamo(index){

            console.log(this.contacts[this.contatore].message[index]);
            //entra in contatti dell'utente selezionato vai nel messaggi
            console.log(this.toggleClass);

        },
        darkMode(){
            //ON OFF DARK MODE
            this.attivo2 = !this.attivo2;
            if(this.attivo2 == true){
                this.dark = 'black';
                this.displayDark = 'dark-display';
                this.movement = 'move';
            }else{
                this.dark = false;
                this.displayDark =false;
                this.movement = false;
            }
            
        },
        activeNotify(){
            this.notify = !this.notify;
        }
    }  
    
});



