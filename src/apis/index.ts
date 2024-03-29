import axios, { type AxiosPromise } from 'axios'

const protocol = 'https:'
export const apiUrl =
  location.host === 'www.inpsyt.me' ? 'api.inpsyt.me/api/v1/' : 'dev-api.inpsyt.me/api/v1/'

export const instance = axios.create({
  baseURL: `${protocol}//${apiUrl}`
})

// 요청 인터셉터 추가하기
// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error)
  }
)

// 응답 인터셉터 추가하기
instance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error)
  }
)

/**
 * 추천 상담 센터 조회
 * 나중에 양이 많아지면 인사이트플러스와 동일하게 가야함
 * @param selectCenterRecommendedCounselingRequest
 * @returns
 */
export function getCentersRecommendedCounseling(
  params: SelectCenterRecommendedCounselingRequest
): AxiosPromise<CommonResponseComplexCenterRecommendedCounselingResponse> {
  // const params = JSON.stringify(selectCenterRecommendedCounselingRequest)
  return instance.get(`centers/recommended-counseling`, { params })
}

export interface SelectCenterRecommendedCounselingRequest {
  centerNo?: number
  distance?: number
  longitude: number
  latitude: number
  size: number
}

export interface CommonResponseComplexCenterRecommendedCounselingResponse {
  code: string
  message: string
  data: ComplexCenterRecommendedCounselingResponse
}
export interface ComplexCenterRecommendedCounselingResponse {
  centerRecommendedCounselingList: CenterRecommendedCounselingResponse[]
}

export interface CenterRecommendedCounselingResponse {
  centerNo: 0 // 센터 no
  name: string // 센터명
  naverPlaceAddress: string // 센터 주소
  naverPlaceHomepageUrl: string // 홈페이지
  naverPlaceCellphone: string // 전화번호
  naverPlaceLatitude: 0 // 위도
  naverPlaceLongitude: 0 // 경도
  distance: 0 // 거리
  tagNameList: [string] // 태그값
  imageUrlList: [string] // 이미지 값
  naverPlaceBusinessClassification: string // 업종 분류
  naverPlaceUrl: string
}

export function postApkDownload(token: string) {
  return axios.get(`https://dev-api.inpsyt.me/api/v1/apk-downloadv2/${token}`)
}