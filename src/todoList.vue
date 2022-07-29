<template>
  <div>
    <button @click="changeFn">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
const { mapActions } = createNamespacedHelpers('color')
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  methods: {
    ...mapActions(['setFontColor']),
    changeFn() {
      this.setFontColor()
    }
  },
  computed: {}
}
</script>

<style scoped></style>
