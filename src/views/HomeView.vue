<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <!-- side nav -->
      <div class="flex container h-screen w-full">
        <div class="w-1/5 border-r border-2 px-8 pl-10 pr-0">
            <button class="h-12 w-12 text-4xl hover:bg-cyan-100 rounded-full text-cyan-300">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </button>

            <div class="mt-4">
              <button v-for="item in menuTabs" 
              @click="id_menu = item.id, page_to(item.link)"
              :class="`focus:outline-none hover:bg-cyan-100 flex items-center py-2 px-3 mb-2 rounded-full mr-auto w-full ${ id_menu === item.id ? 'text-cyan-300' : ''}`" :key="item.id">
                <!-- <i :class="`fa-solid ${item.icon} text-2xl mr-4 text-left`"></i> -->
                 <font-awesome-icon :icon="item.icon" class="mr-4 text-left"/>
                <p class="text-lg font-semibold">{{ item.title }}</p>
              </button>
            </div>

            <div class="mt-4 text-center w-48">
              <button class="w-full h-10 bg-cyan-400 item-center text-white rounded-full text-center align-middle m-auto">
                <span class="font-semibold">Tweet</span>
              </button>
            </div>

            <div class="mt-12 grid grid-rows-2 grid-flow-col px-0">
              <div class="row-span-2 relative w-12 h-12">
                <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
              </div>
              <div class="col-span-2 text-sm">Who am I?</div>
              <div class="col-span-2 flex text-sm">#whoami</div>
              <div class="row-span-2 w-12 h-12 tex-center align-middle m-auto">
                <font-awesome-icon icon="fa-solid fa-ellipsis"></font-awesome-icon>
              </div>
            </div>

        </div>

        
      </div>

    </header>
    <main> 
      <router-view/> 
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  component:{},
  data(){
    return {
      menuTabs : [
        { icon: 'fa-solid fa-home', title: 'Beranda', id: 'home', link: '/' }, 
        { icon: 'fa-solid fa-hashtag', title: 'Jelajahi', id: 'explore', link: '/wew' },
        { icon: 'fa-solid fa-bell', title: 'Notifikasi', id: 'notifications', link: '' }, 
        { icon: 'fa-solid fa-envelope', title: 'Pesan', id: 'envelope', link: '' }, 
        { icon: 'fa-solid fa-bookmark', title: 'Markah', id: 'bookmark', link: '' },
        { icon: 'fa-solid fa-clipboard-list', title: 'Daftar', id: 'lists', link: '' },  
        { icon: 'fa-solid fa-user', title: 'Profile', id: 'profile', link: '' }, 
        { icon: 'fa-solid fa-ellipsis', title: 'Lainnya', id: 'more', link: '' }
      ],
      id_menu : 'home'
    }
  },
  methods : {
    page_to: function(link){
      // console.log(link)
      this.$router.push({ path: link });
    }
  },
}
</script>
