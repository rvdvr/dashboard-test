<template>
  <header>
    <FilterTabs/>
    <Indicators/>
  </header>
</template>

<script>
import FilterTabs from './FilterTabs.vue'
import Indicators from './Indicators.vue'

export default {
  components: {
    FilterTabs,
    Indicators
  }
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    padding: 5px 0;
    margin-bottom: 50px;
  }
</style>
