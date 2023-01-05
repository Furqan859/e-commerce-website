<template>
<v-app>
    <v-main v-if="$route.name === 'login'">
        <Login />
    </v-main>
    <v-main v-else>
        <Header />
        <router-view/>
        <Footer />
    </v-main>
</v-app>
</template>

<script>
import Login from './views/LoginView.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
        Login,
        Header,
        Footer,
    },

    data: () => ({
        //
    }),
};
</script>
