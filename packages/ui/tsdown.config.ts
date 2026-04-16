import { cpSync } from "node:fs"
import { resolve } from "node:path"
import { defineConfig } from "tsdown"

export default defineConfig({
  css: {
    inject: true,
  },
  entry: ["src/components/index.ts"],
  format: "esm",
  onSuccess() {
    const root = process.cwd()
    const copies = [
      ["src/baseline", "dist/baseline"],
      ["src/colors", "dist/colors"],
      ["src/tailwind-colors", "dist/tailwind-colors"],
      ["src/tailwind-tokenless", "dist/tailwind-tokenless"],
    ]

    for (const [from, to] of copies) {
      const src = resolve(root, from)
      const dst = resolve(root, to)
      cpSync(src, dst, { recursive: true })
      console.log(`[ui] copied ${from} -> ${to}`)
    }

    return Promise.resolve()
  },
  outDir: "dist/components",
  platform: "browser",
})
