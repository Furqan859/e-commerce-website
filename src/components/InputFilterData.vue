<template>
<v-container fluid>
    <template>
        <v-container class="grey lighten-5">
            <v-row no-gutters>
                <v-col>
                    <v-card class="pa-2" outlined tile>
                        
                            <v-row align="center">
                                <v-col cols="12">
                                    <v-select :items="items" :menu-props="{ top: true, offsetY: true }" label="Label"></v-select>

                                </v-col>

                            </v-row>
                        
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-2" outlined tile>
                        <v-row align="center">
                            <v-col cols="12">
                                <v-select :items="items" :menu-props="{ top: true, offsetY: true }" label="Label"></v-select>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-2" outlined tile>
                        <v-row align="center">
                            <v-col cols="12">
                                <v-select :items="items" :menu-props="{ top: true, offsetY: true }" label="Label"></v-select>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </template>
</v-container>
</template>

<script>
export default {
    name: 'InputFilterData',
    data: () => ({
        items: [],
        brand:[],
    }), components: {},
    method:{
        BrandData : function(){
            this.items = this.brand
        }
    },

mounted(){
  
},
   

    beforeUpdate() {
        this.brand = this.$store.state.products;
        this.BrandData
    console.log(this.BrandData,"this is brand data")
    }
}
</script>

<style>

</style>
