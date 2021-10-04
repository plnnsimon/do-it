<template>
  <div class="main__page">
    <div v-if="!user" class="top">
      <div class="triangles">
        <img src="~/static/triangles/triangle_ll.svg" alt="">
        <img src="~/static/triangles/triangle_ll.svg" alt="">
        <img src="~/static/triangles/triangle_ll.svg" alt="">
        <img src="~/static/triangles/triangle_ll.svg" alt="">
      </div>
      <div class="top__content">
        <h1>DOIT <span>BETA</span></h1>
        <p>Prepare for your esports career and get ready for awesome tournaments with big prize pools and many fun! Register Now!</p>
      </div>
    </div>
    <div class="main__content">
      <MainPageTabs label="Tournaments">
        <!-- <h1>Tournaments</h1> -->
        <MainPageTab class="tab__item" :selected="index === 0" :name="tab.title" v-for="(tab, index) in tournaments" :key="index">
          <TournamentItem :game="game"  v-for="game in filteredTournaments(tab)" :key="game.description" />
        </MainPageTab>
      </MainPageTabs>
      <MainPageTabs label="News">
        <MainPageTab class="tab__item" :selected="index === 0" :name="tab.title" v-for="(tab, index) in tournaments" :key="index">
          <div class="tournaments__container" v-for="game in filteredTournaments(tab)" :key="game.description">
            <p>{{ game.description }}</p>
            <p>{{ game.start }}</p>
            <p>{{ game.mode }}</p>
            <p>{{ game.slots }}</p>
            <p>{{ game.pool }}</p>
          </div>
        </MainPageTab>
      </MainPageTabs>
    </div>
  </div>
</template>

<script>
import TournamentItem from '~/components/TournamentItem.vue';
export default {
  components: { TournamentItem },
  data() { 
    return {
      games: [
        {
          description: 'aaaaaaaa',
          start: '07/06',
          mode: '5v5',
          slots: '16/30',
          pool: 1500,
          game_id: 1,
          title: 'CS:GO'
        },
        {
          description: 'wwwwwww',
          start: '07/06',
          mode: '5v5',
          slots: '16/30',
          pool: 1500,
          game_id: 1,
          title: 'CS:GO'
        },
        {
          description: 'qqqqq',
          start: '07/06',
          mode: '5v5',
          slots: '16/30',
          pool: 1500,
          game_id: 2,
          title: 'Warzone'
        },
        {
          description: 'ffffff',
          start: '07/06',
          mode: '5v5',
          slots: '16/30',
          pool: 1500,
          game_id: 2,
          title: 'Warzone'
        },
        {
          description: 'ssssssss',
          start: '07/06',
          mode: '5v5',
          slots: '16/30',
          pool: 1500,
          game_id: 2,
          title: 'Warzone'
        },
        {
          description: 'vvvvvvvvvvv',
          start: '07/06',
          mode: '5v5',
          slots: '16/30',
          pool: 1500,
          game_id: 3,
          title: 'Dota II'
        },
        {
          description: 'xxxxxxxxxxxx',
          start: '07/06',
          mode: '5v5',
          slots: '16/30',
          pool: 1500,
          game_id: 3,
          title: 'Dota II'
        },
      ]
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    tournaments() {
      const t = this.games;
      const arrId = [...new Set(t.map(el => el.game_id))]
      const arrTitle = [...new Set(t.map(el => el.title))]
      const arr = []
      arr[0] = {
        title: "All"
      }
      for (let i = 0; i < arrId.length; i++) {
        arr.push({
          title: arrTitle[i],
          id: arrId[i],
        })
      }
      return arr;
    }
  },
  methods: {
    filteredTournaments(tab) {
      return this.games.filter(el => {
        if (tab.title === 'All') {
          return el
        } else {
          return el.game_id === tab.id
        }
        
      })
    }
  },
  mounted() {
  }
  
}
</script>

<style lang="scss">

.main__page {
  margin: 55px auto 0;
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
      color: #F5F5F5;
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
        color: #CCCCCC;
        text-align: center;

      }
    }
  }

  .main__content {
    position: relative;
    width: 100%;

    h1 {
      font-weight: bold;
      font-size: 44px;
      line-height: 100%;
    }

    .tab__content {

      .tab__item {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
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
  .main__page {

    .top {

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
  }
  
}
</style>
