<template>
  <div class="text-center mr-8">
    <v-menu

    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="blue lighten-3"
          v-bind="props"
        >
          From
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <dateComponent/>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup>
import dateComponent from './dateComponent.vue';
</script>
