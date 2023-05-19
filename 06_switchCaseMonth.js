function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`${monthNumber}st Month : January`);
      break;
    case 2:
      console.log(`${monthNumber}nd Month : February`);
      break;
    case 3:
      console.log(`${monthNumber}rd Month : March`);
      break;
    case 4:
      console.log(`${monthNumber}th Month : April`);
      break;
    case 5:
      console.log(`${monthNumber}th Month : May`);
      break;
    case 6:
      console.log(`${monthNumber}th Month : June`);
      break;
    case 7:
      console.log(`${monthNumber}th Month : July`);
      break;
    case 8:
      console.log(`${monthNumber}th Month : August`);
      break;
    case 9:
      console.log(`${monthNumber}th Month : September`);
      break;
    case 10:
      console.log(`${monthNumber}th Month : October`);
      break;
    case 11:
      console.log(`${monthNumber}th Month : November`);
      break;
    case 12:
      console.log(`${monthNumber}th Month : December`);
      break;
    default:
        console.log(`Invalid Data`);
      break;
  }
}
monthOfYear(5);
monthOfYear(9);
monthOfYear(2);
monthOfYear(10);