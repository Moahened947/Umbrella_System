<template>
  <v-expansion-panels >
    <v-expansion-panel bg-color="blue lighten-3">
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start"> Covers </v-col>
            <v-col cols="8" class="text-grey">
              <v-fade-transition leave-absolute >
                <span v-if="expanded" key="0" style="color: white;">
                  Add Conditions For This Cover
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text v-for="(cover, index) in covers" :key="index">
        <div style="width: fit-content;" class="d-flex align-center">
          <v-checkbox :label="cover" style="margin-right: 20px;color:white;"></v-checkbox>
          <!-- Add the ConditionsComponent here -->
          <ConditionsComponent :checkboxLabel="cover" />
        </div>
       </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue';
import ConditionsComponent from './ConditionsComponent.vue';
import { usePolicyStore } from '../stores/policy';
const policyStore = usePolicyStore();
const covers = ref(policyStore.covers);

console.log(covers); // Add this line to check the content of covers
</script>

