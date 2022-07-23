<template>
    <div class="md:block hidden w-1/3 h-full border-l border-2 py-2 px-6 overflow-y-scroll">

        <div class="mb-4 relative">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="absolute left-0 -top-2 mt-5 ml-3 text-sm bg-gray-100 font-light pointer-events-none" style="right: 27.5%"/>
            <input type="text" class="pl-10 rounded-full w-full p-2 bg-gray-100 text-sm" placeholder="Search Twitter">
        </div>

        <div class="w-full rounded-lg bg-gray-100">
            <div class="flex items-center justify-between p-3">
                <p class="text-lg font-bold">Trending Untuk Anda</p>
            </div>

            <button v-for="item in trending" class="w-full flex justify-between hover:bg-cyan-300 p-3 border-t" :key="item.title">
                <div>
                    <p class="text-sm text-left leading-tight text-gray-600">{{ item.top }}</p>
                    <p class="font-bold text-left leading-tight">{{ item.title }}</p>
                    <p class="text-left leading-tight text-gray-600 text-sm">{{item.bottom}}</p>
                </div>
                <font-awesome-icon icon="fa-solid fa-ellipsis" class="text-lg text-gray-600"></font-awesome-icon>
            </button>
            <button class="p-3 w-full hover:bg-cyan-300 text-left text-cyan-300 hover:text-white border-t hover:rounded-br hover:rounded-bl ">
                Show More
            </button>
        </div>

        <div class="w-full rounded-lg bg-gray-100 mt-10">
            <div class="items-center justify-between p-3">
                <p class="text-lg font-bold">Who To Follow</p>
            </div>

            <button v-for="items in to_follow" class="w-full flex hover:bg-cyan-300 p-3 border-t" :key="items.id">
                <img class="w-14 h-14 rounded-full border border-gray-100 shadow-sm" :src="items.photo" alt="user image" />
                <div class="flex hidden lg:block ml-2">
                    <div class="hidden lg:block ml-5">
                        <p class="font-bold text-left">{{ items.name }}</p>
                        <p class="text-sm text-left text-gray-500">{{ items.id }}</p>
                    </div>
                </div>
                <div class="flex text-bold ml-auto text-blue-400 py-1 px-4 rounded-full bg-white hover:bg-cyan-400 hover:text-white justify-between">
                    Follow
                </div>
            </button>
            <button class="p-3 w-full hover:bg-cyan-300 text-left text-cyan-300 hover:text-white border-t hover:rounded-br hover:rounded-bl ">
                Show More
            </button>
        </div>
    </div>

    
</template>

<script>
export default{
    name: "TrendingPage",
    computed: {
        trending(){
            return this.$store.state.trending
        },
        to_follow(){
            return this.$store.state.to_follow
        }
    }
}
</script>