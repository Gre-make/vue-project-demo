<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div
  class="static"
  :class="{ sty: isActive, 'text-danger': hasError }"
></div>
<button @click="test"></button>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
export default {
  data() {
  	return {
    isActive: true,
    hasError: false
  }
},
methods: {
  test() {
    this.isActive = !this.isActive;
    this.hasError = !this.hasError;
  	}
	}
}

</script>

