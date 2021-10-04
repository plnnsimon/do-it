<template>
    <div v-if="user" class="profile__page">
        <div class="profile__wrapper">
            <h2>Profile</h2>
            <div class="profile__info">
                <div class="info__left">
                    <p>ID</p>
                    <p>Name</p>
                    <p>Nickname</p>
                    <p>With us from</p>
                    <p>Sex / Age</p>
                    <p>Nationality</p>
                    <p>Country</p>
                    <p>Web-site</p>
                </div>
                <div v-if="user" class="info__right">
                    <p>{{ user.id.substr(0, 10) + '...' }}</p>
                    <p>{{ user.name }}</p>
                    <p>{{ user.nickname || '...' }}</p>
                    <p>{{ user.registrationDate }}</p>
                    <p>{{ user.age || '...' }} / {{ user.sex || '...' }}</p>
                    <p>{{ user.nationality }}</p>
                    <p>{{ user.country }}</p>
                    <p>{{ user.website || '...' }}</p>
                </div>
            </div>
        </div>
        <div class="awards">
            <div class="level__and__awards">
                <h2>Level and awards</h2>
                <div
                    :class="`progress__bar-${index}`"
                    class="progress__bar"
                    v-for="(game, index) in user.awards"
                    :key="index"
                >
                    <span>
                        <h3>{{ game.game }}</h3>
                        <p>{{ game.level }}</p>
                    </span>
                    <progress :value="game.level" max="20"></progress>
                </div>
            </div>
            <div class="awards__rings">
                <span v-for="(game, index) in sortedAwards"
                :key="index" class="round" :class="`awards__rings-${index}`"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            required: true,
        },
    },
    data() {
        return {
            color: 'red',
        }
    },
    computed: {
        sortedAwards() {
            return this.user.awards.filter((el,index) => {
                return index%2 === 0
            })
        }
    },
    mounted() {
        
    },
}
</script>

<style lang="scss" scoped>
@import '/assets/progressbar.scss';

h2 {
    font-weight: bold;
    font-size: 16px;

    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 25px;
}

.profile__page {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .profile__wrapper {
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
        margin-right: 20px;

        .profile__info {
            font-weight: normal;
            font-size: 16px;
            line-height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            p {
                margin-bottom: 17px;
            }

            .info__left {
                color: #67707a;
                margin-right: 60px;
            }
        }
    }
}

.awards {
    display: flex;
    max-width: 420px;
    justify-content: space-between;
    width: 100%;

    .level__and__awards {
        width: 100%;
    }

    .awards__rings {
        display: flex;
        flex-direction: column;
        margin: 44px 0 0 50px;
        .round {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 1px solid red;
            margin-bottom: 19px;
        }

    }
}

@media screen and (max-width: 1440px) {
    .awards {
        .awards__rings {
            display: none;
        }
    }
}

@media screen and (max-width: 1024px) {
    .profile__page {
        flex-flow: row wrap;
    }
}

@media screen and (max-width: 768px) {
    .awards {
        .awards__rings {
            display: none;
        }
    }
}

@media screen and (max-width: 520px) {
    .awards {
        max-width: 100%;
    }
}
</style>