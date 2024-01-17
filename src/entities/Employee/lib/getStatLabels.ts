import { declOfNum } from 'shared/lib/utils/declOfNum';

interface IStatLabels {
  [key: string]: {[key: string]: {valueSup: string; label: string}};
}

const getStatLabels = (value: number): IStatLabels => ({
  'ru-RU': {
    case: {
      valueSup: '',
      label: declOfNum(value, ['кейс', 'кейса', 'кейсов']),
    },
    experience: {
      valueSup: declOfNum(value, ['год', 'года', 'лет']),
      label: 'опыта',
    },
  },
  'en-US': {
    case: {
      valueSup: '',
      label: value !== 1 ? 'cases' : 'case',
    },
    experience: {
      valueSup: 'year',
      label: 'exp',
    },
  },
});

export default getStatLabels;
