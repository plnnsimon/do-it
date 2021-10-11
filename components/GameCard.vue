<template>
    <div class="game__card">
        <div class="game__image">
            <img :src="game.img" alt="game" />
        </div>
        <div class="game__title">
            <p>{{ game.title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        game: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang='scss' scoped>
.game__card {
    width: 33.33%;
    position: relative;
    padding: 10px;

    .game__image {
        display: flex;
        justify-content: center;

        img {
            width: 100%;
        }
    }

    .game__title {
        position: absolute;
        text-align: center;
        width: 100%;
        bottom: 15%;
    }
}

@media screen and (max-width: 768px) {
    .game__card {
        width: 100%;
        height: 200px;

        .game__image {
            height: 100%;

            img {
                object-fit: cover;
                width: 100%;
            }
        }
    }
}
</style>