#[
  Created at: 07/05/2021 18:45:00 Monday
  Modified at: 07/08/2021 02:21:24 PM Thursday
]#

##[
  safe Write
]##

{.experimental: "codeReordering".}

import std/[jsffi, dom]
from std/strutils import join

import jsconsole
import ./safeWriting/defs

when isMainModule:
  main()

proc blur*(el: Node) {.importcpp.}

proc main =
  proc handleInput(ev: Event) =
    if ev.isTrusted:
      let
        el = ev.target
        text = window.prompt(el.getAttribute "placeholder", el.value)
      if not text.isNull:
        el.value = text
        el.blur()

  for el in document.querySelectorAll inputElements.join ",":
    for event in inputTriggerEvents:
      el.addEventListener(event, handleInput)
