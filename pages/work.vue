<template>
  <div class="work-page">
      <Header/>
      <WorkBanner/>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import WorkBanner from "../components/workBanner.vue";
export default {
    name: "WorkPage",
    components: { Header, WorkBanner }
}
</script>

<style>

</style>