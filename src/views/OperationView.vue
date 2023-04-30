<script setup lang="ts">
import { ref } from "vue";

const operation = ref("");

/**
 * 「次へ」押下
 */
const onNext = () => {
  alert(operation.value);
}

defineExpose({
  operation,
  onNext,
});
</script>

<template lang="pug">
.operationView
  .announce どのようなシステム（もしくはお店）を運営しているのか教えてください
  InputText.input(v-model="operation", placeholder="ECサイト、飲食店etc...")
  PrimeButton(:disabled="!operation" label="次へ" @click="onNext")
</template>

<style lang="sass" scoped>
</style>
