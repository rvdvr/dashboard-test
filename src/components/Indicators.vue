<template>
  <div class="indicators">
    <ul class="indicators__list">
      <li class="indicators__item indicators__item--all">{{ counterAll }}</li>
      <li class="indicators__item indicators__item--one">{{ counterTypeOneTasks }}</li>
      <li class="indicators__item indicators__item--two">{{ counterTypeTwoTasks }}</li>
      <li class="indicators__item indicators__item--three">{{ counterTypeThreeTasks }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    counterAll () {
      return this.$store.getters.counterAllTasks
    },
    counterTypeOneTasks () {
      return this.$store.getters.counterTypeOneTasks
    },
    counterTypeTwoTasks () {
      return this.$store.getters.counterTypeTwoTasks
    },
    counterTypeThreeTasks () {
      return this.$store.getters.counterTypeThreeTasks
    }
  }
}
</script>

<style scoped>
  .indicators__list {
    display: flex;
  }

  .indicators__item {
    min-width: 40px;
    color: #fff;
    text-align: center;
    padding: 3px 13px;
    list-style-type: none;
    background: #000;
    border-radius: 15px;
    margin-right: 5px;
  }

  .indicators__item:last-child {
    margin-right: 0;
  }

  .indicators__item--all {
    background: rgb(52, 140, 255);
  }
  .indicators__item--one {
    background: rgb(56, 168, 11);
  }
  .indicators__item--two {
    background: rgb(255, 184, 52);
  }
  .indicators__item--three {
    background: rgb(148, 5, 0);
  }
</style>
