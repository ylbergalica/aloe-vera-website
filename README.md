# Aloe & Earth 🌿

A website for our family's home-grown aloe vera and the handmade skincare we make from it.

Plain HTML, CSS and JavaScript, with no build step. It runs on GitHub Pages.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Shop / catalogue | `shop.html` |
| Our story + daily skincare routine | `about.html` |
| Contact + FAQ | `contact.html` |

## Making it yours

1. **Brand, contact details, socials**: edit `js/config.js`. Add the real email, WhatsApp number (digits only, with country code, e.g. `38344123456`) and Instagram/Facebook links. A "Send order on WhatsApp" button appears in the basket once a number is set.
2. **Products and prices**: edit `js/products.js`. Each product has a name, price, size, description and category.
3. **Photos**: put images in `images/`.
   - For a product, add `image: "images/aloe-gel.jpg"` to it in `products.js`. The photo replaces the drawn illustration.
   - For the story sections, find the `frame__placeholder` blocks in `index.html` / `about.html` and swap them for `<img src="images/..." alt="...">`.
4. **Our story**: rewrite the text in `about.html` (and the short teaser in `index.html`) with Dad's real story.
5. **Brand name in tab titles**: if you change the name, also update the `<title>` tags at the top of each `.html` file.

## How orders work

There is no online payment. Customers fill a basket, then tap **Send order**. This opens an email (or WhatsApp message) with the full order filled in, and you reply to confirm delivery and payment. The basket is saved in the visitor's browser.

## Forms

The contact and newsletter forms open the visitor's email app by default. To receive submissions directly, create a free form at [formspree.io](https://formspree.io) and paste its URL into `formEndpoint` in `js/config.js`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```
