<template>

  <div class="main">
    <div class="header">
      <div>Конфигурация кофе-машины</div>
      <div>Список добавленных позиций</div>
    </div>
    <MachineConfigurator />
  </div>
</template>

<script>
import MachineConfigurator from "@/components/MachineConfigurator";

export default {
  name: 'App',
  components: { MachineConfigurator }
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
  border-bottom: 1px solid #088566;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    align-self: center;
    margin: 0;
    padding: 10px;
    font-size: 20px;
    color: $primary;
    text-align: center;
    font-weight: normal;
  }
  div:hover {
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
