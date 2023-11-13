<template>
    <v-layout class="pt-3 overflow-visible">
      <v-footer class="d-flex flex-column mt-7" app>
        <div class="bg-blue-lighten-1 d-flex w-100 align-center px-4">
          <strong>Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="plain"
            size="small"
          ></v-btn>
        </div>

        <div class="px-4 py-2 bg-black text-center w-100 d-lg-block d-xl-block d-xxl-block">
          {{ new Date().getFullYear() }} - <strong>Umbrella Reinsurance Company</strong>
        </div>
      </v-footer>
    </v-layout>
  </template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
@media (min-width: 600px) and (max-width: 1280px) {

  .overflow-visible {
    display: none !important;

  }
}

@media (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
</style>



