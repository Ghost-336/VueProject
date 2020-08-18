<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="route in $route.matched" :key="route.path">
        {{route.meta.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
