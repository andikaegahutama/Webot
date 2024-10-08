const Chance = require("chance");
const chance = new Chance();

function generateRandomWhatsAppNumber() {
  const randomNumber = Math.floor(Math.random() * 10000000) + 1;
  return `0812${randomNumber}`;
}

function generateRandomPostCode() {
  const randomNumber = Math.floor(Math.random() * 100000) + 1;
  return randomNumber;
}

function generateRandomNumbers() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

function generateRandomProductEDM() {
  let productEDM = [
    "samuralin",
    "generos",
    "deepol",
    "etawalin",
    "zymuno",
    "bemomio",
    "SSK",
    "new briswa",
    "weight herba",
    "gizidat",
    "freshmag",
    "rube",
    "garlicing",
    "optimaxx",
    "nutriflakes",
    "bio insuleaf",
  ];
  const randomProduct = Math.floor(Math.random() * productEDM.length);
  return productEDM[randomProduct];
}

function generateRandomProductEDX() {
  let productEDX = [
    "vitasma",
    "deep beauty",
    "eyebost",
    "dipslipy",
    "vitameal",
    "vitummy",
  ];
  const randomProduct = Math.floor(Math.random() * productEDX.length);
  return productEDX[randomProduct];
}

function createTemplateEDM() {
  const template = `Nama: ${chance.name()}
Whatapp: ${generateRandomWhatsAppNumber()}
  
Kecamatan: secang
Kelurahan: donorejo
Kode Pos: 56595
RT: 3
RW: 4
Alamat: Jl. Poros KM.11 dsn. Pelangi Dua
  
Pesanan: ${generateRandomNumbers()} ${generateRandomProductEDM()}
Jenis Pembayaran: COD
Potongan Ongkir: 11.000
Biaya Admin: 1000
  
      
Advertiser: DODO
Platform Adv: Snack Video
Platform Crm: Tiktok
TIM: Vitasma
Tim Shift: Vitasma A
Notes: PROMO KILAT|WAJI 1|105000 ; DIPSIPY BELI 2 gratis 1`;
  return template;
}

function createTemplateEDMKodeUnik() {
  const template = `Nama: ${chance.name()}
Whatapp: ${generateRandomWhatsAppNumber()}
  
Kecamatan: secang
Kelurahan: donorejo
Kode Pos: 56595
RT: 3
RW: 4
Alamat: Jl. Poros KM.11 dsn. Pelangi Dua
  
Pesanan: ${generateRandomNumbers()} ${generateRandomProductEDM()}
Jenis Pembayaran: TF-UNIQUECODE
Potongan Ongkir: 11.000
Biaya Admin: 1000
  
      
Advertiser: DODO
Platform Adv: Snack Video
Platform Crm: Tiktok
TIM: Vitasma
Tim Shift: Vitasma A
Notes: PROMO KILAT|WAJI 1|105000 ; DIPSIPY BELI 2 gratis 1`;
  return template;
}

function createTemplateEDX() {
  const template = `Nama: ${chance.name()}
Whatapp: ${generateRandomWhatsAppNumber()}
  
Kecamatan: secang
Kelurahan: donorejo
Kode Pos: 56595
RT: 3
RW: 4
Alamat: Jl. Poros KM.11 dsn. Pelangi Dua
  
Pesanan: ${generateRandomNumbers()} ${generateRandomProductEDX()}
Jenis Pembayaran: COD
Potongan Ongkir: 11.000
Biaya Admin: 1000
  
      
Advertiser: DODO
Platform Adv: Snack Video
Platform Crm: Tiktok
TIM: Vitasma
Tim Shift: Vitasma A
Notes: PROMO KILAT|WAJI 1|105000 ; DIPSIPY BELI 2 gratis 1`;
  return template;
}

function createTemplateEDXKodeUnik() {
  const template = `Nama: ${chance.name()}
Whatapp: ${generateRandomWhatsAppNumber()}
  
Kecamatan: secang
Kelurahan: donorejo
Kode Pos: 56595
RT: 3
RW: 4
Alamat: Jl. Poros KM.11 dsn. Pelangi Dua
  
Pesanan: ${generateRandomNumbers()} ${generateRandomProductEDX()}
Jenis Pembayaran: TF-UNIQUECODE
Potongan Ongkir: 11.000
Biaya Admin: 1000
  
      
Advertiser: DODO
Platform Adv: Snack Video
Platform Crm: Tiktok
TIM: Vitasma
Tim Shift: Vitasma A
Notes: PROMO KILAT|WAJI 1|105000 ; DIPSIPY BELI 2 gratis 1`;
  return template;
}

module.exports = {
  createTemplateEDM,
  createTemplateEDMKodeUnik,
  createTemplateEDX,
  createTemplateEDXKodeUnik,
};
