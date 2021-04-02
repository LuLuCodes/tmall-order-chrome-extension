import installReload from './hmr';
import installRequest from './request';

// 安装热刷新功能
installReload();
installRequest();
console.log(123123123);
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender, sendResponse);

  sendResponse('我是后台，我已收到你的消息：' + JSON.stringify({ ok: true }));
});
