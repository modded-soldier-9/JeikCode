## 2024-05-18 - Missing ARIA Labels on Close Buttons
**Learning:** Found several 'Close tab' buttons in app.tsx that used only 'title' attribute and an '×' character text content, missing explicit 'aria-label'. This is a common pattern to check for when ensuring screen reader accessibility.
**Action:** Always scan for buttons with only icon or single character text (like '×') to ensure they have explicit 'aria-label' attributes.
