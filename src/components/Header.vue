<template>
    
<v-app-bar app>
    <v-row justify="space-around">
        <router-link style="text-decoration: none; color: inherit;" to="/">
                <v-avatar>
                    <img src="../assets/logo.jpg" alt="user-img">
                </v-avatar>
            </router-link>
            </v-row>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; color: inherit; margin-left: 2rem; margin-right: 1rem;" to="/"><v-btn color="secondary " depressed elevation="24" outlined rounded>Home</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit; margin-right: 1rem;" to="/about"> <v-btn color="secondary" depressed elevation="24" outlined rounded>About</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit; margin-right: 2rem;" to="/contact">  <v-btn color="secondary" depressed elevation="24" outlined rounded>Contact</v-btn></router-link>
   <Search/>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; color: inherit;" to="/userProfile">
        <v-btn href="" target="_blank" text>
            <span class="mr-2">{{ userName }}</span>
            <v-row justify="space-around">
                <v-avatar>
                    <img :src=image alt="user-img">
                </v-avatar>
            </v-row>
        </v-btn>
    </router-link>
    <router-link style="text-decoration: none; color: inherit;" to="/cartPage">
        <v-btn text>
            <v-icon>
                mdi-cart
            </v-icon>
            <v-badge :content=this.$store.state.product.length></v-badge>
        </v-btn>
    </router-link>

    <v-btn text>
        <span v-if="!$store.state.email" @click="logout" class="mr-2">  <v-icon>
                mdi-logout
            </v-icon></span>
    </v-btn>
</v-app-bar>
</template>

    
<script>
import Search from './Search.vue'
export default {
    name: 'Header',
    components:{
Search
    },

    data() {
        return {
            userName: '',
            image: '',
        }
    },
    methods: {
        userInfo() {
            const data = JSON.parse(localStorage.getItem("userLogin"));
            console.log(data.username, "data name")
            this.userName = data.username;
            this.image = data.image;
            const dataId = this.$store.state.id.length
            console.log(dataId)

        },

        logout() {
            localStorage.removeItem("userLogin");
            this.$router.push('/login');
        }

    },
    created() {
        this.userInfo();
    }

};
</script>
