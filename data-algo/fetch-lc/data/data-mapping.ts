import { dp_200_prob } from './data-importer'

type TJson = Record<string, string>
const mapJsonToCsv = (jsonObj: TJson[], csvName: string) => {
    const HEADINGS = Object.keys(jsonObj[0])
}

export const run_mapping = () => {
    mapJsonToCsv(dp_200_prob as unknown as TJson[], 'dp_200_prob.csv')
}
