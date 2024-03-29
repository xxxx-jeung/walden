<template>
  <footer>
    <div class="container">
      <div class="footer1">
        <div class="f_logo">
          <img src="@/assets/imgs/m/f_logo.png" alt="" />
          <p>인싸이트닥톡 주식회사</p>
        </div>
      </div>
      <div class="footer2">
        <span>서울특별시 강남구 논현로 164 튼튼영어빌딩 10층 </span>
        <span>대표이사 : 신철호</span>
        <span>사업자번호 : 619-86-02790</span>
        <span>대표번호 : 070-5151-2013</span>
        <span>이메일 : info@inpsyt.me </span>
      </div>
      <h5>ⓒ2023.인싸이트닥톡 Co.All rights reserved.</h5>
      <div class="service-use-wrap">
        <ul>
          <li>
            <a href="https://plus.inpsyt.me/service-agreement" target="_blank"
              >인싸이트플러스 이용약관</a
            >
          </li>
          <li>
            <a href="https://plus.inpsyt.me/privacy-policy" target="_blank">개인정보취급방침</a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://indoc.notion.site/09f33028a9ef4ecebde59de81e572155?pvs=4"
              target="_blank"
              >마주 서비스 이용약관</a
            >
          </li>
          <li>
            <a
              href="https://indoc.notion.site/2fcb7b32ec8e4dca9e9bc5a41bce1a2f?pvs=4"
              target="_blank"
              >개인정보 수집 및 이용 동의</a
            >
          </li>
          <li>
            <a
              href="https://indoc.notion.site/94d7f6d44ffe42cc98e9f93ad4518076?pvs=4"
              target="_blank"
              >환불 규정</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- app download link -->
    <div class="toast">
      <section class="header">
        <h2>
          <i>
            <img src="@/assets/imgs/IcoPlan.svg" alt="logo" />
          </i>
          <div class="ment">
            <strong>마주 - 대학생 심리검사 플랫폼</strong>
            <span>바로 실시 가능한 무료 심리검사 찾기</span>
          </div>
        </h2>
        <a class="download-btn" @click="handleStartApp"> 앱 다운로드 </a>
      </section>
    </div>
  </footer>
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
footer {
  justify-content: center;
  background: var(--gray-600, #4a5568);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  min-width: 100%;
  .container {
    background: var(--gray-600, #4a5568);
    display: flex;
    box-sizing: border-box;
    padding: 28px 24px;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    margin: 0 auto;
    width: 100%;

    color: var(--w_alpha-600, rgba(255, 255, 255, 0.48));
    font-family: $SpoqaHanSansNeo400;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.48px;
    max-width: 448px;

    .footer1 {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .footer2 {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    h5 {
      color: var(--w_alpha-600, rgba(255, 255, 255, 0.48));
      font-family: $SpoqaHanSansNeo400;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: -0.48px;
      width: 100%;
    }
  }

  .toast {
    align-items: center;
    justify-content: center;
    background: var(--gray-50, #f7fafc);
    display: flex;
    width: 100%;
    /* max-width: 448px; */
  }
}

.header {
  background: var(--gray-50, #f7fafc);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  width: 100%;
  max-width: 448px;

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

    .ment {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;

      strong {
        color: var(--gray-600, #4a5568);
        font-family: $SpoqaHanSansNeo500;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 16px */
        letter-spacing: -1.28px;
      }

      span {
        color: var(--gray-600, #4a5568);
        font-family: $SpoqaHanSansNeo500;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
        letter-spacing: -0.96px;
        opacity: 0.6;
      }
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

.f_logo {
  margin-bottom: 40px;
}

.service-use-wrap {
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;

    li + li {
      &:before {
        display: inline-block;
        content: '|';
        color: #bdbdbd;
        margin: 0 6px;
        font-size: 12px;
      }
    }

    li {
      display: flex;

      a {
        font-weight: bold;
        white-space: pre;
      }
    }
  }
}
</style>
