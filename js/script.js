const {createApp} = Vue

createApp({
	data(){
        
		return{

			slides: [
        {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
            ],

        activeSlider: 0,

        interval: null,
        }
	},

    methods:{
        nextSlide(){
            if(this.activeSlider >= this.slides.length - 1){
                this.activeSlider = 0;
            } else{
                this.activeSlider++;
            }
        },

        prevSlide(){
            if(this.activeSlider <= 0){
                this.activeSlider = this.slides.length - 1
            } else{
                this.activeSlider--;
            }
        },

        showSlide(index){
            this.activeSlider = index;
        },

        autoPlayStart(){
            this.interval = setInterval(this.nextSlide, 3000)
        },

        autoPlayStop(){
            clearInterval(this.interval)
        }

    },

    mounted(){
        this.autoPlayStart();
    }


}).mount('#app');