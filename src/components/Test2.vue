<template>
  <div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button v-on:click="counter++" style = "font-size:25px;">点我</button>
  </div>
</template>

<script>
export default {
  name: 'Test2',

  data () {
    return {
      counter: 1
    }
  },

  watch: {
    counter (oval, nval) {
      alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!')
    }
  }
}
</script>

<style scoped>

</style>
