let id = 0;

Vue.createApp({
  data() {
    return {
      newinput: '',
      arr: [
        { id: id++, text: '12345' },
        { id: id++, text: '67890' }
      ]
    }

  },
  methods: {
    add() {
      this.arr.push({ id: id++, text: this.newinput })
      this.newinput = ''
    },
    remove(x) {
      this.arr = this.arr.filter((t) => t !== x)
    }
  }
}).mount("#app")