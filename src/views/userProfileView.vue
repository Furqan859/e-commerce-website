<template>
    <!-- user profile card -->
<v-app>
    <v-main>
        <v-container fluid>
            <v-card max-width="450px" class="mx-auto bg" elevation="2">
                <v-img class="" height="200px" src="http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg" gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%">
                </v-img>
                <v-row justify="center">
                    <v-col align-self="start" class="d-flex justify-center align-center pa-0" cols="12">
                        <v-avatar class="profile avatar-center-height avatar-shadow" size="100">
                            <v-img :src="this.image"></v-img>
                        </v-avatar>

                    </v-col>
                    <v-col>
                        <div>
                            <p class="text-h6 text-center text--disabled">
                                {{ this.userName }}
                            </p>
                        </div>
                    </v-col>
                </v-row>
                <v-list-item color="#0000" class="profile-text-name">
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{ this.firstName }} {{ this.lastName }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ this.gender }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-card-subtitle>
                    <b class="ml-2">{{ this.email }}</b>
                </v-card-subtitle>
                <v-spacer></v-spacer>
                <v-text-field class="pa-6" disabled v-model=this.email prepend-icon="mdi-whatsapp" label="Phone"></v-text-field>
                <v-spacer></v-spacer>

            </v-card>
        </v-container>
    </v-main>
</v-app>
</template>

  
<script>
export default {
    name: 'userProfileView',
    data: () => ({
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        image: ''

    }),
    methods: {

      // user info get from local storage
        userInfo() {
            const data = JSON.parse(localStorage.getItem("userLoginDetail"));
            this.userName = data.username;
            this.image = data.image;
            this.email = data.email;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.gender = data.gender;
        },

    },
    created() {
      // call user info function
        this.userInfo();
    }
};
</script>

<style>
.avatar-center-height {
    position: absolute;
}

.profile-text-name {
    margin-top: 70px;
}

.subtitles {
    margin: 5px;
    padding: 16px;
}
</style>
