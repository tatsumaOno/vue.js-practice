var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {
        keyword: function(newKeyword, oldKeyword){
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }

    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer,1000)
    },
    methods: {
        getAnswer: function(){
            //keywordが空ならitemsを空にして返却。
            if(this.keyword === ''){
                this.items = null
                this.message = ''
                return
            }
            this.message = 'Loading...'
            //pageがqiitaの1ページ目,20は記事数
            var params = {page: 1,per_page: 20, query: this.keyword }
            //axiosでqiitaAPIを叩いている。
            var vm = this
            axios.get('https://qiita.com/api/v2/items',{params}).then(function(response){
                this.items = response.data
                
            }.bind(this))
            .catch(function(error){
                this.message = 'Error!'+ error
            })
            .finally(function(){
                this.message = ''
            }.bind(this))
        }

    }
})