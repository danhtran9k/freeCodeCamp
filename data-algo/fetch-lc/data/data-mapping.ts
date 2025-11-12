import { save_csv } from '../utils/csv_analyze'
import {
    alias_heading_csv,
    arrValueMap,
    primitiveValueMap
} from './csv-save-map'
import { ALL_LC, TAllProblems } from './data-importer'

// csvRowArr = [[HEAD], ...dataToAppend]
export const jsonFlatten = (dataArr: TAllProblems[], csvRowArr: string[][]) => {
    const HEADINGS = csvRowArr[0]

    for (const item of dataArr) {
        const row = []

        for (const headKey of HEADINGS) {
            const value = item[headKey]

            const csvValue = Array.isArray(value)
                ? arrValueMap(value)
                : primitiveValueMap(headKey, value)

            row.push(csvValue)
        }
        csvRowArr.push(row)
    }

    return csvRowArr
}

const updateRawQL = () => {
    const rawKeysArr = Object.keys(alias_heading_csv)
    const HEADINGS = rawKeysArr.filter((el) => el !== 'id')
    const csv = [HEADINGS]
    jsonFlatten(ALL_LC, csv)

    // map lại heading trước khi save
    for (let ix = 0; ix < HEADINGS.length; ix++) {
        const originalHeading = HEADINGS[ix]
        csv[0][ix] = alias_heading_csv[originalHeading]
    }
    save_csv(csv, 'all_lc_global')
}

export const run_mapping = () => {
    updateRawQL()
}
