export const data = {
    "about": [
        {
            "date": "2019-10-10",
            "title": "About the first trimester",
            "text": "<p>Your baby develops the most during the first trimester. <a href=\"\">Hear more.</a></p><p>During this time, your body undergoes various changes, which may cause a range of symptoms. <a href=\"\">Read more.</a></p>"
        }
    ].map(({ date, text, title }) => ({
        date: new Date(date), text, title
    }))
};