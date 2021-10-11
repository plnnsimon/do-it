<template>
    <div class="notification" v-if="canShow" :style="{ color: color }">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            default: '',
            type: String,
        },
        canShow: {
            default: false,
            type: Boolean,
        },
        color: {
            default: 'black',
            type: String,
        },
    },
    data() {
        return {}
    },
    watch: {
        canShow(newVal) {
            if (newVal === true) {
                setTimeout(() => {
                    this.$emit('closeNotification', false)
                }, 4000)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.notification {
    position: fixed;
    bottom: 5%;
    margin-left: 5%;
    right: 5%;
    border: 1px solid #b33232;
    border-radius: 5px;
    padding: 20px;
    background: #0b1729;
}
</style>