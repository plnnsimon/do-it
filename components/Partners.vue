<template>
    <div class="partners">
        <h1>Partners</h1>
        <div class="partners__container">
            <img
                v-for="img in images"
                :key="img"
                :src="img"
                alt="partners"
            />
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            images: []
        }
    },
    async mounted() {
        await this.getImages();
    },
    methods: {
        async getImages() {
            await firebase.database().ref('pictures').child('partners').once('value', (snapshot) => {
                const data = snapshot.val();
                data.forEach(async (el) => {
                    await firebase.storage().refFromURL(el.url).getDownloadURL().then(url => {
                        this.images.push(url)
                    })
                })
            })
        }
    },
    
}
</script>

<style lang='scss' scoped>
.partners {
    margin-bottom: 100px;

    .partners__container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        img {
            margin: 0 15px 20px 0;
        }
    }
}
</style>