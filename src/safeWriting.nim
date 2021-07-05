#[
  Created at: 07/05/2021 18:45:00 Monday
  Modified at: 07/05/2021 07:19:53 PM Monday
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
  runAt = GmRunAt.docStart
)
{.emit: header.}
