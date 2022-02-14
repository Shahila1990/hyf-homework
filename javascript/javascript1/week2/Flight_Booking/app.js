function getfullName(firstname, surname, useformalName, gender) {
  const isGirl = gender === 'girl';
  const isBoy = gender === 'boy';

  const isChecked = useformalName == true;
  

  if (typeof useformalName === 'undefined') {
    console.log(`please check the formalName checklist`);
  } else if (isChecked && isBoy) {
    return `Lord ${firstname} ${surname}`;
  } else if (isChecked && isGirl) {
    return `Lady ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}

const firstName1 = 'Shahila';
const firstName2 = 'Mafraz';

console.log(getfullName(firstName1, firstName2, false, 'boy'));
