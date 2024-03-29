<template>
  <li class="list-wrap" v-if="center">
    <div class="list-contents">
      <!-- info -->
      <div class="info-left">
        <span class="clinet-type">{{ center.naverPlaceBusinessClassification || '-' }}</span>
        <strong class="center-name">{{ center.name || '-' }}</strong>
        <ul class="center-info-wrap">
          <li class="distance">
            <strong>{{ distanceChange(center.distance) || '0' }}</strong>
          </li>
          <li>
            <span>{{ center.naverPlaceCellphone || '-' }}</span>
          </li>
          <li class="center-address-wrap">
            <span>{{ center.naverPlaceAddress || '-' }}</span>
          </li>
        </ul>
      </div>
      <div class="info-right photo">
        <img v-if="center.imageUrlList" :src="center.imageUrlList[0]" alt="센터 사진" />
      </div>
    </div>
    <!-- tag -->
    <div class="tag-wrap">
      <ul>
        <li class="tag badge" v-for="(tag, idx) in center.tagNameList" :key="idx">{{ tag }}</li>
      </ul>
    </div>

    <!-- button -->
    <div class="btn-wrap">
      <ul>
        <li>
          <a :href="`tel:${center.naverPlaceCellphone}`" class="btn btn-call"
            ><i><IconPhone /></i><span>전화</span></a
          >
        </li>
        <li>
          <a class="btn btn-naver-map" :href="`${center.naverPlaceUrl}`" target="_blank"
            ><i><IconPin /></i><span>위치</span></a
          >
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
import type { CenterRecommendedCounselingResponse } from '@/apis'
import { defineComponent, type PropType } from 'vue'
import IconPhone from '@/components/svg/IconPhone.vue'
import IconPin from '@/components/svg/IconPin.vue'

export default defineComponent({
  props: {
    center: {
      type: Object as PropType<CenterRecommendedCounselingResponse>
    }
  },
  components: { IconPhone, IconPin },
  methods: {
    distanceChange(distance: number) {
      const miter: number = Math.floor(distance)
      if (miter >= 1000) {
        return `${(miter / 1000).toFixed(1)}km`
      } else {
        return `${miter}m`
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.list-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--default-030, #e9ecef);
  gap: 12px;
  overflow: hidden;
  width: 100%;
}

.clinet-type {
  color: var(--inpsyt-green, #4fd685);
  font-family: $SpoqaHanSansNeo700;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
}

.center-name {
  color: var(--default-080, #495057);
  font-family: $SpoqaHanSansNeo700;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
}

.photo {
  border-radius: 4px;
  display: flex;
  background: var(--default-030, #e9ecef);
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  min-width: 72px;

  img {
    height: 100%;
  }
}

.list-contents {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .info-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.btn-call {
  box-sizing: border-box;
  display: flex;
  background: var(--inpsyt-green, #4fd685);

  color: var(--white-100, #fff);
}

.btn-naver-map {
  border-radius: 4px;
  border: 1px solid var(--inpsyt-green, #4fd685);
  background: var(--white-100, #fff);
  color: var(--inpsyt-green, #4fd685);
}

.btn {
  align-items: center;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-family: $SpoqaHanSansNeo700;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */

  width: 100%;

  i {
    align-items: center;
    display: flex;
  }
}

.btn-wrap {
  display: flex;
  width: 100%;

  ul {
    display: flex;
    gap: 4px;
    width: 100%;

    li {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
}

.center-info-wrap {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  color: var(--default-070, #868e96);
  font-family: $SpoqaHanSansNeo400;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  .center-address-wrap {
  }
}

.distance {
  font-weight: 700;
  font-family: $SpoqaHanSansNeo700;
}

.tag-wrap {
  display: flex;

  ul {
    display: flex;
    gap: 4px;
  }
}

.badge {
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: var(--default-020, #f1f3f5);
}

/* @media (min-width: 1024px) {
  .center-info-wrap {
    display: flex;
  }
} */
</style>
