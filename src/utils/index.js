export const getRepoMD = async (repo) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/crewdevio/${repo}/master/README.md`
  );
  const data = await response.text();

  if (response.status === 404) {
    const responseMain = await fetch(
      `https://raw.githubusercontent.com/crewdevio/${repo}/main/README.md`
    );

    const dataMain = await responseMain.text();
    return dataMain;
  } else {
    return data;
  }
};
