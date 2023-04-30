<script setup lang="ts">
import { ref } from "vue";

const innovation = ref("");

/**
 * 「次へ」押下
 */
const onNext = () => {
  alert(innovation.value);
}

defineExpose({
  innovation,
  onNext,
});
</script>

<template lang="pug">
.operationView
  .announce どのような要素を取り入れたいのか教えてください
  InputText.input(v-model="innovation", placeholder="RPG、和風etc...")
  PrimeButton(:disabled="!innovation" label="次へ" @click="onNext")
</template>

<style lang="sass" scoped>
</style>
