import chalk from "chalk"

let shown = false

export function showClutchBanner() {
  if (shown) return
  shown = true

  const node = process.version
  const platform = process.platform
  const arch = process.arch

  const logo = `
 ██████╗██╗     ██╗   ██╗████████╗ ██████╗██╗  ██╗██╗  ██╗
██╔════╝██║     ██║   ██║╚══██╔══╝██╔════╝██║  ██║╚██╗██╔╝
██║     ██║     ██║   ██║   ██║   ██║     ███████║ ╚███╔╝
██║     ██║     ██║   ██║   ██║   ██║     ██╔══██║ ██╔██╗
╚██████╗███████╗╚██████╔╝   ██║   ╚██████╗██║  ██║██╔╝ ██╗
 ╚═════╝╚══════╝ ╚═════╝    ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝
`

  console.log(
    chalk.hex("#8A2BE2")(logo) +
    chalk.cyan(`
        ⚡ CLUTCHX ENGINE — WhatsApp Web API ⚡

────────────────────────────────────────────
 Author   : ClutchX-Kings
 Runtime  : ${node}
 System   : ${platform} ${arch}
 Status   : INITIALIZED
────────────────────────────────────────────
`)
  )
}
