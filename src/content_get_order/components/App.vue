<template>
  <el-button
    type="primary"
    class="greet"
    @click="handlerStart"
  >{{ working ? '接单中' : '开始接单' }}</el-button>
</template>

<script>
import { storageSet, storageGet } from '../../utils';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      working: false,
      timer: null,
      goods_url:
        'https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.16.1e40188eWbtmyP&id=545252874886&skuId=4549181673653&areaId=330400&user_id=2200070681&cat_id=2&is_b=1&rn=bc236519f09bb2d654061787ae248e0d',
    };
  },
  async mounted() {
    const goods_sku = await storageGet('goods_sku');
    console.log('goods_sku: ', goods_sku);
    this.working = await storageGet('working');
    console.log(this.working);
    if (this.working) {
      this.getOrder();
    }
  },
  methods: {
    async handlerStart() {
      if (this.working) {
        this.working = false;
        await storageSet({ working: false });
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      } else {
        this.getOrder();
      }
    },
    async getOrder() {
      this.working = true;
      await storageSet({ working: true });
      this.timer = setInterval(async () => {
        await storageSet({ goods_url: this.goods_url });
        await storageSet({
          goods_sku: '【袋装更方便】 亲嘴烧混合口味300g×5袋装/共约125片',
        });
        window.location.href = this.goods_url;
      }, 10 * 1000);
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
