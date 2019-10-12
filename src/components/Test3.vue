<template>
  <div id="app">
    <div v-bind:class="{ active: isActive }"></div>
  </div>
</template>

<script>
export default {
  name: 'Test7',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>
  .active {
    width: 200px;
    height: 200px;
    background: green;
  }
</style>
