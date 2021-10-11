<template>
    <div class="sidebar">
        <div class="sidebar__wrapper">
            <NuxtLink to="">
                <img src="../static/sidebar/horse.png" alt="">
            </NuxtLink>
            <NuxtLink to="">
                <img src="../static/sidebar/trophy.png" alt="">
            </NuxtLink>
            <NuxtLink to="">
                <img src="../static/sidebar/stats.png" alt="">
            </NuxtLink>
            <NuxtLink to="">
                <img src="../static/sidebar/network.png" alt="">
            </NuxtLink>
            <NuxtLink to="">
                <img src="../static/sidebar/target.png" alt="">
            </NuxtLink>
            <NuxtLink to="">
                <img src="../static/sidebar/megaphone.png" alt="">
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 112px;
    border-right: 2px solid #20252B;
    height: 100%;
    z-index: 11;
        
    .sidebar__wrapper {
        max-height: 960px;
        height: 100%;
        padding: 180px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        a {
            &:hover {
                transition: all ease .5s;
                opacity: 0.7;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .sidebar {
        top: inherit;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 55px;
        background: #0F1215;
        border-top: 1px solid #20252B;
            
        .sidebar__wrapper {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 5%;
        }
    }
}
</style>