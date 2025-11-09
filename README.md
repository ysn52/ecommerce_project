# 🛍️ E-Commerce Project (Spring Boot + React)

Bu proje, **React (Vite)** tabanlı bir frontend ve **Spring Boot** tabanlı bir backend kullanılarak geliştirilmiş bir **tam yığın (full-stack)** e-ticaret uygulamasıdır.  
Amaç, ürünlerin listelenmesi, kategorilere göre filtrelenmesi ve kullanıcı dostu bir arayüzle yönetilmesidir.

---

## ⚙️ Teknolojiler

### 🖥️ Backend
- Java 21
- Spring Boot 3.x
- Spring Data JPA (Hibernate)
- MySQL
- Lombok
- Maven

### 💻 Frontend
- React + Vite
- Axios
- Tailwind CSS (veya varsa senin kullandığın CSS framework)
- Fetch API

---

## 🗂️ Proje Yapısı

ecommerce_project/
├── src/ # Spring Boot backend source files
│ ├── main/java/com/... # Controller, Service, Repository, Entity
│ └── resources/
│ └── application.properties
│
├── ecom-catalog-react/ # React frontend
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
├── pom.xml # Maven project descriptor
└── README.md


---

## 🚀 Kurulum (Local Çalıştırma)

### 1️⃣ Backend
```bash
cd ecommerce_project
./mvnw spring-boot:run
veya IntelliJ IDEA üzerinden EcommerceProjectApplication.java dosyasını çalıştır.


cd ecom-catalog-react
npm install
npm run dev
Frontend, varsayılan olarak http://localhost:5173 portunda çalışır.
Backend ise http://localhost:8080 portundadır.


API Uç Noktaları (Backend)

| Endpoint             | Method | Açıklama                  |
| -------------------- | ------ | ------------------------- |
| `/api/products`      | GET    | Tüm ürünleri listeler     |
| `/api/categories`    | GET    | Tüm kategorileri listeler |
| `/api/products/{id}` | GET    | Ürün detayını getirir     |
| `/api/products`      | POST   | Yeni ürün ekler (örnek)   |

Özellikler

Ürün listeleme

Kategoriye göre filtreleme

Arama çubuğu ile ürün arama

Fiyat sıralama (artan/azalan)

REST API yapısı

Frontend–Backend entegrasyonu

