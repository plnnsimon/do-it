<template>
    <div class="header">
        <div class="burger__menu">
            <i v-if="!isOpenMenu" @click="isOpenMenu = true" class="fas fa-bars"></i>
            <i v-else @click="isOpenMenu = false" class="fas fa-minus"></i>
        </div>
        <div class="header__logo">
            <img src="../static/DOIT.png" @click="$router.push('/')" alt="logo">
        </div>
        <transition name="openMenu">
            <div v-if="!isOpenMenu && windowWidth >= 1024 || isOpenMenu && windowWidth <= 1024" :class="{'open-menu': isOpenMenu}" class="navbar">
                <div class="links__container">
                    <NuxtLink class="header__link" to="/play">Play</NuxtLink>
                    <NuxtLink class="header__link" to="/news">News</NuxtLink>
                    <NuxtLink class="header__link" to="/games">Games</NuxtLink>
                    <NuxtLink class="header__link" to="/shop">Shop</NuxtLink>
                    <NuxtLink class="header__link" to="/sponsorship">Sponsorship</NuxtLink>
                </div>
                <div v-if="user === null" class="buttons__container" :class="{'open__menu_buttons': isOpenMenu}">
                    <button class="login" @click="$router.push('/login')">log in</button>
                    <button class="sign__out" @click="signUp">Sign up</button>
                </div>
                <ProfileNavDropdown :class="{'open__menu_dropdown': isOpenMenu}" v-if="user" :user="user" />
        </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpenMenu: false,
            windowWidth: window.innerWidth
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
    methods: {
        signUp() {
            this.$router.push({ name: 'login', props: { signUp: true } })
        },
        onResize() {
            this.windowWidth = window.innerWidth
        }
    },
    
}
</script>

<style lang="scss">
.openMenu-enter-active {
  transition: all .3s ease;
}
.openMenu-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.openMenu-enter, .openMenu-leave-to {
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

    .burger__menu {
        display: none;
    }

    .header__logo {
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
            position: absolute;
            top: 100px;
            background: #0F1215;
            flex-direction: column;
            z-index: 1;
            padding: 0;
            height: 115%;
            left: 0;
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
                color: #E6E6E6;
                text-decoration: none;
                &:hover {
                    transition: all ease .5s;
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
                background: #1A222D;
                color: #0A61E1;
                margin-right: 8px;
            }
            .sign__out {
                width: 136px;
                height: 50px;
                background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%), #095FE0;
            }
        
        }
    }
    
}


@media screen and (max-width: 1024px) {
    .header {
        .navbar {
            display: none;
            justify-content: start;

            .links__container {
                flex-direction: column;
                width: 50%;
                height: 50%;
                padding-bottom: 80px;
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

            i {
                font-size: 28px;
                cursor: pointer;

                &:hover {
                    opacity: .5;
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

            .links__container {
                flex-direction: column;
                width: 100%;
                height: 50%;
                padding-bottom: 80px;
            }
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