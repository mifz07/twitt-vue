<template>
    <div class="w-full lg:w-1/2 h-full w-full py-2 flex" v-show="show">
        
        <div role="status" class="m-auto">
            <svg aria-hidden="true" class="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>

    </div>

    <div class="w-full lg:w-1/2 h-full py-2 overflow-y-scroll relative" v-show="!show">
        <div class="px-5 py-3 border-b flex item-center justify-between">
            <h1 class="text-xl font-bold">Home</h1>
            <font-awesome-icon icon="fa-solid fa-star"></font-awesome-icon>
        </div>

        <div class="px-5 py-3 border-b-8 flex">
            <div class="flex-none">
                <img class="rounded-full border w-12 h-12 border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/27.jpg" alt="img-profile">
            </div>
            <form @submit.prevent="newTweet" class="w-full px-4 relative">
                <textarea v-model="tweets" placeholder="What's happening?" class="mt-3 pb-3 w-full focus:outline-none"></textarea>
                <div class="flex item-center">
                    <font-awesome-icon icon="fa-regular fa-image" class="text-lg text-blue-400 mx-3"></font-awesome-icon>
                    <!-- <font-awesome-icon icon="fa-regular fa-gif" class="text-lg text-blue-400 mx-6"></font-awesome-icon> -->
                    <font-awesome-icon icon="fa-regular fa-chart-bar" class="text-lg text-blue-400 mx-3"></font-awesome-icon>
                    <font-awesome-icon icon="fa-regular fa-face-smile" class="text-lg text-blue-400 mx-3"></font-awesome-icon>
                    <font-awesome-icon icon="fa-regular fa-calendar" class="text-lg text-blue-400 mx-3"></font-awesome-icon>
                    <font-awesome-icon icon="fa-solid fa-location-dot" class="text-lg text-blue-400 mx-3"></font-awesome-icon>
                    <button type="submit" class="h-8 px-4 text-white font-semibold bg-cyan-400 hover:bg-cyan-600 focus:outline-none rounded-full absolute bottom-0 right-0">
                        Tweet
                    </button>
                </div>
                
            </form>
        </div>

        <!-- tweet user -->
        <div v-for="item in tweet.slice().reverse()" class="cursor-pointer w-full px-5 py-3 border-b hover:bg-gray-200 flex" :key="item.id">
            <div class="flex-none mr-4">
                <img class="w-12 h-12 rounded-full flex-none" :src="item.photo">
            </div>
            <div class="w-full">
                <div class="flex item-center w-full">
                    <p>
                        <b class="font-semibold">{{ item.name }}</b> 
                        <span class="text-sm text-gray-500">{{ ' ' + item.id }}</span> - 
                        <span class="text-sm text-gray-500">{{ item.time_post + ' post in ' + item.date_detail }}</span>
                    </p>
                    <font-awesome-icon icon="fa-solid fa-ellipsis" class="text-gray-600 ml-auto"></font-awesome-icon>
                </div>
                <div>
                    <p>
                        {{ item.tweet }}
                    </p>
                </div>
                <div class="flex item-center w-full justify-between mt-3">
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-regular fa-message" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3">{{item.comment}}</span>
                    </div>
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-solid fa-repeat" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3">{{item.repeat}}</span>
                    </div>
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-regular fa-heart" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3">{{item.repeat}}</span>
                    </div>
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3"></span>
                    </div>
                </div>
            </div>   
        </div>

        <!-- tweet other -->
        <div v-for="item in listTweet" class="cursor-pointer w-full px-5 py-3 border-b hover:bg-gray-200 flex" :key="item.id">
            <div class="flex-none mr-4">
                <img class="w-12 h-12 rounded-full flex-none" :src="item.photo">
            </div>
            <div class="w-full">
                <div class="flex item-center w-full">
                    <p>
                        <b class="font-semibold">{{ item.name }}</b> 
                        <span class="text-sm text-gray-500">{{ ' ' + item.id }}</span> - 
                        <span class="text-sm text-gray-500">{{ ' ' + item.date }}</span>
                    </p>
                    <font-awesome-icon icon="fa-solid fa-ellipsis" class="text-gray-600 ml-auto"></font-awesome-icon>
                </div>
                <div>
                    <p>
                        {{ item.tweet }}
                    </p>
                </div>
                <div class="flex item-center w-full justify-between mt-3">
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-regular fa-message" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3">{{item.comment}}</span>
                    </div>
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-solid fa-repeat" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3">{{item.repeat}}</span>
                    </div>
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-regular fa-heart" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3">{{item.repeat}}</span>
                    </div>
                    <div class="flex item-center text-gray-600 mr-6">
                        <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" class="mt-1"></font-awesome-icon>   
                        <span class="flex items-center text-sm justify-between ml-3"></span>
                    </div>
                </div>
            </div>   
        </div>

    </div>
</template>

<script>

export default{
    name: 'TweetBar',
    data(){
        return {
            tweets : '',
            show: true
        }
    },
    computed: { 
        listTweet(){
            return this.$store.state.listTweet
        },
        tweet(){
            let twe = this.$store.state.tweet;
            let date = new Date() 
            console.log(twe)
            twe.map(function(value, key) {
                if( ( (date.getMinutes() - value.minute) < 5 && (date.getMinutes() - value.minute) >= 0 ) && ( value.date == date.getDate() )){
                    twe[key].time_post = 'now'
                }else if( ((date.getHours() - value.hour ) < 24 && (date.getHours() - value.hour ) >= 0) && ( value.date == date.getDate() ) ){
                    twe[key].time_post = (date.getHours() - value.hour ) + 'hr';
                }else{
                  twe[key].time_post = '';  
                }
            });
            return twe
        },

    },
    methods: {
        newTweet(){
            this.$store.dispatch('uploadTweet', this.tweets);
            this.tweets = '';
        }, 
        changeShow(){
            this.show = false
        }
    },
    created: function(){
        setTimeout(()=>{
            this.changeShow()
         }, 1000)
    }
}
</script>