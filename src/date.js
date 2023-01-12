
  export const toUTC = (timeStamp) => {
        return new Date(timeStamp.getUTCFullYear(),timeStamp.getUTCMonth(), timeStamp.getUTCDate() , 
      timeStamp.getUTCHours(), timeStamp.getUTCMinutes(), timeStamp.getUTCSeconds(), timeStamp.getUTCMilliseconds());

  }

  export const newDateYMDHMS= (year, month, date, hours, minutes, seconds) => {
    var currentDate = new Date(year, month, date, hours, minutes, seconds);
    return toUTC(currentDate); // returns the UTC version
  }
  export const newDateYMDHM =(year, month, date, hours, minutes) => {
    var currentDate = new Date(year, month, date, hours, minutes);
    return toUTC(currentDate); // returns the UTC version
  }
  export const newDateYMDH= (year, month, date, hours) => {
    var currentDate = new Date(year, month, date, hours);
    return toUTC(currentDate); // returns the UTC version
  }
  export const newDateYMD= (year, month, date) => {
    var currentDate = new Date(year, month, date);
    return toUTC(currentDate); // returns the UTC version
  }
  export const newDateYM = (year, month) => {
    var currentDate = new Date(year, month);
    return toUTC(currentDate); // returns the UTC version
  }
  export const newDateY= (year) => {
    var currentDate = new Date(year);
    return toUTC(currentDate); // returns the UTC version
  }
  export const newDate= () => {
    var currentDate = new Date();
    return toUTC(currentDate); // returns the UTC version
  }