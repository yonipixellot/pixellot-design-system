#!/bin/bash
# Build & package Pixellot Design System (React)
set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/../mnt/outputs/pixellot-design-system"

echo "→ Building bundle..."
"$DIR/node_modules/.bin/esbuild" \
  "$DIR/pixellot-design-system.tsx" \
  --bundle --format=iife --platform=browser \
  --jsx=automatic \
  --loader:.tsx=tsx --loader:.ts=ts \
  --define:process.env.NODE_ENV='"production"' \
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
  <title>Pixellot Design System v2</title>
  <link href=\"https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\">
  <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Red Hat Display,sans-serif}#root{width:100%;min-height:100vh}#_loader{display:flex;align-items:center;justify-content:center;height:100vh;font-family:Red Hat Display,sans-serif;color:#888;font-size:14px}</style>
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
