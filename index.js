// Write your solution in this file!
const driver = {name: 'Sam'};

function updateDriverWithKeyAndValue(driver, key, value) {
  const another_driver = {...driver};
  another_driver[key] = value;
  return another_driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const another_driver = {...driver};
  return delete another_driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
  return driver;
}
