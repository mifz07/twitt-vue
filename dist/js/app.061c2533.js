(function(){"use strict";var e={5077:function(e,t,l){var a=l(9242),n=l(3396);const s={class:"flex container h-screen w-full"};function o(e,t){const l=(0,n.up)("SideBar"),a=(0,n.up)("router-view"),o=(0,n.up)("TrendingPage");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(l),((0,n.wg)(),(0,n.j4)(a,{key:e.$route.path})),(0,n.Wm)(o)])}var i=l(89);const r={},u=(0,i.Z)(r,[["render",o]]);var c=u,d=l(2483),m=l(7139);const f={class:"w-full lg:w-1/2 h-full w-full py-2 flex"},p=(0,n._)("div",{role:"status",class:"m-auto"},[(0,n._)("svg",{"aria-hidden":"true",class:"mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n._)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),(0,n._)("span",{class:"sr-only"},"Loading...")],-1),g=[p],w={class:"w-full lg:w-1/2 h-full py-2 overflow-y-scroll relative"},h={class:"px-5 py-3 border-b flex item-center justify-between"},x=(0,n._)("h1",{class:"text-xl font-bold"},"Home",-1),b={class:"px-5 py-3 border-b-8 flex"},v=(0,n._)("div",{class:"flex-none"},[(0,n._)("img",{class:"rounded-full border w-12 h-12 border-gray-100 shadow-sm",src:"https://randomuser.me/api/portraits/men/27.jpg",alt:"img-profile"})],-1),y={class:"flex item-center"},_=(0,n._)("button",{type:"submit",class:"h-8 px-4 text-white font-semibold bg-cyan-400 hover:bg-cyan-600 focus:outline-none rounded-full absolute bottom-0 right-0"}," Tweet ",-1),k={class:"flex-none mr-4"},C=["src"],T={class:"w-full"},j={class:"flex item-center w-full"},D={class:"font-semibold"},W={class:"text-sm text-gray-500"},z=(0,n.Uk)(" - "),S={class:"text-sm text-gray-500"},M={class:"flex item-center w-full justify-between mt-3"},F={class:"flex item-center text-gray-600 mr-6"},H={class:"flex items-center text-sm justify-between ml-3"},K={class:"flex item-center text-gray-600 mr-6"},O={class:"flex items-center text-sm justify-between ml-3"},B={class:"flex item-center text-gray-600 mr-6"},$={class:"flex items-center text-sm justify-between ml-3"},P={class:"flex item-center text-gray-600 mr-6"},Z=(0,n._)("span",{class:"flex items-center text-sm justify-between ml-3"},null,-1),Y={class:"flex-none mr-4"},I=["src"],J={class:"w-full"},U={class:"flex item-center w-full"},A={class:"font-semibold"},N={class:"text-sm text-gray-500"},L=(0,n.Uk)(" - "),E={class:"text-sm text-gray-500"},G={class:"flex item-center w-full justify-between mt-3"},V={class:"flex item-center text-gray-600 mr-6"},q={class:"flex items-center text-sm justify-between ml-3"},R={class:"flex item-center text-gray-600 mr-6"},Q={class:"flex items-center text-sm justify-between ml-3"},X={class:"flex item-center text-gray-600 mr-6"},ee={class:"flex items-center text-sm justify-between ml-3"},te={class:"flex item-center text-gray-600 mr-6"},le=(0,n._)("span",{class:"flex items-center text-sm justify-between ml-3"},null,-1);function ae(e,t,l,s,o,i){const r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("div",f,g,512),[[a.F8,o.show]]),(0,n.wy)((0,n._)("div",w,[(0,n._)("div",h,[x,(0,n.Wm)(r,{icon:"fa-solid fa-star"})]),(0,n._)("div",b,[v,(0,n._)("form",{onSubmit:t[1]||(t[1]=(0,a.iM)(((...e)=>i.newTweet&&i.newTweet(...e)),["prevent"])),class:"w-full px-4 relative"},[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.tweets=e),placeholder:"What's happening?",class:"mt-3 pb-3 w-full focus:outline-none"},null,512),[[a.nr,o.tweets]]),(0,n._)("div",y,[(0,n.Wm)(r,{icon:"fa-regular fa-image",class:"text-lg text-blue-400 mx-3"}),(0,n.Wm)(r,{icon:"fa-regular fa-chart-bar",class:"text-lg text-blue-400 mx-3"}),(0,n.Wm)(r,{icon:"fa-regular fa-face-smile",class:"text-lg text-blue-400 mx-3"}),(0,n.Wm)(r,{icon:"fa-regular fa-calendar",class:"text-lg text-blue-400 mx-3"}),(0,n.Wm)(r,{icon:"fa-solid fa-location-dot",class:"text-lg text-blue-400 mx-3"}),_])],32)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.tweet.slice().reverse(),(e=>((0,n.wg)(),(0,n.iD)("div",{class:"cursor-pointer w-full px-5 py-3 border-b hover:bg-gray-200 flex",key:e.id},[(0,n._)("div",k,[(0,n._)("img",{class:"w-12 h-12 rounded-full flex-none",src:e.photo},null,8,C)]),(0,n._)("div",T,[(0,n._)("div",j,[(0,n._)("p",null,[(0,n._)("b",D,(0,m.zw)(e.name),1),(0,n._)("span",W,(0,m.zw)(" "+e.id),1),z,(0,n._)("span",S,(0,m.zw)(e.time_post+" post in "+e.date_detail),1)]),(0,n.Wm)(r,{icon:"fa-solid fa-ellipsis",class:"text-gray-600 ml-auto"})]),(0,n._)("div",null,[(0,n._)("p",null,(0,m.zw)(e.tweet),1)]),(0,n._)("div",M,[(0,n._)("div",F,[(0,n.Wm)(r,{icon:"fa-regular fa-message",class:"mt-1"}),(0,n._)("span",H,(0,m.zw)(e.comment),1)]),(0,n._)("div",K,[(0,n.Wm)(r,{icon:"fa-solid fa-repeat",class:"mt-1"}),(0,n._)("span",O,(0,m.zw)(e.repeat),1)]),(0,n._)("div",B,[(0,n.Wm)(r,{icon:"fa-regular fa-heart",class:"mt-1"}),(0,n._)("span",$,(0,m.zw)(e.repeat),1)]),(0,n._)("div",P,[(0,n.Wm)(r,{icon:"fa-solid fa-arrow-up-from-bracket",class:"mt-1"}),Z])])])])))),128)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.listTweet,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"cursor-pointer w-full px-5 py-3 border-b hover:bg-gray-200 flex",key:e.id},[(0,n._)("div",Y,[(0,n._)("img",{class:"w-12 h-12 rounded-full flex-none",src:e.photo},null,8,I)]),(0,n._)("div",J,[(0,n._)("div",U,[(0,n._)("p",null,[(0,n._)("b",A,(0,m.zw)(e.name),1),(0,n._)("span",N,(0,m.zw)(" "+e.id),1),L,(0,n._)("span",E,(0,m.zw)(" "+e.date),1)]),(0,n.Wm)(r,{icon:"fa-solid fa-ellipsis",class:"text-gray-600 ml-auto"})]),(0,n._)("div",null,[(0,n._)("p",null,(0,m.zw)(e.tweet),1)]),(0,n._)("div",G,[(0,n._)("div",V,[(0,n.Wm)(r,{icon:"fa-regular fa-message",class:"mt-1"}),(0,n._)("span",q,(0,m.zw)(e.comment),1)]),(0,n._)("div",R,[(0,n.Wm)(r,{icon:"fa-solid fa-repeat",class:"mt-1"}),(0,n._)("span",Q,(0,m.zw)(e.repeat),1)]),(0,n._)("div",X,[(0,n.Wm)(r,{icon:"fa-regular fa-heart",class:"mt-1"}),(0,n._)("span",ee,(0,m.zw)(e.repeat),1)]),(0,n._)("div",te,[(0,n.Wm)(r,{icon:"fa-solid fa-arrow-up-from-bracket",class:"mt-1"}),le])])])])))),128))],512),[[a.F8,!o.show]])],64)}var ne={name:"TweetBar",data(){return{tweets:"",show:!0}},computed:{listTweet(){return this.$store.state.listTweet},tweet(){let e=this.$store.state.tweet,t=new Date;return console.log(e),e.map((function(l,a){t.getMinutes()-l.minute<5&&t.getMinutes()-l.minute>=0&&l.date==t.getDate()?e[a].time_post="now":t.getHours()-l.hour<24&&t.getHours()-l.hour>=0&&l.date==t.getDate()?e[a].time_post=t.getHours()-l.hour+"hr":e[a].time_post=""})),e}},methods:{newTweet(){this.$store.dispatch("uploadTweet",this.tweets),this.tweets=""},changeShow(){this.show=!1}},created:function(){setTimeout((()=>{this.changeShow()}),1e3)}};const se=(0,i.Z)(ne,[["render",ae]]);var oe=se;const ie={class:"w-full lg:w-1/2 h-full w-full py-2 flex"},re=(0,n._)("div",{role:"status",class:"m-auto"},[(0,n._)("svg",{"aria-hidden":"true",class:"mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n._)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),(0,n._)("span",{class:"sr-only"},"Loading...")],-1),ue=[re],ce={class:"w-1/2 h-full bg-gray-100 flex"},de=(0,n._)("h1",{class:"text-gray-700 m-auto"},[(0,n._)("i",null,"Page Not Found")],-1),me=[de];function fe(e,t,l,s,o,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("div",ie,ue,512),[[a.F8,o.show]]),(0,n.wy)((0,n._)("div",ce,me,512),[[a.F8,!o.show]])],64)}var pe={name:"NotFoundPage",data(){return{show:!0}},methods:{changeShow(){this.show=!1}},created:function(){setTimeout((()=>{this.changeShow()}),1e3)}};const ge=(0,i.Z)(pe,[["render",fe]]);var we=ge;const he=[{path:"/",name:"TweetBar",component:oe},{path:"/404",name:"NoteFoundPage",component:we}],xe=(0,d.p7)({history:(0,d.r5)(),routes:he});var be=xe,ve=l(65),ye=(0,ve.MT)({state:{menuTabs:[{icon:"fa-solid fa-home",title:"Home",id:"home",link:"/"},{icon:"fa-solid fa-hashtag",title:"Explore",id:"explore",link:"/404"},{icon:"fa-solid fa-bell",title:"Notofication",id:"notifications",link:"/404"},{icon:"fa-solid fa-envelope",title:"Message",id:"envelope",link:"/404"},{icon:"fa-solid fa-bookmark",title:"Bookmarks",id:"bookmark",link:"/404"},{icon:"fa-solid fa-clipboard-list",title:"List",id:"lists",link:"/404"},{icon:"fa-solid fa-user",title:"Profile",id:"profile",link:"/404"},{icon:"fa-solid fa-ellipsis",title:"More",id:"more",link:"/404"}],listTweet:[{name:"Gundul Si Botak",id:"@gundulnanbotak",time:"2hr",tweet:"Saya telah mencoba menyeburkannya namun tetep gundul",photo:"https://randomuser.me/api/portraits/men/82.jpg",comment:"190",repeat:"52",like:"1090",date:"22 July"},{name:"Retno Eyes",id:"@hesebeunta",time:"3hr",tweet:"kemarin pas di kelas saya disangka tidur, padahal saya sedang fokus memperhatikan",photo:"https://randomuser.me/api/portraits/women/90.jpg",comment:"90",repeat:"76",like:"187",date:"22 July"},{name:"Khaerudin",id:"@khaerudin",time:"4hr",tweet:"Alhamdulillah, kajian kali ini gak ada ibu ibu yang tidur, semuanya memperhatikan. Apa mungkin karena saya ganteng ya?",photo:"https://randomuser.me/api/portraits/men/19.jpg",comment:"134",repeat:"67",like:"987",date:"22 July"}],trending:[{title:"Terbang dan tikusruk",top:"Sedang dalam trending Indonesia",bottom:"4K Tweet"},{title:"#TurunkanGengsi",top:"Sedang dalam trending Indonesia",bottom:"1K Tweet"},{title:"#TitinKeJepang",top:"Sedang dalam trending Indonesia",bottom:"2K Tweet"},{title:"Dora",top:"Sedang dalam trending Indonesia",bottom:"2,2K Tweet"},{title:"#PercumaLaporPolisi",top:"Sedang dalam trending Indonesia",bottom:"5,3K Tweet"}],to_follow:[{photo:"https://randomuser.me/api/portraits/men/17.jpg",name:"Danle Sun",id:"@danlesun"},{photo:"https://randomuser.me/api/portraits/women/60.jpg",name:"Siti Futuristi",id:"@sitfuture"},{photo:"https://randomuser.me/api/portraits/women/43.jpg",name:"Triatni Kusuti",id:"@trikusut"}],tweet:[],user:{photo:"https://randomuser.me/api/portraits/men/27.jpg",name:"Who am I?",id:"@whoami?"},months:["January","February","March","April","May","June","July","August","September","October","November","December"]},getters:{},mutations:{uploadTweet:(e,t)=>{const l=new Date;let a={name:e.user.name,id:e.user.id,date:l.getDate(),date_detail:l.getDate()+" "+e.months[l.getMonth()],hour:l.getHours(),minute:l.getMinutes(),time:l,time_post:"",tweet:t,photo:e.user.photo,comment:0,repeat:0,like:0};e.tweet.push(a)}},actions:{uploadTweet:(e,t)=>{setTimeout((function(){e.commit("uploadTweet",t)}),500)}},modules:{}}),_e=l(8125),ke=l(7749),Ce=l(8321),Te=l(2234),je=l(2274);const De={class:"lg:w-1/5 border-r px-2 lg:px-6 py-2 flex-col justify-between"},We={class:"h-12 w-12 text-4xl hover:bg-cyan-100 rounded-full text-cyan-300"},ze={class:"mt-4"},Se=["onClick"],Me={class:"text-lg font-semibold hidden lg:block"},Fe={class:"w-12 h-12 lg:h-auto lg:w-full p-3 bg-cyan-400 item-center text-white rounded-full text-center align-middle m-auto focus:outline-none hover:bg-cyan-400 m-autp"},He=(0,n._)("span",{class:"font-semibold hidden lg:block"},"Tweet",-1),Ke={class:"w-full"},Oe={class:"mt-12 grid grid-rows-2 grid-flow-col px-0 w-full flex hover:bg-gray-200 rounded-full"},Be={class:"row-span-2 relative w-10 h-10"},$e=["src"],Pe={class:"col-span-2 text-sm font-bold leading-tight hidden lg:block"},Ze={class:"col-span-2 flex text-sm leading-tight hidden lg:block"},Ye={class:"row-span-2 tex-center align-middle m-auto text-lg hidden lg:block"};function Ie(e,t,l,a,s,o){const i=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",De,[(0,n._)("div",null,[(0,n._)("button",We,[(0,n.Wm)(i,{icon:"fa-brands fa-twitter"})]),(0,n._)("div",ze,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.menuTabs,(e=>((0,n.wg)(),(0,n.iD)("button",{onClick:t=>(s.id_menu=e.id,o.page_to(e.link)),class:(0,m.C_)("focus:outline-none hover:bg-cyan-100 flex items-center py-2 px-3 mb-2 rounded-full mr-auto w-full "+(s.id_menu===e.id?"text-cyan-300":"")),key:e.id},[(0,n.Wm)(i,{icon:e.icon,class:"mr-4 text-left"},null,8,["icon"]),(0,n._)("p",Me,(0,m.zw)(e.title),1)],10,Se)))),128))]),(0,n._)("button",Fe,[He,(0,n.Wm)(i,{icon:"fa-solid fa-plus",class:"block lg:hidden text-center m-auto"})])]),(0,n._)("div",Ke,[(0,n._)("div",Oe,[(0,n._)("div",Be,[(0,n._)("img",{class:"rounded-full border border-gray-100 shadow-sm",src:o.userData.photo,alt:"user image"},null,8,$e)]),(0,n._)("div",Pe,(0,m.zw)(o.userData.name),1),(0,n._)("div",Ze,(0,m.zw)(o.userData.id),1),(0,n._)("div",Ye,[(0,n.Wm)(i,{icon:"fa-solid fa-ellipsis"})])])])])}var Je={name:"SideBar",component:{},data(){return{id_menu:"home"}},methods:{page_to:function(e){this.$router.push({path:e})}},computed:{menuTabs(){return this.$store.state.menuTabs},userData(){return this.$store.state.user}}};const Ue=(0,i.Z)(Je,[["render",Ie]]);var Ae=Ue;const Ne={class:"md:block hidden w-1/3 h-full border-l border-2 py-2 px-6 overflow-y-scroll"},Le={class:"mb-4 relative"},Ee=(0,n._)("input",{type:"text",class:"pl-10 rounded-full w-full p-2 bg-gray-100 text-sm",placeholder:"Search Twitter"},null,-1),Ge={class:"w-full rounded-lg bg-gray-100"},Ve=(0,n._)("div",{class:"flex items-center justify-between p-3"},[(0,n._)("p",{class:"text-lg font-bold"},"Trending Untuk Anda")],-1),qe={class:"text-sm text-left leading-tight text-gray-600"},Re={class:"font-bold text-left leading-tight"},Qe={class:"text-left leading-tight text-gray-600 text-sm"},Xe=(0,n._)("button",{class:"p-3 w-full hover:bg-cyan-300 text-left text-cyan-300 hover:text-white border-t hover:rounded-br hover:rounded-bl"}," Show More ",-1),et={class:"w-full rounded-lg bg-gray-100 mt-10"},tt=(0,n._)("div",{class:"items-center justify-between p-3"},[(0,n._)("p",{class:"text-lg font-bold"},"Who To Follow")],-1),lt=["src"],at={class:"flex hidden lg:block ml-2"},nt={class:"hidden lg:block ml-5"},st={class:"font-bold text-left"},ot={class:"text-sm text-left text-gray-500"},it=(0,n._)("div",{class:"flex text-bold ml-auto text-blue-400 py-1 px-4 rounded-full bg-white hover:bg-cyan-400 hover:text-white justify-between"}," Follow ",-1),rt=(0,n._)("button",{class:"p-3 w-full hover:bg-cyan-300 text-left text-cyan-300 hover:text-white border-t hover:rounded-br hover:rounded-bl"}," Show More ",-1);function ut(e,t,l,a,s,o){const i=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",Ne,[(0,n._)("div",Le,[(0,n.Wm)(i,{icon:"fa-solid fa-magnifying-glass",class:"absolute left-0 -top-2 mt-5 ml-3 text-sm bg-gray-100 font-light pointer-events-none",style:{right:"27.5%"}}),Ee]),(0,n._)("div",Ge,[Ve,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.trending,(e=>((0,n.wg)(),(0,n.iD)("button",{class:"w-full flex justify-between hover:bg-cyan-300 p-3 border-t",key:e.title},[(0,n._)("div",null,[(0,n._)("p",qe,(0,m.zw)(e.top),1),(0,n._)("p",Re,(0,m.zw)(e.title),1),(0,n._)("p",Qe,(0,m.zw)(e.bottom),1)]),(0,n.Wm)(i,{icon:"fa-solid fa-ellipsis",class:"text-lg text-gray-600"})])))),128)),Xe]),(0,n._)("div",et,[tt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.to_follow,(e=>((0,n.wg)(),(0,n.iD)("button",{class:"w-full flex hover:bg-cyan-300 p-3 border-t",key:e.id},[(0,n._)("img",{class:"w-14 h-14 rounded-full border border-gray-100 shadow-sm",src:e.photo,alt:"user image"},null,8,lt),(0,n._)("div",at,[(0,n._)("div",nt,[(0,n._)("p",st,(0,m.zw)(e.name),1),(0,n._)("p",ot,(0,m.zw)(e.id),1)])]),it])))),128)),rt])])}var ct={name:"TrendingPage",computed:{trending(){return this.$store.state.trending},to_follow(){return this.$store.state.to_follow}}};const dt=(0,i.Z)(ct,[["render",ut]]);var mt=dt;_e.vI.add(Ce.A$k,je.m6i,Ce.jHE,je.vto,Ce.BC0,Ce.J9Y,Ce.olY,Ce.qmU,Ce.FU$,Ce.xVw,Ce.OGB,Ce.ILF,Ce.S6C,Te.mdU,Ce.r8p,Ce.wn1,Ce.Y$T,Ce.Tab,je.VmB,je.koM,je.pkM,je.fT7,Ce.opg),(0,a.ri)(c).use(ye).use(be).component("font-awesome-icon",ke.GN).component("SideBar",Ae).component("TrendingPage",mt).mount("#app")}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,l),s.exports}l.m=e,function(){var e=[];l.O=function(t,a,n,s){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],s=e[c][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<o&&(o=s));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,n,s]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,s,o=a[0],i=a[1],r=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(r)var c=r(l)}for(t&&t(a);u<o.length;u++)s=o[u],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(c)},a=self["webpackChunkvue_twit"]=self["webpackChunkvue_twit"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(5077)}));a=l.O(a)})();
//# sourceMappingURL=app.061c2533.js.map