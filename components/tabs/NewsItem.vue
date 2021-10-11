<template>
    <div class="news__container">
        <div class="image">
            <img
                :src="require(`~/static/news/${news.game_id}.png`)"
                alt="news-image"
            />
        </div>
        <div class="content">
            <div class="title">
                <p>{{ news.title }}</p>
            </div>
            <div class="info">
                <p>{{ news.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: Object,
            default: () => {},
            required: true,
        },
    },
}
</script>


<style lang="scss" scoped>
.news__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 2px;
    background: #e1e6eb;
    
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
        flex-direction: column;
        padding: 25px;
        height: 100%;

        .title {
            p {
                font-weight: 500;
                font-size: 22px;
                line-height: 130%;
                color: #0f1215;
                -webkit-line-clamp: 3; /* Число отображаемых строк */
                display: -webkit-box; /* Включаем флексбоксы */
                -webkit-box-orient: vertical; /* Вертикальная ориентация */
                overflow: hidden;
            }
        }

        .info {
            p {
                font-weight: normal;
                font-size: 16px;
                line-height: 150%;
                color: #5e656b;
                -webkit-line-clamp: 4; /* Число отображаемых строк */
                display: -webkit-box; /* Включаем флексбоксы */
                -webkit-box-orient: vertical; /* Вертикальная ориентация */
                overflow: hidden;
            }
        }
    }
}
</style>