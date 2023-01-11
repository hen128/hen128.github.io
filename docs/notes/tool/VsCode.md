# VsCode

## 去除分号和双引号方法

https://blog.csdn.net/qq_37939251/article/details/105808682

## 自定义代码片段

每次新建一个页面，都会有很多相同的代码，这时候就可以使用VSCode的`用户代码片段` 功能。这个功能可以在VSCode界面的左下角的齿轮图标中找到。 以Nuxt为例，找到后新建一个Nuxt的片段就可以了。

```json
{
	"nuxt": {
		"scope":"vue",// 限定文件类型
		"prefix": "nuxt",
		"body": [
			"<template>",
			"  <div class=\"$1\"></div>",// 鼠标光标位置
			"</template>",
			"",
			"<script setup>",
			"import {} from 'vue'",
			"</script>",
			"",
			"<style scoped></style>",
		],
		"description": "nuxt3 Components"
	}
}
```

新建好之后，我们再次回到VSCode中的`Demo1.vue`页面，直接输入 `nuxt` 回车后，就会生成一段代码了。
