```graphQl
query 
questionDataV2($titleSlug: String!) {
    question(titleSlug: $titleSlug) {            
        questionFrontendId
        titleSlug
        similarQuestions
        categoryTitle

        # topicTags { name }
        # difficulty
        # isPaidOnly

        # freqBar
        # frequency

        # acRate
        # title
        # stats
        # questionId
        # likes
        # dislikes
        # hints
        # content
        # companyTags { name }

        hasSolution 
        hasVideoSolution
        solution { 
            canSeeDetail 
            # content 
        }
    }
}   
```

Dùng format graphQl ở trên (giữ lại comment) thêm api vào fetch-lc/api/api_lc_query.js

1. load toàn bộ data trong all_lc_global.json vào, đặt tên biến là ALL_LC
2. bắt đầu loop lần lượt qua mọi *question* trong ALL_LC, check xem questionFrontendId có > idStart ko

-   nếu false, skip
-   nếu true, start

3. lấy titleSlug ra, thay vào api graphQL và gọi, response sẽ có dạng sau
```json
{
    "data": {
        "question": {
            "questionFrontendId": "1948",
            "titleSlug": "delete-duplicate-folders-in-system",
            "similarQuestions": "[{\"title\": \"Find Duplicate File in System\", \"titleSlug\": \"find-duplicate-file-in-system\", \"difficulty\": \"Medium\", \"translatedTitle\": null}, {\"title\": \"Find Duplicate Subtrees\", \"titleSlug\": \"find-duplicate-subtrees\", \"difficulty\": \"Medium\", \"translatedTitle\": null}]",
            "categoryTitle": "Algorithms",
            "hasSolution": true,
            "hasVideoSolution": false,
            "solution": {
                "canSeeDetail": true
            }
        }
    }
}
```

3a. lấy data trong question ra
3b. compare titleSlug của response với titleSlug của object, ko match show log `logResTitle --- slug`
3c. parse similarQuestions ra object,
3d. for each similar, lấy titleSlug, tìm trong ALL_LC, match exactly, 
 - nếu ko tìm ra match thì log ra title Similar Missmatch và throw Error ngay, END
 - nếu match thì lấy id ra, 
4. thêm field similarQuestion với value là array id vừa tìm được vào *question*
5. Thêm các key categoryTitle, hasSolution, hasVideoSolution, canSeeDetail vào *question*

6. dùng cách hepler có sẵn trong csv_analyze.js
gọi promiseAll mỗi lần 5 request, sau đó sleep 1s, thực thi cho 10 problem đầu tiên