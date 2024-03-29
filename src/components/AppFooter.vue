<template>
  <footer>
    <div class="container">
      <div class="footer1">
        <div class="f_logo">
          <img src="@/assets/imgs/pc/f_logo.png" alt="" />
          <p>인싸이트닥톡 주식회사</p>
        </div>
      </div>
      <div class="footer2">
        <span>서울특별시 강남구 논현로 164 튼튼영어빌딩 10층</span>
        <span>대표이사 : 신철호</span>
        <span>사업자번호 : 619-86-02790</span>
        <span>대표번호 : 070-5151-2013</span>
        <span>이메일 : info@inpsyt.me </span>
      </div>
      <h5>ⓒ2023.인싸이트닥톡 Co.All rights reserved.</h5>
      <div class="f_menu">
        <span><a href="https://plus.inpsyt.me/service-agreement" target="_blank"><b>이용약관</b></a></span>
        <span><a href="https://plus.inpsyt.me/privacy-policy" target="_blank"><b>개인정보취급방침</b></a></span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
/* footer */
footer {
  background-color: #1d262d;
  font-size: 140%;
  color: var(--placeholder);
}

footer .container {
  padding: 30px 20px;
}

.footer1 .f_logo p {
  padding-top: 3px;
}

.footer2 {
  margin-top: 40px;
  line-height: 23px;
}

.footer2 span {
  display: block;
}

footer h5 {
  margin-top: 5px;
  color: var(--placeholder);
}

.f_menu {
  border-top: 1px solid var(--placeholder);
  margin-top: 30px;
  padding-top: 30px;
}

.f_menu span {
  cursor: pointer;
  color: var(--gray);
}

.f_menu span::after {
  content: '|';
  padding: 0 10px;
}

.f_menu span:last-child::after {
  content: '';
}

section > div {
  padding: 50px 0;
}

@media screen and (max-width: 730px) {
  header .container {
    padding: 0;
  }

  header .logo {
    padding-left: 20px;
  }

  .nav {
    flex-direction: column;
    align-items: flex-start;
    height: 60px;
  }

  .menu {
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: none;
  }

  .menu li {
    width: 100%;
    font-size: 110%;
    text-align: center;
    padding: 15px 60px;
  }

  .menu li:hover {
    background-color: var(--primary);
    cursor: pointer;
    color: #fff;
  }

  .start {
    justify-content: center;
    width: 100%;
    text-align: center;
    padding: 15px 0 30px;
    display: none;
    border-bottom: 1px solid var(--border);
  }

  .start img {
    width: 80%;
  }

  .hamM {
    display: block;
  }

  .menu.active {
    border-top: 1px solid var(--border);
    margin-top: 5px;
    padding-top: 15px;
  }

  .menu.active,
  .start.active {
    display: flex;
  }
}
</style>
