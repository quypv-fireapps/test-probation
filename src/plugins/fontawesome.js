import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faAngleDown,
  faHome,
  faTag,
  faCog,
  faLifeRing,
  faShoppingCart,
  faPlus,
  faShoppingBag,
  faAngleLeft,
  faTimes,
  faTrash,
  faUpload,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faAngleDown)
library.add(faHome)
library.add(faTag)
library.add(faCog)
library.add(faLifeRing)
library.add(faShoppingCart)
library.add(faPlus)
library.add(faShoppingBag)
library.add(faAngleLeft)
library.add(faTimes)
library.add(faTrash)
library.add(faUpload)
library.add(faEllipsisH)

Vue.component('fa', FontAwesomeIcon)
