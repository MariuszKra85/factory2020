const initialState = {
  store: [
    {
      cardType: 'store',
      id: '1',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'store',
      id: '2',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'store',
      id: '3',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '3213243',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'store',
      id: '4',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '3214534',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'store',
      id: '5',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'store',
      id: '6',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'store',
      id: '7',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '3213243',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'store',
      id: '8',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '3214534',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
  ],
  process: [
    {
      cardType: 'process',
      id: '9',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'process',
      id: '10',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'process',
      id: '11',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '3213243',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'process',
      id: '12',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '3214534',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
  ],
  scale: [
    {
      cardType: 'scale',
      id: '13',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
  ],

  chill: [
    {
      cardType: 'chill',
      id: '14',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
    {
      cardType: 'chill',
      id: '15',
      name: 'szynka',
      rmCode: 'rm102',
      palletNumber: '32123',
      cookDate: '21.3.2020',
      time: '12.20',
      weight: '200',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };

    case `REMOVE_ITEM`:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
