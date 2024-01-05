```js
    const nodeemailer = require('nodemailer')

    const transporter = nodeemailer.createTransport({
        host: "smtp.qq.com", // QQ邮箱的SMTP地址
        port: 465, // 每个邮箱的端口号可能是一样的，一般都使用465，但有些公司使用的就不是465
        auth: {
            "user": 'hen128@qq.com', // 你自己的邮箱的邮箱地址
            "pass": 'goxqnowamdxdgexx' // 授权码，需要到qq邮箱申请
        }
    })

    sendCode = (email) => {
        // 六位验证码
        let emailCode = (function captchaNumber() {
            let num = []
            for (let i = 0; i < 6; i++) {
                num[i] = parseInt(Math.random() * 10)
            }
            return num.join('')
        })()

        let mailOptions = {
            from: 'hen128@qq.com', // 发件人地址
            to: email, // 收件人地址，多个收件人可以使用逗号分隔
            subject: '来自博客 zengweihao.cn 的邮件', // 邮件标题
            html: `<p>您好，您的验证码为：</p><h1> ${ emailCode }</h1><p> 您当前正在 <a href="https://zengweihao.cn">https://zengweihao.cn</a> 进行操作，验证码告知他人将会导致数据信息被盗，请勿泄露</p><p style="font-size: 1.5rem;color:#999;">5分钟内有效</p>` // 邮件内容
        }

        transporter.sendMail(mailOptions, function (error, info) {
            // if (err) {
            //     console.error(err)
            // }
            console.log('info:', info)

        })
        console.log(emailCode)
        return emailCode // 返回验证码
    }

    sendEmail(email, content) {

        let mailOptions = {
            from: 'hen128@qq.com', // 发件人地址
            to: email, // 收件人地址，多个收件人可以使用逗号分隔
            subject: '来自博客 zengweihao.cn 的邮件', // 邮件标题
            html: `<pre>${content}</pre>`
        }

        transporter.sendMail(mailOptions, function (error, info) {
        
            if (error) {
                console.log(error);
            }

            return true
        })
    }
    


    // 发送验证码
    sendCode('1379708404@qq.com')
    


```