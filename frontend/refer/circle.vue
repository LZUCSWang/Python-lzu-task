<template>
    <div class="loading">
        <svg width="40" height="40">
            <circle class="loading-circle" :cx="radius" :cy="radius" :r="radius - strokeWidth"
                :stroke-width="strokeWidth" :stroke="strokeColor" fill="transparent" />
        </svg>
    </div>
</template>

<script>
    export default {
        name: "LoadingComp",
        props: {
            strokeColor: {
                type: String,
                default: "rgb(57, 123, 235)",
            },
            strokeWidth: {
                type: Number,
                default: 3,
            },
            radius: {
                type: Number,
                default: 20,
            },
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
    }



    @keyframes loadingAnim {
        0% {
            stroke-dasharray: 20 160;
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dasharray: 120 60;
            stroke-dashoffset: -160;
        }
    }

    .loading-circle {
        animation: loadingAnim;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }
</style>