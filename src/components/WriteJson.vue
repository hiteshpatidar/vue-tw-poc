<template>
  <div>
    <button @click="onClick">Write json</button>
  </div>
</template>

<script>
// import writeJsonFile from "write-json-file";
// import fs from "fs";
import { saveAs } from "file-saver";
import json from "../assets/testsuitelist.json";

export default {
  name: "WriteJson",
  data() {
    return {
      testSuiteList: json
    };
  },
  methods: {
    onClick() {
      let a = this.testSuiteList.testsuitelist.Suite;
      let chunk = a.splice(0, 10);
      // eslint-disable-next-line no-debugger
      debugger;
      console.log(chunk);
      chunk.forEach(element => {
        element.Cases.forEach(Case => {
          console.log(Case.name);
          // await writeJsonFile(element.name, element);
          // fs.writeFileSync(element.name + ".json", element);
          // await writeJsonFile("foo.json", { foo: true });
          let filename = Case.name + ".json";

          saveAs(
            new File([JSON.stringify(Case)], {
              type: "text/plain;charset=utf-8;"
            }),
            filename
          );
        });
      });

      //   let newArr = [];

      //   while (a.length > 0) {
      //     chunk = a.splice(0, 8);

      //     chunk.forEach(element => {
      //       console.log(element.name);
      //       // await writeJsonFile(element.name, element);
      //       // fs.writeFileSync(element.name + ".json", element);
      //       // await writeJsonFile("foo.json", { foo: true });
      //       let filename = element.name + ".json";

      //       saveAs(
      //         new File([JSON.stringify(element)], {
      //           type: "text/plain;charset=utf-8;"
      //         }),
      //         filename
      //       );
      //     });

      //     console.log(chunk);
      //   }

      //   this.testSuiteList.testsuitelist.Suite.forEach((element, index) => {
      //     console.log(element.name);
      //     // await writeJsonFile(element.name, element);
      //     // fs.writeFileSync(element.name + ".json", element);
      //     // await writeJsonFile("foo.json", { foo: true });
      //     let filename = element.name + ".json";

      //     if (index % 2 === 0) {
      //       // eslint-disable-next-line no-debugger
      //       debugger;
      //       saveAs(
      //         new File([JSON.stringify(element)], {
      //           type: "text/plain;charset=utf-8;"
      //         }),
      //         filename
      //       );
      //     }
      //   });
    }
  }
};
</script>

<style></style>
