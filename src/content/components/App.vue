<template>
  <el-button
    type="primary"
    class="greet"
    @click="handler"
  >{{ running ? '停止采集' : '开始采集' }}({{ num }})</el-button>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      running: false,
      num: 0,
      timer: null,
    };
  },
  mounted() {
    this.num = window.localStorage.getItem('num');
    this.running = window.localStorage.getItem('running');
    this.running = this.running === 'true';
    if (this.num) {
      this.num = parseInt(this.num);
    }
    if (this.running) {
      setTimeout(() => {
        this.run();
      }, 120 * 1000);
    }
  },
  methods: {
    async handler() {
      if (this.running) {
        this.running = false;
        window.localStorage.setItem('running', this.running);
        this.num = 0;
        window.localStorage.setItem('num', 0);
      } else {
        this.running = true;
        window.localStorage.setItem('running', this.running);
        this.run();
      }
    },
    async run() {
      this.num++;
      window.localStorage.setItem('num', this.num++);
      window.location.reload();
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
