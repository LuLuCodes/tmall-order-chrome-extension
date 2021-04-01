<template>
  <el-button type="primary" class="greet">选择商品中</el-button>
</template>

<script>
import $ from 'jquery';
import { wait, storageGet } from '../../utils';

export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  mounted() {
    $(document).ready(async () => {
      await wait(5000);
      this.buy();
    });
  },
  methods: {
    async buy() {
      const goods_sku = await storageGet('goods_sku');
      console.log(1111);
      console.log(goods_sku);
      $("span:contains('" + goods_sku + "')")[0].click();
      await wait(1000);
      console.log($('#J_LinkBuy'));
      $('#J_LinkBuy')[0].click();
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
