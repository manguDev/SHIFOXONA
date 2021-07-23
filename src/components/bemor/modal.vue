<template>
    <div>
        <div class="sore__modal" v-show="soreModal">
            <div class="close" @click="close()"></div>
            <div class="title">Yangi bemor ro’yhatdan o’tkazish</div>
            <div class="round">1</div>
            <div class="gen">Shaxsiy ma’lumotlar</div>

            <input type="text" v-model="sore.ism" class="id-1" placeholder="Ism sharifi">
            <div class="t-2">Tug’ilgan hudud</div>
            <select class="id-2" v-model="sore.hudud">
                <option value="Toshket Poytaxt">Toshket Poytaxt</option>
                <option value="Toshket Viloyati">Toshket Viloyati</option>
                <option value="Samarqand Viloyati">Samarqand Viloyati</option>
                <option value="Jizzax Viloyati">Jizzax Viloyati</option>
                <option value="Xorazm Viloyati">Xorazm Viloyati</option>
                <option value="Buxoro Viloyati">Buxoro Viloyati</option>
                <option value="Andijon Viloyati">Andijon Viloyati</option>
                <option value="Qashqadaryo Viloyati">Qashqadaryo Viloyati</option>
                <option value="Surxondaryo Viloyati">Surxondaryo Viloyati</option>
                <option value="Navoiy Viloyati">Navoiy Viloyati</option>
                <option value="Sirdaryo Viloyati">Sirdaryo Viloyati</option>
                <option value="Farg'ona Viloyati">Farg'ona Viloyati</option>
                <option value="Qarshi Viloyati">Qarshi Viloyati</option>
            </select>
            <div class="t-3">Oilaviy holati</div>
            <select class="id-3" v-model="sore.oila_h">
                <option value="Uylangan">Uylangan</option>
                <option value="Uylanmagan">Uylanmagan</option>
                <option value="Turmushga chiqqan">Turmushga chiqqan</option>
                <option value="Turmushga chiqmagan">Turmushga chiqmagan</option>
            </select>
            <div class="t-4">Bandlik holati</div>
            <select class="id-4" v-model="sore.bandlik">
                <option value="O'qiydi">O'qiydi</option>
                <option value="Ishliydi">Ishliydi</option>
                <option value="Bekorchi">Bekorchi</option>
            </select>
            <input type="text" v-model="sore.youTel" class="id-5" placeholder="Telefon raqam">
            <div class="t-5">Tug’ilgan sana</div>
            <input type="date" class="id-6" v-model="sore.brith">
            <input type="text" class="id-7" v-model="sore.manzil" placeholder="Manzil">
            <div class="t-6">Ma’lumoti</div>
            <select class="id-8" v-model="sore.reference">
                <option value="Oliy Ma'lumotli">Oliy Ma'lumotli</option>
                <option value="O'rta Ma'lumotli">O'rta Ma'lumotli</option>
            </select>
            <input type="text" class="id-9" v-model="sore.word" placeholder="Ish joyi">
            <input type="text" class="id-10" v-model="sore.familyTel" placeholder="Oila a’zolaridan telefon raqam">
            <button class="btn" @click="dale">Keyingi bo’lim</button>
        </div>

        <div class="sore__modal" v-show="soreModal_2">
            <div class="close" @click="close()"></div>
            <div class="title">Yangi bemor ro’yhatdan o’tkazish</div>
            <div class="round">2</div>
            <div class="gen">Tibbiy ma’lumotlar</div>
            <div class="rsz">
                <select class="id-11" v-model="sore.qon" title="Qon guruhi">
                    <option value="1-guruh">1-guruh</option>
                    <option value="2-guruh">2-guruh</option>
                    <option value="3-guruh">3-guruh</option>
                    <option value="4-guruh">4-guruh</option>
                </select>
                <select class="id-11" v-model="sore.resuz" title="Rezus faktor">
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
            </div>
            <input type="text" v-model="sore.insurF" class="id-12" placeholder="Sug’urta firmasi">
            <input type="text" class="id-13" v-model="sore.imH" placeholder="Imtiyoz hujjati">
            <input type="text" class="id-14" v-model="sore.disabled" placeholder="Nogronligi">
            <input type="text" class="id-15" v-model="sore.weight" placeholder="Vazn">
            <input type="text" class="id-16" v-model="sore.SP" placeholder="Sug’urta polisi">
            <input type="text" class="id-17" v-model="sore.sk" placeholder="Imtiyoz kategoriyasi">
            <div class="t-7">Imtiyoz olingan sana</div>
            <input type="date" v-model="sore.Isana" class="id-18">
            <input type="text" class="id-19" v-model="sore.alergetik" placeholder="Allergik reaksiyalar">
            <input type="text" class="id-20" v-model="sore.height" placeholder="Bo’yi">
            <div class="btnas">
                <button class="exit" @click="back_2">Ortga qaytish</button>
                <button class="dale" @click="dale_2">Keyingi bo’lim</button>
            </div>
        </div>

        <div class="sore__modal" v-show="soreModal_3">
            <div class="close" @click="close()"></div>
            <div class="title">Yangi bemor ro’yhatdan o’tkazish</div>
            <div class="round">3</div>
            <div class="gen">Tashrif ma’lumotlari</div>
            <div class="t-8">Tashrif sanasi</div>
            <input type="date" v-model="sore.TSH" class="rsz">
            <input type="text" class="id-12" v-model="sore.davolaB" placeholder="Davolangan bo’lim">
            <input type="text" class="id-13" v-model="sore.img" placeholder="Rasm URL" title="Iltimos internetdagi rasmingiz URL ni yozing">
            <div class="t-10">Qabul vaqti</div>
            <input type="time" v-model="sore.QV" class="id-14">
            <div class="t-9">Chiqish sanasi</div>
            <input type="date" v-model="sore.exitDate" class="id-16">
            <input type="text" class="id-17" v-model="sore.Mdoc" placeholder="Mas’ul shifokor">
            <input type="email"  class="id-18" v-model="sore.email" placeholder="Email pochta">
            <div class="t-11">Qabul vaqtidan chiqish</div>
            <input type="time" v-model="sore.QVCH" class="id-19">
            <textarea class=" txt" v-model="sore.Msabab" cols="60" rows="2" placeholder="Murojaat Sababi"></textarea>
            <div class="btnas">
                <button class="exit" @click="back_3">Ortga qaytish</button>
                <button class="dale" @click="dale_3">Keyingi bo’lim</button>
            </div>
        </div>

        <div class="sore__modal" v-show="soreModal_4">
            <div class="close" @click="close()"></div>
            <div class="title">Yangi bemor ro’yhatdan o’tkazish</div>
            <div class="round">4</div>
            <div class="gen">Kasallik tarixi</div>
            <div class="t-8">Davolanish  sanasi</div>
            <input type="date" v-model="sore.davoS" class="rsz">
            <input type="text" class="id-12" v-model="sore.docname" placeholder="Shifokor ism-sharifi">
            <input type="text" v-model="sore.kasallik" class="id-16" placeholder="Kasallik turi">
            <input type="text" class="id-17" v-model="sore.hostpital" placeholder="Davolangan shifoxona manzili">
            <textarea class="diagnoz" v-model="sore.diag" cols="70" rows="6" placeholder="Diagnoz"></textarea>
            <div class="btnas">
                <button class="exit" @click="back_4">Ortga qaytish</button>
                <button class="dale" @click="add">Qabul bo'limiga qoshish</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sore: {}
            }
        },
        computed: {
            soreModal() {
                return this.$store.getters.soreModal
            },
            soreModal_2() {
                return this.$store.getters.soreModal_2
            },
            soreModal_3() {
                return this.$store.getters.soreModal_3
            },
            soreModal_4() {
                return this.$store.getters.soreModal_4
            },
            sores(){
                return this.$store.getters.getSores
                }
        },
        methods: {
            dale() {
                this.$store.commit('soreModal_2', true)
                this.$store.commit('soreModal', false)
            },
            dale_2() {
                this.$store.commit('soreModal_2', false)
                this.$store.commit('soreModal_3', true)
            },
            dale_3(){
            this.$store.commit('soreModal_4', true)
            this.$store.commit('soreModal_3', false)
            },
            add(){
                this.$store.dispatch('addbemors',this.sore)
                this.sore = {}
                this.$store.commit('soreModal_4', false)

            },
            back_2() {
                this.$store.commit('soreModal_2', false)
                this.$store.commit('soreModal', true)
            },
            back_3(){
            this.$store.commit('soreModal_2', true)
            this.$store.commit('soreModal_3', false)
            },
            back_4(){
            this.$store.commit('soreModal_3', true)
            this.$store.commit('soreModal_4', false)
            },
            close() {
                this.$store.commit('soreModal', false)
            },

        }
    }
</script>

<style lang="scss" scoped>
      .sore__modal {
        width: 642px;
        height: 454px;
        position: fixed;
        top: 100px;
        background-color: #fff;
        top: 120px;
        left: 500px;
        right: 0;
        border-radius: 8px;
        box-shadow: 0px 12px 26px rgba(6, 16, 83, 0.288);


        .title {
            margin-top: 30px;
            margin-left: 148px;
            font-family: 'rb';
            font-size: 24px;
            margin-bottom: 14px;
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

        .round {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #56CCF2;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'rb';
            margin-bottom: 5px;
            margin-left: 307px;
        }

        .gen {
            font-size: 16px;
            font-family: 'rb';
            text-align: center;
        }

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
        .txt{
            border: 1px solid #BBBBBB;
            border-radius: 10px;
            outline: 0;
            padding-left: 14px;
            padding-top: 12px;
            font-family: 'rb';
            margin: auto;
            position: absolute;
            left: 100px;
            right: 0;
            bottom: 72px;
        }
        .diagnoz{
            border: 1px solid #BBBBBB;
            border-radius: 10px;
            outline: 0;
            padding-left: 14px;
            padding-top: 12px;
            font-family: 'rb';
            margin: auto;
            position: absolute;
            left: 68px;
            right: 0;
            bottom: 100px;
        }
        .id-1 {
            position: absolute;
            top: 147px;
            left: 45px;
        }

        .id-2 {
            position: absolute;
            top: 194px;
            left: 45px;
        }

        .id-3 {
            position: absolute;
            top: 241px;
            left: 45px;
        }

        .id-4 {
            position: absolute;
            top: 288px;
            left: 45px;
        }

        .id-5 {
            position: absolute;
            top: 335px;
            left: 45px;
        }

        .id-6 {
            position: absolute;
            top: 147px;
            right: 45px;
        }

        .id-7 {
            position: absolute;
            top: 194px;
            right: 45px;
        }

        .id-8 {
            position: absolute;
            top: 241px;
            right: 45px;
        }

        .id-9 {
            position: absolute;
            top: 288px;
            right: 45px;
        }

        .id-10 {
            position: absolute;
            top: 335px;
            right: 45px;
        }

        .t-2 {
            position: absolute;
            top: 202px;
            left: 195px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }

        .t-3 {
            position: absolute;
            top: 250px;
            left: 200px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }

        .t-4 {
            position: absolute;
            top: 298px;
            left: 200px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }

        .t-5 {
            position: absolute;
            top: 157px;
            right: 120px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }

        .t-6 {
            position: absolute;
            top: 251px;
            right: 120px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }

        .t-7 {
            position: absolute;
            top: 249px;
            right: 94px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }
        .t-8{
            position: absolute;
            top: 156px;
            left: 146px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }
        .t-9{
            position: absolute;
            top: 156px;
            right: 130px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }
        .t-10{
            position: absolute;
            top: 298px;
            left: 146px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }
        .t-11{
            position: absolute;
            top: 298px;
            right: 130px;
            z-index: 1;
            font-size: 14px;
            color: rgb(126, 121, 121);
        }
        .btn {
            position: absolute;
            bottom: 30px;
            left: 0px;
            right: 0;
            margin: auto;
            width: 130px;
            height: 32px;
            background: #27AE60;
            border-radius: 10px;
            color: #fff;
            font-family: 'rb';
        }

        .btnas {
            position: absolute;
            bottom: 32px;
            left: 185px;

            .dale,
            .exit {
                padding: 10px 12px;
                background: #27AE60;
                border-radius: 10px;
                color: #fff;
                font-family: 'rb';
                margin-right: 16px;
                background-color: rgb(41, 18, 105);
            }

            .dale {
                background: #27AE60;
            }
        }

        .rsz {
            display: flex;
            position: absolute;
            top: 147px;
            left: 45px;

            .id-11 {
                width: 126px;
                margin-right: 16px;
            }
        }

        .id-12 {
            position: absolute;
            top: 194px;
            left: 45px;
        }

        .id-13 {
            position: absolute;
            top: 241px;
            left: 45px;
        }

        .id-14 {
            position: absolute;
            top: 288px;
            left: 45px;
        }

        .id-15 {
            position: absolute;
            top: 335px;
            left: 45px;
        }

        .id-16 {
            position: absolute;
            top: 147px;
            right: 45px;
        }

        .id-17 {
            position: absolute;
            top: 194px;
            right: 45px;
        }

        .id-18 {
            position: absolute;
            top: 241px;
            right: 45px;
        }

        .id-19 {
            position: absolute;
            top: 288px;
            right: 45px;
        }

        .id-20 {
            position: absolute;
            top: 335px;
            right: 45px;
        }
    }
</style>