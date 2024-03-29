<template>
  <div class="container" ref="container">
    <div class="contatiner-title">
      <h1>
        <img src="@/assets/imgs/pc/logo.png" alt="logo" />
      </h1>
      <h2 class="title">추천 상담센터</h2>
    </div>
    <div class="contents-wrap target">
      <ul v-if="centerList.length > 0" id="target" ref="target">
        <ListCard v-for="center in centerList" :key="center.centerNo" :center="center"></ListCard>
      </ul>
      <div v-if="isSpinner" class="no-data">
        <p v-if="firstRequest">위치 정보를 불러오는 중입니다.</p>
        <Spinner class="spinner" />
      </div>
    </div>
    <footer id="footer-wrap">
      <!-- <p>문의: 02-336-7133 (02-330-5133)</p> -->
      <p>© InpsytDoctalk Corp.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListCard from '@/components/centers/ListCard.vue'
import {
  getCentersRecommendedCounseling,
  type CenterRecommendedCounselingResponse,
  type SelectCenterRecommendedCounselingRequest
} from '@/apis/index'
import Spinner from '@/components/svg/Spinner.vue'

export default defineComponent({
  components: { ListCard, Spinner },
  data() {
    return {
      centerList: [] as CenterRecommendedCounselingResponse[],
      latitude: 0 as number,
      longitude: 0 as number,
      selectCenterRecommendedCounselingRequest: {} as SelectCenterRecommendedCounselingRequest,
      target: null as unknown as Element,
      centerNo: 0 as number,
      distance: 0 as number,
      isScroll: false as boolean,
      isSpinner: true as boolean,
      firstRequest: true as boolean
    }
  },
  methods: {
    // 무한 스크롤 정의
    handleScroll() {
      const container = this.$refs.container as HTMLElement

      // // 일정 한도 밑으로 내려오면 함수 실행
      if (container?.offsetHeight === window.innerHeight + window.scrollY && !this.isScroll) {
        this.isScroll = true
        setTimeout(() => this.handleLoadMore(), 1000)
      }
    },

    handleLoadMore() {
      const selectCenterRecommendedCounselingRequest: SelectCenterRecommendedCounselingRequest = {
        centerNo: this.centerNo,
        distance: this.distance,
        longitude: this.longitude,
        latitude: this.latitude,
        size: 15
      }

      this.fetchCentersRecommended(selectCenterRecommendedCounselingRequest)
    },
    askForLocation() {
      if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
        navigator.geolocation.getCurrentPosition(this.success, this.fail, options)
      } else {
        this.fail
      }
    },
    success(position: { coords: { latitude: number; longitude: number }; timestamp: number }) {
      console.log('success')
      this.centerList = []
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      const selectCenterRecommendedCounselingRequest: SelectCenterRecommendedCounselingRequest = {
        longitude: this.longitude,
        latitude: this.latitude,
        size: 15
      }
      this.fetchCentersRecommended(selectCenterRecommendedCounselingRequest)
    },
    fail() {
      console.log('fail')
      this.centerList = []
      const selectCenterRecommendedCounselingRequest: SelectCenterRecommendedCounselingRequest = {
        longitude: this.longitude,
        latitude: this.latitude,
        size: 15
      }
      this.fetchCentersRecommended(selectCenterRecommendedCounselingRequest)
    },
    async fetchCentersRecommended(
      selectCenterRecommendedCounselingRequest: SelectCenterRecommendedCounselingRequest
    ) {
      try {
        const res = await getCentersRecommendedCounseling(selectCenterRecommendedCounselingRequest)
        // this.centerList = res.data.data.centerRecommendedCounselingList
        this.firstRequest = false

        res.data.data.centerRecommendedCounselingList.map((v) => {
          this.centerList.push(v)
        })
        if (res.data.data.centerRecommendedCounselingList[14]) {
          this.centerNo = res.data.data.centerRecommendedCounselingList[14].centerNo
          this.distance = res.data.data.centerRecommendedCounselingList[14].distance
          this.isScroll = false
        } else {
          this.isSpinner = false
          this.isScroll = true
        }
      } catch (error: any) {
        throw new Error(error)
      }
    }
  },
  mounted() {
    this.target = document.querySelector('#target') as Element
    // this.target = this.$refs.target as Element
    // console.log(this.$refs.target)

    // this.target.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleScroll)

    // this.target.addEventListener('scroll', this.handleScroll)
  },
  created() {
    // const selectCenterRecommendedCounselingRequest: SelectCenterRecommendedCounselingRequest = {
    //   longitude: this.longitude,
    //   latitude: this.latitude,
    //   size: 15
    // }
    // this.fetchCentersRecommended(selectCenterRecommendedCounselingRequest)
    this.askForLocation()
  }
})
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 40px 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  gap: 20px;

  h1 {
    display: flex;
    width: 100%;

    img {
      width: 69.743px;
      height: 20px;
    }
  }

  h2 {
    color: var(--default-080, #495057);
    font-family: $SpoqaHanSansNeo700;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
  }
}

.main {
  display: flex;
}

.title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
}

.contents-wrap {
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
}

#footer-wrap {
  width: 100%;
  padding: 20px 20px;
  border-radius: 4px;
  background: var(--default-030, #e9ecef);
  display: flex;
  gap: 12px;
  flex-direction: column;

  p {
    color: var(--default-070, #868e96);
    font-family: $SpoqaHanSansNeo400;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
}

.spinner {
  align-items: center;
  display: flex;
  justify-content: center;
  animation: spinner 0.8s ease infinite;
}

.no-data {
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 100%;
  gap: 12px;

  p {
    color: var(--default-070, #868e96);
    font-family: $SpoqaHanSansNeo400;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
}

.contatiner-title {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
