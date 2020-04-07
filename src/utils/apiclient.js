import helper from './helper'

let productData = [
  {
    id: 'bvtspajwdqdc',
    name: 'Tai nghe Bluetooth sạc không dây AirPods 2 Apple MRXJ2 Trắng',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/218662/oppo-a31-2020-128gb-den-600x600-1-400x400.jpg',
    status: 1
  },
  {
    id: 'jjnzpekuwrnv',
    name: 'Pin sạc dự phòng 19.000 mAh Xmobile Gram 6S Trắng',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-400x400.jpg',
    status: 1
  },
  {
    id: 'gpgpmsiqkyub',
    name: 'HP Pavilion 15 cs2120TX i5 8265U (8AG58PA)',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg',
    status: 2
  },
  {
    id: 'iyxkpsecwnia',
    name: 'Acer Aspire E5 476 50SZ i5 8250U (NX.H33SV.001)',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg',
    status: 2
  },
  {
    id: 'iszfqmxqyfnd',
    name: 'Samsung Galaxy Tab A8 8" T295 (2019)',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-600x600-400x400.jpg',
    status: 3
  },
  {
    id: 'klcliblnsxcl',
    name: 'Tai nghe Bluetooth Mozard Flex4 Đen Xanh',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/217331/realme-5i-4gb-blue-amee-thumb-400x400.jpg',
    status: 1
  },
  {
    id: 'rzztcxhjcqqm',
    name: 'Dây cáp Micro USB 1 m e.VALU LTM-01',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/208863/acer-swift-sf315-52-38yq-i3-8130u-4gb-1tb-156f-win-400x400.jpg',
    status: 2
  },
  {
    id: 'awpskpqsyiyc',
    name: 'Cáp Lightning 1m Apple MQUE2 Trắng',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/212360/asus-vivobook-x509fj-i3-8145u-4gb-1tb-2gb-mx230-wi-1-400x400.jpg',
    status: 1
  },
  {
    id: 'vvwhydcmwecu',
    name: 'Đồng hồ Nam Daumier DM-JLW001.SLTN.8SNI.S.M - Superman',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/44/207744/lenovo-ideapad-s145-15iwl-i5-8265u-8gb-256gb-mx110-19-400x400.jpg',
    status: 1
  },
  {
    id: 'ghnhlluuinja',
    name: 'Huawei Watch GT2 46mm dây kim loại',
    thumbnail: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
    status: 4
  }
]

const apiclient = {
  PRODUCTS: {
    async fetch({ current_page, per_page, status }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            pagination: {
              per_page,
              current_page,
              total_page: 11,
              total: 52
            },
            items: productData
          })
        }, 500)
      })
    },

    async create(data) {
      return new Promise(resolve => {
        setTimeout(() => {
          let newProduct = {
            id: helper.randomString(20),
            name: data.name,
            thumbnail: data.images[0],
            status: data.status
          }
          productData.push(newProduct)

          resolve(newProduct)
        }, 500)
      })
    },

    async delete(productId) {
      return new Promise(resolve => {
        setTimeout(() => {
          const index = productData.findIndex(item => item.id === productId)

          if (index >= 0) {
            productData.splice(index, 1)
          }

          resolve(true)
        }, 500)
      })
    }
  }
}

export default apiclient
