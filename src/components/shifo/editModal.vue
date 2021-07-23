    <template>
        <div>
            <div class="newModal" v-show="isEditModal">
                <button class="close" @click="close()"></button>
                <div class="title">Yangi shifokorni ro’yhatdan o’tkazish</div>
                <div class="round">1</div>
                <div class="gen">Shaxsiy ma’lumotlar</div>
                <input type="text" v-model="editDoc.name" class="name" placeholder="Ism sharifi">
                <input type="text" v-model="editDoc.regionBrith" class="region__brith" placeholder="Tug’ilgan hudud"
                    title="Iltimos viloyat yoki poytaxt nomini yozing">
                <select class="marital" v-model="editDoc.OM" title="Oilaviy holati">
                    <option value="Uylangan">Uylangan</option>
                    <option value="Uylanmagan">Uylanmagan</option>
                    <option value="Turmushga chiqqan"> Turmushga chiqqan</option>
                    <option value="Turmushga chiqmagan"> Turmushga chiqmagan</option>
                </select>
                <input type="text" v-model="editDoc.myTel" class="tel" placeholder="Telefon raqam">
                <input type="date" v-model="editDoc.brith" class="brith" title="Tug’ilgan sana">
                <div class="small__title">Tug'ulgan sana</div>
                <input type="text" v-model="editDoc.manzil" class="address" placeholder="Manzil">
                <select title="Ma'lumoti" v-model="editDoc.reference" class="reference">
                    <option value="Oliy ma'lumotli">Oliy ma'lumotli</option>
                    <option value="O'rta ma'lumotli">O'rta ma'lumotli</option>
                </select>
                <input type="text" v-model="editDoc.familyTel" class="family__tel"
                    placeholder="Oila a’zolaridan telefon raqam">
                <button @click="dale" class="btn-1 green">Keyingisi</button>
            </div>

            <div class="newModal" v-show="isEditModal_2">
                <button class="close" @click="close()"></button>
                <div class="title">Yangi shifokorni ro’yhatdan o’tkazish</div>
                <div class="round">2</div>
                <div class="gen">Mutaxassislik ma’lumotlar</div>
                <input type="text" class="name" v-model="editDoc.mutax" placeholder="Mutaxassisligi">
                <input type="text" class="intership" v-model="editDoc.intership" placeholder="Ish staji">
                <input type="text" v-model="editDoc.ishBolm" class="marital" placeholder="Ishlayotgan bo'limi">
                <input type="text" class="brith" v-model="editDoc.ishGraf" placeholder="Ish grafigi">
                <input type="text" class="address" v-model="editDoc.img" placeholder="Rasm URL"
                    title="Iltimos internetdagi rasmingizni url silkasini kiriting">
                <input type="email" v-model="editDoc.email" class="reference" placeholder="Email">
                <div class="button">
                    <button @click="back_2" class="btn-2 back">Ortga qaytish</button>
                    <button @click="dale_2" class="btn-2 green">Keyingisi</button>
                </div>
            </div>

            <div class="newModal nnnn" v-show="isEditModal_3">
                <button class="close" @click="close()"></button>
                <div class="title">Yangi shifokorni ro’yhatdan o’tkazish</div>
                <div class="round">3</div>
                <div class="gen">Ish faoliyat tarixi</div>
                <input type="date" v-model="editDoc.ishBoshlash" class="name">
                <div class="small__title_2">Ish boshlagan sanasi</div>
                <input type="text" v-model="editDoc.lavozim" class="intership" placeholder="Lavozimi"
                    title="Qaysi soha mutaxassisligingizni kiriting">
                <input type="date" class="brith" v-model="editDoc.ishTugash">
                <div class="small__title_3">Ishni tugatgan sanasi</div>
                <input type="text" v-model="editDoc.ishAdd" class="address" placeholder="Ishlagan shifoxona manzili">
                <div class="button">
                    <button @click="back_3" class="btn-2 back">Ortga qaytish</button>
                    <button @click="save" class="btn-2 green">Saqlash</button>
                </div>
            </div>
        </div>
    </template>

    <script>
        import axios from 'axios'
        export default {
            props:['editDoc'],
            data() {
                return {
                }
            },
            computed: {
                isEditModal() {
                    return this.$store.getters.isEditModal
                },
                isEditModal_2() {
                    return this.$store.getters.isEditModal_2
                },
                isEditModal_3() {
                    return this.$store.getters.isEditModal_3
                },
                doctors() {
                    return this.$store.getters.getDocPost
                }
            },
            methods: {
                dale() {
                    this.$store.commit('isEditModal', false)
                    this.$store.commit('isEditModal_2', true)
                },
                dale_2() {
                    this.$store.commit('isEditModal_2', false)
                    this.$store.commit('isEditModal_3', true)
                },
                back_2() {
                    this.$store.commit('isEditModal', true)
                    this.$store.commit('isEditModal_2', false)
                },
                
                back_3() {
                    this.$store.commit('isEditModal_3', false)
                    this.$store.commit('isEditModal_2', true)
                },

                save(){
                    axios.put('http://localhost:3000/doctors/'+this.editDoc.id,this.editDoc).then(response =>{
                        this.$emit('updatedDoc', response.data)
                    })
                    this.editDoc = {}
                    this.$store.commit('isEditModal_3', false)

                },
                close() {
                    this.$store.commit('isEditModal', false)
                    this.$store.commit('isEditModal_2', false)
                    this.$store.commit('isEditModal_3', false)
                }
            }

        }
    </script>

    <style lang="scss">
        .newModal {
            width: 642px;
            height: 407px;
            background-color: #fff;
            position: fixed;
            top: 120px;
            left: 500px;
            right: 0;
            border-radius: 8px;
            box-shadow: 0px 12px 26px rgba(6, 16, 83, 0.288);

            .title {
                margin-top: 30px;
                margin-left: 121px;
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

            .small__title {
                position: absolute;
                right: 105px;
                top: 155px;
                font-size: 14px;
                color: rgb(161, 158, 158);
                font-family: 'lato-r';
            }

            .small__title_1 {
                position: absolute;
                left: 440px;
                top: 250px;
                font-size: 14px;
                color: rgb(161, 158, 158);
                font-family: 'lato-r';
            }

            .small__title_2 {
                position: absolute;
                left: 150px;
                top: 155px;
                font-size: 14px;
                color: rgb(161, 158, 158);
                font-family: 'lato-r';
            }

            .small__title_3 {
                position: absolute;
                right: 80px;
                top: 155px;
                font-size: 14px;
                color: rgb(161, 158, 158);
                font-family: 'lato-r';
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

            .name {
                position: absolute;
                top: 147px;
                left: 45px;
            }

            .brith {
                position: absolute;
                right: 45px;
                top: 147px;
            }

            .intership,
            .region__brith {
                position: absolute;
                left: 45px;
                top: 194px;
            }

            .marital {
                position: absolute;
                left: 45px;
                bottom: 134px;
            }

            .tel {
                position: absolute;
                bottom: 87px;
                left: 45px;
            }

            .email {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 87px;
                margin: auto;
                width: 400px;

            }

            .address {
                position: absolute;
                top: 195px;
                right: 45px;
            }

            .reference {
                position: absolute;
                right: 45px;
                bottom: 134px;
            }

            .family__tel {
                position: absolute;
                right: 45px;
                bottom: 87px;
            }

            .btn-1 {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 30px;
                margin: auto;
                width: 130px;
                height: 30px;
                border-radius: 10px;
                font-size: 11px;
                font-family: 'rm';
                color: #fff;
                cursor: pointer;
                border: none;
                background-color: #27AE60;
            }

            .button {
                position: absolute;
                left: 182px;
                bottom: 30px;

                .btn-2 {
                    width: 130px;
                    height: 30px;
                    border-radius: 10px;
                    font-size: 11px;
                    font-family: 'rm';
                    color: #fff;
                    cursor: pointer;
                    border: none;
                }

                .green {
                    background-color: #27AE60;
                    margin-left: 16px;
                }

                .back {
                    background-color: rgb(119, 26, 119);
                }
            }
        }

        .nnnn {
            height: 300px;
        }
    </style>