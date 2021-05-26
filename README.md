sudo sysctl fs.inotify.max_user_watches=400000<br>
npm run serve<br>
「アプリと直接関係がないもの」フォルダの中身 -> Proxyオブジェクトに関する内容<br><br>

メモ<br>
・.vueファイルで記述するhtmlは全て\<template>\</template>で挟む<br>
・beforeCreate() -> インスタンス作成前(描画前?)に実行されるライフサイクル<br>
・pip install "gensim==3.8.1" (最新バージョンだとモデルが読み込めないエラー)<br>
・yagiモデルは.pyファイルもモデルファイルと同じ場所に設置が必要<br>
・兄弟コンポーネントどうしで直接通信は行わず、それらの親が仲介する<br>
・vuexのインストールはnpm install vuex@4.0.1<br>
・computedは計算 methodsは入力などのイベント発生時の処理という使い分け<br>