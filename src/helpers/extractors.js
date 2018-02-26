const API = "https://cors-anywhere.herokuapp.com/";

export const mentions = str => {
    const matches = str.match(/\B@\S+/g) || [];
    return matches.map(match => {
        return match.slice(1);
    });
};

export const emoticons = str => {
    const matches = str.match(/\(\w{1,15}\)/g) || [];
    return matches.map(match => {
        return match.slice(1, match.length - 1);
    });
};

export const links = (str, cb) => {
    const matches = str.match(/([^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi);
    matches && matches.forEach(url => {
        fetch(API + url, {
            headers: new Headers({
                'Origin': null
            })
        })
        .then(res => res.text())
        .then(text => {
            const match = text.match(/<title>(.*)<\/title>/);
            const title =  match && match[1]
            cb({ url, title });
        });
    });
};


