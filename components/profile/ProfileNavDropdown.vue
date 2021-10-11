<template>
    <div class="dropdown" :class="{ active__dropdown: show }">
        <div class="dropdown__user_section">
            <div class="profile__image">
                <i
                    v-if="user.image === null || user.image === undefined"
                    class="far fa-address-card"
                ></i>
                <img v-else :src="user.image" alt="profile-image" />
            </div>
            <div class="dropdown__user">
                <p>{{ user.name }}</p>
                <p>160 EUR / 16 DTC</p>
            </div>
            <div class="dropdown__menu">
                <span class="dropdown__btn">
                    <i
                        :class="{ active: show }"
                        class="fas fa-chevron-down"
                        @click="show = !show"
                    ></i>
                </span>
            </div>
        </div>
        <div class="dropdown__level_section">
            <p>LVL {{ level || 1 }}</p>
            <progress :value="level" max="999"></progress>
            <div class="icons">
                <i class="fas fa-envelope"></i>
                <i class="fas fa-bell"></i>
            </div>
        </div>
        <transition name="fade">
            <div
                v-if="show"
                class="dropdown__list"
                @click="$emit('closeBurger', false)"
            >
                <ul @click="show = !show">
                    <li>
                        <NuxtLink to="/profile">MY PROFILE</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">MY TEAM</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">WITHDRAW</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">DEPOSIT</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">PREMIUM</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">STATISTICS</NuxtLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NuxtLink to="/#">Support</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">Settings</NuxtLink>
                    </li>
                    <li>
                        <button @click="signOut">Sign out</button>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            required: true,
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            show: false,
        }
    },
    computed: {
        level() {
            return this.user.awards.reduce(function (a, b) {
                return a + b.level
            }, 0)
        },
    },
    methods: {
        async signOut() {
            // this.$nuxt.$loading.start()
            await this.$fire.auth.signOut()
            this.$router.push('/')
        },
    },
    mounted() {},
}
</script>

<style lang="scss" scoped>
.active {
    transition: all ease 0.3s;
    transform: rotate(180deg) !important;
}
.dropdown {
    background: #161a1f;
    flex-direction: column;
    width: 226px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 2px solid black;

    &.active__dropdown {
        height: 100%;
        max-height: 300px;
    }

    .dropdown__user_section {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;
        padding: 8px 0;

        .profile__image {
            margin-right: 8px;
            img {
                width: 40px;
            }
            i {
                font-size: 35px;
            }
        }
        .dropdown__user {
            p {
                margin-right: 14px;
                font-weight: 500;
                line-height: 100%;
                &:nth-child(1) {
                    font-size: 14px;
                    margin-bottom: 8px;
                }
                &:nth-child(2) {
                    font-size: 12px;
                    color: #55aaff;
                }
            }
        }

        .dropdown__menu {
            .dropdown__btn {
                i {
                    transform: rotate(0deg);
                    transition: all ease 0.3s;
                }
            }
        }
    }

    .dropdown__level_section {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;

        p {
            font-weight: normal;
            font-size: 11px;
            line-height: 100%;
            color: #f5f5f5;
        }

        progress {
            width: 108px;
            height: 2px;
            appearance: none;
            &::-webkit-progress-bar {
                background: #2b353f;
                border-radius: 2px;
            }
            &::-webkit-progress-value {
                background-color: #ffffff;
            }
        }

        .icons {
            i {
                color: #2b353f;
                &:hover {
                    color: white;
                }
            }
        }
    }

    .dropdown__list {
        z-index: 10;
        background: #161a1f;
        position: absolute;
        top: 75px;
        width: 100%;
        // height: 100%;
        left: 0;
        font-size: 12px;
        ul {
            display: flex;
            list-style: none;
            a {
                color: #f5f5f5;
                text-decoration: none;
            }
            &:nth-child(1) {
                flex-direction: column;
                border-bottom: 2px solid black;

                li {
                    cursor: pointer;
                    padding: 14px 0 14px 12px;

                    &:hover {
                        background: rgba(88, 88, 88, 0.746);
                    }
                }
            }

            &:nth-child(2) {
                font-weight: normal;
                color: #969ba3;
                justify-content: space-around;
                a {
                    color: #969ba3;
                }

                li {
                    padding: 14px 0;
                    width: 100%;
                    text-align: center;
                    &:hover {
                        cursor: pointer;
                        background: rgba(88, 88, 88, 0.746);
                    }
                }
            }
        }
    }
}

.fade-enter-active {
    transition: all 0.3s ease;
}
.fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
    transform: translateX(50px);
    opacity: 0;
}

@media screen and (max-width: 1024px) {
    .dropdown {
        margin-bottom: 200px;

        .dropdown__user_section {
            background: #161a1f;
        }
        .dropdown__level_section {
            background: #161a1f;
            margin-bottom: 1.5px;
        }
        // .dropdown__list {
        //     position: relative;
        // }
    }
}
</style>