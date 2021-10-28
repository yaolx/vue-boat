<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite + typescript" />
</template>

<script setup>
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>
