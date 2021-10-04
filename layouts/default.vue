<template>
  <div class="page">
    <Header />
    <Sidebar />
    <Nuxt class="pages" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
// body {
//   max-width: 1600px;
// }
#__layout {
  background: #0F1215;
}

.page {
  font-family: Rubik;
  margin: 0 15%;
  padding: 0;
  color: #E6E6E6;
  background: #0F1215;
  min-height: 100vh;
}
.pages {
  margin: 150px 0;
}

@media screen and (max-width: 1024px) {
  .page {
    margin: 0 5%;
  }

  .pages {
    margin: 100px 0;
  }
}

@media screen and (max-width: 768px) {
  .pages {
    margin: 50px 0;
  }
}
</style>