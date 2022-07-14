import { defineStore } from 'pinia'
import axios from 'axios'

const apibase = 'https://rickandmortyapi.com/api/'

export const useCoreStore = defineStore({
    id: 'core',
    state: () => {
        return {
            character: [],
            currentCharacter: null,
            info: []
        }
    },
    actions: {
        async fetchCharacter() {
            try {
                await axios.get(`${apibase}character`)
                    .then((res) => {
                        this.character = res.data.results,
                            this.info = res.data.info
                    })
            }
            catch (error) {
                console.log(error)
            }
        },
        async fetchSingleCharacter(url) {
            try {
                await axios.get(url)
                    .then((res) => {
                        console.log(res)
                        this.currentCharacter = res.data
                    })
            }
            catch (error) {
                console.log(error)
            }
        },
        clearSingleCharacter() {

            this.currentCharacter = null


        },
        async nextCharacter(url) {
            try {
                await axios.get(url)
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
        singleCharacter: state => state.currentCharacter,
        infoList: state => state.info,
    },

})