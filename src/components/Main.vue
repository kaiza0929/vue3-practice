<template>
    <div>
        <div>
            <textarea placeholder="実行したテスト内容を入力"></textarea>
            <button class="btn btn-primary">テスト内容を送信</button>
        </div>
        <div>
            <div>
                <p>提案されたテスト観点</p>
            </div>
            <div>
                <p>関連しそうなキーワード</p>
            </div>
        </div>
    </div>
</template>

<style>

div#main_area {
    display: flex;
    flex-flow: column;
}

</style>

<script>

export default {

    data() {
        return {
            content: ""
        }
    }

}

</script>