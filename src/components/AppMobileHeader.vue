<template>
  <header>
    <nav class="nav container">
      <div class="logo"><img src="@/assets/imgs/m/logo.png" alt="로고" /></div>
      <div class="hamM" @click="hamburgerMenuClickHandle">
        <div class="icon-wrap">
          <div class="icon"></div>
        </div>
      </div>
      <ul class="menu" :class="{ active: menuToggle }">
        <li :class="{ active: $route.name === 'home' }">
          <RouterLink to="/">서비스 소개</RouterLink>
        </li>
        <li :class="{ active: $route.name === 'fareGuide' }">
          <RouterLink to="/fare-guide">요금 안내</RouterLink>
        </li>
        <li :class="{ active: $route.name === 'majoo' }">
          <RouterLink to="/majoo">마주</RouterLink>
        </li>
        <li>
          <!--  ios -->
          <a v-if="deviceInfo === 'ios'" href="https://apps.apple.com/app/id6462591890"
            >센터 로그인</a
          >
          <!-- android -->
          <a
            v-else-if="deviceInfo === 'android'"
            href="https://play.google.com/store/apps/details?id=com.inpsytdoctalk.inpsytplus"
            >센터 로그인</a
          >
          <!-- other -->
          <a v-else href="https://plus.inpsyt.me/" target="_blank">센터 로그인</a>
        </li>
      </ul>
      <div class="start" :class="{ active: menuToggle }">
        <a href="https://plus.inpsyt.me/login" target="_blank"
          ><img src="@/assets/imgs/pc/start.png" alt="시작하기"
        /></a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      menuToggle: false as boolean,
      deviceInfo: 'other' as string
    }
  },
  methods: {
    deviceCheck() {
      const varUA = navigator.userAgent.toLowerCase() //userAgent 값 얻기

      if (varUA.indexOf('android') > -1) {
        //안드로이드
        this.deviceInfo = 'android'
      } else if (
        varUA.indexOf('iphone') > -1 ||
        varUA.indexOf('ipad') > -1 ||
        varUA.indexOf('ipod') > -1
      ) {
        //IOS
        this.deviceInfo = 'ios'
      } else {
        //아이폰, 안드로이드 외
        this.deviceInfo = 'other'
      }
    },
    hamburgerMenuClickHandle(): void {
      this.menuToggle = !this.menuToggle
    }
  },
  created() {
    this.deviceCheck()
  }
})
</script>

<style scoped></style>
