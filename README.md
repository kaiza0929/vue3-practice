sudo sysctl fs.inotify.max_user_watches=400000<br>
npm run serve<br>
create table users (id String primary key, name String, password String);<br>
insert into users (id, name, password) values ("@test1", "テストユーザー1", "password");<br>
create table logs (log_id String primary key, user_id String, content);<br>
「アプリと直接関係がないもの」フォルダの中身 -> Proxyオブジェクト・パーセプトロンに関する内容<br><br>

技術メモ<br>
・.vueファイルで記述するhtmlは全て\<template>\</template>で挟む<br>
・beforeCreate() -> インスタンス作成前(描画前?)に実行されるライフサイクル<br>
・pip install "gensim==3.8.1" (最新バージョンだとモデルが読み込めないエラー)<br>
・yagiモデルは.pyファイルもモデルファイルと同じ場所に設置が必要<br>
・兄弟コンポーネントどうしで直接通信は行わず、それらの親が仲介する<br>
・vuexのインストールはnpm install vuex@4.0.1<br>
・computedは計算 methodsは入力などのイベント発生時の処理という使い分け<br>
・~~vuexを使わない兄弟コンポーネント間での通信についてはno-vuexブランチを参照~~<br>
=>ログをvuexで管理しようと考えたが、ログイン状態とは異なり値によって表示が変化するコンポーネントはMainだけなのでやめた。ブランチのマージ練習のために残しておく。<br><br>

その他メモ<br>
・公開モデルだとインターフェイス -> インタフェース インターフェース デバイス API プラットフォーム アーキテクチャ ライブラリ ウィンドウマネージャ フロントエンド<br>
Python ->Perl JavaScript Java スクリプト言語 Ruby C言語 Pascal C# C++ XML<br>
React -> Angular, Vueなどにはならない<br>
プログラミングと関係がない単語が出てくるのも問題(ノックアウト 減点 ドロー 反則 ボーク KO ファウル 左フック ペナルティー ローブロー)<br>
=>エラー云々の前に単語の意味を理解させる<br>
  