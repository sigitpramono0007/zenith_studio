/* =========================================================
   ZENITH STUDIO — data produk (dipakai di katalog & detail)
========================================================= */
const ZENITH_PRODUCTS = [
  {
    id: "starter",
    name: "Starter Page",
    category: "Bisnis",
    price: 1500000,
    rating: 4.8,
    reviews: 32,
    thumb: "thumb-a",
    tagline: "Landing page satu halaman untuk memulai kehadiran online bisnis kecil.",
    desc: "Starter Page cocok untuk usaha kecil atau produk baru yang butuh halaman profesional dengan cepat. Desain bersih, fokus pada satu pesan utama, dan siap menerima calon pelanggan pertama.",
    days: "3 hari kerja",
    revisions: "2x revisi",
    features: [
      "Desain satu halaman responsif",
      "Formulir kontak terhubung ke email",
      "Optimasi kecepatan & SEO dasar",
      "Domain & hosting siap pakai (opsional)",
      "1 kali sesi konsultasi desain"
    ],
    faq: [
      ["Apakah kontennya dibuatkan?", "Ya, tim kami membantu menyusun copywriting singkat berdasarkan brief yang Anda berikan."],
      ["Bisakah upgrade paket nanti?", "Bisa. Selisih biaya akan disesuaikan bila Anda upgrade ke paket Growth atau lainnya."]
    ]
  },
  {
    id: "growth",
    name: "Growth Page",
    category: "Bisnis",
    price: 3200000,
    rating: 4.9,
    reviews: 58,
    thumb: "thumb-d",
    tagline: "Landing page dengan animasi scroll dan integrasi CRM untuk mendorong konversi.",
    desc: "Growth Page dirancang untuk bisnis yang sudah berjalan dan ingin menaikkan angka konversi. Termasuk copywriting yang lebih dalam, integrasi WhatsApp/CRM, dan animasi yang membangun kepercayaan pengunjung.",
    days: "5 hari kerja",
    revisions: "3x revisi",
    features: [
      "Animasi scroll & micro-interaction",
      "Integrasi WhatsApp / CRM sederhana",
      "Copywriting konversi oleh tim kami",
      "Formulir multi-step dengan validasi",
      "Laporan performa 30 hari pertama"
    ],
    faq: [
      ["Integrasi CRM apa saja yang didukung?", "Kami mendukung WhatsApp Business API, Google Sheets, dan beberapa CRM populer sesuai kebutuhan."],
      ["Apakah termasuk pemasangan Google Analytics?", "Ya, Growth Page sudah termasuk pemasangan analitik dasar."]
    ]
  },
  {
    id: "ecommerce",
    name: "Toko Ringkas",
    category: "E-commerce",
    price: 4800000,
    rating: 4.7,
    reviews: 24,
    thumb: "thumb-e",
    tagline: "Landing page katalog produk dengan keranjang sederhana dan pembayaran online.",
    desc: "Toko Ringkas ideal untuk brand yang menjual beberapa produk unggulan tanpa perlu platform e-commerce penuh. Pengunjung bisa memilih produk, memasukkan ke keranjang, dan membayar langsung.",
    days: "7 hari kerja",
    revisions: "3x revisi",
    features: [
      "Katalog produk dengan filter kategori",
      "Keranjang belanja sederhana",
      "Integrasi payment gateway",
      "Notifikasi pesanan via email/WhatsApp",
      "Dashboard ringkas untuk kelola produk"
    ],
    faq: [
      ["Payment gateway apa yang didukung?", "Kami mendukung beberapa payment gateway lokal populer, disesuaikan dengan kebutuhan bisnis Anda."],
      ["Berapa maksimal produk yang bisa ditampilkan?", "Paket ini mendukung hingga 30 produk; lebih dari itu kami sarankan paket khusus."]
    ]
  },
  {
    id: "saas",
    name: "Peluncuran SaaS",
    category: "SaaS",
    price: 5500000,
    rating: 5.0,
    reviews: 19,
    thumb: "thumb-f",
    tagline: "Landing page peluncuran produk digital dengan demo interaktif dan tabel harga.",
    desc: "Dirancang khusus untuk startup yang meluncurkan produk SaaS. Menonjolkan fitur produk melalui demo interaktif, tabel perbandingan harga, dan integrasi analitik untuk memantau setiap klik.",
    days: "8 hari kerja",
    revisions: "3x revisi",
    features: [
      "Hero interaktif dengan pratinjau produk",
      "Tabel perbandingan paket harga",
      "Integrasi analitik & event tracking",
      "Bagian FAQ & studi kasus",
      "A/B testing headline (opsional)"
    ],
    faq: [
      ["Apakah bisa menampilkan video demo?", "Bisa, kami akan membantu menempatkan video demo produk di bagian hero atau fitur."],
      ["Apakah termasuk copywriting teknis?", "Ya, tim kami akan menyusun copy yang menjelaskan fitur teknis secara mudah dipahami."]
    ]
  },
  {
    id: "event",
    name: "Halaman Acara",
    category: "Event",
    price: 2200000,
    rating: 4.8,
    reviews: 41,
    thumb: "thumb-c",
    tagline: "Landing page pendaftaran acara dengan hitung mundur dan peta lokasi.",
    desc: "Cocok untuk seminar, workshop, atau acara komunitas. Dilengkapi hitung mundur menuju hari-H, formulir pendaftaran, dan peta lokasi agar peserta mudah menemukan tempat acara.",
    days: "4 hari kerja",
    revisions: "2x revisi",
    features: [
      "Hitung mundur otomatis ke tanggal acara",
      "Formulir pendaftaran & konfirmasi email",
      "Peta lokasi tertanam",
      "Galeri pembicara/sponsor",
      "Tombol bagikan ke media sosial"
    ],
    faq: [
      ["Apakah bisa untuk acara berulang/rutin?", "Bisa, kami dapat menyiapkan versi yang mudah diperbarui setiap acara berikutnya."],
      ["Apakah tiket berbayar didukung?", "Untuk tiket berbayar, kami akan menambahkan integrasi payment gateway sesuai kebutuhan."]
    ]
  },
  {
    id: "portfolio",
    name: "Portofolio Personal",
    category: "Personal",
    price: 1800000,
    rating: 4.9,
    reviews: 65,
    thumb: "thumb-b",
    tagline: "Landing page portofolio untuk kreator, freelancer, dan profesional individu.",
    desc: "Tunjukkan karya terbaik Anda dalam satu halaman yang rapi dan mudah dijelajahi. Cocok untuk desainer, fotografer, penulis, atau profesional yang ingin membangun citra personal secara online.",
    days: "3 hari kerja",
    revisions: "2x revisi",
    features: [
      "Galeri karya dengan tata letak fleksibel",
      "CV / pengalaman interaktif",
      "Formulir kontak & tautan sosial media",
      "Optimasi tampilan di perangkat mobile",
      "Sertifikat kepemilikan desain penuh"
    ],
    faq: [
      ["Apakah saya bisa mengganti karya sendiri nanti?", "Kami akan memberikan panduan singkat agar Anda dapat memperbarui galeri secara mandiri."],
      ["Apakah tersedia dalam bahasa Inggris?", "Bisa, silakan sampaikan kebutuhan dwibahasa saat sesi konsultasi."]
    ]
  }
];

/* =========================================================
   Helpers
========================================================= */
function formatRupiah(num){
  return "Rp" + num.toLocaleString("id-ID");
}

/* =========================================================
   Navbar: mobile toggle
========================================================= */
function initNav(){
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if(!toggle || !links) return;
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("is-open");
    links.classList.toggle("is-open");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      toggle.classList.remove("is-open");
      links.classList.remove("is-open");
    });
  });
}

/* =========================================================
   Scroll reveal via IntersectionObserver
========================================================= */
function initReveal(){
  const items = document.querySelectorAll(".reveal, .reveal-stagger");
  if(!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

/* =========================================================
   Animated counters (hero-trust / stats-strip)
========================================================= */
function initCounters(){
  const nums = document.querySelectorAll("[data-count]");
  if(!nums.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const decimals = el.dataset.count.includes(".") ? 1 : 0;
      const duration = 1400;
      const start = performance.now();
      function tick(now){
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = (decimals ? val.toFixed(1) : Math.round(val)) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  nums.forEach(el => io.observe(el));
}

/* =========================================================
   Testimonial carousel
========================================================= */
function initTestimonials(){
  const wrap = document.querySelector(".testi-wrap");
  if(!wrap) return;
  const slides = wrap.querySelectorAll(".testi-slide");
  const dots = wrap.querySelectorAll(".testi-dots button");
  let current = 0;
  let timer;

  function show(i){
    slides.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
    current = i;
  }
  function next(){ show((current + 1) % slides.length); }
  function restart(){ clearInterval(timer); timer = setInterval(next, 5200); }

  dots.forEach((d, idx) => d.addEventListener("click", () => { show(idx); restart(); }));
  show(0);
  restart();
}

/* =========================================================
   Catalog: filter + search + sort
========================================================= */
function renderCatalog(){
  const grid = document.querySelector("#catalogGrid");
  if(!grid) return;

  const chips = document.querySelectorAll(".chip");
  const searchInput = document.querySelector("#catalogSearch");
  const sortSelect = document.querySelector("#catalogSort");
  const emptyState = document.querySelector(".empty-state");
  let activeCategory = "Semua";

  function cardHTML(p){
    return `
      <a href="detail.html?id=${p.id}" class="package-card card-anim">
        <div class="package-thumb ${p.thumb}">
          <span class="cat-tag">${p.category}</span>
        </div>
        <div class="package-body">
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
          <div class="package-feats">
            <span>${p.days}</span>
            <span>★ ${p.rating}</span>
          </div>
          <div class="package-foot">
            <span class="package-price">${formatRupiah(p.price)}<br><small>per proyek</small></span>
            <span class="btn btn-outline btn-sm">Lihat detail</span>
          </div>
        </div>
      </a>`;
  }

  function draw(){
    const term = (searchInput?.value || "").toLowerCase().trim();
    const sortVal = sortSelect?.value || "populer";

    let list = ZENITH_PRODUCTS.filter(p => {
      const matchCat = activeCategory === "Semua" || p.category === activeCategory;
      const matchTerm = p.name.toLowerCase().includes(term) || p.tagline.toLowerCase().includes(term);
      return matchCat && matchTerm;
    });

    if(sortVal === "murah") list.sort((a,b) => a.price - b.price);
    if(sortVal === "mahal") list.sort((a,b) => b.price - a.price);
    if(sortVal === "rating") list.sort((a,b) => b.rating - a.rating);

    grid.innerHTML = list.map(cardHTML).join("");
    emptyState.classList.toggle("is-visible", list.length === 0);

    requestAnimationFrame(() => {
      grid.querySelectorAll(".card-anim").forEach((el, i) => {
        setTimeout(() => el.classList.add("is-shown"), i * 60);
      });
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeCategory = chip.dataset.category;
      draw();
    });
  });
  searchInput?.addEventListener("input", draw);
  sortSelect?.addEventListener("change", draw);

  draw();
}

/* =========================================================
   Homepage: featured packages preview (3 items)
========================================================= */
function renderFeatured(){
  const grid = document.querySelector("#featuredGrid");
  if(!grid) return;
  const featured = ["growth", "ecommerce", "saas"];
  grid.innerHTML = featured.map(id => {
    const p = ZENITH_PRODUCTS.find(x => x.id === id);
    return `
      <a href="detail.html?id=${p.id}" class="package-card">
        <div class="package-thumb ${p.thumb}"><span class="cat-tag">${p.category}</span></div>
        <div class="package-body">
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
          <div class="package-foot">
            <span class="package-price">${formatRupiah(p.price)}<br><small>per proyek</small></span>
            <span class="btn btn-outline btn-sm">Lihat detail</span>
          </div>
        </div>
      </a>`;
  }).join("");
}

/* =========================================================
   Product detail page
========================================================= */
function renderDetail(){
  const root = document.querySelector("#detailRoot");
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || ZENITH_PRODUCTS[0].id;
  const p = ZENITH_PRODUCTS.find(x => x.id === id) || ZENITH_PRODUCTS[0];

  document.title = p.name + " — Zenith Studio";
  document.querySelector("#breadcrumbCurrent").textContent = p.name;
  document.querySelector("#detailGalleryMain").className = "detail-gallery-main " + p.thumb;
  document.querySelectorAll(".detail-thumbs button").forEach((btn, i) => {
    btn.classList.toggle("is-active", i === 0);
    btn.addEventListener("click", () => {
      document.querySelectorAll(".detail-thumbs button").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const main = document.querySelector("#detailGalleryMain");
      main.style.opacity = 0;
      setTimeout(() => {
        main.className = "detail-gallery-main " + [p.thumb, "thumb-d", "thumb-e"][i % 3];
        main.style.opacity = 1;
      }, 200);
    });
  });

  document.querySelector("#detailCategory").textContent = p.category;
  document.querySelector("#detailTitle").textContent = p.name;
  document.querySelector("#detailRating").textContent = `${p.rating} (${p.reviews} ulasan)`;
  document.querySelector("#detailTagline").textContent = p.tagline;
  document.querySelector("#detailPrice").textContent = formatRupiah(p.price);
  document.querySelector("#detailDays").textContent = p.days;
  document.querySelector("#detailDesc").textContent = p.desc;

  document.querySelector("#featList").innerHTML = p.features.map(f => `
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>${f}</li>
  `).join("");

  document.querySelector("#faqList").innerHTML = p.faq.map((f, i) => `
    <div class="faq-item">
      <button class="faq-q">${f[0]}<span class="plus">+</span></button>
      <div class="faq-a"><p>${f[1]}</p></div>
    </div>
  `).join("");

  initTabs();
  initFaq();

  // Related packages (same category first, else others)
  const related = ZENITH_PRODUCTS.filter(x => x.id !== p.id)
    .sort((a,b) => (a.category === p.category ? -1 : 1))
    .slice(0, 3);
  document.querySelector("#relatedGrid").innerHTML = related.map(r => `
    <a href="detail.html?id=${r.id}" class="package-card">
      <div class="package-thumb ${r.thumb}"><span class="cat-tag">${r.category}</span></div>
      <div class="package-body">
        <h3>${r.name}</h3>
        <p>${r.tagline}</p>
        <div class="package-foot">
          <span class="package-price">${formatRupiah(r.price)}<br><small>per proyek</small></span>
          <span class="btn btn-outline btn-sm">Lihat detail</span>
        </div>
      </div>
    </a>
  `).join("");
}

function initTabs(){
  const buttons = document.querySelectorAll(".tabs-nav button");
  const panels = document.querySelectorAll(".tab-panel");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("is-active"));
      panels.forEach(p => p.classList.remove("is-active"));
      btn.classList.add("is-active");
      document.querySelector(`#panel-${btn.dataset.tab}`).classList.add("is-active");
    });
  });
}

function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("is-open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add("is-open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
}

/* =========================================================
   Admin dashboard
========================================================= */
function initAdmin(){
  const shell = document.querySelector(".admin-shell");
  if(!shell) return;

  document.querySelector(".sidebar-toggle")?.addEventListener("click", () => {
    shell.classList.toggle("is-collapsed");
  });

  // Animate stat values
  document.querySelectorAll(".stat-value[data-count]").forEach(el => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = prefix + val.toLocaleString("id-ID") + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  // Animate bar chart heights
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll(".bar-col .bar").forEach(bar => {
        bar.style.height = bar.dataset.height + "%";
      });
      document.querySelectorAll(".legend-bar > span").forEach(bar => {
        bar.style.width = bar.dataset.width + "%";
      });
    }, 150);
  });

  // Modal
  const modal = document.querySelector("#productModal");
  const openBtn = document.querySelector("#openModalBtn");
  const closeBtn = document.querySelector("#closeModalBtn");
  const form = document.querySelector("#productForm");
  const toast = document.querySelector("#toast");

  openBtn?.addEventListener("click", () => modal.classList.add("is-open"));
  closeBtn?.addEventListener("click", () => modal.classList.remove("is-open"));
  modal?.addEventListener("click", (e) => { if(e.target === modal) modal.classList.remove("is-open"); });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("is-open");
    form.reset();
    showToast("Produk baru berhasil ditambahkan");
  });

  function showToast(msg){
    toast.querySelector("span:last-child").textContent = msg;
    toast.classList.add("is-shown");
    setTimeout(() => toast.classList.remove("is-shown"), 3200);
  }
}

/* =========================================================
   Init all
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initReveal();
  initCounters();
  initTestimonials();
  renderCatalog();
  renderFeatured();
  renderDetail();
  initAdmin();
});
