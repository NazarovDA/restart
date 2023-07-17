type Body = {
  jwtToken: string;
  filters: {
    where: {
      name: {
        value: string;
        matchMode: string;
      };
    };
    take: number;
    skip: number;
    orderBy: string;
  };
};

type Data = [
  data: {
    id: string;
    name: string;
  }[],
  counter: {
    _count: {
      id: number;
    };
  }
];

// type Data = (
//   | {
//       id: string;
//       name: string;
//     }[]
//   & {
//       _count: {
//         id: number;
//       };
//     }
// );

export default class APIHandler {
  static async getList(body: Body): Promise<Data> {
    return await $fetch("/api/admin/product/list", {
      body: body,
      method: "POST",
    });
  }
}

console.log(APIHandler);

// export default async function getList(body: Body): Promise<Data> {
// return await $fetch("/api/admin/product/list", {
// body: body,
// method: "POST",
// });
// }
