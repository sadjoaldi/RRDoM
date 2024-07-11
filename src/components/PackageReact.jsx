/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import PackageListReact from "./PackageListReact";

function PackageReact() {
  const [packs, setPacks] = useState([]); // Modifier pour utiliser un tableau

  useEffect(() => {
    const url = "https://registry.npmjs.com/-/v1/search";

    const params = { text: "react, typescript", size: 20 };

    axios.get(url, { params }).then((response) => {
      const packageData = response.data.objects;

      console.log(packageData);
      const filteredPackages = packageData.filter(
        (pkg) =>
          pkg.package.name === "react" || pkg.package.name === "typescript"
      );

      const packagesToSet = filteredPackages.map((pkg) => ({
        name: pkg.package.name,
        description: pkg.package.description,
      }));

      if (packagesToSet.length) {
        setPacks(packagesToSet);
      }
    });
  }, [packs]);

  console.log(packs);

  return (
    <>
      {packs.length > 0 ? (
        packs.map((pack, index) => (
          <PackageListReact
            key={index}
            name={pack.name}
            description={pack.description}
          />
        ))
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default PackageReact;

// axios
// .get("https://registry.npmjs.com//-/v1/search?text=react&size=20")
// .then((response) => {
//   const reactData = response.data.objects;
//   // console.log(reactData);
//   const reactPackage = reactData.find(
//     (pkg) => pkg.package.name === "react"
//   );

//   if (reactPackage) {
//     setPacks({
//       name: reactPackage.package.name,
//       description: reactPackage.package.description,
//     });
//   }
//   // const packVersioin = Object.values(response.data["versions"]);
//   // const lastVersion = packVersioin[packVersioin.length - 1];

//   // setPacks({
//   //   name: lastVersion.name,
//   //   description: lastVersion.description,
//   // });
// });
