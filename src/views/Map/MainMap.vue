<template>
    <div class="amap-wrapper">
        <el-amap vid="amapDemo" :amap-manager="amapManager" :zoom="mapConfig.zoom" :center="mapConfig.center" :events="mapEvents" class="amap-demo">
            <el-amap-marker vid="component-marker" :events="events" :icon="markerIcon" :position="marker.position" ></el-amap-marker>
        </el-amap>
    </div>
</template>

<script>
    import {
        AMapManager
    } from 'vue-amap';
    import VueAMap from 'vue-amap'

    let amapManager = new VueAMap.AMapManager();
    export default {
        name: "MainMap",
        data() {
            let self=this;
            return {
                amapManager,
                mapConfig:{
                    zoom: 18, //级别
                    center: [120.390001,31.519832], //中心点坐标
                },
                markerIcon:"/img/point1.png",
                mapEvents: {
                    init(o) {
                        o.setMapStyle('amap://styles/c2c43596a40382d5b03d0c6c4996e219');
                    }
                },
                marker: {
                    position: [120.389829,31.52063],
                },
                visitAble:false,
                events:{
                    click:()=>{
                        this.visitAble=true;
                        console.log(this.visitAble);
                    }
                }
            }
        },
        method: {
            markerClick(){

            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .amap-wrapper {
        height: 800px;
    }

    .amapDemo {
        height: 100%;
        width: 100%;
    }
</style>
