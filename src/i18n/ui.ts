import Colombia from '@/components/icons/flags/Colombia.astro'
import USA from '@/components/icons/flags/United-States.astro'
import Brazil from '@/components/icons/flags/Brazil.astro'

export const LANGUAGES: Record<
    string,
    { code: string; name: string; flag: typeof Colombia }
> = {
    es: {
        code: 'es',
        name: 'Español',
        flag: Colombia
        
    },
    en: {
        code: 'en',
        name: 'English',
        flag: USA
        
    },
    br: {
        code: 'br',
        name: 'Brazil',
        flag: Brazil
    }
}

export const defaultLanguage = 'es';
export const showDefaultLanguage = false;

export const ui = {
  es: {
      'nav.estudios': 'estudios',
      'nav.proyectos': 'proyectos',
      'nav.sobre mi': 'sobre mi',
      'nav.contactos': 'contactos'
  }, 
  en: {
      'nav.estudios': 'studies',
      'nav.proyectos': 'projects',
      'nav.sobre mi': 'about me',
      'nav.contactos': 'contacts'
  }, 
  br: {
      'nav.estudios': 'estudos',
      'nav.proyectos': 'projetos',
      'nav.sobre mi': 'sobre mim',
      'nav.contactos': 'contatos'
  }
} as const;


