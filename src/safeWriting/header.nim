#[
  Created at: 07/08/2021 14:01:57 Thursday
  Modified at: 09/17/2021 09:37:25 PM Friday

        Copyright (C) 2021 Thiago Navarro
  See file "license" for details about copyright
]#

import pkg/gm_api/metadata

const userscriptHeader* = genMetadataBlock(
  name = "Safe Writing",
  nameTranslations = {
    "pt": "Escrita segura",
    "es": "Escritura segura",
    "it": "Scrittura sicura",
  },
  grant = [
    GmPermitions.getValue,
    GmPermitions.setValue,
    GmPermitions.registerMenuCommand,
  ],
  author = "Thiago Navarro",
  version = "0.3.0",
  runAt = GmRunAt.docIdle,
  downloadUrl = "https://raw.githubusercontent.com/thisago/safeWriting/master/build/safeWriting.user.js",
  description = "Write in websites without being tracked every keystroke",
  homepageUrl = "https://github.com/thisago/safeWriting",
)
