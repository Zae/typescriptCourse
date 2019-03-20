interface Company {
  name: string
  address: string
  houseNumber: number
  houseNumberAddition?: string
  zipCode: string
  town: string
}

interface Toys {
  name: string
  manufactor: Company
}

interface Work {
  start: Date
  end: Date
  company: Company
}

interface Person {
  firstName: string
  middleName?: string
  lastName: string
  dateOfBirth: Date
  adult: boolean
}

interface Child extends Person {
  adult: false
  toys: Toys[]
}

interface Adult extends Person {
  adult: true
  cv: Work[]
}

const person1: Person = {
  firstName: 'Wendy',
  lastName: 'Peterson',
  dateOfBirth: new Date(1956, 10, 1),
  adult: true,
}

const person2: Adult = {
  firstName: 'Frida',
  lastName: 'Peterson',
  dateOfBirth: new Date(1970, 10, 1),
  adult: true,
  cv: [
    {
      start: new Date(1989, 10, 1),
      end: new Date(),
      company: {
        name: 'Nederlandse Spoorwegen',
        address: 'Laan van Puntenburg',
        houseNumber: 100,
        zipCode: '2509LP',
        town: 'Den Haag',
      },
    },
  ],
}

const person3: Child = {
  firstName: 'Frida',
  lastName: 'Peterson',
  dateOfBirth: new Date(1970, 10, 1),
  adult: false,
  toys: [
    {
      name: 'model trein Intercity',
      manufactor: {
        name: 'Nederlandse Spoorwegen',
        address: 'Laan van Puntenburg',
        houseNumber: 100,
        zipCode: '2509LP',
        town: 'Den Haag',
      },
    },
  ],
}
