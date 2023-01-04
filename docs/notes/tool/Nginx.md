# Nginx

![image-20221230194337666](https://gitee.com/hen128/storage/raw/master/typora/2022-12-30%20194339.png)

## 301跳转

```language
# redirect http(s)://www.example.com to http(s)://example.com
server {
    server_name www.example.com;
    return 301 $scheme://example.com$request_uri;
}

# redirect http(s)://example.com to http(s)://www.example.com
server {
    server_name example.com;
    return 301 $scheme://www.$host$request_uri;
}
```