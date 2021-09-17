#[
  Created at: 07/08/2021 13:46:32 Thursday
  Modified at: 09/17/2021 09:33:49 PM Friday

        Copyright (C) 2021 Thiago Navarro
  See file "license" for details about copyright
]#

from std/strformat import fmt
import ./src/safeWriting/header

const tmpFile = "tmpMinifiedFile"

proc minify*(filename: string; cmdProgram = "uglifyjs"): string =
  result = userscriptHeader & "\n"
  exec fmt"{cmdProgram} -o {tmpFile} {filename}"
  result.add readFile tmpFile
  rmFile tmpFile
