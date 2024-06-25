const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return ""
    let prefix = strs[0]
    strs?.forEach((v) => {
        while (v.slice(0, prefix?.length) !== prefix) {
            prefix = prefix?.slice(0, -1); if (prefix === "") return ""
        }
    })
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
// ---------------------------------------------------------------------------
