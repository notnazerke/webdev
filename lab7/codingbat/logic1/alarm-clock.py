def alarm_clock(day, vacation):
  if (day==0 or day==6) and vacation:
    return 'off'
  if (day==0 or day==6) or vacation:
    return '10:00'
  return '7:00'