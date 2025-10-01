import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

// Hiện chỉ có thể tham chiếu ở Root hoặc nơi file này đặt
// vì thế hacky tạm là trích ra riêng, xem đây là điểm tham chiếu

export const getRelativePath = (filename) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    return join(__dirname, filename)
}
