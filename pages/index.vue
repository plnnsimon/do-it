<template>
    <div class="main__page">
        <div
            v-if="!user"
            ref="top"
            :style="{ height: topHeight + 'px' }"
            class="top"
        >
            <div class="triangles">
                <img src="~/static/triangles/triangle_ll.svg" alt="" />
                <img src="~/static/triangles/triangle_ll.svg" alt="" />
                <img src="~/static/triangles/triangle_ll.svg" alt="" />
                <img src="~/static/triangles/triangle_ll.svg" alt="" />
            </div>
            <div class="top__content">
                <h1>DOIT <span>BETA</span></h1>
                <p>
                    Prepare for your esports career and get ready for awesome
                    tournaments with big prize pools and many fun! Register Now!
                </p>
            </div>
        </div>
        <div class="main__content">
            <MainPageTabs @setTab="setTournamentTab" label="Tournaments">
                <MainPageTab
                    class="tab__item tournaments"
                    :selected="index === 0"
                    :name="tab.title"
                    v-for="(tab, index) in tournamentsTabs"
                    :key="index"
                >
                    <swiper :options="swiperOption">
                        <swiper-slide
                            v-for="game in filteredTournaments"
                            :key="game.description"
                        >
                            <TournamentItem :game="game" />
                        </swiper-slide>
                        <div
                            slot="pagination"
                            class="swiper-pagination swiper-pagination-bullets"
                        ></div>
                    </swiper>
                </MainPageTab>
            </MainPageTabs>
            <MainPageTabs @setTab="setNewsTab" label="News">
                <MainPageTab
                    class="tab__item news"
                    :selected="index === 0"
                    :name="tab.title"
                    v-for="(tab, index) in tournamentsTabs"
                    :key="index"
                >
                    <swiper :options="swiperOption">
                        <swiper-slide
                            v-for="news in filteredNews"
                            :key="news.title"
                        >
                            <NewsItem :news="news" />
                        </swiper-slide>
                        <div
                            slot="pagination"
                            class="swiper-pagination swiper-pagination-bullets"
                        ></div>
                    </swiper>
                </MainPageTab>
            </MainPageTabs>
            <MainPageTabs
                @setTab="setStreamTab"
                class="streams"
                label="Streams"
            >
                <MainPageTab
                    class="tab__item"
                    :selected="index === 0"
                    :name="tab.title"
                    v-for="(tab, index) in tournamentsTabs"
                    :key="index"
                >
                    <swiper :options="swiperOption">
                        <swiper-slide
                            v-for="item in filteredStreams"
                            :key="item.title"
                        >
                            <StreamsItem :stream="item" />
                        </swiper-slide>
                        <div
                            slot="pagination"
                            class="swiper-pagination swiper-pagination-bullets"
                        ></div>
                    </swiper>
                </MainPageTab>
            </MainPageTabs>
            <Partners />
            <div class="games" v-if="width >= 650">
                <h1>Games</h1>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(game, index) in gamesFire" :key="index">
                        <GameCard :game="game" />
                    </swiper-slide>
                    <div
                        slot="pagination"
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div>
                </swiper>
            </div>
            <div v-if="width < 650">
                <GameCard v-for="(game, index) in gamesFire" :key="index" :game="game" />
            </div>
        </div>
        <div class="dots"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            start: 0,
            end: 4,

            width: 0,
            topHeight: 0,

            activeTournamentTab: 0,
            activeNewsTab: 0,
            activeStreamTab: 0,
            activeGamesTab: 0,

            swiperOption: {
                loop: false,
                // centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    dynamicBullets: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    1920: {
                        slidesPerView: 4,
                    },
                    2560: {
                        slidesPerView: 5,
                    },
                },
            },
            tournaments: [],
            news: [],
            streams: [
                {
                    title: 'Playing CS:GO !!!',
                    description: 'asefasef',
                    game_id: 1,
                    account: 'PlayGround',
                },
                {
                    title: 'Dota II play 12 hours',
                    description: 'aaaaaaaa',
                    game_id: 2,
                    account: '24/7 plays',
                },
                {
                    title: 'stream StarCraft II',
                    description: 'ssssssssssss',
                    game_id: 3,
                    account: 'yeahoo',
                },
                {
                    title: 'WarCraft III',
                    description: 'ffffff',
                    game_id: 4,
                    account: 'Gonzo',
                },
                {
                    title: 'FIFA 2020',
                    description: 'xxxxxxx',
                    game_id: 5,
                    account: 'Kuplinov plays',
                },
            ],
            gamesFire: [],
        }
    },
    async fetch() {
        this.tournaments = await this.$api.dbGetTournaments()
        this.news = await this.$api.dbGetNews()
        await this.$api.dbGetGames(this.gamesFire)
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },
        tournamentsTabs() {
            const g = this.gamesFire
            const arrId = [...new Set(g.map((el) => el.id))]
            const arrTitle = [...new Set(g.map((el) => el.title))]
            const arr = []
            arr[0] = {
                title: 'All',
            }
            for (let i = 0; i < arrTitle.length; i++) {
                arr.push({
                    title: arrTitle[i],
                    id: arrId[i],
                })
            }
            return arr
        },
        filteredTournaments() {
            const tab = this.activeTournamentTab
            return this.tournaments.filter((el) => {
                if (tab === 0) {
                    return el
                } else {
                    return el.game_id === tab
                }
            })
        },
        filteredNews() {
            const tab = this.activeNewsTab
            return this.news.filter((el) => {
                if (tab === 0) {
                    return el
                } else {
                    return el.game_id === tab
                }
            })
        },
        filteredStreams() {
            const tab = this.activeStreamTab
            return this.streams.filter((el) => {
                if (tab === 0) {
                    return el
                } else {
                    return el.game_id === tab
                }
            })
        },
        filteredGames() {
            const tab = this.activeGamesTab
            return this.gamesFire.filter((el) => {
                if (tab === 0) {
                    return el
                } else {
                    return el.id === tab
                }
            })
        },
    },
    created() {
    },
    mounted() {

        this.$nextTick(() => {
            window.addEventListener('resize', this.calcHeight)
            this.calcHeight()
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.calcHeight)
    },
    methods: {
        setTournamentTab(data) {
            this.activeTournamentTab = data
        },
        setNewsTab(data) {
            this.activeNewsTab = data
        },
        setStreamTab(data) {
            this.activeStreamTab = data
        },
        setGameTab(data) {
            this.activeGamesTab = data
        },
        calcHeight() {
            this.width = window.innerWidth;
            if (this.$refs.top === undefined) return
            const height = this.$refs.top.clientWidth
            this.topHeight = height
        },
    },
}
</script>

<style lang="scss">
.games {
    ul {
        display: none !important;
    }
    .game__card {
        width: 100% !important;
        font-size: 22px;
    }
}

.streams {
    h1 {
        display: flex;
        align-items: end;
        span {
            background: url('~/static/streams.png') no-repeat center;
            width: 32px;
            height: 32px;
            margin: 0 0 4px 16px;
        }
    }
}

.dots {
    position: absolute;
    width: 100%;
    top: 150%;
    left: 0;
    height: 70%;
    bottom: 0;
    z-index: 0;
    background-image: radial-gradient(#14171a 4px, transparent 0);
    // background-image: radial-gradient(#ff1616 4px, transparent 0);
    background-position: 10px 10px;
    background-size: 40px 40px;
    background-repeat: repeat;
    box-shadow: inset 0px 0px 40px 40px #0f1215;
}

.swiper-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        max-width: 370px;
        width: 100%;
    }

    .swiper-pagination {
        margin-top: 10px;
        position: relative;
        bottom: 0;
        > .swiper-pagination-bullet {
            background-color: #4f5f70;
            width: 13px;
            height: 17px;
            border: none;
            border-radius: 0;
        }
    }
}

.main__page {
    padding: 55px auto 0;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .top {
        position: relative;
        display: flex;
        height: 960px;
        max-width: 1000px;
        justify-content: center;
        align-items: center;
        width: 100%;

        .triangles {
            position: relative;
            height: 100%;
            width: 100%;

            img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0px;
                transform: rotate(0deg);
                &:nth-child(1) {
                    opacity: 0.3;
                    transform: rotate(2deg);
                }
                &:nth-child(2) {
                    opacity: 0.3;
                    transform: rotate(358deg);
                }
                &:nth-child(4) {
                    width: 60%;
                    opacity: 0.3;
                    transform: rotate(0deg);
                    margin: 10% 20%;
                }
            }
        }

        .top__content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #f5f5f5;
            position: absolute;
            top: 0;
            margin: 0 auto;

            h1 {
                margin-top: 20%;
                font-weight: bold;
                font-size: 125px;
                line-height: 100%;
            }

            p {
                max-width: 460px;
                word-wrap: break-word;
                font-size: 16px;
                line-height: 24px;
                color: #cccccc;
                text-align: center;
            }
        }
    }

    .main__content {
        position: relative;
        width: 100%;
        z-index: 1;

        h1 {
            padding-bottom: 45px;
            font-weight: bold;
            font-size: 44px;
            line-height: 100%;
        }

        .tab__content {
            margin-bottom: 150px;
            .tab__item {
                display: flex;
                flex-flow: wrap;
                justify-content: space-between;
                width: 100%;
                height: 100%;
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .main__page {
        .top {
            height: 675px;
        }
    }
}

@media screen and (max-width: 768px) {
    .swiper-wrapper {
        .swiper-slide {
            max-width: 100%;

            .image {
                max-width: 100%;
            }
        }
    }

    .main__page {
        .top {
            // height: ;
            .top__content {
                h1 {
                    font-size: 84px;
                    margin-top: 15%;

                    span {
                        display: none;
                    }
                }

                p {
                    font-size: 14px;
                    line-height: 150%;
                }
            }
        }
        .main__content {
            .partners {
                margin-bottom: 50px;
            }
            .tab__content {
                margin-bottom: 50px;
            }
        }
    }
}
</style>
