import request from '@/network/request'

// 轮播图【首页】
export function banners() {
  return request({
    url: '/json/banners.json',
  })
}

// 推荐
export function recommend() {
  return request({
    url: '/json/recommend.json',
  })
}

// 本周热卖
export function feature() {
  return request({
    url: '/json/feature.json',
  })
}
// 商品列表
export function goods() {
  return request({
    url: '/json/goods.json',
  })
}