<template>
    <div>
        <p>elo</p>
    </div>
</template>
<script>
export default {
    name: 'Card',
    data(){
        return {
            elo: 1,
            hombre: {
                alo: 'mein name ist jan',
                thscoban: [
                    1,
                    2,
                    3,
                    4
                ]
            }
        }
    },
    probs: ['hallo', 'halllo'],
    created(){
        this.elo ++,
        this.hombre.thscoban = 'Jan'
    },
}
</script>