<template>
  <div id="app">
    <h1>vue</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App"
});
</script>

<style lang="scss" scoped>
h1 {
  color: $success-color;
}
</style>
