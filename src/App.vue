<template>
  <main v-if="isPending" />
  <main class="main" v-else-if="!isMobile">
    <AppHeader v-if="routePath" />
    <RouterView />
    <AppFooter v-if="routePath && $route.path !== '/majoo'" />
    <NamooFooter v-if="$route.path === '/majoo'" />
  </main>
  <main class="main" v-else>
    <AppMobileHeader v-if="routePath" />
    <RouterView />
    <AppMobileFooter v-if="routePath && $route.path !== '/majoo'" />
    <NamooFooter v-if="$route.path === '/majoo'" />
  </main>
  <ChannelTalk
    v-if="
      $route.path !== '/app-link' &&
      $route.path !== '/majoo' &&
      $route.path !== '/apk-file-download'
    "
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useDeviceStore } from '@/stores/device'
import axios from 'axios'

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import AppMobileHeader from '@/components/AppMobileHeader.vue'
import AppMobileFooter from '@/components/AppMobileFooter.vue'

import NamooFooter from '@/components/NamooFooter.vue'

import ChannelTalk from '@/components/ChannelTalk.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    AppMobileHeader,
    AppMobileFooter,
    ChannelTalk,
    NamooFooter
  },
  data() {
    return {
      isPending: true as boolean
    }
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.query.center && newValue.query.to) {
        this.naverPlaceOrPlaceRoute()
      } else {
        this.isPending = false
      }

      window.scrollTo(0, 0)
    }
  },
  computed: {
    ...mapState(useDeviceStore, ['isMobile']),
    routePath(): boolean {
      return !(
        this.$route.path === '/centers' ||
        this.$route.path === '/app-link' ||
        this.$route.path === '/apk-file-download'
      )
    }
  },
  created() {
    this.deviceCheck()
    this.getModulesCss()
  },
  mounted() {
    //스크롤
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    ...mapActions(useDeviceStore, ['deviceCheck']),
    scroll(): void {
      let scrollTop = $(window).scrollTop() + $(window).height() //height()/2

      $('.section').each(function (index) {
        if (scrollTop > $(this).offset().top) {
          $(this).addClass('show')
        }
      })
    },
    async naverPlaceOrPlaceRoute(): Promise<void> {
      try {
        let url

        if (location.host === 'inpsyt.me' || location.host === 'www.inpsyt.me') {
          url = 'https://api.inpsyt.me/api/'
        } else {
          url = 'https://dev-api.inpsyt.me/api/'
        }

        const response = await axios.get(`${url}v1/centers/${this.$route.query.center}/url`, {
          params: { to: this.$route.query.to }
        })

        if (response.data.code === 'success.center.CEN0001') {
          if (response.data.data) {
            location.href = response.data.data
          }
        }

        this.isPending = false
      } catch (err: any) {
        this.isPending = false

        throw new Error(err)
      }
    },
    async getModulesCss(): Promise<void> {
      if (this.isMobile) {
        console.log('모바일')
        await import('@/assets/css/m/common.css')
        await import('@/assets/css/m/reset.css')
        await import('@/assets/css/m/style.css')
      } else {
        console.log('PC')
        await import('@/assets/css/pc/common.css')
        await import('@/assets/css/pc/reset.css')
        await import('@/assets/css/pc/style.css')
      }
    }
  }
})
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
