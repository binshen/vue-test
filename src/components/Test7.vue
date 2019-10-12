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
        this.$router.push({name: 'Test8', params: {id: res.id}})
        // this.$router.push({path: '/test8', query: {id: res.id}})
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
