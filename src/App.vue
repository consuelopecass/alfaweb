<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <h2>Cursos AlfaWeb</h2>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          depressed
          color="deep-purple accent-4"
          @click="$router.push('/')"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn
          depressed
          color="deep-purple accent-4"
          @click="$router.push('/admin')"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
      <span class="mr-2">{{ email }}</span>
      <Logout />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Logout from "./components/Logout.vue";
import Footer from "./components/Footer.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["email"]),
  },
  methods: {
    ...mapActions(["fetchCursos"]),
  },
  // watch: {},
  components: {
    Logout,
    Footer,
  },

  // -- Lifecycle Methods
  // beforeCreate() {},
  created() {
    this.fetchCursos();
  },
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>
