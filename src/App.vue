<template>
  <div>
    <VButton
      :text="buttonName"
      :readonly="sendFlag"
      style="width: 35%"
    ></VButton>
    <VButton
      :text="buttonName"
      :readonly="sendFlag"
      style="width: 35%"
    ></VButton>
    <VButton
      :text="buttonName"
      :readonly="sendFlag"
      style="width: 35%"
    ></VButton>
  </div>
</template>

<script>
import VButton from './components/VButton.vue'
export default {
  data() {
    return {
      buttonName: '按钮',
      sendFlag: ''
    }
  },

  created() {},

  methods: {
    getCode() {}
  },
  components: {
    VButton
  }
}
</script>

<style scoped></style>
