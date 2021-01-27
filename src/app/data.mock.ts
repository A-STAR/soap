interface NavigationItem {
  name: string;
  image: string;
}

export interface NavigationData {
  navigation: NavigationItem[];
}

export const DATA: NavigationData = {
  navigation: [
    {
      name: 'Hazmat',
      image: 'https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/014-hazmat.svg'
    },
    {
      name: 'Soap',
      image: 'https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/013-soap.svg'
    },
    {
      name: 'Paper',
      image: 'https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/008-tissue_paper.svg'
    },
    {
      name: 'Desinfectant',
      image: 'https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/019-desinfectant.svg'
    }
  ]
};
