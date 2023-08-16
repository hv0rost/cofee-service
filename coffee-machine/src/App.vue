<template>
  <div class="main">
    <div class="header">
      <router-link class="link" to="/">Конфигурация кофе-машины</router-link>
      <router-link class="link" to="/list">Список добавленных позиций <div class="counter" v-if="counter !== 0">{{counter}}</div> </router-link>
    </div>

    <suspense>
      <router-view></router-view>
    </suspense>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import {computed} from "vue";

export default {

  name: 'App',
  setup() {
    const store = useStore()

    const counter = computed(() => store.getters.getCounter)

    return {counter}
  }
}
</script>

<style lang="scss">
$primary : rgba(255,255,255,.4);
$secondary : #088566;
.main {
  margin: 0px auto;
  max-width: 1200px;
  padding: 0 10px 0 10px;
}
.header {
  min-height: 40px;
  border-bottom: 2px solid $secondary;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .counter{
    margin-left: 5px;
    width: 25px;
    background: $secondary;
    border-radius: 50%;
    color: #FFFFFF;
  }

  .link {
    display: flex;
    align-self: center;
    margin: 0;
    padding: 10px;
    font-size: 20px;
    color: $primary;
    text-align: center;
    font-weight: normal;
    text-decoration: none;
  }
  .link:hover {
    color: #FFF;
    cursor: pointer;
  }
}
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background-color: #3f4143;
}
</style>
