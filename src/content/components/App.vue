<template>
  <el-button type="primary" class="greet" @click="handlerStart">开始采集</el-button>
</template>

<script>
import { wait } from '../../utils';
import cheerio from 'cheerio';
export default {
  name: 'App',

  components: {},

  data() {
    return {
      url: ``,
      startTime: '2021-03-21',
      endTime: '2021-03-21',
    };
  },
  mounted() {
    this.url = `https://pub.alimama.com/manage/effect/overview_orders.htm?jumpType=0&positionIndex=&pageNo=1&startTime=${this.startTime}&endTime=${this.endTime}`;
  },
  methods: {
    async handlerStart() {
      // window.location.href = this.url;
      await this.getData();
    },
    async getData() {
      await wait(5000);
      const html = document.body.innerHTML;
      const _ = cheerio.load(html);
      const tr_list = _('tbody tr');
      for (const tr of tr_list) {
        const td0 = _(tr)
          .find('td')
          .eq(0);
        const img = td0
          .children()
          .first()
          .find('img')
          .attr('src');
        const title_node = td0
          .children()
          .first()
          .children()
          .last()
          .children()
          .first()
          .children()
          .first();

        const title = title_node.find('p a').text();
        const shop_node = title_node.next();
        const shop = shop_node.find('p').text();
        const price_node = shop_node.next();
        const pay_price_node = price_node
          .children()
          .first()
          .find('span');
        const pay_price = `${_(pay_price_node[2]).text()}${_(
          pay_price_node[3],
        ).text()}${_(pay_price_node[4]).text()}`;
        const pay_time = `${_(pay_price_node[5]).text()}`;
        let settlement_price = '';
        let settlement_time = '';
        if (price_node.children().length === 2) {
          const settlement_price_node = price_node
            .children()
            .last()
            .find('span');
          settlement_price = `${_(settlement_price_node[2]).text()}${_(
            pay_price_node[3],
          ).text()}${_(settlement_price_node[4]).text()}`;
          settlement_time = `${_(settlement_price_node[5]).text()}`;
        }

        console.log({
          商品名称: title,
          商品图片: img,
          店铺名称: shop,
          付款金额: pay_price,
          付款时间: pay_time,
          结算金额: settlement_price,
          结算时间: settlement_time,
        });
      }
      const h = window.$(document).height() - window.$(window).height();
      window.$(document).scrollTop(h);
      if (!window.$('li[mxa="pub-three):b"] .pub-threeil').length) {
        window.$('li[mxa="pub-three):b"] a')[0].click();
        await this.getData();
      }
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
