<template>
  <div id="app">
    <p>原始字符串: {{ message }}</p>

    <!-- {{ message.split('').reverse().join('') }} -->
    <p>计算后反转字符串: {{ reversedMessage }}</p>

  </div>
</template>

<script>
export default {
  name: 'Test1',
  data () {
    return {
      message: 'Runoob!'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
