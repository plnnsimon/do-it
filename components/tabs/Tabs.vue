<template>
  <article>
      <div class="sidebar__links">
          <ul>
                <li 
                    v-for="(tab, index) in tabs" :key="index"
                    :class="{'is-active': tab.isActive}"
                    @click="selectTab(tab)"
                >
                    {{ tab.name }}
              </li>
          </ul>
      </div>
      <section class="tabs__details">
          <slot></slot>
      </section>
  </article>
</template>

<script>
export default {
    data() {
        return {
            tabs: []
        }
    },
    created() {
        this.tabs = this.$children
    },
    methods: {
        selectTab(tab) {
            this.tabs.forEach(el => {
                el.isActive = el.name === tab.name
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.is-active {
    color:#37B7FA;
    list-style-type: disc;
}
.sidebar__links {
  ul {
      display: block;
    list-style: inside circle;
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      margin-bottom: 24px;
      &::marker {
        margin-right: 9px;
      }
    }
  }
}
.tabs__details {
    position: absolute;
    top: 0;
    padding-left: 360px;
    width: 100%;
}

@media screen and (max-width: 1440px) {
    .tabs__details {
        padding-left: 300px;
    }
}

@media screen and (max-width: 768px) {
    .tabs__details {
        padding-left: 240px;
    }
}

@media screen and (max-width: 520px) {
    .tabs__details {
        padding: 0;
        position: relative;
    }
}
</style>