<template>
    <Paragraph>{{ test_content }}</Paragraph>
    <Button>{{ button_1_label }}</Button>
    <Button>{{ button_2_label }}</Button>
</template>

<script>

import Button from "./../atoms/Button";
import Paragraph from "./../atoms/Paragraph";

export default {

    components: {
        Button,
        Paragraph
    },

    /* 親から受け取るpropsの設定 */
    props: {
        test_content: String,
        button_1_label: String,
        button_2_label: String
    }

}

</script>