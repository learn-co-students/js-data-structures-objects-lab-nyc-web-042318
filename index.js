// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(obj,key,val) {
  const newobj = { ...obj};

  newobj[key] = val;
  return newobj;
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
};

function deleteFromDriverByKey(obj, key) {
  const newobj = {...obj};

  delete newobj[key];
  return newobj;
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];

  return obj; 
};
