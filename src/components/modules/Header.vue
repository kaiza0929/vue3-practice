<template>
    <!-- classは固定ヘッダを呼び出している -->
    <div id="header_area" class="sticky-top">
        <nav class="navbar navbar-dark bg-info">
            <div class="container-fluid">
                <h1 class="navbar-brand mb-0 h1" id="title">テスト提案ツール</h1>
                <div>
                    <router-link to="/" style="">テストログの表示</router-link>
                    <router-link to="/new">テストログの追加</router-link>
                </div>
            </div>
        </nav>
    </div> 
</template>

<style> 

</style>