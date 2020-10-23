export const getRepoMD = async (repo) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/crewdevio/${repo}/master/README.md`
  );
  const data = await response.text();

  console.log(typeof response.status);

  if (response.status === 404) {
    console.log("here");
    const responseMain = await fetch(
      `https://raw.githubusercontent.com/crewdevio/${repo}/main/README.md`
    );

    const dataMain = await responseMain.text();
    return dataMain;
  } else {
    return data;
  }
};
