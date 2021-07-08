#[
  Created at: 07/08/2021 14:01:57 Thursday
  Modified at: 07/08/2021 04:59:48 PM Thursday
]#

##[
  header
  Userscript header
]##

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
  version = "0.2.0",
  runAt = GmRunAt.docIdle,
  downloadUrl = "https://gitea.com/thisago/safeWriting/raw/branch/master/build/safeWriting.user.js",
  description = "http://gitea.com/thisago/safeWriting",
  homepageUrl = "http://gitea.com/thisago/safeWriting",
)
