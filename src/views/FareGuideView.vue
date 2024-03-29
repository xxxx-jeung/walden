<template>
  <AppFareGuide v-if="!isMobile" />
  <AppMobileFareGuide v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useDeviceStore } from '@/stores/device'
import AppFareGuide from '@/components/AppFareGuide.vue';
import AppMobileFareGuide from '@/components/AppMobileFareGuide.vue';

export default defineComponent({
  components: {
    AppFareGuide,
    AppMobileFareGuide
  },
  computed: {
    ...mapState(useDeviceStore, ['isMobile'])
  },
})
</script>

<style scoped></style>
