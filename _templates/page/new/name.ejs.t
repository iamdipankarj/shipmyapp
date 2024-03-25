---
to: src/app/(user)/<%= name %>/page.tsx
---
export default function <%= h.humanize(name) %>Page() {
  return (
    <div>
      Hello <%= h.humanize(name) %>
    </div>
  )
}
