import { ALL_LC } from '../data/data-importer'
import { exit } from '../utils/csv_analyze'
import { query_questionDataV2 } from './api_lc_query'
import { lcPostQl } from './fetch-QL'

export const fetchDetail = async (question) => {
    const { titleSlug } = question
    const res = await lcPostQl(query_questionDataV2, {
        titleSlug
    })

    return mergeData(res.question, question)
}

const mergeData = (res, question) => {
    if (res.titleSlug !== question.titleSlug)
        exit(`❌ Local ${res.titleSlug} !== ${question.titleSlug}`)

    const merged = { ...question }

    merged.categoryTitle = res.categoryTitle
    merged.hasSolution = res.hasSolution
    merged.hasVideoSolution = res.hasVideoSolution
    merged.canSeeDetail = question.paidOnly
        ? false
        : res.solution?.canSeeDetail ?? false

    const similarQuestions = JSON.parse(res.similarQuestions)
    const similarIds = []
    for (const similar of similarQuestions) {
        const matchedQuestion = ALL_LC.find(
            (q) => q.titleSlug === similar.titleSlug
        )

        if (!matchedQuestion) exit(`❌ ${similar.titleSlug} NOT FOUND`)

        similarIds.push(matchedQuestion.id)
    }

    merged.similarQuestion = similarIds

    return merged
}
