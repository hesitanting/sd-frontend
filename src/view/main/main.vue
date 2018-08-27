<template>
  <Layout style="height: 100%" class="main">
    <Layout>
      <Header class="header-con">
         <side-menu accordion ref="sideMenu" :active-name="$route.name" @on-select="turnToPage" :menu-list="menuList">
           <p slot="othercontent">
              <user :user-avator="userAvator" style="float:right"/>
              <fullscreen v-model="isFullscreen" style="float:right"/>
           </p>
           </side-menu>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from './components/side-menu'
import User from './components/user'
import Fullscreen from './components/fullscreen'
import { mapActions } from 'vuex'
import { getNextRoute, routeEqual } from '@/libs/util'
import logo from '@/assets/images/logo-min.png'
import './main.less'
export default {
  name: 'Main',
  components: {
    SideMenu,
    Fullscreen,
    User
  },
  data () {
    return {
      logo,
      isFullscreen: false
    }
  },
  computed: {
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    tagRouter () {
      return this.$store.state.app.tagRouter
    },
    userAvator () {
      return this.$store.state.user.avatorImgPath
    },
    cacheList () {
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
    },
    menuList () {
      return this.$store.getters.menuList
    }
  },
  methods: {
    // ...mapMutations([
    //   'setTagNavList'
    // ]),
    ...mapActions([
      'handleLogin'
    ]),
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    handleCloseTag (res, type, route) {
      let openName = ''
      if (type === 'all') {
        this.turnToPage('home')
        openName = 'home'
      } else if (routeEqual(this.$route, route)) {
        if (type === 'others') {
          openName = route.name
        } else {
          const nextRoute = getNextRoute(this.tagNavList, route)
          this.$router.push(nextRoute)
          openName = nextRoute.name
        }
      }
      this.$refs.sideMenu.updateOpenName(openName)
    },
    handleClick (item) {
      this.turnToPage(item)
    }
  },
  watch: {
  },
  mounted () {

  }
}
</script>
