# Property Statistics Section — IRENE Reference

Extracted from `IRENE/Views/IRENE/Home/Index.cshtml` (lines 134–179) and `IRENE/Content/themes/IRENE/home-page.css`.

---

## HTML (Razor)

```html
<section class="property-stats-section">
    <h1 style="text-align: center; width: 98%; margin-bottom: 5rem;">AUSTRALIA'S LARGEST REAL ESTATE AGENCY NETWORK</h1>

    <div class="row">
        <div class="col-xs-4">
            <div class="stat-card">
                <img src="/Content/themes/IRENE/images/for_sale.png" alt="For Sale" class="stat-img" />
                <div class="stat-overlay">
                    <span class="stat-number" id="stat_lines1">0</span>
                    <span class="stat-label">FOR SALE</span>
                </div>
            </div>
        </div>

        <div class="col-xs-4">
            <div class="stat-card">
                <img src="/Content/themes/IRENE/images/for_rent.png" alt="For Rent" class="stat-img" />
                <div class="stat-overlay">
                    <span class="stat-number" id="stat_lines2">0</span>
                    <span class="stat-label">FOR RENT</span>
                </div>
            </div>
        </div>

        <div class="col-xs-4">
            <div class="stat-card">
                <img src="/Content/themes/IRENE/images/recently_sold.png" alt="Recently Sold" class="stat-img" />
                <div class="stat-overlay">
                    <span class="stat-number" id="stat_lines3">0</span>
                    <span class="stat-label">RECENTLY SOLD</span>
                </div>
            </div>
        </div>
    </div>
</section>
```

> **Note:** The stat numbers are animated on page load via `jquery.animateNumber`. The values (`totalsale`, `totalrental`, `totalsold`) come from `ViewBag` in the controller. The fourth card (Open Homes / `stat_lines4`) is commented out in the original.

---

## JavaScript (animate on load)

```js
// Requires: jquery.animateNumber.min.js
$('#stat_lines1').animateNumber({ number: totalsale,   easing: 'easeInQuad', 'font-size': '30px' }, totalsale);
$('#stat_lines2').animateNumber({ number: totalrental, easing: 'easeInQuad', 'font-size': '30px' }, totalrental * 3);
$('#stat_lines3').animateNumber({ number: totalsold,   easing: 'easeInQuad', 'font-size': '30px' }, totalsold);
```

---

## CSS

```css
/* Property Statistics */
.property-stats-section {
    padding: 1.25rem;
    text-align: center;
    position: relative;
    top: -15rem;
    margin-bottom: -8rem;
}

.property-stats-section .row {
    padding: 0 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.stats-tagline {
    font-style: italic;
    font-size: clamp(1.5rem, 3.5vw, 2.5rem);
    color: var(--foreground-color);
    text-transform: none;
    margin-bottom: 4rem;
}

.stat-card {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
}

.stat-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.stat-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.stat-number {
    display: block;
    font-size: clamp(0.9rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--background-color);
    line-height: 1;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    font-family: 'Merriweather', sans-serif;
}

.stat-label {
    display: block;
    font-size: clamp(0.5rem, 1.5vw, 1.5rem);
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--background-color);
    margin-top: 0.5em;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    text-transform: uppercase;
}

.property-stats-section .col-xs-4 {
    padding: 12px;
}

/* Heading shared selector (also used by #property_search and #largest_hero) */
.property-stats-section h1 {
    font-size: clamp(2.5rem, 4.5vw, 3.5rem);
}

/* Responsive */
@media (max-width: 767px) {
    .property-stats-section .col-xs-6:last-child:nth-child(odd) {
        margin-left: auto;
        margin-right: auto;
        float: none;
    }
}

@media (max-width: 1024px) {
    .property-stats-section {
        margin-inline: 4rem;
    }
}

@media (max-width: 768px) {
    .property-stats-section .row {
        padding: unset;
    }
}

@media (max-width: 425px) {
    .property-stats-section {
        margin-inline: 1rem;
    }
}
```
