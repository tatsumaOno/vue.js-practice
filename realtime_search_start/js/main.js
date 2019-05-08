var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {
        //keywordが入力されたら発火。
        keyword: function(newKeyword, oldKeyword){
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }

    },
    created: function() {
        //keywordが入力されるたびにgetAnswerが発火すると、困るので
        //アクセスに制限をかけるために、ユーザーの入力が終わるのを待ってからajax通信でリクエストを実行している。
        //https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer,1000)
    },
    methods: {
        getAnswer: function(){
            //keywordが空ならitemsとmessageを空にして返却。
            if(this.keyword === ''){
                this.items = null
                this.message = ''
                return
            }
            this.message = 'Loading...'
            //pageがqiitaの1ページ目,20は記事数,入力されたkeywordをparamsに代入。
            var params = {page: 1,per_page: 20, query: this.keyword }
            //axiosでqiitaAPIを叩いている。
            axios.get('https://qiita.com/api/v2/items',{params}).then(function(response){
                this.items = response.data
                //レスポンスをitemsに代入.
            }.bind(this))
            .catch(function(error){
                this.message = 'Error!'+ error
            })
            .finally(function(){
                //処理が終わるとmessageをからにしている。
                this.message = ''
            }.bind(this))
        }

    }
})