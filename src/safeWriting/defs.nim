#[
  Created at: 07/08/2021 13:03:35 Thursday
  Modified at: 09/17/2021 09:44:45 PM Friday

        Copyright (C) 2021 Thiago Navarro
  See file "license" for details about copyright
]#

from std/strutils import join

const inputElements* = [
  "input" & [
    ":not([type=button])",
    ":not([type=checkbox])",
    # ":not([type=color])",
    # ":not([type=date])",
    # ":not([type=datetime])",
    ":not([type=file])",
    ":not([type=hidden])",
    ":not([type=image])",
    # ":not([type=month])",
    ":not([type=radio])",
    # ":not([type=range])",
    ":not([type=reset])",
    ":not([type=submit])",
    # ":not([type=time])",
    # ":not([type=week])",
    # ":not([disabled])",
    # ":not([readonly])",
  ].join(""),
  "textarea", # Issue #1
  "[contenteditable=true]"
]
const inputTriggerEvents* = [
  "dblclick",
]
