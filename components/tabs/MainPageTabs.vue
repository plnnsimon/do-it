<template>
    <article>
        <div class="main__page_links">
            <h1>{{ label }}</h1>
            <ul>
                <li
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="{ 'is-active': tab.isActive }"
                    @click="selectTab(tab)"
                >
                    {{ tab.name }}
                </li>
            </ul>
        </div>
        <section class="tab__content">
            <slot></slot>
        </section>
    </article>
</template>

<script>
export default {
    props: {
        label: { required: true },
    },
    data() {
        return {
            tabs: [],
        }
    },
    created() {
        this.tabs = this.$children
    },
    methods: {
        selectTab(tab) {
            this.tabs.forEach((el) => {
                el.isActive = el.name === tab.name
            })
        },
    },
}
</script>

<style lang='scss' scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .main__page_links {
        display: flex;
        justify-content: space-between;
        padding-bottom: 45px;

        ul {
            list-style: none;
            display: flex;

            li {
                padding: 16px;
                background: #14191f;
                margin-right: 1px;
                cursor: pointer;

                &:hover {
                    background: #22282f;
                }

                &.is-active {
                    background: #d8dfeb;
                    color: black;
                }
            }
        }
    }

    .tab__content {
        display: flex;
        width: 100%;
    }
}
</style>