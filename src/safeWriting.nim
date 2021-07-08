#[
  Created at: 07/05/2021 18:45:00 Monday
  Modified at: 07/08/2021 05:20:07 PM Thursday
]#

##[
  safe Write
]##

{.experimental: "codeReordering".}

import std/[jsffi, dom]
from std/strutils import join
from std/strformat import fmt
import pkg/gm_api

import ./safeWriting/defs
import ./safeWriting/header
import std/asyncjs

{.emit: userscriptHeader.}

when isMainModule:
  discard main()

proc blur*(el: Node) {.importcpp.}
proc addEventListener[T](et: EventTarget; ev: cstring; cb: proc (ev: Event): T) {.importcpp.}


proc main {.async.} =
  let
    historyEnabled = (await GM.getValue("history_enabled", "1")) == "1"
    historyCommand = await GM.getValue("history_command", "@")

  proc handleInput(ev: Event) {.async.} =
    if ev.isTrusted:
      let
        el = ev.target
        text = window.prompt(el.getAttribute "placeholder", el.value)
      if not text.isNull:
        block:
          if historyEnabled:
            if text == historyCommand:
              el.value = await GM.getValue("history_value", "")
              break
            await GM.setValue("history_value", text)
          el.value = text

  for el in document.querySelectorAll inputElements.join ",":
    for event in inputTriggerEvents:
      el.addEventListener(event, handleInput)

  GM.registerMenuCommand(
    (if historyEnabled: "Disable" else: "Enable") & " History",
    (proc() =
      discard GM.setValue("history_enabled", if historyEnabled: "0" else: "1")
      window.alert "Success! Please reload the page"
    ),
    "h"
  )
  GM.registerMenuCommand(
    fmt"Change history command ({historyCommand})",
    (proc() =
      let text = window.prompt("History command", "")
      if not text.isNull and text != "":
        discard GM.setValue("history_command", text)
        window.alert "Command successfully changed. Reload the page to use"
    ),
    "c"
  )
  GM.registerMenuCommand(
    fmt"Clean saved history",
    (proc() =
      discard GM.setValue("history_value", "")
      window.alert "Successfully cleaned!"
    ),
    "c"
  )
