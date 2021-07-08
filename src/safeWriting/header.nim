#[
  Created at: 07/08/2021 14:01:57 Thursday
  Modified at: 07/08/2021 03:06:52 PM Thursday
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
  description = "See the original code in: http://gitea.com/thisago/safeWriting"
)
