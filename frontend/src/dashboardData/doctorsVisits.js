export const data = {
    "doctorsVisits": [
        {
            "doctor": "Dr. Jazz",
            "date": "2019-10-29",
            "purpose": "Referral visit",
            "url": "/doctors-portal-entry"
        },
        {
            "doctor": "Dr. Smith",
            "date": "2019-10-1",
            "purpose": "1st trimester check in",
            "url": "/doctors-portal-entry"
        },
        {
            "doctor": "Dr. Jazz",
            "date": "2019-9-1",
            "purpose": "1st trimester visit",
            "url": "/doctors-portal-entry"
        }
    ].map(({ date, ...rest }) => ({
        date: new Date(date), ...rest
    }))
};