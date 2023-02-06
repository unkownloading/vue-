Vue.createApp({
    data() {
        return {
            awesome: 'true'
        }
    },
    methods: {
        toggle() {
            this.awesome = !this.awesome
        }
    }
}).mount("#app")