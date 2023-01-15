<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <button @click="awesome = !awesome">toggle</button>
	<h1 v-show="false">Vue is awesome!</h1>
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
	    awesome: true
  	}
	}
}
</script>

