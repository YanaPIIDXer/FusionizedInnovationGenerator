<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const operation = ref(route.query.operation);
const innovation = ref(route.query.innovation);

defineExpose({
  operation,
  innovation,
});
</script>

<template lang="pug">
.generateView
  div {{ operation }}に対して{{ innovation }}を組み合わせる
</template>

<style lang="sass" scoped>
</style>
