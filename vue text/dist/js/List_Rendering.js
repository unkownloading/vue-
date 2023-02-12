

let id = 1230

Vue.createApp({
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }

  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
      console.log(this.todos);
      console.log(id);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      return;
      this.todos = this.todos.filter((t) => t !== todo)
      console.log(this.todos);
    }
  },

}).mount('#app')

