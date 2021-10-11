<template>
    <div class="page">
        <Header />
        <Sidebar />
        <Nuxt class="pages" />
        <div v-if="visible" @click="scrollTop" class="scroll__button">
            <i class="fas fa-sort-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollListener)
    },
    methods: {
        scrollTop() {
            this.intervalId = setInterval(() => {
                if (window.pageYOffset === 0) {
                    clearInterval(this.intervalId)
                }
                window.scroll(0, window.pageYOffset - 100)
            }, 10)
        },
        scrollListener(e) {
            this.visible = window.scrollY > 150
        },
    },
}
</script>

<style lang="scss">
.scroll__button {
    z-index: 10;
    position: fixed;
    bottom: 65px;
    right: 50px;
    width: 40px;
    height: 40px;
    background: transparent;
    color: rgba(9, 95, 224, 1);
    display: flex;
    justify-content: center;

    i {
        font-size: 50px;
    }
}

#__layout {
    background: #0f1215;
}

.page {
    font-family: Rubik;
    margin: 0 15%;
    padding: 0;
    color: #e6e6e6;
    background: #0f1215;
    min-height: 100vh;
}
.pages {
    padding: 150px 0;
    padding-bottom: 100px;
}

@media screen and (max-width: 1440px) {
    .page {
        margin: 0 15%;
    }

    .pages {
        padding: 50px 0;
    }
}

@media screen and (max-width: 1024px) {
    .page {
        margin: 0 5%;
    }

    .pages {
        padding: 110px 0;
    }
}
</style>