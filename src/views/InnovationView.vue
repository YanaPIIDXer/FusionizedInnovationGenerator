<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { routePaths } from "../routes";

const innovation = ref("");
const route = useRoute();
const router = useRouter();

/**
 * 「次へ」押下
 */
const onNext = () => {
  const operation = route.query.operation;
  router.push({
    path: routePaths.generate,
    query: {
      operation,
      innovation: innovation.value,
    }
  })
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
