<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const route = useRoute();
const operation = ref(route.query.operation);
const innovation = ref(route.query.innovation);
const response = ref("# Test\n##Test");

defineExpose({
  MdEditor,
  operation,
  innovation,
  response,
});
</script>

<template lang="pug">
.generateView
  MdEditor(v-model="response" :preview-only="true")
</template>

<style lang="sass" scoped>
</style>
