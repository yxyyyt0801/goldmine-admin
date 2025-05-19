import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvpFJvFx+VMSc5lDKAsxL\n' +
  'JkalfT9k04MVhiIqPwmTALyi2B7hXxyx0kHXEGFIr61momNiaCVSoh+ZKpUvnqoi\n' +
  'mFeywZmj8Zg2UigDhqAXA4f8zwxnf3QAEBrhJThgF6EA48tVhB74bpXTC9Ea29kG\n' +
  't7UEGbKhwskxMuQXU8uxn6AltoG3APb5MeumbxUjWFf02C5KePMQARul0YCa0uZF\n' +
  'XxEm3FwqrUxpLaHRXm4LSLpOboTrSmn7IFn7Dj/6QNB30hufnNbh8Hbfo3hVqHjW\n' +
  'sYhlGAa+PuYEljNDpSKYABdRHlhJtxX77C684tliTLEh901tM1IZXZLjnUfh0C23\n' +
  'RQIDAQAB'

const privateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+kUm8XH5UxJzm\n' +
  'UMoCzEsmRqV9P2TTgxWGIio/CZMAvKLYHuFfHLHSQdcQYUivrWaiY2JoJVKiH5kq\n' +
  'lS+eqiKYV7LBmaPxmDZSKAOGoBcDh/zPDGd/dAAQGuElOGAXoQDjy1WEHvhuldML\n' +
  '0Rrb2Qa3tQQZsqHCyTEy5BdTy7GfoCW2gbcA9vkx66ZvFSNYV/TYLkp48xABG6XR\n' +
  'gJrS5kVfESbcXCqtTGktodFebgtIuk5uhOtKafsgWfsOP/pA0HfSG5+c1uHwdt+j\n' +
  'eFWoeNaxiGUYBr4+5gSWM0OlIpgAF1EeWEm3FfvsLrzi2WJMsSH3TW0zUhldkuOd\n' +
  'R+HQLbdFAgMBAAECggEAAf6nVO9q6xw7wDVsR+c3iikHJm55cbVXjlXhN1O0VDel\n' +
  'RLneBg7Y1aiWxbce+afJAT4lE44AdW37PnTdUL3bKtkQJ/Khwq+jMez1TH10gDb2\n' +
  'MHyiwLTII2MEpE0YxGaNCdVhCccBNrcexGrl6xM0fMvKRTKXeuB8QVod3GSvcUpJ\n' +
  'N7ZU2NEntSH9ZUGcQEs9774+5cC6jog4KP5L++6lNDr0j03b9bf8bF5GICk1xRaa\n' +
  'ftIiQ/JDd8EE24PeJ0qq+UVIZA5QqGfwtExcOj7jRajhtnTXlwaSei9rra2rmA5q\n' +
  'khx7QzfliyiFZirv0eWk/lV2E0MYtgzvbxuyL36KQQKBgQDuCFBIkNmJLpW5EoDk\n' +
  'tK2ows0DB5scd97jms2IFOuK6uig9LzZ428J9E/mvcHF9YjBc4uB+uLwYPt4u7x2\n' +
  'lrV2Dd7YYF8qsqlrFR2LpYGXv45eahOgfd21nr2Wgorwi4STT4ikOidYwmB+3pVt\n' +
  'q40M4SvM2U/N7Vc/GKnuKwSTHQKBgQDM88W/XLV/lD3Yvrj/+y2R35MLvB5dy1+U\n' +
  'O8DjouAujve3EUMKyeKLIG4X/jceZzSxBTA8f9fd9avm4YsZ/uIvUTPyxYidmKJ/\n' +
  'qZKRzw0R9aarH+9d/W1AgNPEm768dJHC1eHK6vXRCy5QayMe3E2Lw9zPGiGmz+YB\n' +
  'DMdDzq+USQKBgQCLx1wF0PG9qhqIDMKeCy+zW3lyXwQKKqY7uAsb71UGRb4HztAb\n' +
  'j4AEM3C8ShBBRFdjaouw73hWukzR8ETSytuSkMCdBbK86x+r30FzYOSCDR34eYg/\n' +
  'BcqtPaONf+lBKlzW+Kx/7Bpw9+wcdG8BcO0qdAv5hl9jyQ0j40LetmpATQKBgBaf\n' +
  'adp/n0Ef2dvM4ZrP3O3XIeIPt8JeqoQwPFBkMB6zhUBd1WqhcjItODnJw8fFWJmZ\n' +
  'mwNykR9c+MaZasNJ0Smr6vIHP9c1e+pfi2Aw3J544RbOhZt4V9Dg538yOdGPhG9f\n' +
  'MHc3jD6w30HdMZk8dArTadIqbkB9fkPrZyti6xqRAoGAGz/eV4w7vfMje1GoXmIK\n' +
  'agQuCalNuk5M7sPIok3UzwIxiLgtgDPtmtbuqGWOn2/f4mUOruE/0zzdldef9X7u\n' +
  '2pq3AE2A4PqWQjrnVvtYhGcwja1BXntZriBoeqhZhi0X3UZg5a8kHudYNrFGjmQF\n' +
  'NknRVaWtlAiPd0VAfDAWjp8='

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

