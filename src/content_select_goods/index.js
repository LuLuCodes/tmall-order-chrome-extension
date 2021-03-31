import Vue from 'vue';
import App from './components/App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import insert from '@/utils/insert';
import stroe from '@/mixins/store';
import $ from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = $;
// 注入js到页面
injectJS();
Vue.use(ElementUI);
Vue.mixin(stroe);

// 插入组件到页面中
insert(App);

function injectJS() {
  document.addEventListener('readystatechange', () => {
    const injectPath = 'inject.js';
    const temp = document.createElement('script');

    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(injectPath);
    document.body.appendChild(temp);
  });
}
