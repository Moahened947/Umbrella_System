<template>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="1024"
      >
        <template v-slot:activator="{ props }">
          <button
            v-bind="props"
            style="height: fit-content; padding: 3px; margin-bottom: 18px;"
            width="10"
          >
            +
        </button>
        </template>
        <v-card color="info">
          <v-card-title>
            <span class="text-h5">{{ checkboxLabel }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Limit From"
                    type="number"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Limit To"
                    type="number"
                    variant="outlined"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
              </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="4"
                    md="4"
                  >
                    <v-text-field
                      label="Deductible"
                      hint="example of persistent helper text"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12"
                    sm="4"
                    md="4">
                    <v-text-field
                      label="Amount"
                      type="number"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12"
                    sm="4"
                    md="4">
                    <v-text-field
                      label="Sections"
                      type="number"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6" sm="6">
                <v-text-field
                  type="date"
                  id="From"
                  name="From"
                  variant="outlined"
                  min="1930-01-01"
                  max="2080-12-31"
                  label="From"
                  :disabled="dateFrom"
                  class="w-100"
                ></v-text-field>
              </v-col>
                  <v-col cols="12" md="6" sm="6">
                <v-text-field
                  type="date"
                  id="To"
                  name="From"
                  variant="outlined"
                  min="1930-01-01"
                  max="2080-12-31"
                  label="From"
                  :disabled="dateFrom"
                  class="w-100"
                ></v-text-field>
              </v-col>
                </v-row>

                <v-row>
          <v-col cols="12">
            <v-textarea
              clearable
              label="Notes"
              variant="outlined"
              no-resize="true"
            ></v-textarea>
          </v-col>
        </v-row>

            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="white"
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script setup>
import { ref, defineProps } from 'vue';

const { checkboxLabel } = defineProps(['checkboxLabel']);
const dialog = ref(false);
</script>

<style scoped>
.text-h5 {
  white-space: normal; /* Set text wrapping to wrap within the available space */
}
</style>
