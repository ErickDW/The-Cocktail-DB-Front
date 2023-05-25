export interface StyleCircle {
  tam: string; // Size circle
  borderColor: string;
  background: string;
  img: Img; //Data img
  action: Action; //Data description
}

interface Action {
  titleCircle: string; // title up
  description: boolean; // if true, i can see titleDescription and text
  titleDescription: string; // title down
  colorTitleDescription: string;
  content: boolean; // if true, i can see text
  text: string; // target action ('Add to my list' or 'Recipes with -drink-') and option img
}

interface Img {
  imgUrl: string;
  altImg?: string;
}


export const circleComponentDefault: StyleCircle = {
  tam: '240px',
  borderColor: '#DFBED8',
  background: '#DFBED8',
  action: {
    titleCircle: 'Text title',
    description: true,
    titleDescription: 'Mojito',
    colorTitleDescription:'white',
    content: true,
    text: 'Add to my list',
  },
  img: {
    imgUrl: '../../assets/circles/mojito.png',
    altImg: 'Mojito',
  },
};

export const circleComponentOther: StyleCircle = {
  tam: '240px',
  borderColor: '#DFBED8',
  background: '#DFBED8',
  action: {
    titleCircle: '',
    description: true,
    titleDescription: '6 Egg Yolk',
    colorTitleDescription:'black',
    content: false,
    text: '',
  },
  img: {
    imgUrl: '../../assets/others/6 Egg Yolk.png',
    altImg: 'Egg',
  },
};
