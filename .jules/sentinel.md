## 2025-02-14 - [XSS in search highlighting]
**Vulnerability:** XSS vulnerability in `webui/src/components/Markdown.tsx` where user search terms were injected directly via innerHTML AFTER the content had been sanitized by DOMPurify.
**Learning:** Text manipulation or HTML injection, even if meant for safe highlighting, must be done BEFORE DOMPurify sanitization.
**Prevention:** Always ensure `DOMPurify.sanitize` is the absolutely final operation applied to a string before using it with `dangerouslySetInnerHTML`.
