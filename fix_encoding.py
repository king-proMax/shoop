import os

def fix_encoding(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.html', '.js', '.css')):
                path = os.path.join(root, file)
                try:
                    # Try reading with utf-8-sig (BOM) or utf-8
                    with open(path, 'rb') as f:
                        raw = f.read()
                    
                    # Detect BOM and remove it if present, then decode
                    if raw.startswith(b'\xef\xbb\xbf'):
                        content = raw[3:].decode('utf-8')
                    else:
                        content = raw.decode('utf-8')
                    
                    # Re-save as plain UTF-8 (no BOM)
                    with open(path, 'w', encoding='utf-8', newline='') as f:
                        f.write(content)
                    print(f"Fixed encoding for: {path}")
                except Exception as e:
                    print(f"Failed to fix {path}: {e}")

if __name__ == "__main__":
    target_dir = r"c:\Users\معاذ\Desktop\e_eclectronic"
    fix_encoding(target_dir)
