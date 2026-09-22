// Central place for site configuration.
// Change the WhatsApp number here and it updates everywhere on the site.

export const WHATSAPP_NUMBER = '263771234567' // country code + number, no + or spaces
export const WHATSAPP_DISPLAY = '+263 77 123 4567'
export const EMAIL = 'info@africarising.com'
export const LOCATION = 'Victoria Falls, Zimbabwe'

/**
 * Builds a wa.me link that opens WhatsApp with a pre-filled message.
 * @param {string} message - the message that will be pre-filled in WhatsApp
 * @returns {string} https://wa.me/<number>?text=<encoded message>
 */
export function whatsappLink(message = 'Hello Africa Rising Safaris! I would like to know more about your tours.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Opens WhatsApp with the pre-filled message in a new tab. */
export function openWhatsApp(message) {
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
}
