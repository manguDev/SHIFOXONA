<template>
    <div class="bemors">
        <div class="sores">
            <div class="img">
                <img :src="sore.img" alt="Bu yerda rasm mavjud">
            </div>
            <div class="border" />
            <div class="ISM">{{sore.ism}}</div>
            <div class="id-1">
                <div class="t">Tashrif sanasi:</div>
                <div class="l">{{sore.TSH}}</div>
            </div>
            <div class="id-2">
                <div class="t">Davolangan bo’lim:</div>
                <div class="l">{{sore.davolaB}}</div>
            </div>
            <div class="id-3">
                <div class="t"> Murojaat sababi: </div>
                <div class="l">{{sore.Msabab}}</div>
            </div>
            <div class="id-4">
                <div class="t"> Chiqish sanasi:</div>
                <div class="l">{{sore.exitDate}}</div>
            </div>
            <div class="id-5">
                <div class="t">Mas’ul shifokor:</div>
                <div class="l">{{sore.Mdoc}}</div>
            </div>
            <div class="title">Shaxsiy ma’lumotlar</div>
            <div class="id-6">
                <div class="t">Tug’ilgan sanasi:</div>
                <div class="l">{{sore.brith}}</div>
            </div>
            <div class="id-7">
                <div class="t">Tug’ilgan hudud:</div>
                <div class="l">{{sore.hudud}}</div>
            </div>
            <div class="id-8">
                <div class="t"> Manzil</div>
                <div class="l">{{sore.manzil}}</div>
            </div>
            <div class="id-9">
                <div class="t"> Oilaviy holat</div>
                <div class="l">{{sore.oila_h}}</div>
            </div>
            <div class="id-10">
                <div class="t">Ma’lumoti</div>
                <div class="l">{{sore.reference}}</div>
            </div>
            <div class="id-11">
                <div class="t">Bandlik holati</div>
                <div class="l">{{sore.bandlik}}</div>
            </div>
            <div class="id-12">
                <div class="t"> Ish joyi</div>
                <div class="l">{{sore.word}}</div>
            </div>
            <div class="id-13">
                <div class="t"> Telefon raqam</div>
                <div class="l">{{sore.youTel}}</div>
            </div>
            <div class="id-14">
                <div class="t"> Oila a’zolaridan <br> telefon raqam</div>
                <div class="l">{{sore.familyTel}}</div>
            </div>
            <div class="border_2" />
            <div class="title_2">Tibbiy ma’lumotlar</div>
            <div class="id-15">
                <div class="t">Qon guruhi</div>
                <div class="l">{{sore.qon}}</div>
            </div>
            <div class="id-16">
                <div class="t">RH faktor</div>
                <div class="l">{{sore.resuz}}</div>
            </div>
            <div class="id-17">
                <div class="t">Sug’urta polisi</div>
                <div class="l">{{sore.SP}}</div>
            </div>
            <div class="id-18">
                <div class="t">Sug’urta firmasi</div>
                <div class="l">{{sore.insurF}}</div>
            </div>
            <div class="id-19">
                <div class="t">Imtiyoz kategoriyasi</div>
                <div class="l">{{sore.sk}}</div>
            </div>
            <div class="id-20">
                <div class="t">Imtiyoz hujjati</div>
                <div class="l">{{sore.imH}}</div>
            </div>
            <div class="id-21">
                <div class="t">Imtiyoz olingan <br>sana</div>
                <div class="l">{{sore.Isana}}</div>
            </div>
            <div class="id-22">
                <div class="t">Invalidlik</div>
                <div class="l">{{sore.disabled}}</div>
            </div>
            <div class="id-23">
                <div class="t">Vazn</div>
                <div class="l">{{sore.weight}}</div>
            </div>
            <div class="id-24">
                <div class="t">Bo'yi</div>
                <div class="l">{{sore.height}}</div>
            </div>
            <div class="id-25">
                <div class="t">Allergik reaksiyalar</div>
                <div class="l">{{sore.alergetik}}</div>
            </div>
        </div>
        <div class="kt">
            <div class="media">
                <div class="title">Kasallik tarixi</div>
                <button class="add" @click="add"><b>+</b> Yangi kasallik tarixi</button>
            </div>
            <table width="100%">
                <tr class="tr">
                    <th>№</th>
                    <th>Davolanish sanasi</th>
                    <th>Kasallik turi</th>
                    <th>davolangan joyi</th>
                    <th>Diagnoz</th>
                    <th>Shifokor</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{{sore.davoS}}</td>
                    <td>{{sore.kasallik}}</td>
                    <td>{{sore.hostpital}}</td>
                    <td>{{sore.diag}}</td>
                    <td>{{sore.docname}}</td>
                </tr>
                <tr v-for="(n,i) of kasallik_tarixi" :key="i">
                    <td>{{i+2}}</td>
                    <td>{{n.date}}</td>
                    <td>{{n.sore}}</td>
                    <td>{{n.hostpital}}</td>
                    <td>{{n.diagnoz}}</td>
                    <td>{{n.docname}}</td>
                </tr>
            </table>

        </div>
        <div class="modal" v-show="SoreHistory">
            <div class="title">Kasallik tarixi</div>
            <div class="t">Davolanish sanasi</div>
            <input type="date" v-model="history.date" class="date">
            <input type="text" v-model="history.docname" class="docname" placeholder="Shifokor ism-sharifi">
            <input type="text" v-model="history.sore" class="kk" placeholder="Kasallik turi">
            <input type="text" v-model="history.hostpital" class="hosp" placeholder="Davolangan shifoxona manzili">
            <textarea v-model="history.diagnoz" cols="78" rows="5" placeholder="Diagnoz"></textarea>
            <div class="btes">
                <button class="btn red" @click="close">Bekor qilish</button>
                <button class="btn green" @click="save">Qo'shish</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                history:{}
            }
        },
        computed: {
            sore() {
                return this.$store.getters.getBemorById(this.id)
            },
            SoreHistory(){
                return this.$store.getters.SoreHistory
            },
            kasallik_tarixi(){
                return this.$store.getters.getHistory
            }

        },
        methods:{
            add(){
                this.$store.commit('SoreHistory',true)
            },
            close(){
                this.$store.commit('SoreHistory',false)
            },
            save(){
                this.$store.dispatch('soreHistoryAdd',this.history)
                this.$store.commit('SoreHistory',false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bemors {
        overflow: auto;
        height: 100vh;
        padding-bottom: 210px;

        &::-webkit-scrollbar {
            width: 1em;
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(0, 38, 255);
            outline: 1px solid slategrey;
        }

        .sores {
            width: 1110px;
            height: 681px;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            position: relative;

            .img {
                width: 200px;
                height: 215px;

                img {
                    width: 200px;
                    height: 215px;
                }
            }

            .border_2,
            .border {
                width: 100%;
                height: 1px;
                background-color: #BDBDBD;
            }

            .border_2 {
                position: absolute;
                top: 436px;
            }

            .ISM {
                font-size: 26px;
                font-family: 'lato-b';
                position: absolute;
                top: 20px;
                left: 220px;
            }

            .t {
                color: #606060;
                font-size: 14px;
                font-family: 'lato-b';
            }

            .l {
                font-size: 16px;
                font-family: 'rb';
            }

            .id-1 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 72px;
                left: 221px;

                .l {
                    margin-left: 66px;
                }
            }

            .id-2 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 116px;
                left: 221px;

                .l {
                    margin-left: 36px;
                }
            }

            .id-3 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 160px;
                left: 221px;

                .l {
                    margin-left: 50px;
                }
            }

            .id-4 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 72px;
                left: 533px;

                .l {
                    margin-left: 62px;
                }
            }

            .id-5 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 116px;
                left: 533px;

                .l {
                    margin-left: 55px;
                }
            }

            .title_2,
            .title {
                font-size: 16px;
                font-family: 'lato-b';
                margin: 20px;
            }

            .title_2 {
                position: absolute;
                top: 436px;
            }

            .id-6 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 275px;
                left: 20px;

                .l {
                    margin-left: 47px;
                }
            }

            .id-7 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 312px;
                left: 20px;

                .l {
                    margin-left: 46px;
                }
            }

            .id-8 {
                display: flex;
                position: absolute;
                top: 349px;
                left: 20px;

                .l {
                    width: 200px;
                    margin-left: 102px;
                }
            }

            .id-9 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 275px;
                left: 398px;

                .l {
                    margin-left: 65px;
                }
            }

            .id-10 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 312px;
                left: 398px;

                .l {
                    margin-left: 81px;
                }
            }

            .id-11 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 349px;
                left: 398px;

                .l {
                    margin-left: 58px;
                }
            }

            .id-12 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 386px;
                left: 398px;

                .l {
                    margin-left: 100px;
                }
            }

            .id-13 {
                display: flex;
                align-items: center;
                position: absolute;
                top: 277px;
                left: 737px;

                .l {
                    margin-left: 55px;
                }
            }

            .id-14 {
                display: flex;
                position: absolute;
                top: 314px;
                left: 737px;

                .l {
                    margin-left: 44px;
                }
            }

            .id-15 {
                display: flex;
                position: absolute;
                top: 495px;
                left: 20px;

                .l {
                    margin-left: 84px;
                }
            }

            .id-16 {
                display: flex;
                position: absolute;
                top: 532px;
                left: 20px;

                .l {
                    margin-left: 93px;
                }
            }

            .id-17 {
                display: flex;
                position: absolute;
                bottom: 95px;
                left: 20px;

                .l {
                    margin-left: 66px;
                }
            }

            .id-18 {
                display: flex;
                position: absolute;
                bottom: 38px;
                left: 20px;

                .l {
                    width: 146px;
                    margin-left: 56px;
                }
            }

            .id-19 {
                display: flex;
                position: absolute;
                bottom: 170px;
                left: 398px;

                .l {
                    margin-left: 27px;
                }
            }

            .id-20 {
                display: flex;
                position: absolute;
                top: 531px;
                left: 398px;

                .l {
                    width: 100px;
                    margin-left: 65px;
                }
            }

            .id-21 {
                display: flex;
                position: absolute;
                top: 587px;
                left: 398px;

                .l {
                    width: 100px;
                    margin-left: 56px;
                }
            }

            .id-22 {
                display: flex;
                position: absolute;
                top: 494px;
                left: 737px;

                .l {
                    margin-left: 97px;

                }
            }

            .id-23 {
                display: flex;
                position: absolute;
                top: 531px;
                left: 737px;

                .l {
                    margin-left: 120px;
                }
            }

            .id-24 {
                display: flex;
                position: absolute;
                top: 568px;
                left: 737px;

                .l {
                    margin-left: 124px;
                }
            }

            .id-25 {
                display: flex;
                position: absolute;
                top: 606px;
                left: 737px;

                .l {
                    margin-left: 33px;
                }
            }
        }

        .kt {
            max-width: 1110px;
            height: 430px;
            background-color: #fff;
            margin-top: 73px;
            box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
            border-radius: 8px;

            .media {
                width: 100%;
                height: 68px;
                padding-left: 24px;
                padding-right: 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .title {
                    font-weight: 700;
                    font-family: 'lato-b';
                    font-size: 20px;
                    color: #25282B;
                }

                .add {
                    width: 130px;
                    height: 26px;
                    background-color: #336CFB;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    b {
                        font-size: 24px;
                        margin-right: 8px;
                    }
                }
            }

            table {
                border-collapse: collapse;

                .tr {
                    background-color: #E8E8E8;
                    height: 56px;
                }

                th,
                td {
                    height: 56px;
                    text-align: start;
                    padding-left: 25px;
                }
                td{
                    border-bottom: 1px solid #e7e7;
                }
            }
        }

        .modal {
            width: 642px;
            height: 380px;
            position: fixed;
            top: 130px;
            left: 500px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 12px 16px rgba(125, 125, 125, 0.25);
            text-align: center;

            .title {
                margin-top: 30px;
                font-family: 'rm';
                font-size: 25px;
                color: rgb(17, 2, 2);
            }

            input {
                width: 268px;
                height: 32px;
                border: 1px solid #BBBBBB;
                border-radius: 10px;
                outline: 0;
                padding-left: 14px;
                font-family: 'rb';
                margin-bottom: 5px;
            }

            textarea {
                border: 1px solid #BBBBBB;
                border-radius: 10px;
                outline: 0;
                padding-left: 14px;
                padding-top: 10px;
                font-family: 'rb';
                position: absolute;
                top: 175px;
                left: 45px;

            }

            .btes {
                display: flex;
                align-items: center;
                position: absolute;
                bottom: 40px;
                margin-left: calc(100% - 40%);
                .btn {
                    padding: 10px 12px;
                    border-radius: 10px;
                    cursor: pointer;
                    color: #fff;
                    font-size: 17px;
                    font-family: 'rm';
                }
                .red{
                    background-color: red;
                    margin-right: 15px;
                }
                .green{
                    background-color: green;
                }
            }

            .t {
                font-size: 14px;
                position: absolute;
                top: 90px;
                left: 150px;
                z-index: 1;
                color: rgb(105, 96, 96);
                font-family: 'rm';
            }

            .date {
                position: absolute;
                top: 80px;
                left: 40px;
            }

            .docname {
                position: absolute;
                top: 125px;
                left: 40px;
            }

            .kk {
                position: absolute;
                top: 80px;
                right: 40px;
            }

            .hosp {
                position: absolute;
                top: 125px;
                right: 40px;
            }
        }

    }
</style>