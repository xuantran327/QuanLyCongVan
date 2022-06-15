export const getDateTime = dt => {
  var date = new Date(dt).getDate(); //To get the Current Date
  var month = new Date(dt).getMonth() + 1; //To get the Current Month
  var year = new Date(dt).getFullYear(); //To get the Current Year
  var hours = new Date(dt).getHours(); //To get the Current Hours
  var min = new Date(dt).getMinutes(); //To get the Current Minutes
  var sec = new Date(dt).getSeconds();
  //   var date = moment().utcOffset('+07:00').format('YYYY-MM-DD hh:mm:ss a');
  return (
    (date < 10 ? '0' + date : date) +
    '/' +
    (month < 10 ? '0' + month : month) +
    '/' +
    year +
    ' ' +
    (hours < 10 ? '0' + hours : hours) +
    ':' +
    (min < 10 ? '0' + min : min) +
    ':' +
    (sec < 10 ? '0' + sec : sec)
  );
};
export const getDate = dt => {
  var date = new Date(dt).getDate(); //To get the Current Date
  var month = new Date(dt).getMonth() + 1; //To get the Current Month
  var year = new Date(dt).getFullYear(); //To get the Current Year
  return (
    (date < 10 ? '0' + date : date) +
    '/' +
    (month < 10 ? '0' + month : month) +
    '/' +
    year +
    ' '
  );
};
export const getDateAlt = dt => {
  var date = new Date(dt).getDate(); //To get the Current Date
  var month = new Date(dt).getMonth() + 1; //To get the Current Month
  var year = new Date(dt).getFullYear(); //To get the Current Year
  return (
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (date < 10 ? '0' + date : date)
  );
};
export const ipAddress = () => {
  const IP_ADDRESS = '192.168.43.70';
  return IP_ADDRESS.toString();
};
export const getExtension = fileName => {
  let extension = fileName.substring(fileName.lastIndexOf('.') + 1);
  return extension;
};
