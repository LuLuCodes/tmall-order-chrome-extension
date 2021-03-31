<template>
  <el-button type="primary" class="greet" @click="handlerStart">开始付款</el-button>
</template>

<script>
// import { wait } from '../../utils';
// import cheerio from 'cheerio';
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
  methods: {
    async handlerStart() {
      // window.location.href = this.url;
      window.jQuery('#payPassword_rsainput').val('111203');
      window.jQuery('#J_authSubmit')[0].click();
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
