import {Person} from './interfaces'

function devide(baseNumber: number, factor: number) {
  return factor === 0 ? Error('Cant devide baseNumber by zero') : baseNumber / factor
}
const som = devide(4, 0)

function guards(arg0: any): arg0 is Person {
  return typeof arg0 === 'object' && 'firstName' in arg0 && 'lastName' in arg0
}

function isAdult<T extends Person>(person: T) {
  const age = Math.abs(
    new Date(Date.now() - person.dateOfBirth.getTime()).getFullYear() - person.dateOfBirth.getFullYear(),
  )
  person.adult = age >= 18

  return person
}
