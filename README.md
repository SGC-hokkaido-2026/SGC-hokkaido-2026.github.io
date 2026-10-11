# SGC 2026 サイト(MVP)

静的HTML/CSS/JSです。ビルドは不要で、`index.html` を開くだけで表示できます。

## ローカルで見る
```
cd SGC/website
python -m http.server 8000
```
ブラウザで http://localhost:8000 を開く。

## 埋める必要のある項目(プレースホルダー)
| 場所 | 内容 |
|---|---|
| index.html 会場 | 住所・アクセス・地図URL(`【地図のURL】`) |
| index.html 申込 | GoogleフォームのURL(`【GoogleフォームのURL】`) |
| index.html フッター | お問い合わせメール、Instagramアカウント |
| index.html FAQ・参加対象 | 参加費、定員、一部参加の可否、持ち物 |
| index.html プログラム | 時間・内容(現在は仮) |
| index.html 登壇者 | 決まり次第、カードを差し替え |
| index.html テーマ | 文言(議事録の案を仮置き) |

URLを入れるとボタンは自動で押せるようになります(`【` を含むリンクは無効表示)。

## 公開手順(あなたが実施)
1. GitHubにリポジトリを作り、`website` の中身をアップロードする。
2. Settings → Pages で、公開するブランチとフォルダを選ぶ。
3. 表示されたURLを、ポスターやメールに載せる。

公開前に、個人情報や未確定の情報が載っていないかを確認してください。
