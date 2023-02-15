let id = 0;

Vue.createApp({
    data() {
        return {
            news: '',
            hide: false,
            arr: [
                { id: id++, text: '12345', end: true },
                { id: id++, text: '67890', end: true },
                { id: id++, text: '11223345', end: false },
            ]
        }
    },
    computed: {
        filterarr() {
            return this.hide
                ? this.arr.filter((t) => !t.end)
                : this.arr
        }
    },
    methods: {
        add() {
            this.arr.push({ id: id++, text: this.news, end: false })
            this.news = ''
        },
        remove(x) {
            this.arr = this.arr.filter((t) => t !== x)
        }
    }
}).mount("#app")