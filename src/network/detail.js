import { request } from "./axios";

// 详情页商品数据
export function getDetailShopData(iid) {
  return request({
    url: "detail",
    method: "get",
    params: {
      iid
    }
  });
}

// 详情页推荐数据
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

// 价格福利类
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title; // 名称
    this.desc = itemInfo.desc; // 描述
    this.rangePrice = itemInfo.price; // 价格区间
    this.oldPrice = itemInfo.oldPrice; // 原价
    this.lowNowPrice = itemInfo.lowNowPrice; // 现在起步价格
    this.discount = itemInfo.discountDesc; // 折扣
    this.columns = columns; // 专栏
    this.services = services; // 服务
  }
}

// 商铺信息类
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo; // 店铺logo
    this.name = shopInfo.name; // 店铺名称
    this.sells = shopInfo.cSells; // 店铺销量
    this.goodsCount = shopInfo.cGoods; // 宝贝数量
    this.score = shopInfo.score; // 店铺评分
  }
}

// 商品参数类
export class GoodsParam {
  constructor(param) {
    this.sizes = param.rule.tables; // 商品尺寸表数据  -- 可能有多个表格
    this.disclaimer = param.rule.disclaimer; // 免责声明
    this.sizesTitle = param.rule.key; // 尺寸标题
    this.infos = param.info.set; // 商品普通描述信息
    this.infosTitle = param.info.key; // 尺寸标题
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = param.info.images ? param.info.images[0] : []; // 商品图片
  }
}
