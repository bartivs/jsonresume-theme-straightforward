const translations = {
  en: {
    summary: 'SUMMARY',
    skills: 'SKILLS AND TECH',
    languages: 'LANGUAGES',
    work: 'EXPERIENCE',
    volunteer: 'VOLUNTEERING',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    certificates: 'CERTIFICATES',
    publications: 'PUBLICATIONS',
    awards: 'AWARDS',
    interests: 'INTERESTS',
    references: 'REFERENCES',
    present: 'Present',
  },
  es: {
    summary: 'RESUMEN',
    skills: 'HABILIDADES Y TECNOLOGÍAS',
    languages: 'IDIOMAS',
    work: 'EXPERIENCIA',
    volunteer: 'VOLUNTARIADO',
    projects: 'PROYECTOS',
    education: 'EDUCACIÓN',
    certificates: 'CERTIFICACIONES',
    publications: 'PUBLICACIONES',
    awards: 'PREMIOS',
    interests: 'INTERESES',
    references: 'REFERENCIAS',
    present: 'Actual',
  },
  fr: {
    summary: 'SOMMAIRE',
    skills: 'COMPÉTENCES ET TECH',
    languages: 'LANGUES',
    work: 'EXPÉRIENCE',
    volunteer: 'BÉNÉVOLAT',
    projects: 'PROJETS',
    education: 'FORMATION',
    certificates: 'CERTIFICATS',
    publications: 'PUBLICATIONS',
    awards: 'DISTINCTIONS',
    interests: 'CENTRES D’INTÉRÊT',
    references: 'RÉFÉRENCES',
    present: 'Actuel',
  },
}

const normalizeLanguage = (languageCode = 'en') => (languageCode || 'en').toLowerCase()

const getDictionary = languageCode => translations[normalizeLanguage(languageCode)] || translations.en

const getSectionTitle = (key, languageCode) => {
  const dictionary = getDictionary(languageCode)
  if (dictionary[key]) {
    return dictionary[key]
  }
  if (translations.en[key]) {
    return translations.en[key]
  }
  return key.toUpperCase()
}

module.exports = {
  translations,
  getSectionTitle,
}
