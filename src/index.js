import 'normalize.css'
import './scss/styles.scss'

document.addEventListener('DOMContentLoaded', e => {
  const twitterCTAs = document.getElementsByClassName('js-twitter-cta')
  if (twitterCTAs && twitterCTAs.length > 0) {
    const twitterCTA = twitterCTAs[0]
    twitterCTA.setAttribute('href', twitterCTA.href.replace('whitelisting.', 'whitelisting.%0a%0aID: ' + Math.random().toString(36).slice(2)))
  }
})
