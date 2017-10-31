/**
 * Created by Administrator on 2017/10/9.
 */
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    carPanelData: [],
    panelData: [],
    buyNowData: [],
    receiveInfo: [{
      'name': '王某某',
      'phone': '13811111111',
      'areaCode': '010',
      'landLine': '64627856',
      'provinceId': 110000,
      'province': '北京市',
      'cityId': 110100,
      'city': '市辖区',
      'countyId': 110106,
      'county': '海淀区',
      'add': '上地十街辉煌国际西6号楼319室',
      'default': false
    }, {
      'name': '李某某',
      'phone': '13811111111',
      'areaCode': '010',
      'landLine': '64627856',
      'provinceId': 110000,
      'province': '北京市',
      'cityId': 110100,
      'city': '市辖区',
      'countyId': 110106,
      'county': '海淀区',
      'add': '上地十街辉煌国际东6号楼350室',
      'default': false
    }],
    maxOff: false,
    carShow: false,
    addReceive: true,
    carTime: null,
    ball: {
      show: false,
      el: null,
      img: ''
    },
    orderData: [],
    receive: {
      'name': '',
      'phone': '',
      'areaCode': '',
      'landLine': '',
      'provinceId': 0,
      'province': '',
      'cityId': 0,
      'city': '',
      'countyId': 0,
      'county': '',
      'add': '',
      'default': false
    },
    clearReceive: {
      'name': '',
      'phone': '',
      'areaCode': '',
      'landLine': '',
      'provinceId': 0,
      'province': '',
      'cityId': 0,
      'city': '',
      'countyId': 0,
      'county': '',
      'add': '',
      'default': false
    },
    num: 0,
    goods: []
  },
  getters: {
    totleCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        count += goods.count
      })
      return count
    },
    totlePrice (state) {
      let price = 0
      state.carPanelData.forEach((goods) => {
        price += goods.count * goods.price
      })
      return price
    },
    allChecked (state) {
      let allChecked = true
      state.carPanelData.forEach((goods) => {
        if (!goods.checked) {
          allChecked = false
          return
        }
      })
      return allChecked
    },
    checkedCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        if (goods.checked) {
          count += goods.count
        }
      })
      return count
    },
    checkedPrice (state) {
      let price = 0
      state.carPanelData.forEach((goods) => {
        if (goods.checked) {
          price += goods.price * goods.count
        }
      })
      state.panelData.forEach((goods) => {
        price += goods.price * goods.count
      })
      return price
    },
    checkedGoods (state) {
      let checkedGoods = []
      state.carPanelData.forEach((goods) => {
        if (goods.checked) {
          checkedGoods.push(goods)
        }
      })
      state.panelData.forEach((goods) => {
        checkedGoods.push(goods)
      })
      return checkedGoods
    },
    buyNowGoods (state) {
      let buyNowGoods = []
      state.buyNowData.forEach((goods) => {
        if (goods.checked) {
          buyNowGoods.push(goods)
        }
      })
      return buyNowGoods
    }
  },
  mutations: {
    addCarPanelData (state, data) {
      let bOff = true
      if (!state.ball.show) {
        state.carPanelData.forEach((goods) => {
          if (goods.sku_id === data.info.sku_id) {
            goods.count += data.count
            bOff = false
            if (goods.count > goods.limit_num) {
              goods.count -= data.count
              state.maxOff = true
              return
            }
            state.carShow = true
            state.ball.show = true
            state.ball.img = data.info.ali_image
            state.ball.el = event.path[0]
            console.log(data)
          }
        })
        if (bOff) {
          let goodsData = data.info
          Vue.set(goodsData, 'count', data.count)
          Vue.set(goodsData, 'checked', true)
          state.carPanelData.push(goodsData)
          state.carShow = true
          state.ball.show = true
          state.ball.img = data.info.ali_image
          state.ball.el = event.path[0]
        }
      }
    },
    buyNow (state, data) {
      let goodsData = data.info
      Vue.set(goodsData, 'count', data.count)
      Vue.set(goodsData, 'checked', true)
      state.panelData.push(goodsData)
      return state.panelData
    },
    delCarPanelData (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          state.carPanelData.splice(index, 1)
          return
        }
      })
    },
    plusCarPanelData (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          if (goods.count >= goods.limit_num) return
          goods.count++
          return
        }
      })
    },
    subCarPanelData (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          if (goods.count <= 1) return
          goods.count--
          return
        }
      })
    },
    checkGoods (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          goods.checked = !goods.checked
          return
        }
      })
    },
    allCheckedGoods (state, allChecked) {
      state.carPanelData.forEach((goods, index) => {
        goods.checked = !allChecked
      })
    },
    delCheckedGoods (state) {
      let i = state.carPanelData.length
      while (i--) {
        if (state.carPanelData[i].checked) {
          state.carPanelData.splice(i, 1)
        }
      }
    },
    closePrompt (state) {
      state.maxOff = false
    },
    showCar (state) {
      state.carShow = true
    },
    hideCar (state) {
      clearTimeout(state.carTimer)
      state.carTimer = setTimeout(() => {
        state.carShow = false
      }, 500)
    },
    submitReceive (state, data) {
      if (data.default && !state.addReceive) {
        state.receiveInfo.forEach((receive) => {
          receive.default = false
          data.default = true
          state.receiveInfo[state.num].default = data.default
        })
      }
      if (data.default && state.addReceive) {
        state.receiveInfo.forEach((receive) => {
          receive.default = false
        })
      }
      if (state.addReceive) {
        state.receiveInfo.push(data)
      }
      if (state.receiveInfo.length === 0) {
        state.receiveInfo.push(data)
        console.log(77)
      }
      state.addReceive = true
      state.clearReceive = {
        'name': '',
        'phone': '',
        'areaCode': '',
        'landLine': '',
        'provinceId': 0,
        'province': '',
        'cityId': 0,
        'city': '',
        'countyId': 0,
        'county': '',
        'add': '',
        'default': false
      }
    },
    submitOrder (state, data) {
      state.orderData.unshift(data)
      let i = state.carPanelData.length
      while (i--) {
        if (state.carPanelData[i].checked) {
          state.carPanelData.splice(i, 1)
        }
      }
    },
    payNow (state, id) {
      state.orderData.forEach((order) => {
        if (order.orderId === id) {
          order.isPay = true
          return
        }
      })
    },
    defaultSetting (state, index) {
      state.receiveInfo.forEach((receive) => {
        receive.default = false
      })
      state.receiveInfo[index].default = true
      console.log(state.receiveInfo[index])
    },
    changeDefault (state) {
      state.receive.default = !state.receive.default
    },
    changePop (state, index) {
      state.receive = state.receiveInfo[index]
      console.log(state.receiveInfo[index])
      state.receiveInfo[index] = state.receive
      state.num = index
      state.addReceive = false
    },
    clearBeforePop (state) {
      state.receive = state.clearReceive
    },
    delReceiveInfo (state, index) {
      state.receiveInfo.splice(index, 1)
    }
  }
})

export default store
