<template>
    <div>
        <h1>Ingresar</h1>
        <h2>User: user@user.cl</h2>
        <h2>Pass: 123456</h2>
        <form>
            <label for="">Usuario</label>
            <input type="text" v-model="user">
            <br>
            <label for="">Contraseña</label>
            <input type="password" v-model="pass">
            <button @click.prevent="login">Acceder</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    // props: {},
    data: function(){
        return {
            user: '',
            pass: '',
        }
    },
    // computed: {},
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
            .then((resp)=>{
                console.log(resp, 'login');
                this.$router.push('/')
            })
            .catch(error=>{
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
        }
    },
    // watch: {},
    // components: {},

    // -- Lifecycle Methods
    // beforeCreate() {},
    // created() {},
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
    form {
        display: grid;
        width: 300px;
        margin: 0 auto;
    }
    button {
        margin-top: 20px;
    }
    label {
        margin-top: 10px;
        margin-bottom: 5px;
    }
</style>