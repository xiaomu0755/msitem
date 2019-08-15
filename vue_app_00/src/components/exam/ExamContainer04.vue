<template>
  <div>
    <h3>面板组件</h3>
    <!--1:父容器-->
    <mt-tab-container v-model="active">
     <!--2:多个子面板-->
      <mt-tab-container-item id="tab1">
        子面板1
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        子面板2
      </mt-tab-container-item>      
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:"tab2" //保存显示子面板id
    }
  }
}
</script>

