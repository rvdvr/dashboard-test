<template>
  <v-app>
    <v-content>
      <Header/>
      <TaskList/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    Header,
    TaskList
  },
  data: () => ({
    //
  })
}
</script>

<style>
  body {
    background: rgb(199, 199, 199);
  }
</style>
