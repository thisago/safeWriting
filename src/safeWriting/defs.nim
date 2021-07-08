#[
  Created at: 07/08/2021 13:03:35 Thursday
  Modified at: 07/08/2021 01:50:50 PM Thursday
]#

##[
  defs
]##

const inputElements* = [
  "input:not([type=date]):not([type=datetime]):not([type=month]):not([type=button]):not([type=submit])",
  "textarea",
  "[contenteditable=true]"
]

const inputTriggerEvents* = [
  "focus",
  "click",
]
