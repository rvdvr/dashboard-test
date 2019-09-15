<template>
  <tr class="table-body__tr">
    <td class="table-body__td">
      <span class="table-body__require-date table-body__require-date--one"
        v-if="task.status_id === 1">{{ formatedRequireDate }}</span>
      <span class="table-body__require-date table-body__require-date--two"
        v-else-if="task.status_id === 2">{{ formatedRequireDate }}</span>
      <span class="table-body__require-date table-body__require-date--three"
        v-else-if="task.status_id === 3">{{ formatedRequireDate }}</span>
    </td>
    <td class="table-body__td"><p>{{ task.executor }}</p></td>
    <td class="table-body__td"><p>{{ writeType }}</p></td>
    <td class="table-body__td"><p>{{ task.description }}</p></td>
    <td class="table-body__td"><p>{{ formatedCreateDate }}</p></td>
  </tr>
</template>

<script>
export default {
  props: {
    task: Object
  },
  computed: {
    formatedRequireDate () {
      let date = this.task.require_date.split('-')
      return date.reverse().join('.')
    },
    formatedCreateDate () {
      let date = this.task.date_create.split('-')
      return date.reverse().join('.')
    },
    writeType () {
      let tasksType = this.$store.getters.taskTypes.find(item => item.type_id === this.task.type_id)
      return tasksType.text
    }
  }
}
</script>

<style scope>
  .task-card__table td {
    border: 1px solid rgb(204, 204, 204);
    padding: 0;
    vertical-align: top;
  }
  .table-body__td p {
    font-weight: 600;
    padding: 10px;
    margin: 0;
  }

  .table-head__th:nth-child(1),
  .table-body__td:nth-child(1) {
    width: 12%;
  }

  .table-head__th:nth-child(2),
  .table-body__td:nth-child(2) {
    width: 15%;
  }

  .table-head__th:nth-child(3),
  .table-body__td:nth-child(3) {
    width: 28%;
  }

  .table-head__th:nth-child(4),
  .table-body__td:nth-child(4) {
    width: 35%;
  }

  .table-head__th:nth-child(5),
  .table-body__td:nth-child(5) {
    width: 10%;
  }

  .table-body__require-date {
    color: #fff;
    padding: 7px 10px;
    border-radius: 5px;
    display: inline-block;
  }

  .table-body__require-date--one {
    background: rgb(56, 168, 11);
  }

  .table-body__require-date--two {
    background: rgb(255, 184, 52);
  }

  .table-body__require-date--three {
    background: rgb(177, 38, 38);
  }
</style>
