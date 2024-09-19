import { getUserById } from "@/data/user"

type Props = {
  userId: string | undefined
}

export const SettingsHeader = async ({
  userId
}: Props) => {
  const account = await getUserById(userId);

  if (!account) {
    return (
      <div className="flex flex-col w-[100%] max-w-[50%] m-auto mt-4">
        Error: No Account Found
      </div>
    )
  }
  const date = new Date(account.createdAt);
  const createdAt = `${date.toLocaleString()}`

  return (
    <div className="flex flex-col w-[100%] max-w-[50%] m-auto space-y-4 mt-4">
      <div className="w-full font-semibold text-2xl ">
        Settings
      </div>
      <div className="flex flex-col w-full bg-[#181a20] rounded-[.5rem] space-y-2">
        <span className="px-4 pt-4 font-semibold text-xl">
          {account.name}
        </span>
        <span className="px-4 text-sm pb-4">
          Account created {createdAt}
        </span>
      </div>

    {/* <div className="w-full h-20 pt-4 left-6 flex flex-col space-y-4 md:justify-normal justify-center">
      <span className="flex font-semibold text-2xl">Settings</span>
      <div className="flex font-">
        Hello
      </div>
    </div> */}
    </div>
  )
}