var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {

    },
    created: function() {
        //インスタンスが作成されたら実行される
        this.keyword = "javaScript"
        this.getAnswer()
    },
    methods: {
        getAnswer: function(){
            //keywordが空ならitemsを空にして返却。
            if(this.keyword === ''){
                this.items = null
                return
            }
            this.message = 'Loading...'
            //pageがqiitaの1ページ目,20は記事数
            var params = {page: 1,per_page: 20, query: this.keyword }
            //axiosでqiitaAPIを叩いている。
            axios.get('https://qiita.com/api/v2/items',{params}).then(function(response){
                this.items = response.data
                console.log(items)
            })
            //catchでエラーが出たらmessageに代入する
            .catch(function(error){
                this.message = 'Error!'+ error
            })
            //最後にmessageを空にする。
            .finally(function(){
                this.message = ''
            })
        }

    }
})