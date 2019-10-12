<template>
  <div id="app">
    <my-component></my-component>
    <br>
    <br>
    <my-component-2>s</my-component-2>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'
export default {
  name: 'Test4',
  components: { MyComponent }
}
</script>

<style scoped>

</style>
