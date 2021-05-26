/* Proxyオブジェクト練習 */
/* あるオブジェクトをラップし、ラップしたオブジェクトを操作するオブジェクト */

/* 操作対象のオブジェクト */
var student = {
    name: "田中太郎",
    grade: 1,
    introduce() {
        console.log(`私の名前は${this.name}です。`);
    }
}

/* ハンドラ 使用可能なメソッド名は決まっている(トラップ) */
var handler = {

    /* 操作対象の特定プロパティの値を取得するトラップ */
    /* target = 操作対象オブジェクト prop = プロパティ名 */
    get(target, prop) {
        return target[prop];
    },

    /* 操作対象の特定プロパティの値を書き換えるトラップ */
    set(target, prop, value) {
        target[prop] = value;
    },

    /* 操作対象の特定プロパティを削除するトラップ */
    deleteProperty(target, prop) {
        delete target[prop];
    }

}

/* Proxyオブジェクトを作成 */
var proxy = new Proxy(student, handler);
/* ラップしたオブジェクトのプロパティをProxyオブジェクトを経由して表示 */
/* ハンドラのgetメソッドが呼び出される */
console.log(proxy.name);
console.log(proxy.grade);
/* オブジェクトが持つメソッドもProxyオブジェクト経由で呼び出せる */
student.introduce();
/* ハンドラのsetメソッドが呼び出される */
proxy.grade = 2;
/* もう一度ハンドラのgetメソッドを呼び出してみる */
console.log(proxy.grade);
/* ハンドラのdeletePropertyが呼び出される */
delete proxy.grade;
/* もう一度ハンドラのgetメソッドを呼び出してみる */
console.log(proxy.grade);