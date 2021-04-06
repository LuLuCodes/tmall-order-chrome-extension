import installReload from './hmr';
import installRequest from './request';
import { storageSet } from '../../utils';

// 安装热刷新功能
installReload();
installRequest();
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { action } = request;
  switch (action) {
    case 'getCookies':
      getCookies(action.url || sender.url, sendResponse);
      break;
    default:
      break;
  }
});

function getCookies(url, sendResponse) {
  chrome.cookies.getAll({ domain: 'taobao.com' }, async cookies => {
    console.log(cookies);
    await storageSet({ current_page_cookies: cookies });
  });
  sendResponse({ success: true });
}
