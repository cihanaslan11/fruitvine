# Fruit Vine'ı telefona uygulama gibi kurmak

Bu klasör, oyunun **mağazaya gerek kalmadan** telefona kurulabilen sürümüdür (PWA). Kurulunca ana ekranda Fruit Vine ikonu olur; tam ekran açılır ve **internet olmadan da** çalışır. Arkadaşlarına da aynı bağlantıyı gönderip kurdurabilirsin; Google Play'in istediği 12 test kullanıcısını bulmak için de iyi bir başlangıç.

## 1. İnternete koy (bir kere, ~10 dakika, ücretsiz)

1. github.com'a gir. Gizlilik sayfası için açtığın `fruitvine` deposunu kullanabilir ya da yeni bir depo açabilirsin (**Public** olmalı).
2. **Add file → Upload files** ile bu klasördeki **her şeyi** yükle: `index.html`, `sw.js`, `manifest.webmanifest`, `privacy.html`, `terms.html` ve `fonts`, `icons` klasörleri. Klasörleri olduğu gibi sürükleyip bırakabilirsin.
3. **Settings → Pages → Branch: main → Save**.
4. Birkaç dakika sonra oyunun adresi: `https://KULLANICIADIN.github.io/fruitvine/`

## 2. iPhone'a kur

1. **Safari** ile adresi aç. Chrome değil, Safari olmalı.
2. Alttaki **Paylaş** düğmesi (yukarı ok olan kare) → **Ana Ekrana Ekle** → **Ekle**.
3. Ana ekrandaki Fruit Vine ikonundan aç: tam ekran açılır.
4. Sesi duymak için telefonun yanındaki **sessiz mod düğmesi kapalı** olmalı.

## 3. Android'e kur

1. **Chrome** ile adresi aç.
2. Sağ üstteki **⋮** menüsü → **Uygulamayı yükle** (veya **Ana ekrana ekle**).

## Test modu

Adresin sonuna `?test` eklersen (`.../fruitvine/?test`) test modu açılır: Ayarlar'da sürüm yazısına 5 kez dokununca her şey dolar. Normal adres gerçek oyuncu deneyimidir.

## Güncelleme yüklemek

Yeni sürümde değişen dosyaları GitHub'a tekrar yükle ve `sw.js` içindeki `VERSION` değerini artır (ör. `fv-0.42`). Oyuncular uygulamayı bir sonraki açışta yeni sürümü alır.

## Bilinen sınırlar (mağaza sürümünde yoklar)

- Gerçek reklam ve uygulama içi satın alma yok; bunlar sadece mağaza sürümünde çalışır.
- iPhone'da titreşim yok. Apple, web uygulamalarına titreşim izni vermiyor; mağaza sürümünde var.
- İlerleme o telefonun tarayıcısında saklanır. Safari'nin site verilerini silersen ilerleme de silinir.
