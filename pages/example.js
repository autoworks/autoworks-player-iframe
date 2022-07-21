import React, { useEffect } from 'react'

import config from '../fixtures/config'
import items from '../fixtures/items'

const options = JSON.parse(
  JSON.stringify({
    items,
    ...config
  })
)

export default function IFrameDemo() {
  useEffect(() => {
    const iframe = document.getElementById('demo')

    function onMsg(e) {
      // here we're using location.origin because that's where our iframe location is
      // however you will likely want to use "https://player.auto.works"
      if (e.origin !== window.location.origin) return
      if (e.data.type === 'ready') {
        iframe.contentWindow.postMessage(options, '*')
      }

      if (e.data.height) iframe.height = e.data.height
    }

    window.addEventListener('message', onMsg)

    return () => {
      window.removeEventListener('message', onMsg)
    }
  }, [])

  return (
    <>
      <h1>IFrame Embed Demo</h1>
      <iframe style={{border: 0}} id="demo" width="100%" height={600} src="/" title="demo" />
    </>
  )
}
