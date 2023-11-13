<template>
    <v-card
    >
      <v-toolbar
        flat
        color="blue lighten-3"
        dark
      >

        <v-toolbar-title>Additional Covers & Exclusions</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <h2 class="text-h6 mb-2">
            Additional Covers
        </h2>

        <v-chip-group
          column
          multiple

        >
          <v-chip
            filter
            variant="tonal"
            color="success"
            v-for="coverName in AdditionalCoverName"
          :key="coverName"
        >
          {{ coverName }}

          </v-chip>

        </v-chip-group>
      </v-card-text>
      <v-card-text>
        <h2 class="text-h6 mb-2">
          Exclusions
        </h2>

        <v-chip-group
          column
          multiple

        >
          <v-chip
            filter
            variant="tonal"
            color="error"
            v-for="Exclusion in AdditionalCoverName"
          :key="coverName"
        >
          {{ Exclusion }}

          </v-chip>

        </v-chip-group>
      </v-card-text>
    </v-card>
  </template>
<script setup>
import {ref} from 'vue'
import { usePolicyStore } from '../stores/policy';
const policyStore = usePolicyStore();
const AdditionalCoverName = ref(policyStore.AdditionalCoverName);
  </script>
