<script setup>
import { ref } from 'vue'

const props = defineProps(['amount'])

const count = ref(0)  

const emit = defineEmits(['button-clicked'])    // самодельное событие

const increment = () => {
  count.value += props.amount 
  emit('button-clicked')  
}
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 8px; display: inline-block; margin: 4px;">
    <div>Count: {{ count }}</div>
    <div @click="increment">
      <slot /> 
    </div>
  </div>
</template>