<template>
    <!-- search categories model -->
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>
    
        <v-window v-model="window" show-arrows>
            <v-window-item v-for="image in filterData.images" :key="image">
    
                <v-card height="200px" class="d-flex justify-center align-center">
    
                    <router-link :to="{ path: 'detailPage', query: { filterDataId: filterData.id }}">
                        <v-img  cover height="200" :src="image" :productId="filterData.id" @click="DetailPage(filterData.id)"></v-img>
                    </router-link>
                </v-card>
    
            </v-window-item>
        </v-window>
    
       
            <v-card-title>
                <v-row align="center" class="mx-0">
                    <v-row>{{ filterData.title }}</v-row>
                    <v-rating :v-model="filterData.rating" half-increments readonly size="large">
                    </v-rating>
                    <div class="text-grey ms-4">
                        {{ filterData.rating }}
                    </div>
    
                </v-row>
            </v-card-title>
    
            <v-card-subtitle>
                <span class="my-2">{{ filterData.brand }}</span>
    
                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
            <v-card-text>
    
                <div class=" text-subtitle-1">
                    ${{ filterData.price }}
                </div>
    
                <div>{{ filterData.description }}</div>
            </v-card-text>
    </v-card>
    </template>
    
        
    <script>
    export default {
        name: 'SearchComponent',
        props: ["filterData"],
        data: () => ({
            loading: false,
            selection: 1,
            length: 3,
            window: 0,
    
        }),
    
        methods: {
            // dispatching the action to get the detail page
            DetailPage(id) {
                this.$store.dispatch('DetailPageGet',id)
                console.log(id,"this is detail page")
            },
            
        },
        
    }
    </script>
    