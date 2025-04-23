
// === FİNANS BAR ===
fetch("https://run.mocky.io/v3/768efd66-a0b6-4d35-a48f-2efeaf0f3a50")
  .then(res => res.json())
  .then(data => {
    const ticker = document.getElementById("finance-ticker");

    data.finance_data.forEach(item => {
      const div = document.createElement("div");
      div.className = "finance-item";

      const directionIcon = item.direction === "up" ? "▲"
                         : item.direction === "down" ? "▼"
                         : "-";

      div.innerHTML = `
        <strong>${item.label}</strong>
        <span class="icon ${item.direction}">${directionIcon}</span>
        <span class="value">${item.value}</span>
        <span class="change ${item.direction}">${item.change} (${item.percent})</span>
      `;

      ticker.appendChild(div);
    });
  });




// === Reklam Kapatma ===
function closeAd(adId) {
    const ad = document.getElementById(adId);
    if (ad) ad.style.display = "none";
  }
  
  // === Global Değişkenler ===
  let slideIndex = 0;
  let slides = [];
  
  // === Sayfa Yüklendiğinde Başla ===
  document.addEventListener("DOMContentLoaded", () => {
    loadSlider();
  });

    /* SIDEBAR */
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("open");
      }
    
  
  // === Slider Verisini Mocky'den Çek ===
  function loadSlider() {
    fetch("https://run.mocky.io/v3/079890f3-c591-4724-a612-e89a02e7be08")
      .then(res => res.json())
      .then(data => {
        const newsArray = data.news;
        const container = document.getElementById("slider-container");
        container.innerHTML = "";
  
        newsArray.forEach((item, index) => {
          const card = document.createElement("div");
          card.classList.add("slide");
          if (index === 0) card.classList.add("active");
  
          card.innerHTML = `
          <a href="${item.url}" target="_blank">
            <img src="${item.imageUrl}" alt="${item.title}">
          </a>
          <div class="slide-text">
            <a href="${item.url}" target="_blank"><h3>${item.name}</h3></a>
            <p><strong>Kaynak:</strong> ${item.source}</p>
          </div>
        `;        
  
          container.appendChild(card);
        });
  
        slides = document.querySelectorAll(".slide");
        createDots(newsArray.length);
        startSlider();
      })
      .catch(error => {
        console.error("Slider verisi yüklenemedi:", error);
        document.getElementById("slider-container").innerHTML = "<p>Haberler yüklenemedi.</p>";
      });

  }
  
  // === Slider Otomatik Geçiş Fonksiyonu ===
  function startSlider() {
    setInterval(() => {
      nextSlide();
    }, 10000); // Her 5 saniyede bir geç
  }
  
  // === Slider'da Belirli Haberi Göster ===
  function showSlide(index) {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }
  
  // === Sonraki Habere Geç ===
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }
  
  // === Önceki Habere Geri Dön ===
  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  function createDots(count) {
    const dotContainer = document.createElement("div");
    dotContainer.id = "slider-dots";
    dotContainer.style.textAlign = "center";
    dotContainer.style.marginTop = "15px";
  
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
  
      dot.addEventListener("mouseenter", () => {
        slideIndex = i;
        showSlide(i);
        updateDots(i);
      });
  
      dotContainer.appendChild(dot);
    }
  
    document.querySelector(".slider-wrapper").appendChild(dotContainer);

  }
  
  function updateDots(activeIndex) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  }
  
    /*  DİĞER HABERLER  */

  function loadMoreNews() {
    fetch("https://run.mocky.io/v3/079890f3-c591-4724-a612-e89a02e7be08")
      .then(res => res.json())
      .then(data => {
        const newsContainer = document.getElementById("newsGrid");
        if (!newsContainer) return;
  
        // const selectedNews = data.news.slice(0, 3); // İlk 3 haberi al
  
        // selectedNews.forEach(haber => {
        //   const card = document.createElement("div");
        //   card.className = "news-card";

          data.news.forEach(haber => {
            const card = document.createElement("div");
            card.className = "news-card";
  
          card.innerHTML = `
            <a href="${haber.url}" target="_blank" style="text-decoration: none;">
              <img src="${haber.imageUrl}" alt="haber görseli">
              <h3>${haber.name}</h3>
            </a>
          `;
  
          newsContainer.appendChild(card);
        });
      })
      .catch(err => console.error("Haberler yüklenemedi:", err));
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    loadMoreNews(); // Diğer fonksiyonlar gibi sayfa yüklenince çalışır
  });
  

    /* YAZARLAR */

  function loadWriters() {
    fetch("https://run.mocky.io/v3/e09702c2-32f7-4714-9431-cafbb1daf662")
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("writers-container");
        if (!container) return;
  
        data.writers.forEach(writer => {
          const card = document.createElement("div");
          card.className = "writer-card";
  
          card.innerHTML = `
            <a href="${writer.url}" target="_blank" style="text-decoration: none; color: inherit;">
                <img src="${writer.imageUrl}" alt="${writer.name}">
                <h3>${writer.description}</h3>
                <p>${writer.name}</p>
            </a>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(err => console.error("Yazarlar yüklenemedi:", err));
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    loadWriters();
  });


  
  
  
  