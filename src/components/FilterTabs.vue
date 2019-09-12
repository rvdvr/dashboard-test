<template>
  <v-tabs
    background-color="transparent"
    slider-color="transparent">
    <v-tab>Все задачи</v-tab>
    <v-tab>Провести проверку</v-tab>
    <v-tab>Контроль предписания</v-tab>
    <v-tab>Поручения</v-tab>
  </v-tabs>
</template>

<script>
export default {
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
