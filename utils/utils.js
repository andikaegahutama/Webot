function generateRandomWhatsAppNumber() {
  const randomNumber = Math.floor(Math.random() * 10000000);
  return `0812${randomNumber}`;
}
function createTemplate() {
  const template = `Nama: Srihandayani
Whatapp: ${generateRandomWhatsAppNumber()}
  
Kecamatan: secang
Kelurahan: donorejo
Kode Pos: 56595
RT: 3
RW: 4
Alamat: Jl. Poros KM.11 dsn. Pelangi Dua
  
Pesanan: 2 vitasma
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

module.exports = {
  createTemplate,
};
