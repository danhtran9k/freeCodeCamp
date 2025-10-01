async function clickAllSortableSVGs() {
    const divs = document.querySelectorAll(
        '.SortableList div[type="button"]:has(svg[data-icon="ellipsis"])'
    )

    for (let i = divs.length - 1; i >= 0; i--) {
        const element = divs[i]
        element.click()

        await new Promise((resolve) => setTimeout(resolve, 1500))

        const liElement = Array.from(document.querySelectorAll('li')).find(
            (li) =>
                li.textContent && li.textContent.includes('Remove from List')
        )

        liElement.click()

        await new Promise((resolve) => setTimeout(resolve, 1500))
    }
}
