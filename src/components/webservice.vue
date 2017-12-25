<template>
  <div class="hello">
   <v-steps>
    <v-step status="finish" title="步骤1" icon="cloud" ></v-step>
    <v-step status="process" title="步骤2" icon="apple" ></v-step>
    <v-step status="wait" title="步骤3" icon="github" ></v-step>
</v-steps>
  </div>
</template>

<script>
export default {
  name: 'Webservice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
