function trace(obj, key, value, lastPath = '') {
    const pathes = [];

    if (typeof obj !== 'object') {
        throw new Error('First argument has to be an object');
    }

    const findedPathes = Object.keys(obj).reduce((p, k) => {
        const val = obj[k];
        const newPath = `${lastPath}${lastPath ? ' -> ' : ''}${k}`;

        if (typeof val === 'object' && val !== null) {
            p = p.concat(trace(val, key, value, newPath));
        }

        if (k === key) {
            if (typeof value === 'undefined') {
                p.push(newPath);
            } else if (val === value) {
                p.push(newPath);
            }
        }

        return p;
    }, []);

    return pathes.concat(findedPathes);
}

export default trace;