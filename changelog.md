<!--
  Created at: 07/08/2021 15:47:38 Thursday
  Modified at: 09/17/2021 10:48:49 PM Friday
-->

# Changelog

## Version 0.3.0 (09/17/2021 22:48:26 Friday)

- changed event from `click` to `dblclick`
- Added description
- Changed comment header of all files

### Allowed

- textarea
- input
  - type=time
  - type=week
  - type=range
  - type=month
  - type=color
  - type=date
  - type=datetime
  - disabled
  - readonly

---

## Version 0.2.0 (07/08/2021 17:21:25 Thursday)

- Removed blur element before entering the text
- Temporary removed textarea trigger (issue [#1](https://gitea.com/thisago/safeWriting/issues/1))
- Simplified the description to not need to translate (in another languages like the name)
- Added @downloadURL metadata
- Removed the trigger on focus because if element has autofocus it will be
  triggered automatically (just clicking)
- Removed the trigger for disabled and readonly inputs
- Added more inputs into test
- Removed useless variables in javascript of test page
- Added colors to the keys in test page
- Added history with
  - Configurable command
  - Enabling/disabling
  - Clean history
