import React, { useEffect, useState } from 'react'

import Player from 'autoworks-player'

const AutoWorksPlayerIFrame = () => {
  const [options, setOptions] = useState()

  const sendMessage = (type, msg) => {
    parent.postMessage(
      {
        type,
        ...msg
      },
      '*'
    )
  }

  const onMessage = (event) => {
    setOptions({
      ...event.data,
      onNavigation: (args) => {
        sendMessage('onNavigation', args)
      },
      onShowcaseEnter: () => {
        sendMessage('onShowcaseEnter', {})
      },
      onShowcaseExit: () => {
        sendMessage('onShowcaseExit', {})
      },
      onVideoProgress: (args) => {
        sendMessage('onVideoProgress', args)
      }
    })
  }

  const getDocHeight = () => {
    const body = document.body

    return Math.max(body.scrollHeight, body.offsetHeight)
  }

  const onResize = () => {
    sendMessage('resize', {
      height: getDocHeight()
    })
  }

  useEffect(() => {
    sendMessage('ready', {
      height: getDocHeight()
    })

    window.addEventListener('message', onMessage, false)
    window.addEventListener('resize', onResize, false)

    return () => {
      window.removeEventListener('message', onMessage)
    }
  }, [])

  useEffect(() => {
    onResize()
  }, [options])

  if (!options) {
    return <div />
  }

  return (
    <div>
      <Player {...options} />
    </div>
  )
}

export default AutoWorksPlayerIFrame
