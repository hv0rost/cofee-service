<template>
  <div class="items">
    <div v-for="(item, index) in list" :key="index" class="item">
      <h3>Кофемашина E{{item.drinksCount}} Piano Limited edition Размер - {{item.size}}</h3>
      <img v-if="item.size === 'Стандартный'" src="../assets/small-machine.png">
      <img v-else src="../assets/large-machine.png">
      <div class="counter">
        <div class="btn">-</div>
        <div>{{ item.count }}</div>
        <div class="btn" >+</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  setup () {
    const list = [{
      size : "Увеличиный",
      drinksCount : 6,
      count : 1
    },
    {
      size : "Стандартный",
      drinksCount : 8,
      count : 3
    },
    {
      size : "Стандартный",
      drinksCount : 12,
      count : 2
    }];

    return {list}
  }
}
</script>

<style scoped lang="scss">
$primary : rgba(255,255,255,.4);
$secondary : #088566;

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