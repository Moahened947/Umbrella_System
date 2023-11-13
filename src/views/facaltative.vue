<template>
<v-container fluid class="ml-md-6">
    <v-card>

      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
      >
        <v-tab :value="1">Direct</v-tab>
        <v-tab :value="2">Fac Business</v-tab>
        <v-tab :value="3">All Risks</v-tab>
      </v-tabs>
      <v-row justify="end" align="center" class="ma-5">
         <v-btn to="/NewRisk" color="blue lighten-3">
             New Risk
         </v-btn>

     </v-row>
      <v-window v-model="tab" style="margin-top: 10px;">
        <v-window-item
          v-for="n in 3"
          :key="n"
          :value="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 3"
                :key="i"
                cols="12"
                md="4"
              >

              <v-card
    class="mx-auto"
    max-width="344"
    hover
  >
    <v-card-item>
      <v-card-title>
        Reference Number
      </v-card-title>
      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-actions>
      <v-btn
        color="blue-lighten-3"
        variant="text"
      >
        Show
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
    <drawerComponent :noResize="true"/>
<tabComponent :noResize="true"/>
  </template>
  <script setup>
  import {ref} from 'vue';
  import drawerComponent from "../components/drawerComponent.vue";
  import tabComponent from "../components/tabComponent.vue";

  const tab = ref(null);
  const show = ref(false)

   </script>

