const getRepoMD = async (repo) => {
  const response = await fetch(`https://raw.githubusercontent.com/crewdevio/${repo}/master/README.md`);
  const data = response.text();
  return data
};

module.exports = {
  getRepoMD
}