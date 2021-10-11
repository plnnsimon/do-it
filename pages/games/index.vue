<template>
    <div class="games__page">
        <div class="games__header">
            <h1>Games</h1>
            <input
                v-model="search"
                placeholder="Search the game"
                type="text"
                @input="searchGame"
            />
        </div>
        <div ref="games" class="games__section">
            <GameCard
                v-for="(game, index) in filteredGames"
                :key="index"
                :game="game"
            />
        </div>
        <div v-if="loading">Loading ...</div>
        <Observer @intersect="getGamesScroll" />
    </div>
</template>

<script>
export default {
    // async asyncData({ $api }) {
    //     const games = []
    //     await $api.dbGetGames(games, 0, 5)
    //     return {
    //         games
    //     }
    // },
    data() {
        return {
            loading: false,
            isVisible: 0,
            lock: false,
            start: 0,
            end: 4,
            search: '',
            games: [
                // {
                //   title: "CS:GO",
                //   id: 1,
                //   img: require('~/assets/games/1.png')
                // },
                // {
                //   title: "Dota II",
                //   id: 2,
                //   img: require('~/assets/games/2.png')
                // },
                // {
                //   title: "StarCraft II",
                //   id: 3,
                //   img: require('~/assets/games/3.png')
                // },
                // {
                //   title: "WarCraft III",
                //   id: 4,
                //   img: require('~/assets/games/4.png')
                // },
                // {
                //   title: "FIFA 2020",
                //   id: 5,
                //   img: require('~/assets/games/5.png')
                // },
                // {
                //   title: "Valorant",
                //   id: 6,
                //   img: require('~/assets/games/1.png')
                // },
                // {
                //   title: "Dota II",
                //   id: 7,
                //   img: require('~/assets/games/2.png')
                // },
                // {
                //   title: "StarCraft II",
                //   id: 8,
                //   img: require('~/assets/games/3.png')
                // },
                // {
                //   title: "WarCraft III",
                //   id: 9,
                //   img: require('~/assets/games/4.png')
                // },
                // {
                //   title: "FIFA 2020",
                //   id: 10,
                //   img: require('~/assets/games/5.png')
                // },
                // {
                //   title: "Valorant",
                //   id: 11,
                //   img: require('~/assets/games/1.png')
                // },
            ],
        }
    },
    async fetch() {
        await this.$api.dbGetGames(this.games, this.start, this.end)
    },
    computed: {
        filteredGames() {
            if (this.search === '') return this.games
            return this.games.filter((el) =>
                el.title.toLowerCase().includes(this.search.toLowerCase())
            )
        },
    },
    methods: {
        searchGame(e) {
            this.search = e.target.value
        },
        getGamesScroll() {
                this.lock = true
                this.loading = true
                setTimeout(async () => {
                    await this.$api.dbGetGames(
                        this.games,
                        this.games.length,
                        this.games.length + 5
                    )
                    console.log('here')
                    this.lock = false
                    this.loading = false
                }, 1000)
        },
    },
}
</script>

<style lang="scss" scoped>
.games__page {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 30px;
    line-height: 100%;
    text-align: center;
    color: #f5f5f5;
    height: 100%;

    .games__header {
        display: flex;
        justify-content: space-between;

        h1 {
            font-weight: bold;
            font-size: 44px;
            margin-right: 10px;
        }

        input {
            background: #0f1215;
            border: 2px solid #20252b;
            box-sizing: border-box;
            border-radius: 4px;
            padding: 10px 16px;
            color: #f5f5f5;
            height: 40px;
            font-size: 16px;
            width: 100%;
            max-width: 500px;

            &::placeholder {
                font-weight: normal;
                color: #cccdcd;
            }
        }
    }

    .games__section {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
    }
}

@media screen and (max-width: 768px) {
    .games__page {
        .header {
            align-items: flex-start;
            flex-direction: column;
        }

        .games__section {
            flex-direction: column;

            // .game__card {
            //   width: 100%;
            //   height: 200px;

            //   .game__image {
            //     height: 100%;

            //     img {
            //       object-fit: cover;
            //       width: 100%;
            //     }
            //   }
            // }
        }
    }
}
</style>