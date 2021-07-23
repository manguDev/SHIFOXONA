<template>
<div class="app__top">
    <div class="search">
        <img src="@/assets/img/search.png" alt="search department">
        <input type="text" placeholder="Qidiruv">
    </div>
    <div class="profile">
        <img src="@/assets/img/sing.png" alt="warning sign ">
        <img src="@/assets/img/circle.png" class="pic" alt="profile picture">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app__top{
    width: calc(100% - 256px);
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 292px;
    .search{
        display: flex;
        align-items: center;
        width: 350px;
        height: 40px;
        background-color: #fff;
        border-radius: 100px;
        input{
            border: none;
            width: 80%;
            height: 30px;
            outline: 0;
        }
        img{
            margin-left: 15px;
            margin-right: 12px;
        }
    }
    .profile{
        margin-right: 60px;
        display: flex;
        align-items: center;
        .pic{
            margin-left: 28px;

        }
    }
}
</style>