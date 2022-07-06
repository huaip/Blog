<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar
        url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.banbaowang.com%2Fuploads%2Fallimg%2F200605%2F32-200605142521.jpg&refer=http%3A%2F%2Fpic.banbaowang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658402955&t=42e343f75ccd042684e88df0077bdf12"
      />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>

    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
