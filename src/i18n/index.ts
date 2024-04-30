import usa from '@/i18n/locals/en.json'
import español from '@/i18n/locals/es.json'
import brazil from '@/i18n/locals/br.json'

const LANG = {
    ENGLISH: 'en',
    ESPAÑOL: 'es',
    BRAZIL: 'br'
};

export const getI18N = ({
    currentLocale = 'es'
} : {
    currentLocale: string | undefined;
}) => {
    if (currentLocale === LANG.BRAZIL) return {...español,...usa};
    if (currentLocale === LANG.ENGLISH) return {...español,...brazil}
    return español
}