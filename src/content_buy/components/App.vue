<template>
  <el-button type="primary" class="greet">下单中</el-button>
</template>

<script>
import { wait } from '../../utils';

export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  mounted() {
    window.$(document).ready(async () => {
      await wait(5000);
      this.buy();
    });
  },
  methods: {
    async buy() {
      // window.$('.operation.TwoRow').click();
      window.$("a:contains('显示全部地址')")[0].click();
      await wait(1000);
      const node = window
        .$("a:contains('管理收货地址')")[0]
        .getAttribute('href');
      console.log(node);
      // await wait(5000);
      // window.$('.cndzk-entrance-division-header-click-input').click();
      // await wait(1000);
      // window.$("li:contains('浙江省')")[0].click();
      // await wait(1000);
      // window.$("li:contains('嘉兴市')")[0].click();
      // await wait(1000);
      // window.$("li:contains('南湖区')")[0].click();
      // await wait(1000);
      // window.$("li:contains('东栅街道')")[0].click();
      // await wait(1000);
      // window
      //   .$('.cndzk-entrance-associate-area-textarea')
      //   .val('富润路300号嘉兴电子商务产业园3号园403麦云科技');
      // window.$('.cndzk-entrance-associate-area-textarea').innerHTML =
      // '富润路300号嘉兴电子商务产业园3号园403麦云科技';
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.greet {
  position: fixed;
  left: auto;
  right: 50px;
  bottom: 10px;
  z-index: 2147483647;
}
</style>
