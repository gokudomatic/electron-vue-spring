<template>
    <div class="main-loading">
        <div>
            <h1>Loading</h1>
            <loading-component/>
        </div>
    </div>
</template>

<script>
    import LoadingComponent from '@/components/LoadingComponent'

    const SERVER_CHECK_TIMEOUT=1000;
    const SERVER_MAX_CHECK_COUNT=20;

    const { app, dialog } = require('electron').remote;
    export default {
        components: {
            LoadingComponent
        },
        data() {
            return {
                'springServerError': false,
                'attemptCount': 0,
            }
        },
        methods: {
            checkSpringServerHealth() {
                this.$spring.get('/health')
                    .then(response => {
                        this.$router.push({name:'home'});
                    })
                    .catch(() => {
                        if(this.attemptCount++<SERVER_MAX_CHECK_COUNT){
                            window.setTimeout(this.checkSpringServerHealth,SERVER_CHECK_TIMEOUT);
                        } else {
                            this.springServerError=true;
                            dialog.showErrorBox('Server timeout',
                                `UI does not receive server response for ${SERVER_MAX_CHECK_COUNT} seconds.`);
                            app.quit()
                        }
                    });
            }
        },
        created() {
            window.setTimeout(this.checkSpringServerHealth, SERVER_CHECK_TIMEOUT);           
        }
    }
    
</script>

<style lang="scss" scoped>

.main-loading {
    color: #0053aa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    div {
        width: 200px;        

        h1 {
            text-align: center;
        }
    }
}

</style>