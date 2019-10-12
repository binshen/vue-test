<template>
  <div id="app">
    {{id}} - {{name}}: {{token}}
  </div>
</template>

<script>
export default {
  name: 'Test8',
  data () {
    return {
      id: 0,
      name: '',
      token: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    this.name = this.$store.getters.name
    this.token = this.$store.getters.token
  }
}
</script>

<style scoped>

</style>
