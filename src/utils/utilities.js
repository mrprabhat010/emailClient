export const getFirstLetter = (username) => username.charAt(0).toUpperCase();

export const dateFormatter = (date) => {
    date = Number(date);
    let newDate = new Date(date).toLocaleString();
    let formattedDate = newDate.substring(0, 15);
    let formattedTime = newDate.substring(19)
    newDate = formattedDate + formattedTime;
    newDate = newDate.split(',').join(' ').toLocaleLowerCase()
    return newDate;
}

export const markRead = (id) => {
    let readItems = JSON.parse(localStorage.getItem('read')) || []
    if (!readItems.includes(id)) {
        readItems.push(id)
        localStorage.setItem('read', JSON.stringify(readItems))
    }
}

export const mailRead = (list) => {
    let read = JSON.parse(localStorage.getItem('read')) || [];
    read = list.filter(item => read.includes(item.id));
    return read;
}

export const mailUnread = (list) => {
    let read = JSON.parse(localStorage.getItem('read'));
    let unread = list.filter(item => !read.includes(item.id));
    return unread;
}

export const favourite = (list) => {
    let favourite = JSON.parse(localStorage.getItem('favourite')) || [];
    favourite = list.filter(item => favourite.includes(item.id));
    return favourite;
}
export const isFavourite = (id) => {
    let favourite = localStorage.getItem('favourite') || [];
    return favourite.includes(id);
}
export const markFavourite = (id) => {
    let favourite = JSON.parse(localStorage.getItem('favourite')) || [];
    if (!favourite.includes(id)) {
        favourite.push(id)
        localStorage.setItem('favourite', JSON.stringify(favourite))
    }
}

export const markNotFavourite = (id) => {
    let favourite = JSON.parse(localStorage.getItem('favourite')) || [];
    if (favourite.includes(id)) {
        favourite = favourite.filter(item => item !== id);
        localStorage.setItem('favourite', JSON.stringify(favourite));
    }
}
export const filter = (ref,list,setList,action) => {
    if (!ref.current) {
        let newList = action(list);
        setList(newList);
        ref.current = true
    }
    else {
        setList(list);
        ref.current = false
    }
}
