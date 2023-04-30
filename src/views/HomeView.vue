<script setup lang="ts">
import { useRouter } from "vue-router";
import { routePaths } from "../routes";

const router = useRouter();

/**
 * 開始ボタン押下
 */
const onStart = () => {
  router.push(routePaths.operation);
};

defineExpose({
  onStart,
});
</script>

<template lang="pug">
.homeView
  .systemDescription 
      | このシステムは「既存のお店やシステムに、新しい要素を組み合わせて新たなシステムを提案する」為のシステムです。
      br
      | 最初にどのようなお店やシステムを経営しているのかを入力し、その後で組み合わせたい要素を入力する事で、それらを組み合わせた新しいシステムが提案されます。
  PrimeButton(label="開始" @click="onStart")
</template>

<style lang="sass" scoped>
</style>
