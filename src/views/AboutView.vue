<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<!-- 測試安裝套件 -->
<script>
export default {
  data(){
    return{
      data:{},
    }
  },
  mounted(){
    this.$http.get('https://randomuser.me/api/')
    .then((res)=>{
      console.log(this.data)
      res.data.results[0]=this.data;
    })
  }
}
</script>
<!-- 測試安裝套件 -->


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
