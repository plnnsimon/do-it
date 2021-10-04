<template>
  <div
    v-if="isCanShown"
    :style="{color: color}"
    >
      {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            default: '',
            type: String
        },
        canShow: {
            default: false,
            type: Boolean
        },
        color: {
            default: 'black',
            type: String
        }
    },
    data() {
        return {
            isCanShown: false,
        }
    },
    // mounted() {
    //     if (this.canShow === true) {
    //         this.isCanShown = this.canShow;
    //         setTimeout(function () { this.isCanShown = false}, 4000)
    //     }
    // },
    watch: {
        canShown(val) {
            console.log(val);
            if (val === true) {
                this.isCanShown = val
                setTimeout(function () { this.isCanShown = false}, 4000)
            }
            this.isCanShown = false
        }
    },
}
</script>

<style>

</style>