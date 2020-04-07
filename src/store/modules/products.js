import apiclient from '@/utils/apiclient'

const types = {
  UPDATE_ITEMS: 'UPDATE_ITEMS',

  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',

  UPDATE_FILTER: 'UPDATE_FILTER'
}

const state = {
  filter: {
    status: 1
  },

  items: [],

  pagination: {
    per_page: 0,
    current_page: 1,
    total_page: 1,
    total: 0
  }
}

const mutations = {
  [types.UPDATE_ITEMS](state, { items, pagination }) {
    state.items = JSON.parse(JSON.stringify(items))
    state.pagination = JSON.parse(JSON.stringify(pagination))
  },

  [types.ADD](state, item) {
    let _info = JSON.parse(JSON.stringify(item))
    state.items.push(_info)
  },

  [types.UPDATE](state, item) {
    let itemInfo = JSON.parse(JSON.stringify(item))
    const index = state.items.findIndex(item => item.id === itemInfo.id)
    if (index >= 0) {
      let newObject = Object.assign(state.items[index], itemInfo)
      state.items.splice(index, 1, newObject)
    }
  },

  [types.DELETE](state, id) {
    const index = state.items.findIndex(item => item.id === id)

    if (index >= 0) {
      state.items.splice(index, 1)
    }
  },

  [types.UPDATE_FILTER](state, updateInfo) {
    state.filter = Object.assign(state.filter, updateInfo)
  }
}

const actions = {
  async fetch({ commit }, { current_page, per_page, status }) {
    let rs = await apiclient.PRODUCTS.fetch({
      current_page,
      per_page,
      status
    })

    commit(types.UPDATE_ITEMS, {
      items: rs.items,
      pagination: rs.pagination
    })
  },

  async addProduct({ commit }, productInfo) {
    let newProduct = await apiclient.PRODUCTS.create(productInfo)
    commit(types.ADD, newProduct)
  },

  updateFilter({ commit }, updateInfo) {
    commit(types.UPDATE_FILTER, updateInfo)
  },

  delete({ commit }, id) {
    commit(types.DELETE, id)
    return apiclient.PRODUCTS.delete(id)
  }
}

const getters = {
  getProducts: state => {
    let rs = JSON.parse(JSON.stringify(state.items))
    return rs.filter(item => item.status === state.filter.status) || []
  },

  getPagination: state => {
    return JSON.parse(JSON.stringify(state.pagination))
  },

  getFilter: state => {
    return JSON.parse(JSON.stringify(state.filter))
  }
}

export default {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
