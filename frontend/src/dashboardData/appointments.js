export const data = {
    "appointments": [
        {
            "date": "2019-10-10",
            "text": "Checkup: Dr. Smith",
            "time": "3:00-3:30pm"
        },
        {
            "date": "2019-10-11",
            "text": "Follow up: Dr. Jazz",
            "time": "11:00-11:30pm"
        },
        {
            "date": "2019-10-12",
            "text": "Checkup: Dr. Smith",
            "time": "3:00-3:30pm"
        },
        {
            "date": "2019-11-14",
            "text": "Follow up: Dr. Jazz",
            "time": "11:00-11:30pm"
        },
        {
            "date": "2019-12-10",
            "text": "Checkup: Dr. Smith",
            "time": "3:00-3:30pm"
        }
    ].map(({ date, text, time }) => ({
        date: new Date(date), text, time
    }))
};