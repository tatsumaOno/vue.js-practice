new Vue({
    //エレメントを指定
    el: '#app',
    data:{
        //入力された値が入る
        newItem: "",
        todos: []
    },
    methods: {
        addItem: function(e){
            //値が空で押されても反応しないようにする
            if(this.newItem == '') return;
            var todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteItem: function(index){
            this.todos.splice(index, 1)
        }
        
     }
})