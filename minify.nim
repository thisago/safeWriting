#[
  Created at: 07/08/2021 13:46:32 Thursday
  Modified at: 07/08/2021 02:04:26 PM Thursday
]#

##[
  minify

  Minifies the code and add the userscript header
]##

from std/strformat import fmt
import ./src/safeWriting/header

const tmpFile = "tmpMinifiedFile"

proc minify*(filename: string; cmdProgram = "uglifyjs"): string =
  result = userscriptHeader & "\n"
  exec fmt"{cmdProgram} -o {tmpFile} {filename}"
  result.add readFile tmpFile
