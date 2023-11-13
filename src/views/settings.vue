<template>
 <v-container fluid class="ml-md-6">
  <v-row justify="center">
    <v-col cols="12">
      <v-card>
        <v-toolbar dark color="blue lighten-3">
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list lines="two" subheader>
          <v-list-subheader>User Controls</v-list-subheader>
          <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
          <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list lines="two" subheader>
          <v-list-subheader>General</v-list-subheader>
          <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
            <template v-slot:prepend>
              <v-checkbox v-model="notifications"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
            <template v-slot:prepend>
              <v-checkbox v-model="sound"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
            <template v-slot:prepend>
              <v-checkbox v-model="widgets"></v-checkbox>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</v-container>
  <drawerComponent/>

<tabComponent :noResize="true"/>
</template>

<script setup>
  import {ref} from 'vue';
  import drawerComponent from "../components/drawerComponent.vue";
  import tabComponent from "../components/tabComponent.vue";


  const notifications = ref(true)
  const sound = ref(true)
  const widgets = ref(true)

</script>
