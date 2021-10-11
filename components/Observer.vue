<template>
  <div class="observer"></div>
</template>

<script>
export default {
    props: {
        options: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            observer: null
        }
    },
    mounted() {
        const options = this.options || {}
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit('intersect')
            }
        }, options)
        this.observer.observe(this.$el)
    },
    beforeDestroy() {
        this.observer.disconnect()
    }
}
</script>

<style>

</style>