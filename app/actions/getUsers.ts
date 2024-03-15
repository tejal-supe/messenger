import prima from "../../app/libs/prismaDb";

import getSession from "./getSession";

const getAllUsers = async () => {
  const session = await getSession();
  if (!session?.user?.email) {
    return [];
  }
  try {
    const allUsers = await prima.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });
    return allUsers;
  } catch (error: any) {
    return [];
  }
};
export default getAllUsers;
