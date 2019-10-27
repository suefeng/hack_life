import moment from 'moment'
export const week0 = moment('2019-02-15', 'YYYY-MM-DD')
export const weekToDate = week => week0.clone().add(week, 'weeks')
