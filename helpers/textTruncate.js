export const truncate = (text, length) => {
    if(text===null || text===""){
      return
    }
    return (`${text.substr(0, length)}${text.length > length ? "..." : ''}`);
  };