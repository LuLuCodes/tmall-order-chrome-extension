// 模拟同步sleep机制
export function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export function storageSet(data) {
  return new Promise((resolve, reject) => {
    window.chrome.storage.local.set(data, function() {
      resolve();
    });
  });
}

export function storageGet(key) {
  return new Promise((resolve, reject) => {
    window.chrome.storage.local.get([key], function(result) {
      resolve(result[key]);
    });
  });
}
