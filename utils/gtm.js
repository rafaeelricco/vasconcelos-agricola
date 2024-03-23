import TagManager from 'react-gtm-module'

const tagManagerArgs = { gtmId: 'GTM-KBTCMFPM' }

export function initializeGTM() {
  TagManager.initialize(tagManagerArgs)
}
