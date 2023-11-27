const fs = require("fs").promises;

const problem2 = (lipsumFile) => {
  const storeUpperCaseContent = (filename, content) => {
    fs.writeFile(filename, content)
      .then(() => {
        console.log("UpperCase content is written..");
        return fs.appendFile(
          "../output/filesname.txt",
          "../output/upperCaseContent.txt\n"
        );
      })
      .then(() => {
        console.log(`UpperCase content file name is added`);
        return fs.readFile("../output/upperCaseContent.txt", "utf-8");
      })
      .then((data) => {
        console.log("UpperCase content read successfully..");
        const lowerCaseContent = data.toLowerCase().split(".");
        return fs.writeFile("../output/lowerCaseContent.txt", lowerCaseContent);
      })
      .then(() => {
        console.log("lowerCase content is written successfully");
        return fs.appendFile(
          "../output/filesname.txt",
          "../output/lowerCaseContent.txt\n"
        );
      })
      .then(() => {
        console.log("lowerCaseContent file name is added");
        return fs.readFile("../output/lowerCaseContent.txt", "utf-8");
      })
      .then((data) => {
        console.log("LowerCase data is successfully read");
        const sortedContent = data.split(" ").sort().join(" ");
        return fs.writeFile("../output/sortedContent.txt", sortedContent);
      })
      .then(() => {
        console.log("sorted content written successfully");
        return fs.appendFile(
          "../output/filesname.txt",
          "../output/sortedContent.txt\n"
        );
      })
      .then(() => {
        console.log("SortedContent file name is added successfully");
        return fs.readFile("../output/filesname.txt", "utf-8");
      })
      .then((data) => {
        console.log("Filesname is read successfull");
        const fileName = data.split("\n").filter(Boolean);
        return Promise.all(
          fileName.map((file) => {
            return fs
              .unlink(file)
              .then(() => {
                console.log(`${file} is deleted successfull`);
              })
              .catch((err) => {
                console.log(`Error in deleting ${file}`, err);
              });
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("All Done");
      });
  };

  const readlipsum = (path) => {
    fs.readFile(path, "utf-8")
      .then((data) => {
        console.log("Lipsum file read successfully");
        const upperCaseContent = data.toUpperCase();
        storeUpperCaseContent(
          "../output/upperCaseContent.txt",
          upperCaseContent
        );
      })
      .catch((err) => {
        console.log("Error in reading lipsum file : ", err);
      });
  };

  readlipsum(lipsumFile);
};

module.exports.problem2 = problem2;
