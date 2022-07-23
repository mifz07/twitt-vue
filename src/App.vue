<template>
  <div class="flex container h-screen w-full">
    <SideBar />
      <router-view :key="$route.path"></router-view>
    <TrendingPage />
  </div>
</template>

