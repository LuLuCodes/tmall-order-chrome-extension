<template>
  <el-button type="primary" class="greet" @click="getCookie">下单中</el-button>
</template>

<script>
import $ from 'jquery';
import { wait } from '../../utils';
import { storageGet, tb_sign } from '../../utils';
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  mounted() {
    // $(document).ready(async () => {
    //   await wait(5000);
    //   this.buy();
    // });
    chrome.runtime.sendMessage({
      action: 'getCookies',
      url: 'https://member1.taobao.com/member/fresh/deliver_address.htm',
    });
  },
  methods: {
    async getCookie() {
      const cookies = await storageGet('current_page_cookies');
      // console.log(JSON.stringify(cookies));
      const cookiesStr = cookies.reduce((prev, cur) => {
        return prev + `${cur.name}=${cur.value};`;
      }, '');
      console.log(cookiesStr);
      const appKey = '27769795';
      const token = cookies
        .filter(item => {
          return item.name === '_m_h5_tk';
        })[0]
        .value.split('_')[0];
      const time = new Date().getTime();
      const dataStr = JSON.stringify({
        divisionCode: '120103001',
        townDivisionCode: '120103001',
        detailDivisionCode: '',
        addressDetail: '富润路300号',
        postCode: '311877',
        overseaAddress: false,
        fullName: '钱卿',
        mobileCode: 86,
        mobile: '13758087094',
        phoneInternationalCode: 86,
        phoneAreaCode: '',
        phoneNumber: '',
        phoneExtension: '',
        defaultDeliverAddress: true,
        acceptAddressName: true,
        province: '天津',
        city: '天津市',
        area: '河西区',
        town: '大营门街道',
      });
      const sign = tb_sign(token, time, appKey, dataStr);
      let url =
        'https://h5api.m.taobao.com/h5/mtop.taobao.mbis.insertdeliveraddress/1.0/?jsv=2.5.1&appKey=27769795&t=' +
        time +
        '&sign=' +
        sign +
        '&api=mtop.taobao.mbis.insertDeliverAddress&v=1.0&ecode=1&needLogin=true&timeout=20000&dataType=jsonp&type=jsonp&callback=mtopjsonp20&data=' +
        encodeURIComponent(dataStr);
      console.log(url);
      const res = await axios({
        method: 'get',
        url,
      });
      console.log(res.data);
    },
    async buy() {
      // window.$('.operation.TwoRow').click();
      $("a:contains('显示全部地址')")[0].click();
      await wait(1000);
      const node = $("a:contains('管理收货地址')")[0].getAttribute('href');
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
