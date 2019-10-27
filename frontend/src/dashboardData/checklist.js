export const data = {
    "checklist": [
        {
            "date": "2019-10-10",
            "text": "Add daily entry",
            "href": "/diary"
        },
        {
            "date": "2019-10-11",
            "text": "See lab results",
            "href": "/reports"
        },
        {
            "date": "2019-10-12",
            "text": "Doctor's advice"
        },
    ].map(({ date, ...rest }) => ({
        date: new Date(date), ...rest
    }))
};
