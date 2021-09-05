<template>
    <div>
        <h1>Administrador</h1>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'administrador',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['fetchCursos'])
    },
    // watch: {},
    // components: {},

    // -- Lifecycle Methods
    // beforeCreate() {},
    created() {
        this.fetchCursos()
    },
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>