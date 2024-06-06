function getval() {
  const getday = document.getElementById("day");
  const getmonth = document.getElementById("month");
  const getyear = document.getElementById("year");

  const dday = parseInt(getday.value);
  const mmonth = parseInt(getmonth.value);
  const yyear = parseInt(getyear.value);

  if (isNaN(dday) || isNaN(mmonth) || isNaN(yyear)) {
    alert("Please enter valid numbers for day, month, and year.");
    return;
  }

  const inputDate = new Date(yyear, mmonth - 1, dday);
  const currDate = new Date(2024, 6, 6);

  const newTime = currDate - inputDate;
  const newDate = new Date(newTime);

  const day = newDate.getUTCDate() - 1;
  const month = newDate.getUTCMonth();
  const year = newDate.getUTCFullYear() - 1970;

  const letday = document.getElementById("DD");
  const letmonth = document.getElementById("MM");
  const letyear = document.getElementById("YYYY");

  letday.textContent = `${day}`;
  letmonth.textContent = `${month}`;
  letyear.textContent = `${year}`;
}

