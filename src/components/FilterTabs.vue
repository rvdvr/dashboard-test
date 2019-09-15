<template>
  <v-tabs
    background-color="transparent"
    slider-color="transparent">
    <v-tab @click="filterByType(null)">Все задачи</v-tab>
    <v-tab
      v-for="type in taskTypes"
      :key="type.type_id"
      @click="filterByType(type.type_id)">{{type.text}}</v-tab>
  </v-tabs>
</template>

<script>
export default {
  computed: {
    taskTypes () {
      return this.$store.getters.taskTypes
    }
  },
  methods: {
    filterByType (typeId) {
      this.$store.dispatch('tasks', typeId)
    }
  }
}
</script>

<style scoped>
  .v-tab--active {
    color: #fff !important;
    background: #05c005;
    border-radius: 5px;
    margin: 5px;
  }
  .v-tabs-slider-wrapper {
    display: none;
  }
</style>
