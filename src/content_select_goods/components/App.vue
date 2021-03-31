<template>
  <el-button type="primary" class="greet" @click="hanlder">购买中</el-button>
</template>

<script>
import { wait, storageGet } from '../../utils';

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
      const goods_sku = await storageGet('goods_sku');
      window.$("span:contains('" + goods_sku + "')")[0].click();
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
