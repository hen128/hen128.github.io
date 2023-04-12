# TypeScript

## script标签没有添加lang="ts"就会报错

```
Virtual script not found, may missing <script lang="ts"> / "allowJs": true / jsconfig.json. 
```

解决`tsconfig.json`

```json
"compilerOptions": {
	"allowJs": true,
}
```

