<template>
    <div class="profile">
        <div class="profile__sidebar">
            <div v-if="user" class="sidebar__user_info">
                <div class="profile__image">
                    <i
                        v-if="user.image === null || user.image === undefined"
                        class="far fa-address-card"
                    ></i>
                    <img
                        v-if="user.image"
                        :src="user.image"
                        alt="profile-image"
                    />
                </div>
                <div class="user__info">
                    <div class="about__user">
                        <p>{{ user.name }}</p>
                        <p
                            v-if="
                                user.nickname !== null ||
                                user.nickname !== undefined
                            "
                        >
                            {{ user.nickname }}
                        </p>
                        <p v-if="user.team !== null || user.team !== undefined">
                            {{ user.team }}
                        </p>
                    </div>
                    <div class="icons">
                        <i class="fas fa-plus"></i>
                        <i class="fas fa-envelope"></i>
                    </div>
                </div>
            </div>
            <div class="sidebar__links">
                <Tabs>
                    <Tab name="Profile" selected="true">
                        <ProfileInfo :user="user" />
                    </Tab>
                    <Tab name="Number two">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Doloremque, minima!
                        </p>
                    </Tab>
                    <Tab name="About me"> </Tab>
                    <Tab name="Number tour"> </Tab>
                    <Tab name="Awards and medals"> </Tab>
                    <Tab name="Number six"> </Tab>
                    <Tab name="Number seven"> </Tab>
                    <Tab name="Number eight"> </Tab>
                    <Tab name="Number nine"> </Tab>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // user: null,
            // image: '`/static/'
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },
    },
    mounted() {
        console.log(this.user)

        // await firebase.database().ref('users').child(this.getUser.uid).once('value').then(data => {
        //   this.user = data.val()
        // })
        // .catch(err => console.error(err.message))
    },
}
</script>

<style lang="scss" scoped>
.profile {
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    .profile__sidebar {
        // max-width: 300px;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        // border-right: 2px solid #1a1f24;

        .sidebar__user_info {
            margin-bottom: 70px;
            position: relative;
            z-index: 1;
            .profile__image {
                margin-bottom: 25px;

                i {
                    font-size: 93px;
                    color: white;
                }

                img {
                    width: 104px;
                    height: 104px;
                }
            }

            .user__info {
                .about__user {
                    padding-bottom: 15px;

                    p {
                        &:nth-child(1) {
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 130%;
                            color: #909aa3;
                            margin-bottom: 10px;
                        }

                        &:nth-child(2) {
                            font-weight: bold;
                            font-size: 24px;
                            line-height: 130%;
                            color: #f5f5f5;
                            margin-bottom: 10px;
                        }

                        &:nth-child(3) {
                            font-size: 16px;
                            line-height: 130%;
                            color: #37b7fa;
                        }
                    }
                }
            }

            .icons {
                display: flex;
                align-items: center;

                i {
                    cursor: pointer;
                    font-size: 20px;
                    color: white;
                    &:nth-child(1) {
                        border: 1px solid white;
                        border-radius: 50%;
                        padding: 5px;
                        font-size: 11px;
                        margin-right: 16px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) {
    .profile {
        .profile__sidebar {
            // max-width: 240px;
        }
    }
}

@media screen and (max-width: 768px) {
    .profile {
        .profile__sidebar {
            // max-width: 200px;
        }
    }
}

@media screen and (max-width: 520px) {
    .profile {
        .profile__sidebar {
            max-width: 100%;
            border: none;

            .sidebar__user_info {
                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;

                .profile__image {
                    margin: 0;

                    i {
                        font-size: 110px;
                    }
                }
            }
        }
    }
}
</style>