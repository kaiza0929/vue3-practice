/* パーセプトロン.. 各入力に重みをかけた値の総和を活性化関数に代入した値を出力するアルゴリズム */
/* 各値を格納する変数をニューロンという */

/* パーセプトロンで論理回路を表現 */
/* 層.. ニューロンのグループのこと */
/* 入力層(判定に使用するデータのグループ)と出力層(判定結果 1以上のニューロンで構成)のみで構成されるパーセプトロンを単層パーセプトロンと呼ぶ */

var calc = (input_neuron_values: number[], weight: number, threshold: number): number[] => {

    /* 入力層の各ニューロンの値に重みを掛けたものの総和を求める 各単層パーセプトロンにおける全ての重みは同じにする */
    /* 配列が[1, 2, 3, 4]の時のreduce関数の挙動 */
    /* now_sum = 1, num = 2 => now_sum = now_sum + now = 1 + 2 = 3 初回のみnow_sumの値が配列の先頭の値になる */
    /* now_sum = 3, num = 3 => now_sum = now_sum + now = 3 + 3 = 6 */
    /* now_sum = 6, num = 4 => now_sum = now_sum + now = 6 + 4 = 10 */
    /* 最終的に値10が返される */
    /* 配列先頭の値 + 2番目の値 -> 2番目までの値の和 + 3番目の値 -> 3番目までの値の和 + 4番目の値 -> .. という流れで処理される */
    var sum: number = input_neuron_values.map((num: number): number => num * weight).reduce((now_sum: number, num: number): number => now_sum + num);
    
    /* 出力層のニューロンの値を算出 */
    /* 単純に総和が閾値を超えたかどうかで判定するステップ関数を活性化関数として使用 他にはシグモイド関数などがある */
    if (sum > threshold) {
        return [1];
    } else {
        return [0];
    }

}

console.log("and回路", calc([0, 0], 0.5, 0.7));
console.log("and回路", calc([1, 0], 0.5, 0.7));
console.log("and回路", calc([0, 1], 0.5, 0.7));
console.log("and回路", calc([1, 1], 0.5, 0.7));
console.log("or回路", calc([0, 0], 0.5, 0.4));
console.log("or回路", calc([1, 0], 0.5, 0.4));
console.log("or回路", calc([0, 1], 0.5, 0.4));
console.log("or回路", calc([1, 1], 0.5, 0.4));
console.log("nand回路", calc([0, 0], -0.5, -0.7)); /* 両方が0の時のみ0 */
console.log("nand回路", calc([1, 0], -0.5, -0.7));
console.log("nand回路", calc([0, 1], -0.5, -0.7));
console.log("nand回路", calc([1, 1], -0.5, -0.7));


/* 多層パーセプトロン .. 単層パーセプトロンをつなげたもの */
/* ある2つの単層パーセプトロンの出力を、別の単層パーセプトロンの入力に用いるなど。(中間層) */

/* XOR(一方が0でもう一方が1なら1) .. NANDとORの出力をANDに代入することで算出 */
/* NAND算出とOR算出の第一引数は一致していなければダメ */
console.log("xor回路", calc(calc([0, 0], 0.5, 0.4).concat(calc([0, 0], -0.5, -0.7)), 0.5, 0.7)); // (0 or 0) and (0 nand 0) => 0 and 1 => 0
console.log("xor回路", calc(calc([0, 1], 0.5, 0.4).concat(calc([0, 1], -0.5, -0.7)), 0.5, 0.7)); // (0 or 1) and (0 nand 1) => 1 and 1 => 1
console.log("xor回路", calc(calc([1, 0], 0.5, 0.4).concat(calc([1, 0], -0.5, -0.7)), 0.5, 0.7)); // (1 or 0) and (1 nand 0) => 1 and 1 => 1
console.log("xor回路", calc(calc([1, 1], 0.5, 0.4).concat(calc([1, 1], -0.5, -0.7)), 0.5, 0.7)); // (1 or 1) and (1 nand 1) => 1 and 0 => 0