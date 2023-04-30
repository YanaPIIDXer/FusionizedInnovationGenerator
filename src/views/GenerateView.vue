<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ChatGPT } from "../chatgpt";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import ProgressSpinner from "primevue/progressspinner";

const route = useRoute();
const operation = ref(route.query.operation);
const innovation = ref(route.query.innovation);
const response = ref("");
const chatGpt = new ChatGPT();
const isProgress = ref(false);

onMounted(async () => {
  isProgress.value = true;
  try {
    response.value = await chatGpt.sendMessage("TypeScriptでHello Worldを書いてください", false);
  } catch (error) {
  } finally {
    isProgress.value = false;
  }
});

defineExpose({
  MdEditor,
  operation,
  innovation,
  response,
  ProgressSpinner,
  isProgress,
});
</script>

<template lang="pug">
.generateView
  MdEditor(v-model="response" :preview-only="true")
  ProgressSpinner.spinner(v-if="isProgress")
</template>

<style lang="sass" scoped>
.generateView
  .spinner
    width: 25%
    height: 25%
</style>
