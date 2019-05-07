var app = new Vue({
    el: '#app',
    data: {
        bpi: null,
        hasError: false,
        loading: true
    },
    //mountedはインスタンスがたてられたら実行される
    mounted: function(){
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function(response){
            //console.log(response.data.bpi)
            this.bpi = response.data.bpi
        }.bind(this))
        //エラーが出たら実行される
        .catch(function(error){
            this.hasError = true
        }.bind(this))
        .finally(function(){
            this.loading = false
        }.bind(this))
    },
    filters: {
        currencyDecimal: function(value){
            return value.toFixed(2)
        }
    }
})