# CLAUDE.md

This file documents the conventions for this project. **Replicate these conventions exactly when creating any new section folder.**

---

## Folder Structure

```
<folder-name>/
├── cms/                        # CMS-ready versions of pages (modified/stripped for CMS use)
│   └── [pageName]CMS.html
├── cms.min/                    # Minified CMS versions for production
│   └── [pageName]CMS.min.html
├── css/
│   ├── style.css               # Main custom stylesheet
│   └── style.min.css           # Minified version for production
├── images/                     # Flat image/video assets (no subfolders)
│   └── [image-name].jpg/.png/.mp4
├── js/
│   ├── [script].js             # Custom scripts
│   └── [script].min.js         # Minified versions for production
├── index.html                  # Landing/entry page for the section
├── [pageName].html             # Individual content pages
└── [pageName].min.html         # Minified production versions
```

---

## Tech Stack

| Layer      | Library/Tool           | Version  | How it's loaded         |
|------------|------------------------|----------|-------------------------|
| CSS Grid   | Bootstrap              | 3.3.1    | CDN                     |
| JS utility | jQuery                 | 1.11.1   | CDN                     |
| Bootstrap  | Bootstrap JS           | 3.3.1    | CDN                     |
| Fonts      | Google Fonts           | —        | CDN                     |

**CDN links (use these exact URLs):**
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
```

**Google Fonts (use both):**
```html
<link href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;600;700&family=Lato:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## Color Palette

**Each section folder has its own color palette — do not assume values carry over between folders.**

The CSS variable names stay consistent across all folders, but the values differ per section/brand. Always define them in `:root`:

```css
:root {
    --primary: [folder-specific];
    --text: [folder-specific];
    --accent: [folder-specific];
    --light-gray: [folder-specific];
    --white: #FFFFFF;
}
```

**Known palettes:**

| Folder         | --primary  | --text    | --accent  | --light-gray |
|----------------|------------|-----------|-----------|--------------|
| suburbsPages   | #17A4B8    | #121212   | #1ABC9C   | #E8E8E8      |

**When starting a new folder, ask April for the correct palette before writing any CSS.**

---

## Typography

- **Headings:** `font-family: 'Geologica', sans-serif` (weights: 400, 600, 700)
- **Body text:** `font-family: 'Lato', sans-serif` (weights: 400, 500, 700)

---

## HTML Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Title]</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link href="[Google Fonts URL]" rel="stylesheet">
    <!-- Either link external stylesheet OR use embedded <style> tag (see CSS approach below) -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body id="[section-id]">

    <div id="header"></div>

    <main>
        <!-- page content here -->
    </main>

    <div id="footer"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <!-- custom scripts last -->
</body>
</html>
```

---

## CSS Approach

Two valid patterns — choose one per file, don't mix:

1. **External stylesheet** (`index.html` pattern): `<link rel="stylesheet" href="css/style.css">` — styles are body-level
2. **Embedded styles** (`ourArea.html` pattern): `<style>` tag in `<head>` — styles are scoped to a page-level ID selector (e.g. `#our-area { ... }`)

---

## Spacing Utility Classes

These must be defined in `style.css` (Bootstrap 3 doesn't include them):

```css
.mt-0 { margin-top: 0 !important; }
.mt-1 { margin-top: 0.5rem !important; }
.mt-2 { margin-top: 1rem !important; }
.mt-3 { margin-top: 1.5rem !important; }
.mt-4 { margin-top: 2rem !important; }

.mb-0 { margin-bottom: 0 !important; }
.mb-1 { margin-bottom: 0.5rem !important; }
.mb-2 { margin-bottom: 1rem !important; }
.mb-3 { margin-bottom: 1.5rem !important; }
.mb-4 { margin-bottom: 2rem !important; }

.ml-0 { margin-left: 0 !important; }
.ml-1 { margin-left: 0.5rem !important; }
.ml-2 { margin-left: 1rem !important; }

.mr-0 { margin-right: 0 !important; }
.mr-1 { margin-right: 0.5rem !important; }
.mr-2 { margin-right: 1rem !important; }

.m-0 { margin: 0 !important; }
.m-1 { margin: 0.5rem !important; }
.m-2 { margin: 1rem !important; }
.m-3 { margin: 1.5rem !important; }
.m-4 { margin: 2rem !important; }
```

---

## Layout Patterns

### Intro Section
Two-column: text left (`col-md-6`) + map image right (`col-md-5 col-md-offset-1`).

### Suburb Card (alternating layout)
```html
<article class="mb-4">
    <div class="row">
        <div class="col-sm-6 suburb">
            <div class="title-group">
                <h3 class="article-title m-0">Suburb Name</h3>
            </div>
            <img src="images/suburb.jpg" class="img-responsive" alt="Suburb Name">
        </div>
        <div class="col-sm-6 article-description">
            <p>Description...</p>
            <ul class="mt-4">
                <li>Median price: ...</li>
            </ul>
        </div>
    </div>
</article>
```

Alternate image side using Bootstrap 3 push/pull: add `col-sm-push-6` to `.suburb` and `col-sm-pull-6` to `.article-description`, plus `title-right` to `.title-group`.

### Video Support
For suburb cards with video instead of image:
```html
<video id="[suburbName]Video" class="img-responsive" controls controlsList="nodownload" disablePictureInPicture>
    <source src="images/suburb.mp4" type="video/mp4">
</video>
```
Wire up auto-play/pause via `js/video-control.js` using Intersection Observer (threshold: 0.25).

---

## Naming Conventions

- **Files:** kebab-case (`our-area.html`, `style.css`)
- **CSS classes:** kebab-case (`.article-title`, `.title-group`, `.suburb-list`)
- **IDs:** camelCase (`#plainlandVideo`, `#our-area`)
- **JS variables:** camelCase
- **CSS variables:** descriptive, short (`--primary`, `--text`, `--accent`)

---

## Responsive Breakpoints

```css
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1200px) { /* desktop */ }
```

---

## File Variants to Maintain

| Variant         | Purpose                           |
|-----------------|-----------------------------------|
| `page.html`     | Standard page                     |
| `page.min.html` | Minified production version       |
| `cms/pageCMS.html`      | CMS-adapted version       |
| `cms.min/pageCMS.min.html` | Minified CMS version   |
| `css/style.css` | Source stylesheet                 |
| `css/style.min.css` | Minified stylesheet           |
| `js/script.js`  | Source JS                         |
| `js/script.min.js` | Minified JS                    |

---

## Testing Requirement

**Before calling any task done, Claude must test the output.**

- Open the page in a browser (use the `run` skill or dev server).
- Check the golden path: does the layout render correctly? Do images/videos load? Is the responsive behaviour correct at mobile and desktop widths?
- Check for regressions: do other pages in the same folder still work?
- If the browser cannot be launched in the current session, explicitly state: *"I could not test this in a browser — please verify visually before shipping."*

Never mark a task complete without either (a) confirming it was tested, or (b) clearly flagging that testing was skipped and why.
