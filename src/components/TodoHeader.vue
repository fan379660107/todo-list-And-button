<template>
  <header class="header">
    <h1 :style="{ color: fontColor }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="enterFn"
      v-model="addTodoListItem"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('todoList')
const { mapState: mapStateColor } = createNamespacedHelpers('color')
export default {
  data() {
    return {
      addTodoListItem: ''
    }
  },
  computed: {
    ...mapState(['todoList']),
    ...mapStateColor(['fontColor'])
  },
  methods: {
    ...mapActions(['addTodoList']),
    enterFn(e) {
      const obj = {
        name: this.addTodoListItem,
        done: false,
        id: this.todoList.length + 1
      }
      this.addTodoList(obj)
      this.addTodoListItem = ''
    }
  }
}
</script>
