<template>
    <div class="header" :class="{ header__bg: isOpenMenu }">
        <div class="burger__menu">
            <i
                v-if="!isOpenMenu"
                @click="isOpenMenu = true"
                class="fas fa-bars"
            ></i>
            <i v-else @click="isOpenMenu = false" class="fas fa-minus"></i>
        </div>
        <div class="header__logo">
            <img
                src="../static/DOIT.png"
                @click="
                    $router.push('/')
                    isOpenMenu = false
                "
                alt="logo"
            />
        </div>
        <transition name="openMenu">
            <div
                v-if="
                    (!isOpenMenu && windowWidth >= 1024) ||
                    (isOpenMenu && windowWidth <= 1024)
                "
                :class="{ 'open-menu': isOpenMenu }"
                class="navbar"
            >
                <div class="links__container" @click="isOpenMenu = false">
                    <NuxtLink
                        class="header__link"
                        @click="isOpenMenu = false"
                        to="/play"
                        >Play</NuxtLink
                    >
                    <NuxtLink
                        class="header__link"
                        @click="isOpenMenu = false"
                        to="/news"
                        >News</NuxtLink
                    >
                    <NuxtLink
                        class="header__link"
                        @click="isOpenMenu = false"
                        to="/games"
                        >Games</NuxtLink
                    >
                    <NuxtLink
                        class="header__link"
                        @click="isOpenMenu = false"
                        to="/shop"
                        >Shop</NuxtLink
                    >
                    <NuxtLink
                        class="header__link"
                        @click="isOpenMenu = false"
                        to="/sponsorship"
                        >Sponsorship</NuxtLink
                    >
                </div>
                <div
                    v-if="user === null"
                    class="buttons__container"
                    :class="{ open__menu_buttons: isOpenMenu }"
                >
                    <button class="login" @click="$router.push('/login')">
                        log in
                    </button>
                    <button class="sign__out" @click="signUp">Sign up</button>
                </div>
                    <ProfileNavDropdown
                        @closeBurger="closeBurger"
                        :class="{ open__menu_dropdown: isOpenMenu }"
                        v-if="user"
                        :user="user"
                    />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpenMenu: false,
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize)
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        closeBurger(data) {
            this.isOpenMenu = data;
        },
        signUp() {
            this.$router.push({ name: 'login', params: { signUp: true } })
        },
        onResize() {
            this.windowWidth = window.innerWidth
        },
    },
}
</script>

<style lang="scss">
.openMenu-enter-active {
    transition: all 0.3s ease;
}
.openMenu-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.openMenu-enter,
.openMenu-leave-to {
    transform: translateX(50px);
    opacity: 0;
}

.header {
    display: flex;
    flex-direction: row;
    height: 106px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    // padding: 0 15%;
    z-index: 11;

    &.header__bg {
        background: #0f1215;
    }

    .burger__menu {
        display: none;
    }

    .header__logo {
        z-index: 3;
        img {
            width: 88px;
            height: 80px;
        }
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding-left: 40px;

        &.open-menu {
            display: flex;
            position: fixed;
            top: 0;
            background: #0f1215;
            flex-direction: column;
            z-index: 2;
            padding: 100px 0 0 0;
            height: 100%;
            left: 0;
            overflow: scroll;
        }

        .links__container {
            display: flex;
            justify-content: space-between;
            width: 60%;
            height: 100%;
            align-items: center;

            .header__link {
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                color: #e6e6e6;
                text-decoration: none;
                &:hover {
                    transition: all ease 0.5s;
                    color: #a1a1a1a1;
                }
            }
        }

        .buttons__container {
            display: flex;
            justify-content: space-between;

            button {
                color: white;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                border-radius: 2px;
            }
            .login {
                width: 105px;
                height: 50px;
                background: #1a222d;
                color: #0a61e1;
                margin-right: 8px;
            }
            .sign__out {
                width: 136px;
                height: 50px;
                background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%),
                    #095fe0;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .header {
        padding: 0 20px;
        position: fixed;
        background: #0f121594;
        .navbar {
            display: none;
            justify-content: start;

            .links__container {
                flex-direction: column;
                width: 50%;
                height: 50%;
                padding-bottom: 50px;
            }
        }

        .dropdown {
            display: none;

            &.open__menu_dropdown {
                display: block;
            }
        }

        .burger__menu {
            display: block;
            z-index: 3;

            i {
                font-size: 28px;
                cursor: pointer;

                &:hover {
                    opacity: 0.5;
                }
            }
        }

        .buttons__container {
            display: none;

            &.open__menu_buttons {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 108px;

                .login {
                    margin: 0;
                    width: 300px;
                }

                .sign__out {
                    width: 300px;
                }
            }
        }
    }
}

@media screen and (max-width: 425px) {
    .header {
        .navbar {
        }

        .buttons__container {
            width: 100%;
            padding: 0 25px;

            &.open__menu_buttons {
                .login {
                    width: 100%;
                }

                .sign__out {
                    width: 100%;
                }
            }
        }
    }
}
</style>