<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ message.split('').reverse().join('|')}}</p>
    <input v-model="input_text" v-on:input="change_text"/>
    <br>

    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}
    <br>

    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <br>

    <div>
      <ol>
        <li v-for="site in sites" :key="site.index">
          {{ site.name }}
        </li>
      </ol>
      <br>
      <ul>
        <template v-for="(index, name) in sites">
          <li :key="index">{{ name }} --------------</li>
        </template>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Test',

  data () {
    return {
      ok: true,
      message: '1234567890',
      input_text: '',
      type: 'C',
      sites: [
        { index: 1, name: 'Runoob' },
        { index: 2, name: 'Google' },
        { index: 3, name: 'Taobao' }
      ]
    }
  },

  methods: {
    change_text () {
      this.message = this.input_text + ' 【TTT】'
    }
  }
}
</script>

<style scoped>

</style>
