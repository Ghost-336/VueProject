<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <img class="logo" src="../assets/logo.png" alt="">
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
            <header-nav-bar/>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <side-bar/>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import HeaderNavBar from '../pages/HeaderNavBar'
import SideBar from '../pages/SideBar'

export default {
  name: 'Index',
  components: {
    HeaderNavBar,
    'SideBar': SideBar
  }
}
</script>

<style>
  .logo{
    width:60px;
    margin-left:80px;
  }
</style>
