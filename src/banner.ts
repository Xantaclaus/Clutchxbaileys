import chalk from "chalk"

let __clutch_loaded = false

export function showClutchBanner() {
    if (__clutch_loaded) return
    __clutch_loaded = true

    const node = process.version
    const platform = process.platform
    const arch = process.arch

    const logo = `
 ██████╗██╗     ██╗   ██╗████████╗ ██████╗██╗  ██╗
██╔════╝██║     ██║   ██║╚══██╔══╝██╔════╝██║  ██║
██║     ██║     ██║   ██║   ██║   ██║     ███████║
██║     ██║     ██║   ██║   ██║   ██║     ██╔══██║
╚██████╗███████╗╚██████╔╝   ██║   ╚██████╗██║  ██║
 ╚═════╝╚══════╝ ╚═════╝    ╚═╝    ╚═════╝╚═╝  ╚═╝
`

    console.log(
        chalk.hex("#00D4FF")(logo) +
        chalk.hex("#8A2BE2")(`
⚡ CLUTCHX ENGINE — WhatsApp Web API Layer
Author  : ClutchX-Kings
Runtime : ${node}
System  : ${platform} ${arch}
Status  : INITIALIZED
`)
    )

    // hidden watermark (tidak terlihat user biasa)
    Object.defineProperty(globalThis, "__CLUTCH_SIGNATURE__", {
        value: "ClutchX-Kings",
        enumerable: false,
        configurable: false,
        writable: false
    })
}
