// import { createApp } from 'vue'

// Vue.createApp({
//   data() {
//     return {
//       message: 'Hello World!',
//       counter: {
//         count: 0
//       }
//     }
//   }
// }).mount('#app')


Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}).mount('#app')