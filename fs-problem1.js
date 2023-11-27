const fs = require("fs").promises;

const problem1 = (absolutePath, randomFiles) => {
  const data = {
    name: "rashid",
    age: 21,
  };

  const createRandomFile = () => {
    for (let i = 1; i <= randomFiles; i++) {
      fs.writeFile(`${absolutePath}/file${i}.json`, JSON.stringify(data))
        .then(() => {
          console.log(`File${i} is Created..`);
          return fs.unlink(`${absolutePath}/file${i}.json`);
        })
        .then(() => {
          console.log(`File${i} is deleted`);
        })
        .catch((err) => {
          console.log(`Error in creating and deleting File${i}, ${err}`);
        });
    }
  };

  const accessDir = (absolutePath) => {
    fs.access(absolutePath)
      .then(() => {
        console.log("Directory already exist");
        createRandomFile();
      })
      .catch(() => {
        fs.mkdir(absolutePath)
          .then(() => {
            console.log("Directory is Created..");
            createRandomFile();
          })
          .catch((err) => console.log(`Error in creating Directory ${err}`));
      });
  };

  accessDir(absolutePath);
};

module.exports.problem1 = problem1;
