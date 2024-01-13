<script setup>
import dashboard from '../views/dashboard.vue'
import drawerComponent from "../components/drawerComponent.vue";
</script>

<template>

<drawerComponent :noResize="true"/>
        <dashboard/>

<div window.hx-get="http://100.87.98.66:3000/users" hx-trigger="load"></div>


</template>


