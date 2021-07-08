#[
  Created at: 07/08/2021 14:01:57 Thursday
  Modified at: 07/08/2021 02:10:11 PM Thursday
]#

##[
  header
  Userscript header
]##

import gm_api/metadata

const userscriptHeader* = genMetadataBlock(
  name = "Safe Writing",
  nameTranslations = {
    "pt": "Escrita segura",
    # "es": "Escritura segura",
      # "it": "Scrittura sicura",
  },
  author = "Thiago Navarro",
  version = "0.1.0",
  runAt = GmRunAt.docIdle,
  downloadUrl = "file:///data/os/dev/nim/browser/safeWriting/build/safeWriting.js",
  description = "See the original code in: http://gitea.com/thisago/safeWriting"
)
