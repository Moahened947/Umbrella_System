<template>
  <v-container fluid class="ml-md-6">
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab >Direct</v-tab>
        <v-tab >Fac Business</v-tab>
      </v-tabs>
      <v-row justify="end" align="center" class="ma-5">
        <v-btn to="/NewRisk" color="blue lighten-3">
          New Risk
        </v-btn>
      </v-row>
      <v-window v-model="tab" style="margin-top: 10px;">
        <v-window-item>
          <v-container fluid>
            <v-row >
              <v-col v-for="i in response"
                  :key="i.id" cols="12" sm="4">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  hover
                   
                >
                  <v-card-item>
                    <v-card-title>{{i.umbrellaReference}} {{ i.inusuranceOrBroker }}</v-card-title>
                    <v-card-subtitle>Total Sum Isured: {{i.TSIPolicyCurrency}} {{ i.currency }}</v-card-subtitle>
                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                        time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                        data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                        I've got to find a way to escape.
                      </v-card-text>
                  </v-card-item>

                  <v-card-actions>
                    <v-btn color="blue-lighten-3" variant="text">
                      Show R/S
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn >Edit</v-btn>
                  </v-card-actions>

               </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
  <drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import drawerComponent from '../components/drawerComponent.vue';
import tabComponent from '../components/tabComponent.vue';
import axios from 'axios';

const tab = ref(null);
const show = ref(false);
const response = ref([]); // Define response variable

const DataToApi = async () => {
  try {
    const apiResponse = await axios.get('http://100.87.98.66:3000/risks');
    response.value = apiResponse.data; // Assuming API response is an array
  } catch (error) {
    console.error('Error fetching data from API', error);
  }
};

onMounted(() => {
  DataToApi();
});
</script>
