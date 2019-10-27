export const data = {
    "about": [
        {
            "date": "2019-10-10",
            "title": "About the first trimester",
            "text": "Your baby develops the most during the first trimester. Hear more.<br>During this time, your body undergoes various changes, which may cause a range of symptoms. Read more."
        }
    ].map(({ date, text, title }) => ({
        date: new Date(date), text, title
    }))
};