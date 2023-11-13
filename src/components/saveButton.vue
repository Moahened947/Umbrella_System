<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" width="auto" v-model="dialog">
        <template v-slot:activator="{ props }">
          <v-btn
            :disabled="loading"
            :loading="loading"
            block
            v-bind="props"
            class="text-none mb-4"
            color="blue lighten-3"
            size="x-large"
            variant="flat"
            @click="startLoading"

          >
            Save and continue
          </v-btn>
        </template>
        <transition name="slide-fade" mode="out-in">
          <template v-slot:default>
            <v-card v-if="showCard">
              <v-toolbar color="blue lighten-3" title="Risk Sent successfully"></v-toolbar>
              <v-card-text>
                <div class="text-center mt-4">
                  <v-icon class="mb-3" color="success" icon="mdi-check-circle" size="100"></v-icon>
                </div>
                <div class="text-p pa-3">
                  The data has been Sent to GM For Approval.
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="justify-end mt-3">
                <v-btn variant="flat" color="success" @click="closeCard" to="/facaltative">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </transition>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
const showCard = ref(false);
const dialog = ref(false);

const startLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    showCard.value = true;
    dialog.value = true;
  }, 4000);
};

const closeCard = () => {
  showCard.value = false;
  dialog.value = false;
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
