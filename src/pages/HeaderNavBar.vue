<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">活动</template>
        <el-menu-item index="2-1">创建</el-menu-item>
        <el-menu-item index="2-2">管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">账户</template>
        <el-menu-item index="2-1">账户充值</el-menu-item>
        <el-menu-item index="2-2">账户信息</el-menu-item>
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