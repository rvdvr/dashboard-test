<template>
  <main class="task-card">
    <div class="task-card__header">
      <span class="task-card__header-text">Задачи на исполнение</span>
    </div>
    <table class="task-card__table">
      <thead class="table__head">
        <tr class="table-head__tr">
          <th class="table-head__th">Срок</th>
          <th class="table-head__th">Исполнитель</th>
          <th class="table-head__th">Тип</th>
          <th class="table-head__th">Краткое содержание</th>
          <th class="table-head__th">Дата создания задачи</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <Task v-for="task in allTasks" :task="task"/>
      </tbody>
    </table>
  </main>
</template>

<script>
import Task from './Task'
export default {
  components: {
    Task
  },
  computed: {
    allTasks () {
      let initialState = this.$store.getters.filteredTasks
      if (initialState.length === 0) {
        return this.$store.getters.data
      }
      
      return this.$store.getters.filteredTasks
    }
  }
}
</script>

<style scoped>
  .task-card {
    margin: 0 20px;
    box-shadow: 0 0 5px 1px #b3b3b3;
  }

  .task-card__header {
    color: #fff;
    padding: 10px;
    background: rgb(25, 139, 247);
  }

  .task-card__table {
    background: #fff;
    border-collapse: collapse;
  }

  .table-body__tr:nth-child(2n) {
    background: #ececec;
  }

  .table-body__tr:hover {
    background: rgba(255, 210, 87, .5);
    cursor: pointer;
  }

  .table-head__th {
    padding: 10px;
    text-align: left;
    border: 1px solid rgb(204, 204, 204);
  }

  
</style>
