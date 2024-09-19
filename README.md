# Hotel Pocketbase

**Hotel Pocketbase**, otel odaları, rezervasyonlar ve müşteri bilgilerini yönetmek için oluşturulmuş hafif ve hızlı bir otel yönetim sistemidir. Bu proje, Pocketbase'i backend olarak kullanarak, otel işletmelerinin ihtiyacı olan temel yönetim araçlarını sunmayı hedefler.

## Özellikler

- **Oda Yönetimi:** Otel odalarının eklenmesi, güncellenmesi ve silinmesi.
- **Rezervasyon Sistemi:** Misafirlerin uygun odaları görüp, rezervasyon yapabilmesi.
- **Kullanıcı Dostu Arayüz:** Otel çalışanları ve misafirler için sade ve sezgisel bir kullanıcı arayüzü.
- **Pocketbase Entegrasyonu:** Verilerin yönetimi için Pocketbase kullanılır.

## Gereksinimler

Projeyi kurmadan önce aşağıdaki yazılımların bilgisayarınıza kurulu olduğundan emin olun:

- **Node.js** (v16.x veya daha üstü)
- **Pocketbase** (Backend servisi)
- **Git** (Versiyon kontrol sistemi)

## Kurulum

1. Bu repoyu klonlayın:
   ```bash
   git clone https://github.com/Tressaera/hotel-pocketbase.git
2. Proje dizinine gidin:
   ```bash
   cd booking-hotel-nextjs14
3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
4. Ortam değişkenlerini ayarlayın: Proje kök dizininde .env dosyası oluşturun ve aşağıdaki gibi yapılandırın:
   ```bash
   POCKETBASE_URL=<Pocketbase URL'niz>
   API_KEY=<Pocketbase API Anahtarınız>
5. Uygulamayı çalıştırın:
   ```bash
   npm run dev

## Dosya Yapısı
Proje dosya yapısı aşağıdaki gibidir:
hotel-pocketbase/
│
├── actions/
│   └── getRooms.ts            # Odalarla ilgili verileri yöneten işlemler
│
├── components/
│   └── ui/                    # UI bileşenleri (Carousel vb.)
│
├── constants/                 # API URL'leri ve sabitler
│
├── pages/
│   ├── api/                   # API endpoint'leri
│   └── rooms/                 # Oda detay sayfası
│
├── _components/
│   └── ReservationForm.tsx     # Rezervasyon formu bileşeni
│
├── public/                    # Statik dosyalar (resimler vb.)
│
└── styles/                    # Proje genelindeki stil dosyaları

## Kullanılan Teknolojiler

### Frontend

- **Next.js**: React tabanlı framework.
- **React**: Kullanıcı arayüzü bileşenlerini oluşturmak için kullanılır.
- **Tailwind CSS**: Proje stil ve tasarımını yönetmek için kullanılan CSS framework'ü.

### Backend

- **Pocketbase**: JSON tabanlı veritabanı ve backend servisi.
- **Node.js**: Backend işlemlerini yönetmek için kullanılır.

### Veritabanı

- **SQLite**: Pocketbase tarafından kullanılan veritabanı.

   
