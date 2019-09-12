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
        <tr class="table-body__tr">
          <td class="table-body__td">
            <span class="table-body__require-date table-body__require-date--three">12.09.2018</span>
          </td>
          <td class="table-body__td"><p>Иванов И.И.</p></td>
          <td class="table-body__td"><p>Проверсти проверку</p></td>
          <td class="table-body__td"><p>Проверсти проверку №1 Тест</p></td>
          <td class="table-body__td"><p>05.09.2018</p></td>
        </tr>
        <tr class="table-body__tr">
          <td class="table-body__td">
            <span class="table-body__require-date table-body__require-date--one">12.09.2018</span>
          </td>
          <td class="table-body__td"><p>Иванов И.И.</p></td>
          <td class="table-body__td"><p>Проверсти проверку</p></td>
          <td class="table-body__td"><p>Проверсти проверку №1 Тест</p></td>
          <td class="table-body__td"><p>05.09.2018</p></td>
        </tr>
        <tr class="table-body__tr">
          <td class="table-body__td">
            <span class="table-body__require-date table-body__require-date--two">12.09.2018</span>
          </td>
          <td class="table-body__td"><p>Иванов И.И.</p></td>
          <td class="table-body__td"><p>Проверсти проверку</p></td>
          <td class="table-body__td"><p>Проверсти проверку №1 Тест</p></td>
          <td class="table-body__td"><p>05.09.2018</p></td>
        </tr>
        <tr class="table-body__tr">
          <td class="table-body__td">
            <span class="table-body__require-date table-body__require-date--one">12.09.2018</span>
          </td>
          <td class="table-body__td"><p>Иванов И.И.</p></td>
          <td class="table-body__td"><p>Проверсти проверку</p></td>
          <td class="table-body__td"><p>Проверсти проверку №1 Тест</p></td>
          <td class="table-body__td"><p>05.09.2018</p></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
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

  .task-card__table td {
    border: 1px solid rgb(204, 204, 204);
    padding: 0;
    vertical-align: top;
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
