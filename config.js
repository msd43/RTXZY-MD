global.owner = ['79619201711,905510718257,905417885432,905313299422']  
global.mods = ['905510718257'] 
global.prems = ['905510718257']
global.nameowner = 'MSD'
global.numberowner = '79619201711' 
global.mail = 'msd@msd.my.id' 
global.gc = '/'
global.instagram = '/'
global.wm = '© MSD'
global.wait = '_*Devam ediyor...*_'
global.eror = '_*Sunucu Hatası*_'
global.stiker_wait = '*⫹⫺ Çıkartma Yapılıyor...*'
global.packname = 'İle yapılan'
global.author = 'MSD'

//INI WAJIB DI ISI!//
global.btc = 'Hfmxlnug' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'ELN4GgGh'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Apikey' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
