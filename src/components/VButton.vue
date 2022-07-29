<template>
  <div
    :class="[
      readonly ? 'readonly-hover' : '',
      appointment ? 'appointment-style' : '',
      ghost ? 'primary-ghost' : ''
    ]"
    class="button-wrap"
  >
    {{ text }}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
// 所有得样式都根据使用情况，根据props来传
  props: ['text', 'readonly', 'appointment', 'ghost']
}
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  color: #333;
  height: 40px;
  background-color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: hotpink;
  }
}
.appointment-style {
  &:hover {
    background-color: hotpink;
  }
}
.primary-ghost {
  color: #57a3f3;
  border: 1px solid hotpink;
  background-color: #fff;
  &:hover {
    background-color: rgba(81, 151, 252, 0.2);
  }
}
.readonly-hover {
  color: #afc0d4;
  border-color: #afc0d4;
}
.readonly-hover:hover {
  background: #ffffff;
  cursor: not-allowed;
}
</style>
