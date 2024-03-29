<template>
  <AppHome v-if="!isMobile" />
  <AppMobileHome v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useDeviceStore } from '@/stores/device'

import AppHome from '@/components/AppHome.vue'
import AppMobileHome from '@/components/AppMobileHome.vue'

export default defineComponent({
  components: {
    AppHome,
    AppMobileHome
  },
  computed: {
    ...mapState(useDeviceStore, ['isMobile'])
  }
})
</script>

<style lang="scss"></style>
