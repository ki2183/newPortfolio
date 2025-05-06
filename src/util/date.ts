export const DateToText = (start:string, end:string) => {
    const s = start.split('-').map(Number);
    const e = end.split('-').map(Number);
    const months = ['null', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    

    if (s[2] || e[2]) {
      console.error('날짜를 추출 할 수가 없음');
      return "err"
    };

    return `${months[s[1]]}, ${s[0]} - ${months[e[1]]}, ${e[0]}`
  };