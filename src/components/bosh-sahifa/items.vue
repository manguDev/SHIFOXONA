<template>
  <div class="items">
    <div class="item">
      <img src="@/assets/img/aptechka.png" alt="here is the picture">
      <div class="t">
        <div class="title">Hodimlar</div>
        <div class="number">213</div>
      </div>
    </div>
    <div class="item">
      <img src="@/assets/img/sore.png" alt="here is the picture">
      <div class="t">
        <div class="title">Bemorlar</div>
        <div class="number">104</div>
      </div>
    </div>
    <div class="item">
      <img src="@/assets/img/HOME.png" alt="here is the picture">
      <div class="t">
        <div class="title">Xonalar</div>
        <div class="number">25</div>
      </div>
    </div>
    <div class="item">
      <img src="@/assets/img/byudjet.png" alt="here is the picture">
      <div class="t">
        <div class="title">Byudjet</div>
        <div class="number">$ 12,174</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .items {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 256px);
    padding-right: 30px;    

    .item {
      margin-right: 30px;
      width: 255px;
      height: 88px;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 38px;
      box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
      img{
        margin-left: 24px;
      }
      .t{
        display: flex;
        flex-direction: column;
        margin-left: 24px;
        .title{
          font-size: 14px;
          font-family: 'lato-b';
          margin-bottom: 4px;
        }
        .number{
          font-family: 'lato-r';
          color: #336CFB;
          font-size: 18px;
        }
      }
    }
  }
</style>