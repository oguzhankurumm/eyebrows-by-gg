"""Verify the internal source archive and retained routes, without publishing old copy."""
import importlib.util, json, sys
from pathlib import Path
sys.dont_write_bytecode = True
root = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('source_sync', root/'scripts/sync-source.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
rows = json.loads((root/'src/data/source-pages.json').read_text())
original = {row['path']: row for row in json.loads((root.parent/'site/data/pages.json').read_text())}
errors = []
for row in rows:
    file = root/'out'/row['path'].strip('/')/'index.html'
    if not file.exists():
        errors.append(row['path']+': retained route missing')
        continue
    if module.text_of(original[row['path']]['body']) not in module.text_of(row['html']):
        errors.append(row['path']+': original archive text missing')
    if 'Original website reference' in file.read_text() or 'data-source-path=' in file.read_text():
        errors.append(row['path']+': internal source reference leaked into public page')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(rows)} original bodies retained in internal archive; all routes exist; no public source-reference panel.')
