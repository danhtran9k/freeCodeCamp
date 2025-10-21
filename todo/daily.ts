type TMemo = { mask: bigint; count: number } // mask
function smallestSufficientTeam(
    req_skills: string[],
    people: string[][]
): number[] {
    const { lenPeople, personMap, fullReqMask, maskToSelect } = setup(
        req_skills,
        people
    )

    // vì return any possible, memo chỉ cần lưu 1 mask valid
    // bitCount của mask là min
    const memo: Record<string, TMemo> = {}
    memo[0] = { mask: 0n, count: 0 }

    const dfs = (reqMaskInt: bigint) => {
        const reqMask = reqMaskInt.toString()
        if (memo[reqMask]) return memo[reqMask]

        let best: TMemo = { mask: 0n, count: Infinity }
        for (let ix = 0; ix < lenPeople; ix++) {
            const currSkill = personMap[ix]
            const skillNeedLeft = reqMaskInt & ~BigInt(currSkill)

            if (skillNeedLeft === reqMaskInt) continue // nothing change

            const selectOne = 1n << BigInt(ix)
            const { mask: maskNeedLeft, count: countNeedLeft } =
                dfs(skillNeedLeft)

            const maskSelect = maskNeedLeft | selectOne
            const countSelect = countNeedLeft + 1

            if (countSelect < best.count) {
                best = { mask: maskSelect, count: countSelect }
            }
        }

        memo[reqMask] = best
        return best
    }

    const { mask } = dfs(fullReqMask)
    return maskToSelect(mask)
}

const setup = (req_skills: string[], people: string[][]) => {
    const lenSkills = req_skills.length
    const lenPeople = people.length
    const reqMap: Record<string, number> = {}

    for (let ix = 0; ix < lenSkills; ix++) {
        reqMap[req_skills[ix]] = ix
    }

    const personMap: bigint[] = Array(lenPeople).fill(0n)
    for (let ix = 0; ix < lenPeople; ix++) {
        for (const skill of people[ix]) {
            const idSkill = reqMap[skill]
            personMap[ix] |= 1n << BigInt(idSkill)
        }
    }

    const fullReqMask = (1n << BigInt(lenSkills)) - 1n

    const maskToSelect = (mask: bigint) => {
        const result: number[] = []
        for (let ix = 0; ix < lenPeople; ix++) {
            if (mask & (1n << BigInt(ix))) {
                result.push(ix)
            }
        }
        return result
    }

    return { lenPeople, personMap, fullReqMask, maskToSelect }
}
