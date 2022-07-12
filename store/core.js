import { defineStore } from 'pinia'
import axios from 'axios'

const apibase = 'https://rickandmortyapi.com/api/'

export const useCoreStore = defineStore({
    id: 'core',
    state: () => {
        return {
            character: [],
            info: []
        }
    },
    actions: {
        async fetchCharacter() {
            try {
                const data = await axios.get(`${apibase}character`)
                    .then((res) => {
                        console.log(res)
                        this.character = res.data.results,
                            this.info = res.data.info
                    })
            }
            catch (error) {
                console.log(error)
            }
        },
        async nextCharacter(url) {
            try {
                const data = await axios.get(url)
                    .then((res) => {
                        console.log(res)
                        res.data.results.forEach(element => {
                            this.character.push(element)
                        })
                        this.info = res.data.info
                    })
            }
            catch (error) {
                console.log(error)
            }
        },

    },
    getters: {
        charactersList: state => state.character,
        infoList: state => state.info,
    },

})