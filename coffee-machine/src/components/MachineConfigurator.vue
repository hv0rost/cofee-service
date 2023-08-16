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
    <img v-if="size === 'Стандартный'" src="../assets/small-machine.png">
    <img v-else src="../assets/large-machine.png">
    <div @click="addToStorage">Добавить в хранилище</div>
  </div>
</template>

<script>
import {ref} from "vue";
import { useStore } from 'vuex'

export default {
  setup() {
    const size = ref('Стандартный');
    const drinksCount = ref(6);
    const store = useStore();

    async function addToStorage() {
      try {
        await fetch('http://localhost:3030/', {
          method : 'POST',
          body : JSON.stringify({
            size: size.value,
            drinksCount : drinksCount.value,
            count : 1
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        store.commit('incrementCounter')
      }
      catch (err) {
        console.log(err)
      }
    }

    return {size, drinksCount, addToStorage}
  }
}
</script>

<style scoped lang="scss">
$primary : rgba(255,255,255,.4);
$secondary : #088566;

.popup {

  position: absolute;
  bottom: 5%;
  left: 45.5%;
  border-radius: 6px;
  background: #088566;
  color: #FFFFFF;
  text-align: center;
  padding: 10px;
}

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