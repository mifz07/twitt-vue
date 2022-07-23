import { createStore } from 'vuex'

export default createStore({
  state: {
    menuTabs : [
      { icon: 'fa-solid fa-home', title: 'Home', id: 'home', link: '/' }, 
      { icon: 'fa-solid fa-hashtag', title: 'Explore', id: 'explore', link: '/404' },
      { icon: 'fa-solid fa-bell', title: 'Notofication', id: 'notifications', link: '/404' }, 
      { icon: 'fa-solid fa-envelope', title: 'Message', id: 'envelope', link: '/404' }, 
      { icon: 'fa-solid fa-bookmark', title: 'Bookmarks', id: 'bookmark', link: '/404' },
      { icon: 'fa-solid fa-clipboard-list', title: 'List', id: 'lists', link: '/404' },  
      { icon: 'fa-solid fa-user', title: 'Profile', id: 'profile', link: '/404' }, 
      { icon: 'fa-solid fa-ellipsis', title: 'More', id: 'more', link: '/404' }
    ],
    listTweet : [
      { name: 'Gundul Si Botak', id: '@gundulnanbotak', time: '2hr', tweet: 'Saya telah mencoba menyeburkannya namun tetep gundul', photo: 'https://randomuser.me/api/portraits/men/82.jpg', comment: '190', repeat: '52', like: '1090', date: '22 July' },
      { name: 'Retno Eyes', id: '@hesebeunta', time: '3hr', tweet: 'kemarin pas di kelas saya disangka tidur, padahal saya sedang fokus memperhatikan', photo: 'https://randomuser.me/api/portraits/women/90.jpg', comment: '90', repeat: '76', like: '187', date: '22 July'},
      { name: 'Khaerudin', id: '@khaerudin', time: '4hr', tweet: 'Alhamdulillah, kajian kali ini gak ada ibu ibu yang tidur, semuanya memperhatikan. Apa mungkin karena saya ganteng ya?', photo: 'https://randomuser.me/api/portraits/men/19.jpg', comment: '134', repeat: '67', like: '987', date: '22 July' }
    ],
    trending: [
      {
          title: 'Terbang dan tikusruk', top: 'Sedang dalam trending Indonesia', bottom: '4K Tweet'
      },
      {
          title: '#TurunkanGengsi', top: 'Sedang dalam trending Indonesia', bottom: '1K Tweet'
      },
      {
          title: '#TitinKeJepang', top: 'Sedang dalam trending Indonesia', bottom: '2K Tweet'
      },
      {
          title: 'Dora', top: 'Sedang dalam trending Indonesia', bottom: '2,2K Tweet'
      },
      {
          title: '#PercumaLaporPolisi', top: 'Sedang dalam trending Indonesia', bottom: '5,3K Tweet'
      }
    ], 
    to_follow: [
        { photo: 'https://randomuser.me/api/portraits/men/17.jpg', name: 'Danle Sun', id: '@danlesun' },
        { photo : 'https://randomuser.me/api/portraits/women/60.jpg', name: 'Siti Futuristi', id: '@sitfuture' },
        { photo: 'https://randomuser.me/api/portraits/women/43.jpg', name: 'Triatni Kusuti', id: '@trikusut'}
    ],
    tweet: [
      
    ],
    user: {
        photo: 'https://randomuser.me/api/portraits/men/27.jpg',
        name: 'Who am I?',
        id: '@whoami?'
      },
    months:[
      "January","February","March","April","May","June","July","August","September","October","November","December"
    ],
     
  },
  getters: {
  },
  mutations: {
    uploadTweet: (state, tweets) => {
      const date = new Date();
      let newTweet = { 
        name: state.user.name, 
        id: state.user.id, 
        date: date.getDate(),
        date_detail: date.getDate() + ' ' + state.months[date.getMonth()],
        hour: date.getHours(),
        minute: date.getMinutes(),
        time: date,
        time_post: '',
        tweet: tweets, 
        photo: state.user.photo, 
        comment: 0, 
        repeat: 0, 
        like: 0 
      };
      state.tweet.push(newTweet)
    }
  },
  actions: {
    uploadTweet: (context, tweets) => {
      setTimeout(function(){
        context.commit('uploadTweet', tweets)
      }, 500)
    }
  },
  modules: {
  }
})
