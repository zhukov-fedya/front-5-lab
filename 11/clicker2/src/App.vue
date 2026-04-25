<script setup>
import Clicker from './components/clicker.vue'
const alert_ = (n) => window.alert(`Clicker ${n} clicked!`)   // глобальный объект window не попадает в контекст
</script>

<template>
  <div id="app">
    <Clicker v-for="n in 100" :key="n" :amount="3" @button-clicked="alert_(n)">
      <button>Кликер {{ n }}</button>
    </Clicker>
  </div>
</template>
