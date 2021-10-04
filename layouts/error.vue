<template>
  <div class="error__page">
    <div v-if="error.statusCode === 404" class="page_not_found">
      <div class="block__404">
        <p>Are you lost?<br> Please back to the game!</p>
      </div>
      <div class="block__404">
        <h1>404</h1>
      </div>
    </div>
    <p v-else>
      {{ otherError }}
    </p>
    <!-- <NuxtLink to="/">
      Home page
    </NuxtLink> -->
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Are you lost? Please back to the game!',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError = this.error.message
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.error__page {
  margin-top: 100px;

  .page_not_found {
    max-width: 1100px;
    display: flex;
    font-family: Roboto;

    .block__404 {
      flex: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 330px;

      &:nth-child(1) {
        border: 1px solid;
        border-image: linear-gradient(to right, #1472FF, #1472FF, #0F1215);
        border-image-slice: 1;
        padding: 0 20px;
      }

      &:nth-child(2) {
        background: linear-gradient(90deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);
        justify-content: start;

        h1 {
          font-size: 116px;
          line-height: 100%;
          color: #0F1215;
          font-weight: bold;
          padding-left: 85px;
        }
      }

      p {
        max-width: 360px;
        font-weight: 400;
        font-size: 30px;
        line-height: 130%;
        word-wrap: break-word;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .error__page {
    margin-top: 50px;

    .page_not_found {

      .block__404 {

        &:nth-child(1) {

        }

        &:nth-child(2) {

          h1 {
            padding-left: 40px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .error__page {
    min-height: 450px;
    display: flex;

    .page_not_found {
      flex-direction: column-reverse;
      width: 100%;
      align-items: center;
      background: linear-gradient(360deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);

      .block__404 {

        &:nth-child(1) {
          height: 100%;
          width: 100%;
          border: none;

          p {
            color: #0F1215;
            text-align: center;
            font-weight: bold;
          }

        }

        &:nth-child(2) {
          background: transparent;

          h1 {
            padding: 0;
            color: white;
          }
        }
      }
    }
  }
}
</style>
