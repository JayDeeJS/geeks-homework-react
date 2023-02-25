import { useMemo } from "react"

export const useSort = (arr, type) => {
    const filterSort = (type) => {
        switch (type) {
            case 'asc':
                return arr.sort((a, b) => b.id - a.id)
            case 'desc':
                return arr.sort((a, b) => a.id - b.id)
            case 'letters':
                return arr.sort((a, b) => a.title.localeCompare(b.title))
            default:
                return arr
        }
    }

    const sortedArray = filterSort(type)
    return {sortedArray, oldArray: arr}
}