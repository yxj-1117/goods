import request from '@/network/request'

// 商品详情
export function detail() {
  return request({
    url: '/json/detail.json',
  })
}
export class goodsDetail {
  constructor(itemInfo, columns) {
    this.itemInfo = itemInfo
    this.columns = columns
  }
}