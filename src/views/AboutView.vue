<template>
  <div class="about">
    <h1 class="text-danger">This is an about page</h1>
    <VueLoading :active="isLoading" />
  </div>
</template>

<!-- 測試安裝套件 -->
<script>
export default {
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
<!-- 測試安裝套件 -->

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
