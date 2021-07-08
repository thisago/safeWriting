#[
  Created at: 07/08/2021 13:03:35 Thursday
  Modified at: 07/08/2021 03:19:22 PM Thursday
]#

##[
  defs
]##

from std/strutils import join

const inputElements* = [
  "input" & [
    ":not([type=button])",
    ":not([type=checkbox])",
    ":not([type=color])",
    ":not([type=date])",
    ":not([type=datetime])",
    ":not([type=file])",
    ":not([type=hidden])",
    ":not([type=image])",
    ":not([type=month])",
    ":not([type=radio])",
    ":not([type=range])",
    ":not([type=reset])",
    ":not([type=submit])",
    ":not([type=time])",
    ":not([type=week])",
  ].join(""),
  "textarea",
  "[contenteditable=true]"
]
const inputTriggerEvents* = [
  "focus",
  "click",
]
