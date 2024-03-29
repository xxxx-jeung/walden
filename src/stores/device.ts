import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('device', {
  state: () => {
    return {
      isMobile: false as boolean,
    }
  },
  actions: {
    deviceCheck(): void {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // 모바일인 경우
          this.isMobile = true
        }
    },
  }
})
