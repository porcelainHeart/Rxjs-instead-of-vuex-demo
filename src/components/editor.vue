<template lang="pug">
  div.editor
    textarea(v-model="text")
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      text: ''
    }
  },
  subscriptions () {
    this.$watchAsObservable('text')
      .pluck('newValue')
      .subscribe(value => store.inputText(value))
  }
}
</script>

<style scoped>
.editor{
  flex: 1;
  margin: 10px;
  height: 30vh;
}
textarea{
  width: 100%;
}
</style>
