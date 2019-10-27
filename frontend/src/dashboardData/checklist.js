export const data = {
    "checklist": [
        {
            "date": "2019-10-10",
            "text": "Add daily entry"
        },
        {
            "date": "2019-10-11",
            "text": "See lab results for 10/28"
        },
        {
            "date": "2019-10-12",
            "text": "Read doc's recs"
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