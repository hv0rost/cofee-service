<template>

  <div class="main">
    <div class="header">
      <router-link class="link" to="/">Конфигурация кофе-машины</router-link>
      <router-link class="link" to="/list">Список добавленных позиций</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
$primary : rgba(255,255,255,.4);

.main {
  margin: 0px auto;
  max-width: 1200px;
  padding: 0 10px 0 10px;
}
.header {
  min-height: 40px;
  border-bottom: 2px solid #088566;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .link {
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
