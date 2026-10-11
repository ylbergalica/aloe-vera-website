(function () {
  const S = window.SITE;
  const PRODUCTS = window.PRODUCTS || [];
  const page = document.body.dataset.page || "home";
  const money = new Intl.NumberFormat(S.locale, { style: "currency", currency: S.currency });
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    menu: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    bag: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.5 3c.3 2.1 1.6 3.6 3.5 3.8v3c-1.3 0-2.5-.4-3.5-1.1v6.1c0 3.3-2.6 5.7-5.7 5.7S5 18.1 5 15s2.7-5.6 5.9-5.4v3.1c-1.5-.2-2.8.9-2.8 2.4 0 1.4 1.1 2.5 2.6 2.5s2.7-1.1 2.7-2.6V3h3.1z"/></svg>'
  };

  // ---------- Layout ----------
  const NAV = [
    ["home", "index.html", "Home"],
    ["shop", "shop.html", "Shop"],
    ["about", "about.html", "Our Story"],
    ["routine", "about.html#routine", "Skincare Routine"],
    ["contact", "contact.html", "Contact & FAQ"]
  ];

  function socials() {
    return ["instagram", "facebook", "tiktok"]
      .filter((k) => S[k])
      .map((k) => `<a href="${esc(S[k])}" target="_blank" rel="noopener" aria-label="${k}">${ICONS[k]}</a>`)
      .join("");
  }

  function renderLayout() {
    const header = document.getElementById("site-header");
    if (header) {
      header.innerHTML = `
        <a class="skip" href="#main">Skip to content</a>
        <div class="announce">${esc(S.announcement)}</div>
        <header class="header">
          <div class="container header__inner">
            <button class="icon-btn nav-toggle" aria-label="Open menu" aria-expanded="false">${ICONS.menu}</button>
            <a class="logo" href="index.html">
              ${window.leafMark(34)}
              <span class="logo__text"><span class="logo__name">${esc(S.name)}</span><span class="logo__tag">${esc(S.tagline)}</span></span>
            </a>
            <div class="header__actions">
              <button class="icon-btn cart-btn" aria-label="Open basket">${ICONS.bag}<span class="cart-count" hidden>0</span></button>
            </div>
          </div>
          <nav class="nav" aria-label="Main">
            <ul class="container">
              ${NAV.map(([id, href, label]) => `<li><a href="${href}"${id === page ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
            </ul>
          </nav>
        </header>`;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.innerHTML = `
        <footer class="footer">
          <div class="container footer__grid">
            <div>
              <a class="logo logo--footer" href="index.html">${window.leafMark(30)}<span class="logo__name">${esc(S.name)}</span></a>
              <p>Aloe vera grown, hand-harvested and made into skincare by our family, in small batches and with simple ingredients.</p>
              <div class="socials">${socials()}</div>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="shop.html#face">Face</a></li>
                <li><a href="shop.html#body">Body</a></li>
                <li><a href="shop.html#plants">Aloe plants</a></li>
                <li><a href="shop.html#gifts">Gift sets</a></li>
              </ul>
            </div>
            <div>
              <h4>Info</h4>
              <ul>
                <li><a href="about.html">Our story</a></li>
                <li><a href="about.html#routine">Skincare routine</a></li>
                <li><a href="contact.html#faq">FAQ</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Get in touch</h4>
              <ul>
                <li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
                ${S.phone ? `<li><a href="tel:${esc(S.phone.replace(/\s/g, ""))}">${esc(S.phone)}</a></li>` : ""}
                ${S.whatsapp ? `<li><a href="https://wa.me/${esc(S.whatsapp)}" target="_blank" rel="noopener">WhatsApp us</a></li>` : ""}
                <li>${esc(S.location)}</li>
              </ul>
            </div>
          </div>
          <div class="container footer__bottom">
            <span>© ${new Date().getFullYear()} ${esc(S.name)}. Handmade with care.</span>
            <span>Natural products — please patch test before first use.</span>
          </div>
        </footer>`;
    }

    // Basket drawer + toast live at the end of <body>
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="drawer" id="cart" hidden>
        <div class="drawer__backdrop" data-close></div>
        <aside class="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <div class="drawer__head">
            <h2 id="cart-title">Your basket</h2>
            <button class="icon-btn" data-close aria-label="Close basket">${ICONS.close}</button>
          </div>
          <div class="drawer__items"></div>
          <div class="drawer__foot">
            <div class="drawer__total"><span>Subtotal</span><strong class="cart-subtotal"></strong></div>
            <p class="drawer__note">No payment online. Send us your order and we'll confirm stock, delivery and payment by message.</p>
            <button class="btn btn--full" data-order="email">Send order by email</button>
            ${S.whatsapp ? '<button class="btn btn--full btn--ghost" data-order="whatsapp">Send order on WhatsApp</button>' : ""}
          </div>
        </aside>
      </div>
      <div class="toast" role="status" aria-live="polite"></div>`
    );
  }

  // ---------- Basket ----------
  const KEY = "aloe-basket";
  let basket = {};
  try { basket = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { basket = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(basket)); } catch (e) {} };
  const find = (id) => PRODUCTS.find((p) => p.id === id);
  const lines = () => Object.entries(basket).map(([id, qty]) => ({ p: find(id), qty })).filter((l) => l.p && l.qty > 0);
  const subtotal = () => lines().reduce((t, l) => t + l.p.price * l.qty, 0);

  function addToBasket(id) {
    basket[id] = (basket[id] || 0) + 1;
    save();
    renderBasket();
    toast(`${find(id).name} added to your basket`);
  }

  function setQty(id, qty) {
    if (qty <= 0) delete basket[id];
    else basket[id] = qty;
    save();
    renderBasket();
  }

  function renderBasket() {
    const count = lines().reduce((t, l) => t + l.qty, 0);
    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = count;
      el.hidden = count === 0;
    });
    const wrap = document.querySelector(".drawer__items");
    if (!wrap) return;
    const ls = lines();
    wrap.innerHTML = ls.length
      ? ls.map(({ p, qty }) => `
          <div class="line">
            <div class="line__img">${thumb(p)}</div>
            <div class="line__info">
              <strong>${esc(p.name)}</strong>
              <span>${esc(p.size)} · ${money.format(p.price)}</span>
              <div class="qty">
                <button data-qty="${p.id}" data-d="-1" aria-label="One less">−</button>
                <span>${qty}</span>
                <button data-qty="${p.id}" data-d="1" aria-label="One more">+</button>
              </div>
            </div>
            <button class="line__remove" data-remove="${p.id}">Remove</button>
          </div>`).join("")
      : `<div class="drawer__empty"><p>Your basket is empty.</p><a class="btn" href="shop.html">Browse products</a></div>`;
    document.querySelector(".cart-subtotal").textContent = money.format(subtotal());
    document.querySelector(".drawer__foot").hidden = !ls.length;
  }

  function orderText() {
    const ls = lines();
    return (
      `Hello ${S.name}, I'd like to order:\n\n` +
      ls.map((l) => `• ${l.qty} × ${l.p.name} (${l.p.size}): ${money.format(l.p.price * l.qty)}`).join("\n") +
      `\n\nSubtotal: ${money.format(subtotal())}\n\nMy name:\nDelivery address:\nPhone:\n`
    );
  }

  function openCart() {
    const d = document.getElementById("cart");
    d.hidden = false;
    requestAnimationFrame(() => d.classList.add("is-open"));
    document.body.style.overflow = "hidden";
    d.querySelector(".drawer__panel button").focus();
  }
  function closeCart() {
    const d = document.getElementById("cart");
    d.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => (d.hidden = true), 300);
  }

  let toastTimer;
  function toast(msg) {
    const t = document.querySelector(".toast");
    t.innerHTML = `${esc(msg)} <button type="button" class="toast__link">View basket</button>`;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 3500);
  }

  // ---------- Products ----------
  const thumb = (p) => (p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">` : window.productArt(p));

  function card(p) {
    return `
      <article class="card reveal" data-cat="${p.category}">
        <div class="card__img">${thumb(p)}</div>
        <div class="card__body">
          <h3>${esc(p.name)}</h3>
          <p class="card__size">${esc(p.size)}</p>
          <p class="card__desc">${esc(p.desc)}</p>
          <div class="card__foot">
            <span class="price">${money.format(p.price)}</span>
            <button class="btn btn--small" data-add="${p.id}">Add to basket</button>
          </div>
        </div>
      </article>`;
  }

  function renderGrids() {
    document.querySelectorAll("[data-products]").forEach((grid) => {
      const mode = grid.dataset.products;
      const list = mode === "featured" ? PRODUCTS.filter((p) => p.featured) : PRODUCTS;
      grid.innerHTML = list.map(card).join("");
    });

    const filters = document.querySelector(".filters");
    if (filters) {
      const apply = (cat) => {
        filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.filter === cat));
        document.querySelectorAll(".card").forEach((c) => (c.hidden = cat !== "all" && c.dataset.cat !== cat));
      };
      filters.addEventListener("click", (e) => {
        const b = e.target.closest("button[data-filter]");
        if (!b) return;
        apply(b.dataset.filter);
        history.replaceState(null, "", b.dataset.filter === "all" ? location.pathname : "#" + b.dataset.filter);
      });
      const fromHash = location.hash.slice(1);
      apply(filters.querySelector(`[data-filter="${fromHash}"]`) ? fromHash : "all");
    }

    const hero = document.querySelector("[data-hero-art]");
    if (hero) hero.innerHTML = window.heroArt();
    document.querySelectorAll("[data-leaf]").forEach((el) => (el.innerHTML = window.leafMark(+el.dataset.leaf || 40)));
  }

  // ---------- Forms ----------
  function initForms() {
    document.querySelectorAll("form[data-form]").forEach((form) => {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        const kind = form.dataset.form;
        const msg = form.querySelector(".form__msg");
        if (S.formEndpoint) {
          try {
            const res = await fetch(S.formEndpoint, {
              method: "POST",
              headers: { Accept: "application/json", "Content-Type": "application/json" },
              body: JSON.stringify({ _subject: kind === "newsletter" ? "Newsletter sign-up" : "Website message", ...data })
            });
            if (!res.ok) throw new Error();
            form.reset();
            msg.textContent = kind === "newsletter" ? "Thank you! You're on the list." : "Thank you! We'll get back to you soon.";
          } catch (err) {
            msg.textContent = "Sorry, something went wrong. Please email us directly.";
          }
          return;
        }
        const subject = kind === "newsletter" ? "Please add me to your mailing list" : `Message from ${data.name || "the website"}`;
        const body = kind === "newsletter" ? `Please send news and offers to: ${data.email}` : `${data.message}\n\n${data.name}\n${data.email}`;
        location.href = `mailto:${S.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        msg.textContent = "Your email app should open with the message ready to send.";
      });
    });
  }

  // ---------- Events ----------
  function initEvents() {
    document.addEventListener("click", (e) => {
      const t = e.target;
      const add = t.closest("[data-add]");
      if (add) return addToBasket(add.dataset.add);
      if (t.closest(".cart-btn") || t.closest(".toast__link")) return openCart();
      if (t.closest("[data-close]")) return closeCart();
      const q = t.closest("[data-qty]");
      if (q) return setQty(q.dataset.qty, (basket[q.dataset.qty] || 0) + +q.dataset.d);
      const rm = t.closest("[data-remove]");
      if (rm) return setQty(rm.dataset.remove, 0);
      const order = t.closest("[data-order]");
      if (order) {
        const text = orderText();
        if (order.dataset.order === "whatsapp") window.open(`https://wa.me/${S.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
        else location.href = `mailto:${S.email}?subject=${encodeURIComponent("New order from the website")}&body=${encodeURIComponent(text)}`;
        return;
      }
      const toggle = t.closest(".nav-toggle");
      if (toggle) {
        const open = document.querySelector(".header").classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open);
        toggle.innerHTML = open ? ICONS.close : ICONS.menu;
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !document.getElementById("cart").hidden) closeCart();
    });
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  renderLayout();
  renderGrids();
  renderBasket();
  initForms();
  initEvents();
  initReveal();
  document.querySelectorAll("[data-brand]").forEach((el) => (el.textContent = S.name));
  document.querySelectorAll("[data-email]").forEach((el) => { el.textContent = S.email; el.href = "mailto:" + S.email; });
})();
