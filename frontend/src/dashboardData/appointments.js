import { weekToDate } from '../constants'

export const practitioners = [
  { "name": "Emma Smith", "type": "Maternal-Fetal Medicine Specialist", "description": "ObGyn physician with expertise in high-risk pregnancies." },
  { "name": "Daniel Jazz", "type": "Obstetrician and Gynecologist (ObGyn)", "description": "An ObGyn physician delivers babies and specializes in treating diseases of the female reproductive organs." },
  { "name": "Lyle Burns", "type": "Registered Dietitian Nutritionist with specialty in medical nutrition therapy", "description": "An RDN is a food and nutrition expert. Medical nutrition therapy treats chronic conditions using a tailored nutrition plan." },
].map((elem, index) => Object.assign(elem, { index }))

export const appointments = 
  [
    {
      "date": weekToDate(4),
      "text": "Checkup",
      "practitioner": practitioners[1],
      "time": "3:00-3:30pm"
    },
    {
      "date": weekToDate(24),
      "text": "Checkup",
      "practitioner": practitioners[0],
      "time": "3:00-3:30pm"
    },
    {
      "date": weekToDate(24).add(1, 'days'),
      "text": "Follow up",
      "practitioner": practitioners[1],
      "time": "11:00-11:30pm"
    },
    {
      "date": weekToDate(24).add(2, 'days'),
      "text": "Checkup",
      "practitioner": practitioners[0],
      "time": "3:00-3:30pm"
    },
    {
      "date": weekToDate(24).add(3, 'days'),
      "text": "Follow up",
      "practitioner": practitioners[1],
      "time": "11:00-11:30pm"
    },
    {
      "date": weekToDate(25),
      "text": "Checkup",
      "practitioner": practitioners[0],
      "time": "3:00-3:30pm"
    },
    {
      "date": weekToDate(25),
      "text": "Checkup",
      "practitioner": practitioners[0],
      "time": "3:30-4:45pm"
    }
  ].map(({ date, ...rest }) => ({
    date: new Date(date), ...rest
  }))
;
