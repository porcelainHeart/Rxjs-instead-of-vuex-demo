<template lang="pug">
  div.view
    div(v-html="text")
</template>

<script>
import store from '../store'
import marked from 'marked'
export default {
  data () {
    return {
      text: ''
    }
  },
  subscriptions () {
    store.onChangedText
      .map(text => marked(text))
      .subscribe(text => { this.text = text })
  }
}
</script>

<style scoped>
.view {
  flex: 1;
  margin: 10px;
  height: 30vh;
  border: 1px solid #ccc;
}
</style>
