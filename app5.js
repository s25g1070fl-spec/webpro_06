const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));






let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

// 一覧
app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {id: number, data: detail} );
});

// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});

// DeleteCheck
app.get("/keiyo2/deleteCheck/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_delete', {id: number, data: detail} );
  // station2.splice( req.params.number, 1 );
  // res.redirect('/keiyo2' );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
});

//Delete
app.post("/keiyo2/delete/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});





//----------BGMサイト-----------


let ncm = [
  { 
    id: 1, 
    name: "効果音ラボ",
    url: "https://soundeffect-lab.info/",
    commercialUse: "可", // 商用利用
    credit: "任意", // クレジット表記
    summary: "高品質な効果音が豊富。カテゴリが分かりやすい。" 
  },
  { 
    id: 2, 
    name: "DOVA-SYNDROME",
    url: "https://dova-s.jp/",
    commercialUse: "可",
    credit: "任意(作曲，作成者の利用条件が優先される)",
    summary: "日本最大級のBGM・効果音サイト。楽曲数が圧倒的。"
  },
  { 
    id: 3, 
    name: "魔王魂",
    url: "https://maou.audio/",
    commercialUse: "可",
    credit: "任意",
    summary: "ゲームや戦闘系のBGM・効果音が充実。歌もの素材もある。"
  },
  { 
    id: 4, 
    name: "BGMer",
    url: "https://bgmer.net/",
    commercialUse: "可",
    credit: "不要",
    summary: "雰囲気検索など詳しくなくても使いやすい"
  },
  { 
    id: 5, 
    name: "甘茶の音楽工房",
    url: "http://amachamusic.chagasi.com/",
    commercialUse: "可",
    credit: "必須ではない．表記内容はサイト名、作曲者名、URLのいずれか一つでOK",
    summary: "個人制作のサイトで、癒し系など質の高いBGMが豊富。"
  },
  { 
    id: 6, 
    name: "Youtube Audio Library",
    url: "https://youtube.com/audiolibrary",
    commercialUse: "可",
    credit: "ccマークのあるものは必須",
    summary: "丸の中にcが二つ書かれたマークがあるものはクレジットが必要である．"
  },  
  { 
    id: 7, 
    name: "in audio",
    url: "https://inaudio.org/",
    commercialUse: "可",
    credit: "無料の場合「必須」，有料ライセンスがあれば「不要」",
    summary: "海外のサイト，BPMによる検索などもできそう"
  },
  { 
    id: 8, 
    name: "Audio Stock",
    url: "https://audiostock.jp/",
    commercialUse: "可",
    credit: "必要なし",
    summary: "有料のBGM・効果音サイト．期間限定で一部無料ダウンロード可能"
  },
];

// 一覧
app.get("/ncm", (req, res) => {
  res.render('ncm', {data: ncm} );
});

// Create
app.get("/ncm/create", (req, res) => {
  res.redirect('/public/ncm_new.html');
});

// Read
app.get("/ncm/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = ncm[ number ];
  res.render('ncm_detail', {id: number, data: detail} );
});

// Create
app.post("/ncm", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = ncm.length + 1;
  const name = req.body.name;
  const url = req.body.url;
  const commercialUse = req.body.commercialUse;
  const credit = req.body.credit;
  const summary = req.body.summary;
  ncm.push( { id: id, name: name, url: url, commercialUse: commercialUse, credit: credit ,summary: summary} );
  console.log( ncm );
  res.render('ncm', {data: ncm} );
});

// Edit
app.get("/ncm/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = ncm[ number ];
  res.render('ncm_edit', {id: number, data: detail} );
});



// DeleteCheck
app.get("/ncm/deleteCheck/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = ncm[ number ];
  res.render('ncm_delete', {id: number, data: detail} );
  // station2.splice( req.params.number, 1 );
  // res.redirect('/ncm' );
});

// Update
app.post("/ncm/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  ncm[req.params.number].name = req.body.name;
  ncm[req.params.number].url = req.body.url;
  ncm[req.params.number].commercialUse = req.body.commercialUse;
  ncm[req.params.number].credit = req.body.credit;
  ncm[req.params.number].summary = req.body.summary;
  console.log( ncm );
  res.redirect('/ncm' );
});

//Delete
app.post("/ncm/delete/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  ncm.splice( req.params.number, 1 );
  res.redirect('/ncm' );
});





//----------高難易度化MinecraftMod-------------

let difficult_McMods = [
  {
    "id": 1,
    "name": "Improved Mobs (Forge)",
    "url": "https://www.curseforge.com/minecraft/mc-mods/improved-mobs",
    "version": "1.16.5",
    "loader": "Forge",
    "summary": "時間経過と共に難易度が上昇する。バニラの敵がプレイヤーの装備を着たり、エンダーパールやTNTなどのアイテムを使いこなしたり、ブロックを破壊して拠点を襲撃したりするようになる。"
  },
  {
    "id": 2,
    "name": "Creeper AI Updated",
    "url": "https://www.curseforge.com/minecraft/mc-mods/creeper-ai-updated",
    "version": "1.16.5",
    "loader": "Forge",
    "summary": "クリーパーのAIのみを特化して強化する。壁を爆破して他の敵の侵入経路を作ったり、爆発のタイミングがより致命的になったりする。"
  },
  {
    "id": 3,
    "name": "Tantrum",
    "url": "https://www.curseforge.com/minecraft/mc-mods/tantrum",
    "version": "1.16.5",
    "loader": "Forge",
    "summary": "敵モブにRPGのような「レベル」制を導入する。レベルの高い敵は移動速度や攻撃力が上がり、強力なエンチャント付きの防具を装備してスポーンする。"
  },
  {
    "id": 4,
    "name": "L2 Hostility",
    "url": "https://www.curseforge.com/minecraft/mc-mods/l2hostility",
    "version": "1.20.1",
    "loader": "Forge",
    "summary": "プレイヤーの進行度に合わせて敵が強化される。敵が特殊能力を持ったりレベルが上がったりする他、現在のエリアの危険度が表示されるようになる。"
  },
  {
    "id": 5,
    "name": "Enhanced AI",
    "url": "https://www.curseforge.com/minecraft/mc-mods/enhanced-ai",
    "version": "1.20.1",
    "loader": "Forge",
    "summary": "敵の知能を強化する。クリーパーが壁を爆破して侵入経路を作ったり、スケルトンが超長距離射撃を行ったり、ボートハメなどの安地対策が施される。"
  },
  {
    "id": 6,
    "name": "Enhanced Hordes",
    "url": "https://www.curseforge.com/minecraft/mc-mods/enhanced-hordes",
    "version": "1.20.1",
    "loader": "Forge",
    "summary": "敵の群れ（ホード）の挙動を強化する。索敵範囲内の敵が一斉に襲ってくるほか、攻撃が届かない場所にいるプレイヤーに対してジャンプ攻撃を仕掛けてくる。"
  },
  {
    "id": 7,
    "name": "Epic Mob Siege: Nightmare",
    "url": "https://www.curseforge.com/minecraft/mc-mods/epic-mob-siege-nightmare",
    "version": "1.20.1",
    "loader": "Forge",
    "summary": "敵による拠点襲撃（シージ）を極悪化する。ゾンビがブロックを積んで高い場所に登ってきたり、リスポーン地点となるベッドを破壊したりする。"
  },
  {
    "id": 8,
    "name": "Nyf's Spiders",
    "url": "https://www.curseforge.com/minecraft/mc-mods/nyfs-spiders",
    "version": "1.20.1",
    "loader": "Forge",
    "summary": "クモの挙動をリアルにする。壁や天井をスムーズに這い回るようになり、予測不能な動きで攻撃を当てにくくさせる。"
  },
  {
    "id": 9,
    "name": "Epic Siege Mod",
    "url": "https://www.curseforge.com/minecraft/mc-mods/epic-siege-mod",
    "version": "1.12.2",
    "loader": "Forge",
    "summary": "敵AIを極悪化する。ゾンビがブロックを破壊・設置して拠点を襲撃したり、クリーパーが壁を爆破して侵入経路を作ったりする。中立モブも反撃するようになる。"
  },
  {
    "id": 10,
    "name": "Rough Mobs Revamped",
    "url": "https://www.curseforge.com/minecraft/mc-mods/rough-mobs-revamped",
    "version": "1.12.2",
    "loader": "Forge",
    "summary": "バニラの敵モブに強力な能力を追加する。クモが巣を飛ばして拘束したり、スケルトンの装備が強化されたり、クリーパーが加速したりする。"
  },
  {
    "id": 11,
    "name": "IncreaseMobs",
    "url": "https://www.curseforge.com/minecraft/mc-mods/increasemobs",
    "version": "1.12.2",
    "loader": "Forge",
    "summary": "モブのスポーン数を増加させる。個々の強さだけでなく、圧倒的な「数」の暴力で難易度を底上げする。"
  }
]

// 一覧表示
app.get("/mc-mods", (req, res) => {
  res.render('mc-mods', {data: difficult_McMods} );
});

// 新規登録画面の表示
app.get("/mc-mods/create", (req, res) => {
  // 実際には public/mc-mods_new.html を作成する必要があります
  res.redirect('/public/mc-mods_new.html');
});

// 詳細表示
app.get("/mc-mods/:number", (req, res) => {
  const number = req.params.number;
  const detail = difficult_McMods[ number ];
  res.render('mc-mods_detail', {id: number, data: detail} );
});

// 新規登録の実行
app.post("/mc-mods", (req, res) => {
  const id = difficult_McMods.length + 1;
  const name = req.body.name;
  const url = req.body.url;
  const version = req.body.version;
  const loader = req.body.loader;
  const summary = req.body.summary;
  difficult_McMods.push( { id: id, name: name, url: url, version: version, loader: loader, summary: summary} );
  console.log( difficult_McMods );
  res.render('mc-mods', {data: difficult_McMods} );
});

// 編集画面の表示
app.get("/mc-mods/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = difficult_McMods[ number ];
  res.render('mc-mods_edit', {id: number, data: detail} );
});

// 削除確認画面の表示
app.get("/mc-mods/deleteCheck/:number", (req, res) => {
  const number = req.params.number;
  const detail = difficult_McMods[ number ];
  res.render('mc-mods_delete', {id: number, data: detail} );
});

// 更新の実行
app.post("/mc-mods/update/:number", (req, res) => {
  difficult_McMods[req.params.number].name = req.body.name;
  difficult_McMods[req.params.number].url = req.body.url;
  difficult_McMods[req.params.number].version = req.body.version;
  difficult_McMods[req.params.number].loader = req.body.loader;
  difficult_McMods[req.params.number].summary = req.body.summary;
  console.log( difficult_McMods );
  res.redirect('/mc-mods' );
});

// 削除の実行
app.post("/mc-mods/delete/:number", (req, res) => {
  difficult_McMods.splice( req.params.number, 1 );
  res.redirect('/mc-mods' );
});




//-------アニメーションの基本原則---------
let principlesOfAnimation = [
  { 
    id: 1, 
    name: "Squash and Stretch (圧縮と伸縮)",
    summary: "ボールが跳ねる際に潰れたり伸びたりする表現をヒトなどにも使うこと．やりすぎると海外のカートゥーンアニメのようになる",
    exampleUrl: "https://youtu.be/haa7n3UGyDc" 
  },
  { 
    id: 2, 
    name: "Anticipation (予備動作)",
    summary: "主要なアクションの前に、視聴者にこれから何が起こるかを予感させる小さな動き。ジャンプする前の屈伸など。",
    exampleUrl: "https://youtu.be/F8OtE60T8yU"
  },
  {
    id: 3,
    name: "Staging (演出)",
    summary: "観客の視線を誘導し、状況を明確に伝える。視線誘導を意識する。関係のないものを画面に置かないなど",
    exampleUrl: "https://youtu.be/u-SXLaQGg50"
  },
  {
    id: 4,
    name: "Straight Ahead Action and Pose to Pose(ストレート・アヘッド と ポーズ・トゥ・ポーズ )",
    summary: "ストレートアヘッド：冒頭から一枚ずつ絵を描いていく手法.ポーズトゥポーズ：先に大事な絵を描いてから間を中割りでつないでいく手法",
    exampleUrl: "https://youtu.be/v8quCbt4C-c"
  },
  {
    id: 5,
    name: "Follow Through and Overlapping Action(フォロースルー と オーバーラップ)",
    summary: "本体が止まっても、付属物は遅れて止まる（慣性）",
    exampleUrl: "https://youtu.be/4OxphYV8W3E"
  },
  {
    id: 6,
    name: "Slow In and Slow Out(スローイン と スローアウト)",
    summary: "動き始めと動き終わりをゆっくり描く表現",
    exampleUrl: "https://youtu.be/fQBFsTqbKhY"
  },
  {
    id: 7,
    name: "Arcs(運動曲線)",
    summary: "自然な動きは直線ではなく曲線を描く",
    exampleUrl: "https://youtu.be/I1_tZ9LhJD4"
  },
  {
    id: 8,
    name: "Secondary Action(副次アクション)",
    summary: "メインの動作を補強し、キャラクターの感情や性格を引き立てる動き.箱を開ける時（メイン）、手をさすって楽しみ感を出すなど",
    exampleUrl: "https://youtu.be/MjBHWw1TbP4"
  },
  {
    id: 9,
    name: "Timing(タイミング)",
    summary: "動作の速度やフレームの感覚で重厚感などを表現すること",
    exampleUrl: "https://youtu.be/BarOk2p38LQ"
  },
  {
    id: 10,
    name: "Exaggeration(誇張)",
    summary: "動きや表情をデフォルメして、意図を明確にする",
    exampleUrl: "https://youtu.be/HfFj-VQKiAM"
  },
  {
    id: 11,
    name: "Solid Drawing(立体感のある描画)",
    summary: "立体感、重量感のある画作り．左右対称にならないようにすること，重心をずらすなど",
    exampleUrl: "https://youtu.be/7An0jukOkCI"
  },
    {
    id: 12,
    name: "Appeal(アピール)",
    summary: "より魅力的に見えるようなキャラクターデザイン.全体的な形・プロポーション・シンプル化など",
    exampleUrl: "https://youtu.be/_SplEuWp0Yw"
  }
  
  
];

// 一覧表示
app.get("/animation", (req, res) => {
  res.render('animation', {data: principlesOfAnimation} );
});

// 新規登録画面の表示
app.get("/animation/create", (req, res) => {
  res.redirect('/public/animation_new.html');
});

// 詳細表示
app.get("/animation/:number", (req, res) => {
  const number = req.params.number;
  const detail = principlesOfAnimation[ number ];
  res.render('animation_detail', {id: number, data: detail} );
});

// 新規登録の実行
app.post("/animation", (req, res) => {
  const id = principlesOfAnimation.length + 1;
  const name = req.body.name;
  const summary = req.body.summary;
  const exampleUrl = req.body.exampleUrl; 
  principlesOfAnimation.push( { id: id, name: name, summary: summary, exampleUrl: exampleUrl} ); 
  console.log( principlesOfAnimation );
  res.render('animation', {data: principlesOfAnimation} );
});

// 編集画面の表示
app.get("/animation/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = principlesOfAnimation[ number ];
  res.render('animation_edit', {id: number, data: detail} );
});

// 削除確認画面の表示
app.get("/animation/deleteCheck/:number", (req, res) => {
  const number = req.params.number;
  const detail = principlesOfAnimation[ number ];
  res.render('animation_delete', {id: number, data: detail} );
});

// 更新の実行
app.post("/animation/update/:number", (req, res) => {
  principlesOfAnimation[req.params.number].name = req.body.name;
  principlesOfAnimation[req.params.number].summary = req.body.summary;
  principlesOfAnimation[req.params.number].exampleUrl = req.body.exampleUrl; // ★★★ この行を追加 ★★★
  console.log( principlesOfAnimation );
  res.redirect('/animation' );
});

// 削除の実行
app.post("/animation/delete/:number", (req, res) => {
  principlesOfAnimation.splice( req.params.number, 1 );
  res.redirect('/animation' );
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));
