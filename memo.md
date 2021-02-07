Jamstack入門したときのつまづきメモ

最近話題のJamstackを導入してみようと以下書籍を読んだときのメモ
「webサイト高速化のための 静的サイトジェネレーター活用入門」
https://www.amazon.co.jp/Web%E3%82%B5%E3%82%A4%E3%83%88%E9%AB%98%E9%80%9F%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE-%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E6%B4%BB%E7%94%A8%E5%85%A5%E9%96%80-Compass-Books%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E3%82%A8%E3%83%93%E3%82%B9%E3%82%B3%E3%83%A0-ebook/dp/B088WJWJK9

GatsbyJS, Netlify, ContentfulというJamstackの王道コンビでのサイトの作り方をナビゲーションしてくれるわたしみたいな初心者にとっては神書籍

M1 MacBookAirを買ってしまったがために一部ライブラリがうまく入らなかったりするトラブルに見舞われた。これはそのトラブルシューティングの記録。みんなのためでもあり、私の備忘録でもあります。

スターターはこちらを利用
https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world

gatsby developで仮想サーバー立ち上げ。

今回はhtmlで作ったサイトをベースにする
HTML to JSX
https://magic.reactjs.net/htmltojsx.htm
で変換。

gatsby-browser.jsを書き換えたあとは反映のためサーバーの再起動が必要。


Fragmentとは
よく使うGraphQLのクエリのパターンはFragmentにすることで簡単に再利用することができる。
たとえばgatsby-imageであればいくつか既に用意されている。以下参照。
https://www.gatsbyjs.com/plugins/gatsby-image/#fragments
GatsbyImageSharpFluid_withWebp
をここでは使っている。

svgもjsxに変換する必要がある場合がある

・svgを圧縮するツール
https://vecta.io/nano

・svgの代替テキスト
alt属性に相当する<desc>~</desc>を利用する。



SASS/SCSSを利用したい場合には、
プラグインのgatsby-plugin-sassとnode-sassを利用する



step3まで終えて
すでにボリュームが多くておなかいっぱいだけどまだ半分にも行っていない。
読み応えという意味では良書