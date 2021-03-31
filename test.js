const axios = require('axios');
const iconv = require('iconv-lite');
async function getHtml() {
  const res = await axios({
    method: 'get',
    url:
      'https://trade.tmall.com/detail/orderDetail.htm?spm=a1z09.2.0.0.4a402e8dbm018n&bizOrderId=1684293590927250040',
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      cookie:
        'cna=9Q0bF3m3NiUCAXrhPOYsg+sI; hng=CN%7Czh-CN%7CCNY%7C156; t=2900ad935ecbe15d82e4274f9ae0916d; cookie2=1284b467ea6512b1049f4b4fa6df6b93; login=true; enc=Wy7qCDIdf8hMba0vDusmNU8jkilBOu9BTtZyWP4zAgnEam600CoW1%2B4UJd7p5X%2FzXqEbZW3j7JURIONYNVH7kQ%3D%3D; UM_distinctid=1786e0062a2207-046b150406692d-1a416c7a-1aeaa0-1786e0062a340a; _m_h5_tk=f306912780fb54bd9f1be3e8ccb8add6_1616760445020; _m_h5_tk_enc=2c5d23bfc3202667540d7b56bf396d4b; sm4=330105; xlly_s=1; dnk=qianqingchenzhen; uc1=pas=0&existShop=false&cookie14=Uoe1hdEdP9%2B6vQ%3D%3D&cookie16=VFC%2FuZ9az08KUQ56dCrZDlbNdA%3D%3D&cookie15=Vq8l%2BKCLz3%2F65A%3D%3D&cookie21=V32FPkk%2FhoKl0I0qsIQ%3D; uc3=id2=Vvj868QKDW8%3D&lg2=V32FPkk%2Fw0dUvg%3D%3D&vt3=F8dCuAtXj5Zq0k1hqH0%3D&nk2=EvywP6uAFiL5oqgzHHukAw%3D%3D; tracknick=qianqingchenzhen; lid=qianqingchenzhen; _l_g_=Ug%3D%3D; uc4=nk4=0%40EIOda2PUfiDlAjhRHek63q%2F80Q60kE5oOPjr&id4=0%40VH758OXWXGk3FHJaSyeSSSnVQQ%3D%3D; unb=56254000; lgc=qianqingchenzhen; cookie1=AVNdPPcPXfDkNsqIgsX%2FfxSOWp1sLQTOp9bU0lAXpiI%3D; cookie17=Vvj868QKDW8%3D; _nk_=qianqingchenzhen; sgcookie=E100oLaE3tYWnfHOg%2F33CRW9ldoUn7KYfrV2CQbyHPXvpBEbHqxLGQQJbvqANNl7v9fd96tViml3v3%2BhZhkT4bU7IQ%3D%3D; sg=n0b; csg=8bdc5476; _tb_token_=37e3ff5ee650b; ucn=center; tfstk=cDUhB792lA9XJeogcwgQO54jInjAZP9-nurg7z22UI1jb0zNin-w0u55Iv1os31..; l=eB_xxZP4QApqrlw2BOfZnurza779IIRAguPzaNbMiOCP9Q1H5-wFW6ZXQbYMCnGVh64wJ3JU3h0yBeYBcn06rVm_t1tvtBDmn; isg=BKSkFcVYmHaB29LNu9zfby74daSWPcinKe2Uzr7FMm8yaUQz50m5NsHLLcHxsQD_',
    },
    responseType: 'stream',
  });

  // 返回一个promise实例对象
  return new Promise(resolve => {
    const chunks = [];

    res.data.on('data', chunk => {
      chunks.push(chunk);
    });

    res.data.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const str = iconv.decode(buffer, 'gbk');
      resolve(str);
    });
  });
}

(async () => {
  const res = await getHtml();
  console.log(res);
})();
