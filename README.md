Structural Engineering Portfolio

A clean, professional portfolio site styled around the look of a structural
drawing set — title block header, sheet numbers (S-100, S-201, etc.), a
column/row reference grid, and an "approval stamp" on the contact section.

Plain HTML, CSS, and JavaScript. No build tools, no frameworks, no npm install.

## Files

```
portfolio/
├── index.html      ← all page content (edit this for your text/projects)
├── styles.css       ← all styling (colors, fonts, layout)
├── script.js        ← nav toggle, form handling, scroll animations
└── README.md
```

## 1. Open it in VS Code

1. Install [VS Code](https://code.visualstudio.com/) if you don't have it.
2. Unzip/save this `portfolio` folder somewhere on your computer.
3. Open VS Code → **File → Open Folder…** → select the `portfolio` folder.

## 2. Preview it live

The easiest way is the **Live Server** extension:

1. In VS Code, click the Extensions icon in the left sidebar (or press
   `Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for **"Live Server"** (by Ritwick Dey) and click **Install**.
3. Right-click `index.html` in the file explorer → **"Open with Live Server"**.
4. Your browser opens automatically at something like `http://127.0.0.1:5500`,
   and the page reloads every time you save a file.

No Live Server? You can also just double-click `index.html` to open it
directly in a browser — everything but the contact form will work fine.

## 3. Make it yours

Everything you should personalize is marked with an HTML comment like
`<!-- TODO -->`. Open `index.html` and search for `TODO` (`Ctrl+F` /
`Cmd+F` in VS Code, or use **Edit → Find in Files** to search the whole
project) to find every spot, including:

- Your name, title, and license status (hero section)
- Bio, education, and license number (Profile / S-101)
- Skills and software list (Skills / S-201)
- Project descriptions, tags, and images (Projects / S-301)
- Work history (Experience / S-401)
- Email, phone, LinkedIn (Contact / S-501)

### Adding real project photos

Replace a placeholder block like this:

```html
<div class="project-card__image" aria-hidden="true"><span>IMAGE</span></div>
```

with:

```html
<div class="project-card__image">
  <img src="images/harbor-view.jpg" alt="Harbor View Residences under construction">
</div>
```

Create an `images/` folder next to `index.html` and drop your photos in there.

### Adding your headshot

Same idea, in the `about__portrait` block:

```html
<div class="about__portrait">
  <img src="images/headshot.jpg" alt="Jordan Reyes">
</div>
```

### Changing colors

All colors are defined once, at the top of `styles.css`:

```css
:root {
  --paper: #F6F5F2;      /* page background */
  --ink: #14202B;         /* main text */
  --blueprint: #24476B;   /* links, accents, headings */
  --redline: #C1401D;     /* buttons, sheet numbers, highlights */
  --steel: #8A8F98;       /* secondary/muted text */
}
```

Change a value here and it updates everywhere on the site.

### Connecting the contact form

Right now, submitting the form just shows a confirmation message — it doesn't
actually send an email anywhere (that requires a backend or a third-party
service, since this is a static site). Easiest options:

- **[Formspree](https://formspree.io/)** — free tier, no backend needed.
  Sign up, get a form endpoint, and replace the `TODO` in `script.js`:
  ```js
  fetch('https://formspree.io/f/yourFormId', {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' }
  });
  ```
- **[EmailJS](https://www.emailjs.com/)** — sends straight from JavaScript.
- Or just keep the `mailto:` link in the contact info and skip the form.

## 4. Put it online (free options)

Once you're happy with it:

- **GitHub Pages**: push the folder to a GitHub repo → Settings → Pages →
  choose the branch → your site is live at `yourname.github.io/repo-name`.
- **Netlify**: drag-and-drop the `portfolio` folder at
  [app.netlify.com/drop](https://app.netlify.com/drop) for an instant live URL.
- **Vercel**: similar drag-and-drop deploy flow.

All three are free for a personal portfolio like this.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via
  the `<link>` tags in `index.html` — you'll need an internet connection for
  those to load (they fall back to system fonts otherwise).
- The site is responsive and includes visible keyboard focus states and
  reduced-motion support out of the box.
