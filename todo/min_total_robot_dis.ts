export const min_total_robot_dis = () => {
    const { robot, factory } = tc[0]
    console.log(minimumTotalDistance(robot, factory))
}

function minimumTotalDistance(robot: number[], factory: number[][]): number {
    robot.sort((a, b) => a - b)
    factory.sort((a, b) => a[0] - b[0])
    const fac = structuredClone(factory)
    let res = 0

    const debug = Array.from({ length: robot.length }, () => ({}))
    for (let ixRobot = 0; ixRobot < robot.length; ixRobot++) {
        const robotPos = robot[ixRobot]
        let move = Infinity
        let ixSelect = 0

        for (let ixFac = 0; ixFac < fac.length; ixFac++) {
            const [facPos, facCapaLeft] = fac[ixFac]
            if (!facCapaLeft) continue

            const dist = Math.abs(robotPos - facPos)
            if (dist < move) {
                move = dist
                ixSelect = ixFac
                debug[ixRobot] = { robotPos, facPos, dist, move }

                if (ixFac === fac.length - 1) fac[ixSelect][1]--
            } else {
                fac[ixSelect][1]--
                break
            }
        }

        res += move
    }

    console.log({ factory, fac, debug })

    return res
}

const tc = [
    {
        robot: [9, 11],
        factory: [
            [7, 1],
            [10, 1],
            [14, 1]
        ]
    },
    {
        robot: [0, 4, 6],
        factory: [
            [2, 2],
            [6, 2]
        ]
    },
    {
        robot: [1, -1],
        factory: [
            [-2, 1],
            [2, 1]
        ]
    }
]
