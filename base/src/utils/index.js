export function loadApp(url, globalVal) {
  return async () => {
    window.__INJECTED_PUBLIC_PATH_BY_AU__ = `${url}${globalVal}/`
    await createScript(`${url + globalVal}/static/js/${globalVal}.main.js`)
    return window[globalVal]
  }
}

export function createScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.querySelector('script')[0]
    if (firstScript) {
      firstScript.parendNode.insertBefore(script, firstScript)
    } else {
      document.querySelector('head').append(script)
    }
  })
}