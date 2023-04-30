<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ChatGPT } from "../chatgpt";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import ProgressSpinner from "primevue/progressspinner";
import axios from "axios";

const route = useRoute();
const operation = ref(route.query.operation as string);
const innovation = ref(route.query.innovation as string);
const response = ref("");
const chatGpt = new ChatGPT();
const isProgress = ref(false);
const templateFetch = axios.create({
  baseURL: location.origin + "/templates",
});

onMounted(async () => {
  isProgress.value = true;
  try {
    const replaceStartWordsResult = await templateFetch.get("ReplaceStartWords.txt");
    if (replaceStartWordsResult.status !== 200) { throw replaceStartWordsResult; }
    const replaceStartWords: string = replaceStartWordsResult.data;
    
    const replaceResponse = await chatGpt.sendMessage(replaceStartWords.replace("$SYSTEM$", operation.value), false);
    const replacedMessage: string = JSON.parse(replaceResponse).message;
    
    const directSuggestionsResult = await templateFetch.get("DirectSuggestions.txt");
    if (directSuggestionsResult.status !== 200) { throw directSuggestionsResult; }
    const directSuggestions: string = directSuggestionsResult.data;
    const prompt = directSuggestions.replace("$START_WORDS$", replacedMessage).replace("$SYSTEM$", operation.value).replace("$INNOVATION$", innovation.value);

    response.value = await chatGpt.sendMessage(prompt, true);
  } catch (error: any) {
    alert(error.message ?? "エラー");
    console.error(error);
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
