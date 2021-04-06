const axios = require('axios');
async function getHtml() {
  const res = await axios({
    method: 'get',
    url:
      'https://h5api.m.taobao.com/h5/mtop.taobao.mbis.insertdeliveraddress/1.0/?jsv=2.5.1&appKey=27769795&t=1617354246234&sign=a3d216af871987099946ee913b359a37&api=mtop.taobao.mbis.insertDeliverAddress&v=1.0&ecode=1&needLogin=true&timeout=20000&dataType=jsonp&type=jsonp&callback=mtopjsonp14&data=%7B%22divisionCode%22%3A%22120102001%22%2C%22townDivisionCode%22%3A%22120102001%22%2C%22detailDivisionCode%22%3A%22%22%2C%22addressDetail%22%3A%22%E5%AF%8C%E6%B6%A6%E8%B7%AF300%E5%8F%B7%22%2C%22postCode%22%3A%22311877%22%2C%22overseaAddress%22%3Afalse%2C%22fullName%22%3A%22%E9%92%B1%E5%8D%BF%22%2C%22mobileCode%22%3A86%2C%22mobile%22%3A%2213758087094%22%2C%22phoneInternationalCode%22%3A86%2C%22phoneAreaCode%22%3A%22%22%2C%22phoneNumber%22%3A%22%22%2C%22phoneExtension%22%3A%22%22%2C%22defaultDeliverAddress%22%3Atrue%2C%22acceptAddressName%22%3Atrue%2C%22province%22%3A%22%E5%A4%A9%E6%B4%A5%22%2C%22city%22%3A%22%E5%A4%A9%E6%B4%A5%E5%B8%82%22%2C%22area%22%3A%22%E6%B2%B3%E4%B8%9C%E5%8C%BA%22%2C%22town%22%3A%22%E5%A4%A7%E7%8E%8B%E5%BA%84%E8%A1%97%E9%81%93%22%7D',
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      cookie:
        '_samesite_flag_=true; t=2900ad935ecbe15d82e4274f9ae0916d; cookie2=1284b467ea6512b1049f4b4fa6df6b93; _tb_token_=eee3e1e7dfe39; enc=l%2F7VUkEgdSzj9v3cYoMBd%2BU5U1YuMZGn5cDnEZtyvnmWyR9J13G%2BFPRe25LiUGaZdsQTAyH4Bbh2AD63OyQ4og%3D%3D; xlly_s=1; _m_h5_tk=a0f019740687b0d5bc4ec2e41693997b_1617355192990; _m_h5_tk_enc=c66abbf8c7d143e882ab0690681542c9; cna=9Q0bF3m3NiUCAXrhPOYsg+sI; lgc=qianqingchenzhen; dnk=qianqingchenzhen; tracknick=qianqingchenzhen; mt=ci=9_1; x5sec=7b226d746f703b32223a226461383665326465303661623439643838623636653961653435303031656665434e537a6d344d4745494437734e763879747a4876414561436a55324d6a55304d4441774f7a4577783969623277453d227d; sgcookie=E1003xzki4Cfj%2BzCXQFc7JZ86VWo8Qk3CpZywB7scSiRZGpKQdk9%2BA6piTP8QysXHtLohLmvnHHDhZxgzZsQ%2BfZWlw%3D%3D; unb=56254000; uc3=vt3=F8dCuAtYSb7aROR2rB8%3D&lg2=Vq8l%2BKCLz3%2F65A%3D%3D&nk2=EvywP6uAFiL5oqgzHHukAw%3D%3D&id2=Vvj868QKDW8%3D; csg=6384362e; cookie17=Vvj868QKDW8%3D; skt=3d63eae43c57c1f5; existShop=MTYxNzM1NDA2Nw%3D%3D; uc4=nk4=0%40EIOda2PUfiDlAjhRHek63q%2F80Q60k3DRLgcI&id4=0%40VH758OXWXGk3FHJaSyQXprN6Ug%3D%3D; _cc_=URm48syIZQ%3D%3D; _l_g_=Ug%3D%3D; sg=n0b; _nk_=qianqingchenzhen; cookie1=AVNdPPcPXfDkNsqIgsX%2FfxSOWp1sLQTOp9bU0lAXpiI%3D; uc1=pas=0&cookie15=WqG3DMC9VAQiUQ%3D%3D&cookie14=Uoe1hdI6oC90fA%3D%3D&existShop=false&cookie21=W5iHLLyFfXCagRWZKCM%3D&cookie16=URm48syIJ1yk0MX2J7mAAEhTuw%3D%3D; isg=BISEfzV9uBHEtwzi31k1_Rf1VQR2nagHyU30bp4nq88SyS-Tzqw0lsMvCWERUeBf',
    },
  });
  return res;
}

(async () => {
  const res = await getHtml();
  console.log(res.data);
})();
