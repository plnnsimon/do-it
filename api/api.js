import Vue from 'vue'
import dbGetGames from './dbGetGames';
import dbGetTournaments from './dbGetTournaments'
import dbGetNews from './dbGetNews'

Vue.prototype.$api = {
    dbGetGames,
    dbGetTournaments,
    dbGetNews
};