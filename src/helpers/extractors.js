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

export const links = str => {
    return str.match(/([^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi);
};


