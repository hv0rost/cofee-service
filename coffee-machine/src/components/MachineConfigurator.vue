<template>
    <div class="options">
      <div class="select">
        <div>Выберете размер устройства:</div>
        <select>
          <option>Стандартный</option>
          <option>Увеличиный</option>
        </select>
      </div>
      <div class="select drinks">
        <div>Выберете количесвто напитков:</div>
        <select>
          <option>6</option>
          <option>8</option>
          <option>12</option>
        </select>
      </div>
    </div>



  <div class="imgContainer">
    <img v-if="small" :src="small">
    <img v-else :src="large">
    <div>Добавить в хранилище</div>
  </div>


</template>

<script>
import smallMachine from '../assets/small-machine.png'
import largeMachine from '../assets/large-machine.png'

export default {
  setup () {
    const small = smallMachine;
    const large = largeMachine;

    return {small, large}
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

  div {
    margin-top: 10px;
    color: #fff;
    display: inline-block;
    text-decoration: underline $secondary;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 4px;
    font-size: 20px;
  }

  div:hover {
    cursor: pointer;
    color: $secondary;
  }

  img {
    width: 100%;
    max-width: 350px;
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