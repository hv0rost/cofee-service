<template>
  <div class="items">
    <div v-for="(item, index) in list" :key="index" class="item">
      <h3>Кофемашина E{{item.drinksCount}} Piano Limited edition Размер - {{item.size}}</h3>
      <img v-if="item.size === 'Стандартный'" src="../assets/small-machine.png">
      <img v-else src="../assets/large-machine.png">
      <div class="counter">
        <div class="btn" @click="decreaseCounter(index)">-</div>
        <div>{{ item.count }}</div>
        <div class="btn" @click="increaseCounter(index)">+</div>
      </div>
    </div>
  </div>
  <div class="emptyMsg" v-if="list.length === 0">Список добавленных позиций пока пуст</div>

</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";

export default {
  async setup () {
    const store = useStore();
    store.commit('clearCounter')
    const list = ref();

    try {
      const response = await fetch('http://localhost:3030/');
      list.value = await response.json();
    }
    catch (err) {
      console.log(err)
    }

    async function increaseCounter(index) {
      try {
        await fetch('http://localhost:3030/increase', {
          method : 'PATCH',
          body : JSON.stringify({index: index}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        list.value[index].count += 1;
      }
      catch (err) {
        console.log(err)
      }
    }

    async function decreaseCounter(index) {
      try {
        await fetch('http://localhost:3030/decrease', {
          method : 'PATCH',
          body : JSON.stringify({index: index}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        list.value[index].count -= 1;
        if (list.value[index].count === 0) {
          list.value.splice(index, 1)
        }
      }
      catch (err) {
        console.log(err)
      }
    }

    return {list, increaseCounter, decreaseCounter}
  }
}
</script>

<style scoped lang="scss">
$primary : rgba(255,255,255,.4);
$secondary : #088566;

.emptyMsg {
  color: $primary;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
  margin: 20px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h3 {
      color: #FFFFFF;
      width: 70%;
    }
    img {
      width: 100%;
      max-width: 350px;
      max-height: 400px;
    }
    .counter {
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin: 10px;
      .btn {
        display: table-cell;
        vertical-align: middle;
        background-color: $secondary;
        padding: 2px 4px 6px 4px;
        border-radius: 4px;
        width: 20px;
        height: 20px;
        align-self: center;
        text-align: center;
        margin: 0 5px 0 5px;
      }
      .btn:hover {
        cursor: pointer;
      }
      .btn:active {
        box-shadow: 1px 1px 1px $secondary;
      }
    }
  }
}
</style>