import { PriorityQueue } from './node_modules/@datastructures-js/priority-queue/index'

export const daily_lc = () => {
    console.log('✅✅✅✅✅✅ No current Daily ✅✅✅✅✅✅')
}

type TFood = {
    rating: number
    cuisine: string
}
type TBestFood = {
    food: string
    rating: number
}
class FoodRatings {
    foodInfo: Record<string, TFood> = {}
    bestCuisine: Record<string, PriorityQueue<TBestFood>> = {}

    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        const len = foods.length

        for (let ix = 0; ix < len; ix++) {
            const food = foods[ix]
            const cuisine = cuisines[ix]
            const rating = ratings[ix]

            this.foodInfo[food] = {
                rating,
                cuisine
            }

            if (!this.bestCuisine[cuisine]) {
                this.bestCuisine[cuisine] = new PriorityQueue<TBestFood>(
                    (a, b) =>
                        b.rating - a.rating || a.food.localeCompare(b.food)
                )
            }
            this.bestCuisine[cuisine].enqueue({
                food,
                rating
            })
        }
    }

    changeRating(food: string, newRating: number): void {
        const currFood = this.foodInfo[food]

        currFood.rating = newRating
        const cuisine = currFood.cuisine

        this.bestCuisine[cuisine].enqueue({
            food,
            rating: newRating
        })
    }

    highestRated(cuisine: string): string {
        const cuisineList = this.bestCuisine[cuisine]

        const bestFood = cuisineList.front()
        const { rating, food } = bestFood
        if (rating !== this.foodInfo[food].rating) {
            return bestFood.food
        }

        while (!cuisineList.isEmpty()) {
            const bestFood = cuisineList.front()
            const { rating, food } = bestFood
            if (rating !== this.foodInfo[food].rating) {
                cuisineList.dequeue()
                continue
            }
            return bestFood.food
        }

        return ''
    }
}

const input = [
    'FoodRatings',
    'highestRated',
    'highestRated',
    'changeRating',
    'highestRated',
    'changeRating',
    'highestRated'
]

const data = [
    [
        // 9k     // 12j   // 8j     // 15g     // 14j     // 7k
        ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
        ['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
        [9, 12, 8, 15, 14, 7]
    ], // null
    ['korean'], // 'kimchi'
    ['japanese'], // ramen
    ['sushi', 16], // null
    ['japanese'], // sushi
    ['ramen', 16], // null
    ['japanese'] // ramen
]
