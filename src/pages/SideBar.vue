<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      @select="handleSelect"
      router
    >
      <el-menu-item  index="/main">首页</el-menu-item>
      <el-submenu index="event">
        <template slot="title">活动</template>
        <el-menu-item index="/event/create">创建</el-menu-item>
        <el-menu-item index="/event/list">管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">账户</template>
        <el-menu-item index="3-1">账户充值</el-menu-item>
        <el-menu-item index="3-2">账户信息</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
</style>
