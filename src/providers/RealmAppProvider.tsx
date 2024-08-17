import { PropsWithChildren } from "react"
import Realm from "realm"
import { RealmProvider } from "@realm/react"

export default function RealmAppProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[]}>{children}</RealmProvider>
}
