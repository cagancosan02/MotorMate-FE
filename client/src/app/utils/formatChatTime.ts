// export function convertToLocalDate(dateString: string):string {
//   const date = new Date(dateString);
//   const localDate = new Date(
//     date.getTime() - date.getTimezoneOffset() * 60 * 1000
//   );
//   return(localDate);

// }

export function formatChatTime(dateTimeString: string) {
  //UTC 0
  const date = new Date(dateTimeString);
  //Get timezoneoffset of user and Convert to UTC of user
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1000
  );

  const timeDifference = Date.now() - localDate.getTime();
  const timeAgo = Math.abs(Math.floor(timeDifference / 1000));

  if (timeAgo < 60) {
    // Less than 1 minute
    return `${timeAgo} seconds ago`;
  } else if (timeAgo < 3600) {
    // Less than 1 hour
    const minutesAgo = Math.floor(timeAgo / 60);
    if (minutesAgo === 1) {
      return `a minute ago`;
    } else {
      return `${minutesAgo} minutes ago`;
    }
  } else if (timeAgo < 86400) {
    // Less than 1 day
    const hoursAgo = Math.floor(timeAgo / 3600);
    if (hoursAgo === 1) {
      return `an hour ago`;
    } else {
      return `${hoursAgo} hours ago`;
    }
  } else if (timeAgo < 604800) {
    // Less than 1 week
    const daysAgo = Math.floor(timeAgo / 86400);
    if (daysAgo === 1) {
      return `a day ago`;
    } else {
      return `${daysAgo} days ago`;
    }
  } else if (timeAgo < 2592000) {
    // Less than 1 month
    const weeksAgo = Math.floor(timeAgo / 604800);
    if (weeksAgo === 1) {
      return `a week ago`;
    } else {
      return `${weeksAgo} weeks ago`;
    }
  } else if (timeAgo < 31536000) {
    // Less than 1 year
    const monthsAgo = Math.floor(timeAgo / 2592000);
    if (monthsAgo === 1) {
      return `a month ago`;
    } else {
      return `${monthsAgo} months ago`;
    }
  } else {
    // More than 1 year
    const yearsAgo = Math.floor(timeAgo / 31536000);
    if (yearsAgo === 1) {
      return `a year ago`;
    } else {
      return `${yearsAgo} years ago`;
    }
  }
}

export function formatChatTimeOnHover(
  dateTimeString: string,
  isConvertToLocal?: boolean
): string {
  const date = new Date(dateTimeString);
  let localDate = date;
  if (isConvertToLocal) {
    localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  }

  const currentDate = new Date();
  const isSameDay =
    localDate.getDate() === currentDate.getDate() &&
    localDate.getMonth() === currentDate.getMonth() &&
    localDate.getFullYear() === currentDate.getFullYear();

  let formattedDateTimeString;

  const timeString = localDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  if (isSameDay) {
    formattedDateTimeString = timeString;
  } else {
    const dateString = localDate.toLocaleDateString();
    formattedDateTimeString = `${timeString} ${dateString}`;
  }
  return formattedDateTimeString;
}
