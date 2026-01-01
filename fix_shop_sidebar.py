import os

path = r"c:\Users\معاذ\Desktop\e_eclectronic\shop.html"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix shop layout
content = content.replace('grid-template-columns: 280px 1fr;', 'grid-template-columns: 300px 1fr;')
content = content.replace('gap: var(--spacing-6);', 'gap: var(--spacing-8);')

# Fix filter-option
old_filter = """        .filter-option {
            display: flex;
            align-items: center;
            gap: var(--spacing-2);
            cursor: pointer;
        }"""
new_filter = """        .filter-option {
            display: flex;
            align-items: center;
            gap: var(--spacing-3);
            cursor: pointer;
            padding: var(--spacing-1) 0;
        }"""
content = content.replace(old_filter, new_filter)

# Fix filter-option children
old_children = """        .filter-option input {
            accent-color: var(--color-accent);
        }

        .filter-option label {
            font-size: var(--font-size-sm);
            color: var(--color-gray-600);
            cursor: pointer;
            flex: 1;
        }

        .filter-option span {
            font-size: var(--font-size-xs);
            color: var(--color-gray-400);
        }"""
new_children = """        .filter-option input {
            accent-color: var(--color-accent);
            width: 16px;
            height: 16px;
        }

        .filter-option span:first-of-type {
            font-size: var(--font-size-sm);
            color: var(--color-gray-700);
            flex: 1;
        }

        .filter-option span:last-of-type {
            font-size: var(--font-size-xs);
            color: var(--color-gray-400);
            font-weight: 500;
        }"""
content = content.replace(old_children, new_children)

# Fix price range values
old_price = """        .price-range-values {
            display: flex;
            justify-content: space-between;
            font-size: var(--font-size-sm);
            color: var(--color-gray-600);
        }"""
new_price = """        .price-range-values {
            display: flex;
            justify-content: space-between;
            font-size: var(--font-size-sm);
            color: var(--color-gray-700);
            font-weight: 600;
            margin-top: var(--spacing-2);
        }"""
content = content.replace(old_price, new_price)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated shop.html")
