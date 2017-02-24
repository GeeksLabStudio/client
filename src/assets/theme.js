const dakrGrey = '#1d1d1f';
const grey = '#323136';
const lightGrey = 'rgba(0,0,0,0.3)';
const mainColor = '#88bb00';
const white = 'rgba(255,255,255,0.7)';

export default {
  fontFamily: 'Arial, sans-serif',
  palette: {
    primary1Color: grey,
    primary2Color: grey,
    primary3Color: grey,
    accent1Color: mainColor,
    textColor: white,
    secondaryTextColor: 'rgba(255,255,255,0.7)',
    alternateTextColor: mainColor,
    canvasColor: dakrGrey,
    borderColor: 'rgba(255,255,255,0.3)',
    disabledColor: 'rgba(255,255,255,0.3)',
    pickerHeaderColor: 'rgba(255,255,255,0.12)',
    clockCircleColor: 'rgba(255,255,255,0.12)',
    mainColor,
    dakrGrey,
    grey,
    lightGrey
  },

  appBar: {
    textColor: mainColor
  },

  listItem: {
    leftIconColor: mainColor
  },

  textField: {
    textColor: dakrGrey,
    floatingLabelColor: dakrGrey,
    focusColor: mainColor,
    borderColor: dakrGrey,
  },

  button: {
    height: 40,
    minWidth: 120
  },

  raisedButton: {
    color: '#fff',
    textColor: mainColor
  },

  tabs: {
    backgroundColor: grey,
    textColor: mainColor,
    selectedTextColor: mainColor,
  },

  bottomNavigation: {
    backgroundColor: grey,
    unselectedColor: mainColor
  },

  snackbar: {
    textColor: mainColor,
    backgroundColor: dakrGrey,
    actionColor: mainColor
  },
};