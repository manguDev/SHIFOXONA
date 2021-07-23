<template>
    <div class="home">
        <Items/>
        <bosh-sahifa/>
    </div>
</template>

<script>
    import Items from '../components/bosh-sahifa/items.vue'
import boshSahifa from '../components/bosh-sahifa/view.vue'
    export default {
        components: {Items,boshSahifa} 
        }
</script>

<style scoped lang="scss">
.home{position: relative;

}
</style>