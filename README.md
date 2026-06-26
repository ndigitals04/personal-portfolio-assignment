# Peter Ndukwe — Software Engineer Portfolio

A one-page portfolio built with plain HTML + Tailwind CSS, themed around a
code-editor / IDE look (window-chrome cards, mono labels).
## Files

```
index.html          The whole site (nav, hero, about, skills, projects, contact, footer)
input.css            Tailwind SOURCE file — edit this for styling changes
output.css           Compiled CSS that index.html actually loads (generated FROM input.css)
tailwind.config.js   Color / font / animation tokens used throughout the site
package.json         npm scripts to build output.css
```


## How to rebuild output.css (after you change styles)

`output.css` only needs to be regenerated if you add **new** Tailwind
classes to `index.html` or change `input.css` / `tailwind.config.js`.
```bash
npm install      # installs the Tailwind CLI (one-time)
npm run build    # compiles input.css -> output.css (one-off)
# or, while actively editing:
npm run watch    # rebuilds automatically on every save
```