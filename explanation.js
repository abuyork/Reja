// EXPRESS.JS VA EJS ASOSLARI

// 1. EXPRESS METHODS:

// app.get(path, callback) - GET so'rovlarini qabul qilish uchun
// - Misol: app.get("/hello", function(req, res) { ... })
// - Brauzerda URL orqali kirilganda ishlaydi

// app.post(path, callback) - POST so'rovlarini qabul qilish uchun
// - Misol: app.post("/create-item", function(req, res) { ... })
// - Formadan ma'lumot yuborilganda ishlaydi

// app.use() - Middleware (oraliq dastur)larni ulash uchun
// - Misol: app.use(express.json()) - JSON formatdagi ma'lumotlarni qabul qilish uchun
// - Misol: app.use(express.static("public")) - Statik fayllarni (rasm, css) serve qilish uchun

// 2. REQUEST (req) VA RESPONSE (res):

// req - Foydalanuvchidan kelgan so'rov
// - req.body - POST so'rovida kelgan ma'lumotlar
// - req.params - URL parametrlari (/users/:id)
// - req.query - URL query parametrlari (?name=John)

// res - Serverdan javob
// - res.send() - Oddiy text yuborish
// - res.json() - JSON formatda javob yuborish
// - res.render() - EJS faylni render qilish
// - res.end() - Javobni tugatish 

// 3. EJS (EMBEDDED JAVASCRIPT):

// EJS - HTML ichida JavaScript kodlarini yozish imkonini beruvchi template tili
// - <% %> - JavaScript kod yozish uchun
// - <%= %> - O'zgaruvchi qiymatini chiqarish uchun
// - <%- %> - HTML kodlarni render qilish uchun

// Misol:
// <% if (user) { %>
//     <h1>Salom, <%= user.name %></h1>
// <% } %>

// 4. EXPRESS SETUP:

// app.set("view engine", "ejs") - EJS ni asosiy ko'rinish tili sifatida o'rnatish
// app.set("views", "views") - EJS fayllar joylashgan papkani ko'rsatish

// 5. ROUTING MISOLLAR:

// app.get("/", (req, res) => {
//     res.render("home", { 
//         title: "Bosh sahifa",
//         users: ["Ali", "Vali"]
//     });
// });

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;
//     // Ma'lumotlar bazasi bilan ishlash
//     res.json({ success: true });
// });

// 6. MIDDLEWARE:

// Middleware - so'rov va javob orasida ishlaydigan funksiyalar
// - Autentifikatsiya
// - Ma'lumotlarni tekshirish
// - Xatolarni ushlash

// Misol:
// app.use((req, res, next) => {
//     console.log("Yangi so'rov keldi");
//     next();
// });
