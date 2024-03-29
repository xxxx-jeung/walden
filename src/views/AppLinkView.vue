<template>
  <section class="sec">
    <div class="dimmed">
      <article class="popup">
        <i class="icon">
          <img src="@/assets/imgs/IcoPlan.svg" alt="logo" />
        </i>
        <div class="notice">
          <p class="main">
            대학생이라면 누구나<br />
            바로 실시 가능한 무료 심리검사 찾기
          </p>
          <p class="sub">마주 - 대학생 심리검사 플랫폼</p>
        </div>
        <div class="btn-wrap">
          <ul>
            <li>
              <a class="continue-app" @click="handleStartApp">앱으로 계속하기</a>
            </li>
            <li>
              <a @click="handleWebLink" target="_blank" class="continue-web">웹으로 계속하기</a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
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

          // https://namoo.page.link/?link=https://inpsyt.me?groupPsychTestInpsytId=gwangjuAMT&apn=com.inpsytdoctalk.namoo&isi=6478000220&ibi=me.inpsyt.majoo
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
          alert('심리검사를 통해 들어오지 않았어요')
        }
      }
    },
    handleWebLink(): void {
      const uri = this.$route.query.uri
      if (uri) {
        window.open(`https://${uri}`, '_blank')
      } else {
        alert('심리검사를 통해 들어오지 않았어요')
      }
    }
  },
  computed: {
    webLink(): any {
      return this.$route.query.uri || '/'
    }
  },
  created() {
    // if (!this.$route.query.uri) {
    //   this.$router.push('/')
    // }
    document.body.style.overflow = 'hidden'
  },
  unmounted() {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style lang="scss" scoped>
.sec {
  background: url('@/assets/imgs/m/namu_bg.png') no-repeat top center;
  background-size: 100%;
  background-color: var(--black-900, rgba(20, 20, 20, 0.3));
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.dimmed {
  background: var(--black-900, rgba(20, 20, 20, 0.3));
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .popup {
    align-items: center;
    justify-content: center;
    background: #fff;
    bottom: 0;
    box-sizing: border-box;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);
    border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px 20px 24px 20px;
    position: fixed;
    width: 100%;
    max-width: 1920px;

    .icon {
      box-sizing: border-box;
      border-radius: 20px;
      border: 1px solid var(--green-300, #96f2a9);
      background: var(--green-100, #ddfcdd);
      display: flex;
      padding: 10px;
    }

    .notice {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;

      .main {
        color: var(--black-900, #141414);
        text-align: center;
        font-family: $SpoqaHanSansNeo500;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */
        letter-spacing: -1.68px;
      }

      .sub {
        color: var(--black-600, #858585);
        text-align: center;
        font-family: $SpoqaHanSansNeo500;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 22.4px */
        letter-spacing: -1.12px;
      }
    }

    .btn-wrap {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
      width: 100%;

      ul {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;

        li {
          display: flex;
          width: 100%;

          a {
            align-items: center;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            line-height: 140%; /* 19.6px */
            font-style: normal;

            width: 100%;
          }

          .continue-app {
            border-radius: 6px;
            background: var(--green-500, #4fd685);
            padding: 13px 16px;
            color: var(--white-100, #fff);
            text-align: center;
            font-family: $SpoqaHanSansNeo500;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: -0.48px;
          }

          .continue-web {
            border-radius: 100px;
            background: var(--white-100, #fff);
            color: var(--black-500, #a3a3a3);
            padding: 8px 16px;
            text-align: center;
            font-family: $SpoqaHanSansNeo500;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.42px;
          }
        }
      }
    }
  }
}
</style>
