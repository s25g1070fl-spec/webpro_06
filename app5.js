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
  // 本来ならここにDBとのやり取りが入る
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
  // 本来ならここにDBとのやり取りが入る
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


app.listen(8080, () => console.log("Example app listening on port 8080!"));
