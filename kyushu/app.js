'use strict';
// 静态数据内联：直接打开 index.html 也可使用，无需服务器、API 密钥或请求。
const sources = {
  tram: ['长崎电铁：2026 路线与票价 PDF', 'https://www.naga-den.com/relays/download/9/1789/155//?file=%2Ffiles%2Flibs%2F6996%2F%2F202603271529469650.pdf'],
  jr: ['JR 九州：列车 / 周游券', 'https://www.jrkyushu.co.jp/english/railpass/railpass.html'],
  airport: ['福冈机场：地铁与航站楼接驳', 'https://www.fukuoka-airport.jp/en/access/subway.html'],
  rope: ['长崎缆车：预约接驳', 'https://reserve.nagasaki-ropeway.jp/en/'],
  inasa: ['长崎市：稻佐山交通', 'https://www.city.nagasaki.lg.jp/page/79583.html'],
  inasaStatus: ['稻佐山：索道 / 斜坡车当日运航', 'https://inasayama.info/'],
  ferry: ['关门汽船：时刻 / 票价 / 运航', 'https://www.kanmon-kisen.co.jp/route/kanmon.html'],
  market: ['唐户市场：活动与营业', 'https://www.karatoichiba.com/'],
  marketUpdate: ['唐户寿司活动：2026 新开场时间', 'https://www.karatoichiba.com/news/8050/'],
  sara: ['皿仓山：交通 / 运航 / 休业', 'https://www.sarakurayama-cablecar.co.jp/access/'],
  shuttle: ['皿仓山：八幡免费接驳时刻', 'https://www.sarakurayama-cablecar.co.jp/shuttlebus/'],
  wakato: ['若户渡船：时刻与运航', 'https://www.city.kitakyushu.lg.jp/shisei/menu01_0513.html'],
  peace: ['长崎市：和平公园', 'https://www.city.nagasaki.lg.jp/page/44706.html'],
  tanga: ['旦过市场：2026 店铺地图与施工信息', 'https://www.city.kitakyushu.lg.jp/contents/27200254.html'],
  saraFare: ['皿仓山：交通票价与常见问题', 'https://www.sarakurayama-cablecar.co.jp/faq/'],
  monorail: ['北九州单轨：旦过站票价', 'https://www.kitakyushu-monorail.co.jp/schedule/tanga.php']
};
const R = (line, direction, from, to, duration, time, transfer = '无换乘', note = '', mode = 'transit', mapFrom = from, mapTo = to, official = '') => ({line,direction,from,to,duration,time,transfer,note,mode,mapFrom,mapTo,official});
const W = (from,to,time,duration='约 10–15 分钟',note='') => R('步行','前往目的地',from,to,duration,time,'无换乘',note,'walking');
const A = (time,title,description,routes) => ({time,title,description,routes});
const days = [
 {n:1,city:'fukuoka',label:'福冈 → 长崎',title:'入境九州，沿铁道去长崎',summary:'首日只安排交通、入住与港边散步。假设白天抵达福冈；晚到时把长崎移到次日，不赶末班。',stay:'长崎站周边 · 第 1 晚',food:'晚饭选长崎什锦面 champon、皿乌冬；抵达后在车站附近解决，不追热门排队店。',rain:'雨天取消港边散步，直接入住休息。若航班晚到，住博多并重新调整后续住宿。',sources:['airport','jr'],activities:[
 A('按实际航班','国际楼 → 国内楼 → 博多','国际航站楼没有直通地铁；先入境、取行李，再乘免费航站楼接驳。建议入境后预留 60–90 分钟到达博多站，不包含航班延误。',[
 R('机场免费航站楼接驳巴士','国内线航站楼方向','福岡空港国際線ターミナル','福岡空港国内線ターミナル','车程约 10–15 分钟，另加等车','完成入境后','国内线下车后按地下铁标识到 B2','接驳受道路交通影响，国际线没有楼内地铁入口。','transit'),
 R('福冈市地下铁 · 空港线','姪浜 / 唐津方向','福岡空港駅','博多駅','乘车约 5–6 分钟','到达国内线后','无换乘','不要坐错七隈线；博多下车后跟随 JR 标识。')]),
 A('建议 12:00–14:00','博多 → 武雄温泉 → 长崎','先吃午饭再搭长途列车。两段列车在武雄温泉衔接，不是从博多一车直达的“西九州新干线”。',[
 R('JR 特急 Relay Kamome（リレーかもめ）','武雄温泉方向','博多駅','武雄温泉駅','约 60–75 分钟','按航班与 JR 班次','武雄温泉换乘 Kamome','买联程票并确认两段座位；站台由车次决定，不固定写死。'),
 R('西九州新干线 Kamome（かもめ）','长崎方向','武雄温泉駅','長崎駅','约 25–35 分钟','衔接前段列车','武雄温泉通常同站台对面换乘，听从现场指引','博多到长崎合计通常约 1.5–2 小时，另留购票、候车时间。')]),
 A('入住后 / 17:00 左右','卸下行李，看看港口','只在体力允许时去海边散步；首日不塞博物馆或山顶夜景。',[
 W('長崎駅','長崎水辺の森公園','建议 17:00','约 25–35 分钟','不想走可在长崎站前乘 1 号崇福寺方向至出岛，再步行到港边。'),W('長崎水辺の森公園','長崎駅','晚饭后','约 25–35 分钟')])]},
 {n:2,city:'nagasaki',label:'长崎',title:'坡道与港口旧时光',summary:'大波止港边 → 南山手街巷 → 港边 → 眼镜桥；全程公共街区散步，不安排任何博物馆或寺庙。',stay:'长崎站周边 · 第 2 晚',food:'午饭在新地中华街周边找什锦面或皿乌冬，晚上可尝土耳其饭。商圈只作为吃饭节点。',rain:'缩短海边和坡道步行，去车站餐饮区或有遮棚街道附近找咖啡休息；不添加展馆、寺庙或购物参观。',sources:['tram'],activities:[
 A('09:00','大波止与出岛 Wharf 海滨','先看长崎港与停泊船只，再到出岛 Wharf 公共海滨步道；它与收费复原展陈区域是不同地点。',[
 W('長崎駅','長崎駅前電停','建议 08:45','约 5–10 分钟','JR 站与电车站不是同一个入口。'),R('长崎电车 · 1 号系统','崇福寺行','長崎駅前電停','大波止電停','约 6–10 分钟','建议 09:00'),W('大波止電停','長崎港ターミナル','下车后','约 3–5 分钟'),W('長崎港ターミナル','出島ワーフ','港边散步后','约 3–5 分钟')]),
 A('11:30','新地午饭 → 南山手街景','在南山手、东山手公共街巷看洋楼与山城风景，不进教堂、不安排庭园。控制坡道步行，累了即折返。',[
 W('出島ワーフ','新地中華街','建议 11:30','约 10–15 分钟'),R('长崎电车 · 5 号系统','石橋行','新地中華街電停','大浦天主堂電停','约 6–10 分钟','建议 13:00','无换乘','站名虽叫大浦天主堂，本计划只在街区公共道路散步，不进入教堂。'),W('大浦天主堂電停','南山手町 長崎','下车后','约 10–20 分钟','坡道较多；导航终点为街区而不是收费庭园。')]),
 A('15:00','港口散步 → 眼镜桥','从南山手下坡到海边休息，随后看中岛川与眼镜桥；不使用已经停运的 4 号电车。',[
 W('南山手町 長崎','長崎水辺の森公園','建议 15:00','约 15–20 分钟'),W('長崎水辺の森公園','新地中華街電停','建议 16:00','约 10–15 分钟'),R('长崎电车 · 5 号系统','蛍茶屋行','新地中華街電停','めがね橋電停','约 8–12 分钟','建议 16:15'),W('めがね橋電停','長崎眼鏡橋','下车后','约 3–5 分钟')]),
 A('晚饭后','回到长崎站','在中岛川附近吃晚饭，再按两段电车回站前；也可步行约 20–25 分钟回车站。',[
 R('长崎电车 · 5 号系统','蛍茶屋行','めがね橋電停','市役所電停','约 2–5 分钟','建议 19:00','市役所换乘 3 号'),R('长崎电车 · 3 号系统','赤迫行','市役所電停','長崎駅前電停','约 5–8 分钟','衔接前段','市役所换乘','符合官方线路组合的 IC / 非接触卡换乘优惠需按规定；现金不适用。'),W('長崎駅前電停','長崎駅','下车后','约 5–10 分钟')])]},
 {n:3,city:'nagasaki',label:'长崎',title:'和平公园，稻佐山的蓝调时刻',summary:'上午走和平公园与浦上生活街道；下午休息，天气好再上稻佐山。',stay:'长崎站周边 · 第 3 晚',food:'浦上或车站周边午饭，晚饭在山下解决。带饮水和轻食，不把山顶餐厅作为唯一选项。',rain:'取消山顶和露天公园，在车站附近吃饭、找咖啡休息。夜景日可和晴天交换。',sources:['tram','peace','inasa','rope','inasaStatus'],activities:[
 A('09:00','长崎站前 → 和平公园','和平公园与爆心地公园均为公共开放空间，建议散步约 1–1.5 小时；不进入原爆资料馆或其他展馆。',[
 R('长崎电车 · 1 或 3 号系统','赤迫行','長崎駅前電停','平和公園電停','约 15–20 分钟','建议 09:00'),W('平和公園電停','長崎平和公園','下车后','约 5–10 分钟'),W('長崎平和公園','原爆落下中心地碑 長崎','建议 10:00','约 5–10 分钟'),W('原爆落下中心地碑 長崎','平和公園電停','散步后','约 5–10 分钟')]),
 A('11:30–13:00','浦上生活街道与午饭','到浦上站周边公共街道吃午饭，不安排宗教建筑或展馆。饭后回酒店留两小时休息。',[
 R('长崎电车 · 1 或 3 号系统','1 号崇福寺行 / 3 号蛍茶屋行','平和公園電停','浦上駅前電停','约 5–10 分钟','建议 11:30'),R('长崎电车 · 1 或 3 号系统','1 号崇福寺行 / 3 号蛍茶屋行','浦上駅前電停','長崎駅前電停','约 5–10 分钟','午饭后 / 建议 13:00')]),
 A('日落前约 90 分钟','市区 → 稻佐山缆车','按当日日落倒推，不固定 17:00。索道与斜坡车是两套设备，分别查当日运航；本方案乘索道。可替代为官网预约免费接驳：需提前预约，不能随到随乘。',[
 R('长崎巴士 · 3 / 4 号系统','下大橋 / 上小江原 / 相川方向','長崎駅前バス停','ロープウェイ前バス停','约 10–20 分钟，另加等车','日落前约 90 分钟','下车步行到缆车站','这里的 3 / 4 是巴士编号，不是路面电车。核对车头与停靠站。'),W('ロープウェイ前バス停','長崎ロープウェイ淵神社駅','下车后','约 3–5 分钟','淵神社站为缆车站名，不安排神社参观。'),R('长崎缆车（ロープウェイ）','稲佐岳方向','淵神社駅 長崎ロープウェイ','稲佐岳駅','乘车约 5 分钟','预留购票与排队','无换乘','强风、检修会停运；查当天末班，缆车另购票。')]),
 A('观景后','原路下山 → 车站','先确认返程巴士和缆车末班；预约接驳时按所订返程班次走。',[
 R('长崎缆车','淵神社方向','稲佐岳駅','淵神社駅 長崎ロープウェイ','约 5 分钟','观景后','下山后步行回巴士站'),W('長崎ロープウェイ淵神社駅','ロープウェイ前バス停','下车后','约 3–5 分钟'),R('长崎巴士','長崎駅前方面','ロープウェイ前バス停','長崎駅前バス停','约 10–20 分钟，另加等车','按当天返程班次','无换乘','确认车辆停靠长崎站前；错过巴士可出租车返市区。')])]},
 {n:4,city:'kitakyushu',label:'长崎 → 小仓',title:'横穿北九州，住进小仓',summary:'上午移动，下午只沿紫川走一圈。长崎 → 武雄温泉 → 博多 → 小仓，三段列车写清楚。',stay:'小仓站周边 · 第 1 晚',food:'午饭在博多或小仓站解决，晚上试小仓肉乌冬、烧鸟；旦过市场留到 D6 白天。',rain:'入住后休息，在小仓站附近找餐饮或咖啡，不安排室内展馆参观。',sources:['jr'],activities:[
 A('09:00 左右','长崎 → 武雄温泉 → 博多','提前购票。武雄温泉的衔接通常按成对车次安排；博多换车留约 20–30 分钟，带行李宁可宽松。',[
 R('西九州新干线 Kamome','武雄温泉方向','長崎駅','武雄温泉駅','约 25–35 分钟','建议 09:00','武雄温泉换 Relay Kamome'),R('JR 特急 Relay Kamome','博多方向','武雄温泉駅','博多駅','约 60–75 分钟','衔接前段列车','武雄温泉换乘')]),
 A('11:00–12:00 左右','博多 → 小仓','推荐省时方案为山阳新干线，需要另购票；若持 JR 九州 Pass，改选 JR 九州特急 Sonic（约 45–60 分钟）。',[
 R('山阳新干线','小仓 / 广岛 / 新大阪方向','博多駅','小倉駅','乘车约 15–20 分钟','按抵达博多时间','博多由在来线换到新干线站台','Nozomi / Sakura / Hikari / Kodama 中选当天停小仓的车。此段不属于九州新干线，也不含于 JR 九州 Pass。')]),
 A('入住后 / 15:00','紫川与小仓城外观','酒店寄存或入住后，沿紫川步行到城外拍照；不安排小仓城庭园或购物。',[
 W('小倉駅','小倉城','建议 15:00','约 15–20 分钟','沿紫川公共步道散步；城内是否参观按兴趣另定。'),W('小倉城','小倉駅','晚饭后','约 15–20 分钟')])]},
 {n:5,city:'kitakyushu',label:'门司港 / 下关',title:'复古门司港，渡海吃唐户',summary:'一天看海峡两岸。唐户寿司活动按实际周几安排，非活动日不把寿司摊当作必开项目。',stay:'小仓站周边 · 第 2 晚',food:'唐户活动日吃寿司拼盘；非活动日选常设餐饮。门司港的特色是烤咖喱，不必两地都安排大餐。',rain:'小雨缩短旧建筑外观散步，找咖啡或餐馆休息；大风或渡船停航时全程留在门司港，取消唐户。',sources:['jr','ferry','market','marketUpdate'],activities:[
 A('08:30','小仓 → 门司港','选鹿儿岛本线门司港方向；到“门司”站还没到，须在终点门司港下车。',[
 R('JR 鹿儿岛本线 · 普通 / 快速','門司港行','小倉駅','門司港駅','规划约 15–25 分钟，以车次为准','建议 08:30','无换乘','现场查站台与终点；不要上往下关或大分方向的车。')]),
 A('09:00','站房与港口旧建筑','看门司港站、旧门司税关外观、海边广场；只在公共道路看建筑，不安排入馆。',[
 W('門司港駅','旧門司税関','建议 09:00','约 8–12 分钟'),W('旧門司税関','門司港渡船場','建议 10:30','约 5–10 分钟')]),
 A('10:30–11:00','乘船到唐户，午饭与海峡','关门连络船成人单程 400 円，约 5 分钟。周五六寿司活动 09:00 起、日祝 08:00 起，活动结束与特别休业看官网；不硬编每日营业。',[
 R('关门汽船 · 关门连络船','下関（唐戸）方向','門司港渡船場','唐戸ターミナル','航程约 5 分钟，另加候船','建议 10:30–11:00','直航，船票另购','船段请看官方时刻与运航；地图用于定位码头，不保证提供指定船班。','ferry','門司港渡船場','唐戸ターミナル',sources.ferry[1]),W('唐戸ターミナル','唐戸市場','下船后','约 3–5 分钟')]),
 A('14:30–16:00','唐户海边 → 原路回小仓','午饭后沿海边休息，不塞关门人行隧道的远距离往返；需要另走隧道时单独重排行程。',[
 W('唐戸市場','唐戸ターミナル','建议 14:30','约 3–5 分钟'),R('关门汽船 · 关门连络船','門司港方向','唐戸ターミナル','門司港渡船場','航程约 5 分钟','按官网返程班次','无换乘','强风停航时不要走到码头才查；离开唐户前确认。','ferry','唐戸ターミナル','門司港渡船場',sources.ferry[1]),W('門司港渡船場','門司港駅','下船后','约 5–10 分钟'),R('JR 鹿儿岛本线 · 普通 / 快速','小倉 / 博多方面','門司港駅','小倉駅','规划约 15–25 分钟','建议 16:00','无换乘','选停靠小仓的车；终点可比小仓更远。')])]},
 {n:6,city:'kitakyushu',label:'小仓 / 八幡',title:'旦过市场与皿仓山夜景',summary:'市场放在上午；午后走 JR 到八幡，再接免费巴士与两段山上交通。不用单轨去皿仓山。',stay:'小仓站周边 · 第 3 晚',food:'旦过午饭按当天实际营业店铺选择，市场店铺各有休业日。夜景后回小仓吃饭，不安排夜晚市场摊位。',rain:'取消山顶，在小仓有遮棚街道附近找餐馆或咖啡休息；晴天可与 D7 对调。通常周二休业，节假日例外。',sources:['jr','sara','shuttle','saraFare','tanga','monorail'],activities:[
 A('09:30','步行到旦过市场','小仓站到旦过距离短，首选步行；想体验单轨可乘北九州单轨“企救丘行”到旦过站，约 3–5 分钟。',[
 W('小倉駅','旦過市場','建议 09:30','约 15–20 分钟','市场不是统一全天营业：各店营业、施工区域与休业日分别确认。'),W('旦過市場','小倉駅','午饭后','约 15–20 分钟')]),
 A('日落前约 2 小时','小仓 → 八幡 → 缆车山麓','小仓直达皿仓山的旧巴士已于 2026-03-29 停运。推荐八幡站免费接驳，按平日 / 周末 / 季节时刻提前确认。',[
 R('JR 鹿儿岛本线 · 普通 / 快速','八幡 / 黒崎 / 博多方面','小倉駅','八幡駅','规划约 15–25 分钟','日落前约 2 小时','八幡下车换官方接驳','选停八幡的车；不是八幡浜，也不是单轨。'),R('皿仓山官方免费接驳巴士','皿倉山ケーブルカー山麓駅方向','八幡駅','皿倉山ケーブルカー山麓駅','车程约 10 分钟，另加候车','按官方接驳班次','八幡站出站左侧圆环附近乘车','Google 可能不显示免费接驳，请以官网为准；无班次时可出租约 5 分钟，步行上坡约 25 分钟。','transit','八幡駅','皿倉山ケーブルカー山麓駅',sources.shuttle[1])]),
 A('日落前约 45 分钟','缆车 → 山顶斜坡车','两段交通都要乘，合计乘行约 10 分钟；成人往返联票 1,230 円。4–10 月通常 10:00–22:00（上行末班 21:20），11–3 月通常 10:00–20:00（上行末班 19:20）。',[
 R('皿仓山 Cable Car 缆车','山上方向','皿倉山ケーブルカー山麓駅','皿倉山ケーブルカー山上駅','约 6 分钟','预留购票排队','山上站换 Slope Car','通常周二休业（节假日例外），另有检修；按当天运营确认。'),R('皿仓山 Slope Car 斜坡车','展望台方向','皿倉山ケーブルカー山上駅','皿倉山展望台','约 3 分钟','衔接缆车','山上站步行换乘','留意返程斜坡车与缆车末班，不能只看上行时间。')]),
 A('观景后','沿原线路回小仓','返程顺序：斜坡车 → 缆车 → 官方接驳 → JR，提前查接驳最后一班。',[
 R('皿仓山斜坡车 + 缆车','山下方向','皿倉山展望台','皿倉山ケーブルカー山麓駅','乘行约 10 分钟','观景后','山上站由斜坡车换缆车','按季节末班提前下山。'),R('皿仓山官方免费接驳巴士','八幡駅方向','皿倉山ケーブルカー山麓駅','八幡駅','约 10 分钟','按官方返程班次','八幡换 JR','若接驳已结束，联系出租车。','transit','皿倉山ケーブルカー山麓駅','八幡駅',sources.shuttle[1]),R('JR 鹿儿岛本线','小倉 / 門司港方面','八幡駅','小倉駅','规划约 15–25 分钟','衔接接驳','无换乘')])]},
 {n:7,city:'kitakyushu',label:'户畑 / 若松',title:'若户渡船，安静老港半日游',summary:'让海港慢下来：小仓 → 户畑 → 若松老港。下午回小仓留白，也可作为皿仓山的天气备用日。',stay:'小仓站周边 · 第 4 晚',food:'若松老港或户畑附近午饭，回小仓吃晚饭。沿岸小店可能休业，先找营业店再坐下。',rain:'取消若户渡船与港边步行，留在小仓用餐或找咖啡休息。',sources:['jr','wakato'],activities:[
 A('09:30','小仓 → 户畑 → 渡船码头','JR 在户畑下车后步行到渡场；别走若户大桥，大桥不是此计划的步行跨海路线。',[
 R('JR 鹿儿岛本线 · 普通 / 快速','戸畑 / 黒崎 / 博多方面','小倉駅','戸畑駅','规划约 8–15 分钟','建议 09:30','户畑下车后步行','选停靠户畑的列车。'),W('戸畑駅','若戸渡船 戸畑渡場','下车后','约 10–15 分钟')]),
 A('10:00–12:30','渡海到若松，老港散步','若户渡船成人单程 100 円，航程约 3 分钟。沿若松南海岸看若户大桥与旧建筑，原路折返即可。',[
 R('若户渡船','若松渡場方向','若戸渡船 戸畑渡場','若戸渡船 若松渡場','航程约 3 分钟，另加等船','建议 10:00','无换乘','码头购票，查看当天时刻与天气运航。','ferry','若戸渡船 戸畑渡場','若戸渡船 若松渡場',sources.wakato[1]),W('若戸渡船 若松渡場','若松南海岸通り','下船后','约 5–10 分钟','沿海公共道路散步，不强求远距离延伸。')]),
 A('午饭后 / 13:30','若松 → 户畑 → 小仓','下午休息，或补昨天因天气错过的项目。',[
 W('若松南海岸通り','若戸渡船 若松渡場','建议 13:30','约 5–10 分钟'),R('若户渡船','戸畑渡場方向','若戸渡船 若松渡場','若戸渡船 戸畑渡場','航程约 3 分钟','按当天船班','无换乘','','ferry','若戸渡船 若松渡場','若戸渡船 戸畑渡場',sources.wakato[1]),W('若戸渡船 戸畑渡場','戸畑駅','下船后','约 10–15 分钟'),R('JR 鹿儿岛本线','小倉 / 門司港方面','戸畑駅','小倉駅','规划约 8–15 分钟','衔接步行','无换乘')])]},
 {n:8,city:'fukuoka',label:'小仓 → 博多',title:'回博多，把返程留宽一点',summary:'不把远距离移动和国际航班硬挤在同一天。博多住一晚，下午可散步或休息。',stay:'博多站周边 · 第 1 晚',food:'博多站周边尝拉面或定食；河边晚饭按体力决定，不把屋台当必须排队项目。',rain:'寄存行李后在酒店附近用餐休息，不强行加入商场购物日。',sources:['jr','airport'],activities:[
 A('10:00','小仓 → 博多','退房后直达博多，酒店寄存行李。单程票方案乘山阳新干线；周游券方案用 JR 九州特急 Sonic，约 45–60 分钟。',[
 R('山阳新干线','博多方向','小倉駅','博多駅','约 15–20 分钟','建议 10:00','无换乘','选停博多的车，博多—小仓山阳新干线不在 JR 九州 Pass 内。')]),
 A('午饭后 / 14:00','可选：那珂川河边散步','下午安排轻松公共河岸步道，逛累了直接回酒店。没有新增寺庙、庭园或购物清单。',[
 W('博多駅','天神中央公園 福岡','建议 14:00','约 25–35 分钟','只沿河步道散步；体力不足直接省略。'),R('福冈市地下铁 · 七隈线','博多行','天神南駅','博多駅','乘车约 4–6 分钟','晚饭后','无换乘','从河边步行约 5–10 分钟到天神南站；注意天神南与空港线天神站是不同站。')])]},
 {n:9,city:'fukuoka',label:'博多 → 上海',title:'从国际航站楼，安心返沪',summary:'航班未定，按起飞时间倒推。到国际楼预留约 3 小时，国内线地铁站不是最终目的地。',stay:'返沪 · 无住宿',food:'退房前吃早餐，进入国际航站楼后再看餐饮与值机开放时间。',rain:'按原交通走；接驳道路拥堵时更早出发。航班以实际购票为准。',sources:['airport'],activities:[
 A('起飞前约 4–4.5 小时','博多 → 国内楼 → 国际楼','从酒店到车站、地铁、接驳候车与行车合计建议留 60–90 分钟，最后在国际航站楼办理值机和出境。',[
 R('福冈市地下铁 · 空港线','福岡空港行','博多駅','福岡空港駅','乘车约 5–6 分钟','起飞前约 4–4.5 小时','国内线终点出站后换免费接驳','地铁到国内航站楼，不是在国际楼。'),R('机场免费航站楼接驳巴士','国际线航站楼方向','福岡空港国内線ターミナル','福岡空港国際線ターミナル','车程约 10–15 分钟，另加候车','地铁出站后','国际楼下车后按航空公司柜台指示','以接驳官网当天站点和运航为准；道路堵车另加余量。')])]}
];
window.KYUSHU_DATA = {days,sources};
const $ = id => document.getElementById(id);
const esc = str => String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storage = {get(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}},set(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{}}};
let completed = new Set(storage.get('kyushu-completed',[]));
let startDate = storage.get('kyushu-start-date','');
let filter = 'all';
let expanded = false;
function dateFor(n){if(!startDate)return null;const date=new Date(startDate+'T12:00:00');date.setDate(date.getDate()+n-1);return Number.isNaN(+date)?null:date;}
function dateLabel(n){const date=dateFor(n);return date?date.toLocaleDateString('zh-CN',{year:'numeric',month:'long',day:'numeric',weekday:'long'}):'日期待定 · 第 '+n+' 天';}
function mapURL(r){const params=new URLSearchParams({api:'1',origin:r.mapFrom,destination:r.mapTo,travelmode:r.mode==='ferry'?'walking':r.mode});return 'https://www.google.com/maps/dir/?'+params;}
function placeURL(place){return 'https://www.google.com/maps/search/?'+new URLSearchParams({api:'1',query:place});}
function sourceLinks(keys){return keys.map(key=>`<a href="${esc(sources[key][1])}" target="_blank" rel="noopener">${esc(sources[key][0])} ↗</a>`).join('');}
function routeHTML(r){const navigation=r.mode==='ferry'?`<div class="port-links"><a class="map-link" href="${esc(placeURL(r.mapFrom))}" target="_blank" rel="noopener">出发码头 ↗</a><a class="map-link" href="${esc(placeURL(r.mapTo))}" target="_blank" rel="noopener">到达码头 ↗</a></div>`:`<a class="map-link" href="${esc(mapURL(r))}" target="_blank" rel="noopener" aria-label="${esc(r.from+'到'+r.to+'地图导航')}">地图导航 ↗</a>`;return `<div class="segment"><div class="segment-top"><strong>${esc(r.line)}</strong>${navigation}</div><div class="route-fields"><span><b>方向</b> ${esc(r.direction)}</span><span><b>建议出发</b> ${esc(r.time)}</span><span class="route-path"><b>起终点</b> ${esc(r.from)} → ${esc(r.to)}</span><span><b>换乘</b> ${esc(r.transfer)}</span><span><b>预计耗时</b> ${esc(r.duration)}</span></div>${r.note?`<p class="route-note">${esc(r.note)}</p>`:''}${r.official?`<a class="source-list" href="${esc(r.official)}" target="_blank" rel="noopener">官方时刻 / 运航 ↗</a>`:''}${r.mode==='ferry'?'<p class="route-note">地图分别定位两端码头，不能替代船班查询；优先点击官方时刻。</p>':''}</div>`;}
function warning(day){const date=dateFor(day.n);if(!date)return '';if(day.n===5){const weekday=date.getDay();if(weekday>=1&&weekday<=4){const alternatives=[6,7].map(n=>({n,date:dateFor(n)})).filter(item=>[0,5,6].includes(item.date.getDay()));return '唐户提醒：这天是周一至周四，通常不举办寿司摊活动（日本节假日可能例外）。'+(alternatives.length?'可考虑与 '+alternatives.map(item=>'D'+item.n+'（'+dateLabel(item.n)+'）').join(' 或 ')+' 交换。':'可选择常设餐厅，或调整整个出发日。')+' 请核对唐户官方活动日历。';}return '唐户提醒：这天通常适合寿司活动；周五六 09:00 起、周日 08:00 起，结束与休业按官网当天公告。';}if(day.n===6){const iso=[date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');if(iso>='2027-02-15'&&iso<='2027-02-26')return '皿仓山提醒：此日在官方已公布的 2027-02-15 至 2027-02-26 计划检修区间内，请取消上山并核对最新公告。';if(date.getDay()===2)return '皿仓山提醒：这天是周二，通常休业（日本节假日例外）。建议与 D5 / D7 交换，并确认官网是否营业。';}return '';}
function render(){
 $('days').innerHTML=days.map(day=>{const w=warning(day);return `<article class="day${completed.has(day.n)?' completed':''}" id="day-${day.n}"${filter!=='all'&&filter!==day.city?' hidden':''}><div class="day-head"><div class="day-number"><span>DAY</span>${String(day.n).padStart(2,'0')}</div><div><div class="day-city">${esc(day.label)}</div><h3>${esc(day.title)}</h3><p class="day-meta">${dateLabel(day.n)} · ${esc(day.stay)}</p></div><label class="done-label"><input type="checkbox" data-done="${day.n}"${completed.has(day.n)?' checked':''}> 已完成</label></div><p class="day-summary">${esc(day.summary)}</p>${w?`<p class="market-warning">${esc(w)}</p>`:''}<details${expanded?' open':''}><summary class="route-toggle">查看详细攻略 · ${day.activities.reduce((sum,a)=>sum+a.routes.length,0)} 段导航</summary><div class="day-body">${day.activities.map(a=>`<section class="activity"><div class="activity-title"><span class="time">${esc(a.time)}</span><h4>${esc(a.title)}</h4></div><p>${esc(a.description)}</p>${a.routes.map(routeHTML).join('')}</section>`).join('')}<div class="day-extras"><div class="extra"><strong>吃什么 / 何时吃</strong><p>${esc(day.food)}</p></div><div class="extra"><strong>雨天 / 关闭替代</strong><p>${esc(day.rain)}</p></div></div><div class="source-list">本日官方来源：<br>${sourceLinks(day.sources)}</div></div></details></article>`;}).join('');updateProgress();updateDateNote();$('expand').textContent=expanded?'收起全部路线':'展开全部路线';
}
function updateDateNote(){$('date-note').textContent=startDate?'已按所选日期计算各日。建议时间为日本当地时间；周末、节假日、检修与末班请查官方。':'日期未定：先按 D1–D9 使用；确认日期后，唐户市场的周末提示会自动更新。';}
function updateProgress(){$('progress-label').textContent='已完成 '+completed.size+' / 9 天';$('progress-bar').style.width=completed.size/9*100+'%';}
$('start-date').value=startDate;
$('start-date').addEventListener('change',event=>{startDate=event.target.value;storage.set('kyushu-start-date',startDate);render();$('date-note').textContent=startDate?'已按所选日期计算各日。建议时间为日本当地时间；周末、节假日、检修与末班请查官方。':'日期未定：先按 D1–D9 使用；确认日期后，唐户市场的周末提示会自动更新。';});
$('clear-date').addEventListener('click',()=>{$('start-date').value='';$('start-date').dispatchEvent(new Event('change'));});
$('days').addEventListener('change',event=>{if(!event.target.matches('[data-done]'))return;const n=Number(event.target.dataset.done);event.target.checked?completed.add(n):completed.delete(n);storage.set('kyushu-completed',[...completed]);event.target.closest('.day').classList.toggle('completed',event.target.checked);updateProgress();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});document.querySelectorAll('.day').forEach((el,i)=>{el.hidden=filter!=='all'&&days[i].city!==filter;});}));
$('expand').addEventListener('click',()=>{expanded=!expanded;document.querySelectorAll('.day details').forEach(el=>{el.open=expanded;});$('expand').textContent=expanded?'收起全部路线':'展开全部路线';});
let printState=[];
let printHidden=[];
window.addEventListener('beforeprint',()=>{printState=[...document.querySelectorAll('.day details')].map(el=>el.open);printHidden=[...document.querySelectorAll('.day')].map(el=>el.hidden);document.querySelectorAll('.day details').forEach(el=>{el.open=true;});document.querySelectorAll('.day').forEach(el=>{el.hidden=false;});});
window.addEventListener('afterprint',()=>{document.querySelectorAll('.day details').forEach((el,i)=>{el.open=printState[i]??expanded;});document.querySelectorAll('.day').forEach((el,i)=>{el.hidden=printHidden[i]??false;});});
$('print').addEventListener('click',()=>window.print());
$('all-sources').innerHTML=sourceLinks(Object.keys(sources));
render();
