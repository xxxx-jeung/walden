<template>
  <a class="channel-talk-btn" href="https://inpsytplus.channel.io/home" target="_blank">
    <span>문의하기</span>
    <IconChannelTalk />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconChannelTalk from './svg/IconChannelTalk.vue'

export default defineComponent({
  components: { IconChannelTalk }
})
</script>

<style lang="scss" scoped>
.channel-talk-btn {
  display: flex;
  position: fixed;
  border-radius: 999px;
  background: var(--white, #fff);
  justify-content: end;
  bottom: 40px;
  position: fixed;
  right: 40px;
  width: 259px;
  height: 100px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    color: var(--gray-600, #4a5568);
    font-family: $SpoqaHanSansNeo700;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    margin-left: 40px;
  }
}
</style>
