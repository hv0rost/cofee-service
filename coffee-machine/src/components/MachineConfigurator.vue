<template>
    <div class="options">
      <div class="select">
        <div>Выберете размер устройства:</div>
        <select v-model="size">
          <option>Стандартный</option>
          <option>Увеличиный</option>
        </select>
      </div>
      <div class="select drinks">
        <div>Выберете количесвто напитков:</div>
        <select v-model="drinksCount">
          <option>6</option>
          <option>8</option>
          <option>12</option>
        </select>
      </div>
    </div>

  <div class="imgContainer">
    <h3>Кофемашина E{{drinksCount}} Piano Limited edition | Размер - {{size}}</h3>
    <img v-if="size === 'Стандартный'" :src="small">
    <img v-else :src="large">
    <div>Добавить в хранилище</div>
  </div>


</template>

<script>
import smallMachine from '../assets/small-machine.png'
import largeMachine from '../assets/large-machine.png'
import {ref, watch} from "vue";

export default {
  setup() {
    const small = smallMachine;
    const large = largeMachine;

    const size = ref('Стандартный')
    const drinksCount = ref(6)

    watch(drinksCount, (drinksCount) => {
      console.log(drinksCount)
    });

    return {small, large, size, drinksCount}
  }
}
</script>

<style scoped lang="scss">
$primary : rgba(255,255,255,.4);
$secondary : #088566;

.imgContainer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  div {
    margin-top: 10px;
    color: #fff;
    display: inline-block;
    text-decoration: underline $secondary;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 4px;
    font-size: 20px;
  }
  h3 {
    color: #FFFFFF;
  }

  div:hover {
    cursor: pointer;
    color: $secondary;
  }

  img {
    width: 100%;
    max-width: 350px;
    max-height: 400px;
  }
}
.options {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.drinks {
  select {
    width: 6%;
    min-width: 40px;
  }
}
  select {
    width: 16%;
    min-width: 110px;
    height: 26px;
    border: 2px solid #3f4143;
    border-radius: 4px;
    outline: none;
    background-color: #3f4143;
    color : #FFFFFF;
  }
  .select {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      color: $primary;
    }
    option {
      font-family: 'Roboto', sans-serif;
    }
  }

</style>