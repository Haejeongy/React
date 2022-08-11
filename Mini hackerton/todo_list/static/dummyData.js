import shortid from 'shortid';

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const dummyDiary = [
  {
    id: shortid(),
    subject: '오늘은 맑음',
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      '대충 소소하게 오늘 행복했던 일',
    createdAt: '2022-02-24T16:17:47.000Z',
    updatedAt: '2022-02-24T16:17:47.000Z',
  },
  {
    id: shortid(),
    subject: '열공했음!',
    picture: `https://randomuser.me/api/portraits/men/98.jpg`,
    content:
      '대충 소소하게 오늘 행복했던 일',
    createdAt: '2022-02-25T16:17:47.000Z',
    updatedAt: '2022-02-25T16:17:47.000Z',
  },
  {
    id: shortid(),
    subject: '바쁘다바빠 현대사회',
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
subject:
      '대충 소소하게 오늘 행복했던 일',
    createdAt: '2022-02-26T16:17:47.000Z',
    updatedAt: '2022-02-26T16:17:47.000Z',
  },
  {
    id: shortid(),
    subject: '멋진 내 삼두',
    picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      '대충 소소하게 오늘 행복했던 일',
    createdAt: '2022-02-27T16:17:47.000Z',
    updatedAt: '2022-02-27T16:17:47.000Z',
  },
  {
    id: shortid(),
    subject: '스트레칭 시원',
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      '대충 소소하게 오늘 행복했던 일',
    createdAt: '2022-02-28T16:17:47.000Z',
    updatedAt: '2022-02-28T16:17:47.000Z',
  },
];

export default dummyDiary;
