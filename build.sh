#!/bin/bash
# Build & package Pixellot Design System (React)
set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/../mnt/outputs/pixellot-design-system"

echo "→ Building bundle..."
"$DIR/node_modules/.bin/esbuild" \
  "$DIR/src/index.tsx" \
  --bundle --format=iife --platform=browser \
  --jsx=automatic \
  --loader:.tsx=tsx --loader:.ts=ts \
  --define:process.env.NODE_ENV='"production"' \
  --minify \
  --outfile="$DIR/bundle.js"

echo "→ Packaging..."
mkdir -p "$OUT"

python3 -c "
bundle = open('$DIR/bundle.js').read()
html = '''<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>Pixellot Design System v3</title>
  <link href=\"https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\">
  <style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Red Hat Display,sans-serif}
#root{width:100%;min-height:100vh}
#_loader{display:flex;align-items:center;justify-content:center;height:100vh;font-family:Red Hat Display,sans-serif;color:#888;font-size:14px}
/* DS Hover/Focus/Transition System */
button,a,[role=button]{transition:opacity .15s ease,transform .15s ease,background .2s ease,box-shadow .2s ease}
button:hover:not(:disabled),a:hover,[role=button]:hover:not(:disabled){opacity:.88}
button:active:not(:disabled),[role=button]:active:not(:disabled){transform:scale(.97)}
button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,[role=button]:focus-visible{outline:2px solid #116DFF;outline-offset:2px;border-radius:4px}
button:disabled,[role=button]:disabled{opacity:.45;cursor:not-allowed}
input:focus,select:focus{outline:none;box-shadow:0 0 0 2px rgba(17,109,255,.25)}
/* Card hover lift */
[data-card]:hover{box-shadow:0 4px 12px rgba(0,0,0,.08);transform:translateY(-1px)}
[data-card]{transition:box-shadow .2s ease,transform .2s ease}
/* Smooth accordion */
[data-accordion-content]{transition:max-height .25s ease,opacity .2s ease}
/* Skeleton shimmer */
@keyframes ds-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
[data-skeleton]{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:ds-shimmer 1.5s ease infinite}
/* Live badge pulse */
@keyframes ds-pulse{0%,100%{opacity:1}50%{opacity:.6}}
[data-live]{animation:ds-pulse 2s ease infinite}
/* Scrollbar styling */
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:#c7cbd0;border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:#979797}
  </style>
</head>
<body>
  <div id=\"root\"><div id=\"_loader\">Loading Design System…</div></div>
  <script>
''' + bundle + '''
  </script>
</body>
</html>'''
open('$OUT/index.html','w').write(html)
print(f'  {len(html)} bytes written')
"

echo "✓ Done → $OUT/index.html"
