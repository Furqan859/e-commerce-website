<template>
<div>
    <!-- header -->
    <v-app-bar app justify="space-around">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-5"></v-app-bar-nav-icon>
        <v-row>
            <router-link style="text-decoration: none; color: inherit;" to="/">
                <v-avatar>
                    <img src="../assets/logo.jpg" alt="user-img">
                </v-avatar>
            </router-link>
        </v-row>

        <v-row>
            <router-link style="text-decoration: none; color: inherit; padding: 5px;" to="/">
                Home
            </router-link>
            <router-link style="text-decoration: none; color: inherit; padding: 5px;" to="/about">
                About
            </router-link>
            <router-link style="text-decoration: none; color: inherit; padding: 5px;" to="/contact">
                Contact
            </router-link>

        </v-row>

        <v-spacer></v-spacer>

        <Search />
        <router-link style="text-decoration: none; color: inherit;" to="/cartPage">
            <v-btn text>
                <v-icon>
                    mdi-cart
                </v-icon>
                <v-badge :content=this.$store.state.product.length></v-badge>
            </v-btn>
        </router-link>

        <v-btn text>
            <span v-if="$store.state.userAuth == true" @click="logout">
                <v-icon>
                    mdi-logout
                </v-icon>
            </span>
            <router-link v-else style="text-decoration: none; color: inherit;" to="/login">
                <v-btn text>
                    Login
                </v-btn>
            </router-link>
        </v-btn>
    </v-app-bar>

    <!-- navigation bar -->
    <v-navigation-drawer app v-model="drawer" bottom temporary class=" d-flex">
        <v-list-item class="mx-auto overflow-hidden justify-sm-center align-self-center align-self-sm-auto ">
            <router-link style="text-decoration: none; color: inherit;" to="/userProfile">
                <v-btn target="_blank" text>
                    <v-row>
                        <v-avatar v-if="this.$store.state.userAuth==true">
                            <img :src=image alt="user-img">
                        </v-avatar>
                        <v-avatar v-else>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOFEcpKcal_GdHnYSVXxIqw8k5vr8F_nLsfclzOoWeg&s" alt="user-img">
                        </v-avatar>
                    </v-row>
                    <span>{{ userName }}</span>
                </v-btn>
            </router-link>
        </v-list-item>

        <v-divider></v-divider>
        <!-- sidebar pages -->
        <div align="center" style="margin-left:5px"  justify="space-around" class="pa-6">
            <v-btn to="/" min-width="150" class="my-2">
                Home
            </v-btn><br>
            <v-btn to="/about" min-width="150" class="my-2">
                About
            </v-btn><br>
            <v-btn to="/contact" min-width="150" class="my-2">
                Contact
            </v-btn><br>
            <!-- for add new products -->
            <!-- <v-btn to="/addNewProduct"  min-width="150" class="my-2">
                    Add Product
                </v-btn> -->

        </div>
        <InputFilterData />
    </v-navigation-drawer>
</div>
</template>

<script>
import InputFilterData from './InputFilterData.vue';
import Search from './Search.vue'
export default {
    name: 'Header',
    components: {
        Search,
        InputFilterData
    },

    data() {
        return {
            userName: '',
            image: '',
            drawer: false,
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
