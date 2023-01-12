<template>
<v-app-bar app justify="space-around">
    <v-row >
        <router-link style="text-decoration: none; color: inherit;" to="/">
            <v-avatar>
                <img src="../assets/logo.jpg" alt="user-img">
            </v-avatar>
        </router-link>
    </v-row>
    <v-spacer></v-spacer>
   <v-layout class="d-none d-lg-block d-md-block">
    <router-link style="text-decoration: none; color: inherit; margin-left: 1rem; margin-right: 1rem;" to="/">
        <v-btn color="secondary " depressed elevation="24" outlined rounded>Home</v-btn>
    </router-link>
    <router-link style="text-decoration: none; color: inherit; margin-right: 1rem;" to="/about">
        <v-btn color="secondary" depressed elevation="24" outlined rounded>About</v-btn>
    </router-link>
    <router-link style="text-decoration: none; color: inherit; margin-right: 1rem;" to="/contact">
        <v-btn color="secondary" depressed elevation="24" outlined rounded>Contact</v-btn>
    </router-link>
   </v-layout>
    <Search  />
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; color: inherit;" to="/userProfile">
        <v-btn target="_blank" text>
            <span class="mr-2 d-none d-lg-block d-md-block">{{ userName }}</span>
            <v-row >
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
        <span v-if="!$store.state.email" @click="logout" >
            <v-icon>
                mdi-logout
            </v-icon>
        </span>
    </v-btn>
</v-app-bar>
</template>

<script>
import Search from './Search.vue'
export default {
    name: 'Header',
    components: {
        Search
    },

    data() {
        return {
            userName: '',
            image: '',
        }
    },
    methods: {
        // getting the user info from local storage
        userInfo() {
            const data = JSON.parse(localStorage.getItem("userLoginDetail"));
            this.userName = data.username;
            this.image = data.image;
            // cart length
            const dataId = this.$store.state.id.length
            console.log(dataId)

        },

        logout() {
            // removing the user info from local storage
            localStorage.removeItem("userLogin");
            localStorage.removeItem("authUser");
            // redirecting to login page
            
            this.$router.push('/login');
        }

    },
    created() {
        // calling the user info function
        this.userInfo();
    }

};
</script>
