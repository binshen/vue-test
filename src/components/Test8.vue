<template>
  <div id="app">
    {{name}}: {{token}}
  </div>
</template>

<script>
export default {
  name: 'Test8',
  data () {
    return {
      name: '',
      token: ''
    }
  },
  created () {
    this.name = this.$store.getters.name
    this.token = this.$store.getters.token
  }
}
</script>

<style scoped>

</style>
