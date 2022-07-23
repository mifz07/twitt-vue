<template>
    <div class="lg:w-1/5 border-r px-2 lg:px-6 py-2 flex-col justify-between">
        <div>
            <button class="h-12 w-12 text-4xl hover:bg-cyan-100 rounded-full text-cyan-300">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </button>

            <div class="mt-4">
                <button v-for="item in menuTabs" 
                @click="id_menu = item.id, page_to(item.link)"
                :class="`focus:outline-none hover:bg-cyan-100 flex items-center py-2 px-3 mb-2 rounded-full mr-auto w-full ${ id_menu === item.id ? 'text-cyan-300' : ''}`" :key="item.id">
                    <!-- <i :class="`fa-solid ${item.icon} text-2xl mr-4 text-left`"></i> -->
                    <font-awesome-icon :icon="item.icon" class="mr-4 text-left"/>
                    <p class="text-lg font-semibold hidden lg:block">{{ item.title }}</p>
                </button>
            </div>

            <button class="w-12 h-12 lg:h-auto lg:w-full p-3 bg-cyan-400 item-center text-white rounded-full text-center align-middle m-auto focus:outline-none hover:bg-cyan-400 m-autp">
                <span class="font-semibold hidden lg:block">Tweet</span>
                <font-awesome-icon icon="fa-solid fa-plus" class="block lg:hidden text-center m-auto"></font-awesome-icon>
            </button>
        </div>

        <div class="w-full">
            <div class="mt-12 grid grid-rows-2 grid-flow-col px-0 w-full flex hover:bg-gray-200 rounded-full">
                <div class="row-span-2 relative w-10 h-10">
                    <img class="rounded-full border border-gray-100 shadow-sm" :src="userData.photo" alt="user image" />
                </div>
                <div class="col-span-2 text-sm font-bold leading-tight hidden lg:block">{{ userData.name }}</div>
                <div class="col-span-2 flex text-sm leading-tight hidden lg:block">{{ userData.id }}</div>
                <div class="row-span-2 tex-center align-middle m-auto text-lg hidden lg:block">
                    <font-awesome-icon icon="fa-solid fa-ellipsis"></font-awesome-icon>
                </div>
            </div>
        </div>

    </div>   
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SideBar',
  component:{},
  data(){
    return {
      id_menu : 'home'
    }
  },
  methods : {
    page_to: function(link){
      // console.log(link)
      this.$router.push({ path: link });
    }
  },
  computed : {
    menuTabs(){
        return this.$store.state.menuTabs
    }, 
    userData(){
        return this.$store.state.user
    }
  }
}
</script>
