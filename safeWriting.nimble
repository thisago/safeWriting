# Package

version       = "0.1.0"
author        = "Thiago Navarro"
description   = "Write in inputs without being tracked every keystroke"
license       = "MIT"
srcDir        = "src"
binDir = "build"

backend = "js"
bin = @["safeWriting"]

# Dependencies

requires "nim >= 1.5.1"
requires "gm_api"

task buildRelease, "Build release version":
  exec "nimble -d:release build"
