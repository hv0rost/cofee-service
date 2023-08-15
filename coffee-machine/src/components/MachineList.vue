<template>
  <div v-for="(item, index) in list" :key="index">
    {{ item }}

    <div class="counter">
      <div class="btn">-</div>
      <div>{{ item.count }}</div>
      <div class="btn" >+</div>
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
      }];

    return {list}
  }
}
</script>

<style scoped lang="scss">
$primary : rgba(255,255,255,.4);
$secondary : #088566;

.counter {
  color: #FFFFFF;
  display: flex;
  align-items: center;
  font-size: 20px;

  .btn {
    display: table-cell;
    vertical-align: middle;
    background-color: $secondary;
    padding: 5px 5px 5px 5px;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    align-self: center;
    text-align: center;
    margin: 0 5px 0 5px;
  }
  .btn:hover {
    cursor: pointer;
    color : $secondary;
  }
}
</style>