<template>
  <div class="app">
    <div class="noise"></div>
    <Header/>
    <Banner/>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Banner from "../components/banner.vue";
export default {
    name: "IndexPage",
    components: { Header, Banner }
}
</script>

<style lang='scss'>
  @import '~assets/scss/style';
</style>