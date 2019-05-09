var app = new Vue({
    el: '#app',
    // data: {
    //     message: ''
    // },
    // methods: {
    //     clickHandler: function($event,message){
    //         this.message = message
    //         console.log($event)
    //     }
    // }
    // data: {
    //     message: ''
    // },
    // methods: {
    //     clickHandler: function(){
    //         this.message = new Date().toLocaleTimeString()
    //     }
    // }
    data: {
        message: ''
    },
    methods: {
        clear: function(){
            this.message = ''
        },
        clickHandler: function(){
            alert('shif+ click')
        }
    }

})