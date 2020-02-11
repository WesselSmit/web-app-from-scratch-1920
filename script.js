import * as storage from './modules/storage.js'

routie({
    '': () => {
        storage.checkStoredData()
    },
    'hiermoetietsmeteenIDkomen': () => {
        // dit moet naar de detail page linken
    }
})