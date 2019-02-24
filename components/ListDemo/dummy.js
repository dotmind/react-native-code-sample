import faker from 'faker';

const NUMBERS = 15;

const DUMMY = [...Array(NUMBERS)].map(item => {
  return {
    key: item,
    username: faker.name.findName(),
    avatar: faker.image.avatar(),
    text: faker.name.jobTitle(),
  };
});

export default DUMMY;