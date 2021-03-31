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
        'thw=cn; UM_distinctid=175dfb75ccbae0-0b1f0ca8d22ec9-7f63045b-1aeaa0-175dfb75cccbd; ucn=center; _samesite_flag_=true; t=2900ad935ecbe15d82e4274f9ae0916d; cookie2=1284b467ea6512b1049f4b4fa6df6b93; _tb_token_=37e3ff5ee650b; xlly_s=1; enc=qcjDWgpFlOzicBb%2BfS1sA2WkxAz%2FHyweRbfIAeOJFMXEqkenAKfFpYnKqI%2BKzLTJ%2FPSmy6e9cedDwuCev%2BGbbA%3D%3D; cna=9Q0bF3m3NiUCAXrhPOYsg+sI; lgc=qianqingchenzhen; dnk=qianqingchenzhen; tracknick=qianqingchenzhen; mt=ci=8_1; v=0; sgcookie=E100BHCToaIn2lgrHKG2JqQyfCxBAyQn974ZkzC3loudKlkYzgUi2X%2BlRKYZoqZooDxW%2B8WsEJG7NFg29g43D0aLzw%3D%3D; unb=56254000; uc3=vt3=F8dCuAtXitq3IZrq%2BqE%3D&nk2=EvywP6uAFiL5oqgzHHukAw%3D%3D&lg2=VFC%2FuZ9ayeYq2g%3D%3D&id2=Vvj868QKDW8%3D; csg=1afd1234; cookie17=Vvj868QKDW8%3D; skt=689e27d0e2eafdfc; existShop=MTYxNzA2NzY0MQ%3D%3D; uc4=id4=0%40VH758OXWXGk3FHJaSyeVbXt9xQ%3D%3D&nk4=0%40EIOda2PUfiDlAjhRHek63q%2F80Q60kEl247u%2F; _cc_=Vq8l%2BKCLiw%3D%3D; _l_g_=Ug%3D%3D; sg=n0b; _nk_=qianqingchenzhen; cookie1=AVNdPPcPXfDkNsqIgsX%2FfxSOWp1sLQTOp9bU0lAXpiI%3D; _m_h5_tk=d0d65aa28f6e5a46ea2ab4d9617ff704_1617081813868; _m_h5_tk_enc=2ab9591de2ca859bcc18ad0835ce5c6e; uc1=cookie16=Vq8l%2BKCLySLZMFWHxqs8fwqnEw%3D%3D&existShop=false&cookie21=V32FPkk%2FhoKl0I0qsIQ%3D&cookie15=VFC%2FuZ9ayeYq2g%3D%3D&cookie14=Uoe1hdEbSOPVzQ%3D%3D&pas=0; tfstk=cxqcBm4JIbOB4bguRiibhGbqf61Ra5OttPzu4lbqov-0verS3sm9zelWD_cfIYY1.; l=eBxAfASljhYlCzMUBO5Zourza77t3IOb8sPzaNbMiInca1PFTnvd6NCQ0e_B7dtjgtfYietyL--izREv5jzLSxMc7djSi8nBhu96-; isg=BHp6kveLzpc_L0LAJa-jv92ry6acK_4F0yO6jIRyMI3OdxuxbLlRFaTBxwOrZ3ad',
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
