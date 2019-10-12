<template>
  <div id="app">
    <button @click="login">登录</button>
    <br>
    <button @click="logout">退出</button>
  </div>
</template>

<script>
export default {
  name: 'Test3',

  methods: {
    login () {
      this.$store.dispatch('user/login', { username: 'username', password: 'password' }).then((res) => {
        alert(JSON.stringify(res))
      })
    },
    logout () {
      this.$store.dispatch('user/logout', {}).then((res) => {
        alert(JSON.stringify(res))
      })
    }
  }
}
</script>

<style scoped>

</style>
