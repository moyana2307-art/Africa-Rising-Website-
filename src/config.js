// Central place for site configuration.
// Change the WhatsApp number here and it updates everywhere on the site.

export const WHATSAPP_NUMBER = '263772619172' // country code + number, no + or spaces
export const WHATSAPP_DISPLAY = '+263 772 619 172'

// Developer / designer contact (Click and Create — Pride Moyana)
export const DEVELOPER_NUMBER = '263777452902'
export const DEVELOPER_DISPLAY = '+263 777 452 902'
export const EMAIL = 'info@africarising.com'
export const LOCATION = 'Victoria Falls, Zimbabwe'

/**
 * Builds a wa.me link that opens WhatsApp with a pre-filled message.
 * @param {string} message - the message that will be pre-filled in WhatsApp
 * @param {string} [number] - defaults to the business number; pass DEVELOPER_NUMBER for the developer line
 * @returns {string} https://wa.me/<number>?text=<encoded message>
 */
export function whatsappLink(message = 'Hello Africa Rising Safaris! I would like to know more about your tours.', number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Opens WhatsApp with the pre-filled message in a new tab. */
export function openWhatsApp(message) {
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
}
