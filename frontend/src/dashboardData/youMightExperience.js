export const data = {
    "youMightExperience": [
        {
            "date": "2019-10-10",
            "text": "blah blah"
        },
        {
            "date": "2019-10-11",
            "text": "blah blah"
        },
        {
            "date": "2019-10-12",
            "text": "blah blah"
        },
        {
            "date": "2019-11-14",
            "text": "blah blah"
        },
        {
            "date": "2019-12-10",
            "text": "blah blah"
        }
    ].map(({ date, text }) => ({
        date: new Date(date), text
    }))
};