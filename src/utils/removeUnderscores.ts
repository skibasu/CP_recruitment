const removeUnderscores = (v: string) => v.replace(/_|-|\\. /g, " ");
export default removeUnderscores;
