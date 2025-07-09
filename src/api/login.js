import request from '@/utils/request'

// 获取验证码
export function getCodeImg() {
  return request({
    url: 'admin/captcha/code',
    method: 'get'
  })
}

// 用户登录
export function login(username, password, captchaCode, id) {
  const data = {
    username,
    password,
    captchaCode,
    id
  }
  return request({
    url: 'admin/account/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

/////////////////////////////////////////////////////////////////////////

// 获取用户详细信息
export function getInfo() {
  return request({
    url: 'backendApi/login/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: 'backendApi/login/logout',
    method: 'post'
  })
}
