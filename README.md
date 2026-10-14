# Magic Docs static site (Wix migration draft)

This project is a best-effort static rebuild of the published Wix page:

- https://ksmagicdocs.wixsite.com/magic-docs

## Files

- `index.html` - page structure and recovered content
- `styles.css` - styling and responsive layout
- `script.js` - contact form `mailto:` behavior

## Local preview

You can open `index.html` directly in a browser, or serve the folder with any static server.

## Deploy on Cloudflare Pages (free)

1. Create a GitHub repository and push this folder.
2. In Cloudflare Pages, choose **Create project** and connect the repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Deploy.
5. Add your custom domain in Cloudflare Pages and update DNS as instructed.

## Notes

- The original Wix form backend and editor-specific behavior were not portable.
- Contact form here opens the user’s email app via `mailto:`.
- Update text, colors, spacing, and links as needed.
