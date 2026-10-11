// Hand-drawn style SVG illustrations used until real product photos are added.
(function () {
  const LEAF_TONES = ["#6f9a5c", "#5c8a4c", "#7fae69", "#4f7a42", "#86b26f"];

  // One aloe leaf, drawn pointing up from (0,0), then rotated into place.
  function leaf(x, y, len, w, angle, fill, spots) {
    const d =
      `M0,0 C${-w},${-len * 0.25} ${-w * 0.55},${-len * 0.7} ${w * 0.12},${-len} ` +
      `C${w * 0.35},${-len * 0.66} ${w},${-len * 0.3} 0,0 Z`;
    let dots = "";
    if (spots) {
      for (let i = 1; i <= 5; i++) {
        const cy = -len * (0.15 + 0.13 * i);
        const cx = (i % 2 ? -1 : 1) * w * 0.16 + w * 0.02 * i;
        dots += `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${(w * 0.07).toFixed(1)}" ry="${(w * 0.035).toFixed(1)}" fill="#fff" opacity=".35"/>`;
      }
    }
    return (
      `<g transform="translate(${x},${y}) rotate(${angle})">` +
      `<path d="${d}" fill="${fill}"/>` +
      `<path d="M0,0 Q${w * 0.05},${-len * 0.5} ${w * 0.12},${-len}" stroke="rgba(0,0,0,.10)" stroke-width="1.2" fill="none"/>` +
      dots +
      `</g>`
    );
  }

  function aloeRosette(cx, baseY, scale, spots) {
    const spec = [
      [-74, 0.62, 0.8], [74, 0.6, 0.8],
      [-56, 0.82, 0.95], [56, 0.8, 0.95],
      [-36, 0.95, 1], [36, 0.94, 1],
      [-17, 1, 1], [17, 0.98, 1], [-3, 0.9, 0.95]
    ];
    return spec
      .map(([a, l, w], i) =>
        leaf(cx, baseY, 250 * l * scale, 34 * w * scale, a, LEAF_TONES[i % LEAF_TONES.length], spots)
      )
      .join("");
  }

  function pot(cx, topY, width, height, color) {
    const half = width / 2;
    const inset = width * 0.1;
    return (
      `<path d="M${cx - half + inset},${topY + height * 0.18} L${cx + half - inset},${topY + height * 0.18} ` +
      `L${cx + half - inset * 1.7},${topY + height} L${cx - half + inset * 1.7},${topY + height} Z" fill="${color}"/>` +
      `<rect x="${cx - half}" y="${topY}" width="${width}" height="${height * 0.22}" rx="5" fill="${color}"/>` +
      `<rect x="${cx - half}" y="${topY}" width="${width}" height="${height * 0.22}" rx="5" fill="#000" opacity=".08"/>`
    );
  }

  function label(x, y, w, h, text, sub) {
    return (
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#fbfaf6"/>` +
      `<g transform="translate(${x + w / 2},${y + h * 0.36}) scale(.55)">${leaf(0, 10, 26, 8, 0, "#6f9a5c", false)}</g>` +
      `<text x="${x + w / 2}" y="${y + h * 0.64}" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="${Math.min(15, w / 5.5)}" fill="#2c3124" letter-spacing="1.5">${text}</text>` +
      (sub ? `<text x="${x + w / 2}" y="${y + h * 0.84}" text-anchor="middle" font-family="Jost, sans-serif" font-size="7" fill="#6c705f" letter-spacing="1.2">${sub}</text>` : "")
    );
  }

  const shadow = (w) => `<ellipse cx="150" cy="302" rx="${w}" ry="9" fill="#000" opacity=".08"/>`;

  const DRAW = {
    jar(c) {
      return (
        shadow(70) +
        `<rect x="88" y="190" width="124" height="112" rx="16" fill="${c.body}"/>` +
        `<rect x="88" y="190" width="18" height="112" rx="9" fill="#fff" opacity=".25"/>` +
        `<rect x="93" y="168" width="114" height="30" rx="7" fill="${c.lid}"/>` +
        `<rect x="93" y="190" width="114" height="5" fill="#000" opacity=".12"/>` +
        label(106, 215, 88, 64, "ALOE", "HANDMADE")
      );
    },
    tube(c) {
      return (
        shadow(40) +
        `<rect x="104" y="84" width="92" height="14" rx="2" fill="${c.body}"/>` +
        `<path d="M104 92 h92 v8 l-14 164 h-64 l-14-164 z" fill="${c.body}"/>` +
        `<path d="M108 98 h10 l8 166 h-6z" fill="#fff" opacity=".35"/>` +
        `<rect x="124" y="262" width="52" height="40" rx="5" fill="${c.lid}"/>` +
        `<g opacity=".25">${[0, 1, 2, 3, 4, 5].map(i => `<line x1="${110 + i * 16}" y1="86" x2="${110 + i * 16}" y2="96" stroke="#000"/>`).join("")}</g>` +
        label(116, 140, 68, 78, "ALOE", "FACE WASH")
      );
    },
    pump(c) {
      return (
        shadow(52) +
        `<rect x="104" y="150" width="92" height="152" rx="20" fill="${c.body}"/>` +
        `<rect x="104" y="150" width="16" height="152" rx="8" fill="#fff" opacity=".35"/>` +
        `<rect x="132" y="128" width="36" height="26" rx="4" fill="${c.lid}"/>` +
        `<rect x="145" y="104" width="10" height="26" fill="${c.lid}"/>` +
        `<rect x="126" y="92" width="48" height="16" rx="5" fill="${c.lid}"/>` +
        `<rect x="170" y="95" width="30" height="8" rx="3" fill="${c.lid}"/>` +
        label(116, 190, 68, 80, "ALOE", "FACE CREAM")
      );
    },
    spray(c) {
      return (
        shadow(46) +
        `<rect x="110" y="140" width="80" height="162" rx="16" fill="${c.body}"/>` +
        `<rect x="110" y="140" width="14" height="162" rx="7" fill="#fff" opacity=".35"/>` +
        `<rect x="132" y="118" width="36" height="26" rx="4" fill="${c.lid}"/>` +
        `<path d="M128 92 h44 v28 h-44z" fill="${c.lid}"/>` +
        `<rect x="104" y="98" width="26" height="9" rx="3" fill="${c.lid}"/>` +
        [[88, 96], [78, 88], [76, 104], [66, 94], [64, 110], [70, 80]]
          .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="${c.lid}" opacity=".35"/>`).join("") +
        label(120, 180, 60, 80, "ALOE", "AFTER-SUN")
      );
    },
    soap(c) {
      return (
        shadow(82) +
        `<rect x="74" y="244" width="152" height="58" rx="24" fill="${c.body}"/>` +
        `<rect x="74" y="244" width="152" height="58" rx="24" fill="#000" opacity=".06"/>` +
        `<rect x="84" y="198" width="132" height="54" rx="22" fill="${c.body}"/>` +
        `<rect x="96" y="204" width="108" height="16" rx="8" fill="#fff" opacity=".35"/>` +
        `<g transform="translate(150,246) rotate(90) scale(.9)">${leaf(0, 26, 52, 14, 0, c.lid, false)}</g>` +
        `<rect x="66" y="262" width="168" height="18" fill="${c.lid}" opacity=".85"/>` +
        `<text x="150" y="275" text-anchor="middle" font-family="Jost, sans-serif" font-size="9" fill="#fff" letter-spacing="2">ALOE · OAT</text>`
      );
    },
    tin(c) {
      return (
        shadow(64) +
        `<rect x="92" y="252" width="116" height="50" rx="10" fill="${c.body}"/>` +
        `<rect x="88" y="232" width="124" height="30" rx="10" fill="${c.lid}"/>` +
        `<rect x="88" y="232" width="124" height="8" rx="4" fill="#fff" opacity=".3"/>` +
        `<text x="150" y="253" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="14" fill="#fff" letter-spacing="2">ALOE &amp; HONEY</text>` +
        `<g transform="translate(150,226)">${leaf(0, 0, 70, 16, -18, "#7fae69", true)}${leaf(8, 0, 56, 14, 22, "#5c8a4c", true)}</g>`
      );
    },
    box(c) {
      return (
        shadow(82) +
        `<rect x="80" y="182" width="140" height="120" rx="4" fill="${c.body}"/>` +
        `<rect x="74" y="164" width="152" height="30" rx="4" fill="${c.body}"/>` +
        `<rect x="74" y="188" width="152" height="6" fill="#000" opacity=".08"/>` +
        `<rect x="142" y="164" width="16" height="138" fill="${c.lid}"/>` +
        `<path d="M150 164 C128 132 102 146 122 162 Z M150 164 C172 132 198 146 178 162 Z" fill="${c.lid}"/>` +
        `<circle cx="150" cy="163" r="7" fill="${c.lid}"/>` +
        `<rect x="92" y="226" width="44" height="40" rx="3" fill="#fbfaf6"/>` +
        `<text x="114" y="250" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="11" fill="#2c3124">GIFT</text>`
      );
    },
    plant(c) {
      return shadow(52) + aloeRosette(150, 232, 0.5, true) + pot(150, 222, 104, 80, c.body);
    }
  };

  window.productArt = function (product) {
    const c = product.colors || { body: "#e9efe1", lid: "#5f6f45" };
    const draw = DRAW[product.art] || DRAW.jar;
    const bgLeaves =
      product.art === "plant"
        ? ""
        : `<g opacity=".18">${leaf(66, 330, 230, 34, -14, "#6f9a5c", false)}${leaf(250, 330, 180, 28, 16, "#5c8a4c", false)}</g>`;
    return (
      `<svg viewBox="0 0 300 375" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${product.name}">` +
      `<rect width="300" height="375" fill="#f1efe8"/>` +
      `<g transform="translate(0,22)">${bgLeaves}${draw(c)}</g>` +
      `</svg>`
    );
  };

  window.heroArt = function () {
    return (
      `<svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An aloe vera plant in a terracotta pot">` +
      `<circle cx="210" cy="250" r="190" fill="#e3e6d6"/>` +
      `<ellipse cx="210" cy="452" rx="120" ry="12" fill="#000" opacity=".08"/>` +
      aloeRosette(210, 330, 1, true) +
      pot(210, 316, 200, 136, "#c97b54") +
      `</svg>`
    );
  };

  window.leafMark = function (size) {
    const s = size || 28;
    return (
      `<svg viewBox="-30 -64 60 68" width="${s}" height="${s}" aria-hidden="true">` +
      leaf(0, 0, 60, 16, -24, "#7fae69", false) +
      leaf(0, 0, 64, 17, 0, "#5f6f45", false) +
      leaf(0, 0, 52, 14, 24, "#86b26f", false) +
      `</svg>`
    );
  };
})();
