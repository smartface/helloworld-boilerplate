const getStyle = (theme: any, themeClassList: string[], userClassList: string[] | undefined, test?: boolean) => {
    let _classList = themeClassList;

    // Add if user assigned any class from theme
    if (Array.isArray(userClassList)) {
        _classList = _classList.concat(userClassList)
    }

    const res: any[] = [];
    _classList.forEach(c => {
        if (theme[c]) {
            res.push(theme[c])
        }
    });
    return res;
}

export { getStyle }