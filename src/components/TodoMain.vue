<template>
  <div>
    <ul class="todo-list" v-for="item in todoList" :key="item.id">
      <!-- completed: 完成的类名 -->
      <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="delFn(item)"></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('todoList')
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['todoList'])
  },
  methods: {
    ...mapActions(['delTodoList']),
    delFn(item) {
      this.delTodoList(item)
    }
  }
}
</script>
