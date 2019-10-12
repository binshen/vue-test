<template>
  <div id="app">
    <p>页面载入时，input 元素自动获取焦点：(NEW)</p>
    <input v-my-focus-1>
  </div>
</template>

<script>
export default {
  name: 'Test6',
  directives: {
    // 注册一个局部的自定义指令 v-focus
    'my-focus-1': {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    }
  }
}
</script>

<style scoped>

</style>
