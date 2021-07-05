/*
  Created at: 07/05/2021 19:28:00 Monday
  Modified at: 07/05/2021 08:10:28 PM Monday
*/

const maxLogSize = 20

const input = document.getElementById("text"),
  textarea = document.getElementById("txtArea"),
  log = document.getElementById("log")

/**
 * Binds the key press listener on element
 *
 * @param {HTMLElement} el
 */
function bindListener(el) {
  let pressedKeys = {}
  el.addEventListener("keydown", ev => {
    const key = ev.key
    if (!pressedKeys[key]) // if start time not setted
      pressedKeys[key] = Date.now() // set the pressed time
  })
  el.addEventListener("keyup", ev => {
    const
      key = ev.key,
      lastTime = pressedKeys[key] // get the time of keydown
    if (!lastTime) return
    pressedKeys[key] = undefined // delete the time of keydown

    const
      pressedTime = Date.now() - lastTime,
      text = document.createElement("div")

    text.innerHTML = `Key '<span>${key}</span>' was pressed for <span style="--i:${pressedTime}">${pressedTime}ms</span>`

    log.append(text)

    while (log.childNodes.length > maxLogSize)
      log.childNodes[0].remove()
  })
}

bindListener(document.body)
