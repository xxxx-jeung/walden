<template>
  <div class="container">
    <div class="wrap">
      <!-- <section class="header">
        <h2>
          <i>
            <img src="@/assets/imgs/IcoPlan.svg" alt="logo" />
          </i>
          <strong>마주</strong>
        </h2>
        <a class="download-btn"> 앱 다운로드 </a>
      </section> -->
      <HeaderPopup />
      <!-- 1 -->
      <NammoSection :icon="'IcoMoneyBag'" :mainImage="'first'">
        <template v-slot:title>심리검사 비싸지 않나?</template>
        <template v-slot:contents>
          대학생이라면 누구나<br />
          무료 심리검사를 <br />
          바로 실시할 수 있어요
        </template>
      </NammoSection>
      <!-- 2 -->
      <NammoSection :icon="'IcoOTL'" :mainImage="'secound'">
        <template v-slot:title>중간에 날아가면 어떡해</template>
        <template v-slot:contents>
          하다가 멈춰도 <br />
          언제든 이어서 할 수 있어요
        </template>
      </NammoSection>
      <!-- 3 -->
      <NammoSection :icon="'IcoSandTimer'" :mainImage="'third'">
        <template v-slot:title>결과는 언제 나오지?</template>
        <template v-slot:contents>
          심리검사 끝나고 <br />
          1초만에 결과 확인!
        </template>
      </NammoSection>
      <!-- 5 -->
      <NammoSection :icon="'IcoThink'" :mainImage="'five'">
        <template v-slot:title>무슨 말인지 모르겠어</template>
        <template v-slot:contents>
          가까운 상담센터에서 <br />
          일대일 해석도 해줘요
        </template>
      </NammoSection>
      <!-- 4 -->
      <NammoSection :icon="'IcoSpeachBubble'" :mainImage="'fourth'">
        <template v-slot:title>예전에 했던 것 같은데</template>
        <template v-slot:contents>
          과거에 한 심리검사도 <br />
          모두 한 곳에!
        </template>
      </NammoSection>
    </div>
  </div>
</template>

<script lang="ts">
import NammoSection from '@/components/namoo/NamooSection.vue'
import { defineComponent } from 'vue'
import HeaderPopup from '@/components/HeaderPopup.vue'

export default defineComponent({
  components: { NammoSection, HeaderPopup }
})
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  display: flex;
  margin: 70px auto 40px;
  width: 100%;

  .wrap {
    justify-content: center;
    display: flex;
    max-width: 443px;

    .header {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 20px 24px;

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
  }
}
</style>
