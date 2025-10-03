# LeetCode Data Fetcher - Python Version

Phiên bản Python của `get_records.js` để fetch dữ liệu LeetCode daily và weekly challenges.

## Cài đặt

```bash
pip install -r requirements_py.txt
```

## Cấu hình

Tạo file `.env` trong thư mục `fetch-lc/` với nội dung:

```
LEETCODE_SESSION=your_leetcode_session_cookie
```

### Lấy LEETCODE_SESSION:

1. Đăng nhập vào leetcode.com
2. Mở DevTools (F12)
3. Vào tab Application/Storage > Cookies
4. Copy giá trị của cookie `LEETCODE_SESSION`

## Sử dụng

```bash
python get_records.py
```

Script sẽ:

-   Fetch tất cả daily challenges từ 04/2020 đến 09/2025
-   Fetch tất cả weekly challenges từ 08/2020 đến 09/2025
-   Lưu kết quả vào `daily.csv` và `weekly.csv`

## Cấu trúc file

```
fetch-lc/
├── get_records.py          # Main script (Python version)
├── get_records.js          # Main script (JS version)
├── utils_py/               # Python utilities
│   ├── __init__.py
│   ├── fetch_ql.py        # GraphQL fetch functions
│   ├── lc_query.py        # Query definitions and constants
│   └── csv_analyze.py     # CSV and utility functions
├── utils/                  # JavaScript utilities
└── .env                    # Environment variables (create this)
```

## So sánh với version JavaScript

### Giống nhau:

-   Logic xử lý hoàn toàn giống nhau
-   Các hàm utility tương ứng 1-1
-   Output CSV format giống nhau

### Khác nhau:

-   **Python**: Sử dụng `aiohttp` cho async HTTP requests
-   **JavaScript**: Sử dụng native `fetch` API
-   **Python**: Sử dụng `asyncio` cho async operations
-   **JavaScript**: Sử dụng native async/await

## Rate Limiting

Script có delay 2 giây giữa các request để tránh bị rate limit bởi LeetCode API.
