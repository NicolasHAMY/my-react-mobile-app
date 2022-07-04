import { createContext, useContext, useReducer } from 'react'

// Initialisation du contexte
const DofusContext = createContext()

// Liste Dofus
const dofusList = ['Ebene', 'Ivoire', 'Ocre', 'Pourpre', 'Turquoise', 'Vulbis']

// Définition des actions disponibles dans notre contexte
const actionTypes = {
  SWAPDOFUS: 'SWAP'
}

// Etat initial du contexte
const initialState = {
  dofus: 'ocre'
}

/**
 * Traitement des actions
 * @param {*} state : Etat précédent l'action
 * @param {*} action : action pour mettre à jour l'état global
 * @returns nouvel état mit à jour
 */
const swapDofus = (state, action) => {
  const listOtherDofus = dofusList.filter(dofus => dofus !== state.dofus)

  switch (action.type) {
    case actionTypes.SWAPDOFUS:
      return {
        dofus: listOtherDofus[Math.floor(Math.random() * (5 - 0)) + 0]

      }
    default:
      throw new Error(`Unhandled action type ${action.type}`)
  }
}

/**
 * Composant Provider : Distribue l'accès à l'état global aux enfants
 * @param {*} param0 : children : les enfants ayant besoin d'accéder à l'état
 * @returns Composant
 */
const DofusProvider = ({ children }) => {
  const [state, dispatch] = useReducer(swapDofus, initialState)
  return <DofusContext.Provider value={{ state, dispatch }}>{children}</DofusContext.Provider>
}

/**
 * Hook personnalisée permettant de valider l'appel du contexte
 * @returns { state, dispatch }
 */
const useDofus = () => {
  const context = useContext(DofusContext)
  // context = { state, dispatch }
  if (!context) throw new Error('useDofus must be used inside a DofusProvider')
  return context
}

export {
  useDofus,
  DofusProvider,
  actionTypes
}
