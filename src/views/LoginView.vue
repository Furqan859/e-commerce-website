<template>
    <!-- login page -->
<v-app id="inspire" @submit.prevent="Submit">
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="dark">
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field aria-autocomplete v-model="user.userName" append-icon="mdi-account" name="login" label="Login" type="text"></v-text-field>
                                <v-text-field v-model="user.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 6 characters" counter @click:append="show1 = !show1"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="dark" @click="login">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            user: {
                userName: '',
                password: '',
            },
            show1: false,
// validation user password 
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 6 || 'Min 6 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
    methods: {
        login() {
            // dispatch action to login user
            this.$store.dispatch('loginUser', this.user)

        }

    },
    mounted() {

    }
}
</script>

<style>

</style>
