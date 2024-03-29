<template>
  <section class="header">
    <h2>
      <i>
        <img src="@/assets/imgs/IcoPlan.svg" alt="logo" />
      </i>
      <strong>마주</strong>
    </h2>
    <a class="download-btn" @click="handleStartApp"> 앱 다운로드 </a>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleStartApp() {
      const uri = this.$route.query.uri
      const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
      if (uri) {
        // console.log(String(this.$route.query.uri).split('/').reverse()[0])
        const psyKey: string = String(this.$route.query.uri).split('/').reverse()[0]
        // https://namoo.page.link/?link=https://inpsyt.me?schoolName=건국대학교&apn=com.inpsytdoctalk.namoo.dev
        if (isMobile) {
          if (location.origin === 'https://inpsyt.me') {
            // 상용
            window.open(
              `https://namoo.page.link/?link=https://inpsyt.me?groupPsychTestInpsytId=${psyKey}&apn=com.inpsytdoctalk.namoo&isi=6478000220&ibi=me.inpsyt.majoo&efr=1`
            )
          } else {
            window.open(
              // 개발
              `https://namoo.page.link/?link=https://inpsyt.me?groupPsychTestInpsytId=${psyKey}&apn=com.inpsytdoctalk.namoo&isi=6478000220&ibi=me.inpsyt.majoo.dev&efr=1`
            )
          }
        } else {
          alert('모바일 기기로 접속해주세요')
        }
      } else {
        if (isMobile) {
          if (location.origin === 'https://inpsyt.me') {
            // 상용
            window.open(
              `https://namoo.page.link/?link=https://inpsyt.me?apn=com.inpsytdoctalk.namoo&isi=6478000220&ibi=me.inpsyt.majoo&efr=1`
            )
          } else {
            // 개발
            window.open(
              `https://namoo.page.link/?link=https://inpsyt.me?apn=com.inpsytdoctalk.namoo.dev&isi=6478000220&ibi=me.inpsyt.majoo.dev&efr=1`
            )
          }
        } else {
          alert('모바일 기기로 접속해주세요')
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  /* background: var(--gray-50, #f7fafc); */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  width: 100%;

  h2 {
    align-items: center;
    display: flex;
    gap: 12px;

    i {
      box-sizing: border-box;
      border-radius: 12px;
      border: 1px solid var(--green-300, #96f2a9);
      background: var(--green-100, #ddfcdd);
      padding: 10px 6px;

      svg {
        width: 32px;
        height: 24px;
      }
    }

    strong {
      color: var(--gray-600, #4a5568);
      font-family: $SpoqaHanSansNeo700;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 24px */
      letter-spacing: -1.92px;
    }
  }

  .download-btn {
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 6px;
    background: var(--green-500, #4fd685);

    color: var(--white-100, #fff);
    text-align: center;
    font-family: $SpoqaHanSansNeo700;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.42px;
  }
}
</style>
