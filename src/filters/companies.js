import { getElement } from '../utils.js'
import display from '../displayProducts.js'

const setupCompanies = (store) => {
  let companies = ['all', ...new Set(store.map((product) => product.company))]
  const companiesEl = getElement('.companies')
  companiesEl.innerHTML = companies
    .map((company) => {
      return `<button class='company-btn'>${company}</button>`
    })
    .join('')
  companiesEl.addEventListener('click', function (e) {
    const element = e.target
    if (element.classList.contains('company-btn')) {
      let newStore = []
      if (element.textContent === 'all') {
        newStore = [...store]
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        )
      }
      display(newStore, getElement('.products-container'), true)
    }
  })
}

export default setupCompanies
