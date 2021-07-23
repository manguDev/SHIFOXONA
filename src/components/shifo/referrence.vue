<template>
  <div class="refer">
    <div class="spec">
      <div class="IMG">
        <img :src="doc.img" alt="">
      </div>
      <div class="border"></div>
      <div class="name">{{doc.name}}</div>
      <div class="m">
        <div class="l">Mutaxassisligi</div>
        <div class="t">{{doc.mutax}}</div>
      </div>
      <div class="ish">
        <div class="l">Ishlayotgan bo’lim</div>
        <div class="t">{{doc.ishBolm}}</div>
      </div>
      <div class="ish_stj">
        <div class="l">Ish staji</div>
        <div class="t">{{doc.intership}}</div>
      </div>
      <div class="ishga_kir">
        <div class="l">Ishga kirgan sana</div>
        <div class="t">{{doc.ishBoshlash}}</div>
      </div>
      <div class="ish_graf">
        <div class="l">Ish grafigi</div>
        <div class="t">{{doc.ishGraf}}</div>
      </div>
      <div class="title">
        Shaxsiy ma’lumotlar
      </div>
      <div class="brith">
        <div class="l">Tug’ilgan sanasi</div>
        <div class="t">{{doc.brith}}</div>
      </div>
      <div class="tug_hudud">
        <div class="l">Tug’ilgan hudud</div>
        <div class="t">{{doc.regionBrith}}</div>
      </div>
      <div class="manzil">
        <div class="l">Manzil</div>
        <div class="t">{{doc.manzil}}</div>
      </div>
      <div class="oila_h">
        <div class="l">Oilaviy holat</div>
        <div class="t">{{doc.OM}}</div>
      </div>
      <div class="malumot">
        <div class="l">Ma’lumoti</div>
        <div class="t">{{doc.reference}}</div>
      </div>
      <div class="tel">
        <div class="l">Telefon raqam</div>
        <div class="t">{{doc.myTel}}</div>
      </div>
      <div class="oila_tel">
        <div class="l">Oila a’zolaridan<br>telefon raqam</div>
        <div class="t">{{doc.familyTel}}</div>
      </div>
    </div>
    <div class="tablist">
      <div class="btnis">
        <div class="title">Mehnat faoliyati</div>
        <button class="btn" @click="faol"><b>+</b> Yangi ish faoliyat tarixi</button>
      </div>
      <table width="100%">
        <tr class="tr">
          <th>ID</th>
          <th>Muassasa nomi</th>
          <th>Ish faoliyat muddati</th>
          <th>Lavozimi</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>1</td>
          <td>{{doc.ishAdd}}</td>
          <td>{{doc.ishBoshlash}}-{{doc.ishTugash}}</td>
          <td>{{doc.lavozim}}</td>
        </tr>
      <tr v-for="(n,i) of Faoliyati" :key="i">
        <td>{{i+2}}</td>
        <td>{{n.ishloc}}</td>
        <td>{{n.ishBosh}}-{{n.ishTuga}}</td>
        <td>{{n.lavozm}}</td>
      </tr>
      </table>
    </div>
    <div class="newTablistModal" v-show="Faoliyat">
      <div class="title">Mehnat faoliyati</div>
      <button class="close" @click="close()"></button>
      <input type="date" v-model="qwq.ishBosh" class="name">
      <div class="small__title_2">Ish boshlagan sanasi</div>
      <input type="text" v-model="qwq.lavozm" class="intership" placeholder="Lavozimi"
        title="Qaysi soha mutaxassisligingizni kiriting">
      <input type="date" class="brith" v-model="qwq.ishTuga">
      <div class="small__title_3">Ishni tugatgan sanasi</div>
      <input type="text" v-model="qwq.ishloc" class="address" placeholder="Ishlagan shifoxona manzili">
      <button class="add" @click="add">Qo'shish</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        qwq: {}
      }
    },
    computed: {
      doc() {
        return this.$store.getters.getDocById(this.id)
      },
      Faoliyat() {
        return this.$store.getters.Faoliyat
      },
      Faoliyati() {
        return this.$store.getters.Faoliyati
      }
    },
    methods: {
      faol() {
        this.$store.commit('Faoliyat', true)
      },
      close() {
        this.$store.commit('Faoliyat', false)
      },
      add() {
        this.$store.dispatch('addFaol', this.qwq)
        this.$store.commit('Faoliyat', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  select,
  input {
    width: 268px;
    height: 32px;
    border: 1px solid #BBBBBB;
    border-radius: 10px;
    outline: 0;
    padding-left: 14px;
    font-family: 'rb';
  }

  .refer {
    height: 100vh;
    overflow: auto;

    .spec {
      width: 1110px;
      height: 400px;
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      position: relative;

      .IMG {
        width: 192px;
        height: 216px;

        img {
          width: 192px;
          height: 216px;
          background-repeat: no-repeat;
          background-size: center center;
        }

      }

      .border {
        width: 100%;
        height: 2px;
        background-color: #bdbd;
      }

      .name {
        position: absolute;
        top: 20px;
        left: 220px;
        font-size: 26px;
        font-family: 'lato-b';
      }

      .t {
        font-family: 'lato-b';
        font-size: 16px;
      }

      .l {
        font-size: 14px;
        font-family: 'lato-r';
        color: #606060;
      }

      .m {
        display: flex;
        position: absolute;
        left: 222px;
        top: 72px;

        .l {
          margin-right: 65px;
        }

      }

      .ish {
        display: flex;
        position: absolute;
        left: 220px;
        top: 116px;

        .l {
          margin-right: 42px;
        }

      }

      .ish_stj {
        display: flex;
        position: absolute;
        top: 160px;
        left: 220px;

        .l {
          margin-right: 107px;
        }
      }

      .ishga_kir {
        position: absolute;
        display: flex;
        top: 72px;
        left: 533px;

        .l {
          margin-right: 47px;
        }

      }

      .ish_graf {
        display: flex;
        position: absolute;
        top: 116px;
        left: 533px;

        .l {
          margin-right: 94px;
        }
      }

      .title {
        margin-left: 20px;
        margin-top: 20px;
        font-family: 'lato-b';
        font-weight: 700;
      }

      .brith {
        display: flex;
        margin-left: 20px;
        margin-top: 20px;

        .l {
          margin-right: 47px;
        }
      }

      .tug_hudud {
        display: flex;
        margin-top: 20px;
        margin-left: 20px;
        margin-bottom: 20px;

        .l {
          margin-right: 46px;
        }
      }

      .manzil {
        display: flex;
        margin-left: 20px;

        .l {
          margin-right: 102px;
        }
      }

      .oila_h {
        display: flex;
        position: absolute;
        bottom: 106px;
        left: 400px;

        .l {
          margin-right: 65px;
        }
      }

      .malumot {
        display: flex;
        position: absolute;
        bottom: 69px;
        left: 400px;

        .l {
          margin-right: 81px;
        }
      }

      .tel {
        display: flex;
        position: absolute;
        bottom: 106px;
        left: 737px;

        .l {
          margin-right: 55px;
        }
      }

      .oila_tel {
        display: flex;
        position: absolute;
        bottom: 50px;
        left: 737px;

        .l {
          margin-right: 44px;
        }
      }
    }

    .tablist {
      width: 1110px;
      height: 350px;
      border-radius: 8px;
      margin-bottom: 200px;

      .btnis {
        height: 68px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 25px;
        padding-right: 25px;

        button {
          width: 141px;
          height: 26px;
          background-color: #336CFB;
          border-radius: 10px;
          font-size: 9px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;

          b {
            margin-right: 9px;
            font-size: 24px;

          }
        }
      }

      table {
        .tr {
          width: 100%;
          height: 68px;
          text-align: start;
        }
      }
    }

    .newTablistModal {
      width: 642px;
      height: 300px;
      background-color: #fff;
      position: fixed;
      top: 120px;
      left: 500px;
      right: 0;
      border-radius: 8px;
      box-shadow: 0px 12px 26px rgba(6, 16, 83, 0.288);
      text-align: center;

      .title {
        margin-top: 30px;
        font-family: 'rb';
        font-size: 24px;
        margin-bottom: 14px;
      }

      .small__title_2 {
        position: absolute;
        left: 150px;
        top: 110px;
        font-size: 14px;
        color: rgb(161, 158, 158);
        font-family: 'lato-r';
        z-index: 1;
      }

      .small__title_3 {
        position: absolute;
        right: 80px;
        top: 110px;
        font-size: 14px;
        color: rgb(161, 158, 158);
        font-family: 'lato-r';
        z-index: 1;
      }

      .name {
        position: absolute;
        top: 100px;
        left: 45px;
      }

      .intership {
        position: absolute;
        left: 45px;
        top: 150px;

      }

      .brith {
        position: absolute;
        right: 45px;
        top: 100px;
      }

      .address {
        position: absolute;
        top: 150px;
        right: 45px;
      }

      .close {
        position: absolute;
        top: 10px;
        right: 12px;
        background-color: unset;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;

        &:before,
        &:after {
          position: absolute;
          content: '';
          display: inline-block;
          width: 100%;
          height: 2.5px;
          background-color: rgb(54, 5, 5);
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }

      .add {
        width: 170px;
        height: 40px;
        background-color: rgb(21, 10, 124);
        font-family: 'rb';
        color: #fff;
        border-radius: 25px;
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
</style>