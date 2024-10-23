function generateRandomWhatsapp() {
  const prefix = "081";
  const randomNumber = Math.floor(Math.random() * 1000000000) + 1;
  console.log(randomNumber);
  return prefix + randomNumber;
}

function randomProductEDM() {
  const productEDM = [
    "Ben Rapat Kecil",
    "Samuralin",
    "SSK",
    "Generos",
    "New Briswa",
    "Weight Herba",
    "Deepol",
    "Etawalin",
    "Bemomio",
    "Zymuno",
    "Gizidat",
    "Freshmag",
    "Etawaku",
    "Nutriflakes",
    "Bio Insuleaf",
  ];
  const randomProduct = Math.floor(Math.random() * productEDM.length) + 1;
  return productEDM[randomProduct];
}

function randomProductEDX() {
  const productEDX = [
    "Vitasma",
    "Bruv Bar Soap",
    "Deep Beauty",
    "Eyebost",
    "Dipslipy",
    "Vitameal",
    "Vitummy",
  ];
  const randomProduct = Math.floor(Math.random() * productEDX.length) + 1;
  return productEDX[randomProduct];
}

function createTemplateEDM() {
  return `Nama: Srihandayani
WhatsApp: ${generateRandomWhatsapp()}
      
Kecamatan: secang
Kelurahan: donorejo
Kode Pos: 56595
RT: 3
RW: 4
Alamat: Jl. Poros KM.11 dsn. Pelangi Dua

Pesanan: 1 ${randomProductEDM()}
Jenis Pembayaran: COD

Potongan Ongkir: 3000
Biaya Admin: 1000
Advertiser: DODO
Platform Adv: Snack Video
Platform Crm: Tiktok
TIM: Vitasma
Tim Shift: Vitasma A
Notes: PROMO KILAT|WAJI 1|105000 ; DIPSIPY BELI 2 gratis 1`;
}

function createTemplateEDX() {
  return `Nama: Srihandayani
WhatsApp: ${generateRandomWhatsapp()}
      
Kecamatan: secang
Kelurahan: donorejo
Kode Pos: 56595
RT: 3
RW: 4
Alamat: Jl. Poros KM.11 dsn. Pelangi Dua

Pesanan: 1 ${randomProductEDX()}
Jenis Pembayaran: COD

Potongan Ongkir: 3000
Biaya Admin: 1000
Advertiser: DODO
Platform Adv: Snack Video
Platform Crm: Tiktok
TIM: Vitasma
Tim Shift: Vitasma A
Notes: PROMO KILAT|WAJI 1|105000 ; DIPSIPY BELI 2 gratis 1`;
}

module.exports = { createTemplateEDM, createTemplateEDX };
