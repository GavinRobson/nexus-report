import { Session } from "next-auth"
import { NewRiotAccountButton } from "@/components/settings/new-riot-account-button"

type Props = {
  session: Session
}

export const DefaultSettings = ({
  session,
}: Props) => {
  return (
    <div className='grid grid-cols-4 gap-x-4 mt-6'>
        <NewRiotAccountButton />
    </div>
  )
}