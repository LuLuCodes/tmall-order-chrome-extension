import crypto from 'crypto';

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

export function randomNum(aryNum = [1, 1]) {
  if (typeof aryNum === 'number') {
    return aryNum;
  } else if (aryNum instanceof Array) {
    let minNum = 0;
    let maxNum = 0;
    switch (aryNum.length) {
      case 1:
        [minNum] = aryNum;
        return parseInt(Math.random() * minNum + 1, 10);
      case 2:
        [minNum, maxNum] = aryNum;
        if (minNum === maxNum) {
          return minNum;
        } else {
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        }
      default:
        return 0;
    }
  }
}

export function tb_md5(data) {
  const md5 = crypto.createHash('md5');
  md5.update(data);
  const str = md5.digest('hex');
  return str.toLowerCase();
}

export function tb_sign(token, time, appKey, dataStr) {
  return tb_md5(`${token}&${time}&${appKey}&${dataStr}`);
}
