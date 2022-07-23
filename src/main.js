import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket, faRepeat, faLocationDot, faHome, faHashtag, faBell, faEnvelope, faBookmark, faClipboardList, faUser, faEllipsis, faPlus, faSearch, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faImage, faChartBar, faFaceSmile, faCalendar, faMessage } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add( faArrowUpFromBracket, faHeart, faRepeat, faMessage, faUserSecret, faHome, faHashtag, faBell, faEnvelope, faBookmark, faClipboardList, faUser, faEllipsis, faTwitter, faPlus, faSearch, faMagnifyingGlass, faStar, faImage, faChartBar, faFaceSmile, faCalendar, faLocationDot)

import SideBar from './components/SideBar'
import Trendingpage from './components/TrendingPage'

createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.component('SideBar', SideBar)
.component('TrendingPage', Trendingpage)
.mount('#app')
