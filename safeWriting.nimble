# Package

version       = "0.3.0"
author        = "Thiago Navarro"
description   = "Write in websites without being tracked every keystroke"
license       = "MIT"
srcDir        = "src"
binDir = "build"

backend = "js"
bin = @["safeWriting"]

# Dependencies

requires "nim >= 1.5.1"
requires "gm_api"

import ./minify

task buildRelease, "Build release version":
  exec "nimble -d:danger build"
  const output = "build/safeWriting.user.js"
  writeFile output, minify("build/safeWriting.js")
  # cpFile "build/safeWriting.js", output
