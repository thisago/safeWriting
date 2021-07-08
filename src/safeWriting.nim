#[
  Created at: 07/05/2021 18:45:00 Monday
  Modified at: 07/08/2021 01:12:06 PM Thursday
]#

##[
  safe Write
]##

import gm_api

const header = genMetadataBlock(
  name = "Safe Writing",
  nameTranslations = {
    "pt": "Escrita segura",
    "es": "Escritura segura",
    "it": "Scrittura sicura",
  },
  author = "Thiago Navarro",
  version = "0.1.0",
  runAt = GmRunAt.docStart,
  downloadUrl = "file:///data/os/dev/nim/browser/safeWriting/build/safeWriting.js"
)
{.emit: header.}

import dom
import jsconsole
from std/strutils import join

import ./safeWriting/defs

when isMainModule:
  for el in document.querySelectorAll inputElements.join ",":
    console.log el
