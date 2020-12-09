const INITIAL_STATE = {};

const Procedure = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_DATA_MEDICAL_APPOINTMENT':
      return { dataUser: {
          ...state.dataUser,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default Procedure;
