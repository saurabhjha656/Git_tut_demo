function reversal(param) {
    rev_str = "";

    function stringReverse() {
        for (i = param.length - 1; i >= 0; i--) {
            rev_str = rev_str + param[i];
        }
        console.log(param);
        return rev_str;
    }
    const reversed = stringReverse();

    console.log(reversed);
}

reversal("hello");