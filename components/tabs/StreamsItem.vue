<template>
    <div class="streams__container">
        <div class="image">
            <router-link to="#">
                <img
                    :src="require(`~/static/streams/${stream.game_id}.png`)"
                    alt="news-image"
                />
            </router-link>
        </div>
        <div class="content">
            <div class="title">
                <span class="account">{{ stream.account[0].toUpperCase() }}</span>
            </div>
            <div class="info">
                <p>{{ stream.title }}</p>
                <p>{{ stream.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stream: {
            type: Object,
            default: () => {},
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>

.streams__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 2px;
    background: #151A1F;
    
    .image {
        max-width: 370px;
        margin: 2px;
        img {
            width: 100%;
            min-height: 200px;
            object-fit: cover;
        }
    }

    .content {
        display: flex;
        flex-direction: row;
        padding: 15px 10px;
        height: 100%;
        align-items: center;

        .title {
            margin-right: 12px;

            span {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #FFFFFF;
                background: #3c2a5d;
                font-size: 22px;
                font-weight: bold;
            }
        }

        .info {
            display: flex;
            flex-direction: column;

            p {
                font-size: 14px;
                -webkit-box-orient: vertical; /* Вертикальная ориентация */
                overflow: hidden;
                -webkit-line-clamp: 3; /* Число отображаемых строк */
                display: -webkit-box;

                &:nth-child(1) {
                    font-weight: 500;
                    color: #FFFFFF;
                    
                }
                &:nth-child(2) {
                    font-weight: normal;
                    color: #C4C7CC;
                }
                
                
            }
        }
    }
}
</style>