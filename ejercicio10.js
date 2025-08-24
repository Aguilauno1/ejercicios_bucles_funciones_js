const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  const formattedCountry = country.trim()

  if (capitals[formattedCountry]) {
    return capitals[formattedCountry]
  } else {
    return `No tengo registrada la capital de ${formattedCountry}`
  }
}

// Ejemplos:
console.log(getCapital('Spain')) // Madrid
console.log(getCapital('Italy')) // Rome
console.log(getCapital('Brazil')) // No tengo registrada la capital de Brazil
