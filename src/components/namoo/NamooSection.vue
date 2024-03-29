<template>
  <section class="sec">
    <article class="art-text-wrap">
      <h3>
        <i>
          <img v-if="icon === 'IcoMoneyBag'" src="@/assets/imgs/IcoMoneyBag.svg" alt="logo" />
          <img v-if="icon === 'IcoOTL'" src="@/assets/imgs/IcoOTL.svg" alt="logo" />
          <img v-if="icon === 'IcoSandTimer'" src="@/assets/imgs/IcoSandTimer.svg" alt="logo" />
          <img
            v-if="icon === 'IcoSpeachBubble'"
            src="@/assets/imgs/IcoSpeachBubble.svg"
            alt="logo"
          />
          <img v-if="icon === 'IcoThink'" src="@/assets/imgs/IcoThink.svg" alt="logo" />
        </i>
        <span><slot name="title">제목</slot></span>
      </h3>
      <p class="answer-wrap">
        <slot name="contents">내용</slot>
      </p>
    </article>
    <article class="img-wrap">
      <img v-if="mainImage === 'first'" src="@/assets/imgs/Web/sec01.png" alt="search university" />
      <img
        v-if="mainImage === 'secound'"
        src="@/assets/imgs/Web/sec02.png"
        alt="search university"
      />
      <img v-if="mainImage === 'third'" src="@/assets/imgs/Web/sec03.png" alt="search university" />
      <img
        v-if="mainImage === 'fourth'"
        src="@/assets/imgs/Web/sec05.png"
        alt="search university"
      />
      <img v-if="mainImage === 'five'" src="@/assets/imgs/Web/sec04.png" alt="search university" />
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String
    },
    mainImage: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.sec {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 60px 24px;
  gap: 20px;

  .art-text-wrap {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 12px;

    h3 {
      align-items: center;
      display: flex;
      gap: 8px;

      span {
        color: var(--green-600, #39b878);
        font-family: $SpoqaHanSansNeo500;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 28px */
        letter-spacing: -1px;
      }
    }

    .answer-wrap {
      display: flex;
      color: var(--black-900, #141414);
      font-family: $SpoqaHanSansNeo500;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 44.8px */
      letter-spacing: -1.6px;
    }
  }

  .img-wrap {
    box-sizing: border-box;
    display: flex;
    /* padding: 40px 40px 0px 40px; */
    justify-content: center;
    align-items: center;
    align-self: stretch;

    max-width: 400px;

    /* border-radius: 20px;
    background: var(--gray-300, #cbd5e0); */

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
