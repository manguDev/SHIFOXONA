<template>
    <div class="view">
        <div class="item">
            <h5 class="title">Bemorlar</h5>
            <table>
                <tr class="tr">
                    <th></th>
                    <th>Ism-sharifi</th>
                    <th>Email</th>
                    <th>Sana</th>
                    <th>Qabul vaqti</th>
                    <th>Shifokor</th>
                    <th>Sabab</th>
                    <th></th>
                </tr>
                <tr v-for="(sore,index) of sores" :key="index">
                    <td class="id">{{index+1}}</td>
                    <td>{{sore.ism}}</td>
                    <td>{{sore.email}}</td>
                    <td>{{sore.TSH}}</td>
                    <td>{{sore.QV}}-{{sore.QVCH}}</td>
                    <td>{{sore.Mdoc}}</td>
                    <td>{{sore.Msabab}}</td>
                    <td>
                        <router-link :to="'/sores/'+sores[index].id">
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.788 5.76857C17.7983 4.1499 16.4676 2.8493 14.796 1.86682C13.1243 0.884301 11.359 0.392984 9.5 0.392984C7.64098 0.392984 5.87566 0.884115 4.20396 1.86682C2.53223 2.8493 1.20155 4.1499 0.211975 5.76857C0.0706708 6.01593 0 6.25981 0 6.50019C0 6.74058 0.0706708 6.98445 0.211975 7.23175C1.20155 8.85049 2.53223 10.1512 4.20396 11.1335C5.87566 12.1161 7.64098 12.607 9.5 12.607C11.3591 12.607 13.1243 12.1177 14.796 11.1388C16.4676 10.1598 17.7985 8.85743 18.788 7.23175C18.9294 6.98445 19 6.74069 19 6.50019C19 6.25981 18.9294 6.01593 18.788 5.76857ZM7.22557 2.86869C7.85816 2.23611 8.61623 1.9197 9.49989 1.9197C9.64119 1.9197 9.76144 1.96932 9.86045 2.06821C9.9593 2.16714 10.009 2.28736 10.009 2.4287C10.009 2.57015 9.9593 2.69029 9.86067 2.78907C9.76181 2.88811 9.64149 2.93758 9.50015 2.93758C8.8923 2.93758 8.37261 3.15327 7.94149 3.58435C7.51023 4.01569 7.29472 4.53515 7.29472 5.143C7.29472 5.28453 7.24511 5.40459 7.14621 5.5036C7.04717 5.60268 6.92707 5.65211 6.78573 5.65211C6.64428 5.65211 6.52414 5.60257 6.42514 5.5036C6.32609 5.40459 6.27663 5.28438 6.27663 5.143C6.27663 4.25953 6.59303 3.50131 7.22557 2.86869ZM14.1069 9.96213C12.6897 10.8207 11.1541 11.2503 9.5 11.2503C7.84598 11.2503 6.31038 10.821 4.89318 9.96213C3.47598 9.10328 2.2973 7.94934 1.35723 6.50019C2.43162 4.83199 3.77816 3.58431 5.39683 2.75747C4.96567 3.49247 4.75002 4.28775 4.75002 5.14297C4.75002 6.45077 5.21486 7.56906 6.14427 8.4987C7.07369 9.42833 8.19239 9.89295 9.5 9.89295C10.8077 9.89295 11.9261 9.42807 12.8557 8.4987C13.7854 7.56932 14.25 6.45077 14.25 5.14297C14.25 4.28775 14.0343 3.49236 13.6031 2.75747C15.2217 3.58431 16.5683 4.8321 17.6427 6.50019C16.7028 7.94934 15.5242 9.10328 14.1069 9.96213Z"
                                    fill="#2F80ED" /></svg>
                        </router-link>
                        <button class="del">
                            <img src="@/assets/img/del.png" @click="del(index)" alt="bu yerda rasm mavjud">
                        </button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="item">
            <h5 class="title">Shifokorlar</h5>
            <table>
                <tr class="tr">
                    <th></th>
                    <th>Ism-sharifi</th>
                    <th>Email</th>
                    <th>Tug’ilgan Sana</th>
                    <th>Ishga kirgan sanasi</th>
                    <th>Mutaxassisligi</th>
                    <th>Ish staji</th>
                    <th></th>
                </tr>
        <tr v-for="(doc,index) of doctors" :key="index">
            <td>{{index+1}}</td>
            <td>{{doc.name}}</td>
            <td>{{doc.email}}</td>
            <td>{{doc.brith}}</td>
            <td>{{doc.ishBoshlash}}</td>
            <td>{{doc.mutax}}</td>
            <td>{{doc.intership}}</td>
            <td>
            <router-link :to="'/doctors/'+doctors[index].id">
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.788 5.76857C17.7983 4.1499 16.4676 2.8493 14.796 1.86682C13.1243 0.884301 11.359 0.392984 9.5 0.392984C7.64098 0.392984 5.87566 0.884115 4.20396 1.86682C2.53223 2.8493 1.20155 4.1499 0.211975 5.76857C0.0706708 6.01593 0 6.25981 0 6.50019C0 6.74058 0.0706708 6.98445 0.211975 7.23175C1.20155 8.85049 2.53223 10.1512 4.20396 11.1335C5.87566 12.1161 7.64098 12.607 9.5 12.607C11.3591 12.607 13.1243 12.1177 14.796 11.1388C16.4676 10.1598 17.7985 8.85743 18.788 7.23175C18.9294 6.98445 19 6.74069 19 6.50019C19 6.25981 18.9294 6.01593 18.788 5.76857ZM7.22557 2.86869C7.85816 2.23611 8.61623 1.9197 9.49989 1.9197C9.64119 1.9197 9.76144 1.96932 9.86045 2.06821C9.9593 2.16714 10.009 2.28736 10.009 2.4287C10.009 2.57015 9.9593 2.69029 9.86067 2.78907C9.76181 2.88811 9.64149 2.93758 9.50015 2.93758C8.8923 2.93758 8.37261 3.15327 7.94149 3.58435C7.51023 4.01569 7.29472 4.53515 7.29472 5.143C7.29472 5.28453 7.24511 5.40459 7.14621 5.5036C7.04717 5.60268 6.92707 5.65211 6.78573 5.65211C6.64428 5.65211 6.52414 5.60257 6.42514 5.5036C6.32609 5.40459 6.27663 5.28438 6.27663 5.143C6.27663 4.25953 6.59303 3.50131 7.22557 2.86869ZM14.1069 9.96213C12.6897 10.8207 11.1541 11.2503 9.5 11.2503C7.84598 11.2503 6.31038 10.821 4.89318 9.96213C3.47598 9.10328 2.2973 7.94934 1.35723 6.50019C2.43162 4.83199 3.77816 3.58431 5.39683 2.75747C4.96567 3.49247 4.75002 4.28775 4.75002 5.14297C4.75002 6.45077 5.21486 7.56906 6.14427 8.4987C7.07369 9.42833 8.19239 9.89295 9.5 9.89295C10.8077 9.89295 11.9261 9.42807 12.8557 8.4987C13.7854 7.56932 14.25 6.45077 14.25 5.14297C14.25 4.28775 14.0343 3.49236 13.6031 2.75747C15.2217 3.58431 16.5683 4.8321 17.6427 6.50019C16.7028 7.94934 15.5242 9.10328 14.1069 9.96213Z" fill="#2F80ED"/></svg>
            </router-link>    

            <button class="del" @click="dele(index)">
                <img src="@/assets/img/del.png" alt="bu yerda rasm mavjud">
            </button>
            </td>
        </tr>
            </table>
        </div>

    </div>
</template>

<script>
    export default {
        computed: {
            sores() {
                return this.$store.getters.getSores
            },
        doctors(){
            return this.$store.getters.getDocPost
        }
        },
        methods: {
            del(index) {
                let sore = {
                    index: index,
                    id: this.sores[index].id
                }
                this.$store.dispatch('soreDel', sore)
            },
            dele(index){
            let doc ={
            index:index,
            id: this.doctors[index].id
        }
    this.$store.dispatch('DelDoctors',doc)
        },  
        }
    }
</script>

<style lang="scss" scoped>
    .view {
        height: 100vh;
        overflow: auto;
        padding-bottom: 275px;
        &::-webkit-scrollbar {
            width: 1em;
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
        }

        width: calc(100% - 256px);

        .item {
            position: relative;
            left: 46px;
            width: 1110px;
            height: 425px;
            overflow: auto;
            background-color: #fff;
            margin-bottom: 20px;
            box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
            border-radius: 8px;
            &::-webkit-scrollbar {
                    width: 3px;
                }

                &::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                }

                &::-webkit-scrollbar-thumb {
                    background-color: rgb(0, 68, 255);
                    outline: 1px solid slategrey;
                }

            .title {
                padding-top: 24px;
                padding-left: 24px;
                padding-bottom: 18px;
                font-size: 20px;
                font-family: 'lato-b';
            }

            table {
                width: 100%;
                border-collapse: collapse;                
                .tr {
                    height: 56px;
                    background-color: #e7e7e7;
                }

                td {
                    height: 56px;
                    text-align: center;
                    border-bottom: 1px solid #e7e7;

                    .del {
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                }

                .id {
                    color: #fff;
                }
            }
        }
    }
</style>