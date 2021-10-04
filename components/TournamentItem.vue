<template>
    <div class="tournaments__container">
        <div class="image">
            <img src="~/static/DOIT.png" alt="tournament-image">
        </div>
        <div class="content">
            <div class="description">
                <p>{{ game.description }}</p>
            </div>
            <div class="info">
                <span>
                    <p>Start</p>
                    <p>{{ game.start }}</p>
                </span>
                <span>
                    <p>Mode</p>
                    <p>{{ game.mode }}</p>
                </span>
                <span>
                    <p>Slots</p>
                    <p>{{ game.slots }}</p>
                </span>
                <span>
                    <p>Pool</p>
                    <p>{{ game.pool }}</p>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        game: {required: true}
    }
}
</script>

<style lang="scss" scoped>
.tournaments__container {
    display: flex;
    flex-direction: column;

    .image {
        max-width: 370px;
        img {
            width: 100%;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 25px;
        color: #E6E8EB;
        background: #151A1F;

        .description {
            p {
                font-weight: 500;
                font-size: 22px;
                line-height: 130%;
                padding-bottom: 30px;
            }
        }

        .info {
            display: flex;
            justify-content: space-between;
            border-radius: 2px;

            span {
                p {
                    &:nth-child(1) {
                        font-size: 16px;
                        line-height: 100%;
                        color: #8996A3;
                        padding-bottom: 10px;
                    }
                    &:nth-child(2) {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 100%;
                    }
                }
            }
        }
    }
}
</style>