<template lang="pug">
  div.editor
    editor-box
    output-view
</template>

<script>
import editorBox from './editor'
import outputView from './view'
export default {
  name: 'editor',
  data () {
    return {
      text: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    editorBox,
    outputView
  }
}
</script>

<style scoped>
.editor{
  display: flex;
  flex-direction: row;
}
</style>
