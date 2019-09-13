import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
      {
        'require_date': '2018-01-16',
        'executor': 'Иванов И.И.',
        'type_id': 1,
        'status_id': 1,
        'description': 'Проверсти проверку №1 Тест',
        'date_create': '2018-01-02'
      },
      {
        'require_date': '2018-02-12',
        'executor': 'Петров И.И.',
        'type_id': 1,
        'status_id': 1,
        'description': 'Проверсти проверку №2 Тест',
        'date_create': '2018-01-02'
      },
      {
        'require_date': '2018-07-22',
        'executor': 'Ромашкин Б.И.',
        'type_id': 2,
        'status_id': 2,
        'description': 'Контроль предписания №1 Тестовое предписание',
        'date_create': '2018-05-12'
      },
      {
        'require_date': '2018-05-13',
        'executor': 'Цветков В.И.',
        'type_id': 3,
        'status_id': 2,
        'description': 'Личное поручение',
        'date_create': '2018-02-02'
      },
      {
        'require_date': '2018-04-20',
        'executor': 'Агапов В.И.',
        'type_id': 2,
        'status_id': 3,
        'description': 'Контроль предписания №2',
        'date_create': '2018-03-12'
      }
    ]
  },
  getters: {
    counterAllTasks (state) {
      return state.data.length
    },
    counterTypeOneTasks (state) {
      const typeOneTasks = state.data.filter((item) => {
        return item.type_id === 1
      })

      return typeOneTasks.length
    },
    counterTypeTwoTasks (state) {
      const typeTwoTasks = state.data.filter((item) => {
        return item.type_id === 2
      })

      return typeTwoTasks.length
    },
    counterTypeThreeTasks (state) {
      const typeThreeTasks = state.data.filter((item) => {
        return item.type_id === 3
      })

      return typeThreeTasks.length
    }
  },
  mutations: {

  },
  actions: {

  }
})
