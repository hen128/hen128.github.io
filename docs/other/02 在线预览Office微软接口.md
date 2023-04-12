# 在线预览Office 微软接口

```vue
<template>
    <el-button @click="previewOffice">预览</el-button>
    <el-dialog width="90%" v-model="state.dialogTableVisible" title="Office 预览">
                <iframe class="w-1/1 h-480px" :src="state.officeUrl"></iframe>
    </el-dialog>
</template>

<script lang="ts" setup>
import {  reactive } from 'vue'

const state = reactive({
    dialogTableVisible:false,
    officeUrl:''
})

const previewOffice = ()=>{
    let routeUrl = 'https://file.zengweihao.cn/upload/2022-09-27/1664244153720.docx'
    let url = encodeURIComponent(routeUrl)
    state.officeUrl = 'http://view.officeapps.live.com/op/view.aspx?src=' + url
    state.dialogTableVisible = true
}

// window.open(officeUrl)
</script>

```