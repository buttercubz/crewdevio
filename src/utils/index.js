export const getRepoMD = async (repo) => {
  const response = await fetch(`https://raw.githubusercontent.com/crewdevio/${repo}/master/README.md`);
  const data = await response.text();
  return data
};